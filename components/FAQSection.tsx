import { JsonLd } from "@/components/JsonLd";
import { buildPageFAQJsonLd } from "@/lib/structured-data";

export type FAQ = { question: string; answer: string };

/**
 * Visible FAQ plus matching FAQPage markup.
 *
 * The questions are rendered as plain headings with the answer in a sibling
 * paragraph rather than inside <details>. Collapsed content is still indexable,
 * but answer engines quote most reliably from text that is present and visible,
 * and the heading gives them a clean question boundary to split on.
 *
 * Keeping the copy and the JSON-LD in one component means the two cannot drift,
 * which is the usual way FAQ markup ends up mismatched with the page.
 */
export function FAQSection({
  faqs,
  heading = "Frequently Asked Questions",
  id = "faq",
}: {
  faqs: FAQ[];
  heading?: string;
  id?: string;
}) {
  if (!faqs.length) return null;

  return (
    <section aria-labelledby={id} className="border-t border-line">
      <JsonLd data={buildPageFAQJsonLd(faqs)} />
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <h2 id={id} className="text-2xl font-semibold tracking-tight text-ink">
          {heading}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
              <p className="mt-2 text-ink-soft leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
