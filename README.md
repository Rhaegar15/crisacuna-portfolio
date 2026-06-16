# Handoff: Cristián Acuña — UX/UI Portfolio (single-page site)

## Overview
A single, long-scroll personal portfolio website for **Cristián Acuña Vicencio**, a UX/UI designer based in Santiago de Chile. It presents his intro, services, education/certifications, real project case studies, a featured design-system project, a philosophy quote, an honest stats band, and a working contact form.

- **Copy language:** Spanish (content) with English UI/section labels (nav items, eyebrows like "About · What I offer").
- **Single HTML page**, anchor-scroll navigation (`#home`, `#about`, `#work`, `#system`, `#contact`).

## About the Design Files
The files in this bundle are **design references created in HTML/CSS/vanilla JS** — a prototype showing the intended look, layout, and behavior. They are **not meant to be shipped as-is**. The task is to **recreate this design in the target codebase's environment** (React/Next, Vue, Astro, plain HTML, etc.) using its established patterns, component library, and conventions. If no environment exists yet, pick the most appropriate framework (a static-site / React setup like Next.js or Astro fits a portfolio well) and implement there.

The included `tweaks.jsx` / `tweaks-panel.jsx` files power an in-prototype "Tweaks" panel used during design review only — **do not port them**. Instead, pick the chosen variant values (see *Design Tokens → Variants*) and bake them in as the defaults.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, layout, and interactions are all defined. Recreate the UI faithfully using the target codebase's libraries/patterns. Exact values are listed below and in `styles.css`.

## Files
- `index.html` — full page markup (semantic sections, in order).
- `styles.css` — **single source of truth** for all tokens, layout, components, responsive rules, and animations. Read this first.
- `app.js` — vanilla interactions: sticky-nav state, scroll-spy active link, mobile menu, marquee duplication, scroll-reveal (IntersectionObserver), "mind" chips, CV-button placeholder, contact-form validation + success.
- `assets/` — portrait + real project screenshots (see *Assets*).
- `fonts/` — League Spartan TTFs (Regular/Medium/Bold).
- `tweaks.jsx`, `tweaks-panel.jsx` — review-only tweak panel; **not for production**.

---

## Design Tokens
All defined as CSS custom properties at `:root` in `styles.css`.

### Colors
| Token | Value | Use |
|---|---|---|
| `--ink` | `#0E0E0E` | Primary text, structure, dark surfaces (default) |
| `--ink-soft` | `#1A1A1A` | — |
| `--paper` | `#F5F4F1` | Page background |
| `--paper-2` | `#EFEDE8` | Alt section background (Work, Contact) |
| `--white` | `#FFFFFF` | Cards, inputs |
| `--muted` | `#67646C` | Secondary text |
| `--muted-2` | `#908D95` | Tertiary text, dot-grid |
| `--line` | `rgba(14,14,14,0.12)` | Borders/dividers |
| `--line-soft` | `rgba(14,14,14,0.07)` | — |
| `--navy` | `#0A3B58` | Brand accent (default `--accent`) |
| `--navy-2` | `#0C4A6E` | Darker accent (`--accent-2`) |
| `--navy-tint` | `#E7EEF3` | Light wash |
| `--violet` | `#9747FF` | Alt accent option |
| `--accent` | `var(--navy)` | **Tweakable** accent — fills, links, highlights |
| `--accent-2` | `var(--navy-2)` | **Tweakable** darker accent |
| `--dark-bg` | `var(--ink)` | **Tweakable** dark-surface color (marquee, dark cards, DS section, footer) |
| `--dark-fg` | `#FFFFFF` | Text on dark surfaces |

### Variants (chosen defaults — bake these in)
The prototype exposed these as toggles; ship the **defaults** below unless Cristián requests otherwise:
- **Hero layout:** `split` (text left, portrait right). Alt: `centered`.
- **Accent color:** `navy` (`#0A3B58`/`#0C4A6E`). Alts: teal `#0E7490`/`#155E75`, violet `#6D4AFF`/`#5B34D6`.
- **Dark surfaces:** `black` (`#0E0E0E`). Alt: `navy` (`#0A3B58`).
- **Skills marquee:** shown.

### Typography
- **Display:** `"League Spartan"` (local TTFs in `fonts/`, weights 400/500/700). Used for all headings, the wordmark, numbers, chips' year, buttons-ish display bits. Bold (700), tight line-height (~0.9–0.95), negative letter-spacing (`-0.01em` to `-0.02em`) on big headings; **wide positive tracking (`0.22em`) + UPPERCASE** on eyebrows; `0.08em` uppercase on the marquee.
- **Body/UI:** `"Inter"` (Google Fonts, weights 400/500/600/700), 16px base, line-height 1.55.
- Pairing rule: never mix — display = League Spartan, body/UI = Inter.

