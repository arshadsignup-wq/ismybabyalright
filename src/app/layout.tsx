import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { getEditorialPolicySchema } from "@/lib/seo";
import { Nunito, Fira_Code } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ismybabyalright.com"),
  title: {
    default: "Is My Baby Alright? | Evidence-Based Baby Development Guide",
    template: "%s | Is My Baby Alright?",
  },
  description:
    "Free, evidence-based baby milestone tracker and developmental resource. 2,000+ concern guides, triage tools, and trackers based on CDC, WHO, and AAP guidelines.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "BidsA_EC1A3629mdgk6uG63LaLx-q8smKdMj5ENShhg",
  },
  openGraph: {
    type: "website",
    siteName: "Is My Baby Alright?",
    locale: "en_US",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Is My Baby Alright?  -  Evidence-based baby development resource" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is My Baby Alright?",
    description:
      "Free, evidence-based baby milestone tracker and developmental resource. 2,000+ concern guides based on CDC, WHO, and AAP guidelines.",
    images: ["/og/default.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Is My Baby Alright?",
  url: "https://www.ismybabyalright.com",
  description:
    "Free, evidence-based baby milestone tracker and developmental resource. 2,000+ concern guides based on CDC, WHO, and AAP guidelines.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.ismybabyalright.com/concerns?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Is My Baby Alright?",
  url: "https://www.ismybabyalright.com",
  logo: "https://www.ismybabyalright.com/logo.png",
  description:
    "Free, evidence-based baby developmental milestone tracker and parenting resource. Based on CDC, WHO, and AAP guidelines.",
  foundingDate: "2026",
  publishingPrinciples: "https://www.ismybabyalright.com/editorial-policy",
  ethicsPolicy: "https://www.ismybabyalright.com/editorial-policy",
  correctionsPolicy: "https://www.ismybabyalright.com/editorial-policy",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://www.ismybabyalright.com/contact",
  },
  knowsAbout: [
    "Baby developmental milestones",
    "Infant health",
    "Pediatric care guidelines",
    "Postpartum mental health",
    "Baby nutrition and feeding",
  ],
};

const editorialPolicyJsonLd = getEditorialPolicySchema();

const siteNavJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "SiteNavigationElement", position: 1, name: "Milestones", url: "https://www.ismybabyalright.com/milestones" },
    { "@type": "SiteNavigationElement", position: 2, name: "Concerns", url: "https://www.ismybabyalright.com/concerns" },
    { "@type": "SiteNavigationElement", position: 3, name: "Symptom Checker", url: "https://www.ismybabyalright.com/triage" },
    { "@type": "SiteNavigationElement", position: 4, name: "Growth Calculator", url: "https://www.ismybabyalright.com/tools/growth" },
    { "@type": "SiteNavigationElement", position: 5, name: "Tools", url: "https://www.ismybabyalright.com/tools" },
    { "@type": "SiteNavigationElement", position: 6, name: "Vaccine Tracker", url: "https://www.ismybabyalright.com/vaccines" },
    { "@type": "SiteNavigationElement", position: 7, name: "Medicine Dosage", url: "https://www.ismybabyalright.com/tools/medicine-dosage" },
    { "@type": "SiteNavigationElement", position: 8, name: "Food Guide", url: "https://www.ismybabyalright.com/food" },
    { "@type": "SiteNavigationElement", position: 9, name: "Sleep Guide", url: "https://www.ismybabyalright.com/sleep" },
    { "@type": "SiteNavigationElement", position: 10, name: "Feeding Guide", url: "https://www.ismybabyalright.com/feeding" },
    { "@type": "SiteNavigationElement", position: 11, name: "Teething Guide", url: "https://www.ismybabyalright.com/teething" },
    { "@type": "SiteNavigationElement", position: 12, name: "Tummy Time", url: "https://www.ismybabyalright.com/tummy-time" },
    { "@type": "SiteNavigationElement", position: 13, name: "Mental Health", url: "https://www.ismybabyalright.com/mental-health" },
    { "@type": "SiteNavigationElement", position: 14, name: "First Aid", url: "https://www.ismybabyalright.com/first-aid" },
    { "@type": "SiteNavigationElement", position: 15, name: "Baby Names", url: "https://www.ismybabyalright.com/baby-names" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${firaCode.variable} h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(editorialPolicyJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5784937598297489"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
