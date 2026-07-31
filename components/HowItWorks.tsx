import { siteConfig } from "@/lib/site";

/**
 * Three-step "what happens when you call" section.
 *
 * Removing uncertainty about the process is one of the highest-converting
 * patterns on home-service sites — homeowners hesitate mainly because they do
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
    <section className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-black">How It Works</h2>
        <p className="mt-2 text-black/70">
          No surprise invoices and no pressure. Here is exactly what to expect.
        </p>

        <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.step} className="rounded-lg border border-black/10 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-lg font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-black">{s.title}</h3>
              <p className="mt-2 text-sm text-black/70">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center rounded-md bg-red-700 px-5 py-3 font-semibold text-white hover:bg-red-800"
          >
            Call {siteConfig.phone}
          </a>
          <span className="text-sm text-black/60">Free estimates · Licensed ROC360510</span>
        </div>
      </div>
    </section>
  );
}
