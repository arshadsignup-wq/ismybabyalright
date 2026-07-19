"use client";

import Link from "next/link";
import RelatedGuides from "@/components/guides/RelatedGuides";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import BottomLine from "@/components/shared/BottomLine";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import { useProfile } from "@/lib/useStorage";
import { getAgeInMonthsFromDate } from "@/lib/tracker";
import { sleepGuidance, regressions, getGuidanceForAge } from "@/data/sleep/guidance";
import SleepGuidance from "@/components/sleep/SleepGuidance";
import RegressionExplainer from "@/components/sleep/RegressionExplainer";

const contentSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Baby Sleep Guide",
  description:
    "Evidence-based baby sleep guide covering 8 age ranges from newborn to 3 years. Sleep regressions, wake windows, safe sleep guidelines, and schedules. Based on AAP guidelines.",
  url: "https://www.ismybabyalright.com/sleep",
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
      name: "Sleep",
    },
  ],
};

const sleepFaqItems = [
  {
    question: "How much sleep does a newborn need?",
    answer:
      "Newborns typically sleep 14-17 hours per day, but in short stretches of 2-4 hours at a time. They do not yet have a circadian rhythm, so there is no consistent day/night pattern in the first few weeks.",
  },
  {
    question: "What is a sleep regression and how long does it last?",
    answer:
      "A sleep regression is a period when a baby who was sleeping well suddenly has trouble falling asleep or wakes more often. They typically last 2-6 weeks and are linked to developmental leaps. The most common regressions occur around 4, 8, 12, 18, and 24 months.",
  },
  {
    question: "When can my baby sleep through the night?",
    answer:
      "Most babies can sleep 6-8 hour stretches by 4-6 months, though every baby is different. Sleeping through the night (10-12 hours) typically happens between 6-12 months, but night wakings can still be normal well into toddlerhood.",
  },
  {
    question: "Is it safe for my baby to sleep in my bed?",
    answer:
      "The AAP recommends room-sharing but not bed-sharing. Babies should sleep on their own firm, flat surface such as a crib or bassinet in the parents' room for at least the first 6 months to reduce the risk of SIDS.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sleepFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function SleepPage() {
  const { profile } = useProfile();
  const ageMonths = profile ? getAgeInMonthsFromDate(profile.birthDate) : null;
  const currentGuidance = ageMonths !== null ? getGuidanceForAge(ageMonths) : null;

  return (
    <article className="mx-auto max-w-lg px-4 py-6 sm:py-8">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/tracker"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to tracker"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-foreground">Sleep Guide</h1>
          <p className="text-base text-muted leading-relaxed mb-6">An evidence-based guide to infant and toddler sleep covering safe sleep practices, wake windows, nap schedules, sleep training approaches, and common sleep concerns from newborn through age 3.</p>
          <p className="text-sm text-muted">Age-based guidance and regression info</p>
        </div>
      </div>

      <KeyTakeaways
        takeaways={[
          "Newborns sleep 14-17 hours a day but in short stretches -- there is no day/night pattern yet.",
          "Sleep regressions are temporary and typically occur around 4, 8, 12, 18, and 24 months.",
          "Always place your baby on their back to sleep, on a firm flat surface, with nothing else in the crib.",
          "Room-sharing (not bed-sharing) is recommended for at least the first 6 months.",
          "Wake windows increase with age -- following age-appropriate wake times helps prevent overtiredness.",
        ]}
      />

      {/* Current age guidance (highlighted) */}
      {currentGuidance && (
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">
            Your baby right now
          </h2>
          <SleepGuidance guidance={currentGuidance} />
        </div>
      )}

      {/* Sleep regressions */}
      <div className="mb-6">
        <h2 className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">
          Sleep regressions
        </h2>
        <div className="flex flex-col gap-3">
          {regressions.map((reg) => (
            <RegressionExplainer
              key={reg.ageLabel}
              regression={reg}
              isRelevant={ageMonths !== null && Math.abs(ageMonths - reg.ageMonths) <= 1}
            />
          ))}
        </div>
      </div>

      {/* All ages reference */}
      <div>
        <h2 className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">
          All ages
        </h2>
        <div className="flex flex-col gap-3">
          {sleepGuidance
            .filter((g) => g !== currentGuidance)
            .map((g) => (
              <SleepGuidance key={g.ageRange} guidance={g} />
            ))}
        </div>
      </div>

      {/* Safe sleep reminder */}
      <div className="mt-6 p-4 rounded-xl bg-safe-light border border-safe-border">
        <p className="text-sm font-semibold text-safe mb-1">Safe sleep reminder</p>
        <p className="text-sm text-foreground leading-relaxed">
          Always place your baby on their back to sleep, on a firm, flat surface, with no blankets,
          pillows, or toys in the crib. Room-sharing (not bed-sharing) is recommended for at least
          the first 6 months.
        </p>
        <p className="text-xs text-muted mt-2">Source: AAP Safe Sleep Guidelines</p>
      </div>

      {/* FAQ Section */}
      <div className="mt-6">
        <FAQSection items={sleepFaqItems} />
      </div>

      <BottomLine summary="Sleep patterns vary widely between babies and change frequently in the first two years. Safe sleep practices — back sleeping, firm surface, nothing in the crib — are the most important things you can do. If you're concerned about your baby's sleep, talk to your pediatrician." />

      {/* Related Guides */}
      <RelatedGuides currentPath="/sleep" />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>
    </article>
  );
}
