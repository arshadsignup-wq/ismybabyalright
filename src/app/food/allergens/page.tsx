"use client";

import Link from "next/link";
import AllergenTracker from "@/components/food/AllergenTracker";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import BottomLine from "@/components/shared/BottomLine";
import LastReviewed from "@/components/shared/LastReviewed";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";

const contentSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Allergen Introduction Tracker",
  description:
    "Track your baby's allergen introductions. Log reactions to the top 9 allergens and keep a record for your pediatrician.",
  url: "https://www.ismybabyalright.com/food/allergens",
  audience: { "@type": "PeopleAudience", audienceType: "Parents" },
  author: {
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
      name: "Food",
      url: "https://www.ismybabyalright.com/food",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Allergens",
    },
  ],
};

export default function AllergensPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="flex items-center gap-3">
        <Link
          href="/food"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to food"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-foreground">Allergen Tracker</h1>
          <p className="text-sm text-muted">Track your baby&apos;s progress through the top 9 allergens</p>
          <div className="mt-2">
            <LastReviewed date="2026-07-01" />
          </div>
        </div>
      </div>

      <MedicalReviewAttribution sources={['AAP', 'ACAAI']} />

      <KeyTakeaways
        takeaways={[
          "Early allergen introduction (from 4-6 months) is now recommended by the AAP and can significantly reduce the risk of developing food allergies.",
          "The top 9 allergens are milk, egg, peanut, tree nuts, wheat, soy, fish, shellfish, and sesame -- introduce them one at a time.",
          "Watch for signs of an allergic reaction: hives, swelling of lips or tongue, vomiting, difficulty breathing, or widespread rash within minutes to hours after eating.",
          "Babies with severe eczema or existing food allergies are at higher risk and may benefit from early evaluation by an allergist before introduction.",
        ]}
      />

      <div className="tier-safe p-3 text-sm">
        Current guidelines recommend early introduction of allergens (from 4-6
        months) to reduce allergy risk. Tap a status badge to cycle through:
        Not Started → Introducing → Passed → Reaction.
      </div>

      <AllergenTracker />

      <FAQSection
        items={[
          { question: "When should I start introducing allergens to my baby?", answer: "Current guidelines recommend introducing common allergens between 4 and 6 months of age, once your baby has started solids. The landmark LEAP study showed that early peanut introduction reduced peanut allergy risk by up to 80 percent in high-risk infants." },
          { question: "How can I prevent peanut allergy in my baby?", answer: "For most babies, introduce peanut-containing foods (like thinned peanut butter mixed into puree) around 6 months. For high-risk babies with severe eczema or egg allergy, the AAP recommends introducing peanut as early as 4 to 6 months, possibly after allergy testing. Never give whole peanuts -- they are a choking hazard." },
          { question: "What does an allergic reaction look like in a baby?", answer: "Mild reactions may include a few hives around the mouth, mild rash, or slight fussiness. More serious reactions include widespread hives, swelling of face, lips, or tongue, vomiting, difficulty breathing, or becoming limp or unresponsive. Seek emergency care immediately for any severe symptoms." },
          { question: "Should I wait between introducing each allergen?", answer: "Yes. Introduce one new allergenic food at a time and wait 2 to 3 days before introducing another. This makes it easier to identify which food caused a reaction if one occurs. Once tolerated, continue offering the food regularly to maintain tolerance." },
        ]}
      />

      <BottomLine
        summary="Early and consistent allergen introduction is one of the most effective strategies for reducing food allergy risk. Introduce the top 9 allergens one at a time starting between 4 and 6 months, monitor for reactions, and keep offering tolerated allergens regularly. If your baby has severe eczema or a family history of allergies, talk to your pediatrician or allergist before starting."
      />

      <div className="mt-4">
        <EditorialTrustBanner variant="compact" />
      </div>

      <p className="text-xs text-muted text-center leading-relaxed">
        Based on AAP and LEAP study guidelines. Discuss allergen introduction
        timing with your pediatrician, especially if your baby has severe eczema
        or a family history of food allergies. All data stays on your device.
      </p>
    </div>
  );
}
