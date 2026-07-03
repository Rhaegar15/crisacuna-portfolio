# Personal DS — Design System

A small, focused design system reconstructed from the **Personal DS** Figma file. The source covers a single surface — a **button library** — but it ships a complete token set (colors, type, shadows, radii, spacing) that scales to any UI.

## Source

- **Figma file**: `Personal DS.fig` (mounted as a virtual filesystem). 2 pages — `Cover` and `DS` — and 87 button component variants. No image assets, no icon set, no logos beyond the wordmark.
- **Fonts**: `League Spartan` (provided as `uploads/League_Spartan.zip`) + `Inter` (Google Fonts).
- No codebase, no marketing site, no slide deck were attached. The system is button-only.

## Index

| File / folder | Purpose |
|---|---|
| `colors_and_type.css` | Single-source token file: colors, type, shadows, radii, spacing — base + semantic. |
| `fonts/` | League Spartan TTFs (variable + Regular/Medium/Bold) + OFL license. |
| `ui_kits/buttons/` | The button UI kit (`Button.jsx`, `Icons.jsx`, `index.html`, `README.md`). |
| `preview/` | Small specimen cards rendered in the Design System tab. |
| `SKILL.md` | Skill manifest for use in Claude Code or as a sub-skill. |

## CONTENT FUNDAMENTALS

The Figma source has only one piece of copy: the wordmark **"Personal DS"** and the button label **"Button CTA"**. Tone is therefore inferred from form, not voice.

- **Casing**: display elements are UPPERCASE with wide tracking (≥0.06em). UI labels (button text, body) are sentence case.
- **Voice**: imperative, terse — "Button CTA" suggests CTAs read as 1–3 words, action-first ("New project", "Read more", "Continue"). Avoid hedged or chatty copy.
- **Person**: not established. Default to **second person** ("Save your work") and avoid "I/we" since the brand presents as utility-first.
- **Emoji**: not used. Don't introduce them.
- **Punctuation**: no terminal punctuation on buttons or short labels. Sentences in body paragraphs end with periods.
- **Vibe**: editorial-utilitarian. The wide-tracked display type and dashed-violet section frames give it the feel of a **technical drawing** or **architect's spec sheet**, not a marketing site.

