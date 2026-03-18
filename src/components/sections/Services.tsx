"use client";

import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function Services() {
  const { lang } = useLanguage();
  const tr = t[lang].services;

  return (
    <section id="uslugi">
      <div className="hidden py-16 md:block lg:py-20">
        <Container>
          <h2 className="mb-12 text-4xl font-black uppercase tracking-tighter lg:mb-16 lg:text-6xl">
            {tr.heading}
          </h2>
          <div className="flex flex-col">
            {tr.items.map(({ num, title, desc }) => (
              <div
                key={num}
                className="group flex flex-col justify-between gap-2 border-b border-slate-200 px-4 py-8 transition-all hover:bg-primary dark:border-slate-800 md:flex-row md:items-center md:gap-0 lg:py-12"
              >
                <div className="flex items-center gap-6 md:gap-8">
                  <span className="text-lg font-black opacity-30 group-hover:text-white">{num}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tighter transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:italic group-hover:tracking-tight group-hover:text-white md:text-3xl lg:text-5xl">
                    {title}
                  </h3>
                </div>
                <p className="pl-12 text-xs font-bold uppercase tracking-widest transition-all duration-300 ease-out group-hover:-translate-x-3 group-hover:text-white md:max-w-xs md:pl-0 md:text-sm">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="border-t border-slate-800 bg-black py-14 text-white md:hidden">
        <Container className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {tr.mobileLabel}
            </span>
            <h2 className="text-3xl font-black text-white">{tr.mobileHeading}</h2>
          </div>
          <div className="divide-y divide-slate-800">
            {tr.items.map(({ num, title }) => (
              <div key={num} className="group flex items-center justify-between py-6">
                <div className="space-y-1">
                  <span className="font-mono text-sm text-slate-400">{num}/</span>
                  <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                    {title}
                  </h3>
                </div>
                <span
                  className="material-symbols-outlined flex-shrink-0 transition-transform group-hover:translate-x-2"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
