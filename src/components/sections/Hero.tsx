"use client";

import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const HERO_IMG_DESKTOP =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBswblmMmSvckhQ6bcl7-wkOZ7uBITc1k3rxKSWxm15AaQZFES7sUG6j05OmPcldaukcYjqFIohzcpA_ImuWWMePcS5X_t1zZIBdreB1WG-oOUazZXAGpM1VhT_WXX6llsjXfyUuX4XJ_RPLSl8aJ9tkhCd8b3PlZRRgm_oFloN9ThXBJiRxdfhEU9qsdv3LKzzYFW1opPxBo45ocBRME5b7Crce-QEo1Qyxd7nmrA8_MlAdw40UQ_tjPwqHZIfm7loLg59oUJOscE=w960";

const HERO_IMG_MOBILE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAFD2qu-EGNxAyjdb0j_txxs592hQmp8B5tmknHhKyiWiXuwQ_Gp9CtUq-X3K6yXKbX0VeM27KG53TWNKlrZ0Z2OO961rFmmzwUqSu_pQZHr_G4UI3dNw0ciTetArEEBVkt6-qKFW5ndqH1f1l4uAkfoOFm5GAlG99Z8_gtItsYROpovJuQ6UInzNAYwUulFutIxIvdno9cHIfCfJdxeXVitk8dda0tNbdjBnDXtuFwIZS7ydVDt9fW9Q5zylU6PPRh79UFbkRvS24=w480";

export function Hero() {
  const { lang } = useLanguage();
  const tr = t[lang].hero;

  return (
    <section>
      <Container className="pt-10 pb-16 md:py-20 lg:py-32">
        <div className="flex flex-col gap-8 lg:gap-12">
          <p className="hidden text-sm font-bold uppercase tracking-[0.3em] text-primary md:block">
            {tr.eyebrow}
          </p>

          <h1 className="text-4xl font-black uppercase leading-[0.85] tracking-tighter sm:text-5xl md:text-8xl lg:text-[10rem]">
            Bold<br />
            <span className="text-outline">Impact</span><br />
            Design
          </h1>

          <div className="grid gap-8 md:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] md:items-end lg:gap-12">
            <div className="space-y-6 md:max-w-sm lg:max-w-md">
              <p className="text-base font-medium leading-relaxed opacity-80 sm:text-lg md:text-xl">
                {tr.description}
              </p>

              <div className="flex flex-wrap gap-3 md:hidden">
                <a href="#portfolio" className="bg-primary px-6 py-3 text-sm font-black uppercase text-slate-900 transition-all hover:bg-black hover:text-white">
                  {tr.viewWork}
                </a>
                <a href="mailto:hello@veyro.design" className="border border-slate-900 px-6 py-3 text-sm font-black uppercase tracking-widest transition-colors hover:bg-primary dark:border-slate-100">
                  {tr.contact}
                </a>
              </div>
            </div>

            <div className="group relative min-w-0">
              <div className="relative hidden aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800 md:block">
                <div className="absolute inset-0 z-10 bg-primary/20 transition-colors duration-500 group-hover:bg-transparent" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HERO_IMG_DESKTOP}
                  alt="Abstract 3D digital sculpture"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                  loading="eager"
                />
              </div>

              <div className="relative pb-8 pr-6 md:hidden">
                <div className="aspect-[4/5] overflow-hidden bg-slate-200 shadow-2xl dark:bg-slate-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={HERO_IMG_MOBILE}
                    alt="Abstract 3D architectural render"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    fetchPriority="high"
                    loading="eager"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-primary p-5 shadow-xl">
                  <span className="material-symbols-outlined text-3xl text-background-dark" aria-hidden="true">
                    play_arrow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
