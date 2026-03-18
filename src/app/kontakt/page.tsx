"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function Kontakt() {
  const { lang } = useLanguage();
  const tr = t[lang].contact;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

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
              {tr.eyebrow}
            </span>
            <h1 className="text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl lg:text-9xl">
              {tr.heading[0]}{" "}
              <span className="text-outline">{tr.heading[1]}</span>
            </h1>
          </Container>
        </section>

        <div className="border-t border-slate-200 dark:border-slate-800" />

        <section>
          <Container className="grid grid-cols-1 gap-16 py-16 md:grid-cols-2 md:gap-20 md:py-20">

            {/* Formularz */}
            <div>
              {sent ? (
                <div className="flex h-full flex-col items-start justify-center gap-4 py-8">
                  <span className="material-symbols-outlined text-5xl text-primary" aria-hidden="true">
                    check_circle
                  </span>
                  <p className="text-2xl font-black uppercase tracking-tighter">
                    {lang === "pl" ? "Wiadomość wysłana!" : "Message sent!"}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400">
                    {lang === "pl"
                      ? "Odpiszemy w ciągu 24 godzin."
                      : "We'll get back to you within 24 hours."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={tr.namePlaceholder}
                      value={form.name}
                      onChange={handleChange}
                      className="border border-slate-200 bg-transparent px-5 py-4 text-sm font-bold placeholder:font-normal placeholder:text-slate-400 focus:border-primary focus:outline-none dark:border-slate-700 dark:placeholder:text-slate-600"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={tr.emailPlaceholder}
                      value={form.email}
                      onChange={handleChange}
                      className="border border-slate-200 bg-transparent px-5 py-4 text-sm font-bold placeholder:font-normal placeholder:text-slate-400 focus:border-primary focus:outline-none dark:border-slate-700 dark:placeholder:text-slate-600"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder={tr.messagePlaceholder}
                      value={form.message}
                      onChange={handleChange}
                      className="resize-none border border-slate-200 bg-transparent px-5 py-4 text-sm font-bold placeholder:font-normal placeholder:text-slate-400 focus:border-primary focus:outline-none dark:border-slate-700 dark:placeholder:text-slate-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary px-8 py-4 text-sm font-black uppercase italic text-slate-900 transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    {tr.send}
                  </button>
                </form>
              )}
            </div>

            {/* Info kontaktowe */}
            <div className="flex flex-col gap-10 md:border-l md:border-slate-200 md:pl-16 md:dark:border-slate-800">
              <div>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  {tr.intro}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {tr.direct}
                </p>
                <a
                  href="mailto:hello@veyro.design"
                  className="block border-b-4 border-primary text-2xl font-black tracking-tight transition-colors hover:text-primary md:text-3xl"
                >
                  hello@veyro.design
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  {lang === "pl" ? "Lokalizacja" : "Location"}
                </p>
                <p className="text-lg font-bold">Nowy Sącz, Polska</p>
              </div>
            </div>

          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
