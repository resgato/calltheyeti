import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig, serviceAreaLinks } from "@/lib/site";
import { buildFAQStructuredData } from "@/lib/structured-data";
import { defaultHomepageContent } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { TrustBar } from "@/components/TrustBar";
import { HowItWorks } from "@/components/HowItWorks";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  const faqJsonLd = buildFAQStructuredData();
  const content = defaultHomepageContent;

  return (
    <main>
      <JsonLd data={faqJsonLd} />
      <section className="bg-gradient-to-b from-brand-900 to-brand-800 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
          <div>
            {/*
              The logo is not repeated here on purpose: the PNG carries an opaque
              cream background that reads as a box against the navy, and the mark
              is already in the header.
            */}
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-white/20">
              Licensed &amp; Insured · ROC360510
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              {content.hero.description}
            </p>
            <p className="mt-3 text-sm text-white/70">
              Serving {content.serviceArea.areas.join(", ")} and surrounding areas.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-900/30 hover:bg-brand-500"
              >
                Call {siteConfig.phone}
              </a>
              <a
                href="#request"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10"
              >
                Request Service
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-white/85 sm:grid-cols-2">
              {content.hero.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Neutral surface, not the amber band this used to be — amber is reserved
          for urgency and the free-consultation offer so it keeps its signal. */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {content.features.map((feature, index) => (
            <div key={index} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <div className="text-base font-semibold text-ink">{feature.title}</div>
              <div className="mt-1 text-sm text-ink-soft">{feature.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white">{content.services.title}</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">{content.services.subtitle}</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {content.services.items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="rounded-2xl border border-line p-4 hover:shadow-sm bg-white dark:bg-surface"
              >
                <div className="text-lg font-medium text-black dark:text-black">{item.title}</div>
                <div className="text-sm text-black/70 dark:text-black/70">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-center text-black dark:text-black">{content.gallery.title}</h2>
          <p className="mt-2 text-black/70 dark:text-black/70 text-center">{content.gallery.subtitle}</p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {content.gallery.projects.map((project, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-black dark:text-black">{project.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <img src={project.beforeImage} alt={`${project.title} before`} className="w-full rounded-2xl shadow-md" />
                    <p className="mt-2 text-sm text-black/70 dark:text-black/70 text-center">Before</p>
                  </div>
                  <div>
                    <img src={project.afterImage} alt={`${project.title} after`} className="w-full rounded-2xl shadow-md" />
                    <p className="mt-2 text-sm text-black/70 dark:text-black/70 text-center">After</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <img src={content.gallery.familyImage} alt="Family-first approach to plumbing" className="mx-auto max-w-md rounded-2xl shadow-md" />
            <p className="mt-4 text-lg font-medium text-black dark:text-black">{content.gallery.familyTitle}</p>
            <p className="text-black/70 dark:text-black/70">{content.gallery.familyDescription}</p>
          </div>
        </div>
      </section>

      <Testimonials limit={3} />

      <ConsultationCTA />

      <section id="request" className="bg-brand-50 dark:bg-surface">
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

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-black">{content.serviceArea.title}</h2>
          <p className="mt-2 text-black/70 dark:text-black/70">
            Licensed plumbing across the East Valley and central Phoenix. Choose your city for local service
            details.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {serviceAreaLinks.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="rounded-2xl border border-line px-4 py-3 text-center text-sm font-medium text-black dark:text-black bg-white dark:bg-surface hover:border-brand-600 hover:text-brand-700"
              >
                {area.name} Plumber
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
