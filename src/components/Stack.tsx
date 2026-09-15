"use client";

import { Translations } from "@/lib/translations";

interface StackProps {
  t: Translations;
}

export function Stack({ t }: StackProps) {
  return (
    <section id="stack" className="section section--alt">
      <span className="section__ghost" aria-hidden="true">
        04
      </span>
      <div className="eyebrow">
        <span>04</span>
        <span className="eyebrow__tag">{t.stack.tag}</span>
      </div>
      <h2 className="h2">
        {t.stack.h} {t.stack.h2}
      </h2>

      <ol className="process">
        {t.stack.steps.map((step) => (
          <li className="process__step reveal" key={step.n}>
            <span className="process__n" aria-hidden="true">
              {step.n}
            </span>
            <h3 className="process__title">{step.title}</h3>
            <p className="process__desc">{step.desc}</p>
          </li>
        ))}
      </ol>

      <div className="tech-strip">
        <span className="tech-strip__label">{t.stack.stackLabel}</span>
        <ul style={{ display: "contents", listStyle: "none" }}>
          {t.stack.techStrip.map((tech) => (
            <li className="tech-strip__item" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
