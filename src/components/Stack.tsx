"use client";

import React from "react";
import { Translations } from "@/lib/translations";
import { SectionTag } from "@/components/ui/atoms";

interface StackProps {
  t: Translations;
  ac: string;
}

export function Stack({ t, ac }: StackProps) {
  return (
    <section id="stack" className="resp-section" style={{ padding: "120px 48px", background: "#161410" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <SectionTag ac={ac}>{t.stack.tag}</SectionTag>
          <h2
            style={{
              fontSize: "clamp(36px,5vw,62px)",
              fontWeight: 800,
              letterSpacing: "-.04em",
              lineHeight: 1.06,
            }}
          >
            {t.stack.h}
            <br />
            <span style={{ color: ac }}>{t.stack.h2}</span>
          </h2>
        </div>

        {/* Process steps */}
        <div
          className="stack-process"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr auto 1fr",
            alignItems: "stretch",
            gap: 0,
          }}
        >
          {t.stack.steps.map((step, i) => (
            <React.Fragment key={step.n}>
              <div
                className={`reveal d${i + 1}`}
                style={{
                  background: "#141418",
                  border: "1px solid #1e1e26",
                  borderRadius: 16,
                  padding: "28px 22px",
                  transition: "border-color .3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${ac}40`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#1e1e26")
                }
              >
                {/* Large decorative number */}
                <p
                  style={{
                    fontSize: 44,
                    fontWeight: 800,
                    color: `${ac}20`,
                    letterSpacing: "-.04em",
                    lineHeight: 1,
                    marginBottom: 18,
                  }}
                >
                  {step.n}
                </p>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: "-.02em",
                    marginBottom: 10,
                    color: "#e2e2e8",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>

              {i < t.stack.steps.length - 1 && (
                <div
                  className="stack-connector"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 6px",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    style={{ opacity: 0.3 }}
                  >
                    <path
                      d="M4 10h12M12 6l4 4-4 4"
                      stroke={ac}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Tech strip */}
        <div
          style={{
            marginTop: 52,
            paddingTop: 32,
            borderTop: `1px solid ${ac}15`,
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontSize: 10,
              color: "#333",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            Stack ·
          </p>
          {t.stack.techStrip.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: 12,
                color: "#3a3a48",
                background: "#141418",
                border: "1px solid #1e1e26",
                borderRadius: 100,
                padding: "5px 14px",
                fontWeight: 500,
                transition: "color .2s, border-color .2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = ac;
                (e.currentTarget as HTMLElement).style.borderColor = `${ac}40`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#3a3a48";
                (e.currentTarget as HTMLElement).style.borderColor = "#1e1e26";
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
