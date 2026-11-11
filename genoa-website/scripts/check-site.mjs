// Post-build SEO/GEO checks over dist/. Runs automatically after `npm run build`.
// Fails the build on hard errors (missing H1, duplicate titles, broken internal
// links, invalid JSON-LD, missing hreflang twin ...). Prints warnings for soft issues.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const errors = [];
const warnings = [];
const err = (page, msg) => errors.push(`${page}: ${msg}`);
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(dist);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const toUrlPath = (f) => '/' + relative(dist, f).replace(/index\.html$/, '').replace(/\\/g, '/');

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return m ? decode(m[1] ?? m[2] ?? m[3]) : undefined;
};
const metaContent = (html, key, val) => {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const tag = tags.find((t) => attr(t, key) === val);
  return tag ? attr(tag, 'content') : undefined;
};

const pages = new Map();
let siteOrigin;
// JSON-LD entities by @id: the url each page gives it, and the first page that did.
const entityUrls = new Map();

for (const file of htmlFiles) {
  const p = toUrlPath(file);
  const html = readFileSync(file, 'utf8');
  if (p === '/' || p === '/404.html') continue; // redirect + error page
  const titleM = html.match(/<title>([^<]*)<\/title>/);
  const title = titleM ? decode(titleM[1]) : undefined;
  const description = metaContent(html, 'name', 'description');
  const h1s = (html.match(/<h1\b/gi) ?? []).length;
  const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] ?? '';
  const lang = attr(htmlTag, 'lang');
  const dir = attr(htmlTag, 'dir');
  const links = html.match(/<link\b[^>]*>/gi) ?? [];
  const canonical = links.map((l) => (attr(l, 'rel') === 'canonical' ? attr(l, 'href') : undefined)).find(Boolean);
  const hreflangs = Object.fromEntries(
    links.filter((l) => attr(l, 'rel') === 'alternate' && attr(l, 'hreflang')).map((l) => [attr(l, 'hreflang'), attr(l, 'href')]),
  );
  pages.set(p, { title, description, canonical, hreflangs, lang, html });

  if (!title) err(p, 'missing <title>');
  else if (title.length < 25 || title.length > 70) warn(p, `title length ${title.length}: "${title}"`);
  if (!description) err(p, 'missing meta description');
  else if (description.length < 90 || description.length > 175) warn(p, `description length ${description.length}`);
  if (h1s !== 1) err(p, `expected exactly 1 <h1>, found ${h1s}`);
  const expectedLang = p.split('/')[1];
  if (lang !== expectedLang) err(p, `<html lang="${lang}"> but path is /${expectedLang}/`);
  if (dir !== (expectedLang === 'ar' ? 'rtl' : 'ltr')) err(p, `wrong dir="${dir}"`);
  if (!canonical || !/^https?:\/\//.test(canonical)) err(p, `canonical missing or not absolute: ${canonical}`);
  else {
    const u = new URL(canonical);
    siteOrigin ??= u.origin;
    if (u.pathname !== p) err(p, `canonical path ${u.pathname} != page path`);
  }
  for (const hl of ['ar', 'en', 'x-default']) if (!hreflangs[hl]) err(p, `missing hreflang ${hl}`);
  if (hreflangs[expectedLang] !== canonical) err(p, `self hreflang (${hreflangs[expectedLang]}) != canonical`);
  for (const [k, v] of [
    ['og:title', metaContent(html, 'property', 'og:title')],
    ['og:description', metaContent(html, 'property', 'og:description')],
    ['og:image', metaContent(html, 'property', 'og:image')],
    ['og:url', metaContent(html, 'property', 'og:url')],
    ['twitter:card', metaContent(html, 'name', 'twitter:card')],
    ['twitter:image', metaContent(html, 'name', 'twitter:image')],
  ]) {
    if (!v) err(p, `missing ${k}`);
  }
  const ogImage = metaContent(html, 'property', 'og:image');
  if (ogImage && !existsSync(join(dist, new URL(ogImage).pathname))) err(p, `og:image file not found: ${ogImage}`);

  for (const img of html.match(/<img\b[^>]*>/gi) ?? []) {
    const alt = attr(img, 'alt');
    if (!alt || !alt.trim()) err(p, `<img> without alt: ${img.slice(0, 80)}`);
    if (!attr(img, 'width') || !attr(img, 'height')) warn(p, `<img> without width/height`);
  }

  // JSON-LD
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  if (!blocks.length) err(p, 'no JSON-LD');
  const types = new Set();
  for (const b of blocks) {
    try {
      const data = JSON.parse(b);
      for (const n of data['@graph'] ?? [data]) {
        [].concat(n['@type']).forEach((t) => types.add(t));
        if (n['@id'] && n.url) {
          const urls = entityUrls.get(n['@id']) ?? new Map();
          if (!urls.has(n.url)) urls.set(n.url, p);
          entityUrls.set(n['@id'], urls);
        }
      }
    } catch (e) {
      err(p, `invalid JSON-LD: ${e.message}`);
    }
  }
  const depth = p.split('/').filter(Boolean).length;
  for (const t of ['Organization', 'WebSite']) if (!types.has(t)) err(p, `JSON-LD missing ${t}`);
  if (depth > 1 && !types.has('BreadcrumbList')) err(p, 'JSON-LD missing BreadcrumbList');
  if (/\/(companies|government)\//.test(p) && !types.has('SoftwareApplication')) err(p, 'JSON-LD missing SoftwareApplication');
  if (/\/faq\/$/.test(p) && !types.has('FAQPage')) err(p, 'JSON-LD missing FAQPage');

  // Internal links
  for (const m of html.matchAll(/\shref="(\/[^"#?]*)/g)) {
    const href = m[1];
    const target = href.endsWith('/') ? join(dist, href, 'index.html') : join(dist, href);
    if (!existsSync(target)) err(p, `broken internal link ${href}`);
  }
  for (const m of html.matchAll(/\ssrc="(\/[^"#?]*)/g)) {
    if (!existsSync(join(dist, m[1]))) err(p, `missing asset ${m[1]}`);
  }
}

// Uniqueness across the whole site
const dupes = (key) => {
  const seen = new Map();
  for (const [p, d] of pages) {
    if (!d[key]) continue;
    if (seen.has(d[key])) err(p, `duplicate ${key} (also on ${seen.get(d[key])})`);
    else seen.set(d[key], p);
  }
};
dupes('title');
dupes('description');

// One entity, one URL: an @id names the same thing on every page, in both languages, so its url must not change from
// page to page, or search engines and assistants get two addresses for one company or product.
for (const [id, urls] of entityUrls) {
  if (urls.size > 1) err(id, `JSON-LD url differs across pages: ${[...urls].map(([u, p]) => `${u} (on ${p})`).join(', ')}`);
}

// hreflang reciprocity
for (const [p, d] of pages) {
  for (const [hl, href] of Object.entries(d.hreflangs)) {
    if (hl === 'x-default' || !href) continue;
    const twin = pages.get(new URL(href).pathname);
    if (!twin) err(p, `hreflang ${hl} points to missing page ${href}`);
    else if (twin.hreflangs[d.lang] !== d.canonical) err(p, `hreflang ${hl} twin does not link back`);
  }
}

// Site files
for (const f of ['sitemap.xml', 'robots.txt', 'llms.txt', 'llms-full.txt', 'favicon.svg']) {
  if (!existsSync(join(dist, f))) err('/', `missing ${f}`);
}
if (existsSync(join(dist, 'sitemap.xml'))) {
  const sm = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
  for (const p of pages.keys()) if (!sm.includes(`${siteOrigin}${p}</loc>`)) err('/sitemap.xml', `missing ${p}`);
  const locs = (sm.match(/<loc>/g) ?? []).length;
  if (locs !== pages.size) err('/sitemap.xml', `has ${locs} URLs, site has ${pages.size} pages`);
}
const robots = existsSync(join(dist, 'robots.txt')) ? readFileSync(join(dist, 'robots.txt'), 'utf8') : '';
if (!/^Sitemap: https?:\/\//m.test(robots)) err('/robots.txt', 'no absolute Sitemap line');

// Placeholders still in use
const all = htmlFiles.map((f) => readFileSync(f, 'utf8')).join('\n');
const placeholderNotes = [];
if (all.includes('href="https://genoa-systems.example/')) placeholderNotes.push('SITE_URL is a placeholder (https://genoa-systems.example)');
if (all.includes('info@genoa-systems.example')) placeholderNotes.push('CONTACT_EMAIL is a placeholder (info@genoa-systems.example)');
if (all.includes('wa.me/9647000000000')) placeholderNotes.push('WHATSAPP_NUMBER is a placeholder (9647000000000)');
if (all.includes('content="noindex, nofollow"')) placeholderNotes.push('SITE_NOINDEX=true: STAGING build, search engines are blocked (unset it for production)');

console.log(`\nchecked ${pages.size} pages (${[...pages.keys()].filter((p) => p.startsWith('/ar/')).length} Arabic, ${[...pages.keys()].filter((p) => p.startsWith('/en/')).length} English)`);
if (warnings.length) console.log(`\n${warnings.length} warning(s):\n  ` + warnings.join('\n  '));
if (placeholderNotes.length) console.log(`\nBefore launch, set: \n  ` + placeholderNotes.join('\n  '));
if (errors.length) {
  console.error(`\n${errors.length} error(s):\n  ` + errors.join('\n  '));
  process.exit(1);
}
console.log('\nAll SEO checks passed.');
