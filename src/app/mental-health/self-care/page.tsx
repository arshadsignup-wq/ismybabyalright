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
  title: 'Self-Care for New Parents',
  description:
    'Practical, realistic self-care strategies for new parents. Not bubble baths — real strategies for meeting your basic needs while caring for a baby.',
  alternates: { canonical: '/mental-health/self-care' },
  openGraph: {
    title: 'Self-Care for New Parents | Is My Baby Alright?',
    description: 'Realistic self-care strategies for exhausted new parents who have no time.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Mental Health', url: '/mental-health' },
  { name: 'Self-Care' },
];

const faqItems = [
  { question: 'How do I practice self-care when I have no time?', answer: 'Self-care for new parents does not require hours of free time. It starts with the absolute basics: eating when hungry (even if it is a handful of trail mix), drinking water, getting outside for even 5 minutes, and sleeping when you possibly can. Micro-moments of care throughout the day add up. The goal is not perfection — it is meeting your minimum needs consistently.' },
  { question: 'Is it selfish to take time for myself when my baby needs me?', answer: 'No. Taking care of yourself is not selfish — it is necessary for sustainable parenting. You cannot pour from an empty cup. Your baby needs a parent who has enough resources to be present and patient, not a parent who is running on fumes and resentment. Meeting your own needs makes you a better caregiver, not a worse one.' },
  { question: 'What if my partner does not support me taking breaks?', answer: 'This is a conversation worth having directly. Frame it as: \"I need X amount of time to meet my basic needs so I can be a better parent and partner.\" If your partner is resistant, consider that this may be a pattern worth addressing — possibly with a couples counselor. Both parents deserve rest, and breaks should be equitable.' },
  { question: 'How do I stop feeling guilty about self-care?', answer: 'Guilt around self-care is common but not rational. Remind yourself: your baby benefits from a regulated parent, rest is a biological need not a luxury, you model healthy boundaries for your children, and depletion leads to burnout which ultimately hurts everyone. If guilt persists despite logic, consider speaking with a therapist about it.' },
  { question: 'What counts as self-care for new parents?', answer: 'For new parents, self-care is anything that replenishes you — and it is different for everyone. It might be: eating a warm meal, taking a shower, going for a walk alone, calling a friend, reading a page of a book, sitting in silence for 5 minutes, or doing something creative. It does not need to be Instagram-worthy or time-consuming.' },
];