Key sizes (see `styles.css` for all):
- Hero name: `clamp(52px, 9vw, 120px)`, weight 700, line-height 0.86.
- Section titles: `clamp(40px, 7vw, 84px)`, weight 700, line-height ~0.92.
- Eyebrow: 13px, 700, uppercase, `letter-spacing: 0.22em`, color `--accent`, with a 28×2px accent bar before it (`.eyebrow::before`).
- Card titles (`.ocard h3`, `.pcard h3`, `.trow-title`): League Spartan 700, ~24–28px.
- Body/lead: 16–17px, `--muted`.

### Spacing & layout
- Content max-width: `--maxw: 1200px`, centered (`.wrap`).
- Page horizontal padding: `--pad: clamp(20px, 5vw, 80px)`.
- Section vertical padding: `clamp(64px, 9vw, 130px)`.
- 4-pt-ish spacing throughout; grids use `gap` (18–26px typical).

### Radius
- `--radius: 14px` (cards, inputs, chips containers), `--radius-lg: 24px` (project cards), `999px` (buttons, pills, chips, role badge, nav links/active).

### Shadows
- Card hover: `0 20px 40px rgba(14,14,14,.10)`; project card hover: `0 28px 56px rgba(14,14,14,.14)`; button hover: `0 10px 24px rgba(14,14,14,.16)`.
- Input focus ring: `0 0 0 3px color-mix(in srgb, var(--accent) 16%, transparent)` + border `--accent`.

### Motion
- Scroll-reveal: elements with `.reveal` start `opacity:0; translateY(26px)`, transition to visible over `.7s cubic-bezier(.2,.7,.2,1)`; stagger classes `.d1/.d2/.d3` add `0.08s` delay steps. Added via IntersectionObserver (`rootMargin: "0px 0px -8% 0px"`, threshold 0.08), one-shot (unobserve after reveal).
- Marquee: horizontal loop, `28s linear infinite`, pauses on hover; track is duplicated in JS for seamlessness.
- Hello badge: gentle `spinwobble` ±8°, 14s.
- Hovers: cards lift (`translateY(-6/-7px)`), project image `scale(1.04)` over 0.6s, button lift + arrow nudge.
- All motion gated by `@media (prefers-reduced-motion: reduce)` (disabled there).

---

## Screens / Views
One page, top to bottom. (Section background in parentheses.)

### 1. Sticky Nav (`header.nav`)
- Left: wordmark `cris.acuña` (League Spartan 700, 26px; the `.` is `--accent`).
- Right: links Home · About · Work · System · Contact + a `Let's talk` accent pill button.
- Sticky, `backdrop-filter: blur(10px)`, semi-transparent paper bg. On scroll >12px, gains a bottom border (`.scrolled`).
- Active link = filled ink pill (driven by scroll-spy in `app.js`).
- ≤760px: links collapse into a hamburger (`.nav-burger`) → dropdown panel (`.nav-links.open`).

### 2. Hero (`#home`, paper)
- Two-column grid `1.05fr / 0.95fr`, items aligned to bottom.
- Left: greeting "¡Hola! Soy" → name "Cristián **Acuña**" (Acuña in `--accent`) → role badge pill "Diseñador UX/UI ✦" (✦ in accent) → description → 3 check-bullets (accent circle ticks) → actions: **Hablemos** (accent button, ↗) + **Descargar CV** (ghost button).
- Right: portrait (`assets/portrait.png`) in a frame with top corners rounded `220px 220px 0 0`, `aspect-ratio 5/6`, `object-fit: cover top`. Overlapping black circular "Hola" badge (104px) bottom-left; a `✳` accent mark and a 84px radial dot-grid as decoration.
- `centered` variant: single centered column, bullets hidden, portrait capped ~360px.
- ≤900px: single column.

### 3. Skills marquee (`.marquee`, dark)
- Full-bleed dark bar, top/bottom 1px ink border. Looping uppercase League Spartan items separated by accent `✦`: UX/UI Design · Design Systems · Prototipado · UI Kits · Investigación · Accesibilidad · Motion Design · Responsive.

### 4. Contact strip (`.strip`, paper)
- Centered flex row of inline links with 17px stroke icons, separated by 1px dividers: email `acuna.cristian15@gmail.com` (mailto) · phone `+569 8808 3814` (tel:+56988083814) · `Santiago de Chile` · LinkedIn · Behance. Hover → `--accent`.

