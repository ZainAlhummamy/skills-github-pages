/**
 * One list of every indexable page, with its plain-text content.
 * Used by sitemap.xml, llms.txt and llms-full.txt so they never drift
 * from the pages themselves.
 */
import { productList } from '../content';
import { about, contact, home, security } from '../content/pages';
import { guides } from '../content/guides';
import {
  aaConsultation,
  aaContactBlock,
  aaGroupOrder,
  aaHub,
  aaOffice,
  aaOnAbout,
  aaOnContact,
  aaOnHome,
  aaPhoneGroups,
  aaPhoneText,
  aaServices,
  aaServicesPage,
} from '../content/academic-accountant';
import type { Faq, Lang, ProductId, Section } from '../content/types';
import { LANGS } from '../content/types';
import { t } from '../i18n/ui';
import { path } from './routes';

export interface CatalogPage {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  /** 'office': the Academic Accountant pages (the accounting office whose expertise Genoa and Genoa Gov were built on). */
  kind: 'home' | 'product' | 'feature' | 'faq' | 'guide' | 'office' | 'security' | 'about' | 'contact';
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

/** The Academic Accountant office's phone numbers by purpose, one list line per group. */
const aaPhonesText = (lang: Lang) =>
  aaPhoneGroups.map((g) => `- ${aaContactBlock[lang].phoneGroups[g.id]}: ${g.phones.map((p) => aaPhoneText(p, lang)).join(', ')}`).join('\n');

/** The Academic Accountant office's address, phones and profiles, as plain text. */
const aaContactText = (lang: Lang) => {
  const c = aaContactBlock[lang];
  return `## ${c.heading}\n\n- ${c.addressLabel}: ${aaOffice.address[lang].full}\n${aaPhonesText(lang)}\n- Facebook: ${aaOffice.profiles.facebook}\n- Instagram: ${aaOffice.profiles.instagram}`;
};

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
        `## ${aaOnHome[lang].heading}\n\n${aaOnHome[lang].body}\n\n${aaOnHome[lang].offers.map((o) => `- ${o.text}`).join('\n')}`,
        `## ${h.ai.heading}\n\n${h.ai.intro} ${h.ai.note}`,
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
            .map((f) => `- ${f.content[lang].navLabel}${f.optional ? ` (${t('optionalBadge', lang)})` : ''}${f.ai ? ` (${t('aiBadge', lang)})` : ''}: ${f.content[lang].cardSummary}`)
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

  for (const g of guides) {
    const gc = g.content[lang];
    out.push({
      lang,
      path: path(lang, 'guides', g.slug),
      title: gc.title,
      description: gc.description,
      kind: 'guide',
      text: () =>
        [
          gc.answer,
          gc.keyFacts.map((k) => `- ${k.label}: ${k.value}`).join('\n'),
          sectionsText(gc.sections),
          `## ${t('faq', lang)}\n\n${faqText(gc.faqs)}`,
          gc.sourceNote,
        ].join('\n\n'),
    });
  }

  const hub = aaHub[lang];
  out.push({
    lang,
    path: path(lang, 'academic-accountant'),
    title: hub.title,
    description: hub.description,
    kind: 'office',
    text: () =>
      [
        hub.answer,
        hub.keyFacts.map((k) => `- ${k.label}: ${k.value}`).join('\n'),
        `## ${hub.whatWeDo.heading}\n\n${hub.whatWeDo.intro}\n\n${hub.whatWeDo.cards.map((c) => `- ${c.title}: ${c.body}`).join('\n')}`,
        sectionsText([hub.training]),
        `## ${hub.systems.heading}\n\n${hub.systems.intro}\n\n- ${t('companies', lang)}: ${hub.systems.genoa}\n- ${t('government', lang)}: ${hub.systems.genoaGov}\n\n${hub.systems.alongside}\n\n${hub.systems.demoLead} ${hub.systems.demoLink}.`,
        `## ${aaConsultation[lang].heading}\n\n${aaConsultation[lang].body}`,
        aaContactText(lang),
        `## ${hub.faqHeading}\n\n${faqText(hub.faqs)}`,
      ].join('\n\n'),
  });
  const sv = aaServicesPage[lang];
  out.push({
    lang,
    path: path(lang, 'academic-accountant', 'services'),
    title: sv.title,
    description: sv.description,
    kind: 'office',
    text: () =>
      [
        sv.answer,
        ...aaGroupOrder.map(
          (g) =>
            `## ${sv.groups[g]}\n\n${aaServices
              .filter((s) => s.group === g)
              .map((s) => `### ${s.content[lang].name}\n\n${s.content[lang].body}`)
              .join('\n\n')}${g === 'systems' ? `\n\n${sv.systemsLead} ${t('companies', lang)}, ${t('government', lang)}.` : ''}`,
        ),
        `## ${sv.whoFor.heading}\n\n${sv.whoFor.body}\n\n${sv.whoFor.bullets.map((b) => `- ${b}`).join('\n')}`,
        `## ${aaConsultation[lang].heading}\n\n${aaConsultation[lang].body}`,
        aaContactText(lang),
      ].join('\n\n'),
  });

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
    text: () => [a.answer, sectionsText(a.sections), `## ${aaOnAbout[lang].heading}\n\n${aaOnAbout[lang].body}`].join('\n\n'),
  });
  const c = contact[lang];
  out.push({
    lang,
    path: path(lang, 'contact'),
    title: c.title,
    description: c.description,
    kind: 'contact',
    text: () =>
      [
        c.answer,
        `## ${c.nextHeading}\n\n${c.nextSteps.map((x, i) => `${i + 1}. ${x}`).join('\n')}`,
        `## ${aaOnContact[lang].heading}\n\n${aaOnContact[lang].body}\n\n- ${aaContactBlock[lang].addressLabel}: ${aaOffice.address[lang].full}\n${aaPhonesText(lang)}`,
      ].join('\n\n'),
  });
  return out;
};

export const allPages = () => LANGS.flatMap((l) => catalog(l));
