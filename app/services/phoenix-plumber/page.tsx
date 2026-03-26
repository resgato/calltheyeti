import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Phoenix Plumber | Licensed Plumbing Services | Yeti Plumbing",
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
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <Link href="/services" className="text-red-700 dark:text-red-700 underline">
          ← Back to Services
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-black dark:text-black">
            Plumber in Phoenix, AZ — Yeti Plumbing
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            As the capital and largest city in Arizona, Phoenix is home to a massive range of properties — from
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
                and lofts present their own set of challenges — tight spaces, shared walls, and high-rise
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
                  <Link href="/services/custom-homes" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Custom Home Plumbing
                  </Link>{" "}
                  — Complete plumbing systems for new luxury builds throughout Phoenix and Paradise Valley.
                </li>
                <li>
                  <Link href="/services/renovations" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Renovation Plumbing
                  </Link>{" "}
                  — Kitchen and bathroom remodel plumbing, including layout changes and fixture upgrades.
                </li>
                <li>
                  <Link href="/services/repairs" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Plumbing Repairs
                  </Link>{" "}
                  — Leak detection, burst pipe repair, drain clearing, and emergency service.
                </li>
                <li>
                  <Link href="/services/bathtubs-showers" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Bathtubs & Showers
                  </Link>{" "}
                  — Installation and repair of tubs, showers, and shower valves.
                </li>
                <li>
                  <Link href="/services/faucets-fixtures" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Faucets & Fixtures
                  </Link>{" "}
                  — Faucet replacement, garbage disposal installation, and fixture upgrades.
                </li>
                <li>
                  <Link href="/services/water-heaters" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Water Heaters
                  </Link>{" "}
                  — Tank and tankless water heater installation, repair, and replacement.
                </li>
                <li>
                  <Link href="/services/water-softeners" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Water Softeners
                  </Link>{" "}
                  — Water softener and filtration systems to combat Phoenix hard water.
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
                every day and know exactly how to address it — from recommending the right water softener to
                installing fixtures designed to withstand hard-water conditions.
              </p>
              <p className="text-black dark:text-black">
                Our team is licensed (ROC360510), insured, and committed to honest pricing. Whether it is a
                quick faucet swap in a Downtown condo or a full plumbing rough-in for a custom home in North
                Phoenix, we treat every job with the same level of care.
              </p>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Call a Phoenix Plumber</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need a plumber in Phoenix? We offer free estimates and same-day service for most repairs.
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
              Planning a renovation or new build? Get a detailed plumbing estimate.
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
              <li>Licensed & Insured (ROC360510)</li>
              <li>Serving All of Phoenix Metro</li>
              <li>Same-Day Service Available</li>
              <li>Upfront, Honest Pricing</li>
              <li>Warranty on All Work</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
