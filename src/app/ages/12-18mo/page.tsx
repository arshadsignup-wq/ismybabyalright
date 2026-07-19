import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import BottomLine from '@/components/shared/BottomLine';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import { getContentPageSchema, getBreadcrumbSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: '12-18 Month Toddler Guide',
  description:
    'Complete guide to your toddler at 12-18 months. Walking, vocabulary explosion, self-feeding, tantrums, and the 15-month well-child visit. Based on AAP and CDC guidelines.',
  alternates: { canonical: '/ages/12-18mo' },
};

const faqItems = [
  {
    question: 'How many words should an 18-month-old say?',
    answer: 'The CDC milestone for 18 months is at least 10 words, though many children have more. Receptive vocabulary (words understood) is much larger — typically 50-100+ words. If your child has fewer than 10 words at 18 months, discuss with your pediatrician. The 18-month visit includes a formal language screening.',
  },
  {
    question: 'Are tantrums normal at this age?',
    answer: 'Yes. Tantrums begin in earnest around 12-18 months because toddlers have big emotions but limited language to express them. They typically peak between 18-24 months. Stay calm, ensure safety, acknowledge feelings ("You are frustrated"), and wait it out. Do not punish tantrums.',
  },
  {
    question: 'How much milk should a 12-18 month old drink?',
    answer: 'The AAP recommends 16-24 oz of whole milk per day for toddlers 12-24 months. More than 24 oz can reduce appetite for solid foods and lead to iron deficiency. Offer milk with meals in an open cup or straw cup, not a bottle.',
  },
  {
    question: 'When should my toddler stop using a bottle?',
    answer: 'The AAP recommends weaning from bottles by 12-15 months. Prolonged bottle use increases risk of tooth decay, iron deficiency (from excess milk), and may affect oral development. Transition to an open cup or straw cup.',
  },
  {
    question: 'Is it normal for my toddler to not walk at 14 months?',
    answer: 'Yes. The normal range for walking is 9-18 months. The CDC considers walking a milestone by 18 months. Many healthy babies walk between 13-15 months. If your baby is not walking by 18 months, your pediatrician will evaluate further.',
  },
];

