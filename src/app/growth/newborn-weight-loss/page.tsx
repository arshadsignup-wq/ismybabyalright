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
  title: 'Normal Newborn Weight Loss and Regain',
  description:
    'How much weight loss is normal for newborns? Learn about expected weight loss after birth, when babies regain birth weight, and warning signs of excessive loss.',
  alternates: { canonical: '/growth/newborn-weight-loss' },
};

const faqItems = [
  {
    question: 'How much weight loss is normal for a newborn?',
    answer:
      'Most breastfed newborns lose 5 to 7% of birth weight in the first 3 to 5 days. Formula-fed newborns typically lose 3 to 5%. A loss up to 10% may still be within normal range for breastfed babies, particularly after IV fluids during labor, but requires close monitoring and a feeding assessment. Weight loss exceeding 10% is considered excessive and requires immediate evaluation.',
  },
  {
    question: 'When should my newborn regain birth weight?',
    answer:
      'Most newborns regain their birth weight by 10 to 14 days of age. Breastfed babies may take slightly longer than formula-fed babies. If a baby has not regained birth weight by 2 weeks of age, a thorough feeding evaluation is needed. The AAP recommends a weight check at 3 to 5 days of age (or within 48 hours of hospital discharge) to ensure weight loss is not excessive.',
  },
  {
    question: 'Why do newborns lose weight at all?',
    answer:
      'Newborn weight loss is primarily due to loss of excess body water accumulated in utero, passage of meconium (first stools), and the transition to outside feeding. Colostrum (the first breast milk) is produced in small volumes intentionally, as a newborn\'s stomach capacity is only 5 to 7 mL at birth. The loss is physiological and expected; it is not a sign that the baby is starving.',
  },
  {
    question: 'Does IV fluid during labor affect newborn weight loss?',
    answer:
      'Yes. Research shows that mothers who receive large amounts of IV fluid during labor may give birth to babies who are temporarily heavier due to fluid overload. These babies may appear to lose more weight than expected in the first few days as they shed this excess fluid. Some experts suggest using the 24-hour weight (rather than birth weight) as the baseline for calculating percentage weight loss in these cases.',
  },
  {
    question: 'How can I tell if my newborn is getting enough milk?',
    answer:
      'In the first week, signs of adequate intake include: at least 1 wet diaper per day of life (1 on day 1, 2 on day 2, etc.) until day 5 to 6, then at least 6 wet diapers daily; stool transition from meconium to yellow by day 3 to 5; audible swallowing during feeding; breast softening after feeds; and the baby seeming satisfied after most feedings. Weight gain (after the initial loss period) of at least 20 to 30 grams per day confirms adequate intake.',
  },
];

const takeaways = [
  'All newborns lose weight in the first few days after birth, and this is normal and expected',
  'Breastfed babies typically lose 5 to 7% of birth weight; formula-fed babies lose 3 to 5%',
  'Weight loss exceeding 10% requires immediate feeding evaluation',
  'Most babies regain birth weight by 10 to 14 days of age',
  'A weight check at 3 to 5 days of age helps identify excessive loss early',
];

export default function NewbornWeightLossPage() {
  const contentSchema = getContentPageSchema({
    name: 'Normal Newborn Weight Loss and Regain',
    description:
      'Guide to expected newborn weight loss after birth, normal regain timeline, and warning signs of excessive weight loss.',
    path: '/growth/newborn-weight-loss',
    lastModified: '2026-07-01',
    medicalGuidelines: [
      { name: 'AAP Clinical Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
      { name: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
      { name: 'Academy of Breastfeeding Medicine', url: 'https://www.bfmed.org/protocols' },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Growth', url: '/growth' },
    { name: 'Newborn Weight Loss' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'Newborn Weight Loss' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Newborn Weight Loss: What Is Normal
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          It can be alarming to hear that your brand-new baby has lost weight. But newborn weight loss
          is a normal, expected part of the transition to life outside the womb. Understanding how much
          loss is typical and when your baby should regain their birth weight helps you know what to watch for.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'WHO', 'ABM']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Why newborns lose weight
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Every newborn loses weight during the first few days of life, regardless of feeding method. This
            happens because babies are born with extra fluid that is gradually eliminated through urine and
            insensible losses. Additionally, the first breast milk (colostrum) is produced in very small amounts
            that match the newborn&apos;s tiny stomach capacity. Meconium passage (the dark, sticky first stools)
            also contributes to weight loss. This is a normal physiological process, not a sign of inadequate
            feeding.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Expected weight loss timeline
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">Day 1 to 2</h3>
              <p className="mt-1">
                Weight loss begins immediately. Most loss occurs in the first 48 to 72 hours. Babies
                typically produce 1 to 2 wet diapers and pass meconium.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Day 3 to 5 (nadir)</h3>
              <p className="mt-1">
                Weight typically reaches its lowest point (nadir) between day 2 and day 4. For breastfed
                babies, this coincides with the transition from colostrum to mature milk. Average loss at
                nadir is 6 to 7% for breastfed babies and 3 to 4% for formula-fed babies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Day 5 to 7</h3>
              <p className="mt-1">
                Weight should begin to increase as mature milk comes in and feeding is established. The baby
                should be producing 6 or more wet diapers and 3 to 4 yellow, seedy stools daily. Weight gain
                of 20 to 30 grams per day begins.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Day 10 to 14</h3>
              <p className="mt-1">
                Birth weight should be regained. Some breastfed babies take the full 14 days; formula-fed
                babies often regain by day 10. If birth weight is not regained by 2 weeks, a comprehensive
                feeding evaluation is indicated.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When weight loss is excessive
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Weight loss exceeding 10% of birth weight is considered excessive and requires prompt evaluation.
            Warning signs include:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>More than 7% loss by day 3 (breastfed) or more than 5% (formula-fed)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Continued weight loss after day 5</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Fewer wet diapers than expected for age (fewer than 3 by day 3)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>No stool transition from meconium to yellow by day 5</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Signs of dehydration: dry mouth, sunken fontanelle, dark concentrated urine, excessive sleepiness</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Birth weight not regained by 2 weeks of age</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What to do if weight loss is concerning
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            If your newborn&apos;s weight loss exceeds expected ranges, your healthcare provider will assess
            feeding effectiveness. For breastfeeding mothers, this may include a lactation consultation to
            evaluate latch, milk transfer, and breast milk supply. Interventions may include increasing feeding
            frequency (at least 8 to 12 times in 24 hours), supplementing with expressed breast milk or formula
            as needed, and addressing any underlying issues such as tongue tie. Close follow-up with daily or
            every-other-day weight checks is typical until the baby is gaining consistently.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Factors that affect newborn weight loss
          </h2>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Feeding method:</strong> Breastfed babies typically lose more weight initially than formula-fed babies because milk supply takes 3 to 5 days to fully establish</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Delivery method:</strong> Babies born by cesarean may lose slightly more weight, possibly due to higher IV fluid administration during surgery</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Maternal IV fluids:</strong> High-volume IV fluids during labor can inflate birth weight, making subsequent loss appear greater than it truly is</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Gestational age:</strong> Late preterm babies (34 to 36 weeks) may lose more weight and take longer to regain due to immature feeding reflexes</span>
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Newborn weight loss in the first few days is completely normal. Most healthy newborns lose 5 to 7% of their birth weight and regain it by 10 to 14 days. The early weight check at 3 to 5 days of age is important to confirm that loss is within the expected range. If you have concerns about your newborn's weight, your pediatrician or a lactation consultant can provide reassurance or early intervention." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
