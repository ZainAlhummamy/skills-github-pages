import { companies } from './companies';
import { government } from './government';
import type { Feature, Lang, Product, ProductId } from './types';

export const products: Record<ProductId, Product> = { companies, government };
export const productList: Product[] = [companies, government];

export const getFeature = (productId: ProductId, slug: string): Feature => {
  const f = products[productId].features.find((x) => x.slug === slug);
  if (!f) throw new Error(`Unknown feature ${productId}/${slug}`);
  return f;
};

/** Product name as shown in navigation for a language. */
export const productLabel = (productId: ProductId, lang: Lang) =>
  products[productId].overview[lang].productName;

export * from './types';
