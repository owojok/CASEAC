# PROJECT CONTEXT & DESIGN MANIFESTO: 0 AI WEBSITE SLOP

> **Entity:** Celebrity Aid Social Entrepreneurship Action Center (CASEAC)  
> **Workspace:** `c:\Projects\harbor-light-ngo`  
> **Primary Rule:** Strict **0 AI Website Slop** across design, typography, copywriting, and engineering.  
> **Target Standard:** World-class editorial craft, authentic credibility, tactile visual depth, and verified operational substance.

---

## 1. Executive Summary & Core Mantra

The **Celebrity Aid Social Entrepreneurship Action Center (CASEAC)** is an action-driven NGO and social enterprise accelerator. It bridges cultural influence, philanthropic capital, and grassroots enterprise to turn systemic community vulnerabilities into generational self-reliance.

### 🚫 The Core Mantra: "0 AI Website Slop"

"AI Website Slop" is the flood of generic, soulless, cookie-cutter templates and copy generated without intentional human craft. For an NGO dealing with real people, capital, and communities, AI slop is fatal: it immediately reads as fake, untrustworthy, and corporate-gloss.

**In this project, 0 AI Slop is an absolute engineering and design law.**

---

## 2. The Anti-Slop Gatekeeper: Forbidden vs. Enforced Patterns

| Dimension | ❌ Forbidden AI Slop Pattern | ✅ Enforced CASEAC Standard |
| :--- | :--- | :--- |
| **Color & Theme** | Generic purple-to-blue gradients (`#8b5cf6` $\rightarrow$ `#3b82f6`), glowing cyan blobs, or muddy matrix-green voids. | **Editorial Earth & Impact Palette:** Deep Forest Moss (`#1f4136`), Heritage Terracotta (`#d26a3a`), Radiant Warm Gold (`#e7b44a`), Warm Linen Canvas (`#f4f0e8`), and Crisp Pearl Card surfaces (`#fbf8f2`). |
| **Layout Rhythm** | Repetitive 3-box or 4-box card grids stacked section after section with identical padding and borders. | **Dynamic Editorial Layout:** Asymmetrical split heroes, dual-track impact pathways, horizontal stat dividers, interactive give modals, and featured narrative showcases. |
| **Typography** | Squished, illegible thick fonts; negative letter-spacing (`tracking-[-0.05em]`) on heavy serifs; collapsed leading (`leading-[0.9]`); generic Roboto/Inter defaults. | **Crisp Multi-Tier Scale:** **Plus Jakarta Sans** for clear UI/body; **Newsreader / Editorial Serif** with optical sizing and generous line-heights ($1.15-1.25$); **Barlow Condensed** at medium weights ($500-600$) with positive tracking ($+0.06\text{em}$). |
| **Visual Cliches** | "Scroll to explore" floating arrows, cartoon 3D isometric hands/cubes, stock illustrations of people high-fiving. | **Authentic Human Narrative:** High-contrast documentary field photography, tangible metric badges, tactile paper card shadows, and dignified neighbor portraits. |
| **Copywriting** | Empty AI buzzwords: *"Delve into our transformative paradigm"*, *"Revolutionize your journey"*, *"Unlock potential"*, *"Seamlessly empower"*. | **Concrete Operational Realities:** Named micro-enterprises, dollar amounts, incubation survival percentages, legal permits, commercial kitchen access, and community ownership. |
| **Interactions** | Dummy links (`href="#"`), dead buttons that produce no reaction, simulated forms with no feedback, erratic layout shifts. | **Complete State Feedback:** Spring-damped button micro-interactions, animated counting metrics, accessible modals, explicit success/error states, and keyboard navigation. |

---

## 3. Brand Identity & Nomenclature

- **Full Legal & Public Name:** **Celebrity Aid Social Entrepreneurship Action Center**
- **Official Acronym:** **CASEAC**
- **Brand Essence:** *"Where prominent voice meets grassroots enterprise."*
- **The Brand Seal ("The Compass of Care"):**
  - **Cartography Motif:** Circular surveyor astrolabe boundary with cardinal benchmark ticks (N, S, E, W), latitude/longitude equator hairline, and layered elevation contour ridges.
  - **Intelligent Negative Space:** Between the left and right contour masses, the negative (white) space forms the unmistakable silhouette of **two cupped, supporting human palms** offering shelter and steadier ground.
  - **The Waypoint Beacon:** Floating in the center of the negative space palms sits an authentic 4-point cartographic compass star, symbolizing navigational clarity and catalytic guidance.
- **Strict Iconography Rule:**
  - **Zero Generic Star / Sparkle AI Slop:** Generic `Sparkles` / 4-star icon confetti is strictly prohibited. Use purposeful domain symbols (`Coins` for seed funds, `Users` for mentorship, `CheckCircle2` for verified metrics, or the bespoke `CaseacLogoMark`).
