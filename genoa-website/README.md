# Genoa Systems — marketing website

Static, bilingual (Arabic first, English second) marketing site for **Genoa**
(accounting software for companies) and **Genoa Gov** (government accounting
software for Iraqi government departments), built for SEO and GEO — being found
by Google and quoted by AI assistants such as ChatGPT, Gemini and Perplexity.

- Framework: [Astro](https://astro.build) static output (no server, no database, no client data).
- Zero JavaScript framework on the client. Small scripts only: the header menu (it shows the links inline when they
  fit, else as a popover; browsers without the Popover API also load a ~11 KB polyfill, others never do), the FAQ
  toggles, the contact form's error messages and WhatsApp handoff, and the scroll reveal. Without scripts the pages
  still read in full: the menu stays collapsed behind its button, which opens it in any browser with the Popover API
  (every link is also in the footer), and every FAQ answer shows.
- Arabic is the default at `/ar/` (RTL); full English at `/en/`; `hreflang` between every pair.
- Self-hosted IBM Plex Sans Arabic (4 woff2 files, Arabic + Latin subsets, 400/700).

## Commands

```bash
npm install
npm run dev          # http://localhost:4321/ar/  (live reload)
npm run build        # builds dist/ and runs the SEO checker (fails on errors)
npm run preview      # serves dist/ on http://localhost:4321
npm run lighthouse   # needs `npm run preview` running; writes reports/lighthouse/summary.md
npm run og           # regenerates Open Graph images + icons, favicon.ico too (needs Playwright)
npm run dates        # after a copy change: records which pages changed (src/content/page-dates.json)
npm run screenshot-sizes  # after importing screenshots: writes the 720w/1080w copies used by srcset
```

**Content dates.** The sitemap's `<lastmod>` and each page's JSON-LD `dateModified` are the day that page's text
last changed, never the build date. They come from `src/content/page-dates.json`, which holds a fingerprint of each
page's title, description and main text. After changing copy: `npm run build && npm run dates && npm run build`, and
commit `page-dates.json` with the change; the build warns while a page's text no longer matches its fingerprint.

**Owner TODO.** Facts only the owner can give (city, official profiles, buyer FAQ answers, deployment model, …) are
listed in `OWNER-TODO.md`; the build prints the ones it can detect.

`LH_PAGES=key npm run lighthouse` audits 8 representative pages instead of all 44.

## Before launch — required

Set these as environment variables at build time (or edit `src/config/site.ts`).
`npm run build` prints a reminder while any placeholder is still in use.

| Variable | What | Placeholder now |
|---|---|---|
| `SITE_URL` | Production origin: `https://site.genoasystem.com` — used for canonical, hreflang, sitemap, OG, JSON-LD | `https://genoa-systems.example` |
| `WHATSAPP_NUMBER` | Digits only, international format, e.g. `9647XXXXXXXXX` | `9647000000000` |
| `CONTACT_EMAIL` | Public sales e-mail | `info@genoa-systems.example` |
| `FORM_ENDPOINT` | Optional. Form POST target (Formspree, Basin, own API). Empty = form composes a WhatsApp message, nothing is stored | empty |
| `SITE_NOINDEX` | Staging only. `true` = `noindex, nofollow` on every page and an `X-Robots-Tag: noindex` header; robots.txt still allows crawling so the noindex is seen. Never set in production | unset |

Also before launch:

1. Go through **`CLAIMS-TO-VERIFY.md`** with the product team. Every sentence there goes
   slightly beyond the confirmed feature list; confirm it or delete it.
2. Replace placeholder screenshots (see below) — **test data only**.
3. The logo is the Genoa product mark from the Genoa app (`UAS` repo, `Views/Shared/_BrandMark.cshtml`):
   the lighthouse tower on the blue tile. It lives in `src/components/BrandMark.astro` (header/footer),
   `public/brand/genoa-mark.svg` (large sizes) and `public/favicon.svg` (the app's favicon). If the
   mark changes in the app, update those three files and run `npm run og`.
4. Add real profile URLs (LinkedIn, Facebook, Google Business Profile …) to `site.sameAs`
   in `src/config/site.ts` — they feed `Organization.sameAs` in JSON-LD.
5. Submit `https://<domain>/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
6. If you add analytics later, update the "no tracking tools" sentences in
   `src/content/pages.ts` (security page) and the contact-form privacy note.

## Where things live

```
src/config/site.ts        domain, WhatsApp, e-mail, form endpoint
src/content/types.ts      the content contract (every page is generated from typed data)
src/content/companies.ts  Genoa: overview, 7 feature pages, FAQ (ar + en)
src/content/government.ts Genoa Gov: overview, 7 feature pages, FAQ (ar + en)
src/content/pages.ts      home, security & backups, about, contact, 404
src/content/screenshots.ts  real-screenshot registry (placeholders until filled)
src/i18n/ui.ts            interface strings (nav, buttons, labels)
src/lib/seo.ts            JSON-LD builders (Organization, WebSite, SoftwareApplication, BreadcrumbList, FAQPage)
src/lib/catalog.ts        page list + plain text for sitemap.xml, llms.txt, llms-full.txt
src/pages/                routes (Astro)
scripts/check-site.mjs    post-build SEO/GEO checks
scripts/lighthouse.mjs    Lighthouse runner (mobile)
scripts/generate-og.mjs   OG images + icons
CONTENT-GUIDE.md          writing rules, Iraqi Arabic glossary, what never to claim
CLAIMS-TO-VERIFY.md       sentences the product team must confirm
```

## SEO / GEO features

- Unique `<title>` and meta description on every page in both languages (enforced by the checker).
- Exactly one `<h1>` per page; question-shaped `<h2>`s; clean URLs with trailing slash (`/ar/government/budgets/`).
- `rel=canonical` (absolute, self-referencing) and `hreflang` `ar` / `en` / `x-default` on every page, reciprocal.
- Open Graph + Twitter `summary_large_image` cards with per-product, per-language 1200×630 images.
- JSON-LD `@graph` per page: `WebPage`/`AboutPage`/`ContactPage`/`FAQPage`, `WebSite`, `Organization`,
  `SoftwareApplication` (one per product, stable `@id`s), `BreadcrumbList`, and `FAQPage` for feature FAQs.
- A boxed, quotable **"In short / باختصار"** answer paragraph right under every H1.
- "What is Genoa?" / "What is Genoa Gov?" sections on the home page and product pages.
- FAQs written as real buyer questions (e.g. «ما هو أفضل برنامج محاسبي للدوائر الحكومية العراقية؟»), answered directly and honestly.
- `sitemap.xml` with `xhtml:link` alternates; `robots.txt` explicitly allowing search and AI crawlers.
- `llms.txt` (summary + links) and `llms-full.txt` (full site text, both languages), generated from the same content.
- Internal linking: related-feature cards on every feature page, product ↔ FAQ ↔ security ↔ contact links, full footer sitemap.

## Screenshots

Screenshot slots: `companies-overview`, `companies-<feature-slug>`, `government-overview`,
`government-<feature-slug>` (and `home`, currently unused). A slot without a real screenshot shows a
generated SVG placeholder labelled "PLACEHOLDER SCREENSHOT — صورة توضيحية مؤقتة".

To add real screenshots (from the software, with **fictional demo data only** — never client data):

1. Capture them at 1440×900 and name each file after its slot, e.g. `companies-inventory.png`.
2. Optionally add a `*-manifest.json` next to them: `[{ "file": "companies-inventory.png", "descAr": "…", "descEn": "…" }]`
   — one plain sentence per screen, used for alt text and captions.
3. Run `npm run screenshots -- <folder>`. Images are converted to WebP (max 1600px) into
   `public/screenshots/` and registered in `src/content/screenshots.json`.
4. Rebuild. Real screenshots get a window frame, open at full size on click, carry a
   "بيانات تجريبية / Demo data" tag, and product pages gain a "شاهد البرنامج" gallery once a
   product has two or more.

## Deploying

**Full deployment brief (hosts, env vars, verification): [`DEPLOY.md`](DEPLOY.md).**
Requires Node 22.23.4+ (`.nvmrc`). For a staging deploy that search engines must not index, build with `SITE_NOINDEX=true`.

`dist/` is plain static files; any static host works (Netlify, Cloudflare Pages, GitHub Pages,
S3 + CloudFront, Nginx). `public/_redirects` and `public/_headers` are picked up by Netlify and
Cloudflare Pages; elsewhere, make `/` 301-redirect to `/ar/` and serve `dist/404.html` for missing pages.
