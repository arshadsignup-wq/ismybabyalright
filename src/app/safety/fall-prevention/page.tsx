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
  title: 'Fall Prevention for Babies',
  description:
    'Fall prevention guide for babies and toddlers. Furniture anchoring, stair gates, changing table safety, window guards, and when to seek medical attention after a fall.',
  alternates: { canonical: '/safety/fall-prevention' },
  openGraph: {
    title: 'Fall Prevention for Babies | Is My Baby Alright?',
    description:
      'Furniture anchoring, stair gates, changing table safety, window guards, and when to seek care after a fall.',
  },
};

const faqItems = [
  { question: 'When should I worry after my baby falls?', answer: 'Seek immediate medical attention if: the child loses consciousness, has a seizure, vomits more than once, has clear fluid from nose or ears, has unequal pupils, is unusually sleepy or difficult to wake, has a bulging fontanelle, or fell from more than 3 feet onto a hard surface. Call 911 for any fall from a significant height or if the child is unresponsive.' },
  { question: 'How do I anchor furniture to the wall?', answer: 'Use furniture anti-tip straps or L-brackets. Attach one end to the furniture and the other to a wall stud (not just drywall). Most kits come with hardware and instructions. Anchor all dressers, bookshelves, TV stands, and any tall furniture. IKEA and most furniture retailers sell low-cost anchor kits.' },
  { question: 'What type of baby gate is safest for stairs?', answer: 'Hardware-mounted gates (screwed into the wall or banister) are required for the top of stairs. Pressure-mounted gates are only appropriate for the bottom of stairs or between rooms. Gates should be at least 22 inches tall and have no footholds that children can climb.' },
  { question: 'Are baby walkers safe?', answer: 'No. The AAP recommends against baby walkers because they cause approximately 2,000 injuries per year, mostly from falling down stairs. Stationary activity centers are a safer alternative.' },
  { question: 'When should I install window guards?', answer: 'Before your baby can pull to standing, typically around 8-10 months. Windows above the first floor should have guards or stops that prevent opening more than 4 inches. Do not rely on window screens — they are not strong enough to prevent falls.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Fall Prevention' },
];

