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
  title: '9-12 Month Baby Guide',
  description:
    'Complete guide to your baby at 9-12 months. Pulling to stand, cruising, first words, pincer grasp, self-feeding, and approaching the first birthday. Based on AAP and CDC guidelines.',
  alternates: { canonical: '/ages/9-12mo' },
};

const faqItems = [
  {
    question: 'When do babies start walking?',
    answer: 'Most babies take their first independent steps between 9-15 months, with the average around 12 months. Some walk as early as 9 months, others not until 15-18 months. Walking age does not predict athletic ability or intelligence. The CDC considers walking a milestone by 18 months.',
  },
  {
    question: 'When will my baby say their first word?',
    answer: 'Most babies say their first meaningful word (using it consistently for the same person or object) between 10-14 months. "Mama" and "dada" used with meaning typically come first. By 12 months, most babies have 1-3 words. Receptive language (understanding) develops before expressive language (speaking).',
  },
  {
    question: 'Can I switch from formula to cow\'s milk at 12 months?',
    answer: 'Yes. At 12 months, you can transition from formula to whole cow\'s milk (not reduced fat until age 2). Offer 16-24 oz per day — more than 24 oz can reduce appetite for solids and cause iron deficiency. Transition gradually over 1-2 weeks if needed.',
  },
  {
    question: 'Should I be worried my 10-month-old is not crawling?',
    answer: 'Not necessarily. While most babies crawl by 10 months, some skip crawling entirely. The important thing is that your baby has some form of independent mobility. If your baby cannot get around at all by 12 months and is not pulling to stand, discuss with your pediatrician.',
  },
  {
    question: 'How do I handle my baby\'s separation anxiety?',
    answer: 'Separation anxiety peaks between 10-18 months and is a healthy sign of attachment. Practice brief separations, always say goodbye (do not sneak away), keep departures brief and positive, and reassure baby you will return. It typically improves gradually after 18 months.',
  },
];

