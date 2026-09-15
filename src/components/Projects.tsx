"use client";

import Image from "next/image";
import { Translations } from "@/lib/translations";

interface ProjectsProps {
  t: Translations;
}

export function Projects({ t }: ProjectsProps) {
  return (
    <section id="work" className="section">
      <span className="section__ghost" aria-hidden="true">
        03
      </span>
      <div className="eyebrow">
        <span>03</span>
        <span className="eyebrow__tag">{t.projects.tag}</span>
      </div>
      <div className="projects__head">
        <h2 className="h2">
          {t.projects.h}
          <br />
          {t.projects.h2}
        </h2>
        <p className="projects__sub">{t.projects.sub}</p>
      </div>

      <ol className="projects__list">
        {t.projects.items.map((proj, i) => (
          <li className="project reveal" key={proj.name}>
            <div className="project__media">
              <Image
                src={proj.img}
                alt={proj.imgAlt}
                width={proj.imgW}
                height={proj.imgH}
                sizes="(max-width: 640px) 100vw, 320px"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <span className="project__cat">{proj.cat}</span>
            </div>
            <div className="project__body">
              <div>
                <div className="project__meta">
                  <span>{proj.n}</span>
                  <span>{proj.year}</span>
                </div>
                <h3 className="project__title">{proj.name}</h3>
                <p className="project__desc">{proj.desc}</p>
                <blockquote className="project__quote">{proj.quote}</blockquote>
                <ul className="project__tags" style={{ listStyle: "none" }}>
                  {proj.tags.map((tag) => (
                    <li className="pill" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              {proj.showCta && (
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__cta"
                >
                  {t.projects.cta} →
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
