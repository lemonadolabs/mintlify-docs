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
