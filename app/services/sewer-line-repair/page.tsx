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
  title: "Sewer Line Repair in Phoenix, Mesa & Scottsdale, AZ",
  description:
    "Sewer line repair, camera inspection, and root removal in Phoenix, Mesa, Scottsdale, and Paradise Valley. We diagnose the line before recommending a fix. ROC360510.",
  keywords: [
    "sewer line repair Phoenix",
    "sewer line repair cost",
    "main sewer line replacement cost",
    "sewer line replacement Mesa AZ",
    "sewer repair Scottsdale AZ",
    "sewer line camera inspection Phoenix",
    "trenchless sewer repair Phoenix",
    "sewer line root removal",
    "collapsed sewer line",
  ],
  openGraph: {
    title: "Sewer Line Repair in Phoenix, Mesa & Scottsdale, AZ",
    description:
      "Sewer line repair, camera inspection, and root removal across the Phoenix metro. We find the actual cause before recommending a fix.",
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/sewer-line-repair",
  },
};

export default function SewerLineRepairPage() {
  const serviceJsonLd = buildServicePageJsonLd({
    name: "Sewer Line Repair",
    description:
      "Sewer line repair, camera inspection, root removal, and blockage clearing for homes in Phoenix, Mesa, Scottsdale, and Paradise Valley, Arizona.",
    url: "https://calltheyeti.com/services/sewer-line-repair",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://calltheyeti.com" },
    { name: "Services", url: "https://calltheyeti.com/services" },
    { name: "Sewer Line Repair", url: "https://calltheyeti.com/services/sewer-line-repair" },
  ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 md:py-12">
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
            Sewer Line Repair in Phoenix, Mesa &amp; Scottsdale, AZ
          </h1>
          <p className="text-lg text-ink-soft mb-6">
            A sewer line problem is the one plumbing issue where guessing gets expensive fast. Before anyone
            talks about digging up your yard, the line needs to be inspected so you know whether you are
            dealing with roots, a crack, a sag, or simply a blockage. We diagnose first and tell you what the
            line actually needs.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Signs of a Sewer Line Problem</h2>
              <p className="text-ink mb-4">
                A single slow fixture is usually a local clog. These point at the main line instead:
              </p>
              <ul className="text-ink space-y-3">
                <li>Several fixtures backing up at the same time, especially the lowest ones in the house</li>
                <li>Water rising in a tub or shower when a toilet is flushed</li>
                <li>Gurgling from a drain when a washing machine or dishwasher drains</li>
                <li>Sewage odor indoors, near a cleanout, or in the yard</li>
                <li>Soggy or unusually green patches in the yard along the line</li>
                <li>Repeated clogs that come back within weeks of being cleared</li>
              </ul>
              <p className="text-ink mt-4">
                If sewage is entering the home right now, stop using every fixture and treat it as an{" "}
                <Link href="/services/emergency-plumber" className="text-brand-700 hover:underline font-semibold">
                  emergency
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Why Sewer Lines Fail in the Phoenix Area</h2>
              <p className="text-ink mb-4">
                <strong>Tree roots.</strong> Roots seek the moisture and nutrients inside a sewer line, and in
                a desert climate that pull is strong. They enter through joints and hairline cracks, then
                expand until the line is choked. Established neighborhoods in Mesa, Scottsdale, and Paradise
                Valley have mature landscaping, which is exactly the condition roots need.
              </p>
              <p className="text-ink mb-4">
                <strong>Pipe age and material.</strong> Homes built through the middle of the last century
                often have clay or cast iron laterals. Clay joints are the classic root entry point. Cast iron
                corrodes and scales from the inside until the effective diameter is a fraction of the original.
                Both are past their designed service life in older parts of the Valley.
              </p>
              <p className="text-ink">
                <strong>Soil movement.</strong> Expansive soil swells and shrinks with moisture, which shifts
                the ground under a buried line. That causes offset joints and low spots, called bellies, where
                waste collects. A bellied line clogs repeatedly no matter how many times it is cleared, which
                is why a camera matters more than another snaking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Camera Inspection Comes First</h2>
              <p className="text-ink mb-4">
                We run a camera through the line and locate what we find. That answers the questions that
                actually determine the cost: is the pipe broken or just blocked, where exactly is the problem,
                how deep is it, and is the rest of the line sound.
              </p>
              <p className="text-ink">
                You see the same footage we do. That matters on a repair this size, because it turns a
                recommendation you have to take on faith into something you can look at yourself. It also
                protects you from paying for a full replacement when a spot repair would have done it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Repair Options</h2>
              <p className="text-ink mb-4">
                Once we know the condition of the line, there are generally four paths. Which one applies
                depends on what the camera shows, not on what is easiest to sell:
              </p>
              <ul className="text-ink space-y-3">
                <li>
                  <strong>Clearing and root removal:</strong> if the pipe is structurally sound and roots or
                  buildup are the problem, cutting them out and hydro jetting the line back to full diameter
                  solves it. See{" "}
                  <Link href="/services/drain-cleaning" className="text-brand-700 hover:underline font-semibold">
                    drain cleaning
                  </Link>
                  .
                </li>
                <li>
                  <strong>Spot repair:</strong> a single cracked or offset section gets excavated and replaced
                  while the rest of the line stays untouched. Far less disruptive and far less expensive than
                  replacing the run.
                </li>
                <li>
                  <strong>Trenchless rehabilitation:</strong> lining or bursting methods renew the line
                  through access pits instead of trenching the whole yard. They require specific conditions,
                  and we will tell you honestly whether your line is a candidate.
                </li>
                <li>
                  <strong>Full replacement:</strong> the right answer when a line is collapsed, badly bellied,
                  or so deteriorated that patching means repeat visits.
                </li>
              </ul>
              <p className="text-ink mt-4">
                We walk you through what the inspection found and what each option would involve for your
                property before you commit to anything.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">What Drives the Cost</h2>
              <p className="text-ink mb-4">
                There is no honest flat rate for sewer work, because the same symptom can be a straightforward
                clearing or a major excavation. These are the factors that move the number:
              </p>
              <ul className="text-ink space-y-3">
                <li><strong>Repair versus replacement:</strong> by far the biggest single factor</li>
                <li><strong>Length of the affected run:</strong> a single joint versus the full lateral</li>
                <li><strong>Depth:</strong> deeper lines mean more excavation and more restoration</li>
                <li><strong>What is on top:</strong> open yard is straightforward, driveway, mature landscaping, or a line running under the slab is not</li>
                <li><strong>Access:</strong> whether there is a usable cleanout and room to work</li>
                <li><strong>Permits:</strong> required for some replacement work, which we handle</li>
              </ul>
              <p className="text-ink mt-4">
                We inspect, explain what we found, and give you a firm price before any work starts. Estimates
                are free, and you approve the number first.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Sewer Service Areas</h2>
              <p className="text-ink">
                Sewer line diagnosis and repair throughout{" "}
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
            <h2 className="text-lg font-semibold mb-4 text-ink">Sewer Backing Up?</h2>
            <p className="text-sm text-ink-soft mb-4">
              Stop using all fixtures and call. We will get a camera on the line and tell you what it needs.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-block bg-brand-600 text-white px-4 py-2 rounded-full hover:bg-brand-700"
            >
              Call {siteConfig.phone}
            </a>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4 text-ink">Before You Approve a Replacement</h2>
            <ul className="space-y-2 text-sm text-ink">
              <li>Ask to see the camera footage</li>
              <li>Ask where exactly the damage is</li>
              <li>Ask whether a spot repair would work</li>
              <li>Get the price in writing before work starts</li>
            </ul>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4 text-ink">Why Choose Yeti Plumbing?</h2>
            <ul className="space-y-2 text-sm text-ink">
              <li>Licensed &amp; Insured (ROC360510)</li>
              <li>Camera Diagnosis, Not Guesswork</li>
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
        <FAQSection faqs={serviceFaqs["sewer-line-repair"]} />
      </div>
      <div className="-mx-4">
        <Testimonials service="drain-cleaning" limit={3} heading="Sewer and Drain Work We Have Done" />
      </div>
      <div className="-mx-4">
        <RelatedServices current="sewer-line-repair" />
      </div>
    </main>
  );
}
