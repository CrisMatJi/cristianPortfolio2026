"use client";

import { Translations } from "@/lib/translations";
import { Dot, Badge } from "@/components/ui/atoms";

function openCalendarTab() {
  window.dispatchEvent(new CustomEvent("open-calendar-tab"));
}

interface HeroProps {
  t: Translations;
  ac: string;
}

export function Hero({ t, ac }: HeroProps) {
  return (
    <section
      className="resp-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 48px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glows */}
      <div
        className="glow-anim"
        style={{
          position: "absolute",
          top: "10%",
          right: "8%",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: `radial-gradient(circle,${ac}0c,transparent 65%)`,
          pointerEvents: "none",
        }}
      />
      <div
        className="glow-anim-2"
        style={{
          position: "absolute",
          bottom: "5%",
          left: "3%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle,${ac}07,transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-grid"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: `${ac}10`,
              border: `1px solid ${ac}25`,
              borderRadius: 100,
              padding: "7px 16px",
              marginBottom: 32,
              animation: "fadeUp .6s ease both",
            }}
          >
            <Dot ac={ac} green />
            <span style={{ fontSize: 12, color: ac, fontWeight: 500, letterSpacing: ".04em" }}>
              {t.hero.avail}
            </span>
          </div>

          <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 14, fontWeight: 500, animation: "fadeUp .6s .1s ease both" }}>
            {t.hero.hi}
          </p>

          <h1
            style={{
              fontSize: "clamp(48px, 6.5vw, 92px)",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-.04em",
              marginBottom: 28,
              animation: "fadeUp .7s .15s ease both",
              color: "var(--text)",
            }}
          >
            {t.hero.h1}
            <br />
            <span style={{ color: ac, fontSize: "1.12em" }}>{t.hero.h1Accent}</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(15px,1.4vw,17px)",
              color: "var(--text-muted)",
              maxWidth: 520,
              lineHeight: 1.72,
              marginBottom: 40,
              animation: "fadeUp .7s .25s ease both",
            }}
          >
            {t.hero.sub}
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              animation: "fadeUp .7s .35s ease both",
              marginBottom: 48,
            }}
          >
            <a
              href="#contact"
              onClick={openCalendarTab}
              style={{
                background: ac,
                color: "var(--ac-text)",
                fontWeight: 700,
                fontSize: 15,
                padding: "14px 30px",
                borderRadius: 100,
                transition: "transform .25s, box-shadow .25s",
                boxShadow: `0 0 32px ${ac}30`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 8px 40px ${ac}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = `0 0 32px ${ac}30`;
              }}
            >
              {t.hero.cta}
            </a>
            <a
              href="#work"
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                padding: "14px 30px",
                border: "1px solid var(--border)",
                borderRadius: 100,
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--text-dim)";
                e.currentTarget.style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              {t.hero.cta2}
            </a>
          </div>

          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 8, animation: "fadeUp .7s .45s ease both" }}
          >
            {t.hero.pills.map((p) => (
              <Badge key={p} ac={ac}>
                {p}
              </Badge>
            ))}
          </div>
        </div>

        {/* Right — avatar card */}
        <div
          className="mob-hide"
          style={{
            animation: "fadeUp .8s .3s ease both",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            className="float-anim"
            style={{
              width: 260,
              height: 310,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 24,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at 40% 30%,${ac}10,transparent 60%)`,
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/cristian.jpg"
              alt="Cristian Mateos"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to top, var(--surface) 0%, transparent 50%)`,
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "16px 20px",
                zIndex: 2,
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  color: "var(--text-dim)",
                  letterSpacing: ".1em",
                  textAlign: "center",
                }}
              >
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: ac,
                borderRadius: 12,
                padding: "8px 12px",
                fontWeight: 700,
                fontSize: 13,
                color: "var(--ac-text)",
                zIndex: 3,
              }}
            >
              12+
            </div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            {[
              ["España", "📍"],
              ["Freelance", "⚡"],
            ].map(([label, icon]) => (
              <div
                key={label}
                className="card"
                style={{ padding: "10px 16px", borderRadius: 12, display: "flex", alignItems: "center", gap: 6 }}
              >
                <span style={{ fontSize: 14 }}>{icon}</span>
                <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-muted)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling stats strip */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
          borderTop: "1px solid var(--strip-border)",
          padding: "14px 0",
          background: "var(--strip-bg)",
        }}
      >
        <div className="strip-track">
          {[...t.hero.strip, ...t.hero.strip].map((s, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                padding: "0 28px",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                color: i % 3 === 0 ? ac : "var(--text-dim)",
              }}
            >
              {s}{" "}
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "var(--border)",
                  display: "inline-block",
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
