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
  title: 'Signs of Labor',
  description:
    'Learn to recognize the signs of labor including contractions, water breaking, and when to go to the hospital. Evidence-based guidance from ACOG.',
  alternates: { canonical: '/pregnancy/labor-signs' },
  openGraph: {
    title: 'Signs of Labor | Is My Baby Alright?',
    description: 'How to recognize true labor vs. false alarms and when to head to the hospital.',
  },
};

const faqItems = [
  {
    question: 'How do I know if contractions are real labor?',
    answer: 'Real labor contractions are regular, get progressively stronger and closer together, and do not stop with rest or position changes. Time them for at least an hour. The 5-1-1 rule (contractions 5 minutes apart, lasting 1 minute, for at least 1 hour) is a common guideline for when to call your provider.',
  },
  {
    question: 'What does it feel like when your water breaks?',
    answer: 'It may feel like a sudden gush of fluid or a slow, steady trickle that you cannot control. The fluid is usually clear or slightly pink. If you are unsure, put on a pad — amniotic fluid will continue to leak, while urine will not.',
  },
  {
    question: 'Can labor start without contractions?',
    answer: 'Yes. Sometimes the first sign of labor is your water breaking (premature rupture of membranes) without contractions. If this happens, contact your provider immediately as most will recommend delivery within 24 hours to reduce infection risk.',
  },
  {
    question: 'What is a bloody show?',
    answer: 'A bloody show is the passage of the mucus plug that sealed the cervix during pregnancy. It appears as pink, brown, or blood-tinged mucus. It can occur days or hours before labor begins and indicates your cervix is dilating.',
  },
  {
    question: 'Should I go to the hospital with Braxton Hicks?',
    answer: 'Braxton Hicks contractions are irregular practice contractions that usually do not require a hospital visit. However, if you are less than 37 weeks pregnant and having regular contractions, or if you are unsure whether contractions are real, call your provider.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pregnancy', url: '/pregnancy' },
  { name: 'Signs of Labor' },
];