export default function NineToTwelveMonthsPage() {
  const schema = getContentPageSchema({
    name: '9-12 Month Baby Guide: Development, Feeding & Sleep',
    description: 'Complete guide to your baby at 9-12 months covering pulling to stand, cruising, first words, pincer grasp, self-feeding, and approaching the first birthday.',
    path: '/ages/9-12mo',
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Age Guides', url: '/ages' },
    { name: '9-12 Months' },
  ]);
  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: 'Age Guides', href: '/ages' }, { label: '9-12 Months' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">9-12 Month Baby Guide</h1>
      <p className="text-sm text-muted mb-6">
        Between 9 and 12 months, your baby is on the verge of toddlerhood. Pulling to stand, cruising along furniture, and possibly taking first steps. Language explodes with first meaningful words, and self-feeding skills develop rapidly.
      </p>

      <KeyTakeaways
        takeaways={[
          'Most babies pull to stand by 9-10 months and cruise along furniture by 10-12 months (CDC)',
          'First meaningful words typically appear between 10-14 months',
          'Pincer grasp (thumb and forefinger) allows self-feeding of small finger foods',
          'Transition from formula to whole cow\'s milk is appropriate at 12 months (AAP)',
          'The 12-month visit includes vaccines and a developmental check',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      </div>
      <LastReviewed date="2026-07-01" />

      <div className="space-y-6 mt-8">
        <Section title="Developmental milestones: 9-12 months">
          <p>According to the CDC, these milestones are typically reached between 9-12 months:</p>
          <h3 className="font-semibold mt-3 mb-1">Motor development</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Pulls to stand holding furniture (9-10 months)</li>
            <li>Cruises along furniture (10-12 months)</li>
            <li>Stands briefly without support (around 11-12 months)</li>
            <li>May take first independent steps (9-15 months range)</li>
            <li>Mature pincer grasp — picks up small objects with thumb and forefinger</li>
            <li>Puts objects in and takes them out of containers</li>
            <li>Pokes with index finger</li>
            <li>Claps hands</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Sensory and cognitive</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Object permanence is well-established — looks for hidden objects</li>
            <li>Understands simple cause and effect (drops toy, you pick it up)</li>
            <li>Explores objects in more varied ways (shaking, banging, throwing, dropping)</li>
            <li>Follows simple instructions ("give me the ball," "wave bye-bye")</li>
            <li>Points to desired objects</li>
            <li>Looks at correct picture when named</li>
            <li>Imitates actions (clapping, waving, stirring)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Communication and social</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Says &quot;mama&quot; and &quot;dada&quot; with meaning (10-12 months)</li>
            <li>May have 1-3 other words by 12 months</li>
            <li>Understands 10-50 words (far more than can say)</li>
            <li>Uses gestures: waving, pointing, shaking head &quot;no&quot;</li>
            <li>Plays social games (peekaboo, pat-a-cake, so big)</li>
            <li>Shows affection to familiar people (hugging, kissing)</li>
            <li>Separation anxiety may be intense</li>
            <li>Tests caregiver reactions — watches your face when doing something new</li>
          </ul>
        </Section>

        <Section title="Feeding at 9-12 months">
          <h3 className="font-semibold mb-1">Breast milk or formula (still important until 12 months)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Breastfed: 3-5 nursing sessions per day</li>
            <li>Formula: 24-32 oz per day in 3-4 bottles</li>
            <li>Continue until 12 months; then transition to whole cow&apos;s milk</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Solid foods (increasingly important)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>3 meals per day plus 1-2 snacks</li>
            <li>Texture: soft table foods, mashed, chopped small, soft finger foods</li>
            <li>Self-feeding increases with pincer grasp — offer soft, small pieces</li>
            <li>Good finger foods: small pieces of banana, avocado, cooked pasta, scrambled eggs, soft cheese, steamed vegetables</li>
            <li>Continue offering variety — all food groups daily</li>
            <li>Iron-rich foods remain important (meat, fortified cereal, beans, lentils)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Cup and spoon skills</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Practice with an open cup (expect spills — this is learning)</li>
            <li>Straw cups are preferred over sippy cups for oral development</li>
            <li>Baby may attempt to use a spoon (pre-loaded spoons help)</li>
            <li>Aim to transition off bottles by 12-15 months to prevent tooth decay</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">At 12 months: the milk transition</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Switch from formula to whole cow&apos;s milk (16-24 oz per day, not more)</li>
            <li>Breastfeeding can continue as long as mutually desired</li>
            <li>No low-fat milk until age 2 (babies need the fat for brain development)</li>
            <li>Limit to 24 oz per day — too much milk reduces appetite and iron absorption</li>
          </ul>
        </Section>

        <Section title="Sleep at 9-12 months">
          <ul className="list-disc list-inside space-y-1">
            <li>Total sleep: 12-14 hours per day</li>
            <li>Daytime naps: 2 naps (morning and afternoon, about 1-2 hours each)</li>
            <li>Nighttime: 10-12 hours (many babies sleep through the night)</li>
            <li>Some babies still wake once for a feed — discuss with pediatrician if concerned</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Common sleep disruptions</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>8-10 month sleep regression (linked to separation anxiety and motor development)</li>
            <li>Standing in crib and not knowing how to get back down</li>
            <li>Teething discomfort (molars may begin around 12 months)</li>
            <li>Separation anxiety making bedtime difficult</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Strategies</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Consistent bedtime routine remains important (bath, book, song, bed)</li>
            <li>Practice sitting down from standing during the day</li>
            <li>Brief, reassuring check-ins if baby wakes</li>
            <li>A lovey or comfort object is safe after 12 months (if no choking hazards)</li>
          </ul>
        </Section>

        <Section title="Safety at 9-12 months">
          <p>Your baby is mobile and increasingly skilled with hands. Re-evaluate baby-proofing:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Recheck all baby gates — ensure they are sturdy as baby pulls on them</li>
            <li>Lock all cabinets and drawers within reach</li>
            <li>Move all breakable, sharp, or dangerous items to higher shelves</li>
            <li>Cord blinds and curtain cords must be out of reach (strangulation risk)</li>
            <li>Ensure no climbing hazards that could lead to falls</li>
            <li>Kitchen safety: turn pot handles inward, use stove knob covers</li>
            <li>Check that furniture is securely anchored — cruising babies pull on everything</li>
            <li>Shoe-free zones on hard floors help with walking development</li>
            <li>Keep bathroom doors closed and toilet locks installed</li>
            <li>Button batteries, magnets, and coins are leading foreign body hazards at this age</li>
          </ul>
        </Section>

        <Section title="Common concerns at 9-12 months">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Not walking yet:</strong> Normal range extends to 15-18 months. Walking before 12 months is not expected or required. Focus on whether baby is pulling up and cruising</li>
            <li><strong>Picky eating beginning:</strong> Food neophobia (fear of new foods) may emerge. Keep offering variety without pressure. It is normal for appetite to fluctuate</li>
            <li><strong>Biting:</strong> Common when teething or experimenting. Firm &quot;no,&quot; redirect, and offer appropriate things to bite. Not a behavioral problem at this age</li>
            <li><strong>Head banging:</strong> Up to 20% of babies bang their head rhythmically. Usually self-soothing. Mention to doctor but typically not concerning unless combined with other developmental delays</li>
            <li><strong>Separation anxiety intensifying:</strong> Peaks around 10-18 months. Consistent routines and short practice separations help</li>
            <li><strong>Not saying words yet:</strong> Many babies have no clear words at 12 months. Understanding words is more important than speaking them at this stage</li>
          </ul>
        </Section>

        <Section title="Doctor visits at 9-12 months">
          <p>The AAP well-child visit schedule for this period:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>9 months:</strong> Growth check, formal developmental screening (ASQ-3), nutritional assessment, dental health review</li>
            <li><strong>12 months:</strong> Growth check, vaccines (MMR #1, Varicella #1, Hep A #1, PCV13 booster), blood work (hemoglobin, lead screening)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">The first birthday visit</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Comprehensive developmental assessment</li>
            <li>Discussion about transitioning from formula/bottle</li>
            <li>Review of feeding and nutrition (table foods, cup use)</li>
            <li>Sleep and behavior discussion</li>
            <li>Safety review for the newly-mobile toddler</li>
            <li>First dental visit recommended by age 1 (or within 6 months of first tooth)</li>
          </ul>
        </Section>

        <Section title="When to call the doctor">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1 text-orange-700">
              <li>Cannot stand with support by 12 months</li>
              <li>Does not crawl or has no way of moving independently</li>
              <li>Does not point to things or use gestures (waving, shaking head)</li>
              <li>Does not search for hidden objects</li>
              <li>Says no words and does not babble with consonants</li>
              <li>Does not respond to name or simple instructions</li>
              <li>Loses skills previously acquired</li>
              <li>Does not show affection to familiar caregivers</li>
              <li>Does not imitate actions or sounds</li>
            </ul>
          </div>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="The 9-12 month period is the bridge from infancy to toddlerhood. Your baby is becoming a little person with opinions, preferences, and an ever-expanding understanding of the world. First steps, first words, and first birthday — celebrate every milestone, big and small." />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <nav className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/ages/6-9mo" className="text-sm text-primary font-semibold hover:underline">&larr; 6-9 Months</Link>
        <Link href="/ages/12-18mo" className="text-sm text-primary font-semibold hover:underline">12-18 Months &rarr;</Link>
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
