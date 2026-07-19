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
  title: 'Nursery Safety Setup Guide',
  description:
    'Complete nursery safety guide. Crib safety standards, safe sleep setup, furniture anchoring, window safety, and nursery hazards based on AAP and CPSC guidelines.',
  alternates: { canonical: '/safety/nursery' },
  openGraph: {
    title: 'Nursery Safety Setup Guide | Is My Baby Alright?',
    description:
      'Crib safety standards, safe sleep setup, furniture anchoring, window safety, and nursery hazards from AAP and CPSC.',
  },
};

const faqItems = [
  { question: 'What are the current crib safety standards?', answer: 'Use a crib manufactured after June 2011 that meets CPSC standards. Slats must be no more than 2-3/8 inches apart. Drop-side cribs are banned. The mattress must fit snugly with no gaps larger than two fingers between the mattress and crib sides.' },
  { question: 'Can I use a second-hand crib?', answer: 'Only if it meets current CPSC safety standards (post-June 2011), has no broken or missing parts, has not been recalled, and has a snug-fitting mattress. Never use a drop-side crib regardless of condition.' },
  { question: 'When should I lower the crib mattress?', answer: 'Lower it before your baby can pull to standing, usually around 6-8 months. Many parents lower it when baby first starts sitting up independently, around 5-6 months, to be safe.' },
  { question: 'Should I use a baby monitor?', answer: 'A baby monitor helps you hear your baby but is not a substitute for safe sleep practices. Video monitors with breathing sensors are not proven to prevent SIDS. Focus on following AAP safe sleep guidelines.' },
  { question: 'When should I transition from crib to toddler bed?', answer: 'When your child can climb out of the crib, typically between 18-36 months. Climbing out poses a serious fall risk. Use the lowest mattress setting first, and consider a sleep sack to discourage climbing.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Nursery Safety' },
];

export default function NurserySafetyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Nursery Safety Setup Guide',
          description: 'Complete nursery safety guide covering crib safety standards, safe sleep setup, furniture anchoring, and window safety.',
          path: '/safety/nursery',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Safe Sleep Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'CPSC Crib Safety Standards', url: 'https://www.cpsc.gov/' },
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

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Nursery Safety' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Nursery Safety Setup Guide
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CPSC', 'Safe Kids Worldwide']} />
      <p className="text-sm text-muted mb-6">
        Setting up a safe nursery is one of the most important preparations for a new baby.
        This guide covers current safety standards for cribs, furniture, and the sleep environment.
      </p>

      <KeyTakeaways
        takeaways={[
          'Use a crib meeting current CPSC standards (post-June 2011) with a firm, flat mattress',
          'Nothing in the crib: no blankets, pillows, bumpers, stuffed animals, or loose bedding',
          'Anchor all furniture to the wall — tip-overs kill a child every 2 weeks in the US',
          'Keep the crib away from windows, blinds, and cords',
          'Lower the crib mattress before baby can pull to standing',
        ]}
      />

      <div className="space-y-6">
        <Section title="Crib safety requirements">
          <p>Your crib must meet these CPSC standards:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Manufactured after June 2011 (current safety standards)</li>
            <li>Slats no more than 2-3/8 inches apart (a soda can should not fit between them)</li>
            <li>No drop sides (banned due to infant deaths)</li>
            <li>No corner posts higher than 1/16 inch (prevents clothing from catching)</li>
            <li>Firm, flat mattress that fits snugly (no gap larger than two fingers)</li>
            <li>No cut-outs in headboard or footboard</li>
            <li>All hardware tight and secure, no missing parts</li>
          </ul>
          <p className="mt-2 text-xs">
            Check for recalls at <a href="https://www.cpsc.gov/Recalls" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">cpsc.gov/Recalls</a>
          </p>
        </Section>

        <Section title="Safe sleep environment">
          <p>Follow the AAP safe sleep guidelines to reduce the risk of SIDS:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Bare crib only</strong> — fitted sheet and nothing else</li>
            <li><strong>No bumpers</strong> (including mesh ones) — they pose suffocation and entanglement risks</li>
            <li><strong>No blankets</strong> — use a wearable blanket (sleep sack) for warmth</li>
            <li><strong>No pillows or positioners</strong> — these are suffocation hazards</li>
            <li><strong>No stuffed animals</strong> until at least 12 months</li>
            <li><strong>Room temperature</strong> 68-72 degrees F (20-22 degrees C)</li>
            <li><strong>No overheating</strong> — dress baby in one layer more than you would wear</li>
          </ul>
        </Section>

        <Section title="Furniture anchoring">
          <p>Furniture tip-overs kill a child approximately every two weeks in the United States:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Anchor all dressers, bookshelves, and tall furniture to the wall with anti-tip straps</li>
            <li>Place heavier items in lower drawers</li>
            <li>Do not place a TV on top of furniture (mount it or use an anti-tip strap)</li>
            <li>Use dresser drawer stops to prevent drawers from being pulled all the way out</li>
            <li>Keep the changing pad area low or on the floor if possible</li>
            <li>Never leave a baby unattended on a changing table</li>
          </ul>
        </Section>

        <Section title="Window and blind safety">
          <ul className="list-disc list-inside space-y-1">
            <li>Install window guards or window stops (windows should not open more than 4 inches)</li>
            <li>Move the crib away from windows</li>
            <li>Replace blinds with corded pulls — blind cords are a strangulation hazard</li>
            <li>If cords exist, use cord cleats to secure them out of reach</li>
            <li>Do not place furniture near windows that children could climb on</li>
          </ul>
        </Section>

        <Section title="Nursery safety checklist">
          <ul className="list-disc list-inside space-y-1">
            <li>Crib meets current CPSC standards</li>
            <li>Mattress firm and snug-fitting</li>
            <li>Nothing in the crib except fitted sheet</li>
            <li>All furniture anchored to walls</li>
            <li>Electrical outlets covered</li>
            <li>Window guards or stops installed</li>
            <li>No blind cords in reach</li>
            <li>Smoke detector and carbon monoxide detector in or near room</li>
            <li>Nightlight plugged into a covered outlet (not a lamp that can be pulled down)</li>
            <li>Door stops or door holders (prevent pinched fingers)</li>
            <li>No small objects, coins, or batteries accessible</li>
            <li>Diaper cream, powder, and wipes stored out of baby&apos;s reach</li>
          </ul>
        </Section>

        <Section title="Changing table safety">
          <p>Falls from changing tables are one of the most common nursery injuries:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Always keep one hand on the baby</li>
            <li>Have all supplies within arm&apos;s reach before starting</li>
            <li>Use the safety strap every time</li>
            <li>Never turn your back, even for a second</li>
            <li>Consider changing on the floor to eliminate fall risk entirely</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="A safe nursery starts with a bare crib that meets current safety standards, furniture anchored to walls, and no hazards within reach. Lower the crib mattress before your baby can pull up, and revisit safety measures every few months as your child develops new abilities."
        supportiveMessage="You do not need to buy the most expensive crib or furniture to keep your baby safe. What matters most is following the guidelines: firm mattress, nothing in the crib, and furniture secured to the wall."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/safety" className="text-sm text-primary font-semibold hover:underline">&larr; Back to Safety</Link>
        <Link href="/safety/water" className="text-sm text-primary font-semibold hover:underline">Water Safety &rarr;</Link>
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
