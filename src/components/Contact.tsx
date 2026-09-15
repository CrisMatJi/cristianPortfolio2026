"use client";

import { useEffect, useRef, useState } from "react";
import { Translations } from "@/lib/translations";
import { CAL_EMBED, EMAIL, FORMSPREE } from "@/lib/constants";

interface ContactProps {
  t: Translations;
}

type Tab = "calendar" | "form";

export function Contact({ t }: ContactProps) {
  const f = t.contact.form;
  const [tab, setTab] = useState<Tab>("calendar");
  const [fields, setFields] = useState({ name: "", email: "", project: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [iframeReady, setIframeReady] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => setTab("calendar");
    window.addEventListener("open-calendar-tab", handler);
    return () => window.removeEventListener("open-calendar-tab", handler);
  }, []);

  // Only load the Cal.com iframe once the section is actually visible —
  // avoids Cal.com's auto-focus scrolling the page on initial load.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIframeReady(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          message: fields.project,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section section--alt" ref={sectionRef}>
      <span className="section__ghost" aria-hidden="true">
        06
      </span>
      <div className="eyebrow">
        <span>06</span>
        <span className="eyebrow__tag">{t.contact.tag}</span>
      </div>

      <div className="contact__grid">
        <div className="contact__intro reveal">
          <h2 className="contact__h">
            {t.contact.h}
            <br />
            {t.contact.h2}
          </h2>
          <p className="contact__sub">{t.contact.sub}</p>
          <div className="contact__avail">
            <span aria-hidden="true" />
            {t.contact.avail}
          </div>
        </div>

        <div className="contact__panel reveal d2">
          <div className="tabs" role="tablist" aria-label={t.contact.tag}>
            <button
              type="button"
              role="tab"
              id="tab-calendar"
              aria-selected={tab === "calendar"}
              aria-controls="panel-calendar"
              className="tab"
              onClick={() => setTab("calendar")}
            >
              {t.contact.tabCal}
            </button>
            <button
              type="button"
              role="tab"
              id="tab-form"
              aria-selected={tab === "form"}
              aria-controls="panel-form"
              className="tab"
              onClick={() => setTab("form")}
            >
              {t.contact.tabForm}
            </button>
          </div>

          {tab === "calendar" && (
            <div
              id="panel-calendar"
              role="tabpanel"
              aria-labelledby="tab-calendar"
              className="cal-frame"
            >
              {iframeReady ? (
                <iframe
                  src={CAL_EMBED}
                  title={t.contact.calTitle}
                  loading="lazy"
                />
              ) : (
                <p style={{ fontSize: 13, color: "var(--ink-45)" }}>
                  {t.contact.calLoading}
                </p>
              )}
            </div>
          )}

          {tab === "form" && (
            <div id="panel-form" role="tabpanel" aria-labelledby="tab-form">
              {status === "sent" ? (
                <div className="form__ok fade-up">
                  <div className="form__ok-mark" aria-hidden="true">
                    ✓
                  </div>
                  <p className="form__ok-text">{f.ok}</p>
                </div>
              ) : (
                <form className="form fade-up" onSubmit={submit} noValidate>
                  <div className="form__row">
                    <div>
                      <label className="sr-only" htmlFor="name">
                        {f.name}
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="inp"
                        placeholder={f.name}
                        autoComplete="name"
                        value={fields.name}
                        onChange={(e) =>
                          setFields((p) => ({ ...p, name: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="email">
                        {f.email}
                      </label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        className="inp"
                        placeholder={f.email}
                        autoComplete="email"
                        value={fields.email}
                        onChange={(e) =>
                          setFields((p) => ({ ...p, email: e.target.value }))
                        }
                      />
                    </div>
                  </div>
                  <label className="sr-only" htmlFor="project">
                    {f.project}
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    required
                    rows={5}
                    className="inp"
                    placeholder={f.project}
                    value={fields.project}
                    onChange={(e) =>
                      setFields((p) => ({ ...p, project: e.target.value }))
                    }
                  />
                  {status === "error" && (
                    <p className="form__error" role="alert">
                      {f.error}{" "}
                      <a href={`mailto:${EMAIL}`} style={{ color: "inherit", textDecoration: "underline" }}>
                        {EMAIL}
                      </a>
                    </p>
                  )}
                  <div className="form__submit">
                    <button type="submit" disabled={status === "sending"} className="btn-submit">
                      {status === "sending" ? f.sending : f.send}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
