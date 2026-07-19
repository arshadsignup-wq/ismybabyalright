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
  title: 'Parental Burnout',
  description:
    'Recognizing parental burnout: signs, causes, and evidence-based recovery strategies. Learn how burnout differs from normal tiredness and how to heal.',
  alternates: { canonical: '/mental-health/burnout' },
  openGraph: {
    title: 'Parental Burnout | Is My Baby Alright?',
    description: 'Signs of parental burnout and evidence-based recovery strategies.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Mental Health', url: '/mental-health' },
  { name: 'Parental Burnout' },
];

const faqItems = [
  { question: 'What is the difference between being tired and being burned out?', answer: 'Normal tiredness improves with rest. Parental burnout is a state of chronic physical and emotional exhaustion where rest no longer feels restorative, you feel emotionally disconnected from your children, and you experience a sense of ineffectiveness as a parent. Burnout develops when demands consistently exceed resources over a prolonged period.' },
  { question: 'Can parental burnout affect my relationship with my child?', answer: 'Yes. One hallmark of parental burnout is emotional distancing from your children — feeling like you are going through the motions of parenting on autopilot without genuine emotional connection. This is a symptom of burnout, not a reflection of your love for your child. With recovery, emotional connection returns.' },
  { question: 'How long does it take to recover from parental burnout?', answer: 'Recovery time varies depending on severity, available support, and what changes you can make. Some parents notice improvement within weeks of implementing changes, while deeper burnout may take months. Recovery is not linear — there will be better and worse days. The key is making sustainable structural changes, not just temporary fixes.' },
  { question: 'Is parental burnout the same as postpartum depression?', answer: 'They are different but can overlap. PPD is a clinical mood disorder with biological components, while burnout is a response to chronic stress and resource depletion. However, prolonged burnout can lead to depression, and untreated depression can accelerate burnout. If you are unsure which you are experiencing, talk to a mental health professional.' },
  { question: 'How do I recover from burnout when I cannot take a break?', answer: 'Recovery does not require a vacation (though that helps). Start with micro-changes: identify one task you can eliminate or delegate, protect 15 minutes of solitude daily, say no to one non-essential obligation, ask for one specific form of help, and lower your standards in one area that does not truly matter. Small, consistent changes compound over time.' },
];

