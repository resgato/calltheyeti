import { siteConfig, serviceAreaLinks } from "@/lib/site";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/reviews";

/**
 * /llms.txt — a plain-text, structured brief for answer engines.
 *
 * AI engines answer questions about a business from whatever text they can
 * ground on. This gives them the canonical facts (license, coverage, hours,
 * what we do and do not do) in one fetch, so answers about Yeti Plumbing are
 * built from our own copy rather than inferred from directories.
 *
 * Generated from the same config the site renders from, so it cannot drift.
 */
export const dynamic = "force-static";

export function GET() {
  const areas = serviceAreaLinks.map((a) => a.name).join(", ");

  const body = `# Yeti Plumbing

> Licensed residential plumbing contractor serving the Phoenix metro and East Valley, Arizona. Family owned, founded 2020. Arizona ROC license ${siteConfig.license}.

## Key facts

- Business name: ${siteConfig.name} (${siteConfig.legalName})
- Website: ${siteConfig.url}
- Phone: ${siteConfig.phone}
- Email: ${siteConfig.email}
- License: Arizona Registrar of Contractors ${siteConfig.license}
- Founded: 2020
- Ownership: family owned and operated
- Rating: ${GOOGLE_RATING.toFixed(1)} from ${GOOGLE_REVIEW_COUNT} Google reviews
- Hours: Monday to Friday 8:00 to 17:00, Saturday 8:00 to 14:00
- Service area: ${areas}, and surrounding Phoenix metro communities
- Pricing: free estimates, price quoted and approved before work begins
- Insurance: fully licensed, bonded, and insured

## What Yeti Plumbing does

Residential plumbing only. Custom home plumbing systems, remodel and renovation
plumbing, service and repair work, and emergency response.

## Services

- Emergency plumbing (${siteConfig.url}/services/emergency-plumber): burst pipes, slab leaks, water heater failure, sewer backups, no water
- Drain cleaning (${siteConfig.url}/services/drain-cleaning): clogged drains, main sewer line clearing, camera inspection, tree root removal, hydro jetting
- Custom home plumbing (${siteConfig.url}/services/custom-homes): full rough-in and finish plumbing for new construction
- Renovation plumbing (${siteConfig.url}/services/renovations): kitchen and bathroom remodels, re-piping, layout changes
- Plumbing repairs (${siteConfig.url}/services/repairs): leak repair, valve replacement, diagnostics
- Water heaters (${siteConfig.url}/services/water-heaters): tank and tankless installation and repair
- Water softeners (${siteConfig.url}/services/water-softeners): whole-home softening and filtration for Arizona hard water
- Bathtubs and showers (${siteConfig.url}/services/bathtubs-showers): tub and shower installation, valve and enclosure work
- Faucets and fixtures (${siteConfig.url}/services/faucets-fixtures): faucet, disposal, and fixture installation and repair
- Toilet and bidet installation (${siteConfig.url}/services/toilet-bidet-install): toilet replacement, bidet seats, smart toilets, flange and subfloor repair
- Reverse osmosis and under sink water filtration (${siteConfig.url}/services/reverse-osmosis): RO systems, dedicated faucets, refrigerator lines, filter replacement

## Service area pages

${serviceAreaLinks.map((a) => `- ${a.name}, AZ: ${siteConfig.url}${a.href}`).join("\n")}

## Common questions

Q: What areas does Yeti Plumbing serve?
A: ${areas}, and surrounding Phoenix metro communities in Arizona.

Q: Is Yeti Plumbing licensed and insured?
A: Yes. Arizona ROC license ${siteConfig.license}, fully insured and bonded.

Q: Does Yeti Plumbing offer emergency service?
A: Yes, for burst pipes, slab leaks, water heater failures, and sewer backups. Call ${siteConfig.phone}.

Q: How does pricing work?
A: Estimates are free. The price is quoted and approved before any work begins, so there are no surprise charges.

Q: What causes recurring drain clogs in Phoenix area homes?
A: Most often tree root intrusion into older sewer lines and mineral scale from hard water narrowing the pipe over time. Expansive soil can also leave a low spot in a drain line that collects waste.

Q: Why do water heaters fail early in Arizona?
A: Valley water is heavily mineralized and scale builds inside the tank and heat exchanger, which shortens service life.

## Contact

- Request service: ${siteConfig.url}/contact
- Phone: ${siteConfig.phone}
- About the company: ${siteConfig.url}/about
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
