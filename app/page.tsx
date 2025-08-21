import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig } from "@/lib/site";
import { buildFAQStructuredData } from "@/lib/structured-data";
import { defaultHomepageContent } from "@/lib/content";
import Script from "next/script";

export default function Home() {
  const faqJsonLd = buildFAQStructuredData();
  const content = defaultHomepageContent;

  return (
    <main>
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <section className="bg-red-700 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              {content.hero.title}
            </h1>
            <div className="flex justify-center my-8">
              <img src="/yeti-logo.png" alt="Yeti Plumbing" className="w-full max-w-2xl h-auto" />
            </div>
            <p className="mt-4 text-lg text-white/90">
              {content.hero.description}
            </p>
            <p className="mt-2 text-white/80">
              Serving {content.serviceArea.areas.join(", ")} and surrounding areas.
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
            <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-white/90 sm:grid-cols-2">
              {content.hero.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="bg-yellow-400">
        <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {content.features.map((feature, index) => (
            <div key={index} className="rounded-md bg-white p-4 shadow-sm">
              <div className="text-base font-semibold text-black">{feature.title}</div>
              <div className="text-xs text-black/70">{feature.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white">{content.services.title}</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">{content.services.subtitle}</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {content.services.items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="rounded-lg border border-black/10 dark:border-white/10 p-4 hover:shadow-sm bg-white dark:bg-gray-50"
              >
                <div className="text-lg font-medium text-black dark:text-black">{item.title}</div>
                <div className="text-sm text-black/70 dark:text-black/70">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-center text-black dark:text-black">{content.gallery.title}</h2>
          <p className="mt-2 text-black/70 dark:text-black/70 text-center">{content.gallery.subtitle}</p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {content.gallery.projects.map((project, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-black dark:text-black">{project.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <img src={project.beforeImage} alt={`${project.title} before`} className="w-full rounded-lg shadow-md" />
                    <p className="mt-2 text-sm text-black/70 dark:text-black/70 text-center">Before</p>
                  </div>
                  <div>
                    <img src={project.afterImage} alt={`${project.title} after`} className="w-full rounded-lg shadow-md" />
                    <p className="mt-2 text-sm text-black/70 dark:text-black/70 text-center">After</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <img src={content.gallery.familyImage} alt="Family-first approach to plumbing" className="mx-auto max-w-md rounded-lg shadow-md" />
            <p className="mt-4 text-lg font-medium text-black dark:text-black">{content.gallery.familyTitle}</p>
            <p className="text-black/70 dark:text-black/70">{content.gallery.familyDescription}</p>
          </div>
        </div>
      </section>

      <section id="request" className="bg-[--color-ice-50] dark:bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-black">{content.cta.title}</h2>
              <p className="mt-2 text-black/70 dark:text-black/70">
                {content.cta.description}
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-black/70 dark:text-black/70 sm:grid-cols-2">
                {content.cta.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-black">{content.serviceArea.title}</h2>
          <p className="mt-2 text-black/70 dark:text-black/70">
            {content.serviceArea.areas.join(" • ")}
          </p>
        </div>
      </section>
    </main>
  );
}
