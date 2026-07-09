import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const serverDir = resolve(process.cwd(), 'dist/server');
const serverIndexPath = resolve(serverDir, 'index.mjs');
const outputPath = resolve(serverDir, 'server.js');

if (!existsSync(serverIndexPath)) {
  throw new Error('Expected dist/server/index.mjs to exist after the build.');
}

const serverIndex = readFileSync(serverIndexPath, 'utf8');

// Find augmentReq function by its signature (flexible whitespace), then use brace-counting
// to find the full function body regardless of whitespace or nested braces
const sigMatch = serverIndex.match(/function\s+augmentReq\s*\(\s*cfReq\s*,\s*ctx\s*\)/);

if (!sigMatch) {
  console.warn("⚠️ Could not find augmentReq function in dist/server/index.mjs — skipping Cloudflare patch");
} else {
  const start = sigMatch.index;
  const bodyOpen = serverIndex.indexOf('{', start);
  if (bodyOpen === -1) {
    console.warn("⚠️ Could not find opening brace of augmentReq — skipping patch");
  } else {
    // Brace-counting to find the matching closing brace
    let depth = 1;
    let pos = bodyOpen + 1;
    while (depth > 0 && pos < serverIndex.length) {
      if (serverIndex[pos] === '{') depth++;
      else if (serverIndex[pos] === '}') depth--;
      pos++;
    }
    if (depth !== 0) {
      console.warn("⚠️ Could not find matching closing brace of augmentReq — skipping patch");
    } else {
      const oldFnFull = serverIndex.substring(start, pos);
      const replacement = `function augmentReq(cfReq, ctx) {\n  const req = cfReq;\n  Object.defineProperty(req, "ip", { configurable: true, enumerable: true, writable: true, value: cfReq.headers.get("cf-connecting-ip") || void 0 });\n  if (!req.runtime) {\n    Object.defineProperty(req, "runtime", { configurable: true, enumerable: true, writable: true, value: { name: "cloudflare" } });\n  }\n  req.runtime.cloudflare = {\n    ...(req.runtime?.cloudflare ?? {}),\n    ...ctx\n  };\n  Object.defineProperty(req, "waitUntil", { configurable: true, enumerable: true, writable: true, value: ctx.context?.waitUntil?.bind(ctx.context) });\n}`;
      const patched = serverIndex.replace(oldFnFull, replacement);
      if (patched === serverIndex) {
        console.warn("⚠️ Failed to patch augmentReq in dist/server/index.mjs — skipping");
      } else {
        writeFileSync(serverIndexPath, patched);
        console.log("✅ Patched augmentReq in dist/server/index.mjs");
      }
    }
  }
}

mkdirSync(serverDir, { recursive: true });
writeFileSync(
  outputPath,
  [
    "import handler from './index.mjs';",
    "",
    "export default {",
    "  async fetch(request, env, ctx) {",
    "    const runtimeEnv = env ?? {};",
    "    const runtimeCtx = ctx ?? {};",
    "    const safeEnv = { ...runtimeEnv, ASSETS: runtimeEnv.ASSETS ?? { fetch: async () => new Response(null, { status: 404 }) } };",
    "    return handler.fetch(request, safeEnv, runtimeCtx);",
    "  },",
    "};",
    "",
  ].join('\n'),
);
console.log(`Prepared preview server entry at ${outputPath}`);
