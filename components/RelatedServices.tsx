import Link from "next/link";
import { serviceAreaLinks } from "@/lib/site";

type Slug =
  | "custom-homes"
  | "renovations"
  | "repairs"
  | "emergency-plumber"
  | "drain-cleaning"
  | "water-heaters"
  | "water-softeners"
  | "bathtubs-showers"
  | "faucets-fixtures"
  | "toilet-bidet-install"
  | "reverse-osmosis";

const LABELS: Record<Slug, { name: string; blurb: string }> = {
  "custom-homes": { name: "Custom Home Plumbing", blurb: "Full systems for new builds" },
  renovations: { name: "Renovation Plumbing", blurb: "Kitchen and bath remodels" },
  repairs: { name: "Plumbing Repairs", blurb: "Leaks, valves, and diagnostics" },
  "emergency-plumber": { name: "Emergency Plumbing", blurb: "Burst pipes and slab leaks" },
  "drain-cleaning": { name: "Drain Cleaning", blurb: "Clogs and sewer line clearing" },
  "water-heaters": { name: "Water Heaters", blurb: "Tank and tankless install" },
  "water-softeners": { name: "Water Softeners", blurb: "Hard water treatment" },
  "bathtubs-showers": { name: "Bathtubs & Showers", blurb: "Install and upgrades" },
  "faucets-fixtures": { name: "Faucets & Fixtures", blurb: "Repair and replacement" },
  "toilet-bidet-install": { name: "Toilet & Bidet Install", blurb: "Replacements and bidet seats" },
  "reverse-osmosis": { name: "Reverse Osmosis", blurb: "Under sink drinking water" },
};

/**
 * Related-service links, chosen by how the jobs actually relate rather than
 * dumping the full nav. Gives every service page contextual outbound links and
 * gives lower-traffic pages inbound ones, which both search and AI engines use
 * to understand how these services connect.
 */
const RELATED: Record<Slug, Slug[]> = {
  "custom-homes": ["renovations", "water-heaters", "bathtubs-showers", "faucets-fixtures"],
  renovations: ["bathtubs-showers", "toilet-bidet-install", "faucets-fixtures", "custom-homes"],
  repairs: ["emergency-plumber", "drain-cleaning", "toilet-bidet-install", "water-heaters"],
  "emergency-plumber": ["repairs", "drain-cleaning", "water-heaters"],
  "drain-cleaning": ["repairs", "emergency-plumber", "water-softeners"],
  "water-heaters": ["emergency-plumber", "water-softeners", "repairs"],
  "water-softeners": ["reverse-osmosis", "water-heaters", "drain-cleaning", "faucets-fixtures"],
  "bathtubs-showers": ["renovations", "toilet-bidet-install", "faucets-fixtures", "drain-cleaning"],
  "faucets-fixtures": ["bathtubs-showers", "toilet-bidet-install", "repairs", "renovations"],
  "toilet-bidet-install": ["bathtubs-showers", "faucets-fixtures", "repairs", "renovations"],
  "reverse-osmosis": ["water-softeners", "faucets-fixtures", "repairs"],
};

export function RelatedServices({ current }: { current: Slug }) {
  const related = RELATED[current] ?? [];

  return (
    <section aria-labelledby="related-services" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <h2 id="related-services" className="text-2xl font-semibold tracking-tight text-ink">
          Related Plumbing Services
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((slug) => (
            <li key={slug}>
              <Link
                href={`/services/${slug}`}
                className="block h-full rounded-2xl border border-line bg-white p-5 hover:border-brand-600"
              >
                <span className="block font-semibold text-brand-700">{LABELS[slug].name}</span>
                <span className="mt-1 block text-sm text-ink-soft">{LABELS[slug].blurb}</span>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-lg font-semibold text-ink">Where We Provide This Service</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {serviceAreaLinks.map((area) => (
            <li key={area.href}>
              <Link
                href={area.href}
                className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:border-brand-600 hover:text-brand-700"
              >
                {area.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
