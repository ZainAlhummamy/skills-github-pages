import { companies as companiesData } from './companies';
import { government as governmentData } from './government';
import type { Faq, Feature, Lang, Product, ProductId } from './types';
import { LANGS } from './types';

/**
 * A question waiting for the owner's answer (a: []) stays out of everything built from the content: the FAQ page,
 * its FAQPage JSON-LD, the product page's FAQ teaser and llms-full.txt. pendingFaqs() lists them.
 */
const answered = (p: Product): Product => ({
  ...p,
  faq: Object.fromEntries(
    LANGS.map((lang) => [
      lang,
      {
        ...p.faq[lang],
        groups: p.faq[lang].groups
          .map((g) => ({ ...g, faqs: g.faqs.filter((f) => f.a.length) }))
          .filter((g) => g.faqs.length),
      },
    ]),
  ) as Product['faq'],
});

export const companies = answered(companiesData);
export const government = answered(governmentData);

export const products: Record<ProductId, Product> = { companies, government };
export const productList: Product[] = [companies, government];

/** FAQ questions that have no answer yet, per product and language (shown nowhere until answered). */
export const pendingFaqs = (): { product: ProductId; lang: Lang; q: string }[] =>
  [companiesData, governmentData].flatMap((p) =>
    LANGS.flatMap((lang) =>
      p.faq[lang].groups.flatMap((g) => g.faqs.filter((f: Faq) => !f.a.length).map((f) => ({ product: p.id, lang, q: f.q }))),
    ),
  );

export const getFeature = (productId: ProductId, slug: string): Feature => {
  const f = products[productId].features.find((x) => x.slug === slug);
  if (!f) throw new Error(`Unknown feature ${productId}/${slug}`);
  return f;
};

/** Product name as shown in navigation for a language. */
export const productLabel = (productId: ProductId, lang: Lang) =>
  products[productId].overview[lang].productName;

export * from './types';
