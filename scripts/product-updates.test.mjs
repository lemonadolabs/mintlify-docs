import test from "node:test";
import assert from "node:assert/strict";
import { renderManifest, portableText, safeLink, imageMarkup } from "./product-updates.mjs";
const body = (text) => [
  {
    _type: "block",
    style: "normal",
    children: [{ _type: "span", text, marks: [] }],
  },
];
const entry = {
  slug: "pdf-exports",
  releaseDate: "2026-10-15",
  title: "PDF exports",
  summary: "Download a PDF",
  body: body("Open Share → Export as PDF."),
};
const manifest = (updates) => ({
  generation: "1",
  version: "a".repeat(64),
  updates,
});
test("same-day updates share a date anchor and retain individual stable anchors", () => {
  const out = renderManifest(
    manifest([entry, { ...entry, slug: "filters", title: "Filters" }]),
  );
  assert.equal(out.match(/<Update /g).length, 1);
  assert.match(out, /release-pdf-exports/);
  assert.match(out, /release-filters/);
  assert.match(out, /October 15, 2026/);
  assert.match(out, /newspaper/);
  assert.match(out, /rss=/);
});
test("editor content cannot inject MDX components or expressions", () => {
  const out = renderManifest(
    manifest([
      {
        ...entry,
        title: "<script>{bad}</script>",
        body: body('{process.env.SECRET}\n<iframe src="evil" />'),
      },
    ]),
  );
  assert.ok(!out.includes("<script>"));
  assert.ok(!out.includes("{process.env"));
  assert.ok(!out.includes("<iframe"));
});
test("rejects unsupported blocks, duplicate slugs and unsafe URLs", () => {
  assert.throws(() => portableText([{ _type: "html", html: "<script />" }]));
  assert.throws(() => renderManifest(manifest([entry, entry])));
  for (const url of [
    "javascript:alert(1)",
    "//evil.test",
    "https://user:pass@example.test",
    "/x\\evil",
  ])
    assert.throws(() => safeLink(url));
  assert.equal(safeLink("/studio"), "/studio");
});
test("corrections keep the explicit anchor while title changes", () => {
  const out = renderManifest(
    manifest([{ ...entry, title: "A revised title" }]),
  );
  assert.match(out, /id="release-pdf-exports"/);
});

test("verified CMS originals produce bounded responsive images without upscaling", () => {
  const image = imageMarkup({ url: "https://assets.example.test/owned.png", sourceUrl: "https://cdn.sanity.io/images/project/production/abcdef-2400x1500.png", alt: "Studio preview" });
  assert.match(image, /w=1200&amp;fit=max&amp;auto=format&amp;q=85/);
  assert.match(image, /480w.*768w.*1200w.*1600w/);
  assert.match(image, /width="2400" height="1500"/);
  assert.match(image, /loading="lazy" decoding="async"/);
  const small = imageMarkup({ url: "https://cdn.sanity.io/images/project/production/abcdef-320x200.png", alt: "Small image" });
  assert.match(small, /320w/);
  assert.ok(!small.includes("480w"));
});
test("untrusted origins cannot replace owned assets with optimized URLs", () => {
  for (const sourceUrl of ["https://cdn.sanity.io.evil.test/images/p/d/abc-1200x800.png", "https://user@cdn.sanity.io/images/p/d/abc-1200x800.png", "https://cdn.sanity.io/images/p/d/abc-1200x800.png?other=1", "https://cdn.sanity.io/files/p/d/abc-1200x800.png"]) {
    const image = imageMarkup({ url: "https://assets.example.test/owned.png", sourceUrl, alt: "Preview" });
    assert.match(image, /src="https:\/\/assets.example.test\/owned.png"/);
    assert.ok(!image.includes("srcSet"));
  }
});
test("repository images stay local and image descriptions cannot inject MDX", () => {
  const alt = '\" /><script>{bad}</script>';
  const image = imageMarkup({ url: "/images/beta.png", alt });
  assert.match(image, /src="\/images\/beta.png"/);
  assert.ok(!image.includes("<script>"));
  assert.match(image, /&lt;script&gt;/);
  assert.throws(() => imageMarkup({ url: "javascript:alert(1)", alt: "Invalid" }));
});
test("long archives keep ten date groups in initial content and preserve RSS metadata and anchors", () => {
  const entries = Array.from({ length: 35 }, (_, i) => ({ ...entry, slug: `update-${i}`, releaseDate: new Date(Date.UTC(2026, 9, 19 - i)).toISOString().slice(0, 10) }));
  entries.push({ ...entries[10], slug: "same-day-update" });
  const out = renderManifest(manifest(entries));
  const [initial, older] = out.split("<ChangelogArchive anchors=");
  assert.equal(initial.match(/<Update /g).length, 10);
  assert.equal(older.match(/<Update /g).length, 25);
  assert.equal(out.match(/rss=\{/g).length, 35);
  assert.match(out, /rss=\{\{ title: "PDF exports", description: "Download a PDF", date: "2026-10-19" \}\}/);
  assert.ok(!out.includes('<div id="changelog-feed">'));
  assert.ok(initial.includes(`publication-${"a".repeat(64)}`));
  assert.match(older, /\["october-9-2026","release-same-day-update","release-update-10"\]/);
  assert.match(older, /id="release-update-34"/);
  assert.equal((out.match(/id="release-same-day-update"/g) || []).length, 1);
  assert.ok(!renderManifest(manifest(entries.slice(0, 10))).includes("ChangelogArchive"));
});
test("verified CMS image origins work independently of a loopback app copy", () => {
  const image=imageMarkup({url:"http://localhost:41300/owned.png", sourceUrl:"https://cdn.sanity.io/images/project/product-updates-test/abcdef-480x240.png",alt:"Synthetic test image"});
  assert.match(image,/src="https:\/\/cdn\.sanity\.io\/images\/project\/product-updates-test\/abcdef-480x240\.png\?/);
  assert.doesNotMatch(image,/localhost/);
  assert.throws(()=>imageMarkup({url:"http://localhost:41300/owned.png",sourceUrl:"https://example.com/abcdef-480x240.png",alt:"Synthetic test image"}),/HTTPS/);
});
