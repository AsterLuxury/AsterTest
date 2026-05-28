---
name: ui-ux-pro-max
description: "UI/UX design intelligence for web and mobile. 67 styles, 161 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 16 stacks (React, Next.js, Vue, Svelte, Astro, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui, Nuxt, Jetpack Compose, Three.js, Angular, Laravel, HTML+Tailwind). Use for: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, or check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, mobile app. Elements: button, modal, navbar, sidebar, card, table, form, chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, flat design. Topics: color systems, accessibility, animation, layout, typography, font pairing, spacing, interaction states, shadow, gradient."
version: "2.5.0"
license: MIT
source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
---

# UI/UX Pro Max — Design Intelligence

Comprehensive, searchable design knowledge base for web and mobile UI work.

## When to Use This Skill

Apply when the task involves **UI structure, visual design decisions, interaction patterns, or user experience quality control**.

### Must Use

- Designing new pages (landing, dashboard, admin, SaaS, mobile)
- Creating or refactoring UI components (buttons, modals, forms, tables, charts)
- Choosing color schemes, typography systems, spacing scales, or layout patterns
- Reviewing UI for accessibility, usability, or visual consistency
- Implementing navigation, animations, or responsive behavior
- Improving perceived quality or polish of an interface

### Recommended

- The UI looks "off" but the reason isn't clear
- Receiving usability or experience feedback
- Pre-launch UI quality optimization
- Aligning cross-platform design (Web / iOS / Android)
- Building design systems or reusable component libraries

### Skip

- Pure backend logic, API/database design, infrastructure, or non-visual scripts
- Performance optimization unrelated to the interface

**Decision rule:** If the task changes how something **looks, feels, moves, or is interacted with**, use this skill.

---

## Prerequisites

Python 3.x — no external dependencies. Verify with:

```bash
python3 --version || python --version
```

---

## How to Use

The skill is driven by a single Python search script that queries CSV-backed knowledge bases.

### Step 1 — Generate a Design System (start here for new pages/projects)

Always start with `--design-system` for full recommendations with reasoning:

```bash
python3 .kiro/steering/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system -p "Project Name"
```

This returns: pattern, style, colors, typography, key effects, anti-patterns, and a pre-delivery checklist.

**Example for the current project:**
```bash
python3 .kiro/steering/ui-ux-pro-max/scripts/search.py "luxury jewelry boutique elegant" --design-system -p "Aster Luxury"
```

Add `--persist` to save the system to `design-system/MASTER.md` for hierarchical retrieval across sessions. Add `--page "checkout"` to also create a page-specific override at `design-system/pages/checkout.md`.

### Step 2 — Domain Search (when you need a specific dimension)

```bash
python3 .kiro/steering/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

| Domain | Use For |
|--------|---------|
| `product` | Product type recommendations (SaaS, e-commerce, portfolio, etc.) |
| `style` | UI styles + AI prompts + CSS keywords (glassmorphism, minimalism, brutalism) |
| `typography` | Font pairings with Google Fonts imports |
| `color` | Color palettes by product type |
| `landing` | Page structure and CTA strategies |
| `chart` | Chart types and library recommendations |
| `ux` | Best practices and anti-patterns |
| `react` | React/Next.js performance patterns |
| `web` | iOS/Android/RN app interface guidelines |
| `icons` | Curated icon recommendations (Phosphor, Heroicons) |
| `google-fonts` | Searchable Google Fonts catalog |

### Step 3 — Stack-Specific Guidance

```bash
python3 .kiro/steering/ui-ux-pro-max/scripts/search.py "<keyword>" --stack <stack>
```

Available stacks: `html-tailwind` (default), `react`, `nextjs`, `vue`, `svelte`, `astro`, `nuxtjs`, `nuxt-ui`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`, `threejs`, `angular`, `laravel`.

### Output formats

```bash
# ASCII box (default) — best for terminal display
python3 .kiro/steering/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system

# Markdown — best for embedding in design docs
python3 .kiro/steering/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system -f markdown
```

---

## Priority-Ordered Rule Categories

Apply rules from priority 1 downward. Use `--domain <Domain>` to query details when needed.

| Priority | Category | Impact | Domain | Must Have | Avoid |
|---|---|---|---|---|---|
| 1 | Accessibility | CRITICAL | `ux` | Contrast 4.5:1, alt text, keyboard nav, aria-labels | Removing focus rings, icon-only buttons without labels |
| 2 | Touch & Interaction | CRITICAL | `ux` | Min 44×44pt targets, 8px+ spacing, loading feedback | Hover-only interactions, 0ms state changes |
| 3 | Performance | HIGH | `ux` | WebP/AVIF, lazy loading, reserve space (CLS < 0.1) | Layout thrashing, CLS |
| 4 | Style Selection | HIGH | `style`, `product` | Match product type, consistency, SVG icons | Mixing flat/skeuomorphic at random, emoji as icons |
| 5 | Layout & Responsive | HIGH | `ux` | Mobile-first breakpoints, viewport meta, no horizontal scroll | Fixed-px container widths, disabling zoom |
| 6 | Typography & Color | MEDIUM | `typography`, `color` | Base 16px, line-height 1.5, semantic color tokens | Body text < 12px, gray-on-gray, raw hex in components |
| 7 | Animation | MEDIUM | `ux` | 150–300ms duration, motion conveys meaning, spatial continuity | Decorative-only animation, animating width/height, ignoring reduced-motion |
| 8 | Forms & Feedback | MEDIUM | `ux` | Visible labels, error near field, helper text, progressive disclosure | Placeholder-only labels, errors only at top, upfront overwhelm |
| 9 | Navigation Patterns | HIGH | `ux` | Predictable back, bottom nav ≤5, deep linking | Overloaded nav, broken back behavior, no deep links |
| 10 | Charts & Data | LOW | `chart` | Legends, tooltips, accessible colors | Color-only meaning, pie charts for >5 categories |

