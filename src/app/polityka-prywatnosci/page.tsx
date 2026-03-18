"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const SECTIONS = [
  {
    title: "§ 1. Administrator Danych Osobowych",
    items: [
      "Administratorem danych osobowych zbieranych za pośrednictwem Serwisu jest [Nazwa Firmy/Imię i Nazwisko], z siedzibą w [Adres], NIP: [Numer NIP], REGON: [Numer REGON], wpisana do [Rejestr, np. CEIDG/KRS] (zwana dalej \u201EAdministratorem\u201C).",
      "Kontakt z Administratorem możliwy jest za pośrednictwem adresu e-mail: [Adres e-mail] lub pisemnie na adres siedziby Administratora.",
      "Administrator dokłada szczególnej staranności w celu ochrony interesów osób, których dane dotyczą, a w szczególności zapewnia, że zbierane przez niego dane są przetwarzane zgodnie z prawem, rzetelnie i w sposób przejrzysty.",
    ],
  },
  {
    title: "§ 2. Cele i podstawy prawne przetwarzania danych",
    intro: "Dane osobowe Użytkowników przetwarzane są w następujących celach:",
    purposes: [
      {
        heading: "Świadczenie usług drogą elektroniczną",
        body: "w celu umożliwienia korzystania z funkcjonalności Serwisu, w tym m.in. udostępniania treści, obsługi konta Użytkownika (jeśli dotyczy). Podstawą prawną jest niezbędność przetwarzania do wykonania umowy (art. 6 ust. 1 lit. b RODO).",
      },
      {
        heading: "Obsługa zapytań i komunikacja",
        body: "w celu udzielania odpowiedzi na wiadomości przesłane za pośrednictwem formularza kontaktowego lub bezpośrednio na adres e-mail. Podstawą prawną jest prawnie uzasadniony interes Administratora polegający na komunikacji z Użytkownikami (art. 6 ust. 1 lit. f RODO).",
      },
      {
        heading: "Marketing bezpośredni (Newsletter)",
        body: "w celu przesyłania informacji handlowych, edukacyjnych i marketingowych, o ile Użytkownik wyraził na to zgodę. Podstawą prawną jest zgoda Użytkownika (art. 6 ust. 1 lit. a RODO).",
      },
      {
        heading: "Cele analityczne i statystyczne",
        body: "w celu prowadzenia analiz aktywności Użytkowników w Serwisie, poprawy jego funkcjonalności oraz optymalizacji. Podstawą prawną jest prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO).",
      },
      {
        heading: "Ustalenie, dochodzenie lub obrona przed roszczeniami",
        body: "w celu ochrony praw Administratora. Podstawą prawną jest prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO).",
      },
    ],
  },
  {
    title: "§ 3. Rodzaje przetwarzanych danych",
    intro: "Administrator może przetwarzać następujące dane osobowe Użytkowników:",
    list: [
      "Imię i nazwisko,",
      "Adres e-mail,",
      "Numer telefonu (opcjonalnie),",
      "Adres IP,",
      "Dane dotyczące aktywności w Serwisie (np. odwiedzane podstrony, czas spędzony na stronie),",
      "[Inne dane, jeśli są zbierane, np. nazwa firmy, NIP].",
    ],
  },
  {
    title: "§ 4. Odbiorcy danych osobowych",
    items: [
      {
        text: "Dane osobowe Użytkowników mogą być przekazywane podmiotom przetwarzającym dane na zlecenie Administratora, m.in.:",
        list: [
          "dostawcom usług hostingowych i IT,",
          "dostawcom systemów do e-mail marketingu (np. do wysyłki newslettera),",
          "podmiotom świadczącym usługi księgowe lub prawne,",
          "dostawcom narzędzi analitycznych (np. Google Analytics).",
        ],
      },
      "Podmioty te przetwarzają dane na podstawie umowy powierzenia przetwarzania danych osobowych i wyłącznie zgodnie z poleceniami Administratora.",
      "Dane osobowe mogą być udostępniane organom państwowym na ich żądanie na podstawie powszechnie obowiązujących przepisów prawa.",
    ],
  },
  {
    title: "§ 5. Okres przechowywania danych",
    items: [
      "Dane osobowe przetwarzane w celu zawarcia lub wykonania umowy będą przechowywane przez okres obowiązywania umowy, a po jej zakończeniu przez okres niezbędny do zabezpieczenia lub dochodzenia ewentualnych roszczeń.",
      "Dane przetwarzane na podstawie zgody (np. newsletter) będą przechowywane do momentu jej wycofania przez Użytkownika.",
      "Dane przetwarzane na podstawie prawnie uzasadnionego interesu Administratora będą przechowywane do czasu skutecznego wniesienia sprzeciwu przez Użytkownika lub ustania celu przetwarzania.",
    ],
  },
  {
    title: "§ 6. Prawa osób, których dane dotyczą",
    intro: "Zgodnie z przepisami RODO, Użytkownikowi przysługują następujące prawa:",
    rights: [
      "Prawo dostępu do swoich danych oraz otrzymania ich kopii.",
      "Prawo do sprostowania (poprawiania) swoich danych.",
      "Prawo do usunięcia danych (\u201Eprawo do bycia zapomnianym\u201C).",
      "Prawo do ograniczenia przetwarzania danych.",
      "Prawo do przenoszenia danych.",
      "Prawo do wniesienia sprzeciwu wobec przetwarzania danych.",
      "Prawo do cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem).",
      "Prawo wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych), jeśli Użytkownik uzna, że przetwarzanie jego danych narusza przepisy RODO.",
    ],
    outro: "W celu realizacji swoich praw Użytkownik może skontaktować się z Administratorem pod adresem e-mail: [Adres e-mail].",
  },
  {
    title: "§ 7. Pliki cookies (ciasteczka)",
    items: [
      "Serwis używa plików cookies (tzw. \u201Eciasteczek\u201C), czyli niewielkich informacji tekstowych, przechowywanych na urządzeniu końcowym Użytkownika (np. komputerze, smartfonie).",
      {
        text: "Pliki cookies wykorzystywane są w celu:",
        list: [
          "zapewnienia prawidłowego działania Serwisu (cookies niezbędne),",
          "tworzenia statystyk i analiz, które pomagają zrozumieć, w jaki sposób Użytkownicy korzystają z Serwisu (cookies analityczne),",
          "dostosowania zawartości Serwisu do preferencji Użytkownika (cookies funkcjonalne),",
          "prowadzenia działań marketingowych (cookies marketingowe).",
        ],
      },
      "Użytkownik ma możliwość samodzielnego zarządzania plikami cookies z poziomu ustawień swojej przeglądarki internetowej. Ograniczenie stosowania plików cookies może wpłynąć na niektóre funkcjonalności dostępne w Serwisie.",
      "Serwis może korzystać z narzędzi zewnętrznych, takich jak Google Analytics, Facebook Pixel, które również mogą wykorzystywać pliki cookies.",
    ],
  },
  {
    title: "§ 8. Zmiany Polityki Prywatności",
    items: [
      "Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności, co może wynikać z rozwoju technologii internetowej, zmian prawa w zakresie ochrony danych osobowych oraz rozwoju samego Serwisu.",
      "O wszelkich zmianach Użytkownicy będą informowani w sposób widoczny i zrozumiały na stronie internetowej Serwisu.",
      "Niniejsza Polityka Prywatności obowiązuje od dnia [Data wejścia w życie].",
    ],
  },
];

