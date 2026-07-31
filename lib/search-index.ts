import { serviceAreaLinks } from "@/lib/site";

export type SearchEntry = {
  title: string;
  href: string;
  category: "Service" | "Service Area" | "Company";
  /** Extra terms people actually type that are not in the title. */
  terms: string[];
};

const services: SearchEntry[] = [
  {
    title: "Emergency Plumbing",
    href: "/services/emergency-plumber",
    category: "Service",
    terms: ["emergency", "burst pipe", "slab leak", "flood", "no water", "sewage backup", "urgent", "24 hour", "leaking"],
  },
  {
    title: "Drain Cleaning",
    href: "/services/drain-cleaning",
    category: "Service",
    terms: ["clog", "clogged drain", "sewer line", "backup", "snake", "hydro jetting", "roots", "slow drain", "camera"],
  },
  {
    title: "Sewer Line Repair",
    href: "/services/sewer-line-repair",
    category: "Service",
    terms: ["sewer", "sewer line", "main line", "lateral", "sewage", "collapsed pipe", "roots", "camera inspection", "trenchless", "belly", "backup"],
  },
  {
    title: "Water Heaters",
    href: "/services/water-heaters",
    category: "Service",
    terms: ["hot water", "tankless", "no hot water", "water heater leaking", "replacement", "install"],
  },
  {
    title: "Water Softeners",
    href: "/services/water-softeners",
    category: "Service",
    terms: ["hard water", "softener", "scale", "mineral", "salt", "conditioner", "water treatment"],
  },
  {
    title: "Reverse Osmosis & Water Filters",
    href: "/services/reverse-osmosis",
    category: "Service",
    terms: ["ro", "reverse osmosis", "under sink filter", "drinking water", "filtration", "water filter", "purifier", "ice maker"],
  },
  {
    title: "Toilet & Bidet Installation",
    href: "/services/toilet-bidet-install",
    category: "Service",
    terms: ["toilet", "bidet", "running toilet", "smart toilet", "flange", "wax ring", "toilet replacement", "leaking toilet"],
  },
  {
    title: "Plumbing Repairs",
    href: "/services/repairs",
    category: "Service",
    terms: ["repair", "leak", "fix", "pinhole", "valve", "pipe repair", "diagnostics"],
  },
  {
    title: "Bathtubs & Showers",
    href: "/services/bathtubs-showers",
    category: "Service",
    terms: ["tub", "shower", "shower valve", "walk in shower", "tub to shower", "shower pan", "enclosure"],
  },
  {
    title: "Faucets & Fixtures",
    href: "/services/faucets-fixtures",
    category: "Service",
    terms: ["faucet", "fixture", "dripping", "garbage disposal", "sink", "pot filler"],
  },
  {
    title: "Custom Home Plumbing",
    href: "/services/custom-homes",
    category: "Service",
    terms: ["new construction", "custom home", "rough in", "builder", "new build"],
  },
  {
    title: "Renovation Plumbing",
    href: "/services/renovations",
    category: "Service",
    terms: ["remodel", "renovation", "kitchen remodel", "bathroom remodel", "re-pipe", "repipe"],
  },
];

const company: SearchEntry[] = [
  { title: "All Services", href: "/services", category: "Company", terms: ["services", "what we do"] },
  { title: "Contact Us", href: "/contact", category: "Company", terms: ["contact", "quote", "estimate", "request service", "phone", "email"] },
  { title: "About Yeti Plumbing", href: "/about", category: "Company", terms: ["about", "who", "license", "roc360510", "family owned", "insured"] },
];

const areas: SearchEntry[] = serviceAreaLinks.map((a) => ({
  title: `${a.name} Plumber`,
  href: a.href,
  category: "Service Area" as const,
  terms: [a.name.toLowerCase(), "near me", "plumber near me", `${a.name.toLowerCase()} az`],
}));

export const searchIndex: SearchEntry[] = [...services, ...areas, ...company];

/**
 * Ranked substring match. Title hits outrank term hits, and a prefix outranks a
 * match in the middle, so typing "wat" surfaces Water Heaters before a page
 * that merely mentions water.
 */
export function searchSite(query: string, limit = 6): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  return searchIndex
    .map((entry) => {
      const title = entry.title.toLowerCase();
      let score = 0;
      if (title.startsWith(q)) score = 100;
      else if (title.includes(q)) score = 70;
      else {
        const term = entry.terms.find((t) => t.includes(q));
        if (term) score = term.startsWith(q) ? 50 : 30;
      }
      return { entry, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, limit)
    .map((r) => r.entry);
}
