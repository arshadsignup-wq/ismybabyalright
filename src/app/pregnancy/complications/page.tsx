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
  title: 'Pregnancy Complications',
  description:
    'Warning signs and complications during pregnancy. When to call your doctor, what symptoms are emergencies, and common pregnancy complications explained. ACOG guidance.',
  alternates: { canonical: '/pregnancy/complications' },
  openGraph: {
    title: 'Pregnancy Warning Signs & Complications | Is My Baby Alright?',
    description: 'Understanding pregnancy complications and knowing when to seek emergency care.',
  },
};

const faqItems = [
  {
    question: 'What are the most common pregnancy complications?',
    answer: 'The most common complications include gestational diabetes (2-10% of pregnancies), preeclampsia (5-8%), preterm labor (about 10%), and placenta previa (about 1 in 200). Many are manageable with early detection and proper monitoring.',
  },
  {
    question: 'Is spotting in early pregnancy normal?',
    answer: 'Light spotting in the first trimester is common and often not concerning — it may be implantation bleeding or cervical sensitivity. However, heavy bleeding, bleeding with pain, or bleeding that fills a pad should be evaluated immediately. Always report bleeding to your provider.',
  },
  {
    question: 'What does preeclampsia feel like?',
    answer: 'Preeclampsia may cause severe headaches that do not improve, vision changes (blurring, spots, light sensitivity), upper abdominal pain (especially right side), sudden swelling of face and hands, and nausea/vomiting after mid-pregnancy. Some people have elevated blood pressure with no symptoms, which is why regular prenatal visits are important.',
  },
  {
    question: 'How do I know if I am having preterm labor?',
    answer: 'Signs include regular contractions before 37 weeks (more than 4-6 per hour), pelvic pressure, low back pain (especially if rhythmic), change in vaginal discharge, or water breaking. If you suspect preterm labor, call your provider immediately — treatment can sometimes delay delivery.',
  },
  {
    question: 'When is decreased fetal movement an emergency?',
    answer: 'After 28 weeks, you should feel regular movement patterns. If you notice a significant decrease or absence of movement, do a kick count (you should feel 10 movements within 2 hours while resting). If you do not reach 10 movements, or if movement patterns change significantly, call your provider immediately.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pregnancy', url: '/pregnancy' },
  { name: 'Warning Signs & Complications' },
];

