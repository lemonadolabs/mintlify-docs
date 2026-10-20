import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const escape = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/[<>{}`\\]/g, (c) => `&#${c.codePointAt(0)};`);
const plain = (value) => escape(value).replace(/([*_\[\]#])/g, "\\$1");
export function safeLink(value) {
  if (typeof value !== "string" || /[\s\x00-\x1f<>"{}\\]/.test(value))
    throw new Error("Invalid link");
  if (/^\/(?!\/)/.test(value) || /^#[a-z0-9-]+$/i.test(value)) return value;
  const u = new URL(value);
  if (u.protocol !== "https:" || u.username || u.password)
    throw new Error("Links must use HTTPS");
  return value.replace(/\(/g, "%28").replace(/\)/g, "%29");
}
const jsxValue = (value) => JSON.stringify(value).replace(/</g, "\\u003c").replace(/>/g, "\\u003e");
const attribute = (value) => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export function imageMarkup(block) {
  if (!block.url || !block.alt?.trim()) throw new Error("Image URL and alt text are required");
  let src;
  let source;
  try { source = new URL(block.sourceUrl || block.url); } catch { /* Repository-relative images use Mintlify's optimizer. */ }
  const dimensions = source?.pathname.match(/-([1-9]\d*)x([1-9]\d*)\.[a-z0-9]+$/i)
    ?? block.asset?._ref?.match(/-([1-9]\d*)x([1-9]\d*)-[a-z0-9]+$/i);
  let size = "", responsive = "";
  if (dimensions) {
    const width = Number(dimensions[1]), height = Number(dimensions[2]);
    if (width > 16384 || height > 16384 || width * height > 40000000) throw new Error("Invalid image dimensions");
    size = ` width="${width}" height="${height}"`;
    if (source?.protocol === "https:" && source.host === "cdn.sanity.io" && !source.username && !source.password && !source.search && !source.hash && /^\/images\/[a-z0-9_-]+\/[a-z0-9_-]+\/[a-z0-9]+-\d+x\d+\.(png|jpe?g|webp|avif)$/i.test(source.pathname)) {
      const variant = (w) => { const url = new URL(source); url.search = new URLSearchParams({ w: String(w), fit: "max", auto: "format", q: "85" }).toString(); return url.toString(); };
      const widths = [...new Set([480, 768, 1200, 1600].filter(w => w < width).concat(Math.min(width, 1600)))].sort((a, b) => a - b);
      src = variant(Math.min(width, 1200));
      responsive = ` srcSet="${attribute(widths.map(w => `${variant(w)} ${w}w`).join(", "))}" sizes="(max-width: 768px) calc(100vw - 48px), 720px"`;
    }
  }
  // Validate the URL that will actually be rendered. A verified immutable CMS
  // origin can supply docs even when the app's owned copy is local-only.
  src ??= safeLink(block.url);
  // Literal attributes also survive Mintlify's RSS HTML serializer.
  return `<img src="${attribute(src)}" alt="${attribute(block.alt)}" loading="lazy" decoding="async"${size}${responsive} />`;
}
export function portableText(blocks) {
  if (!Array.isArray(blocks) || !blocks.length)
    throw new Error("Release notes are required");
  return blocks
    .map((block) => {
      if (block._type === "image") {
        return imageMarkup(block);
      }
      if (block._type !== "block" || !Array.isArray(block.children))
        throw new Error("Unsupported release-note block");
      const defs = new Map((block.markDefs ?? []).map((d) => [d._key, d]));
      const content = block.children
        .map((span) => {
          if (span._type !== "span" || typeof span.text !== "string")
            throw new Error("Unsupported text");
          let text = plain(span.text);
          for (const mark of span.marks ?? []) {
            if (mark === "strong") text = `**${text}**`;
            else if (mark === "em") text = `_${text}_`;
            else {
              const link = defs.get(mark);
              if (link?._type !== "link")
                throw new Error("Unsupported text annotation");
              text = `[${text}](${safeLink(link.href)})`;
            }
          }
          return text;
        })
        .join("");
      if (block.listItem) {
        if (
          !["bullet", "number"].includes(block.listItem) ||
          (block.level ?? 1) !== 1
        )
          throw new Error("Only single-level lists are supported");
        return `${block.listItem === "number" ? "1." : "-"} ${content}`;
      }
      if (!["normal", "h3", "h4"].includes(block.style ?? "normal"))
        throw new Error("Unsupported heading style");
      return `${block.style === "h3" ? "### " : block.style === "h4" ? "#### " : ""}${content}`;
    })
    .join("\n\n");
}
export function renderManifest(manifest) {
  if (
    !/^\d+$/.test(String(manifest.generation)) ||
    !/^[a-f0-9]{64}$/.test(manifest.version) ||
    !Array.isArray(manifest.updates)
  )
    throw new Error("Invalid publication manifest");
  // The version is a cross-system content marker. Core also verifies this marker
  // at the configured public docs URL before activating an announcement.
  const used = new Set();
  const days = new Map();
  for (const update of [...manifest.updates].sort(
    (a, b) =>
      b.releaseDate.localeCompare(a.releaseDate) ||
      a.slug.localeCompare(b.slug),
  )) {
    if (
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(update.slug) ||
      used.has(update.slug)
    )
      throw new Error("Duplicate or invalid release slug");
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(update.releaseDate) ||
      new Date(`${update.releaseDate}T00:00:00Z`).toISOString().slice(0, 10) !==
        update.releaseDate
    )
      throw new Error("Invalid release date");
    if (!update.title?.trim() || !update.summary?.trim())
      throw new Error("Title and summary are required");
    used.add(update.slug);
    const group = days.get(update.releaseDate) ?? [];
    group.push(update);
    days.set(update.releaseDate, group);
  }
  const groups = [...days];
  const rendered = groups
    .map(([day, updates]) => {
      const label = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeZone: "UTC",
      }).format(new Date(`${day}T00:00:00Z`));
      const rss = {
        title: updates.map((u) => u.title).join("; "),
        description: updates.map((u) => u.summary).join(" "),
        date: day,
      };
      // JSON values are encoded inside generated JSX, not interpolated as code.
      // Mintlify's RSS extractor expects identifier keys in the JSX object.
      // Only fixed keys are code; every editorial value is JSON-encoded.
      const prop = `{ title: ${jsxValue(rss.title)}, description: ${jsxValue(rss.description)}, date: ${jsxValue(rss.date)} }`;
      return `<Update label=${JSON.stringify(label)} rss={${prop}}>\n${updates
        .map(
          (u) =>
            `  <span id="release-${u.slug}" />\n\n  ## ${plain(u.title)}\n\n${portableText(
              u.body,
            )
              .split("\n")
              .map((l) => `  ${l}`)
              .join("\n")}`,
        )
        .join("\n\n")}\n</Update>`;
    });
  const anchors = groups.slice(10).map(([day, updates]) => {
    const date = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${day}T00:00:00Z`)).toLowerCase().replace(/,/g, "").replace(/ /g, "-");
    return [date, ...updates.map(u => `release-${u.slug}`)];
  });
  const feed = rendered.slice(0, 10).join("\n\n") + (rendered.length > 10 ? `\n\n<ChangelogArchive anchors={${jsxValue(anchors)}}>\n${rendered.slice(10).join("\n\n")}\n</ChangelogArchive>` : "");
  const imports = rendered.length > 10 ? 'import { ChangelogArchive } from "/snippets/changelog-archive.jsx"\n\n' : "";
  // RSS discovers top-level Update nodes only. Keep the marker as a sibling,
  // not a wrapper; the feed includes the same ten recent dates as the page.
  return `---\ntitle: "Changelog"\ndescription: "New features, improvements, and fixes in Lemonado."\nicon: "newspaper"\nmode: "wide"\nhideFooterPagination: true\nrss: true\n---\n\n${imports}{/* Generated from approved product updates. Edit content in the CMS. */}\n<span id="changelog-feed" />\n<span id="publication-${manifest.version}" />\n\n${feed}\n`;
}
export async function generate(input, output) {
  const manifest = JSON.parse(await readFile(input, "utf8"));
  const mdx = renderManifest(manifest);
  await writeFile(output, mdx);
  return { generation: manifest.generation, version: manifest.version };
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const [input, output = "changelog.mdx"] = process.argv.slice(2);
  if (!input)
    throw new Error(
      "Usage: node scripts/product-updates.mjs manifest.json [changelog.mdx]",
    );
  console.log(JSON.stringify(await generate(input, output)));
}
