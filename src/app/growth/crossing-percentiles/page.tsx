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
  title: 'Crossing Percentile Lines: When to Worry',
  description:
    'When is crossing growth percentile lines normal and when is it concerning? Learn what it means when your baby moves between percentile lines and what your pediatrician looks for.',
  alternates: { canonical: '/growth/crossing-percentiles' },
};

const faqItems = [
  {
    question: 'Is it normal for babies to cross percentile lines?',
    answer:
      'Yes, to a degree. About two-thirds of babies will cross at least one major percentile line during the first 18 months as they settle into their genetically determined growth channel. Crossing one line gradually is common. Crossing two or more lines, especially rapidly (within a few months), is what raises concern and warrants evaluation.',
  },
  {
    question: 'What counts as a "major percentile line"?',
    answer:
      'Major percentile lines are the curves printed on growth charts, typically the 3rd, 10th, 25th, 50th, 75th, 90th, and 97th. Crossing one major line means moving from one curve to the next (for example, from the 50th to the 25th). Crossing two means moving past two curves (from the 50th to the 10th). Some references use the space between any two major lines as one "percentile band."',
  },
  {
    question: 'My baby crossed percentile lines upward. Is that bad?',
    answer:
      'Crossing upward can be normal (especially in the first few months or when a small baby born to larger parents is catching up to their genetic potential). However, persistently crossing upward for weight may indicate excessive caloric intake, particularly in formula-fed babies. Crossing upward for head circumference more rapidly requires evaluation to rule out hydrocephalus. Context and the specific measurement matter.',
  },
  {
    question: 'How quickly does percentile crossing become concerning?',
    answer:
      'A gradual shift over 6 to 12 months (one percentile line) as a baby settles into their genetic channel is usually normal. A drop of two or more lines within 2 to 3 months is more concerning. Speed matters: rapid drops suggest acute issues (illness, feeding problems) while gradual shifts may reflect normal physiological settling. Your pediatrician evaluates both the degree and speed of the change.',
  },
  {
    question: 'My premature baby is crossing percentile lines upward on adjusted-age charts. Is this normal?',
    answer:
      'Yes, this is often expected and desired. Premature babies frequently cross percentile lines upward during catch-up growth, which typically occurs in the first 2 to 3 years. This upward crossing represents the baby achieving their intended growth potential. As long as the catch-up is gradual and proportional (weight, length, and head all moving up), it is a positive sign.',
  },
];

const takeaways = [
  'Crossing one percentile line gradually in the first 18 months is common and often normal',
  'Crossing two or more percentile lines (especially downward) warrants discussion with your pediatrician',
  'The speed of the crossing matters: rapid drops are more concerning than gradual shifts',
  'Context is critical: settling into a genetic growth channel is different from growth faltering',
  'Weight dropping while length is maintained is a pattern that specifically raises concern for inadequate nutrition',
];

