"use client";

import { useEffect, useState } from "react";
import T, { Lang } from "@/lib/translations";
import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const t = T[lang];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [t.htmlLang]);

  useReveal();

  return (
    <div className="shell">
      <a href="#main" className="skip-link">
        {t.a11y.skip}
      </a>

      <Sidebar t={t} lang={lang} setLang={setLang} />

      <main id="main" className="main" aria-label={t.a11y.main}>
        <Hero t={t} />
        <Services t={t} />
        <Projects t={t} />
        <Stack t={t} />
        <About t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </main>
    </div>
  );
}
