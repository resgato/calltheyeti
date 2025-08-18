import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { siteConfig, buildLocalBusinessJsonLd } from "@/lib/site";
import { buildStructuredData } from "@/lib/structured-data";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Best Plumber in Arizona | Yeti Plumbing",
    template: "%s | Yeti Plumbing",
  },
  description:
    "Phoenix plumbers for custom homes, renovations, and service. Bathtubs, showers, faucets, kitchens, water heaters and more. Licensed • Insured • ROC360510.",
  keywords: [
    "Phoenix plumber",
    "Arizona plumber",
    "best plumber in Arizona",
    "custom home plumbing",
    "renovation plumbing",
    "kitchen plumbing",
    "bathroom plumber",
    "water heater install",
    "emergency plumbing",
    "Mesa plumber",
    "Scottsdale plumber",
    "Gilbert plumber",
    "Chandler plumber",
    "Queen Creek plumber",
  ],
  authors: [{ name: "Yeti Plumbing" }],
  creator: "Yeti Plumbing",
  publisher: "Yeti Plumbing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Yeti Plumbing | Phoenix Custom Homes, Renovations & Service",
    description:
      "Phoenix specialists in custom homes, renovations, and service plumbing — bathtubs, showers, faucets, kitchens and more.",
    siteName: siteConfig.name,
    locale: "en_US",
    images: [
      {
        url: "/yeti-logo.png",
        width: 1200,
        height: 630,
        alt: "Yeti Plumbing - Best Plumber in Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeti Plumbing | Phoenix Custom Homes, Renovations & Service",
    description:
      "Phoenix specialists in custom homes, renovations, and service plumbing — bathtubs, showers, faucets, kitchens and more.",
    images: ["/yeti-logo.png"],
    creator: "@calltheyeti",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  category: "Plumbing Services",
  classification: "Local Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="yeti-jsonld" type="application/ld+json">
          {JSON.stringify(buildLocalBusinessJsonLd())}
        </Script>
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify(buildStructuredData())}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <footer className="mt-24 border-t border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-black/70">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode} · {siteConfig.phone} · ROC360510
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
