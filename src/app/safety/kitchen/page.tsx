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
  title: 'Kitchen Baby-Proofing Guide',
  description:
    'Complete kitchen baby-proofing guide. Cabinet locks, stove guards, appliance safety, and age-specific kitchen hazards from AAP and CPSC guidelines.',
  alternates: { canonical: '/safety/kitchen' },
  openGraph: {
    title: 'Kitchen Baby-Proofing Guide | Is My Baby Alright?',
    description:
      'Cabinet locks, stove guards, appliance safety, and age-specific kitchen hazards based on AAP and CPSC guidelines.',
  },
};

const faqItems = [
  { question: 'When should I start baby-proofing my kitchen?', answer: 'Before your baby starts crawling, ideally by 4-6 months. Babies can roll and scoot earlier than expected, so it is better to be prepared early.' },
  { question: 'What type of cabinet lock is safest?', answer: 'Magnetic locks are generally considered the most effective because they have no visible parts for children to manipulate. Spring-loaded latches are a good budget alternative.' },
  { question: 'Should I use a stove guard or knob covers?', answer: 'Both. Knob covers prevent children from turning on burners, and a stove guard prevents them from reaching pots and pans on the stovetop. The CPSC recommends using back burners whenever possible.' },
  { question: 'Are dishwasher pods safe around babies?', answer: 'No. Dishwasher and laundry pods are a serious poisoning hazard. They look like candy to young children. Store them in a locked cabinet, never under the sink.' },
  { question: 'How do I keep my baby out of the kitchen entirely?', answer: 'Use a hardware-mounted baby gate at the kitchen entrance. Pressure-mounted gates are not recommended for areas near stairs or where a fall could cause injury.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Kitchen Safety' },
];

