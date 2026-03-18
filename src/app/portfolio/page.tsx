"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, BACK_LABEL } from "@/lib/translations";
import { PROJECTS } from "@/lib/projects";
import Image from "next/image";

export default function Portfolio() {
  const { lang } = useLanguage();
  const tr = t[lang].portfolio;

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Back link */}
        <div className="px-6 md:px-10 lg:px-20 pt-6 max-w-7xl mx-auto">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_back</span>
            {BACK_LABEL[lang]}
          </Link>
        </div>

        {/* Hero header */}
        <section className="px-6 md:px-10 lg:px-20 pt-8 md:pt-12 pb-12 md:pb-16 max-w-7xl mx-auto">
          <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-4">
            {tr.eyebrow}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
            {tr.heading[0]}{" "}
            <span className="text-outline">{tr.heading[1]}</span>
          </h1>
          <p className="mt-6 md:mt-8 max-w-2xl text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            {tr.intro}
          </p>
          <div className="mt-6 inline-block border border-slate-300 dark:border-slate-700 px-4 py-2 text-xs font-bold uppercase tracking-widest">
            {tr.tag}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800" />

        {/* Projects grid */}
        <section className="px-6 md:px-10 lg:px-20 py-12 md:py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden${project.span === "wide" ? " md:col-span-2" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                      {project.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
                {/* Mobile: always visible label */}
                <div className="md:hidden py-4 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-black uppercase tracking-tighter mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
