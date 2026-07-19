import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Guide to Prenatal Tests',
  description:
    'Understanding prenatal tests and screenings during pregnancy. What each test checks for, when it happens, and what results mean. Based on ACOG guidelines.',
  alternates: { canonical: '/pregnancy/prenatal-tests' },
  openGraph: {
    title: 'Guide to Prenatal Tests | Is My Baby Alright?',
    description: 'Understanding routine screenings and diagnostic tests throughout pregnancy.',
  },
};

const faqItems = [
  {
    question: 'What is the difference between a screening and a diagnostic test?',
    answer: 'A screening test estimates your risk level but cannot confirm a diagnosis. A diagnostic test (like amniocentesis or CVS) can confirm or rule out a condition with high accuracy but carries a small risk of complications.',
  },
  {
    question: 'Is NIPT (non-invasive prenatal testing) accurate?',
    answer: 'NIPT has a detection rate above 99% for Down syndrome (trisomy 21) and high accuracy for trisomies 18 and 13. However, it is still a screening test — a positive result should be confirmed with diagnostic testing. False positives are possible, especially for rarer conditions.',
  },
  {
    question: 'Do I have to have all prenatal tests?',
    answer: 'Prenatal testing is your choice. Your provider should explain what each test checks for and help you make informed decisions. Some parents want all available information; others prefer only routine tests. There is no wrong decision.',
  },
  {
    question: 'What does the glucose test involve?',
    answer: 'The 1-hour glucose challenge test involves drinking a sugary solution and having your blood drawn one hour later. If results are elevated, you will take a 3-hour glucose tolerance test to confirm gestational diabetes. The test is done between weeks 24-28.',
  },
  {
    question: 'Will prenatal tests hurt?',
    answer: 'Most prenatal tests are simple blood draws or ultrasounds and are not painful. Amniocentesis and CVS involve a needle and may cause brief cramping or discomfort but are performed with ultrasound guidance and local anesthesia.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pregnancy', url: '/pregnancy' },
  { name: 'Prenatal Tests' },
];

