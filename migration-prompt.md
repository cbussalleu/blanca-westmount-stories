# Migration prompt — blanca-westmount-stories → editorial system

You are refactoring an existing React + Vite + TypeScript + Tailwind portfolio site. Goal: install a token layer, then refactor existing components to consume it. This fixes 20 visual-consistency issues identified in an audit, **without changing any content, copy, routing, page structure, project data, or functionality**.

The site already uses Westmount (display) and Merriweather (editorial) serifs against a pastel-yellow `hsl(48 100% 95%)` background. That foundation stays. The migration disciplines how those assets are used.

---

## Non-goals (do not do these)

- ❌ Do not add, remove, rename, or reorder any page.
- ❌ Do not edit any copy, headline, paragraph, or label text.
- ❌ Do not change `src/data/ProjectsData.ts` content (titles, descriptions, image paths, slugs).
- ❌ Do not add new routes or remove existing routes.
- ❌ Do not add new third-party libraries.
- ❌ Do not change the colour palette beyond what's specified in Step 1.

---

## Step 1 — Install the token layer

Replace the contents of `src/index.css`'s `:root` block + base layer with the following. Keep the `@font-face` declarations and the `.dark` block as they are.

```css
@layer base {
  :root {
    /* ─── Existing tokens (keep) ───────────────────────── */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ...rest of shadcn tokens unchanged... */
    --pastel-yellow: 48 100% 95%;
    --image-overlay: 48 100% 85%;
    --bimbo-overlay: 48 100% 92%;

    /* ─── New token layer ──────────────────────────────── */

    /* Type families (semantic roles) */
    --ff-display:    'Westmount', serif;          /* caps display titles */
    --ff-display-out:'westmount-outline', serif;  /* manifesto-only */
    --ff-editorial:  'Merriweather', serif;       /* sentence-case statements + body */
    --ff-ui:         'Helvetica Neue', Helvetica, Arial, sans-serif;

    /* Type scale */
    --t-display-xl:   clamp(40px, 5.4vw, 72px);   /* page hero manifestos */
    --t-display-l:    clamp(32px, 4vw,   56px);   /* section starters */
    --t-display-m:    clamp(22px, 2.4vw, 32px);   /* subsections */
    --t-editorial-l:  clamp(22px, 3vw,   36px);   /* sentence-case headlines */
    --t-heading-m:    17px;                       /* card titles */
    --t-eyebrow:      11px;
    --t-body:         15px;
    --t-lede:         17px;
    --t-meta:         13px;

    /* Tracking */
    --tr-eyebrow:  0.20em;
    --tr-display:  -0.01em;
    --tr-body:     0.01em;

    /* Ink scale */
    --ink:    #18181b;
    --ink-2:  #3a3a3a;   /* prose body */
    --ink-3:  #6b6b6b;   /* meta / secondary */
    --ink-4:  #9a9a9a;   /* footnote */
    --rule:   rgba(24, 24, 27, 0.10);  /* hairline */
    --rule-2: rgba(24, 24, 27, 0.05);  /* dotted dividers */
    --accent: #8ab1a2;   /* sage — selection state only */

    /* Layout */
    --gutter:       clamp(20px, 4vw, 48px);
    --maxw:         1120px;
    --maxw-narrow:  880px;

    /* Section rhythm (mobile / desktop) */
    --sec-tight-m:  40px;  --sec-tight-d:  72px;
    --sec-m:        64px;  --sec-d:       112px;
    --sec-loose-m:  96px;  --sec-loose-d: 160px;

    /* Heading-to-body gaps */
    --gap-heading-tight-m: 32px;  --gap-heading-tight-d: 48px;
    --gap-heading-m:       48px;  --gap-heading-d:       96px;

    /* Interaction */
    --hover-fade:   0.6;
    --hover-dur:    200ms;
    --hover-ease:   ease-out;
    --arrow-shift:  4px;
    --image-scale:  1.03;
    --focus-ring-w: 2px;
    --focus-offset: 4px;
  }

  * { border-color: hsl(var(--border)); }

  body {
    background: hsl(var(--pastel-yellow));
    color: var(--ink);
    font-family: var(--ff-ui);
    font-size: var(--t-body);
    line-height: 1.55;
    letter-spacing: var(--tr-body);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  html { background: hsl(var(--pastel-yellow)); }

  /* REMOVE the global "h1-h6 = font-westmount" rule.
     Headings opt-in to the role they want — see utility classes below. */

  :focus-visible {
    outline: var(--focus-ring-w) solid currentColor;
    outline-offset: var(--focus-offset);
    border-radius: 1px;
  }
}

/* ─── Utility classes — the contract ────────────────────── */

@layer components {
  /* Display titles — Westmount caps */
  .display-xl  { font-family: var(--ff-display); font-weight: 200; font-size: var(--t-display-xl); line-height: 0.95; letter-spacing: var(--tr-display); text-transform: uppercase; }
  .display-l   { font-family: var(--ff-display); font-weight: 200; font-size: var(--t-display-l);  line-height: 1.0;  letter-spacing: var(--tr-display); text-transform: uppercase; }
  .display-m   { font-family: var(--ff-display); font-weight: 300; font-size: var(--t-display-m);  line-height: 1.1;  letter-spacing: var(--tr-display); text-transform: uppercase; }

  /* Editorial — Merriweather sentence-case */
  .editorial-l { font-family: var(--ff-editorial); font-weight: 400; font-size: var(--t-editorial-l); line-height: 1.25; letter-spacing: -0.01em; text-wrap: balance; }
  .heading-m   { font-family: var(--ff-editorial); font-weight: 400; font-size: var(--t-heading-m);  line-height: 1.3; }

  /* Eyebrow — small caps label, used everywhere */
  .eyebrow {
    font-family: var(--ff-display);
    font-weight: 300;
    font-size: var(--t-eyebrow);
    letter-spacing: var(--tr-eyebrow);
    text-transform: uppercase;
    color: var(--ink-3);
  }

  /* Body prose */
  .prose {
    font-family: var(--ff-editorial);
    font-size: var(--t-body);
    line-height: 1.65;
    color: var(--ink-2);
    max-width: 64ch;
  }
  .prose-lede {
    font-family: var(--ff-editorial);
    font-size: var(--t-lede);
    line-height: 1.55;
    color: var(--ink-2);
    max-width: 60ch;
  }

  /* Link CTA — used for "View Project", "View All Projects", etc. */
  .cta-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-bottom: 1px solid var(--ink);
    padding-bottom: 4px;
    font-family: var(--ff-editorial);
    color: var(--ink);
    transition: opacity var(--hover-dur) var(--hover-ease);
  }
  .cta-link:hover { opacity: var(--hover-fade); }
  .cta-link svg  { transition: transform var(--hover-dur) var(--hover-ease); }
  .cta-link:hover svg { transform: translateX(var(--arrow-shift)); }
  .cta-link-sm  { padding-bottom: 2px; font-size: 12px; }
  .cta-link-md  { font-size: 14px; }

  /* Text link — caps nav, footer email, etc. */
  .text-link {
    transition: opacity var(--hover-dur) var(--hover-ease);
  }
  .text-link:hover { opacity: var(--hover-fade); }

  /* Eyebrow tag — used for tool chips, category chips */
  .tag-chip {
    font-family: var(--ff-display);
    font-weight: 300;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    border: 1px solid var(--ink);
    padding: 4px 9px;
    color: var(--ink);
    background: transparent;
    transition: background var(--hover-dur), color var(--hover-dur);
  }
  .tag-chip:hover { background: var(--ink); color: hsl(var(--pastel-yellow)); }
  .tag-chip.is-selected {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--ink);
  }
  .tag-chip.is-muted {
    color: var(--ink-3);
    border-color: var(--ink-4);
    border-style: dashed;
  }

  /* Container */
  .container-narrow {
    width: 100%;
    max-width: var(--maxw-narrow);
    margin-inline: auto;
    padding-inline: var(--gutter);
  }
}

/* ─── Section rhythm — apply via class names on <section> ── */
.sec-tight { padding-block: var(--sec-tight-m); }
.sec       { padding-block: var(--sec-m); }
.sec-loose { padding-block: var(--sec-loose-m); }
@media (min-width: 768px) {
  .sec-tight { padding-block: var(--sec-tight-d); }
  .sec       { padding-block: var(--sec-d); }
  .sec-loose { padding-block: var(--sec-loose-d); }
}
.gap-heading-tight { margin-bottom: var(--gap-heading-tight-m); }
.gap-heading       { margin-bottom: var(--gap-heading-m); }
@media (min-width: 768px) {
  .gap-heading-tight { margin-bottom: var(--gap-heading-tight-d); }
  .gap-heading       { margin-bottom: var(--gap-heading-d); }
}
```

