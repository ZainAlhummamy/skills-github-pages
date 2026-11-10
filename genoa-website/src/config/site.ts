/**
 * Site-wide settings. Everything marked PLACEHOLDER must be replaced with the
 * real value before launch; `npm run build` prints a warning while any remain.
 *
 * Values can also be supplied as environment variables at build time
 * (handy for CI), e.g. SITE_URL=https://www.example.iq npm run build
 */

const env = (key: string): string | undefined => {
  const v = process.env[key];
  return v && v.trim() ? v.trim() : undefined;
};

export const PLACEHOLDER_SITE_URL = 'https://genoa-systems.example';
export const PLACEHOLDER_WHATSAPP = '9647000000000';
export const PLACEHOLDER_EMAIL = 'info@genoa-systems.example';

export const site = {
  /** Production origin, no trailing slash. PLACEHOLDER until the domain is confirmed. */
  url: (env('SITE_URL') ?? PLACEHOLDER_SITE_URL).replace(/\/$/, ''),

  /** Legal / brand name of the company. */
  companyName: 'Genoa Systems',

  /** WhatsApp number in international format, digits only (964...). PLACEHOLDER. */
  whatsapp: env('WHATSAPP_NUMBER') ?? PLACEHOLDER_WHATSAPP,

  /** Public contact e-mail. PLACEHOLDER. */
  email: env('CONTACT_EMAIL') ?? PLACEHOLDER_EMAIL,

  /**
   * Optional form endpoint (Formspree, Basin, Netlify Forms, your own API ...).
   * When empty, the demo form composes a WhatsApp message instead, so the site
   * stays fully static and stores nothing.
   */
  formEndpoint: env('FORM_ENDPOINT') ?? '',

  /** Social / directory profiles for Organization.sameAs. Add real URLs only. */
  sameAs: [] as string[],

  /** Country served. */
  areaServed: { ar: 'العراق', en: 'Iraq', code: 'IQ' },
} as const;

export const placeholdersInUse = (): string[] => {
  const out: string[] = [];
  if (site.url === PLACEHOLDER_SITE_URL) out.push('SITE_URL');
  if (site.whatsapp === PLACEHOLDER_WHATSAPP) out.push('WHATSAPP_NUMBER');
  if (site.email === PLACEHOLDER_EMAIL) out.push('CONTACT_EMAIL');
  return out;
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
