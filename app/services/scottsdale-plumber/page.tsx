import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Scottsdale Plumber | Licensed Plumbing Services | Yeti Plumbing",
  description:
    "Licensed Scottsdale plumber for luxury homes, remodels, and repairs. Serving Old Town, North Scottsdale, McCormick Ranch, and Gainey Ranch. ROC360510.",
  keywords: [
    "Scottsdale plumber",
    "Scottsdale plumbing",
    "Scottsdale plumbing services",
    "plumber in Scottsdale AZ",
    "Scottsdale luxury home plumber",
    "North Scottsdale plumber",
    "Old Town Scottsdale plumber",
    "McCormick Ranch plumber",
    "Scottsdale water heater repair",
    "Scottsdale plumbing repair",
  ],
  openGraph: {
    title: "Scottsdale Plumber | Licensed Plumbing Services | Yeti Plumbing",
    description:
      "Licensed Scottsdale plumber for luxury homes, remodels, and repairs. Serving Old Town, North Scottsdale, McCormick Ranch, and Gainey Ranch.",
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/scottsdale-plumber",
  },
};

export default function ScottsdalePlumberPage() {
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
            Plumber in Scottsdale, AZ — Yeti Plumbing
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Scottsdale is known for upscale living, resort-style amenities, and some of the most impressive
            residential properties in the Southwest. From multi-million-dollar hillside estates in North
            Scottsdale to charming patio homes in McCormick Ranch, the plumbing demands here are as high
            as the design standards. Yeti Plumbing delivers precision plumbing that matches.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Plumbing for Scottsdale Luxury Homes
              </h2>
              <p className="text-black dark:text-black mb-4">
                Scottsdale properties often feature high-end finishes — rain showers, freestanding soaking
                tubs, pot fillers, built-in espresso plumbing, and whole-home recirculation systems. These
                luxury installations require a plumber who understands both the technical requirements and
                the aesthetic expectations. Our team has worked on custom homes and major renovations
                throughout Scottsdale and the surrounding foothills.
              </p>
              <p className="text-black dark:text-black mb-4">
                North Scottsdale, including communities like DC Ranch, Troon, and Grayhawk, features many
                homes built in the late 1990s and 2000s with complex plumbing layouts. Pool plumbing
                connections, outdoor kitchens, and guest casitas all add layers of complexity that we
                handle regularly.
              </p>
              <p className="text-black dark:text-black">
                In Old Town Scottsdale and South Scottsdale, the housing stock is older. Many homes and
                condos here were built in the 1960s and 1970s and may still have original copper or
                galvanized piping. These properties benefit from re-piping, water heater upgrades, and
                fixture modernization — all services we specialize in.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Our Scottsdale Services</h2>
              <ul className="text-black dark:text-black space-y-3">
                <li>
                  <Link href="/services/custom-homes" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Custom Home Plumbing
                  </Link>{" "}
                  — Luxury plumbing systems for new Scottsdale builds, including multi-zone recirculation and outdoor kitchens.
                </li>
                <li>
                  <Link href="/services/renovations" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Renovation Plumbing
                  </Link>{" "}
                  — Spa-style bathroom remodels, gourmet kitchen upgrades, and whole-home re-pipes.
                </li>
                <li>
                  <Link href="/services/repairs" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Plumbing Repairs
                  </Link>{" "}
                  — Leak repair, drain clearing, and emergency plumbing for Scottsdale homes and condos.
                </li>
                <li>
                  <Link href="/services/bathtubs-showers" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Bathtubs & Showers
                  </Link>{" "}
                  — Freestanding tub installation, custom shower systems, and multi-head shower setups.
                </li>
                <li>
                  <Link href="/services/faucets-fixtures" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Faucets & Fixtures
                  </Link>{" "}
                  — High-end faucet installation, pot fillers, and designer fixture upgrades.
                </li>
                <li>
                  <Link href="/services/water-heaters" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Water Heaters
                  </Link>{" "}
                  — Tankless water heater installation for large Scottsdale homes with high hot-water demand.
                </li>
                <li>
                  <Link href="/services/water-softeners" className="text-red-700 dark:text-red-700 hover:underline font-semibold">
                    Water Softeners
                  </Link>{" "}
                  — Protect premium fixtures and appliances from Scottsdale hard-water damage.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Scottsdale Neighborhoods We Serve
              </h2>
              <p className="text-black dark:text-black mb-4">
                We provide plumbing services throughout all of Scottsdale, including:
              </p>
              <ul className="text-black dark:text-black space-y-2 columns-2">
                <li>Old Town Scottsdale</li>
                <li>North Scottsdale</li>
                <li>McCormick Ranch</li>
                <li>Gainey Ranch</li>
                <li>DC Ranch</li>
                <li>Grayhawk</li>
                <li>Troon</li>
                <li>Kierland</li>
                <li>South Scottsdale</li>
                <li>Scottsdale Ranch</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Why Scottsdale Homeowners Choose Us
              </h2>
              <p className="text-black dark:text-black mb-4">
                Scottsdale homeowners expect a higher level of service — and they should. When you invest in
                premium fixtures and finishes, you need a plumber who installs them correctly and treats your
                property with care. We protect floors, countertops, and finishes during every job. Our work
                areas are always left clean.
              </p>
              <p className="text-black dark:text-black">
                Located just northeast of Phoenix, Scottsdale is well within our core service area. We are
                licensed (ROC360510), carry full liability insurance, and back all work with a warranty. Whether
                it is a straightforward repair or a complex custom home installation, we bring the same
                attention to detail.
              </p>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Call a Scottsdale Plumber</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need a plumber in Scottsdale? We offer free estimates and prompt scheduling.
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
              Planning a luxury remodel or new build? Get a detailed plumbing estimate.
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
              <li>Luxury Home Experience</li>
              <li>Clean, Professional Service</li>
              <li>Upfront, Honest Pricing</li>
              <li>Warranty on All Work</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
