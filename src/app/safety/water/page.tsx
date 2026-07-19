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
  title: 'Water Safety for Babies',
  description:
    'Water safety guide for babies and toddlers. Bathtub drowning prevention, pool safety, beach safety, and swim lesson guidance based on AAP recommendations.',
  alternates: { canonical: '/safety/water' },
  openGraph: {
    title: 'Water Safety for Babies | Is My Baby Alright?',
    description:
      'Bathtub drowning prevention, pool safety, beach safety, and swim lessons based on AAP recommendations.',
  },
};

const faqItems = [
  { question: 'At what age can a baby take swim lessons?', answer: 'The AAP states that swim lessons can begin at age 1. However, swim lessons do not make a child "drown-proof" and do not replace adult supervision. Children under 4 lack the developmental ability to master survival swimming.' },
  { question: 'How quickly can a child drown?', answer: 'A child can lose consciousness in as little as 20 seconds and suffer irreversible brain damage in 4-6 minutes. Drowning is silent — there is usually no splashing or screaming.' },
  { question: 'Are puddle jumpers and floaties safe?', answer: 'Inflatable water wings and puddle jumpers are not safety devices. They can give children a false sense of security and do not prevent drowning. Use a properly fitted US Coast Guard-approved life jacket when near open water.' },
  { question: 'What kind of pool fence is required?', answer: 'The AAP and CPSC recommend a 4-sided fence at least 4 feet tall with a self-closing, self-latching gate that opens outward. The house should not serve as one side of the fence.' },
  { question: 'Is secondary drowning real?', answer: 'The medical community does not use the term "secondary drowning." However, if a child has a submersion event and develops coughing, difficulty breathing, or unusual behavior afterward, seek medical attention immediately. These symptoms can indicate water in the lungs.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Water Safety' },
];

export default function WaterSafetyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Water Safety for Babies and Toddlers',
          description: 'Comprehensive water safety guide covering bathtub safety, pool safety, beach safety, and drowning prevention for infants and toddlers.',
          path: '/safety/water',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Drowning Prevention Policy', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'CPSC Pool Safety', url: 'https://www.cpsc.gov/' },
            { name: 'Safe Kids Worldwide Water Safety', url: 'https://www.safekids.org/' },
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

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Water Safety' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Water Safety for Babies and Toddlers
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CPSC', 'Safe Kids Worldwide']} />
      <p className="text-sm text-muted mb-6">
        Drowning is the leading cause of injury death in children ages 1-4.
        It is fast, silent, and preventable. This guide covers water safety
        from the bathtub to the beach.
      </p>

      <KeyTakeaways
        takeaways={[
          'Drowning is the #1 cause of injury death in children ages 1-4',
          'A child can drown in as little as 1 inch of water in under 60 seconds',
          'Drowning is silent — there is no splashing or crying for help',
          'Never leave a child unattended near any water source, even for a moment',
          'Install a 4-sided, 4-foot fence with self-closing gate around all pools',
        ]}
      />

      <div className="space-y-6">
        <Section title="Bathtub safety">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Never leave a child alone in the tub</strong> — not even for a second</li>
            <li>Bath seats are NOT safety devices and should not replace supervision</li>
            <li>Drain the tub immediately after use</li>
            <li>Keep toilet lids closed and locked</li>
            <li>Empty all buckets, basins, and containers after use</li>
            <li>Set water heater to 120 degrees F to prevent scalding</li>
            <li>Test water temperature before placing baby in the tub</li>
          </ul>
        </Section>

        <Section title="Pool safety">
          <p>If you have a pool or live near one:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>4-sided fence</strong> at least 4 feet tall around the pool</li>
            <li><strong>Self-closing, self-latching gate</strong> that opens away from the pool</li>
            <li><strong>The house should not be one side of the fence</strong> — a child can exit through a door</li>
            <li><strong>Pool alarms</strong> on gates and the water surface</li>
            <li><strong>Drain covers</strong> that meet current safety standards (to prevent entrapment)</li>
            <li><strong>Remove ladders</strong> from above-ground pools when not in use</li>
            <li><strong>Empty kiddie pools</strong> immediately after use</li>
            <li><strong>Designate a Water Watcher</strong> — one adult whose sole job is watching children in the water (no phone)</li>
            <li><strong>Learn CPR</strong> — seconds matter in a drowning emergency</li>
          </ul>
        </Section>

        <Section title="Beach and open water safety">
          <ul className="list-disc list-inside space-y-1">
            <li>Use a US Coast Guard-approved life jacket (not inflatable toys or water wings)</li>
            <li>Stay within arm&apos;s reach of children under 5 near any open water</li>
            <li>Swim at lifeguarded beaches only</li>
            <li>Watch for rip currents and water conditions</li>
            <li>Never let a child swim in canals, ditches, or fast-moving water</li>
            <li>Check water depth before allowing jumping or diving</li>
            <li>Apply waterproof sunscreen and reapply after swimming</li>
          </ul>
        </Section>

        <Section title="Layers of protection">
          <p>The AAP recommends multiple layers of protection because no single strategy is enough:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li><strong>Barriers</strong> — fences, gates, door locks, toilet locks</li>
            <li><strong>Supervision</strong> — constant, focused adult attention (no phones)</li>
            <li><strong>Swim skills</strong> — lessons starting at age 1 (but not a substitute for supervision)</li>
            <li><strong>Emergency preparedness</strong> — CPR training, phone nearby, rescue equipment at poolside</li>
          </ol>
        </Section>

        <Section title="Swim lessons by age">
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-foreground">Under 12 months</p>
              <p>Parent-infant water familiarization classes are available but do not teach swimming skills. Focus is on comfort in water and parent bonding.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">1-4 years</p>
              <p>The AAP supports swim lessons starting at age 1. Look for instructors certified by the American Red Cross or YMCA. Lessons reduce drowning risk but do not eliminate it.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">4+ years</p>
              <p>Children can begin learning formal swimming strokes and water safety skills. Continue close supervision regardless of skill level.</p>
            </div>
          </div>
        </Section>

        <Section title="Water safety checklist">
          <ul className="list-disc list-inside space-y-1">
            <li>Pool fenced on all 4 sides with self-latching gate</li>
            <li>Pool alarm installed</li>
            <li>CPR training current for all caregivers</li>
            <li>Phone accessible at poolside for emergencies</li>
            <li>US Coast Guard-approved life jackets for boating and open water</li>
            <li>No inflatable toys used as safety devices</li>
            <li>Bathtub drained immediately after use</li>
            <li>Toilet locks installed</li>
            <li>All buckets and containers emptied</li>
            <li>Water Watcher designated during gatherings</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Drowning is fast, silent, and preventable. The most important protection is constant adult supervision — within arm's reach for children under 5. Combine this with barriers (pool fences, toilet locks), swim lessons after age 1, and CPR training for all caregivers."
        supportiveMessage="Water safety can feel overwhelming, especially if you have a pool. Focus on layers of protection: no single measure is enough, but multiple layers together dramatically reduce risk."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/safety" className="text-sm text-primary font-semibold hover:underline">&larr; Back to Safety</Link>
        <Link href="/safety/car-seat" className="text-sm text-primary font-semibold hover:underline">Car Seat Safety &rarr;</Link>
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
