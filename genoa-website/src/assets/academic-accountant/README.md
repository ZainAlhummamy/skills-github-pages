# Academic Accountant logo

TODO(Zain): put the office's logo here as **`logo.jpg`** (or `logo.png` / `logo.webp`). Nothing else needs to change:

- the Academic Accountant pages show it in their hero, cropped to a circle, as AVIF/WebP (Astro's image pipeline);
- their JSON-LD gets a `logo` (a 512×512 PNG made from it);
- `npm run og -- academic-accountant` puts it on the office's share images (then commit `public/og/`).

For now, use the photo logo from the office's Instagram (`logo-instagram.jpg`, 789×789; the Facebook copy is the same
artwork). It is a photo mockup on textured paper, slightly rotated, with an "odoo" wordmark, so it is cropped to the
seal. If the seal is off-centre, change `aaLogoPosition` in `src/lib/aa-logo.ts` (CSS `object-position` syntax, for
example `'48% 46%'`). Later, replace it with a flat SVG/PNG of the seal without the odoo mark.

The logo is used on the Academic Accountant pages only. It must not replace the site's favicon, apple-touch-icon,
`logo-512.png` or the Genoa OG images: the site's brand is Genoa Systems.

`cover-facebook.jpg` (960×353) is not used by the site.
