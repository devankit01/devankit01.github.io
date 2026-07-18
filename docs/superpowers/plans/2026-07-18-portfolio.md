# Terminal × Trail Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy Ankit's single-page Terminal × Trail portfolio (React) to GitHub Pages.

**Architecture:** Vite + React single-page scroll app; six section components render exclusively from `src/data/content.js`; shared UI primitives for terminal cards, ridgeline dividers, and duotone photos; static photos in `public/insta/`.

**Tech Stack:** Vite, React 18, Tailwind CSS, Framer Motion, Vitest + React Testing Library, GitHub Actions → GitHub Pages.

Spec: `docs/superpowers/specs/2026-07-18-portfolio-design.md`

---

### Task 1: Scaffold

**Files:** Create Vite app in repo root (`package.json`, `vite.config.js`, `index.html`, `src/`), move `assets/insta/*` → `public/insta/`.

- [ ] `npm create vite@latest . -- --template react` (merge into existing repo), `npm i framer-motion`, `npm i -D tailwindcss @tailwindcss/vite vitest @testing-library/react @testing-library/jest-dom jsdom`
- [ ] Configure `vite.config.js`: `base: '/portfolio/'`, tailwind plugin, vitest `environment: 'jsdom'`, setup file with jest-dom.
- [ ] Tailwind v4 via `@import "tailwindcss"` in `src/index.css`; theme tokens: `--color-bg: #0d1117`, `--color-panel: #161b22`, `--color-green: #3fb950`, `--color-orange: #f78166`, `--color-text: #e6edf3`, `--color-muted: #7d8590`; fonts JetBrains Mono + Inter via @fontsource packages (`npm i @fontsource/jetbrains-mono @fontsource/inter`).
- [ ] `git mv assets/insta public/insta` (manifest travels with it).
- [ ] `npm run dev` renders default page; `npx vitest run` passes (no tests yet → configure `passWithNoTests: true` is NOT allowed — add a smoke test in Task 2).
- [ ] Commit: `chore: scaffold vite + tailwind + vitest`

### Task 2: Content data (`src/data/content.js`)

**Files:** Create `src/data/content.js`, `src/data/photos.js`, Test `src/data/content.test.js`.

- [ ] Failing test: content exports `identity` (name, tagline parts, chips), `about` (story, stats[4]), `photos` (27 entries, each `{src, caption}` with src under `insta/`), `projects` (3, each `{name, desc, stack[], link?}`), `experience` (4 roles, each `{hash, role, org, period, points[]}`), `contact` (4 links email/linkedin/github/instagram).
- [ ] `photos.js` generated from `public/insta/manifest.json`: importable array; captions cleaned (strip hashtags, keep 📍 location text).
- [ ] Content from resume: Clear.bio 2022–present (health-AI pipelines, Kenya integrations, CE-marked env), Appventurez 2022, Yokoso 2021, The Hobnob 2020; projects Careerboat / Clinical LLM Pipeline / Hireup; stats: 15+ countries, 12,000 ft Chandrashila, 3× hackathon winner, Dutch A2.
- [ ] Run tests → pass. Commit: `feat: site content data`

### Task 3: UI primitives

**Files:** Create `src/components/ui/{Section,TerminalCard,RidgelineDivider,DuotonePhoto}.jsx`, Test `src/components/ui/ui.test.jsx`.

- [ ] Failing tests: Section renders `<section id>` + heading with `#` prompt prefix; TerminalCard renders title bar dots + children; RidgelineDivider renders an svg; DuotonePhoto renders img with caption figcaption and falls back to gradient div on error event.
- [ ] Implement: Section wraps `motion.div` fade/slide-in (`whileInView`, `viewport={{once:true}}`, disabled when `useReducedMotion()`); TerminalCard = panel bg, rounded border `#30363d`, three dots header; RidgelineDivider = inline SVG polyline wireframe (green, 15% opacity fill); DuotonePhoto = grayscale+green-tint via CSS filter/mix-blend, `onError` → gradient placeholder, hover removes filter.
- [ ] Tests pass. Commit: `feat: ui primitives`

