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
  title: 'Baby Safety Guide',
  description:
    'Comprehensive baby safety guide. Safe sleep, choking prevention, baby-proofing, car seat safety, water safety, burns prevention, and emergency preparedness.',
  alternates: { canonical: '/safety' },
  openGraph: {
    title: 'Baby Safety Guide | Is My Baby Alright?',
    description:
      'Safe sleep, choking prevention, baby-proofing, car seat safety, water safety, and emergency preparedness.',
  },
};

const safetyGuides = [
  { href: '/safety/kitchen', label: 'Kitchen Safety', description: 'Cabinet locks, stove guards, appliance safety, and poisoning prevention' },
  { href: '/safety/bathroom', label: 'Bathroom Safety', description: 'Drowning prevention, water temperature, toilet locks, and medicine storage' },
  { href: '/safety/nursery', label: 'Nursery Safety', description: 'Crib standards, safe sleep setup, furniture anchoring, and window safety' },
  { href: '/safety/water', label: 'Water Safety', description: 'Bathtub, pool, and beach safety. Drowning prevention and swim lessons' },
  { href: '/safety/car-seat', label: 'Car Seat Safety', description: 'Rear-facing vs forward-facing, installation, common mistakes, and transitions' },
  { href: '/safety/choking-prevention', label: 'Choking Prevention', description: 'Food and non-food hazards by age, safe food preparation, and response' },
  { href: '/safety/poison-prevention', label: 'Poison Prevention', description: 'Medicines, cleaning products, button batteries, toxic plants, and emergency response' },
  { href: '/safety/fall-prevention', label: 'Fall Prevention', description: 'Furniture anchoring, stair gates, changing tables, and window guards' },
  { href: '/safety/burns', label: 'Burns and Scalds', description: 'Hot water, kitchen burns, electrical burns, sunburn, and first aid' },
  { href: '/safety/outdoor', label: 'Outdoor and Playground', description: 'Safe surfaces, equipment, sun protection, insects, and age-appropriate play' },
  { href: '/safety/pet-safety', label: 'Pet Safety', description: 'Introducing pets to babies, supervision rules, bite prevention, and hygiene' },
  { href: '/safety/travel', label: 'Travel Safety', description: 'Airplane safety, road trips, hotel baby-proofing, and international travel' },
];

const safetyTools = [
  { href: '/tools/baby-proofing', label: 'Baby-Proofing Checklist', description: 'Room-by-room safety checklist by developmental stage' },
  { href: '/tools/car-seat', label: 'Car Seat Guide', description: 'Find the right car seat type for your child\'s age and size' },
  { href: '/first-aid', label: 'First Aid Guide', description: 'Infant and toddler CPR, choking response, and emergency care' },
  { href: '/tools/emergency-contacts', label: 'Emergency Contacts', description: 'Store important numbers for quick access in emergencies' },
  { href: '/product-safety', label: 'Product Safety', description: 'Current recalls and safety standards for baby products' },
];

const faqItems = [
  { question: 'What is the safest sleeping position for babies?', answer: 'On their back, on a firm flat surface, with nothing else in the crib. This is recommended for every sleep until at least 12 months.' },
  { question: 'At what age is choking most dangerous?', answer: 'Under age 4. Cut grapes, hot dogs, and other round foods lengthwise. Supervise all meals and keep small objects out of reach.' },
  { question: 'When can my child face forward in the car seat?', answer: 'The AAP recommends rear-facing as long as possible, at least until age 2 or until the child exceeds the rear-facing height or weight limit of the car seat.' },
  { question: 'What should I do if my child swallows something dangerous?', answer: 'Call Poison Control immediately at 1-800-222-1222. Do not induce vomiting unless specifically told to do so.' },
  { question: 'When should I start baby-proofing?', answer: 'Before your baby becomes mobile, ideally by 4 months. Babies develop new abilities quickly and safety preparations should be in place before each stage.' },
  { question: 'What is the leading cause of death in children ages 1-4?', answer: 'Drowning. Never leave a child unattended near any water source. Install 4-sided fencing around pools and always supervise bath time.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Baby Safety Guide' },
];

