import test from "node:test";
import assert from "node:assert/strict";
import { publishDocs } from "./product-update-publication.mjs";
const missing = () => Object.assign(new Error("Not found"), { status: 404 });
function fixture(overrides = {}) {
  const writes = [],
    callbacks = [],
    reads = [];
  const generation = "2",
    version = "a".repeat(64),
    content = Buffer.from("approved notes").toString("base64");
  const opts = {
    generation,
    manifest: { version },
    content,
    repo: "example/docs",
    baseBranch: "",
    autoMerge: false,
    runId: "test-run",
    checkoutHead: "base-sha",
    gh(args) {
      const path = args[0];
      reads.push(path);
      if (path === "repos/example/docs")
        return { default_branch: "main", owner: { login: "example" } };
      if (path.includes("/pulls?")) return [];
      if (path.endsWith("/git/ref/heads/main"))
        return { object: { sha: "base-sha" } };
      if (path.includes("/git/ref/heads/automation/")) throw missing();
      if (path.includes("/contents/"))
        return {
          sha: "file-sha",
          content: Buffer.from("old notes").toString("base64"),
        };
      if (path.endsWith("/pulls/7"))
        return { merged: true, merge_commit_sha: "merged-sha" };
      throw new Error(`Unexpected GitHub read ${path}`);
    },
    ghBody(path, body, method) {
      writes.push({ path, body, method });
      return { number: 7 };
    },
    async service(path, method, body) {
      callbacks.push({ path, method, body });
      return {};
    },
    merge() {
      throw new Error("Automatic merge is disabled");
    },
    async fetchPage() {
      return {
        ok: true,
        text: async () => `<span id="publication-${version}" />`,
      };
    },
    async sleep() {},
    ...overrides,
  };
  return { opts, writes, callbacks, reads };
}
test("each release gets a fresh generation branch from the validated target", async () => {
  const f = fixture();
  await publishDocs(f.opts);
  assert.equal(f.writes[0].body.ref, "refs/heads/automation/product-updates-2");
  assert.equal(f.writes[0].body.sha, "base-sha");
  assert.equal(
    f.writes.find((w) => w.path.endsWith("/pulls")).body.base,
    "main",
  );
  assert.equal(f.callbacks.at(-1).body.commit, "merged-sha");
  assert.equal(f.callbacks.at(-1).body.state, "success");
});
test("a retry after a lost merge response reuses the merged PR without writes", async () => {
  const f = fixture(),
    original = f.opts.gh;
  f.opts.gh = (args) => {
    if (args[0].includes("/pulls?"))
      return [
        {
          number: 7,
          merged_at: "2026-10-16",
          merge_commit_sha: "merged-sha",
          state: "closed",
        },
      ];
    if (args[0].includes("/contents/")) return { content: f.opts.content };
    return original(args);
  };
  await publishDocs(f.opts);
  assert.deepEqual(f.writes, []);
  assert.equal(f.callbacks.at(-1).body.commit, "merged-sha");
  assert.ok(!f.callbacks.some((c) => c.body?.state === "awaiting_approval"));
});
test("a moved target branch fails before creating or modifying anything", async () => {
  const f = fixture({ checkoutHead: "old-base" });
  await assert.rejects(publishDocs(f.opts), /branch changed during validation/);
  assert.deepEqual(f.writes, []);
});
test("permission failures do not trigger branch or file creation", async () => {
  const f = fixture(),
    original = f.opts.gh;
  f.opts.gh = (args) => {
    if (args[0].includes("/git/ref/heads/automation/"))
      throw Object.assign(new Error("Forbidden"), { status: 403 });
    return original(args);
  };
  await assert.rejects(publishDocs(f.opts), /Forbidden/);
  assert.deepEqual(f.writes, []);
});
test("a closed unmerged PR cannot silently create a replacement", async () => {
  const f = fixture(),
    original = f.opts.gh;
  f.opts.gh = (args) =>
    args[0].includes("/pulls?") ? [{ state: "closed" }] : original(args);
  await assert.rejects(publishDocs(f.opts), /Reopen it/);
  assert.deepEqual(f.writes, []);
});
test("a stale deployed page never acknowledges success", async () => {
  const f = fixture({
    fetchPage: async () => ({
      ok: true,
      text: async () => '<span id="publication-old" />',
    }),
  });
  await assert.rejects(publishDocs(f.opts), /not visible/);
  assert.ok(!f.callbacks.some((c) => c.body?.state === "success"));
});
test("supersession stops external writes before publication", async () => {
  const f = fixture({
    service: async () => {
      throw new Error("superseded");
    },
  });
  await assert.rejects(publishDocs(f.opts), /superseded/);
  assert.deepEqual(f.writes, []);
});
test("merged content must match the immutable generation on recovery", async () => {
  const f = fixture(),
    original = f.opts.gh;
  f.opts.gh = (args) =>
    args[0].includes("/pulls?")
      ? [{ merged_at: "today", merge_commit_sha: "wrong-sha" }]
      : original(args);
  await assert.rejects(publishDocs(f.opts), /does not match/);
  assert.ok(!f.callbacks.some((c) => c.body?.state === "success"));
});

test("new generations retire only older integration PRs in their own repository", async () => {
  const f = fixture(),
    original = f.opts.gh;
  f.opts.gh = (args) =>
    args[0].includes("&per_page=100")
      ? [
          {
            number: 1,
            head: {
              ref: "automation/product-updates-1",
              repo: { full_name: "example/docs" },
            },
          },
          {
            number: 2,
            head: {
              ref: "automation/product-updates-1",
              repo: { full_name: "someone/fork" },
            },
          },
          {
            number: 3,
            head: {
              ref: "unrelated-change",
              repo: { full_name: "example/docs" },
            },
          },
          {
            number: 4,
            head: {
              ref: "automation/product-updates-3",
              repo: { full_name: "example/docs" },
            },
          },
        ]
      : original(args);
  await publishDocs(f.opts);
  assert.deepEqual(
    f.writes.filter((w) => w.method === "PATCH").map((w) => w.path),
    ["repos/example/docs/pulls/1"],
  );
});
test("supersession during approval closes its pending publication PR", async () => {
  const f = fixture(),
    original = f.opts.gh;
  f.opts.gh = (args) =>
    args[0].includes("state=all")
      ? [{ number: 7, state: "open" }]
      : original(args);
  let checks = 0;
  f.opts.service = async (path) => {
    if (path.startsWith("manifests/") && ++checks === 3)
      throw Object.assign(new Error("superseded"), { status: 409 });
  };
  await assert.rejects(publishDocs(f.opts), /superseded/);
  assert.ok(
    f.writes.some(
      (w) =>
        w.path === "repos/example/docs/pulls/7" && w.body.state === "closed",
    ),
  );
});
