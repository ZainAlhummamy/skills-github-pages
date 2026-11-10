import type { APIRoute } from 'astro';
import { allPages } from '../lib/catalog';
import { abs } from '../lib/routes';
import { site } from '../config/site';

export const GET: APIRoute = () => {
  const pages = allPages();
  const body = [
    `# ${site.companyName} — full site text`,
    '',
    `This file contains the complete copy of ${abs('/')} in Arabic (primary) and English, one page per section. Each page states its URL. Prices, customer names and testimonials are intentionally not published.`,
    '',
    ...pages.map((p) => `---\n\n# ${p.title}\n\nURL: ${abs(p.path)}\nLanguage: ${p.lang}\nSummary: ${p.description}\n\n${p.text()}\n`),
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
