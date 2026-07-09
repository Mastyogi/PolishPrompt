import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const contentPath = resolve(root, "src/lib/content.ts");
const outDir = resolve(root, "public");
const outPath = resolve(outDir, "sitemap.xml");

// ---------------------------------------------------------------------------
// 1. Parse content.ts to extract SITE_URL, PROMPTS ids, GUIDE_POSTS slugs
// ---------------------------------------------------------------------------

const src = readFileSync(contentPath, "utf-8");

// SITE_URL
const urlMatch = src.match(/export\s+const\s+SITE_URL\s*=\s*["'`]([^"'`]+)["'`]/);
if (!urlMatch) {
  console.error("❌ Could not find SITE_URL in content.ts");
  process.exit(1);
}
const SITE_URL = urlMatch[1];

// PROMPTS — extract id values from objects in the PROMPTS array
const promptIds = [];
const promptBlock = src.match(/export\s+const\s+PROMPTS[\s\S]*?\];/);
if (!promptBlock) {
  console.error("❌ Could not locate the PROMPTS array in content.ts");
  process.exit(1);
}
const idMatches = promptBlock[0].matchAll(/"id"\s*:\s*"(p\d+)"/g);
for (const m of idMatches) promptIds.push(m[1]);
if (promptIds.length === 0) {
  console.error("❌ No prompt ids found in the PROMPTS array — sitemap would be incomplete");
  process.exit(1);
}

// GUIDE_POSTS — extract slug values
const guideSlugs = [];
const guideBlock = src.match(/export\s+const\s+GUIDE_POSTS[\s\S]*?\];/);
if (!guideBlock) {
  console.error("❌ Could not locate the GUIDE_POSTS array in content.ts");
  process.exit(1);
}
const slugMatches = guideBlock[0].matchAll(/slug:\s*"([^"]+)"/g);
for (const m of slugMatches) guideSlugs.push(m[1]);
if (guideSlugs.length === 0) {
  console.error("❌ No guide slugs found in the GUIDE_POSTS array — sitemap would be incomplete");
  process.exit(1);
}

console.log(`Found ${promptIds.length} prompts and ${guideSlugs.length} guides for sitemap`);

// ---------------------------------------------------------------------------
// 2. Build the XML
// ---------------------------------------------------------------------------

const staticEntries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/library", changefreq: "weekly", priority: "0.95" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/guides", changefreq: "weekly", priority: "0.9" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },
  { path: "/subscribe", changefreq: "monthly", priority: "0.7" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

const promptEntries = promptIds.map((id) => ({
  path: `/library/${id}`,
  changefreq: "monthly",
  priority: "0.6",
}));

const guideEntries = guideSlugs.map((slug) => ({
  path: `/guides/${slug}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const entries = [...staticEntries, ...promptEntries, ...guideEntries];

const urls = entries
  .map(
    (e) =>
      `  <url>\n    <loc>${SITE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

// ---------------------------------------------------------------------------
// 3. Write to public/sitemap.xml
// ---------------------------------------------------------------------------

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, xml, "utf-8");

console.log(`✅ Wrote ${entries.length} URLs to ${outPath}`);
