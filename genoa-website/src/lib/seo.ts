/**
 * schema.org JSON-LD builders. Every page emits one @graph that links
 * WebPage -> WebSite -> Organization, plus the product (SoftwareApplication),
 * BreadcrumbList and FAQPage nodes where relevant. Nodes reference each other
 * by stable @id so assistants and search engines can join them across pages.
 */
import { site, placeholdersInUse } from '../config/site';
import { products } from '../content';
import type { Faq, Lang, ProductId } from '../content/types';
import { abs, path } from './routes';

type Node = Record<string, unknown>;

export const ids = {
  org: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  product: (p: ProductId) => `${site.url}/#software-${p === 'companies' ? 'genoa' : 'genoa-gov'}`,
};

export const organizationNode = (lang: Lang): Node => {
  const contactConfigured = !placeholdersInUse().includes('CONTACT_EMAIL');
  return {
    '@type': 'Organization',
    '@id': ids.org,
    name: site.companyName,
    // One address for the company on every page, in both languages: the site's root.
    url: abs('/'),
    logo: {
      '@type': 'ImageObject',
      url: abs('/logo-512.png'),
      width: 512,
      height: 512,
    },
    description:
      lang === 'ar'
        ? 'Genoa Systems شركة برمجيات تقدّم حلولاً مالية ومحاسبية بأحدث التقنيات والذكاء الاصطناعي الموجّه للأعمال المحاسبية والمالية، وتطوّر برامج محاسبة للسوق العراقي: Genoa للشركات بدليل حسابات النظام المحاسبي الموحد وقوائم مالية وفق IFRS، وGenoa Gov لأقسام الحسابات في الدوائر الحكومية.'
        : 'Genoa Systems is a software company that provides financial and accounting solutions built with the latest technology and with AI designed for accounting and financial work. It builds accounting software for the Iraqi market: Genoa for companies, using the Unified Accounting System chart of accounts with IFRS-based financial statements, and Genoa Gov for the accounts sections of government departments.',
    areaServed: { '@type': 'Country', name: site.areaServed.en, identifier: site.areaServed.code },
    knowsAbout:
      lang === 'ar'
        ? ['المحاسبة', 'المحاسبة الحكومية', 'إدارة المخازن', 'برامج المحاسبة في العراق', 'النظام المحاسبي الموحد', 'المعايير الدولية لإعداد التقارير المالية (IFRS)', 'الذكاء الاصطناعي في المحاسبة والمالية']
        : ['Accounting software', 'Government accounting', 'Inventory management', 'Accounting in Iraq', 'Iraqi Unified Accounting System', 'International Financial Reporting Standards (IFRS)', 'AI for accounting and finance'],
    ...(contactConfigured
      ? {
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: site.email,
            availableLanguage: ['ar', 'en'],
            areaServed: site.areaServed.code,
          },
        }
      : {}),
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
};

export const websiteNode = (lang: Lang): Node => ({
  '@type': 'WebSite',
  '@id': ids.website,
  url: abs('/'),
  name: site.companyName,
  inLanguage: ['ar', 'en'],
  publisher: { '@id': ids.org },
  description:
    lang === 'ar'
      ? 'الموقع الرسمي لـ Genoa Systems، مطوّر برنامجي Genoa وGenoa Gov.'
      : 'Official website of Genoa Systems, maker of Genoa and Genoa Gov.',
});

export const softwareNode = (productId: ProductId, lang: Lang): Node => {
  const p = products[productId];
  const o = p.overview[lang];
  return {
    '@type': 'SoftwareApplication',
    '@id': ids.product(productId),
    name: p.brand,
    // One address for the product on every page, in both languages: its page in the default language (x-default, Arabic).
    url: abs(path('ar', productId)),
    description: o.answer,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory:
      productId === 'companies'
        ? lang === 'ar'
          ? 'برنامج محاسبة ومخازن للشركات'
          : 'Accounting and inventory software for companies'
        : lang === 'ar'
          ? 'برنامج محاسبة حكومية'
          : 'Government accounting software',
    featureList: p.features.map((f) => f.content[lang].navLabel),
    audience: {
      '@type': 'Audience',
      audienceType:
        productId === 'companies'
          ? lang === 'ar'
            ? 'الشركات في العراق'
            : 'Companies in Iraq'
          : lang === 'ar'
            ? 'أقسام الحسابات في الدوائر الحكومية العراقية'
            : 'Accounts sections of Iraqi government departments',
      geographicArea: { '@type': 'Country', name: site.areaServed.en },
    },
    publisher: { '@id': ids.org },
    creator: { '@id': ids.org },
    image: abs(`/og/og-${productId}-${lang}.png`),
  };
};

export const breadcrumbNode = (pageUrl: string, items: { name: string; href: string }[]): Node => ({
  '@type': 'BreadcrumbList',
  '@id': `${pageUrl}#breadcrumb`,
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(it.href),
  })),
});

export const faqNode = (pageUrl: string, faqs: Faq[], lang: Lang, standalone: boolean): Node => ({
  '@type': 'FAQPage',
  '@id': standalone ? `${pageUrl}#webpage` : `${pageUrl}#faq`,
  ...(standalone ? {} : { isPartOf: { '@id': `${pageUrl}#webpage` } }),
  inLanguage: lang,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a.join('\n\n') },
  })),
});

export interface PageGraphInput {
  lang: Lang;
  pathname: string;
  title: string;
  description: string;
  /** WebPage subtype: WebPage, AboutPage, ContactPage, CollectionPage, FAQPage */
  pageType?: string;
  breadcrumbs?: { name: string; href: string }[];
  /** Product(s) this page is about. Their SoftwareApplication nodes are included. */
  about?: ProductId[];
  /** FAQs shown on the page (feature pages) -> separate FAQPage node. */
  faqs?: Faq[];
  /** FAQ page: the WebPage itself is the FAQPage. */
  faqPage?: Faq[];
  image: string;
}

export const pageGraph = (i: PageGraphInput) => {
  const url = abs(i.pathname);
  const graph: Node[] = [];
  const hasCrumbs = !!i.breadcrumbs?.length;

  const page: Node = i.faqPage
    ? faqNode(url, i.faqPage, i.lang, true)
    : { '@type': i.pageType ?? 'WebPage', '@id': `${url}#webpage` };

  Object.assign(page, {
    url,
    name: i.title,
    description: i.description,
    inLanguage: i.lang,
    isPartOf: { '@id': ids.website },
    publisher: { '@id': ids.org },
    primaryImageOfPage: { '@type': 'ImageObject', url: i.image },
    ...(hasCrumbs ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    ...(i.about?.length
      ? { about: i.about.map((p) => ({ '@id': ids.product(p) })) }
      : { about: { '@id': ids.org } }),
  });

  graph.push(page, websiteNode(i.lang), organizationNode(i.lang));
  for (const p of i.about ?? []) graph.push(softwareNode(p, i.lang));
  if (hasCrumbs) graph.push(breadcrumbNode(url, i.breadcrumbs!));
  if (i.faqs?.length) graph.push(faqNode(url, i.faqs, i.lang, false));

  return { '@context': 'https://schema.org', '@graph': graph };
};
