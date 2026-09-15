"use client";

import { Translations } from "@/lib/translations";

interface ServicesProps {
  t: Translations;
}

export function Services({ t }: ServicesProps) {
  return (
    <section id="services" className="section section--alt">
      <span className="section__ghost" aria-hidden="true">
        02
      </span>
      <div className="eyebrow">
        <span>02</span>
        <span className="eyebrow__tag">{t.services.tag}</span>
      </div>
      <h2 className="h2">{t.services.h}</h2>

      <ul className="services__grid" style={{ listStyle: "none" }}>
        {t.services.items.map((s) => (
          <li className="service reveal" key={s.title}>
            <div className="service__icon" aria-hidden="true">
              {s.icon}
            </div>
            <h3 className="service__title">{s.title}</h3>
            <p className="service__desc">{s.desc}</p>
            <ul className="tag-row" style={{ listStyle: "none" }}>
              {s.tags.map((tag) => (
                <li className="pill" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
