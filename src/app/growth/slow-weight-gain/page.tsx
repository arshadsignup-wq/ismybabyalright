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
  title: 'Slow Weight Gain in Babies',
  description:
    'Why is my baby gaining weight slowly? Understand causes of slow weight gain in infants, when it is normal variation vs. a concern, and evidence-based strategies to support healthy growth.',
  alternates: { canonical: '/growth/slow-weight-gain' },
};

const faqItems = [
  {
    question: 'How do I know if my baby\'s weight gain is too slow?',
    answer:
      'Weight gain is considered too slow when it falls below the expected rate for age: less than 20 grams/day in the first 3 months, less than 15 grams/day from 3 to 6 months, or less than 10 grams/day from 6 to 12 months. However, context matters. A single slow period may not be concerning if the baby is otherwise well, and some babies naturally track at lower percentiles. Your pediatrician evaluates trends over multiple visits, not single measurements.',
  },
  {
    question: 'My baby is small but meeting milestones. Should I still worry?',
    answer:
      'A baby who is small but consistently tracking along their own growth curve, meeting developmental milestones, and feeding well is likely simply genetically small. Not all slow weight gain indicates a problem. Parental size, ethnic background, and gestational history all influence where a baby falls on the growth chart. Your pediatrician can help distinguish constitutional smallness from true growth faltering.',
  },
  {
    question: 'Can I increase my breastfed baby\'s calorie intake?',
    answer:
      'Yes. Strategies include increasing feeding frequency, ensuring complete breast drainage (which provides higher-calorie hindmilk), breast compression during feeds, offering both breasts per feeding, and pumping after feeds to stimulate more supply. A lactation consultant can assess whether the baby is transferring milk effectively. In some cases, supplementing with expressed milk or formula after feeds may be recommended temporarily.',
  },
  {
    question: 'Should I add cereal to my baby\'s bottle to increase calories?',
    answer:
      'The AAP does not recommend adding cereal to bottles. This practice does not teach self-regulation, can be a choking hazard, and may contribute to overfeeding. If additional calories are needed, your pediatrician may recommend higher-calorie formula, fortified breast milk, or age-appropriate calorie-dense foods (for babies 6 months and older). Always follow medical guidance for caloric supplementation.',
  },
  {
    question: 'Will slow weight gain affect my baby\'s brain development?',
    answer:
      'Mild, short-term slow weight gain in an otherwise healthy baby is unlikely to affect brain development. The brain is prioritized in nutrient distribution (which is why head circumference is often maintained even when weight falters). Prolonged, severe malnutrition can impact brain development, but this level of caloric deprivation is rare in babies receiving regular pediatric care. Early intervention when weight gain is truly inadequate protects long-term outcomes.',
  },
];

const takeaways = [
  'Slow weight gain has many causes, ranging from normal genetic variation to treatable feeding issues',
  'A baby consistently at the 10th percentile is different from a baby dropping from the 50th to the 10th',
  'Common treatable causes include latch problems, tongue tie, reflux, and food allergies',
  'The approach depends on whether the slow gain is proportional (constitutionally small) or disproportionate (wasting)',
  'Early feeding support and calorie optimization improve outcomes when true slow gain is identified',
];

