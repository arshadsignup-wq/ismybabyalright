import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PumpingScheduleCalculator from "@/components/tools/PumpingScheduleCalculator";

export const metadata: Metadata = {
  title: "Pumping Schedule Calculator - EP, Work, & Combo Feeding",
  description:
    "Get a personalized pumping schedule based on your situation — exclusively pumping, pumping at work, or combo feeding. Includes supply tips and milestones.",
  alternates: {
    canonical: "/tools/pumping-schedule",
  },
  openGraph: {
    title: "Pumping Schedule Calculator - EP, Work, & Combo Feeding",
    description:
      "Recommended pumping schedules for every situation. Sessions per day, minutes per session, and sample daily schedules.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should I pump if exclusively pumping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For the first 6 weeks, pump 8-12 times per day (every 2-3 hours) including at least once at night to establish supply. After supply is established (6-12 weeks), most EP moms can maintain on 5-7 sessions per day.",
      },
    },
    {
      "@type": "Question",
      name: "How many times should I pump at work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During an 8-hour workday, plan for 2-3 pumping sessions (about every 3 hours). Nurse your baby right before leaving and as soon as you get home. Federal law requires employers to provide break time and a private space.",
      },
    },
  ],
};

export default function PumpingSchedulePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Pumping Schedule" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <PumpingScheduleCalculator />
      </div>
    </div>
  );
}
