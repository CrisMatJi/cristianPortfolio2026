"use client";

import { useState, useEffect } from "react";
import { Translations } from "@/lib/translations";

interface NavProps {
  t: Translations;
  lang: "es" | "en";
  setLang: (l: "es" | "en") => void;
  ac: string;
}

export function Nav({ t, lang, setLang, ac }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const f = () => {
      const scrollY = window.scrollY;
      const nearBottom =
        scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
      setScrolled(scrollY > 80);
      setAtBottom(nearBottom);
    };
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  // Show top nav when at top OR when at bottom; show floating pill only in between
  const showTop = !scrolled || atBottom;
  const showBottom = scrolled && !atBottom;

  const linkBase: React.CSSProperties = {
    fontSize: 13,
    color: "#777",
    transition: "color .2s",
    fontWeight: 500,
    cursor: "none",
  };

  const topNav = (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        opacity: showTop ? 1 : 0,
        pointerEvents: showTop ? "all" : "none",
        background: "transparent",
        transition: "opacity .35s ease",
      }}
    >
      <a href="#" style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-.02em", color: "#fff" }}>
        CM<span style={{ color: ac }}>.</span>
      </a>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {(["work", "services", "about", "stack"] as const).map((k) => (
          <a
            key={k}
            href={`#${k}`}
            style={linkBase}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e2e8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#777")}
          >
            {t.nav[k]}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          style={{
            fontSize: 11,
            color: "#444",
            letterSpacing: ".1em",
            padding: "6px 12px",
            border: "1px solid #252530",
            borderRadius: 100,
            transition: "all .2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#aaa";
            e.currentTarget.style.borderColor = "#444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#444";
            e.currentTarget.style.borderColor = "#252530";
          }}
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
        <a
          href="#contact"
          onClick={() => window.dispatchEvent(new CustomEvent("open-calendar-tab"))}
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#0c0c10",
            background: ac,
            padding: "10px 22px",
            borderRadius: 100,
            transition: "opacity .2s",
            boxShadow: `0 0 20px ${ac}25`,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = ".88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {t.nav.cta}
        </a>
      </div>
    </nav>
  );

  const bottomNav = (
    <nav
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: `translateX(-50%) translateY(${showBottom ? 0 : 16}px)`,
        opacity: showBottom ? 1 : 0,
        pointerEvents: showBottom ? "all" : "none",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        gap: 0,
        background: "rgba(14,14,18,0.90)",
        backdropFilter: "blur(24px) saturate(180%)",
        border: "1px solid #252530",
        borderRadius: 100,
        padding: "6px 6px 6px 20px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 0 0.5px #1e1e26 inset",
        whiteSpace: "nowrap",
        transition:
          "opacity .4s cubic-bezier(.16,1,.3,1), transform .4s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div style={{ display: "flex", gap: 4, alignItems: "center", marginRight: 8 }}>
        {(["work", "services", "about", "stack"] as const).map((k) => (
          <a
            key={k}
            href={`#${k}`}
            style={{ fontSize: 13, color: "#666", padding: "6px 8px", transition: "color .2s", fontWeight: 500 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e2e8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
          >
            {t.nav[k]}
          </a>
        ))}
      </div>
      <div style={{ width: 1, height: 20, background: "#252530", margin: "0 8px" }} />
      <button
        onClick={() => setLang(lang === "es" ? "en" : "es")}
        style={{
          fontSize: 11,
          color: "#444",
          letterSpacing: ".1em",
          padding: "5px 10px",
          border: "1px solid #252530",
          borderRadius: 100,
          transition: "all .2s",
          marginRight: 8,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#aaa";
          e.currentTarget.style.borderColor = "#444";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#444";
          e.currentTarget.style.borderColor = "#252530";
        }}
      >
        {lang === "es" ? "EN" : "ES"}
      </button>
      <a
        href="#contact"
        onClick={() => window.dispatchEvent(new CustomEvent("open-calendar-tab"))}
        style={{
          background: ac,
          color: "#0c0c10",
          fontSize: 13,
          fontWeight: 700,
          padding: "9px 20px",
          borderRadius: 100,
          transition: "opacity .2s, box-shadow .2s",
          boxShadow: `0 0 16px ${ac}30`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = ".88";
          e.currentTarget.style.boxShadow = `0 0 28px ${ac}55`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.boxShadow = `0 0 16px ${ac}30`;
        }}
      >
        {t.nav.cta} →
      </a>
    </nav>
  );

  return (
    <>
      {topNav}
      {bottomNav}
    </>
  );
}
