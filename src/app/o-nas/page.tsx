"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const CONTENT = {
  pl: {
    back: "Wróć do strony głównej",
    hero: {
      eyebrow: "Studio Kreatywne",
      heading: "Nie jesteśmy kolejną agencją z taśmy.",
      body: "Veyro to młode, niezależne studio projektowe. Nie mamy setek projektów za sobą — mamy za to głód tworzenia rzeczy, z których będziemy dumni. Zmęczeni powtarzalnymi szablonami i korporacyjnym podejściem do designu, postanowiliśmy zbudować miejsce, w którym liczy się jakość, a nie ilość. Twój projekt nie będzie dla nas kolejnym zleceniem. Będzie dla nas powodem do dumy.",
    },
    values: {
      heading: "Design, który ma znaczenie.",
      items: [
        { num: "01", title: "Jakość ponad ilość", body: "Bierzemy tylko tyle projektów, ilu jesteśmy w stanie poświęcić 100% uwagi. Nie jesteśmy fabryką stron. Każdy produkt musi spełniać nasze własne, wysokie standardy." },
        { num: "02", title: "Szczerość w relacjach", body: "Mówimy wprost, co zadziała, a co nie. Jesteśmy Twoim partnerem, a nie tylko wykonawcą. Jeśli widzimy lepsze rozwiązanie – powiemy Ci o tym." },
        { num: "03", title: "Odważne decyzje", body: "Wierzymy, że zachowawczy design to za mało, by się wyróżnić. Stawiamy na wyrazistą estetykę, która przyciąga uwagę i zapada w pamięć." },
        { num: "04", title: "Bezpośredni kontakt", body: "Rozmawiasz bezpośrednio z ludźmi, którzy projektują i kodują Twój produkt. Bez account managerów, bez zbędnej hierarchii." },
      ],
    },
    team: {
      eyebrow: "Zespół",
      heading: "Ludzie za Veyro",
      intro: "Za każdym projektem stoją konkretni ludzie. Kiedy z nami współpracujesz, wiesz dokładnie, kto odpowiada za Twój sukces.",
      members: [
        { name: "Jakub", role: "Co-Founder / Design", bio: "Odpowiada za wizualną stronę projektów. Wierzy, że dobry design rozwiązuje problemy biznesowe i przy okazji świetnie wygląda." },
        { name: "Kacper", role: "Co-Founder / Development", bio: "Przekuwa śmiałe wizje w działający kod. Dba o to, by strony były nie tylko piękne, ale też szybkie i zoptymalizowane." },
      ],
    },
    cta: {
      heading: "Zbudujmy coś świetnego razem.",
      body: "Szukasz zespołu, któremu będzie zależało na Twoim projekcie tak samo jak Tobie? Dobrze trafiłeś. Opowiedz nam o swoich celach, a my zaproponujemy rozwiązania, które pomogą Ci je osiągnąć.",
      button: "Porozmawiajmy o projekcie",
    },
  },
  en: {
    back: "Back to homepage",
    hero: {
      eyebrow: "Creative Studio",
      heading: "We're not just another agency.",
      body: "Veyro is a young, independent design studio. We don't have hundreds of projects behind us — but we have the hunger to create things we're truly proud of. Tired of repetitive templates and corporate approaches to design, we built a place where quality matters more than quantity. Your project won't be just another ticket in our queue. It will be our reason to be proud.",
    },
    values: {
      heading: "Design that matters.",
      items: [
        { num: "01", title: "Quality over quantity", body: "We only take on as many projects as we can give 100% attention to. We're not a website factory. Every product we ship must meet our own high standards." },
        { num: "02", title: "Honest relationships", body: "We tell you straight what will work and what won't. We're your creative partner, not just an executor. If we see a better solution — we'll tell you." },
        { num: "03", title: "Bold decisions", body: "We believe playing it safe in design is no longer enough to stand out. We go for expressive aesthetics that grab attention and stick in memory." },
        { num: "04", title: "Direct contact", body: "You talk directly to the people designing and building your product. No account managers, no unnecessary hierarchy." },
      ],
    },
    team: {
      eyebrow: "Team",
      heading: "The people behind Veyro",
      intro: "Every project has real people behind it. When you work with us, you know exactly who is responsible for your success.",
      members: [
        { name: "Jakub", role: "Co-Founder / Design", bio: "Responsible for the visual side of every project. Believes that great design solves business problems — and looks stunning while doing it." },
        { name: "Kacper", role: "Co-Founder / Development", bio: "Turns bold visions into working code. Makes sure every site is not just beautiful, but also fast, secure, and optimized." },
      ],
    },
    cta: {
      heading: "Let's build something great together.",
      body: "Looking for a team that cares about your project as much as you do? You're in the right place. Tell us about your goals and we'll propose solutions to help you achieve them.",
      button: "Let's talk about your project",
    },
  },
};

