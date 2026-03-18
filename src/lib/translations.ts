export type Lang = "pl" | "en";

export const t = {
  pl: {
    nav: {
      links: ["Prace", "Usługi", "Proces", "O Nas"] as const,
      cta: "Porozmawiajmy",
    },
    hero: {
      eyebrow: "Kreatywna Reżyseria & Projektowanie Cyfrowe",
      description:
        "Tworzymy wysokoefektywne doświadczenia cyfrowe z naciskiem na unikalne rytmy layoutu i brutalistyczną estetykę.",
      viewWork: "Zobacz Prace",
      contact: "Kontakt",
    },
    valueProps: [
      {
        icon: "bolt",
        title: "Odważna Wizja",
        description: "Przekraczamy granice nowoczesnego UI poza standardowymi systemami siatek.",
      },
      {
        icon: "account_circle",
        title: "Podejście Użytkownika",
        description: "Łączymy brutalistyczną estetykę z płynną użytecznością, która konwertuje i angażuje.",
      },
      {
        icon: "palette",
        title: "Wysoki Kontrast",
        description: "Wyraziste monochromatyczne palety z pomarańczowymi akcentami dla niezapomnianej tożsamości.",
      },
    ],
    services: {
      heading: "Usługi",
      mobileLabel: "Ekspertyza",
      mobileHeading: "Specjalistyczne Usługi",
      items: [
        { num: "01", title: "Tożsamość Marki",      desc: "Logo, Wytyczne, Art Direction" },
        { num: "02", title: "Projektowanie UI/UX",  desc: "Interfejsy, Prototypy, Aplikacje Mobilne" },
        { num: "03", title: "Motion Design",         desc: "Animacje, Lottie, Micro-Interakcje" },
        { num: "04", title: "Web Development",       desc: "Frontend, Wydajność, Wdrożenie" },
      ],
    },
    works: {
      heading: ["Wybrane", "Prace"],
      seeAll: "Zobacz Wszystkie Projekty",
      explore: "Przeglądaj Archiwum",
    },
    socialProof: "Zbudowane w nowoczesnych technologiach",
    cta: {
      headline: "Masz",
      project: "Projekt?",
      button: "Rozpocznij Rozmowę",
      emailLabel: "Napisz do mnie na",
    },
    footer: {
      description:
        "Niezależne studio kreatywne skupione na wysokiej klasy rozwiązaniach cyfrowych i ekspresyjnych narracjach wizualnych. Z siedzibą w Helsinkach, działamy globalnie.",
      nav: "Nawigacja",
      navLinks: ["Prace", "Usługi", "Studio", "Kontakt"],
      office: "Biuro",
      socials: "Social Media",
      copyright: "© 2024 VEYRO DESIGN STUDIO. WSZELKIE PRAWA ZASTRZEŻONE.",
      privacy: "Polityka Prywatności",
      terms: "Warunki Usługi",
    },
  },

  en: {
    nav: {
      links: ["Work", "Services", "Process", "About"] as const,
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
      headline: "Have a",
      project: "Project?",
      button: "Start a Conversation",
      emailLabel: "Email me at",
    },
    footer: {
      description:
        "An independent creative studio focused on high-end digital solutions and expressive visual narratives. Based in Helsinki, working globally.",
      nav: "Navigation",
      navLinks: ["Work", "Services", "Studio", "Contact"],
      office: "Office",
      socials: "Socials",
      copyright: "© 2024 VEYRO DESIGN STUDIO. ALL RIGHTS RESERVED.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
} as const;
