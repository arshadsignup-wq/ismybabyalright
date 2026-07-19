import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ComparisonTable from '@/components/shared/ComparisonTable';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import LastReviewed from '@/components/shared/LastReviewed';
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import BottomLine from '@/components/shared/BottomLine';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Cow's Milk vs Formula After 12 Months: When and How to Switch",
  description:
    "Compare cow's milk and formula for toddlers after 12 months. Covers AAP guidelines, nutrition differences, cost, and how to make the transition.",
  alternates: { canonical: '/food/cow-milk-vs-formula' },
  openGraph: {
    title: "Cow's Milk vs Formula After 12 Months | Is My Baby Alright?",
    description:
      "Compare cow's milk and formula for toddlers after 12 months. Covers AAP guidelines, nutrition differences, cost, and how to make the transition.",
  },
};

const faqItems = [
  {
    question: 'When exactly should I switch from formula to cow\'s milk?',
    answer:
      'The AAP recommends transitioning to whole cow\'s milk at 12 months for healthy, typically developing toddlers. You can make the switch gradually by mixing increasing amounts of cow\'s milk with formula over 1-2 weeks, or switch directly if your child accepts it. Talk to your pediatrician before making the switch, especially if your child was premature or has special nutritional needs.',
  },
  {
    question: 'How do I know if my toddler is intolerant to cow\'s milk?',
    answer:
      'Signs of cow\'s milk intolerance include diarrhea, vomiting, blood or mucus in stool, excessive gas, skin rash or hives, fussiness after drinking milk, and poor weight gain. If you notice any of these symptoms after introducing cow\'s milk, stop giving it and contact your pediatrician. They may recommend a trial elimination or testing to confirm the intolerance.',
  },
  {
    question: 'Should I give my toddler whole milk or 2% milk?',
    answer:
      'The AAP recommends whole (full-fat) cow\'s milk for children ages 12 months to 2 years. The fat in whole milk is important for brain development during this critical growth period. After age 2, you can switch to reduced-fat (2%) or low-fat (1%) milk if your child is growing well. Do not give skim milk to children under 2.',
  },
];

const breadcrumbSchemaItems = [
  { name: 'Home', url: '/' },
  { name: 'Food', url: '/food' },
  { name: "Cow's Milk vs Formula" },
];

export default function CowMilkVsFormulaPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: "Cow's Milk vs Formula After 12 Months: When and How to Switch",
              description:
                "Compare cow's milk and formula for toddlers after 12 months. Covers AAP guidelines, nutrition differences, cost, and how to make the transition.",
              path: '/food/cow-milk-vs-formula',
              lastModified: '2026-07-01',
              medicalGuidelines: [
                { name: 'AAP Nutrition Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
                { name: 'CDC Infant and Toddler Nutrition', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/' },
              ],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbSchemaItems)) }}
      />

      <Breadcrumbs items={[{ label: 'Food', href: '/food' }, { label: "Cow's Milk vs Formula" }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Cow&apos;s Milk vs Formula After 12 Months: When and How to Switch
        </h1>

        <p className="text-sm text-muted leading-relaxed mb-4">
          After 12 months, most toddlers can transition from formula to whole cow&apos;s milk.
          This comparison covers the AAP&apos;s position on when to make the switch, nutritional
          differences, cost considerations, and how to handle the transition.
        </p>

        <MedicalReviewAttribution sources={['AAP', 'CDC']} />
        <LastReviewed date="2026-07-01" />

        <div className="mt-6">
          <KeyTakeaways
            takeaways={[
              'The AAP recommends transitioning to whole cow\'s milk at 12 months for healthy toddlers.',
              'Toddler formula is not considered necessary by the AAP for most healthy children eating a varied diet.',
              'Whole cow\'s milk provides essential calcium, vitamin D, protein, and fat at a fraction of the cost of toddler formula.',
              'Limit cow\'s milk to 16-24 oz per day to avoid filling up your toddler and displacing iron-rich foods.',
            ]}
          />
        </div>

        <ComparisonTable
          caption="Whole cow's milk vs toddler formula comparison"
          headers={['Factor', 'Whole Cow\'s Milk', 'Toddler Formula']}
          rows={[
            [
              'AAP Age',
              '12 months and older',
              'Not recommended as necessary by AAP',
            ],
            [
              'Key Nutrients',
              'Calcium, vitamin D, protein, fat',
              'Iron, DHA, added vitamins',
            ],
            [
              'Cost',
              '$3-6 per gallon',
              '$20-40 per can',
            ],
            [
              'Iron Content',
              'Low — supplement with iron-rich foods',
              'Fortified with iron',
            ],
            [
              'Vitamin D',
              'Fortified',
              'Fortified',
            ],
            [
              'Calories',
              '~150 per 8 oz (whole)',
              '~170-200 per 8 oz',
            ],
            [
              'Daily Amount',
              '16-24 oz per day',
              'Per manufacturer recommendation',
            ],
            [
              'AAP Position',
              'Recommended at 12 months for healthy toddlers',
              'Not necessary for most healthy toddlers',
            ],
          ]}
          sourceNote="Sources: AAP, CDC"
        />

        <div className="prose prose-sm max-w-none space-y-6 mt-8">
          <section>
            <h2 className="text-base font-bold text-foreground mb-2">
              How to make the transition from formula to cow&apos;s milk
            </h2>
            <div className="text-sm text-muted leading-relaxed space-y-3">
              <p>
                Most toddlers can switch to whole cow&apos;s milk at 12 months. You can transition
                gradually or switch directly — both approaches are fine.
              </p>
              <p>
                <strong>Gradual approach:</strong> Mix increasing amounts of cow&apos;s milk with
                formula over 1-2 weeks. Start with 75% formula / 25% milk, then move to 50/50, then
                25/75, and finally 100% cow&apos;s milk.
              </p>
              <p>
                <strong>Direct switch:</strong> Some toddlers accept cow&apos;s milk right away. Offer
                it in a cup (the AAP recommends weaning off bottles by 12-15 months) and see how your
                child responds.
              </p>
              <p>
                Serve whole milk at meals and snacks. Aim for 16-24 oz per day — too much milk can fill
                your toddler up and reduce their appetite for iron-rich solid foods, which can lead to
                iron-deficiency anemia.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground mb-2">
              When formula may still be appropriate after 12 months
            </h2>
            <div className="text-sm text-muted leading-relaxed space-y-3">
              <p>
                While the AAP does not recommend toddler formula as necessary for most healthy
                children, there are situations where continued formula use or specialized formulas may
                be appropriate:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Cow&apos;s milk allergy or intolerance:</strong> Your pediatrician may recommend a soy-based or hypoallergenic formula, or a fortified plant-based milk alternative.</li>
                <li><strong>Premature babies:</strong> Some preemies may benefit from continued nutrient-enriched formula as recommended by their doctor.</li>
                <li><strong>Failure to thrive or poor weight gain:</strong> A doctor may recommend higher-calorie formula to support catch-up growth.</li>
                <li><strong>Very limited diet:</strong> If your toddler eats very few foods, your pediatrician may suggest formula or a supplement to fill nutritional gaps while you work on expanding their diet.</li>
              </ul>
              <p>
                In all of these cases, the decision should be guided by your pediatrician — not by
                marketing claims on formula packaging.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-8">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="For most healthy toddlers, whole cow's milk is the recommended drink at 12 months. It provides essential nutrients at a fraction of the cost of toddler formula, which the AAP does not consider necessary for most children. Limit milk to 16-24 oz per day, pair it with iron-rich foods, and talk to your pediatrician if your child has allergies, was premature, or has special nutritional needs."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
