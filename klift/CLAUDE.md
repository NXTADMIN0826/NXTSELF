# KLIFT website — project handoff

Read this whole file before changing anything. It records where the project came from, every decision the owner has made, the brand rules, and how to work on the code.

---

## 1. What this is

A marketing and ordering website for **KLIFT — "The Ultimate Skin Lifting"**, an Italian-made injectable skin booster (12 active components, 5 mL vial). Brand owner: **Ozona Biomedical Co.-FZCO** (Dubai). Exclusive distributor in Kuwait: **Rida Pharma**.

- Style reference given by the owner: **juvederm.com**. The aim is a premium, calm, aesthetic-medicine site: big hero, generous white space, elegant serif headlines, soft motion.
- Audience: clinic owners, doctors and practitioners (they order), and patients (they read about the treatment). It is **for professional use only**.
- Plain static HTML, CSS and vanilla JS. No framework, no build step, no dependencies. Deployed on Vercel as a static site.

## 2. How it started (history)

1. **The brief:** the owner sent the vial image (KLIFT logo in blue), a link to juvederm.com, and asked for a "really beautiful, very aesthetic" site, using the UI/UX Pro Max design skill.
2. **Source 1 — "KLIFT Training Presentation" (PowerPoint, 43 slides).** An internal sales and scientific training deck. All product, ingredient, protocol and formula content came from it. The logo, vial render, portrait photo and the two patterned backgrounds in `assets/img/` were extracted from it.
3. **First build:** four English pages (home, science, treatment, professionals).
4. **Owner corrections, round 1:**
   - The vial label had a misprint, "The **Altimate** Skin Lifting". It is **Ultimate**. The vial image was retouched: the "A" was replaced with the "U" taken from the logo's own tagline font.
   - Pack is **3 vials per box**. Shelf life is **3 years**. KLIFT is **registered with the Ministry of Health (MOH)**.
   - Never say "find a clinic". The call to action is **"Order now for a clinic"**.
5. **Source 2 — "Klift_k2.mp4" (45-second bilingual English/Arabic promo video for clinic owners, 9 slides).** It added:
   - HA is **60 mg each** (100 kDa + 1,400 kDa), so **120 mg per vial**. The owner confirmed this, and it replaces the deck's 30 mg figure.
   - New target areas: **forehead, under-eye and lips**.
   - **Topical use after device treatments:** Dermapen microneedling, fractional laser, RF microneedling.
   - "Why add KLIFT to your menu?" points for clinics.
   - Ingredient groups: Collagen builders / Skin quality / Antioxidant & calming / Renewal.
   - Rida Pharma contact details, plus "Request the full protocol & clinic price list".
   - **Owner decisions:** use **softer wording** for lips and under-eye (see section 5), and add everything, including an Arabic page.
6. **Current state:** five pages, including the Arabic RTL page. Delivered as a zip for GitHub and Vercel.

## 3. Site map

| File | Purpose |
|---|---|
| `index.html` | Home: hero with floating vial, intro and stats, four actions, results with portrait, 7 areas + device card, course timeline, ingredient chips, product specs, FAQ, CTA |
| `science.html` | Why skin ages (collagen chart), dual-weight HA, filterable library of all 12 actives (11 cards + summary card; DNA & RNA share one card), synergy matrix |
| `treatment.html` | Who it's for (Glogau tiers), areas with doses, device use, course timeline, before/during/after, suitability notice, FAQ |
| `professionals.html` | Protocol and dosing table, vial planning, technique / contraindications / aftercare, device use, "Why add KLIFT to your menu", why KLIFT, ingredient groups + formula table, packaging specs, references, **order form** (`#contact`) |
| `ar.html` | Arabic (RTL) home page, including its own order form. Linked from the "العربية" link in every English header. |
| `assets/css/klift.css` | The entire design system (tokens at the top, RTL rules at the bottom) |
| `assets/js/klift.js` | Header state, mobile menu, scroll reveals, count-up numbers, parallax, ingredient filter, order form |
| `assets/img/` | `vial.webp` (retouched, transparent), `vial-sm.webp`, `portrait.webp`, `pattern-navy.webp`, `pattern-light.webp`, `logo-*.png` (wordmark + tagline), `wordmark-*.png` (wordmark only), `favicon.svg` |

Internal anchors that other pages link to: `professionals.html#contact` (order form), `#protocol`, `#formula`, `#references`, `#devices`, `#clinic`. On `treatment.html`: `#devices`, `#faq`. On `science.html`: `#ingredients`.

## 4. Brand guidelines

