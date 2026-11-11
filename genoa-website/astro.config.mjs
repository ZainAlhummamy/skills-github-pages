// @ts-check
import { appendFileSync } from 'node:fs';
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
      appendFileSync(
        fileURLToPath(new URL('_headers', dir)),
        '\n# STAGING build (SITE_NOINDEX=true): every response is noindex.\n/*\n  X-Robots-Tag: noindex, nofollow\n',
      );
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
