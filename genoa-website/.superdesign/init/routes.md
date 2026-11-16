# Routes — Genoa Systems

Astro file-based routing, static output, `trailingSlash: 'always'`, directory format. Two languages via `[lang]` = `ar` (default, RTL) | `en` (LTR).
`/` meta-refreshes to `/ar/`. Every page uses `src/layouts/BaseLayout.astro` (Header + Footer). Route helpers: `src/lib/routes.ts` (`path(lang, ...segments)`, `swapLang`).
Products: `companies` (brand "Genoa", blue `--brand`) and `government` (brand "Genoa Gov", green `--gov`).

| URL | File | What it renders |
|---|---|---|
| `/` | `src/pages/index.astro` | Redirect to /ar/ |
| `/<lang>/` | `src/pages/[lang]/index.astro` | **Home**: hero (eyebrow, h1, long answer paragraph, demo + WhatsApp buttons, 6 check-pill highlights, HeroLedger illustration) → two product cards (Genoa / Genoa Gov with module link lists and badges) → dark AI band (AiShowcase) → "شاهد البرنامج" two real screenshots → comparison table → 4 principle cards → security card + FAQ card → CtaBand → Footer |
| `/<lang>/companies/`, `/<lang>/government/` | `src/pages/[lang]/[product]/index.astro` | Product overview: breadcrumbs, product tag, h1, AnswerBox, buttons, hero illustration (HeroAgeing / HeroApproval); article sections + KeyFacts sidebar; FeatureCards; ScreensGallery; FAQ teaser; CtaBand |
| `/<lang>/<product>/<feature>/` | `src/pages/[lang]/[product]/[feature].astro` | Feature page (16 per language): hero with answer box, sections, screenshot, related features, CTA |
| `/<lang>/<product>/faq/` | `src/pages/[lang]/[product]/faq.astro` | FAQ accordion page |
| `/<lang>/security-backups/` | `src/pages/[lang]/security-backups.astro` | Security & backups article |
| `/<lang>/about/` | `src/pages/[lang]/about.astro` | About |
| `/<lang>/contact/` | `src/pages/[lang]/contact.astro` | Book-a-demo: hero, form (name, org, org type, product, phone, governorate, email, message) that hands off to WhatsApp; sidebar with WhatsApp/email, "what happens next", Academic Accountant office card |
| `/<lang>/guides/<guide>/` | `src/pages/[lang]/guides/[guide].astro` | Guide article (Unified Accounting System) |
| `/<lang>/academic-accountant/`, `/services/` | `src/pages/[lang]/academic-accountant/*.astro` | Partner accounting office hub + services (own styles: academic-accountant.css) |
| `/404.html` | `src/pages/404.astro` | Not found |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/llms-full.txt`, `/placeholders/<name>.svg` | `src/pages/*.ts` | Generated text/SVG endpoints |

Content sources: `src/content/pages.ts` (home, security, about, contact, 404), `companies.ts` + `companies-ai.ts`, `government.ts`, `guides.ts`, `academic-accountant.ts`; UI strings `src/i18n/ui.ts`.

## `src/lib/routes.ts`

```ts
import { site } from '../config/site';
import type { Lang } from '../content/types';
import { LANGS } from '../content/types';

/**
 * Every page exists in both languages with the same English slug, so the
 * alternate of /ar/x/ is always /en/x/. Paths always end with a slash.
 */
export const path = (lang: Lang, ...segments: string[]) => {
  const rest = segments.filter(Boolean).join('/');
  return rest ? `/${lang}/${rest}/` : `/${lang}/`;
};

export const abs = (p: string) => `${site.url}${p}`;

/** Strip the language prefix: "/ar/companies/" -> "companies/" */
export const unlocalized = (p: string) => p.replace(/^\/(ar|en)\/?/, '');

export const alternates = (p: string) => {
  const rest = unlocalized(p);
  const out = LANGS.map((lang) => ({ lang, href: abs(`/${lang}/${rest}`) }));
  return [...out, { lang: 'x-default', href: abs(`/ar/${rest}`) }];
};

export const swapLang = (p: string, to: Lang) => `/${to}/${unlocalized(p)}`;

export const productPath = (lang: Lang, product: 'companies' | 'government', slug?: string) =>
  path(lang, product, ...(slug ? [slug] : []));
```
