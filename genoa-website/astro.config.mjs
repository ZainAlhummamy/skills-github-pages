// @ts-check
import { defineConfig } from 'astro/config';

const SITE_URL = (process.env.SITE_URL || 'https://genoa-systems.example').replace(/\/$/, '');

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
});
