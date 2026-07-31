import { siteConfig } from './site'

export function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        "@id": `${siteConfig.url}#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
        areaServed: siteConfig.serviceArea.map((area) => ({ "@type": "City", name: area })),
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Contractor License",
          name: siteConfig.license,
          issuingBody: "Arizona Registrar of Contractors",
        },
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
        paymentAccepted: ["Cash", "Check", "Credit Card"],
        foundingDate: "2020",
        description: "Phoenix plumbers for custom homes, renovations, and service. Bathtubs, showers, faucets, kitchens, water heaters and more.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: "Phoenix plumbers for custom homes, renovations, and service. Licensed • Insured • ROC360510.",
        publisher: {
          "@id": `${siteConfig.url}#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}#webpage`,
        url: siteConfig.url,
        name: "Best Plumber in Arizona | Yeti Plumbing",
        description: "Phoenix plumbers for custom homes, renovations, and service. Bathtubs, showers, faucets, kitchens, water heaters and more. Licensed • Insured • ROC360510.",
        isPartOf: {
          "@id": `${siteConfig.url}#website`,
        },
        about: {
          "@id": `${siteConfig.url}#organization`,
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteConfig.url,
            },
          ],
        },
      },
    ],
  }
}

export function buildFAQStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the best plumber in Arizona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yeti Plumbing is a top-rated Arizona plumber known for fast response, fair pricing, and expert technicians serving Phoenix and surrounding cities.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer emergency plumbing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide emergency plumbing across the Valley with rapid dispatch.",
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
      {
        "@type": "Question",
        name: "Are you licensed and insured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we are fully licensed (ROC360510) and insured for your protection.",
        },
      },
      {
        "@type": "Question",
        name: "What types of plumbing services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer custom home plumbing, renovations, repairs, bathtub and shower installation, faucet and fixture work, water heater installation and repair, water softener installation, and emergency plumbing services.",
        },
      },
    ],
  }
}

// Reusable breadcrumb builder for any page
export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Service page structured data
export function buildServicePageJsonLd(config: {
  name: string
  description: string
  url: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.name,
    description: config.description,
    url: config.url,
    image: config.image,
    provider: {
      "@type": "Plumber",
      "@id": `${siteConfig.url}#organization`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
    },
    areaServed: siteConfig.serviceArea.map((area) => ({ "@type": "City", name: area })),
    serviceType: config.name,
  }
}

// Reusable FAQ builder for any page
export function buildPageFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// Location page structured data, city-specific LocalBusiness
export function buildLocationPageJsonLd(config: {
  city: string
  state: string
  url: string
  description: string
  neighborhoods?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: `Yeti Plumbing - ${config.city} Plumber`,
    url: config.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: config.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: config.city,
      addressRegion: config.state,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: config.city,
      containedInPlace: {
        "@type": "State",
        name: "Arizona",
      },
    },
    parentOrganization: {
      "@type": "Plumber",
      "@id": `${siteConfig.url}#organization`,
      name: siteConfig.name,
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Contractor License",
      name: siteConfig.license,
      issuingBody: "Arizona Registrar of Contractors",
    },
    priceRange: "$$",
  }
}