### Task 4: Hero

**Files:** Create `src/components/Hero.jsx`, `src/hooks/useTypewriter.js`, Test `src/components/Hero.test.jsx`.

- [ ] Failing test: renders `$ whoami`, full tagline text present (typewriter completes instantly under reduced-motion/test), nav anchors `#journeys #projects #experience #contact`.
- [ ] `useTypewriter(strings, speed)`: types sequentially, returns done flag; skips to full text when `prefers-reduced-motion`.
- [ ] Hero: full-viewport, mono `$ whoami`, then `backend engineer.` (green period) / `mountain person.` (orange period) typed out, blinking block cursor (CSS animation), chip row, bottom ridgeline, fixed top nav.
- [ ] Tests pass. Commit: `feat: hero with typewriter`

### Task 5: About + Journeys

**Files:** Create `src/components/About.jsx`, `src/components/Journeys.jsx`, Test `src/components/sections.test.jsx`.

- [ ] Failing tests: About shows story + 4 stat chips from content; Journeys renders 27 `<figure>` (one per photo), captions prefixed `#`, link to instagram.com/ankit.codes.
- [ ] About: two-column (story prose styled as comment block, stats as `--flag=value` chips). Journeys: CSS columns masonry, DuotonePhoto cards, staggered reveal.
- [ ] Tests pass. Commit: `feat: about and journeys sections`

### Task 6: Projects + Experience + Contact

**Files:** Create `src/components/{Projects,Experience,Contact}.jsx`, extend `src/components/sections.test.jsx`.

- [ ] Failing tests: 3 project TerminalCards with stack tags; experience timeline lists 4 roles with hash markers ordered newest-first; contact renders 4 links with correct hrefs (`mailto:` for email) and `rel="noopener noreferrer"`.
- [ ] Projects: grid of TerminalCards titled `~/projects/<name>`, stack tags as green pills. Experience: left border rail, `git log`-style entries (`* a3f9c21 backend-engineer @ clear.bio`), period muted, points as 2-line summaries. Contact: `$ open <service>` command lines as links.
- [ ] Tests pass. Commit: `feat: projects, experience, contact`

### Task 7: App assembly + browser verification

**Files:** Modify `src/App.jsx`, `src/main.jsx`, `index.html` (title, meta, favicon emoji ⛰️).

- [ ] App renders Hero → About → RidgelineDivider → Journeys → divider → Projects → divider → Experience → divider → Contact; smooth-scroll CSS; page `<title>Ankit Gupta — engineer · hiker</title>`.
- [ ] Full test suite green: `npx vitest run`.
- [ ] Launch dev server in Browser pane; verify: no console errors, photos load with duotone, typewriter runs, anchors scroll, mobile viewport (375px) has no horizontal scroll; screenshot for user.
- [ ] Commit: `feat: assemble single-page app`

### Task 8: Deploy to GitHub Pages

**Files:** Create `.github/workflows/deploy.yml`.

- [ ] Workflow: on push to `main` → `npm ci`, `npx vitest run`, `npm run build`, `actions/deploy-pages` (upload `dist/`). Standard official Pages workflow with `permissions: pages: write, id-token: write`.
- [ ] `gh repo create portfolio --public --source . --push` (confirm gh auth first); enable Pages via `gh api repos/{owner}/portfolio/pages -f build_type=workflow` (POST; ignore 409 if exists).
- [ ] Watch Actions run to success: `gh run watch`; verify live URL `https://<user>.github.io/portfolio/` loads in Browser pane (photos, styles, no 404 assets — base path correct).
- [ ] Commit + push everything. Report URL.

---

## Self-review

- Spec coverage: visual direction (T1/T3/T4), content.js single source (T2), six sections (T4–T7), photo fallback + noopener (T3/T6), reduced-motion (T3/T4), tests (each task), Pages deploy + base path (T1/T8). Out-of-scope items untouched. ✓
- No placeholders; component/type names consistent (`DuotonePhoto`, `TerminalCard` used in T5/T6 as defined in T3). ✓