export default function ONas() {
  const { lang } = useLanguage();
  const tr = CONTENT[lang];

  return (
    <>
      <Header />
      <main className="flex-grow bg-[#0a0a0a] text-white">

        <Container className="pt-6">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 transition-colors hover:text-primary">
            <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_back</span>
            {tr.back}
          </Link>
        </Container>

        {/* SECTION 1 — HERO */}
        <section className="border-b border-white/10 py-24 md:py-32 lg:py-40">
          <Container>
            <span className="mb-6 block text-xs font-bold uppercase tracking-[0.25em] text-primary">
              {tr.hero.eyebrow}
            </span>
            <h1 className="mb-8 max-w-4xl text-4xl font-black uppercase leading-none tracking-tighter md:text-6xl lg:text-8xl">
              {tr.hero.heading}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              {tr.hero.body}
            </p>
          </Container>
        </section>

        {/* SECTION 2 — VALUES */}
        <section className="border-b border-white/10 py-24 md:py-32">
          <Container>
            <h2 className="mb-16 text-3xl font-black uppercase leading-none tracking-tighter md:text-5xl lg:text-6xl">
              {tr.values.heading}
            </h2>
            <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2">
              {tr.values.items.map(({ num, title, body }) => (
                <div key={num} className="bg-[#0a0a0a] p-8 md:p-10 lg:p-12">
                  <span className="mb-4 block text-4xl font-black leading-none text-primary md:text-5xl">
                    {num}
                  </span>
                  <h3 className="mb-4 text-xl font-black uppercase tracking-tighter md:text-2xl">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60 md:text-base">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 3 — TEAM */}
        <section className="border-b border-white/10 py-24 md:py-32">
          <Container>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-primary">
              {tr.team.eyebrow}
            </span>
            <h2 className="mb-6 text-3xl font-black uppercase leading-none tracking-tighter md:text-5xl lg:text-6xl">
              {tr.team.heading}
            </h2>
            <p className="mb-16 max-w-xl text-base leading-relaxed text-white/60">
              {tr.team.intro}
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {tr.team.members.map(({ name, role, bio }) => (
                <div key={name} className="flex flex-col gap-6 border border-white/10 p-8 md:p-10">
                  <div className="aspect-square w-full max-w-[200px] border border-white/10 bg-white/5" />
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter md:text-3xl">
                      {name}
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      {role}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-white/60 md:text-base">
                    {bio}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 4 — CTA */}
        <section className="bg-[#111111] py-24 text-center md:py-32 lg:py-40">
          <Container>
            <h2 className="mb-8 text-3xl font-black uppercase leading-none tracking-tighter md:text-5xl lg:text-7xl">
              {tr.cta.heading}
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              {tr.cta.body}
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 bg-primary px-10 py-5 text-lg font-black uppercase text-black transition-all hover:bg-white hover:text-black lg:px-12 lg:py-6 lg:text-xl"
            >
              {tr.cta.button}
              <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
            </Link>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}
