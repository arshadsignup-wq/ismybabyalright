import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ComparisonTable from "@/components/shared/ComparisonTable";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import LastReviewed from "@/components/shared/LastReviewed";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import BottomLine from "@/components/shared/BottomLine";
import {
  getBreadcrumbSchema,
  getContentPageSchema,
  getFAQPageSchema,
} from "@/lib/seo";
import { acetaminophen, ibuprofen } from "@/data/medicine/dosage";

export const metadata: Metadata = {
  title: "Tylenol vs Motrin for Babies: Which to Give and When",
  description:
    "Compare Tylenol (acetaminophen) and Motrin (ibuprofen) for infants and children. Covers dosing, minimum age, safety, and when to use each one. Includes weight-based dosing charts.",
  alternates: { canonical: "/tools/tylenol-vs-motrin" },
  openGraph: {
    title: "Tylenol vs Motrin for Babies: Which to Give and When",
    description:
      "Side-by-side comparison of Tylenol and Motrin with weight-based dosing charts for infants and children.",
  },
};

const faqItems = [
  {
    question:
      "Can I alternate Tylenol and Motrin for my baby's fever?",
    answer:
      "Yes, alternating acetaminophen and ibuprofen is a common practice recommended by many pediatricians for persistent fevers. A typical approach is to give one medication, then give the other 3 hours later, continuing to alternate. Always confirm the schedule with your pediatrician before starting, and keep a written log to avoid accidental double-dosing.",
  },
  {
    question:
      "Which is better for teething pain, Tylenol or Motrin?",
    answer:
      "For babies 6 months and older, ibuprofen (Motrin) is often preferred for teething because it reduces both pain and the inflammation in the gums. For babies under 6 months, acetaminophen (Tylenol) is the only option since ibuprofen is not approved for that age group. Always use the correct dose based on your baby's weight.",
  },
  {
    question: "How fast does each medication reduce a fever?",
    answer:
      "Acetaminophen (Tylenol) typically begins working within 30 minutes and reaches peak effect in 1 to 2 hours. Ibuprofen (Motrin) also begins working within 30 minutes but may take slightly longer to reach full effect. Ibuprofen tends to reduce fever more effectively and for a longer duration (6 to 8 hours vs 4 to 6 hours).",
  },
  {
    question:
      "Is it safe to give both Tylenol and Motrin at the same time?",
    answer:
      "Giving both medications simultaneously is not generally recommended. Instead, alternate them with appropriate spacing. If you feel your child needs more fever control, contact your pediatrician for guidance. Never exceed the maximum recommended doses for either medication in a 24-hour period.",
  },
];

const takeaways = [
  "Tylenol (acetaminophen) can be given from 3 months of age; Motrin (ibuprofen) is only approved from 6 months.",
  "Ibuprofen has anti-inflammatory properties that acetaminophen does not, making it more effective for teething and swelling.",
  "Acetaminophen can be dosed every 4-6 hours (max 5 doses/day); ibuprofen every 6-8 hours (max 4 doses/day).",
  "Always dose by weight, not age, using the measuring device that comes with the product.",
  "Alternating the two medications can help manage persistent fevers, but confirm the schedule with your pediatrician.",
];

const comparisonRows = [
  ["Active Ingredient", "Acetaminophen", "Ibuprofen"],
  [
    "Minimum Age",
    `${acetaminophen.minAgeMonths} months`,
    `${ibuprofen.minAgeMonths} months`,
  ],
  [
    "Concentration",
    acetaminophen.concentration,
    ibuprofen.concentration,
  ],
  [
    "Dosing Interval",
    acetaminophen.interval,
    ibuprofen.interval,
  ],
  [
    "Max Doses/Day",
    String(acetaminophen.maxDosesPerDay),
    String(ibuprofen.maxDosesPerDay),
  ],
  [
    "Anti-inflammatory",
    "No",
    "Yes - reduces swelling and inflammation",
  ],
  [
    "Best For",
    "Fever, general pain, headaches; safe for younger infants",
    "Fever, teething pain, ear infections, inflammation",
  ],
  [
    "Stomach Impact",
    "Gentle on the stomach; can be given on an empty stomach",
    "Can cause stomach upset; best given with food",
  ],
  [
    "Method of Action",
    "Blocks pain signals in the brain and reduces fever via the hypothalamus",
    "Reduces prostaglandins throughout the body, lowering pain, inflammation, and fever",
  ],
];

