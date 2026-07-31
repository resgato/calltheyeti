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
  title: "Toilet & Bidet Installation | Phoenix, Mesa & Scottsdale",
  description:
    "Toilet and bidet installation in Phoenix, Mesa, Scottsdale, and Paradise Valley. Replacements, bidet seats, smart toilets, flange repair. Licensed ROC360510.",
  keywords: [
    "toilet installation Phoenix",
    "toilet installation Mesa AZ",
    "toilet repair Scottsdale AZ",
    "bidet installation Phoenix",
    "bidet seat installation",
    "smart toilet installation Arizona",
    "toilet replacement Paradise Valley",
    "running toilet repair",
    "toilet flange repair Phoenix",
  ],
  openGraph: {
    title: "Toilet & Bidet Installation | Phoenix, Mesa & Scottsdale",
    description:
      "Toilet and bidet installation across the Phoenix metro. Replacements, bidet seats, smart toilets, and flange repair.",
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/toilet-bidet-install",
  },
};

export default function ToiletBidetInstallPage() {
  const serviceJsonLd = buildServicePageJsonLd({
    name: "Toilet and Bidet Installation",
    description:
      "Toilet and bidet installation and repair for homes in Phoenix, Mesa, Scottsdale, and Paradise Valley, Arizona. Includes replacements, bidet seats, smart toilets, and flange repair.",
    url: "https://calltheyeti.com/services/toilet-bidet-install",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://calltheyeti.com" },
    { name: "Services", url: "https://calltheyeti.com/services" },
    { name: "Toilet & Bidet Installation", url: "https://calltheyeti.com/services/toilet-bidet-install" },
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
            Toilet &amp; Bidet Installation
          </h1>
          <p className="text-lg text-ink-soft mb-6">
            A toilet swap looks simple until the flange is corroded, the rough-in does not match, or the
            bidet you bought needs an outlet that is not there. We install toilets and bidets properly the
            first time across Phoenix, Mesa, Scottsdale, and Paradise Valley, and we tell you the price
            before we start.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Toilet Installation and Replacement</h2>
              <p className="text-ink mb-4">
                Most replacements are a same-day job. We remove and haul away the old fixture, inspect the
                flange and closet bolts, set a new wax or waxless seal, level the bowl, and test for leaks
                and proper flush before we leave.
              </p>
              <p className="text-ink mb-4">
                The detail that catches people out is the rough-in, which is the distance from the finished
                wall to the center of the drain. Twelve inches is standard, but plenty of older Phoenix and
                Mesa homes are ten or fourteen. Buying a fixture without checking that measurement is the most
                common reason a replacement stalls halfway through.
              </p>
              <p className="text-ink">
                We also install comfort height and ADA-compliant fixtures, which sit closer to chair height and
                are noticeably easier for aging homeowners and anyone with mobility limits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Bidet Seats and Integrated Bidets</h2>
              <p className="text-ink mb-4">
                Bidets fall into three groups, and each one has a different install requirement:
              </p>
              <ul className="text-ink space-y-3">
                <li>
                  <strong>Non-electric seats:</strong> tee off the existing toilet supply. Straightforward,
                  no electrical work, and usually the cheapest path.
                </li>
                <li>
                  <strong>Electric seats:</strong> add heated water, warm air, and a heated seat, and need a
                  GFCI outlet within reach of the toilet. Most bathrooms do not have one, so this is often a
                  plumbing and electrical job together.
                </li>
                <li>
                  <strong>Integrated smart toilets:</strong> a single fixture with the bidet built in. These
                  need both a dedicated GFCI outlet and careful rough-in alignment, and many are heavier than
                  a standard toilet, which matters on older flanges.
                </li>
              </ul>
              <p className="text-ink mt-4">
                We will tell you up front which category your fixture falls into and whether an electrician
                needs to be involved, rather than discovering it with the old toilet already pulled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Flange and Subfloor Repair</h2>
              <p className="text-ink mb-4">
                A toilet that rocks, smells, or leaks at the base usually has a flange problem rather than a
                seal problem. Replacing the wax ring alone will not fix a flange sitting below finished floor
                height or one that has cracked at the bolt slots.
              </p>
              <p className="text-ink">
                We repair and replace flanges, add spacers where flooring has raised the finished height, and
                address soft subfloor caused by a long-running leak. If we find damage once the fixture is
                pulled, we show you and re-quote before doing the extra work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Repairs and Running Toilets</h2>
              <p className="text-ink mb-4">
                A continuously running toilet can waste hundreds of gallons a day, which shows up fast on a
                Valley water bill. Most cases are a worn flapper, a failed fill valve, or a float set wrong.
                Those are inexpensive fixes and worth doing before you consider replacing the fixture.
              </p>
              <p className="text-ink">
                Hard water is the other factor here. Mineral scale builds inside the rim jets and the fill
                valve, which weakens the flush and eventually causes the valve to stick. A{" "}
                <Link href="/services/water-softeners" className="text-brand-700 hover:underline font-semibold">
                  water softener
                </Link>{" "}
                slows that considerably.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Where We Install</h2>
              <p className="text-ink">
                Toilet and bidet installation throughout{" "}
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
            <h2 className="text-lg font-semibold mb-4 text-ink">Book an Installation</h2>
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
            <h2 className="text-lg font-semibold mb-4 text-ink">Before You Buy</h2>
            <ul className="space-y-2 text-sm text-ink">
              <li>Measure the rough-in: wall to drain center</li>
              <li>Check for a nearby GFCI outlet for electric bidets</li>
              <li>Confirm one-piece or two-piece fits the space</li>
              <li>Note the existing bowl shape, round or elongated</li>
            </ul>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4 text-ink">Why Choose Yeti Plumbing?</h2>
            <ul className="space-y-2 text-sm text-ink">
              <li>Licensed &amp; Insured (ROC360510)</li>
              <li>Old Fixture Hauled Away</li>
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
        <FAQSection faqs={serviceFaqs["toilet-bidet-install"]} />
      </div>
      <div className="-mx-4">
        <Testimonials service="general" limit={3} />
      </div>
      <div className="-mx-4">
        <RelatedServices current="toilet-bidet-install" />
      </div>
    </main>
  );
}
