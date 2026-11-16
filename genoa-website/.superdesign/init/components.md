# Components — Genoa Systems

Custom Astro components (no UI library). Styling is global CSS classes in src/styles/global.css + refresh.css (see theme.md).
Text comes from typed content files (src/content/*.ts, src/i18n/ui.ts); components receive `lang` ('ar' | 'en').

### `src/components/Icon.astro`
Inline SVG icon set (stroke icons, 24 viewBox): menu, check, whatsapp, arrow, spark, shield, book, module icons…

```astro
---
/** Inline stroke icons (24x24). Decorative by default (aria-hidden). */
interface Props {
  name: string;
  class?: string;
  label?: string;
}
const { name, class: cls, label } = Astro.props;
const paths: Record<string, string> = {
  ledger: '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M9 8.5h6.5M9 12h6.5M9 15.5h4"/>',
  box: '<path d="M3 7.5 12 3l9 4.5-9 4.5z"/><path d="M3 7.5v9l9 4.5 9-4.5v-9"/><path d="M12 12v9"/>',
  cart: '<circle cx="9.5" cy="19.5" r="1.5"/><circle cx="17" cy="19.5" r="1.5"/><path d="M2.5 4h2.3l2.3 11h11.1l2.3-7.5H6"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.7a3.2 3.2 0 0 1 0 6.2M18 14.3c1.8.8 3 2.6 3 4.7"/>',
  currency: '<circle cx="12" cy="12" r="9"/><path d="M15 8.6c-.6-.9-1.7-1.5-3-1.5-1.8 0-3 1-3 2.3 0 3.1 6 1.7 6 4.9 0 1.4-1.3 2.4-3 2.4-1.4 0-2.6-.6-3.2-1.6M12 5.3v1.8M12 16.9v1.8"/>',
  ship: '<path d="M3 15.5 5 20h14l2-4.5z"/><path d="M5.5 15.5V10h13v5.5"/><path d="M9 10V6h6v4"/>',
  stamp: '<path d="M9.5 3h5v4.5L13.5 11H18a2 2 0 0 1 2 2v3H4v-3a2 2 0 0 1 2-2h4.5l-1-3.5z"/><path d="M5 20h14"/>',
  history: '<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1L3.5 8.5"/><path d="M3.5 3.5v5h5"/><path d="M12 7.5V12l3 2"/>',
  budget: '<path d="M11 3.5A8.5 8.5 0 1 0 20.5 13H11z"/><path d="M14.5 3.3a8.5 8.5 0 0 1 6.2 6.2h-6.2z"/>',
  cheque: '<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6 10.5h4M6 14h6"/><path d="M14.5 14.5c1-1.6 1.8-2.1 2.3-1.1s1 1 1.8-.5"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="m9 15.5 2 2 4-4"/>',
  book: '<path d="M12 6.5C10 5 7 4.5 4 5v14c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V5c-3-.5-6 0-8 1.5z"/><path d="M12 6.5v14"/>',
  database: '<ellipse cx="12" cy="5.5" rx="8" ry="2.5"/><path d="M4 5.5v13c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-13"/><path d="M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5"/>',
  shield: '<path d="M12 3 20 6v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  chart: '<path d="M4 20V11M10 20V5M16 20v-7M2 20h20"/>',
  standard: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="m9 14 2 2 4-4.5"/>',
  spark: '<path d="M11 3.5 12.9 8.6 18 10.5l-5.1 1.9L11 17.5l-1.9-5.1L4 10.5l5.1-1.9z"/><path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
  scan: '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M8.5 9h7M8.5 12h7M8.5 15h4"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  whatsapp: '<path d="M20.5 11.6a8.5 8.5 0 0 1-12.4 7.6L3.5 20.5l1.3-4.4A8.5 8.5 0 1 1 20.5 11.6z"/><path d="M9.2 8.2c-.3 2.9 2.6 6.3 5.8 6.6l1.2-1.4-1.9-1.1-.9.8c-1.1-.4-2-1.4-2.5-2.5l.8-.9-1-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  alert: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.5v.01"/>',
  phone: '<path d="M6.5 3.5h2.8l1.5 4.6-2.1 1.4a11.5 11.5 0 0 0 5.8 5.8l1.4-2.1 4.6 1.5v2.8a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z"/>',
  pin: '<path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
  facebook: '<circle cx="12" cy="12" r="9"/><path d="M15.5 7.5H14a2.5 2.5 0 0 0-2.5 2.5v11M9 13h5.5"/>',
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.8"/><path d="M17.1 6.9h.01"/>',
};
const body = paths[name] ?? paths.check;
---
<svg
  class={cls}
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.8"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden={label ? undefined : 'true'}
  role={label ? 'img' : undefined}
  aria-label={label}
  focusable="false"
  set:html={body}
></svg>

```

### `src/components/HeroLedger.astro`
Home hero illustration: a journal-entry sheet with animated bars + a mini payment-voucher sheet with an approval chain. Decorative, labelled 'رسم توضيحي'.

```astro
---
/* Home hero illustration: a balanced journal entry (Genoa) and a payment
 * voucher going through approval (Genoa Gov). Decorative, no figures. */
import type { Lang } from '../content/types';
import Icon from './Icon.astro';
interface Props { lang: Lang; }
const { lang } = Astro.props;
const T = {
  ar: {
    label: 'رسم توضيحي: قيد يومية متوازن في Genoa، ومستند صرف يمر بسلسلة مصادقة في Genoa Gov',
    entry: 'قيد يومية', account: 'الحساب', dr: 'مدين', cr: 'دائن',
    rows: ['المخزن', 'المجهزين', 'الصندوق'], total: 'المجموع', balanced: 'متوازن',
    voucher: 'مستند صرف', chain: ['تدقيق', 'مصادقة', 'ترحيل'], approved: 'مُصادَق', note: 'رسم توضيحي',
  },
  en: {
    label: 'Illustration: a balanced journal entry in Genoa, and a payment voucher going through an approval workflow in Genoa Gov',
    entry: 'Journal entry', account: 'Account', dr: 'Debit', cr: 'Credit',
    rows: ['Inventory', 'Suppliers', 'Cash'], total: 'Total', balanced: 'Balanced',
    voucher: 'Payment voucher', chain: ['Audit', 'Approve', 'Post'], approved: 'Approved', note: 'Illustration',
  },
}[lang];
---
{/* A div, not a figure: a figure with a caption may not take role="img" (aria-allowed-role). */}
<div class="illus illus-ledger" role="img" aria-label={T.label}>
  <div class="sheet" aria-hidden="true">
    <div class="sheet-head"><span class="sheet-title">{T.entry}</span><span class="tag tag-genoa">Genoa</span></div>
    <div class="ledger">
      <span class="lh">{T.account}</span><span class="lh">{T.dr}</span><span class="lh">{T.cr}</span>
      <span class="acc">{T.rows[0]}</span><span class="cell"><i class="bar dr" style="--w:92%;--d:.3s"></i></span><span class="cell"></span>
      <span class="acc">{T.rows[1]}</span><span class="cell"></span><span class="cell"><i class="bar cr" style="--w:61%;--d:.6s"></i></span>
      <span class="acc">{T.rows[2]}</span><span class="cell"></span><span class="cell"><i class="bar cr" style="--w:31%;--d:.85s"></i></span>
      <span class="rule2"></span>
      <span class="acc total">{T.total}</span><span class="cell"><i class="bar tot" style="--w:92%;--d:1.15s"></i></span><span class="cell"><i class="bar tot" style="--w:92%;--d:1.15s"></i></span>
    </div>
    <span class="stamp stamp-ok" style="--d:1.7s"><Icon name="check" />{T.balanced}</span>
  </div>
  <div class="sheet sheet-mini" aria-hidden="true" style="--d:.7s">
    <div class="sheet-head"><span class="sheet-title">{T.voucher}</span><span class="tag tag-gov">Genoa Gov</span></div>
    <ol class="chain">
      {T.chain.map((c, i) => <li><span class="dot" style={`--d:${1.3 + i * 0.4}s`}><Icon name="check" /></span>{c}</li>)}
    </ol>
    <span class="stamp stamp-gov" style="--d:2.6s">{T.approved}</span>
  </div>
  <span class="illus-note" aria-hidden="true">{T.note}</span>
</div>

```

### `src/components/HeroAgeing.astro`
Companies overview hero illustration: receivables-ageing bar chart card + chart-of-accounts mini card.

```astro
---
/* Genoa hero illustration: customer debt ageing and a chart of accounts
 * under the Unified Accounting System. Decorative, no figures. */
import type { Lang } from '../content/types';
import Icon from './Icon.astro';
interface Props { lang: Lang; }
const { lang } = Astro.props;
const T = {
  ar: {
    label: 'رسم توضيحي: أعمار ذمم الزبائن في Genoa، ودليل حسابات وفق النظام المحاسبي الموحد',
    title: 'أعمار ذمم الزبائن', unit: 'بالأيام', buckets: ['0–30', '31–60', '61–90', 'أكثر من 90'],
    coa: 'دليل الحسابات', uas: 'النظام المحاسبي الموحد', note: 'رسم توضيحي',
  },
  en: {
    label: 'Illustration: customer debt ageing in Genoa, and a chart of accounts under the Unified Accounting System',
    title: 'Customer debt ageing', unit: 'days', buckets: ['0–30', '31–60', '61–90', '90+'],
    coa: 'Chart of accounts', uas: 'Unified Accounting System', note: 'Illustration',
  },
}[lang];
const cols = [
  { h: '88%', c: '#0d7a3a' },
  { h: '58%', c: '#1746a2' },
  { h: '34%', c: '#b7791f' },
  { h: '20%', c: '#b42318' },
];
const tree = [
  { l: 0, w: '62%' }, { l: 1, w: '70%' }, { l: 1, w: '54%' }, { l: 0, w: '58%' }, { l: 1, w: '66%' },
];
---
{/* A div, not a figure: a figure with a caption may not take role="img" (aria-allowed-role). */}
<div class="illus illus-ageing" role="img" aria-label={T.label}>
  <div class="sheet" aria-hidden="true">
    <div class="sheet-head"><span class="sheet-title">{T.title} <small>({T.unit})</small></span><span class="tag tag-genoa">Genoa</span></div>
    <div class="ageing">
      {cols.map((c, i) => <span class="col"><i style={`--h:${c.h};--c:${c.c};--d:${0.3 + i * 0.22}s`}></i></span>)}
    </div>
    <div class="ageing-labels">{T.buckets.map((b) => <span dir={/^[0-9]/.test(b) ? 'ltr' : undefined}>{b}</span>)}</div>
  </div>
  <div class="sheet sheet-mini" aria-hidden="true" style="--d:.8s">
    <div class="sheet-head"><span class="sheet-title">{T.coa}</span><Icon name="standard" class="head-icon" /></div>
    <ul class="tree">
      {tree.map((t, i) => <li style={`--lvl:${t.l}`}><i class={t.l === 0 ? 'lvl0' : ''} style={`--w:${t.w};--d:${1.1 + i * 0.15}s`}></i></li>)}
    </ul>
    <span class="seal" style="--d:2s"><Icon name="check" />{T.uas}</span>
  </div>
  <span class="illus-note" aria-hidden="true">{T.note}</span>
</div>

```

### `src/components/HeroApproval.astro`
Government overview hero illustration: voucher approval workflow.

```astro
---
/* Genoa Gov hero illustration: a payment voucher through a multi-user
 * approval chain, allocation check, posting and audit trail. Decorative. */
import type { Lang } from '../content/types';
import Icon from './Icon.astro';
interface Props { lang: Lang; }
const { lang } = Astro.props;
const T = {
  ar: {
    label: 'رسم توضيحي: مستند صرف يمر بسلسلة مصادقة متعددة المستخدمين في Genoa Gov، مع التحقق من كفاية التخصيص وسجل التدقيق',
    voucher: 'مستند صرف', steps: ['تنظيم', 'تدقيق', 'مصادقة'], example: 'مثال على سلسلة المصادقة',
    allocation: 'كفاية التخصيص', posted: 'مُرحَّل', trail: 'سجل التدقيق', note: 'رسم توضيحي',
  },
  en: {
    label: 'Illustration: a payment voucher going through a multi-user approval workflow in Genoa Gov, with an allocation check and an audit trail',
    voucher: 'Payment voucher', steps: ['Prepare', 'Audit', 'Approve'], example: 'Example approval chain',
    allocation: 'Allocation check', posted: 'Posted', trail: 'Audit trail', note: 'Illustration',
  },
}[lang];
---
{/* A div, not a figure: a figure with a caption may not take role="img" (aria-allowed-role). */}
<div class="illus" role="img" aria-label={T.label}>
  <div class="sheet" aria-hidden="true">
    <div class="sheet-head"><span class="sheet-title">{T.voucher}</span><span class="tag tag-gov">Genoa Gov</span></div>
    <div class="fields">
      {['74%', '58%', '66%'].map((w, i) => <div><i style={`--w:${i === 1 ? '70%' : '85%'};--d:${0.2 + i * 0.12}s`}></i><i class="v" style={`--w:${w};--d:${0.3 + i * 0.12}s`}></i></div>)}
    </div>
    <ol class="chain gov">
      {T.steps.map((s, i) => <li><span class="dot" style={`--d:${0.9 + i * 0.45}s`}><Icon name="check" /></span>{s}</li>)}
    </ol>
    <p class="chain-note">{T.example}</p>
    <div class="check-row" style="--d:2.3s"><span class="dot ok"><Icon name="check" /></span>{T.allocation}</div>
    <span class="stamp stamp-post" style="--d:2.8s">{T.posted}</span>
  </div>
  <div class="sheet sheet-mini" aria-hidden="true" style="--d:1s">
    <div class="sheet-head"><span class="sheet-title">{T.trail}</span><Icon name="history" class="head-icon" /></div>
    <ul class="log">
      {['72%', '56%', '64%'].map((w, i) => <li style={`--d:${1.5 + i * 0.3}s`}><Icon name="history" /><i style={`--w:${w}`}></i></li>)}
    </ul>
  </div>
  <span class="illus-note" aria-hidden="true">{T.note}</span>
</div>

```

### `src/components/AiShowcase.astro`
Dark AI band on the home page: eyebrow pill, heading, intro, two cards (AI assistant chat art, invoice-from-image scan art) with violet icon, title link, summary, 'اعرف المزيد ←'.

```astro
---
/* Home: the AI features of Genoa (every feature marked `ai` in the content), each with a small drawing.
 * The drawings are decorative and carry no figures or sample text, so they claim nothing about what the
 * features can do; names and summaries come from the feature pages. */
import type { Lang } from '../content/types';
import { products } from '../content';
import { home } from '../content/pages';
import { t } from '../i18n/ui';
import { path } from '../lib/routes';
import Icon from './Icon.astro';
interface Props { lang: Lang; }
const { lang } = Astro.props;
const h = home[lang].ai;
const features = products.companies.features.filter((f) => f.ai);
const T = {
  ar: { image: 'صورة الفاتورة', invoice: 'الفاتورة في Genoa', user: 'المستخدم', assistant: 'المساعد الذكي' },
  en: { image: 'Invoice image', invoice: 'Invoice in Genoa', user: 'User', assistant: 'AI assistant' },
}[lang];
---
<section class="ai-band" aria-labelledby="ai-heading">
  <div class="container">
    <div class="ai-head" data-reveal>
      <span class="ai-eyebrow"><Icon name="spark" />{h.eyebrow}</span>
      <h2 id="ai-heading">{h.heading}</h2>
      <p>{h.intro}</p>
    </div>
    <ul class="ai-grid">
      {features.map((f, i) => {
        const c = f.content[lang];
        return (
          <li data-reveal style={`--i:${i}`}>
            <div class="ai-card">
              {f.slug === 'invoice-from-image' ? (
                <div class="ai-art art-scan" aria-hidden="true">
                  <div class="art-col">
                    <div class="paper"><i></i><i></i><i></i><i></i><i></i><b class="scanline"></b></div>
                    <span class="art-label">{T.image}</span>
                  </div>
                  <span class="art-arrow"><Icon name="arrow" class="flip-rtl" /></span>
                  <div class="art-col">
                    <div class="doc">
                      <div class="doc-row"><i></i><i></i><Icon name="check" /></div>
                      <div class="doc-row"><i></i><i></i><Icon name="check" /></div>
                      <div class="doc-row"><i></i><i></i><Icon name="check" /></div>
                      <div class="doc-total"><i></i><i></i></div>
                    </div>
                    <span class="art-label">{T.invoice}</span>
                  </div>
                </div>
              ) : (
                <div class="ai-art art-chat" aria-hidden="true">
                  <div class="bubble from-user"><span class="who">{T.user}</span><i></i><i></i></div>
                  <div class="bubble from-ai"><span class="who"><Icon name="spark" />{T.assistant}</span><i></i><i></i><i></i></div>
                  <div class="typing"><b></b><b></b><b></b></div>
                </div>
              )}
              <div class="ai-card-body">
                <span class="ai-icon"><Icon name={f.icon} /></span>
                <h3><a href={path(lang, 'companies', f.slug)}>{c.navLabel}</a></h3>
                <p>{c.cardSummary}</p>
                <span class="more" aria-hidden="true">{t('learnMore', lang)} <Icon name="arrow" class="flip-rtl" /></span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
    <p class="ai-note" data-reveal><Icon name="shield" />{h.note} <span class="ai-illus-note">({t('illustration', lang)})</span></p>
  </div>
</section>

```

### `src/components/CtaBand.astro`
Dark rounded call-to-action panel: heading, body, primary + WhatsApp buttons.

```astro
---
import type { Lang } from '../content/types';
import { t } from '../i18n/ui';
import { path } from '../lib/routes';
import { whatsappLink } from '../config/site';
import Icon from './Icon.astro';
interface Props { lang: Lang; }
const { lang } = Astro.props;
---
<section class="section" aria-labelledby="cta-heading">
  <div class="container">
    <div class="cta-band" data-reveal>
      <h2 id="cta-heading">{t('ctaHeading', lang)}</h2>
      <p>{t('ctaBody', lang)}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href={path(lang, 'contact')}>{t('bookDemo', lang)}</a>
        <a class="btn btn-wa" href={whatsappLink(t('whatsappPrefill', lang))} rel="noopener" target="_blank">
          <Icon name="whatsapp" />{t('whatsapp', lang)}
        </a>
      </div>
    </div>
  </div>
</section>

```

### `src/components/Screenshot.astro`
Framed product screenshot (browser-bar dots) with srcset + caption and 'بيانات تجريبية' tag.

```astro
---
import type { Lang } from '../content/types';
import { t } from '../i18n/ui';
import { screenshotFor } from '../content/screenshots';
interface Props {
  lang: Lang;
  /** Key such as "companies-inventory"; see src/content/screenshots.ts */
  id: string;
  /** Alt text and caption used while the slot is still a placeholder. */
  alt: string;
  caption: string;
  eager?: boolean;
  /** Smaller caption, used in galleries. */
  compact?: boolean;
  /** The image's displayed width, for the browser's choice from srcset. Defaults to the article column or gallery card. */
  sizes?: string;
}
const { lang, id, alt, caption, eager = false, compact = false } = Astro.props;
const shot = screenshotFor(id);
const realAlt = shot.alt?.[lang];
const altText = shot.placeholder ? alt : realAlt ?? t('realShotNote', lang);
const captionText = shot.placeholder ? caption : realAlt ? `${realAlt}` : t('realShotNote', lang);
// Smaller copies let a phone download a 720px image instead of the 1440px original. The default sizes match the
// layouts measured at 360 to 1920px: the article column (782px at most, 100vw minus the gutters on narrow screens)
// and the gallery card (min(84vw, 640px)).
const srcset = shot.widths?.length
  ? [...shot.widths.map((w) => `${shot.src.replace(/\.webp$/, `-${w}w.webp`)} ${w}w`), `${shot.src} ${shot.width}w`].join(', ')
  : undefined;
const sizes = srcset
  ? (Astro.props.sizes ?? (compact ? 'min(84vw, 640px)' : '(min-width: 1000px) min(782px, calc(100vw - 390px)), calc(100vw - 34px)'))
  : undefined;
---
<figure class:list={['shot', { framed: !shot.placeholder, compact }]}>
  {shot.placeholder ? (
    <img src={shot.src} alt={altText} width={shot.width} height={shot.height} loading={eager ? 'eager' : 'lazy'} decoding="async" />
  ) : (
    <a class="shot-link" href={shot.src} target="_blank" rel="noopener" title={t('openFullSize', lang)}>
      <span class="shot-bar" aria-hidden="true"><i></i><i></i><i></i></span>
      <img src={shot.src} srcset={srcset} sizes={sizes} alt={altText} width={shot.width} height={shot.height} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </a>
  )}
  <figcaption>
    <span class:list={['tag', { demo: !shot.placeholder }]}>{shot.placeholder ? t('placeholderTag', lang) : t('demoDataTag', lang)}</span>
    <span>{captionText}</span>
  </figcaption>
</figure>

```

### `src/components/ScreensGallery.astro`
Horizontal gallery of screenshots for product pages.

```astro
---
/* Horizontal, scroll-snapping gallery of the real screenshots of one product
 * (overview + modules). Renders nothing until at least two real screenshots
 * exist. CSS only, no JavaScript. */
import type { Lang, Product } from '../content/types';
import { t } from '../i18n/ui';
import { path } from '../lib/routes';
import { hasRealScreenshot } from '../content/screenshots';
import Screenshot from './Screenshot.astro';
interface Props { lang: Lang; product: Product; }
const { lang, product } = Astro.props;
const items = [
  { id: `${product.id}-overview`, label: product.overview[lang].productName, href: path(lang, product.id), alt: product.overview[lang].screenshotAlt, caption: product.overview[lang].screenshotCaption },
  ...product.features.map((f) => ({
    id: `${product.id}-${f.slug}`,
    label: f.content[lang].navLabel,
    href: path(lang, product.id, f.slug),
    alt: f.content[lang].screenshotAlt,
    caption: f.content[lang].screenshotCaption,
  })),
].filter((it) => hasRealScreenshot(it.id));
---
{items.length >= 2 && (
  <section class="section gallery-section" data-product={product.id} aria-labelledby="gallery-heading">
    <div class="container">
      <div class="section-head" data-reveal>
        <h2 id="gallery-heading">{t('galleryHeading', lang)}</h2>
        <p>{t('galleryIntro', lang)}</p>
      </div>
    </div>
    <ul class="gallery" role="list">
      {items.map((it, i) => (
        <li data-reveal style={`--i:${i % 3}`}>
          <a class="gallery-label" href={it.href}>{it.label}</a>
          <Screenshot lang={lang} id={it.id} alt={it.alt} caption={it.caption} compact />
        </li>
      ))}
    </ul>
  </section>
)}

```

### `src/components/FeatureCards.astro`
Grid of feature link cards (icon, title, summary) on product overview pages.

```astro
---
import type { Lang, Product } from '../content/types';
import { t } from '../i18n/ui';
import { path } from '../lib/routes';
import Icon from './Icon.astro';
interface Props { lang: Lang; product: Product; slugs?: string[]; headingLevel?: 'h2' | 'h3'; }
const { lang, product, slugs } = Astro.props;
const features = slugs ? slugs.map((s) => product.features.find((f) => f.slug === s)!).filter(Boolean) : product.features;
---
<ul class="cards">
  {features.map((f, i) => {
    const c = f.content[lang];
    return (
      <li data-reveal style={`--i:${i % 3}`}>
        <div class="card" data-product={product.id} data-ai={f.ai ? 'true' : undefined}>
          <span class="icon"><Icon name={f.icon} /></span>
          <h3><a href={path(lang, product.id, f.slug)}>{c.navLabel}</a></h3>
          {f.optional && <span><span class="badge-optional">{t('optionalBadge', lang)}</span></span>}
          {f.ai && <span><span class="badge-ai"><Icon name="spark" />{t('aiBadge', lang)}</span></span>}
          <p>{c.cardSummary}</p>
          <span class="more" aria-hidden="true">{t('learnMore', lang)} <Icon name="arrow" class="flip-rtl" /></span>
        </div>
      </li>
    );
  })}
</ul>
<style>
  .more { display: inline-flex; align-items: center; gap: 0.35rem; }
  .more :global(svg) { width: 18px; height: 18px; }
</style>

```

### `src/components/KeyFacts.astro`
'معلومات سريعة' quick-facts list (label/value stacked cards) in product page sidebar.

```astro
---
import type { KeyFact, Lang } from '../content/types';
import { t } from '../i18n/ui';
interface Props { lang: Lang; facts: KeyFact[]; headingId?: string; }
const { lang, facts, headingId = 'key-facts' } = Astro.props;
---
<section aria-labelledby={headingId} data-reveal>
  <h2 id={headingId}>{t('keyFacts', lang)}</h2>
  <dl class="facts">
    {facts.map((f) => (
      <div>
        <dt>{f.label}</dt>
        <dd>{f.value}</dd>
      </div>
    ))}
  </dl>
</section>

```

### `src/components/AnswerBox.astro`
'باختصار' answer box: bordered card with label holding the page's answer paragraph.

```astro
---
import type { Lang } from '../content/types';
import { t } from '../i18n/ui';
interface Props { lang: Lang; text: string; }
const { lang, text } = Astro.props;
---
<div class="answer-box">
  <span class="label">{t('inShort', lang)}</span>
  <p class="answer">{text}</p>
</div>

```

### `src/components/FaqList.astro`
FAQ accordion (button toggles + hidden bodies; all open without JS).

```astro
---
import type { Faq } from '../content/types';
interface Props {
  faqs: Faq[];
  idPrefix?: string;
  /**
   * Render as an accordion; the first answer starts open. Each question stays a real <h3> (a heading inside
   * <summary> is dropped by some screen readers) with the toggle button inside it, and closed answers use
   * hidden="until-found", so find-in-page still reaches them where supported. Content stays in the HTML.
   */
  collapsible?: boolean;
}
const { faqs, idPrefix = 'q', collapsible = false } = Astro.props;
---
<div class="faq-list">
  {faqs.map((f, i) => {
    const id = `${idPrefix}-${i + 1}`;
    const open = i === 0;
    return collapsible ? (
      <div class="faq-item faq-acc" data-reveal style={`--i:${i % 4}`}>
        <h3 id={id}>
          <button type="button" class="faq-toggle" commandfor={`${id}-a`} command="--toggle" aria-expanded={open ? 'true' : 'false'}>
            <span>{f.q}</span>
            <span class="chev" aria-hidden="true"></span>
          </button>
        </h3>
        <div id={`${id}-a`} class="faq-body" hidden={open ? undefined : 'until-found'}>{f.a.map((p) => <p>{p}</p>)}</div>
      </div>
    ) : (
      <article class="faq-item" aria-labelledby={id} data-reveal style={`--i:${i % 4}`}>
        <h3 id={id}>{f.q}</h3>
        {f.a.map((p) => <p>{p}</p>)}
      </article>
    );
  })}
</div>
<script>
  // Accordion toggles. Browsers with invoker commands send a "command" event to the answer; others get the
  // same toggle from a click listener.
  const toggle = (button: Element, content: HTMLElement) => {
    content.hidden = (content.hidden ? false : 'until-found') as unknown as boolean;
    button.setAttribute('aria-expanded', String(!content.hidden));
  };
  if (Object.prototype.hasOwnProperty.call(HTMLButtonElement.prototype, 'commandForElement')) {
    // Command events do not bubble, hence capture.
    document.addEventListener('command', ((event: Event & { command: string; source: Element }) => {
      if (event.command !== '--toggle' || !(event.target instanceof HTMLElement)) return;
      toggle(event.source, event.target);
    }) as EventListener, { capture: true });
  } else {
    document.addEventListener('click', (event) => {
      const button = (event.target as Element | null)?.closest?.('button[command="--toggle"][commandfor]');
      const content = button && document.getElementById(button.getAttribute('commandfor') ?? '');
      if (button && content) toggle(button, content);
    });
  }
  // Find-in-page opens a closed answer itself: mirror that in its button.
  document.addEventListener('beforematch', (event) => {
    const id = (event.target as HTMLElement).id;
    document.querySelector(`[commandfor="${CSS.escape(id)}"]`)?.setAttribute('aria-expanded', 'true');
  });
</script>

```

### `src/components/Sections.astro`
Renders typed content sections (h2 + paragraphs/lists) for article-style pages.

```astro
---
import type { Section } from '../content/types';
interface Props { sections: Section[]; idPrefix?: string; }
const { sections, idPrefix = 'section' } = Astro.props;
---
{sections.map((s, i) => (
  <section aria-labelledby={`${idPrefix}-${i + 1}`} data-reveal>
    <h2 id={`${idPrefix}-${i + 1}`}>{s.heading}</h2>
    {s.body.map((p) => <p>{p}</p>)}
    {s.bullets && s.bullets.length > 0 && (
      <ul>{s.bullets.map((b) => <li>{b}</li>)}</ul>
    )}
  </section>
))}

```

### `src/components/ErrorMsg.astro`
Form field error message.

```astro
---
/* A form field's error message: hidden until its field is :user-invalid (CSS), then linked to the field by the
   contact page's script. It starts with an icon whose text alternative says it is an error, so the state is not
   shown by colour alone. */
import type { Lang } from '../content/types';
import { contact } from '../content/pages';
import Icon from './Icon.astro';
interface Props { id: string; text: string; }
const { id, text } = Astro.props;
const lang = (Astro.params.lang ?? 'ar') as Lang;
---
<p id={id} class="error-msg"><Icon name="alert" label={contact[lang].errorLabel} /><span>{text}</span></p>

```

