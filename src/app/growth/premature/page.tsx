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
  title: 'Premature Baby Growth and Catch-Up',
  description:
    'Guide to premature baby growth patterns, adjusted age for growth charts, catch-up growth expectations, and when preemie growth concerns need evaluation.',
  alternates: { canonical: '/growth/premature' },
};

const faqItems = [
  {
    question: 'What is adjusted age and how long do I use it?',
    answer:
      'Adjusted age (also called corrected age) accounts for prematurity by subtracting the number of weeks born early from the baby\'s actual age. For example, a baby born at 32 weeks (8 weeks early) who is 4 months old has an adjusted age of 2 months. The AAP recommends using adjusted age for growth chart plotting until age 2 for moderate-to-late preterm babies and up to age 3 for very preterm babies (born before 28 weeks).',
  },
  {
    question: 'When will my premature baby catch up in size?',
    answer:
      'Most premature babies achieve catch-up growth by age 2 to 3 years, though the timeline varies significantly based on gestational age at birth and medical complications. Late preterm babies (34-36 weeks) often catch up by 12 to 18 months. Very preterm babies (less than 28 weeks) may take until age 3 or beyond. Some very premature babies remain smaller than their full-term peers throughout childhood, which can be their normal.',
  },
  {
    question: 'Which growth chart should be used for my premature baby?',
    answer:
      'For premature babies still in the NICU or shortly after discharge (under 50 weeks postmenstrual age), specialized preterm growth charts such as the Fenton growth chart are used. Once discharged and growing steadily, the WHO growth standards with adjusted age plotting are recommended. Your pediatrician will determine when to transition from preterm-specific charts to standard WHO charts.',
  },
  {
    question: 'Is it normal for my preemie to be small for their adjusted age?',
    answer:
      'Some premature babies, particularly those with intrauterine growth restriction (IUGR), very low birth weight, or significant medical complications (such as BPD or NEC), may remain at lower percentiles even on adjusted-age charts. This is not necessarily concerning if they are following their own consistent curve and developing well. Your neonatologist or pediatrician can help determine if the growth pattern is appropriate for your baby\'s history.',
  },
  {
    question: 'Does my premature baby need extra nutrition for catch-up growth?',
    answer:
      'Many premature babies benefit from fortified breast milk or specialized preterm formulas after NICU discharge. These provide extra calories, protein, calcium, and phosphorus needed for catch-up growth. The duration of fortification depends on the baby\'s growth trajectory and is determined by your pediatrician. Iron and vitamin D supplementation is typically recommended for all preterm infants.',
  },
];

const takeaways = [
  'Growth should be plotted using adjusted (corrected) age until at least age 2',
  'Most premature babies achieve catch-up growth by 2 to 3 years of age',
  'Catch-up growth typically follows a pattern: weight first, then length, then head circumference',
  'Specialized preterm growth charts (like Fenton) are used while in the NICU and early post-discharge',
  'Premature babies may need fortified nutrition and supplements to support optimal growth',
];

