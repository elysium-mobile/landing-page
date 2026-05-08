# CLAUDE.md

Coverage doc for future agents working on this repo.

## What this is

The marketing site for **SoftWork**, a workplace climate / wellbeing platform built by the **Elysium** startup. Two static pages, each available in Spanish (default) and English:

- **Landing** — `/` (es), `/en/` (en) — hero + benefits + CTA.
- **How it works** — `/how-it-works` (es), `/en/how-it-works` (en) — three product flows in a stepped/animated layout: anonymous report, AI assistant (Ely), HR dashboard.
- **Request demo** — `/request-demo` (es), `/en/request-demo` (en) — placeholder shown when users click "Request Demo". Communicates that the mobile apps are still in development; offers a "talk to sales" mailto and a back-to-home secondary.

Presentational only — no backend, no real form submission, no analytics wiring.

The page was rebuilt from a Claude Design handoff bundle. The original prototype (React-on-CDN with hand-rolled CSS) is *not* in the repo; if you need the source-of-truth for design intent, ask the user to re-share the design URL.

## Run it

```bash
pnpm dev          # http://localhost:4321
pnpm build        # static output → dist/
pnpm preview      # serve the built dist/
npx astro check   # type & content checks
```

Node ≥ 22.12 (see [package.json](package.json) `engines`).

## Stack

- **Astro 6** — static, no SSR adapter, no UI framework integrations.
- **Tailwind CSS v4** via `@tailwindcss/vite`. **Config-less** — tokens are declared inside an `@theme {}` block in [src/styles/global.css](src/styles/global.css). Do not add a `tailwind.config.*` file.
- **astro-icon** with **local SVGs** under [src/icons/](src/icons/). No Iconify pack is installed; new icons mean a new SVG file.

## File layout

```
src/
├─ pages/
│  ├─ index.astro             ← / (es, default locale) — landing
│  ├─ how-it-works.astro      ← /how-it-works (es) — three product flows
│  ├─ request-demo.astro      ← /request-demo (es) — "mobile apps in development" placeholder
│  └─ en/
│     ├─ index.astro          ← /en/  (English landing)
│     ├─ how-it-works.astro   ← /en/how-it-works  (English how-it-works)
│     └─ request-demo.astro   ← /en/request-demo  (English placeholder)
├─ layouts/BaseLayout.astro  ← <html lang=…>, <head>, fonts, slot
├─ styles/global.css         ← Tailwind entrypoint + @theme + keyframes + .shell / .t-* helpers
├─ i18n/
│  ├─ ui.ts                  ← all user-facing strings, keyed by namespace
│  └─ utils.ts               ← useTranslations · resolveLang · localizedPath
├─ icons/*.svg               ← consumed by <Icon name="…" />
└─ components/
   ├─ ui/         Button · Chip · Pulse · HeroEyebrow · SectionLead · ValueLink
   ├─ brand/      BrandMark · Logo
   ├─ site/       SiteHeader · NavLink · SiteFooter · FooterColumn · SocialLinks · LanguageSwitcher
   ├─ phone/      PhoneFrame · PhoneStatusBar · HeroPhone · MoodSelector · PhoneTile
   ├─ sections/   Hero · HeroVisual · HeroTrust · FloatCard · StatsStrip · Stat ·
   │              Benefits · ValueBlock · FeatureList · FeatureItem · CTABanner
   │              CFHero · CFStepTabs · CFCta · Scenario · ScenarioStepList · ScenarioStep
   ├─ phone/      PhoneFrame · PhoneStatusBar · HeroPhone · MoodSelector · PhoneTile
   │              ReportPhone · ReportPills · ReportPrivacyBox · ReportConfirm · ReportForumCard
   │              CFAIPhone · HRPhone
   └─ viz/        VizShell · EmployeeViz (AnonReportCard · ForumSide · ForumThread)
                  HRViz (HRDashboard · HRStat · HRChartBars · AlertSide)
                  AIViz (AIChat · AIMessage · AITyping · AIInput · AISide)
                  AISidePanel · HRPhoneKpi · HRPhoneAlert · HRPhoneTeamBar · HRLineChart
```

