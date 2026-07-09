import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const serverDir = resolve(process.cwd(), 'dist/server');
const serverIndexPath = resolve(serverDir, 'index.mjs');
const outputPath = resolve(serverDir, 'server.js');

if (!existsSync(serverIndexPath)) {
  throw new Error('Expected dist/server/index.mjs to exist after the build.');
}

const serverIndex = readFileSync(serverIndexPath, 'utf8');

// Check the expected function definition still matches before patching
const oldFn = `function augmentReq(cfReq, ctx) {\n  const req = cfReq;\n  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;\n  req.runtime ??= { name: "cloudflare" };\n  req.runtime.cloudflare = {\n    ...req.runtime.cloudflare,\n    ...ctx\n  };\n  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);\n}`;

if (!serverIndex.includes(oldFn)) {
  console.error("❌ Could not find the expected augmentReq function in dist/server/index.mjs — the Cloudflare patch would silently do nothing");
  process.exit(1);
}

const patched = serverIndex.replace(
  oldFn,
  `function augmentReq(cfReq, ctx) {\n  const req = cfReq;\n  Object.defineProperty(req, "ip", { configurable: true, enumerable: true, writable: true, value: cfReq.headers.get("cf-connecting-ip") || void 0 });\n  if (!req.runtime) {\n    Object.defineProperty(req, "runtime", { configurable: true, enumerable: true, writable: true, value: { name: "cloudflare" } });\n  }\n  req.runtime.cloudflare = {\n    ...(req.runtime?.cloudflare ?? {}),\n    ...ctx\n  };\n  Object.defineProperty(req, "waitUntil", { configurable: true, enumerable: true, writable: true, value: ctx.context?.waitUntil?.bind(ctx.context) });\n}`,
);

if (patched === serverIndex) {
  console.error("❌ Failed to patch augmentReq in dist/server/index.mjs — replacement produced no change");
  process.exit(1);
}

writeFileSync(serverIndexPath, patched);

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
