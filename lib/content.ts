export interface HomepageContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      href: string;
    }>;
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  gallery: {
    title: string;
    subtitle: string;
    projects: Array<{
      title: string;
      beforeImage: string;
      afterImage: string;
    }>;
    familyImage: string;
    familyTitle: string;
    familyDescription: string;
  };
  cta: {
    title: string;
    description: string;
    features: string[];
  };
  serviceArea: {
    title: string;
    areas: string[];
  };
}

export interface ContactContent {
  phone: string;
  phoneHref: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  serviceArea: string[];
}

export interface ServicesContent {
  title: string;
  subtitle: string;
  services: Array<{
    title: string;
    description: string;
    features: string[];
    image?: string;
  }>;
}

// Default content - this would typically come from a database
export const defaultHomepageContent: HomepageContent = {
  hero: {
    title: "Arizona's Best Plumber — Fast. Friendly. Fair.",
    subtitle: "Custom homes, renovations, and service plumbing done right.",
    description: "Custom homes, renovations, and service plumbing done right. Bathtubs, showers, faucets, kitchens, and more — same-day service across the Valley.",
    features: [
      "24/7 Emergency Service",
      "Licensed & Insured",
      "Upfront, Honest Pricing",
      "1000+ Local Homes Served"
    ]
  },
  services: {
    title: "Plumbing Services",
    subtitle: "Expert technicians for any job — big or small.",
    items: [
      { title: "Custom Homes", description: "Plumbing rough-ins & finish", href: "/services" },
      { title: "Renovations", description: "Kitchen & bath remodel plumbing", href: "/services" },
      { title: "Service & Repairs", description: "Leaks, clogs, replacements", href: "/services" },
      { title: "Bathtubs & Showers", description: "Install & upgrades", href: "/services" },
      { title: "Faucets & Fixtures", description: "Repair or replace", href: "/services" },
      { title: "Water Heaters", description: "Repair & install", href: "/services" }
    ]
  },
  features: [
    { title: "Customer Education", description: "Clear options and pricing" },
    { title: "No Mess", description: "Clean protective jobsite" },
    { title: "Experienced Team", description: "Licensed • Insured" }
  ],
  gallery: {
    title: "Our Work Speaks for Itself",
    subtitle: "See the transformation from before to after",
    projects: [
      {
        title: "Kitchen Remodel",
        beforeImage: "/kitchenbefore.jpg",
        afterImage: "/kitchen.jpg"
      },
      {
        title: "Bathroom Upgrade",
        beforeImage: "/bathtubbefore.jpg",
        afterImage: "/bathtub.jpg"
      }
    ],
    familyImage: "/familyfirst.jpg",
    familyTitle: "Family-First Approach",
    familyDescription: "We treat every home like it's our own"
  },
  cta: {
    title: "Need a plumber now?",
    description: "We'll dispatch a pro to your door. Most issues resolved same day.",
    features: [
      "Valley-wide coverage",
      "Great reviews",
      "Respect for your home",
      "Financing options"
    ]
  },
  serviceArea: {
    title: "Proudly Serving Arizona",
    areas: ["Phoenix", "Mesa", "Scottsdale", "Gilbert", "Chandler", "Queen Creek"]
  }
};

export const defaultContactContent: ContactContent = {
  phone: "(801) 707-2547",
  phoneHref: "tel:+18017072547",
  email: "cayden@calltheyeti.com",
  address: {
    streetAddress: "",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "",
    addressCountry: "US"
  },
  serviceArea: ["Phoenix", "Mesa", "Scottsdale", "Gilbert", "Chandler", "Queen Creek"]
};

export const defaultServicesContent: ServicesContent = {
  title: "Plumbing Services",
  subtitle: "Expert technicians for any job — big or small.",
  services: [
    {
      title: "Custom Homes",
      description: "Complete plumbing systems for new custom homes",
      features: ["Rough-in plumbing", "Finish plumbing", "Fixture installation", "Code compliance"]
    },
    {
      title: "Renovations",
      description: "Kitchen and bathroom renovation plumbing services",
      features: ["Kitchen plumbing", "Bathroom plumbing", "Fixture upgrades", "Modern installations"]
    },
    {
      title: "Service & Repairs",
      description: "Emergency and routine plumbing repairs",
      features: ["Leak repairs", "Clog removal", "Fixture repairs", "Emergency service"]
    },
    {
      title: "Bathtubs & Showers",
      description: "Professional bathtub and shower installation",
      features: ["Tub installation", "Shower installation", "Upgrades", "Accessibility features"]
    },
    {
      title: "Faucets & Fixtures",
      description: "Repair and replacement of faucets and fixtures",
      features: ["Faucet repair", "Fixture replacement", "Modern upgrades", "Water efficiency"]
    },
    {
      title: "Water Heaters",
      description: "Water heater repair and installation services",
      features: ["Tank water heaters", "Tankless water heaters", "Repairs", "Energy efficiency"]
    }
  ]
};

// In-memory storage for demo purposes
// In production, this would be a database
let homepageContent = { ...defaultHomepageContent };
let contactContent = { ...defaultContactContent };
let servicesContent = { ...defaultServicesContent };

export const contentStore = {
  getHomepageContent: () => homepageContent,
  setHomepageContent: (content: HomepageContent) => {
    homepageContent = content;
  },
  getContactContent: () => contactContent,
  setContactContent: (content: ContactContent) => {
    contactContent = content;
  },
  getServicesContent: () => servicesContent,
  setServicesContent: (content: ServicesContent) => {
    servicesContent = content;
  },
  resetToDefaults: () => {
    homepageContent = { ...defaultHomepageContent };
    contactContent = { ...defaultContactContent };
    servicesContent = { ...defaultServicesContent };
  }
};
