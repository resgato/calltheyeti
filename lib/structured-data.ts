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
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        serviceType: [
          "Custom Home Plumbing",
          "Renovation Plumbing", 
          "Emergency Plumbing",
          "Kitchen Plumbing",
          "Bathroom Plumbing",
          "Water Heater Installation",
          "Fixture Installation",
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
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        ],
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
          text: "Yes. We provide 24/7 emergency plumbing across the Valley with rapid dispatch.",
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
          text: "We offer custom home plumbing, renovations, repairs, bathtub and shower installation, faucet and fixture work, water heater installation and repair, and emergency plumbing services.",
        },
      },
    ],
  }
}
