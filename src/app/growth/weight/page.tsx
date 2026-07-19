import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import LastReviewed from '@/components/shared/LastReviewed';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import BottomLine from '@/components/shared/BottomLine';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Baby Weight Gain Guide by Age',
  description:
    'How much weight should your baby gain each month? Evidence-based guide to normal baby weight gain from birth through 24 months, including when to worry about too much or too little gain.',
  alternates: { canonical: '/growth/weight' },
};

const faqItems = [
  {
    question: 'How much weight should my newborn gain per week?',
    answer:
      'After regaining birth weight by 10 to 14 days of age, most newborns gain approximately 5 to 7 ounces (150 to 200 grams) per week during the first month. From 1 to 4 months, average weight gain is about 5 to 8 ounces per week. Gain slows to roughly 3 to 5 ounces per week from 4 to 6 months and 2 to 3 ounces per week from 6 to 12 months.',
  },
  {
    question: 'When should my baby double their birth weight?',
    answer:
      'Most babies double their birth weight by approximately 4 to 5 months of age and triple it by 12 months. Premature babies may take longer to reach these milestones. These are general guidelines; your pediatrician will evaluate your baby\'s growth in the context of their overall health and feeding pattern.',
  },
  {
    question: 'Is my baby gaining too much weight?',
    answer:
      'Rapid weight gain in infancy (consistently crossing percentile lines upward) has been associated with increased obesity risk later in childhood. However, during the first 6 months, breastfed babies in particular may gain rapidly and this is considered normal. Discuss concerns with your pediatrician, who can assess weight-for-length and overall growth pattern. Restricting a baby\'s intake is not recommended without medical guidance.',
  },
  {
    question: 'Does my baby\'s weight gain slow down after starting solids?',
    answer:
      'Some babies experience a temporary plateau or slight slowdown in weight gain when starting solids around 6 months, as they adjust to new foods and may initially eat small amounts. This is usually temporary. If weight gain continues to be slow beyond a few weeks of solid food introduction, discuss feeding strategies with your pediatrician.',
  },
  {
    question: 'Should I weigh my baby at home?',
    answer:
      'Home weighing is generally unnecessary for healthy, full-term babies who are seen regularly by their pediatrician. Daily or weekly home weighing can increase parental anxiety. However, your pediatrician may recommend home weighing if there are specific concerns about weight gain, particularly in the early weeks of breastfeeding or for premature babies.',
  },
];

const takeaways = [
  'Most newborns lose 5 to 7% of birth weight in the first few days and regain it by 10 to 14 days',
  'Average weight gain is about 1 ounce per day (200 g/week) in the first 3 months, slowing after that',
  'Babies typically double birth weight by 4 to 5 months and triple it by 12 months',
  'Breastfed babies tend to gain faster in months 1 to 3 and slower in months 3 to 12 compared to formula-fed babies',
  'A consistent pattern matters more than hitting exact numbers at each visit',
];

