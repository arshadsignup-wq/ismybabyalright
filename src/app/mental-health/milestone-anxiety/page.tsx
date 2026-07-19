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
  title: 'Milestone Comparison Anxiety',
  description:
    'Managing anxiety about your baby hitting milestones. When comparison becomes unhealthy, how to trust normal developmental variation, and when to genuinely worry.',
  alternates: { canonical: '/mental-health/milestone-anxiety' },
  openGraph: {
    title: 'Milestone Comparison Anxiety | Is My Baby Alright?',
    description: 'Managing anxiety about your baby\'s development and milestone comparison.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Mental Health', url: '/mental-health' },
  { name: 'Milestone Anxiety' },
];

const faqItems = [
  { question: 'Is it normal to worry about my baby hitting milestones?', answer: 'Yes, some concern about your baby\'s development is completely normal and even healthy — it shows you are attentive. It becomes problematic when worry is constant, when you cannot enjoy your baby because you are always comparing them to others, when you repeatedly Google the same concerns, or when anxiety about milestones dominates your daily thoughts.' },
  { question: 'My baby is behind on a milestone. Should I panic?', answer: 'No. Developmental milestones have wide ranges of normal. Most milestone charts show the age by which 75% or 90% of children achieve a skill — meaning 10-25% of perfectly healthy children take longer. One delayed milestone in isolation is usually not cause for concern. Talk to your pediatrician if you are worried, but try not to catastrophize a single data point.' },
  { question: 'How do I stop comparing my baby to other babies?', answer: 'Start by recognizing that comparison is a cognitive habit, not a fact-finding mission. Strategies include: limiting social media (curated highlight reels), reminding yourself that development is not a race, focusing on what YOUR baby is doing rather than what they are not, and talking to your pediatrician rather than other parents or Google for reassurance.' },
  { question: 'When should I actually be concerned about my baby\'s development?', answer: 'Talk to your pediatrician if: your baby has lost a skill they previously had (regression), there are multiple areas of delay rather than one, your baby is significantly outside the normal range (not just slightly later than average), or your gut tells you something is genuinely wrong. Your pediatrician can do a developmental screening and refer you for evaluation if needed.' },
  { question: 'Is milestone anxiety a sign of postpartum anxiety?', answer: 'It can be. If your worry about milestones is excessive, constant, interferes with enjoying your baby, leads to compulsive checking/researching, or is part of a broader pattern of anxiety about your baby\'s health and safety, it may be a manifestation of postpartum anxiety. Talk to your provider about the broader picture of how you are feeling.' },
];

