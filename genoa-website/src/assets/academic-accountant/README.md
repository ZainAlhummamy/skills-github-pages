# Academic Accountant logo

- **`logo.png`** (728×728, transparent outside the seal): the logo the site uses. It is the office's own photo logo,
  prepared for use as a logo, with one change to its content:
  - the small "odoo" wordmark in the icon row (calculator, magnifier, odoo) is replaced by a "Genoa" wordmark in IBM
    Plex Sans Bold (the site's font), same place, baseline and size, in the ink of the line below it (owner's request,
    16 Nov 2026). Everything else on the seal is as in the photo;
  - the camera's perspective corrected (the seal was 2.5% taller along an axis 7° off vertical) and the seal
    straightened by 3°;
  - cropped to the outer gold ring, transparent outside it;
  - the textured, shaded paper cleaned to white (near-neutral light pixels only, so the navy, the gold and their
    edges are untouched);
  - a mild lift of the navy and gold (contrast 6%, saturation 8%) and light sharpening.
- **`logo-original.webp`** (805×789): the photo logo it was made from, kept for reference. The site does not use it.

The pages show `logo.png` in their hero as AVIF/WebP (Astro's image pipeline), the JSON-LD `logo` is a 512×512 PNG made
from it, and `npm run og -- academic-accountant` puts it on the office's share images (then commit `public/og/`).
Any `logo.{jpg,jpeg,png,webp}` here is picked up the same way, so a sharper vector original can simply replace it.

The logo is used on the Academic Accountant pages only. It must not replace the site's favicon, apple-touch-icon,
`logo-512.png` or the Genoa OG images: the site's brand is Genoa Systems.