type Item = string | { text: string; list: string[] };

function renderItem(item: Item, idx: number) {
  if (typeof item === "string") {
    return (
      <li key={idx} className="text-slate-600 dark:text-slate-400 leading-relaxed">
        {item}
      </li>
    );
  }
  return (
    <li key={idx} className="text-slate-600 dark:text-slate-400 leading-relaxed">
      {item.text}
      <ul className="mt-2 ml-4 space-y-1 list-disc list-outside">
        {item.list.map((sub, si) => (
          <li key={si} className="text-slate-600 dark:text-slate-400">
            {sub}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function PolitykaPrywatnosci() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Container className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              arrow_back
            </span>
            Wróć do strony głównej
          </Link>
        </Container>

        <section>
          <Container className="pt-8 pb-12 md:pt-12 md:pb-16">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Dokumenty prawne
            </span>
            <h1 className="text-4xl font-black uppercase leading-none tracking-tighter md:text-6xl lg:text-7xl">
              Polityka{" "}
              <span className="text-outline">Prywatności</span>
            </h1>
          </Container>
        </section>

        <div className="border-t border-slate-200 dark:border-slate-800" />

        <section>
          <Container className="py-12 md:py-16">
            <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych
              osobowych przekazanych przez Użytkowników w związku z korzystaniem z serwisu
              internetowego BiznesMarketing.
            </p>
          </Container>
        </section>

        <div className="border-t border-slate-200 dark:border-slate-800" />

        <section>
          <Container className="py-12 md:py-16">
            <div className="space-y-12">
              {SECTIONS.map((section, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr] md:gap-12${
                    i < SECTIONS.length - 1
                      ? " border-b border-slate-200 pb-12 dark:border-slate-800"
                      : ""
                  }`}
                >
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary md:pt-1">
                    {section.title}
                  </h2>

                  <div className="space-y-4">
                    {section.intro && (
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {section.intro}
                      </p>
                    )}

                    {"purposes" in section && section.purposes && (
                      <ol className="space-y-4 list-decimal list-outside ml-4">
                        {section.purposes.map((p, pi) => (
                          <li key={pi} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            <strong className="font-bold text-slate-900 dark:text-slate-100">
                              {p.heading}
                            </strong>{" "}
                            – {p.body}
                          </li>
                        ))}
                      </ol>
                    )}

                    {"list" in section && section.list && (
                      <ul className="space-y-2 list-disc list-outside ml-4">
                        {section.list.map((item, li) => (
                          <li key={li} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {"rights" in section && section.rights && (
                      <ol className="space-y-2 list-decimal list-outside ml-4">
                        {section.rights.map((r, ri) => (
                          <li key={ri} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {r}
                          </li>
                        ))}
                      </ol>
                    )}

                    {"items" in section && section.items && (
                      <ol className="space-y-3 list-decimal list-outside ml-4">
                        {(section.items as Item[]).map((item, ii) => renderItem(item, ii))}
                      </ol>
                    )}

                    {"outro" in section && section.outro && (
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {section.outro}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 text-sm italic text-slate-400 dark:text-slate-600">
              Dokument należy uzupełnić o brakujące dane w nawiasach kwadratowych [ ] przed
              publikacją na stronie.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
