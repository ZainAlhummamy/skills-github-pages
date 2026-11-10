# Genoa Systems — marketing website

Static, bilingual (Arabic first, English second) marketing site for **Genoa**
(accounting software for companies) and **Genoa Gov** (government accounting
software for Iraqi government departments), built for SEO and GEO — being found
by Google and quoted by AI assistants such as ChatGPT, Gemini and Perplexity.

- Framework: [Astro](https://astro.build) static output (no server, no database, no client data).
- Zero JavaScript framework on the client. The only script is a ~1 KB inline handler on the contact page.
- Arabic is the default at `/ar/` (RTL); full English at `/en/`; `hreflang` between every pair.
- Self-hosted IBM Plex Sans Arabic (4 woff2 files, Arabic + Latin subsets, 400/700).

## Commands

```bash
npm install
npm run dev          # http://localhost:4321/ar/  (live reload)
npm run build        # builds dist/ and runs the SEO checker (fails on errors)
npm run preview      # serves dist/ on http://localhost:4321
npm run lighthouse   # needs `npm run preview` running; writes reports/lighthouse/summary.md
npm run og           # regenerates Open Graph images + icons (needs Playwright)
```

`LH_PAGES=key npm run lighthouse` audits 8 representative pages instead of all 44.

## Before launch — required

Set these as environment variables at build time (or edit `src/config/site.ts`).
`npm run build` prints a reminder while any placeholder is still in use.

| Variable | What | Placeholder now |
|---|---|---|
| `SITE_URL` | Production origin, e.g. `https://www.genoa.iq` — used for canonical, hreflang, sitemap, OG, JSON-LD | `https://genoa-systems.example` |
| `WHATSAPP_NUMBER` | Digits only, international format, e.g. `9647XXXXXXXXX` | `9647000000000` |
| `CONTACT_EMAIL` | Public sales e-mail | `info@genoa-systems.example` |
| `FORM_ENDPOINT` | Optional. Form POST target (Formspree, Basin, own API). Empty = form composes a WhatsApp message, nothing is stored | empty |
| `SITE_NOINDEX` | Staging only. `true` = `noindex, nofollow` on every page and `Disallow: /` in robots.txt. Never set in production | unset |

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

Every screenshot slot currently shows a generated SVG placeholder clearly labelled
"PLACEHOLDER SCREENSHOT — صورة توضيحية مؤقتة". To swap in a real one:

1. Take the screenshot from a **test company / test office with test data**. Never real client data.
2. Save as `public/screenshots/<key>.webp` (about 1600×1000). Keys: `home`, `companies-overview`,
   `companies-<feature-slug>`, `government-overview`, `government-<feature-slug>`.
3. Register it in `src/content/screenshots.ts`.
4. Update that page's `screenshotAlt` / `screenshotCaption` so they no longer say "placeholder".

## Deploying

**Full deployment brief (hosts, env vars, verification): [`DEPLOY.md`](DEPLOY.md).**
Requires Node 22.23.4+ (`.nvmrc`). For a staging deploy that search engines must not index, build with `SITE_NOINDEX=true`.

`dist/` is plain static files; any static host works (Netlify, Cloudflare Pages, GitHub Pages,
S3 + CloudFront, Nginx). `public/_redirects` and `public/_headers` are picked up by Netlify and
Cloudflare Pages; elsewhere, make `/` 301-redirect to `/ar/` and serve `dist/404.html` for missing pages.
