# Owner TODO: facts only the owner can give

The site is correct without these; each one makes it stronger. Every item is also marked `TODO(owner)` in the code,
and `npm run build` lists the ones it can detect under "Owner TODO".

## In the repository

| # | What | Where it goes | What happens until then |
|---|---|---|---|
| 1 | **City** the company is based in (Arabic and English, e.g. بغداد / Baghdad) | `src/config/site.ts` → `city` | About page, footer and llms.txt say "an Iraqi accounting-software company" with no city; the Organization JSON-LD address names the country (IQ) only. |
| 2 | **Official profiles**: LinkedIn page, Facebook page, Google Business Profile (and any other official profile) | `src/config/site.ts` → `sameAs` | No `sameAs` in the Organization JSON-LD. These links are what best separate this Genoa Systems from the defunct US hardware maker of the same name. |
| 3 | **Answers to the six buyer questions**, for Genoa and for Genoa Gov, in Arabic and English (24 answers) | `src/content/companies.ts` and `src/content/government.ts`, last FAQ group ("التشغيل والدعم ونقل البيانات" / "Setup, support and moving your data"), `a: []` | The questions are hidden: a question without an answer is left out of the page, its FAQPage JSON-LD and llms-full.txt. Each one appears as soon as its answer is filled in. For Genoa Gov the last question reads «هل تُطبع المستندات والتقارير بالعربية؟» (vouchers, not invoices); change it back if you prefer. |
| 4 | **Deployment model**: cloud (web browser), installed, or both | `src/lib/seo.ts` → `softwareNode`, add `operatingSystem` | No `operatingSystem` on the SoftwareApplication nodes. Item 3's first two answers say the same thing in words. |
| 5 | **The software's own languages** (is Genoa / Genoa Gov available in English, or Arabic only?) | `src/lib/seo.ts` → `softwareNode`, add `inLanguage` | `inLanguage` stays on the page nodes only. On a SoftwareApplication it would state the software's language, which is not confirmed. |
| 6 | **Details of the two AI features** (AI assistant, invoice from image): which product(s), their names in the app, what the assistant can be asked, which invoices are read (purchase / sales, Arabic / English, handwriting), whether the user reviews a draft, where data is processed. Plus a **demo-data screenshot of each**. | `src/content/companies-ai.ts`; screenshots: `npm run screenshots -- <folder>`, keys `companies-ai-assistant` and `companies-invoice-from-image`, then `npm run screenshot-sizes` | Both pages state only that the features exist and what they are for, turn the open points into "ask in the demo" questions, and show a labelled placeholder screenshot. See `CLAIMS-TO-VERIFY.md`, "AI features". |
| 7 | **A real landed-cost screenshot** (demo data), or a decision on the landed-cost feature | `npm run screenshots -- <folder>`, key `companies-landed-cost`, then `npm run screenshot-sizes` | The landed-cost pages show a labelled placeholder. `CLAIMS-TO-VERIFY.md` notes the Genoa app's code has no landed-cost feature: settle that first. |

## Outside the repository

| # | What | Where |
|---|---|---|
| 8 | **Always Use HTTPS** (plain `http://` currently answers 500) | Cloudflare dashboard → the `genoasystem.com` zone → SSL/TLS → Edge Certificates → Always Use HTTPS: On |
| 9 | **HSTS** | Same page → HTTP Strict Transport Security: enable, max-age 6 months or more. Leave *Include subdomains* and *Preload* off unless every `genoasystem.com` subdomain (the app too) is HTTPS-only. |
| 10 | **Search Console** | Add `https://site.genoasystem.com` and submit `https://site.genoasystem.com/sitemap.xml` |
| 11 | **Bing Webmaster Tools** | Import from Search Console, or add the site and submit the same sitemap (Bing also feeds ChatGPT search and Copilot) |