export default function BurnoutPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Parental Burnout: Signs and Recovery',
          description: 'Recognizing parental burnout signs, understanding causes, and evidence-based recovery strategies for overwhelmed parents.',
          path: '/mental-health/burnout',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'Postpartum Support International', url: 'https://www.postpartum.net/' },
            { name: 'AAP Parent Well-Being', url: 'https://www.aap.org/en/patient-care/healthy-active-living-for-families/' },
            { name: 'NIMH Stress and Mental Health', url: 'https://www.nimh.nih.gov/health/publications/stress' },
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

      <Breadcrumbs items={[{ label: 'Mental Health', href: '/mental-health' }, { label: 'Parental Burnout' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Parental Burnout</h1>
      <p className="text-sm text-muted mb-1">Signs and recovery</p>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['PSI', 'AAP', 'NIMH']} />

      <p className="text-sm text-muted my-6 leading-relaxed">
        If you feel like you have nothing left to give — if parenting has gone from challenging to unbearable, if you are just going through the motions, if the joy has been replaced by numbness or dread — you may be experiencing parental burnout. This is not a personal failing. It is what happens when you give and give without being replenished.
      </p>

      <KeyTakeaways
        takeaways={[
          'Parental burnout is distinct from normal tiredness — it is chronic exhaustion where rest no longer restores you.',
          'The three hallmarks of parental burnout are: overwhelming exhaustion, emotional distancing from your children, and a sense of ineffectiveness.',
          'Burnout is caused by a sustained imbalance between demands and resources — not by being weak or inadequate.',
          'Recovery requires structural changes (not just self-care) — redistributing labor, lowering standards, and increasing support.',
          'Burnout is reversible. With the right changes, you can reconnect with the parent you want to be.',
        ]}
      />

      <div className="space-y-6">
        <Section title="What is parental burnout?">
          <p>
            Parental burnout is a state of intense exhaustion related to your role as a parent. It develops when the chronic stresses of parenting overwhelm your available resources (time, energy, support, rest) for an extended period. Unlike ordinary tiredness, burnout does not resolve with a good night&apos;s sleep or a weekend off.
          </p>
          <p>
            Research on parental burnout identifies three core dimensions:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Overwhelming exhaustion:</strong> Physical and emotional depletion specific to your parenting role</li>
            <li><strong>Emotional distancing:</strong> Feeling disconnected from your children, going through the motions on autopilot</li>
            <li><strong>Loss of parental efficacy:</strong> Feeling like nothing you do is enough, doubting your competence as a parent</li>
          </ul>
        </Section>

        <Section title="Signs of parental burnout">
          <p>Burnout often develops gradually. You might recognize these signs:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Dreading the start of each day</li>
            <li>Feeling emotionally numb or disconnected from your children</li>
            <li>Loss of patience — snapping more frequently than before</li>
            <li>Fantasizing about escape or running away</li>
            <li>Feeling like you are failing no matter what you do</li>
            <li>Physical symptoms: chronic fatigue, headaches, getting sick more often</li>
            <li>Inability to feel joy or satisfaction from parenting moments</li>
            <li>Resentment toward your children, partner, or circumstances</li>
            <li>Withdrawing from family activities</li>
            <li>Using unhealthy coping mechanisms (excessive screen time, drinking, overeating)</li>
            <li>Feeling like you have lost your identity outside of being a parent</li>
            <li>Crying easily or feeling on the verge of tears</li>
          </ul>
        </Section>

        <Section title="What causes parental burnout?">
          <p>Burnout is a systemic issue, not a personal weakness:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Chronic sleep deprivation:</strong> Months or years of disrupted sleep fundamentally depletes your capacity</li>
            <li><strong>Lack of support:</strong> Parenting in isolation without a village, practical help, or emotional support</li>
            <li><strong>Inequitable division of labor:</strong> One parent carrying a disproportionate load of childcare and household work</li>
            <li><strong>Perfectionism:</strong> Holding yourself to impossibly high parenting standards driven by social media or societal pressure</li>
            <li><strong>Loss of identity:</strong> Losing touch with who you are outside of being a parent</li>
            <li><strong>Financial stress:</strong> The constant pressure of providing while potentially losing income</li>
            <li><strong>Relentlessness:</strong> No breaks, no boundaries, no end point — parenting never clocks out</li>
            <li><strong>Unmet personal needs:</strong> Neglecting your own physical, emotional, and social needs for extended periods</li>
          </ul>
        </Section>

        <Section title="Recovery: structural changes that help">
          <p>Recovery from burnout requires more than bubble baths and deep breaths. It requires structural change:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Redistribute labor:</strong> Have an honest conversation with your partner about an equitable division of childcare, household tasks, and mental load</li>
            <li><strong>Lower your standards:</strong> Choose 2-3 things that genuinely matter and let the rest be &quot;good enough.&quot; Your house does not need to be spotless. Meals do not need to be elaborate.</li>
            <li><strong>Build in non-negotiable rest:</strong> Schedule time for yourself as you would a doctor&apos;s appointment. It is not selfish — it is maintenance.</li>
            <li><strong>Accept and ask for help:</strong> Let someone else do things their way. Ask specific people for specific tasks.</li>
            <li><strong>Set boundaries:</strong> Say no to non-essential obligations. Protect your time and energy.</li>
            <li><strong>Reconnect with your identity:</strong> Do one thing each week that is just for you — not related to parenting, partnering, or work.</li>
            <li><strong>Seek professional support:</strong> Therapy can help you identify patterns, set boundaries, and develop coping strategies.</li>
          </ul>
        </Section>

        <Section title="When burnout might be something more">
          <p>Burnout can sometimes overlap with or develop into clinical depression. Consider seeking professional evaluation if:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>You feel hopeless about the future</li>
            <li>You have lost interest in everything, not just parenting</li>
            <li>You are having thoughts of self-harm or suicide</li>
            <li>Structural changes are not helping after several weeks</li>
            <li>You are unable to function in daily life</li>
          </ul>
          <p className="mt-2">
            There is no shame in needing more support. Therapy, medication, or both may be appropriate.
          </p>
        </Section>

        <div className="tier-concern p-4 text-sm rounded-xl">
          <h3 className="font-bold mb-2">If you are in crisis</h3>
          <ul className="flex flex-col gap-1.5">
            <li>PSI Warmline: <a href="tel:1-800-944-4773" className="font-semibold underline">1-800-944-4773</a> (call or text)</li>
            <li>Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong></li>
            <li>Suicide &amp; Crisis Lifeline: <a href="tel:988" className="font-semibold underline">988</a></li>
          </ul>
        </div>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Parental burnout is not a sign that you are weak or that you were not meant to be a parent. It is what happens when demands exceed resources for too long. Recovery requires structural changes — not just willpower. You deserve support, rest, and a life that includes more than survival mode."
        supportiveMessage="You are not failing. You are depleted. Those are very different things. The fact that you are here reading this shows you care deeply. Now it is time to care for yourself with the same intensity you care for your children."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/mental-health/rage" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Parental Rage</Link>
        <Link href="/mental-health/self-care" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Self-Care for Parents</Link>
        <Link href="/mental-health/relationship" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Relationship Changes</Link>
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
