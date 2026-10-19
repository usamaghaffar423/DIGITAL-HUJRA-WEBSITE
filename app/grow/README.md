# /grow — Marketing & Management landing page

A standalone sales page that turns KP business owners into WhatsApp leads for the
marketing retainers: TikTok, Facebook, Instagram, WhatsApp Business and Google
Business, with E-Commerce and Custom Software as secondary offers.

- **URL:** `/grow` (rename the folder to change it)
- **Run:** `npm run dev`, then open http://localhost:3000/grow
- **No backend.** Nothing is stored. Every CTA builds a `wa.me/923715868088?text=…` link.

## Before launch: placeholders Osama must resolve

Every item below is marked `{{PLACEHOLDER: …}}` in the code. Items with a visible
flag show a dashed amber badge in `npm run dev`. Those badges never render in a
production build.

| # | What | Where | Visible flag in dev? |
|---|------|-------|----------------------|
| 1 | **WhatsApp number.** Confirm `923715868088` is the number that should receive marketing leads. | `_lib/content.ts` → `CONTACT.whatsapp` | No (code comment) |
| 2 | **Monthly budget ranges.** Starter 15–25k, Growth 25–50k, Full 50k+ are made-up examples. Replace them with real PKR ranges. | `_lib/content.ts` → `BUDGETS` | Yes, calculator step 3 |
| 3 | **"Most local businesses start between…" range.** Used in calculator step 3 and in the FAQ cost answer. | `_lib/content.ts` → `TYPICAL_START_RANGE` | Covered by #2 badge |
| 4 | **Social-media pilot results.** The Proof section has an honest "results coming soon" card. Swap it for real numbers (reach, messages, calls, Maps views) once pilot clients agree. | `_components/Proof.tsx` | Yes, Proof section |

### Please also confirm (copy that states a policy or a scope)

These lines reuse wording from the live site or describe what the service includes.
They aren't invented numbers, but check that they hold for **monthly retainers**:

- **"Now onboarding pilot clients"** badge and the "Ask about a pilot slot" CTA (Proof section).
- **Payment model:** advance → small ongoing fee → balance when happy (Trust section). Taken from `/packages`.
- **Policies:** "Ad spend is separate and charged at cost" (from `/terms`), "Your accounts stay yours" (from the process copy on the home page), and "48 hrs reply guaranteed" plus "0 PKR to start" (from the home page CTA).
- **Service scope:** "planned, filmed, edited and posted for you" (TikTok), a chatbot that answers "24/7" (WhatsApp), and a monthly update on WhatsApp (Process step 4).
- **Founder card:** Top Rated on Upwork, 100% JSS and 60+ projects. It is labelled as Osama's personal record. It uses `/team/Osama.webp`.

## What is real (and must stay that way)

- 120+ businesses served, 8 districts active and 18 districts covered. These are kept as separate stats on purpose.
- Case studies: Classyfitters, Al Ansar Abaya, Raazina Essence, Bayan Cafe and Top Man Tailor. They are framed as past projects, not marketing results.
- Testimonials from Edenrobe Batkhela and Classyfitters, quoted word for word from the live site.

Don't add follower counts, before/after numbers or testimonials until they are real.

## Structure

```
app/grow/
  page.tsx            route, metadata, section order
  grow.css            design tokens (:root) + g-* component classes
  _lib/content.ts     ALL copy, services, budgets, FAQ, WhatsApp messages
  _lib/whatsapp.ts    waLink(), buildPlanMessage(), phone normalising
  _components/        Nav, Hero, Problem, ServicesGrid, Calculator (+ PlanSummary),
                      ProcessSteps, Proof, TrustSection, FAQ, FinalCTA, Footer,
                      PlanProvider (shared service selection), primitives, Icons
```

- **Edit copy:** change `_lib/content.ts`. Components contain layout only.
- **Business types in the calculator:** edit `BUSINESS_TYPES`. Keep `other` last.
- **Animations:** use the `motion` package (Framer Motion). Visitors who turn on
  "reduce motion" on their phone get a page with no movement.
- **Shared with the rest of the site:** only the root layout (fonts, the floating
  WhatsApp button) and images in `public/`.
