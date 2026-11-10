// Renders the Open Graph images (1200x630 PNG) and the raster icons with the
// pre-installed Playwright Chromium. Run with: npm run og
// Output is committed under public/, so builds do not need a browser.
import { createRequire } from 'node:module';
import { readFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

// Playwright is resolved CommonJS-style so a globally installed copy works too
// (install locally with `npm i -D playwright` if it is not found).
const { chromium } = createRequire(import.meta.url)('playwright');

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pub = (p) => resolve(root, 'public', p);
const font = (f) => `data:font/woff2;base64,${readFileSync(pub(`fonts/${f}`)).toString('base64')}`;
const faces = `
@font-face{font-family:P;font-weight:400;src:url(${font('plex-arabic-arabic-400.woff2')})}
@font-face{font-family:P;font-weight:700;src:url(${font('plex-arabic-arabic-700.woff2')})}
@font-face{font-family:P;font-weight:400;src:url(${font('plex-arabic-latin-400.woff2')});unicode-range:U+0000-00FF,U+2000-206F}
@font-face{font-family:P;font-weight:700;src:url(${font('plex-arabic-latin-700.woff2')});unicode-range:U+0000-00FF,U+2000-206F}`;
const logo = readFileSync(pub('favicon.svg'), 'utf8');

const cards = [
  {
    file: 'og-home-ar', lang: 'ar', accent: '#5b8def',
    kicker: 'Genoa · Genoa Gov',
    title: 'برامج محاسبة عراقية للشركات وللدوائر الحكومية',
    sub: 'حلول مالية ومحاسبية بأحدث التقنيات والذكاء الاصطناعي',
  },
  {
    file: 'og-home-en', lang: 'en', accent: '#5b8def',
    kicker: 'Genoa · Genoa Gov',
    title: 'Accounting software for Iraqi companies and government departments',
    sub: 'Financial and accounting solutions with the latest technology and AI',
  },
  {
    file: 'og-companies-ar', lang: 'ar', accent: '#5b8def',
    kicker: 'Genoa للشركات',
    title: 'الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين',
    sub: 'وفق النظام المحاسبي الموحد ومعايير IFRS',
  },
  {
    file: 'og-companies-en', lang: 'en', accent: '#5b8def',
    kicker: 'Genoa for companies',
    title: 'Accounting, inventory, sales, purchasing and ledgers with ageing',
    sub: 'Unified Accounting System, in line with IFRS',
  },
  {
    file: 'og-government-ar', lang: 'ar', accent: '#2bb3a3',
    kicker: 'Genoa Gov للدوائر الحكومية',
    title: 'المستندات وسلسلة المصادقة والموازنة والصكوك والغلق الشهري والسنوي',
    sub: 'سجل تدقيق كامل لكل تعديل · قاعدة بيانات مستقلة لكل دائرة',
  },
  {
    file: 'og-government-en', lang: 'en', accent: '#2bb3a3',
    kicker: 'Genoa Gov for government',
    title: 'Vouchers and approvals, budgets, cheques, month and year closing',
    sub: 'Full audit trail for amendments · a separate database per office',
  },
];

const ogHtml = (c) => `<!doctype html><html lang="${c.lang}" dir="${c.lang === 'ar' ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><style>${faces}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;font-family:P,sans-serif;background:#0c1626;color:#fff;position:relative;overflow:hidden}
.bg{position:absolute;inset:0;background:radial-gradient(900px 500px at ${c.lang === 'ar' ? '0%' : '100%'} 0%, ${c.accent}33, transparent 60%)}
.bar{position:absolute;inset-block:0;inset-inline-start:0;width:18px;background:${c.accent}}
.wrap{position:absolute;inset:70px 90px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:18px;font-size:30px;font-weight:700;direction:ltr;align-self:flex-start}
.brand svg{width:64px;height:64px}
.kicker{margin-top:56px;font-size:30px;font-weight:700;color:${c.accent}}
h1{margin-top:14px;font-size:${c.lang === 'ar' ? 58 : 56}px;line-height:1.25;font-weight:700;max-width:1000px}
.sub{margin-top:auto;font-size:28px;color:#c9d2e3}
</style></head><body><div class="bg"></div><div class="bar"></div><div class="wrap">
<div class="brand">${logo}<span>Genoa Systems</span></div>
<div class="kicker">${c.kicker}</div><h1>${c.title}</h1><div class="sub">${c.sub}</div></div></body></html>`;

const browser = await chromium.launch();
try {
  mkdirSync(pub('og'), { recursive: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  for (const c of cards) {
    await page.setContent(ogHtml(c), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: pub(`og/${c.file}.png`), type: 'png' });
    console.log('wrote', `public/og/${c.file}.png`);
  }
  for (const [file, size] of [['logo-512.png', 512], ['apple-touch-icon.png', 180], ['favicon-32.png', 32]]) {
    const p = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
    await p.setContent(`<html><body style="margin:0;background:transparent">${logo.replace('<svg ', `<svg width="${size}" height="${size}" `)}</body></html>`);
    await p.screenshot({ path: pub(file), omitBackground: true });
    await p.close();
    console.log('wrote', `public/${file}`);
  }
} finally {
  await browser.close();
}
