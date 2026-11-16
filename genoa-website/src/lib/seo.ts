/**
 * schema.org JSON-LD builders. Every page emits one @graph that links
 * WebPage -> WebSite -> Organization, plus the product (SoftwareApplication),
 * BreadcrumbList and FAQPage nodes where relevant. Nodes reference each other
 * by stable @id so assistants and search engines can join them across pages.
 */
import { site, placeholdersInUse, companyIntro, telephone } from '../config/site';
import { modifiedOn } from './dates';
import { products } from '../content';
import { aaContactBlock, aaHub, aaOffice, aaPhoneGroups, aaServices } from '../content/academic-accountant';
import type { Faq, Lang, ProductId } from '../content/types';
import { abs, path } from './routes';

type Node = Record<string, unknown>;

export const ids = {
  org: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  product: (p: ProductId) => `${site.url}/#software-${p === 'companies' ? 'genoa' : 'genoa-gov'}`,
  /** Academic Accountant (المحاسب الأكاديمي), the accounting office that works with Genoa Systems. */
  academicAccountant: `${site.url}/#academic-accountant`,
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
        ? `${companyIntro('ar')}. تقدّم برنامجين محاسبيين منفصلين للسوق العراقي، هما من نتاج المحاسب الأكاديمي: Genoa، برنامج محاسبة ومخازن للشركات يعتمد دليل حسابات النظام المحاسبي الموحد ويمكنه إعداد القوائم المالية وفق IFRS، وGenoa Gov، برنامج محاسبة حكومية لأقسام الحسابات في الدوائر الحكومية.`
        : `${companyIntro('en')}. It offers two separate accounting products for the Iraqi market, built on the accounting and technology expertise of Academic Accountant: Genoa, accounting and inventory software for companies that uses the Unified Accounting System chart of accounts and can prepare IFRS-based financial statements, and Genoa Gov, government accounting software for the accounts sections of government departments.`,
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
      ? 'الموقع الرسمي لـ Genoa Systems وبرنامجي Genoa وGenoa Gov.'
      : 'Official website of Genoa Systems and of Genoa and Genoa Gov.',
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
    // The other names people search for (Arabic: نظام محاسبي / برنامج محاسبي).
    alternateName:
      productId === 'companies'
        ? lang === 'ar' ? ['نظام Genoa المحاسبي', 'برنامج Genoa المحاسبي'] : ['Genoa accounting system', 'Genoa accounting software']
        : lang === 'ar' ? ['نظام Genoa Gov المحاسبي الحكومي', 'برنامج Genoa Gov للمحاسبة الحكومية'] : ['Genoa Gov government accounting system'],
    applicationCategory: 'BusinessApplication',
    applicationSubCategory:
      productId === 'companies'
        ? lang === 'ar'
          ? 'نظام محاسبي للشركات (برنامج محاسبة ومخازن)'
          : 'Accounting and inventory software for companies'
        : lang === 'ar'
          ? 'نظام محاسبي حكومي (برنامج محاسبة حكومية)'
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
    // The two products are Academic Accountant's (the owner, 16 Nov 2026); its node is on the office's pages.
    creator: { '@id': ids.academicAccountant },
    image: abs(`/og/og-${productId}-${lang}.png`),
    // TODO(owner): operatingSystem (e.g. "Web browser" for a web app, or "Windows"), once the deployment model is
    // confirmed. inLanguage is left off here on purpose: on a SoftwareApplication it states the software's own
    // language, which is not confirmed for English (the page's language is on the WebPage node).
  };
};

/**
 * Academic Accountant: an accounting, consulting and training office in Baghdad, a separate node from Genoa Systems
 * (#organization). Its facts come from its own profiles and the owner (src/content/academic-accountant.ts): Genoa and
 * Genoa Gov are its product, built on its accounting and technology expertise (said in `description`).
 *
 * TODO(Zain): the legal relationship to Genoa Systems. Until it is confirmed there is no parentOrganization /
 * subOrganization here: the two are joined only through the WebPage nodes (about / mentions, see pageGraph). The
 * office's Facebook and Instagram profiles are its own sameAs, never Genoa Systems'.
 */
