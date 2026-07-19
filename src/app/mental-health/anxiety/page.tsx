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
  title: 'Postpartum Anxiety & Intrusive Thoughts',
  description:
    'Understanding postpartum anxiety and intrusive thoughts. Learn what is normal, when to seek help, and evidence-based treatment options from ACOG and PSI.',
  alternates: { canonical: '/mental-health/anxiety' },
  openGraph: {
    title: 'Postpartum Anxiety & Intrusive Thoughts | Is My Baby Alright?',
    description: 'Understanding postpartum anxiety, intrusive thoughts, and when to seek help.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Mental Health', url: '/mental-health' },
  { name: 'Postpartum Anxiety' },
];

const faqItems = [
  { question: 'Is it normal to have scary thoughts about my baby?', answer: 'Yes. Intrusive thoughts are extremely common in new parents — research suggests up to 90% of new parents experience them. These are unwanted, distressing thoughts that pop into your mind without your control. Having the thought does NOT mean you want to act on it or that you are dangerous. The distress you feel about the thought is actually a sign that it goes against your values. However, if these thoughts are frequent, distressing, or interfering with daily life, talk to a provider.' },
  { question: 'What is the difference between postpartum anxiety and normal new parent worry?', answer: 'Some worry is expected with a new baby. Postpartum anxiety goes beyond typical concern: it involves persistent, excessive worry that feels impossible to control, physical symptoms like racing heart or tight chest, difficulty sleeping even when baby sleeps, catastrophic thinking (always jumping to worst-case scenarios), and interference with daily functioning or enjoyment of your baby.' },
  { question: 'Can postpartum anxiety happen without depression?', answer: 'Yes. Postpartum anxiety is a distinct condition that can occur on its own without depression. Research suggests it may actually be more common than PPD, affecting up to 15-20% of postpartum women. It can also co-occur with depression. Either way, it is treatable.' },
  { question: 'What treatments work for postpartum anxiety?', answer: 'Evidence-based treatments include cognitive behavioral therapy (CBT), which is particularly effective for anxiety and intrusive thoughts; exposure and response prevention (ERP) for OCD-type intrusive thoughts; medication such as SSRIs; mindfulness-based approaches; and support groups. Many people benefit from a combination of therapy and lifestyle modifications.' },
  { question: 'Will my anxiety hurt my baby?', answer: 'Anxiety itself does not directly harm your baby. However, untreated anxiety can make parenting harder and less enjoyable. It can interfere with sleep, bonding, and your overall wellbeing. Getting treatment helps both you and your baby by allowing you to be more present and to enjoy this time together.' },
];