---

## Common UI Quality Rules (Quick Reference)

These are the most frequently overlooked items that make UI look unprofessional:

### Icons & Visual Elements

- **Default icon library:** Phosphor (`@phosphor-icons/react`). Heroicons (`@heroicons/react`) as fallback. Keep one family per project.
- **Never use emojis** as structural/navigation icons — they're font-dependent and inconsistent across platforms.
- **Vector-only assets** (SVG) so they scale and theme cleanly.
- **Consistent stroke width** within the same visual layer (1.5 or 2px, not mixed).
- **One icon style per hierarchy level** — don't mix filled and outline at the same level.
- **Touch target ≥44×44pt** (use `hitSlop` if the icon itself is smaller).
- **Icon contrast** meets WCAG 4.5:1 for small glyphs, 3:1 minimum for larger UI icons.

### Interaction

- Tap feedback within 80–150ms (ripple/opacity/elevation), no layout shift on press.
- Micro-interaction timing: 150–300ms with platform-native easing.
- Disabled state: reduced emphasis + semantic disabled attribute, no tap action.
- One primary gesture per region; no nested tap/drag conflicts.

### Light/Dark Mode

- Primary text contrast ≥4.5:1, secondary ≥3:1, **in both modes** — not inferred from one.
- Borders/dividers and interaction states distinguishable in both modes.
- Modal scrim 40–60% black so foreground stays legible.
- Drive theming with **semantic tokens**, never per-screen hex values.

### Layout

- Respect safe areas (notch, Dynamic Island, gesture bar) for fixed headers/CTAs.
- 4/8dp spacing rhythm at component, section, and page levels.
- Add bottom/top content insets so scrolled content isn't hidden behind sticky bars.
- Test on 375px (small phone), large phone, tablet, both orientations.

---

## Pre-Delivery Checklist

### Visual Quality
- [ ] No emojis used as icons (SVG only)
- [ ] All icons from one consistent family/style
- [ ] Brand assets used with correct proportions and clear space
- [ ] Pressed states don't shift layout
- [ ] Semantic theme tokens used (no ad-hoc hardcoded colors)

### Interaction
- [ ] Clear pressed feedback on every tappable element
- [ ] Touch targets ≥44×44pt (iOS) / 48×48dp (Android)
- [ ] Micro-interactions 150–300ms with native-feeling easing
- [ ] Disabled states visually clear and non-interactive
- [ ] Screen reader focus order matches visual order; labels are descriptive

### Light/Dark Mode
- [ ] Primary text contrast ≥4.5:1 in both modes
- [ ] Secondary text contrast ≥3:1 in both modes
- [ ] Borders, dividers, and interaction states visible in both modes
- [ ] Modal scrim 40–60% opacity
- [ ] Both themes tested before delivery

### Layout
- [ ] Safe areas respected (header, tab bar, bottom CTA)
- [ ] Scroll content not hidden behind fixed bars
- [ ] Verified on small phone, large phone, tablet (portrait + landscape)
- [ ] Adaptive horizontal gutters by device size
- [ ] 4/8dp spacing rhythm maintained
- [ ] Long-form text remains readable on tablets (no edge-to-edge paragraphs)

### Accessibility
- [ ] All meaningful images/icons have accessibility labels
- [ ] Form fields have labels, hints, and clear error messages
- [ ] Color isn't the only indicator of meaning
- [ ] Reduced motion and Dynamic Type are supported without layout breakage
- [ ] Roles/states (selected, disabled, expanded) announced correctly

---

## Tips for Better Queries

- Use **multi-dimensional keywords**: combine product + industry + tone + density (e.g., `"entertainment social vibrant content-dense"` not just `"app"`).
- Try keyword variations if the first result feels off: `"playful neon"` → `"vibrant dark"` → `"content-first minimal"`.
- Use `--design-system` first for full recommendations, then `--domain` to deep-dive.
- Always specify `--stack` for implementation details.

---

## Scope Notice

The interaction/layout sections above are tuned primarily for **app UI** (iOS, Android, React Native, Flutter). Many rules apply to web too, but desktop-web specifics (cursors, hover patterns) live in the `web` and `ux` domain searches.
