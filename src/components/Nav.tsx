"use client";

import { useState, useEffect } from "react";
import { Translations } from "@/lib/translations";
import { Theme } from "@/app/page";

interface NavProps {
  t: Translations;
  lang: "es" | "en";
  setLang: (l: "es" | "en") => void;
  ac: string;
  theme: Theme;
  setTheme: (t: Theme) => void;
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export function Nav({ t, lang, setLang, ac, theme, setTheme }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const isDark = theme === "dark";

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

  const showTop = !scrolled || atBottom;
  const showBottom = scrolled && !atBottom;

  const linkBase: React.CSSProperties = {
    fontSize: 13,
    color: "var(--text-muted)",
    transition: "color .2s",
    fontWeight: 500,
    cursor: "none",
  };

  const iconBtnStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    color: "var(--text-muted)",
    border: "1px solid var(--border)",
    borderRadius: 100,
    transition: "all .2s",
  };

  const langBtnStyle: React.CSSProperties = {
    fontSize: 11,
    color: "var(--text-dim)",
    letterSpacing: ".1em",
    padding: "6px 12px",
    border: "1px solid var(--border)",
    borderRadius: 100,
    transition: "all .2s",
  };

  const topNav = (
    <nav
      className="top-nav"
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
      <a href="#" style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-.02em", color: "var(--text)" }}>
        CM<span style={{ color: ac }}>.</span>
      </a>
      <div className="nav-top-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {(["work", "services", "about", "stack"] as const).map((k) => (
          <a
            key={k}
            href={`#${k}`}
            style={linkBase}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {t.nav[k]}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          style={iconBtnStyle}
          title={isDark ? "Modo claro" : "Modo oscuro"}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--text)";
            e.currentTarget.style.borderColor = "var(--text-dim)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-muted)";
            e.currentTarget.style.borderColor = "var(--border)";
          }}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          style={langBtnStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--text-muted)";
            e.currentTarget.style.borderColor = "var(--text-dim)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-dim)";
            e.currentTarget.style.borderColor = "var(--border)";
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
            color: "var(--ac-text)",
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
        background: "var(--nav-glass)",
        backdropFilter: "blur(24px) saturate(180%)",
        border: "1px solid var(--nav-border)",
        borderRadius: 100,
        padding: "6px 6px 6px 20px",
        boxShadow: "var(--nav-shadow)",
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
            style={{ fontSize: 13, color: "var(--text-muted)", padding: "6px 8px", transition: "color .2s", fontWeight: 500 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {t.nav[k]}
          </a>
        ))}
      </div>
      <div style={{ width: 1, height: 20, background: "var(--border)", margin: "0 8px" }} />
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          color: "var(--text-muted)",
          border: "1px solid var(--border)",
          borderRadius: 100,
          marginRight: 6,
          transition: "all .2s",
        }}
        title={isDark ? "Modo claro" : "Modo oscuro"}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--text)";
          e.currentTarget.style.borderColor = "var(--text-dim)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--text-muted)";
          e.currentTarget.style.borderColor = "var(--border)";
        }}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
      <button
        onClick={() => setLang(lang === "es" ? "en" : "es")}
        style={{
          fontSize: 11,
          color: "var(--text-dim)",
          letterSpacing: ".1em",
          padding: "5px 10px",
          border: "1px solid var(--border)",
          borderRadius: 100,
          transition: "all .2s",
          marginRight: 8,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--text-muted)";
          e.currentTarget.style.borderColor = "var(--text-dim)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--text-dim)";
          e.currentTarget.style.borderColor = "var(--border)";
        }}
      >
        {lang === "es" ? "EN" : "ES"}
      </button>
      <a
        href="#contact"
        onClick={() => window.dispatchEvent(new CustomEvent("open-calendar-tab"))}
        style={{
          background: ac,
          color: "var(--ac-text)",
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
