export type Address = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  latitude?: number;
  longitude?: number;
};

export type SiteConfig = {
  name: string;
  legalName?: string;
  url: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: Address;
  serviceArea: string[];
  businessCategory: "Plumber" | string;
  license?: string;
};

const DEFAULT_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://calltheyeti.com";

export const siteConfig: SiteConfig = {
  name: "Yeti Plumbing",
  legalName: "Yeti Plumbing LLC",
  url: DEFAULT_URL,
  phone: "(801) 707-2547",
  phoneHref: "tel:+18017072547",
  email: "cayden@calltheyeti.com",
  address: {
    streetAddress: "",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "",
    addressCountry: "US",
    latitude: 33.4484,
    longitude: -112.0740,
  },
  serviceArea: [
    "Phoenix",
    "Mesa",
    "Scottsdale",
    "Paradise Valley",
    "Gilbert",
    "Chandler",
    "Queen Creek",
  ],
  businessCategory: "Plumber",
  license: "ROC360510",
};

/**
 * City landing pages, in the order we surface them site-wide.
 * Single source of truth for the homepage, footer, and services index so a new
 * location page only has to be linked in one place.
 */
export const serviceAreaLinks: { name: string; href: string }[] = [
  { name: "Phoenix", href: "/services/phoenix-plumber" },
  { name: "Mesa", href: "/services/mesa-plumber" },
  { name: "Scottsdale", href: "/services/scottsdale-plumber" },
  { name: "Paradise Valley", href: "/services/paradise-valley-plumber" },
  { name: "Gilbert", href: "/services/gilbert-plumber" },
  { name: "Chandler", href: "/services/chandler-plumber" },
  { name: "Queen Creek", href: "/services/queen-creek-plumber" },
];

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: siteConfig.name,
    alternateName: "Yeti Plumbing LLC",
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    identifier: siteConfig.license,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: siteConfig.address.latitude && siteConfig.address.longitude ? {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.latitude,
      longitude: siteConfig.address.longitude,
    } : undefined,
    areaServed: siteConfig.serviceArea.map((area) => ({ "@type": "City", name: area })),
    hasCredential: siteConfig.license
      ? {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Contractor License",
          name: siteConfig.license,
          issuingBody: "Arizona Registrar of Contractors",
        }
      : undefined,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "14:00",
      },
    ],
    serviceType: [
      "Custom Home Plumbing",
      "Renovation Plumbing",
      "Emergency Plumbing",
      "Kitchen Plumbing",
      "Bathroom Plumbing",
      "Water Heater Installation",
      "Water Softener Installation",
      "Fixture Installation",
      "Plumbing Repair",
      "Drain Cleaning",
    ],
    priceRange: "$$",
    paymentAccepted: ["Cash", "Check", "Credit Card", "Debit Card"],
    foundingDate: "2020",
    description: "Phoenix plumbers for custom homes, renovations, and service. Bathtubs, showers, faucets, kitchens, water heaters and more.",
    slogan: "Fast. Friendly. Fair.",
    knowsAbout: [
      "Plumbing Systems",
      "Custom Home Construction",
      "Kitchen Remodeling",
      "Bathroom Remodeling",
      "Water Heater Installation",
      "Emergency Plumbing",
      "Drain Cleaning",
      "Fixture Installation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Home Plumbing",
            description: "Complete plumbing systems for new custom homes"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Renovation Plumbing",
            description: "Kitchen and bathroom renovation plumbing services"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Plumbing",
            description: "Emergency plumbing services"
          }
        }
      ]
    },
    // Mirrors the live Google Business Profile (5.0 from 29 reviews). Google
    // excludes self-serving LocalBusiness ratings from review rich results, so
    // this will not render stars — it is here so the markup is accurate for
    // other consumers rather than asserting a stale count.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "29",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: ["https://www.instagram.com/yetiplumbingaz/", "https://www.yelp.com/biz/yeti-plumbing-phoenix"],
  } as const;
}


