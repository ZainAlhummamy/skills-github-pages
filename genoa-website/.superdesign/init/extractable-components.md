# Extractable components — Genoa Systems

## Layout Components (appear on every page)

## SiteHeader
- Source: `src/components/Header.astro` (+ `Logo.astro`, `BrandMark.astro`)
- Category: layout
- Description: Sticky glass header — logo tile + "Genoa Systems" at inline-start; nav links, pill language switch, primary "book a demo" button at inline-end; collapses to a "القائمة" menu button on narrow screens.
- Extractable props: activeItem (string, default: "home"; one of home|companies|government|security|about|contact), lang (string, default: "ar")
- Hardcoded: BrandMark SVG (lighthouse), nav labels, colours, glass blur, button gradient

## SiteFooter
- Source: `src/components/Footer.astro`
- Category: layout
- Description: Dark navy footer with logo + intro, four link columns (Genoa, Genoa Gov, Company, Academic Accountant + social circles) and bottom bar.
- Extractable props: lang (string, default: "ar")
- Hardcoded: all link labels, logo, colours, social icons

## CtaBand
- Source: `src/components/CtaBand.astro`
- Category: layout
- Description: Dark rounded panel "شاهد البرنامج بنفسك" with demo + WhatsApp buttons, used at the bottom of most pages.
- Extractable props: none
- Hardcoded: heading/body text, buttons, colours

## Basic Components

## Button
- Source: global.css `.btn`, `.btn-primary`, `.btn-wa`, `.btn-ghost`
- Category: basic
- Description: 48px pill-ish buttons — blue gradient primary, WhatsApp green with icon, white ghost.
- Extractable props: variant (string, default: "primary")
- Hardcoded: radius 12px, weight 700

## ProductCard
- Source: `src/pages/[lang]/index.astro` (`.product-card` section)
- Category: basic
- Description: Product summary card with tag, heading, body, icon link list with optional/AI badges and CTA (blue for Genoa, green for Genoa Gov).
- Extractable props: product (string, default: "companies")

## Screenshot
- Source: `src/components/Screenshot.astro`
- Category: basic
- Description: Framed screenshot with three-dot browser bar and caption with "بيانات تجريبية" tag.
- Extractable props: none
