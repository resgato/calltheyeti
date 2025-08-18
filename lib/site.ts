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

const DEFAULT_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
  },
  serviceArea: [
    "Phoenix",
    "Mesa",
    "Scottsdale",
    "Gilbert",
    "Chandler",
    "Queen Creek",
  ],
  businessCategory: "Plumber",
  license: "ROC360510",
};

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: siteConfig.name,
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
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [] as string[],
  } as const;
}