Also update `tailwind.config.ts` to expose the new colour names so existing classes can reference them:

```ts
theme: {
  extend: {
    colors: {
      ink:    'var(--ink)',
      'ink-2':'var(--ink-2)',
      'ink-3':'var(--ink-3)',
      'ink-4':'var(--ink-4)',
      accent: 'var(--accent)',
      rule:   'var(--rule)',
      /* keep existing colours */
    },
    fontSize: {
      eyebrow: ['11px', { letterSpacing: '0.20em' }],
      meta:    ['13px', { lineHeight: '1.55' }],
      body:    ['15px', { lineHeight: '1.65' }],
      lede:    ['17px', { lineHeight: '1.55' }],
    },
  }
}
```

---

## Step 2 — Migrate components

Apply each fix below. Each one is scoped to a single file, with the source line range to find.

### 2.1 `src/components/Header.tsx`

- **C·1** Replace `hover:opacity-60 transition-opacity` on every nav link with the utility class `text-link`. (The `text-link` class encapsulates the 0.6 fade + 200ms timing.)
- **C·1** Same for mobile menu links (they currently use `hover:opacity-70`).
- **D·4** Wire the existing `scrolled` state to a hairline border:
  ```tsx
  <header className={`fixed w-full z-30 transition-all duration-300 bg-[hsl(var(--pastel-yellow))] ${
    visible ? 'top-0' : '-top-24'
  } ${scrolled ? 'border-b border-[var(--rule)]' : ''}`}>
  ```
