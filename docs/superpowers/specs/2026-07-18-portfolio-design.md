# Personal Portfolio — Design Spec

**Date:** 2026-07-18
**Owner:** Ankit Gupta
**Status:** Approved direction: "Terminal × Trail" (option B), personal-brand-first

## Purpose

A stunning single-page personal portfolio in React that presents Ankit as a
personal brand: backend/health-AI engineer AND traveler-hiker, with equal
personality. Primary audience is anyone hitting the link from socials or
networking; recruiters are a secondary audience served by the Projects and
Experience sections.

## Visual direction — Terminal × Trail

- Dark developer aesthetic: near-black background (GitHub-dark family,
  `#0d1117` base), terminal green `#3fb950` primary accent, warm orange
  `#f78166` secondary accent.
- Typography: JetBrains Mono for labels, prompts, and accents; Inter (or
  system sans) for body text.
- SVG wireframe mountain ridgelines as section dividers.
- Photos rendered with a dark/green duotone treatment that reveals full color
  on hover.
- Scroll-triggered reveal animations (Framer Motion). All animation respects
  `prefers-reduced-motion`.

## Stack

- Vite + React 18 (JavaScript)
- Tailwind CSS for styling
- Framer Motion for animation
- Vitest + React Testing Library for tests
- GitHub Pages via GitHub Actions deploy workflow

## Architecture

Single-page scroll app. Sections are independent components rendered in order:

```
src/
  data/content.js        ← ALL site content: bio, jobs, projects, photos,
                            links. The only file to edit for content changes.
  components/
    ui/Section.jsx        ← section wrapper: heading, scroll-reveal
    ui/TerminalCard.jsx   ← bordered card styled as a terminal window
    ui/RidgelineDivider.jsx ← SVG mountain divider between sections
    ui/DuotonePhoto.jsx   ← duotone → color-on-hover image
    Hero.jsx
    About.jsx
    Journeys.jsx
    Projects.jsx
    Experience.jsx
    Contact.jsx
  App.jsx                 ← nav + section order
public/insta/             ← 27 photos fetched from @ankit.codes + manifest
```

Each component reads only from `content.js` props/imports — no hardcoded
content in JSX. Unit boundary: a section can be understood, tested, and
restyled without touching any other section.

## Sections

1. **Hero** — `$ whoami` typewriter → "backend engineer. mountain person."
   with blinking cursor; tagline chips (`python · llms · fastapi · ladakh ·
   alps`); ridgeline silhouette at the bottom; nav links (work, trails,
   stack, contact).
2. **About** — short personal story (Amsterdam-based, builds health-AI
   systems by day, walks mountains on weekends) + stat chips: countries
   visited, highest trek (12,000 ft — Chandrashila), 3× hackathon winner,
   Dutch A2.
3. **Journeys** — masonry grid of the 27 Instagram photos with captions as
   terminal comments (`# 📍Oslo, Norway`); footer link to @ankit.codes.
   Photo list and captions come from `public/insta/manifest.json` data folded
   into `content.js`.
4. **Projects** — cards styled like git repos for: Careerboat (job-data
   platform), Clinical LLM Extraction Pipeline (Clear.bio), Hireup
   (recruitment SaaS). Stack tags, one-line description, links where public.
5. **Experience** — vertical timeline styled like `git log`: Clear.bio
   (2022–present), Appventurez (2022), Yokoso internship (2021), The Hobnob
   internship (2020). Commit-hash-style markers, role + 2-line summary each.
6. **Contact** — terminal-command styled links: email, LinkedIn, GitHub,
   Instagram.

## Content sources

- Resume (Ankit_Gupta_Resume.pdf) for roles, projects, skills, achievements.
- 27 photos + captions already downloaded from public Instagram grid
  (@ankit.codes) into `assets/insta/` (moved to `public/insta/` at scaffold
  time).
- Nothing else external at runtime — site is fully static, no API calls.

## Error handling

- Missing/broken photo → card renders with caption on a gradient placeholder
  (no broken-image icon).
- All external links `rel="noopener noreferrer"`, open in new tab.
- No runtime data fetching → no loading/error states beyond images.

## Testing

- Vitest + RTL: each section renders from `content.js` fixtures; nav anchors
  resolve to section ids; photo grid renders one card per manifest entry;
  reduced-motion disables animation wrappers.
- Build check in CI before deploy.

## Deployment

- GitHub Actions workflow: on push to `main`, build with Vite and publish to
  GitHub Pages.
- `vite.config.js` `base` set from the repo name; if the repo is named
  `<username>.github.io`, base stays `/`.

## Out of scope

- Blog/journal section (explicitly declined).
- CMS or Instagram live-sync — photos are static files; refreshing them is a
  manual re-fetch.
- Dark/light toggle — the site is dark by design.
