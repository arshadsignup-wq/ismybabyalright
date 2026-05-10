import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DueDateCalculator from "@/components/tools/DueDateCalculator";

export const metadata: Metadata = {
  title: "Due Date Calculator - Estimate Your Baby's Birthday",
  description:
    "Calculate your estimated due date based on your last period, conception date, IVF transfer, or ultrasound. See your pregnancy timeline and milestones.",
  alternates: {
    canonical: "/tools/due-date",
  },
  openGraph: {
    title: "Due Date Calculator - Estimate Your Baby's Birthday",
    description:
      "Estimate your due date using LMP, conception date, IVF transfer, or ultrasound. Based on ACOG guidelines.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is my due date calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common method is Naegele's Rule: add 280 days (40 weeks) to the first day of your last menstrual period (LMP). Your healthcare provider may adjust based on ultrasound measurements.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is a due date calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only about 5% of babies are born on their due date. Most are born within 2 weeks before or after. First-trimester ultrasound is the most accurate method for dating a pregnancy.",
      },
    },
  ],
};

export default function DueDatePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Due Date Calculator" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <DueDateCalculator />
      </div>
    </div>
  );
}