- **A·4** Nav link classes become: `eyebrow text-link`. Drop the inline `text-xs font-westmount tracking-widest uppercase` chains.

### 2.2 `src/components/Footer.tsx`

- **C·1** Email link and CV download link: replace `hover:opacity-70`/`hover:opacity-60` with `text-link`.
- **A·4** "Contact" and "Download CV" labels: replace inline class chain with `eyebrow text-link`.
- **C·3** The CV download button keeps its `border border-black px-4 py-2` shape but adds `text-link` for the hover behaviour.

### 2.3 `src/components/sections/AboutMeSection.tsx`

- **D·1** **Remove `hidden md:block` from the second paragraph wrapper.** Both paragraphs visible at all viewports.
- **D·2** **Delete every `<br className="hidden sm:block"/>` and every `<span className="inline sm:hidden"> </span>` patch from the h1.** Replace the h1 with:
  ```tsx
  <h1 className="editorial-l text-center mx-auto gap-heading"
      style={{ maxWidth: '22ch' }}>
    Hello, I'm Christian. Service Designer in Barcelona.
    I don't bring perfect answers — I help teams ask better
    questions and build adaptive solutions
  </h1>
  ```
  On `md+` the max-width widens via a media-query override; let CSS handle wrap, no `<br>` needed.
- **A·1** h1 uses `editorial-l` (Merriweather sentence-case).
- **B·1** Section gets class `sec` (replaces `py-8 sm:py-16`).
- **A·5** Both paragraphs use `prose` class (replaces the per-paragraph `text-sm leading-relaxed font-merriweather` chain).

### 2.4 `src/components/sections/FeaturedProjectsSection.tsx`

- **A·1 + A·4** Section h2: replace class chain with `display-l text-center gap-heading`.
- **B·1** Section uses `sec`.
- **C·2** The "View All Projects" link uses `cta-link cta-link-md`. Drop inline `inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity font-merriweather group` and the `group-hover:translate-x-1` (now baked into `.cta-link`).
- **B·4** Grid stays `grid md:grid-cols-3 gap-8` (already in the four-value scale).

### 2.5 `src/components/sections/MyApproachSection.tsx`

- **A·1 + A·4** h2: `display-l text-center gap-heading-tight`.
- **A·5** The lede paragraph uses `prose-lede mx-auto`.
- **B·1** Section uses `sec`.
- **C·2** "The thinking behind" link uses `cta-link cta-link-md`.

### 2.6 `src/components/sections/NoSilverBulletsSection.tsx`

