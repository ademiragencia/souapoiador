import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const func = join(root, ".vercel/output/functions/__server.func");

if (!existsSync(func)) {
  console.log("[copy-vercel-runtime] no Vercel function output — skip");
  process.exit(0);
}

const tslibSrc = join(root, "node_modules/tslib");
const tslibDests = [
  join(func, "node_modules/tslib"),
  join(func, "_libs/node_modules/tslib"),
];

if (!existsSync(tslibSrc)) {
  console.error("[copy-vercel-runtime] node_modules/tslib is missing");
  process.exit(1);
}

for (const dest of tslibDests) {
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(tslibSrc, dest, { recursive: true });
}

const pgliteDist = join(root, "node_modules/@electric-sql/pglite/dist");
const libs = join(func, "_libs");
mkdirSync(libs, { recursive: true });
for (const file of ["pglite.data", "pglite.wasm", "initdb.wasm"]) {
  const src = join(pgliteDist, file);
  if (existsSync(src)) cpSync(src, join(libs, file));
}

console.log("[copy-vercel-runtime] packed tslib + pglite wasm into the serverless function");
