import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buildServicePageJsonLd, buildBreadcrumbJsonLd, buildPageFAQJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { Testimonials } from "@/components/Testimonials";
import { RelatedServices } from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Emergency Plumber | Mesa & Scottsdale, AZ",
  description:
    "Emergency plumber serving Mesa, Scottsdale, Paradise Valley, and Phoenix. Burst pipes, slab leaks, water heater failures, and sewer backups. Call (801) 707-2547.",
  keywords: [
    "emergency plumber",
    "emergency plumber Mesa AZ",
    "emergency plumber Scottsdale",
    "emergency plumber Paradise Valley",
    "burst pipe repair Mesa",
    "slab leak repair Mesa AZ",
    "emergency plumbing Phoenix",
    "water heater leaking",
    "sewer backup repair Scottsdale",
  ],
  openGraph: {
    title: "Emergency Plumber | Mesa, Scottsdale & Paradise Valley AZ | Yeti Plumbing",
    description:
      "Emergency plumber serving Mesa, Scottsdale, Paradise Valley, and Phoenix. Burst pipes, slab leaks, water heater failures, and sewer backups.",
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/emergency-plumber",
  },
};

export default function EmergencyPlumberPage() {
  const serviceJsonLd = buildServicePageJsonLd({
    name: "Emergency Plumbing",
    description:
      "Emergency plumbing service for burst pipes, slab leaks, water heater failures, and sewer backups across Mesa, Scottsdale, Paradise Valley, and Phoenix, AZ.",
    url: "https://calltheyeti.com/services/emergency-plumber",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://calltheyeti.com" },
    { name: "Services", url: "https://calltheyeti.com/services" },
    { name: "Emergency Plumber", url: "https://calltheyeti.com/services/emergency-plumber" },
  ]);
  const faqJsonLd = buildPageFAQJsonLd([
    { question: "What counts as a plumbing emergency?", answer: "Any situation where water is actively causing damage or you have lost water service. That includes burst or leaking pipes, slab leaks, sewage backing up into the home, a failed or leaking water heater, and a main line break. If water is running and you cannot stop it, treat it as an emergency." },
    { question: "What should I do before the plumber arrives?", answer: "Shut off the water. For a fixture leak, close the shutoff valve under the sink or behind the toilet. For anything larger, close the main shutoff, usually near the street or on the side of the house. If a water heater is leaking, shut off its water supply and turn off the gas or breaker to the unit." },
    { question: "Which cities do you cover for emergency plumbing?", answer: "We provide emergency plumbing across Mesa, Scottsdale, Paradise Valley, Phoenix, Gilbert, Chandler, and Queen Creek, Arizona." },
    { question: "How fast can you get here?", answer: "Response time depends on your location and current dispatch load. Mesa, Scottsdale, Paradise Valley, and Phoenix are all inside our core service area, so those calls are prioritized. Call (801) 707-2547 and we will give you a realistic arrival window, not a guess." },
    { question: "How much does an emergency plumbing call cost?", answer: "We quote the repair before we begin work. You approve the price first, so there are no surprises on the invoice after an already stressful situation." },
  ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-12">
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <div className="mb-8">
        <Link href="/services" className="text-brand-700 dark:text-brand-700 underline">
          ← Back to Services
        </Link>
      </div>

      {/* Emergency call banner, highest-intent CTA, kept above the fold */}
      <div className="mb-10 rounded-2xl bg-brand-600 p-6 text-white">
        {/* Styled as a heading but not marked up as one: this banner sits above
            the h1, and a real h2 here would put a subheading before the page
            title in the document outline. */}
        <p className="text-xl font-bold">Have an active leak right now?</p>
        <p className="mt-2 text-white/90">
          Shut off your water, then call us. We will talk you through it and get a truck moving.
        </p>
        <a
          href={siteConfig.phoneHref}
          className="mt-4 inline-flex items-center rounded-full bg-accent-400 px-5 py-3 text-lg font-bold text-black shadow hover:bg-accent-500"
        >
          Call {siteConfig.phone}
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-black dark:text-black">
            Emergency Plumber in Mesa, Scottsdale &amp; Paradise Valley, AZ
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            Plumbing emergencies do not wait for business hours, and every minute of running water is more
            drywall, flooring, and cabinetry to replace. Yeti Plumbing responds fast across Mesa, Scottsdale,
            Paradise Valley, and Phoenix. We are licensed, insured, and upfront about price before we start.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Shut Off Your Water First
              </h2>
              <p className="text-black dark:text-black mb-4">
                Before anything else, stop the flow. It is the single most effective thing you can do to limit
                the damage, and it costs you nothing.
              </p>
              <ul className="text-black dark:text-black space-y-3">
                <li>
                  <strong>Leaking sink or toilet:</strong> Turn the small shutoff valve under the sink or
                  behind the toilet clockwise until it stops.
                </li>
                <li>
                  <strong>Burst pipe or unknown source:</strong> Close the main shutoff. In most Arizona homes
                  it is on an exterior wall, in a box near the street, or in the garage.
                </li>
                <li>
                  <strong>Leaking water heater:</strong> Close the cold-water valve on top of the unit, then
                  shut off the gas valve or flip the breaker for an electric unit.
                </li>
                <li>
                  <strong>Sewage backing up:</strong> Stop running every fixture in the house, including the
                  washing machine and dishwasher, and do not flush.
                </li>
              </ul>
              <p className="text-black dark:text-black mt-4">
                If you cannot find the shutoff, call us and stay on the line. We will walk you through
                locating it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Emergencies We Handle
              </h2>
              <ul className="text-black dark:text-black space-y-3">
                <li>
                  <strong>Burst and leaking pipes:</strong> supply line failures, split fittings, and
                  pinhole leaks in aging copper.
                </li>
                <li>
                  <strong>Slab leaks:</strong> hot spots on the floor, unexplained water bills, or the sound
                  of running water with everything off. Common in older Mesa and Scottsdale homes on slab
                  foundations.
                </li>
                <li>
                  <strong>Water heater failure:</strong> tanks that are leaking, flooding a garage, or have
                  stopped producing hot water entirely. See our{" "}
                  <Link href="/services/water-heaters" className="text-brand-700 dark:text-brand-700 hover:underline">
                    water heater services
                  </Link>
                  .
                </li>
                <li>
                  <strong>Sewer backups and main line blockages:</strong> sewage in tubs or floor drains,
                  or multiple fixtures backing up at once. See{" "}
                  <Link href="/services/drain-cleaning" className="text-brand-700 dark:text-brand-700 hover:underline">
                    drain cleaning
                  </Link>
                  .
                </li>
                <li>
                  <strong>No water at all:</strong> main line breaks, failed pressure regulators, and
                  seized shutoff valves.
                </li>
                <li>
                  <strong>Overflowing or continuously running toilets:</strong> failed fill valves, flappers,
                  and supply lines.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Why Arizona Homes See These Failures
              </h2>
              <p className="text-black dark:text-black mb-4">
                Two local factors drive most of the emergency calls we run. The first is hard water. Valley
                water is heavily mineralized, and scale steadily builds inside water heaters, valves, and
                supply lines until something gives. A heater that fails at eight years instead of twelve
                usually failed to scale.
              </p>
              <p className="text-black dark:text-black">
                The second is heat and ground movement. Extreme summer temperatures stress supply lines and
                fittings, and expansive soil shifts under slab foundations, putting strain on the pipes
                embedded in and beneath them. That combination is why slab leaks are far more common here
                than in most of the country.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Emergency Service Areas
              </h2>
              <p className="text-black dark:text-black mb-4">
                We dispatch emergency plumbing throughout the East Valley and central Phoenix:
              </p>
              <ul className="text-black dark:text-black space-y-2">
                <li>
                  <Link href="/services/mesa-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Mesa
                  </Link>{", "}
                  including East Mesa, Superstition Springs, and Mesa Riverview.
                </li>
                <li>
                  <Link href="/services/scottsdale-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Scottsdale
                  </Link>{": "}
                  Old Town through North Scottsdale, DC Ranch, and Troon.
                </li>
                <li>
                  <Link href="/services/paradise-valley-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Paradise Valley
                  </Link>{", "}
                  all of 85253, including Clearwater Hills and Camelback Country Club.
                </li>
                <li>
                  <Link href="/services/phoenix-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Phoenix
                  </Link>{", "}
                  central Phoenix and the surrounding metro.
                </li>
                <li>
                  <Link href="/services/gilbert-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Gilbert
                  </Link>
                  ,{" "}
                  <Link href="/services/chandler-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Chandler
                  </Link>
                  , and{" "}
                  <Link href="/services/queen-creek-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Queen Creek
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">What counts as a plumbing emergency?</h3>
                  <p className="text-black dark:text-black">
                    Any situation where water is actively causing damage or you have lost water service. That
                    includes burst or leaking pipes, slab leaks, sewage backing up into the home, a failed or
                    leaking water heater, and a main line break. If water is running and you cannot stop it,
                    treat it as an emergency.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">What should I do before the plumber arrives?</h3>
                  <p className="text-black dark:text-black">
                    Shut off the water. For a fixture leak, close the shutoff valve under the sink or behind
                    the toilet. For anything larger, close the main shutoff, usually near the street or on the
                    side of the house. If a water heater is leaking, shut off its water supply and turn off the
                    gas or breaker to the unit.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Which cities do you cover for emergency plumbing?</h3>
                  <p className="text-black dark:text-black">
                    We provide emergency plumbing across Mesa, Scottsdale, Paradise Valley, Phoenix, Gilbert,
                    Chandler, and Queen Creek, Arizona.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">How fast can you get here?</h3>
                  <p className="text-black dark:text-black">
                    Response time depends on your location and current dispatch load. Mesa, Scottsdale,
                    Paradise Valley, and Phoenix are all inside our core service area, so those calls are
                    prioritized. Call {siteConfig.phone} and we will give you a realistic arrival window, not
                    a guess.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">How much does an emergency plumbing call cost?</h3>
                  <p className="text-black dark:text-black">
                    We quote the repair before we begin work. You approve the price first, so there are no
                    surprises on the invoice after an already stressful situation.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-brand-600 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2 text-white">Emergency? Call Now</h3>
            <p className="text-sm text-white/90 mb-4">
              Active leak, no water, or sewage backup, call and we will dispatch.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-block bg-accent-400 text-black font-bold px-4 py-3 rounded-full hover:bg-accent-500"
            >
              {siteConfig.phone}
            </a>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Not an Emergency?</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Request a quote for scheduled repairs, remodels, or installations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-600 text-white px-4 py-2 rounded-full hover:bg-brand-700"
            >
              Request Quote
            </Link>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Emergency Service Areas</h3>
            <ul className="space-y-2 text-sm">
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
                <Link href="/services/gilbert-plumber" className="text-brand-700 dark:text-brand-700 hover:underline">
                  Gilbert Plumber
                </Link>
              </li>
              <li>
                <Link href="/services/chandler-plumber" className="text-brand-700 dark:text-brand-700 hover:underline">
                  Chandler Plumber
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Why Choose Yeti Plumbing?</h3>
            <ul className="space-y-2 text-sm text-black dark:text-black">
              <li>Licensed &amp; Insured (ROC360510)</li>
              <li>Price Quoted Before Work Starts</li>
              <li>Clean, Professional Service</li>
              <li>Warranty on All Work</li>
            </ul>
            <Link href="/about" className="mt-4 inline-block text-sm font-medium text-brand-700 hover:underline">
              About Yeti Plumbing
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-14 -mx-4 overflow-hidden">
        <Testimonials service="emergency" limit={3} />
      </div>
      <div className="-mx-4">
        <RelatedServices current="emergency-plumber" />
      </div>
    </main>
  );
}