Examples that fit the vibe: `New project`, `Save draft`, `Approve`, `Continue`, `Take a tour`, `Section header`. Examples that don't: `Let's go! 🚀`, `Click here to learn more`.

## VISUAL FOUNDATIONS

### Colors
- **Brand** is a single deep teal-navy: `rgb(10, 59, 88)` (`--brand-900`). 37 instances in the source — the most-used non-shadow color.
- **Indigo** is the secondary accent (`--indigo-50` through `--indigo-700`) — used for secondary button fills, focus rings, and subtle text contrast.
- **Neutrals** stay close to gray-cool (Tailwind-ish gray ramp). White and `neutral-50` are the primary surfaces.
- **Accent violet** `rgb(151, 71, 255)` shows up exactly twice in the file — both as **dashed strokes around section groupings**. It is a *structural / annotation* color, not a fill color. Treat it as a documentation device.
- **Imagery**: none in source. The brand reads cool, never warm. If introducing photography, prefer cool-balanced, slightly desaturated stock.

### Typography
- **Display**: `League Spartan` Medium 500. The hero treatment is **200px / 100% / 0.12em tracking** in white on black. All display use is uppercase.
- **Body / UI**: `Inter` Medium (500). Sizes lock to **16 / 14 / 12** with leading 18 / 16 / 14 — no other body sizes appear. Weight 500 is the only weight used in UI.
- **Pairing rule**: Display = League Spartan UPPERCASE wide-tracked; UI = Inter sentence-case. Never mix.

### Backgrounds
- Default surface: pure white (`neutral-0`).
- Inverse surface: pure black (`neutral-1000`) — used on the cover frame for the wordmark.
- Subtle wash: `indigo-50` for secondary button fills and section accents.
- **No gradients, no patterns, no full-bleed photography, no textures.** The system is flat.

### Borders & dividers
- Hairline borders are 1px solid in `neutral-400` (tertiary buttons), `brand-900` (outlined), or `indigo-100` (secondary).
- **Dashed violet** at radius 5 wraps section groupings — this is the system's signature annotation device. Don't use it as a real UI border; use it to mark documentation regions.

### Shadows
Two-tier elevation system, both very soft:
- `--shadow-xs` = `0 1px 2px rgba(16,24,40,0.04)` ×2 — applied to medium / small buttons.
- `--shadow-sm` = `0 2px 6px rgba(16,24,40,0.06)` — applied to large buttons and cards.
- `--shadow-focus` = `0 0 0 2px rgba(224,231,255,0.8)` — focus ring, never combined with another shadow.

No inner shadows, no glows, no colored shadows.

### Radii & corners
- `8px` is the default for buttons and cards (`--radius-md`).
- `5px` for the dashed-violet documentation frames.
- `4px` for small inline elements (code chips).
- Pill is reserved for tags / counters — not present in source but defined for forward use.

### Animation
- The Figma source contains no motion specs.
- Suggested defaults: **120ms ease** on hover/active state transitions for buttons; nothing more elaborate. The brand reads quiet — avoid bounces, springs, or long ease curves.

### Hover / press / focus states (from source)
- **Hover**: lighten the fill toward `--brand-500` (mid-teal). For secondary, step indigo up by one level.
- **Pressed**: same fill as hover, but with a darker `--brand-600` border and slightly desaturated text (`indigo-200`).
- **Focus**: replace the border with a transparent stroke and apply `--shadow-focus` (light indigo halo).
- **Disabled**: muted brand fill (`brand-300`) with `indigo-100` text — low contrast on purpose.

### Layout rules
- The button library uses **fixed widths** (Large = 184, Medium = 161, Small = 134) inside the Figma frames; in the kit these flex to content.
- Padding scale on buttons: `14×20` (large), `10×16` (medium), `8×12` (small). Icon gaps: `8 / 6 / 6`.
- Default page padding seen on cover frame: ~80px horizontal, ~100px vertical on a 1440 canvas.
- No grid system specified. Use a 4-pt spacing scale (`--space-1…20`).

### Transparency / blur
- Used only twice: shadow alpha (`0.04`–`0.06`) and the focus ring alpha (`0.8`). No backdrop-filter or glass effects in source.

### Cards
- Source cards = white, 1px subtle border, `--shadow-sm`, `8–16px` radius, generous (24–32px) inner padding. Build cards by composing those properties — there's no dedicated card component.

## ICONOGRAPHY

The Figma source has **no icon assets**. Every icon slot in the buttons is filled by a placeholder symbol (`Media / Icon/Unfilled/placeholder`, instanced 150 times — a circle outline standing in for "your icon goes here").

**Substitution flagged**: this kit ships a small **Lucide-style** stroke icon set (`ui_kits/buttons/Icons.jsx`) sized for the 20px / 16px slots. Stroke = `currentColor` so they inherit text color from the button automatically. If a real icon set lands later, drop in any 24×24 stroke-2 SVG and it will work without changes.

- **Format**: inline SVG, stroke-based, `stroke-width: 2`, rounded line caps/joins.
- **Sizes**: `20×20` for large/medium buttons; `16×16` for small buttons.
- **Color**: never hard-coded — always `currentColor`.
- **Emoji**: not used.
- **Unicode glyphs**: not used.
- **PNG icons**: not used.

If you need more icons than the kit ships, link [Lucide](https://lucide.dev) from CDN — it matches the visual weight of the substitute set.

## Caveats

- Single-surface system. There's no homepage, no docs UI, no app shell — **just buttons**. Other components (inputs, menus, modals, navigation) are out of scope until source materials arrive.
- Iconography is a **substitution** — the source has none. Replace with the real set when available.
- Inter is loaded from Google Fonts (no local copy in the upload). League Spartan is local.
- "Personal DS" reads as an in-progress *personal* design system, not a product brand. Some semantic tokens (`--bg-inverse`, `--state-disabled-fg`) were derived by name rather than mined from source.