export default function SlowWeightGainPage() {
  const contentSchema = getContentPageSchema({
    name: 'Slow Weight Gain in Babies: Causes and Management',
    description:
      'Understanding slow weight gain in infants: causes, when it is concerning, and evidence-based strategies for healthy growth.',
    path: '/growth/slow-weight-gain',
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
    { name: 'Slow Weight Gain' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'Slow Weight Gain' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Slow Weight Gain in Babies: Causes and What to Do
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          When your baby is not gaining weight as quickly as expected, it can be deeply worrying. Understanding
          the difference between a naturally smaller baby and one who needs more caloric support helps you
          work with your pediatrician to find the right approach.
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
            Normal variation vs. concerning slow gain
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Not all babies at lower percentiles have a problem. Distinguishing normal variation from true
            growth faltering involves looking at:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Consistency:</strong> A baby who has always been at the 10th percentile is different from one who dropped there from the 50th</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Proportionality:</strong> Weight, length, and head all at the 10th is different from weight at the 5th while length is at the 50th</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Family pattern:</strong> Small parents often have small babies who grow appropriately for their genetics</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Velocity:</strong> The rate of gain (grams per day) is more informative than a single point on the chart</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Development:</strong> A baby who is gaining slowly but meeting all milestones is less concerning than one with both growth and developmental delays</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Common causes of slow weight gain
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">Feeding-related causes (most common)</h3>
              <ul className="mt-2 space-y-1.5 pl-4">
                <li>- Poor latch or ineffective milk transfer during breastfeeding</li>
                <li>- Low breast milk supply (primary or secondary)</li>
                <li>- Tongue tie or lip tie restricting feeding</li>
                <li>- Infrequent feeding (missing hunger cues, scheduled feeding too rigidly)</li>
                <li>- Improper formula preparation (too dilute)</li>
                <li>- Oral motor dysfunction or sensory feeding aversion</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Medical causes</h3>
              <ul className="mt-2 space-y-1.5 pl-4">
                <li>- Gastroesophageal reflux (pain causing feeding refusal)</li>
                <li>- Cow&apos;s milk protein allergy or other food allergies</li>
                <li>- Urinary tract infection or other chronic infection</li>
                <li>- Celiac disease or other malabsorption conditions</li>
                <li>- Congenital heart disease (increased caloric needs)</li>
                <li>- Thyroid or metabolic disorders</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Constitutional (normal variation)</h3>
              <ul className="mt-2 space-y-1.5 pl-4">
                <li>- Small parental stature (genetic programming)</li>
                <li>- Premature birth (growth plotted without adjusted age)</li>
                <li>- Normal settling into genetic growth channel (first 18 months)</li>
                <li>- Breastfed baby on CDC charts (normal deceleration misinterpreted)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What your pediatrician will evaluate
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            When slow weight gain is identified, your pediatrician will typically review: a detailed feeding
            history (frequency, duration, volume, technique), growth chart trends over time, parental height
            and weight, developmental milestones, stool and urine patterns, and symptoms of underlying
            conditions. They may order blood work (CBC, thyroid function, metabolic panel), urine analysis,
            or refer for a lactation consultation or feeding evaluation depending on the findings.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Strategies to support weight gain
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">For breastfed babies</h3>
              <ul className="mt-2 space-y-1.5 pl-4">
                <li>- Increase feeding frequency (at least 8 to 12 times in 24 hours for young infants)</li>
                <li>- Use breast compression during feeding to increase milk flow</li>
                <li>- Offer both breasts per feeding</li>
                <li>- Pump after feeds to stimulate increased supply</li>
                <li>- Consider a weighted feed assessment with a lactation consultant</li>
                <li>- Supplement with expressed breast milk or formula if advised</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">For formula-fed babies</h3>
              <ul className="mt-2 space-y-1.5 pl-4">
                <li>- Verify formula preparation is correct (not too dilute)</li>
                <li>- Offer feeds more frequently (every 2.5 to 3 hours during the day)</li>
                <li>- Ensure responsive feeding (baby is awake and alert for feeds)</li>
                <li>- Your doctor may recommend a higher-calorie formula (22 or 24 cal/oz)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">For babies 6 months and older</h3>
              <ul className="mt-2 space-y-1.5 pl-4">
                <li>- Offer calorie-dense foods: avocado, nut butters, full-fat yogurt, olive oil on foods</li>
                <li>- Prioritize milk feeds before solids (milk remains the primary calorie source until 12 months)</li>
                <li>- Offer solid foods 2 to 3 times daily in addition to full milk feeds</li>
                <li>- Avoid filling up on low-calorie foods like fruit or water</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Follow-up and monitoring
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            When slow weight gain is being managed, your pediatrician will typically schedule more frequent
            weight checks, often every 1 to 2 weeks initially. The goal is to see a return to the expected
            gain rate (catch-up growth requires approximately 1.5 to 2 times normal caloric intake). Once
            catch-up growth is established and the baby is back on their growth curve, visits can be spaced
            further apart. Keep records of feeding frequency, duration, and any symptoms between visits to
            help your care team adjust the plan.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Slow weight gain deserves attention but not panic. Many cases are caused by fixable feeding issues that respond well to targeted support. Some babies are constitutionally small and growing perfectly for their genetics. Your pediatrician can help distinguish between the two and create a plan that supports your baby's optimal growth." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
