"use client";

import Link from "next/link";
import AmIOkayCheckIn from "@/components/mental-health/AmIOkayCheckIn";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import BottomLine from "@/components/shared/BottomLine";
import LastReviewed from "@/components/shared/LastReviewed";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Am I Okay? Postpartum Check-in",
  description:
    "A gentle, private self-check for new parents. Reflect on how you're feeling with questions based on common postpartum experiences.",
  url: "https://www.ismybabyalright.com/mental-health/check-in",
  applicationCategory: "HealthApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  provider: {
    "@type": "Organization",
    name: "Is My Baby Alright?",
    url: "https://www.ismybabyalright.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      url: "https://www.ismybabyalright.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mental Health",
      url: "https://www.ismybabyalright.com/mental-health",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Check-In",
    },
  ],
};

export default function CheckInPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="flex items-center gap-3">
        <Link
          href="/mental-health"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to mental health"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-foreground">Am I Okay?</h1>
          <p className="text-sm text-muted">A gentle check-in for any parent or caregiver</p>
          <div className="mt-2">
            <LastReviewed date="2026-07-01" />
          </div>
        </div>
      </div>

      <MedicalReviewAttribution sources={['PSI', 'ACOG']} />

      <KeyTakeaways
        takeaways={[
          "Self-assessment tools can help you recognize early signs of postpartum depression, anxiety, or overwhelm before they escalate.",
          "This check-in is not a diagnosis -- it is a starting point for reflection. If your results concern you, that is enough reason to reach out to a professional.",
          "Feeling overwhelmed, disconnected, or unlike yourself does not make you a bad parent. These feelings are common and treatable.",
        ]}
      />

      <AmIOkayCheckIn />

      <FAQSection
        items={[
          { question: "Is this check-in the same as a clinical screening?", answer: "No. This check-in is a gentle self-reflection tool to help you notice patterns in how you are feeling. It is not a clinical diagnostic tool like the Edinburgh Postnatal Depression Scale (EPDS). If your responses concern you, reach out to your OB, midwife, or a mental health professional for a formal screening." },
          { question: "What should I do if my results suggest I need help?", answer: "Trust your instincts. If the check-in highlights areas of concern, reach out to your healthcare provider. You can also call the PSI Warmline at 1-800-944-4773, text HOME to 741741 for the Crisis Text Line, or call 988 for the Suicide and Crisis Lifeline. Getting support early leads to better outcomes." },
          { question: "How often should I check in on my mental health?", answer: "There is no set schedule, but doing a brief self-check weekly can help you spot trends. Many parents find it helpful to check in during the first few weeks postpartum and again around 3 months, 6 months, and 12 months, as hormonal and life changes continue throughout the first year." },
          { question: "Can partners and non-birthing parents use this tool?", answer: "Absolutely. Postpartum depression and anxiety affect all types of parents, including fathers and non-birthing partners. This check-in is designed for any parent or caregiver who wants to reflect on how they are doing." },
        ]}
      />

      <BottomLine
        summary="Checking in on your mental health is an act of self-care, not a sign of weakness. Whether you are feeling great or struggling, regular self-reflection helps you stay connected to your own needs. If anything feels off, you deserve support -- and there is no wrong time to ask for it."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>
    </div>
  );
}
