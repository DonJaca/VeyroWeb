"use client";

import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

function HtmlLangSync({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <HtmlLangSync>{children}</HtmlLangSync>
    </LanguageProvider>
  );
}
