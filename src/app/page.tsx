import type { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = {
  title: "Is My Baby Alright? | Evidence-Based Developmental Milestones",
  description:
    "Free evidence-based milestone checklists, 325+ concern guides, symptom triage tools, and daily trackers for your baby's first 3 years. CDC, WHO, and AAP sourced. No signup required.",
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
      <HomeContent />
    </div>
  );
}
