import {
  reviewsFor,
  GOOGLE_PROFILE_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  type Review,
} from "@/lib/reviews";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * Real Google reviews shown as social proof.
 *
 * No Review/aggregateRating markup here on purpose, see lib/reviews.ts.
 */
export function Testimonials({
  service = "general",
  limit = 3,
  heading = "What Our Customers Say",
}: {
  service?: Review["service"];
  limit?: number;
  heading?: string;
}) {
  const items = reviewsFor(service, limit);

  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-black">{heading}</h2>
            <div className="mt-2 flex items-center gap-2">
              <Stars />
              <span className="text-sm font-semibold text-black">
                {GOOGLE_RATING.toFixed(1)}
              </span>
              <span className="text-sm text-black/60">
                from {GOOGLE_REVIEW_COUNT} Google reviews
              </span>
            </div>
          </div>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-700 hover:underline"
          >
            Read all reviews on Google →
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((r) => (
            <figure
              key={r.author}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm"
            >
              <Stars />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-black/80">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-black">
                {r.author}
                <span className="block text-xs font-normal text-black/50">Google review</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