export default function PrematurePage() {
  const contentSchema = getContentPageSchema({
    name: 'Premature Baby Growth and Catch-Up Growth',
    description:
      'Guide to premature baby growth patterns, adjusted age, catch-up growth expectations, and nutrition.',
    path: '/growth/premature',
    lastModified: '2026-07-01',
    medicalGuidelines: [
      { name: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
      { name: 'AAP Preterm Infant Nutrition Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
      { name: 'Fenton Preterm Growth Chart', url: 'https://ucalgary.ca/resource/preterm-growth-chart' },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Growth', url: '/growth' },
    { name: 'Premature' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'Premature Growth' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Premature Baby Growth and Catch-Up
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Premature babies have unique growth patterns and needs. Understanding adjusted age, catch-up growth
          expectations, and specialized nutrition helps you track your preemie&apos;s progress without unnecessary
          worry. Most premature babies grow beautifully once they have the right support.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'WHO']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Understanding adjusted age
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Adjusted age (corrected age) is calculated by subtracting the number of weeks of prematurity
            from the baby&apos;s chronological age. A baby born at 30 weeks gestation (10 weeks early) who is
            now 6 months old has an adjusted age of approximately 3.5 months. Growth and developmental
            milestones should be assessed using adjusted age because the baby missed weeks of critical
            intrauterine growth.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            The AAP recommends using adjusted age until at least 24 months of chronological age. For very
            premature babies (born before 28 weeks), adjusted age may be used until age 3. Most pediatricians
            will plot growth on standard charts using both chronological and adjusted age so families can see
            the difference.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Growth charts for premature babies
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">In the NICU (23 to 50 weeks postmenstrual age)</h3>
              <p className="mt-1">
                The Fenton growth charts (updated 2013) are the most widely used for monitoring premature baby
                growth in the NICU. They cover 22 to 50 weeks postmenstrual age for weight, length, and head
                circumference, with separate charts for boys and girls. The Intergrowth-21st standards are
                another option used in some centers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">After NICU discharge (using adjusted age)</h3>
              <p className="mt-1">
                Once your baby is discharged and growing stably, the WHO growth standards are used with adjusted
                age plotting. The Fenton charts transition to the WHO charts at 50 weeks postmenstrual age
                (approximately 10 weeks after a full-term due date). From this point, standard WHO percentiles
                apply using adjusted age on the x-axis.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Catch-up growth patterns
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Catch-up growth refers to the period when a premature baby grows faster than normal to reach a
            size appropriate for their adjusted age. It typically occurs in a specific order:
          </p>
          <ol className="mt-3 space-y-2 text-sm text-muted leading-relaxed list-decimal pl-5">
            <li><strong className="text-foreground">Head circumference</strong> catches up first (usually within the first 6 to 12 months), reflecting the body&apos;s priority for brain growth</li>
            <li><strong className="text-foreground">Weight</strong> typically catches up next, often between 12 and 24 months</li>
            <li><strong className="text-foreground">Length</strong> is usually last to catch up and may take until age 2 to 3</li>
          </ol>
          <p className="text-sm text-muted leading-relaxed mt-3">
            The rate and completeness of catch-up growth depend on several factors: gestational age at birth,
            birth weight, presence of intrauterine growth restriction, medical complications (bronchopulmonary
            dysplasia, necrotizing enterocolitis, etc.), and nutritional support post-discharge. Late preterm
            babies (34 to 36 weeks) generally catch up faster than very preterm babies (under 28 weeks).
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Nutrition for premature baby growth
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Premature babies have higher nutritional needs per kilogram of body weight than full-term infants.
            Key nutritional considerations include:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Fortified breast milk:</strong> Human milk fortifier may be added to expressed breast milk to increase calories, protein, calcium, and phosphorus</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Preterm or post-discharge formulas:</strong> These provide 22 to 30 calories per ounce (vs. 20 cal/oz for standard formula) with extra protein and minerals</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Iron supplementation:</strong> 2 mg/kg/day recommended for preterm breastfed infants starting at 2 weeks until 12 months</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Vitamin D:</strong> 400 IU daily for all premature infants (some may need more based on bone health)</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When premature baby growth is concerning
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            While premature babies grow at their own pace, certain patterns warrant evaluation: no catch-up
            growth by 2 to 3 years of age, falling further behind on adjusted-age charts, head circumference
            not showing catch-up within the first year, or weight gain that is very slow despite adequate
            caloric intake. These may indicate underlying issues such as undiagnosed reflux, feeding difficulties,
            growth hormone deficiency, or other medical conditions that need treatment.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Premature babies follow their own growth timeline. Using adjusted age and specialized charts gives the most accurate picture of how your preemie is growing relative to expectations. Most premature babies catch up to their full-term peers by age 2 to 3, though some remain comfortably smaller. With proper nutrition and monitoring, your preemie's growth trajectory can be supported every step of the way." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