### Colour (defined as CSS custom properties in `:root` of `klift.css`)
| Token | Hex | Use |
|---|---|---|
| `--navy` | `#1c3647` | Primary: dark sections, buttons, headings |
| `--navy-deep` | `#13283a` | Announcement bar, footer, hero gradient edge |
| `--ink` | `#1f2a33` | Body text |
| `--steel` | `#41697f` | Logo blue, accents, eyebrows, italic highlights |
| `--steel-soft` | `#5b8db0` | Hydrate colour, focus ring |
| `--sky` | `#a7c2d3` | Accents on dark backgrounds |
| `--mist` | `#eef3f6` | Light section background |
| `--pearl` | `#f7f5f1` | Page background (warm off-white, like the vial label) |
| `--sand` | `#d9bba6` | Warm accent (sparingly) |
| `--grey` | `#93a0a6` | Decorative only (not for text) |

Pillar colours: Hydrate `#5b8db0`, Rebuild `#41697f`, Protect `#b08a72`, Smooth & firm `#1c3647`. These colours come from the deck's own theme and the vial label. Don't introduce new hues.

### Typography
- **Display / headlines:** Cormorant Garamond, light weights 300–400. One key phrase per headline goes in *italic* in steel blue, e.g. "The ultimate *skin lifting.*"
- **Body / UI:** Jost, 300 for body and 500 for labels. It is geometric and echoes the rounded logo.
- **Arabic:** IBM Plex Sans Arabic. No italics, no letter-spacing and no uppercase in Arabic (all handled in the RTL block of the CSS).
- Eyebrow labels: 12px uppercase with 0.28em letter-spacing and a short rule before them.

### Logo and imagery
- The logo is the rounded **KLIFT** wordmark with the tagline "The Ultimate Skin Lifting". Use `wordmark-*` in the header and `logo-*` (with tagline) in the footer. Blue on light backgrounds, white on dark. Never redraw or recolour it.
- Imagery: the vial render (floating, soft drop shadow), the portrait of a woman in sunlight, and the angular patterned backgrounds from the vial label. Line icons are inline SVG, 1.4 stroke. **No emoji.**
- Shapes: large radii (22–36px), pill buttons, soft shadows, plenty of white space.

### Motion
Slow, eased (`cubic-bezier(0.22, 1, 0.36, 1)`) fade-and-rise reveals, a floating vial, a gentle marquee and count-up stats. Everything must respect `prefers-reduced-motion` (already handled).

### Voice
Calm, confident, clinical but warm. Short sentences. British spelling (ageing, colour, décolleté). The product is **"KLIFT"** in Latin capitals; in Arabic prose it is **"كي ليفت"**.

## 5. Content rules — must follow

**Confirmed product facts (owner-approved):**
- 12 active components in one 5 mL glass vial; single-vial, ready to use (no mixing). Made in Italy.
- Hyaluronic acid: **60 mg low-MW (100 kDa) + 60 mg high-MW (1,400 kDa) = 120 mg per vial.**
- The 12 actives: sodium hyaluronate 100 kDa, sodium hyaluronate 1,400 kDa, acetyl hexapeptide-8, glycine, proline, arginine, niacinamide, N-acetylcysteine, mannitol, DMAE tartrate, hydrolyzed DNA, hydrolyzed RNA. Amounts other than HA are "Per IFU".
- Four actions: Hydrate, Rebuild, Protect, Smooth & firm.
- **3 vials per box. Shelf life 3 years. MOH registered.**
- Protocol: 2 sessions for Glogau I–II, 3–4 sessions for Glogau III–IV, one session every 2 weeks; repeat after 6–9 months or a monthly touch-up. Dose: **1 mL (young) / 1.5 mL (mature) per area per session.**
- Areas (7): face, forehead, under-eye, lips, neck, décolleté, hands, plus **topical use** after Dermapen microneedling, fractional laser and RF microneedling (result: smoother-looking skin, supports collagen renewal).
- Kuwait: **Rida Pharma**, exclusive distributor, +965 6501 9421, ridapharma.com, local stock and support.
- Manufacturer contact: info@ozonabiomedical.com · ozonabiomedical.com · Building A, DDP, Dubai Silicon Oasis, UAE.

