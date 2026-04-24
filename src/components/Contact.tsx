"use client";

import { useState, useEffect } from "react";
import { Translations } from "@/lib/translations";
import { CALENDLY, FORMSPREE, EMAIL } from "@/lib/constants";
import { Dot, SectionTag } from "@/components/ui/atoms";

interface ContactProps {
  t: Translations;
  ac: string;
}

type Tab = "calendar" | "form";

export function Contact({ t, ac }: ContactProps) {
  const f = t.contact.form;
  const isEn = t.contact.tag === "Contact";
  const [tab, setTab] = useState<Tab>("calendar");
  const [fields, setFields] = useState({ name: "", email: "", project: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    const handler = () => setTab("calendar");
    window.addEventListener("open-calendar-tab", handler);
    return () => window.removeEventListener("open-calendar-tab", handler);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: fields.name, email: fields.email, message: fields.project }),
      });
      setStatus(res.ok ? "sent" : "sent");
    } catch {
      window.location.href = `mailto:${EMAIL}?subject=Proyecto de ${encodeURIComponent(fields.name)}&body=${encodeURIComponent(fields.project)}`;
      setStatus("sent");
    }
  };

  // Cal.com embed URL — week view is more compact
  const calUrl = `${CALENDLY}?embed=true&theme=dark&layout=week_view&hideEventTypeDetails=true`;

  return (
    <section id="contact" className="resp-section" style={{ padding: "100px 48px 180px", position: "relative", overflow: "hidden" }}>
      {/* Giant name watermark */}
      <div
        style={{
          position: "absolute",
          bottom: -30,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(72px, 12vw, 180px)",
          fontWeight: 800,
          letterSpacing: "-.05em",
          whiteSpace: "nowrap",
          lineHeight: 1,
          background: `linear-gradient(135deg, ${ac} 0%, ${ac}80 50%, ${ac}40 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: 0.12,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        CRISTIAN MATEOS
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header — centered */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 40 }}>
          <SectionTag ac={ac}>{t.contact.tag}</SectionTag>
          <h2
            style={{
              fontSize: "clamp(32px,4.5vw,52px)",
              fontWeight: 800,
              letterSpacing: "-.04em",
              lineHeight: 1.06,
              marginBottom: 12,
            }}
          >
            {t.contact.h}
            <br />
            <span style={{ color: ac }}>{t.contact.h2}</span>
          </h2>
          <p style={{ fontSize: 15, color: "#4A6A8E", lineHeight: 1.7, maxWidth: 440, margin: "0 auto" }}>
            {t.contact.sub}
          </p>
        </div>

        {/* Tab switcher — centered */}
        <div className="reveal d2" style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <div
            className="tab-switcher"
            style={{
              display: "inline-flex",
              gap: 4,
              background: "#0D1629",
              border: "1px solid #1E2D4A",
              borderRadius: 10,
              padding: 3,
            }}
          >
            {(["calendar", "form"] as Tab[]).map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "8px 20px",
                  borderRadius: 7,
                  transition: "all .2s",
                  background: tab === key ? ac : "transparent",
                  color: tab === key ? "#070B14" : "#3A4A6A",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {key === "calendar" ? t.contact.tabCal : t.contact.tabForm}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar tab — inline iframe, compact */}
        {tab === "calendar" && (
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid #1E2D4A",
              background: "#0D1629",
              animation: "fadeUp 0.5s ease both",
            }}
          >
            <iframe
              src={calUrl}
              className="cal-iframe"
              style={{
                width: "100%",
                height: 480,
                border: "none",
                display: "block",
              }}
              title={isEn ? "Book a call" : "Agendar llamada"}
            />
          </div>
        )}

        {/* Form tab */}
        {tab === "form" &&
          (status === "sent" ? (
            <div
              className="card"
              style={{
                borderRadius: 20,
                padding: "48px 36px",
                textAlign: "center",
                animation: "fadeUp 0.5s ease both",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: `${ac}15`,
                  border: `1px solid ${ac}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                  fontSize: 20,
                  color: ac,
                }}
              >
                ✓
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{f.ok}</h3>
            </div>
          ) : (
            <form
              onSubmit={submit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                animation: "fadeUp 0.5s ease both",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <input
                  required
                  className="inp"
                  placeholder={f.name}
                  value={fields.name}
                  onChange={(e) => setFields((p) => ({ ...p, name: e.target.value }))}
                  onFocus={(e) => (e.target.style.borderColor = ac)}
                  onBlur={(e) => (e.target.style.borderColor = "#1E2D4A")}
                />
                <input
                  required
                  type="email"
                  className="inp"
                  placeholder={f.email}
                  value={fields.email}
                  onChange={(e) => setFields((p) => ({ ...p, email: e.target.value }))}
                  onFocus={(e) => (e.target.style.borderColor = ac)}
                  onBlur={(e) => (e.target.style.borderColor = "#1E2D4A")}
                />
              </div>
              <textarea
                required
                rows={5}
                className="inp"
                placeholder={f.project}
                value={fields.project}
                onChange={(e) => setFields((p) => ({ ...p, project: e.target.value }))}
                style={{ resize: "vertical", minHeight: 120 }}
                onFocus={(e) => (e.target.style.borderColor = ac)}
                onBlur={(e) => (e.target.style.borderColor = "#1E2D4A")}
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    background: ac,
                    color: "#070B14",
                    fontWeight: 700,
                    fontSize: 14,
                    padding: "12px 28px",
                    borderRadius: 100,
                    transition: "transform .25s, box-shadow .25s, opacity .2s",
                    boxShadow: `0 0 20px ${ac}20`,
                    opacity: status === "sending" ? 0.6 : 1,
                    cursor: "pointer",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending") {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 6px 30px ${ac}40`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = `0 0 20px ${ac}20`;
                  }}
                >
                  {status === "sending" ? "..." : f.send}
                </button>
              </div>
            </form>
          ))}

        {/* Availability badge */}
        <div
          className="reveal d3"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, color: "#3A4A6A" }}>
            <Dot ac={ac} />
            {t.contact.avail}
          </div>
        </div>
      </div>
    </section>
  );
}

