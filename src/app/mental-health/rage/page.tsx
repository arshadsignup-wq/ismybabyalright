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
  title: 'Parental Rage',
  description:
    'Understanding parental rage: why it happens, what triggers it, and evidence-based coping strategies. You are not a bad parent for feeling rage.',
  alternates: { canonical: '/mental-health/rage' },
  openGraph: {
    title: 'Parental Rage | Is My Baby Alright?',
    description: 'Why parental rage happens and healthy coping strategies for new parents.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Mental Health', url: '/mental-health' },
  { name: 'Parental Rage' },
];

const faqItems = [
  { question: 'Is it normal to feel rage as a parent?', answer: 'Yes. Parental rage is far more common than most people realize. Research suggests it is a symptom of postpartum mood disorders, chronic sleep deprivation, sensory overload, and being constantly \"touched out.\" Feeling rage does not make you a bad parent — it means your nervous system is overwhelmed. What matters is how you respond to the feeling.' },
  { question: 'What causes postpartum rage?', answer: 'Postpartum rage has biological and situational causes including hormonal fluctuations (especially progesterone drops), chronic sleep deprivation, sensory overload from constant physical contact and crying, unmet personal needs, lack of support, underlying anxiety or depression manifesting as irritability, and feeling trapped or powerless.' },
  { question: 'Is postpartum rage a form of PPD?', answer: 'Rage and irritability can be symptoms of postpartum depression or anxiety, even in the absence of sadness. ACOG recognizes that PPD does not always present as sadness — anger, irritability, and rage are common presentations, particularly in parents who may not recognize depression in themselves.' },
  { question: 'When does parental rage become a problem?', answer: 'Rage becomes a concern when it is happening frequently (daily or near-daily), when you feel out of control during episodes, when it leads to verbal aggression toward your child or partner, when you have urges to be physically rough, or when it is significantly impacting your relationships and daily life. If any of these apply, please reach out to a mental health provider.' },
  { question: 'What should I do in the moment when I feel rage?', answer: 'Put the baby down in a safe space (crib, playpen) and walk away. This is the safest thing you can do. Take deep breaths, splash cold water on your face, step outside if possible, or squeeze ice cubes. You can also call a crisis line. Returning when you are calmer is always better than responding from rage.' },
];

