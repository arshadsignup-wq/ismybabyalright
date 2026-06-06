import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PregnancyTracker from "@/components/tools/PregnancyTracker";

export const metadata: Metadata = {
  title: "Pregnancy Tracker - Week by Week Guide",
  description:
    "Track your pregnancy week by week from 4 to 40 weeks. See baby's size, development milestones, body changes, and expert tips for every stage. Based on ACOG and Mayo Clinic guidelines.",
  alternates: {
    canonical: "/tools/pregnancy-tracker",
  },
  openGraph: {
    title: "Pregnancy Tracker - Week by Week Guide",
    description:
      "Interactive week-by-week pregnancy tracker. Enter your due date or LMP to see baby's size, development, and personalized tips.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate what week of pregnancy I am?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pregnancy is dated from the first day of your last menstrual period (LMP). Count the number of weeks from that date to today. Alternatively, if you know your due date, subtract the number of remaining weeks from 40 to find your current week. For example, if you have 20 weeks remaining, you are at week 20.",
      },
    },
    {
      "@type": "Question",
      name: "What are the three trimesters of pregnancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The first trimester spans weeks 1-12, covering early organ development. The second trimester (weeks 13-27) is when baby grows rapidly and you can feel movement. The third trimester (weeks 28-40) is when baby gains weight and prepares for birth. Each trimester brings different symptoms and milestones.",
      },
    },
    {
      "@type": "Question",
      name: "How big is my baby at each stage of pregnancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baby grows from the size of a poppy seed at week 4 to about 51 cm (20 inches) and 3.5 kg (7.6 lbs) at week 40. Common size comparisons include: blueberry at week 7, lemon at week 14, banana at week 20, eggplant at week 28, and watermelon at week 39.",
      },
    },
  ],
};

export default function PregnancyTrackerPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Pregnancy Tracker" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <PregnancyTracker />
      </div>
    </div>
  );
}
