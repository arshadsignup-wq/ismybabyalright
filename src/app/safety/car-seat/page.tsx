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
  title: 'Car Seat Safety Guide',
  description:
    'Comprehensive car seat safety guide. Rear-facing vs forward-facing, installation tips, common mistakes, and when to transition by age and weight. AAP guidelines.',
  alternates: { canonical: '/safety/car-seat' },
  openGraph: {
    title: 'Car Seat Safety Guide | Is My Baby Alright?',
    description:
      'Rear-facing vs forward-facing, installation, common mistakes, and when to transition. Based on AAP guidelines.',
  },
};

const faqItems = [
  { question: 'How long should my child be rear-facing?', answer: 'The AAP recommends rear-facing as long as possible, at least until age 2 or until the child reaches the maximum height or weight limit of their rear-facing car seat. Many convertible seats allow rear-facing up to 40-50 lbs.' },
  { question: 'How do I know if my car seat is installed correctly?', answer: 'The seat should not move more than 1 inch side-to-side or front-to-back at the belt path. The harness should be snug (you should not be able to pinch excess webbing at the shoulder). Get a free inspection at a certified car seat inspection station.' },
  { question: 'Can I use a car seat after an accident?', answer: 'After a moderate or severe crash, the car seat must be replaced even if it looks undamaged. After a minor crash (all doors work, no airbag deployment, no visible damage to the seat, vehicle can be driven away), some manufacturers allow continued use. Check your car seat manual.' },
  { question: 'Is it safe to buy a used car seat?', answer: 'Only if you know its full history: it has never been in a crash, has not been recalled, is not expired (check the label — most expire after 6-10 years), and has all its parts and the manual.' },
  { question: 'When can my child use a booster seat?', answer: 'When they outgrow the forward-facing harness limits (usually around age 4-5 and 40+ lbs). They should remain in a booster until the seat belt fits properly: lap belt low across the hips, shoulder belt across the chest (not the neck). This is typically around age 8-12 or 4 feet 9 inches tall.' },
  { question: 'Can my child wear a coat in the car seat?', answer: 'No. Puffy coats create space between the child and the harness, which can cause the child to be ejected in a crash. Instead, buckle the child in, then place a blanket or coat over the harness.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Car Seat Safety' },
];

