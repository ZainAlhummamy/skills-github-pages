# Deploying the Genoa Systems website

Brief for whoever deploys this site, human or AI agent. The site is plain static
files: no server code, no database, no serverless functions, no secrets.

## At a glance

| | |
|---|---|
| Production address | **`https://site.genoasystem.com`** (owner's decision, 11 Nov 2026). `genoasystem.com` itself serves the app's login: leave it alone. |
| Repository | https://github.com/ZainAlhummamy/skills-github-pages (public) |
| Branch | `main` |
| App folder (root / base directory) | `genoa-website/` — everything else in the repo is an unrelated GitHub Skills course |
| Framework | Astro 7.4.8, `output: 'static'` |
| Node | **22.23.4 or newer** (pinned in `.nvmrc`; Astro refuses older versions) |
| Install | `npm ci` |
| Build | `npm run build` (Astro build, then `scripts/check-site.mjs` SEO checks; a failed check fails the build) |
| Output directory | `genoa-website/dist/` |
| Pages | 50 HTML pages (25 Arabic under `/ar/`, 25 English under `/en/`), `404.html`, root `/` redirect, `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt` |
| URL style | Directories with trailing slash: `/ar/companies/inventory/`. Do not strip trailing slashes. |

## Environment variables (build time)

They are read **during the build**, so changing one requires a redeploy.

| Variable | Production | Example | What it does |
|---|---|---|---|
| `SITE_URL` | **required** | `https://site.genoasystem.com` | Final public origin, no trailing slash. Used for canonical tags, hreflang, sitemap, Open Graph, JSON-LD, robots.txt. Must match the host users actually land on. |
| `WHATSAPP_NUMBER` | **required** | `9647XXXXXXXXX` | Digits only, international format. WhatsApp buttons and the demo form. |
| `CONTACT_EMAIL` | **required** | `sales@genoa.iq` | Public e-mail on the contact page and in JSON-LD. |
| `FORM_ENDPOINT` | optional | `https://formspree.io/f/xxxx` | POST target for the demo form. Empty = the form opens WhatsApp with a pre-filled message and nothing is stored. If set, the privacy sentence in `src/content/pages.ts` (`contact.privacy`) must be updated to name the service. |
| `SITE_NOINDEX` | **never** | `true` | Staging only: every page gets `noindex, nofollow`, and every response an `X-Robots-Tag: noindex, nofollow` header (added to `dist/_headers`). robots.txt still allows crawling, so crawlers see the noindex and drop staging URLs they saw before. Use for preview/staging deploys. |
| `NODE_VERSION` | host-dependent | `22.23.4` | Only if the host does not read `.nvmrc`. |
| `PRODUCTION` | **required on other hosts** | `true` | Marks a production build on a host other than Cloudflare Pages (see below); `true`, `1` or `yes`, any case. Cloudflare Pages needs nothing: it sets `CF_PAGES_BRANCH`, and `main` is production. |

### Production builds

A build is a **production build** when `CF_PAGES_BRANCH=main` (Cloudflare Pages sets this on
the production branch) or `PRODUCTION=true` (also `1` or `yes`, any case). `scripts/check-site.mjs` then **fails the build** if:

- `SITE_URL` is unset, the placeholder, ends with `/`, or its host is a `*.pages.dev`
  address, `localhost`, or a reserved `.example`, `.test`, `.invalid` or `.localhost` name;
- `WHATSAPP_NUMBER` is unset, the placeholder, or not digits only;
- `CONTACT_EMAIL` is unset, the placeholder, not an e-mail address, or at a reserved
  `.example`, `.test`, `.invalid` or `.localhost` domain;
- `SITE_NOINDEX` is set to anything;
- any built page other than `404.html` carries a robots `noindex`, or `_headers` sends
  `X-Robots-Tag: noindex` for a path on every host.

Fix the environment and redeploy; never weaken the check.

Preview builds (any other branch, no `PRODUCTION`) are not checked this way: their build
log ends with a "Before launch, set:" list while a placeholder is in use
(`genoa-systems.example`, `9647000000000`) or while `SITE_NOINDEX=true`.

## Host recipes

### Cloudflare Pages (recommended)

1. Workers & Pages → Create → Pages → Connect to Git → `ZainAlhummamy/skills-github-pages`.
2. Production branch: `main`. Framework preset: **Astro**.
3. Root directory: `genoa-website`. Build command: `npm run build`. Build output directory: `dist`.
4. Environment variables (Production): `NODE_VERSION=22.23.4`, `SITE_URL`, `WHATSAPP_NUMBER`, `CONTACT_EMAIL` (+ `FORM_ENDPOINT` if used).
5. Environment variables (Preview): the same, plus `SITE_NOINDEX=true` and `SITE_URL=https://<project>.pages.dev`.
6. `public/_redirects` (`/` → `/ar/` 301) and `public/_headers` (security + cache headers) are applied automatically.
7. Custom domain: add `site.genoasystem.com` (a `CNAME` from `site` to `<project>.pages.dev` in the
   `genoasystem.com` DNS). Do not attach the apex `genoasystem.com`: it serves the app.
8. HTTPS only: in the `genoasystem.com` zone, SSL/TLS → Edge Certificates → **Always Use HTTPS** on, and
   **HTTP Strict Transport Security** on (max-age 6 months or more). Leave *Include subdomains* and *Preload* off
   unless every subdomain, the app included, is HTTPS-only. Check: `curl -sI http://site.genoasystem.com/` must
   answer 301 to `https://`.

#### Duplicate addresses (`*.pages.dev`)

Cloudflare also serves the site at `<project>.pages.dev` and each preview at
`<hash>.<project>.pages.dev`. `public/_headers` sends `X-Robots-Tag: noindex` for both
(`https://:project.pages.dev/*` and `https://:version.:project.pages.dev/*`), so only the real
domain is indexed; every page's canonical tag already points at `SITE_URL`. This was chosen
over a redirect because it lives in the repository, needs no dashboard setup, keeps each
deploy's own address usable for checking it, and covers previews too. `check-site.mjs` fails
the build if the rules go missing.

Optional, stronger: also redirect `<project>.pages.dev` to the domain with a Cloudflare Bulk
Redirect (Account → Bulk Redirects: source `<project>.pages.dev`, target `SITE_URL`, 301,
preserve path and query). Leave preview addresses unredirected.

### Netlify

- Base directory `genoa-website`, build command `npm run build`, publish directory `dist` (that is, `genoa-website/dist`).
- Node comes from `.nvmrc`. `_redirects` and `_headers` are applied automatically.
- Set the variables for Production, plus `PRODUCTION=true`; for Deploy Previews add `SITE_NOINDEX=true` instead.

### Vercel

- Root Directory `genoa-website`, framework Astro, build `npm run build`, output `dist`, Node 22.x.
- Production environment variables: the ones above, plus `PRODUCTION=true`.
- Vercel ignores `_redirects` and `_headers`. Add `genoa-website/vercel.json`:

```json
{
  "trailingSlash": true,
  "redirects": [{ "source": "/", "destination": "/ar/", "permanent": true }],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" }
      ]
    },
    { "source": "/fonts/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] }
  ]
}
```

### Caddy, Nginx or any static server (the VPS)

`site.genoasystem.com` was served by Caddy on the VPS when this was written. On such a host:

1. Build with `PRODUCTION=true` (only Cloudflare Pages is detected by itself), the real values, and no `SITE_NOINDEX`:

   ```bash
   cd genoa-website && npm ci
   SITE_URL=https://site.genoasystem.com WHATSAPP_NUMBER=<digits> CONTACT_EMAIL=<real inbox> PRODUCTION=true npm run build
   ```

2. Serve the contents of `dist/`. These servers ignore `_redirects` and `_headers`, so set the same rules in the
   server's own config, as below.
3. **Remove any `X-Robots-Tag` header the server adds for this site** (a staging setup may have one). A production
   response must carry none; `curl -sI https://site.genoasystem.com/ar/ | grep -i x-robots` must print nothing.

Caddy (a sketch, not run here: check it with `caddy validate` on the server, and adapt `root` to where `dist/` lives;
behind a gateway Caddy, the headers belong in whichever block answers for `site.genoasystem.com`):

```caddyfile
site.genoasystem.com {
	root * /srv/genoa-website/dist
	encode zstd gzip
	redir / /ar/ 301
	header {
		X-Content-Type-Options nosniff
		Referrer-Policy strict-origin-when-cross-origin
		Permissions-Policy "camera=(), microphone=(), geolocation=()"
		X-Frame-Options SAMEORIGIN
	}
	header /fonts/* Cache-Control "public, max-age=31536000, immutable"
	header /_astro/* Cache-Control "public, max-age=31536000, immutable"
	header /og/* Cache-Control "public, max-age=604800"
	file_server
	handle_errors {
		@notFound expression {err.status_code} == 404
		handle @notFound {
			rewrite * /404.html
			file_server
		}
	}
}
```

Nginx:

```nginx
root /var/www/genoa/dist;
location = / { return 301 /ar/; }
location / { try_files $uri $uri/ =404; }
error_page 404 /404.html;
location /fonts/ { add_header Cache-Control "public, max-age=31536000, immutable"; }
```

### GitHub Pages (not recommended here)

Possible with the official `withastro/action` (`path: genoa-website`), but GitHub Pages ignores
`_redirects`/`_headers` (the root page still redirects with a meta refresh), and this repository's
GitHub Skills course workflows react to Pages builds. Prefer Cloudflare Pages or Netlify.

## Do not

- Do not edit the copy in `src/content/`. Several sentences are pending the owner's review (`CLAIMS-TO-VERIFY.md`).
- Do not skip or weaken `scripts/check-site.mjs`. If the build fails, fix the cause.
- Do not give a URL pattern two rules in `public/_headers`: a host may keep only one of them. Put its headers in one rule (the build fails otherwise).
- Do not run `npm run og` or `npm run lighthouse` in CI. They need a local Chrome; the OG images are already committed.
- Do not add analytics, tag managers or chat widgets without the owner's approval. The security page and contact form state that the site uses no tracking.
- Do not touch the repository-root `.github/` workflows (unrelated GitHub Skills course).
- Do not commit credentials. Nothing in this site needs a secret.

## Verify after deploying

Replace `DOMAIN` with the deployed host.

```bash
curl -sI https://DOMAIN/ | grep -iE '^(HTTP|location)'                 # 301 → /ar/
curl -s  https://DOMAIN/ar/ | grep -o '<link rel="canonical"[^>]*>'   # https://DOMAIN/ar/
curl -s  https://DOMAIN/ar/ | grep -o '<meta name="robots"[^>]*>'     # production: index, follow …
curl -sI https://DOMAIN/ar/ | grep -i x-robots                         # production: prints nothing
curl -s  https://DOMAIN/ar/ | grep -c 'genoa-systems.example'          # must print 0
curl -s  https://DOMAIN/robots.txt | head -8                           # Allow + Sitemap (staging too)
curl -sI https://DOMAIN/sitemap.xml | head -1                          # 200
curl -s  https://DOMAIN/llms.txt | head -3                             # "# Genoa Systems"
curl -sI https://DOMAIN/no-such-page/ | head -1                        # 404
```

Then:

1. Open `/ar/contact/` and submit the form: WhatsApp should open with a pre-filled message to the configured number (or the form POSTs to `FORM_ENDPOINT`).
2. Google Rich Results Test on `https://DOMAIN/ar/government/faq/` and `https://DOMAIN/ar/companies/`: FAQPage, BreadcrumbList and Organization should parse without errors.
3. PageSpeed Insights (mobile) on `/ar/` and `/en/`: expect 90+ in every category (local runs score 99–100).
4. Production only: in Google Search Console add the domain and submit `https://DOMAIN/sitemap.xml`; do the same in Bing Webmaster Tools (it can import from Search Console).

## Before the public launch (owner decisions, not the deployer's)

- Real WhatsApp number and e-mail. `SITE_URL` is decided: `https://site.genoasystem.com`.
- `CLAIMS-TO-VERIFY.md` reviewed with the product team.
- Real screenshots taken with test data, `sameAs` profile links in `src/config/site.ts`.

Until all of that is done, share preview deploys only (`SITE_NOINDEX=true`): a production
build fails on purpose while any of it is missing (see "Production builds").
