# Cristian Mateos — Portfolio

Personal freelance portfolio for Cristian Mateos, full-stack developer. Built
with Next.js (static export) and deployed to GitHub Pages.

**Live site:** https://cristianmateos.es

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, static export via `output: "export"`)
- React 19 + TypeScript
- Tailwind CSS (base reset only — layout/visuals live in `src/app/globals.css`)
- `next/font` — self-hosted Bricolage Grotesque (display) + IBM Plex Sans (body)
- [Cal.com](https://cal.com) embed + [Formspree](https://formspree.io) for the contact section

## Structure

```
src/
  app/            # App Router entry: layout (SEO/metadata), page, global styles
  components/      # One component per section (Sidebar, Hero, Services, Projects,
                    Stack, About, Contact, Footer)
  hooks/          # useReveal (scroll-reveal), useScrollSpy (sidebar active link)
  lib/
    constants.ts     # Site-wide constants (Calendly, Formspree, contact links)
    translations.ts  # ES/EN copy — single source of truth, typed via Translations
```

The site is fully bilingual (ES/EN) via a client-side language switcher in the
sidebar — no localized routing, all copy lives in `src/lib/translations.ts`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages.

## Design source

The visual design was mocked up in Claude Design and implemented here
following its component structure (persistent sidebar nav with scroll-spy,
editorial paper/ink palette, deep blue accent).
