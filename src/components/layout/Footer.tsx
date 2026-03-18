"use client";

import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, FOOTER_NAV_ROUTES } from "@/lib/translations";

export function Footer() {
  const { lang } = useLanguage();
  const tr = t[lang].footer;

  return (
    <footer className="bg-black py-16 text-white md:py-20">
      <Container>
        <div className="hidden gap-12 lg:grid lg:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="size-6 bg-primary" />
              <span className="text-2xl font-black italic tracking-tighter">VEYRO</span>
            </div>
            <p className="max-w-sm font-medium opacity-50">{tr.description}</p>
            <div className="flex gap-4">
              {[
                { icon: "public", label: "Website" },
                { icon: "share", label: "Share" },
                { icon: "alternate_email", label: "Email" },
              ].map(({ icon, label }) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={label}
                  className="flex size-10 items-center justify-center border border-white/20 transition-all hover:border-primary hover:bg-primary"
                >
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-primary">{tr.nav}</h3>
            <ul className="flex flex-col gap-3 opacity-60">
              {tr.navLinks.map((item, i) => (
                <li key={item}>
                  <a href={FOOTER_NAV_ROUTES[i]} className="transition-colors hover:text-primary">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-primary">{tr.office}</h3>
            <address className="flex flex-col gap-3 not-italic opacity-60">
              <p>Nowy Sącz<br />Małopolska, Polska</p>
              <p>+48 000 000 000</p>
            </address>
          </div>
        </div>

        <div className="hidden grid-cols-2 gap-10 md:grid lg:hidden">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="size-6 bg-primary" />
              <span className="text-2xl font-black italic tracking-tighter">VEYRO</span>
            </div>
            <p className="text-sm font-medium opacity-50">{tr.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-primary">{tr.nav}</h3>
              <ul className="flex flex-col gap-3 text-sm opacity-60">
                {tr.navLinks.map((item, i) => (
                  <li key={item}>
                    <a href={FOOTER_NAV_ROUTES[i]} className="transition-colors hover:text-primary">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-primary">{tr.office}</h3>
              <address className="flex flex-col gap-2 text-sm not-italic opacity-60">
                <p>Nowy Sącz</p>
                <p>+48 000 000 000</p>
              </address>
            </div>
          </div>
        </div>

        <div className="space-y-10 md:hidden">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-primary" />
            <span className="text-2xl font-black italic tracking-tighter">VEYRO</span>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{tr.socials}</p>
              <div className="flex flex-col gap-2 font-bold">
                {["Instagram", "Dribbble", "Behance"].map((social) => (
                  <a key={social} href="#" className="transition-colors hover:text-primary">{social}</a>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{tr.office}</p>
              <div className="flex flex-col gap-2 font-bold">
                <p>Nowy Sącz</p>
                <p>Małopolska, PL</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs font-bold uppercase tracking-widest opacity-30 md:mt-16 sm:flex-row">
          <p>{tr.copyright}</p>
          <div className="flex gap-6 md:gap-8">
            <a href="/polityka-prywatnosci" className="transition-opacity hover:opacity-60">{tr.privacy}</a>
            <a href="/regulamin" className="transition-opacity hover:opacity-60">{tr.terms}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
