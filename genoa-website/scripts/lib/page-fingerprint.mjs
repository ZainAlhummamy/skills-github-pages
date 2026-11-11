// A page's content fingerprint: a hash of what a reader sees on it (title, meta description, the text and image alt
// text inside <main>), for src/content/page-dates.json. Markup, scripts, styles and anything outside <main> (header,
// footer, JSON-LD) do not count, so a design change does not move a page's date and a copy change always does.
// Build-specific values (the site address, e-mail and WhatsApp number, real or placeholder) are replaced by tokens,
// so preview and production builds of the same content give the same fingerprint, with or without their variables.
import { createHash } from 'node:crypto';
import { readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const PLACEHOLDERS = { url: 'https://genoa-systems.example', email: 'info@genoa-systems.example', whatsapp: '9647000000000' };

const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

/** The reader-visible text of a built page, normalised. */
export function pageText(html, env = process.env) {
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const main = (html.match(/<main\b[^>]*>([\s\S]*)<\/main>/)?.[1] ?? '')
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ');
  const alts = [...main.matchAll(/<img\b[^>]*\balt="([^"]*)"/g)].map((m) => m[1]);
  const text = [title, description, main.replace(/<[^>]+>/g, ' '), ...alts].map(decode).join('\n');
  let out = text.replace(/\s+/g, ' ').trim();
  const values = [
    [(env.SITE_URL || '').trim().replace(/\/$/, ''), '{SITE}'],
    [PLACEHOLDERS.url, '{SITE}'],
    [(env.CONTACT_EMAIL || '').trim(), '{EMAIL}'],
    [PLACEHOLDERS.email, '{EMAIL}'],
    [(env.WHATSAPP_NUMBER || '').trim(), '{WHATSAPP}'],
    [PLACEHOLDERS.whatsapp, '{WHATSAPP}'],
  ];
  for (const [value, token] of values) if (value) out = out.split(value).join(token);
  // Whatever the environment of this run: any e-mail address, Iraqi WhatsApp number or web address left is
  // deployment detail too, so a fingerprint does not depend on running with the build's variables.
  return out
    .replace(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g, '{EMAIL}')
    .replace(/\b964\d{9,10}\b/g, '{WHATSAPP}')
    .replace(/https?:\/\/[\w.-]+(?::\d+)?/g, '{SITE}');
}

export const fingerprint = (html, env) => createHash('sha256').update(pageText(html, env)).digest('hex').slice(0, 16);

/** Every built page with content: dist/<lang>/…/index.html as its URL path, without the root redirect and the 404. */
export function builtPages(dist) {
  const out = new Map();
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) walk(full);
      else if (name === 'index.html') {
        const rel = relative(dist, dir).split(sep).join('/');
        if (rel) out.set(`/${rel}/`, full);
      }
    }
  };
  walk(dist);
  return out;
}
