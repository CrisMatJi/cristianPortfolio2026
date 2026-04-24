"use client";

import { Translations } from "@/lib/translations";

interface AchievementsProps {
  t: Translations;
  ac: string;
}

export function Achievements({ t, ac }: AchievementsProps) {
  return (
    <section
      className="resp-section"
      style={{
        padding: "80px 48px",
        position: "relative",
        overflow: "hidden",
        borderTop: `1px solid ${ac}15`,
        borderBottom: `1px solid ${ac}15`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(120deg, #070B14 0%, ${ac}12 40%, ${ac}1a 60%, #070B14 100%)`,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 200,
          background: `radial-gradient(ellipse, ${ac}18 0%, transparent 70%)`,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        className="achievements-grid"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 32,
          position: "relative",
          zIndex: 1,
        }}
      >
        {t.achievements.items.map((a, i) => (
          <div
            key={i}
            className={`reveal d${i + 1}`}
            style={{ textAlign: "center" }}
          >
            <div
              style={{
                fontSize: "clamp(40px,4vw,60px)",
                fontWeight: 800,
                color: ac,
                letterSpacing: "-.04em",
                lineHeight: 1,
              }}
            >
              {a.v}
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#e2e2e8", marginTop: 8, marginBottom: 4 }}>
              {a.l}
            </div>
            <div style={{ fontSize: 12, color: "#3A4A6A" }}>{a.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
