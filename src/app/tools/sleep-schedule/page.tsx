import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SleepScheduleCalculator from "@/components/tools/SleepScheduleCalculator";

export const metadata: Metadata = {
  title: "Baby Sleep Schedule Calculator - Wake Windows, Naps & Bedtimes",
  description:
    "Find your baby's ideal sleep schedule by age. Get wake windows, nap counts, nap durations, bedtime ranges, and total sleep needs from newborn to 3 years.",
  alternates: {
    canonical: "/tools/sleep-schedule",
  },
  openGraph: {
    title: "Baby Sleep Schedule Calculator - Wake Windows, Naps & Bedtimes",
    description:
      "Age-based sleep schedule with wake windows, nap guidance, and bedtime recommendations for babies 0-36 months.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long should a 6 month old be awake between naps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 6-month-old typically has a wake window of 2 to 3 hours between naps. Watch for sleepy cues like yawning and eye rubbing as signs they're ready for sleep.",
      },
    },
    {
      "@type": "Question",
      name: "How many naps should a 1 year old take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most 12-month-olds take 1-2 naps per day, with a total of 1.5-3 hours of daytime sleep. Many transition from 2 naps to 1 nap between 12-18 months.",
      },
    },
    {
      "@type": "Question",
      name: "What time should a baby go to bed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most babies do best with a bedtime between 6:00 PM and 8:00 PM, depending on their age and nap schedule. Newborns may have later bedtimes (up to 10-11 PM) that gradually shift earlier.",
      },
    },
  ],
};

export default function SleepSchedulePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Sleep Schedule" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <SleepScheduleCalculator />
      </div>
    </div>
  );
}
