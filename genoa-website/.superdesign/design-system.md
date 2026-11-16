# Design system — Genoa Systems marketing site

## Product context
- **Genoa Systems**: Iraqi accounting-software company. Two separate products:
  - **Genoa** (companies, brand blue `#1746a2`): accounting + inventory for Iraqi trading/importing companies — Unified Accounting System chart & IFRS statements, accounts, warehouses, sales & purchases, customer/supplier ledgers with ageing, optional multi-currency (IQD + USD) and landed cost, two AI features (AI assistant, invoice from image).
  - **Genoa Gov** (Iraqi government departments, brand green `#0b6e63`): vouchers with a multi-user approval chain, full audit log of every edit to a posted document, budget & allocations, cheques (الصكوك), monthly/annual closing, legislation library, separate database per department.
- **Audience**: accountants, finance managers, company owners in Iraq; government accounting-department heads. Arabic first (RTL, `/ar/` default), full English at `/en/` (LTR).
- **Job to be done**: understand which product fits, trust it (audit, security, local fit), then **book a demo** or **message on WhatsApp**. Those two are the only conversions.
- **SEO/GEO rule (non-negotiable)**: every page opens with an H1 and an "answer" paragraph that AI assistants quote verbatim. A redesign may restyle, split visually (lead sentence emphasised, rest smaller) or place it beside a visual, but the full answer text must stay visible on the page as real text — never hidden behind a click, never cut.
- **Honesty rules**: no invented metrics, customer logos, testimonials, ratings, prices or client counts. Screenshots carry the "بيانات تجريبية" (demo data) tag. Illustrations are labelled "رسم توضيحي" when they are drawings.

## Home page architecture (current)
1. Sticky glass header: logo (lighthouse mark on blue tile + "Genoa Systems") · nav: Genoa للشركات · Genoa Gov للدوائر الحكومية · الأمان · من نحن · pill "English" · primary "احجز عرضاً توضيحياً".
2. Hero: eyebrow pill "Genoa Systems", H1 "نظام محاسبي عراقي للشركات وللدوائر الحكومية", answer paragraph (~8 lines desktop), buttons (book demo, WhatsApp), six check-pill highlights, illustration (journal entry + voucher approval).
3. Two product cards side by side: Genoa (blue) / Genoa Gov (green) — tag, "ما هو …؟" heading, paragraph, icon list of modules (with "ميزة اختيارية" amber and "ذكاء اصطناعي" violet badges), CTA.
4. Dark AI band: "مساعد ذكي، وفاتورة تُضاف من صورتها" with two cards.
5. "شاهد البرنامج": two real framed screenshots (Genoa dashboard, Genoa Gov payment voucher), demo-data tags.
6. "أيّ البرنامجين يناسب جهتك؟" comparison table (rows: designed for, core modules, what sets it apart, details links).
7. "مبادئ واضحة في البرنامجين": four principle cards.
8. Two cards: security & backups / buyer FAQ links.
9. Dark CTA band "شاهد البرنامج بنفسك" + buttons. 10. Dark footer with four link columns.

## Visual language (keep — refine, do not replace)
- **Font**: IBM Plex Sans Arabic only, weights **400 and 700 only**. Body 17px / line-height 1.75 (Arabic). H1 `clamp(2rem, 1.35rem + 2.9vw, 3.25rem)`, line-height 1.4 in Arabic, no letter-spacing on Arabic. H2 `clamp(1.4rem, 1.15rem + 1vw, 1.85rem)`. H3 1.15rem.
- **Colours**: ink `#0f1b2d`, ink-2 `#33415a`, muted `#4a5568`, line `#e2e7f0`, bg `#fff`, soft `#f5f7fb`; brand blue `#1746a2` / ink `#0f3275` / soft `#e8eefb`; gov green `#0b6e63` / ink `#07534a` / soft `#e3f3f0`; WhatsApp `#0d7a3a`; AI violet `#6d28d9` / soft `#f1ebff`; amber `#b7791f`; focus ring `#b45309`.
- **Gradients**: brand `135deg #1746a2→#2f5fd0`; gov `135deg #07534a→#0b6e63`; AI `135deg #6d28d9→#2f5fd0`. Hero: soft blue/violet radial washes over `#f6f8fd→#fff` with a faint 22px dot grid. Dark bands: navy `#0c1626`/`#0f1b2d` with subtle violet/blue/green glows.
- **Shape**: cards radius 18px, 1px `#e2e7f0` border, shadow `0 1px 2px rgb(15 27 45/5%), 0 12px 32px -10px rgb(15 27 45/14%)`, hover lift shadow `0 22px 44px -14px rgb(15 27 45/22%)`. Buttons radius 12px, min-height 48px, 700 weight. Pills/tags radius 999px.
- **Buttons**: primary = blue gradient, white text, soft blue drop shadow; WhatsApp = green `#0d7a3a` with WhatsApp icon; ghost = white with 1px line border. Genoa Gov CTAs use the gov gradient.
- **Product colour coding**: everything about Genoa is blue, everything about Genoa Gov is green, AI is violet. Keep this mapping.
- **Icons**: thin stroke line icons (24px viewBox, ~1.8 stroke), coloured by product.
- **Logo**: the lighthouse BrandMark on a blue gradient rounded tile + "Genoa Systems" wordmark. Never replace it.
- **Layout**: container max 1140px with 16px gutters; generous section padding `clamp(2.5rem, 2rem + 3vw, 4.5rem)`; alternating white and `#f5f7fb` bands.

## Motion
Only transform/opacity animate, only under `prefers-reduced-motion: no-preference`. Scroll reveal fades/slides sections in with a small stagger. Gentle hover lift on cards. No parallax, no autoplaying carousels.

## Accessibility & platform requirements
- WCAG AA: text contrast ≥ 4.5:1; visible amber focus ring; touch targets ≥ 44px; works at 200% text size.
- RTL first: mirror layouts correctly (logo at the right in Arabic), directional arrows flip.
- Mobile 390px must be first-class: primary CTA reachable without scrolling past a wall of text.
- Static site, almost no JavaScript: designs must work as plain HTML/CSS (popover menu, details/summary disclosures are fine).
