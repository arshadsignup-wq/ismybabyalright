import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://ismybabyalright.com"),
  title: {
    default: "Is My Baby Alright? | Evidence-Based Baby Development Guide",
    template: "%s | Is My Baby Alright?",
  },
  description:
    "Free, evidence-based baby milestone tracker and developmental resource. 325+ concern guides, triage tools, and trackers based on CDC, WHO, and AAP guidelines.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Is My Baby Alright?",
    locale: "en_US",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Is My Baby Alright?  -  Evidence-based baby development resource" }],
  },
  twitter: {
    card: "summary_large_image",
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
  url: "https://ismybabyalright.com",
  description:
    "Free, evidence-based baby milestone tracker and developmental resource. 325+ concern guides based on CDC, WHO, and AAP guidelines.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ismybabyalright.com/concerns/{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Is My Baby Alright?",
  url: "https://ismybabyalright.com",
  logo: "https://ismybabyalright.com/logo.png",
  description:
    "Free, evidence-based baby developmental milestone tracker and parenting resource. Based on CDC, WHO, and AAP guidelines.",
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
      </body>
    </html>
  );
}
