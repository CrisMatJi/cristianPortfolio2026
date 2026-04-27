"use client";

import { Translations } from "@/lib/translations";
import { LINKEDIN } from "@/lib/constants";

function openCalendarTab() {
  window.dispatchEvent(new CustomEvent("open-calendar-tab"));
}
import { Dot, SectionTag } from "@/components/ui/atoms";

interface AboutProps {
  t: Translations;
  ac: string;
}

export function About({ t, ac }: AboutProps) {
  return (
    <section id="about" className="resp-section" style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 80,
            alignItems: "flex-start",
          }}
        >
          {/* Left */}
          <div className="reveal">
            <SectionTag ac={ac}>{t.about.tag}</SectionTag>
            <h2
              style={{
                fontSize: "clamp(32px,4.5vw,58px)",
                fontWeight: 800,
                letterSpacing: "-.035em",
                lineHeight: 1.1,
                marginBottom: 28,
                color: "var(--text)",
              }}
            >
              {t.about.h}
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.78, marginBottom: 16 }}>
              {t.about.p1}
            </p>
            <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.78, marginBottom: 36 }}>
              {t.about.p2}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
              {t.about.badges.map((b) => (
                <span
                  key={b}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 100,
                    padding: "7px 14px",
                  }}
                >
                  <Dot ac={ac} green />
                  {b}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  borderRadius: 100,
                  padding: "10px 20px",
                  transition: "all .2s",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = ac;
                  e.currentTarget.style.borderColor = ac;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                LinkedIn →
              </a>
              <a
                href="#contact"
                onClick={openCalendarTab}
                style={{
                  fontSize: 13,
                  color: "var(--ac-text)",
                  background: ac,
                  borderRadius: 100,
                  padding: "10px 20px",
                  fontWeight: 600,
                  transition: "opacity .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = ".85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {t.nav?.cta ?? "Agendar llamada"}
              </a>
            </div>
          </div>

          {/* Right — info cards */}
          <div className="reveal d2 about-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {t.about.cards.map((c, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: "24px 22px", borderRadius: 18 }}
              >
                <p
                  style={{
                    fontSize: 10,
                    color: "var(--text-dim)",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                    fontWeight: 600,
                  }}
                >
                  {c.label}
                </p>
                <p style={{ fontSize: 18, fontWeight: 700, color: "var(--text)" }}>{c.val}</p>
              </div>
            ))}
            <div
              className="card d3"
              style={{
                padding: "24px 22px",
                borderRadius: 18,
                gridColumn: "span 2",
                background: `${ac}0a`,
                border: `1px solid ${ac}20`,
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  color: ac,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                  fontWeight: 600,
                }}
              >
                {t.about.workMode.label}
              </p>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65 }}>
                {t.about.workMode.val}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
