import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig } from "@/lib/site";
import Script from "next/script";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the best plumber in Arizona?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yeti Plumbing is a top-rated Arizona plumber known for fast response, fair pricing, and expert technicians serving Phoenix and surrounding cities.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer emergency plumbing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide 24/7 emergency plumbing across the Valley with rapid dispatch.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas do you service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `We serve ${siteConfig.serviceArea.join(", ")}, and nearby communities across Arizona.`,
        },
      },
    ],
  } as const;

  return (
    <main>
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <section className="bg-red-700 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Arizona's Best Plumber — Fast. Friendly. Fair.
            </h1>
            <div className="flex justify-center my-8">
              <img src="/yeti-logo.png" alt="Yeti Plumbing" className="h-24 w-24 md:h-32 md:w-32" />
            </div>
            <p className="mt-4 text-lg text-white/90">
              Custom homes, renovations, and service plumbing done right. Bathtubs,
              showers, faucets, kitchens, and more — same-day service across the Valley.
            </p>
            <p className="mt-2 text-white/80">
              Serving {siteConfig.serviceArea.join(", ")} and surrounding areas.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center rounded-md bg-yellow-400 px-4 py-2 text-black font-semibold shadow hover:bg-yellow-500"
              >
                Call {siteConfig.phone}
              </a>
              <a
                href="#request"
                className="inline-flex items-center rounded-md border border-white/30 px-4 py-2 text-white hover:bg-white/10"
              >
                Request Service
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-black/70 sm:grid-cols-2">
              <li className="text-white/90">✓ 24/7 Emergency Service</li>
              <li className="text-white/90">✓ Licensed & Insured</li>
              <li className="text-white/90">✓ Upfront, Honest Pricing</li>
              <li className="text-white/90">✓ 1000+ Local Homes Served</li>
            </ul>
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="bg-yellow-400">
        <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: "Customer Education", desc: "Clear options and pricing" },
            { title: "No Mess", desc: "Clean protective jobsite" },
            { title: "Experienced Team", desc: "Licensed • Insured" },
          ].map((b) => (
            <div key={b.title} className="rounded-md bg-white p-4 shadow-sm">
              <div className="text-base font-semibold">{b.title}</div>
              <div className="text-xs text-black/70">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Plumbing Services</h2>
          <p className="mt-2 text-black/70">Expert technicians for any job — big or small.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { href: "/services", title: "Custom Homes", desc: "Plumbing rough-ins & finish" },
              { href: "/services", title: "Renovations", desc: "Kitchen & bath remodel plumbing" },
              { href: "/services", title: "Service & Repairs", desc: "Leaks, clogs, replacements" },
              { href: "/services", title: "Bathtubs & Showers", desc: "Install & upgrades" },
              { href: "/services", title: "Faucets & Fixtures", desc: "Repair or replace" },
              { href: "/services", title: "Water Heaters", desc: "Repair & install" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-lg border border-black/10 p-4 hover:shadow-sm bg-white"
              >
                <div className="text-lg font-medium">{item.title}</div>
                <div className="text-sm text-black/70">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-center">Our Work Speaks for Itself</h2>
          <p className="mt-2 text-black/70 text-center">See the transformation from before to after</p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Kitchen Remodel</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img src="/kitchenbefore.jpg" alt="Kitchen before renovation" className="w-full rounded-lg shadow-md" />
                  <p className="mt-2 text-sm text-black/70 text-center">Before</p>
                </div>
                <div>
                  <img src="/kitchen.jpg" alt="Kitchen after renovation" className="w-full rounded-lg shadow-md" />
                  <p className="mt-2 text-sm text-black/70 text-center">After</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Bathroom Upgrade</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img src="/bathtubbefore.jpg" alt="Bathroom before renovation" className="w-full rounded-lg shadow-md" />
                  <p className="mt-2 text-sm text-black/70 text-center">Before</p>
                </div>
                <div>
                  <img src="/bathtub.jpg" alt="Bathroom after renovation" className="w-full rounded-lg shadow-md" />
                  <p className="mt-2 text-sm text-black/70 text-center">After</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <img src="/familyfirst.jpg" alt="Family-first approach to plumbing" className="mx-auto max-w-md rounded-lg shadow-md" />
            <p className="mt-4 text-lg font-medium">Family-First Approach</p>
            <p className="text-black/70">We treat every home like it's our own</p>
          </div>
        </div>
      </section>

      <section id="request" className="bg-[--color-ice-50]">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Need a plumber now?</h2>
              <p className="mt-2 text-black/70">
                We’ll dispatch a pro to your door. Most issues resolved same day.
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-black/70 sm:grid-cols-2">
                <li>✓ Valley-wide coverage</li>
                <li>✓ Great reviews</li>
                <li>✓ Respect for your home</li>
                <li>✓ Financing options</li>
              </ul>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Proudly Serving Arizona</h2>
          <p className="mt-2 text-black/70">
            {siteConfig.serviceArea.join(" • ")}
          </p>
        </div>
      </section>
    </main>
  );
}
