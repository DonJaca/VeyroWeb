"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export function AboutPreview() {
  const { lang } = useLanguage();
  const tr = t[lang].about;

  return (
    <section id="o-nas" className="bg-black py-16 text-white lg:py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {tr.eyebrow}
            </span>
            <h2 className="text-3xl font-black uppercase leading-none tracking-tighter sm:text-4xl md:text-6xl lg:text-7xl">
              {tr.heading[0]}{" "}
              <span className="text-outline" style={{ WebkitTextStrokeColor: "white" }}>
                {tr.heading[1]}
              </span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/60 md:max-w-sm">
            {tr.description}
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <Link
            href="/o-nas"
            className="group inline-flex items-center gap-3 border-2 border-white px-8 py-4 text-sm font-black uppercase tracking-widest transition-all hover:border-primary hover:bg-primary hover:text-black"
          >
            {tr.cta}
            <span
              className="material-symbols-outlined transition-transform group-hover:translate-x-2"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
