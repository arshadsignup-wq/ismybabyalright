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
  title: 'Baby Head Circumference Guide',
  description:
    'Everything about baby head circumference: normal growth rates, how it is measured, what macrocephaly and microcephaly mean, and when head size changes are concerning.',
  alternates: { canonical: '/growth/head-circumference' },
};

const faqItems = [
  {
    question: 'Why do pediatricians measure head circumference?',
    answer:
      'Head circumference is a proxy for brain growth. The brain grows rapidly during infancy, and the skull expands to accommodate it. Tracking head circumference helps identify potential issues like hydrocephalus (fluid buildup causing rapid head growth), craniosynostosis (premature fusion of skull sutures), or conditions that may slow brain growth. It is measured routinely at every well-child visit until age 2 or 3.',
  },
  {
    question: 'My baby has a large head. Should I be concerned?',
    answer:
      'A large head (above the 90th percentile) is most often familial, meaning one or both parents also have larger-than-average heads. This is called benign familial macrocephaly. If your baby\'s head has always tracked along a high percentile, is developing normally, and has no signs of increased intracranial pressure (bulging fontanelle, vomiting, irritability), it is likely their normal. However, if head circumference is rapidly crossing percentile lines upward, your pediatrician will want to evaluate further.',
  },
  {
    question: 'When does the fontanelle (soft spot) close?',
    answer:
      'The anterior fontanelle (the larger soft spot on top) typically closes between 9 and 18 months, with an average closure around 12 to 14 months. The posterior fontanelle (the smaller one at the back) usually closes by 2 to 3 months. Early closure does not necessarily indicate a problem but should be monitored alongside head circumference measurements.',
  },
  {
    question: 'Can head shape affect circumference measurements?',
    answer:
      'Yes. Positional plagiocephaly (flat spots from lying in one position) can make the head appear larger in one direction but does not significantly affect circumference. However, craniosynostosis (premature fusion of skull plates) can restrict growth in one direction and cause compensatory growth in another, potentially affecting circumference patterns. Consistent measurement technique is important.',
  },
  {
    question: 'Is head circumference related to intelligence?',
    answer:
      'Within the normal range, head circumference is not a predictor of intelligence. A baby with a head at the 25th percentile is not less intelligent than one at the 75th percentile. What matters is that head growth follows a consistent pattern, indicating normal brain development. Extreme deviations from the norm (very small or very large) may be associated with certain conditions, but percentile position within the normal range does not predict cognitive outcomes.',
  },
];

const takeaways = [
  'Head circumference reflects brain growth and is measured until age 2 to 3',
  'The brain reaches approximately 80% of adult size by age 2 and 90% by age 5',
  'Head grows about 12 cm in the first year (2 cm/month for 3 months, then 1 cm/month for 3 months, then 0.5 cm/month)',
  'Familial macrocephaly (large head running in families) is the most common cause of a large head',
  'Rapid crossing of percentile lines, either up or down, warrants evaluation',
];

