import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import NameGenerator from "@/components/tools/NameGenerator";

export const metadata: Metadata = {
  title: "Baby Name Generator - Browse & Filter Thousands of Names",
  description:
    "Browse and filter thousands of baby names by gender, origin, popularity, syllables, and themes. Find the perfect name for your baby.",
  alternates: {
    canonical: "/tools/name-generator",
  },
  openGraph: {
    title: "Baby Name Generator - Browse & Filter Thousands of Names",
    description:
      "Find your baby's name. Filter by gender, origin, popularity, syllable count, and more.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the most popular baby names?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular baby names change yearly. Recent top names include Liam, Noah, and Oliver for boys, and Olivia, Emma, and Charlotte for girls. Our generator lets you filter by trending, classic, unique, and rising names.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose a baby name?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consider meaning, origin, how it sounds with your last name, potential nicknames, and family significance. Many parents make a shortlist and wait until meeting their baby to decide. Our generator helps you explore options by filtering for what matters to you.",
      },
    },
  ],
};

export default function NameGeneratorPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Name Generator" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <NameGenerator />
      </div>
    </div>
  );
}
