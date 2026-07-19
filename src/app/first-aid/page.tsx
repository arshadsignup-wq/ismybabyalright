import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LastReviewed from '@/components/shared/LastReviewed';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";
import {
  INFANT_CPR_STEPS,
  TODDLER_CPR_STEPS,
  INFANT_CHOKING_STEPS,
  TODDLER_CHOKING_STEPS,
  WHEN_TO_CALL_911,
  CHOKING_HAZARDS,
} from "@/data/first-aid/data";

export const metadata: Metadata = {
  title: "Baby CPR & Choking First Aid Guide - Step-by-Step Instructions",
  description:
    "Learn infant and toddler CPR and choking first aid with clear step-by-step instructions. Know when to call 911 and common choking hazards by age. Based on AHA and AAP guidelines.",
  alternates: {
    canonical: "/first-aid",
  },
  openGraph: {
    title: "Baby CPR & Choking First Aid Guide - Step-by-Step Instructions",
    description:
      "Step-by-step infant CPR, toddler CPR, and choking response guide. Based on AHA and AAP guidelines.",
  },
};

const contentSchema = getContentPageSchema({
  name: 'Baby CPR & Choking First Aid Guide - Step-by-Step Instructions',
  description:
    'Learn infant and toddler CPR and choking first aid with clear step-by-step instructions. Know when to call 911 and common choking hazards by age. Based on AHA and AAP guidelines.',
  path: '/first-aid',
  lastModified: '2026-07-01',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'First Aid' },
]);

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Perform Infant CPR",
  description:
    "Step-by-step guide to performing CPR on an infant under 1 year old, based on AHA guidelines.",
  step: INFANT_CPR_STEPS.map((s) => ({
    "@type": "HowToStep",
    name: s.title,
    text: s.description,
  })),
};

const firstAidFaqItems = [
  { question: "What should I do if my baby is choking?", answer: "For infants under 1: give 5 back blows between the shoulder blades, then 5 chest thrusts. Alternate until the object is dislodged. If the baby becomes unresponsive, begin CPR and call 911." },
  { question: "How do I perform CPR on a baby?", answer: "Place 2 fingers on the breastbone just below the nipple line. Push down about 1.5 inches at 100-120 compressions per minute. Give 2 small rescue breaths covering mouth and nose after every 30 compressions." },
  { question: "When should I call 911 for my baby?", answer: "Call 911 if your baby is not breathing, turning blue, unresponsive, having a seizure lasting more than 5 minutes, or has significant bleeding that won't stop. Also call Poison Control (1-800-222-1222) for suspected poisoning." },
  { question: "Is toddler CPR different from infant CPR?", answer: "Yes. For toddlers (1-3 years), use the heel of one hand instead of two fingers for chest compressions, and compress about 2 inches deep. Rescue breaths cover only the mouth, with the nose pinched closed." },
  { question: "Should I take a CPR class?", answer: "Yes. The AHA strongly recommends all parents and caregivers take a hands-on infant CPR course. Reading a guide is helpful for reference, but practicing on a mannequin builds muscle memory that is critical in a real emergency." },
];

