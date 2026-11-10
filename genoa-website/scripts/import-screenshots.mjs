// Imports real app screenshots (taken with FICTIONAL demo data only) into the site.
//
//   npm run screenshots -- <folder>        (default: ./screenshots-src)
//
// The folder holds images named after the screenshot slot, e.g.
//   companies-overview.png, companies-inventory.png, government-cheques.png …
// and optionally *-manifest.json files: [{ "file", "descAr", "descEn" }] with a
// one-sentence description of each screen (used for alt text and captions).
//
// Each image is converted to WebP (max 1600px wide) into public/screenshots/ and
// registered in src/content/screenshots.json, which the site reads at build time.
// A slot without a real screenshot keeps its labelled placeholder.
import sharp from 'sharp';
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname, extname, basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(process.argv[2] || join(root, 'screenshots-src'));
const outDir = join(root, 'public/screenshots');
const registryPath = join(root, 'src/content/screenshots.json');
const SLOT = /^(home|companies|government)-[a-z0-9-]+$/;

if (!existsSync(src)) {
  console.error(`No such folder: ${src}`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });

const descriptions = {};
for (const f of readdirSync(src).filter((f) => f.endsWith('-manifest.json'))) {
  for (const row of JSON.parse(readFileSync(join(src, f), 'utf8'))) {
    descriptions[basename(row.file, extname(row.file))] = row;
  }
}

const registry = existsSync(registryPath) ? JSON.parse(readFileSync(registryPath, 'utf8')) : {};
let count = 0;
for (const file of readdirSync(src).sort()) {
  const ext = extname(file).toLowerCase();
  const key = basename(file, extname(file));
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) continue;
  if (!SLOT.test(key)) {
    console.warn(`skip ${file}: name is not a screenshot slot`);
    continue;
  }
  const out = join(outDir, `${key}.webp`);
  const info = await sharp(join(src, file))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(out);
  const d = descriptions[key];
  registry[key] = {
    src: `/screenshots/${key}.webp`,
    width: info.width,
    height: info.height,
    ...(d ? { alt: { ar: d.descAr, en: d.descEn } } : registry[key]?.alt ? { alt: registry[key].alt } : {}),
  };
  count++;
  console.log(`${key}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB${d ? '' : '  (no description — add one to a *-manifest.json)'}`);
}
const sorted = Object.fromEntries(Object.entries(registry).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(registryPath, JSON.stringify(sorted, null, 2) + '\n');
console.log(`\nImported ${count} screenshot(s) into public/screenshots and src/content/screenshots.json`);
