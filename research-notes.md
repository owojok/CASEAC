# Harbor & Light landing page — research notes

## Research synthesis

The landing page strategy follows recurring guidance from current nonprofit UX and storytelling research:

- Lead with a concise mission and one clear above-the-fold action, while keeping volunteering and giving equally visible as different paths into the work.
- Pair emotional storytelling with concrete evidence: one human story, then program outcomes and transparent next steps.
- Make the impact of a donation tangible instead of using generic asks.
- Use authentic, dignified imagery and avoid pity-driven framing; describe people as neighbors and participants, not props.
- Keep forms short, mobile-friendly, and keyboard accessible; preserve strong contrast, visible focus states, alt text, and descriptive link copy.
- Build trust before asking for money through transparent reporting, partner/field language, and practical details about where support goes.

## Sources

1. The Hill & Tandem, “Website Design for Nonprofit Organization: A Complete Guide for 2026” (accessed 2026-09-15): https://www.thehillstandem.com/post/website-design-for-nonprofit-organizations
2. Landingi, “20 Non Profit Landing Page Examples & Inspirations” (updated 2026-07-24): https://landingi.com/landing-page/non-profit-examples/
3. DonorPerfect, “How to Write Impact Stories that Inspire Generosity” (2026-02-27): https://www.donorperfect.com/nonprofit-technology-blog/fundraising-software/impact-stories-nonprofit-storytelling/

## Design decision

Brand direction: “field notes, not fundraising gloss.” A warm paper base, deep moss ink, saffron/orange action color, condensed display typography, oversized editorial numerals, and tactile image crops create a grounded identity. The copy uses a fictional working name and illustrative figures so the page can be adapted to the client’s real NGO details later.

## Implementation notes

- Static React site with responsive sections and no backend.
- CTA buttons scroll to relevant sections; the newsletter and volunteer forms show a local success state as a safe placeholder until connected to a real CRM/form handler.
- Images use remote Unsplash assets as temporary editorial photography; replace with permissioned field photography before launch.
- Accessibility basics included: semantic landmarks, heading hierarchy, alt text, focus-visible styles, reduced-motion support, and mobile-first layout.
