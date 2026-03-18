# VeyroWeb — CLAUDE.md

## Stack

- **Next.js 15** App Router, `"use client"` na komponentach z hookami
- **React 19** + TypeScript (strict)
- **Tailwind CSS v4** — konfiguracja przez `@theme {}` w CSS, nie `tailwind.config.js`
- **Dark mode** — class-based: `@variant dark (&:where(.dark, .dark *))`, toggle przez `.dark` na `<html>`
- **Fonty** — Inter + Syne przez `next/font/google`, Material Symbols przez `<link>` w layout

## Struktura projektu

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonty, Providers
│   ├── page.tsx            # Strona główna
│   ├── portfolio/page.tsx  # Podstrona /portfolio
│   ├── podejscie/page.tsx  # Podstrona /podejscie
│   └── o-nas/page.tsx      # Podstrona /o-nas
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky nav, burger menu, scroll-spy, dark/lang toggle
│   │   └── Footer.tsx      # 3 layouty: mobile / md: 2-col / lg: 4-col
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── Services.tsx        # id="uslugi"
│   │   ├── Works.tsx           # id="portfolio"
│   │   ├── ApproachPreview.tsx # id="podejscie"
│   │   ├── AboutPreview.tsx    # id="o-nas"
│   │   ├── SocialProof.tsx
│   │   └── CTA.tsx
│   └── Providers.tsx       # Wrapper dla LanguageContext
├── contexts/
│   └── LanguageContext.tsx # lang: "pl" | "en", toggle, localStorage
├── hooks/
│   └── useDarkMode.ts      # Toggle .dark na <html>, localStorage
├── lib/
│   ├── translations.ts     # t[lang], NAV_ROUTES, FOOTER_NAV_ROUTES, BACK_LABEL
│   └── projects.ts         # PROJECTS[] — wspólne dane dla Works i /portfolio
└── styles/
    └── globals.css         # Tailwind v4 @theme, dark variant, smooth scroll
```

## Nawigacja

```ts
NAV_ROUTES = ["/#uslugi", "/#portfolio", "/#podejscie", "/#o-nas"]
// Wszystkie linki w nav scrollują do sekcji na homepage
// Sekcje mają odpowiadające id= na elementach section

FOOTER_NAV_ROUTES = ["/#uslugi", "/#portfolio", "/o-nas", "mailto:hello@veyro.design"]
```

- **Scroll-spy** w Header przez `IntersectionObserver` (threshold 0.35) — podświetla aktywną sekcję
- **Przycisk "Wróć do sekcji"** na każdej podstronie prowadzi do odpowiedniego `/#anchor`
- **Przyciski CTA** ("Porozmawiajmy", "Rozpocznijmy rozmowę") → `mailto:hello@veyro.design`
- **Przyciski "Zobacz wszystkie projekty"** w Works → `/portfolio`
- **Przyciski w sekcjach** ApproachPreview/AboutPreview → `/podejscie` i `/o-nas`

## Design system

- **Kolor primary**: `#FF6B00` (pomarańczowy)
- **Tło light**: `#f8f8f5`, **dark**: `#121212`
- **Border-radius**: 0 wszędzie (brutalist)
- **Klasa** `.text-outline`: przezroczysty tekst z obrysem `currentColor`
- **Padding sekcji**: zawsze `px-6 md:px-10 lg:px-20` (header i wszystkie sekcje)
- **Max-width**: `max-w-7xl mx-auto` na wewnętrznym wrapper każdej sekcji

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
- Burger menu: 3 animowane spany CSS → X, slide-down przez `grid-rows-[0fr→1fr]`
- Sekcje `ValueProposition` i `SocialProof` są widoczne na WSZYSTKICH rozmiarach

## Ważne zasady

- Podstrony są `"use client"` bo używają `useLanguage()`
- Nie używać `hidden md:block` bez mobilnej alternatywy
- Siatki 2-kolumnowe: usuwać `border-r` z prawej kolumny (`i % 2 === 1`) osobno
- `BACK_LABEL = { pl: "Wróć do sekcji", en: "Back to section" }`
