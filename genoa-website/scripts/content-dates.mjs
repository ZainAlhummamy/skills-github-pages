// Updates src/content/page-dates.json from the current build: a page whose text changed since its recorded
// fingerprint gets today's date (or DATES_TODAY=YYYY-MM-DD); every other page keeps its date. The sitemap's <lastmod>
// and each page's JSON-LD dateModified come from this file, so they say when the content changed, not when the site
// was last built.
//
//   npm run build && npm run dates && npm run build     # then commit page-dates.json with the content change
//
// The site address, e-mail and WhatsApp number do not count as content, so any build's variables will do.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { builtPages, fingerprint } from './lib/page-fingerprint.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const file = resolve(root, 'src/content/page-dates.json');
if (!existsSync(dist)) throw new Error('No dist/ folder: run npm run build first.');

const today = process.env.DATES_TODAY || new Date().toISOString().slice(0, 10);
const old = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {};
const next = {};
const changed = [];
for (const [path, html] of [...builtPages(dist)].sort(([a], [b]) => a.localeCompare(b))) {
  const hash = fingerprint(readFileSync(html, 'utf8'));
  if (old[path]?.hash === hash) next[path] = old[path];
  else {
    next[path] = { hash, modified: today };
    changed.push(path);
  }
}
const removed = Object.keys(old).filter((p) => !(p in next));
writeFileSync(file, JSON.stringify(next, null, 2) + '\n');
console.log(`${Object.keys(next).length} pages; ${changed.length} dated ${today}${changed.length ? `:\n  ${changed.join('\n  ')}` : ''}`);
if (removed.length) console.log(`removed (no longer built): ${removed.join(', ')}`);