## Design tokens

All tokens live in the `@theme` block in [src/styles/global.css](src/styles/global.css). They are exposed as Tailwind utilities and as `var(--…)` for inline styles. **Never hard-code hex values** in components — use `bg-navy`, `text-teal`, `border-line`, `shadow-[var(--shadow-card)]`, etc.

Highlights:
- Brand: `navy #1C4B78`, `sky #4DA8DA`, `teal #19A4A1`, `mint #A5E3D8`, `paper #F2F4F7`, `ink #3E3E3E`
- Status: `warning #E8A838`, `danger #C94040`
- Surfaces: `bg`, `surface`, `line`, `line-strong`, `text-soft`, `text-mute`
- Font: `Exo` 300–800 (Google Fonts, preconnected in BaseLayout)
- Radii: `--radius-card 16`, `--radius-button 12`, `--radius-chip 20`
- Shadows: `--shadow-card`, `--shadow-card-lg`, `--shadow-press`, `--shadow-navy-press`, `--shadow-phone`

## Adding an icon

1. Drop a square `viewBox="0 0 24 24"` SVG at `src/icons/<kebab-name>.svg`.
2. Use `currentColor` for stroke/fill — never hard-code colors.
3. Strip explicit `width`/`height`; let `<Icon size={…} />` control them.
4. Reference: `import { Icon } from 'astro-icon/components';` then `<Icon name="<kebab-name>" width={n} height={n} />`.

## Adding a section / component

- Compose existing atoms first. The component tree is intentionally granular (~38 components) so the most common change is a new variant or a new slot, not a new file.
- New components belong under the directory that matches their role (`ui` / `site` / `sections` / `viz` / `phone`). Cross-cutting helpers go in `ui`.
- Prefer `<slot />` over rigid props for composition. `ValueBlock` already takes `features`, `link`, and `viz` slots — copy that pattern.

## Animation conventions

Keyframes are global, declared once in [src/styles/global.css](src/styles/global.css):

| Name | Use |
|---|---|
| `floaty` | gentle vertical drift on floating cards (6s) |
| `ping-soft` | radar-ring on the hero eyebrow pulse (2.4s) |
| `fade-up` | staggered entrance — pair with `.fade-up.delay-{1..4}` |
| `bounce-dot` | typing-indicator dots on the AI chat |

Apply via inline `style="animation:…"` or via the `.fade-up` helper class. Don't reach for JS-driven motion unless the animation needs to advance state (only the AI chat cycler does).

## Interactivity

Plain `<script>` tags inside the relevant `.astro` component. Two interactions exist:

- **MoodSelector** ([src/components/phone/MoodSelector.astro](src/components/phone/MoodSelector.astro)) — toggles `data-active` on click; CSS handles the visual via `data-[active=true]:` variants.
- **AIChat cycler** ([src/components/viz/AIChat.astro](src/components/viz/AIChat.astro)) — `setInterval` walks a 6-step `seq` array, including a typing-dots state. Pauses when `document.hidden`.
- **ScenarioStepList** ([src/components/sections/ScenarioStepList.astro](src/components/sections/ScenarioStepList.astro)) — auto-advances or click-to-set the active step on the how-it-works page; broadcasts `softwork:scenario-step` `CustomEvent` (`{ scenario, step }`) on `document` so paired phones update.
- **ReportPhone** ([src/components/phone/ReportPhone.astro](src/components/phone/ReportPhone.astro)) — listens for `softwork:scenario-step` with `scenario === 'report'` and toggles textarea/submit/title/confirm-overlay states.
- **CFAIPhone** ([src/components/phone/CFAIPhone.astro](src/components/phone/CFAIPhone.astro)) — progressively reveals chat messages every 1.7s and broadcasts the matching step so its sibling step list highlights in sync.

