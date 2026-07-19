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
  title: 'Postpartum Warning Signs',
  description:
    'Postpartum warning signs that need medical attention. When to call your doctor and when to go to the ER after giving birth. ACOG-based emergency guidance.',
  alternates: { canonical: '/postpartum/warning-signs' },
  openGraph: {
    title: 'Postpartum Warning Signs | Is My Baby Alright?',
    description: 'Know when to call your doctor and when to go to the ER after giving birth.',
  },
};

const faqItems = [
  {
    question: 'How much bleeding is too much after birth?',
    answer: 'Soaking more than one maxi pad per hour for two or more hours is too much. Also concerning: passing blood clots larger than a golf ball, bleeding that had slowed down and suddenly becomes heavy again, or feeling dizzy/lightheaded from blood loss. Call your provider or go to the ER.',
  },
  {
    question: 'What does a postpartum blood clot in the leg feel like?',
    answer: 'Deep vein thrombosis (DVT) typically causes pain, swelling, warmth, and redness in one calf or leg. The leg may feel heavy or tender to touch. Postpartum people are at higher risk for blood clots for 6-12 weeks after delivery. This is a medical emergency that requires immediate evaluation.',
  },
  {
    question: 'Is a fever normal after giving birth?',
    answer: 'A temperature above 100.4 degrees F (38 degrees C) after the first 24 hours postpartum is not normal and may indicate infection (endometritis, wound infection, mastitis, UTI). Contact your provider the same day. A brief low-grade fever in the first 24 hours may be related to dehydration or milk coming in.',
  },
  {
    question: 'When should I worry about headaches after delivery?',
    answer: 'Severe headaches that do not improve with rest and hydration, especially with vision changes, may indicate postpartum preeclampsia (which can develop up to 6 weeks after delivery). Severe positional headaches (worse when sitting up) after an epidural may indicate a spinal headache. Both require medical evaluation.',
  },
  {
    question: 'How do I know if my C-section incision is infected?',
    answer: 'Signs of infection include increasing redness, warmth, or swelling around the incision, pus or foul-smelling drainage, fever over 100.4 degrees F, or the incision separating. Some redness immediately adjacent to the incision is normal during healing, but spreading redness or any drainage should be evaluated.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Postpartum', url: '/postpartum' },
  { name: 'Warning Signs' },
];

