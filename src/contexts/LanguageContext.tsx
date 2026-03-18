"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/translations";

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "pl",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pl");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "pl" || stored === "en") setLang(stored);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "pl" ? "en" : "pl";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
