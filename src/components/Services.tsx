"use client";

import { Translations } from "@/lib/translations";
import { SectionTag } from "@/components/ui/atoms";

interface ServicesProps {
  t: Translations;
  ac: string;
}

export function Services({ t, ac }: ServicesProps) {
  return (
    <section id="services" className="resp-section" style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: 56 }}>
          <SectionTag ac={ac}>{t.nav.services}</SectionTag>
          <h2
            style={{
              fontSize: "clamp(36px,5vw,62px)",
              fontWeight: 800,
              letterSpacing: "-.04em",
              lineHeight: 1.06,
            }}
          >
            {t.services.h}
          </h2>
        </div>
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {t.services.items.map((s, i) => (
            <div
              key={i}
              className={`card reveal d${i + 1}`}
              style={{ padding: "36px 32px", borderRadius: 20, position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                  background: `${ac}08`,
                  borderRadius: "0 20px 0 80px",
                }}
              />
              <div style={{ fontSize: 24, color: ac, marginBottom: 20 }}>{s.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 12 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 10,
                      color: "#444",
                      background: "#1a1a22",
                      border: "1px solid #252530",
                      borderRadius: 100,
                      padding: "3px 10px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
