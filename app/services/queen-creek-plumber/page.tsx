import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import { buildLocationPageJsonLd, buildBreadcrumbJsonLd, buildPageFAQJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Queen Creek Plumber | Licensed Plumbing Services | Yeti Plumbing",
  description:
    "Licensed Queen Creek, AZ plumber serving Sossaman Farms, Hastings Farms, and Queen Creek Marketplace. New home plumbing, repairs, water heaters, and more. ROC360510.",
  keywords: [
    "Queen Creek plumber",
    "Queen Creek plumbing",
    "Queen Creek plumbing services",
    "plumber in Queen Creek AZ",
    "Queen Creek emergency plumber",
    "Sossaman Farms plumber",
    "Hastings Farms plumber",
    "Queen Creek new construction plumber",
    "Queen Creek water heater repair",
    "Queen Creek plumbing repair",
  ],
  openGraph: {
    title: "Queen Creek Plumber | Licensed Plumbing Services | Yeti Plumbing",
    description:
      "Licensed Queen Creek, AZ plumber serving Sossaman Farms, Hastings Farms, and Queen Creek Marketplace. New home plumbing, repairs, water heaters, and more.",
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/queen-creek-plumber",
  },
};

export default function QueenCreekPlumberPage() {
  const locationJsonLd = buildLocationPageJsonLd({
    city: "Queen Creek",
    state: "AZ",
    url: "https://calltheyeti.com/services/queen-creek-plumber",
    description: "Licensed Queen Creek, AZ plumber serving Sossaman Farms, Hastings Farms, and Queen Creek Marketplace. New home plumbing, repairs, water heaters, and more.",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://calltheyeti.com" },
    { name: "Services", url: "https://calltheyeti.com/services" },
    { name: "Queen Creek Plumber", url: "https://calltheyeti.com/services/queen-creek-plumber" },
  ]);
  const faqJsonLd = buildPageFAQJsonLd([
    { question: "Does Yeti Plumbing serve Queen Creek?", answer: "Yes, Yeti Plumbing provides full plumbing services throughout Queen Creek including Sossaman Farms, Hastings Farms, and all surrounding neighborhoods." },
    { question: "Do you offer new construction plumbing in Queen Creek?", answer: "Yes, with Queen Creek's rapid growth, Yeti Plumbing works with builders and homeowners on new construction plumbing throughout the area." },
  ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Script id="location-jsonld" type="application/ld+json">
        {JSON.stringify(locationJsonLd)}
      </Script>
      <Script id="breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <div className="mb-8">
        <Link href="/services" className="text-red-700 dark:text-red-700 underline">
          ← Back to Services
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-black dark:text-black">
            Plumber in Queen Creek, AZ — Yeti Plumbing
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Queen Creek is one of the fastest-growing towns in the Phoenix metro area. Situated in the
            far southeast Valley, roughly 35 miles from Downtown Phoenix, Queen Creek has seen an
            explosion of new residential development over the past decade. With new homes come new
            plumbing needs — and Yeti Plumbing is here to serve this growing community.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                New Construction Plumbing in Queen Creek
              </h2>
              <p className="text-black dark:text-black mb-4">
                Unlike many other Valley cities, the vast majority of Queen Creek&apos;s housing stock is
                brand new. Communities like Sossaman Farms, Hastings Farms, Encanterra, and the
                developments surrounding the Queen Creek Marketplace have been built within the last five
                to ten years. While new homes come with new plumbing systems, they are not without issues.
              </p>
              <p className="text-black dark:text-black mb-4">
                Production builders often install builder-grade fixtures and water heaters that meet
                minimum code requirements but fall short of long-term performance expectations. Homeowners
                in Queen Creek frequently contact us to upgrade faucets, replace low-capacity garbage
                disposals, install water softeners that the builder did not include, and add recirculation
                pumps so hot water reaches distant bathrooms faster.
              </p>
              <p className="text-black dark:text-black">
                Queen Creek also draws water from local wells and the Central Arizona Project canal system.
                The water quality can vary significantly by subdivision, and many homeowners are surprised
                by just how hard the water is once they move in. Without a softener, scale buildup can
                begin damaging a brand-new water heater within the first few years of ownership.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Common Plumbing Needs in Queen Creek
              </h2>
              <p className="text-black dark:text-black mb-4">
                Because Queen Creek is dominated by new construction, the plumbing issues here differ from
                older parts of the Valley. The most common calls we handle include:
              </p>
              <ul className="text-black dark:text-black space-y-2">
                <li><strong>Builder-Grade Upgrades:</strong> Replacing entry-level faucets, shower valves, and fixtures with higher-quality alternatives that last longer and perform better.</li>
                <li><strong>Water Softener Installation:</strong> Many new Queen Creek homes are built without water treatment. Adding a softener protects the entire plumbing system and appliances.</li>
                <li><strong>Hot Water Recirculation:</strong> Larger Queen Creek floor plans mean long pipe runs from the water heater. A recirculation pump eliminates the wait for hot water.</li>
                <li><strong>Outdoor Plumbing:</strong> RV gates with hookups, backyard kitchens, fire features with gas lines, and pool equipment connections are popular additions in Queen Creek.</li>
                <li><strong>Warranty Callbacks:</strong> When builder warranty work falls short or expires, homeowners need a reliable plumber to pick up where the builder left off.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Our Queen Creek Services</h2>
              <ul className="text-black dark:text-black space-y-3">
                <li>
                  <Link href="/services/custom-homes" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Custom Home Plumbing
                  </Link>{" "}
                  — Full plumbing design and installation for custom builds on Queen Creek acreage and lot properties.
                </li>
                <li>
                  <Link href="/services/renovations" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Renovation Plumbing
                  </Link>{" "}
                  — Fixture and layout upgrades to improve on builder-standard plumbing.
                </li>
                <li>
                  <Link href="/services/repairs" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Plumbing Repairs
                  </Link>{" "}
                  — Leak repair, drain cleaning, and emergency plumbing for Queen Creek homes.
                </li>
                <li>
                  <Link href="/services/bathtubs-showers" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Bathtubs & Showers
                  </Link>{" "}
                  — Shower valve upgrades, custom shower installations, and tub replacements.
                </li>
                <li>
                  <Link href="/services/faucets-fixtures" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Faucets & Fixtures
                  </Link>{" "}
                  — Upgrade builder-grade fixtures to premium faucets, disposals, and hardware.
                </li>
                <li>
                  <Link href="/services/water-heaters" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Water Heaters
                  </Link>{" "}
                  — Tankless water heater upgrades and recirculation pump installation for large floor plans.
                </li>
                <li>
                  <Link href="/services/water-softeners" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Water Softeners
                  </Link>{" "}
                  — Water softener installation to protect new Queen Creek homes from hard-water damage.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Queen Creek Communities We Serve
              </h2>
              <p className="text-black dark:text-black mb-4">
                We work throughout all of Queen Creek and surrounding areas, including:
              </p>
              <ul className="text-black dark:text-black space-y-2 columns-2">
                <li>Sossaman Farms</li>
                <li>Hastings Farms</li>
                <li>Queen Creek Marketplace area</li>
                <li>Encanterra</li>
                <li>Cortina</li>
                <li>Meridian</li>
                <li>Bella Via</li>
                <li>Orchard Ranchettes</li>
                <li>San Tan Valley (nearby)</li>
                <li>Gold Canyon (nearby)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Serving Queen Creek&apos;s Growing Community
              </h2>
              <p className="text-black dark:text-black mb-4">
                Queen Creek is farther from central Phoenix than other Valley cities, and many plumbing
                companies charge extra for the drive or simply decline to serve the area. Yeti Plumbing
                does not. Queen Creek is part of our core service territory, and we schedule jobs here
                regularly throughout the week.
              </p>
              <p className="text-black dark:text-black">
                We are licensed (ROC360510), fully insured, and provide the same upfront pricing and
                warranty coverage in Queen Creek that we offer everywhere we work. Whether you just moved
                into a new-build home and want to upgrade the plumbing, or you need emergency service on a
                weekend, give us a call.
              </p>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Call a Queen Creek Plumber</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need a plumber in Queen Creek? We serve the area regularly — no extra trip charges.
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
              Building a custom home or upgrading builder-grade plumbing? Get a free estimate.
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
                <Link href="/services/scottsdale-plumber" className="text-red-700 dark:text-red-700 hover:underline">
                  Scottsdale Plumber
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
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Why Choose Yeti Plumbing?</h3>
            <ul className="space-y-2 text-sm text-black dark:text-black">
              <li>Licensed & Insured (ROC360510)</li>
              <li>No Extra Trip Charges for Queen Creek</li>
              <li>New Construction Specialists</li>
              <li>Upfront, Honest Pricing</li>
              <li>Warranty on All Work</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
