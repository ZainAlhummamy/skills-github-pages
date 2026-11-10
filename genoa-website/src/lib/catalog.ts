/**
 * One list of every indexable page, with its plain-text content.
 * Used by sitemap.xml, llms.txt and llms-full.txt so they never drift
 * from the pages themselves.
 */
import { productList } from '../content';
import { about, contact, home, security } from '../content/pages';
import type { Faq, Lang, ProductId, Section } from '../content/types';
import { LANGS } from '../content/types';
import { t } from '../i18n/ui';
import { path } from './routes';

export interface CatalogPage {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  kind: 'home' | 'product' | 'feature' | 'faq' | 'security' | 'about' | 'contact';
  product?: ProductId;
  /** Plain-text body for llms-full.txt (Markdown-ish). */
  text: () => string;
}

const sectionsText = (sections: Section[]) =>
  sections
    .map(
      (s) =>
        `## ${s.heading}\n\n${s.body.join('\n\n')}${s.bullets?.length ? `\n\n${s.bullets.map((b) => `- ${b}`).join('\n')}` : ''}`,
    )
    .join('\n\n');

const faqText = (faqs: Faq[]) => faqs.map((f) => `### ${f.q}\n\n${f.a.join('\n\n')}`).join('\n\n');

export const catalog = (lang: Lang): CatalogPage[] => {
  const out: CatalogPage[] = [];
  const h = home[lang];
  out.push({
    lang,
    path: path(lang),
    title: h.title,
    description: h.description,
    kind: 'home',
    text: () =>
      [
        h.answer,
        `## ${h.products.companies.heading}\n\n${h.products.companies.body}`,
        `## ${h.products.government.heading}\n\n${h.products.government.body}`,
        `## ${h.tech.heading}\n\n${h.tech.body.join('\n\n')}`,
        `## ${h.compare.heading}\n\n${h.compare.intro}\n\n- Genoa — ${h.compare.rowLabels.for}: ${h.compare.genoa.for}. ${h.compare.rowLabels.modules}: ${h.compare.genoa.modules}. ${h.compare.rowLabels.distinctive}: ${h.compare.genoa.distinctive}.\n- Genoa Gov — ${h.compare.rowLabels.for}: ${h.compare.gov.for}. ${h.compare.rowLabels.modules}: ${h.compare.gov.modules}. ${h.compare.rowLabels.distinctive}: ${h.compare.gov.distinctive}.`,
        `## ${h.principles.heading}\n\n${h.principles.items.map((i) => `- ${i.title}: ${i.body}`).join('\n')}`,
      ].join('\n\n'),
  });

  for (const p of productList) {
    const o = p.overview[lang];
    out.push({
      lang,
      path: path(lang, p.id),
      title: o.title,
      description: o.description,
      kind: 'product',
      product: p.id,
      text: () =>
        [
          o.answer,
          sectionsText([o.whatIs, o.whoFor]),
          `## ${o.modulesHeading}\n\n${o.modulesIntro}\n\n${p.features
            .map((f) => `- ${f.content[lang].navLabel}${f.optional ? ` (${t('optionalBadge', lang)})` : ''}: ${f.content[lang].cardSummary}`)
            .join('\n')}`,
          o.keyFacts.map((k) => `- ${k.label}: ${k.value}`).join('\n'),
          sectionsText(o.sections),
        ].join('\n\n'),
    });
    for (const f of p.features) {
      const c = f.content[lang];
      out.push({
        lang,
        path: path(lang, p.id, f.slug),
        title: c.title,
        description: c.description,
        kind: 'feature',
        product: p.id,
        text: () =>
          [
            c.answer,
            f.optional ? t('optionalNote', lang) : '',
            c.keyFacts.map((k) => `- ${k.label}: ${k.value}`).join('\n'),
            sectionsText(c.sections),
            `## ${t('questionsAbout', lang)} ${c.navLabel}\n\n${faqText(c.faqs)}`,
          ]
            .filter(Boolean)
            .join('\n\n'),
      });
    }
    const fq = p.faq[lang];
    out.push({
      lang,
      path: path(lang, p.id, 'faq'),
      title: fq.title,
      description: fq.description,
      kind: 'faq',
      product: p.id,
      text: () => [fq.answer, ...fq.groups.map((g) => `## ${g.heading}\n\n${faqText(g.faqs)}`)].join('\n\n'),
    });
  }

  const s = security[lang];
  out.push({
    lang,
    path: path(lang, 'security-backups'),
    title: s.title,
    description: s.description,
    kind: 'security',
    text: () => [s.answer, sectionsText(s.sections)].join('\n\n'),
  });
  const a = about[lang];
  out.push({
    lang,
    path: path(lang, 'about'),
    title: a.title,
    description: a.description,
    kind: 'about',
    text: () => [a.answer, sectionsText(a.sections)].join('\n\n'),
  });
  const c = contact[lang];
  out.push({
    lang,
    path: path(lang, 'contact'),
    title: c.title,
    description: c.description,
    kind: 'contact',
    text: () => [c.answer, `## ${c.nextHeading}\n\n${c.nextSteps.map((x, i) => `${i + 1}. ${x}`).join('\n')}`].join('\n\n'),
  });
  return out;
};

export const allPages = () => LANGS.flatMap((l) => catalog(l));
