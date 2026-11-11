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

  /**
   * Staging switch. SITE_NOINDEX=true makes every page "noindex, nofollow" and adds an
   * X-Robots-Tag noindex header (astro.config.mjs), so a preview deploy is not indexed; robots.txt
   * keeps crawlers allowed so they can see it. Leave unset in production (the build fails there).
   */
  noindex: env('SITE_NOINDEX') === 'true',

  /**
   * Official profiles for Organization.sameAs. Real URLs only; leave empty rather than guess.
   * TODO(owner): the company's LinkedIn page, Facebook page and Google Business Profile URLs (and any other official
   * profile). They tell search engines and assistants that this Genoa Systems is the Iraqi software company, not
   * the unrelated, defunct US hardware maker of the same name.
   */
  sameAs: [] as string[],

  /**
   * City the company is based in, for the "based in …" sentence (about, footer, llms.txt) and the Organization
   * address (addressLocality).
   * TODO(owner): e.g. { ar: 'بغداد', en: 'Baghdad' }. While empty, the copy says "Iraqi" without a city and the
   * address carries the country only.
   */
  city: { ar: '', en: '' },

  /** Country served. */
  areaServed: { ar: 'العراق', en: 'Iraq', code: 'IQ' },
} as const;

/** The company's phone number for Organization.telephone: the WhatsApp number, in E.164 form (+964…). */
export const telephone = () => `+${site.whatsapp}`;

/**
 * How the company is introduced wherever it first appears (about, footer, JSON-LD, llms.txt). It says first that
 * Genoa Systems is an Iraqi accounting-software company, which a defunct US hardware maker of the same name does
 * not share.
 */
export const companyIntro = (lang: 'ar' | 'en'): string =>
  lang === 'ar'
    ? `${site.companyName} شركة عراقية لبرمجيات المحاسبة${site.city.ar ? `، مقرّها في ${site.city.ar}` : ''}`
    : `${site.companyName} is an Iraqi accounting-software company${site.city.en ? ` based in ${site.city.en}` : ''}`;

export const placeholdersInUse = (): string[] => {
  const out: string[] = [];
  if (site.url === PLACEHOLDER_SITE_URL) out.push('SITE_URL');
  if (site.whatsapp === PLACEHOLDER_WHATSAPP) out.push('WHATSAPP_NUMBER');
  if (site.email === PLACEHOLDER_EMAIL) out.push('CONTACT_EMAIL');
  return out;
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
