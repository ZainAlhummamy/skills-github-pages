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

// Placeholders still in use (the values src/config/site.ts falls back to)
const PLACEHOLDER = { siteUrl: 'https://genoa-systems.example', whatsapp: '9647000000000', email: 'info@genoa-systems.example' };
const all = htmlFiles.map((f) => readFileSync(f, 'utf8')).join('\n');
const placeholderNotes = [];
if (all.includes(`href="${PLACEHOLDER.siteUrl}/`)) placeholderNotes.push(`SITE_URL is a placeholder (${PLACEHOLDER.siteUrl})`);
if (all.includes(PLACEHOLDER.email)) placeholderNotes.push(`CONTACT_EMAIL is a placeholder (${PLACEHOLDER.email})`);
if (all.includes(`wa.me/${PLACEHOLDER.whatsapp}`)) placeholderNotes.push(`WHATSAPP_NUMBER is a placeholder (${PLACEHOLDER.whatsapp})`);
if (all.includes('content="noindex, nofollow"')) placeholderNotes.push('SITE_NOINDEX=true: STAGING build, search engines are blocked (unset it for production)');

// dist/_headers as Cloudflare Pages and Netlify read it: rules, each a URL pattern followed by its indented
// "Name: value" lines. Checked one rule at a time, so one rule's headers never stand in for another's.
const headerRules = [];
if (existsSync(join(dist, '_headers'))) {
  for (const line of readFileSync(join(dist, '_headers'), 'utf8').split('\n')) {
    if (/^\s*(#|$)/.test(line)) continue;
    if (/^\S/.test(line)) headerRules.push({ pattern: line.trim(), headers: [] });
    else if (headerRules.length) {
      const m = line.match(/^\s+([^:]+):\s*(.*)$/);
      if (m) headerRules.at(-1).headers.push([m[1].trim().toLowerCase(), m[2].trim()]);
    }
  }
}
const sendsNoindex = (rule) => rule.headers.some(([name, value]) => name === 'x-robots-tag' && /\b(noindex|none)\b/i.test(value));
// One rule per pattern: a host may keep only one of two rules with the same pattern, dropping the other's headers.
{
  const seen = new Set();
  for (const { pattern } of headerRules) {
    if (seen.has(pattern)) err('/_headers', `${pattern} has more than one rule; put its headers in one`);
    seen.add(pattern);
  }
}

// Cloudflare's own addresses for the site (its production and preview deployments) copy the real domain: _headers must
// keep them out of search (DEPLOY.md, "Duplicate addresses").
for (const host of ['https://:project.pages.dev/*', 'https://:version.:project.pages.dev/*']) {
  if (!headerRules.some((r) => r.pattern === host && sendsNoindex(r))) err('/_headers', `no X-Robots-Tag: noindex for ${host}`);
}

// A staging build (SITE_NOINDEX=true) lets crawlers in, so they read the noindex on every page and in every response's
// X-Robots-Tag and drop the staging URLs they saw before; "Disallow: /" in robots.txt would hide the noindex from them.
if (all.includes('content="noindex, nofollow"')) {
  if (/^Disallow:\s*\/\s*$/m.test(robots)) err('/robots.txt', 'staging build disallows crawling, so crawlers never see the noindex');
  if (!headerRules.some((r) => r.pattern === '/*' && sendsNoindex(r))) err('/_headers', 'staging build sends no X-Robots-Tag: noindex for /*');
}

// Production guard (DEPLOY.md, "Production builds"). On Cloudflare Pages' production branch (CF_PAGES_BRANCH=main), or
// with PRODUCTION=true (any case; 1 and yes too), what is only a note for a preview build fails the build, so the site
// can never be launched with placeholders, the staging switch, or pages hidden from search. Preview builds are unchanged.
const env = (key) => (process.env[key] ?? '').trim();
const production = env('CF_PAGES_BRANCH') === 'main' || /^(true|1|yes)$/i.test(env('PRODUCTION'));
if (production) {
  const fail = (msg) => err('production build', msg);
  // The address the site is staged on: never the production address, unless the owner decides it is (then take it off).
  const stagingHosts = ['site.genoasystem.com'];
  // Names reserved for examples and tests (RFC 2606, 6761): never a real address, for the site or for e-mail.
  const reserved = (host) => host === 'localhost' || /\.(example|test|invalid|localhost)$/i.test(host);
  // Cloudflare's own addresses and the staging address are not the production site either.
  const notProductionHost = (host) => reserved(host) || host.endsWith('.pages.dev') || stagingHosts.includes(host);

  const siteUrl = env('SITE_URL');
  if (!siteUrl) fail('SITE_URL is not set');
  else {
    let host;
    try {
      host = new URL(siteUrl).hostname;
    } catch {
      fail(`SITE_URL is not a URL: ${siteUrl}`);
    }
    if (siteUrl.endsWith('/')) fail(`SITE_URL ends with a slash: ${siteUrl} (give the origin alone, e.g. https://www.example.iq)`);
    if (siteUrl.replace(/\/$/, '') === PLACEHOLDER.siteUrl) fail(`SITE_URL is the placeholder ${PLACEHOLDER.siteUrl}`);
    else if (host && notProductionHost(host)) fail(`SITE_URL host ${host} is not a production address`);
  }

  const whatsapp = env('WHATSAPP_NUMBER');
  if (!whatsapp) fail('WHATSAPP_NUMBER is not set');
  else if (whatsapp === PLACEHOLDER.whatsapp) fail(`WHATSAPP_NUMBER is the placeholder ${PLACEHOLDER.whatsapp}`);
  else if (!/^\d+$/.test(whatsapp)) fail(`WHATSAPP_NUMBER must be digits only, in international format (964...): ${whatsapp}`);

  const email = env('CONTACT_EMAIL');
  const emailHost = email.split('@')[1] ?? '';
  if (!email) fail('CONTACT_EMAIL is not set');
  else if (email === PLACEHOLDER.email) fail(`CONTACT_EMAIL is the placeholder ${PLACEHOLDER.email}`);
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) fail(`CONTACT_EMAIL is not an e-mail address: ${email}`);
  else if (reserved(emailHost)) fail(`CONTACT_EMAIL is at ${emailHost}, a name reserved for examples and tests`);

  if (env('SITE_NOINDEX')) fail(`SITE_NOINDEX is set ("${env('SITE_NOINDEX')}"): it hides the site from search; remove it from the production environment`);

  // No page hidden from search, by its meta tag or by a header for every host. The 404 page is noindex on purpose; a
  // header rule for one host (the *.pages.dev addresses in public/_headers) leaves the production host alone.
  const hidden = htmlFiles
    .map((f) => [toUrlPath(f), metaContent(readFileSync(f, 'utf8'), 'name', 'robots') ?? ''])
    .filter(([p, robots]) => p !== '/404.html' && /\b(noindex|none)\b/i.test(robots));
  if (hidden.length) fail(`${hidden.length} page(s) carry robots noindex, e.g. ${hidden.slice(0, 3).map(([p, r]) => `${p} ("${r}")`).join(', ')}`);
  for (const rule of headerRules) {
    if (rule.pattern.startsWith('/') && sendsNoindex(rule)) fail(`_headers sends X-Robots-Tag noindex for ${rule.pattern} on every host`);
  }
}

console.log(`\nchecked ${pages.size} pages (${[...pages.keys()].filter((p) => p.startsWith('/ar/')).length} Arabic, ${[...pages.keys()].filter((p) => p.startsWith('/en/')).length} English)`);
if (warnings.length) console.log(`\n${warnings.length} warning(s):\n  ` + warnings.join('\n  '));
if (placeholderNotes.length) console.log(`\nBefore launch, set: \n  ` + placeholderNotes.join('\n  '));
if (errors.length) {
  console.error(`\n${errors.length} error(s):\n  ` + errors.join('\n  '));
  process.exit(1);
}
console.log('\nAll SEO checks passed.');
