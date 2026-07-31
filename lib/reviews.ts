/**
 * Real customer reviews from the Yeti Plumbing Google Business Profile.
 *
 * Quotes are verbatim (trimmed only at sentence boundaries, marked with an
 * ellipsis) and attributed exactly as the reviewer appears on Google.
 *
 * Deliberately NOT marked up with Review/aggregateRating schema on the page:
 * Google's structured-data guidelines prohibit marking up reviews copied from
 * another site, and self-serving LocalBusiness reviews are excluded from review
 * rich results regardless. These are here as conversion social proof.
 *
 * `service` maps a review to the page where it is most relevant, so proof can
 * be shown next to the matching offer.
 */
export type Review = {
  author: string;
  quote: string;
  service:
    | "water-heaters"
    | "drain-cleaning"
    | "emergency"
    | "faucets-fixtures"
    | "repairs"
    | "general";
};

export const GOOGLE_PROFILE_URL = "https://maps.google.com/?cid=16026398084225769617";
export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = 29;

export const reviews: Review[] = [
  {
    author: "Garrett Sandberg",
    service: "water-heaters",
    quote:
      "We had an unexpected water heater failure and needed it replaced today. This plumbing company came through with same-day service and did an outstanding job from start to finish… He gave us a clear quote upfront and explained our options so we could make the best choice for our home. The owner arrived on time, worked efficiently, and made the installation look easy. He cleaned up afterward and walked us through how the new water heater works before they left.",
  },
  {
    author: "Nick Holladay",
    service: "drain-cleaning",
    quote:
      "Yeti Plumbing did a fantastic job helping me fix a clogged sewage line. He worked quickly and efficiently, made sure all the drains were completely clear, and explained what he was doing along the way.",
  },
  {
    author: "Mel",
    service: "emergency",
    quote:
      "Cayden was fantastic with fixing our shower leak! We had 3 other companies check out our upstairs showers that was leaking into our first floor family room, all of them seemed unsure and passed it to the next. Cayden was committed to finding the source and fixed it all! We appreciate that level of commitment, as it is hard to find.",
  },
  {
    author: "laurie mcrae",
    service: "emergency",
    quote:
      "Yeti is incredible. Came the same day. Replied a leaking outside faucet that was starting to leak between walls, as well as out side surface of house. Very affordable. Finished same day… So nice, so knowledgeable. Highly recommend.",
  },
  {
    author: "John Van Dyk",
    service: "general",
    quote:
      "They were quick to respond and were able to get me on the schedule the same week to install a sink in my laundry room. The quote was the best one I received, by far, and more than fair for the job. Cayden was very professional and friendly. He completed the install in under 2 hours. Cayden did an amazing job and left the area spotless.",
  },
  {
    author: "Tiffany H",
    service: "faucets-fixtures",
    quote:
      "Yeti was recommended to us by a friend and they were fantastic to work with. From start to finish Caden was very responsive, communicative and reliable. We ran into a hiccup with our kitchen faucet with how the old faucet was previously installed by a different company, Caden was able to troubleshoot and replace it for us.",
  },
  {
    author: "sue shreeve",
    service: "general",
    quote:
      "Cayden did a gas line for us and did a great job! I would highly recommend him to everyone I know! He is very professional, reliable, knows his stuff, and I like that he is a smaller family owned business… He showed up on time and communicated exactly what he was doing and what needed to be done.",
  },
  {
    author: "Bo Wint",
    service: "repairs",
    quote:
      "The outside spigot was installed in 1988 and Cayden did a great job of replacing it. His communication and customer service skills are right on! We will not hesitant to call him again.",
  },
  {
    author: "Sean E",
    service: "general",
    quote:
      "Cayden was such an exceptional plumber. Great attention to detail and follow through! I will be utilizing them again :-)",
  },
];

/** Reviews most relevant to a page, falling back to general ones. */
export function reviewsFor(service: Review["service"], limit = 3): Review[] {
  const matched = reviews.filter((r) => r.service === service);
  const rest = reviews.filter((r) => r.service !== service);
  return [...matched, ...rest].slice(0, limit);
}
