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
  title: 'Postpartum Physical Recovery',
  description:
    'Week-by-week postpartum physical recovery timeline for vaginal and cesarean birth. What to expect, how to heal, and when to call your doctor. ACOG-based guidance.',
  alternates: { canonical: '/postpartum/recovery' },
  openGraph: {
    title: 'Postpartum Physical Recovery Timeline | Is My Baby Alright?',
    description: 'Week-by-week guide to physical recovery after vaginal and cesarean birth.',
  },
};

const faqItems = [
  {
    question: 'How long does postpartum bleeding last?',
    answer: 'Postpartum bleeding (lochia) typically lasts 4-6 weeks. It starts heavy and bright red, gradually becoming lighter in color and flow. If you soak more than one pad per hour, pass clots larger than a golf ball, or bleeding suddenly increases, contact your provider immediately.',
  },
  {
    question: 'When can I exercise after giving birth?',
    answer: 'ACOG says most people can resume gentle activity (walking) within days of a vaginal birth if they feel ready. For cesarean birth, wait until your incision has healed (usually 6-8 weeks) before resuming more vigorous exercise. Always get clearance at your postpartum checkup.',
  },
  {
    question: 'When can I have sex after giving birth?',
    answer: 'Most providers recommend waiting at least 4-6 weeks to allow healing of the cervix, vagina, and any tears or incisions. However, readiness is individual — physical healing, emotional readiness, and comfort all matter. Use contraception if you do not want another pregnancy, as ovulation can return before your period.',
  },
  {
    question: 'Is it normal to still look pregnant after delivery?',
    answer: 'Yes. Your uterus takes about 6 weeks to shrink back to pre-pregnancy size (involution). Abdominal muscles may be stretched or separated (diastasis recti). The postpartum body changes gradually — do not compare your timeline to others.',
  },
  {
    question: 'When does the postpartum checkup happen?',
    answer: 'ACOG recommends initial contact with your provider within the first 3 weeks postpartum, with a comprehensive visit no later than 12 weeks after birth. Many providers schedule visits at both 2 weeks and 6 weeks. Do not skip this appointment — it covers physical healing, mental health, and contraception.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Postpartum', url: '/postpartum' },
  { name: 'Physical Recovery' },
];