export default function AnxietyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Postpartum Anxiety & Intrusive Thoughts',
          description: 'Understanding postpartum anxiety, intrusive thoughts, and evidence-based treatment options for new parents.',
          path: '/mental-health/anxiety',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Perinatal Mental Health', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/11/screening-for-perinatal-depression' },
            { name: 'Postpartum Support International', url: 'https://www.postpartum.net/' },
            { name: 'NIMH Anxiety Disorders', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders' },
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

      <Breadcrumbs items={[{ label: 'Mental Health', href: '/mental-health' }, { label: 'Postpartum Anxiety' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Postpartum Anxiety &amp; Intrusive Thoughts</h1>
      <p className="text-sm text-muted mb-1">Understanding what is happening and how to find relief</p>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'NIMH', 'PSI']} />

      <p className="text-sm text-muted my-6 leading-relaxed">
        If your mind races with worst-case scenarios, if you cannot sleep even when your baby is sleeping, if you feel a constant hum of dread that something terrible will happen — you may be experiencing postpartum anxiety. This is not you being a nervous person or an overprotective parent. It is a real, recognized medical condition that responds to treatment.
      </p>

      <KeyTakeaways
        takeaways={[
          'Postpartum anxiety affects up to 15-20% of new parents and is at least as common as postpartum depression.',
          'Intrusive thoughts (scary, unwanted thoughts) are extremely common — having them does NOT mean you will act on them.',
          'Postpartum anxiety is different from normal new-parent worry: it is persistent, excessive, and interferes with functioning.',
          'CBT (cognitive behavioral therapy) is highly effective for postpartum anxiety and intrusive thoughts.',
          'You do not have to white-knuckle through this. Treatment works, and you deserve relief.',
        ]}
      />

      <div className="space-y-6">
        <Section title="What is postpartum anxiety?">
          <p>
            Postpartum anxiety (PPA) is a perinatal mood disorder characterized by excessive, persistent worry and anxiety that goes beyond typical new-parent concerns. While some worry is a normal part of caring for a vulnerable infant, PPA involves anxiety that feels uncontrollable, is disproportionate to actual risk, and interferes with your ability to function or enjoy daily life.
          </p>
          <p>
            Research suggests PPA may be even more common than postpartum depression, yet it is less frequently discussed and screened for. Many parents suffer in silence because they assume their anxiety is just what parenting feels like.
          </p>
        </Section>

        <Section title="Signs of postpartum anxiety">
          <p>PPA can manifest as both emotional and physical symptoms:</p>
          <h3 className="font-semibold mt-3 mb-1">Emotional and cognitive symptoms</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Constant worry that something bad will happen to your baby</li>
            <li>Racing thoughts that you cannot turn off</li>
            <li>Catastrophic thinking (always jumping to the worst-case scenario)</li>
            <li>Feeling on edge or hypervigilant constantly</li>
            <li>Needing to check on your baby repeatedly</li>
            <li>Difficulty making decisions due to fear of making the wrong choice</li>
            <li>Avoidance of situations that trigger anxiety (driving with baby, being alone with baby)</li>
            <li>Inability to relax even during calm moments</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Physical symptoms</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Racing heart or heart palpitations</li>
            <li>Tight chest or difficulty breathing</li>
            <li>Nausea or stomach upset</li>
            <li>Dizziness or lightheadedness</li>
            <li>Insomnia — unable to sleep even when baby sleeps</li>
            <li>Muscle tension, especially in shoulders and jaw</li>
            <li>Feeling shaky or trembling</li>
          </ul>
        </Section>

        <Section title="Understanding intrusive thoughts">
          <p>
            Intrusive thoughts are unwanted, distressing thoughts or mental images that pop into your mind without your control. In new parents, they often involve harm coming to the baby — dropping the baby, the baby not breathing, or even the parent causing harm.
          </p>
          <p className="font-semibold mt-2">
            Key facts about intrusive thoughts:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Up to 90% of new parents report having intrusive thoughts about their baby</li>
            <li>Having the thought does NOT mean you want it to happen or will act on it</li>
            <li>The distress you feel about the thought is actually protective — it shows the thought goes against your values</li>
            <li>Intrusive thoughts become problematic when they are frequent, cause significant distress, or lead to avoidance behaviors</li>
            <li>They are highly treatable with CBT and exposure-response prevention (ERP)</li>
          </ul>
          <p className="mt-2">
            The difference between intrusive thoughts and harmful intent: intrusive thoughts are ego-dystonic (they disturb you and go against your values), while harmful intent is ego-syntonic (it aligns with what the person wants). If these thoughts horrify you, that is evidence they are intrusive, not intentional.
          </p>
        </Section>

        <Section title="Postpartum OCD">
          <p>
            Some parents develop postpartum OCD, which involves intrusive thoughts paired with compulsive behaviors meant to neutralize the anxiety. This might look like:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Checking the baby&apos;s breathing dozens of times per night</li>
            <li>Excessive research about SIDS or baby illnesses</li>
            <li>Avoiding being alone with the baby due to intrusive harm thoughts</li>
            <li>Repeated cleaning or sanitizing beyond what is medically necessary</li>
            <li>Needing constant reassurance from partner or Google</li>
          </ul>
          <p className="mt-2">
            Postpartum OCD is treatable. ERP (exposure and response prevention) therapy is the gold standard treatment.
          </p>
        </Section>

        <Section title="Treatment for postpartum anxiety">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>CBT (Cognitive Behavioral Therapy):</strong> Helps identify and restructure anxious thought patterns. Highly effective for PPA.</li>
            <li><strong>ERP (Exposure and Response Prevention):</strong> The gold standard for intrusive thoughts and OCD-type symptoms.</li>
            <li><strong>Medication:</strong> SSRIs (like sertraline) are effective for anxiety and are compatible with breastfeeding. Buspirone is another option.</li>
            <li><strong>Mindfulness and relaxation:</strong> Mindfulness-based stress reduction (MBSR) can help manage physical anxiety symptoms.</li>
            <li><strong>Support groups:</strong> PSI offers specific groups for anxiety. Knowing others share your experience reduces shame.</li>
          </ul>
          <p className="mt-2">
            Important: Avoid reassurance-seeking as a primary coping strategy. While it provides temporary relief, it can reinforce anxiety in the long term. A therapist trained in perinatal mood disorders can help you develop healthier coping strategies.
          </p>
        </Section>

        <Section title="Coping strategies while you seek treatment">
          <ul className="list-disc list-inside space-y-1">
            <li>Name the anxiety: &quot;This is my anxiety talking, not reality&quot;</li>
            <li>Limit Google searches about baby health — set a specific time limit</li>
            <li>Practice grounding techniques: 5 things you can see, 4 you can touch, 3 you can hear</li>
            <li>Move your body — even a 10-minute walk can reduce acute anxiety</li>
            <li>Talk to someone you trust about what you are experiencing</li>
            <li>Reduce caffeine, which can worsen physical anxiety symptoms</li>
            <li>Remember: thoughts are not facts, and feelings are not predictions</li>
          </ul>
        </Section>

        <div className="tier-concern p-4 text-sm rounded-xl">
          <h3 className="font-bold mb-2">If you are in crisis</h3>
          <ul className="flex flex-col gap-1.5">
            <li>PSI Warmline: <a href="tel:1-800-944-4773" className="font-semibold underline">1-800-944-4773</a> (call or text)</li>
            <li>Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong></li>
            <li>Suicide &amp; Crisis Lifeline: <a href="tel:988" className="font-semibold underline">988</a></li>
            <li>If you or your baby are in immediate danger, call <strong>911</strong></li>
          </ul>
        </div>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Postpartum anxiety and intrusive thoughts are common, distressing, and highly treatable. Having scary thoughts does not make you dangerous — it makes you a parent whose brain is stuck in overdrive trying to protect your baby. You do not have to live in constant fear. Treatment can help you find relief and enjoy this time with your baby."
        supportiveMessage="Your anxiety is lying to you about who you are. You are not a bad parent. You are a loving parent whose brain has gotten stuck in alarm mode. Help is available, and you deserve it."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/mental-health/ppd" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Postpartum Depression</Link>
        <Link href="/mental-health/health-anxiety" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Health Anxiety About Baby</Link>
        <Link href="/mental-health/when-to-get-help" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">When to Get Help</Link>
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