export default function LaborSignsPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Signs of Labor',
          description: 'How to recognize true labor contractions, water breaking, and other signs that delivery is approaching.',
          path: '/pregnancy/labor-signs',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Labor and Delivery Guidelines', url: 'https://www.acog.org/clinical/clinical-guidance' },
            { name: 'WHO Recommendations on Intrapartum Care', url: 'https://www.who.int/publications/i/item/9789241550215' },
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
        { label: 'Signs of Labor' },
      ]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Signs of Labor: How to Know It Is Time</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'WHO']} />
      <p className="text-sm text-muted mb-6">
        As your due date approaches, knowing the difference between true labor and false alarms can help you feel prepared. Here is what to look for, based on ACOG guidelines.
      </p>

      <KeyTakeaways
        takeaways={[
          'True labor contractions are regular, get stronger over time, and do not stop with rest',
          'The 5-1-1 rule: contractions 5 minutes apart, lasting 1 minute, for 1 hour — time to call your provider',
          'Water breaking may be a gush or a slow trickle — note the time and call your provider',
          'Bloody show (mucus plug) can precede labor by hours or days',
          'Braxton Hicks contractions are irregular and stop with movement or rest',
          'Go to the hospital immediately for heavy bleeding, decreased fetal movement, or water breaking before 37 weeks',
        ]}
      />

      <div className="space-y-6">
        <Section title="Early signs that labor is approaching">
          <p>These signs may appear days or weeks before active labor begins:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Lightening (baby drops):</strong> Baby moves lower into the pelvis, relieving pressure on the diaphragm but increasing pelvic pressure</li>
            <li><strong>Increased Braxton Hicks:</strong> More frequent irregular contractions as your body prepares</li>
            <li><strong>Mucus plug/bloody show:</strong> Thick, pink-tinged mucus discharge as the cervix begins to dilate</li>
            <li><strong>Nesting urge:</strong> A sudden burst of energy and desire to organize and clean</li>
            <li><strong>Loose stools:</strong> Hormonal changes can cause diarrhea in the days before labor</li>
            <li><strong>Back pain:</strong> Persistent low back pain that may come and go</li>
          </ul>
        </Section>

        <Section title="True labor vs. Braxton Hicks contractions">
          <p>Understanding the difference is key to knowing when it is time:</p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm border border-[#E8E2D9] rounded-lg">
              <thead>
                <tr className="bg-card-alt">
                  <th className="text-left p-3 font-semibold"></th>
                  <th className="text-left p-3 font-semibold">True Labor</th>
                  <th className="text-left p-3 font-semibold">Braxton Hicks</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#E8E2D9]">
                  <td className="p-3 font-medium">Pattern</td>
                  <td className="p-3">Regular, predictable intervals</td>
                  <td className="p-3">Irregular, unpredictable</td>
                </tr>
                <tr className="border-t border-[#E8E2D9]">
                  <td className="p-3 font-medium">Progression</td>
                  <td className="p-3">Gets stronger and closer together</td>
                  <td className="p-3">Does not get stronger over time</td>
                </tr>
                <tr className="border-t border-[#E8E2D9]">
                  <td className="p-3 font-medium">Location</td>
                  <td className="p-3">Starts in back, radiates to front</td>
                  <td className="p-3">Usually felt only in front</td>
                </tr>
                <tr className="border-t border-[#E8E2D9]">
                  <td className="p-3 font-medium">Activity</td>
                  <td className="p-3">Continues regardless of activity</td>
                  <td className="p-3">Stops with rest or position change</td>
                </tr>
                <tr className="border-t border-[#E8E2D9]">
                  <td className="p-3 font-medium">Intensity</td>
                  <td className="p-3">Progressively more intense</td>
                  <td className="p-3">Mild, stays the same</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="When your water breaks">
          <ul className="list-disc list-inside space-y-1">
            <li>Amniotic fluid is usually clear, odorless, or slightly sweet-smelling</li>
            <li>It may be a sudden gush or a slow, continuous trickle</li>
            <li>Note the time, color, and odor of the fluid</li>
            <li>Call your provider immediately — most recommend delivery within 12-24 hours</li>
            <li>Do not put anything in the vagina after your water breaks (no baths, no intercourse)</li>
            <li>Green or brown-tinged fluid may indicate meconium — seek immediate evaluation</li>
          </ul>
        </Section>

        <Section title="The 5-1-1 rule: when to go to the hospital">
          <p>A common guideline for first-time parents:</p>
          <div className="mt-3 rounded-xl bg-primary-light border border-primary/20 p-4">
            <ul className="space-y-2">
              <li className="text-sm"><strong>5:</strong> Contractions are 5 minutes apart (measured start to start)</li>
              <li className="text-sm"><strong>1:</strong> Each contraction lasts at least 1 minute</li>
              <li className="text-sm"><strong>1:</strong> This pattern has continued for at least 1 hour</li>
            </ul>
          </div>
          <p className="mt-3">Your provider may give you different guidelines based on your specific situation, distance from the hospital, or pregnancy history.</p>
        </Section>

        <Section title="When to call your provider immediately">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1">
              <li className="text-orange-700">Heavy vaginal bleeding (more than spotting)</li>
              <li className="text-orange-700">Water breaks before 37 weeks (preterm)</li>
              <li className="text-orange-700">Green or brown-tinged amniotic fluid</li>
              <li className="text-orange-700">Decreased fetal movement</li>
              <li className="text-orange-700">Severe headache with vision changes</li>
              <li className="text-orange-700">Constant, severe abdominal pain (not coming and going)</li>
              <li className="text-orange-700">Fever above 100.4 degrees F (38 degrees C)</li>
            </ul>
          </div>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Every labor is different. Trust your instincts — if something does not feel right, call your provider. It is always better to be checked and reassured than to wait too long."
        supportiveMessage="You know your body. If you are unsure whether you are in labor, your provider would rather hear from you than have you wait. That is what they are there for."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/pregnancy" className="text-sm text-primary font-semibold hover:underline">&larr; Pregnancy Guide</Link>
        <Link href="/pregnancy/birth-plan" className="text-sm text-primary font-semibold hover:underline">Birth Plan &rarr;</Link>
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
