/**
 * Post-build: inlines render-blocking CSS into each HTML file.
 * Eliminates one blocking network request (~160ms savings).
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const OUT_DIR = "out";
const cssDir = join(OUT_DIR, "_next", "static", "css");
const cssFiles = readdirSync(cssDir).filter((f) => f.endsWith(".css"));

if (cssFiles.length === 0) {
  console.log("No CSS files found, skipping.");
  process.exit(0);
}

const cssFileName = cssFiles[0];
const cssPath = `/_next/static/css/${cssFileName}`;
const cssContent = readFileSync(join(cssDir, cssFileName), "utf-8");

console.log(`Inlining ${cssFileName} (${(cssContent.length / 1024).toFixed(1)} KiB)...`);

function findHtml(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...findHtml(full));
    else if (entry.endsWith(".html")) results.push(full);
  }
  return results;
}

let count = 0;
for (const file of findHtml(OUT_DIR)) {
  let html = readFileSync(file, "utf-8");
  const linkTag = `<link rel="stylesheet" href="${cssPath}" data-precedence="next"/>`;
  if (!html.includes(linkTag)) continue;

  html = html.replace(
    linkTag,
    `<style data-precedence="next">${cssContent}</style>` +
      `<link rel="preload" href="${cssPath}" as="style" onload="this.rel='stylesheet'"/>` +
      `<noscript><link rel="stylesheet" href="${cssPath}"/></noscript>`
  );
  writeFileSync(file, html);
  count++;
}

console.log(`Inlined into ${count} HTML files.`);
