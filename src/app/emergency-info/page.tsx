import type { Metadata } from "next";
import EmergencyInfoForm from "@/components/emergency-info/EmergencyInfoForm";
import LastReviewed from "@/components/shared/LastReviewed";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import BottomLine from "@/components/shared/BottomLine";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";

const contentSchema = getContentPageSchema({
  name: "Emergency Info Vault",
  description:
    "Store your baby's critical emergency information for quick access. Allergies, medications, pediatrician contact, and more.",
  path: "/emergency-info",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Emergency Info" },
]);

const emergencyInfoFaqItems = [
  {
    question: "What information should I have ready in a baby emergency?",
    answer:
      "Have your baby's full name, date of birth, weight, known allergies, current medications, pediatrician's name and phone number, insurance information, and any relevant medical history. Keeping this information stored in advance saves critical time during an emergency.",
  },
  {
    question: "When should I call 911 for my baby?",
    answer:
      "Call 911 if your baby is not breathing, is turning blue or very pale, is unresponsive or limp, is having a seizure, has a severe allergic reaction (swelling of face/throat, difficulty breathing), has significant bleeding that will not stop, or has been exposed to a poisonous substance.",
  },
  {
    question: "What is the Poison Control number?",
    answer:
      "The national Poison Control number is 1-800-222-1222. It is available 24 hours a day, 7 days a week. Save this number in your phone and post it in a visible location at home. Call Poison Control if your child has ingested, inhaled, or been exposed to a potentially harmful substance.",
  },
  {
    question: "Does this emergency info vault share my data?",
    answer:
      "No. All data entered in the Emergency Info Vault is stored locally on your device only. Nothing is sent to a server or shared with anyone. You can access it offline, but the data will be lost if you clear your browser data.",
  },
];

const faqJsonLd = getFAQPageSchema(emergencyInfoFaqItems);

export const metadata: Metadata = {
  title: "Emergency Info Vault - ismybabyalright",
  description:
    "Store your baby's critical emergency information for quick access. Allergies, medications, pediatrician contact, and more.",
  alternates: {
    canonical: "/emergency-info",
  },
  openGraph: {
    title: "Emergency Info Vault | Is My Baby Alright?",
    description:
      "Store your baby's critical emergency information for quick access. Allergies, medications, and pediatrician contact.",
  },
};

export default function EmergencyInfoPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="text-2xl font-bold text-foreground mb-2">
        Emergency Info Vault
      </h1>
      <LastReviewed date="2026-07-01" />
      <div className="mt-3">
        <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      </div>
      <p className="text-sm text-muted leading-relaxed mt-3 mb-6">
        Keep your baby's critical information in one place for quick access
        during emergencies. All data stays on your device.
      </p>

      <KeyTakeaways
        takeaways={[
          "Save your baby's allergies, medications, and pediatrician contact information before an emergency happens.",
          "Poison Control (1-800-222-1222) is available 24/7 -- save this number in your phone now.",
          "Call 911 immediately if your baby is not breathing, is unresponsive, is turning blue, or is having a seizure.",
          "All data entered here stays on your device and is never sent to a server.",
        ]}
      />

      <EmergencyInfoForm />

      <div className="mt-8">
        <FAQSection items={emergencyInfoFaqItems} />
      </div>

      <BottomLine
        summary="Having your baby's emergency information organized and instantly accessible can save precious time when every second counts. Fill out this vault now, before you need it, and share it with anyone who cares for your child."
        supportiveMessage="Preparing for emergencies does not mean you expect them to happen -- it means you care enough to be ready. That is great parenting."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>
    </main>
  );
}
