"use client";

import { useState } from "react";
import { Translations } from "@/lib/translations";
import { SectionTag } from "@/components/ui/atoms";

const PROJECT_IMAGES = [
  { src: "/images/acf-thumbnail.jpg",       alt: "ACF Fernando Terremoto — sala de espectáculos" },
  { src: "/images/suarez-thumbnail.jpg",    alt: "Suárez Studio — interiorismo" },
  { src: "/images/tupachanga-thumbnail.jpeg", alt: "tuPachangaApp — organiza partidos" },
];

interface ProjectCardProps {
  p: Translations["projects"]["items"][number];
  cta: string;
  ac: string;
  idx: number;
}

function ProjectCard({ p, cta, ac, idx }: ProjectCardProps) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="reveal card proj-card"
      style={{
        borderRadius: 24,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0,
        minHeight: 320,
        border: `1px solid ${hov ? p.hue + "40" : "var(--border)"}`,
        transition: "border-color .3s, transform .35s cubic-bezier(.16,1,.3,1)",
        transform: hov ? "translateY(-5px)" : "none",
        background: "var(--surface)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Visual */}
      <div className="proj-visual" style={{ position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PROJECT_IMAGES[idx].src}
          alt={PROJECT_IMAGES[idx].alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", minHeight: 320, filter: "brightness(0.45) saturate(0.7)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(20,20,24,0.95) 100%)",
          }}
        />
        <div style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: p.hue,
              background: `${p.hue}15`,
              border: `1px solid ${p.hue}30`,
              borderRadius: 100,
              padding: "4px 12px",
              letterSpacing: ".08em",
            }}
          >
            {p.cat}
          </span>
        </div>
        <div style={{ position: "absolute", bottom: 20, left: 20, zIndex: 1 }}>
          <span style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: ".06em" }}>{p.year}</span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "32px 32px 32px 28px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ fontSize: 10, fontWeight: 700, color: "var(--text-dim)", letterSpacing: ".1em", marginBottom: 10 }}>
            {p.n}
          </p>
          <h3
            style={{
              fontSize: "clamp(20px,2vw,26px)",
              fontWeight: 800,
              letterSpacing: "-.025em",
              marginBottom: 14,
              lineHeight: 1.2,
              color: "var(--text)",
            }}
          >
            {p.name}
          </h3>
          <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.72, marginBottom: 20 }}>
            {p.desc}
          </p>
          <div
            style={{
              background: `${p.hue}0c`,
              border: `1px solid ${p.hue}20`,
              borderRadius: 12,
              padding: "14px 16px",
              marginBottom: 20,
            }}
          >
            <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.65, fontStyle: "italic" }}>
              {p.quote}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
            {p.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 10,
                  color: "var(--text-dim)",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 100,
                  padding: "3px 10px",
                  letterSpacing: ".04em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            fontWeight: 700,
            color: ac,
            transition: "gap .2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
          onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

interface ProjectsProps {
  t: Translations;
  ac: string;
}

export function Projects({ t, ac }: ProjectsProps) {
  return (
    <section id="work" className="resp-section" style={{ padding: "120px 48px", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <SectionTag ac={ac}>{t.projects.tag}</SectionTag>
            <h2
              style={{
                fontSize: "clamp(36px,5vw,62px)",
                fontWeight: 800,
                letterSpacing: "-.04em",
                lineHeight: 1.06,
                color: "var(--text)",
              }}
            >
              {t.projects.h}
              <br />
              <span style={{ color: ac }}>{t.projects.h2}</span>
            </h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--text-muted)", maxWidth: 320, lineHeight: 1.7, paddingBottom: 8 }}>
            {t.projects.sub}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {t.projects.items.map((p, i) => (
            <ProjectCard key={i} p={p} cta={t.projects.cta} ac={ac} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