export default function PregnancyComplicationsPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Pregnancy Warning Signs & Complications',
          description: 'Understanding pregnancy complications, warning signs, and when to seek emergency care. Based on ACOG guidelines.',
          path: '/pregnancy/complications',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Pregnancy Complications', url: 'https://www.acog.org/clinical/clinical-guidance' },
            { name: 'WHO Managing Complications in Pregnancy and Childbirth', url: 'https://www.who.int/publications/i/item/9789241545587' },
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
        { label: 'Warning Signs & Complications' },
      ]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Pregnancy Warning Signs &amp; Complications</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'WHO']} />
      <p className="text-sm text-muted mb-6">
        Most pregnancies are healthy, but knowing the warning signs of complications helps you act quickly when it matters. This page covers when to call your doctor and when to go to the emergency room.
      </p>

      <KeyTakeaways
        takeaways={[
          'Call 911 or go to the ER for heavy bleeding, seizures, chest pain, or thoughts of self-harm',
          'Call your provider for fever over 100.4 degrees F, persistent headache with vision changes, or decreased fetal movement',
          'Preeclampsia affects 5-8% of pregnancies — regular prenatal visits detect it early',
          'Gestational diabetes is treatable and manageable with diet, exercise, and sometimes medication',
          'Preterm labor (before 37 weeks) may be stopped or delayed with treatment if caught early',
          'Trust your instincts — if something feels wrong, call your provider',
        ]}
      />

      <div className="space-y-6">
        <Section title="Emergency warning signs (call 911 or go to ER)">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
            <ul className="list-disc list-inside space-y-1">
              <li className="text-red-700 font-medium">Heavy vaginal bleeding (soaking a pad in an hour or less)</li>
              <li className="text-red-700 font-medium">Seizures or loss of consciousness</li>
              <li className="text-red-700 font-medium">Chest pain or difficulty breathing</li>
              <li className="text-red-700 font-medium">Severe allergic reaction</li>
              <li className="text-red-700 font-medium">Trauma to abdomen (fall, car accident)</li>
              <li className="text-red-700 font-medium">Thoughts of harming yourself or others</li>
              <li className="text-red-700 font-medium">Prolapsed umbilical cord (cord visible or felt in vagina)</li>
            </ul>
          </div>
        </Section>

        <Section title="Warning signs to call your provider today">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1">
              <li className="text-orange-700">Fever above 100.4 degrees F (38 degrees C)</li>
              <li className="text-orange-700">Severe or persistent headache with vision changes</li>
              <li className="text-orange-700">Sudden swelling of face, hands, or feet</li>
              <li className="text-orange-700">Decreased or absent fetal movement after 28 weeks</li>
              <li className="text-orange-700">Regular contractions before 37 weeks</li>
              <li className="text-orange-700">Fluid leaking from vagina (possible ruptured membranes)</li>
              <li className="text-orange-700">Persistent vomiting (cannot keep fluids down)</li>
              <li className="text-orange-700">Pain or burning with urination (UTI can cause preterm labor)</li>
              <li className="text-orange-700">Upper abdominal pain, especially right side</li>
              <li className="text-orange-700">Calf pain, swelling, or redness (possible blood clot)</li>
            </ul>
          </div>
        </Section>

        <Section title="Preeclampsia">
          <p>Preeclampsia is a serious condition involving high blood pressure and organ damage, typically developing after 20 weeks. It affects 5-8% of pregnancies.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Risk factors:</strong> First pregnancy, age over 35, obesity, chronic hypertension, diabetes, multiple pregnancy, family history</li>
            <li><strong>Symptoms:</strong> Severe headache, vision changes, upper abdominal pain, sudden swelling, nausea/vomiting, shortness of breath</li>
            <li><strong>Detection:</strong> Blood pressure and urine protein checks at every prenatal visit</li>
            <li><strong>Treatment:</strong> Close monitoring, blood pressure medication, early delivery if severe</li>
            <li><strong>Prevention:</strong> ACOG recommends low-dose aspirin (81 mg) starting at 12-16 weeks for those at high risk</li>
          </ul>
          <p className="mt-2 font-medium">HELLP syndrome is a severe form of preeclampsia involving liver and blood platelet problems. It requires immediate medical attention.</p>
        </Section>

        <Section title="Gestational diabetes">
          <p>Gestational diabetes develops during pregnancy when your body cannot make enough insulin to handle increased blood sugar. It affects 2-10% of pregnancies.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Screening:</strong> Glucose challenge test at 24-28 weeks (earlier if high risk)</li>
            <li><strong>Risk factors:</strong> Overweight, age over 25, family history of diabetes, previous GD, polycystic ovary syndrome</li>
            <li><strong>Management:</strong> Diet modifications, regular exercise, blood sugar monitoring, and sometimes insulin or oral medication</li>
            <li><strong>Risks if untreated:</strong> Macrosomia (large baby), birth complications, newborn low blood sugar, increased C-section risk</li>
            <li><strong>After delivery:</strong> Usually resolves, but increases future type 2 diabetes risk. Get tested 6-12 weeks postpartum.</li>
          </ul>
        </Section>

        <Section title="Preterm labor">
          <p>Preterm labor is regular contractions that cause cervical changes before 37 weeks. About 10% of births are preterm.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Signs:</strong> Regular contractions (more than 4-6 per hour), pelvic pressure, low back pain, change in discharge, water breaking</li>
            <li><strong>Risk factors:</strong> Previous preterm birth, short cervix, multiple pregnancy, infections, smoking, substance use</li>
            <li><strong>Treatment:</strong> Tocolytics (medications to slow contractions), steroids to mature baby's lungs, magnesium sulfate for neuroprotection</li>
            <li><strong>Prevention:</strong> Progesterone supplementation for those with history of preterm birth or short cervix</li>
          </ul>
        </Section>

        <Section title="Placental complications">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Placenta previa:</strong> Placenta covers the cervix. Causes painless bleeding, usually detected on ultrasound. May resolve on its own. Cesarean delivery if it persists.</li>
            <li><strong>Placental abruption:</strong> Placenta separates from the uterine wall before delivery. Causes vaginal bleeding, abdominal pain, contractions, and back pain. Medical emergency requiring immediate evaluation.</li>
            <li><strong>Placenta accreta:</strong> Placenta grows too deeply into the uterine wall. Detected on ultrasound. Requires careful surgical planning for delivery.</li>
          </ul>
        </Section>

        <Section title="Reducing your risk">
          <ul className="list-disc list-inside space-y-1">
            <li>Attend all prenatal appointments — many complications are caught through routine monitoring</li>
            <li>Report any unusual symptoms promptly</li>
            <li>Manage chronic conditions (diabetes, hypertension) before and during pregnancy</li>
            <li>Maintain a healthy weight and stay physically active</li>
            <li>Avoid smoking, alcohol, and recreational drugs</li>
            <li>Take prescribed supplements (folic acid, prenatal vitamin)</li>
            <li>Manage stress and get adequate rest</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Most pregnancies are healthy. But knowing warning signs means you can act quickly if something is wrong. Do not worry about bothering your provider — they would always rather hear from you than have you wait. When in doubt, call."
        supportiveMessage="Learning about complications can feel scary. Remember: awareness is empowerment, not a prediction. Most of these conditions are treatable, especially when caught early through regular prenatal care."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/pregnancy/exercise" className="text-sm text-primary font-semibold hover:underline">&larr; Exercise</Link>
        <Link href="/pregnancy" className="text-sm text-primary font-semibold hover:underline">Pregnancy Guide &rarr;</Link>
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