- **Primary Pillars:**
  1. *01 / Social Enterprise Incubation* (commercial licensing, financial modeling, founder stipends).
  2. *02 / Celebrity & Cultural Advocacy* (amplifying frontline realities, opening institutional distribution).
  3. *03 / Direct Seed Grants & Action Aid* (non-extractive bridge capital directly to frontline operators).
  4. *04 / Policy & Economic Access* (procurement reform, living wage campaigns, community equity).

---

## 4. Typography System (Anti-Muddle Audit)

### Root Cause Analysis of Previous Typographic Mud
The previous implementation suffered from:
1. `DM Serif Display` forced into `tracking-[-0.045em]` and `leading-[0.91]`, causing ink traps and ascenders/descenders to collide into heavy blotches.
2. `Barlow Condensed` at `font-bold (700)` with uppercase and negative kerning, creating dense, unreadable slabs of text.
3. Insufficient contrast between body text and warm paper backgrounds.

### Enforced Typography Rules
- **Base / Body:** `Plus Jakarta Sans`, font-weights `400` (regular), `500` (medium), `600` (semibold). Line height: `leading-relaxed` ($1.625-1.75$).
- **Editorial Headings:** `Newsreader` / `DM Serif Display` with `font-normal` (400) or subtle italic accent, line height never below `leading-tight` ($1.12-1.2$), and tracking between `-0.015em` and `0`.
- **Labels & Micro-Badges (`.eyebrow`):** `Plus Jakarta Sans` or `Barlow Condensed`, uppercase, font-weight `600` (never 800+), letter-spacing `0.14em` to `0.18em`.
- **Numbers & Data Metrics:** `Barlow Condensed` font-weight `600`, cleanly aligned with suffix tags.

---

## 5. Architectural & Code Conventions (Rules R1 – R25)

### File & Component Limits (Rule R1)
- Every file must remain **under 250 lines**. Any file approaching 200 lines must be split into logical sub-components or custom hooks.
- Functions/components >50 lines must be extracted.

### Directory Organization
```text
client/src/
├── components/
│   ├── ui/                    # Base atomic Radix primitives
│   ├── Navbar.tsx             # Header, logo mark, mobile drawer (<150 lines)
│   ├── HeroSection.tsx        # High-impact hero, no "Scroll to explore" (<160 lines)
│   ├── ImpactStats.tsx        # In-view animated counters (<120 lines)
│   ├── ProgramsSection.tsx    # 4 Action Pillars with hover physics (<140 lines)
│   ├── StorySpotlight.tsx     # Case study & verified outcome badge (<130 lines)
│   ├── ActionCards.tsx        # Dual pathways: Mentorship vs. Grants (<130 lines)
│   ├── AboutSection.tsx       # Origin, Governance, 2026 Blueprint (<130 lines)
│   ├── ContactFormsSection.tsx# Dispatch & Partner forms with feedback (<160 lines)
│   ├── Footer.tsx             # Disclosures, contact desk, legal (<130 lines)
│   └── GiveModal.tsx          # Interactive donation & seed fund dialog (<170 lines)
├── pages/
│   └── Home.tsx               # Root orchestrator (<70 lines)
├── index.css                  # Design tokens, keyframes, utilities
└── main.tsx                   # Entry point
```

### Animation Guidelines (Framer Motion)
- **Physics:** Spring transitions (`stiffness: 280, damping: 24`) for buttons and interactive controls.
- **Scroll Reveals:** Staggered `whileInView` with `viewport={{ once: true, margin: "-40px" }}`.
- **Accessibility:** Must respect `prefers-reduced-motion: reduce`. Never animate elements in ways that cause dizziness or continuous CPU load.

---

## 6. Pre-Flight Anti-Slop Audit Checklist

Before releasing any feature or code update, the following verification gates must pass:

- [ ] **No Buzzword Mud:** Verify that copy contains zero AI cliches (*"delve", "testament", "tapestry", "revolutionize", "beacon", "unlock"*).
- [ ] **No "Scroll to explore":** The cliché scroll arrow is permanently removed from the Hero.
- [ ] **Typography Breathability:** Zoom in to 100% and 125%; check that no characters overlap, kerning is crisp, and line heights give room to read.
- [ ] **Interactive Completeness (Rule R12):** All buttons and forms trigger real visual states (success messages, modal triggers, smooth scrolling). No dead `#` targets.
- [ ] **Name Consistency:** Check that "Harbor & Light" is 100% eliminated in favor of **Celebrity Aid Social Entrepreneurship Action Center** (CASEAC).
- [ ] **Code Health:** `pnpm check` (TypeScript) runs with 0 errors, and all files adhere to the 250-line limit.

---

*This document is the living single source of truth for the CASEAC web codebase. All contributors and agents must adhere strictly to these principles.*
