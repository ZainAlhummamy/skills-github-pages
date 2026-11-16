/**
 * The Academic Accountant logo, used only on the office's own pages (hero) and in its JSON-LD `logo`. It never
 * replaces the site's favicon, icons or Genoa Systems' logo.
 *
 * The file is optional: drop it in src/assets/academic-accountant/ as logo.jpg (or .jpeg, .png, .webp) and the pages,
 * the JSON-LD and `npm run og -- academic-accountant` pick it up. Without it nothing is rendered in its place.
 * TODO(Zain): add the logo there. The photo logo (logo-instagram.jpg, 789×789) works for now; a flat SVG/PNG without
 *   the odoo mark should replace it later. src/assets/academic-accountant/README.md has the details.
 */
import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

const found = import.meta.glob<{ default: ImageMetadata }>('../assets/academic-accountant/logo.{jpg,jpeg,png,webp}', {
  eager: true,
});

/** The source image, or undefined while it has not been added. */
export const aaLogo: ImageMetadata | undefined = Object.values(found)[0]?.default;

/**
 * Where the square crop of the photo sits (CSS object-position syntax). The photo logo is a slightly rotated mockup on
 * a grey background, so the seal may need nudging into the centre once the file is in. Pages show the square crop as a
 * circle (border-radius), which leaves the paper and background outside the seal out of view.
 */
export const aaLogoPosition = 'center';

export const aaLogoAlt = { ar: 'شعار المحاسب الأكاديمي', en: 'Academic Accountant logo' } as const;

/** The 512×512 PNG for the JSON-LD `logo` (search engines accept PNG everywhere), or undefined without a logo. */
export const aaLogoForSchema = async (): Promise<{ src: string; width: number; height: number } | undefined> => {
  if (!aaLogo) return undefined;
  const size = Math.min(512, aaLogo.width, aaLogo.height);
  const img = await getImage({ src: aaLogo, width: size, height: size, fit: 'cover', position: aaLogoPosition, format: 'png' });
  return { src: img.src, width: size, height: size };
};
