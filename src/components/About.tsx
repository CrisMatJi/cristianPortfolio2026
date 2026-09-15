"use client";

import { Translations } from "@/lib/translations";
import { LINKEDIN } from "@/lib/constants";

interface AboutProps {
  t: Translations;
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45z" />
    </svg>
  );
}

export function About({ t }: AboutProps) {
  return (
    <section id="about" className="section">
      <span className="section__ghost" aria-hidden="true">
        05
      </span>
      <div className="eyebrow">
        <span>05</span>
        <span className="eyebrow__tag">{t.about.tag}</span>
      </div>

      <div className="about__grid">
        <div className="about__col reveal">
          <h2 className="about__h">{t.about.h}</h2>
          <p className="about__p">{t.about.p1}</p>
          <p className="about__p">{t.about.p2}</p>

          <ul className="about__badges" style={{ listStyle: "none" }}>
            {t.about.badges.map((b) => (
              <li className="about__badge" key={b}>
                {b}
              </li>
            ))}
          </ul>

          <div className="about__links">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-linkedin"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="btn-pill"
              onClick={() => window.dispatchEvent(new CustomEvent("open-calendar-tab"))}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>

        <dl className="about__cards reveal d2">
          {t.about.cards.map((c) => (
            <div className="about__card" key={c.label}>
              <dt>{c.label}</dt>
              <dd>{c.val}</dd>
            </div>
          ))}
          <div className="about__card about__card--wide">
            <dt>{t.about.workMode.label}</dt>
            <dd>{t.about.workMode.val}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
