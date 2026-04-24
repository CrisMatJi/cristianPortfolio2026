"use client";

import { Translations } from "@/lib/translations";

interface FooterProps {
  t: Translations;
  ac: string;
}

export function Footer({ t, ac }: FooterProps) {
  return (
    <footer style={{ background: "#1a1710", borderTop: "1px solid #2c2618", padding: "24px 48px" }}>
      <div
        className="footer-row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ fontSize: 11, color: "#333", letterSpacing: ".04em" }}>{t.footer.copy}</p>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a
            href="https://www.linkedin.com/in/cmateosjimenez88/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 11, color: "#333", transition: "color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = ac)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
          >
            LinkedIn
          </a>
          <a
            href="mailto:c.mateos.jimenez@gmail.com"
            style={{ fontSize: 11, color: "#333", transition: "color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = ac)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
