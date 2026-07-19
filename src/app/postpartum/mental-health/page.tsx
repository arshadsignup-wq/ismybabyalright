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
  title: 'Postpartum Mental Health',
  description:
    'Postpartum depression (PPD), postpartum anxiety (PPA), and postpartum psychosis explained. Signs, treatment options, and crisis resources. Evidence-based ACOG guidance.',
  alternates: { canonical: '/postpartum/mental-health' },
  openGraph: {
    title: 'Postpartum Mental Health | Is My Baby Alright?',
    description: 'Understanding PPD, PPA, and postpartum psychosis. Signs, treatment, and where to get help.',
  },
};

const faqItems = [
  {
    question: 'What is the difference between baby blues and postpartum depression?',
    answer: 'Baby blues affect up to 80% of new parents and involve mood swings, crying, and anxiety that resolve within 2 weeks. Postpartum depression is persistent sadness, hopelessness, or loss of interest lasting beyond 2 weeks that interferes with daily functioning. PPD requires treatment and does not resolve on its own.',
  },
  {
    question: 'Can fathers/partners get postpartum depression?',
    answer: 'Yes. Research shows 8-10% of new fathers experience paternal postpartum depression. Partners of any gender can also develop anxiety or depression. Risk factors include a partner with PPD, sleep deprivation, relationship stress, and personal history of depression. Treatment is the same — therapy and/or medication.',
  },
  {
    question: 'Is it safe to take antidepressants while breastfeeding?',
    answer: 'Many antidepressants (particularly SSRIs like sertraline/Zoloft) are considered compatible with breastfeeding by ACOG and the AAP. The benefits of treating maternal depression typically outweigh the minimal medication exposure through breast milk. Discuss your specific situation with your provider.',
  },
  {
    question: 'What are intrusive thoughts and are they normal?',
    answer: 'Intrusive thoughts are unwanted, scary thoughts about harm coming to your baby (dropping them, them not breathing, etc.). They are very common in new parents and are a form of anxiety, not a sign you will act on them. If they are frequent or distressing, talk to your provider. They differ from postpartum psychosis, which involves confusion about what is real.',
  },
  {
    question: 'How is postpartum psychosis different from postpartum depression?',
    answer: 'Postpartum psychosis is rare (1-2 per 1,000 births) but is a psychiatric emergency. It involves hallucinations, delusions, confusion, rapid mood swings, and bizarre behavior. It typically develops within the first 2 weeks after delivery. It requires immediate hospitalization and is highly treatable. PPD is far more common and develops more gradually.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Postpartum', url: '/postpartum' },
  { name: 'Mental Health' },
];

