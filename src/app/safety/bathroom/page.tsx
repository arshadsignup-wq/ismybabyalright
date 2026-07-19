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
  title: 'Bathroom Safety for Babies',
  description:
    'Bathroom baby-proofing guide. Drowning prevention, water temperature safety, toilet locks, medicine storage, and bathtub safety based on AAP guidelines.',
  alternates: { canonical: '/safety/bathroom' },
  openGraph: {
    title: 'Bathroom Safety for Babies | Is My Baby Alright?',
    description:
      'Drowning prevention, water temperature, toilet locks, medicine storage, and bathtub safety from AAP guidelines.',
  },
};

const faqItems = [
  { question: 'Can a baby drown in an inch of water?', answer: 'Yes. Infants and toddlers can drown in as little as 1-2 inches of water. Never leave a child unattended in the bathtub, even for a moment. If you need to leave, take the child with you.' },
  { question: 'What temperature should bath water be?', answer: 'Bath water should be between 98-100 degrees F (37-38 degrees C). Always test with your elbow or a bath thermometer. Set your water heater to 120 degrees F or lower to prevent scalding.' },
  { question: 'Are bath seats safe?', answer: 'Bath seats are not safety devices. The AAP warns that bath seats create a false sense of security and children have drowned in them. They can tip over or the child can slip out. Never leave a child unattended in a bath seat.' },
  { question: 'When should I install a toilet lock?', answer: 'Before your baby can pull up to standing, typically around 8-10 months. Toddlers are top-heavy and can fall headfirst into a toilet and drown.' },
  { question: 'Where should I store medicines in the bathroom?', answer: 'In a locked medicine cabinet or a locked container that is out of reach. Never leave medicines on the counter, even briefly. Children can climb faster than you expect.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Bathroom Safety' },
];

export default function BathroomSafetyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Bathroom Safety for Babies',
          description: 'Complete bathroom baby-proofing guide covering drowning prevention, water temperature, toilet locks, and medicine storage.',
          path: '/safety/bathroom',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Drowning Prevention', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'CPSC Bath Safety', url: 'https://www.cpsc.gov/' },
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

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Bathroom Safety' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Bathroom Safety for Babies and Toddlers
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CPSC', 'Safe Kids Worldwide']} />
      <p className="text-sm text-muted mb-6">
        The bathroom poses unique dangers: drowning, scalding, poisoning, and slipping.
        A child should never be left unsupervised in the bathroom at any age under 5.
      </p>

      <KeyTakeaways
        takeaways={[
          'Never leave a baby or toddler alone in the bathtub, even for a second',
          'Children can drown in as little as 1 inch of water in under 60 seconds',
          'Set water heater to 120 degrees F (49 degrees C) to prevent scalding',
          'Install toilet locks before baby can pull to standing (around 8-10 months)',
          'Store all medicines and personal care products in locked cabinets',
        ]}
      />

      <div className="space-y-6">
        <Section title="Drowning prevention">
          <p>Drowning is silent and fast. It is the leading cause of injury death in children ages 1-4.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Never leave a child alone</strong> in the tub, even to grab a towel. Take the child with you or drain the tub first.</li>
            <li><strong>Bath seats are not safety devices</strong> — the AAP warns they create a false sense of security</li>
            <li><strong>Empty the tub immediately</strong> after bath time</li>
            <li><strong>Install toilet locks</strong> — toddlers are top-heavy and can fall headfirst into a toilet</li>
            <li><strong>Keep bathroom doors closed</strong> and use doorknob covers to prevent unsupervised entry</li>
            <li><strong>Empty all containers</strong> — buckets, basins, and mop pails should never hold standing water</li>
          </ul>
        </Section>

        <Section title="Water temperature safety">
          <p>Scalding is the second most common burn in young children:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Set your water heater to 120 degrees F (49 degrees C) or lower</li>
            <li>Always run cold water first, then add hot</li>
            <li>Test water with your elbow or a bath thermometer (aim for 98-100 degrees F)</li>
            <li>Install anti-scald devices on faucets</li>
            <li>A child can get a third-degree burn in 1 second at 156 degrees F, or in 5 seconds at 140 degrees F</li>
            <li>Turn the child away from faucets so they cannot turn on hot water</li>
          </ul>
        </Section>

        <Section title="Bathroom safety checklist">
          <ul className="list-disc list-inside space-y-1">
            <li>Toilet lock installed</li>
            <li>Non-slip mat in bathtub</li>
            <li>Faucet cover (soft spout cover to prevent head injuries)</li>
            <li>Water heater set to 120 degrees F or lower</li>
            <li>All medicines in locked cabinet</li>
            <li>Razors stored out of reach</li>
            <li>Electrical appliances (hair dryers, curling irons) unplugged and stored away</li>
            <li>GFCI outlets installed near water sources</li>
            <li>Cleaning products locked away</li>
            <li>Trash can with child-proof lid or stored in locked cabinet</li>
            <li>Doorknob cover on outside of bathroom door</li>
            <li>Non-slip rug outside the tub</li>
          </ul>
        </Section>

        <Section title="Medicine and product safety">
          <p>The bathroom is where most childhood poisonings from medications occur:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Store all medicines (including vitamins) in a locked cabinet</li>
            <li>Never call medicine &quot;candy&quot; to encourage a child to take it</li>
            <li>Keep products in original child-resistant containers</li>
            <li>Dispose of expired medications safely (drug take-back programs)</li>
            <li>Store personal care products (mouthwash, nail polish remover, perfume) out of reach — many contain alcohol</li>
            <li>Keep the Poison Control number posted: <a href="tel:1-800-222-1222" className="text-primary font-semibold">1-800-222-1222</a></li>
          </ul>
        </Section>

        <Section title="Slip and fall prevention">
          <ul className="list-disc list-inside space-y-1">
            <li>Use non-slip mats or decals inside the bathtub</li>
            <li>Place a non-slip rug on the floor outside the tub</li>
            <li>Wipe up water spills immediately</li>
            <li>Install a soft faucet cover to protect against head bumps</li>
            <li>Keep the bathroom floor clear of clutter</li>
            <li>Consider a step stool with non-slip surface for older toddlers at the sink</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="The bathroom is one of the most dangerous rooms for young children due to drowning, scalding, and poisoning risks. The single most important rule: never leave a child under 5 unsupervised in the bathroom, even for a moment. Install locks, lower your water heater temperature, and secure all medicines."
        supportiveMessage="If you are ever unsure about bath safety, remember: if you need to leave the bathroom, take the baby with you. No phone call or doorbell is worth the risk."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/safety" className="text-sm text-primary font-semibold hover:underline">&larr; Back to Safety</Link>
        <Link href="/safety/nursery" className="text-sm text-primary font-semibold hover:underline">Nursery Safety &rarr;</Link>
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
