# Portfolio web design system

做好了吗: No

> Source of truth: [https://fabric.so](https://fabric.so/features/notes-and-docs) (Features page — "Notes and documents")
> 

## 0. Goals & Non-Goals

### Goals

- Adapt the [fabric.so](http://fabric.so) editorial / minimal aesthetic for a **Paper portfolio case study** (not a marketing landing page)
- Establish a Paper-first typography system:
    - **H1 + H2:** Red Hat Display
    - **Body + UI:** Inter
    - **Card titles (H3-level):** Inter
- Keep Fabric-like surface/card discipline: white page background, neutral-50 surfaces, no decorative borders, minimal shadows
- Update the accent system for Paper:
    - Primary accent: **Paper Blue #2172AB**
    - Secondary brand accent (sparingly): **#EA7B48**
    - Keep the existing `color.accent.bg` approach from the original doc (low-opacity accent surface)
- Improve readability for portfolio narrative flow by tightening section rhythm (reduce the overly marketing-style large gaps)
- Support only portfolio-relevant patterns (e.g. feature/story sections, demo CTA). Avoid marketing-only blocks

### Non-Goals

- Pixel-perfect cloning of Fabric typography (this doc is reference-inspired, not a copy)
- Dark mode support (initially light-only)
- Complex animation/parallax (only subtle reveals if needed)
- Form-heavy or SEO-first layouts
- Multi-brand theming

---

## 1. Design Principles (Executable)

1. **Portfolio-first, marketing-second.** Default to clarity, evidence, and narrative continuity. Avoid conversion-driven patterns unless justified (e.g. Demo CTA).
2. **Display for structure, sans for reading.** H1/H2 use **Red Hat Display**. Body/UI use **Inter**.
3. **One typeface for cards.** Card/feature titles use **Inter** (consistent with body, higher weight for hierarchy).
4. **White page, neutral surfaces.** Page background is always #FFFFFF. Surfaces (cards/panels) use #FAFAFA. No decorative background blocks.
5. **Accent is functional.** Paper Blue is the default interactive/highlight color. Orange is reserved for rare emphasis (e.g. outcomes). Do not introduce additional brand colors.
6. **Tighter vertical rhythm.** Keep 40px heading-to-content gap. Reduce section-to-section spacing from the Fabric reference so readers keep context.
7. **Radius consistency.** Outer containers 24px. Inner media/images 16px. Buttons/small elements 8px. Icon thumbnails 12px.
8. **No decorative borders.** Borders are used only as section dividers (1px #EDEDED) between major zones, never on cards.
9. **Text hierarchy is strict.** Primary: #0A0A0A. Secondary: #666666. Tertiary: rgba(0,0,0,0.6). Avoid disabled/FAQ-specific colors in core rules.

---

## 2. Tokens (Core)

### 2.1 Color Tokens

| Token | Hex | Usage | Notes |
| --- | --- | --- | --- |
| color.brand.primary | #0A0A0A | Primary buttons, logo fill, strong text | Near-black, not pure black |
| color.brand.secondary | #0A0A0A | Same as primary | Single brand identity |
| color.accent | #2172AB | Links, highlights, focus, pills | Paper Blue |
| [color.accent.bg](http://color.accent.bg) | rgba(33,114,171,0.1) | Pill / subtle highlight background | Keep original token approach: 10% opacity of accent |
| [color.link](http://color.link) | #2172AB | In-text links | Align links with Paper Blue |
| color.text.primary | #0A0A0A | Headings, primary body | neutral-950 equivalent |
| color.text.secondary | #666666 | Card body text, supporting copy |  |
| color.text.tertiary | rgba(0,0,0,0.6) | Testimonial text, muted descriptions |  |
| color.text.disabled | #9BA1A5 | FAQ answers, placeholder |  |
| color.text.onDark | #FFFFFF | Text on dark buttons |  |
| [color.bg.page](http://color.bg.page) | #FFFFFF | Page background |  |
| color.bg.surface | #FAFAFA | Cards, panels (neutral-50) | Tailwind neutral-50 |
| color.bg.surface.alt | rgba(242,242,245,0.5) | Feature grid cards (Component_2) | Slightly cooler gray |
| color.bg.elevated | #FFFFFF | Cards with media insets | White inset on neutral surface |
| color.bg.button.secondary | rgba(229,229,229,0.2) | Ghost/secondary button bg | "Log in" button |
| [color.bg](http://color.bg).button.primary | #0A0A0A | Primary CTA button |  |
| [color.bg](http://color.bg).cta.accent | rgba(33,114,171,0.08) | Optional demo CTA panel background | Soft Paper Blue surface (avoid loud marketing blocks) |
| color.border.default | #EDEDED | Section dividers | rgb(237,237,237) |
| color.border.muted | rgba(0,0,0,0.1) | Footer sub-dividers |  |
| color.divider | #EDEDED | Horizontal rules between sections | Same as border.default |
| color.state.success | #22C55E | (Reserved) | Not observed on [fabric.so](http://fabric.so/) |
| color.state.warning | #F59E0B | (Reserved) | Not observed |
| color.state.error | #EF4444 | (Reserved) | Not observed |
| color.focus.ring | #2172AB | Focus ring derives from accent | 2px offset, Paper Blue |
| [color.brand.orange](http://color.brand.orange) | #EA7B48 | Rare emphasis (outcomes), optional CTA detail | Use sparingly |

**Contrast rules:**

- color.text.primary (#0A0A0A) on color.bg.page (#FFFFFF) = 19.3:1 ✓ WCAG AAA
- color.text.secondary (#666666) on color.bg.page (#FFFFFF) = 5.7:1 ✓ WCAG AA
- color.text.onDark (#FFFFFF) on color.bg.button.primary (#0A0A0A) = 19.3:1 ✓ WCAG AAA
- color.accent (#2172AB) on [color.accent.bg](http://color.accent.bg) (rgba(33,114,171,0.1)) should meet WCAG AA for normal text (verify in implementation)

### 2.2 Typography Tokens

### Font Families

| Token | Value | Fallback Stack |
| --- | --- | --- |
| [font.family](http://font.family).display | Red Hat Display | "Red Hat Display", system-ui, sans-serif |
| [font.family](http://font.family).body | Inter | "Inter", system-ui, sans-serif |
| [font.family](http://font.family).cardTitle | Inter | "Inter", system-ui, sans-serif |
| [font.family](http://font.family).mono | — | (Optional) Use a mono font only when needed for code snippets |

### Type Scale

| Token | Font Family | Size (px) | Line Height (px) | Weight | Letter Spacing | Usage |
| --- | --- | --- | --- | --- | --- | --- |
| type.display | Red Hat Display | 74 | 80 | 400 | -1.2px | Hero H1 |
| type.h1 | Red Hat Display | 74 | 80 | 400 | -1.2px | Same as display |
| type.h2 | Red Hat Display | 52 | 56 | 400 | -0.8px | Section headings |
| type.h3 | Inter | 18 | 25 | 600 | 0 | Card / feature titles |
| type.h4 | Inter | 18 | 27 | 600 | -0.27px | Footer section headers |
| type.h5 | Inter | 16.5 | 19.8 | 600 | 0.165px | Feature card titles (grid) |
| type.body.l | Inter | 24.5 | 31.85 | 500 | 0 | Testimonial/quote text |
| type.body.m | Inter | 18 | 27 | 500 | -0.18px | Hero subtitle, card body |
| type.body.s | Inter | 14.5 | 21 | 500 | 0 | Small descriptions in grid cards |
| type.body.xs | Inter | 15 | 22.5 | 400 | -0.15px | FAQ answer text |
| type.caption | Inter | 16 | 22.4 | 400 | 0 | Footer links |
| type.nav | Inter | 16 | 32 | 500 | -0.16px | Navigation items |
| type.button | Inter | 16 | 19.2 | 500 | -0.16px | Button text (small) |
| type.button.lg | Inter | 18 | 21.6 | 500 | -0.18px | Large CTA button text |
| type.pill | Inter | 18 | 27 | 500 | 0 | Pill badge labels |

**Rules:**

- Red Hat Display is ONLY for H1 and H2.
- Inter handles everything else: body, nav, buttons, captions, links, card titles.
- Maximum line length for body text: 455px (good reading width for portfolio narrative).
- Headings use sentence case by default (portfolio tone), unless a section has a specific naming convention.

### 2.3 Spacing Tokens

| Token | px | Usage Examples |
| --- | --- | --- |
| space.0 | 0 | Reset |
| space.0.5 | 2 | Icon grid gaps, tight inline gaps |
| space.1 | 4 | Icon-to-text micro gap, footer icon gaps |
| space.2 | 8 | FAQ item internal gap |
| space.2.5 | 10 | Button padding, generic inline gap |
| space.3 | 12 | Card outer padding, image-text card padding |
| space.4 | 16 | Icon thumbnail padding, general padding |
| space.5 | 20 | Content side padding (mobile), nav item gap |
| space.6 | 24 | Card inner content padding, FAQ content padding, grid card padding |
| space.7 | 28 | — |
| space.8 | 32 | Grid gutters (card-to-card in grid layouts) |
| space.10 | 40 | Section heading-to-content gap |
| space.12 | 48 | Footer column vertical gap |
| space.14 | 56 | Footer grid gutter |
| space.16 | 64 | — |
| space.20 | 80 | Footer top padding, section block padding |
| space.24 | 96 | — |
| space.section.y | 240 | Vertical gap between major content sections |
| space.section.gap | 40 | Heading to first content block within a section |
| space.container.padding | 20 | Side padding of content area (px-5) |
| space.container.padding.lg | 100 | Side padding inside bordered sections (Component_2, _4) |
| space.hero.gap | 50 | Hero internal element spacing |
| space.cta.section.y | 200 | CTA section vertical padding |

### 2.4 Radius, Border, Shadow Tokens

### Radius

| Token | px | Usage |
| --- | --- | --- |
| [radius.sm](http://radius.sm/) | 8 | Buttons, FAQ items, small interactive elements |
| [radius.md](http://radius.md/) | 12 | Icon thumbnails (48×48) |
| radius.lg | 16 | Inner media containers, grid feature cards |
| radius.xl | 24 | Outer card containers, main feature cards |
| radius.full | 100px / 9999px | FAQ toggle button (circle) |
| radius.pill | 20 | Pill badges |

### Border

| Token | Value |
| --- | --- |
| border.width.default | 1px |
| border.color.default | #EDEDED (color.border.default) |
| border.style | solid |

**Rules:**

- Cards do NOT have borders. They rely on background color contrast (neutral-50 on white).
- Borders appear ONLY as horizontal section dividers (top or bottom of full-width sections).
- The bordered section pattern: 1px top, 1px left, 1px right on a max-w-1200 inner container.

### Shadow

| Token | CSS Value | Usage |
| --- | --- | --- |
| shadow.none | none | Default for most elements |
| [shadow.sm](http://shadow.sm/) | rgba(0,0,0,0.1) 0px 1px 1px 0px, rgba(0,0,0,0.05) 0px 2px 4px 0px | Primary CTA buttons |
| [shadow.md](http://shadow.md/) | — | Not observed |
| shadow.lg | — | Not observed |

**Note:** Fabric uses almost no shadows. The button shadow is extremely subtle. Elevation is communicated through background color layering, not shadow.

### 2.5 Grid & Layout Tokens

| Token | Value | Notes |
| --- | --- | --- |
| layout.page.maxWidth | 1100px | Main content container (Component_1) |
| layout.page.maxWidth.wide | 1200px | Bordered sections (Component_2, _4) |
| layout.page.maxWidth.full | 1280px (max-w-screen-xl) | Footer outer container |
| layout.page.sidePadding | 20px | px-5 on main content |
| layout.grid.columns.3 | 3 | Feature grid, use-case grid |
| layout.grid.columns.4 | 4 | Footer link columns |
| layout.grid.gutter | 32px | gap-8 between grid items |
| layout.grid.gutter.lg | 34px | Feature grid in Component_2 |
| layout.grid.gutter.footer | 56px | gap-14 in footer grid |
| layout.grid.rowGap | 32px | Same as column gap in most grids |
| layout.section.maxWidth | 1000px | Content sections within Component_1 |
| layout.readingWidth | 455px | Maximum width for body text blocks (hero subtitle) |
| layout.card.splitWidth | 493px | Image panel width in split cards |
| layout.card.splitHeight | 493px | Image panel height in split cards |
| layout.card.textWidth | 280px | Text panel width in split cards |
| layout.hero.imageWidth | 1000px | Hero screenshot width |
| layout.nav.height | 56px | Inner nav bar height (h-14) |
| layout.nav.outerHeight | 71px | Full fixed nav container height |

---

## 3. Iconography

| Property | Value | Notes |
| --- | --- | --- |
| icon.style | Mixed: product icons are raster images, UI icons are inline SVG | Fabric uses 48×48 raster icons for features, SVG for logos/decoration |
| icon.thumbnailSize | 48px × 48px | Feature/use-case card icon |
| icon.thumbnailRadius | 12px ([radius.md](http://radius.md/)) | Rounded square |
| icon.logoWidth | 112px (w-28) | Navbar logo |
| icon.color.default | #000000 (fill-black) | SVG icons default to black fill |
| icon.alignment | Start-aligned within card | Icons sit at top-left of card content |

**FAQ toggle icon:**

- 28px × 28px button container, fully circular (radius.full)
- Two 2px × 12px bars forming a + shape, colored #FF7700 (color.icon.toggle)
- Transparent background on the button

**Social icons:**

- 24px × 24px, SVG-based, black fill

---

## 4. Components (Key)

### 4.1 Card

**Anatomy:** container → (icon optional) → title (H3) → body → (media optional)

**Specs:**

| Property | Token/Value |
| --- | --- |
| background | [color.bg](http://color.bg).surface (#FAFAFA) |
| border | none |
| radius (outer) | radius.xl (24px) |
| shadow | shadow.none |
| padding (split card) | space.3 (12px) |
| padding (content-only card) | space.6 (24px) |
| title font | type.h3 (Inter 18px/25px, weight 600) |
| title color | color.text.primary (#0A0A0A) |
| body font | type.body.m (Inter 18px/27px, weight 500) |
| body color | color.text.secondary (#666666) |
| icon size | 48px × 48px |
| icon radius | [radius.md](http://radius.md) (12px) |
| internal gap (icon → title) | space.3 (12px) |
| internal gap (title → body) | space.2 (8px) |

**Variants (portfolio-appropriate):**

| Variant | Description |
| --- | --- |
| card.split | Two-column: large media + text panel. Alternates image-left / image-right. Good for feature deep-dives. |
| card.contentOnly | Text-only card for "Key decisions", "Constraints", "Impact" blocks. (Not testimonials.) |
| card.gridSmall | 3-up grid cards for bite-sized system capabilities (avoid generic marketing claims). |
| card.gridCompact | Smaller grid cards for components / interaction patterns. |
| card.featureLink | A clickable card for links (Demo / Figma / GitHub / Press). |

**Do/Don't:**

- ✅ Do keep cards borderless and low-shadow
- ✅ Do treat cards as evidence containers (screenshots, specs, decision records)
- ❌ Don’t use testimonial-style quotes as social proof

### 4.2 Button

**Variants:**

| Variant | Background | Text Color | Border | Shadow | Radius |
| --- | --- | --- | --- | --- | --- |
| primary | [color.bg](http://color.bg).button.primary (#0A0A0A) | color.text.onDark (#FFFFFF) | none | [shadow.sm](http://shadow.sm) | 8px |
| secondary (ghost) | [color.bg](http://color.bg).button.secondary (rgba(229,229,229,0.2)) | color.text.primary (#0A0A0A) | none | none | 8px |
| link | transparent | [color.link](http://color.link) (#2172AB) | none | none | — |

**States:**

- Focus ring uses color.focus.ring (#2172AB), 2px, offset 2px.

### 4.3 Link

| Property | Value |
| --- | --- |
| color.default | [color.link](http://color.link) (#2172AB) |
| text-decoration.default | none |
| text-decoration.hover | underline |

### 4.4 Tag / Badge (Pill)

| Property | Value |
| --- | --- |
| background | [color.accent.bg](http://color.accent.bg) (rgba(33,114,171,0.1)) |
| text color | color.accent (#2172AB) |
| font | type.pill (Inter 18px, weight 500) |
| radius | radius.pill (20px) |

### 4.5 Divider

- Use `color.divider` (#EDEDED) as a section boundary.
- Avoid internal dividers inside cards.

---

## 5. Page Patterns

### Pattern: Hero (Portfolio Case)

**Purpose:** Open the case study with clear context, a confident headline, and one high-signal visual.

**Structure:**

- Optional pill badge (e.g. "Case study")
- H1 heading (type.h1 / Red Hat Display)
- Subtitle (type.body.m / Inter, max-width 455px)
- Hero media (product screenshot or system diagram)
- Optional primary action ("View demo")

**Notes:**

- Do not over-index on conversion language. Keep it informational.

---

### Pattern: Feature Split Card (Image + Text)

**Purpose:** Show a single feature with a strong visual and a short explanation.

**Structure:**

- Outer card (neutral surface, 24px radius, 12px padding)
- Media panel (radius 16px)
- Text panel
    - H3 title (type.h3 / Inter)
    - Body (type.body.m / Inter)

---

### Pattern: Section Heading + Content Block

**Purpose:** Segment the narrative (Problem → Insight → System → Interaction → AI → Impact).

**Structure:**

- H2 heading (type.h2 / Red Hat Display)
- Content immediately follows (cards, grids, diagrams)

**Spacing:**

- Heading to content: [space.section.gap](http://space.section.gap) (40px)
- Section to section: keep this tighter than landing pages (update `space.section.y` accordingly)

---

### Pattern: Feature Grid (3-up)

**Purpose:** Cluster 3 related capabilities (only when each item has concrete evidence).

**Structure:**

- 3-column grid
- Each cell: icon (optional) + H3 + body

---

### Pattern: Demo CTA (Portfolio)

**Purpose:** Give reviewers a single, obvious next step.

**Structure:**

- Light panel background: [color.bg](http://color.bg).cta.accent (soft Paper Blue surface)
- H2 or H3 heading (keep it short)
- 1 primary button: "View demo"
- Optional: 1 supporting line (what the demo covers)

**Spacing:**

- Use a more compact vertical padding than marketing CTAs.

---

## 6. Content & Copy Rules

| Rule | Detail |
| --- | --- |
| Case | Sentence case for all headings ("Everything in one place." not "Everything In One Place") |
| Punctuation | Headings end with period. Subheadings and body do not require periods. |
| Emphasis | Use `<em>` for testimonial quotes. No bold in body text. Bold only for section group headers. |
| Tone | Direct, declarative. Short sentences. No exclamation marks in headings. |
| Link arrows | Navigation footer links use " →" suffix (e.g., "Comparison →") |

---

## 7. QA Checklist

- [ ]  All colors reference tokens from Section 2.1 — no raw hex outside the token table
- [ ]  All headings use GT Alpina Light (h1, h2) or Manrope (h3) — never Inter for headings
- [ ]  All body text uses Inter — never GT Alpina or Manrope for body
- [ ]  Font weights match exactly: GT Alpina = 300–400, Inter = 400–600, Manrope = 400
- [ ]  Card backgrounds are #FAFAFA — not #F5F5F5, not #F0F0F0
- [ ]  Card radius is 24px outer, 16px inner media — no other combinations
- [ ]  Button radius is 8px — not 4px, not 12px
- [ ]  Primary button has [shadow.sm](http://shadow.sm/) — secondary button has no shadow
- [ ]  Grid gutters are 32px — not 24px, not 16px
- [ ]  Section spacing is 240px — not 200px, not 300px (except CTA section which is 200px padding)
- [ ]  Hero heading is centered. Section headings (h2) are left-aligned.
- [ ]  No decorative borders on cards
- [ ]  Page max-width is 1100px (content) or 1200px (bordered sections)
- [ ]  Pill badges use 20px radius, not fully rounded (border-radius: 9999px)
- [ ]  FAQ toggle icon is orange (#FF7700), not accent purple
- [ ]  Footer links use #19154E, not #0000EE or standard blue
- [ ]  All interactive elements have visible focus state (outline or ring)
- [ ]  Text contrast meets WCAG AA minimum (4.5:1 for body, 3:1 for large text)
- [ ]  No orphaned headings (every h2 must have content immediately following)
- [ ]  Image containers use object-cover, never object-contain (except footer brand SVG)