### 5. About / What I offer (`#about`, paper)
- Head: two-column. Left: eyebrow "About · What I offer", title "Lo que hago.", lead paragraph (bio). Right: a second lead paragraph, bottom-aligned.
- Cards grid (3 cols): 
  1. **Diseño UX/UI** — `.ocard.dark` (dark bg). Icon, title, copy, footer "01 — Producto".
  2. **Design Systems & UI Kits** — "02 — Sistema".
  3. **Investigación & Validación** — "03 — Proceso".
  - Each: 54px rounded accent icon tile (white icon; inverted on dark card), League Spartan title, muted copy, footer num pinned to bottom. Hover lifts + shadow.
- ≤980px: 2 cols; ≤760px: 1 col.

### 6. Formación (paper, same section flow)
- Eyebrow "Background", title "Formación."
- Timeline rows (`.trow`), grid `56px / 1fr / auto`:
  1. **Academia Desafío Latam** — "Diseño UX/UI · Santiago de Chile" — right: "Certificación / **2021**". This row is highlighted (`.hl`, dark bg).
  2. **Universidad Diego Portales** — "Diseño Gráfico" — "Título / **2012 — 2017**".
  3. **Universidad Gabriela Mistral** — "Diseño Crossmedia" — "Estudios / **2010 — 2011**".
  - Big League Spartan row number, title, muted sub; right column right-aligned label + year. Hover nudges `translateX(6px)`.
- Certifications block: label "Certificaciones" + wrap of pill chips, each `<b>name</b> · provider <span class="yr">YEAR</span>` (year in accent):
  - Ultimate Figma Masterclass · The Designership — 2024
  - UI · Coderhouse — 2024
  - Master Digital Product Design: UX Research & UI · Udemy — 2022
  - Motion Design with Figma · Udemy — 2022
  - Design & Prototype a Mobile UX (Figma) · Udemy — 2022

### 7. Proyectos / Work (`#work`, `--paper-2`)
- Centered header: eyebrow "Selected work · Case study", title "Proyectos.", lead.
- 2-col grid of 6 case-study cards (`.pcard`), each: image (`aspect-ratio 16/10`, cover top) with an absolute ink tag pill top-left, then body (title, copy, "Ver detalle ↗" link in accent). Hover lifts + image zooms.
  1. **EDF — Renewables** — tag "UX/UI · Dashboard" — `assets/edf-dashboard.png`.
  2. **BICE VIDA** — "Design System" — `assets/bice-1.png`.
  3. **Jet Sur** — "Web & App" — `assets/jetsur-1.png`.
  4. **Fazil App** — "Mobile · Checkout" — `assets/fazil-1.png`.
  5. **IACC — Diversos flujos** — "UX Flows" — `assets/iacc-2.jpg`.
  6. **Gregario App** — "App Design · Android" — `assets/gregario.png`.
- Below grid, centered note: "También: **RSK Groups** — app iOS para empresa de exportaciones, con sistema de diseño y prototipo de alta fidelidad."
- "Ver detalle" links are **placeholders** (`#`) — wire to real case-study pages/URLs when provided.
- ≤760px: 1 col.

### 8. Design System — PC Factory (`#system`, dark)
- Dark section. Intro grid: eyebrow "Proyecto destacado", title "Design System — PC Factory.", lead.
- Atomic-design step pills: 01 Fundamentos · 02 Átomos · 03 Moléculas · 04 Organismos · 05 Plantillas (numbers in accent-tinted white).
- 3-col shots grid (`.ds-shot`, white cards, `aspect-ratio 3/4` cover top) with uppercase caption bars:
  - `assets/ds-color.png` — "Color & Fundamentos"
  - `assets/ds-type.png` — "Tipografía"
  - `assets/ds-organismos.png` — "Organismos"

### 9. Philosophy quote (paper)
- Two-column (`1fr / auto`). Left: large accent `"` mark, big League Spartan quote, attribution "Cristián Acuña Vicencio / Diseñador UX/UI — Santiago de Chile". Right: portrait in an **8-point star clip-path** (`.quote-photo`, 230px), `assets/portrait.png`.
- Quote text: *"Pongo primero la empatía hacia el usuario final: entender y resolver su problemática es lo que hace que un producto realmente funcione."*
- ≤980px: stacks; photo 180px.

### 10. Stats / Highlights band (paper)
- Full-width 4-col grid with vertical dividers, top border:
  - **2010** — "En diseño desde"
  - **2021** — "Pivote a UX/UI"
  - **7** (accent) — "Proyectos destacados"
  - **5** (accent) — "Certificaciones UX/UI"
- These are honest figures derived from real content (no invented metrics). ≤760px: 2×2.

