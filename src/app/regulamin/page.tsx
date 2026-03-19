import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const SECTIONS = [
  {
    title: "§ 1. Postanowienia ogólne",
    items: [
      "Właścicielem i administratorem Serwisu jest [Nazwa Firmy/Imię i Nazwisko], z siedzibą w [Adres], NIP: [Numer NIP], REGON: [Numer REGON], adres e-mail: [Adres e-mail], numer telefonu: [Numer telefonu] (zwany dalej \u201EUsługodawcą\u201C).",
      "Niniejszy Regulamin jest dokumentem, o którym mowa w art. 8 ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.",
      {
        text: "Regulamin określa w szczególności:",
        list: [
          "rodzaje i zakres usług świadczonych drogą elektroniczną,",
          "warunki świadczenia usług drogą elektroniczną, w tym wymagania techniczne niezbędne do współpracy z systemem teleinformatycznym,",
          "warunki zawierania i rozwiązywania umów o świadczenie usług drogą elektroniczną,",
          "tryb postępowania reklamacyjnego.",
        ],
      },
      "Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu. Użytkownik zobowiązany jest do przestrzegania jego postanowień od momentu podjęcia czynności zmierzających do skorzystania z usług Serwisu.",
    ],
  },
  {
    title: "§ 2. Definicje",
    intro: "Pojęcia użyte w niniejszym Regulaminie oznaczają:",
    definitions: [
      { term: "Serwis", def: "strona internetowa dostępna pod adresem [Adres strony internetowej], za pośrednictwem której Usługodawca świadczy usługi." },
      { term: "Użytkownik", def: "osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, która korzysta z usług świadczonych przez Serwis." },
      { term: "Usługodawca", def: "podmiot zarządzający Serwisem, wskazany w § 1 ust. 1 Regulaminu." },
      { term: "Usługa elektroniczna", def: "usługa świadczona drogą elektroniczną przez Usługodawcę na rzecz Użytkownika za pośrednictwem Serwisu." },
    ],
  },
  {
    title: "§ 3. Rodzaje i zakres usług świadczonych drogą elektroniczną",
    items: [
      {
        text: "Usługodawca świadczy za pośrednictwem Serwisu następujące usługi:",
        list: [
          "udostępnianie treści informacyjnych i materiałów edukacyjnych z zakresu marketingu i biznesu,",
          "możliwość subskrypcji newslettera (jeśli dotyczy),",
          "możliwość kontaktu z Usługodawcą za pomocą formularza kontaktowego (jeśli dotyczy),",
          "[Inne usługi oferowane przez serwis, np. sprzedaż e-booków, kursów, konsultacji].",
        ],
      },
      "Świadczenie usług na rzecz Użytkowników jest nieodpłatne, z wyjątkiem usług wyraźnie oznaczonych jako płatne (np. zakup produktów cyfrowych).",
    ],
  },
  {
    title: "§ 4. Wymagania techniczne",
    items: [
      {
        text: "Do korzystania z Serwisu niezbędne jest spełnienie następujących minimalnych wymagań technicznych:",
        list: [
          "urządzenie z dostępem do sieci Internet,",
          "zainstalowana i zaktualizowana przeglądarka internetowa (np. Google Chrome, Mozilla Firefox, Safari, Microsoft Edge),",
          "włączona obsługa plików cookies oraz JavaScript,",
          "aktywne konto poczty elektronicznej (e-mail) – w przypadku korzystania z formularza kontaktowego lub zapisu na newsletter.",
        ],
      },
      "Usługodawca nie ponosi odpowiedzialności za problemy techniczne bądź ograniczenia techniczne sprzętu komputerowego, z którego korzysta Użytkownik, a które uniemożliwiają mu korzystanie z Serwisu.",
    ],
  },
  {
    title: "§ 5. Prawa i obowiązki Użytkownika",
    items: [
      "Użytkownik zobowiązany jest do korzystania z Serwisu w sposób zgodny z prawem, dobrymi obyczajami oraz postanowieniami niniejszego Regulaminu.",
      "Zakazane jest dostarczanie przez Użytkownika treści o charakterze bezprawnym, obraźliwym, naruszającym dobra osobiste osób trzecich lub prawa autorskie.",
      "Użytkownik nie może podejmować działań mogących zakłócić prawidłowe funkcjonowanie Serwisu, w tym w szczególności ingerować w jego kod, używać złośliwego oprogramowania czy rozsyłać spamu.",
    ],
  },
  {
    title: "§ 6. Prawa własności intelektualnej",
    items: [
      "Wszelkie materiały udostępniane w Serwisie, w tym teksty, grafiki, logotypy, zdjęcia, materiały wideo oraz układ strony, stanowią własność Usługodawcy lub podmiotów trzecich i podlegają ochronie prawnej, w szczególności na podstawie ustawy o prawie autorskim i prawach pokrewnych.",
      "Kopiowanie, powielanie, modyfikowanie lub wykorzystywanie materiałów dostępnych w Serwisie bez uprzedniej pisemnej zgody Usługodawcy jest zabronione.",
    ],
  },
  {
    title: "§ 7. Postępowanie reklamacyjne",
    items: [
      "Użytkownik ma prawo składać reklamacje dotyczące funkcjonowania Serwisu oraz świadczonych usług.",
      "Reklamacje należy składać drogą elektroniczną na adres e-mail: [Adres e-mail] lub pisemnie na adres siedziby Usługodawcy.",
      "Zgłoszenie reklamacyjne powinno zawierać: dane Użytkownika (imię, nazwisko, adres e-mail), opis problemu będącego podstawą reklamacji oraz żądanie Użytkownika.",
      "Usługodawca rozpatruje reklamacje w terminie 14 dni od daty ich otrzymania. Odpowiedź na reklamację wysyłana jest na adres e-mail podany przez Użytkownika w zgłoszeniu.",
    ],
  },
  {
    title: "§ 8. Pozasądowe sposoby rozpatrywania reklamacji i dochodzenia roszczeń",
    items: [
      "Użytkownik będący konsumentem ma możliwość skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń.",
      "Konsument może m.in. zwrócić się do stałego polubownego sądu konsumenckiego, złożyć wniosek o wszczęcie postępowania mediacyjnego do wojewódzkiego inspektora Inspekcji Handlowej lub skorzystać z pomocy powiatowego (miejskiego) rzecznika konsumentów.",
      "Szczegółowe informacje dotyczące możliwości skorzystania przez konsumenta z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń oraz zasady dostępu do tych procedur dostępne są w siedzibach oraz na stronach internetowych powiatowych (miejskich) rzeczników konsumentów, organizacji społecznych, do których zadań statutowych należy ochrona konsumentów, Wojewódzkich Inspektoratów Inspekcji Handlowej oraz pod adresem internetowym Urzędu Ochrony Konkurencji i Konsumentów.",
      "Konsument może również skorzystać z unijnej platformy internetowego rozstrzygania sporów (ODR), dostępnej pod adresem: http://ec.europa.eu/consumers/odr/.",
    ],
  },
  {
    title: "§ 9. Postanowienia końcowe",
    items: [
      "Usługodawca zastrzega sobie prawo do wprowadzania zmian w Regulaminie z ważnych przyczyn (np. zmiana przepisów prawa, zmiana zakresu świadczonych usług).",
      "O wszelkich zmianach Regulaminu Użytkownicy zostaną poinformowani poprzez opublikowanie nowej wersji Regulaminu na stronie internetowej Serwisu. Zmiany wchodzą w życie w terminie wskazanym przez Usługodawcę, nie krótszym jednak niż 14 dni od dnia ich opublikowania.",
      "W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie powszechnie obowiązujące przepisy prawa polskiego, w szczególności Kodeksu cywilnego, ustawy o świadczeniu usług drogą elektroniczną oraz ustawy o prawach konsumenta.",
      "Wszelkie spory wynikłe pomiędzy Usługodawcą a Użytkownikiem niebędącym konsumentem będą rozstrzygane przez sąd właściwy miejscowo dla siedziby Usługodawcy.",
    ],
  },
];

