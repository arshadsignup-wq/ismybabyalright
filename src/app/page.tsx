import type { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = {
  title: "Is My Baby Alright? | Evidence-Based Baby Development Guide",
  description:
    "Free evidence-based milestone checklists, 2,000+ concern guides, symptom triage tools, and daily trackers for your baby's first 3 years. CDC, WHO, and AAP sourced. No signup required.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeContent />
    </div>
  );
}
