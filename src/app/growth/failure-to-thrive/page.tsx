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
  title: 'Failure to Thrive in Babies',
  description:
    'Understand failure to thrive (FTT) in infants: signs, causes, diagnosis, and treatment. Learn what it means when a baby is not gaining weight as expected and what you can do.',
  alternates: { canonical: '/growth/failure-to-thrive' },
};

const faqItems = [
  {
    question: 'What exactly does "failure to thrive" mean?',
    answer:
      'Failure to thrive (FTT) is a clinical description, not a specific disease. It means a baby or child is not gaining weight or growing at the expected rate. Clinically, it is often defined as weight below the 3rd percentile for age, weight-for-length below the 5th percentile, or a drop of two or more major percentile lines on the growth chart. The term is being replaced in some practices with "faltering growth" or "weight faltering" to reduce stigma.',
  },
  {
    question: 'Is failure to thrive the parents\' fault?',
    answer:
      'No. FTT has many causes, most of which are not related to parenting quality. Common causes include breastfeeding difficulties, reflux, food allergies, tongue tie, oral motor problems, and medical conditions affecting absorption. While psychosocial factors (such as food insecurity or caregiver depression) can contribute, the vast majority of FTT cases are due to identifiable, treatable causes. Parents seeking help are doing exactly the right thing.',
  },
  {
    question: 'How is failure to thrive diagnosed?',
    answer:
      'There is no single diagnostic test for FTT. Diagnosis is based on growth measurements showing inadequate weight gain over time. Your pediatrician will review growth charts, feeding history, medical history, developmental assessment, and family growth patterns. Blood tests, urine tests, or other evaluations may be ordered to identify underlying causes. A thorough feeding assessment by a lactation consultant or feeding specialist is often part of the evaluation.',
  },
  {
    question: 'Can failure to thrive be reversed?',
    answer:
      'Yes, in most cases. When the underlying cause is identified and addressed, most babies with FTT show catch-up growth. The earlier the intervention, the better the outcome. Treatment depends on the cause and may include feeding optimization, calorie fortification, treating medical conditions, or nutritional supplementation. Most children with FTT who receive appropriate treatment achieve normal growth.',
  },
  {
    question: 'When does FTT require hospitalization?',
    answer:
      'Most cases of FTT are managed outpatient. Hospitalization may be needed when there is severe malnutrition or dehydration, when the baby is not safe at home, when intensive feeding evaluation is needed, or when outpatient interventions have not been successful. During hospitalization, caloric intake is monitored, feeding is observed, and the medical team can evaluate for underlying conditions more efficiently.',
  },
];

const takeaways = [
  'Failure to thrive means a baby is not gaining weight at the expected rate for their age',
  'It is a description of a growth pattern, not a diagnosis or a blame statement',
  'The most common cause in developed countries is inadequate caloric intake (often from feeding difficulties)',
  'Early identification and intervention lead to the best outcomes',
  'Most babies with FTT respond well to treatment and achieve catch-up growth',
];

export default function FailureToThrivePage() {
  const contentSchema = getContentPageSchema({
    name: 'Failure to Thrive in Babies: Signs, Causes, and Treatment',
    description:
      'Comprehensive guide to failure to thrive in infants including signs, causes, diagnosis, and treatment approaches.',
    path: '/growth/failure-to-thrive',
    lastModified: '2026-07-01',
    medicalGuidelines: [
      { name: 'AAP Clinical Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
      { name: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
      { name: 'CDC Growth Charts', url: 'https://www.cdc.gov/growthcharts/' },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Growth', url: '/growth' },
    { name: 'Failure to Thrive' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'Failure to Thrive' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Failure to Thrive: Signs, Causes, and Treatment
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          &ldquo;Failure to thrive&rdquo; is a term that can alarm any parent. Understanding what it actually
          means, what causes it, and how it is treated can help you navigate this diagnosis with less
          fear and more confidence in getting your baby the help they need.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'WHO', 'CDC']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What is failure to thrive?
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Failure to thrive (FTT), increasingly called &ldquo;faltering growth&rdquo; or &ldquo;weight
            faltering,&rdquo; describes inadequate physical growth in an infant or young child. It is not a
            disease itself but rather a sign that a child is not receiving or utilizing enough calories for
            normal growth. Clinically, FTT is typically identified when:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Weight is below the 3rd percentile for age on more than one occasion</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Weight-for-length falls below the 5th percentile</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Weight drops across two or more major percentile lines</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Weight gain velocity is consistently below expected rates for age</span>
            </li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-3">
            FTT affects approximately 5 to 10% of children seen in primary care settings. It most
            commonly presents in the first 2 years of life, with the highest prevalence between 6 and
            12 months of age.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Signs of failure to thrive
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Beyond the growth chart numbers, signs that may indicate FTT include:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Visible loss of subcutaneous fat (loose skin, thin arms and legs)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Decreased energy and activity level compared to peers</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Developmental delays (motor, social, or language)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Poor feeding (disinterest in food, difficulty latching or sucking, frequent refusal)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Irritability or excessive sleepiness</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Fewer wet diapers than expected (fewer than 6 per day after the first week)</span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Common causes
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">Inadequate caloric intake (most common)</h3>
              <p className="mt-1">
                Breastfeeding difficulties (poor latch, low milk supply, tongue tie), improper formula
                preparation, feeding schedule issues, oral motor dysfunction, severe reflux causing refusal
                to eat, or food insecurity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Inadequate absorption</h3>
              <p className="mt-1">
                Celiac disease, cow&apos;s milk protein allergy, cystic fibrosis, chronic diarrhea,
                inflammatory bowel conditions, or other malabsorption syndromes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Increased metabolic demands</h3>
              <p className="mt-1">
                Congenital heart disease, chronic lung disease (BPD), hyperthyroidism, chronic infections,
                or other conditions that increase caloric needs beyond what normal intake provides.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Psychosocial factors</h3>
              <p className="mt-1">
                Caregiver depression, food insecurity, neglect, or chaotic feeding environments. These
                account for a minority of cases but are important to identify.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Treatment approaches
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Treatment of FTT focuses on addressing the underlying cause while ensuring adequate caloric intake
            for catch-up growth. Common interventions include:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Feeding optimization: lactation support, correcting formula preparation, improving feeding schedule and technique</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Calorie fortification: adding calories to breast milk or formula, using higher-calorie formulas, calorie-dense foods for older infants</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Medical treatment: addressing reflux, allergies, or other underlying conditions</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Occupational or speech therapy: for oral motor difficulties or sensory feeding issues</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Frequent monitoring: weight checks every 1 to 2 weeks until catch-up growth is established</span>
            </li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Catch-up growth typically requires 1.5 to 2 times the normal caloric intake for the child&apos;s age.
            Your pediatrician or a pediatric dietitian can calculate specific calorie goals.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Long-term outlook
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            With early identification and appropriate intervention, most children with FTT achieve catch-up
            growth and have normal developmental outcomes. The earlier the intervention, the better the prognosis.
            Severe or prolonged FTT (especially during the first year when brain growth is most rapid) may be
            associated with some cognitive or behavioral effects, which is why prompt evaluation and treatment
            are important. Regular follow-up with your pediatrician after treatment ensures growth remains on track.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="Failure to thrive is a growth pattern, not a parenting verdict. It means your baby needs more calories than they are currently getting or utilizing. With proper evaluation and support, most babies with FTT recover and thrive. If your baby's growth is concerning, seeking help early gives them the best chance for catch-up growth and normal development." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
