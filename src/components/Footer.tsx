"use client";

import { Translations } from "@/lib/translations";

interface FooterProps {
  t: Translations;
  ac: string;
}

export function Footer({ t, ac }: FooterProps) {
  return (
    <footer style={{ background: "#0c0c10", borderTop: "1px solid #1a1a22", overflow: "hidden", paddingBottom: 0 }}>
      <div
        style={{
          padding: "28px 48px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ fontSize: 11, color: "#252530", letterSpacing: ".04em" }}>{t.footer.copy}</p>
      </div>

      {/* Giant name */}
      <div style={{ position: "relative", height: "clamp(120px, 18vw, 240px)", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            bottom: "-8%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "clamp(72px, 12.5vw, 190px)",
            fontWeight: 800,
            letterSpacing: "-.05em",
            whiteSpace: "nowrap",
            lineHeight: 1,
            background: `linear-gradient(135deg, ${ac} 0%, #c8960a 55%, ${ac}55 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: 0.18,
            userSelect: "none",
            pointerEvents: "none",
            textAlign: "center",
          }}
        >
          CRISTIAN MATEOS
        </div>
      </div>
    </footer>
  );
}
