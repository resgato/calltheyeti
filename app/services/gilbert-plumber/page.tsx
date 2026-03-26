import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gilbert Plumber | Licensed Plumbing Services | Yeti Plumbing",
  description:
    "Licensed Gilbert, AZ plumber serving Power Ranch, Agritopia, and the Heritage District. New construction, renovations, repairs, and water heater service. ROC360510.",
  keywords: [
    "Gilbert plumber",
    "Gilbert plumbing",
    "Gilbert plumbing services",
    "plumber in Gilbert AZ",
    "Gilbert emergency plumber",
    "Power Ranch plumber",
    "Agritopia plumber",
    "Gilbert Heritage District plumber",
    "Gilbert water heater repair",
    "Gilbert plumbing repair",
  ],
  openGraph: {
    title: "Gilbert Plumber | Licensed Plumbing Services | Yeti Plumbing",
    description:
      "Licensed Gilbert, AZ plumber serving Power Ranch, Agritopia, and the Heritage District. New construction, renovations, repairs, and water heater service.",
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/gilbert-plumber",
  },
};

export default function GilbertPlumberPage() {
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
            Plumber in Gilbert, AZ — Yeti Plumbing
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Gilbert has transformed from a small farming town into one of the fastest-growing communities
            in the United States. Located in the southeast Valley about 22 miles from Downtown Phoenix,
            Gilbert is home to young families, growing neighborhoods, and a thriving downtown scene.
            Yeti Plumbing is proud to serve this community with reliable, licensed plumbing services.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Gilbert&apos;s Unique Plumbing Landscape
              </h2>
              <p className="text-black dark:text-black mb-4">
                Most of Gilbert was developed between the mid-1990s and 2010s, which means the majority
                of homes are between 15 and 30 years old. This is the age range where homeowners start
                seeing the first wave of plumbing issues: water heaters reaching end of life, original
                faucets and valves wearing out, and early signs of hard-water scale inside pipes.
              </p>
              <p className="text-black dark:text-black mb-4">
                The master-planned communities that define Gilbert — Power Ranch, Seville, Lyons Gate, and
                Morrison Ranch — were built with copper supply lines and ABS or PVC drain systems. While
                generally reliable, the extreme hard water in this part of the Valley accelerates wear on
                valves, connectors, and water-using appliances. Homes without a water softener often need
                water heater replacement several years ahead of schedule.
              </p>
              <p className="text-black dark:text-black">
                Agritopia, Gilbert&apos;s unique urban farm community, features a mix of traditional
                single-family homes and attached courtyard homes with shared infrastructure. The Heritage
                District near downtown Gilbert includes some of the town&apos;s older properties, with
                homes dating back to the 1950s and 1960s that may require re-piping or drain line
                replacement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Our Gilbert Plumbing Services</h2>
              <ul className="text-black dark:text-black space-y-3">
                <li>
                  <Link href="/services/custom-homes" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Custom Home Plumbing
                  </Link>{" "}
                  — Complete plumbing for new construction in Gilbert and southeast Valley developments.
                </li>
                <li>
                  <Link href="/services/renovations" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Renovation Plumbing
                  </Link>{" "}
                  — Kitchen and bathroom upgrades, fixture relocation, and re-piping for Gilbert homes.
                </li>
                <li>
                  <Link href="/services/repairs" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Plumbing Repairs
                  </Link>{" "}
                  — Leak detection, pipe repair, drain cleaning, and emergency plumbing in Gilbert.
                </li>
                <li>
                  <Link href="/services/bathtubs-showers" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Bathtubs & Showers
                  </Link>{" "}
                  — Shower valve replacement, tub-to-shower conversions, and new installations.
                </li>
                <li>
                  <Link href="/services/faucets-fixtures" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Faucets & Fixtures
                  </Link>{" "}
                  — Faucet upgrades, garbage disposal installation, and hard-water-resistant fixtures.
                </li>
                <li>
                  <Link href="/services/water-heaters" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Water Heaters
                  </Link>{" "}
                  — Tank and tankless water heater replacement — a common need for Gilbert homes reaching 15-20 years.
                </li>
                <li>
                  <Link href="/services/water-softeners" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Water Softeners
                  </Link>{" "}
                  — Water softener installation and salt delivery coordination for Gilbert homeowners.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Gilbert Neighborhoods We Serve
              </h2>
              <p className="text-black dark:text-black mb-4">
                We work throughout all of Gilbert, including:
              </p>
              <ul className="text-black dark:text-black space-y-2 columns-2">
                <li>Power Ranch</li>
                <li>Agritopia</li>
                <li>Heritage District</li>
                <li>Seville</li>
                <li>Morrison Ranch</li>
                <li>Lyons Gate</li>
                <li>Val Vista Lakes</li>
                <li>Gilbert Gateway</li>
                <li>Higley</li>
                <li>Cooley Station</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Common Plumbing Issues in Gilbert
              </h2>
              <p className="text-black dark:text-black mb-4">
                Gilbert homeowners call us most often for these issues:
              </p>
              <ul className="text-black dark:text-black space-y-2">
                <li><strong>Water Heater Replacement:</strong> Many Gilbert homes are hitting the 15-year mark where original water heaters need replacing, especially units damaged by hard water.</li>
                <li><strong>Hard Water Damage:</strong> Scale buildup in pipes and on fixtures is a near-universal concern. A water softener is one of the best investments a Gilbert homeowner can make.</li>
                <li><strong>Shower Valve Failures:</strong> Original builder-grade shower valves often begin leaking or losing pressure after 15 to 20 years of use.</li>
                <li><strong>Garbage Disposal Replacement:</strong> Builder-installed units are typically low-end models that wear out within 10 years.</li>
                <li><strong>Outdoor Plumbing:</strong> Many Gilbert homes have pools, outdoor kitchens, and irrigation systems that require periodic plumbing attention.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Your Gilbert Plumbing Partner
              </h2>
              <p className="text-black dark:text-black">
                We understand Gilbert because we work here every day. Our licensed team (ROC360510) knows the
                builders, the common plumbing layouts, and the specific challenges that come with southeast
                Valley water quality and soil conditions. We provide honest assessments, transparent pricing,
                and stand behind every job with a warranty.
              </p>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Call a Gilbert Plumber</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need a plumber in Gilbert? We offer free estimates and fast scheduling.
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
              Planning a kitchen or bathroom remodel? Get a free plumbing estimate.
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
              <li>Southeast Valley Specialists</li>
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
