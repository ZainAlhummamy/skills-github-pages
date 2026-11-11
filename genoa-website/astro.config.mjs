// @ts-check
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

const SITE_URL = (process.env.SITE_URL || 'https://genoa-systems.example').replace(/\/$/, '');

/**
 * A staging build (SITE_NOINDEX=true, as src/config/site.ts reads it) also marks every response noindex with an
 * X-Robots-Tag header in dist/_headers (Cloudflare Pages and Netlify), beside each page's meta tag; robots.txt keeps
 * crawlers allowed so they can see both.
 * @type {import('astro').AstroIntegration}
 */
const stagingNoindexHeader = {
  name: 'staging-noindex-header',
  hooks: {
    'astro:build:done': ({ dir }) => {
      if ((process.env.SITE_NOINDEX ?? '').trim() !== 'true') return;
      // Into the existing "/*" rule: a second "/*" rule may replace the first, dropping its security headers.
      const file = fileURLToPath(new URL('_headers', dir));
      const headers = readFileSync(file, 'utf8');
      const staged = headers.replace(/^\/\*[ \t]*$/m, '# STAGING build (SITE_NOINDEX=true): every response is noindex.\n/*\n  X-Robots-Tag: noindex, nofollow');
      if (staged === headers) throw new Error('dist/_headers has no "/*" rule to add the staging X-Robots-Tag to');
      writeFileSync(file, staged);
    },
  },
};

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Inline the (small) stylesheet so there is no render-blocking CSS request.
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  prefetch: false,
  devToolbar: { enabled: false },
  integrations: [stagingNoindexHeader],
});
