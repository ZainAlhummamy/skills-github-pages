/**
 * schema.org JSON-LD builders. Every page emits one @graph that links
 * WebPage -> WebSite -> Organization, plus the product (SoftwareApplication),
 * BreadcrumbList and FAQPage nodes where relevant. Nodes reference each other
 * by stable @id so assistants and search engines can join them across pages.
 */
import { site, placeholdersInUse, companyIntro, telephone } from '../config/site';
import { modifiedOn } from './dates';
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
  const pending = placeholdersInUse();
  const email = pending.includes('CONTACT_EMAIL') ? undefined : site.email;
  const phone = pending.includes('WHATSAPP_NUMBER') ? undefined : telephone();
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
    // Leads with what sets this Genoa Systems apart from the defunct US hardware maker of the same name.
    description:
      lang === 'ar'
        ? `${companyIntro('ar')}. تطوّر برنامجين محاسبيين منفصلين للسوق العراقي: Genoa، برنامج محاسبة ومخازن للشركات يعتمد دليل حسابات النظام المحاسبي الموحد ويمكنه إعداد القوائم المالية وفق IFRS، وGenoa Gov، برنامج محاسبة حكومية لأقسام الحسابات في الدوائر الحكومية.`
        : `${companyIntro('en')}. It makes two separate accounting products for the Iraqi market: Genoa, accounting and inventory software for companies that uses the Unified Accounting System chart of accounts and can prepare IFRS-based financial statements, and Genoa Gov, government accounting software for the accounts sections of government departments.`,
    // TODO(owner): the city (src/config/site.ts, city). Until then the address names the country only.
    address: {
      '@type': 'PostalAddress',
      addressCountry: site.areaServed.code,
      ...(site.city[lang] ? { addressLocality: site.city[lang] } : {}),
    },
    ...(phone ? { telephone: phone } : {}),
    areaServed: { '@type': 'Country', name: site.areaServed.en, identifier: site.areaServed.code },
    knowsAbout:
      lang === 'ar'
        ? ['المحاسبة', 'المحاسبة الحكومية', 'إدارة المخازن', 'برامج المحاسبة في العراق', 'النظام المحاسبي الموحد', 'المعايير الدولية لإعداد التقارير المالية (IFRS)', 'الذكاء الاصطناعي في المحاسبة']
        : ['Accounting software', 'Government accounting', 'Inventory management', 'Accounting in Iraq', 'Iraqi Unified Accounting System', 'International Financial Reporting Standards (IFRS)', 'Artificial intelligence in accounting'],
    ...(email || phone
      ? {
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            ...(email ? { email } : {}),
            ...(phone ? { telephone: phone } : {}),
            availableLanguage: ['ar', 'en'],
            areaServed: site.areaServed.code,
          },
        }
      : {}),
    // TODO(owner): official LinkedIn, Facebook and Google Business Profile URLs (src/config/site.ts, sameAs).
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
    // The product's page in the language of the page this node is on (/ar/companies/ or /en/companies/). The same
    // @id keeps one url per language; check-site.mjs fails the build otherwise.
    url: abs(path(lang, productId)),
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
    // TODO(owner): operatingSystem (e.g. "Web browser" for a web app, or "Windows"), once the deployment model is
    // confirmed. inLanguage is left off here on purpose: on a SoftwareApplication it states the software's own
    // language, which is not confirmed for English (the page's language is on the WebPage node).
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

  const modified = modifiedOn(i.pathname);
  Object.assign(page, {
    url,
    name: i.title,
    description: i.description,
    inLanguage: i.lang,
    // The date this page's own text last changed (src/content/page-dates.json), never the build date.
    ...(modified ? { dateModified: modified } : {}),
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
