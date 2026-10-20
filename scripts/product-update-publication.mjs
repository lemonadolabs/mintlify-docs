// Orchestrates one immutable docs generation. Dependencies are injected so
// recovery and concurrency checks can run without creating GitHub objects.
export async function publishDocs({
  generation,
  manifest,
  content,
  repo,
  baseBranch,
  autoMerge,
  runId,
  checkoutHead,
  gh,
  ghBody,
  service,
  merge,
  fetchPage,
  sleep,
}) {
  await service(`manifests/${generation}`);
  const info = gh([`repos/${repo}`]);
  const target = baseBranch?.trim() || info.default_branch;
  const branch = `automation/product-updates-${generation}`;
  const query = `head=${encodeURIComponent(info.owner.login + ":" + branch)}&base=${encodeURIComponent(target)}&state=all`;
  const pulls = gh([`repos/${repo}/pulls?${query}`]);
  let pull =
    pulls.find((p) => p.merged_at) ?? pulls.find((p) => p.state === "open");
  if (!pull && pulls.length)
    throw new Error(
      "The publication pull request was closed. Reopen it before retrying.",
    );
  const fence = async () => {
    try {
      return await service(`manifests/${generation}`);
    } catch (error) {
      if (error.status === 409 && !merged && pull?.state === "open")
        ghBody(
          `repos/${repo}/pulls/${pull.number}`,
          { state: "closed" },
          "PATCH",
        );
      throw error;
    }
  };
  let merged = pull?.merged_at ? pull.merge_commit_sha : undefined;
  if (merged) {
    // A workflow can lose its response after merge. Resume deployment checks
    // against that commit rather than creating another PR from a merged branch.
    const file = gh([`repos/${repo}/contents/changelog.mdx?ref=${merged}`]);
    if (file.content.replace(/\s/g, "") !== content)
      throw new Error(
        "Merged publication content does not match this generation.",
      );
  } else {
    const head = gh([`repos/${repo}/git/ref/heads/${target}`]).object.sha;
    if (head !== checkoutHead)
      throw new Error(
        "The docs branch changed during validation. Retry against its latest revision.",
      );
    // A failed or superseded run may have left an older approval PR open.
    // Retire only this integration's older branches in this repository.
    for (let page = 1; ; page++) {
      const open = gh([
        `repos/${repo}/pulls?base=${encodeURIComponent(target)}&state=open&per_page=100&page=${page}`,
      ]);
      for (const previous of open) {
        const old = /^automation\/product-updates-(\d+)$/.exec(
          previous.head?.ref ?? "",
        );
        if (
          old &&
          BigInt(old[1]) < BigInt(generation) &&
          previous.head?.repo?.full_name?.toLowerCase() === repo.toLowerCase()
        ) {
          await fence();
          ghBody(
            `repos/${repo}/pulls/${previous.number}`,
            { state: "closed" },
            "PATCH",
          );
        }
      }
      if (open.length < 100) break;
    }
    let exists = true;
    try {
      gh([`repos/${repo}/git/ref/heads/${branch}`]);
    } catch (error) {
      if (error.status !== 404) throw error;
      exists = false;
    }
    if (!exists)
      ghBody(`repos/${repo}/git/refs`, {
        ref: `refs/heads/${branch}`,
        sha: head,
      });
    let file;
    try {
      file = gh([
        `repos/${repo}/contents/changelog.mdx?ref=${encodeURIComponent(branch)}`,
      ]);
    } catch (error) {
      if (error.status !== 404) throw error;
    }
    await fence();
    if (content !== (file?.content ?? "").replace(/\s/g, ""))
      ghBody(
        `repos/${repo}/contents/changelog.mdx`,
        {
          message: `Publish product updates\n\nmintlify-docs:\n- publish approved content generation ${generation}`,
          branch,
          content,
          ...(file ? { sha: file.sha } : {}),
        },
        "PUT",
      );
    pull ??= ghBody(`repos/${repo}/pulls`, {
      title: "Publish product updates",
      head: branch,
      base: target,
      body: "Publish the approved CMS release-note snapshot.\n\nThe publishing workflow validates MDX and links before updating this pull request. The matching in-app release remains gated until the exact content is visible on the public docs site.",
    });
    await service(`deployments/${generation}`, "POST", {
      state: "awaiting_approval",
    });
    if (autoMerge) merge(pull.number);
    for (let n = 0; n < 60; n++) {
      await fence();
      const p = gh([`repos/${repo}/pulls/${pull.number}`]);
      if (p.merged) {
        merged = p.merge_commit_sha;
        break;
      }
      if (p.state === "closed")
        throw new Error("Docs publication pull request was closed");
      await sleep(30000);
    }
    if (!merged)
      throw new Error(
        "Docs approval is still pending. Merge the publication pull request, then retry.",
      );
  }
  const expected = `id="publication-${manifest.version}"`;
  for (let n = 0; n < 60; n++) {
    await fence();
    const res = await fetchPage();
    if (res.ok && (await res.text()).includes(expected)) {
      await service(`deployments/${generation}`, "POST", {
        commit: merged,
        deployment: `github:${runId}`,
        state: "success",
      });
      return;
    }
    await sleep(15000);
  }
  throw new Error(
    "The exact release notes are not visible on the public docs site yet.",
  );
}
