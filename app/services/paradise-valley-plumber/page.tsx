import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buildLocationPageJsonLd, buildBreadcrumbJsonLd, buildPageFAQJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "Paradise Valley Plumber | Luxury Estate Plumbing",
  description:
    "Licensed Paradise Valley, AZ plumber for luxury estates and remodels. Serving Clearwater Hills, Camelback Country Club, Mummy Mountain, and 85253. ROC360510.",
  keywords: [
    "Paradise Valley plumber",
    "plumber Paradise Valley AZ",
    "plumbing Paradise Valley AZ",
    "Paradise Valley plumbing services",
    "Paradise Valley estate plumber",
    "luxury home plumber Paradise Valley",
    "Camelback Mountain plumber",
    "Clearwater Hills plumber",
    "85253 plumber",
    "Paradise Valley water heater repair",
  ],
  openGraph: {
    title: "Paradise Valley Plumber | Estate & Luxury Home Plumbing | Yeti Plumbing",
    description:
      "Licensed Paradise Valley, AZ plumber for luxury estates and remodels. Serving Clearwater Hills, Camelback Country Club, Mummy Mountain, and 85253.",
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/paradise-valley-plumber",
  },
};

export default function ParadiseValleyPlumberPage() {
  const locationJsonLd = buildLocationPageJsonLd({
    city: "Paradise Valley",
    state: "AZ",
    url: "https://calltheyeti.com/services/paradise-valley-plumber",
    description: "Licensed Paradise Valley, AZ plumber for luxury estates and remodels. Serving Clearwater Hills, Camelback Country Club, Mummy Mountain, and 85253.",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://calltheyeti.com" },
    { name: "Services", url: "https://calltheyeti.com/services" },
    { name: "Paradise Valley Plumber", url: "https://calltheyeti.com/services/paradise-valley-plumber" },
  ]);
  const faqJsonLd = buildPageFAQJsonLd([
    { question: "Do you serve all of Paradise Valley, AZ?", answer: "Yes. Yeti Plumbing serves the entire town of Paradise Valley (85253), including Clearwater Hills, Camelback Country Club, Cheney Estates, Casa Blanca, Finisterre, and the Mummy Mountain and Camelback Mountain corridors." },
    { question: "Do you work on large estate properties?", answer: "Yes. Paradise Valley estates often have multiple wings, guest houses, casitas, pool equipment, and long hot-water runs. We regularly design, install, and service plumbing on acre-plus estate properties." },
    { question: "Can you work with my architect, builder, or designer?", answer: "Yes. Much of our Paradise Valley work comes through custom home builders, architects, and interior designers. We coordinate rough-in schedules, fixture specifications, and finish installs directly with your project team." },
    { question: "Do you offer emergency plumbing in Paradise Valley?", answer: "Yes. We provide emergency plumbing throughout Paradise Valley for burst pipes, slab leaks, water heater failures, and major leaks. Call (801) 707-2547 for immediate dispatch." },
  ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd data={locationJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <div className="mb-8">
        <Link href="/services" className="text-red-700 dark:text-red-700 underline">
          ← Back to Services
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-black dark:text-black">
            Plumber in Paradise Valley, AZ — Yeti Plumbing
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Paradise Valley is Arizona&apos;s most exclusive address — acre-plus estate lots tucked between
            Camelback Mountain and Mummy Mountain, world-class resorts, and homes where every detail is
            specified. Plumbing here is not a commodity job. Yeti Plumbing brings estate-level workmanship,
            discretion, and clean job sites to every property in 85253.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Plumbing for Paradise Valley Estates
              </h2>
              <p className="text-black dark:text-black mb-4">
                Estate properties in Paradise Valley present plumbing challenges you simply do not find in
                standard tract housing. Homes sprawl across large lots, which means long hot-water runs from
                the heater to the far end of the house. Without a properly designed recirculation system,
                you wait minutes for hot water at the primary bath. We design and install multi-zone
                recirculation so hot water arrives on demand everywhere.
              </p>
              <p className="text-black dark:text-black mb-4">
                Guest houses, casitas, pool houses, and outdoor kitchens each add their own supply, drain,
                and gas requirements. Many Paradise Valley properties also carry extensive irrigation and
                pool equipment tied into the domestic water system. We map the whole system before we touch
                anything, so a repair in one area does not create a surprise somewhere else.
              </p>
              <p className="text-black dark:text-black">
                The town&apos;s housing stock splits roughly in two. Mid-century estates built from the 1950s
                through the 1970s often still carry original galvanized or early copper supply lines that are
                well past their service life. Newer luxury rebuilds and teardown-replacements need precise
                rough-in work matched to high-end fixture schedules. We work on both, and we approach them
                very differently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Our Paradise Valley Services
              </h2>
              <ul className="text-black dark:text-black space-y-3">
                <li>
                  <Link href="/services/custom-homes" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Custom Home Plumbing
                  </Link>{" "}
                  — Full plumbing design and installation for new Paradise Valley estates, casitas, and guest houses.
                </li>
                <li>
                  <Link href="/services/renovations" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Renovation Plumbing
                  </Link>{" "}
                  — Primary suite and spa bath remodels, chef&apos;s kitchen upgrades, and whole-estate re-pipes.
                </li>
                <li>
                  <Link href="/services/emergency-plumber" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Emergency Plumbing
                  </Link>{" "}
                  — Burst pipes, slab leaks, and water heater failures handled fast to limit damage to finishes.
                </li>
                <li>
                  <Link href="/services/repairs" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Plumbing Repairs
                  </Link>{" "}
                  — Leak repair, valve replacement, and diagnostics across large estate properties.
                </li>
                <li>
                  <Link href="/services/drain-cleaning" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Drain Cleaning
                  </Link>{" "}
                  — Camera inspection and clearing for long, complex estate drain runs and mature-tree root intrusion.
                </li>
                <li>
                  <Link href="/services/bathtubs-showers" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Bathtubs &amp; Showers
                  </Link>{" "}
                  — Freestanding soaking tubs, steam showers, and multi-head and body-spray shower systems.
                </li>
                <li>
                  <Link href="/services/faucets-fixtures" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Faucets &amp; Fixtures
                  </Link>{" "}
                  — Designer and imported fixture installation, pot fillers, and specialty valve work.
                </li>
                <li>
                  <Link href="/services/water-heaters" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Water Heaters
                  </Link>{" "}
                  — Tankless and multi-unit systems sized for estates with heavy simultaneous hot-water demand.
                </li>
                <li>
                  <Link href="/services/water-softeners" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Water Softeners
                  </Link>{" "}
                  — Whole-home softening and filtration to protect premium fixtures from Valley hard water.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Hard Water and Paradise Valley Fixtures
              </h2>
              <p className="text-black dark:text-black mb-4">
                Hard water is a Valley-wide reality, and in Paradise Valley it is an expensive one. Mineral
                scale attacks exactly the things homeowners here have invested the most in: unlacquered brass
                and living-finish faucets, frameless glass shower enclosures, steam generators, and tankless
                heat exchangers. Scale buildup dulls finishes permanently and shortens equipment life.
              </p>
              <p className="text-black dark:text-black">
                A properly sized whole-home water softener, often paired with filtration, is one of the
                highest-return upgrades available on an estate property. We size the system to actual fixture
                count and peak demand rather than selling a one-size unit, and we place equipment where it
                stays serviceable and out of sight.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Paradise Valley Neighborhoods We Serve
              </h2>
              <p className="text-black dark:text-black mb-4">
                We provide plumbing services throughout the Town of Paradise Valley, including:
              </p>
              <ul className="text-black dark:text-black space-y-2 columns-2">
                <li>Clearwater Hills</li>
                <li>Camelback Country Club</li>
                <li>Cheney Estates</li>
                <li>Casa Blanca</li>
                <li>Finisterre</li>
                <li>Mummy Mountain</li>
                <li>Camelback Mountain corridor</li>
                <li>Tatum Canyon</li>
                <li>Cameldale</li>
                <li>Zip code 85253</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Why Paradise Valley Homeowners Choose Us
              </h2>
              <p className="text-black dark:text-black mb-4">
                In Paradise Valley, how a contractor works matters as much as the work itself. We show up when
                we say we will, protect stone floors and millwork with drop cloths and shoe covers, keep the
                job site tidy, and leave the property the way we found it. Many of our Paradise Valley clients
                are not on site during the work, and they need to trust the crew in their home.
              </p>
              <p className="text-black dark:text-black">
                Paradise Valley sits directly between Phoenix and Scottsdale, squarely inside our core service
                area, so response times are short. We are licensed (ROC360510), fully insured, and we warranty
                our work. Whether it is a single failed valve or the complete plumbing package on a new estate,
                you get the same standard.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Do you serve all of Paradise Valley, AZ?</h3>
                  <p className="text-black dark:text-black">
                    Yes. Yeti Plumbing serves the entire town of Paradise Valley (85253), including Clearwater
                    Hills, Camelback Country Club, Cheney Estates, Casa Blanca, Finisterre, and the Mummy
                    Mountain and Camelback Mountain corridors.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Do you work on large estate properties?</h3>
                  <p className="text-black dark:text-black">
                    Yes. Paradise Valley estates often have multiple wings, guest houses, casitas, pool
                    equipment, and long hot-water runs. We regularly design, install, and service plumbing on
                    acre-plus estate properties.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Can you work with my architect, builder, or designer?</h3>
                  <p className="text-black dark:text-black">
                    Yes. Much of our Paradise Valley work comes through custom home builders, architects, and
                    interior designers. We coordinate rough-in schedules, fixture specifications, and finish
                    installs directly with your project team.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Do you offer emergency plumbing in Paradise Valley?</h3>
                  <p className="text-black dark:text-black">
                    Yes. We provide emergency plumbing throughout Paradise Valley for burst pipes, slab leaks,
                    water heater failures, and major leaks. Call {siteConfig.phone} for immediate dispatch.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Call a Paradise Valley Plumber</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need a plumber in Paradise Valley? We offer free estimates and prompt scheduling.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-block bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800"
            >
              Call Now: {siteConfig.phone}
            </a>
          </div>

          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Request a Quote</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Planning an estate remodel or new build? Get a detailed plumbing estimate.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800"
            >
              Request Quote
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Other Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/scottsdale-plumber" className="text-red-700 dark:text-red-700 hover:underline">
                  Scottsdale Plumber
                </Link>
              </li>
              <li>
                <Link href="/services/phoenix-plumber" className="text-red-700 dark:text-red-700 hover:underline">
                  Phoenix Plumber
                </Link>
              </li>
              <li>
                <Link href="/services/mesa-plumber" className="text-red-700 dark:text-red-700 hover:underline">
                  Mesa Plumber
                </Link>
              </li>
              <li>
                <Link href="/services/gilbert-plumber" className="text-red-700 dark:text-red-700 hover:underline">
                  Gilbert Plumber
                </Link>
              </li>
              <li>
                <Link href="/services/chandler-plumber" className="text-red-700 dark:text-red-700 hover:underline">
                  Chandler Plumber
                </Link>
              </li>
              <li>
                <Link href="/services/queen-creek-plumber" className="text-red-700 dark:text-red-700 hover:underline">
                  Queen Creek Plumber
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Why Choose Yeti Plumbing?</h3>
            <ul className="space-y-2 text-sm text-black dark:text-black">
              <li>Licensed &amp; Insured (ROC360510)</li>
              <li>Estate &amp; Luxury Home Experience</li>
              <li>Discreet, Clean, Professional</li>
              <li>Upfront, Honest Pricing</li>
              <li>Warranty on All Work</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-14 overflow-hidden rounded-xl">
        <ConsultationCTA />
      </div>
    </main>
  );
}
