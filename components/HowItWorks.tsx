import Link from "next/link";
import { siteConfig } from "@/lib/site";

/**
 * Three-step "what happens when you call" section.
 *
 * Removing uncertainty about the process is one of the highest-converting
 * patterns on home-service sites, homeowners hesitate mainly because they do
 * not know whether they are committing to a cost by picking up the phone.
 */
const STEPS = [
  {
    step: "1",
    title: "Call or request online",
    body: "Tell us what is going on. We ask a few questions to understand the job and schedule a visit that fits your day.",
  },
  {
    step: "2",
    title: "We diagnose and quote",
    body: "A licensed plumber inspects the problem, explains what we found in plain language, and gives you a firm price before any work starts.",
  },
  {
    step: "3",
    title: "We fix it right",
    body: "You approve the price, we do the work, and we clean up behind us. Every job is backed by our warranty.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-black">How It Works</h2>
        <p className="mt-2 text-black/70">
          No surprise invoices and no pressure. Here is exactly what to expect.
        </p>

        <ol className="mt-6 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-3 md:gap-6">
          {STEPS.map((s) => (
            <li key={s.step} className="rounded-2xl border border-line bg-white p-5 md:p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-base font-bold text-white md:h-10 md:w-10 md:text-lg">
                {s.step}
              </div>
              <h3 className="mt-3 text-base font-semibold text-black md:mt-4 md:text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-black/70">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center rounded-full bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700"
          >
            Call {siteConfig.phone}
          </a>
          <span className="text-sm text-black/60">
            Free estimates · Licensed ROC360510 ·{" "}
            <Link href="/about" className="font-medium text-brand-700 hover:underline">
              Meet the team
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
