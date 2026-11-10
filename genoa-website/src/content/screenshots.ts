/**
 * Screenshot registry.
 *
 * Every screenshot slot on the site has a key (e.g. "companies-inventory").
 * Real screenshots — taken from the software with FICTIONAL demo data only,
 * never client data — are imported with `npm run screenshots -- <folder>`,
 * which writes public/screenshots/<key>.webp and registers it in
 * src/content/screenshots.json together with its Arabic/English description.
 *
 * A slot without a registered screenshot shows a generated SVG placeholder
 * (/placeholders/<key>.svg) that is clearly labelled as such.
 */
import type { Lang } from './types';
import registry from './screenshots.json';

export interface Shot {
  src: string;
  width: number;
  height: number;
  /** false for a real screenshot of the software (with demo data). */
  placeholder: boolean;
  /** Description of a real screenshot, per language (alt text / caption). */
  alt?: Partial<Record<Lang, string>>;
}

const real = registry as Record<string, Omit<Shot, 'placeholder'>>;

export const PLACEHOLDER_SIZE = { width: 1200, height: 750 };

export const screenshotFor = (key: string): Shot =>
  real[key]
    ? { ...real[key], placeholder: false }
    : { src: `/placeholders/${key}.svg`, ...PLACEHOLDER_SIZE, placeholder: true };

export const hasRealScreenshot = (key: string) => key in real;
