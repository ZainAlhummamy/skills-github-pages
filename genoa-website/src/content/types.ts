/**
 * Content contract shared by every page template.
 *
 * All marketing copy lives in typed data modules under src/content/.
 * Pages, JSON-LD, sitemap, llms.txt and llms-full.txt are all generated
 * from these objects, so a fact changed here changes everywhere.
 *
 * Writing rules (apply to every string):
 * - No client names, no numbers about customers/users/installs, no testimonials.
 * - No prices, no certifications, no claims of official approval.
 * - Plain text only. No HTML, no Markdown. Paragraphs are separate array items.
 */

export type Lang = 'ar' | 'en';
export const LANGS: Lang[] = ['ar', 'en'];

/** A value provided in both languages. */
export type L<T = string> = Record<Lang, T>;

export interface Faq {
  /** A real buyer question, phrased the way a person would type it into Google or an AI assistant. */
  q: string;
  /** A direct, factual answer. First sentence answers the question on its own. Paragraphs as array items. */
  a: string[];
}

export interface Section {
  /** H2 text. Prefer question-shaped or clearly descriptive headings. */
  heading: string;
  /** Paragraphs. */
  body: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
}

export interface KeyFact {
  label: string;
  value: string;
}

/** Fields shared by every page for SEO. */
export interface PageMeta {
  /** <title>. Unique across the site. Aim for 30-60 characters. Brand suffix is NOT added automatically. */
  title: string;
  /** Meta description. Unique across the site. Aim for 110-160 characters. */
  description: string;
  /** The single H1 of the page. */
  h1: string;
}

/** One feature (module) page, e.g. /ar/companies/inventory/ */
export interface FeaturePage extends PageMeta {
  /** Short label for menus, breadcrumbs and cards (2-4 words). */
  navLabel: string;
  /** One sentence for feature cards on the product page. */
  cardSummary: string;
  /**
   * The quotable answer paragraph shown right under the H1.
   * 2-4 plain factual sentences that define the feature in third person and name the product,
   * e.g. "Inventory in Genoa is ...". Must make sense if quoted alone by an AI assistant.
   */
  answer: string;
  /** 3-5 quick facts rendered as a definition list. */
  keyFacts: KeyFact[];
  /** 3-5 body sections, each with its own H2. */
  sections: Section[];
  /** Alt text for the placeholder screenshot. Must say it is a placeholder. */
  screenshotAlt: string;
  /** Caption under the screenshot. Must say it is a placeholder to be replaced with a real screenshot using test data. */
  screenshotCaption: string;
  /** 2-3 feature-specific FAQs. Must not duplicate questions on the product FAQ page. */
  faqs: Faq[];
}

export interface Feature {
  /** URL slug, English, lowercase, hyphenated. */
  slug: string;
  /** Icon key from src/components/Icon.astro */
  icon: IconKey;
  /** True for features that are off by default and enabled per organisation. */
  optional?: boolean;
  /** Slugs of related features in the same product (2-3), used for internal links. */
  related: string[];
  content: L<FeaturePage>;
}

export interface ProductOverview extends PageMeta {
  /** Product name as written in this language (keep the Latin brand name). */
  productName: string;
  /** Quotable answer paragraph under the H1 (2-4 sentences). */
  answer: string;
  /** The "What is Genoa?" / "What is Genoa Gov?" section. Heading should literally be the question. */
  whatIs: Section;
  /** Who the product is for. */
  whoFor: Section;
  /** Heading + intro paragraph above the module cards. */
  modulesHeading: string;
  modulesIntro: string;
  /** Extra body sections after the module grid (2-4). */
  sections: Section[];
  keyFacts: KeyFact[];
  screenshotAlt: string;
  screenshotCaption: string;
  /** Heading + intro of the short FAQ teaser that links to the full FAQ page. */
  faqTeaserHeading: string;
}

export interface FaqPage extends PageMeta {
  /** Quotable intro paragraph under the H1. */
  answer: string;
  groups: { heading: string; faqs: Faq[] }[];
}

export interface Product {
  /** 'companies' | 'government' */
  id: ProductId;
  /** Brand name, same in both languages: "Genoa" or "Genoa Gov". */
  brand: string;
  overview: L<ProductOverview>;
  features: Feature[];
  faq: L<FaqPage>;
}

export type ProductId = 'companies' | 'government';

export type IconKey =
  | 'ledger'
  | 'box'
  | 'cart'
  | 'users'
  | 'currency'
  | 'ship'
  | 'stamp'
  | 'history'
  | 'budget'
  | 'cheque'
  | 'calendar'
  | 'book'
  | 'database'
  | 'shield'
  | 'chart';
