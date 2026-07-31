import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buildServicePageJsonLd, buildBreadcrumbJsonLd, buildPageFAQJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Drain Cleaning | Mesa & Scottsdale, AZ",
  description:
    "Professional drain cleaning in Mesa, Scottsdale, and Paradise Valley, AZ. Clogged drains, sewer line clearing, camera inspection, and root removal. ROC360510.",
  keywords: [
    "drain cleaning",
    "drain cleaning Mesa AZ",
    "drain cleaning Scottsdale AZ",
    "drain cleaning Paradise Valley",
    "clogged drain Mesa",
    "sewer line cleaning Scottsdale",
    "hydro jetting Mesa AZ",
    "sewer camera inspection Scottsdale",
    "main line clog Phoenix",
    "root removal sewer line",
  ],
  openGraph: {
    title: "Drain Cleaning | Mesa, Scottsdale & Paradise Valley AZ | Yeti Plumbing",
    description:
      "Professional drain cleaning in Mesa, Scottsdale, and Paradise Valley, AZ. Clogged drains, sewer line clearing, camera inspection, and root removal.",
  },
  alternates: {
    canonical: "https://calltheyeti.com/services/drain-cleaning",
  },
};

export default function DrainCleaningPage() {
  const serviceJsonLd = buildServicePageJsonLd({
    name: "Drain Cleaning",
    description:
      "Professional drain cleaning and sewer line clearing for homes in Mesa, Scottsdale, Paradise Valley, and Phoenix, AZ. Includes camera inspection and root removal.",
    url: "https://calltheyeti.com/services/drain-cleaning",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://calltheyeti.com" },
    { name: "Services", url: "https://calltheyeti.com/services" },
    { name: "Drain Cleaning", url: "https://calltheyeti.com/services/drain-cleaning" },
  ]);
  const faqJsonLd = buildPageFAQJsonLd([
    { question: "How much does drain cleaning cost in Mesa or Scottsdale?", answer: "Cost depends on the location of the clog and how it has to be cleared. A single slow fixture drain is straightforward, while a main sewer line blockage requiring camera work costs more. We quote the job before we start, so you approve the price first." },
    { question: "Should I use a chemical drain cleaner first?", answer: "We recommend against it. Store-bought chemical cleaners rarely clear a real blockage, and they sit in the pipe corroding older metal drain lines while creating a hazard for whoever opens the line next. Mechanical clearing is safer and actually removes the obstruction." },
    { question: "Do you use a camera to inspect the line?", answer: "Yes. For recurring clogs and main line blockages we run a camera to find the actual cause, whether that is root intrusion, a bellied section, a broken pipe, or heavy scale buildup. You see the footage, so the recommended repair is not a guess." },
    { question: "What causes recurring drain clogs in Arizona homes?", answer: "The two most common causes are tree root intrusion into older sewer lines and mineral scale buildup from hard water narrowing the pipe over time. Mature landscaping in established Mesa, Scottsdale, and Paradise Valley neighborhoods makes root intrusion especially common." },
    { question: "Do you clear main sewer lines?", answer: "Yes. We clear main sewer line blockages, including root intrusion, using drain machines and hydro jetting where appropriate, and we inspect afterward to confirm the line is fully open." },
  ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd data={serviceJsonLd} />
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
            Drain Cleaning — Mesa, Scottsdale &amp; Paradise Valley, AZ
          </h1>
          <p className="text-lg text-black/70 dark:text-black/70 mb-6">
            A slow drain is an annoyance. A backed-up main line is a flooded floor. Yeti Plumbing clears
            clogged drains and sewer lines across Mesa, Scottsdale, Paradise Valley, and Phoenix — and we
            find out why it clogged, so you are not calling someone again in three months.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Drains We Clear
              </h2>
              <ul className="text-black dark:text-black space-y-3">
                <li>
                  <strong>Kitchen sink drains</strong> — grease, food waste, and soap buildup, including
                  lines shared with a dishwasher or disposal.
                </li>
                <li>
                  <strong>Bathroom sink and tub drains</strong> — hair and soap scum, the most common
                  household clog.
                </li>
                <li>
                  <strong>Toilets and branch lines</strong> — obstructions that plunging will not move.
                </li>
                <li>
                  <strong>Shower drains</strong> — slow-draining pans and standing water.
                </li>
                <li>
                  <strong>Laundry and floor drains</strong> — lint buildup and garage floor drain backups.
                </li>
                <li>
                  <strong>Main sewer lines</strong> — full-house backups, root intrusion, and blockages that
                  cause several fixtures to back up at once.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Warning Signs of a Main Line Blockage
              </h2>
              <p className="text-black dark:text-black mb-4">
                A single slow fixture is usually a local clog. These signs point to the main line instead,
                and they need attention quickly:
              </p>
              <ul className="text-black dark:text-black space-y-3">
                <li>More than one fixture draining slowly or backing up at the same time</li>
                <li>Water rising in a tub or shower when you flush a toilet</li>
                <li>Gurgling from a drain when a nearby fixture is used</li>
                <li>Sewage odor indoors or near a cleanout</li>
                <li>Water pooling around a floor drain or outdoor cleanout</li>
              </ul>
              <p className="text-black dark:text-black mt-4">
                If sewage is entering the home, stop using every fixture and call us. See our{" "}
                <Link href="/services/emergency-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                  emergency plumbing service
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Why Arizona Drains Clog
              </h2>
              <p className="text-black dark:text-black mb-4">
                <strong>Tree roots.</strong> Established neighborhoods across Mesa, Scottsdale, and Paradise
                Valley have mature landscaping, and in a desert climate roots aggressively seek the moisture
                inside sewer lines. They enter through joints and small cracks, then expand until the line is
                choked. Older clay and cast-iron lines are the most vulnerable.
              </p>
              <p className="text-black dark:text-black mb-4">
                <strong>Hard water scale.</strong> Valley water is heavily mineralized. Over years, scale
                accumulates on the inside of drain and supply lines, narrowing the effective diameter until
                ordinary use starts causing backups. A{" "}
                <Link href="/services/water-softeners" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                  water softener
                </Link>{" "}
                slows this considerably.
              </p>
              <p className="text-black dark:text-black">
                <strong>Ground movement.</strong> Expansive soil shifts under slab foundations and can leave a
                sag, or belly, in a drain line. Waste collects in the low spot and clogs repeatedly no matter
                how many times it is snaked. Camera inspection is the only reliable way to identify this.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                How We Clear and Diagnose
              </h2>
              <p className="text-black dark:text-black mb-4">
                We start by clearing the blockage mechanically with a drain machine sized to the line. For
                heavy grease, scale, or root masses in a main line, hydro jetting scours the pipe wall back to
                full diameter rather than just punching a hole through the obstruction.
              </p>
              <p className="text-black dark:text-black">
                For recurring clogs, we run a camera through the line afterward. That tells us whether we are
                dealing with roots, a break, a belly, or scale — and you see the same footage we do. It turns a
                repeat problem into a specific, fixable one instead of an open-ended series of service calls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-black mb-4">
                Drain Cleaning Service Areas
              </h2>
              <ul className="text-black dark:text-black space-y-2">
                <li>
                  <Link href="/services/mesa-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Mesa
                  </Link>{" "}
                  — East Mesa, Superstition Springs, and Mesa Riverview.
                </li>
                <li>
                  <Link href="/services/scottsdale-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Scottsdale
                  </Link>{" "}
                  — Old Town, McCormick Ranch, and North Scottsdale.
                </li>
                <li>
                  <Link href="/services/paradise-valley-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Paradise Valley
                  </Link>{" "}
                  — all of 85253.
                </li>
                <li>
                  <Link href="/services/phoenix-plumber" className="text-brand-700 dark:text-brand-700 hover:underline font-semibold">
                    Phoenix
                  </Link>
                  ,{" "}
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
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">How much does drain cleaning cost in Mesa or Scottsdale?</h3>
                  <p className="text-black dark:text-black">
                    Cost depends on the location of the clog and how it has to be cleared. A single slow
                    fixture drain is straightforward, while a main sewer line blockage requiring camera work
                    costs more. We quote the job before we start, so you approve the price first.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Should I use a chemical drain cleaner first?</h3>
                  <p className="text-black dark:text-black">
                    We recommend against it. Store-bought chemical cleaners rarely clear a real blockage, and
                    they sit in the pipe corroding older metal drain lines while creating a hazard for whoever
                    opens the line next. Mechanical clearing is safer and actually removes the obstruction.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Do you use a camera to inspect the line?</h3>
                  <p className="text-black dark:text-black">
                    Yes. For recurring clogs and main line blockages we run a camera to find the actual cause,
                    whether that is root intrusion, a bellied section, a broken pipe, or heavy scale buildup.
                    You see the footage, so the recommended repair is not a guess.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">What causes recurring drain clogs in Arizona homes?</h3>
                  <p className="text-black dark:text-black">
                    The two most common causes are tree root intrusion into older sewer lines and mineral
                    scale buildup from hard water narrowing the pipe over time. Mature landscaping in
                    established Mesa, Scottsdale, and Paradise Valley neighborhoods makes root intrusion
                    especially common.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black mb-2">Do you clear main sewer lines?</h3>
                  <p className="text-black dark:text-black">
                    Yes. We clear main sewer line blockages, including root intrusion, using drain machines and
                    hydro jetting where appropriate, and we inspect afterward to confirm the line is fully open.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Clogged Drain?</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Call for drain cleaning in Mesa, Scottsdale, or Paradise Valley. Price quoted before we start.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-block bg-brand-600 text-white px-4 py-2 rounded-full hover:bg-brand-700"
            >
              Call Now: {siteConfig.phone}
            </a>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Sewage Backing Up?</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Stop using all fixtures and treat it as an emergency.
            </p>
            <Link
              href="/services/emergency-plumber"
              className="inline-block bg-brand-600 text-white px-4 py-2 rounded-full hover:bg-brand-700"
            >
              Emergency Plumbing
            </Link>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Service Areas</h3>
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
            </ul>
          </div>

          <div className="bg-surface p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Why Choose Yeti Plumbing?</h3>
            <ul className="space-y-2 text-sm text-black dark:text-black">
              <li>Licensed &amp; Insured (ROC360510)</li>
              <li>Camera Diagnosis, Not Guesswork</li>
              <li>Price Quoted Before Work Starts</li>
              <li>Clean, Professional Service</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-14 -mx-4 overflow-hidden">
        <Testimonials service="drain-cleaning" limit={3} />
      </div>
    </main>
  );
}