export default function WeightPage() {
  const contentSchema = getContentPageSchema({
    name: 'Baby Weight Gain Guide by Age',
    description:
      'Evidence-based guide to normal baby weight gain from birth through 24 months.',
    path: '/growth/weight',
    lastModified: '2026-07-01',
    medicalGuidelines: [
      { name: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
      { name: 'AAP Pediatric Nutrition Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
      { name: 'CDC Growth Charts', url: 'https://www.cdc.gov/growthcharts/' },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Growth', url: '/growth' },
    { name: 'Weight' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'Weight' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Baby Weight Gain: What to Expect by Age
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Weight is the most frequently measured indicator of infant growth and the first to change when nutrition
          is inadequate or excessive. This guide covers normal weight gain patterns from birth through 24 months
          based on WHO and AAP standards.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['WHO', 'CDC', 'AAP']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Normal weight gain by age
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">Birth to 2 weeks</h3>
              <p className="mt-1">
                All newborns lose weight in the first few days after birth as they shed excess fluid and transition
                to feeding. A loss of 5 to 7% of birth weight is typical for breastfed babies, while formula-fed
                babies typically lose 3 to 5%. A loss exceeding 10% warrants evaluation. Most babies should regain
                their birth weight by 10 to 14 days of age. Failure to regain birth weight by 2 weeks requires
                a feeding assessment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">2 weeks to 3 months</h3>
              <p className="mt-1">
                This is the period of fastest weight gain. Babies typically gain 150 to 200 grams (5 to 7 ounces)
                per week, or about 1 ounce per day. Breastfed babies may gain even faster during this period,
                particularly from weeks 3 to 6 when feeding frequency typically peaks.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">3 to 6 months</h3>
              <p className="mt-1">
                Weight gain begins to slow somewhat, averaging 100 to 150 grams (3.5 to 5 ounces) per week.
                Breastfed babies often show a more notable deceleration compared to formula-fed babies during this
                period, which is a normal pattern reflected in the WHO growth standards.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">6 to 12 months</h3>
              <p className="mt-1">
                Weight gain continues to slow to approximately 60 to 90 grams (2 to 3 ounces) per week. The
                introduction of solid foods at around 6 months supplements breast milk or formula but does not
                initially add significant calories. Most babies triple their birth weight by around 12 months.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">12 to 24 months</h3>
              <p className="mt-1">
                Toddlers gain weight much more slowly, approximately 40 to 60 grams (1.5 to 2 ounces) per week.
                Appetite often decreases as growth rate slows, which concerns many parents but is developmentally
                normal. By 24 months, most children have quadrupled their birth weight.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Average weights by age (WHO 50th percentile)
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-3">
            These are median (50th percentile) values from the WHO growth standards. Remember that healthy babies
            range widely from the 3rd to the 97th percentile.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse">
              <thead>
                <tr className="border-b border-[#E8E2D9]">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Age</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Boys (median)</th>
                  <th className="text-left py-2 font-semibold text-foreground">Girls (median)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">Birth</td><td className="py-2 pr-4">3.3 kg (7.3 lb)</td><td className="py-2">3.2 kg (7.1 lb)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">1 month</td><td className="py-2 pr-4">4.5 kg (9.9 lb)</td><td className="py-2">4.2 kg (9.2 lb)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">3 months</td><td className="py-2 pr-4">6.4 kg (14.1 lb)</td><td className="py-2">5.8 kg (12.8 lb)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">6 months</td><td className="py-2 pr-4">7.9 kg (17.4 lb)</td><td className="py-2">7.3 kg (16.1 lb)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">9 months</td><td className="py-2 pr-4">8.9 kg (19.6 lb)</td><td className="py-2">8.2 kg (18.1 lb)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">12 months</td><td className="py-2 pr-4">9.6 kg (21.2 lb)</td><td className="py-2">8.9 kg (19.6 lb)</td></tr>
                <tr><td className="py-2 pr-4">24 months</td><td className="py-2 pr-4">12.2 kg (26.9 lb)</td><td className="py-2">11.5 kg (25.4 lb)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When weight gain is too slow
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Slow weight gain may indicate inadequate caloric intake, poor absorption, or increased metabolic needs.
            Signs that warrant evaluation include: gaining less than 20 grams per day in the first 3 months,
            not regaining birth weight by 2 weeks, crossing two or more percentile lines downward, or weight-for-length
            falling below the 5th percentile. Common causes include breastfeeding difficulties (poor latch, low supply),
            tongue tie, reflux, food allergies, or underlying medical conditions. Early intervention improves outcomes.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When weight gain is too fast
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Rapid weight gain (consistently crossing percentile lines upward) in infancy has been associated with
            increased risk of childhood obesity. However, distinguishing normal rapid growth from concerning gain
            requires clinical judgment. Breastfed babies commonly gain rapidly in the first 3 months and this is
            not concerning. For formula-fed babies, ensuring responsive feeding practices (watching for fullness
            cues rather than encouraging the baby to finish every bottle) can help maintain appropriate weight gain.
            Never restrict a baby&apos;s intake without pediatric guidance.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Baby weight gain follows a predictable pattern: rapid gain in the first few months that gradually slows throughout the first year. The numbers in this guide are averages. Your baby's healthy weight gain depends on their individual genetics, feeding method, and overall health. Consistent tracking at well-child visits is the best way to ensure your baby is gaining appropriately." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