- **A·3** Decision: keep the manifesto treatment but bring it into the scale.
  Replace h1 with:
  ```tsx
  <h1 className="display-xl text-center" style={{ letterSpacing: '0.14em' }}>
    NO SILVER BULLETS
  </h1>
  ```
  This drops the orphaned `font-['westmount-outline']` family and instead uses Westmount Extra-Light at display-xl scale. (If you want to keep the outline weight, reuse it as the same treatment on the Methodology, AI, and Contact page heroes — one or the other, not "only here".)
- **B·1** Section uses `sec-tight`.

### 2.7 `src/components/ProjectCard.tsx`

- **D·3** **Remove `hidden sm:block` from the image wrapper.** Image visible at all viewports.
- For mobile, change the image aspect from `AspectRatio ratio={1}` to a responsive ratio: 1:1 stays on `sm+`, but on mobile use a horizontal compact layout:
  ```tsx
  <div className="group space-y-4">
    {/* Desktop: full-width 1:1 image above text */}
    <div className="image-with-overlay rounded-lg overflow-hidden shadow-md hidden sm:block">
      <AspectRatio ratio={1} className="w-full">…</AspectRatio>
    </div>
    {/* Mobile: 80px thumbnail next to text */}
    <div className="flex gap-3 sm:hidden">
      <div className="image-with-overlay rounded-lg overflow-hidden shadow-sm w-20 h-20 flex-shrink-0">
        <OptimizedImage src={imageSrc} alt={title} className="w-full h-full" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="eyebrow mb-1">{client}</div>
        <h3 className="heading-m">{title}</h3>
      </div>
    </div>
    <div className="space-y-2">
      <div className="eyebrow hidden sm:block">{client}</div>
      <h3 className="heading-m hidden sm:block">{title}</h3>
      <p className="prose">{description}</p>
      <div className="pt-2">
        <Link to={`/portfolio/${slug}`} className="cta-link cta-link-sm">
          View Project <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  </div>
  ```
- **A·4** Client label: `eyebrow`. **A·5** Description: `prose`. **C·2** Link: `cta-link cta-link-sm`.

### 2.8 `src/components/BimboCaseStudies.tsx`

- **C·5** Harmonise the hero card hover. In the `<div className="image-with-overlay rounded-lg…">`:
  - Change image hover scale from `group-hover:scale-105` to `group-hover:scale-[1.03]`.
  - Change yellow overlay opacity from `group-hover:opacity-80` to `group-hover:opacity-40`.
  - The title: remove `group-hover:text-black` and `group-hover:scale-110`. Replace with a subtle letter-spacing increase + deeper drop-shadow on hover:
    ```tsx
    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-westmount text-center transition-all duration-300 leading-tight tracking-normal group-hover:tracking-[0.02em]"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))' }}>
      …
    </h3>
    ```
    Title stays white. Hover is suggestion, not transformation.
- **C·2** Each "View Project" link on the right column: replace inline class with `cta-link cta-link-sm`.
- **A·5** Each `<p>` description: `prose`.
- **A·1** Each `<h3>` title: `heading-m` (replaces `text-lg font-merriweather`).
- **B·4** Outer grid uses `gap-8` (drop the current `gap-10`).

### 2.9 `src/pages/Index.tsx`

- **B·1** The inline `<section className="py-8 sm:py-16">` for the Bimbo block uses `sec` class.
- **A·1 + A·4** The inline h2 "GRUPO BIMBO AND I" uses `display-l text-center gap-heading`.

---

## Step 3 — Inner pages

### 3.1 `src/pages/ProjectDetail.tsx` — drop the emoji hero (E·1)

Replace the entire `{/* Hero Section */}` block (lines ~40–55) with:

```tsx
<div className="bg-[hsl(var(--pastel-yellow))] sec">
  <div className="container-narrow">
    <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-end">
      {/* Project number — typographic anchor, replaces emoji */}
      <div className="display-xl text-ink leading-none flex items-baseline">
        <span>{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="text-ink-4 text-3xl md:text-4xl px-1 font-light">/</span>
        <span className="text-ink-3 text-3xl md:text-4xl font-light">{String(projectSlugs.length).padStart(2, '0')}</span>
      </div>

      {/* Title block */}
      <div>
        <div className="eyebrow mb-3">{project.client}</div>
        <h1 className="display-l mb-3">{project.title}</h1>
        <p className="prose-lede">{project.description}</p>

        {/* Surface existing data.category as tag chips */}
        {project.category && project.category.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {project.category.map((c: string) => (
              <span key={c} className="tag-chip">{c}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
</div>

{/* Full-bleed project image — uses imageSrc, already in data */}
{project.imageSrc && (
  <div className="image-with-overlay">
    <div className="container-narrow">
      <div className="w-full" style={{ aspectRatio: '16/7' }}>
        <OptimizedImage src={project.imageSrc} alt={project.title} className="w-full h-full" />
      </div>
    </div>
  </div>
)}
```