**Wording rules:**
- The CTA is always **"Order now for a clinic"** (Arabic: "اطلب الآن لعيادتك"). **Never write "find a clinic".**
- Tagline: "The **Ultimate** Skin Lifting" (never "Altimate").
- KLIFT is **not a filler** and does not add volume.
- **Lips (soft wording):** "hydrates the lips and helps them look smoother and more defined", **not** "fills the lips".
- **Under-eye (soft wording):** "helps the under-eye area look brighter, smoother and more rested", **not** "reduces eye bags / dark circles".
- Ingredient evidence is literature on each ingredient, not KLIFT clinical trials. Use "helps", "supports" and "may"; never claim it "replaces Botox". Keep the evidence notes and the footer disclaimer.
- **Never publish internal deck material:** prices, distributor margins, competitor names (NEOFOUND, PROFOUND, Profhilo, etc.), objection handling, sales KPIs and plans.
- Doses for forehead / under-eye / lips are "set by the practitioner" (no specific dose has been confirmed).

**Open questions (ask the owner before changing):**
- The video says "6 target areas" and omits the neck. The site shows **7** (the neck comes from the brochure).
- The video says "2% + 2% per vial", but 60 mg in 5 mL is 1.2%. Percentages are deliberately **omitted** until the fill volume and concentration are confirmed.
- The WhatsApp ordering assumes +965 6501 9421 takes WhatsApp. Email orders go to info@ozonabiomedical.com because no Rida Pharma email was given.
- The Arabic text needs a native-speaker proofread. Only the home page exists in Arabic; the science, treatment and professionals pages are English only.
- No storage-condition details yet (only the 3-year shelf life).

## 6. How to work on the code

- **The HTML files are the source of truth.** There is no build step and no template engine.
- **The header, footer and mobile menu are repeated in every page.** When you change one, change all five pages (`index`, `science`, `treatment`, `professionals`, `ar`). The Arabic page has its own translated header and footer.
- Use the existing classes and tokens; don't hard-code new colours. Section pattern:
  - `section.section` (or `.bg-white`, `.bg-mist`, `.bg-pattern-navy.on-dark`, `.bg-pattern-light`)
  - `.container`, then `.section-head` / `.split-head` with `.eyebrow` + `h2` (one `<em>`) + `.lead`
  - add `.reveal` (plus `.d1`–`.d4` for stagger) to animate in
- Components already available: `.btn-primary / -light / -ghost`, `.text-link`, `.pillars`, `.areas` / `.area` (`.area-device` = navy card), `.journey` (timeline), `.ingredients`, `.matrix`, `.tiers`, `.expect`, `.devices`, `.menu-points`, `.groups`, `.faq` (native `<details>`), `.cta`, `.spec-list`, `.table-card`, `.form`, `.distributor`, `.notice`.
- **Order form:** `<form data-order-form data-whatsapp="96565019421" data-email="...">`. The script reads every labelled field and builds the message. A submit button with `value="whatsapp"` opens wa.me; `value="email"` opens a mailto. There is no backend.
- **Arabic / RTL:** `ar.html` uses `<html lang="ar" dir="rtl">`. The RTL overrides are at the end of `klift.css` (`[dir="rtl"] …`). Wrap Latin text and numerals that must stay left-to-right (DMAE, DNA, Glogau I–II, phone numbers) in `<span class="latin">` or `<span dir="ltr">`.
- **Accessibility and quality bar** (from the UI/UX Pro Max checklist):
  - Text contrast at least 4.5:1, visible focus rings, alt text on every image, `aria-label` on icon-only buttons
  - Touch targets at least 44px, inputs at least 16px
  - Visible form labels (no placeholder-only labels)
  - WebP images with `width`/`height` set and `loading="lazy"` below the fold
  - No horizontal scroll at 390px wide, and reduced motion respected
- **Before you ship, check:**
  - Open every page at 1440px and at 390px wide (Chrome device mode, or Playwright full-page screenshots).
  - Confirm there is no sideways scroll: `document.documentElement.scrollWidth` should equal the viewport width.
  - Confirm there are no console errors.
  - Test the mobile menu, the ingredient filter, the FAQ accordions and both order-form buttons.

## 7. Deploying

- **Vercel:** import the repo, framework preset **Other**, no build command, output directory = repository root. `index.html` is the home page, and the Arabic page is `/ar.html`.
- `.vercelignore` keeps this file (`CLAUDE.md`) off the live site.
- External requests: Google Fonts only (Cormorant Garamond, Jost, IBM Plex Sans Arabic).

## 8. Source files (not in this repo)

The original assets are held by the owner. Ask them if you need to re-extract content or images:
- `KLIFT_Training_Presentation.pptx` (43-slide internal training deck)
- `Klift_k2.mp4` (45-second bilingual clinic-owner promo video)
- The original vial image with the "Altimate" misprint (already corrected in `assets/img/vial.webp`)