type Item = string | { text: string; list: string[] };
type Definition = { term: string; def: string };
type Section = {
  title: string;
  intro?: string;
  items?: Item[];
  definitions?: Definition[];
};

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

export default function Regulamin() {
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
            <h1 className="text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl lg:text-8xl">
              Regu&shy;lamin{" "}
              <span className="text-outline">Serwisu</span>
            </h1>
          </Container>
        </section>

        <div className="border-t border-slate-200 dark:border-slate-800" />

        <section>
          <Container className="py-12 md:py-16">
            <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
              Niniejszy regulamin określa ogólne warunki, zasady oraz sposób świadczenia usług
              drogą elektroniczną za pośrednictwem serwisu internetowego BiznesMarketing.
            </p>
          </Container>
        </section>

        <div className="border-t border-slate-200 dark:border-slate-800" />

        <section>
          <Container className="py-12 md:py-16">
            <div className="space-y-12">
              {(SECTIONS as Section[]).map((section, i) => (
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

                  <div>
                    {section.intro && (
                      <p className="mb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                        {section.intro}
                      </p>
                    )}

                    {section.definitions && (
                      <ul className="space-y-3">
                        {section.definitions.map((d, di) => (
                          <li key={di} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            <strong className="font-bold text-slate-900 dark:text-slate-100">
                              {d.term}
                            </strong>{" "}
                            – {d.def}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.items && (
                      <ol className="space-y-3 list-decimal list-outside ml-4">
                        {section.items.map((item, ii) => renderItem(item, ii))}
                      </ol>
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
