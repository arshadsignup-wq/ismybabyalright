import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AgeSelector from "@/components/home/AgeSelector";
import EntryPathCards from "@/components/home/EntryPathCards";
import GentleRedirect from "@/components/shared/GentleRedirect";

export const metadata: Metadata = {
  title: "Is My Baby Alright? | Evidence-Based Developmental Milestones",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Is My Baby Alright?",
  description:
    "Evidence-Based Developmental Milestones",
  url: "https://ismybabyalright.com",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />

      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <AgeSelector />

        <div className="mt-12">
          <EntryPathCards />
        </div>

        <GentleRedirect />
      </div>
    </div>
  );
}
