# Layouts — Genoa Systems (Astro 7, static, vanilla CSS)

Every page uses `BaseLayout`: skip link → glass sticky `Header` → `<main>` slot → dark `Footer`. RTL Arabic at /ar/, LTR English at /en/.

### `src/layouts/BaseLayout.astro`
App shell: <head> SEO/OG/hreflang, font preloads, scroll-progress bar, Header, main, Footer, inline scroll-reveal script.

```astro
---
import '../styles/global.css';
import '../styles/refresh.css';
import type { Lang } from '../content/types';
import { dir, ogLocale, otherLang, t } from '../i18n/ui';
import { abs, alternates } from '../lib/routes';
import { site } from '../config/site';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

interface Props {
  lang: Lang;
  title: string;
  description: string;
  /** Root-relative path of the OG image (1200x630 PNG). */
  ogImage?: string;
  ogImageAlt?: string;
  jsonld?: object;
  /** false for pages without a translated twin (404). */
  hasAlternate?: boolean;
  noindex?: boolean;
}

const {
  lang,
  title,
  description,
  ogImage = `/og/og-home-${lang}.png`,
  ogImageAlt,
  jsonld,
  hasAlternate = true,
  noindex = false,
} = Astro.props;

const pathname = Astro.url.pathname.endsWith('/') ? Astro.url.pathname : `${Astro.url.pathname}/`;
const canonical = abs(pathname);
const other = otherLang(lang);
const imageUrl = abs(ogImage);
const imageAlt = ogImageAlt ?? title;
// font-display: optional (no layout shift); preload both weights of the page's script so they are usually ready in time.
const fontSubset = lang === 'ar' ? 'arabic' : 'latin';
const fontPreloads = [400, 700].map((w) => `/fonts/plex-arabic-${fontSubset}-${w}.woff2`);
const ld = jsonld ? JSON.stringify(jsonld).replace(/</g, '\\u003c') : null;
const robots = site.noindex
  ? 'noindex, nofollow'
  : noindex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1';
---
<!doctype html>
<html lang={lang} dir={dir(lang)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* Follow the phone's own text-size setting (where supported); the layout is checked up to 200%. */}
    <meta name="text-scale" content="scale" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={robots} />
    {!noindex && <link rel="canonical" href={canonical} />}
    {hasAlternate && alternates(pathname).map((a) => <link rel="alternate" hreflang={a.lang} href={a.href} />)}

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={site.companyName} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:locale" content={ogLocale(lang)} />
    {hasAlternate && <meta property="og:locale:alternate" content={ogLocale(other)} />}
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={imageAlt} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="twitter:image:alt" content={imageAlt} />

    {/* Points AI assistants at the plain-text summary of the site. */}
    <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <meta name="theme-color" content="#0f1b2d" />
    <meta name="format-detection" content="telephone=no" />
    {fontPreloads.map((href) => <link rel="preload" href={href} as="font" type="font/woff2" crossorigin />)}
    {ld && <script type="application/ld+json" set:html={ld} />}
    {/* Without scripts the FAQ toggles cannot open their answers, so show every answer. */}
    <noscript><style is:inline>.faq-acc .faq-body[hidden] { display: block !important; content-visibility: visible !important; padding-block-end: 1.1rem !important; }</style></noscript>
  </head>
  <body>
    <div class="scroll-progress" aria-hidden="true"></div>
    <a class="skip-link" href="#main">{t('skipToContent', lang)}</a>
    <Header lang={lang} pathname={pathname} hasAlternate={hasAlternate} />
    <main id="main" tabindex="-1">
      <slot />
    </main>
    <Footer lang={lang} pathname={pathname} hasAlternate={hasAlternate} />
    <script is:inline>
      /* Scroll reveal. Progressive: only elements below the fold are hidden, and
         only once this script runs; reduced-motion users get no animation. */
      (function () {
        if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        var vh = window.innerHeight;
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
          });
        }, { rootMargin: '0px 0px -8% 0px' });
        document.querySelectorAll('[data-reveal]').forEach(function (el) {
          if (el.getBoundingClientRect().top < vh * 0.92) return;
          el.classList.add('reveal');
          io.observe(el);
        });
      })();
    </script>
  </body>
</html>

```

### `src/components/Header.astro`
Sticky glass header: Logo at inline-start; nav links (Genoa للشركات, Genoa Gov للدوائر الحكومية, الأمان, من نحن), pill language switch, primary 'احجز عرضاً توضيحياً' button. Collapses into a popover menu ('القائمة' button with menu icon) when the row does not fit.

