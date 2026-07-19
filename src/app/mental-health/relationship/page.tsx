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
  title: 'Relationship Changes After Baby',
  description:
    'How relationships change after having a baby. Communication strategies, managing conflict, division of labor, and when to seek couples counseling.',
  alternates: { canonical: '/mental-health/relationship' },
  openGraph: {
    title: 'Relationship Changes After Baby | Is My Baby Alright?',
    description: 'Understanding relationship changes after baby and strategies for staying connected.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Mental Health', url: '/mental-health' },
  { name: 'Relationship Changes' },
];

const faqItems = [
  { question: 'Is it normal to resent my partner after having a baby?', answer: 'Yes, this is extremely common. Resentment often builds when there is an inequitable division of labor, when one partner feels unseen or unsupported, or when expectations about shared parenting do not match reality. Resentment is a signal that something needs to change — not evidence that your relationship is doomed.' },
  { question: 'How long do relationship struggles last after a baby?', answer: 'Research shows that relationship satisfaction typically dips in the first 1-2 years after a baby and gradually improves as children become more independent. However, this is not inevitable — couples who communicate openly, share labor equitably, and maintain connection often navigate this period without significant decline.' },
  { question: 'When should we consider couples counseling?', answer: 'Consider couples counseling if: communication has broken down into criticism or contempt, you feel more like roommates than partners, resentment is building and conversations about it go nowhere, you are considering separation, or you simply want professional guidance during this major transition. You do not need to be in crisis to benefit from therapy.' },
  { question: 'Is it normal to not want intimacy after having a baby?', answer: 'Absolutely. Decreased desire for physical intimacy is very common postpartum and can last months or longer. Factors include hormonal changes (especially while breastfeeding), physical recovery, exhaustion, being \"touched out\" from constant baby contact, body image changes, and simply having no energy left. This usually improves over time.' },
  { question: 'How do we divide labor fairly?', answer: 'Fair does not necessarily mean 50/50 — it means both partners feel the distribution is equitable given their circumstances. Start by listing all tasks (including invisible mental load tasks like scheduling, researching, noticing what needs done). Then redistribute based on capacity, skills, and schedules. Revisit regularly as circumstances change.' },
];