### 11. Contact (`#contact`, `--paper-2`)
- Two-column `0.85fr / 1.15fr`.
- Left: eyebrow "Get in touch", title "Hablemos **de tu próxima idea.**" (second part `--muted-2`), sub, and an info list (email / phone / location) each with a 42px white icon tile.
- Right: form (`.cform`) → success panel (`.form-success`, hidden until submit).
  - Fields: **Nombre*** + **Email*** (2-col row), **Empresa / proyecto** (optional), **"¿Qué tienes en mente?"** toggle chips (`.mind` buttons, `aria-pressed`): Diseño UX/UI · Design System · Prototipado · UI Kit · Investigación · Web Design, **Mensaje*** textarea.
  - Footer: **Enviar mensaje** accent button + note "Te respondo dentro de 24 horas."
- ≤980px: single column; ≤760px: name/email stack.

### 12. Footer (`footer.foot`, dark)
- Top row: big "¿Construimos algo juntos?" + 46px circular social icon buttons (Dribbble, LinkedIn, Instagram, Behance) — hover fills accent. Divider.
- Bottom row: wordmark `cris.acuña` · "Portafolio © 2025 · Santiago de Chile" · "Volver arriba ↑".
- Social links are **placeholders** (`#`).

---

## Interactions & Behavior (from `app.js`)
- **Sticky nav:** adds `.scrolled` (border) past 12px scroll.
- **Scroll-spy:** IntersectionObserver on the 5 sections (`rootMargin: "-45% 0px -50% 0px"`) toggles the `.active` nav pill.
- **Mobile menu:** hamburger toggles `.open`; closes on link click.
- **Marquee:** JS duplicates the track once for a seamless loop.
- **Scroll-reveal:** `.reveal` → `.in` when intersecting, one-shot.
- **Mind chips:** toggle `aria-pressed` true/false on click.
- **CV button:** placeholder — on click shows "CV disponible pronto" for ~1.9s then reverts. Replace with a real CV download/link.
- **Contact form validation (`submit`, `novalidate`):**
  - Name required (non-empty); Email must match `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`; Message ≥ 4 chars.
  - Invalid fields get `.invalid` on their wrapper (red border + visible `.err` message); first invalid field is focused.
  - `.invalid` clears on input.
  - On success: fills success name, hides form, shows `.form-success` (animated). No backend — **wire up real submission** (email service / API) in production.

## State Management
Minimal; in a component framework you'd model:
- `activeSection` (string) — for nav highlight (or use IntersectionObserver as here).
- `mobileMenuOpen` (bool).
- Form: `name`, `email`, `company`, `message` (strings), `selectedTopics` (string[] from chips), `errors` (per-field bool/string), `submitted` (bool). Real submission needs an async POST + loading/error states.
- Reveal-on-scroll: IntersectionObserver or a scroll-animation library.

## Assets
All in `assets/` — these are **real screenshots and the real portrait** extracted from Cristián's source Figma file (`Portafolio 2025.fig`). Reuse them directly (optimize/convert to WebP/AVIF + add responsive sizes for production).
| File | Used in | Notes |
|---|---|---|
| `portrait.png` | Hero, Philosophy quote | Cristián's photo (portrait, ~347×359-ish) |
| `edf-dashboard.png` | Work — EDF | Desktop dashboard screenshot |
| `bice-1.png` | Work — BICE VIDA | Tall desktop page (cover-top crops fine) |
| `jetsur-1.png` | Work — Jet Sur | Mobile mockups |
| `fazil-1.png` | Work — Fazil | Mobile checkout |
| `iacc-2.jpg` | Work — IACC | Desktop table view |
| `gregario.png` | Work — Gregario | Mobile screen |
| `ds-color.png` | DS section | Color/foundations sheet |
| `ds-type.png` | DS section | Typography sheet |
| `ds-organismos.png` | DS section | Organism (login) screen |
| (also bundled, unused on page) | — | `photo-projects.png`, `photo-ds.png`, `jetsur-2.png`, `iacc-1.jpg`, `fazil-2.png`, `bice-2.png`, `ds-plantillas.png` — extra source screenshots available if you add detail pages |

**Fonts:** League Spartan TTFs are in `fonts/` (self-host or use the variable font). Inter is loaded from Google Fonts in `index.html` (`<link>`). Icons are inline stroke SVGs (Lucide-style, `stroke-width:2`, `currentColor`) — swap for your icon library if preferred.

## Contact details (real, from source)
- Email: `acuna.cristian15@gmail.com`
- Phone: `+569 8808 3814`
- Location: Santiago de Chile

## Notes
- "Ver detalle" project links, footer social links, and the CV button are **placeholders** awaiting real URLs/files.
- Keep copy in Spanish with English UI labels (as built).
- Honor `prefers-reduced-motion`.