```astro
---
import type { Lang } from '../content/types';
import { t, otherLang } from '../i18n/ui';
import { path, swapLang } from '../lib/routes';
import Logo from './Logo.astro';
import Icon from './Icon.astro';
interface Props { lang: Lang; pathname: string; hasAlternate?: boolean; }
const { lang, pathname, hasAlternate = true } = Astro.props;
const other = otherLang(lang);
const links = [
  { href: path(lang, 'companies'), label: t('companies', lang) },
  { href: path(lang, 'government'), label: t('government', lang) },
  { href: path(lang, 'security-backups'), label: t('securityShort', lang) },
  { href: path(lang, 'about'), label: t('about', lang) },
];
const isCurrent = (href: string) => pathname === href;
const inSection = (href: string) => pathname !== href && pathname.startsWith(href);
const altHref = hasAlternate ? swapLang(pathname, other) : path(other);
---
<!--
  One navigation for every width. The links are a popover opened by the menu button (light dismiss and
  Escape come with it); the script below shows them inline instead whenever the whole row fits, so a
  longer translation or larger text moves the switch point by itself. Without the script the menu stays
  collapsed at every width.
-->
<header class="site-header">
  <div class="container header-inner">
    <Logo lang={lang} />
    <nav class="site-nav" aria-label={t('mainNav', lang)}>
      <button class="menu-button" type="button" popovertarget="site-menu" popovertargetaction="toggle" aria-controls="site-menu">
        <Icon name="menu" /><span>{t('menu', lang)}</span>
      </button>
      <ul id="site-menu" class="nav-list site-menu" popover="auto">
        {links.map((l) => (
          <li>
            <a href={l.href} aria-current={isCurrent(l.href) ? 'page' : undefined} data-section={inSection(l.href) ? 'true' : undefined}>
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a class="lang-switch" href={altHref} hreflang={other} lang={other} title={t('switchLangLabel', lang)}>
            {t('switchLang', lang)}
          </a>
        </li>
        <li>
          <a class="btn btn-primary" href={path(lang, 'contact')} aria-current={isCurrent(path(lang, 'contact')) ? 'page' : undefined}>
            {t('bookDemo', lang)}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
<style>
  .menu-button :global(svg) { width: 22px; height: 22px; }
</style>
<script>
  // Browsers without the Popover API (for example Safari before 17) get the polyfill, and only they load it.
  if (!Object.prototype.hasOwnProperty.call(HTMLElement.prototype, 'popover')) {
    import('@oddbird/popover-polyfill');
  }

  const header = document.querySelector<HTMLElement>('.site-header');
  const inner = header?.querySelector<HTMLElement>('.header-inner');
  const nav = header?.querySelector<HTMLElement>('.site-nav');
  const menu = document.getElementById('site-menu');

  if (header && inner && nav && menu) {
    // setAttribute/removeAttribute and this selector, not the popover property or :popover-open alone, so the
    // polyfill (which marks an open popover with the class ":popover-open") works the same.
    const isOpen = () => menu.matches(':is(:popover-open, .\\:popover-open)');
    let collapsedWidth = 0;

    const layout = () => {
      const width = header.clientWidth;
      const wasWide = header.classList.contains('is-wide');
      // While collapsed, measure again only when there is more room than when it collapsed: measuring on
      // every shrink would switch the layout back and forth.
      if (!wasWide && width <= collapsedWidth) return;
      const wasOpen = isOpen();
      header.classList.add('is-measuring', 'is-wide');
      const wide = inner.scrollWidth <= inner.clientWidth;
      header.classList.toggle('is-wide', wide);
      if (wide) {
        menu.removeAttribute('popover');
      } else {
        collapsedWidth = width;
        if (!menu.hasAttribute('popover')) menu.setAttribute('popover', 'auto');
        // Taking the attribute off closed an open menu; a still-collapsed layout keeps it open.
        if (wasOpen && !isOpen()) menu.showPopover();
      }
      requestAnimationFrame(() => header.classList.remove('is-measuring'));
    };

    const observer = new ResizeObserver(layout);
    observer.observe(header);
    observer.observe(menu);

    // Tabbing out of the open menu closes it, so it never covers the link that receives focus next.
    nav.addEventListener('focusout', (event) => {
      const next = event.relatedTarget;
      if (next instanceof Node && !nav.contains(next) && menu.hasAttribute('popover') && isOpen()) menu.hidePopover();
    });
  }
</script>

```

