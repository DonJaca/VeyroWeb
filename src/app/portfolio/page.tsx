"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CTA } from "@/components/sections/CTA";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS } from "@/lib/projects";
import { BACK_LABEL, t } from "@/lib/translations";

export default function Portfolio() {
  const { lang } = useLanguage();
  const tr = t[lang].portfolio;

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Container className="pt-6">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-primary">
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
              {tr.heading[0]}{" "}
              <span className="text-outline">{tr.heading[1]}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:mt-8 md:text-lg">
              {tr.intro}
            </p>
            <div className="mt-6 inline-block border border-slate-300 px-4 py-2 text-xs font-bold uppercase tracking-widest dark:border-slate-700">
              {tr.tag}
            </div>
          </Container>
        </section>

        <div className="border-t border-slate-200 dark:border-slate-800" />

        <section>
          <Container className="py-12 md:py-20">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
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
                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                        {project.tag}
                      </span>
                      <h3 className="mt-1 text-2xl font-black uppercase tracking-tighter text-white md:text-3xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="border-b border-slate-200 py-4 dark:border-slate-800 md:hidden">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      {project.tag}
                    </span>
                    <h3 className="mt-1 text-xl font-black uppercase tracking-tighter">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
