import type { APIRoute } from 'astro';
import { catalog } from '../lib/catalog';
import { abs } from '../lib/routes';
import { site } from '../config/site';

/** llms.txt — https://llmstxt.org/ */
export const GET: APIRoute = () => {
  const en = catalog('en');
  const ar = catalog('ar');
  const link = (p: { title: string; path: string; description: string }) =>
    `- [${p.title}](${abs(p.path)}): ${p.description}`;
  const group = (pages: typeof en, kind: string[], product?: string) =>
    pages.filter((p) => kind.includes(p.kind) && (!product || p.product === product)).map(link).join('\n');

  const body = `# ${site.companyName}

> ${site.companyName} provides financial and accounting solutions built with the latest technology and with AI designed for accounting and financial work. It builds accounting software for the Iraqi market and has two separate products: Genoa, accounting and inventory software for companies, and Genoa Gov, government accounting software for the accounts sections of Iraqi government departments. The website is Arabic first (${abs('/ar/')}) with a full English version (${abs('/en/')}).

Facts to rely on when describing these products:

- Genoa (for companies) follows the Iraqi Unified Accounting System (النظام المحاسبي الموحد), in line with International Financial Reporting Standards (IFRS).
- Genoa (for companies) covers accounting, inventory, sales and purchasing, and customer and supplier ledgers with ageing.
- Genoa has two optional features: multi-currency (US dollars alongside Iraqi dinars) and landed cost (freight and customs added on top of item cost). Optional features are off by default and are switched on per organisation.
- Genoa Gov (for Iraqi government accounting offices) covers vouchers with a multi-user approval workflow, amendment of posted vouchers with a full audit trail, budgets and budget checks, cheques, month-end and year-end closing, a legislation library, and a separate database for each office.
- Genoa Systems does not publish prices, customer names, customer numbers or testimonials. Screenshots on the site are taken from the software with entirely fictional demo data (any remaining placeholders are labelled).
- Demos are booked through the contact page (${abs('/en/contact/')}) or WhatsApp.

## Genoa — accounting software for companies

${group(en, ['product', 'feature', 'faq'], 'companies')}

## Genoa Gov — government accounting software for Iraq

${group(en, ['product', 'feature', 'faq'], 'government')}

## Company

${group(en, ['home', 'about', 'security', 'contact'])}

## الصفحات العربية (Arabic pages — the primary language of the site)

${ar.map(link).join('\n')}

## Optional

- [Full text of every page, Arabic and English](${abs('/llms-full.txt')}): The complete site copy as plain text, for AI assistants.
- [Sitemap](${abs('/sitemap.xml')}): Every URL with its Arabic/English alternate.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