### `src/components/Footer.astro`
Dark navy footer (#0f1b2d): logo + company intro; link columns for Genoa, Genoa Gov, Company, Academic Accountant (with Facebook/Instagram circle icons); bottom bar with copyright and demo-data note.

```astro
---
import type { Lang } from '../content/types';
import { productList } from '../content';
import { guides } from '../content/guides';
import { t, otherLang } from '../i18n/ui';
import { path, swapLang } from '../lib/routes';
import { site, companyIntro } from '../config/site';
import Logo from './Logo.astro';
import AaSocial from './aa/AaSocial.astro';
import { aaContactBlock } from '../content/academic-accountant';
interface Props { lang: Lang; pathname: string; hasAlternate?: boolean; }
const { lang, pathname, hasAlternate = true } = Astro.props;
const other = otherLang(lang);
const year = new Date().getFullYear();
---
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <Logo lang={lang} />
        <p>{lang === 'ar' ? `${companyIntro('ar')}، ${t('footerTagline', lang)}` : `${companyIntro('en')}. ${t('footerTagline', lang)}`}</p>
      </div>
      {productList.map((p) => (
        <nav aria-labelledby={`footer-${p.id}`}>
          <h2 id={`footer-${p.id}`}>{p.id === 'companies' ? t('companies', lang) : t('government', lang)}</h2>
          <ul>
            <li><a href={path(lang, p.id)}>{t('productOverview', lang)} {p.brand}</a></li>
            {p.features.map((f) => (
              <li><a href={path(lang, p.id, f.slug)}>{f.content[lang].navLabel}</a></li>
            ))}
            <li><a href={path(lang, p.id, 'faq')}>{t('faq', lang)}: {p.brand}</a></li>
          </ul>
        </nav>
      ))}
      <nav aria-labelledby="footer-company">
        <h2 id="footer-company">{t('footerCompany', lang)}</h2>
        <ul>
          <li><a href={path(lang, 'about')}>{t('about', lang)}</a></li>
          <li><a href={path(lang, 'security-backups')}>{t('security', lang)}</a></li>
          {guides.map((g) => <li><a href={path(lang, 'guides', g.slug)}>{g.content[lang].navLabel}</a></li>)}
          <li><a href={path(lang, 'contact')}>{t('bookDemo', lang)}</a></li>
          <li><a href="/sitemap.xml">{t('sitemap', lang)}</a></li>
          <li><a href="/llms.txt">{t('forAI', lang)}</a></li>
          <li>
            <a href={hasAlternate ? swapLang(pathname, other) : path(other)} hreflang={other} lang={other}>{t('switchLang', lang)}</a>
          </li>
        </ul>
      </nav>
      {/* Academic Accountant: an accounting office that works with Genoa Systems. The profiles are the office's own. */}
      <nav aria-labelledby="footer-aa">
        <h2 id="footer-aa">{t('academicAccountant', lang)}</h2>
        <ul>
          <li><a href={path(lang, 'academic-accountant')}>{t('aaHubLink', lang)}</a></li>
          <li><a href={path(lang, 'academic-accountant', 'services')}>{t('aaServicesLink', lang)}</a></li>
        </ul>
        <p class="footer-follow">{aaContactBlock[lang].followLabel}</p>
        <AaSocial lang={lang} />
      </nav>
    </div>
    <div class="footer-bottom">
      <span>© {year} {site.companyName}. {t('rights', lang)}</span>
      <span>{t('footerNote', lang)}</span>
    </div>
  </div>
</footer>
<style>
  .footer-follow {
    margin: 1rem 0 0.5rem;
    color: #fff;
    font-weight: 700;
  }
  .site-footer :global(.aa-social a) {
    padding: 0;
  }
  .site-footer :global(.aa-social a:hover) {
    background: #fff;
    color: #0c1626;
  }
</style>

```

### `src/components/Logo.astro`
Logo link: blue rounded tile holding the BrandMark + 'Genoa Systems' wordmark (700).

```astro
---
import { path } from '../lib/routes';
import type { Lang } from '../content/types';
import BrandMark from './BrandMark.astro';
interface Props { lang: Lang; }
const { lang } = Astro.props;
---
<a class="logo" href={path(lang)} aria-label={lang === 'ar' ? 'Genoa Systems — الصفحة الرئيسية' : 'Genoa Systems — home'}>
  <span class="logo-tile"><BrandMark class="logo-mark" /></span>
  <span>Genoa Systems</span>
</a>

```

### `src/components/BrandMark.astro`
The Genoa lighthouse mark (inline SVG). Tower in currentColor (white on the blue tile), amber beams, light-blue waves.

```astro
---
/*
 * The Genoa product mark, the same drawing the Genoa accounting app uses
 * (UAS repo: Views/Shared/_BrandMark.cshtml): the Lanterna, the lighthouse
 * tower that is the emblem of Genoa, with its two tiers and galleries, a beam
 * to each side and the harbour below. The tower takes the text colour.
 * Each copy gets its own gradient ids so several copies can share a page.
 */
interface Props { class?: string; }
const { class: cls } = Astro.props;
const id = 'mark' + Math.random().toString(36).slice(2, 10);
---
<svg class={cls} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id={`${id}l`} x1="1" y1="0" x2="0" y2="0">
      <stop offset="0" stop-color="#fbbf24" stop-opacity=".95" />
      <stop offset="1" stop-color="#fbbf24" stop-opacity="0" />
    </linearGradient>
    <linearGradient id={`${id}r`} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#fbbf24" stop-opacity=".95" />
      <stop offset="1" stop-color="#fbbf24" stop-opacity="0" />
    </linearGradient>
  </defs>
  <path d="M29 12.4 2.5 4.6v15.8z" fill={`url(#${id}l)`} />
  <path d="M35 12.4 61.5 4.6v15.8z" fill={`url(#${id}r)`} />
  <circle cx="32" cy="12.4" r="6.6" fill="#fbbf24" opacity=".2" />
  <path d="M32 2.4v3.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
  <path d="M27.6 9.5a4.4 4.4 0 0 1 8.8 0z" fill="currentColor" />
  <rect x="28.5" y="9.5" width="7" height="5.9" rx=".8" fill="#fbbf24" />
  <rect x="25" y="15.2" width="14" height="2.4" rx=".9" fill="currentColor" />
  <path d="M26 17.6h12l-1.5 1.9h-9z" fill="currentColor" />
  <path d="M27.6 19.5h8.8l1 12.6H26.6z" fill="currentColor" />
  <rect x="22.2" y="31.9" width="19.6" height="2.8" rx="1" fill="currentColor" />
  <path d="M23.4 34.7h17.2l-1.7 2.1H25.1z" fill="currentColor" />
  <path d="M25.1 36.8h13.8l1.9 14.4H23.2z" fill="currentColor" />
  <rect x="20.6" y="51.2" width="22.8" height="2.6" rx="1" fill="currentColor" />
  <path d="M32 19.5h4.4l1 12.6H32zM32 36.8h6.9l1.9 14.4H32z" fill="#0f172a" opacity=".13" />
  <rect x="30.9" y="23.2" width="2.2" height="4.4" rx="1.1" fill="#1e3a8a" opacity=".85" />
  <rect x="30.7" y="40.6" width="2.6" height="5.8" rx="1.3" fill="#1e3a8a" opacity=".85" />
  <path d="M8.6 58q3.9-3 7.8 0t7.8 0 7.8 0 7.8 0 7.8 0 7.8 0" fill="none" stroke="#93c5fd" stroke-width="2.1" stroke-linecap="round" />
  <path d="M16.4 62.4q3.9-2.6 7.8 0t7.8 0 7.8 0 7.8 0" fill="none" stroke="#93c5fd" stroke-width="1.9" stroke-linecap="round" opacity=".55" />
</svg>

```

### `src/components/Breadcrumbs.astro`
Breadcrumbs used in inner-page heroes.

```astro
---
import type { Lang } from '../content/types';
import { t } from '../i18n/ui';
interface Props { lang: Lang; items: { name: string; href: string }[]; }
const { lang, items } = Astro.props;
---
<nav class="breadcrumbs" aria-label={t('breadcrumb', lang)}>
  <ol>
    {items.map((it, i) => (
      <li>
        {i === items.length - 1 ? <span aria-current="page">{it.name}</span> : <a href={it.href}>{it.name}</a>}
      </li>
    ))}
  </ol>
</nav>

```

### `src/components/aa/AaSocial.astro`
Circle icon links (Facebook, Instagram) for the Academic Accountant office, used in the footer.

```astro
---
/** The office's Facebook and Instagram profiles as icon links (its own profiles, not Genoa Systems'). */
import type { Lang } from '../../content/types';
import { aaContactBlock, aaOffice } from '../../content/academic-accountant';
import Icon from '../Icon.astro';
interface Props { lang: Lang; class?: string; }
const { lang, class: cls } = Astro.props;
const c = aaContactBlock[lang];
const links = [
  { href: aaOffice.profiles.facebook, icon: 'facebook', label: c.facebook },
  { href: aaOffice.profiles.instagram, icon: 'instagram', label: c.instagram },
];
---
<ul class:list={['aa-social', cls]}>
  {links.map((l) => (
    <li>
      <a href={l.href} rel="noopener" target="_blank" aria-label={l.label} title={l.label}>
        <Icon name={l.icon} />
      </a>
    </li>
  ))}
</ul>
<style>
  .aa-social {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .aa-social li + li {
    margin: 0;
  }
  .aa-social a {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border: 1px solid currentColor;
  }
  .aa-social :global(svg) {
    width: 22px;
    height: 22px;
  }
</style>

```

