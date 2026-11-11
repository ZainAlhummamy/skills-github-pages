/**
 * When each page's content last changed, for the sitemap's <lastmod> and the WebPage's dateModified.
 *
 * The dates come from src/content/page-dates.json: for every page, a hash of its visible text (title, description
 * and <main>) and the day that text last changed. `npm run dates` updates it from a fresh build, and check-site.mjs
 * warns when a page's text no longer matches its hash. A page without an entry gets no date rather than the build
 * date, which would claim that every page changed on every deploy.
 */
import dates from '../content/page-dates.json';

const table = dates as Record<string, { hash: string; modified: string }>;

export const modifiedOn = (pathname: string): string | undefined => table[pathname]?.modified;