export default function RelationshipPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Relationship Changes After Baby',
          description: 'Understanding how relationships change after having a baby, with strategies for communication, division of labor, and maintaining connection.',
          path: '/mental-health/relationship',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Family Health', url: 'https://www.aap.org/en/patient-care/healthy-active-living-for-families/' },
            { name: 'Postpartum Support International', url: 'https://www.postpartum.net/' },
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

      <Breadcrumbs items={[{ label: 'Mental Health', href: '/mental-health' }, { label: 'Relationship Changes' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Relationship Changes After Baby</h1>
      <p className="text-sm text-muted mb-1">Navigating partnership during the biggest life transition</p>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'PSI']} />

      <p className="text-sm text-muted my-6 leading-relaxed">
        Having a baby fundamentally changes your relationship — and that is true even for the strongest couples. If you are feeling disconnected from your partner, resentful, or like you are parenting alone even though your partner is right there, you are not alone. These feelings are common, and with intentional effort, most couples find their way back to each other.
      </p>

      <KeyTakeaways
        takeaways={[
          'Research shows 67% of couples experience a decline in relationship satisfaction after their first baby — this is common but not inevitable.',
          'The primary drivers of relationship strain are unequal division of labor, sleep deprivation, loss of couple identity, and communication breakdown.',
          'Resentment is a signal that needs are not being met — not evidence that your relationship is over.',
          'Small, consistent gestures of connection matter more than grand romantic gestures during this season.',
          'Couples counseling can help even when things are not in crisis — it is a tool, not a last resort.',
        ]}
      />

      <div className="space-y-6">
        <Section title="Why relationships change after baby">
          <p>
            The transition to parenthood is one of the most significant life changes adults experience. Multiple factors converge to put pressure on even healthy relationships:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Sleep deprivation:</strong> Chronic lack of sleep impairs patience, empathy, and communication</li>
            <li><strong>Role shifts:</strong> Identities shift from partners to parents, and finding the balance takes time</li>
            <li><strong>Unequal labor:</strong> Division of childcare and household work often becomes unbalanced, breeding resentment</li>
            <li><strong>Loss of couple time:</strong> Date nights, conversations, and shared activities are replaced by baby care</li>
            <li><strong>Different parenting approaches:</strong> Conflicting styles can create daily friction</li>
            <li><strong>Physical changes:</strong> Reduced intimacy, body changes, and exhaustion affect physical connection</li>
            <li><strong>Mental load imbalance:</strong> One partner often carries the invisible work of planning, researching, and anticipating needs</li>
          </ul>
        </Section>

        <Section title="The mental load and invisible labor">
          <p>
            The &quot;mental load&quot; refers to the invisible cognitive work of managing a household and children — remembering doctor appointments, tracking developmental milestones, knowing when diapers are running low, researching sleep regressions, maintaining social connections for the family.
          </p>
          <p>
            This labor often falls disproportionately on one partner (frequently the birthing parent) and is easy to overlook because it does not result in visible output. When one partner carries the mental load while the other &quot;helps when asked,&quot; it creates an inherent imbalance where one person is both worker and manager.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Notice what your partner does without being asked</li>
            <li>Take ownership of entire domains rather than waiting for instructions</li>
            <li>If you find yourself saying &quot;just tell me what to do&quot; — recognize that the telling is itself work</li>
          </ul>
        </Section>

        <Section title="Communication strategies that help">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Use &quot;I&quot; statements:</strong> &quot;I feel overwhelmed when...&quot; instead of &quot;You never...&quot;</li>
            <li><strong>Schedule check-ins:</strong> A weekly 15-minute conversation about how things are going prevents resentment from building</li>
            <li><strong>Express needs directly:</strong> Your partner cannot read your mind. Be specific about what you need.</li>
            <li><strong>Acknowledge their efforts:</strong> Even when the division is not perfect, noting what your partner does well builds goodwill</li>
            <li><strong>Repair quickly:</strong> After arguments, prioritize repair over being right</li>
            <li><strong>Avoid scorekeeping:</strong> Tracking who did what creates adversaries, not partners</li>
            <li><strong>Assume good intent:</strong> Most of the time, your partner is not trying to make things harder — they may just not see what you see</li>
          </ul>
        </Section>

        <Section title="Maintaining connection">
          <p>Connection during the newborn and infant stage often needs to look different than before:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Small daily moments: a 6-second hug, asking &quot;how was your day&quot; and listening, a text during the day</li>
            <li>Protect 10-15 minutes of partner time after baby goes to sleep — even just sitting together</li>
            <li>Express gratitude for specific things your partner did that day</li>
            <li>Share physical affection that is not sexual — holding hands, touching shoulders, sitting close</li>
            <li>Have at least one conversation per day that is not about the baby or logistics</li>
            <li>Take turns giving each other solo time — both parents need space</li>
          </ul>
        </Section>

        <Section title="When to consider couples counseling">
          <p>Couples counseling is a tool for growth, not a sign of failure. Consider it if:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Communication has broken down — conversations regularly become fights</li>
            <li>One or both partners feel contempt (criticism, eye-rolling, dismissiveness)</li>
            <li>Resentment is building and does not improve despite conversations</li>
            <li>You feel more like roommates or co-workers than partners</li>
            <li>One partner feels their reality is being denied or minimized</li>
            <li>You are considering separation</li>
            <li>You want to strengthen your relationship during this transition</li>
          </ul>
          <p className="mt-2">
            Look for a therapist who specializes in couples work during the perinatal period. The Gottman method and Emotionally Focused Therapy (EFT) both have strong evidence bases.
          </p>
        </Section>

        <Section title="For single parents">
          <p>
            If you are navigating parenthood without a partner — by choice, circumstance, or separation — your challenges are real and valid. The advice on this page about communication and labor division may not apply directly, but the need for support, connection, and community still applies.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Build your support network: family, friends, parent groups, online communities</li>
            <li>Accept help without guilt — you cannot do everything alone</li>
            <li>Your relationship with yourself matters — prioritize your own wellbeing</li>
            <li>Organizations like PSI offer specific support groups for single parents</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Having a baby changes your relationship — that is universal. The couples who navigate this well are not the ones who avoid conflict but the ones who communicate through it, share labor equitably, and maintain small daily gestures of connection. If you are struggling, it does not mean your relationship is broken — it means you are in the middle of the biggest transition of your lives together."
        supportiveMessage="Your relationship deserves attention during this time. You do not have to figure it out alone — whether that means a heart-to-heart conversation, a parenting check-in, or reaching out to a couples therapist. Investing in your partnership is also investing in your family."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/mental-health/burnout" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Parental Burnout</Link>
        <Link href="/mental-health/self-care" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Self-Care for Parents</Link>
        <Link href="/mental-health/dads" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Paternal PPD</Link>
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
