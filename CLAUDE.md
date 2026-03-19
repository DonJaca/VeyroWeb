# VeyroWeb — CLAUDE.md

## Stack

- **Next.js 15** App Router, `output: "export"` (static site on Cloudflare Pages)
- **React 19** + TypeScript (strict)
- **Tailwind CSS v4** — konfiguracja przez `@theme {}` w CSS, nie `tailwind.config.js`
- **Dark mode** — class-based: `@variant dark (&:where(.dark, .dark *))`, toggle przez `.dark` na `<html>`
- **Fonty** — Inter + Syne przez `next/font/google` (`display: "swap"`, `adjustFontFallback: true`), Material Symbols przez async `<link>` w layout
- **Deploy** — Cloudflare Pages via `wrangler pages deploy out`

## Struktura projektu

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonty, Providers, LCP preloads, structured data
│   ├── page.tsx            # Strona główna
│   ├── portfolio/page.tsx  # Podstrona /portfolio
│   ├── podejscie/page.tsx  # Podstrona /podejscie
│   ├── o-nas/page.tsx      # Podstrona /o-nas
│   ├── kontakt/page.tsx    # Podstrona /kontakt (formularz)
│   ├── polityka-prywatnosci/page.tsx  # Statyczna (bez "use client")
│   ├── regulamin/page.tsx  # Statyczna (bez "use client")
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky nav, burger menu, scroll-spy, dark/lang toggle
│   │   ├── Footer.tsx      # 3 layouty: mobile / md: 2-col / lg: 4-col
│   │   └── Container.tsx   # Wrapper: max-w-7xl mx-auto px-6 md:px-10 lg:px-20
│   ├── sections/
│   │   ├── Hero.tsx            # LCP element, <picture> z art direction (desktop/mobile)
│   │   ├── ValueProposition.tsx
│   │   ├── Services.tsx        # id="uslugi"
│   │   ├── Works.tsx           # id="portfolio", next/image z fill
│   │   ├── ApproachPreview.tsx # id="podejscie"
│   │   ├── AboutPreview.tsx    # id="o-nas"
│   │   ├── SocialProof.tsx
│   │   └── CTA.tsx
│   └── Providers.tsx       # Wrapper dla LanguageContext + HtmlLangSync
├── contexts/
│   └── LanguageContext.tsx  # lang: "pl" | "en", toggle, localStorage
├── hooks/
│   └── useDarkMode.ts      # Toggle .dark na <html>, localStorage
├── lib/
│   ├── translations.ts     # t[lang], NAV_ROUTES, FOOTER_NAV_ROUTES, BACK_LABEL
│   ├── projects.ts         # PROJECTS[] — wspólne dane dla Works i /portfolio
│   └── site.ts             # siteConfig: url, name, email, description, keywords
├── styles/
│   └── globals.css          # Tailwind v4 @theme, dark variant, smooth scroll, CLS fixes
├── scripts/
│   └── inline-css.mjs       # Post-build: inline CSS into HTML (eliminates render-blocking)
│   └── download-images.mjs  # Utility: download Google images → WebP
└── public/
    ├── images/              # Self-hosted WebP images (immutable 1yr cache)
    └── _headers             # Cloudflare Pages headers: cache, security, X-Robots-Tag
```

## Nawigacja

```ts
NAV_ROUTES = ["/#uslugi", "/#portfolio", "/#podejscie", "/#o-nas"]
FOOTER_NAV_ROUTES = ["/#uslugi", "/#portfolio", "/o-nas", "/kontakt"]
```

- **Scroll-spy** w Header przez `IntersectionObserver` (threshold 0.35)
- **CTA buttons** → `/kontakt`
- **"Zobacz wszystkie projekty"** → `/portfolio`

## Design system

- **Kolor primary**: `#FF6B00` (pomarańczowy)
- **Tło light**: `#f8f8f5`, **dark**: `#121212`
- **Border-radius**: 0 wszędzie (brutalist)
- **Klasa** `.text-outline`: przezroczysty tekst z obrysem `currentColor`
- **Padding sekcji**: `px-6 md:px-10 lg:px-20` przez Container
- **Max-width**: `max-w-7xl mx-auto` w Container

## Obrazy

- **Self-hosted WebP** w `public/images/` (nie Google CDN)
- Cache: `max-age=31536000, immutable` via `_headers`
- Hero używa `<picture>` z media queries (art direction) — NIE next/image
- Works i Portfolio używają `<Image>` z next/image (`fill` + `sizes`)
- `images: { unoptimized: true }` w next.config (wymagane dla static export)

## Performance

- **Build**: `next build && node scripts/inline-css.mjs`
- **CSS inline** w HTML (eliminuje render-blocking request)
- **LCP preloads** w layout.tsx z media queries (desktop/mobile osobno)
- **Material Symbols** ładowane async: `media="print"` + `requestAnimationFrame` swap
- **Preconnect** do fonts.googleapis.com i fonts.gstatic.com
- **Material Symbols CLS fix**: stałe wymiary `.material-symbols-outlined` w CSS
- **browserslist**: last 2 versions Chrome/Firefox/Safari/Edge

## Dwujęzyczność

- Domyślny język: **PL**, toggle do EN
- Stan w `LanguageContext` + `localStorage`
- Wszystkie teksty w `src/lib/translations.ts` pod kluczami `t.pl.*` i `t.en.*`
- Przy dodawaniu nowych tekstów — zawsze dodawać oba języki

## Responsywność

- `md:` (768px) — główna granica mobile/desktop
- `sm:` (576px) — kroki w ApproachPreview
- `lg:` (1024px) — pełny desktop layout
- `overflow-x: hidden` na body
- Nagłówki sekcji: `text-3xl` na mobile, skalowane na `md:` i `lg:`
- Burger menu: 3 animowane spany CSS → X, slide-down przez `grid-rows-[0fr→1fr]`

## Ważne zasady

- Podstrony z hookami są `"use client"`, statyczne (regulamin, polityka) NIE
- Nie używać `hidden md:block` bez mobilnej alternatywy
- Hero musi używać `<picture>` (art direction), NIE next/image
- Fonty: `display: "swap"` + `adjustFontFallback: true` (nie `optional` — psuje text-outline)
- `BACK_LABEL = { pl: "Wróć do sekcji", en: "Back to section" }`