export default function SafetyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Baby Safety Guide',
          description: 'Evidence-based baby safety guide covering safe sleep, choking prevention, baby-proofing, car seat safety, water safety, burns prevention, and more.',
          path: '/safety',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Safe Sleep Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'CPSC Safety Standards', url: 'https://www.cpsc.gov/' },
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

      <Breadcrumbs items={[{ label: 'Baby Safety Guide' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Baby Safety Guide
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CPSC', 'Safe Kids Worldwide']} />
      <p className="text-sm text-muted mb-6">
        Evidence-based safety guidance to protect your child at every stage.
        Based on AAP, CPSC, and Safe Kids Worldwide recommendations.
      </p>

      <KeyTakeaways
        takeaways={[
          'Always place baby on their back to sleep on a firm, flat surface with nothing in the crib',
          'Choking is the leading cause of injury death in children under 4 — cut round foods lengthwise',
          'Drowning is the leading cause of death in children ages 1-4 — never leave a child unattended near water',
          'Rear-facing car seats are recommended as long as possible, at least until age 2',
          'Furniture tip-overs kill a child every 2 weeks — anchor all tall furniture to the wall',
          'Save Poison Control: 1-800-222-1222',
        ]}
      />

      <div className="space-y-6">
        {/* Safety Guides */}
        <section>
          <h2 className="text-base font-bold text-foreground mb-3">Safety guides by topic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {safetyGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
                <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{guide.label}</p>
                <p className="text-xs text-muted mt-1">{guide.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-base font-bold text-foreground mb-3">Safety tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {safetyTools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
                <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{tool.label}</p>
                <p className="text-xs text-muted mt-1">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <Section title="How do I reduce the risk of SIDS?">
          <p>The AAP safe sleep guidelines reduce the risk of SIDS and other sleep-related deaths:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Back to sleep</strong> — always place baby on their back for every sleep</li>
            <li><strong>Firm, flat surface</strong> — use a safety-approved crib, bassinet, or play yard with a tight-fitting sheet</li>
            <li><strong>Nothing in the crib</strong> — no blankets, pillows, bumpers, stuffed animals, or loose bedding</li>
            <li><strong>Room sharing</strong> — baby should sleep in your room but on their own surface for at least the first 6 months</li>
            <li><strong>No overheating</strong> — dress baby in no more than one layer more than you would wear</li>
            <li><strong>Pacifier at sleep time</strong> — offer a pacifier once breastfeeding is established</li>
            <li><strong>No inclined sleepers</strong> — these have been recalled due to infant deaths</li>
          </ul>
          <p className="mt-2">
            <Link href="/safety/nursery" className="text-primary hover:underline font-semibold">Complete nursery safety guide &rarr;</Link>
          </p>
        </Section>

        <Section title="How do I prevent my baby from choking?">
          <p>Choking is the leading cause of injury and death in children under 4. Prevention by age:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Under 12 months:</strong> No hard, round, or sticky foods. Cut grapes, cherry tomatoes, and hot dogs lengthwise. No whole nuts, popcorn, or raw carrots.</li>
            <li><strong>12-36 months:</strong> Continue cutting round foods. Supervise all meals. Sit upright while eating — never eat while walking, playing, or in the car.</li>
            <li><strong>All ages:</strong> Keep small objects (coins, batteries, magnets, balloons) out of reach. Check toys for small parts. Learn infant/toddler choking response.</li>
          </ul>
          <p className="mt-2">
            <Link href="/safety/choking-prevention" className="text-primary hover:underline font-semibold">Complete choking prevention guide &rarr;</Link>
          </p>
        </Section>

        <Section title="How do I keep my baby safe around water?">
          <p>Drowning is the leading cause of death in children ages 1-4.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Never leave a child unattended near water — even for a moment</li>
            <li>Bathtubs, buckets, and toilets are drowning hazards for young children</li>
            <li>Install a four-sided fence with self-closing gate around pools</li>
            <li>Empty kiddie pools immediately after use</li>
            <li>Learn CPR — seconds matter in a drowning emergency</li>
            <li>Swim lessons can begin at age 1, but do not replace supervision</li>
          </ul>
          <p className="mt-2">
            <Link href="/safety/water" className="text-primary hover:underline font-semibold">Complete water safety guide &rarr;</Link>
          </p>
        </Section>

        <Section title="How do I prevent poisoning in my home?">
          <ul className="list-disc list-inside space-y-1">
            <li>Store medicines, cleaning products, and chemicals in locked cabinets</li>
            <li>Keep products in original containers with child-resistant caps</li>
            <li>Save the Poison Control number: <a href="tel:1-800-222-1222" className="text-primary font-semibold">1-800-222-1222</a></li>
            <li>Button batteries and laundry pods are especially dangerous — store out of sight and reach</li>
            <li>Some common houseplants are toxic if ingested</li>
          </ul>
          <p className="mt-2">
            <Link href="/safety/poison-prevention" className="text-primary hover:underline font-semibold">Complete poison prevention guide &rarr;</Link>
          </p>
        </Section>

        <Section title="What car seat does my child need?">
          <p>Car crashes are a leading cause of death for children. Proper car seat use is critical:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Rear-facing</strong> as long as possible (at least until age 2 or the seat&apos;s height/weight limit)</li>
            <li><strong>Forward-facing</strong> with a harness once the child outgrows rear-facing limits</li>
            <li><strong>Booster seat</strong> when the child outgrows the forward-facing harness</li>
            <li>Always read both the car seat manual and your vehicle manual</li>
            <li>Get your installation checked — most fire stations and hospitals offer free inspections</li>
          </ul>
          <p className="mt-2">
            <Link href="/safety/car-seat" className="text-primary hover:underline font-semibold">Complete car seat safety guide &rarr;</Link>
          </p>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="Most childhood injuries are preventable. Baby-proofing your home, following safe sleep guidelines, and using car seats correctly are the most impactful safety steps you can take. Update your safety measures as your baby grows and becomes more mobile." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/" className="text-sm text-primary font-semibold hover:underline">Back to Home</Link>
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
