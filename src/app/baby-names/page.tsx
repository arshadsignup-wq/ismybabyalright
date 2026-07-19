import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import NameBrowser from "@/components/baby-names/NameBrowser";
import { allNames } from "@/data/baby-names/names";
import { getCollectionPageSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Baby Name Generator - 500+ Names with Meanings and Origins",
  description:
    "Browse 500+ baby names for boys, girls, and unisex options. Filter by origin, popularity, meaning, and more. Save your favorites and find the perfect name for your little one.",
  alternates: {
    canonical: "/baby-names",
  },
  openGraph: {
    title: "Baby Name Generator - 500+ Names | Is My Baby Alright?",
    description:
      "Browse 500+ baby names for boys, girls, and unisex options. Filter by origin, popularity, and meaning.",
  },
};

export default function BabyNamesPage() {
  const collectionSchema = getCollectionPageSchema({
    name: "Baby Name Generator - 500+ Names with Meanings and Origins",
    description:
      "Browse 500+ baby names for boys, girls, and unisex options. Filter by origin, popularity, meaning, and more. Save your favorites and find the perfect name for your little one.",
    path: "/baby-names",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Baby Names" },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([collectionSchema, breadcrumbSchema]),
        }}
      />
      <Breadcrumbs items={[{ label: "Baby Names" }]} />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Hero */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Baby Name Generator
          </h1>
          <p className="text-base text-muted leading-relaxed mb-6">Browse thousands of baby names with meanings, origins, popularity trends, and cultural context — searchable by letter, gender, origin, and style to help you find the perfect name.</p>
          <p className="mx-auto mt-3 max-w-2xl text-muted text-base sm:text-lg">
            {allNames.length}+ beautiful names from cultures around the world.
            Search by meaning, filter by origin, and save your favorites to find
            the perfect name for your little one.
          </p>
        </div>

        <NameBrowser names={allNames} />
      </div>
    </div>
  );
}
