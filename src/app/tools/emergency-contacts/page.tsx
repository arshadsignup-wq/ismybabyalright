import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EmergencyContactsByState from "@/components/tools/EmergencyContactsByState";

export const metadata: Metadata = {
  title: "Emergency Contacts for Parents - Find Help by State",
  description:
    "Find emergency phone numbers for parents by state. Poison control, child abuse hotlines, children's hospitals, nurse lines, and crisis resources for all 50 states and DC.",
  alternates: {
    canonical: "/tools/emergency-contacts",
  },
  openGraph: {
    title: "Emergency Contacts for Parents - Find Help by State",
    description:
      "Essential emergency phone numbers every parent needs. Poison control, child protective services, children's hospitals, and crisis hotlines by state.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Emergency Contacts for Parents - Find Help by State",
  description:
    "Essential emergency phone numbers for parents across all 50 US states and DC including poison control, child abuse hotlines, children's hospitals, and crisis resources.",
  url: "https://www.ismybabyalright.com/tools/emergency-contacts",
  lastReviewed: "2025-06-01",
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
  about: {
    "@type": "MedicalCondition",
    name: "Pediatric Emergencies",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the poison control number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The national Poison Control number is 1-800-222-1222. It is free, confidential, and available 24/7. The call is automatically routed to your local poison center based on your area code.",
      },
    },
    {
      "@type": "Question",
      name: "When should I call 911 for my child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call 911 immediately if your child is not breathing, is unconscious, is having a seizure, has a severe allergic reaction with swelling or difficulty breathing, has a serious head injury, or has been in a drowning incident.",
      },
    },
    {
      "@type": "Question",
      name: "What number do I call to report child abuse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The national Childhelp National Child Abuse Hotline is 1-800-422-4453 (1-800-4-A-CHILD). It is available 24/7 with professional crisis counselors. Many states also have their own dedicated child abuse reporting hotlines.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a nurse hotline I can call about my baby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many states have nurse advice lines through children's hospitals. Select your state on this page to see if a children's medical hotline is available in your area. You can also contact your pediatrician's after-hours line.",
      },
    },
  ],
};

export default function EmergencyContactsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools/growth" },
          { label: "Emergency Contacts" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <EmergencyContactsByState />
      </div>
    </div>
  );
}
