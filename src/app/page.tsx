"use client";

import { useState, useEffect } from "react";
import T, { Lang } from "@/lib/translations";
import { ACCENT_DEFAULT } from "@/lib/constants";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

export type Theme = "light" | "dark";

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const [theme, setTheme] = useState<Theme>("light");
  const ac = ACCENT_DEFAULT;
  const t = T[lang];

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "light";
    setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    document.documentElement.style.setProperty("--ac", ac);
  }, [theme, ac]);

  useReveal();

  return (
    <>
      <Cursor />
      <Nav t={t} lang={lang} setLang={setLang} ac={ac} theme={theme} setTheme={setTheme} />
      <main>
        <Hero t={t} ac={ac} />
        <About t={t} ac={ac} />
        <Projects t={t} ac={ac} />
        <Services t={t} ac={ac} />
        <Stack t={t} ac={ac} />
        <Achievements t={t} ac={ac} />
        <Contact t={t} ac={ac} />
      </main>
      <Footer t={t} ac={ac} />
    </>
  );
}
