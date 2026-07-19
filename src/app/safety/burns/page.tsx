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
  title: 'Burns and Scalds Prevention',
  description:
    'Burns and scalds prevention guide for babies and toddlers. Hot water safety, kitchen burns, electrical burns, sunburn prevention, and first aid for burns.',
  alternates: { canonical: '/safety/burns' },
  openGraph: {
    title: 'Burns and Scalds Prevention | Is My Baby Alright?',
    description:
      'Hot water safety, kitchen burns, electrical burns, sunburn prevention, and first aid for burns in babies and toddlers.',
  },
};

const faqItems = [
  { question: 'What should I do if my baby gets burned?', answer: 'Immediately cool the burn under cool (not cold or ice) running water for at least 10-20 minutes. Remove clothing near the burn unless it is stuck to the skin. Cover loosely with a clean, dry bandage. Do not apply butter, oil, toothpaste, or ice. Seek medical attention for burns larger than the child\'s palm, burns on the face/hands/feet/genitals, or burns that blister.' },
  { question: 'What temperature should my water heater be set to?', answer: 'Set your water heater to 120 degrees F (49 degrees C) or lower. At 140 degrees F, a child can get a third-degree burn in 5 seconds. At 120 degrees F, it takes 5 minutes of exposure to cause a serious burn, giving time to react.' },
  { question: 'Are space heaters safe around babies?', answer: 'Space heaters are a significant burn risk. If you must use one, keep it at least 3 feet from anything (including children), use one with an automatic shut-off if tipped, and never leave it unattended. Newer models with cool-touch exteriors are safer.' },
  { question: 'When can I apply sunscreen to my baby?', answer: 'Sunscreen can be applied to babies 6 months and older. For babies under 6 months, keep them out of direct sunlight and use shade, hats, and protective clothing instead. Use SPF 30+ broad-spectrum sunscreen and reapply every 2 hours.' },
  { question: 'Should I pop a burn blister?', answer: 'Never pop or break a burn blister. Blisters protect the skin underneath from infection. Cover with a loose, clean bandage and see a doctor. If a blister breaks on its own, gently clean with water and cover with a non-stick bandage.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Burns Prevention' },
];