export default function PostpartumRecoveryPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Postpartum Physical Recovery Timeline',
          description: 'Week-by-week guide to physical recovery after vaginal and cesarean birth. Based on ACOG guidelines.',
          path: '/postpartum/recovery',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Postpartum Care', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care' },
            { name: 'WHO Postnatal Care Recommendations', url: 'https://www.who.int/publications/i/item/9789240045989' },
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
        { label: 'Physical Recovery' },
      ]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Postpartum Physical Recovery Timeline</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'WHO']} />
      <p className="text-sm text-muted mb-6">
        Your body did something extraordinary. Recovery takes time — weeks, not days. This guide covers what to expect physically after birth, whether you delivered vaginally or by cesarean section.
      </p>

      <KeyTakeaways
        takeaways={[
          'Full physical recovery takes 6-12 months, not the commonly cited 6 weeks',
          'Postpartum bleeding (lochia) typically lasts 4-6 weeks and gradually lightens',
          'C-section recovery requires extra time — avoid lifting anything heavier than your baby for 6-8 weeks',
          'Pelvic floor exercises (Kegels) can begin within days of vaginal birth when comfortable',
          'Do not skip your postpartum checkup — ACOG recommends evaluation within 12 weeks',
          'Call your doctor for fever over 100.4 degrees F, heavy bleeding, or signs of infection',
        ]}
      />

      <div className="space-y-6">
        <Section title="Week 1: The first days">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Bleeding:</strong> Heavy, bright red bleeding (lochia rubra). Use pads, not tampons.</li>
            <li><strong>Afterpains:</strong> Uterine cramping as the uterus contracts back to size. Often stronger with breastfeeding. OTC pain relief helps.</li>
            <li><strong>Perineal soreness:</strong> Ice packs, sitz baths, witch hazel pads. Use a peri bottle when urinating.</li>
            <li><strong>Engorgement:</strong> Breasts may become full and tender around day 3-5 as milk comes in.</li>
            <li><strong>Fatigue:</strong> Profound exhaustion is normal. Sleep when baby sleeps. Accept all help offered.</li>
            <li><strong>Sweating:</strong> Night sweats are common as your body sheds excess fluid.</li>
            <li><strong>Constipation:</strong> Common due to hormones, dehydration, and fear of straining. Stool softeners help.</li>
          </ul>
        </Section>

        <Section title="Weeks 2-3: Beginning to stabilize">
          <ul className="list-disc list-inside space-y-1">
            <li>Bleeding transitions to lochia serosa (pinkish-brown) and decreases</li>
            <li>Perineal stitches begin to dissolve (do not pull them)</li>
            <li>Afterpains typically decrease by the end of week 2</li>
            <li>Breast engorgement stabilizes as supply regulates</li>
            <li>Energy may slightly improve but exhaustion remains normal</li>
            <li>Gentle walking is beneficial when you feel ready</li>
          </ul>
        </Section>

        <Section title="Weeks 4-6: Gradual healing">
          <ul className="list-disc list-inside space-y-1">
            <li>Bleeding becomes lochia alba (whitish/yellowish) and tapers off</li>
            <li>Perineal tears or episiotomy should be mostly healed</li>
            <li>Your uterus returns to approximately pre-pregnancy size</li>
            <li>6-week postpartum checkup — discuss physical healing, contraception, mental health, and exercise clearance</li>
            <li>Energy slowly improves though sleep deprivation continues</li>
            <li>Core and pelvic floor exercises can typically begin (ask your provider)</li>
          </ul>
        </Section>

        <Section title="Months 2-6: Continued recovery">
          <ul className="list-disc list-inside space-y-1">
            <li>Hair shedding (telogen effluvium) typically peaks around month 3-4</li>
            <li>Hormones continue to stabilize, especially if breastfeeding</li>
            <li>Core strength gradually returns with appropriate exercises</li>
            <li>Return of menstruation varies — may take months if breastfeeding exclusively</li>
            <li>Skin changes (linea nigra, melasma) gradually fade</li>
            <li>Joint laxity from relaxin hormone slowly resolves</li>
          </ul>
        </Section>

        <Section title="C-section recovery specifics">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Hospital stay:</strong> 2-4 days typically. Walking soon after surgery aids recovery.</li>
            <li><strong>Incision care:</strong> Keep clean and dry. Watch for redness, swelling, discharge, or separation.</li>
            <li><strong>Lifting:</strong> Avoid anything heavier than your baby for 6-8 weeks.</li>
            <li><strong>Driving:</strong> Usually not recommended for 2-4 weeks (must be able to brake suddenly without pain).</li>
            <li><strong>Pain management:</strong> Take prescribed pain medication as directed. Pain should improve daily.</li>
            <li><strong>Numbness:</strong> Numbness around the incision is normal and may persist for months or permanently.</li>
            <li><strong>Activity:</strong> Gradually increase. No strenuous exercise until cleared at 6-8 week checkup.</li>
          </ul>
        </Section>

        <Section title="Pelvic floor recovery">
          <ul className="list-disc list-inside space-y-1">
            <li>Pelvic floor weakness is common after both vaginal and cesarean births</li>
            <li>Urinary leaking (stress incontinence) affects up to 1 in 3 postpartum people</li>
            <li>Kegel exercises can begin within days of vaginal birth when comfortable</li>
            <li>Focus on both contracting and fully relaxing the pelvic floor muscles</li>
            <li>A pelvic floor physiotherapist can assess and guide recovery</li>
            <li>Persistent symptoms beyond 3-6 months warrant professional evaluation</li>
            <li>Pessaries or surgical options exist for severe prolapse that does not respond to therapy</li>
          </ul>
        </Section>

        <Section title="When to call your doctor">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1">
              <li className="text-orange-700">Fever over 100.4 degrees F (38 degrees C)</li>
              <li className="text-orange-700">Heavy bleeding (soaking more than one pad per hour)</li>
              <li className="text-orange-700">Foul-smelling discharge</li>
              <li className="text-orange-700">Redness, warmth, or discharge from incision or stitches</li>
              <li className="text-orange-700">Chest pain or difficulty breathing</li>
              <li className="text-orange-700">Severe headache that does not improve</li>
              <li className="text-orange-700">Calf pain, redness, or swelling (possible blood clot)</li>
              <li className="text-orange-700">Inability to urinate or pass stool</li>
              <li className="text-orange-700">Bleeding that had stopped and suddenly returns heavy</li>
            </ul>
          </div>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Recovery after birth is a marathon, not a sprint. The '6-week recovery' timeline is a myth for many people — true healing takes 6-12 months. Be patient with your body, accept help, and attend your postpartum checkup."
        supportiveMessage="Your body grew and delivered a human being. Give it grace. Every recovery is different, and comparing yourself to others helps no one. Slow progress is still progress."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/postpartum" className="text-sm text-primary font-semibold hover:underline">&larr; Postpartum Guide</Link>
        <Link href="/postpartum/warning-signs" className="text-sm text-primary font-semibold hover:underline">Warning Signs &rarr;</Link>
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
