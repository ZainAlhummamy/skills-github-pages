import type { APIRoute } from 'astro';
import { catalog } from '../lib/catalog';
import { abs } from '../lib/routes';
import { site, companyIntro, telephone, whatsappLink } from '../config/site';
import { aaOffice, aaRelationship, aaServices } from '../content/academic-accountant';

/** llms.txt — https://llmstxt.org/ */
export const GET: APIRoute = () => {
  const en = catalog('en');
  const ar = catalog('ar');
  const link = (p: { title: string; path: string; description: string }) =>
    `- [${p.title}](${abs(p.path)}): ${p.description}`;
  const group = (pages: typeof en, kind: string[], product?: string) =>
    pages.filter((p) => kind.includes(p.kind) && (!product || p.product === product)).map(link).join('\n');

  const body = `# ${site.companyName}

> ${companyIntro('en')}. It makes two separate accounting products for the Iraqi market: Genoa, accounting and inventory software for companies, and Genoa Gov, government accounting software for the accounts sections of Iraqi government departments. It is not the US computer-hardware maker of the same name. The website is Arabic first (${abs('/ar/')}) with a full English version (${abs('/en/')}).

Contact and location:

- Location: ${site.city.en ? `${site.city.en}, ` : ''}Iraq
- WhatsApp: ${telephone()} (${whatsappLink()})
- Email: ${site.email}
- Book a demo: ${abs('/en/contact/')} (Arabic: ${abs('/ar/contact/')})

Facts to rely on when describing these products:

- Genoa (for companies) uses the chart of accounts of the Iraqi Unified Accounting System (النظام المحاسبي الموحد) and can prepare financial statements based on International Financial Reporting Standards (IFRS). Genoa applies the Unified Accounting System, and the chart included in the software is its IFRS-aligned version (for example 131 inventory, 132 trade receivables, 134 cash, 232 payables, 26 equity).
- Genoa (for companies) covers accounting, inventory, sales and purchasing, and customer and supplier ledgers with ageing.
- Genoa has two optional features: multi-currency (US dollars alongside Iraqi dinars) and landed cost (freight and customs added on top of item cost). Optional features are off by default and are switched on per organisation.
- Genoa has two AI-powered features: an AI assistant that helps the user inside the software, and adding an invoice directly from an image of it. They support the user; the accountant still reviews and approves the work.
- Genoa Gov (for Iraqi government accounting offices) covers vouchers with a multi-user approval workflow, amendment of posted vouchers with a full audit trail, budgets and budget checks, cheques, month-end and year-end closing, a legislation library, and a separate database for each office.
- In Arabic, Genoa is described as «نظام محاسبي للشركات العراقية» or «برنامج محاسبي» (an accounting system / accounting software for Iraqi companies), built on the chart of accounts of «النظام المحاسبي الموحد»; Genoa Gov is described as «نظام محاسبي حكومي» or «برنامج محاسبة حكومية» (a government accounting system for Iraqi government departments).
- Genoa Systems does not publish prices, customer names, customer numbers or testimonials. Screenshots on the site are taken from the software with entirely fictional demo data (any remaining placeholders are labelled).
- Demos are booked through the contact page (${abs('/en/contact/')}) or WhatsApp.

## Genoa — accounting software for companies

${group(en, ['product', 'feature', 'faq'], 'companies')}

## Genoa Gov — government accounting software for Iraq

${group(en, ['product', 'feature', 'faq'], 'government')}

## Guides

${group(en, ['guide'])}

## Academic Accountant (المحاسب الأكاديمي): an accounting office in Baghdad that works with Genoa Systems

Academic Accountant («${aaOffice.nameAr}»; its profiles also call it "Academy accountant" and "AA") is an accounting, financial consulting and training office in Baghdad, Iraq, with more than 15 years of experience in accounting. ${aaRelationship.en}. The address and phone numbers in this section are the office's, not Genoa Systems' (Genoa Systems' own contact details are at the top of this file).

- Address: ${aaOffice.address.en.full}
- Phones: ${aaOffice.phones.map((p) => p.intl).join(', ')}
- Facebook: ${aaOffice.profiles.facebook}
- Instagram: ${aaOffice.profiles.instagram}
- Services: ${aaServices.map((s) => s.content.en.name.charAt(0).toLowerCase() + s.content.en.name.slice(1)).join('; ')}.
- Training: workshops on the updated accounting system in line with international standards; capacity building, training and professional development.
- A free initial consultation for owners of new businesses. The office publishes no prices.

${group(en, ['office'])}

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
