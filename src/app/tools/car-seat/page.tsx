import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CarSeatCalculator from "@/components/tools/CarSeatCalculator";

export const metadata: Metadata = {
  title: "Car Seat Safety Guide - Find the Right Seat by Age, Weight & Height",
  description:
    "Find the right car seat for your child based on age, weight, and height. Covers rear-facing, forward-facing, booster seats, and seat belt readiness. Based on AAP and NHTSA guidelines.",
  alternates: {
    canonical: "/tools/car-seat",
  },
  openGraph: {
    title: "Car Seat Safety Guide - Find the Right Seat by Age, Weight & Height",
    description:
      "Car seat stage recommendations based on your child's measurements. Includes safety tips and transition guidance.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When can my baby face forward in a car seat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AAP recommends keeping children rear-facing as long as possible, until they reach the maximum weight or height limit of their rear-facing car seat. Many convertible seats allow rear-facing up to 40-50 lbs. At minimum, children should remain rear-facing until age 2.",
      },
    },
    {
      "@type": "Question",
      name: "When can my child stop using a booster seat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Children can stop using a booster seat when they pass the 5-step seat belt fit test: back against seat, knees bend at seat edge, lap belt on upper thighs, shoulder belt crosses mid-chest, and they can sit properly the entire ride. Most children are ready between ages 8-12 and at least 4'9\" tall.",
      },
    },
  ],
};

export default function CarSeatPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Car Seat Guide" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <CarSeatCalculator />
      </div>
    </div>
  );
}
