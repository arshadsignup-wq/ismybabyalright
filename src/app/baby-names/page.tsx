import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import NameBrowser from "@/components/baby-names/NameBrowser";
import { allNames } from "@/data/baby-names/names";

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
  return (
    <div>
      <Breadcrumbs items={[{ label: "Baby Names" }]} />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Hero */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Baby Name Generator
          </h1>
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
