"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site";
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
                { icon: "home", label: "Home", href: "/" },
                { icon: "work", label: "Portfolio", href: "/portfolio" },
                { icon: "alternate_email", label: "Email", href: `mailto:${siteConfig.email}` },
              ].map(({ icon, label, href }) => (
                <Link
                  key={icon}
                  href={href}
                  aria-label={label}
                  className="flex size-10 items-center justify-center border border-white/20 transition-all hover:border-primary hover:bg-primary"
                >
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">{icon}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-primary">{tr.nav}</h3>
            <ul className="flex flex-col gap-3 opacity-60">
              {tr.navLinks.map((item, i) => (
                <li key={item}>
                  <Link href={FOOTER_NAV_ROUTES[i]} className="transition-colors hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-primary">{tr.office}</h3>
            <address className="flex flex-col gap-3 not-italic opacity-60">
              <p>Nowy Sącz<br />Małopolska, Polska</p>
              <p>{siteConfig.email}</p>
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
                    <Link href={FOOTER_NAV_ROUTES[i]} className="transition-colors hover:text-primary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-primary">{tr.office}</h3>
              <address className="flex flex-col gap-2 text-sm not-italic opacity-60">
                <p>Nowy Sącz</p>
                <p>{siteConfig.email}</p>
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
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{tr.nav}</p>
              <div className="flex flex-col gap-2 font-bold">
                <Link href="/portfolio" className="transition-colors hover:text-primary">Portfolio</Link>
                <Link href="/kontakt" className="transition-colors hover:text-primary">Kontakt</Link>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary">E-mail</a>
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
            <Link href="/polityka-prywatnosci" className="transition-opacity hover:opacity-60">{tr.privacy}</Link>
            <Link href="/regulamin" className="transition-opacity hover:opacity-60">{tr.terms}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