export default function FirstAidPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(firstAidFaqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs items={[{ label: "First Aid & CPR" }]} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            CPR &amp; Choking First Aid Guide
          </h1>
          <p className="mt-2 text-muted">
            Step-by-step instructions for infant and toddler CPR and choking
            response. Based on American Heart Association and AAP guidelines.
          </p>
          <LastReviewed date="2026-07-01" />
          <div className="mt-3">
            <MedicalReviewAttribution sources={['AAP', 'Red Cross']} />
          </div>
        </div>

        <KeyTakeaways
          takeaways={[
            "In an emergency, call 911 immediately -- this guide is for reference and education, not a substitute for hands-on CPR training.",
            "For infant choking (under 1 year): alternate 5 back blows and 5 chest thrusts until the object is dislodged.",
            "Infant CPR uses 2 fingers on the breastbone, pressing about 1.5 inches deep at 100-120 compressions per minute with 2 rescue breaths after every 30 compressions.",
            "Common choking hazards include grapes, hot dogs, coins, small batteries, and popcorn -- always cut food into age-appropriate pieces.",
            "The AHA recommends all parents take a hands-on infant CPR course for the best preparation.",
          ]}
        />

        {/* Emergency banner */}
        <div className="rounded-xl border-2 border-red-300 bg-red-50 px-4 py-4 dark:border-red-500/40 dark:bg-red-950/30">
          <p className="text-base font-bold text-red-800 dark:text-red-300 mb-2">
            In an emergency, call 911 immediately.
          </p>
          <p className="text-sm text-red-700 dark:text-red-400">
            This guide is for reference and education. It is not a substitute
            for professional CPR training. The AHA recommends all parents take a
            hands-on infant CPR course.
          </p>
        </div>

        {/* Infant CPR */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Infant CPR (Under 1 Year)
          </h2>
          <div className="space-y-3">
            {INFANT_CPR_STEPS.map((step) => (
              <StepCard key={step.step} step={step} />
            ))}
          </div>
        </section>

        {/* Toddler CPR */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Toddler CPR (1-3 Years)
          </h2>
          <div className="space-y-3">
            {TODDLER_CPR_STEPS.map((step) => (
              <StepCard key={step.step} step={step} />
            ))}
          </div>
        </section>

        {/* Infant Choking */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Choking Response — Infant (Under 1 Year)
          </h2>
          <div className="space-y-3">
            {INFANT_CHOKING_STEPS.map((step) => (
              <StepCard key={step.step} step={step} />
            ))}
          </div>
        </section>

        {/* Toddler Choking */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Choking Response — Toddler (1-3 Years)
          </h2>
          <div className="space-y-3">
            {TODDLER_CHOKING_STEPS.map((step) => (
              <StepCard key={step.step} step={step} />
            ))}
          </div>
        </section>

        {/* When to call 911 */}
        <section className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-4 sm:p-6 dark:border-red-500/30 dark:bg-red-950/20">
          <h2 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">
            When to Call 911
          </h2>
          <ul className="space-y-2">
            {WHEN_TO_CALL_911.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-red-700 dark:text-red-400">
                <span className="mt-0.5 shrink-0 font-bold" aria-hidden="true">!</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Choking hazards */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Common Choking Hazards by Age
          </h2>
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-card-border">
                    <th className="py-2 pr-3 font-semibold text-muted">Item</th>
                    <th className="py-2 font-semibold text-muted">Risk Age</th>
                  </tr>
                </thead>
                <tbody>
                  {CHOKING_HAZARDS.map((hazard, i) => (
                    <tr key={i} className="border-b border-card-border/50">
                      <td className="py-2.5 pr-3 text-foreground">
                        {hazard.item}
                      </td>
                      <td className="py-2.5 text-muted">{hazard.ageRisk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <FAQSection items={firstAidFaqItems} />

        {/* Sources */}
        <div className="text-xs text-muted">
          <p className="font-semibold mb-1">Sources</p>
          <ul className="space-y-0.5">
            <li>
              <a
                href="https://www.heart.org/en/health-topics/cardiac-arrest/cardiac-arrest-in-children/child-and-baby-cpr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                American Heart Association — Child &amp; Baby CPR
              </a>
            </li>
            <li>
              <a
                href="https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP — Choking Prevention
              </a>
            </li>
            <li>
              <a
                href="https://www.redcross.org/take-a-class/cpr/cpr-training/infant-cpr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                Red Cross — Infant CPR Training
              </a>
            </li>
          </ul>
        </div>

        <BottomLine
          summary="Knowing infant CPR and choking first aid can save your baby's life. This guide is a helpful reference, but the AHA strongly recommends all parents take a hands-on CPR course. In any emergency, always call 911 first."
          supportiveMessage="Being prepared is the best thing you can do for your child. Taking a CPR class and keeping this guide handy means you are ready if the unexpected happens."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}

function StepCard({
  step,
}: {
  step: { step: number; title: string; description: string; important?: string };
}) {
  return (
    <div className="rounded-xl border border-card-border bg-card p-4">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-light text-primary text-sm font-bold mt-0.5">
          {step.step}
        </span>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-foreground mb-1">
            {step.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {step.description}
          </p>
          {step.important && (
            <p className="mt-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
              {step.important}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
