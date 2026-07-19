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
  title: 'Travel Safety with Babies',
  description:
    'Travel safety guide for families with babies. Airplane safety, road trip tips, hotel baby-proofing, travel car seats, and international travel with infants. AAP guidelines.',
  alternates: { canonical: '/safety/travel' },
  openGraph: {
    title: 'Travel Safety with Babies | Is My Baby Alright?',
    description:
      'Airplane safety, road trips, hotel baby-proofing, travel car seats, and international travel with infants.',
  },
};

const faqItems = [
  { question: 'When can a newborn fly on an airplane?', answer: 'Most airlines allow infants to fly after 2 days old, but the AAP recommends waiting until at least 2-3 months if possible, when the immune system is more mature. Premature babies should consult their pediatrician before flying.' },
  { question: 'Should I buy a plane seat for my baby?', answer: 'Yes, the FAA and AAP strongly recommend that all children under 2 have their own seat with an FAA-approved car seat. Lap infants are not protected in turbulence or a crash. If you cannot buy a seat, request an empty adjacent seat at the gate.' },
  { question: 'How often should I stop on a road trip with a baby?', answer: 'Stop every 1.5-2 hours to take the baby out of the car seat. Young infants should not be in a car seat for more than 2 hours at a time due to the semi-reclined position affecting breathing. Stretch, feed, and change the baby at each stop.' },
  { question: 'How do I baby-proof a hotel room?', answer: 'Do a quick crawl-through inspection: check for uncovered outlets, accessible cords, sharp furniture corners, minibar access, loose items, and anything within reach. Bring outlet covers and corner guards. Request a crib that meets safety standards. Remove or secure floor-length curtain cords.' },
  { question: 'Can I use a travel crib instead of a hotel crib?', answer: 'Travel cribs (like Pack \'n Plays) that meet CPSC standards are often safer than hotel-provided cribs, which may be older or poorly maintained. Use only the mattress pad that came with the travel crib — do not add extra padding. Follow the same bare-crib safe sleep rules.' },
  { question: 'Do I need a passport for my baby?', answer: 'Yes. All US citizens, including infants, need their own passport for international travel. Apply in person at a passport office with both parents present, the child\'s birth certificate, and a passport photo. Processing takes 6-8 weeks (longer in peak season).' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Travel Safety' },
];

export default function TravelSafetyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Travel Safety with Babies',
          description: 'Complete travel safety guide covering airplane safety, road trips, hotel baby-proofing, and international travel with infants.',
          path: '/safety/travel',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Travel Safety', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'FAA Child Safety', url: 'https://www.faa.gov/travelers/fly_children' },
            { name: 'CDC Traveler Health', url: 'https://wwwnc.cdc.gov/travel' },
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

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Travel Safety' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Travel Safety with Babies
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'FAA', 'CDC']} />
      <p className="text-sm text-muted mb-6">
        Traveling with a baby requires extra planning to maintain safety.
        Whether flying, driving, or staying in unfamiliar places, these guidelines
        help you keep your baby safe while away from home.
      </p>

      <KeyTakeaways
        takeaways={[
          'The safest place for a baby on an airplane is in their own seat in an FAA-approved car seat',
          'On road trips, stop every 1.5-2 hours — infants should not be in a car seat for more than 2 hours',
          'Baby-proof hotel rooms on arrival: check outlets, cords, sharp edges, and minibar access',
          'Use a travel crib that meets CPSC standards — often safer than hotel-provided cribs',
          'Bring a basic first-aid kit, any medications, and your pediatrician\'s contact information',
        ]}
      />

      <div className="space-y-6">
        <Section title="Airplane safety with babies">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Buy a seat for your baby</strong> and use an FAA-approved car seat on the plane — this is the AAP and FAA recommendation</li>
            <li>The car seat should be installed in a window seat to avoid blocking other passengers</li>
            <li>If your baby is a lap infant, keep them firmly held during turbulence</li>
            <li><strong>Ear pressure:</strong> Feed (nurse or bottle) or offer a pacifier during takeoff and landing to help with ear pressure</li>
            <li><strong>Timing:</strong> Most pediatricians suggest waiting until 2-3 months to fly (stronger immune system)</li>
            <li><strong>Hydration:</strong> Cabin air is dry — offer extra feeds to prevent dehydration</li>
            <li><strong>Bring medications:</strong> infant pain reliever in case of ear pain, plus any regular medications</li>
            <li><strong>Formula and breast milk:</strong> allowed through TSA security in reasonable quantities — declare it at screening</li>
            <li><strong>Diapers and changes:</strong> bring at least double what you think you need</li>
          </ul>
        </Section>

        <Section title="Road trip safety">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Car seat rules apply</strong> — same as everyday driving (rear-facing, properly installed)</li>
            <li><strong>Stop every 1.5-2 hours</strong> to take baby out of the car seat</li>
            <li>Infants should not be in a semi-reclined car seat for more than 2 hours (airway safety)</li>
            <li><strong>Never leave a child alone in a car</strong> — not even for a minute</li>
            <li>Keep the car interior below 80 degrees F (heatstroke can happen in minutes)</li>
            <li>Secure all loose objects in the car (they become projectiles in a crash)</li>
            <li>Pack a cooler with pre-made bottles and snacks</li>
            <li>Use window shades to block sun from the rear-facing baby</li>
            <li>Have a mirror so you can see a rear-facing baby from the driver&apos;s seat</li>
            <li>Time drives during naps when possible for a calmer trip</li>
          </ul>
        </Section>

        <Section title="Hotel and rental safety">
          <p>Hotels are not baby-proofed. Do a safety check immediately upon arrival:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Outlets:</strong> Bring outlet covers for accessible outlets</li>
            <li><strong>Cords:</strong> Secure or move blind cords, lamp cords, and phone chargers</li>
            <li><strong>Minibar:</strong> Lock it or request removal of alcohol and glass bottles</li>
            <li><strong>Sharp edges:</strong> Bring corner guards for coffee tables and nightstands</li>
            <li><strong>Balcony:</strong> Ensure sliding doors are locked and the child cannot access the balcony</li>
            <li><strong>Bathroom:</strong> Remove small soaps, shampoo bottles, and anything within reach</li>
            <li><strong>Under the bed:</strong> Check for small objects, lost items, or hazards</li>
            <li><strong>Crib:</strong> If using hotel crib, check for recalls, proper mattress fit, and no broken parts</li>
            <li><strong>Doors:</strong> Use the deadbolt and chain so a toddler cannot open the door</li>
          </ul>
        </Section>

        <Section title="Travel sleep safety">
          <ul className="list-disc list-inside space-y-1">
            <li>Bring a travel crib (Pack &apos;n Play) that meets CPSC standards</li>
            <li>Use only the mattress pad that came with the travel crib — do not add blankets or extra padding</li>
            <li>Follow the same bare-crib safe sleep rules as at home</li>
            <li>Do not let baby sleep in a car seat, stroller, or carrier for extended periods</li>
            <li>If baby falls asleep in the car seat, transfer to a flat sleep surface as soon as possible</li>
            <li>Never bed-share in an unfamiliar bed (soft hotel bedding increases SIDS risk)</li>
          </ul>
        </Section>

        <Section title="International travel considerations">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Passport:</strong> All children need their own passport (apply 8+ weeks ahead)</li>
            <li><strong>Vaccines:</strong> Check CDC traveler&apos;s health page for destination-specific vaccine recommendations</li>
            <li><strong>Water safety:</strong> Use bottled water for formula preparation in areas without safe tap water</li>
            <li><strong>Sun and heat:</strong> Pack appropriate sun protection for your destination</li>
            <li><strong>Medical care:</strong> Research nearby hospitals and pediatric clinics at your destination</li>
            <li><strong>Insurance:</strong> Verify your health insurance covers international care or purchase travel insurance</li>
            <li><strong>Medications:</strong> Bring enough for the entire trip plus extras in case of delays</li>
            <li><strong>Formula:</strong> Bring enough for the trip if your brand is not available at the destination</li>
            <li><strong>Jet lag:</strong> Gradually shift schedules a few days before travel; expect 1-2 days of adjustment per time zone</li>
          </ul>
        </Section>

        <Section title="Travel safety packing checklist">
          <ul className="list-disc list-inside space-y-1">
            <li>Car seat (FAA-approved if flying)</li>
            <li>Travel crib or Pack &apos;n Play</li>
            <li>Outlet covers (6-8 for hotel rooms)</li>
            <li>Corner guards (4-6 foam pieces)</li>
            <li>First-aid kit (bandages, thermometer, infant pain reliever, saline drops)</li>
            <li>All regular medications plus extras</li>
            <li>Pediatrician&apos;s phone number and insurance cards</li>
            <li>Poison Control number: 1-800-222-1222</li>
            <li>Copies of immunization records</li>
            <li>Sunscreen and sun hat</li>
            <li>Window shade for car</li>
            <li>Extra diapers and wipes (more than you think)</li>
            <li>Familiar sleep items (sleep sack, white noise machine)</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Traveling with a baby is manageable with preparation. Use an FAA-approved car seat on planes, stop frequently on road trips, baby-proof hotel rooms on arrival, and maintain safe sleep practices with a travel crib. Pack a safety kit and know how to access medical care at your destination."
        supportiveMessage="Travel with a baby is more work, but it is absolutely doable. Focus on the essentials: safe sleep, car seat safety, and supervision. Everything else can be figured out along the way."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/safety" className="text-sm text-primary font-semibold hover:underline">&larr; Back to Safety</Link>
        <Link href="/first-aid" className="text-sm text-primary font-semibold hover:underline">First Aid Guide &rarr;</Link>
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
