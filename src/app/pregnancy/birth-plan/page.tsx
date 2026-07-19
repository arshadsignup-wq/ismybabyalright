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
  title: 'Creating a Birth Plan',
  description:
    'How to create a flexible birth plan that communicates your preferences for labor, delivery, and postpartum care. ACOG-based guidance for expectant parents.',
  alternates: { canonical: '/pregnancy/birth-plan' },
  openGraph: {
    title: 'Creating a Birth Plan | Is My Baby Alright?',
    description: 'A flexible framework for communicating your labor and delivery preferences.',
  },
};

const faqItems = [
  {
    question: 'When should I write my birth plan?',
    answer: 'Most providers recommend discussing your birth plan around weeks 32-36. This gives you time to research options, discuss with your provider, and make any changes before your due date.',
  },
  {
    question: 'Will my birth plan be followed exactly?',
    answer: 'A birth plan is a communication tool, not a contract. Medical situations may require changes for your safety or your baby\'s safety. The goal is to ensure your care team knows your preferences while remaining flexible.',
  },
  {
    question: 'Do I need a birth plan for a C-section?',
    answer: 'Yes. You can still have preferences for a cesarean birth, including music in the operating room, skin-to-skin contact immediately after birth (if possible), who cuts the cord, and who is present in the room.',
  },
  {
    question: 'What if my partner and I disagree on the birth plan?',
    answer: 'Discuss your preferences openly and early. Consider what matters most to each of you. Your provider can help mediate by explaining the evidence behind different options. Ultimately, the birthing person\'s preferences take priority for their own body.',
  },
  {
    question: 'Should I bring copies of my birth plan to the hospital?',
    answer: 'Yes. Bring 3-4 copies: one for your chart, one for the nursing station, one for your support person, and a spare. Keep it to one page for easy reference during the busy labor period.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pregnancy', url: '/pregnancy' },
  { name: 'Creating a Birth Plan' },
];

export default function BirthPlanPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Creating a Birth Plan',
          description: 'How to create a flexible birth plan that communicates your preferences for labor, delivery, and postpartum care.',
          path: '/pregnancy/birth-plan',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Committee Opinion on Approaches to Limit Intervention During Labor', url: 'https://www.acog.org/clinical/clinical-guidance' },
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
        { label: 'Creating a Birth Plan' },
      ]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Creating a Birth Plan</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'WHO']} />
      <p className="text-sm text-muted mb-6">
        A birth plan is a communication tool that helps your care team understand your preferences for labor, delivery, and immediate postpartum care. Think of it as a flexible guide, not a rigid script.
      </p>

      <KeyTakeaways
        takeaways={[
          'A birth plan is a communication tool — it helps your care team understand your preferences',
          'Keep it flexible — medical situations may require adjustments for safety',
          'Discuss your plan with your provider around weeks 32-36',
          'Keep it to one page and bring multiple copies',
          'Include preferences for labor, delivery, and immediate postpartum care',
          'A birth plan applies to all delivery types including cesarean birth',
        ]}
      />

      <div className="space-y-6">
        <Section title="What to include in your birth plan">
          <p>Consider your preferences in these key areas:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Environment:</strong> Lighting, music, who you want present, photography/video preferences</li>
            <li><strong>Labor support:</strong> Movement during labor, use of a birthing ball, water immersion, positions</li>
            <li><strong>Pain management:</strong> Epidural, IV medications, natural techniques (breathing, massage, hydrotherapy)</li>
            <li><strong>Interventions:</strong> IV fluids, continuous vs. intermittent monitoring, episiotomy preferences</li>
            <li><strong>Delivery:</strong> Pushing positions, who catches the baby, delayed cord clamping</li>
            <li><strong>Immediate postpartum:</strong> Skin-to-skin contact, breastfeeding initiation, newborn procedures timing</li>
            <li><strong>Newborn care:</strong> Vitamin K, eye ointment, hepatitis B vaccine, circumcision</li>
            <li><strong>Feeding:</strong> Breastfeeding, formula, or combination — and whether you want lactation support</li>
          </ul>
        </Section>

        <Section title="Pain management options">
          <p>ACOG supports a range of pain management approaches. Options include:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Epidural anesthesia:</strong> Most effective pain relief, allows you to rest. Can slow labor slightly in some cases</li>
            <li><strong>IV pain medications:</strong> Short-acting relief that can be given earlier in labor</li>
            <li><strong>Nitrous oxide:</strong> Self-administered inhaled gas that takes the edge off (available at some facilities)</li>
            <li><strong>Non-pharmacological:</strong> Breathing techniques, massage, position changes, hydrotherapy, TENS unit</li>
            <li><strong>Combined approach:</strong> Many people use natural techniques early and epidural as labor progresses</li>
          </ul>
          <p className="mt-2">There is no wrong choice. You can always change your mind during labor.</p>
        </Section>

        <Section title="Questions to discuss with your provider">
          <ul className="list-disc list-inside space-y-1">
            <li>What is your practice's cesarean rate?</li>
            <li>What are your policies on eating and drinking during labor?</li>
            <li>Do you support delayed cord clamping?</li>
            <li>Who will attend the delivery if you are unavailable?</li>
            <li>What is your approach to labor induction?</li>
            <li>Can I move freely during labor if I have an epidural?</li>
            <li>What are the options if I need a cesarean birth?</li>
            <li>Do you support immediate skin-to-skin after cesarean?</li>
          </ul>
        </Section>

        <Section title="Birth plan for cesarean delivery">
          <p>If you know you will have a cesarean or want to be prepared for one:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Can your support person be present in the operating room?</li>
            <li>Can the drape be lowered so you can see the delivery?</li>
            <li>Is immediate skin-to-skin possible in the OR?</li>
            <li>Can delayed cord clamping still be done?</li>
            <li>Music or specific environment preferences in the OR</li>
            <li>Who announces the sex if not yet known?</li>
            <li>Breastfeeding initiation in recovery</li>
          </ul>
        </Section>

        <Section title="Tips for a successful birth plan">
          <ul className="list-disc list-inside space-y-1">
            <li>Keep it to one page — your care team will be busy</li>
            <li>Use positive language (what you want, not just what you do not want)</li>
            <li>Discuss it with your provider well before your due date</li>
            <li>Share it with your support person so they can advocate for you</li>
            <li>Include a note that you understand plans may need to change for safety</li>
            <li>Prioritize — what matters most to you if choices need to be made?</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="A birth plan is about communication, not control. It helps your care team honor your preferences while keeping you and your baby safe. The best birth plan is one that is flexible and discussed with your provider ahead of time."
        supportiveMessage="However your baby arrives — that is your birth story, and it is valid. Plans may change, and that is okay. What matters most is that you and your baby are safe and supported."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/pregnancy/labor-signs" className="text-sm text-primary font-semibold hover:underline">&larr; Signs of Labor</Link>
        <Link href="/pregnancy/prenatal-tests" className="text-sm text-primary font-semibold hover:underline">Prenatal Tests &rarr;</Link>
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
