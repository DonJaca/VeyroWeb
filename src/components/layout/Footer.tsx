"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function Footer() {
  const { lang } = useLanguage();
  const tr = t[lang].footer;

  return (
    <footer className="bg-black text-white px-6 md:px-10 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">

        {/* Desktop lg+: 4-column layout */}
        <div className="hidden lg:grid grid-cols-4 gap-12">
          <div className="col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="size-6 bg-primary" />
              <span className="text-2xl font-black tracking-tighter italic">VEYRO</span>
            </div>
            <p className="max-w-sm opacity-50 font-medium">{tr.description}</p>
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
                  className="size-10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                >
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-black uppercase tracking-widest text-primary text-sm">{tr.nav}</h3>
            <ul className="flex flex-col gap-3 opacity-60">
              {tr.navLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-black uppercase tracking-widest text-primary text-sm">{tr.office}</h3>
            <address className="not-italic opacity-60 flex flex-col gap-3">
              <p>Mannerheimintie 12<br />00100 Helsinki, Finland</p>
              <p>+358 40 123 4567</p>
            </address>
          </div>
        </div>

        {/* Tablet md: 2-column condensed */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="size-6 bg-primary" />
              <span className="text-2xl font-black tracking-tighter italic">VEYRO</span>
            </div>
            <p className="opacity-50 font-medium text-sm">{tr.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-black uppercase tracking-widest text-primary text-sm">{tr.nav}</h3>
              <ul className="flex flex-col gap-3 opacity-60 text-sm">
                {tr.navLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-black uppercase tracking-widest text-primary text-sm">{tr.office}</h3>
              <address className="not-italic opacity-60 flex flex-col gap-2 text-sm">
                <p>Helsinki, Finland</p>
                <p>+358 40 123 4567</p>
              </address>
            </div>
          </div>
        </div>

        {/* Mobile: simplified 2-column */}
        <div className="md:hidden space-y-10">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-primary" />
            <span className="text-2xl font-black tracking-tighter italic">VEYRO</span>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center">
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{tr.socials}</p>
              <div className="flex flex-col gap-2 font-bold">
                {["Instagram", "Dribbble", "Behance"].map((s) => (
                  <a key={s} href="#" className="hover:text-primary transition-colors">{s}</a>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{tr.office}</p>
              <div className="flex flex-col gap-2 font-bold">
                <p>Helsinki, FI</p>
                <p>Berlin, DE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-30">
          <p>{tr.copyright}</p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:opacity-60 transition-opacity">{tr.privacy}</a>
            <a href="#" className="hover:opacity-60 transition-opacity">{tr.terms}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
