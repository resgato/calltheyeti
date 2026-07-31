import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buildLocationPageJsonLd, buildBreadcrumbJsonLd, buildPageFAQJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Phoenix Plumber | Licensed Plumbing Services",
  description:
    "Licensed Phoenix plumber serving Arcadia, Ahwatukee, North Phoenix, and Downtown. Custom homes, renovations, repairs, water heaters, and more. ROC360510. Call today.",
  keywords: [
    "Phoenix plumber",
    "Phoenix plumbing",
    "Phoenix plumbing services",
    "plumber in Phoenix AZ",
    "Phoenix emergency plumber",
    "Arcadia plumber",
    "Ahwatukee plumber",
    "North Phoenix plumber",
    "Downtown Phoenix plumber",
    "Phoenix water heater repair",
    "Phoenix plumbing repair",
  ],
  openGraph: {
    title: "Phoenix Plumber | Licensed Plumbing Services | Yeti Plumbing",
    description:
      "Licensed Phoenix plumber serving Arcadia, Ahwatukee, North Phoenix, and Downtown. Custom homes, renovations, repairs, water heaters, and more.",
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/phoenix-plumber",
  },
};

export default function PhoenixPlumberPage() {
  const locationJsonLd = buildLocationPageJsonLd({
    city: "Phoenix",
    state: "AZ",
    url: "https://calltheyeti.com/services/phoenix-plumber",
    description: "Licensed Phoenix plumber serving Arcadia, Ahwatukee, North Phoenix, Downtown, and all Phoenix neighborhoods. Custom homes, renovations, repairs, water heaters, and more.",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://calltheyeti.com" },
    { name: "Services", url: "https://calltheyeti.com/services" },
    { name: "Phoenix Plumber", url: "https://calltheyeti.com/services/phoenix-plumber" },
  ]);
  const faqJsonLd = buildPageFAQJsonLd([
    { question: "What areas of Phoenix does Yeti Plumbing serve?", answer: "Yeti Plumbing serves all of Phoenix including Arcadia, Ahwatukee, North Phoenix, Downtown Phoenix, Desert Ridge, Biltmore, Camelback East, Laveen, South Mountain, Maryvale, Encanto, and Paradise Valley Village." },
    { question: "How much does a plumber cost in Phoenix?", answer: "Plumbing costs in Phoenix vary by service. Yeti Plumbing offers upfront, honest pricing with free estimates for most jobs. Call (801) 707-2547 for a quote." },
    { question: "Do you offer same-day plumbing service in Phoenix?", answer: "Yes, Yeti Plumbing offers same-day service for most repairs in Phoenix and surrounding areas." },
  ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
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
            Plumber in Phoenix, AZ
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            As the capital and largest city in Arizona, Phoenix is home to a massive range of properties, from
            historic bungalows near Downtown to sprawling estates in Arcadia and brand-new builds in North Phoenix.
            Yeti Plumbing is a licensed, insured plumbing contractor (ROC360510) serving every corner of the Valley.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Plumbing Services Across Phoenix
              </h2>
              <p className="text-black dark:text-black mb-4">
                Phoenix covers more than 500 square miles, and each neighborhood brings its own plumbing
                challenges. Older homes in the Coronado Historic District and Willo often have galvanized
                steel pipes that corrode over time, leading to low water pressure and discolored water. In
                Arcadia, mid-century ranch homes frequently need full re-pipes and updated sewer lines. The
                newer master-planned communities of North Phoenix and Desert Ridge tend to face hard-water
                scale buildup that shortens the life of water heaters and fixtures.
              </p>
              <p className="text-black dark:text-black mb-4">
                In Ahwatukee, many homes were built during the late 1980s and 1990s and are reaching the
                age where polybutylene or early CPVC supply lines begin to fail. Downtown Phoenix condos
                and lofts present their own set of challenges, tight spaces, shared walls, and high-rise
                plumbing stacks that demand precision work.
              </p>
              <p className="text-black dark:text-black">
                No matter where you are in Phoenix, extreme summer heat accelerates pipe degradation and
                increases water heater demand. Our team understands these Arizona-specific conditions and
                builds every repair and installation to last.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">What We Offer</h2>
              <ul className="text-black dark:text-black space-y-3">
                <li>
                  <Link href="/services/emergency-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Emergency Plumbing
                  </Link>{": "}
                  Fast response for burst pipes, slab leaks, and water heater failures across central Phoenix and the metro. Price quoted before we start.
                </li>
                <li>
                  <Link href="/services/drain-cleaning" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Drain Cleaning
                  </Link>{": "}
                  Clogged drains, main sewer line clearing, camera inspection, and tree root removal for Phoenix homes.
                </li>
                <li>
                  <Link href="/services/custom-homes" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Custom Home Plumbing
                  </Link>{": "}
                  Complete plumbing systems for new luxury builds throughout Phoenix and Paradise Valley.
                </li>
                <li>
                  <Link href="/services/renovations" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Renovation Plumbing
                  </Link>{": "}
                  Kitchen and bathroom remodel plumbing, including layout changes and fixture upgrades.
                </li>
                <li>
                  <Link href="/services/repairs" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Plumbing Repairs
                  </Link>{": "}
                  Leak detection, burst pipe repair, drain clearing, and emergency service.
                </li>
                <li>
                  <Link href="/services/bathtubs-showers" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Bathtubs & Showers
                  </Link>{": "}
                  Installation and repair of tubs, showers, and shower valves.
                </li>
                <li>
                  <Link href="/services/faucets-fixtures" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Faucets & Fixtures
                  </Link>{": "}
                  Faucet replacement, garbage disposal installation, and fixture upgrades.
                </li>
                <li>
                  <Link href="/services/water-heaters" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Water Heaters
                  </Link>{": "}
                  Tank and tankless water heater installation, repair, and replacement.
                </li>
                <li>
                  <Link href="/services/water-softeners" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Water Softeners
                  </Link>{": "}
                  Water softener and filtration systems to combat Phoenix hard water.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Phoenix Neighborhoods We Serve
              </h2>
              <p className="text-black dark:text-black mb-4">
                We work throughout the entire Phoenix metro, including:
              </p>
              <ul className="text-black dark:text-black space-y-2 columns-2">
                <li>Arcadia</li>
                <li>Ahwatukee</li>
                <li>North Phoenix</li>
                <li>Downtown Phoenix</li>
                <li>Desert Ridge</li>
                <li>Biltmore</li>
                <li>Camelback East</li>
                <li>Laveen</li>
                <li>South Mountain</li>
                <li>Maryvale</li>
                <li>Encanto</li>
                <li>Paradise Valley Village</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Why Phoenix Homeowners Choose Yeti Plumbing
              </h2>
              <p className="text-black dark:text-black mb-4">
                Phoenix homeowners deal with some of the hardest municipal water in the country. That mineral
                content wreaks havoc on water heaters, dishwashers, and supply lines. We see the damage firsthand
                every day and know exactly how to address it, from recommending the right water softener to
                installing fixtures designed to withstand hard-water conditions.
              </p>
              <p className="text-black dark:text-black">
                Our team is licensed (ROC360510), insured, and committed to honest pricing. Whether it is a
                quick faucet swap in a Downtown condo or a full plumbing rough-in for a custom home in North
                Phoenix, we treat every job with the same level of care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">What areas of Phoenix does Yeti Plumbing serve?</h3>
                  <p className="text-black dark:text-black">
                    Yeti Plumbing serves all of Phoenix including Arcadia, Ahwatukee, North Phoenix, Downtown Phoenix,
                    Desert Ridge, Biltmore, Camelback East, Laveen, South Mountain, Maryvale, Encanto, and Paradise
                    Valley Village.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">How much does a plumber cost in Phoenix?</h3>
                  <p className="text-black dark:text-black">
                    Plumbing costs in Phoenix vary by service. Yeti Plumbing offers upfront, honest pricing with free
                    estimates for most jobs. Call {siteConfig.phone} for a quote.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Do you offer same-day plumbing service in Phoenix?</h3>
                  <p className="text-black dark:text-black">
                    Yes, Yeti Plumbing offers same-day service for most repairs in Phoenix and surrounding areas.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Call a Phoenix Plumber</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need a plumber in Phoenix? We offer free estimates and same-day service for most repairs.
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
              Planning a renovation or new build? Get a detailed plumbing estimate.
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
                <Link href="/services/mesa-plumber" className="text-brand-700 dark:text-brand-700 hover:underline">
                  Mesa Plumber
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
              <li>Serving All of Phoenix Metro</li>
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
    </main>
  );
}
