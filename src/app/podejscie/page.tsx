"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CTA } from "@/components/sections/CTA";
import { useLanguage } from "@/contexts/LanguageContext";
import { BACK_LABEL, t } from "@/lib/translations";

export default function Podejscie() {
  const { lang } = useLanguage();
  const tr = t[lang].approach;

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Container className="pt-6">
          <Link href="/#podejscie" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-primary">
            <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_back</span>
            {BACK_LABEL[lang]}
          </Link>
        </Container>

        <section>
          <Container className="pt-8 pb-12 md:pt-12 md:pb-16">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {tr.eyebrow}
            </span>
            <h1 className="text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl lg:text-9xl">
              {tr.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:mt-8 md:text-lg">
              {tr.intro}
            </p>
          </Container>
        </section>

        <div className="border-t border-slate-200 dark:border-slate-800" />

        <section>
          <Container>
            <div className="flex flex-col">
              {tr.steps.map(({ num, title, desc }) => (
                <div
                  key={num}
                  className="group flex flex-col gap-6 border-b border-slate-200 px-4 py-10 transition-colors hover:bg-primary/5 dark:border-slate-800 md:flex-row md:items-start md:gap-16 md:py-14"
                >
                  <span className="flex-shrink-0 text-5xl font-black leading-none opacity-10 transition-opacity group-hover:opacity-20 md:text-7xl">
                    {num}
                  </span>
                  <div className="flex-1">
                    <h2 className="mb-4 text-2xl font-black uppercase tracking-tighter md:text-4xl">
                      {title}
                    </h2>
                    <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
                      {desc}
                    </p>
                  </div>
                  <span
                    className="material-symbols-outlined hidden flex-shrink-0 self-center text-primary opacity-0 transition-opacity group-hover:opacity-100 md:block"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <div className="py-12 md:py-16" />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
