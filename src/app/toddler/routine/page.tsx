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
  title: 'Daily Routines for Toddlers',
  description:
    'How to create daily routines for toddlers that reduce tantrums and build security. Sample schedules for 12-36 months, nap transitions, and handling disruptions.',
  alternates: { canonical: '/toddler/routine' },
  openGraph: {
    title: 'Daily Routines for Toddlers | Is My Baby Alright?',
    description: 'Sample schedules and tips for building predictable routines that reduce tantrums.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Toddler Guide', url: '/toddler' },
  { name: 'Daily Routines' },
];

const faqItems = [
  { question: 'How strict should a toddler routine be?', answer: 'Routines should be consistent in sequence (what comes after what) rather than rigid in timing. A predictable order of events matters more than exact clock times. Flexibility within structure is the goal.' },
  { question: 'When do toddlers drop to one nap?', answer: 'Most toddlers transition from two naps to one between 14-18 months. Signs of readiness include resisting the morning nap, taking longer to fall asleep, or the second nap interfering with bedtime.' },
  { question: 'How do I handle routine disruptions (travel, holidays)?', answer: 'Maintain the most important anchors (wake time, mealtimes, bedtime routine) even when the schedule shifts. Bring familiar items (lovey, books). Accept that some disruption is normal and that your child will readjust within a few days of returning home.' },
  { question: 'My toddler fights every transition. What can I help?', answer: 'Give warnings before transitions ("5 more minutes then bath time"), use visual schedules, offer choices within the transition, and maintain the same order daily. The more predictable the sequence, the less resistance over time.' },
  { question: 'Should toddlers have screen time in their routine?', answer: 'The AAP recommends no more than 1 hour of high-quality programming per day for ages 2-5, and avoiding screens before 18 months (except video calls). If included, make it predictable (same time each day) rather than an on-demand pacifier.' },
];