export default function FallPreventionPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Fall Prevention for Babies and Toddlers',
          description: 'Complete fall prevention guide covering furniture anchoring, stair safety, changing tables, window guards, and when to seek medical attention.',
          path: '/safety/fall-prevention',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Injury Prevention Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'CPSC Furniture Anchoring', url: 'https://www.cpsc.gov/' },
            { name: 'Safe Kids Worldwide', url: 'https://www.safekids.org/' },
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

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Fall Prevention' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Fall Prevention for Babies and Toddlers
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CPSC', 'Safe Kids Worldwide']} />
      <p className="text-sm text-muted mb-6">
        Falls are the leading cause of non-fatal injuries in children under 5.
        Furniture tip-overs, stair falls, and falls from changing tables and beds
        are all common and preventable.
      </p>

      <KeyTakeaways
        takeaways={[
          'Anchor ALL tall furniture (dressers, bookshelves, TVs) to the wall — tip-overs kill a child every 2 weeks',
          'Use hardware-mounted gates at the top of stairs (pressure-mounted gates can be pushed out)',
          'Never leave a baby unattended on elevated surfaces (changing tables, beds, couches)',
          'Install window guards or stops on all windows above the first floor',
          'The AAP recommends against baby walkers — they cause approximately 2,000 injuries per year',
        ]}
      />

      <div className="space-y-6">
        <Section title="Furniture tip-over prevention">
          <p>A child is killed by a furniture or TV tip-over approximately every 2 weeks in the United States:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Anchor all dressers</strong> to wall studs with anti-tip straps or L-brackets</li>
            <li><strong>Anchor bookshelves</strong> regardless of weight — children climb on them</li>
            <li><strong>Mount TVs to the wall</strong> or secure with an anti-tip strap to furniture</li>
            <li><strong>Place heavier items in lower drawers</strong> to lower the center of gravity</li>
            <li><strong>Use dresser drawer stops</strong> to prevent drawers from being pulled all the way out</li>
            <li><strong>Do not place tempting items</strong> (toys, remotes, snacks) on top of furniture that might encourage climbing</li>
            <li><strong>Remove knobs</strong> from dressers if your child uses them as footholds</li>
          </ul>
        </Section>

        <Section title="Stair safety">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Top of stairs:</strong> Hardware-mounted gate (required — pressure gates can fail)</li>
            <li><strong>Bottom of stairs:</strong> Pressure-mounted or hardware-mounted gate</li>
            <li>Gates should be at least 22 inches tall with no climbable footholds</li>
            <li>Avoid gates with horizontal bars that can be used as a ladder</li>
            <li>Keep stairs clear of toys, clothing, and clutter</li>
            <li>Ensure stair railings have no gaps wider than 4 inches</li>
            <li>Add non-slip strips to wooden or slippery stairs</li>
            <li>Teach toddlers to go down stairs backward (on their belly, feet first)</li>
          </ul>
        </Section>

        <Section title="Changing table and elevated surface safety">
          <p>Falls from changing tables are one of the most common infant injuries:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Always keep one hand on the baby</li>
            <li>Have all supplies within arm&apos;s reach before starting a diaper change</li>
            <li>Use the safety strap every time</li>
            <li>Never turn your back — babies can roll off in an instant</li>
            <li>Consider changing diapers on the floor to eliminate fall risk entirely</li>
            <li>Never leave a baby unattended on a bed, couch, or other elevated surface</li>
            <li>Do not place car seats, bouncers, or carriers on tables or counters</li>
          </ul>
        </Section>

        <Section title="Window safety">
          <ul className="list-disc list-inside space-y-1">
            <li>Install window guards or window stops on all windows above the first floor</li>
            <li>Windows should not open more than 4 inches</li>
            <li><strong>Window screens do not prevent falls</strong> — they are for insects only</li>
            <li>Move furniture away from windows (children climb on furniture to reach windows)</li>
            <li>Keep cribs away from windows</li>
            <li>Choose window guards that can be released by adults in case of fire</li>
          </ul>
        </Section>

        <Section title="Fall hazards by age">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-foreground">0-6 months</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Falls from changing tables, beds, and couches</li>
                <li>Falls from car seats placed on tables (vibration can move them to the edge)</li>
                <li>Prevention: always keep a hand on baby on elevated surfaces</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">6-12 months (crawling, pulling up)</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Stair falls (install gates before crawling begins)</li>
                <li>Falls from standing (pad sharp corners on furniture)</li>
                <li>Furniture tip-overs from pulling up on unstable items</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">12-24 months (walking, climbing)</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Climbing on furniture, opening drawers as steps</li>
                <li>Window falls (install guards)</li>
                <li>Falls from playground equipment</li>
                <li>Baby walker injuries (the AAP recommends against walkers)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">2-4 years (running, jumping, climbing)</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Falls from beds (transition to a toddler bed with guardrails)</li>
                <li>Playground falls (ensure proper surfacing: rubber, mulch, or sand)</li>
                <li>Trampoline injuries (the AAP recommends against home trampolines for children under 6)</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="When to seek medical attention after a fall">
          <p className="font-semibold text-foreground">Call 911 or go to the ER if:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Loss of consciousness (even briefly)</li>
            <li>Seizure</li>
            <li>Vomiting more than once</li>
            <li>Clear fluid leaking from nose or ears</li>
            <li>Unequal pupils</li>
            <li>Unable to move an arm or leg</li>
            <li>Bulging fontanelle (soft spot) in infants</li>
            <li>Fall from more than 3 feet onto a hard surface</li>
            <li>Unusual drowsiness or difficulty waking</li>
          </ul>
          <p className="font-semibold text-foreground mt-3">Monitor at home if:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Short fall from low height onto soft surface</li>
            <li>Child cries immediately (a good sign)</li>
            <li>No loss of consciousness</li>
            <li>Acting normally within 15-30 minutes</li>
            <li>Watch for 24-48 hours for changes in behavior, balance, or appetite</li>
          </ul>
        </Section>

        <Section title="Fall prevention checklist">
          <ul className="list-disc list-inside space-y-1">
            <li>All tall furniture anchored to wall studs</li>
            <li>TV mounted or secured with anti-tip strap</li>
            <li>Hardware-mounted gate at top of stairs</li>
            <li>Gates at bottom of stairs and room entrances as needed</li>
            <li>Window guards or stops on upper-floor windows</li>
            <li>No furniture near windows</li>
            <li>Corner guards on sharp furniture edges</li>
            <li>Non-slip rugs or rug pads on all area rugs</li>
            <li>Changing supplies within arm&apos;s reach</li>
            <li>No baby walkers in the home</li>
            <li>Crib mattress at lowest setting before baby can pull up</li>
            <li>Beds have guardrails for toddlers</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Falls are the most common cause of injury in young children, but most are preventable. Anchor all furniture to the wall, use hardware-mounted gates at the top of stairs, never leave a baby on an elevated surface, and install window guards. These four actions prevent the majority of serious fall injuries."
        supportiveMessage="Babies fall — it is part of learning to move. Most minor falls result in bumps and tears, not serious injury. Focus on preventing falls from heights and furniture tip-overs, and know the warning signs that require medical attention."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/safety" className="text-sm text-primary font-semibold hover:underline">&larr; Back to Safety</Link>
        <Link href="/safety/burns" className="text-sm text-primary font-semibold hover:underline">Burns Prevention &rarr;</Link>
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
