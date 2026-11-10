import type { APIRoute, GetStaticPaths } from 'astro';
import { productList } from '../../content';

/**
 * Clearly-labelled placeholder "screenshots". They contain no numbers and no
 * names — only grey wireframe blocks — so nothing can be mistaken for data.
 */
type Item = { name: string; en: string; ar: string; accent: string };

export const getStaticPaths: GetStaticPaths = () => {
  const items: Item[] = [{ name: 'home', en: 'Genoa · Genoa Gov', ar: 'Genoa و Genoa Gov', accent: '#33415a' }];
  for (const p of productList) {
    const accent = p.id === 'companies' ? '#1746a2' : '#0b6e63';
    items.push({ name: `${p.id}-overview`, en: p.brand, ar: p.brand, accent });
    for (const f of p.features) {
      items.push({ name: `${p.id}-${f.slug}`, en: f.content.en.navLabel, ar: f.content.ar.navLabel, accent });
    }
  }
  return items.map((it) => ({ params: { name: it.name }, props: it }));
};

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = ({ props }) => {
  const { en, ar, accent } = props as Item;
  const rows = Array.from({ length: 8 }, (_, i) => {
    const y = 400 + i * 38;
    return `<rect x="300" y="${y}" width="${520 - (i % 3) * 60}" height="12" rx="6" fill="#e3e8f0"/><rect x="900" y="${y}" width="${200 - (i % 2) * 40}" height="12" rx="6" fill="#e3e8f0"/>`;
  }).join('');
  const side = Array.from({ length: 8 }, (_, i) => `<rect x="28" y="${110 + i * 46}" width="${150 - (i % 3) * 25}" height="14" rx="7" fill="${i === 1 ? accent : '#dfe5ee'}" opacity="${i === 1 ? 0.5 : 1}"/>`).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750" role="img" aria-label="Placeholder screenshot">
<defs><pattern id="h" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="22" height="22" fill="#fff"/><rect width="11" height="22" fill="#f6f8fb"/></pattern></defs>
<rect width="1200" height="750" rx="18" fill="url(#h)"/>
<rect x="0.5" y="0.5" width="1199" height="749" rx="18" fill="none" stroke="#dde3ec"/>
<path d="M18 0.5h1164a17.5 17.5 0 0 1 17.5 17.5v38H0.5V18A17.5 17.5 0 0 1 18 0.5z" fill="#eef2f8"/>
<circle cx="30" cy="28" r="7" fill="#d4dae4"/><circle cx="54" cy="28" r="7" fill="#d4dae4"/><circle cx="78" cy="28" r="7" fill="#d4dae4"/>
<rect x="0.5" y="56" width="220" height="693" fill="#f8fafc"/>${side}
<rect x="260" y="86" width="300" height="22" rx="11" fill="${accent}" opacity=".35"/>
<rect x="260" y="140" width="280" height="150" rx="14" fill="#fff" stroke="#e3e8f0"/><rect x="570" y="140" width="280" height="150" rx="14" fill="#fff" stroke="#e3e8f0"/><rect x="880" y="140" width="280" height="150" rx="14" fill="#fff" stroke="#e3e8f0"/>
<rect x="260" y="320" width="900" height="400" rx="14" fill="#fff" stroke="#e3e8f0"/><rect x="260" y="320" width="900" height="50" rx="14" fill="#f1f4f9"/>${rows}
<g>
<rect x="250" y="240" width="700" height="270" rx="20" fill="#fff" stroke="#c99a1a" stroke-width="3" stroke-dasharray="12 9"/>
<text x="600" y="305" text-anchor="middle" font-family="IBM Plex Sans Arabic, Segoe UI, Tahoma, Arial, sans-serif" font-size="34" font-weight="700" fill="#6b4700" letter-spacing="2">PLACEHOLDER SCREENSHOT</text>
<text x="600" y="358" text-anchor="middle" direction="rtl" font-family="IBM Plex Sans Arabic, Segoe UI, Tahoma, Arial, sans-serif" font-size="32" font-weight="700" fill="#6b4700">صورة توضيحية مؤقتة</text>
<text x="600" y="412" text-anchor="middle" font-family="IBM Plex Sans Arabic, Segoe UI, Tahoma, Arial, sans-serif" font-size="26" fill="${accent}" font-weight="700">${esc(en)}</text>
<text x="600" y="452" text-anchor="middle" direction="rtl" font-family="IBM Plex Sans Arabic, Segoe UI, Tahoma, Arial, sans-serif" font-size="26" fill="${accent}" font-weight="700">${esc(ar)}</text>
<text x="600" y="490" text-anchor="middle" font-family="IBM Plex Sans Arabic, Segoe UI, Tahoma, Arial, sans-serif" font-size="17" fill="#4a5568">To be replaced with a real screenshot using test data</text>
</g>
</svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};
