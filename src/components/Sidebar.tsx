"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Translations, Lang } from "@/lib/translations";
import { SECTION_IDS, SectionId } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface SidebarProps {
  t: Translations;
  lang: Lang;
  setLang: (l: Lang) => void;
}

function ServicesIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  );
}
function WorkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.2" />
      <rect x="14" y="3" width="7" height="7" rx="1.2" />
      <rect x="3" y="14" width="7" height="7" rx="1.2" />
      <rect x="14" y="14" width="7" height="7" rx="1.2" />
    </svg>
  );
}
function StackIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19v-4a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2V7a2 2 0 0 1 2-2h4" />
      <circle cx="4" cy="19" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="18" cy="5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function AboutIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  );
}
function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}
function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

const NAV_ITEMS: {
  id: SectionId;
  key: keyof Translations["nav"];
  Icon: () => React.ReactElement;
}[] = [
  { id: "services", key: "services", Icon: ServicesIcon },
  { id: "work", key: "work", Icon: WorkIcon },
  { id: "stack", key: "stack", Icon: StackIcon },
  { id: "about", key: "about", Icon: AboutIcon },
  { id: "contact", key: "contact", Icon: ContactIcon },
];

const LANG_OPTIONS: { code: Lang; flag: string; label: string }[] = [
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇬🇧", label: "English" },
];

export function Sidebar({ t, lang, setLang }: SidebarProps) {
  const active = useScrollSpy(SECTION_IDS);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (langOpen && langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  const current = LANG_OPTIONS.find((o) => o.code === lang) ?? LANG_OPTIONS[0];

  return (
    <aside className="sidebar" data-open={mobileOpen} aria-label={t.sidebar.navLabel}>
      <div className="side-id">
        <div className="side-avatar">
          <Image
            src="/images/cristian.jpg"
            alt=""
            width={50}
            height={50}
            sizes="50px"
            priority
          />
          <span className="side-avatar__dot" aria-hidden="true" />
        </div>
        <div>
          <div className="side-name">Cristian Mateos</div>
          <div className="side-otw">
            <span aria-hidden="true" />
            {t.sidebar.openToWork}
          </div>
        </div>
      </div>

      <div className="side-lang" ref={langRef}>
        <button
          type="button"
          className="side-lang__btn"
          aria-haspopup="listbox"
          aria-expanded={langOpen}
          aria-label={t.sidebar.langLabel}
          onClick={() => setLangOpen((v) => !v)}
        >
          <span className="side-flag" aria-hidden="true">
            {current.flag}
          </span>
          <span>{current.code.toUpperCase()}</span>
          <span className="side-lang__chev" aria-hidden="true">
            ▾
          </span>
        </button>
        {langOpen && (
          <div className="side-lang__menu" role="listbox" aria-label={t.sidebar.langLabel}>
            {LANG_OPTIONS.map((opt) => (
              <button
                key={opt.code}
                type="button"
                role="option"
                aria-selected={opt.code === lang}
                aria-current={opt.code === lang}
                className="side-lang__opt"
                onClick={() => {
                  setLang(opt.code);
                  setLangOpen(false);
                }}
              >
                <span className="side-flag" aria-hidden="true">
                  {opt.flag}
                </span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        type="button"
        className="side-burger"
        aria-expanded={mobileOpen}
        aria-controls="side-nav-collapsible"
        aria-label={mobileOpen ? t.sidebar.menuClose : t.sidebar.menuOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <BurgerIcon open={mobileOpen} />
      </button>

      <div id="side-nav-collapsible" style={{ display: "contents" }}>
        <nav className="side-nav" aria-label={t.sidebar.navLabel}>
          {NAV_ITEMS.map(({ id, key, Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="side-link"
              aria-current={active === id}
              onClick={() => setMobileOpen(false)}
            >
              <span className="side-link__icon">
                <Icon />
              </span>
              <span>{t.nav[key]}</span>
            </a>
          ))}
        </nav>

        <div className="side-div" aria-hidden="true" />

        <a
          href="#contact"
          className="side-cta"
          onClick={() => {
            setMobileOpen(false);
            window.dispatchEvent(new CustomEvent("open-calendar-tab"));
          }}
        >
          {t.nav.cta}
        </a>

        <div className="side-avail">
          <span className="side-avail__dot" aria-hidden="true" />
          {t.hero.avail}
        </div>
      </div>

      <div className="side-stats">
        {t.sidebar.stats.map((s) => (
          <div className="side-stats__row" key={s.label}>
            <span>{s.label}</span>
            <b>{s.val}</b>
          </div>
        ))}
      </div>
    </aside>
  );
}