export default function HeadCircumferencePage() {
  const contentSchema = getContentPageSchema({
    name: 'Baby Head Circumference Guide',
    description:
      'Complete guide to baby head circumference including normal growth rates, measurement technique, and when changes are concerning.',
    path: '/growth/head-circumference',
    lastModified: '2026-07-01',
    medicalGuidelines: [
      { name: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
      { name: 'AAP Bright Futures Guidelines', url: 'https://www.aap.org/en/practice-management/bright-futures/' },
      { name: 'CDC Growth Charts', url: 'https://www.cdc.gov/growthcharts/' },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Growth', url: '/growth' },
    { name: 'Head Circumference' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'Head Circumference' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Baby Head Circumference: What to Know
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Head circumference is one of the three key growth measurements tracked at every well-baby visit.
          It provides important information about brain growth during the critical first years of life.
          Here is what the numbers mean and when changes warrant attention.
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
            Normal head growth by age
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">Birth to 3 months</h3>
              <p className="mt-1">
                The head grows approximately 2 cm per month during this period of rapid brain development.
                Average head circumference at birth is about 34 to 35 cm (13.4 to 13.8 inches) for full-term babies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">3 to 6 months</h3>
              <p className="mt-1">
                Growth rate slows to approximately 1 cm per month.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">6 to 12 months</h3>
              <p className="mt-1">
                Growth slows further to about 0.5 cm per month. By 12 months, head circumference has
                increased approximately 12 cm from birth, reaching about 46 to 47 cm (18 to 18.5 inches).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">12 to 24 months</h3>
              <p className="mt-1">
                The head grows about 2 cm during the entire second year, reaching approximately 48 to 49 cm
                by age 2. After age 2, head growth slows considerably and is not routinely measured at every visit.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How head circumference is measured
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Head circumference (also called occipitofrontal circumference or OFC) is measured by placing a
            flexible, non-stretchable tape around the largest part of the head. The tape goes across the
            forehead just above the eyebrows and ears, and around the most prominent part of the back of the
            head (the occiput). The measurement should be taken at least twice and the largest value recorded.
            Hair accessories, braids, and thick hair can affect accuracy.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Macrocephaly: when the head is large
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Macrocephaly is defined as head circumference above the 97th percentile (or greater than 2 standard
            deviations above the mean). The most common cause is benign familial macrocephaly, where one or both
            parents have a large head. This is diagnosed when the head is large but growing at a normal rate, the
            fontanelle is not bulging, and development is normal. Parental head circumference should be measured.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Causes that require evaluation include hydrocephalus (excess cerebrospinal fluid), certain genetic
            syndromes, and megalencephaly (enlarged brain). Signs that warrant urgent evaluation include a tense
            or bulging fontanelle, rapid increase crossing percentile lines, vomiting (especially in the morning),
            sun-setting eyes, or developmental regression.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Microcephaly: when the head is small
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Microcephaly is defined as head circumference below the 3rd percentile (or more than 2 standard
            deviations below the mean). It can be present at birth (congenital) or develop postnatally (acquired).
            Congenital causes include genetic conditions, prenatal infections (such as Zika, CMV, or rubella),
            fetal alcohol exposure, and chromosomal abnormalities. Acquired microcephaly may result from birth
            injury, infection, or conditions affecting brain growth.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Not all babies with head circumference below the 3rd percentile have microcephaly in the clinical
            sense. Some are constitutionally small, particularly if parents have smaller heads. Evaluation
            typically includes neurological assessment, developmental screening, and sometimes imaging.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Average head circumference by age (WHO 50th percentile)
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
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">Birth</td><td className="py-2 pr-4">34.5 cm (13.6 in)</td><td className="py-2">33.9 cm (13.3 in)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">3 months</td><td className="py-2 pr-4">40.5 cm (15.9 in)</td><td className="py-2">39.5 cm (15.6 in)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">6 months</td><td className="py-2 pr-4">43.3 cm (17.0 in)</td><td className="py-2">42.2 cm (16.6 in)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">9 months</td><td className="py-2 pr-4">45.0 cm (17.7 in)</td><td className="py-2">43.8 cm (17.2 in)</td></tr>
                <tr className="border-b border-[#E8E2D9]"><td className="py-2 pr-4">12 months</td><td className="py-2 pr-4">46.1 cm (18.1 in)</td><td className="py-2">44.9 cm (17.7 in)</td></tr>
                <tr><td className="py-2 pr-4">24 months</td><td className="py-2 pr-4">48.3 cm (19.0 in)</td><td className="py-2">47.2 cm (18.6 in)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Head circumference tracks brain growth during your baby's first years. Like weight and length, what matters most is a consistent pattern over time rather than any single number. A large or small head that runs in the family and follows a steady curve is usually nothing to worry about. Rapid changes in the growth pattern are what prompt further evaluation." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