export default function CarSeatSafetyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Car Seat Safety Guide',
          description: 'Comprehensive car seat safety guide covering rear-facing, forward-facing, booster seats, installation, and common mistakes.',
          path: '/safety/car-seat',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Car Seat Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'NHTSA Car Seat Recommendations', url: 'https://www.nhtsa.gov/equipment/car-seats-and-booster-seats' },
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

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Car Seat Safety' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Car Seat Safety: Complete Guide
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'NHTSA', 'Safe Kids Worldwide']} />
      <p className="text-sm text-muted mb-6">
        Car crashes are a leading cause of death for children ages 1-13.
        Correct car seat use reduces the risk of fatal injury by 71% for infants
        and 54% for toddlers. This guide covers every stage.
      </p>

      <KeyTakeaways
        takeaways={[
          'Rear-facing as long as possible — at least until age 2 or the seat\'s height/weight limit',
          'The harness should be snug: you should not be able to pinch excess webbing at the shoulder',
          'The car seat should not move more than 1 inch at the belt path',
          'No puffy coats under the harness — they create dangerous slack',
          'Get a free installation check at a certified inspection station',
        ]}
      />

      <div className="space-y-6">
        <Section title="Car seat stages by age">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-foreground">Stage 1: Rear-facing (birth to 2-4 years)</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>All infants should ride rear-facing from the hospital ride home</li>
                <li>Keep rear-facing as long as possible (AAP removed the age-2 minimum — now says &quot;as long as possible&quot;)</li>
                <li>Most convertible seats allow rear-facing to 40-50 lbs</li>
                <li>Rear-facing is 5x safer than forward-facing for children under 2</li>
                <li>Recline angle: 30-45 degrees for newborns, more upright as child grows (check manual)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">Stage 2: Forward-facing with harness (2-5+ years)</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Only switch when the child exceeds rear-facing height or weight limit</li>
                <li>Use the top tether for forward-facing seats — it reduces head movement by 4-6 inches in a crash</li>
                <li>Harness straps should be at or above shoulder level</li>
                <li>Keep in a harnessed seat as long as possible before transitioning to booster</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">Stage 3: Booster seat (4-12 years)</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Move to booster when child exceeds forward-facing harness limits</li>
                <li>High-back boosters provide head and neck support</li>
                <li>The seat belt must fit properly: lap belt low on hips, shoulder belt across chest</li>
                <li>Stay in booster until seat belt fits without it (typically 4&apos;9&quot; tall, age 8-12)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">Stage 4: Seat belt only</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>The lap belt must lie flat across the upper thighs (not the stomach)</li>
                <li>The shoulder belt must cross the middle of the chest and shoulder (not the neck)</li>
                <li>The child should sit with back against the seat and knees bent over the edge</li>
                <li>All children under 13 should ride in the back seat</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Installation tips">
          <ul className="list-disc list-inside space-y-1">
            <li>Use either LATCH or the seat belt to install — never both (unless the manual says to)</li>
            <li>The seat should not move more than 1 inch side-to-side or front-to-back</li>
            <li>Put your knee in the seat and press down while tightening</li>
            <li>Check the recline angle (most seats have a built-in level indicator)</li>
            <li>Always use the top tether for forward-facing seats</li>
            <li>Read both the car seat manual AND your vehicle manual</li>
            <li>Get a free inspection: find certified technicians at <a href="https://www.nhtsa.gov/equipment/car-seats-and-booster-seats#inspection-station" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">nhtsa.gov</a></li>
          </ul>
        </Section>

        <Section title="Common mistakes">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Loose harness</strong> — you should not be able to pinch excess webbing at the shoulder</li>
            <li><strong>Chest clip too low</strong> — it should be at armpit level</li>
            <li><strong>Puffy coat under harness</strong> — creates dangerous slack; use a blanket over the harness instead</li>
            <li><strong>Switching to forward-facing too early</strong> — rear-facing is much safer</li>
            <li><strong>Not using top tether</strong> — reduces head movement by 4-6 inches in a crash</li>
            <li><strong>Seat not tight enough</strong> — should not move more than 1 inch at belt path</li>
            <li><strong>Using an expired or recalled seat</strong> — check the date on the label and check cpsc.gov</li>
            <li><strong>Wrong recline angle</strong> — too upright can compromise a newborn&apos;s airway</li>
          </ul>
        </Section>

        <Section title="Car seat safety checklist">
          <ul className="list-disc list-inside space-y-1">
            <li>Car seat is age, weight, and height appropriate</li>
            <li>Seat does not move more than 1 inch at belt path</li>
            <li>Harness is snug (no pinchable slack at shoulder)</li>
            <li>Chest clip is at armpit level</li>
            <li>No puffy clothing under harness</li>
            <li>Top tether used for forward-facing seats</li>
            <li>Recline angle is correct (check indicator on seat)</li>
            <li>Seat is not expired (check label for date)</li>
            <li>Seat has not been in a moderate/severe crash</li>
            <li>Seat has not been recalled (check cpsc.gov)</li>
            <li>Child rides in back seat until age 13</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Keep your child rear-facing as long as possible, ensure the harness is snug with no excess webbing at the shoulder, and get a free installation check from a certified technician. Car seat safety is the single most impactful thing you can do to protect your child in a vehicle."
        supportiveMessage="Car seat rules can feel confusing with all the stages and limits. When in doubt, keep your child in their current stage as long as possible — the next stage is always less protective than the current one."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/safety" className="text-sm text-primary font-semibold hover:underline">&larr; Back to Safety</Link>
        <Link href="/safety/choking-prevention" className="text-sm text-primary font-semibold hover:underline">Choking Prevention &rarr;</Link>
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