export default function CrossingPercentilesPage() {
  const contentSchema = getContentPageSchema({
    name: 'Crossing Percentile Lines: When It Is Concerning',
    description:
      'Understanding when crossing growth percentile lines is normal settling vs. a sign of growth problems that need evaluation.',
    path: '/growth/crossing-percentiles',
    lastModified: '2026-07-01',
    medicalGuidelines: [
      { name: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
      { name: 'AAP Clinical Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
      { name: 'CDC Growth Charts', url: 'https://www.cdc.gov/growthcharts/' },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Growth', url: '/growth' },
    { name: 'Crossing Percentiles' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'Crossing Percentiles' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Crossing Percentile Lines: When to Worry
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Hearing that your baby has &ldquo;crossed percentile lines&rdquo; can sound alarming. But not all
          percentile crossing is concerning. Understanding when it is part of normal growth settling and
          when it signals a problem helps you have informed conversations with your pediatrician.
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
            Normal percentile crossing (settling)
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Birth weight is influenced by uterine environment, placental function, and maternal factors more
            than the baby&apos;s own genetics. After birth, babies gradually shift toward their genetically
            determined growth channel. This process, called &ldquo;regression to the mean&rdquo; or growth
            channeling, typically occurs between 6 and 18 months and is completely normal.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Examples of normal settling:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>A large baby (90th percentile at birth) born to average-sized parents gradually moves to the 50th by 12 months</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>A small baby (25th percentile at birth) born to tall parents gradually moves to the 50th to 75th by 18 months</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>A breastfed baby who was at the 60th percentile at 3 months moves to the 40th by 9 months (normal breastfed pattern)</span>
            </li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Research shows that approximately 66% of all infants will cross at least one major percentile line
            by 18 months. This is expected and not a sign of a problem when it occurs gradually and the baby
            is otherwise well.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Concerning percentile crossing patterns
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The following patterns warrant evaluation by your pediatrician:
          </p>
          <div className="mt-4 space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">Downward weight crossing with maintained length</h3>
              <p className="mt-1">
                When weight drops across percentile lines while length remains stable, this pattern (called
                &ldquo;wasting&rdquo;) suggests inadequate caloric intake or malabsorption. The body is growing
                in length but not gaining fat and muscle, indicating a caloric deficit. This is the most
                concerning pattern for nutritional insufficiency.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">All measurements crossing downward together</h3>
              <p className="mt-1">
                When weight, length, and head circumference all cross downward together (called &ldquo;stunting&rdquo;),
                this may indicate a chronic condition, endocrine disorder, or genetic condition affecting overall
                growth. This pattern usually develops more slowly than weight-only drops.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Rapid downward crossing (2+ lines in 2-3 months)</h3>
              <p className="mt-1">
                A rapid drop suggests an acute problem: illness, sudden feeding difficulty, food allergy reaction,
                or other medical issue that has recently emerged. The speed of the drop is what distinguishes this
                from normal settling.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Head circumference crossing rapidly upward</h3>
              <p className="mt-1">
                If head circumference is crossing percentile lines upward faster than weight and length, this
                may indicate hydrocephalus or other conditions causing increased intracranial pressure. This
                requires prompt evaluation, especially if accompanied by a bulging fontanelle, irritability,
                or vomiting.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What your pediatrician considers
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            When evaluating percentile crossing, your pediatrician looks at the full picture:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Direction:</strong> Downward is generally more concerning than upward for weight; upward is more concerning for head circumference</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Degree:</strong> One line is often normal; two or more lines raises concern</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Speed:</strong> Gradual over 6 to 12 months vs. rapid over weeks</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Age:</strong> Crossing in the first 18 months is more likely normal than crossing after age 2</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Parental size:</strong> Is the baby moving toward their genetic potential?</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Feeding method:</strong> Breastfed babies naturally decelerate after 3 months</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Symptoms:</strong> Vomiting, diarrhea, refusal to eat, developmental concerns</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What to do if your baby is crossing percentiles
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            If your baby has crossed percentile lines and you are concerned, here is what to do:
          </p>
          <ol className="mt-3 space-y-2 text-sm text-muted leading-relaxed list-decimal pl-5">
            <li>Bring it up at your next well-child visit, or schedule a weight check if the visit is not imminent</li>
            <li>Keep a feeding log noting frequency, duration/volume, and any feeding difficulties</li>
            <li>Note any new symptoms (reflux, diarrhea, feeding refusal, increased spitting up)</li>
            <li>Do not attempt to dramatically increase caloric intake without guidance</li>
            <li>Ask your pediatrician which chart they are using and whether the crossing is concerning in context</li>
          </ol>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Crossing percentile lines is extremely common in the first 18 months and is often a normal part of babies finding their genetic growth channel. The key factors that determine whether crossing is concerning are the degree (how many lines), the speed (how quickly), the direction, and the context (family size, feeding method, other symptoms). When in doubt, a weight check with your pediatrician provides clarity." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
