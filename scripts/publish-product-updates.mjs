// Runs only in the dedicated docs workflow. All service URLs and credentials
// come from repository/environment configuration, never from dispatch payloads.
import { readFile, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { generate } from "./product-updates.mjs";
import { publishDocs } from "./product-update-publication.mjs";
const generation = process.env.PUBLICATION_GENERATION;
if (!/^\d+$/.test(generation ?? ""))
  throw new Error("Invalid publication generation");
const base = process.env.PRODUCT_UPDATES_CORE_URL?.replace(/\/$/, "");
const secret = process.env.PRODUCT_UPDATES_SERVICE_TOKEN;
const repo = process.env.GITHUB_REPOSITORY;
if (!base || !secret || !repo || !process.env.PRODUCT_UPDATES_DOCS_URL)
  throw new Error("Publishing configuration is incomplete");
const service = async (path, method = "GET", body) => {
  const res = await fetch(`${base}/integrations/product-updates/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(20000),
  });
  if (res.status === 409)
    throw Object.assign(
      new Error("Publication superseded or awaiting source reconciliation"),
      { status: 409 },
    );
  if (!res.ok) throw new Error(`Publishing service returned ${res.status}`);
  return res.json();
};
const gh = (args) => {
  try {
    return JSON.parse(
      execFileSync("gh", ["api", ...args], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      }),
    );
  } catch (error) {
    // Only a genuine not-found response permits object creation. Permission or
    // network failures must not be mistaken for a missing branch/file.
    if (/HTTP 404/.test(String(error.stderr))) error.status = 404;
    throw error;
  }
};
const ghBody = (endpoint, body, method = "POST") =>
  JSON.parse(
    execFileSync("gh", ["api", endpoint, "--method", method, "--input", "-"], {
      input: JSON.stringify(body),
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    }),
  );
const mode = process.argv[2];
if (mode === "fail") {
  await service(`deployments/${generation}`, "POST", { state: "failure" });
  process.exit(0);
}
if (mode === "generate") {
  const manifest = await service(`manifests/${generation}`);
  await writeFile(".product-update-manifest.json", JSON.stringify(manifest));
  await generate(".product-update-manifest.json", "changelog.mdx");
} else if (mode === "publish") {
  const manifest = JSON.parse(
    await readFile(".product-update-manifest.json", "utf8"),
  );
  await publishDocs({
    generation,
    manifest,
    content: (await readFile("changelog.mdx")).toString("base64"),
    repo,
    baseBranch: process.env.PRODUCT_UPDATES_DOCS_BRANCH,
    autoMerge: process.env.PRODUCT_UPDATES_AUTO_MERGE === "true",
    runId: process.env.GITHUB_RUN_ID,
    checkoutHead: execFileSync("git", ["rev-parse", "HEAD"], {
      encoding: "utf8",
    }).trim(),
    gh,
    ghBody,
    service,
    merge: (number) =>
      execFileSync(
        "gh",
        ["pr", "merge", String(number), "--repo", repo, "--auto", "--squash"],
        { stdio: "inherit" },
      ),
    fetchPage: () =>
      fetch(
        `${process.env.PRODUCT_UPDATES_DOCS_URL.replace(/\/$/, "")}/changelog`,
        {
          headers: { "Cache-Control": "no-cache" },
          signal: AbortSignal.timeout(20000),
        },
      ),
    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  });
} else throw new Error("Use generate or publish");