export default function BurnsPreventionPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Burns and Scalds Prevention for Babies',
          description: 'Complete burns prevention guide covering hot water safety, kitchen burns, electrical burns, sunburn, and first aid for burns.',
          path: '/safety/burns',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Burn Prevention', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'Safe Kids Worldwide Burns', url: 'https://www.safekids.org/' },
            { name: 'CPSC Fire Safety', url: 'https://www.cpsc.gov/' },
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

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Burns Prevention' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Burns and Scalds Prevention
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CPSC', 'Safe Kids Worldwide']} />
      <p className="text-sm text-muted mb-6">
        Burns are the third leading cause of injury death in children under 5.
        A child&apos;s skin burns faster and deeper than adult skin because it is thinner.
        Most burns happen at home and are preventable.
      </p>

      <KeyTakeaways
        takeaways={[
          'Set your water heater to 120 degrees F (49 degrees C) or lower',
          'A child can get a third-degree burn in 1 second at 156 degrees F',
          'Never hold a baby while cooking or drinking hot beverages',
          'Use back burners, turn pot handles inward, and install stove guards',
          'Cool burns under cool running water for 10-20 minutes — never use ice, butter, or oil',
        ]}
      />

      <div className="space-y-6">
        <Section title="Scald prevention (hot liquids)">
          <p>Scalds from hot liquids are the most common burn injury in young children:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Water heater:</strong> set to 120 degrees F (49 degrees C) or lower</li>
            <li><strong>Test bath water</strong> with your elbow or thermometer before placing baby in</li>
            <li><strong>Turn child away from faucets</strong> so they cannot turn on hot water</li>
            <li><strong>Never hold a baby</strong> while drinking hot coffee, tea, or soup</li>
            <li><strong>Keep hot drinks</strong> away from the edge of tables and counters</li>
            <li><strong>No tablecloths</strong> — children pull them, bringing hot food and drinks down</li>
            <li><strong>Test heated food</strong> and formula before giving to a child (stir and check temperature)</li>
            <li><strong>Never microwave breast milk or formula</strong> — creates dangerous hot spots</li>
            <li><strong>Use travel mugs</strong> with sealed lids for hot beverages around children</li>
          </ul>
        </Section>

        <Section title="Kitchen and cooking burns">
          <ul className="list-disc list-inside space-y-1">
            <li>Use back burners and turn pot handles toward the back of the stove</li>
            <li>Install stove knob covers and a stove guard</li>
            <li>Keep children at least 3 feet from the stove during cooking</li>
            <li>Never leave cooking unattended</li>
            <li>Use oven locks to prevent toddlers from opening the oven door</li>
            <li>Be careful with steam from microwave containers and pot lids</li>
            <li>Keep hot appliances (toasters, coffee makers, slow cookers) away from counter edges</li>
            <li>Use cord shorteners so children cannot pull hot appliances down</li>
          </ul>
        </Section>

        <Section title="Electrical burn prevention">
          <ul className="list-disc list-inside space-y-1">
            <li>Cover all unused electrical outlets with outlet covers or plate covers</li>
            <li>Use outlet covers that are difficult for children to remove</li>
            <li>Keep electrical cords out of reach and out of walkways</li>
            <li>Replace frayed or damaged cords immediately</li>
            <li>Do not allow children to play with electrical cords</li>
            <li>Install GFCI outlets in kitchens, bathrooms, and near water</li>
            <li>Keep hair dryers, curling irons, and straighteners unplugged and stored away when not in use</li>
            <li>Cover electrical panels and breaker boxes</li>
          </ul>
        </Section>

        <Section title="Fire safety">
          <ul className="list-disc list-inside space-y-1">
            <li>Install smoke detectors on every level and in every sleeping area</li>
            <li>Test smoke detectors monthly and replace batteries annually</li>
            <li>Keep matches, lighters, and candles completely out of reach and sight</li>
            <li>Never leave candles burning unattended</li>
            <li>Have a fire extinguisher in the kitchen and know how to use it</li>
            <li>Create and practice a home fire escape plan</li>
            <li>Keep space heaters at least 3 feet from everything; never leave unattended</li>
            <li>Have a fireplace screen and keep children away from fireplaces</li>
          </ul>
        </Section>

        <Section title="Sunburn prevention">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Under 6 months:</strong> Keep out of direct sunlight. Use shade, hats with brims, and lightweight long sleeves</li>
            <li><strong>6 months and older:</strong> Apply SPF 30+ broad-spectrum sunscreen 15 minutes before going outside</li>
            <li>Reapply every 2 hours and after swimming or sweating</li>
            <li>Seek shade between 10am and 4pm when UV rays are strongest</li>
            <li>Use UPF-rated clothing for extended sun exposure</li>
            <li>Protect eyes with age-appropriate sunglasses (100% UV protection)</li>
            <li>Remember: UV rays penetrate clouds — sunburn can occur on overcast days</li>
          </ul>
        </Section>

        <Section title="First aid for burns">
          <p className="font-semibold text-foreground">Immediate steps:</p>
          <ol className="list-decimal list-inside space-y-1 mt-1">
            <li><strong>Cool the burn</strong> under cool (not cold) running water for 10-20 minutes</li>
            <li><strong>Remove clothing</strong> near the burn unless it is stuck to the skin</li>
            <li><strong>Cover loosely</strong> with a clean, dry, non-stick bandage</li>
            <li><strong>Give pain relief</strong> (age-appropriate acetaminophen or ibuprofen)</li>
          </ol>
          <p className="font-semibold text-foreground mt-3">Do NOT:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Apply ice (can cause further tissue damage)</li>
            <li>Apply butter, oil, toothpaste, or home remedies</li>
            <li>Pop or break blisters</li>
            <li>Use adhesive bandages directly on burns</li>
          </ul>
          <p className="font-semibold text-foreground mt-3">Seek medical attention if:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>The burn is larger than the child&apos;s palm</li>
            <li>The burn is on the face, hands, feet, joints, or genitals</li>
            <li>The burn blisters or looks white/waxy</li>
            <li>The burn goes all the way around a limb</li>
            <li>The child is under 12 months</li>
            <li>You are unsure how severe it is</li>
          </ul>
        </Section>

        <Section title="Burns prevention checklist">
          <ul className="list-disc list-inside space-y-1">
            <li>Water heater set to 120 degrees F or lower</li>
            <li>Stove knob covers and stove guard installed</li>
            <li>Pot handles turned inward; use back burners</li>
            <li>Hot drinks kept in travel mugs or away from edges</li>
            <li>All outlets covered</li>
            <li>Smoke detectors on every level, tested monthly</li>
            <li>Fire extinguisher in kitchen</li>
            <li>Matches and lighters locked away</li>
            <li>Space heaters 3+ feet from everything</li>
            <li>Curling irons and hair tools stored unplugged</li>
            <li>Sunscreen applied before outdoor time (6+ months)</li>
            <li>Fire escape plan created and practiced</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Most childhood burns are preventable. The three most impactful actions: set your water heater to 120 degrees F, never hold a baby while handling hot items, and install stove guards. If a burn occurs, cool with running water for 10-20 minutes and never apply ice, butter, or home remedies."
        supportiveMessage="Burns happen quickly and can feel terrifying. Knowing the correct first aid (cool running water, not ice) is the most important thing to remember in the moment."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/safety" className="text-sm text-primary font-semibold hover:underline">&larr; Back to Safety</Link>
        <Link href="/safety/outdoor" className="text-sm text-primary font-semibold hover:underline">Outdoor Safety &rarr;</Link>
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
