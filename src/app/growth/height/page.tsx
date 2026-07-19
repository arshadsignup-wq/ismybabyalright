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
  title: 'Baby Length and Height Tracking Guide',
  description:
    'Track your baby\'s length and height growth. Learn normal growth rates by age, how length is measured, what affects height, and when short stature needs evaluation.',
  alternates: { canonical: '/growth/height' },
};

const faqItems = [
  {
    question: 'How accurately can baby length be measured?',
    answer:
      'Infant length measurements have inherent variability because babies move, resist being straightened, and different measurers may get slightly different results. A single measurement can vary by up to 1 to 2 centimeters. This is why trends over multiple visits are more meaningful than any single measurement. For the most accurate reading, two people should measure together using a proper infant measuring board.',
  },
  {
    question: 'Can I predict how tall my baby will be as an adult?',
    answer:
      'While no method is perfectly accurate, the most commonly used prediction for adult height is the mid-parental height formula: for boys, add the mother\'s height to the father\'s height, add 13 cm (5 inches), and divide by 2. For girls, add both parents\' heights, subtract 13 cm (5 inches), and divide by 2. The result gives a rough estimate with a margin of error of about 5 to 10 cm.',
  },
  {
    question: 'Why is my baby long but lightweight?',
    answer:
      'Some babies are genetically programmed to be long and lean. If both length and weight are following their own consistent percentile lines and your baby is feeding well and developing normally, a lean body type is simply their normal. However, if weight has dropped while length is maintained, this pattern (called "wasting") may indicate inadequate caloric intake and should be discussed with your pediatrician.',
  },
  {
    question: 'When should short stature be evaluated?',
    answer:
      'Short stature warrants evaluation when a child\'s height is below the 3rd percentile and is not consistent with mid-parental height, when height velocity is consistently below the 25th percentile (meaning they are growing too slowly), or when height is crossing percentile lines downward after age 2. Your pediatrician may order a bone age X-ray and blood tests to evaluate growth hormone levels and other causes.',
  },
  {
    question: 'Does my baby\'s length measurement change between lying down and standing?',
    answer:
      'Yes. Recumbent length (lying down) is typically about 0.7 to 1 cm longer than standing height, due to spinal compression from gravity. This is why there may be an apparent slight decrease in measurement when a child transitions from being measured lying down (under age 2) to standing (age 2 and older). Growth charts account for this difference.',
  },
];

const takeaways = [
  'Babies grow approximately 25 cm (10 inches) in the first year, slowing to 12 cm in the second year',
  'Length is measured lying down until age 2, then standing height is measured',
  'Length reflects longer-term nutritional status and genetic potential',
  'Single length measurements are less reliable than weight due to measurement variability',
  'Height percentile typically stabilizes by age 2 to 3, providing a better prediction of adult stature',
];

export default function HeightPage() {
  const contentSchema = getContentPageSchema({
    name: 'Baby Length and Height Tracking Guide',
    description:
      'Guide to tracking baby length and height growth, normal rates by age, and when to evaluate short stature.',
    path: '/growth/height',
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
    { name: 'Height' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'Height' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Baby Length and Height: What to Expect
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Your baby grows more in length during the first year than any other time in life. Understanding
          normal growth rates, how length is measured, and what genetic and nutritional factors influence
          height can help you track your baby&apos;s progress with confidence.
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
            Normal length growth by age
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">Birth to 3 months</h3>
              <p className="mt-1">
                Babies grow approximately 3 to 4 cm (1.2 to 1.6 inches) per month during the first 3 months.
                Average birth length is about 49 to 50 cm (19.5 to 20 inches) for full-term babies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">3 to 6 months</h3>
              <p className="mt-1">
                Growth rate slows slightly to approximately 2 to 3 cm (0.8 to 1.2 inches) per month.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">6 to 12 months</h3>
              <p className="mt-1">
                Babies grow about 1 to 2 cm (0.4 to 0.8 inches) per month. By 12 months, most babies have
                grown approximately 25 cm (10 inches) from birth, increasing their birth length by about 50%.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">12 to 24 months</h3>
              <p className="mt-1">
                Growth continues to decelerate, with about 12 cm (4.7 inches) gained during the entire second year.
                By 24 months, most children have reached approximately 50% of their predicted adult height.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How length is measured
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            For children under 2 years, recumbent length is measured using an infantometer (a measuring board
            with a fixed headboard and movable footboard). The baby lies on their back with legs extended and
            feet flexed. This requires two people for accuracy: one to hold the head against the headboard and
            one to straighten the legs and move the footboard. After age 2, standing height is measured using
            a stadiometer. Because recumbent length is typically 0.7 to 1 cm longer than standing height, there
            may appear to be a slight growth plateau at the transition.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Factors that influence height
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Genetics is the primary determinant of adult height, accounting for approximately 60 to 80% of
            height variation. Nutrition (particularly adequate protein, calcium, vitamin D, and zinc) is the
            most important modifiable factor. Other influences include:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Parental height (the strongest predictor of a child&apos;s height percentile)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Gestational age at birth (premature babies may be shorter initially)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Growth hormone and thyroid function</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Chronic illness or malabsorption conditions</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Sleep quality (growth hormone is primarily released during deep sleep)</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Average length by age (WHO 50th percentile)
          </h2>
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
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">Birth</td><td className="py-2 pr-4">49.9 cm (19.6 in)</td><td className="py-2">49.1 cm (19.3 in)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">3 months</td><td className="py-2 pr-4">61.4 cm (24.2 in)</td><td className="py-2">59.8 cm (23.5 in)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">6 months</td><td className="py-2 pr-4">67.6 cm (26.6 in)</td><td className="py-2">65.7 cm (25.9 in)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">9 months</td><td className="py-2 pr-4">72.0 cm (28.3 in)</td><td className="py-2">70.1 cm (27.6 in)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">12 months</td><td className="py-2 pr-4">75.7 cm (29.8 in)</td><td className="py-2">74.0 cm (29.1 in)</td></tr>
                <tr><td className="py-2 pr-4">24 months</td><td className="py-2 pr-4">87.1 cm (34.3 in)</td><td className="py-2">85.7 cm (33.7 in)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When to discuss height concerns with your pediatrician
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Most babies who are short or tall are simply reflecting their family&apos;s stature. However, consider
            discussing with your pediatrician if: your baby&apos;s length is below the 3rd percentile and is not
            proportional to parental height; length growth rate drops significantly after age 2 (less than 5 cm
            per year); there is a large discrepancy between height percentile and mid-parental height percentile;
            or if short stature is accompanied by other symptoms such as disproportionate body segments, delayed
            puberty, or chronic health problems.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Babies grow remarkably fast in length during the first year, gaining about 25 cm. After that, growth slows considerably. Length is primarily genetically determined, and healthy babies populate the full range of percentiles. Focus on whether your baby is following their own growth curve consistently rather than achieving any specific number." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
