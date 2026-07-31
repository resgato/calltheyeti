import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buildServicePageJsonLd, buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { FAQSection } from "@/components/FAQSection";
import { serviceFaqs } from "@/lib/service-faqs";
import { RelatedServices } from "@/components/RelatedServices";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Reverse Osmosis & Under Sink Water Filter Installation",
  description:
    "Reverse osmosis and under sink water filter installation in Phoenix, Mesa, Scottsdale, and Paradise Valley. RO systems, dedicated faucets, fridge lines. ROC360510.",
  keywords: [
    "under sink water filter installation",
    "reverse osmosis installation Phoenix",
    "reverse osmosis system installation cost",
    "RO system installation Mesa AZ",
    "water filtration system installation Phoenix",
    "drinking water filter Scottsdale",
    "reverse osmosis Paradise Valley",
    "under sink RO system",
  ],
  openGraph: {
    title: "Reverse Osmosis & Under Sink Water Filter Installation",
    description:
      "RO and under sink water filter installation across the Phoenix metro. Dedicated faucets, fridge and ice maker lines, and filter service.",
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/reverse-osmosis",
  },
};

export default function ReverseOsmosisPage() {
  const serviceJsonLd = buildServicePageJsonLd({
    name: "Reverse Osmosis and Under Sink Water Filter Installation",
    description:
      "Reverse osmosis and under sink water filtration installation for homes in Phoenix, Mesa, Scottsdale, and Paradise Valley, Arizona. Includes dedicated faucets, refrigerator lines, and filter replacement.",
    url: "https://calltheyeti.com/services/reverse-osmosis",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://calltheyeti.com" },
    { name: "Services", url: "https://calltheyeti.com/services" },
    { name: "Reverse Osmosis Installation", url: "https://calltheyeti.com/services/reverse-osmosis" },
  ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-12">
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="mb-8">
        <Link href="/services" className="text-brand-700 underline">
          Back to Services
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-ink">
            Reverse Osmosis &amp; Under Sink Water Filter Installation
          </h1>
          <p className="text-lg text-ink-soft mb-6">
            Valley tap water is safe to drink and still tastes like the minerals it carries. A reverse
            osmosis system under the kitchen sink is the most direct fix, and it is a far smaller project
            than most people expect. We install RO and under sink filtration across Phoenix, Mesa,
            Scottsdale, and Paradise Valley.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Why RO Makes Sense in Arizona</h2>
              <p className="text-ink mb-4">
                Phoenix area water is heavily mineralized. That is what leaves spots on glassware, scale on
                fixtures, and a flat mineral taste in a glass of tap water. A water softener addresses the
                hardness running through the house, but it does not make the water taste better, and softened
                water still carries dissolved solids.
              </p>
              <p className="text-ink">
                Reverse osmosis works differently. It pushes water through a semi-permeable membrane that
                removes dissolved solids rather than exchanging them, which is why RO water tastes noticeably
                cleaner. The two systems solve different problems and work well together: the softener
                protects the RO membrane from scaling, which makes the membrane last longer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">What the Install Involves</h2>
              <ul className="text-ink space-y-3">
                <li>
                  <strong>Cold water tap:</strong> we tee off the cold supply under the sink with a proper
                  valve rather than a saddle clamp, which is a common failure point on cheap installs.
                </li>
                <li>
                  <strong>Dedicated faucet:</strong> RO water gets its own small faucet at the sink. If your
                  sink has no spare hole, we discuss options before drilling anything, especially on granite
                  or quartz.
                </li>
                <li>
                  <strong>Drain connection:</strong> the membrane sends reject water to the drain. We connect
                  it correctly so it cannot siphon back into your drinking water.
                </li>
                <li>
                  <strong>Storage tank:</strong> most systems hold filtered water in a small tank under the
                  cabinet, which is what lets you fill a glass immediately.
                </li>
                <li>
                  <strong>Refrigerator and ice maker line:</strong> optional, and worth doing. Running the RO
                  line to the fridge means filtered ice and filtered water from the door.
                </li>
              </ul>
              <p className="text-ink mt-4">
                Most installations are a same-day job. We pressure test everything and leave the system
                running before we go.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Choosing a System</h2>
              <p className="text-ink mb-4">
                Standard tank systems are the common choice for a kitchen and are the least expensive to buy
                and service. Tankless RO units take up less cabinet space and produce on demand, which suits
                homes where the under-sink cabinet is already crowded with a disposal and filtration.
              </p>
              <p className="text-ink">
                Stage count matters less than most marketing suggests. What actually determines water quality
                is membrane quality and whether filters get changed on schedule. We will size a system to your
                household rather than upselling stages you will not notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Filter Replacement</h2>
              <p className="text-ink">
                Sediment and carbon pre-filters typically need replacing every six to twelve months, and the
                RO membrane lasts roughly two to five years depending on how hard the incoming water is. In
                the Valley, and especially on unsoftened water, plan on the shorter end of both ranges. A
                neglected pre-filter is the fastest way to ruin an otherwise good membrane.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Where We Install</h2>
              <p className="text-ink">
                Reverse osmosis and under sink filtration throughout{" "}
                <Link href="/services/phoenix-plumber" className="text-brand-700 hover:underline font-semibold">Phoenix</Link>,{" "}
                <Link href="/services/mesa-plumber" className="text-brand-700 hover:underline font-semibold">Mesa</Link>,{" "}
                <Link href="/services/scottsdale-plumber" className="text-brand-700 hover:underline font-semibold">Scottsdale</Link>,{" "}
                <Link href="/services/paradise-valley-plumber" className="text-brand-700 hover:underline font-semibold">Paradise Valley</Link>,{" "}
                <Link href="/services/gilbert-plumber" className="text-brand-700 hover:underline font-semibold">Gilbert</Link>,{" "}
                <Link href="/services/chandler-plumber" className="text-brand-700 hover:underline font-semibold">Chandler</Link>, and{" "}
                <Link href="/services/queen-creek-plumber" className="text-brand-700 hover:underline font-semibold">Queen Creek</Link>.
              </p>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface p-6 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4 text-ink">Get an RO Quote</h2>
            <p className="text-sm text-ink-soft mb-4">
              Free estimates and a firm price before we start.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-block bg-brand-600 text-white px-4 py-2 rounded-full hover:bg-brand-700"
            >
              Call {siteConfig.phone}
            </a>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4 text-ink">Pairs Well With</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/water-softeners" className="text-brand-700 hover:underline">
                  Water Softeners
                </Link>{" "}
                <span className="text-ink-soft">protect the RO membrane</span>
              </li>
              <li>
                <Link href="/services/faucets-fixtures" className="text-brand-700 hover:underline">
                  Faucets &amp; Fixtures
                </Link>{" "}
                <span className="text-ink-soft">matching finish for the RO faucet</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4 text-ink">Why Choose Yeti Plumbing?</h2>
            <ul className="space-y-2 text-sm text-ink">
              <li>Licensed &amp; Insured (ROC360510)</li>
              <li>Proper Valve, Not a Saddle Clamp</li>
              <li>Price Quoted Before Work Starts</li>
              <li>Warranty on All Work</li>
            </ul>
            <Link href="/about" className="mt-4 inline-block text-sm font-medium text-brand-700 hover:underline">
              About Yeti Plumbing
            </Link>
          </div>
        </div>
      </div>

      <div className="-mx-4">
        <FAQSection faqs={serviceFaqs["reverse-osmosis"]} />
      </div>
      <div className="-mx-4">
        <Testimonials service="general" limit={3} />
      </div>
      <div className="-mx-4">
        <RelatedServices current="reverse-osmosis" />
      </div>
    </main>
  );
}