export default function SelfCarePage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Self-Care for New Parents',
          description: 'Practical, realistic self-care strategies for new parents covering physical needs, emotional health, and sustainable routines.',
          path: '/mental-health/self-care',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Parental Well-Being', url: 'https://www.aap.org/en/patient-care/healthy-active-living-for-families/' },
            { name: 'Postpartum Support International', url: 'https://www.postpartum.net/' },
            { name: 'ACOG Postpartum Care', url: 'https://www.acog.org/clinical/clinical-guidance' },
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

      <Breadcrumbs items={[{ label: 'Mental Health', href: '/mental-health' }, { label: 'Self-Care' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Self-Care for New Parents</h1>
      <p className="text-sm text-muted mb-1">Practical strategies for when you have nothing left</p>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'PSI', 'ACOG']} />

      <p className="text-sm text-muted my-6 leading-relaxed">
        This is not a page about bubble baths and face masks. This is about the bare minimum you need to function — and why meeting your own needs is not optional, not selfish, and not a luxury. If you are reading this through exhaustion-blurred eyes, wondering if you even deserve to take care of yourself: you do. Unequivocally.
      </p>

      <KeyTakeaways
        takeaways={[
          'Self-care for new parents starts with the basics: food, water, sleep, and fresh air. Everything else is a bonus.',
          'Taking care of yourself is not selfish — it is necessary for sustainable, present parenting.',
          'Micro-moments of care (5 minutes of quiet, eating a warm meal, stepping outside) compound over time.',
          'Self-care looks different for every person. What replenishes you is valid, whatever it is.',
          'If you cannot meet basic needs without help, that is a sign you need more support — not that you are failing.',
        ]}
      />

      <div className="space-y-6">
        <Section title="Start with survival-level self-care">
          <p>
            When you are in the thick of newborn care or parenting exhaustion, start with the absolute basics:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Eat something:</strong> It does not need to be gourmet. A granola bar, a banana, crackers with peanut butter. Your brain and body need fuel.</li>
            <li><strong>Drink water:</strong> Keep a water bottle within reach at all times. Dehydration worsens fatigue and mood.</li>
            <li><strong>Sleep when you can:</strong> Sleep deprivation is not a badge of honor. Nap when baby naps (at least sometimes). Accept help with night feeds if possible.</li>
            <li><strong>Get outside:</strong> Even 5 minutes of daylight and fresh air can shift your mood. Stand on a porch. Walk to the mailbox.</li>
            <li><strong>Basic hygiene:</strong> A shower can feel like a reset. If a shower is not possible, change your clothes. Small acts of tending to yourself matter.</li>
          </ul>
          <p className="mt-2">
            If you cannot consistently meet these basic needs, that is not a personal failing — it is a signal that you need more support. Ask for help. Accept help. Demand help if necessary.
          </p>
        </Section>

        <Section title="Beyond survival: emotional self-care">
          <p>Once basic needs are met (or even alongside working toward them), emotional self-care helps you stay connected to yourself:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Solitude:</strong> Even 10 minutes alone — in the car, in the bathroom, on a brief walk — can help your nervous system regulate</li>
            <li><strong>Adult connection:</strong> Talk to another adult who is not your baby. A text, a phone call, a parent group.</li>
            <li><strong>Something that is just for you:</strong> Listen to a podcast, read a page of a book, draw, stretch — something that reminds you that you exist as a person, not just a caregiver</li>
            <li><strong>Permission to feel:</strong> You do not have to be grateful and happy every moment. You can love your baby and also find this hard. Both are true.</li>
            <li><strong>Boundaries:</strong> Say no to visitors, obligations, or tasks that drain rather than fill you — especially in the early weeks</li>
          </ul>
        </Section>

        <Section title="Self-care when you feel guilty about it">
          <p>
            Many parents (especially mothers) feel guilty about meeting their own needs. This guilt is cultural, not rational. Consider these reframing thoughts:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>A regulated parent is a better parent. Rest makes you more patient, present, and responsive.</li>
            <li>You are modeling healthy self-care for your child. They will learn that adults deserve care too.</li>
            <li>Your baby needs a parent who can sustain this for years — burnout is not sustainable.</li>
            <li>Meeting your needs is not taking anything away from your baby.</li>
            <li>You deserve care simply because you are a human being, not because of what you produce.</li>
          </ul>
        </Section>

        <Section title="Practical tips for making self-care happen">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Lower the bar:</strong> Self-care does not need to be a 2-hour spa trip. Five minutes counts.</li>
            <li><strong>Build it into routine:</strong> Pair self-care with existing habits (stretch while waiting for the bottle to warm, listen to music during diaper changes)</li>
            <li><strong>Accept imperfect help:</strong> Your partner/family member will do things differently. Let them. The task getting done is more important than it being done your way.</li>
            <li><strong>Prepare in advance:</strong> Keep easy snacks accessible, fill water bottles at night, set out comfortable clothes</li>
            <li><strong>Use nap time strategically:</strong> Not every nap needs to be for chores. Alternate between productive and restorative nap times.</li>
            <li><strong>Say no:</strong> Decline social obligations that feel draining. Postpone non-essential tasks. Protect your energy.</li>
            <li><strong>Ask for specific help:</strong> Instead of &quot;I need help,&quot; try &quot;Can you take the baby for 30 minutes so I can shower and eat?&quot;</li>
          </ul>
        </Section>

        <Section title="When self-care is not enough">
          <p>
            Sometimes self-care alone cannot fix what is wrong. If you are implementing self-care strategies and still feel depleted, hopeless, or unable to function, you may need professional support:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Persistent exhaustion that does not improve with rest may indicate depression or a medical issue</li>
            <li>Inability to enjoy anything at all may be a symptom of PPD</li>
            <li>If self-care feels impossible because there is literally no support, you may need to address the structural issue (more help, different arrangement)</li>
            <li>If you are coping with substances, disordered eating, or self-harm, please reach out to a provider</li>
          </ul>
          <p className="mt-2">
            Self-care is a complement to professional help, not a replacement for it when you are struggling.
          </p>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Self-care for new parents is not about luxury — it is about survival and sustainability. You cannot pour from an empty cup, and you deserve to have your basic needs met. Start small, release guilt, and remember: taking care of yourself is one of the most important things you can do for your baby."
        supportiveMessage="You matter. Not just as a parent, but as a person. Your needs are valid. Your tiredness is real. And taking 5 minutes for yourself does not make you selfish — it makes you human."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/mental-health/burnout" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Parental Burnout</Link>
        <Link href="/mental-health/rage" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Parental Rage</Link>
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
