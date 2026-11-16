/**
 * The Academic Accountant logo: on the office's own pages (hero card), in its JSON-LD `logo`, and where Genoa's pages
 * present the office (the by-line in the home and product heroes, the home page section). It never replaces the
 * site's favicon, icons or Genoa Systems' logo.
 *
 * The file is src/assets/academic-accountant/logo.png: the office's own seal, prepared from its photo logo
 * (logo-original.webp, kept beside it) by straightening it, cropping it to the seal and cleaning the paper to white;
 * its "odoo" wordmark is replaced by "Genoa". src/assets/academic-accountant/README.md has the details. Any logo.{jpg,jpeg,png,webp}
 * there is picked up by the pages, the JSON-LD and `npm run og -- academic-accountant`; without one, nothing is
 * rendered in its place.
 */
import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

const found = import.meta.glob<{ default: ImageMetadata }>('../assets/academic-accountant/logo.{jpg,jpeg,png,webp}', {
  eager: true,
});

/** The source image, or undefined while it has not been added. */
export const aaLogo: ImageMetadata | undefined = Object.values(found)[0]?.default;

/**
 * Where the square crop sits (CSS object-position syntax). logo.png is already the seal alone, centred, so 'center'.
 * Pages show it as a circle (border-radius); outside the seal it is transparent.
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
