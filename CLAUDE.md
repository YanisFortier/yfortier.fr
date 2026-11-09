# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio of Yanis Fortier (yfortier.fr), DevSecOps engineer. One-page static site built with **Astro** (no client framework) and hand-written CSS, in **3 languages**: French (`/`, default), English (`/en/`) and Korean (`/ko/`).

## Commands

```bash
npm install        # first time
npm run dev        # dev server on http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

## Architecture

- `src/i18n/ui.ts` — locales (`fr`, `en`, `ko`), interface strings (`ui`), language metadata (flag, path, `lang`, `og:locale`), and helpers: `tr()` picks a field in the current language, `period()` formats dates.
- `src/data/` — **all content lives here**, as typed TS objects (`types.ts`):
  - Every visible text is either a plain string (same in all languages: names, tech) or `{ fr, en, ko }` (`L<T>` / `Tr<T>` types). TypeScript forces all 3 translations.
  - `profil.ts` (name, contact, tagline, key facts, CV links, share description)
  - `experiences.ts` (most recent first; `start`/`end` years, `end: null` = current job; a company can hold several `roles`; `missions` lists ministries/clients)
  - `formations.ts`, `competences.ts`, `engagements.ts`, `distinctions.ts`
  - Text fields accept `**bold**` only (rendered by `src/lib/rich.ts`, HTML is escaped).
- `src/components/Resume.astro` — the whole page for a given `locale`. `src/pages/index.astro`, `en/index.astro`, `ko/index.astro` only render it (the Korean page also imports Noto Sans KR).
- `src/components/` — `Sidebar` (fixed sidebar on desktop, top bar + accessible menu button on mobile, scroll-spy), `LangSwitch` (flag links, keeps the current section when switching), `Section`, `Job`, `FormationItem`, `Stack`.
- `src/layouts/Base.astro` — `<head>`, `lang`, `hreflang` alternates, SEO/Open Graph meta, fonts, skip link.
- `src/styles/global.css` — design tokens (`:root`), layout and all component styles. Dark mode via `prefers-color-scheme`.
- `public/` — served as-is: `img/`, CV PDFs, `favicon.png`, and `jeux/atom/` (standalone game kept at `/jeux/atom/`).

## Design conventions

Sober, institutional, accessibility-first (inspired by public-sector design systems, without using DSFR or Marianne, which are restricted):
- Fonts: Public Sans (self-hosted via `@fontsource/public-sans`); Korean adds Noto Sans KR (`@fontsource/noto-sans-kr`, loaded only on `/ko/`), with `word-break: keep-all`.
- One accent blue (`--accent`), neutral greys, 1px rules instead of shadows, 2px radius max, no gradients, no emojis in headings.
- Keep WCAG AA contrast, visible `:focus-visible`, semantic headings (one `h1`), `alt` on every image, decorative SVG/emoji `aria-hidden`.

## Editing content

- New job: add an entry at the top of `experiences` in `src/data/experiences.ts` with `fr`, `en` and `ko` texts; put the logo in `public/img/` and reference it as `/img/<file>`.
- Any content change must be made in the 3 languages. Korean: concise noun-ending style for bullet points (e.g. "… 구축", "… 자동화"), keep tech names in Latin script.
- Do not hardcode content or UI strings in components — extend the data files / `src/i18n/ui.ts` instead.
- CVs exist in French and English only; the Korean page links to both (English first).

## Deployment

The site is hosted on alwaysdata (Apache). Only the **built `dist/` folder** must be published — the repository root is no longer the website.

**Pushing to `master` deploys to production** via `.github/workflows/deploy.yml` (build → rsync over SSH → HTTP check). Secrets live in the `AlwaysData` environment: `DEPLOY_SSH_KEY`, `DEPLOY_KNOWN_HOSTS`, `DEPLOY_USER`, `DEPLOY_HOST`, `DEPLOY_PATH`. Actions are pinned by commit SHA; Node version comes from `.nvmrc`. Work on a branch and only push `master` when the user wants it live.

`npm run deploy` (`scripts/deploy.sh`) builds, shows an rsync dry-run, asks for confirmation, then uploads `dist/` over SSH. Credentials live in `.env.deploy` (gitignored, template in `.env.deploy.example`). `npm run deploy -- --clean` also deletes remote files missing from `dist/` (never `.htaccess` or `.well-known/`). Never run a deploy without the user asking for it.

## Git

Do not add any Claude attribution (Co-Authored-By, "Generated with Claude Code") to commits or PRs.