function formatWeightRange(
  minLbs: number,
  maxLbs: number | null
): string {
  if (maxLbs === null) return `${minLbs}+`;
  return `${minLbs}-${maxLbs}`;
}

export default function TylenolVsMotrinPage() {
  const breadcrumbSchemaItems = [
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
    { name: "Tylenol vs Motrin" },
  ];

  const contentSchema = getContentPageSchema({
    name: "Tylenol vs Motrin for Babies: Which to Give and When",
    description:
      "Side-by-side comparison of Tylenol and Motrin with weight-based dosing charts for infants and children.",
    path: "/tools/tylenol-vs-motrin",
    lastModified: "2026-07-01",
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbSchemaItems);

  const acetaminophenDosingRows = acetaminophen.doses.map(
    (dose) => [
      formatWeightRange(dose.weightMinLbs, dose.weightMaxLbs),
      String(dose.doseMg),
      String(dose.volumeMl),
    ]
  );

  const ibuprofenDosingRows = ibuprofen.doses.map((dose) => [
    formatWeightRange(dose.weightMinLbs, dose.weightMaxLbs),
    String(dose.doseMg),
    String(dose.volumeMl),
  ]);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contentSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Tylenol vs Motrin" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Tylenol vs Motrin for Babies: Which to Give and When
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Tylenol (acetaminophen) and Motrin (ibuprofen) are the two
          over-the-counter pain relievers approved for use in infants
          and children. This guide compares their uses, dosing,
          safety profiles, and when to use each one.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'FDA']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <ComparisonTable
          caption="Tylenol vs Motrin comparison for infants and children"
          headers={[
            "Factor",
            "Tylenol (Acetaminophen)",
            "Motrin (Ibuprofen)",
          ]}
          rows={comparisonRows}
        />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Acetaminophen (Tylenol) dosing chart
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Dose by your child&apos;s weight, not age. Use the
            measuring device included with the product.
          </p>
          <ComparisonTable
            caption="Acetaminophen weight-based dosing chart"
            headers={["Weight (lbs)", "Dose (mg)", "Volume (mL)"]}
            rows={acetaminophenDosingRows}
            sourceNote={`Concentration: ${acetaminophen.concentration}. Interval: ${acetaminophen.interval}. Maximum ${acetaminophen.maxDosesPerDay} doses per day. Minimum age: ${acetaminophen.minAgeMonths} months.`}
          />
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Ibuprofen (Motrin) dosing chart
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Dose by your child&apos;s weight, not age. Use the
            measuring device included with the product.
          </p>
          <ComparisonTable
            caption="Ibuprofen weight-based dosing chart"
            headers={["Weight (lbs)", "Dose (mg)", "Volume (mL)"]}
            rows={ibuprofenDosingRows}
            sourceNote={`Concentration: ${ibuprofen.concentration}. Interval: ${ibuprofen.interval}. Maximum ${ibuprofen.maxDosesPerDay} doses per day. Minimum age: ${ibuprofen.minAgeMonths} months.`}
          />
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How to alternate Tylenol and Motrin
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            When a fever is persistent or your child is particularly
            uncomfortable, your pediatrician may recommend
            alternating acetaminophen and ibuprofen. A common
            approach is to give one medication, wait 3 hours, then
            give the other. This staggers the medications so that one
            is always working while the other is wearing off. Keep a
            written log of what you gave and when to prevent
            accidental overdosing. Never exceed the maximum daily
            doses for either medication, even when alternating. This
            strategy is only appropriate for babies 6 months and
            older, since ibuprofen cannot be given before that age.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Teething pain: which medication to choose
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Teething causes inflammation in the gums, which is why
            ibuprofen (Motrin) is often more effective for teething
            pain than acetaminophen (Tylenol). Ibuprofen&apos;s
            anti-inflammatory properties directly target the swelling
            that causes discomfort. However, for babies under 6
            months who are teething early, acetaminophen is the safe
            choice. Non-medication approaches such as chilled (not
            frozen) teething rings, gentle gum massage with a clean
            finger, and cold washcloths can also provide relief.
            Avoid topical teething gels containing benzocaine, which
            the FDA warns against using in children under 2 years
            old.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Both Tylenol (acetaminophen) and Motrin (ibuprofen) are safe and effective when dosed correctly by weight. Tylenol can be used from 3 months of age and is gentle on the stomach. Motrin can be used from 6 months and is better for inflammation and teething. Always confirm dosing with your pediatrician, especially for infants under 6 months." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