export default function TwelveToEighteenMonthsPage() {
  const schema = getContentPageSchema({
    name: '12-18 Month Toddler Guide: Development, Feeding & Sleep',
    description: 'Complete guide to your toddler at 12-18 months covering walking, vocabulary growth, self-feeding, tantrums, sleep, and the 15-month well-child visit.',
    path: '/ages/12-18mo',
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Age Guides', url: '/ages' },
    { name: '12-18 Months' },
  ]);
  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: 'Age Guides', href: '/ages' }, { label: '12-18 Months' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">12-18 Month Toddler Guide</h1>
      <p className="text-sm text-muted mb-6">
        Welcome to toddlerhood. Between 12 and 18 months, your child becomes a walker, talker, and boundary-tester. Expect a vocabulary explosion, growing independence, first tantrums, and incredible curiosity about everything.
      </p>

      <KeyTakeaways
        takeaways={[
          'Most toddlers walk independently between 12-15 months (CDC milestone by 18 months)',
          'Vocabulary grows from 1-3 words at 12 months to 10-50 words by 18 months',
          'Tantrums are a normal, healthy expression of big emotions with limited language',
          'Transition from bottle to cup and from formula to whole milk happens now (AAP)',
          'The 18-month visit includes a formal developmental and autism screening',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      </div>
      <LastReviewed date="2026-07-01" />

      <div className="space-y-6 mt-8">
        <Section title="Developmental milestones: 12-18 months">
          <p>According to the CDC, these milestones are typically reached between 12-18 months:</p>
          <h3 className="font-semibold mt-3 mb-1">Motor development</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Walks independently (most between 12-15 months)</li>
            <li>May begin to run (stiff, flat-footed running by 15-18 months)</li>
            <li>Climbs onto furniture</li>
            <li>Walks up steps with help</li>
            <li>Squats to pick up objects and stands back up</li>
            <li>Stacks 2-3 blocks</li>
            <li>Scribbles with crayons</li>
            <li>Turns pages of a board book (several at a time)</li>
            <li>Feeds self with fingers; beginning to use spoon (messy)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Sensory and cognitive</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Knows what ordinary objects are for (phone, brush, cup)</li>
            <li>Points to get attention or show you something</li>
            <li>Follows simple one-step directions (&quot;bring me the ball&quot;)</li>
            <li>Shows interest in other children</li>
            <li>Explores objects in new ways (stacking, sorting)</li>
            <li>Finds hidden objects easily</li>
            <li>Points to body parts when named (by 18 months)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Communication and social</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Uses 3-10 words at 12-15 months; 10-50 words by 18 months</li>
            <li>Understands more words than can speak (50-100+ understood)</li>
            <li>Points to show you things or to request</li>
            <li>Shakes head &quot;no&quot; and nods &quot;yes&quot;</li>
            <li>Copies other children and adults</li>
            <li>Shows affection (hugs, kisses)</li>
            <li>May have temper tantrums when frustrated</li>
            <li>Shows ownership (&quot;mine!&quot;)</li>
            <li>Plays simple pretend (feeding doll, talking on phone)</li>
          </ul>
        </Section>

        <Section title="Feeding at 12-18 months">
          <h3 className="font-semibold mb-1">Milk transition</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Switch from formula to whole cow&apos;s milk at 12 months (16-24 oz per day)</li>
            <li>Breastfeeding can continue as long as mutually desired</li>
            <li>Wean from bottles by 12-15 months — use open cups or straw cups</li>
            <li>No low-fat milk until age 2 (toddlers need dietary fat for brain development)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Solid foods</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>3 meals per day plus 2 snacks</li>
            <li>Same foods as the family (cut into safe sizes)</li>
            <li>Offer all food groups daily: grains, protein, fruits, vegetables, dairy</li>
            <li>Let toddler self-feed as much as possible (builds motor skills and independence)</li>
            <li>Portion sizes: about 1/4 of an adult portion per serving</li>
            <li>Expect food intake to vary day to day — this is normal</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Picky eating (normal at this age)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Food neophobia peaks between 18-24 months</li>
            <li>Continue offering rejected foods — may need 10-30 exposures</li>
            <li>No pressure, bribery, or punishment around food</li>
            <li>Division of responsibility: parent decides what and when; child decides whether and how much</li>
            <li>Serve at least one accepted food at each meal alongside new foods</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Choking hazards (still important)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Cut round foods (grapes, cherry tomatoes, hot dogs) lengthwise</li>
            <li>Avoid hard, round, sticky foods (whole nuts, raw carrots, popcorn, marshmallows)</li>
            <li>Always supervise eating; child should be seated</li>
          </ul>
        </Section>

        <Section title="Sleep at 12-18 months">
          <ul className="list-disc list-inside space-y-1">
            <li>Total sleep: 11-14 hours per day (AAP recommendation)</li>
            <li>Nighttime: 10-12 hours of sleep</li>
            <li>Daytime naps: transitioning from 2 naps to 1 nap (usually between 14-18 months)</li>
            <li>The single remaining nap is typically 1.5-3 hours after lunch</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Nap transition (2 to 1)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Signs of readiness: refusing morning nap, taking 30+ minutes to fall asleep for a nap, short naps</li>
            <li>Transition gradually — may alternate 1-nap and 2-nap days for a few weeks</li>
            <li>Move single nap to after lunch (around 12:30-1:00 pm)</li>
            <li>Temporarily move bedtime earlier during the transition</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Sleep challenges at this age</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>12-month sleep regression (related to walking and developmental leaps)</li>
            <li>Bedtime resistance and stalling tactics</li>
            <li>Climbing out of crib (lower mattress to lowest setting; consider transition to floor bed if safety is a concern)</li>
            <li>Night terrors may begin (partial wakenings with crying — child is not truly awake)</li>
          </ul>
        </Section>

        <Section title="Safety at 12-18 months">
          <p>Walking toddlers access new hazards every day. Re-evaluate your home regularly:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Climbing is new — secure bookshelves, dressers, and TVs to walls</li>
            <li>Move step stools and climbable objects away from counters and windows</li>
            <li>Window guards on all windows above ground floor</li>
            <li>Keep all medications in locked cabinets (even child-resistant caps are not child-proof)</li>
            <li>Poison Control number: 1-800-222-1222 (save in your phone)</li>
            <li>Water safety: never leave unattended near water; empty wading pools after use</li>
            <li>Shoes for outdoor walking (flexible sole); barefoot is fine indoors</li>
            <li>Forward-facing car seat transition: keep rear-facing as long as possible (at least until age 2 or seat limits — AAP recommends rear-facing to the maximum weight/height allowed)</li>
            <li>Keep doors to garages, laundry rooms, and bathrooms closed</li>
          </ul>
        </Section>

        <Section title="Common concerns at 12-18 months">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Tantrums:</strong> Normal expression of frustration. Stay calm, ensure safety, wait it out. Name the emotion: &quot;You are frustrated.&quot; Tantrums are not manipulation</li>
            <li><strong>Biting/hitting:</strong> Impulsive behavior, not aggression. Say &quot;no biting&quot; calmly, redirect, and model gentle touch</li>
            <li><strong>Not talking much:</strong> Some 12-15 month olds have very few words. Focus on comprehension (does baby understand what you say?). Discuss at 15-month visit if fewer than 3 words</li>
            <li><strong>Extreme picky eating:</strong> Normal phase. Maintain mealtime structure, avoid short-order cooking, and keep offering variety without pressure</li>
            <li><strong>Sleep regression at 12 months:</strong> Often related to walking, separation anxiety, or nap transition. Usually resolves in 2-4 weeks</li>
            <li><strong>Flat feet:</strong> Normal in toddlers — arches develop over the first 5-6 years. No special shoes needed</li>
          </ul>
        </Section>

        <Section title="Doctor visits at 12-18 months">
          <p>The AAP well-child visit schedule for this period:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>12 months:</strong> Growth check, vaccines (MMR, Varicella, Hep A, PCV13 booster), blood work (hemoglobin, lead)</li>
            <li><strong>15 months:</strong> Growth check, vaccines (DTaP booster, Hib booster), developmental review</li>
            <li><strong>18 months:</strong> Growth check, formal developmental screening (ASQ-3), autism screening (M-CHAT-R), Hep A #2</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">The 18-month autism screening</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>The AAP mandates autism screening at 18 and 24 months using M-CHAT-R</li>
            <li>Screening is universal — not just for children with suspected delays</li>
            <li>A positive screen does not mean a diagnosis; it means further evaluation is warranted</li>
            <li>Early intervention for autism is most effective when started before age 3</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">First dental visit</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Should occur by age 1 or within 6 months of first tooth (AAP/AAPD)</li>
            <li>Brush teeth twice daily with a rice-grain-sized smear of fluoride toothpaste</li>
            <li>No bottles of milk or juice at bedtime (tooth decay risk)</li>
          </ul>
        </Section>

        <Section title="When to call the doctor">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1 text-orange-700">
              <li>Not walking by 18 months</li>
              <li>Fewer than 6 words by 18 months</li>
              <li>Does not point to show things to you</li>
              <li>Does not notice when caregiver leaves or returns</li>
              <li>Does not copy others</li>
              <li>Does not follow simple instructions</li>
              <li>Does not know what familiar objects are for</li>
              <li>Loses skills previously had</li>
              <li>Does not make eye contact</li>
              <li>Does not engage in simple pretend play by 18 months</li>
            </ul>
          </div>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="The 12-18 month period is about growing independence balanced with the security of your presence. Tantrums, picky eating, and testing limits are all normal and healthy. Your toddler is not giving you a hard time — they are having a hard time. Patience, consistency, and connection are your best tools." />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <nav className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/ages/9-12mo" className="text-sm text-primary font-semibold hover:underline">&larr; 9-12 Months</Link>
        <Link href="/ages/18-24mo" className="text-sm text-primary font-semibold hover:underline">18-24 Months &rarr;</Link>
      </nav>
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
