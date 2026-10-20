# Lemonado documentation

Short, screenshot-led guides for marketing teams and agencies, built with Mintlify.

## Preview

Install the [Mintlify CLI](https://www.npmjs.com/package/mint), then run this from the repository root:

```sh
mint dev
```

Open the local address printed by the command.

## Edit a guide

- Write in everyday language, using “you” and short sentences.
- Use the exact labels shown in Lemonado, such as **Routines** and **Installed**.
- Give each page one clear job. Prefer a short example to a long explanation.
- Capture real product screens with demo data. Avoid private details, errors, and loading states.
- Store screenshots in `images/screenshots/` and give each image useful alt text.
- Keep navigation and redirects in `docs.json` up to date.
- Keep internal notes under `drafts/`, which is excluded from the site.

## Check before publishing

```sh
mint validate
mint broken-links
mint a11y
```

Also review the rendered pages on desktop and mobile, in light and dark mode. Check that screenshots match the current interface and remain readable when expanded.

## Publish

After this repository and branch are connected in the Mintlify dashboard, pushing changes to that branch triggers a deployment. Check the deployment status in Mintlify before sharing the live site.

## Publish a product update before CMS cutover

These manual steps apply until the CMS integration is activated. After cutover,
author and correct release content in Sanity; the workflow owns `changelog.mdx`.
Other documentation pages keep their existing Mintlify editing workflow.

1. Add a new `Update` at the top of `changelog.mdx`, using the actual release date. Keep each label unique; it becomes the stable URL fragment. Set the RSS title, description, and date explicitly so later edits do not change the release date.
2. Give each entry a descriptive title and one short paragraph explaining the customer-visible change. Add one screenshot or short demo only when it helps explain the change. Group smaller changes into brief **Improvements** and **Fixes** bullets when needed, and include an optional link to the relevant guide. Avoid repeating the summary, adding category labels, or including empty sections. Do not publish planned or internal-only work.
3. Run the checks above and open the entry's permalink in the preview.
4. Publish and verify the docs entry before publishing its in-app announcement. Copy its permalink into the announcement's **Read release notes** button; published announcements appear in **What's new** automatically for their audience.
5. Preview the popup and check its audience and delivery summary before publishing. Older published announcements appear automatically too, subject to their current audience and publication state.

The initial history covers the October 6 beta announcement and selected changes in the October 15 production release. Dates refer to release promotions, not pull request merge dates. Add the What's new announcement under its actual rollout date when this feature ships.

## CMS publishing integration

After the product-update integration is deployed and initial history is linked, Sanity owns changelog content. `scripts/product-updates.mjs` exports the immutable manifest supplied by Core, and `.github/workflows/product-updates.yml` validates it, creates/updates a publishing PR, waits for the configured approval policy, and verifies the exact live content before acknowledging the app update.

Keep the target branch, Core/docs URLs and tested `MINT_CLI_VERSION` in the `product-update-publishing` environment variables. Store the integration credential and authorized automation GitHub token in environment secrets. Automatic merge is opt-in and never bypasses repository protections. Configure a verified automation identity before enabling production publishing.

The coordinated rollout is documented in the Core repository's `docs/product-updates-production-setup.md`; the website repository's `docs/buildkite-product-updates-handoff.md` describes successful-build draft creation and exact production-deployment confirmation. Hosted workflow/PR permissions and Mintlify deployment have not yet been verified by the local walkthrough. A merged docs PR is not sufficient: the workflow and Core must both observe the exact live content marker before the app draft can be sent. If approval outlasts the workflow wait, merge the existing PR and retry the same generation.

Run `node --test scripts/product-updates.test.mjs scripts/product-update-publication.test.mjs scripts/local-product-updates.test.mjs` for the exporter and publication recovery checks. Each generation gets its own automation branch. Retries reuse its existing pull request, including a merged one when the deployment acknowledgement was lost. If the target docs branch changes during validation, retry against its latest revision.

To review a fixture without changing the main changelog, run `node scripts/product-updates.mjs manifest.json changelog-preview.mdx` and inspect that route locally; remove the temporary page afterward.


### Local publishing test

Use `scripts/local-product-updates.mjs <private-local-config.json> --watch` with an isolated Core, a dataset ending in `-test` and a separate Mintlify preview. Core requires `ENVIRONMENT=local` and `PRODUCT_UPDATES_LOCAL_PUBLISHER=true`; this mode makes no GitHub calls and is rejected outside local/test configuration. Production keeps its GitHub and HTTPS requirements.

The private config contains `testOnly: true`, `dataset`, loopback `coreURL` and `docsURL` with explicit ports, the matching server-only `serviceToken`, `previewDirectory`, `docsContainer` and the installed `mintCLI` path. Keep it outside Git with owner-only permissions. The preview directory must contain `.local-product-updates-preview.json` with `testOnly: true` and the same `dataset`. It must be separate from this repository; the adapter refuses to overwrite this worktree's changelog.

The adapter consumes Core's durable pending generation, exports the real manifest, runs Mintlify validation and broken-link checks in the preview container, waits for its rendered publication marker and acknowledges a `local-preview` deployment. Core independently checks the page and current Sanity revision before activating What's new. The acknowledgement records this worktree's base SHA plus an explicitly local deployment ID; it is not a GitHub commit/deployment. This tests Sanity, Core, local Mintlify rendering and app delivery; it does not test GitHub permissions, PR approval or hosted Mintlify deployment.
