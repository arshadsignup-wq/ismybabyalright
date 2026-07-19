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
  title: 'Breastfed vs Formula-Fed Growth',
  description:
    'How do breastfed and formula-fed babies grow differently? Evidence-based comparison of growth patterns, weight gain rates, and what WHO and CDC data show about feeding method and growth.',
  alternates: { canonical: '/growth/breastfed-vs-formula' },
};

const faqItems = [
  {
    question: 'Do breastfed babies gain weight more slowly than formula-fed babies?',
    answer:
      'It depends on the age. Breastfed babies typically gain weight faster in the first 2 to 3 months, then more slowly from 3 to 12 months compared to formula-fed babies. By 12 months, breastfed babies tend to be slightly leaner. This pattern is reflected in the WHO growth standards and is considered the biological norm. Neither pattern is "better" — both support healthy development.',
  },
  {
    question: 'Should I switch to formula if my breastfed baby is gaining slowly after 4 months?',
    answer:
      'Not necessarily. A gradual deceleration in weight gain between 4 and 12 months is normal for breastfed babies and is reflected in the WHO growth standards. If your baby is alert, developing normally, producing adequate wet and dirty diapers, and following their own percentile curve (even if that curve tracks along a lower percentile), supplementation may not be needed. Discuss with your pediatrician using WHO charts.',
  },
  {
    question: 'Is rapid weight gain in formula-fed babies harmful?',
    answer:
      'Research suggests that rapid weight gain in infancy (especially crossing upward on percentile charts) is associated with increased risk of childhood and adult obesity. Formula-fed babies are more likely to gain rapidly due to the consistent composition of formula and the tendency for caregivers to encourage bottle emptying. Responsive feeding (watching for fullness cues and not forcing the baby to finish) can help mitigate this.',
  },
  {
    question: 'Does the type of formula affect growth?',
    answer:
      'Yes, somewhat. Standard cow\'s milk-based formulas tend to produce slightly faster weight gain than protein-hydrolysate formulas. Newer formulas with lower protein content (closer to breast milk levels) have been shown to produce growth patterns more similar to breastfed infants. Soy formulas and extensively hydrolyzed formulas may also produce slightly different growth patterns.',
  },
  {
    question: 'My breastfed baby is at the 90th percentile. Is that normal?',
    answer:
      'Yes. Breastfed babies can be at any percentile and be healthy. While the general population trend shows breastfed babies being leaner after 3 months, individual variation is wide. A breastfed baby at the 90th percentile who consistently tracks there is growing normally. Breastfeeding is self-regulating, and overfeeding at the breast is extremely rare. Do not restrict breastfeeding due to a high percentile.',
  },
];

const takeaways = [
  'Breastfed babies gain faster in months 1 to 3 but slower in months 3 to 12 compared to formula-fed babies',
  'Both growth patterns are normal. The difference reflects the biological composition of each food source',
  'WHO growth standards (recommended for under 2) are based on breastfed infants, making them the appropriate benchmark',
  'Formula-fed babies tend to be slightly heavier by 12 months, not because breastfed babies are underweight but because formula promotes faster later growth',
  'Using the wrong chart can falsely suggest a breastfed baby is falling behind when they are growing normally',
];

