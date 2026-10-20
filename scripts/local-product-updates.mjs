// Local integration adapter only. Uses the same Core manifest, exporter and
// deployment acknowledgement as the remote workflow, without GitHub writes.
import { readFile, writeFile, rename, realpath } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { renderManifest } from "./product-updates.mjs";

export function loopbackOrigin(raw) {
  const u = new URL(raw);
  if (u.protocol !== "http:" || !["localhost", "127.0.0.1"].includes(u.hostname) || !u.port || u.username || u.password || u.pathname !== "/" || u.search || u.hash) throw new Error("Local publisher requires an explicit loopback origin");
  return u.origin;
}

export async function publishLocal({ service, write, validate, page, commit, sleep }) {
  const pending = await service("local-publication");
  if (pending.state === "idle") return null;
  const generation = String(pending.generation);
  if (!/^[1-9]\d*$/.test(generation)) throw new Error("Invalid local generation");
  const manifest = await service(`manifests/${generation}`);
  if (String(manifest.generation) !== generation || manifest.version !== pending.version) throw new Error("Local manifest changed");
  const current = await service("local-publication");
  if (String(current.generation) !== generation) throw new Error("Local publication superseded");
  await write(renderManifest(manifest));
  await validate();
  for (let i = 0; i < 90; i++) {
    const res = await page();
    if (res.ok && (await res.text()).includes(`id="publication-${manifest.version}"`)) {
      await service(`deployments/${generation}`, "POST", { state: "success", commit, deployment: `local-preview:${generation}:${manifest.version}` });
      return { generation, version: manifest.version, deployment: "local-preview" };
    }
    await sleep(2000);
  }
  throw new Error("Local docs did not render the requested publication marker");
}

async function main() {
  const configPath = process.argv[2];
  if (!configPath || !["--once", "--watch"].includes(process.argv[3])) throw new Error("Usage: node scripts/local-product-updates.mjs <private-local-config.json> --once|--watch");
  const config = JSON.parse(await readFile(configPath, "utf8"));
  if (config.testOnly !== true || !config.dataset?.endsWith("-test") || (typeof config.serviceToken !== "string" || config.serviceToken.length < 32)) throw new Error("Only a configured test dataset is supported");
  const core = loopbackOrigin(config.coreURL), docs = loopbackOrigin(config.docsURL);
  const preview = await realpath(config.previewDirectory);
  const repository = await realpath(resolve(dirname(fileURLToPath(import.meta.url)), ".."));
  // Never replace the feature worktree's approved static changelog.
  const marker = JSON.parse(await readFile(resolve(preview, ".local-product-updates-preview.json"), "utf8"));
  if (preview === repository || marker.testOnly !== true || marker.dataset !== config.dataset) throw new Error("A separate marked local docs preview is required");
  const service = async (path, method = "GET", body) => {
    const res = await fetch(`${core}/integrations/product-updates/${path}`, { method, headers: { Authorization: `Bearer ${config.serviceToken}`, "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(20000) });
    if (!res.ok) throw new Error(`Local publishing service returned ${res.status}`);
    return res.json();
  };
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const commit = execFileSync("git", ["rev-parse", "HEAD"], {cwd: repository, encoding: "utf8"}).trim();
  do {
    try {
      const result = await publishLocal({ service, commit, sleep,
        write: async content => { const file = resolve(preview, "changelog.mdx"); await writeFile(`${file}.pending`, content); await rename(`${file}.pending`, file); },
        validate: async () => {
          // The already-running Mintlify preview owns its dependency runtime.
          for (const command of ["validate", "broken-links"]) execFileSync("docker", ["exec", config.docsContainer, "node", config.mintCLI, command], {stdio: ["ignore", "pipe", "pipe"]});
        },
        page: () => fetch(`${docs}/changelog`, { headers: {"Cache-Control":"no-cache"}, signal: AbortSignal.timeout(20000) }),
      });
      if (result) console.log(JSON.stringify(result));
    } catch (error) {
      console.error(error.message); // Never print config, requests or credentials.
      if (process.argv[3] === "--once") throw error;
    }
    if (process.argv[3] === "--once") break;
    await sleep(3000);
  } while (true);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
