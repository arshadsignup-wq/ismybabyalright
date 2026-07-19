"use client";

import Link from "next/link";
import RelatedGuides from "@/components/guides/RelatedGuides";
import { useProfile } from "@/lib/useStorage";
import { getAgeInMonthsFromDate } from "@/lib/tracker";
import FoodSearch from "@/components/food/FoodSearch";
import ChokingEducation from "@/components/food/ChokingEducation";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import BottomLine from "@/components/shared/BottomLine";
import LastReviewed from "@/components/shared/LastReviewed";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";

const contentSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Baby Food Introduction Guide",
  description:
    "Age-appropriate food introduction guide for babies 4-12 months. 14 first foods with prep instructions, allergen tracker, gagging vs choking education. Based on AAP and WHO guidelines.",
  url: "https://www.ismybabyalright.com/food",
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
    },
  ],
};

export default function FoodPage() {
  const { profile } = useProfile();
  const ageMonths = profile ? getAgeInMonthsFromDate(profile.birthDate) : 6;

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>
        <h1 className="text-xl font-bold text-foreground">Food Introduction</h1>
        <p className="text-base text-muted leading-relaxed mb-4">A comprehensive guide to baby-safe foods, allergen introduction, and age-appropriate nutrition from first foods through toddlerhood, based on AAP and WHO feeding recommendations.</p>
        <LastReviewed date="2026-07-01" />
        <div className="mt-3">
          <MedicalReviewAttribution sources={['AAP', 'CDC', 'WHO']} />
        </div>
        <p className="text-sm text-muted mt-3">
          Age-appropriate prep guides for first foods
          {profile ? ` (${profile.name}, ${ageMonths}mo)` : ""}.
          {" "}Free  -  no paywall.
        </p>
      </div>

      <KeyTakeaways
        takeaways={[
          "Most babies are ready to start solid foods around 6 months when they can sit with support and show interest in food.",
          "Start with single-ingredient purees and progress to mashed and finger foods as your baby develops chewing and grasping skills.",
          "Introduce common allergens early (from 4-6 months) -- research shows early exposure reduces allergy risk.",
          "Gagging is a normal protective reflex during food exploration and is different from choking -- learn the signs of each.",
        ]}
      />

      {/* Quick links */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          href="/food/allergens"
          className="card p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors no-underline min-h-[5rem]"
        >
          <span className="text-2xl" aria-hidden="true">⚠️</span>
          <span className="text-sm font-semibold text-primary">Allergen Tracker</span>
        </Link>
        <button
          onClick={() => {
            document.getElementById("choking-section")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="card p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors cursor-pointer min-h-[5rem]"
        >
          <span className="text-2xl" aria-hidden="true">🚨</span>
          <span className="text-sm font-semibold text-primary">Choking Safety</span>
        </button>
      </div>

      {/* Food search/browse */}
      <section>
        <h2 className="text-base font-bold text-foreground mb-3">
          Food Guides
        </h2>
        <FoodSearch ageMonths={ageMonths} />
      </section>

      {/* Choking education */}
      <section id="choking-section">
        <h2 className="text-base font-bold text-foreground mb-3">
          Gagging vs. Choking
        </h2>
        <ChokingEducation />
      </section>

      {/* Related Guides */}
      <RelatedGuides currentPath="/food" />

      <FAQSection
        items={[
          { question: "When is my baby ready to start solid foods?", answer: "Look for readiness signs around 6 months: your baby can sit with minimal support, has good head control, shows interest in food, and has lost the tongue-thrust reflex that pushes food out. Some babies may be ready as early as 4 months. Always check with your pediatrician before starting." },
          { question: "What are the best first foods for a baby?", answer: "Iron-fortified infant cereal, pureed sweet potato, avocado, banana, and pureed peas are all great first foods. Start with single-ingredient foods and wait 2 to 3 days between new foods to watch for any reactions." },
          { question: "How is gagging different from choking?", answer: "Gagging is a normal reflex where your baby coughs, sputters, or makes retching sounds -- their face may turn red but they are still breathing. Choking is silent, the baby cannot cry or cough, and their face may turn blue. Gagging is protective and common; choking is a medical emergency requiring immediate action." },
          { question: "Should I avoid giving my baby allergenic foods?", answer: "No. Current AAP and WHO guidelines recommend introducing common allergens like peanut, egg, milk, wheat, soy, fish, shellfish, tree nuts, and sesame early and often starting from 4 to 6 months. Early introduction has been shown to significantly reduce allergy risk." },
        ]}
      />

      <BottomLine
        summary="Introducing solid foods is an exciting milestone. Start around 6 months with simple, single-ingredient foods and gradually increase variety and texture. Do not be afraid of mess or gagging -- both are normal parts of learning to eat. Introduce allergens early and keep offering new foods even if your baby rejects them at first."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <p className="text-xs text-muted text-center leading-relaxed pb-4 mt-6">
        Based on AAP and WHO feeding guidelines. This is educational content,
        not medical advice. Discuss your baby&apos;s readiness with your pediatrician.
        All data stays on your device.
      </p>
    </div>
  );
}