export default function BreastfedVsFormulaPage() {
  const contentSchema = getContentPageSchema({
    name: 'Growth Differences: Breastfed vs Formula-Fed Babies',
    description:
      'Evidence-based comparison of growth patterns between breastfed and formula-fed babies based on WHO and CDC data.',
    path: '/growth/breastfed-vs-formula',
    lastModified: '2026-07-01',
    medicalGuidelines: [
      { name: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
      { name: 'AAP Breastfeeding Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
      { name: 'CDC Growth Charts', url: 'https://www.cdc.gov/growthcharts/' },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Growth', url: '/growth' },
    { name: 'Breastfed vs Formula Growth' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'Breastfed vs Formula Growth' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Breastfed vs Formula-Fed: Growth Differences
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Breastfed and formula-fed babies grow at different rates at different ages, and both patterns
          are healthy. Understanding these differences helps prevent unnecessary worry when a breastfed
          baby&apos;s growth appears to slow or a formula-fed baby gains quickly.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['WHO', 'AAP', 'CDC']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How growth patterns differ by feeding method
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">Months 1 to 3: Breastfed babies gain faster</h3>
              <p className="mt-1">
                During the first 2 to 3 months, exclusively breastfed babies typically gain weight slightly
                faster than formula-fed babies. This is attributed to the high frequency of breastfeeding in
                the early weeks and the calorie-dense hindmilk that babies access with frequent, effective
                feeding. Breastfed babies may gain 200 to 250 grams per week during this period.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Months 3 to 12: Formula-fed babies gain faster</h3>
              <p className="mt-1">
                After approximately 3 months, the pattern reverses. Formula-fed babies tend to gain weight
                more quickly than breastfed babies. By 12 months, formula-fed babies are on average 600 to 650
                grams (about 1.3 pounds) heavier than exclusively breastfed babies. This difference is reflected
                in the different growth trajectories on WHO vs CDC charts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Length and head circumference</h3>
              <p className="mt-1">
                Differences in length and head circumference between breastfed and formula-fed babies are
                smaller and less consistent than weight differences. Both groups tend to follow similar length
                trajectories, suggesting that the primary difference is in adiposity (body fat) rather than
                linear growth.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Why the difference exists
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Several biological and behavioral factors explain the divergence:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Self-regulation:</strong> Breastfed babies control their intake by regulating sucking intensity and duration. Bottle-fed babies may overconsume because milk flows regardless of active sucking</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Protein content:</strong> Formula historically contained more protein than breast milk. Higher protein intake in infancy stimulates IGF-1 (insulin-like growth factor), promoting faster weight gain</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Hormones in breast milk:</strong> Breast milk contains leptin, adiponectin, and other hormones that help regulate appetite and metabolism. These are absent in formula</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Feeding behavior:</strong> Caregivers may encourage formula-fed babies to finish a bottle even when the baby shows satiety cues</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Milk composition changes:</strong> Breast milk composition adapts throughout the day and over months, naturally moderating caloric intake as the baby grows</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The chart comparison problem
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Before the CDC recommended WHO charts in 2010, breastfed babies were often plotted on the older
            CDC charts, which were based primarily on formula-fed populations. This led to a common scenario:
            a breastfed baby would track at the 50th or 60th percentile in the first few months, then appear
            to &ldquo;drop&rdquo; to the 30th or 40th percentile by 9 to 12 months. Parents and some providers
            interpreted this as a growth problem, sometimes leading to unnecessary formula supplementation or
            early solids introduction.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            On WHO charts, this same baby&apos;s growth would appear stable and normal, because the charts were
            built from breastfed infants showing this exact pattern. This is why using the right chart matters
            and why the CDC made its 2010 recommendation.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Long-term implications
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Research suggests that the slower weight gain pattern of breastfed babies in the second half of
            the first year may have protective long-term effects. Multiple studies have found associations
            between rapid infant weight gain and increased risk of childhood obesity. The breastfed growth
            pattern, with its natural deceleration after 3 months, may help establish healthier metabolic
            programming. However, this does not mean formula-fed babies are destined for weight problems;
            responsive feeding practices can help formula-fed babies maintain healthy growth trajectories.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Tips for mixed-feeding families
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Many families combine breast and formula feeding. For growth tracking purposes, there is no
            separate chart for combination-fed babies. Your pediatrician will use WHO charts and interpret
            growth in context. General guidance includes using responsive feeding practices for bottle feeds
            (paced bottle feeding), not pressuring the baby to finish bottles, and tracking growth consistently
            at regular well-child visits. A baby who is growing consistently along their own curve, regardless
            of feeding method, is doing well.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Breastfed and formula-fed babies grow differently, and both patterns are healthy. Breastfed babies gain faster early and slower later; formula-fed babies show the opposite pattern. Using WHO growth charts for infants under 2 ensures that breastfed growth is correctly interpreted as normal rather than deficient. However your baby is fed, consistent growth along their own curve is what matters most." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
