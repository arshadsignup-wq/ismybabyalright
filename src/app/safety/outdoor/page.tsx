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
  title: 'Outdoor and Playground Safety',
  description:
    'Outdoor and playground safety guide for babies and toddlers. Safe playground surfaces, age-appropriate equipment, insect safety, heat safety, and supervision tips.',
  alternates: { canonical: '/safety/outdoor' },
  openGraph: {
    title: 'Outdoor and Playground Safety | Is My Baby Alright?',
    description:
      'Safe playground surfaces, age-appropriate equipment, insect safety, heat safety, and supervision tips for babies and toddlers.',
  },
};

const faqItems = [
  { question: 'What playground surface is safest?', answer: 'Rubber surfacing, engineered wood fiber (mulch), pea gravel, or sand at least 12 inches deep under and around equipment. Concrete, asphalt, grass, and packed dirt do not adequately cushion falls. The surfacing should extend at least 6 feet in all directions from equipment.' },
  { question: 'When can my baby use a swing?', answer: 'Bucket-style swings with leg holes are generally appropriate for babies who can sit independently, usually around 6-9 months. Always use age-appropriate swings and supervise closely. Never allow a child to stand in a swing or use an adult swing.' },
  { question: 'Are trampolines safe for toddlers?', answer: 'The AAP recommends against home trampolines for children under 6. Trampolines cause over 100,000 injuries per year. If you use one, only one child should jump at a time, use a safety net enclosure, and ensure adult supervision.' },
  { question: 'How do I protect my baby from insects?', answer: 'For babies 2 months and older, use insect repellent with up to 30% DEET. Do not use insect repellent on babies under 2 months. Apply to exposed skin (not under clothing), avoid hands and face. Oil of lemon eucalyptus should not be used on children under 3.' },
  { question: 'When is it too hot to take my baby outside?', answer: 'The AAP advises limiting sun exposure between 10am-4pm. Babies overheat easily because they cannot sweat efficiently. If the heat index is above 90 degrees F, limit outdoor time. Watch for signs of overheating: flushed skin, rapid breathing, fussiness, and fewer wet diapers.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Outdoor Safety' },
];

