import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buildLocationPageJsonLd, buildBreadcrumbJsonLd, buildPageFAQJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "Mesa Plumber | Licensed Plumbing Services",
  description:
    "Licensed Mesa, AZ plumber serving East Mesa, Superstition Springs, and Mesa Riverview. Repairs, water heaters, renovations, and custom home plumbing. ROC360510.",
  keywords: [
    "Mesa plumber",
    "Mesa plumbing",
    "Mesa plumbing services",
    "plumber in Mesa AZ",
    "Mesa emergency plumber",
    "East Mesa plumber",
    "Superstition Springs plumber",
    "Mesa Riverview plumber",
    "Mesa water heater repair",
    "Mesa plumbing repair",
  ],
  openGraph: {
    title: "Mesa Plumber | Licensed Plumbing Services | Yeti Plumbing",
    description:
      "Licensed Mesa, AZ plumber serving East Mesa, Superstition Springs, and Mesa Riverview. Repairs, water heaters, renovations, and custom home plumbing.",
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/mesa-plumber",
  },
};

export default function MesaPlumberPage() {
  const locationJsonLd = buildLocationPageJsonLd({
    city: "Mesa",
    state: "AZ",
    url: "https://calltheyeti.com/services/mesa-plumber",
    description: "Licensed Mesa, AZ plumber serving East Mesa, Superstition Springs, and Mesa Riverview. Repairs, water heaters, renovations, and custom home plumbing.",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://calltheyeti.com" },
    { name: "Services", url: "https://calltheyeti.com/services" },
    { name: "Mesa Plumber", url: "https://calltheyeti.com/services/mesa-plumber" },
  ]);
  const faqJsonLd = buildPageFAQJsonLd([
    { question: "What areas of Mesa does Yeti Plumbing serve?", answer: "Yeti Plumbing serves all of Mesa including East Mesa, Superstition Springs, Mesa Riverview, and surrounding neighborhoods." },
    { question: "Do you offer emergency plumbing in Mesa?", answer: "Yes, Yeti Plumbing provides emergency plumbing service throughout Mesa with rapid response times." },
  ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-12">
      <JsonLd data={locationJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <div className="mb-8">
        <Link href="/services" className="text-brand-700 dark:text-brand-700 underline">
          ← Back to Services
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-black dark:text-black">
            Plumber in Mesa, AZ
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Mesa is the third-largest city in Arizona and one of the biggest in the entire country. With
            decades of residential growth spanning from the 1950s through today, the city has an incredibly
            diverse housing stock, and plumbing to match. Yeti Plumbing provides licensed, professional
            plumbing services across all of Mesa.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Mesa Plumbing Challenges
              </h2>
              <p className="text-black dark:text-black mb-4">
                Mesa sits in the East Valley and draws water from a mix of Salt River Project and
                municipal sources. The water here is notoriously hard, averaging 15 to 25 grains per
                gallon, which means calcium and mineral deposits accumulate quickly inside pipes, water
                heaters, and appliances. Homes without a water softener often see water heater failures
                years earlier than expected.
              </p>
              <p className="text-black dark:text-black mb-4">
                The older sections of Mesa near Main Street and the Mesa Arts District feature homes from
                the 1950s through 1970s. These properties commonly have original cast-iron drain lines
                that are prone to root intrusion and corrosion. Many also still have galvanized supply
                lines that restrict flow and leach rust.
              </p>
              <p className="text-black dark:text-black">
                In contrast, East Mesa and the areas near Superstition Springs and Signal Butte saw rapid
                development in the 2000s. These homes are relatively new, but the desert soil conditions, expansive clay that shifts during monsoon season, can stress slab foundations and the
                plumbing lines beneath them. Slab leaks are a common call we handle in these communities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Our Mesa Plumbing Services</h2>
              <ul className="text-black dark:text-black space-y-3">
                <li>
                  <Link href="/services/emergency-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Emergency Plumbing
                  </Link>{": "}
                  Fast response for burst pipes, slab leaks, and water heater failures across Mesa. Price quoted before we start.
                </li>
                <li>
                  <Link href="/services/drain-cleaning" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Drain Cleaning
                  </Link>{": "}
                  Clogged drains, main sewer line clearing, camera inspection, and tree root removal for Mesa homes.
                </li>
                <li>
                  <Link href="/services/custom-homes" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Custom Home Plumbing
                  </Link>{": "}
                  Full plumbing installations for new construction in East Mesa and surrounding areas.
                </li>
                <li>
                  <Link href="/services/renovations" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Renovation Plumbing
                  </Link>{": "}
                  Re-piping, layout changes, and fixture upgrades for Mesa kitchen and bath remodels.
                </li>
                <li>
                  <Link href="/services/repairs" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Plumbing Repairs
                  </Link>{": "}
                  Slab leak repair, drain cleaning, water line replacement, and emergency service.
                </li>
                <li>
                  <Link href="/services/bathtubs-showers" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Bathtubs & Showers
                  </Link>{": "}
                  Tub and shower installation, valve replacement, and tile-ready rough-ins.
                </li>
                <li>
                  <Link href="/services/faucets-fixtures" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Faucets & Fixtures
                  </Link>{": "}
                  Faucet installation, garbage disposals, and fixture repair throughout Mesa.
                </li>
                <li>
                  <Link href="/services/water-heaters" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Water Heaters
                  </Link>{": "}
                  Tank and tankless water heater installation and repair. Sediment flushing for Mesa hard water.
                </li>
                <li>
                  <Link href="/services/water-softeners" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Water Softeners
                  </Link>{": "}
                  Water softener installation and maintenance to protect your Mesa home from mineral damage.
                </li>
                <li>
                  <Link href="/services/toilet-bidet-install" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Toilet &amp; Bidet Installation
                  </Link>{": "}
                  Toilet replacement, bidet seats, and flange repair for Mesa homes.
                </li>
                <li>
                  <Link href="/services/reverse-osmosis" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Reverse Osmosis
                  </Link>{": "}
                  Under sink drinking water filtration, a common upgrade given Mesa hard water.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Mesa Neighborhoods We Serve
              </h2>
              <p className="text-black dark:text-black mb-4">
                Our team works throughout all of Mesa, including:
              </p>
              <ul className="text-black dark:text-black space-y-2 columns-2">
                <li>East Mesa</li>
                <li>Mesa Riverview</li>
                <li>Superstition Springs</li>
                <li>Las Sendas</li>
                <li>Red Mountain</li>
                <li>Mesa Arts District</li>
                <li>Dobson Ranch</li>
                <li>Alta Mesa</li>
                <li>Signal Butte</li>
                <li>Falcon Field</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Why Mesa Homeowners Trust Yeti Plumbing
              </h2>
              <p className="text-black dark:text-black mb-4">
                Mesa is located just east of Phoenix, and many of our customers here appreciate that we
                know the East Valley inside and out. We understand the specific soil conditions, water
                quality, and housing styles that define Mesa. Whether you own a vintage ranch-style home
                near downtown or a newer two-story in Eastmark, we have the experience to handle your
                plumbing needs.
              </p>
              <p className="text-black dark:text-black">
                We are licensed (ROC360510), fully insured, and offer upfront pricing on every job. From a
                simple faucet replacement to a complete re-pipe, we treat your Mesa home with respect and
                get the work done right the first time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">What areas of Mesa does Yeti Plumbing serve?</h3>
                  <p className="text-black dark:text-black">
                    Yeti Plumbing serves all of Mesa including East Mesa, Superstition Springs, Mesa Riverview,
                    Las Sendas, Red Mountain, Dobson Ranch, and surrounding neighborhoods.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Do you offer emergency plumbing in Mesa?</h3>
                  <p className="text-black dark:text-black">
                    Yes, Yeti Plumbing provides emergency plumbing service throughout Mesa with rapid response times.
                    Call {siteConfig.phone} for immediate assistance.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Call a Mesa Plumber</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need a plumber in Mesa? We offer free estimates and same-day service for most repairs.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-block bg-brand-600 text-white px-4 py-2 rounded-full hover:bg-brand-700"
            >
              Call Now: {siteConfig.phone}
            </a>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Request a Quote</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Planning a remodel or need a repair? Get a free plumbing estimate.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-600 text-white px-4 py-2 rounded-full hover:bg-brand-700"
            >
              Request Quote
            </Link>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Other Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/paradise-valley-plumber" className="text-brand-700 dark:text-brand-700 hover:underline">
                  Paradise Valley Plumber
                </Link>
              </li>
              <li>
                <Link href="/services/phoenix-plumber" className="text-brand-700 dark:text-brand-700 hover:underline">
                  Phoenix Plumber
                </Link>
              </li>
              <li>
                <Link href="/services/scottsdale-plumber" className="text-brand-700 dark:text-brand-700 hover:underline">
                  Scottsdale Plumber
                </Link>
              </li>
              <li>
                <Link href="/services/gilbert-plumber" className="text-brand-700 dark:text-brand-700 hover:underline">
                  Gilbert Plumber
                </Link>
              </li>
              <li>
                <Link href="/services/chandler-plumber" className="text-brand-700 dark:text-brand-700 hover:underline">
                  Chandler Plumber
                </Link>
              </li>
              <li>
                <Link href="/services/queen-creek-plumber" className="text-brand-700 dark:text-brand-700 hover:underline">
                  Queen Creek Plumber
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Why Choose Yeti Plumbing?</h3>
            <ul className="space-y-2 text-sm text-black dark:text-black">
              <li>Licensed & Insured (ROC360510)</li>
              <li>East Valley Plumbing Experts</li>
              <li>Same-Day Service Available</li>
              <li>Upfront, Honest Pricing</li>
              <li>Warranty on All Work</li>
            </ul>
            <Link href="/about" className="mt-4 inline-block text-sm font-medium text-brand-700 hover:underline">
              About Yeti Plumbing
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 overflow-hidden rounded-2xl">
        <ConsultationCTA />
      </div>
    </main>
  );
}
