/**
 * Screenshot registry.
 *
 * Every screenshot slot on the site has a key (e.g. "companies-inventory").
 * Until a real screenshot is listed here, the slot shows a generated SVG
 * placeholder (/placeholders/<key>.svg) that is clearly labelled as such.
 *
 * To add a real screenshot (taken with TEST DATA only — never client data):
 *   1. Save it to public/screenshots/<key>.webp (1600x1000 recommended).
 *   2. Add an entry below:  'companies-inventory': { src: '/screenshots/companies-inventory.webp', width: 1600, height: 1000 },
 *   3. Update the alt text and caption for that page in src/content/ so they no longer say "placeholder".
 */
export interface Shot {
  src: string;
  width: number;
  height: number;
  placeholder: boolean;
}

const real: Record<string, Omit<Shot, 'placeholder'>> = {
  // 'companies-inventory': { src: '/screenshots/companies-inventory.webp', width: 1600, height: 1000 },
};

export const PLACEHOLDER_SIZE = { width: 1200, height: 750 };

export const screenshotFor = (key: string): Shot =>
  real[key]
    ? { ...real[key], placeholder: false }
    : { src: `/placeholders/${key}.svg`, ...PLACEHOLDER_SIZE, placeholder: true };