export const academicAccountantNode = (lang: Lang, logo?: { src: string; width: number; height: number }): Node => {
  const hub = aaHub[lang];
  const logoNode = logo ? { '@type': 'ImageObject', url: abs(logo.src), width: logo.width, height: logo.height } : undefined;
  return {
    '@type': ['AccountingService', 'EducationalOrganization'],
    '@id': ids.academicAccountant,
    name: aaOffice.name,
    alternateName: [...aaOffice.alternateName],
    // The hub page in the language of the page this node is on (one url per language, as for the products).
    url: abs(path(lang, 'academic-accountant')),
    // The office's seal (src/assets/academic-accountant/logo.png); without it the share image stands in as `image`.
    ...(logoNode ? { logo: logoNode } : {}),
    image: logoNode ? logoNode.url : abs(`/og/og-academic-accountant-${lang}.png`),
    description: hub.answer,
    slogan: lang === 'ar' ? 'خبراء المحاسبة والمالية' : 'Accounting and finance experts',
    address: {
      '@type': 'PostalAddress',
      streetAddress: aaOffice.address[lang].street,
      addressLocality: 'Baghdad',
      addressRegion: 'Baghdad',
      addressCountry: 'IQ',
    },
    // The main numbers (accounting consulting and services), then one ContactPoint per purpose.
    telephone: aaOffice.phones.map((p) => p.e164),
    contactPoint: aaPhoneGroups.map((g) => ({
      '@type': 'ContactPoint',
      contactType: aaContactBlock[lang].phoneGroups[g.id],
      telephone: g.phones.length === 1 ? g.phones[0].e164 : g.phones.map((p) => p.e164),
      areaServed: site.areaServed.code,
    })),
    areaServed: { '@type': 'Country', name: site.areaServed.en, identifier: site.areaServed.code },
    knowsAbout:
      lang === 'ar'
        ? ['المحاسبة', 'التدقيق', 'التحليل المالي', 'الموازنات التخطيطية', 'محاسبة الكلفة', 'الاحتسابات الضريبية في العراق', 'الأنظمة المحاسبية', 'تقنية المعلومات', 'الذكاء الاصطناعي في الأعمال المحاسبية والمالية', 'المعايير الدولية لإعداد التقارير المالية (IFRS)', 'النظام المحاسبي الموحد في العراق']
        : ['Accounting', 'Auditing', 'Financial analysis', 'Budgeting', 'Cost accounting', 'Tax calculation in Iraq', 'Accounting systems', 'Information technology', 'AI for accounting and finance', 'International Financial Reporting Standards (IFRS)', 'Iraqi Unified Accounting System'],
    sameAs: [aaOffice.profiles.facebook, aaOffice.profiles.instagram],
    // No prices: the office publishes none.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: lang === 'ar' ? 'خدمات المحاسب الأكاديمي' : 'Academic Accountant services',
      url: abs(path(lang, 'academic-accountant', 'services')),
      itemListElement: aaServices.map((sv) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: sv.content[lang].name,
          description: sv.content[lang].body,
          areaServed: { '@type': 'Country', name: site.areaServed.en },
        },
      })),
    },
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
  /**
   * A subject other than Genoa Systems and its products: the page is about the Academic Accountant office. Its node is
   * included and becomes the page's `about`; `about` (products) is ignored, so name Genoa Systems and its products in
   * `mentions` instead.
   */
  subject?: 'academic-accountant';
  /** The Academic Accountant logo for its node (src/lib/aa-logo.ts), when the page has it. */
  aaLogo?: { src: string; width: number; height: number };
  /** Entities the page mentions without being about them, by @id (e.g. ids.academicAccountant on /about/). */
  mentions?: string[];
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
    ...(i.subject === 'academic-accountant'
      ? { about: { '@id': ids.academicAccountant } }
      : i.about?.length
        ? { about: i.about.map((p) => ({ '@id': ids.product(p) })) }
        : { about: { '@id': ids.org } }),
    ...(i.mentions?.length ? { mentions: i.mentions.map((id) => ({ '@id': id })) } : {}),
  });

  graph.push(page, websiteNode(i.lang), organizationNode(i.lang));
  if (i.subject === 'academic-accountant') graph.push(academicAccountantNode(i.lang, i.aaLogo));
  else for (const p of i.about ?? []) graph.push(softwareNode(p, i.lang));
  if (hasCrumbs) graph.push(breadcrumbNode(url, i.breadcrumbs!));
  if (i.faqs?.length) graph.push(faqNode(url, i.faqs, i.lang, false));

  return { '@context': 'https://schema.org', '@graph': graph };
};