You can also keep `icon` in `ProjectsData.ts` untouched — just stop reading it. No data changes required.

Also throughout the rest of `ProjectDetail.tsx`:
- All `<h2 className="font-westmount text-2xl…">` → `<h2 className="display-m gap-heading-tight">`
- All `<h3 className="font-westmount text-lg…">` → `<h3 className="heading-m">`
- All paragraph blocks: `prose`.
- "Back to Portfolio" link: `cta-link cta-link-sm`.
- Tool chips: replace inline class with `tag-chip`.
- "Get in Touch" button: keep the box shape, drop the inline class chain, use `tag-chip` + larger padding (`px-8 py-3`).
- Prev/Next nav links: `eyebrow text-link`.

### 3.2 `src/components/RadarSkillsSection.tsx` — translate vocabulary (E·2)

The functional logic stays. The visual primitives change.

**Pill chips → flat tag chips.** Find the chip `<span>` (around line ~225):

```tsx
// BEFORE
<span className={[
  "px-3 py-1 rounded-full text-sm font-merriweather transition-all duration-200",
  isGreen
    ? "bg-[#8ab1a2] text-white cursor-pointer hover:bg-[#7ca196] hover:scale-105 active:scale-95"
    : "bg-slate-400 text-white"
].join(" ")}>

// AFTER
<span className={[
  "tag-chip",
  isGreen ? "cursor-pointer" : "is-muted",
  selectedSkill && tooltipSkill === skill.name ? "is-selected" : ""
].join(" ")}>
```

Drop `rounded-full`, drop `bg-[#8ab1a2]` fill, drop `bg-slate-400`, drop `hover:scale-105`, drop `active:scale-95`. The `.tag-chip` class handles everything.

**Tooltip — white rounded card → pastel-yellow square with hairline.** Find the tooltip block (around line ~265):

```tsx
// BEFORE
<div className="bg-white border border-gray-200 rounded-lg p-4 max-w-xs">

// AFTER
<div className="bg-[hsl(var(--pastel-yellow))] border border-ink p-4 max-w-xs">
```

Drop `rounded-lg`, change `bg-white` → pastel-yellow, change `border-gray-200` → `border-ink`.

Inside the tooltip:
- `<h4 className="font-merriweather font-semibold text-sm leading-tight">` → `<h4 className="heading-m">`
- `<p className="text-xs text-gray-600 mt-1 font-merriweather">` → `<p className="eyebrow mt-2">`
- The "See skill in action" link — currently `text-blue-600 hover:text-blue-800` — becomes `cta-link cta-link-sm`.

**Radar SVG colour swaps.** Find the SVG paths:
- Grid circles `stroke="#e5e7eb"` → `stroke="var(--rule)"`
- Radial spoke lines `stroke="#e5e7eb"` → `stroke="var(--rule)"`
- Filled polygon `fill="rgba(138, 177, 162, 0.3)"` is fine — stays sage (this is the selected-region state).
- Datapoint circles `fill="#8ab1a2"` — keep sage (selection indicator).
- Percentage labels `fill-blue-600` → swap to plain Westmount. Replace:
  ```tsx
  className="text-xs font-merriweather fill-blue-600 font-semibold"
  // with
  className="font-westmount font-light"
  style={{ fontSize: '11px', fill: 'var(--ink)', letterSpacing: '0.04em' }}
  ```

**Legend dots → hairline marks.** Find the legend (around line ~325):