export default function KitchenSafetyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Kitchen Baby-Proofing Guide',
          description: 'Complete kitchen safety guide for homes with babies and toddlers. Cabinet locks, stove guards, appliance safety, and age-specific hazards.',
          path: '/safety/kitchen',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Injury Prevention Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'CPSC Kitchen Safety', url: 'https://www.cpsc.gov/' },
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

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Kitchen Safety' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Kitchen Baby-Proofing Guide
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CPSC', 'Safe Kids Worldwide']} />
      <p className="text-sm text-muted mb-6">
        The kitchen is one of the most dangerous rooms for babies and toddlers.
        Burns, poisoning, choking, and falls are all common kitchen hazards.
        This guide covers what to secure at each age.
      </p>

      <KeyTakeaways
        takeaways={[
          'Install cabinet locks on all lower cabinets, especially those containing cleaning products',
          'Use stove knob covers and a stove guard to prevent burns',
          'Store dishwasher and laundry pods in locked cabinets — they are a top poisoning hazard',
          'Keep hot liquids away from counter edges and never hold a baby while cooking',
          'Secure heavy appliances (toasters, coffee makers) so they cannot be pulled down',
        ]}
      />

      <div className="space-y-6">
        <Section title="Kitchen hazards by age">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-foreground">0-6 months</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Keep baby out of the kitchen during cooking (use a bouncer in another room)</li>
                <li>Never hold your baby while handling hot food or liquids</li>
                <li>Ensure smoke detectors are working</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">6-12 months (crawling)</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Install cabinet locks on all lower cabinets</li>
                <li>Secure trash cans (lock or move to inside a locked cabinet)</li>
                <li>Remove floor-level hazards: pet bowls, cleaning supplies, trash bags</li>
                <li>Cover electrical outlets near the floor</li>
                <li>Add a baby gate at the kitchen entrance</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">12-24 months (walking, climbing)</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Install stove knob covers and a stove guard</li>
                <li>Secure the oven with an oven lock</li>
                <li>Move small appliances away from counter edges</li>
                <li>Use cord shorteners on appliance cords</li>
                <li>Lock the refrigerator and freezer if child can reach handles</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">2-4 years (climbing, reaching)</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Keep step stools out of the kitchen (children may climb to reach hazards)</li>
                <li>Store knives and sharp utensils in locked drawers or high cabinets</li>
                <li>Teach basic kitchen rules: no touching the stove, no running</li>
                <li>Keep heavy items (cast iron, blenders) on lower shelves so they cannot fall on a child</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Kitchen safety checklist">
          <p className="mb-2">Complete this checklist room-by-room:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Magnetic or spring-loaded locks on all lower cabinets</li>
            <li>Stove knob covers installed</li>
            <li>Stove guard in place</li>
            <li>Oven lock installed</li>
            <li>Dishwasher lock (prevents child from opening during cycle)</li>
            <li>Trash can secured (locked cabinet or child-proof lid)</li>
            <li>Small appliances pushed back and cords shortened</li>
            <li>Heavy objects stored low (cannot fall on child)</li>
            <li>Cleaning products in a locked cabinet (not under the sink)</li>
            <li>No tablecloths (children pull them, bringing hot food down)</li>
            <li>Fire extinguisher accessible to adults</li>
            <li>Smoke detector tested monthly</li>
          </ul>
        </Section>

        <Section title="Burns prevention in the kitchen">
          <p>Burns and scalds are the most common kitchen injuries for young children:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Use back burners whenever possible and turn pot handles inward</li>
            <li>Keep hot drinks away from counter edges</li>
            <li>Test all heated food and liquids before giving to a child</li>
            <li>Set your water heater to 120 degrees F (49 degrees C) or lower</li>
            <li>Never microwave breast milk or formula — it creates dangerous hot spots</li>
            <li>Keep children at least 3 feet from the stove while cooking</li>
          </ul>
        </Section>

        <Section title="Poisoning hazards in the kitchen">
          <p>The kitchen contains many substances that are poisonous to children:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Dishwasher pods</strong> — highly concentrated, can cause chemical burns to mouth and throat</li>
            <li><strong>Cleaning sprays</strong> — store in original containers with child-resistant caps</li>
            <li><strong>Vitamins and supplements</strong> — iron supplements are especially dangerous in overdose</li>
            <li><strong>Alcohol</strong> — even small amounts can cause dangerous low blood sugar in children</li>
            <li><strong>Essential oils</strong> — many are toxic if ingested</li>
          </ul>
          <p className="mt-2 font-semibold">
            Poison Control: <a href="tel:1-800-222-1222" className="text-primary">1-800-222-1222</a>
          </p>
        </Section>

        <Section title="Choking hazards in the kitchen">
          <p>The kitchen is where most choking incidents occur:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Cut grapes, cherry tomatoes, and hot dogs lengthwise into quarters</li>
            <li>Keep refrigerator magnets out of reach (choking and intestinal hazard)</li>
            <li>Do not let children eat while walking, running, or playing</li>
            <li>Store small items (twist ties, rubber bands, bottle caps) in drawers with locks</li>
            <li>Keep pet food stored away — kibble is a common choking hazard for toddlers</li>
          </ul>
          <p className="mt-2">
            <Link href="/safety/choking-prevention" className="text-primary hover:underline font-semibold">Full choking prevention guide &rarr;</Link>
          </p>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="The kitchen requires the most safety modifications of any room. Install locks on all lower cabinets, use stove guards, secure cleaning products, and never leave a child unsupervised in the kitchen. Revisit your setup every few months as your child gains new abilities."
        supportiveMessage="Baby-proofing can feel overwhelming, but you do not need to do everything at once. Start with the biggest hazards (burns, poisons) and add protections as your baby becomes more mobile."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/safety" className="text-sm text-primary font-semibold hover:underline">&larr; Back to Safety</Link>
        <Link href="/safety/bathroom" className="text-sm text-primary font-semibold hover:underline">Bathroom Safety &rarr;</Link>
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