If you need a third-party reactive lib (React, Vue, Solid), add it via `npx astro add` and the relevant `client:*` directive — not by hand.

## i18n

Two locales: **`es` (default, served at `/`)** and **`en` (served at `/en/`)**. Configured in [astro.config.mjs](astro.config.mjs) via `i18n: { defaultLocale: 'es', locales: ['es', 'en'], routing: { prefixDefaultLocale: false } }`.

### How translation works

```astro
---
import { useTranslations } from '../i18n/utils';
const t = useTranslations(Astro.currentLocale);
---
<h1>{t('hero.title.html')}</h1>
```

- All strings live in [src/i18n/ui.ts](src/i18n/ui.ts), keyed by dot-namespace (`section.thing.subthing`).
- `useTranslations(Astro.currentLocale)` returns a `t(key)` function bound to the active locale, with fallback to the default if a key is missing.
- The `lang` argument is intentionally permissive (`string | undefined`); `resolveLang` narrows it.
- Components don't read URLs themselves — they just trust `Astro.currentLocale`. This works because we have `i18n` configured in astro.config.mjs.

### Adding a new key

1. Add the key to **every** locale block in [src/i18n/ui.ts](src/i18n/ui.ts). The default-locale block is the source of truth for the `UIKey` union, so missing keys in non-default locales fall back gracefully but are still flagged at the call site.
2. Reference it in components via `t('your.new.key')`.

### Adding a new locale

1. Add the code to `languages` in [src/i18n/ui.ts](src/i18n/ui.ts) and add a full `ui.<code>` block with every key.
2. Add it to `locales` in [astro.config.mjs](astro.config.mjs).
3. Mirror `src/pages/en/index.astro` at `src/pages/<code>/index.astro`. Composition stays identical.
4. The `LanguageSwitcher` enumerates `languages` automatically.

### Internal links

Use `localizedPath(Astro.currentLocale, '/foo')` to build links so `/foo` becomes `/en/foo` under English. Header, footer, and value-block CTAs all do this — copy the pattern.

### Auto-detection

A small inline `<script is:inline>` in [BaseLayout.astro](src/layouts/BaseLayout.astro) runs in `<head>` before paint and may redirect the visitor to the locale that matches their browser. Resolution order:

1. `localStorage.getItem('softwork.lang')` — sticky manual choice from `LanguageSwitcher`.
2. `navigator.language` prefix (`es*` → es, `en*` → en).
3. Otherwise stay on the requested URL.

Clicking the `LanguageSwitcher` writes the chosen locale to `localStorage` so subsequent visits respect the user's pick over their browser default. The redirect is loop-safe — it only fires when target locale ≠ current path — and uses `location.replace()` so the un-localised URL doesn't pollute history.

### One special case — the hero headline

`hero.title.html` carries inline `<em class="gradient-em">…</em>` markers and is rendered with `set:html` inside [Hero.astro](src/components/sections/Hero.astro). Keep the `<em class="gradient-em">` wrapping when translating — that's what gives the gradient-text effect.

## What's intentionally absent

- The second prototype page (`como-funciona.html`) — out of scope for this build.
- Real form submission, auth, analytics — every CTA is a `#` link.
- A `tailwind.config.*` file — Tailwind v4 reads tokens from `@theme` directly.
- Iconify packs — local SVGs only.
- The original design bundle files — they live in chat history, not in the repo.

## Conventions worth knowing

- The `.shell` helper (1240px max, 32px gutters) wraps every full-width section's inner content.
- Type helpers: `.t-display` (hero), `.t-section-title` (block headings), `.t-section-eyebrow` (small uppercase labels), `.gradient-em` (the navy→teal gradient text on `<em>` inside the hero headline).
- Footer columns and the `direction:rtl` flip on `ValueBlock` are how the design alternates orientation without duplicating markup.
- The hero phone is `position: absolute` inside `HeroVisual` — that's why the visual column has a fixed `h-[580px]`. Floating cards are positioned relative to the same column.