```tsx
// BEFORE
<div className="w-2 h-2 bg-[#8ab1a2] rounded-full"></div>
<span className="text-gray-600">Excelling at</span>
…
<div className="w-2 h-2 bg-slate-400 rounded-full"></div>
<span className="text-gray-600">Building up</span>

// AFTER
<div className="inline-flex items-center gap-2 eyebrow">
  <span className="inline-block w-3 h-2" style={{ background: 'var(--accent)' }}></span>
  Excelling at
</div>
<div className="inline-flex items-center gap-2 eyebrow">
  <span className="inline-block w-3 h-2 border border-ink-4 border-dashed"></span>
  Building up
</div>
```

**"See the method" CTA** (bottom of the section): replace inline class with `cta-link cta-link-md`.

**"What I bring" h2**: replace `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-westmount` with `display-l gap-heading`.

---

## Step 4 — Verify

Run through this checklist after the refactor. Each item maps to a finding in the audit.

- [ ] **A·1** Three home-page section starters: About uses Merriweather (`editorial-l`); Featured Projects, Grupo Bimbo, My Approach use Westmount caps (`display-l`).
- [ ] **A·2** No component declares its own font-size ramp; every heading uses one of `display-xl`, `display-l`, `display-m`, `editorial-l`, `heading-m`, or `eyebrow`.
- [ ] **A·3** No remaining usage of `font-['westmount-outline']`.
- [ ] **A·4** Every uppercase label uses the `eyebrow` class — no inline `tracking-widest font-westmount font-extralight uppercase` chains.
- [ ] **A·5** Every body paragraph uses `prose` or `prose-lede` — no `text-gray-600`, `text-gray-700`, `text-neutral-700` direct references.
- [ ] **B·1** Every section uses `sec`, `sec-tight`, or `sec-loose` — no inline `py-* sm:py-*` on sections.
- [ ] **B·2** `container-narrow` produces a 20px minimum gutter on a 375px viewport.
- [ ] **B·3** All heading-to-content gaps use `gap-heading` or `gap-heading-tight`.
- [ ] **B·4** No `gap-10` or `gap-16` anywhere — only `gap-4`, `gap-6`, `gap-8`, `gap-12`.
- [ ] **C·1** No remaining `hover:opacity-70` or `hover:opacity-80` — only `text-link` / `cta-link`.
- [ ] **C·2** Every `<ArrowRight>`-trailing link is inside a `cta-link` and translates 4px on hover.
- [ ] **C·3** Underline padding is `pb-0.5` on `cta-link-sm`, `pb-1` on `cta-link-md`.
- [ ] **C·4** Tab through the homepage with no mouse. Every interactive element shows the focus ring.
- [ ] **C·5** The Bimbo hero card hover: image scales to 1.03; yellow overlay reaches 0.4; title stays white, gains letter-spacing.
- [ ] **D·1** Resize to 375px. Both About paragraphs are visible.
- [ ] **D·2** No `<br>` tags in the About h1 markup.
- [ ] **D·3** Project cards show their image at all viewports.
- [ ] **D·4** Scroll the homepage. Header gains a 1px bottom hairline once scrolled.
- [ ] **E·1** Visit `/portfolio/connection-center`. No emoji in the hero — instead a large `01 / 10` numeral, client eyebrow, title, description, then the full-bleed project image.
- [ ] **E·2** The radar's chips are flat rectangles with ink borders. Selected chip is sage. "Building up" is dashed border. Tooltip is square pastel-yellow with a 1px ink border. Link inside the tooltip is black with `border-bottom`. Percentages on the radar are Westmount Extra-Light, ink colour.

---

## Implementation notes

- The token-layer CSS goes into `src/index.css`. The utility classes (`eyebrow`, `prose`, `cta-link`, etc.) are declared in `@layer components` so Tailwind utilities can still override them when needed.
- Keep the existing shadcn `Button` component — it already has focus styles. Just don't introduce new buttons that bypass it.
- Keep the existing `.image-with-overlay` rule in `src/index.css` as-is. It already encodes the warm-yellow grayscale treatment correctly.
- Framer Motion animations (in FeaturedProjectsSection, MyApproachSection, RadarSkillsSection) stay as they are. The migration is visual, not motion.
- Estimated effort: half a day for Step 1 (tokens + CSS), one full day for Step 2 (component refactor), half a day for Step 3 (inner pages), half a day for Step 4 (verification across viewports). Roughly two and a half days end-to-end.

That's it. The site reads as one editorial system after this — Westmount and Merriweather playing assigned roles, one body voice, one hover voice, one focus voice, and the two outliers translated into the same vocabulary as everything else.
