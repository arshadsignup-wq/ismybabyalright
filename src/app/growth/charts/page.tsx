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
  title: 'How to Read Baby Growth Charts',
  description:
    'Learn how to read and interpret baby growth charts. Understand weight-for-age, length-for-age, and head circumference curves from WHO and CDC standards.',
  alternates: { canonical: '/growth/charts' },
};

const faqItems = [
  {
    question: 'What growth chart should my pediatrician use?',
    answer:
      'The WHO growth standards are recommended for children under 2 years old, regardless of feeding method. For children aged 2 and older, the CDC growth charts are typically used in the United States. The WHO charts describe how children should grow under optimal conditions, while CDC charts describe how children in the U.S. actually grew during a specific time period.',
  },
  {
    question: 'How often should my baby be measured?',
    answer:
      'The AAP recommends measuring weight, length, and head circumference at every well-child visit. These are typically scheduled at birth, 3-5 days, 1 month, 2 months, 4 months, 6 months, 9 months, 12 months, 15 months, 18 months, and 24 months. More frequent measurements may be needed if there are growth concerns.',
  },
  {
    question: 'My baby dropped from the 75th to the 50th percentile. Should I worry?',
    answer:
      'A single drop of one percentile line is often normal, especially during the first 2 years when babies settle into their genetic growth pattern. Concern arises when a baby crosses two or more major percentile lines, when weight loss is rapid, or when the drop is accompanied by other symptoms. Discuss any changes with your pediatrician at your next visit.',
  },
  {
    question: 'Are growth chart percentiles the same as grades?',
    answer:
      'No. Growth percentiles are not grades. Being at the 25th percentile does not mean your baby is failing. It means 25% of healthy babies weigh less and 75% weigh more at that age. A baby at the 10th percentile who stays at the 10th percentile is growing perfectly normally. The trend matters more than any single number.',
  },
  {
    question: 'Why does my baby have different percentiles for weight and length?',
    answer:
      'It is completely normal for babies to have different percentiles for weight, length, and head circumference. A baby might be at the 80th percentile for length but the 50th for weight, meaning they are long and lean. As long as each measurement follows its own consistent curve, this is typical healthy variation.',
  },
];

const takeaways = [
  'Growth charts show how your baby compares to other healthy babies of the same age and sex',
  'The trend over time matters far more than any single measurement',
  'WHO charts are recommended for children under 2 years; CDC charts for ages 2 and older',
  'Growth charts plot three key measurements: weight-for-age, length-for-age, and head circumference-for-age',
  'A baby who consistently follows any percentile line is growing normally, whether it is the 10th or the 90th',
];

export default function GrowthChartsPage() {
  const contentSchema = getContentPageSchema({
    name: 'How to Read Baby Growth Charts',
    description:
      'Learn how to read and interpret baby growth charts including weight-for-age, length-for-age, and head circumference curves.',
    path: '/growth/charts',
    lastModified: '2026-07-01',
    medicalGuidelines: [
      { name: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
      { name: 'CDC Growth Charts', url: 'https://www.cdc.gov/growthcharts/' },
      { name: 'AAP Bright Futures Guidelines', url: 'https://www.aap.org/en/practice-management/bright-futures/' },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Growth', url: '/growth' },
    { name: 'Growth Charts' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'Growth Charts' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          How to Read Baby Growth Charts
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Growth charts are one of the most important tools your pediatrician uses to track your baby&apos;s
          development. Understanding how to read them helps you make sense of your baby&apos;s measurements
          and know when a pattern warrants discussion with your doctor.
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
            What is a growth chart?
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            A growth chart is a graph that shows how a baby&apos;s measurements compare to a large reference
            population of healthy children of the same age and sex. The chart displays curved lines called
            percentile lines (typically the 3rd, 10th, 25th, 50th, 75th, 90th, and 97th percentiles). When
            your baby&apos;s measurements are plotted on the chart over time, they create a growth curve that
            shows their individual growth pattern.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The three key measurements
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">Weight-for-age</h3>
              <p className="mt-1">
                This is the most commonly tracked measurement. Your baby is weighed naked (or in a clean diaper)
                on a calibrated infant scale. Weight is sensitive to short-term changes in nutrition and hydration,
                making it the first indicator to change if there is a feeding issue.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Length-for-age (height-for-age after age 2)</h3>
              <p className="mt-1">
                Babies under 2 are measured lying down (recumbent length). After age 2, standing height is measured.
                Length reflects longer-term nutritional status and genetic potential. It changes more slowly than
                weight and is harder to measure accurately in squirmy infants.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Head circumference-for-age</h3>
              <p className="mt-1">
                Head circumference (occipitofrontal circumference) is measured by wrapping a flexible tape around
                the largest part of the head. It tracks brain growth and is measured routinely until age 2 or 3.
                Rapid increases or decreases may prompt further evaluation.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How to read the chart step by step
          </h2>
          <ol className="space-y-3 text-sm text-muted leading-relaxed list-decimal pl-5">
            <li>
              <strong className="text-foreground">Find your baby&apos;s age on the bottom axis (x-axis).</strong> The horizontal
              axis shows age in months (or weeks for newborns).
            </li>
            <li>
              <strong className="text-foreground">Find the measurement on the vertical axis (y-axis).</strong> This shows
              weight in kilograms or pounds, length in centimeters or inches, or head circumference in centimeters.
            </li>
            <li>
              <strong className="text-foreground">Plot the point where age and measurement intersect.</strong> This is where
              your baby falls at this specific time point.
            </li>
            <li>
              <strong className="text-foreground">Identify the nearest percentile line.</strong> The curved lines represent
              the 3rd, 10th, 25th, 50th, 75th, 90th, and 97th percentiles. If your baby&apos;s dot falls on the
              50th percentile line, half of healthy babies weigh more and half weigh less.
            </li>
            <li>
              <strong className="text-foreground">Look at the trend over multiple visits.</strong> Connect the dots from
              previous measurements. A healthy growth curve generally follows along a percentile line, rising
              steadily over time.
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            WHO vs CDC charts: which one to use
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The CDC recommends using WHO growth standards for children from birth to 24 months of age.
            The WHO charts are based on data from healthy, breastfed infants raised in optimal conditions
            across six countries, making them a true growth standard (how children should grow). For children
            aged 2 to 20 years, the CDC growth reference charts are used. These were developed from U.S.
            survey data and reflect how children in the U.S. actually grew. The practical difference is that
            WHO charts may show breastfed babies as growing more normally, whereas CDC charts were developed
            from a population that included more formula-fed babies.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When the growth pattern is a concern
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            A growth pattern may warrant further evaluation when a baby crosses two or more major percentile
            lines (either up or down), when weight-for-length falls below the 5th percentile or above the
            95th percentile, when weight, length, and head circumference are on very different percentile
            tracks (with the exception of familial patterns), or when the growth curve flattens or declines
            over two or more measurement points. One measurement alone rarely tells the full story. Your
            pediatrician considers the overall pattern, your baby&apos;s feeding, development, and family size
            patterns when evaluating growth.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Growth charts are tracking tools, not report cards. Your baby's percentile is far less important than their growth trend over time. A baby who consistently follows the 15th percentile is growing just as healthily as one following the 85th. Work with your pediatrician to understand your baby's unique pattern, and ask questions any time a measurement concerns you." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