export default function OutdoorSafetyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Outdoor and Playground Safety',
          description: 'Complete outdoor safety guide covering playground equipment, surfaces, insect safety, sun protection, and heat safety for babies and toddlers.',
          path: '/safety/outdoor',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Outdoor Safety', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'CPSC Playground Safety', url: 'https://www.cpsc.gov/' },
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

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Outdoor Safety' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Outdoor and Playground Safety
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CPSC', 'Safe Kids Worldwide']} />
      <p className="text-sm text-muted mb-6">
        Outdoor play is essential for development, but playgrounds cause over 200,000
        emergency room visits per year for children. Understanding age-appropriate
        equipment, safe surfaces, and environmental hazards keeps outdoor time safe.
      </p>

      <KeyTakeaways
        takeaways={[
          'Playground surfaces should be rubber, mulch, or sand at least 12 inches deep (never concrete or packed dirt)',
          'Always supervise — over 75% of playground injuries involve falls',
          'Check equipment for hot surfaces in summer before allowing children to play',
          'Use sunscreen (SPF 30+) on babies 6 months and older; keep younger babies in shade',
          'The AAP recommends against home trampolines for children under 6',
        ]}
      />

      <div className="space-y-6">
        <Section title="Playground safety by age">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-foreground">6-12 months</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Bucket-style swings are appropriate once baby can sit independently</li>
                <li>Stay within arm&apos;s reach at all times</li>
                <li>Avoid equipment designed for older children</li>
                <li>Check for small objects (mulch, pebbles) that could be put in mouth</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">1-2 years</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Low slides, small climbing structures, and sandboxes</li>
                <li>Stay within arm&apos;s reach — toddlers fall frequently</li>
                <li>No equipment taller than 4 feet</li>
                <li>Watch for openings between 3.5 and 9 inches (head entrapment risk)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">2-5 years</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Use equipment designated for ages 2-5 (usually shorter and with more guardrails)</li>
                <li>Maximum platform height of 4 feet</li>
                <li>Ensure guardrails and barriers are present on elevated surfaces</li>
                <li>No open S-hooks or protruding bolts</li>
                <li>Actively supervise — stay close enough to catch if needed</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Safe playground surfaces">
          <p>The surface under playground equipment is the most important safety factor:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Safe surfaces:</strong> rubber tiles, poured-in-place rubber, engineered wood fiber (mulch), pea gravel, sand</li>
            <li><strong>Unsafe surfaces:</strong> concrete, asphalt, packed dirt, grass (does not cushion adequately)</li>
            <li>Surface should be at least 12 inches deep for loose-fill materials</li>
            <li>Should extend at least 6 feet in all directions from equipment</li>
            <li>Check for adequate depth — it compacts over time and needs replenishing</li>
          </ul>
        </Section>

        <Section title="Equipment inspection">
          <p>Before letting your child play, check for:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Hot surfaces (metal slides and equipment in direct sun can cause burns)</li>
            <li>Broken, missing, or loose parts</li>
            <li>Rust, splinters, or sharp edges</li>
            <li>Open S-hooks or protruding bolts</li>
            <li>Openings between 3.5 and 9 inches (head entrapment hazard)</li>
            <li>Adequate surfacing underneath and around equipment</li>
            <li>No ropes, jump ropes, or strings attached (strangulation hazard)</li>
          </ul>
        </Section>

        <Section title="Sun and heat safety">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Under 6 months:</strong> Keep out of direct sunlight; use shade, hats, and lightweight protective clothing</li>
            <li><strong>6+ months:</strong> Apply SPF 30+ broad-spectrum sunscreen 15 minutes before going out</li>
            <li>Reapply sunscreen every 2 hours and after sweating</li>
            <li>Limit outdoor time between 10am-4pm when UV is strongest</li>
            <li>Dress in lightweight, light-colored clothing</li>
            <li>Keep babies hydrated (breast milk or formula for infants; water for 6+ months)</li>
            <li>Never leave a child in a parked car — even for a minute</li>
            <li>Watch for signs of overheating: flushed skin, rapid breathing, fussiness, decreased wet diapers</li>
          </ul>
        </Section>

        <Section title="Insect and pest safety">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Under 2 months:</strong> Do not use insect repellent; use mosquito netting over strollers and carriers</li>
            <li><strong>2 months and older:</strong> Use repellent with up to 30% DEET on exposed skin</li>
            <li>Do not apply repellent to hands, eyes, mouth, or under clothing</li>
            <li>Oil of lemon eucalyptus: not for children under 3 years</li>
            <li>Dress in long sleeves and pants in buggy areas</li>
            <li>Avoid areas with standing water (mosquito breeding grounds)</li>
            <li>Check for ticks after outdoor play in wooded or grassy areas</li>
            <li>Avoid scented soaps, lotions, or bright floral patterns that attract bees</li>
            <li>Know the signs of allergic reaction: swelling beyond the bite area, difficulty breathing, hives</li>
          </ul>
        </Section>

        <Section title="Yard and driveway safety">
          <ul className="list-disc list-inside space-y-1">
            <li>Fence the yard if possible, especially if near a road</li>
            <li>Check the yard for toxic plants, mushrooms, and animal droppings</li>
            <li>Store garden tools, chemicals, and fertilizers locked away</li>
            <li>Cover or fence ponds, fountains, and any standing water</li>
            <li>Always walk around the car and check behind before backing up</li>
            <li>Do not let children play in driveways or near parked cars</li>
            <li>Keep children indoors when mowing the lawn (flying debris risk)</li>
            <li>Ensure outdoor play equipment is properly anchored</li>
          </ul>
        </Section>

        <Section title="Outdoor safety checklist">
          <ul className="list-disc list-inside space-y-1">
            <li>Sunscreen applied (6+ months) before going outside</li>
            <li>Hat with brim for sun protection</li>
            <li>Insect repellent if needed (2+ months)</li>
            <li>Check playground surfaces and equipment condition</li>
            <li>Check equipment temperature on hot days</li>
            <li>Water/hydration available</li>
            <li>Shade accessible for breaks</li>
            <li>Age-appropriate equipment only</li>
            <li>Active supervision within arm&apos;s reach for toddlers</li>
            <li>No strings, cords, or drawstrings on clothing (strangulation risk on equipment)</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Outdoor play is important for development but requires active supervision. Choose playgrounds with proper safety surfacing, use age-appropriate equipment, protect against sun and insects, and check for hazards before play. Over 75% of playground injuries are from falls — the surface underneath matters most."
        supportiveMessage="Do not let safety fears keep your child indoors. Outdoor play builds strength, coordination, and confidence. A few simple precautions make outdoor time both safe and fun."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/safety" className="text-sm text-primary font-semibold hover:underline">&larr; Back to Safety</Link>
        <Link href="/safety/pet-safety" className="text-sm text-primary font-semibold hover:underline">Pet Safety &rarr;</Link>
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
