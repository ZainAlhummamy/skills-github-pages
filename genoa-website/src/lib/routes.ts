import { site } from '../config/site';
import type { Lang } from '../content/types';
import { LANGS } from '../content/types';

/**
 * Every page exists in both languages with the same English slug, so the
 * alternate of /ar/x/ is always /en/x/. Paths always end with a slash.
 */
export const path = (lang: Lang, ...segments: string[]) => {
  const rest = segments.filter(Boolean).join('/');
  return rest ? `/${lang}/${rest}/` : `/${lang}/`;
};

export const abs = (p: string) => `${site.url}${p}`;

/** Strip the language prefix: "/ar/companies/" -> "companies/" */
export const unlocalized = (p: string) => p.replace(/^\/(ar|en)\/?/, '');

export const alternates = (p: string) => {
  const rest = unlocalized(p);
  const out = LANGS.map((lang) => ({ lang, href: abs(`/${lang}/${rest}`) }));
  return [...out, { lang: 'x-default', href: abs(`/ar/${rest}`) }];
};

export const swapLang = (p: string, to: Lang) => `/${to}/${unlocalized(p)}`;

export const productPath = (lang: Lang, product: 'companies' | 'government', slug?: string) =>
  path(lang, product, ...(slug ? [slug] : []));
