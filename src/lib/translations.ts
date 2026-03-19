export type Lang = "pl" | "en";

/* Nav routes — language-independent */
export const NAV_ROUTES = ["/#uslugi", "/#portfolio", "/#podejscie", "/#o-nas"] as const;

export const BACK_LABEL = { pl: "Wróć do sekcji", en: "Back to section" } as const;

/* Footer nav: Usługi, Portfolio, Studio, Kontakt */
export const FOOTER_NAV_ROUTES = ["/#uslugi", "/#portfolio", "/o-nas", "/kontakt"] as const;

export const t = {
  pl: {
    nav: {
      links: ["Usługi", "Portfolio", "Podejście", "O nas"] as const,
      cta: "Porozmawiajmy",
    },
    hero: {
      eyebrow: "Kierunek Kreatywny & Digital Design",
      description:
        "Tworzymy odważne produkty cyfrowe, które wyróżniają Twoją markę. Łączymy wyrazistą estetykę z intuicyjną użytecznością, aby przyciągać uwagę i generować wyniki.",
      viewWork: "Zobacz portfolio",
      contact: "Skontaktuj się z nami",
    },
    valueProps: [
      {
        icon: "bolt",
        title: "Odważna Wizja",
        description: "Przełamujemy schematy. Projektujemy interfejsy, które zapadają w pamięć i wyróżniają się na tle konkurencji.",
      },
      {
        icon: "account_circle",
        title: "Zorientowanie na Wyniki",
        description: "Design to nie tylko wygląd. Tworzymy intuicyjne ścieżki użytkownika, które zwiększają zaangażowanie i konwersję.",
      },
      {
        icon: "palette",
        title: "Wyrazisty Charakter",
        description: "Budujemy silną tożsamość wizualną poprzez przemyślany kontrast i typografię, precyzyjnie kierując uwagą odbiorcy.",
      },
    ],
    services: {
      heading: "Usługi",
      mobileLabel: "Nasza Ekspertyza",
      mobileHeading: "Specjalizacje",
      items: [
        { num: "01", title: "Identyfikacja Wizualna", desc: "Logo, Brand Book, Art Direction" },
        { num: "02", title: "Projektowanie UI/UX",    desc: "Interfejsy, Prototypy, Aplikacje Mobilne" },
        { num: "03", title: "Motion Design",           desc: "Animacje, Lottie, Mikrointerakcje" },
        { num: "04", title: "Web Development",         desc: "Frontend, Optymalizacja, Wdrożenia" },
      ],
    },
    works: {
      heading: ["Wybrane", "Realizacje"],
      seeAll: "Zobacz, co stworzyliśmy",
      explore: "Przeglądaj archiwum",
    },
    socialProof: "Tworzymy w oparciu o nowoczesne technologie",
    cta: {
      headline: "Porozmawiajmy o Twoim Projekcie",
      description: "Gotowy na odważne zmiany? Opowiedz nam o swoich celach, a my zaproponujemy rozwiązania, które pomogą Ci je osiągnąć.",
      button: "Rozpocznijmy rozmowę",
    },
    contact: {
      eyebrow: "Napisz do nas",
      heading: ["Skontaktuj", "się z nami"],
      intro: "Opowiedz nam o swoim projekcie. Odpiszemy w ciągu 24 godzin.",
      namePlaceholder: "Imię i nazwisko",
      emailPlaceholder: "Adres e-mail",
      messagePlaceholder: "Opowiedz nam o swoim projekcie...",
      send: "Wyślij wiadomość",
      direct: "Lub napisz bezpośrednio na",
    },
    footer: {
      description:
        "Niezależne studio kreatywne skupione na zaawansowanych rozwiązaniach cyfrowych i wyrazistej narracji wizualnej.",
      nav: "Nawigacja",
      navLinks: ["Usługi", "Portfolio", "O nas", "Kontakt"],
      office: "Biuro",
      socials: "Social Media",
      copyright: "© 2024 VEYRO DESIGN STUDIO. WSZYSTKIE PRAWA ZASTRZEŻONE.",
      privacy: "Polityka Prywatności",
      terms: "Regulamin",
    },

    /* ── Subpages ─────────────────────────────────────────── */
    portfolio: {
      eyebrow: "Nasze Realizacje",
      heading: ["Wszystkie", "Projekty"],
      intro: "Każdy projekt to unikalne wyzwanie. Oto wybrane prace, które definiują nasz styl i podejście do projektowania.",
      tag: "Wszystkie kategorie",
    },
    approach: {
      eyebrow: "Jak Pracujemy",
      heading: "Sprawdzony Proces",
      intro: "Przejrzysta współpraca to fundament sukcesu. Prowadzimy Cię krok po kroku od pierwszej koncepcji aż po finalne wdrożenie, skupiając się na mierzalnych rezultatach.",
      cta: "Zobacz pełny proces",
      steps: [
        { num: "01", title: "Odkrycie",   desc: "Zagłębiamy się w Twoją markę, grupę docelową i cele biznesowe, by w pełni zrozumieć kontekst projektu i oczekiwania." },
        { num: "02", title: "Strategia",  desc: "Na podstawie researchu wypracowujemy jasną strategię wizualną, architekturę informacji i roadmapę działań." },
        { num: "03", title: "Projekt",    desc: "Tworzymy odważne, unikalne projekty, które wyróżniają się na tle konkurencji i budują silną tożsamość marki." },
        { num: "04", title: "Realizacja", desc: "Wdrażamy projekt z najwyższą dbałością o szczegóły — czysty kod, płynne animacje, pełna responsywność." },
        { num: "05", title: "Wdrożenie",  desc: "Dostarczamy gotowy produkt i wspieramy Cię na każdym etapie po launchu — optymalizacja, aktualizacje, wsparcie." },
      ],
    },
    about: {
      eyebrow: "Studio Kreatywne",
      heading: ["O", "Nas"],
      description: "Veyro to młode, niezależne studio projektowe. Nie mamy setek projektów za sobą — mamy za to głód tworzenia rzeczy, z których będziemy dumni. Twój projekt nie będzie dla nas kolejnym zleceniem. Będzie dla nas powodem do dumy.",
      cta: "Poznaj nas bliżej",
      missionTitle: "Nasza Misja",
      mission: "Wierzymy, że doskonały design to nie tylko estetyka — to narzędzie, które buduje marki, angażuje odbiorców i napędza wzrost. Każdy piksel ma znaczenie.",
      stats: [
        { value: "5+",  label: "Lat doświadczenia" },
        { value: "50+", label: "Ukończonych projektów" },
        { value: "30+", label: "Zadowolonych klientów" },
        { value: "3",   label: "Nagrody branżowe" },
      ],
      valuesTitle: "Nasze Wartości",
    },
  },

  en: {
    nav: {
      links: ["Services", "Work", "Process", "About"] as const,
      cta: "Let's Talk",
    },
    hero: {
      eyebrow: "Creative Direction & Digital Design",
      description:
        "Crafting high-performance digital experiences with a focus on unique layout rhythms and brutalist aesthetics.",
      viewWork: "View Work",
      contact: "Contact",
    },
    valueProps: [
      {
        icon: "bolt",
        title: "Bold Vision",
        description: "Pushing the absolute boundaries of modern UI beyond the standard grid systems.",
      },
      {
        icon: "account_circle",
        title: "User Centric",
        description: "Merging brutalist aesthetics with seamless usability that converts and engages users.",
      },
      {
        icon: "palette",
        title: "High Contrast",
        description: "Striking monochrome palettes with signature orange accents for memorable identity.",
      },
    ],
    services: {
      heading: "Services",
      mobileLabel: "Expertise",
      mobileHeading: "Specialized Services",
      items: [
        { num: "01", title: "Brand Identity",   desc: "Logos, Guidelines, Art Direction" },
        { num: "02", title: "UI/UX Design",     desc: "Interfaces, Prototypes, Mobile Apps" },
        { num: "03", title: "Motion Design",    desc: "Animations, Lottie, Micro-Interactions" },
        { num: "04", title: "Web Development",  desc: "Frontend, Performance, Deployment" },
      ],
    },
    works: {
      heading: ["Selected", "Works"],
      seeAll: "See All Projects",
      explore: "Explore Archive",
    },
    socialProof: "Built with modern technologies",
    cta: {
      headline: "Let's Talk About Your Project",
      description: "Ready for bold change? Tell us about your goals and we'll propose solutions to help you achieve them.",
      button: "Start a Conversation",
    },
    contact: {
      eyebrow: "Get in touch",
      heading: ["Contact", "us"],
      intro: "Tell us about your project. We'll respond within 24 hours.",
      namePlaceholder: "Full name",
      emailPlaceholder: "Email address",
      messagePlaceholder: "Tell us about your project...",
      send: "Send message",
      direct: "Or write directly to",
    },
    footer: {
      description:
        "An independent creative studio focused on high-end digital solutions and expressive visual narratives.",
      nav: "Navigation",
      navLinks: ["Services", "Work", "About", "Contact"],
      office: "Office",
      socials: "Socials",
      copyright: "© 2024 VEYRO DESIGN STUDIO. ALL RIGHTS RESERVED.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },

    /* ── Subpages ─────────────────────────────────────────── */
    portfolio: {
      eyebrow: "Our Work",
      heading: ["All", "Projects"],
      intro: "Every project is a unique challenge. Here's a selection of work that defines our style and approach to design.",
      tag: "All categories",
    },
    approach: {
      eyebrow: "How We Work",
      heading: "Our Approach",
      intro: "An effective process is the foundation of every successful project. Each stage is deliberate and results-driven.",
      cta: "See Full Process",
      steps: [
        { num: "01", title: "Discovery",    desc: "We dive deep into your brand, target audience and business goals to fully understand the project context and expectations." },
        { num: "02", title: "Strategy",     desc: "Based on research, we develop a clear visual strategy, information architecture and action roadmap." },
        { num: "03", title: "Design",       desc: "We create bold, unique designs that stand out from the competition and build a strong brand identity." },
        { num: "04", title: "Development",  desc: "We implement the project with the highest attention to detail — clean code, smooth animations, full responsiveness." },
        { num: "05", title: "Launch",       desc: "We deliver the finished product and support you at every stage after launch — optimization, updates, ongoing support." },
      ],
    },
    about: {
      eyebrow: "Creative Studio",
      heading: ["About", "Us"],
      description: "We are an independent creative studio combining brutalist aesthetics with modern functionality. We create digital experiences that are remembered and deliver real results.",
      cta: "Learn About Us",
      missionTitle: "Our Mission",
      mission: "We believe great design is not just aesthetics — it's a tool that builds brands, engages audiences and drives growth. Every pixel matters.",
      stats: [
        { value: "5+",  label: "Years of experience" },
        { value: "50+", label: "Completed projects" },
        { value: "30+", label: "Happy clients" },
        { value: "3",   label: "Industry awards" },
      ],
      valuesTitle: "Our Values",
    },
  },
} as const;
