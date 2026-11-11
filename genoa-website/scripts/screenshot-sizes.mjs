// Writes smaller copies of every registered screenshot (public/screenshots/<key>-720w.webp and -1080w.webp) and
// records their widths in src/content/screenshots.json, so pages can offer them with srcset/sizes and a phone does not
// download the full 1440px image. Run after importing screenshots: npm run screenshot-sizes
// It only reads the registry and public/screenshots/, and is safe to run again.
import sharp from 'sharp';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const registryPath = resolve(root, 'src/content/screenshots.json');
const registry = JSON.parse(readFileSync(registryPath, 'utf8'));
const WIDTHS = [720, 1080];

for (const [key, shot] of Object.entries(registry)) {
  const src = resolve(root, 'public', shot.src.replace(/^\//, ''));
  if (!existsSync(src)) {
    console.warn(`skip ${key}: ${shot.src} not found`);
    continue;
  }
  const widths = WIDTHS.filter((w) => w < shot.width);
  for (const w of widths) {
    const out = src.replace(/\.webp$/, `-${w}w.webp`);
    const info = await sharp(src).resize({ width: w }).webp({ quality: 82, effort: 6 }).toFile(out);
    console.log(`${key}-${w}w.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
  }
  shot.widths = widths;
}
writeFileSync(registryPath, JSON.stringify(registry, null, 2) + '\n');
