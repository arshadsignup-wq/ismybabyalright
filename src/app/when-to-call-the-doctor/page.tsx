import type { Metadata } from "next";
import Link from "next/link";
import { allTriageTrees } from "@/data/triage";
import LastReviewed from "@/components/shared/LastReviewed";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import BottomLine from "@/components/shared/BottomLine";
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";

const whenToCallFaqItems = [
  {
    question: "When should I call 911 for my baby?",
    answer:
      "Call 911 immediately if your baby is not breathing or struggling to breathe, has blue or gray lips or skin, is unresponsive or cannot be woken up, or is having a seizure lasting longer than 5 minutes.",
  },
  {
    question: "What temperature is a fever in a baby under 3 months?",
    answer:
      "Any rectal temperature of 100.4 degrees F (38 degrees C) or higher in a baby under 3 months old is considered a fever and requires an immediate call to your doctor or a trip to the ER. Do not wait.",
  },
  {
    question: "Should I call my pediatrician at night or wait until morning?",
    answer:
      "Call right away for any emergency signs such as difficulty breathing, unresponsiveness, or high fever in a young infant. For non-urgent concerns, most pediatric offices have after-hours nurse lines that can help you decide whether to wait until morning.",
  },
  {
    question: "What are signs of dehydration in a baby?",
    answer:
      "Signs of dehydration include no wet diapers for 6 or more hours, no tears when crying, a sunken soft spot on the head, dry mouth and lips, and unusual drowsiness or fussiness. Contact your doctor right away if you notice these signs.",
  },
  {
    question: "Is it okay to call the pediatrician even if I am not sure something is wrong?",
    answer:
      "Yes. Pediatricians expect and welcome calls from worried parents. You know your baby best, and if something feels off, a quick call can provide reassurance or catch a problem early. You will never be judged for being cautious.",
  },
];

const faqSchema = getFAQPageSchema(whenToCallFaqItems);

const contentSchema = getContentPageSchema({
  name: "When to Call the Doctor",
  description:
    "Know when your baby's symptoms need a doctor visit, urgent care, or the emergency room. Use our symptom checkers and age-specific fever thresholds to decide.",
  path: "/when-to-call-the-doctor",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "When to Call the Doctor" },
]);

export const metadata: Metadata = {
  title: "When to Call the Doctor",
  description:
    "Know when your baby's symptoms need a doctor visit, urgent care, or the emergency room. Use our symptom checkers and age-specific fever thresholds to decide.",
  alternates: {
    canonical: "/when-to-call-the-doctor",
  },
  openGraph: {
    title: "When to Call the Doctor | Is My Baby Alright?",
    description:
      "Know when your baby's symptoms need a doctor visit, urgent care, or the emergency room. Use our symptom checkers and age-specific fever thresholds to decide.",
  },
};

export default function WhenToCallTheDoctorPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
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
      <h1 className="text-2xl font-bold text-foreground mb-2">
        When to Call the Doctor
      </h1>
      <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      <LastReviewed date="2026-07-01" />
      <p className="text-sm text-muted leading-relaxed mb-4 mt-3">
        Not sure if your baby&apos;s symptoms need medical attention? Use this
        guide to understand when to manage at home, when to call your
        pediatrician, and when to go to the emergency room.
      </p>

      <KeyTakeaways
        takeaways={[
          "Any fever of 100.4 degrees F or higher in a baby under 3 months requires an immediate call to the doctor or ER visit.",
          "Emergency signs like difficulty breathing, blue/gray skin, unresponsiveness, or prolonged seizures always warrant calling 911.",
          "Fever thresholds for calling the doctor change by age -- know the right threshold for your baby.",
          "Trust your instincts: if something feels wrong, it is always okay to call your pediatrician.",
          "Use the symptom checkers on this site for step-by-step guidance on common concerns.",
        ]}
      />

      <div className="space-y-6">
        <Section title="Use our symptom checkers">
          <p className="mb-3">
            Answer a few quick questions about what your baby is experiencing and
            get clear, evidence-based guidance on what to do next.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {allTriageTrees.map((tree) => (
              <Link
                key={tree.slug}
                href={`/triage/${tree.slug}`}
                className="flex items-center gap-3 rounded-lg border border-[#E8E2D9] bg-[#FDFCFA] p-3 no-underline transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="text-2xl" aria-hidden="true">
                  {tree.icon}
                </span>
                <div>
                  <span className="text-sm font-bold text-foreground">
                    {tree.title}
                  </span>
                  <p className="text-xs text-muted mt-0.5 leading-relaxed">
                    {tree.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section title="General emergency signs">
          <p className="mb-2">
            Regardless of your baby&apos;s specific symptoms, the following signs
            always warrant immediate medical attention. Call 911 or go to the
            emergency room right away if your baby:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Is not breathing or is struggling to breathe</li>
            <li>Has blue or gray lips, tongue, or skin</li>
            <li>Is unresponsive or cannot be woken up</li>
            <li>Is having a seizure lasting longer than 5 minutes</li>
            <li>
              Shows signs of dehydration in a newborn (no wet diapers for 6+
              hours, no tears when crying, sunken soft spot)
            </li>
          </ul>
        </Section>

        <Section title="Age-specific fever thresholds">
          <p className="mb-2">
            How you respond to a fever depends on your baby&apos;s age. Use
            these guidelines to know when to call:
          </p>
          <ul className="space-y-2">
            <li className="rounded-lg border border-red-200 bg-red-50 p-3">
              <span className="text-sm font-bold text-red-800">
                Under 3 months
              </span>
              <p className="text-xs text-red-700 mt-0.5">
                Any fever of 100.4&deg;F (38&deg;C) or higher &mdash; call your
                doctor or go to the ER immediately. Do not wait.
              </p>
            </li>
            <li className="rounded-lg border border-orange-200 bg-orange-50 p-3">
              <span className="text-sm font-bold text-orange-800">
                3 to 6 months
              </span>
              <p className="text-xs text-orange-700 mt-0.5">
                Fever of 101&deg;F (38.3&deg;C) or higher &mdash; call your
                pediatrician.
              </p>
            </li>
            <li className="rounded-lg border border-yellow-200 bg-yellow-50 p-3">
              <span className="text-sm font-bold text-yellow-800">
                6 to 24 months
              </span>
              <p className="text-xs text-yellow-700 mt-0.5">
                Fever of 102&deg;F (38.9&deg;C) or higher, or any fever lasting
                more than 1 day &mdash; call your pediatrician.
              </p>
            </li>
            <li className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <span className="text-sm font-bold text-blue-800">
                Over 24 months
              </span>
              <p className="text-xs text-blue-700 mt-0.5">
                Fever of 104&deg;F (40&deg;C) or higher, or any fever lasting
                more than 3 days &mdash; call your pediatrician.
              </p>
            </li>
          </ul>
        </Section>

        <Section title="Trust your instincts">
          <p>
            You know your baby better than anyone. If something feels wrong,
            even if you cannot pinpoint exactly what it is, it is always okay to
            call your pediatrician. Doctors expect these calls &mdash; that is
            what they are there for. You will never be judged for being
            cautious when it comes to your child&apos;s health.
          </p>
          <p>
            When in doubt, call. A quick phone call can save you hours of worry
            and ensure your baby gets the care they need.
          </p>
        </Section>
      </div>

      <div className="mt-8">
        <FAQSection items={whenToCallFaqItems} />
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-4">
        <Link
          href="/triage"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Symptom Checker
        </Link>
        <Link
          href="/concerns"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Common Concerns
        </Link>
        <Link
          href="/tools/emergency-contacts"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Emergency Contacts
        </Link>
      </div>

      <BottomLine summary="When in doubt, call your pediatrician. They would rather hear from you and reassure you than have you worry alone. For true emergencies — difficulty breathing, unresponsiveness, blue or gray skin, or prolonged seizures — call 911 immediately." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-[#E8E2D9] bg-white p-5">
      <h2 className="text-base font-bold text-foreground mb-2">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-2">
        {children}
      </div>
    </section>
  );
}