export default function MilestoneAnxietyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Milestone Comparison Anxiety',
          description: 'Understanding and managing anxiety about baby developmental milestones, when comparison becomes unhealthy, and when to genuinely worry.',
          path: '/mental-health/milestone-anxiety',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'CDC Developmental Milestones', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
            { name: 'AAP Developmental Surveillance', url: 'https://www.aap.org/en/clinical-guidance/' },
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

      <Breadcrumbs items={[{ label: 'Mental Health', href: '/mental-health' }, { label: 'Milestone Anxiety' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Milestone Comparison Anxiety</h1>
      <p className="text-sm text-muted mb-1">When worry about your baby&apos;s development takes over</p>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['CDC', 'AAP', 'PSI']} />

      <p className="text-sm text-muted my-6 leading-relaxed">
        If you spend more time Googling &quot;is my baby behind?&quot; than enjoying time with your baby, if every playdate becomes a mental comparison, if you lie awake wondering whether your child is developing normally — you are experiencing milestone anxiety. Some concern is healthy, but when it dominates your thoughts and steals your joy, it deserves attention.
      </p>

      <KeyTakeaways
        takeaways={[
          'Developmental milestones have wide ranges of normal — being slightly later than average is rarely cause for concern.',
          'Comparison to other babies (especially on social media) feeds anxiety without providing useful information.',
          'Your pediatrician is the appropriate source for developmental concerns — not Google, not other parents, not milestone apps.',
          'Milestone anxiety can be a manifestation of postpartum anxiety, especially when it is constant and uncontrollable.',
          'Your baby is not a checklist. Development is not a race. Slightly different timelines do not predict future outcomes.',
        ]}
      />

      <div className="space-y-6">
        <Section title="Understanding milestone anxiety">
          <p>
            Milestone anxiety is the persistent, often excessive worry about whether your baby is developing on schedule compared to other babies or published milestone charts. While some developmental awareness is healthy and important, milestone anxiety goes beyond that into territory that causes distress and interferes with the ability to enjoy parenting.
          </p>
          <p>It might look like:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Constantly comparing your baby to other babies the same age</li>
            <li>Repeatedly Googling the same developmental concerns</li>
            <li>Anxiety spiking every time you see another baby doing something yours has not</li>
            <li>Unable to enjoy milestones your baby HAS reached because you are focused on what they have not</li>
            <li>Taking mental notes at every playdate about what other babies can do</li>
            <li>Interpreting every normal variation as a sign of a problem</li>
            <li>Seeking reassurance from multiple sources but never feeling reassured</li>
          </ul>
        </Section>

        <Section title="Why milestone charts can be misleading">
          <p>
            Understanding how milestone data works can reduce anxiety:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Ranges, not deadlines:</strong> Most milestone charts show when 50-90% of children achieve a skill. By definition, 10-50% of healthy children fall outside these ranges.</li>
            <li><strong>Individual patterns vary:</strong> Some babies are early movers but late talkers. Some talk early but walk later. These trade-offs are normal.</li>
            <li><strong>Premature babies have adjusted ages:</strong> If your baby was born early, milestones should be measured from their due date, not birth date.</li>
            <li><strong>Cultural and environmental variation:</strong> Tummy time practices, carrying habits, and cultural norms affect when certain motor skills appear.</li>
            <li><strong>Comparison is not assessment:</strong> Comparing to one other baby at a playdate is not meaningful data. Your pediatrician uses validated screening tools.</li>
          </ul>
        </Section>

        <Section title="Social media and comparison">
          <p>
            Social media amplifies milestone anxiety in several ways:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Parents tend to post achievements (first steps, first words) — not the long boring stretches of normal development</li>
            <li>Early achievers are more likely to be posted about than on-time achievers</li>
            <li>You see dozens of babies the same age as yours, creating a false impression that most babies are ahead</li>
            <li>Algorithm-driven content feeds you more developmental content when you engage with it, creating an echo chamber</li>
          </ul>
          <p className="mt-2">
            Consider: muting parenting accounts that trigger comparison, limiting developmental Googling to specific times (not at 3am), and following your pediatrician&apos;s guidance rather than internet consensus.
          </p>
        </Section>

        <Section title="When to actually talk to your pediatrician">
          <p>Not all developmental concerns are anxiety-driven. Talk to your pediatrician if:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Regression:</strong> Your baby has lost a skill they previously had (e.g., stopped babbling, lost eye contact)</li>
            <li><strong>Multiple areas of delay:</strong> Concerns across several domains (motor, language, social) simultaneously</li>
            <li><strong>Significantly outside range:</strong> Not just slightly later than average, but months behind expected range</li>
            <li><strong>Your gut feeling:</strong> Parental instinct is real and valid — if something feels genuinely wrong, mention it</li>
            <li><strong>Lack of progress:</strong> Baby seems stuck with no forward movement in a skill for an extended period</li>
          </ul>
          <p className="mt-2">
            Your pediatrician would rather hear a concern that turns out to be nothing than miss something because you did not speak up. There is no penalty for asking.
          </p>
        </Section>

        <Section title="Managing milestone anxiety">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Limit Google:</strong> Set a rule — one search per concern, then stop. Reassurance-seeking maintains anxiety.</li>
            <li><strong>Curate social media:</strong> Unfollow or mute accounts that trigger comparison</li>
            <li><strong>Focus on YOUR baby:</strong> Notice what they are doing and celebrate it, rather than tracking what they are not</li>
            <li><strong>Talk to your pediatrician:</strong> One trusted professional opinion is worth more than 100 Google searches</li>
            <li><strong>Remember the range:</strong> &quot;Normal&quot; in development is very wide. Your baby does not need to be average to be healthy.</li>
            <li><strong>Notice the pattern:</strong> If anxiety about milestones is part of a broader pattern of excessive worry about your baby, consider screening for postpartum anxiety</li>
            <li><strong>Journal positives:</strong> Each day, note one thing your baby did that made you smile — shift focus toward connection</li>
          </ul>
        </Section>

        <Section title="When milestone anxiety is postpartum anxiety">
          <p>
            Milestone anxiety may be a symptom of broader postpartum anxiety if:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>You also worry excessively about your baby&apos;s health, safety, or other domains</li>
            <li>The anxiety is constant and feels uncontrollable</li>
            <li>You experience physical symptoms (racing heart, insomnia, nausea)</li>
            <li>Reassurance provides only brief relief before anxiety returns</li>
            <li>You avoid situations because of anxiety (avoiding playdates, avoiding milestone charts)</li>
            <li>The worry is interfering with your ability to enjoy your baby</li>
          </ul>
          <p className="mt-2">
            If this resonates, visit our <Link href="/mental-health/anxiety" className="text-primary hover:underline">postpartum anxiety page</Link> or talk to your healthcare provider.
          </p>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Some awareness of your baby's development is healthy and responsible parenting. But when comparison and worry dominate your experience, steal your joy, and fuel constant anxiety — it deserves attention. Your baby is not a checklist. They are a whole person developing on their own timeline. Trust your pediatrician, trust the wide range of normal, and try to be present with the baby you have."
        supportiveMessage="You are paying attention because you love your baby fiercely. That love is beautiful — but it does not have to come with constant fear. Your baby needs your presence more than they need you to track every milestone."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/mental-health/anxiety" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Postpartum Anxiety</Link>
        <Link href="/mental-health/health-anxiety" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Health Anxiety</Link>
        <Link href="/milestones" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Milestone Tracker</Link>
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