export default function PostpartumWarningSignsPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Postpartum Warning Signs',
          description: 'When to call your doctor and when to go to the ER after giving birth. Evidence-based emergency guidance.',
          path: '/postpartum/warning-signs',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Postpartum Warning Signs', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care' },
            { name: 'WHO Postnatal Care Recommendations', url: 'https://www.who.int/publications/i/item/9789240045989' },
            { name: 'CDC Urgent Maternal Warning Signs', url: 'https://www.cdc.gov/hearher/maternal-warning-signs/' },
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
        { label: 'Postpartum', href: '/postpartum' },
        { label: 'Warning Signs' },
      ]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Postpartum Warning Signs: When to Get Help</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'CDC', 'WHO']} />
      <p className="text-sm text-muted mb-6">
        Most postpartum discomforts are normal, but some symptoms require immediate medical attention. Knowing the difference can save your life. This guide is based on ACOG and CDC urgent maternal warning signs.
      </p>

      <KeyTakeaways
        takeaways={[
          'Call 911 for chest pain, seizures, difficulty breathing, or thoughts of harming yourself/baby',
          'Fever over 100.4 degrees F after the first 24 hours may indicate infection',
          'Soaking more than one pad per hour is a postpartum hemorrhage — seek emergency care',
          'Postpartum preeclampsia can develop up to 6 weeks after delivery',
          'Blood clot risk is elevated for 6-12 weeks postpartum — leg pain/swelling needs immediate evaluation',
          'Trust your instincts — if something feels wrong, it is always okay to seek help',
        ]}
      />

      <div className="space-y-6">
        <Section title="Call 911 or go to the ER immediately">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
            <p className="font-semibold text-red-800 mb-2">These are medical emergencies:</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-red-700 font-medium">Chest pain or pressure</li>
              <li className="text-red-700 font-medium">Difficulty breathing or shortness of breath</li>
              <li className="text-red-700 font-medium">Seizures</li>
              <li className="text-red-700 font-medium">Heavy bleeding (soaking a pad in less than 1 hour)</li>
              <li className="text-red-700 font-medium">Sudden, severe headache or vision changes</li>
              <li className="text-red-700 font-medium">Thoughts of hurting yourself or your baby</li>
              <li className="text-red-700 font-medium">Loss of consciousness or confusion</li>
              <li className="text-red-700 font-medium">Severe allergic reaction (swelling of face/throat)</li>
              <li className="text-red-700 font-medium">Leg pain with swelling and redness (blood clot)</li>
            </ul>
          </div>
        </Section>

        <Section title="Call your provider today (same day)">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1">
              <li className="text-orange-700">Fever above 100.4 degrees F (38 degrees C)</li>
              <li className="text-orange-700">Foul-smelling vaginal discharge</li>
              <li className="text-orange-700">Redness, warmth, pus, or opening of incision/stitches</li>
              <li className="text-orange-700">Severe or worsening abdominal pain</li>
              <li className="text-orange-700">Inability to urinate or burning with urination</li>
              <li className="text-orange-700">Breast that is hot, red, and painful (possible mastitis)</li>
              <li className="text-orange-700">Bleeding that had decreased and suddenly returns heavy</li>
              <li className="text-orange-700">Persistent vomiting or diarrhea (risk of dehydration)</li>
              <li className="text-orange-700">Feelings of overwhelming sadness, anxiety, or anger lasting more than 2 weeks</li>
              <li className="text-orange-700">Inability to sleep even when baby is sleeping</li>
            </ul>
          </div>
        </Section>

        <Section title="Postpartum hemorrhage">
          <p>Postpartum hemorrhage is the leading cause of maternal death worldwide. Know the signs:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Soaking more than one maxi pad per hour for 2 or more consecutive hours</li>
            <li>Passing blood clots larger than a golf ball</li>
            <li>Feeling dizzy, lightheaded, or like you might faint</li>
            <li>Heart racing (tachycardia)</li>
            <li>Bleeding that had slowed and suddenly becomes heavy again</li>
          </ul>
          <p className="mt-2 font-medium">If you experience these symptoms, do not wait — go to the emergency room immediately.</p>
        </Section>

        <Section title="Postpartum preeclampsia">
          <p>Preeclampsia can develop up to 6 weeks after delivery, even if you had normal blood pressure during pregnancy.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Symptoms:</strong> Severe headache that does not improve, vision changes (blurring, spots, sensitivity to light), upper abdominal pain (especially right side), sudden swelling of face and hands</li>
            <li><strong>Risk factors:</strong> Preeclampsia during pregnancy, chronic hypertension, obesity, multiple pregnancy</li>
            <li><strong>Action:</strong> If you have a severe headache with any other symptom, go to the ER. Blood pressure above 160/110 is a medical emergency.</li>
          </ul>
        </Section>

        <Section title="Infection signs">
          <p>Postpartum infections can develop in the uterus (endometritis), incision/wound, urinary tract, or breasts:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Endometritis:</strong> Fever, foul-smelling discharge, lower abdominal tenderness. More common after C-section.</li>
            <li><strong>Wound infection:</strong> Increasing redness, warmth, swelling, pus, or wound separation</li>
            <li><strong>UTI:</strong> Burning or frequency with urination, fever, flank pain</li>
            <li><strong>Mastitis:</strong> Red, hot, painful breast area, fever, flu-like symptoms. Usually occurs after week 2.</li>
          </ul>
        </Section>

        <Section title="Blood clots (deep vein thrombosis)">
          <p>Postpartum people are at significantly elevated risk for blood clots for 6-12 weeks after delivery.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>DVT signs:</strong> Pain, swelling, warmth, or redness in one leg (usually the calf)</li>
            <li><strong>Pulmonary embolism signs:</strong> Sudden shortness of breath, chest pain, rapid heartbeat, coughing up blood</li>
            <li><strong>Prevention:</strong> Move and walk as soon as possible after delivery, stay hydrated, wear compression stockings if recommended</li>
            <li><strong>Action:</strong> Any leg symptoms or breathing difficulty require immediate emergency evaluation</li>
          </ul>
        </Section>

        <Section title="Mental health emergencies">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
            <p className="font-semibold text-red-800 mb-2">Seek immediate help if you experience:</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-red-700">Thoughts of harming yourself or your baby</li>
              <li className="text-red-700">Hearing or seeing things that are not there</li>
              <li className="text-red-700">Feeling detached from reality</li>
              <li className="text-red-700">Severe insomnia (not sleeping at all for days)</li>
              <li className="text-red-700">Rapid mood swings, confusion, or bizarre behavior</li>
            </ul>
            <p className="mt-3 text-sm text-red-800">
              <strong>Crisis resources:</strong> Postpartum Support International: 1-800-944-4773 | 988 Suicide & Crisis Lifeline: call or text 988
            </p>
          </div>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Do not dismiss concerning symptoms as 'normal new parent stuff.' Postpartum complications are real and treatable — but only if you seek help. You deserve the same level of medical attention as your baby."
        supportiveMessage="Advocating for yourself is not being dramatic. If something feels wrong, speak up. Healthcare providers would always rather evaluate you and find nothing than have you suffer in silence. You matter."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/postpartum/recovery" className="text-sm text-primary font-semibold hover:underline">&larr; Physical Recovery</Link>
        <Link href="/postpartum/mental-health" className="text-sm text-primary font-semibold hover:underline">Mental Health &rarr;</Link>
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
