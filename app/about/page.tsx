import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us | Phoenix's Trusted Plumber",
  description:
    "Yeti Plumbing is a family-owned Arizona plumbing company founded in 2020. Licensed (ROC360510), insured, and serving Phoenix, Mesa, Scottsdale, Gilbert, Chandler, and Queen Creek with custom home plumbing, renovations, and repairs.",
  keywords: [
    "about Yeti Plumbing",
    "Phoenix plumber company",
    "Arizona plumbing contractor",
    "licensed plumber Phoenix",
    "trusted plumber Arizona",
    "family owned plumber Phoenix",
    "ROC360510",
  ],
  openGraph: {
    title: "About Yeti Plumbing | Phoenix's Trusted Plumber",
    description: "Family-owned Arizona plumbing company. Licensed (ROC360510), insured, and serving the Phoenix metro with custom home plumbing, renovations, and repairs.",
    images: ["/familyfirst.jpg"],
  },
  alternates: {
    canonical: "https://calltheyeti.com/about",
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://calltheyeti.com" },
    { name: "About", url: "https://calltheyeti.com/about" },
  ]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <JsonLd data={breadcrumbJsonLd} />

      <h1 className="text-4xl font-bold tracking-tight text-black dark:text-black">About Yeti Plumbing</h1>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-black mb-3">Who We Are</h2>
            <p className="text-black/70 dark:text-black/70">
              Yeti Plumbing is a family-owned plumbing company based in Phoenix, Arizona. Founded in 2020,
              we specialize in custom home plumbing, kitchen and bathroom renovations, and residential
              service work across the Phoenix metro area. Our name reflects our approach — we show up
              ready to handle the toughest jobs with strength, reliability, and a calm demeanor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-black mb-3">Our Expertise</h2>
            <p className="text-black/70 dark:text-black/70">
              Our team brings hands-on experience across every type of residential plumbing — from
              full rough-in systems for new custom homes to precise finish work on high-end renovations.
              We work closely with general contractors, custom home builders, and homeowners throughout
              the Valley. Whether it is a complex re-pipe in a 1960s Arcadia ranch home or a tankless
              water heater install in a new Gilbert build, we approach every project with the same
              attention to detail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-black mb-3">Licensed & Insured</h2>
            <p className="text-black/70 dark:text-black/70">
              Yeti Plumbing holds Arizona contractor license <strong>ROC360510</strong>, issued by the
              Arizona Registrar of Contractors. We are fully insured and bonded for your protection.
              Every technician on our team is background-checked and trained to meet or exceed Arizona
              plumbing code requirements. We pull permits when required and stand behind our work with
              a warranty on every job.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-black mb-3">How We Work</h2>
            <p className="text-black/70 dark:text-black/70 mb-3">
              We built Yeti Plumbing around three principles: <strong>Fast. Friendly. Fair.</strong>
            </p>
            <ul className="space-y-2 text-black/70 dark:text-black/70">
              <li><strong>Customer Education</strong> — We explain what we find and walk you through your options before any work begins. No surprises, no pressure.</li>
              <li><strong>Clean Jobsites</strong> — We protect your home during every visit. Drop cloths, boot covers, and cleanup are standard on every job.</li>
              <li><strong>Upfront Pricing</strong> — You will know the cost before we start. We do not charge hidden fees or tack on extras after the fact.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-black mb-3">Services We Provide</h2>
            <ul className="space-y-2 text-black/70 dark:text-black/70">
              <li><Link href="/services/custom-homes" className="text-red-700 hover:underline font-medium">Custom Home Plumbing</Link> — Full plumbing systems for new construction</li>
              <li><Link href="/services/renovations" className="text-red-700 hover:underline font-medium">Renovation Plumbing</Link> — Kitchen and bathroom remodels</li>
              <li><Link href="/services/repairs" className="text-red-700 hover:underline font-medium">Plumbing Repairs</Link> — Leak fixes, drain cleaning, emergency service</li>
              <li><Link href="/services/bathtubs-showers" className="text-red-700 hover:underline font-medium">Bathtubs & Showers</Link> — Installation and repair</li>
              <li><Link href="/services/faucets-fixtures" className="text-red-700 hover:underline font-medium">Faucets & Fixtures</Link> — Faucet replacement and fixture upgrades</li>
              <li><Link href="/services/water-heaters" className="text-red-700 hover:underline font-medium">Water Heaters</Link> — Tank and tankless installation and repair</li>
              <li><Link href="/services/water-softeners" className="text-red-700 hover:underline font-medium">Water Softeners</Link> — Water treatment and filtration systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-black mb-3">Areas We Serve</h2>
            <p className="text-black/70 dark:text-black/70 mb-3">
              Yeti Plumbing serves homeowners and builders across the Phoenix metropolitan area:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-black/70 dark:text-black/70">
              <li><Link href="/services/phoenix-plumber" className="text-red-700 hover:underline">Phoenix</Link></li>
              <li><Link href="/services/mesa-plumber" className="text-red-700 hover:underline">Mesa</Link></li>
              <li><Link href="/services/scottsdale-plumber" className="text-red-700 hover:underline">Scottsdale</Link></li>
              <li><Link href="/services/gilbert-plumber" className="text-red-700 hover:underline">Gilbert</Link></li>
              <li><Link href="/services/chandler-plumber" className="text-red-700 hover:underline">Chandler</Link></li>
              <li><Link href="/services/queen-creek-plumber" className="text-red-700 hover:underline">Queen Creek</Link></li>
            </ul>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Quick Facts</h3>
            <ul className="space-y-3 text-sm text-black dark:text-black">
              <li><strong>Founded:</strong> 2020</li>
              <li><strong>License:</strong> ROC360510</li>
              <li><strong>Type:</strong> Family-Owned</li>
              <li><strong>Service Area:</strong> Phoenix Metro</li>
              <li><strong>Specialties:</strong> Custom Homes, Renovations, Service</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-black">Get in Touch</h3>
            <p className="text-sm text-black/70 dark:text-black/70 mb-4">
              Ready to work with us? Call or request a quote online.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-block bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 mb-3 w-full text-center"
            >
              Call {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-block border border-red-700 text-red-700 px-4 py-2 rounded-md hover:bg-red-50 w-full text-center"
            >
              Request a Quote
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-gray-100 p-6 rounded-lg">
            <img src="/familyfirst.jpg" alt="Yeti Plumbing family-first approach" className="w-full rounded-lg" />
            <p className="mt-3 text-sm text-black/70 dark:text-black/70 text-center">
              Family-first approach to every job
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
