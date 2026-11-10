import type { APIRoute } from 'astro';
import { catalog } from '../lib/catalog';
import { abs, alternates } from '../lib/routes';

const lastmod = new Date().toISOString().slice(0, 10);
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

export const GET: APIRoute = () => {
  const urls = catalog('ar')
    .flatMap((ar) => [ar.path, ar.path.replace(/^\/ar\//, '/en/')])
    .map((p) => {
      const alts = alternates(p)
        .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${esc(a.href)}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${esc(abs(p))}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alts}\n  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