export default function ToddlerRoutinePage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Daily Routines for Toddlers',
          description: 'How to create daily routines for toddlers that reduce tantrums and build security.',
          path: '/toddler/routine',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Sleep Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'AAP Media Use Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
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

      <Breadcrumbs items={[{ label: 'Toddler Guide', href: '/toddler' }, { label: 'Daily Routines' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Daily Routines for Toddlers</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP']} />
      <p className="text-sm text-muted mb-6">
        Predictable routines give toddlers what they need most: a sense of security and control in a world that is overwhelming. When toddlers know what comes next, they feel safe — and fight transitions less. A good routine is not rigid; it is reliable.
      </p>

      <KeyTakeaways
        takeaways={[
          'Predictable routines reduce tantrums by helping toddlers know what to expect',
          'Sequence matters more than exact timing \u2014 flexibility within structure is the goal',
          'Toddlers (1-3 years) need 11-14 hours of total sleep including naps (AAP)',
          'Visual schedules help toddlers understand and participate in their routine',
          'Routine anchors (wake, meals, nap, bedtime) provide stability even during disruptions',
        ]}
      />

      <div className="space-y-6">
        <Section title="Why routines matter for toddlers">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Reduces anxiety:</strong> Knowing what comes next eliminates the stress of unpredictability</li>
            <li><strong>Fewer power struggles:</strong> &ldquo;It is bath time&rdquo; (routine) creates less resistance than &ldquo;Go take a bath&rdquo; (command)</li>
            <li><strong>Builds independence:</strong> When children know the sequence, they can participate (&ldquo;What comes after dinner?&rdquo;)</li>
            <li><strong>Supports biological rhythms:</strong> Consistent sleep and mealtimes align with circadian rhythms</li>
            <li><strong>Eases transitions:</strong> Moving from one activity to another is easier when it happens the same way daily</li>
            <li><strong>Improves behavior:</strong> Many &ldquo;behavior problems&rdquo; are actually responses to unpredictability or unmet needs (hunger, tiredness)</li>
          </ul>
        </Section>

        <Section title="Sample schedule: 12-18 months (two naps)">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>6:30-7:00 AM:</strong> Wake, diaper change, breakfast</li>
            <li><strong>7:30-9:30 AM:</strong> Active play (outdoor if possible), reading</li>
            <li><strong>9:30-11:00 AM:</strong> Morning nap (60-90 minutes)</li>
            <li><strong>11:00 AM:</strong> Snack</li>
            <li><strong>11:30 AM-12:30 PM:</strong> Play, errands, social time</li>
            <li><strong>12:30 PM:</strong> Lunch</li>
            <li><strong>1:00-3:00 PM:</strong> Afternoon nap (90-120 minutes)</li>
            <li><strong>3:00 PM:</strong> Snack</li>
            <li><strong>3:30-5:30 PM:</strong> Active play, outdoor time</li>
            <li><strong>5:30 PM:</strong> Dinner</li>
            <li><strong>6:00-6:30 PM:</strong> Bath, quiet play, books</li>
            <li><strong>6:30-7:00 PM:</strong> Bedtime routine and sleep</li>
          </ul>
          <p className="mt-2 text-xs">Total sleep: approximately 13-14 hours (11-12 at night + 2-3 in naps)</p>
        </Section>

        <Section title="Sample schedule: 18-36 months (one nap)">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>6:30-7:00 AM:</strong> Wake, get dressed, breakfast</li>
            <li><strong>7:30-9:00 AM:</strong> Active play, outdoor time</li>
            <li><strong>9:00 AM:</strong> Snack</li>
            <li><strong>9:30-11:30 AM:</strong> Activities (playgroup, errands, creative play)</li>
            <li><strong>11:30 AM-12:00 PM:</strong> Lunch</li>
            <li><strong>12:30-2:30 PM:</strong> Nap (90-120 minutes)</li>
            <li><strong>2:30-3:00 PM:</strong> Wake, snack</li>
            <li><strong>3:00-5:00 PM:</strong> Active play, outdoor time, social time</li>
            <li><strong>5:00-5:30 PM:</strong> Dinner</li>
            <li><strong>5:30-6:30 PM:</strong> Family time, quiet play</li>
            <li><strong>6:30-7:00 PM:</strong> Bath, books, bedtime routine</li>
            <li><strong>7:00-7:30 PM:</strong> Sleep</li>
          </ul>
          <p className="mt-2 text-xs">Total sleep: approximately 12-13 hours (11 at night + 1.5-2 in nap)</p>
        </Section>

        <Section title="Key routine anchors">
          <p>These are the non-negotiable structure points that stay consistent even when everything else shifts:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Wake time:</strong> Within 30 minutes of the same time daily (yes, even weekends)</li>
            <li><strong>Mealtimes:</strong> Consistent timing prevents hunger-related meltdowns</li>
            <li><strong>Nap time:</strong> Same time and same pre-nap routine</li>
            <li><strong>Bedtime routine:</strong> Same sequence (bath, pajamas, brush teeth, books, song, lights out)</li>
          </ul>
          <p className="mt-2">
            Everything between anchors can be flexible. If you maintain these four points, the rest of the day can adapt to circumstances.
          </p>
        </Section>

        <Section title="How to use visual schedules">
          <p>Visual schedules help toddlers understand their routine before they can read or tell time:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Use simple pictures or photos for each activity (eating, playing, sleeping, bath)</li>
            <li>Display at the child&apos;s eye level</li>
            <li>Review the schedule each morning: &ldquo;First breakfast, then play, then nap...&rdquo;</li>
            <li>Reference it during transitions: &ldquo;Look — after lunch comes nap time&rdquo;</li>
            <li>Let your child move a marker or flip cards as they complete each activity</li>
            <li>Keep it simple: 5-8 blocks for the day is enough</li>
          </ul>
        </Section>

        <Section title="Managing the two-to-one nap transition">
          <p>This transition typically happens between 14-18 months. Signs your child is ready:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Consistently resisting the morning nap (playing, chatting instead of sleeping)</li>
            <li>Morning nap is getting shorter (less than 45 minutes)</li>
            <li>Afternoon nap is being pushed too late or refused</li>
            <li>Bedtime is becoming a struggle due to too much daytime sleep</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">How to transition:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Gradually push the morning nap later by 15-30 minutes every few days</li>
            <li>Target a single nap starting around 12:00-1:00 PM</li>
            <li>Expect some overtiredness for 1-2 weeks during the transition</li>
            <li>Move bedtime earlier temporarily (30 minutes) to compensate</li>
            <li>Offer lunch earlier on the new schedule</li>
          </ul>
        </Section>

        <Section title="Easing transitions within the routine">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Give warnings:</strong> &ldquo;5 more minutes of play, then we clean up for lunch&rdquo;</li>
            <li><strong>Use a timer:</strong> External authority (&ldquo;The timer says it is time&rdquo;) can reduce battles</li>
            <li><strong>Offer a bridge:</strong> &ldquo;You can bring one car to the bath&rdquo;</li>
            <li><strong>Sing transition songs:</strong> The same song before nap or cleanup makes it a cue</li>
            <li><strong>Give a role:</strong> &ldquo;Can you carry the towel to the bathroom?&rdquo;</li>
            <li><strong>Avoid abrupt stops:</strong> Let the child finish what they are doing within reason</li>
          </ul>
        </Section>

        <Section title="When routine gets disrupted">
          <p>Travel, illness, holidays, and life changes will disrupt routines. Here is how to handle it:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Maintain as many anchors as possible (bedtime routine, mealtimes)</li>
            <li>Bring familiar items from home (lovey, books, white noise machine)</li>
            <li>Accept that behavior may be harder for a few days — this is normal</li>
            <li>Return to the regular routine immediately when back home</li>
            <li>Most toddlers readjust within 2-3 days of returning to their normal schedule</li>
            <li>Do not introduce new routines during already-stressful times</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="A good toddler routine is predictable in sequence rather than rigid in timing. Consistent anchors (wake time, meals, nap, bedtime) provide the security toddlers need to feel safe and cooperative. When you invest in building routine, you reduce tantrums, ease transitions, and support healthy sleep and eating patterns." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/toddler/social-skills" className="text-sm text-primary font-semibold hover:underline">&larr; Social Skills</Link>
        <Link href="/toddler/transitions" className="text-sm text-primary font-semibold hover:underline">Transitions &rarr;</Link>
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
