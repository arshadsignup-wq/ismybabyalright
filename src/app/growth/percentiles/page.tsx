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
  title: 'What Baby Growth Percentiles Mean',
  description:
    'Understand what growth percentiles really mean for your baby. Learn why percentiles are not grades, what crossing percentile lines means, and when to be concerned.',
  alternates: { canonical: '/growth/percentiles' },
};

const faqItems = [
  {
    question: 'Is the 50th percentile the "ideal" for my baby?',
    answer:
      'No. The 50th percentile is simply the median, meaning half of healthy babies measure above it and half below. A baby at the 20th percentile who consistently tracks along that line is growing perfectly normally. The ideal is not a specific number but a consistent pattern that fits your baby\'s genetic potential.',
  },
  {
    question: 'My baby is at the 5th percentile. Does that mean something is wrong?',
    answer:
      'Not necessarily. By definition, 5% of perfectly healthy babies fall at or below the 5th percentile. If your baby has always tracked near the 5th percentile, is meeting developmental milestones, is feeding well, and has parents who are smaller in stature, this may simply be their normal. However, if they dropped to the 5th percentile from a higher position, your pediatrician will want to investigate.',
  },
  {
    question: 'Can percentiles predict my baby\'s adult size?',
    answer:
      'Infant percentiles are not reliable predictors of adult size. Many factors influence growth over a lifetime, and babies frequently shift between percentile lines during the first 2 years as they settle into their genetic growth channel. A baby at the 90th percentile will not necessarily be a large adult, and a baby at the 10th percentile may become average-sized or taller.',
  },
  {
    question: 'Why did my baby\'s percentile change between the WHO and CDC charts?',
    answer:
      'When transitioning from WHO charts (used for under 2) to CDC charts (used for 2 and older), a baby\'s percentile may shift because the two charts are based on different populations and methods. The WHO charts represent how breastfed babies should grow; the CDC charts represent how a U.S. population actually grew. A small percentile shift at the transition point is expected and not a concern.',
  },
  {
    question: 'Should I try to get my baby to a higher percentile?',
    answer:
      'No. Attempting to push a baby to a higher percentile through overfeeding can lead to excess weight gain and is associated with increased obesity risk later in life. Babies should be fed responsively, following their hunger and fullness cues. A healthy baby will grow to their genetic potential when adequately nourished and offered food on a responsive schedule.',
  },
];

const takeaways = [
  'Percentiles compare your baby to other healthy babies of the same age and sex, not to a standard of "normal"',
  'There is no ideal percentile. A baby consistently at the 15th is just as healthy as one at the 85th',
  'Crossing two or more major percentile lines (up or down) is what prompts investigation, not the number itself',
  'Percentiles may shift during the first 18 to 24 months as babies settle into their genetic growth channel',
  'Weight, length, and head circumference can all be at different percentiles, and this is normal',
];

export default function PercentilesPage() {
  const contentSchema = getContentPageSchema({
    name: 'What Baby Growth Percentiles Mean',
    description:
      'Understand what growth percentiles really mean, why they are not grades, and when percentile changes are a concern.',
    path: '/growth/percentiles',
    lastModified: '2026-07-01',
    medicalGuidelines: [
      { name: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
      { name: 'CDC Growth Charts', url: 'https://www.cdc.gov/growthcharts/' },
      { name: 'AAP Clinical Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Growth', url: '/growth' },
    { name: 'Percentiles' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'Percentiles' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          What Baby Growth Percentiles Mean (and Don&apos;t Mean)
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Growth percentiles are one of the most misunderstood numbers in pediatrics. Many parents worry
          when their baby is not at the 50th percentile, but percentiles are not grades. Here is what they
          actually tell you and when they matter.
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
            What a percentile actually means
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            A percentile indicates what percentage of the reference population measures below your baby at
            that age. If your baby is at the 40th percentile for weight, it means 40% of healthy babies of
            the same age and sex weigh less, and 60% weigh more. It is simply a comparison tool, not a
            measure of health or potential.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Percentiles are derived from large population studies. The WHO growth standards used data from
            approximately 8,500 healthy breastfed children from six countries (Brazil, Ghana, India, Norway,
            Oman, and the United States). These children were raised in environments that did not constrain
            growth, making the charts a true standard of how children should grow under optimal conditions.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Why percentiles are not grades
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            In school, a score of 90% is an A and 50% is average. Growth percentiles do not work this way.
            The 90th percentile does not mean your baby is growing better than a baby at the 50th. It means
            they are larger, which is a description, not a judgment. Healthy babies populate the entire range
            from the 3rd to the 97th percentile. What matters is not where your baby falls, but whether they
            consistently follow their own growth curve.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Genetics play a significant role in determining which percentile range a baby occupies. Small
            parents tend to have smaller babies who track along lower percentiles. Tall parents often have
            babies on higher percentile lines. Both are growing exactly as expected for their families.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Normal percentile shifts in the first 2 years
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Birth weight is influenced by maternal factors such as nutrition, placental function, and
            gestational diabetes. After birth, babies gradually shift toward their genetically determined
            growth channel. This process typically occurs between 6 and 18 months and can involve crossing
            one or two percentile lines in either direction. Studies show that approximately two-thirds of
            babies will shift percentile channels during this period. This is normal and expected.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            For example, a baby born large (90th percentile) to smaller parents may gradually settle to the
            50th percentile by 12 to 18 months. Conversely, a baby born small who has tall parents may rise
            to higher percentiles during the same period.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When percentile changes are concerning
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            While normal settling occurs gradually, certain patterns warrant medical evaluation:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Crossing two or more major percentile lines downward, especially if it happens rapidly</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Weight falling below the 3rd percentile or above the 97th percentile without a clear familial pattern</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Weight percentile significantly diverging from length percentile (especially weight dropping while length is maintained)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Head circumference rapidly crossing percentile lines upward or downward</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Growth deceleration accompanied by developmental delays, poor feeding, or frequent illness</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Understanding weight-for-length percentiles
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            In addition to weight-for-age and length-for-age, your pediatrician may look at weight-for-length
            (or BMI-for-age after age 2). This measurement accounts for your baby&apos;s body proportions. A
            baby who is long and lean will have a lower weight-for-length percentile than a shorter, stockier
            baby of the same weight. This is particularly useful for identifying whether low weight is
            proportional (the baby is simply small overall) or disproportionate (the baby is thin for their
            length, which may indicate inadequate nutrition).
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Percentiles are descriptive, not prescriptive. They tell you where your baby falls compared to other babies, not whether your baby is healthy or unhealthy. The most important thing is a consistent growth pattern over time. If your baby steadily follows a percentile line, even if it is the 5th or the 95th, they are likely growing exactly as their body intends." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
