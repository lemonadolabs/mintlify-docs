import { test } from "node:test";
import assert from "node:assert/strict";
import { loopbackOrigin, publishLocal } from "./local-product-updates.mjs";

test("local publisher rejects non-loopback targets", () => {
  assert.equal(loopbackOrigin("http://localhost:29301"), "http://localhost:29301");
  for (const raw of ["https://docs.lemonado.io", "http://localhost.evil.test:29301", "http://user@localhost:29301", "http://localhost", "http://localhost:29301/path"]) assert.throws(() => loopbackOrigin(raw));
});
const manifest = {generation:"1", version:"a".repeat(64), updates:[]};
function harness() {
  const order=[];
  return { order, options: {
    service: async (path, method, body) => { order.push([path,method,body]); return path==="local-publication" ? {generation:1,version:manifest.version} : manifest; },
    write: async content => { assert.match(content,/publication-aaaa/);order.push(["write"]); },
    validate: async()=>order.push(["validate"]), page:async()=>new Response(`<span id="publication-${manifest.version}"></span>`),
    commit:"a".repeat(40), sleep:async()=>{},
  }};
}
test("activation follows validation and the rendered docs marker", async () => {
  const {options,order}=harness();
  assert.equal((await publishLocal(options)).deployment,"local-preview");
  assert.deepEqual(order.map(x=>x[0]),["local-publication","manifests/1","local-publication","write","validate","deployments/1"]);
  assert.equal(order.at(-1)[2].state,"success");
});
test("wrong rendered version never acknowledges the app publication", async () => {
  const {options,order}=harness();options.page=async()=>new Response("old page");
  await assert.rejects(publishLocal(options),/did not render/);
  assert.ok(!order.some(x=>x[0]==="deployments/1"));
});
test("superseded generation never replaces the preview file", async () => {
  const {options,order}=harness();let count=0;
  const original=options.service;options.service=(...args)=>args[0]==="local-publication" && ++count===2 ? Promise.resolve({generation:2}) : original(...args);
  await assert.rejects(publishLocal(options),/superseded/);
  assert.ok(!order.some(x=>x[0]==="write"));
});
