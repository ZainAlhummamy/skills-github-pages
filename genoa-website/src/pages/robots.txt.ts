import type { APIRoute } from 'astro';
import { abs } from '../lib/routes';

/* Search engines and AI assistants are explicitly welcome: being read and
 * cited by them is the point of this site. */
const aiAgents = [
  'Googlebot',
  'Bingbot',
  'Google-Extended',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Applebot',
  'Applebot-Extended',
  'CCBot',
  'DuckAssistBot',
  'meta-externalagent',
];

export const GET: APIRoute = () => {
  const body = [
    '# Genoa Systems — https://' + new URL(abs('/')).host,
    '# Search engines and AI assistants are welcome to crawl and cite this site.',
    '# A plain-text summary for AI assistants is at /llms.txt (full text: /llms-full.txt).',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    ...aiAgents.flatMap((a) => [`User-agent: ${a}`, 'Allow: /', '']),
    `Sitemap: ${abs('/sitemap.xml')}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
