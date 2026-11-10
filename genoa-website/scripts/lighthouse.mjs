// Runs Lighthouse (mobile emulation, Lighthouse defaults: Moto G Power, slow 4G,
// 4x CPU slowdown) against a running server and writes a summary.
//
//   npm run build && npm run preview      # in one terminal (serves dist/ on :4321)
//   npm run lighthouse                    # in another
//
// Options (env): LH_BASE=http://localhost:4321  LH_PAGES=all|key  CHROME_PATH=/path/to/chrome
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const base = (process.env.LH_BASE || 'http://localhost:4321').replace(/\/$/, '');
const which = process.env.LH_PAGES || 'all';

let paths;
if (which === 'key') {
  paths = ['/ar/', '/en/', '/ar/companies/', '/ar/government/', '/ar/companies/inventory/', '/ar/government/vouchers-approval/', '/ar/government/faq/', '/ar/contact/'];
} else {
  const sitemap = readFileSync(resolve(root, 'dist/sitemap.xml'), 'utf8');
  paths = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);
}

const chromePath =
  process.env.CHROME_PATH || (existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);
const chrome = await chromeLauncher.launch({
  chromePath,
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
});

const cats = ['performance', 'accessibility', 'best-practices', 'seo'];
const rows = [];
const outDir = resolve(root, 'reports/lighthouse');
mkdirSync(outDir, { recursive: true });

try {
  for (const p of paths) {
    const url = base + p;
    const r = await lighthouse(url, { port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: cats });
    const lhr = r.lhr;
    const s = Object.fromEntries(cats.map((c) => [c, Math.round((lhr.categories[c]?.score ?? 0) * 100)]));
    const failing = Object.values(lhr.audits)
      .filter((a) => a.score !== null && a.score < 0.9 && a.scoreDisplayMode === 'binary')
      .map((a) => a.id);
    rows.push({
      path: p,
      ...s,
      lcp: lhr.audits['largest-contentful-paint']?.displayValue,
      cls: lhr.audits['cumulative-layout-shift']?.displayValue,
      tbt: lhr.audits['total-blocking-time']?.displayValue,
      failing,
    });
    console.log(
      `${p.padEnd(44)} perf ${String(s.performance).padStart(3)}  a11y ${String(s.accessibility).padStart(3)}  bp ${String(s['best-practices']).padStart(3)}  seo ${String(s.seo).padStart(3)}  LCP ${rows.at(-1).lcp}${failing.length ? `  failing: ${failing.join(', ')}` : ''}`,
    );
  }
} finally {
  chrome.kill();
}

const min = (k) => Math.min(...rows.map((r) => r[k]));
const avg = (k) => Math.round(rows.reduce((a, r) => a + r[k], 0) / rows.length);
const summary = {
  base,
  formFactor: 'mobile (Lighthouse default emulation)',
  lighthouseVersion: (await import('lighthouse/package.json', { with: { type: 'json' } })).default.version,
  date: new Date().toISOString(),
  pages: rows.length,
  min: Object.fromEntries(cats.map((c) => [c, min(c)])),
  avg: Object.fromEntries(cats.map((c) => [c, avg(c)])),
  rows,
};
writeFileSync(resolve(outDir, 'summary.json'), JSON.stringify(summary, null, 2));
const md = [
  `# Lighthouse results (mobile)`,
  '',
  `Lighthouse ${summary.lighthouseVersion}, mobile emulation, ${summary.pages} pages, ${summary.date.slice(0, 10)}. Base: ${base}`,
  '',
  `| | Performance | Accessibility | Best practices | SEO |`,
  `|---|---|---|---|---|`,
  `| Lowest | ${cats.map((c) => summary.min[c]).join(' | ')} |`,
  `| Average | ${cats.map((c) => summary.avg[c]).join(' | ')} |`,
  '',
  `| Page | Perf | A11y | BP | SEO | LCP | CLS | TBT |`,
  `|---|---|---|---|---|---|---|---|`,
  ...rows.map((r) => `| ${r.path} | ${r.performance} | ${r.accessibility} | ${r['best-practices']} | ${r.seo} | ${r.lcp} | ${r.cls} | ${r.tbt} |`),
  '',
].join('\n');
writeFileSync(resolve(outDir, 'summary.md'), md);
console.log(`\nLowest: ${JSON.stringify(summary.min)}\nAverage: ${JSON.stringify(summary.avg)}\nWrote reports/lighthouse/summary.md`);
