import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buildLocationPageJsonLd, buildBreadcrumbJsonLd, buildPageFAQJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Chandler Plumber | Licensed Plumbing Services",
  description:
    "Licensed Chandler, AZ plumber serving Ocotillo, Downtown Chandler, and Sun Lakes. Residential plumbing repairs, water heaters, renovations, and new construction. ROC360510.",
  keywords: [
    "Chandler plumber",
    "Chandler plumbing",
    "Chandler plumbing services",
    "plumber in Chandler AZ",
    "Chandler emergency plumber",
    "Ocotillo plumber",
    "Downtown Chandler plumber",
    "Sun Lakes plumber",
    "Chandler water heater repair",
    "Chandler plumbing repair",
  ],
  openGraph: {
    title: "Chandler Plumber | Licensed Plumbing Services | Yeti Plumbing",
    description:
      "Licensed Chandler, AZ plumber serving Ocotillo, Downtown Chandler, and Sun Lakes. Residential plumbing repairs, water heaters, renovations, and new construction.",
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/chandler-plumber",
  },
};

export default function ChandlerPlumberPage() {
  const locationJsonLd = buildLocationPageJsonLd({
    city: "Chandler",
    state: "AZ",
    url: "https://calltheyeti.com/services/chandler-plumber",
    description: "Licensed Chandler, AZ plumber serving Ocotillo, Downtown Chandler, and Sun Lakes. Residential plumbing repairs, water heaters, renovations, and new construction.",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://calltheyeti.com" },
    { name: "Services", url: "https://calltheyeti.com/services" },
    { name: "Chandler Plumber", url: "https://calltheyeti.com/services/chandler-plumber" },
  ]);
  const faqJsonLd = buildPageFAQJsonLd([
    { question: "What plumbing services does Yeti Plumbing offer in Chandler?", answer: "Yeti Plumbing offers residential plumbing repairs, water heater installation and repair, renovation plumbing, new construction plumbing, and emergency service throughout Chandler, AZ." },
    { question: "Is Yeti Plumbing licensed to work in Chandler?", answer: "Yes, Yeti Plumbing is fully licensed (ROC360510) and insured for plumbing work throughout Chandler and the Phoenix metro area." },
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
            Plumber in Chandler, AZ
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Chandler sits at the heart of Arizona&apos;s tech corridor, home to major semiconductor
            manufacturers and a rapidly growing population of professionals and families. Located about
            20 miles southeast of Downtown Phoenix, Chandler offers everything from established
            neighborhoods near downtown to newer luxury communities in Ocotillo. Yeti Plumbing
            provides full-service plumbing across all of Chandler.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Chandler Plumbing: What Sets It Apart
              </h2>
              <p className="text-black dark:text-black mb-4">
                Chandler has a distinct mix of housing ages. The neighborhoods surrounding Downtown
                Chandler, areas like Chandler Park and Ranch El Dorado, include homes from the 1970s
                through 1990s. These properties are at the stage where significant plumbing work becomes
                necessary: water heater replacements, re-pipes of aging copper or polybutylene lines, and
                sewer line repairs where tree roots have infiltrated older clay pipes.
              </p>
              <p className="text-black dark:text-black mb-4">
                Ocotillo, one of Chandler&apos;s most sought-after master-planned communities, was
                developed primarily in the early 2000s. Homes here feature more modern plumbing materials,
                but the area&apos;s signature man-made lakes create a unique consideration: elevated water
                tables near the lakes can complicate foundation drainage and contribute to moisture issues
                that affect under-slab plumbing.
              </p>
              <p className="text-black dark:text-black">
                Sun Lakes, a large active-adult community on Chandler&apos;s southern border, presents its
                own set of plumbing needs. Many residents are aging in place and need accessibility
                upgrades, walk-in tubs, grab bar installations, and ADA-compliant fixtures. The homes
                themselves, many built in the 1980s and 1990s, often need water heater replacement and
                fixture modernization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">Our Chandler Plumbing Services</h2>
              <ul className="text-black dark:text-black space-y-3">
                <li>
                  <Link href="/services/emergency-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Emergency Plumbing
                  </Link>{": "}
                  Fast response for burst pipes, slab leaks, and water heater failures across Chandler. Price quoted before we start.
                </li>
                <li>
                  <Link href="/services/drain-cleaning" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Drain Cleaning
                  </Link>{": "}
                  Clogged drains, main sewer line clearing, camera inspection, and tree root removal for Chandler homes.
                </li>
                <li>
                  <Link href="/services/custom-homes" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Custom Home Plumbing
                  </Link>{": "}
                  New construction plumbing for custom builds in Chandler and the southeast Valley.
                </li>
                <li>
                  <Link href="/services/renovations" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Renovation Plumbing
                  </Link>{": "}
                  Full bathroom and kitchen renovations, including ADA accessibility upgrades.
                </li>
                <li>
                  <Link href="/services/repairs" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Plumbing Repairs
                  </Link>{": "}
                  Sewer line repair, slab leak detection, re-pipes, and emergency plumbing service.
                </li>
                <li>
                  <Link href="/services/bathtubs-showers" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Bathtubs & Showers
                  </Link>{": "}
                  Walk-in tub installation, shower upgrades, and accessibility modifications.
                </li>
                <li>
                  <Link href="/services/faucets-fixtures" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Faucets & Fixtures
                  </Link>{": "}
                  Fixture upgrades, touchless faucets, and ADA-compliant installations.
                </li>
                <li>
                  <Link href="/services/water-heaters" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Water Heaters
                  </Link>{": "}
                  Water heater replacement and tankless upgrades for Chandler homes of all ages.
                </li>
                <li>
                  <Link href="/services/water-softeners" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Water Softeners
                  </Link>{": "}
                  Water softener systems to protect Chandler homes from mineral buildup and scale.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Chandler Neighborhoods We Serve
              </h2>
              <p className="text-black dark:text-black mb-4">
                Our team provides plumbing services throughout Chandler, including:
              </p>
              <ul className="text-black dark:text-black space-y-2 columns-2">
                <li>Downtown Chandler</li>
                <li>Ocotillo</li>
                <li>Sun Lakes</li>
                <li>Chandler Park</li>
                <li>Ranch El Dorado</li>
                <li>Cooper Commons</li>
                <li>Clemente Ranch</li>
                <li>Fulton Ranch</li>
                <li>Chandler Heights</li>
                <li>Springfield Lakes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Why Chandler Residents Call Yeti Plumbing
              </h2>
              <p className="text-black dark:text-black mb-4">
                Chandler homeowners appreciate straightforward service. Many of our customers here work in
                the tech industry and value efficiency, clear communication, and data-driven
                recommendations. When we assess a plumbing issue, we explain exactly what we find, present
                repair and replacement options with transparent pricing, and let you make the decision.
              </p>
              <p className="text-black dark:text-black">
                We are licensed with the Arizona Registrar of Contractors (ROC360510), fully insured, and
                committed to doing the job right. Whether you need a quick repair in a Downtown Chandler
                townhome or a full plumbing rough-in for new construction near Chandler Heights, we are
                ready to help.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">What plumbing services does Yeti Plumbing offer in Chandler?</h3>
                  <p className="text-black dark:text-black">
                    Yeti Plumbing offers residential plumbing repairs, water heater installation and repair,
                    renovation plumbing, new construction plumbing, and emergency service throughout Chandler, AZ.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Is Yeti Plumbing licensed to work in Chandler?</h3>
                  <p className="text-black dark:text-black">
                    Yes, Yeti Plumbing is fully licensed (ROC360510) and insured for plumbing work throughout
                    Chandler and the Phoenix metro area.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Call a Chandler Plumber</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Need a plumber in Chandler? We offer free estimates and convenient scheduling.
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
              Renovating your home or need a repair estimate? Contact us today.
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
              <li>Transparent, Data-Driven Approach</li>
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
