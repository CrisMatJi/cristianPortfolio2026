"use client";

import Image from "next/image";
import { Translations } from "@/lib/translations";
import { SECTION_IDS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface HeroProps {
  t: Translations;
}

export function Hero({ t }: HeroProps) {
  const active = useScrollSpy(SECTION_IDS);

  return (
    <section id="hero" className="hero">
      <div className="hero__grid">
        <div className="hero__col">
          <p className="hero__hi fade-up">{t.hero.hi}</p>
          <h1 className="h1 fade-up" style={{ animationDelay: "0.08s" }}>
            {t.hero.h1a}
            <br />
            <em>{t.hero.h1b}</em>
          </h1>
          <p className="hero__sub fade-up" style={{ animationDelay: "0.14s" }}>
            {t.hero.sub}
          </p>
          <div className="hero__actions fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#contact"
              className="btn-primary"
              onClick={() => window.dispatchEvent(new CustomEvent("open-calendar-tab"))}
            >
              {t.hero.cta}
            </a>
            <a href="#work" className="btn-ghost">
              {t.hero.cta2} →
            </a>
          </div>
          <ul className="hero__pills fade-up" style={{ animationDelay: "0.26s", listStyle: "none" }}>
            {t.hero.pills.map((p) => (
              <li key={p} className="hero__pill">
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__photo fade-up" style={{ animationDelay: "0.12s" }}>
          <div className="hero__frame">
            <Image
              src="/images/cristian-hero.jpg"
              alt={t.hero.photoAlt}
              width={640}
              height={640}
              sizes="(max-width: 640px) 240px, 260px"
              priority
            />
            <span className="hero__badge">{t.hero.badge}</span>
          </div>
        </div>
      </div>

      <p className="hero__strip">{t.hero.strip.join("  ·  ")}</p>

      <div
        className="scroll-hint"
        aria-hidden="true"
        style={{ opacity: active === "hero" ? 0.55 : 0 }}
      >
        <div className="scroll-hint__mouse">
          <span />
        </div>
      </div>
    </section>
  );
}