export default function RagePage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Parental Rage: Why It Happens and How to Cope',
          description: 'Understanding parental rage, its causes, and evidence-based coping strategies for overwhelmed parents.',
          path: '/mental-health/rage',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Perinatal Mental Health', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/11/screening-for-perinatal-depression' },
            { name: 'Postpartum Support International', url: 'https://www.postpartum.net/' },
            { name: 'AAP Managing Parental Anger', url: 'https://www.aap.org/en/patient-care/healthy-active-living-for-families/' },
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

      <Breadcrumbs items={[{ label: 'Mental Health', href: '/mental-health' }, { label: 'Parental Rage' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Parental Rage</h1>
      <p className="text-sm text-muted mb-1">Why it happens and how to cope</p>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'PSI', 'AAP']} />

      <p className="text-sm text-muted my-6 leading-relaxed">
        If you have experienced a sudden, overwhelming surge of anger — at your crying baby, at your partner, at the relentlessness of it all — you are not alone and you are not a monster. Parental rage is far more common than anyone talks about, and it does not define you as a parent. What matters is understanding why it happens and developing strategies to manage it safely.
      </p>

      <KeyTakeaways
        takeaways={[
          'Parental rage is common and is often a symptom of being chronically overwhelmed, sleep-deprived, or under-supported.',
          'Rage can be a presentation of postpartum depression or anxiety — PPD does not always look like sadness.',
          'Feeling rage does not make you a bad parent. What matters is how you respond: put the baby in a safe place and walk away.',
          'Rage is your nervous system signaling that your needs are not being met — it deserves compassion, not shame.',
          'Treatment (therapy, medication, lifestyle changes) can significantly reduce rage episodes.',
        ]}
      />

      <div className="space-y-6">
        <Section title="What is parental rage?">
          <p>
            Parental rage is intense, often sudden anger that feels disproportionate to the triggering situation. It might look like snapping at your partner over something minor, feeling a white-hot fury when your baby will not stop crying, slamming a cabinet, or having the urge to scream.
          </p>
          <p>
            This is not about being an angry person. It is your nervous system in crisis — signaling that you are running on empty, that your needs have been neglected for too long, and that something needs to change.
          </p>
        </Section>

        <Section title="Why rage happens to good parents">
          <p>The rage response has identifiable causes:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Chronic sleep deprivation:</strong> Sleep loss impairs the prefrontal cortex (impulse control) while amplifying the amygdala (emotional reactivity). After months of interrupted sleep, your brain literally has fewer resources to regulate emotions.</li>
            <li><strong>Hormonal shifts:</strong> Rapid progesterone drops postpartum affect mood regulation. Breastfeeding hormones can also contribute to irritability.</li>
            <li><strong>Sensory overload:</strong> Constant touching, crying, and noise can overwhelm your nervous system — especially if you are introverted or have sensory sensitivities.</li>
            <li><strong>Being &quot;touched out&quot;:</strong> When your body has not felt like your own for months (pregnancy, breastfeeding, constant holding), rage can be a boundary signal.</li>
            <li><strong>Unmet needs:</strong> Hunger, dehydration, lack of solitude, no adult conversation — when basic needs go unmet day after day, anger builds.</li>
            <li><strong>Lack of support:</strong> Parenting without adequate help is not what humans evolved to do. Isolation and inequitable division of labor fuel rage.</li>
            <li><strong>Underlying depression or anxiety:</strong> Irritability and rage are common symptoms of PPD/PPA, especially when depression presents atypically.</li>
          </ul>
        </Section>

        <Section title="In the moment: what to do when rage hits">
          <p className="font-semibold">The most important thing: put the baby in a safe place and walk away.</p>
          <p className="mt-2">A baby crying in a crib is safe. A baby held by a dysregulated parent is less safe. Walking away is not abandonment — it is protection.</p>
          <ul className="list-disc list-inside space-y-1 mt-3">
            <li><strong>Step 1:</strong> Put baby in crib, playpen, or other safe space</li>
            <li><strong>Step 2:</strong> Leave the room — go to another room, step outside, go to the bathroom</li>
            <li><strong>Step 3:</strong> Regulate your body — splash cold water on face, hold ice cubes, take 10 slow breaths</li>
            <li><strong>Step 4:</strong> Return when you feel calmer — even 2 minutes can help</li>
            <li><strong>Step 5:</strong> If you cannot calm down, call someone — partner, friend, family member, or crisis line</li>
          </ul>
          <p className="mt-2">
            Practicing this repeatedly builds a neural pathway. Over time, the pause between trigger and response gets easier to access.
          </p>
        </Section>

        <Section title="Longer-term strategies">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Address sleep:</strong> Sleep is not a luxury — it is a biological necessity. Take shifts with your partner. Accept help. Sleep when you can.</li>
            <li><strong>Identify triggers:</strong> Track when rage happens. Is it always at the same time of day? When you are hungry? When the house is loud? Knowing triggers helps you prevent them.</li>
            <li><strong>Meet your needs:</strong> Eat regularly, hydrate, get outside, and protect even small pockets of solitude.</li>
            <li><strong>Redistribute labor:</strong> If rage is connected to feeling unsupported, have a direct conversation with your partner about equitable division of responsibilities.</li>
            <li><strong>Therapy:</strong> A therapist specializing in perinatal mood disorders can help you develop personalized coping strategies and explore whether medication might help.</li>
            <li><strong>Screen for PPD/PPA:</strong> If rage is a primary symptom, ask your provider to screen you for postpartum depression and anxiety. Treatment of the underlying condition often resolves the rage.</li>
            <li><strong>Medication:</strong> SSRIs can reduce irritability and rage when they are symptoms of an underlying mood disorder.</li>
          </ul>
        </Section>

        <Section title="When to seek immediate help">
          <p>Please reach out to a professional if:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>You have thoughts of harming your child</li>
            <li>You have shaken, hit, or physically harmed your child</li>
            <li>You are afraid of what you might do</li>
            <li>Rage episodes are daily or near-daily</li>
            <li>You feel out of control during episodes</li>
            <li>Your relationship is being seriously damaged</li>
          </ul>
          <p className="mt-2">
            Reaching out is not an admission of failure. It is an act of love and courage. You can call PSI at 1-800-944-4773 or text them for immediate support.
          </p>
        </Section>

        <Section title="What to tell yourself">
          <ul className="list-disc list-inside space-y-1">
            <li>Feeling rage does not make me a bad parent</li>
            <li>My nervous system is overwhelmed — this is a signal, not a character flaw</li>
            <li>Walking away from a crying baby is the right choice when I am dysregulated</li>
            <li>I deserve support and rest</li>
            <li>Asking for help is strength, not weakness</li>
            <li>This feeling will pass, and it will get better with the right support</li>
          </ul>
        </Section>

        <div className="tier-concern p-4 text-sm rounded-xl">
          <h3 className="font-bold mb-2">If you are in crisis</h3>
          <ul className="flex flex-col gap-1.5">
            <li>PSI Warmline: <a href="tel:1-800-944-4773" className="font-semibold underline">1-800-944-4773</a> (call or text)</li>
            <li>Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong></li>
            <li>Childhelp National Child Abuse Hotline: <a href="tel:1-800-422-4453" className="font-semibold underline">1-800-422-4453</a></li>
            <li>If you or your baby are in immediate danger, call <strong>911</strong></li>
          </ul>
        </div>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Parental rage is your nervous system sounding an alarm that you are running on empty. It is not evidence that you are a bad parent — it is evidence that you are human, overwhelmed, and in need of support. With the right strategies and professional help, rage episodes can be significantly reduced."
        supportiveMessage="You are not a monster for feeling this way. You are an exhausted person doing an incredibly hard job without enough support. The fact that the rage bothers you shows how much you care. Help is available."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/mental-health/burnout" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Parental Burnout</Link>
        <Link href="/mental-health/self-care" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Self-Care for Parents</Link>
        <Link href="/mental-health/ppd" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Postpartum Depression</Link>
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