export default function PrenatalTestsPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Guide to Prenatal Tests',
          description: 'Understanding prenatal tests and screenings during pregnancy, including what each test checks for and when it happens.',
          path: '/pregnancy/prenatal-tests',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Prenatal Testing Guidelines', url: 'https://www.acog.org/clinical/clinical-guidance' },
            { name: 'AAP Prenatal Screening Recommendations', url: 'https://www.aap.org/en/clinical-guidance/' },
          ],
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />

      <Breadcrumbs items={[
        { label: 'Pregnancy', href: '/pregnancy' },
        { label: 'Prenatal Tests' },
      ]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Guide to Prenatal Tests</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'AAP']} />
      <p className="text-sm text-muted mb-6">
        Prenatal tests help monitor your health and your baby's development throughout pregnancy. This guide explains what each test checks for, when it happens, and what results mean.
      </p>

      <KeyTakeaways
        takeaways={[
          'Screening tests estimate risk; diagnostic tests confirm or rule out conditions',
          'NIPT (cell-free DNA screening) can be done as early as 10 weeks',
          'The anatomy scan at 18-22 weeks checks baby\'s physical development in detail',
          'Glucose screening for gestational diabetes happens at 24-28 weeks',
          'Group B strep testing at 36-37 weeks determines if antibiotics are needed during labor',
          'All prenatal testing is optional — your provider should help you make informed choices',
        ]}
      />

      <div className="space-y-6">
        <Section title="First trimester tests (weeks 1-12)">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Initial blood work:</strong> Blood type, Rh factor, complete blood count, immunity to rubella and chickenpox, STI screening, hepatitis B</li>
            <li><strong>Urine tests:</strong> Protein, glucose, and bacteria (repeated at each visit)</li>
            <li><strong>Dating ultrasound (6-10 weeks):</strong> Confirms pregnancy viability, estimates gestational age, detects multiples</li>
            <li><strong>NIPT/cell-free DNA (10+ weeks):</strong> Blood test screening for chromosomal conditions (trisomy 21, 18, 13) and sex determination. Optional.</li>
            <li><strong>Nuchal translucency scan (11-13 weeks):</strong> Ultrasound measuring fluid at back of baby's neck, combined with blood markers for risk assessment</li>
            <li><strong>CVS (10-13 weeks):</strong> Diagnostic test for chromosomal abnormalities. Offered if screening suggests elevated risk or for advanced maternal age. Small risk of miscarriage (about 1 in 500).</li>
          </ul>
        </Section>

        <Section title="Second trimester tests (weeks 13-26)">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Quad screen (15-22 weeks):</strong> Blood test measuring four markers to screen for Down syndrome, trisomy 18, and neural tube defects</li>
            <li><strong>Amniocentesis (15-20 weeks):</strong> Diagnostic test using amniotic fluid to detect chromosomal abnormalities. Offered if screening shows elevated risk. Small risk of miscarriage (about 1 in 600-1000).</li>
            <li><strong>Anatomy scan (18-22 weeks):</strong> Detailed ultrasound examining baby's brain, heart, spine, limbs, organs, and placenta. Also checks amniotic fluid levels.</li>
            <li><strong>Glucose challenge test (24-28 weeks):</strong> Screens for gestational diabetes. Drink a glucose solution, blood drawn after 1 hour.</li>
          </ul>
        </Section>

        <Section title="Third trimester tests (weeks 27-40)">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Glucose tolerance test (if needed):</strong> 3-hour follow-up test if 1-hour screening was elevated. Confirms or rules out gestational diabetes.</li>
            <li><strong>Complete blood count (28 weeks):</strong> Checks for anemia, which is common in the third trimester</li>
            <li><strong>Rh antibody screen (28 weeks):</strong> For Rh-negative mothers. RhoGAM injection given if needed.</li>
            <li><strong>Group B strep test (36-37 weeks):</strong> Vaginal/rectal swab. If positive, IV antibiotics during labor protect baby from infection.</li>
            <li><strong>Non-stress test (as needed):</strong> Monitors baby's heart rate and movement. Used for high-risk pregnancies or post-due-date monitoring.</li>
            <li><strong>Biophysical profile (as needed):</strong> Combines non-stress test with ultrasound to assess baby's wellbeing.</li>
          </ul>
        </Section>

        <Section title="Understanding your results">
          <ul className="list-disc list-inside space-y-1">
            <li>A positive screening does not mean something is wrong — it means further testing may be recommended</li>
            <li>False positives are common with screening tests, especially NIPT for rare conditions</li>
            <li>Ask your provider to explain results in context — numbers alone can be misleading</li>
            <li>Genetic counseling is available to help you understand results and options</li>
            <li>You always have the right to decline further testing if you choose</li>
          </ul>
        </Section>

        <Section title="Questions to ask your provider">
          <ul className="list-disc list-inside space-y-1">
            <li>What does this test screen for?</li>
            <li>What happens if the result is positive?</li>
            <li>What are the risks of this test?</li>
            <li>Is this test optional or recommended?</li>
            <li>How accurate is this test?</li>
            <li>When will I get results?</li>
            <li>Would genetic counseling be helpful for my situation?</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Prenatal testing is a tool for information, not a source of anxiety. Not every test is right for every family. Your provider can help you decide which tests make sense for your situation and support you through the results."
        supportiveMessage="It is natural to feel anxious about test results. Remember that most pregnancies are healthy, and that screening tests often have false positives. Your care team is there to help you navigate this."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/pregnancy/birth-plan" className="text-sm text-primary font-semibold hover:underline">&larr; Birth Plan</Link>
        <Link href="/pregnancy/nutrition" className="text-sm text-primary font-semibold hover:underline">Nutrition &rarr;</Link>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-[#E8E2D9] bg-white p-5">
      <h2 className="text-base font-bold text-foreground mb-2">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