export default function PostpartumMentalHealthPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Postpartum Mental Health',
          description: 'Understanding postpartum depression, anxiety, and psychosis. Signs, treatment options, and crisis resources.',
          path: '/postpartum/mental-health',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Screening for Perinatal Depression', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/11/screening-for-perinatal-depression' },
            { name: 'AAP Postpartum Depression Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'WHO Maternal Mental Health', url: 'https://www.who.int/teams/mental-health-and-substance-use/promotion-prevention/maternal-mental-health' },
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
        { label: 'Mental Health' },
      ]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Postpartum Mental Health</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'AAP', 'WHO']} />
      <p className="text-sm text-muted mb-6">
        Postpartum mood disorders are common, treatable medical conditions — not character flaws or signs of weakness. This guide covers what to watch for, when to seek help, and what treatment looks like.
      </p>

      <KeyTakeaways
        takeaways={[
          'Postpartum depression affects 10-20% of new mothers and is fully treatable',
          'Baby blues resolve within 2 weeks — symptoms lasting longer may be PPD or PPA',
          'Postpartum anxiety is as common as depression but often goes unrecognized',
          'Partners and fathers can also develop postpartum depression (8-10%)',
          'Postpartum psychosis is rare (1-2 per 1,000) but is a psychiatric emergency requiring immediate help',
          'Crisis line: Postpartum Support International 1-800-944-4773 (call or text)',
        ]}
      />

      <div className="space-y-6">
        <Section title="Baby blues (normal adjustment)">
          <p>Baby blues affect up to 80% of new parents and are considered a normal response to massive hormonal shifts, sleep deprivation, and life transition:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Mood swings, tearfulness, irritability</li>
            <li>Feeling overwhelmed or anxious</li>
            <li>Difficulty sleeping (beyond what baby demands)</li>
            <li>Questioning whether you can do this</li>
            <li><strong>Timeline:</strong> Starts within 2-3 days of delivery, resolves by 2 weeks</li>
            <li><strong>Key feature:</strong> You can still function and care for your baby</li>
          </ul>
          <p className="mt-2 font-medium">If symptoms last beyond 2 weeks or get worse, talk to your provider.</p>
        </Section>

        <Section title="Postpartum depression (PPD)">
          <p>PPD is a clinical mood disorder that affects 10-20% of new mothers. It is not a choice or a failure — it is a medical condition caused by hormonal changes, sleep deprivation, and neurobiological factors.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Persistent sadness, emptiness, or hopelessness</li>
            <li>Loss of interest or pleasure in things you used to enjoy</li>
            <li>Difficulty bonding with your baby (or guilt about bonding)</li>
            <li>Excessive guilt or feelings of worthlessness</li>
            <li>Changes in appetite (eating much more or much less)</li>
            <li>Fatigue beyond normal new-parent tiredness</li>
            <li>Difficulty concentrating or making decisions</li>
            <li>Withdrawal from family and friends</li>
            <li>Thoughts that your family would be better off without you</li>
          </ul>
          <p className="mt-2"><strong>Risk factors:</strong> Previous depression or anxiety, family history, traumatic birth, lack of support, relationship problems, history of abuse, unplanned pregnancy, NICU experience.</p>
          <p className="mt-1"><strong>Onset:</strong> Can develop anytime in the first year postpartum. Most commonly identified at 6-12 weeks.</p>
        </Section>

        <Section title="Postpartum anxiety (PPA)">
          <p>Postpartum anxiety is as common as PPD but often goes unrecognized because new-parent worry is expected. PPA is worry that is excessive, uncontrollable, and interferes with daily life.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Racing thoughts, constant worry, inability to relax</li>
            <li>Feeling that something terrible is about to happen</li>
            <li>Physical symptoms: racing heart, tight chest, nausea, dizziness</li>
            <li>Inability to sleep even when baby is sleeping</li>
            <li>Compulsive checking on the baby (beyond normal monitoring)</li>
            <li>Avoidance of situations out of fear something bad will happen</li>
            <li>Intrusive, unwanted thoughts about harm coming to your baby</li>
          </ul>
          <p className="mt-2 font-medium">Intrusive thoughts are common and do not mean you will harm your baby. They are a symptom of anxiety, not intent.</p>
        </Section>

        <Section title="Postpartum rage">
          <p>Less discussed but increasingly recognized:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Intense anger or rage disproportionate to the situation</li>
            <li>Irritability beyond normal frustration</li>
            <li>Snapping at your partner, older children, or others</li>
            <li>Physical tension, clenching fists or jaw</li>
            <li>Often linked to underlying anxiety, sleep deprivation, or feeling unsupported</li>
            <li>Treatable with the same approaches as PPD/PPA</li>
          </ul>
        </Section>

        <Section title="Postpartum psychosis (psychiatric emergency)">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
            <p className="font-semibold text-red-800 mb-2">This is a psychiatric emergency. Call 911 or go to the ER.</p>
            <p className="text-sm text-red-700 mb-2">Postpartum psychosis is rare (1-2 per 1,000 births) but extremely serious. It typically develops within the first 2 weeks after delivery.</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-red-700">Hallucinations (seeing or hearing things that are not there)</li>
              <li className="text-red-700">Delusions (believing things that are not true)</li>
              <li className="text-red-700">Severe confusion or disorientation</li>
              <li className="text-red-700">Rapid, unpredictable mood swings</li>
              <li className="text-red-700">Paranoia or suspiciousness</li>
              <li className="text-red-700">Bizarre or out-of-character behavior</li>
              <li className="text-red-700">Severe insomnia (not sleeping at all)</li>
            </ul>
            <p className="mt-2 text-sm text-red-800 font-medium">With proper treatment (hospitalization, medication), full recovery is expected. Risk factors include bipolar disorder and previous postpartum psychosis.</p>
          </div>
        </Section>

        <Section title="Treatment options">
          <p>Postpartum mood disorders are highly treatable. Options include:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Therapy:</strong> Cognitive behavioral therapy (CBT) and interpersonal therapy are evidence-based treatments for PPD and PPA</li>
            <li><strong>Medication:</strong> SSRIs (particularly sertraline/Zoloft) are first-line. Many are compatible with breastfeeding per ACOG and AAP.</li>
            <li><strong>Brexanolone (Zulresso):</strong> FDA-approved IV infusion specifically for PPD. Rapid onset but requires 60-hour hospital stay.</li>
            <li><strong>Zuranolone (Zurzuvae):</strong> FDA-approved oral medication specifically for PPD. 14-day course with rapid improvement.</li>
            <li><strong>Support groups:</strong> Postpartum Support International offers free groups. Peer support reduces isolation.</li>
            <li><strong>Lifestyle:</strong> Sleep (enlist help), exercise, sunlight, social connection. These support but do not replace medical treatment when needed.</li>
          </ul>
        </Section>

        <Section title="Crisis resources">
          <div className="rounded-xl bg-primary-light border border-primary/20 p-4">
            <ul className="space-y-2">
              <li className="text-sm"><strong>Postpartum Support International:</strong> 1-800-944-4773 (call or text)</li>
              <li className="text-sm"><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</li>
              <li className="text-sm"><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
              <li className="text-sm"><strong>Emergency:</strong> Call 911</li>
              <li className="text-sm"><strong>Online:</strong> <a href="https://www.postpartum.net" className="text-primary hover:underline">postpartum.net</a> for providers, groups, and resources in your area</li>
            </ul>
          </div>
        </Section>

        <Section title="How to ask for help">
          <p>If talking to your provider feels difficult, try these conversation starters:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>&quot;I do not feel like myself and I am worried it might be more than baby blues.&quot;</li>
            <li>&quot;I am having scary thoughts that I cannot control and it is frightening me.&quot;</li>
            <li>&quot;I cannot stop worrying and it is affecting my ability to sleep and function.&quot;</li>
            <li>&quot;I feel angry all the time and I do not know why.&quot;</li>
            <li>&quot;I am not enjoying being a parent and I feel guilty about it.&quot;</li>
          </ul>
          <p className="mt-2">You can also call Postpartum Support International's helpline (1-800-944-4773) to talk to someone who understands what you are going through.</p>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Postpartum mood disorders are medical conditions, not personal failures. They are common, they are treatable, and they are not your fault. With proper support, recovery is expected. You deserve help."
        supportiveMessage="If you are reading this and wondering if what you are feeling is normal — the fact that you are asking means you deserve support. Reaching out is not weakness. It is one of the bravest things a new parent can do."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/postpartum/warning-signs" className="text-sm text-primary font-semibold hover:underline">&larr; Warning Signs</Link>
        <Link href="/postpartum/partner" className="text-sm text-primary font-semibold hover:underline">Guide for Partners &rarr;</Link>
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
