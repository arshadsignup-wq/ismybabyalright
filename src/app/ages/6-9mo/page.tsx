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
  title: '6-9 Month Baby Guide',
  description:
    'Complete guide to your baby at 6-9 months. Sitting, crawling, babbling, solid foods, stranger anxiety, and 6-month well-child visit. Based on AAP and CDC guidelines.',
  alternates: { canonical: '/ages/6-9mo' },
};

const faqItems = [
  {
    question: 'When do babies start crawling?',
    answer: 'Most babies crawl between 7-10 months, but some skip crawling entirely and go straight to pulling up or walking. Some babies scoot, army crawl, or roll to get around. All of these are normal variations. The key milestone is that baby finds a way to move independently.',
  },
  {
    question: 'How much solid food should a 7-month-old eat?',
    answer: 'At 6-9 months, solid food is complementary — breast milk or formula remains the primary nutrition source. Start with 1-2 tablespoons of solids once or twice daily, gradually increasing. By 9 months, aim for 3 meals of 2-4 tablespoons each. Follow baby\'s hunger and fullness cues.',
  },
  {
    question: 'Is stranger anxiety normal?',
    answer: 'Yes. Stranger anxiety typically develops between 6-9 months and peaks around 12-18 months. It shows healthy attachment and cognitive development — your baby now understands that unfamiliar people are different from caregivers. Be patient and avoid forcing interactions.',
  },
  {
    question: 'When do babies start saying mama or dada?',
    answer: 'Babies typically begin babbling "mama" and "dada" sounds around 6-9 months, but these are usually not used with specific meaning until around 10-12 months. Repetitive babbling (ba-ba-ba, da-da-da) is the important milestone at this stage.',
  },
  {
    question: 'Can my baby have water now?',
    answer: 'Yes, starting at 6 months you can offer small sips of water with meals (2-4 oz per day). Breast milk or formula should still be the primary drink. Do not give juice — the AAP recommends no juice before age 1.',
  },
];

export default function SixToNineMonthsPage() {
  const schema = getContentPageSchema({
    name: '6-9 Month Baby Guide: Development, Feeding & Sleep',
    description: 'Complete guide to your baby at 6-9 months covering sitting, crawling, babbling, solid foods, stranger anxiety, and developmental screenings.',
    path: '/ages/6-9mo',
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Age Guides', url: '/ages' },
    { name: '6-9 Months' },
  ]);
  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: 'Age Guides', href: '/ages' }, { label: '6-9 Months' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">6-9 Month Baby Guide</h1>
      <p className="text-sm text-muted mb-6">
        Between 6 and 9 months, your baby becomes truly mobile and increasingly communicative. Sitting, crawling, babbling, and exploring solid foods transform daily life. This is also when separation and stranger anxiety begin — a sign of healthy attachment.
      </p>

      <KeyTakeaways
        takeaways={[
          'Most babies sit independently by 6-7 months and begin crawling by 7-10 months (CDC)',
          'Solid foods are introduced but breast milk or formula remains primary nutrition until age 1',
          'Babbling with consonants (ba-ba, da-da, ma-ma) emerges — talk and read to your baby often',
          'Stranger anxiety is a healthy developmental sign that shows secure attachment',
          'The 9-month visit includes the first formal AAP developmental screening',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      </div>
      <LastReviewed date="2026-07-01" />

      <div className="space-y-6 mt-8">
        <Section title="Developmental milestones: 6-9 months">
          <p>According to the CDC, these milestones are typically reached between 6-9 months:</p>
          <h3 className="font-semibold mt-3 mb-1">Motor development</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Sits independently without support (6-7 months)</li>
            <li>Rocks back and forth on hands and knees (pre-crawling)</li>
            <li>Crawls (7-10 months) — some scoot, army crawl, or roll instead</li>
            <li>Pulls to standing while holding furniture (8-9 months)</li>
            <li>Uses raking grasp to pick up small objects</li>
            <li>Developing pincer grasp (thumb and index finger) by 9 months</li>
            <li>Transfers objects between hands easily</li>
            <li>Bangs objects together deliberately</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Sensory and cognitive</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Looks for dropped or hidden objects (early object permanence)</li>
            <li>Explores objects by shaking, banging, throwing, and dropping</li>
            <li>Understands cause and effect (push button, hear sound)</li>
            <li>Responds to own name consistently</li>
            <li>Begins to understand &quot;no&quot; (may not obey, but understands tone)</li>
            <li>Points at objects of interest (by 9 months)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Communication and social</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Babbles with consonant-vowel combinations (ba-ba, da-da, ma-ma)</li>
            <li>Copies sounds and gestures</li>
            <li>Uses voice intentionally to get attention</li>
            <li>Stranger anxiety develops (6-9 months)</li>
            <li>Separation anxiety begins (around 8-9 months)</li>
            <li>Plays peekaboo and pat-a-cake</li>
            <li>Shows preference for certain people and toys</li>
          </ul>
        </Section>

        <Section title="Feeding at 6-9 months">
          <h3 className="font-semibold mb-1">Breast milk or formula (still primary)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Breastfed: 4-6 nursing sessions per day (some babies reduce as solids increase)</li>
            <li>Formula: 24-32 oz per day total, typically in 4-5 bottles of 6-8 oz</li>
            <li>Breast milk or formula should remain the primary calorie source until 12 months</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Solid foods progression</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>6-7 months: 1-2 meals per day, 1-2 tablespoons per meal</li>
            <li>8-9 months: 2-3 meals per day, 2-4 tablespoons per meal</li>
            <li>Texture progression: thin purees to mashed to soft lumps and finger foods</li>
            <li>Offer a variety: iron-rich foods, vegetables, fruits, grains, proteins</li>
            <li>Introduce common allergens early (peanut, egg, dairy, wheat) per AAP guidelines</li>
            <li>Small sips of water from an open cup with meals (2-4 oz per day)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Foods to avoid before 12 months</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Honey (botulism risk)</li>
            <li>Cow&apos;s milk as main drink (can replace formula at 12 months)</li>
            <li>Juice (no nutritional benefit, tooth decay risk — AAP recommends none before age 1)</li>
            <li>Choking hazards: whole grapes, hot dogs, raw carrots, popcorn, nuts, chunks of meat</li>
            <li>Added salt or sugar</li>
          </ul>
        </Section>

        <Section title="Sleep at 6-9 months">
          <ul className="list-disc list-inside space-y-1">
            <li>Total sleep: 12-15 hours per day</li>
            <li>Daytime naps: 2-3 naps (transitioning from 3 to 2 naps around 7-9 months)</li>
            <li>Nighttime: 10-12 hours (many babies can sleep 8+ hours without feeding)</li>
            <li>Some babies still wake 1-2 times for feeds — this is within normal range</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Sleep considerations at this age</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Separation anxiety may cause increased night waking around 8-9 months</li>
            <li>Developmental leaps (crawling, pulling up) can temporarily disrupt sleep</li>
            <li>Baby may practice new motor skills in the crib instead of sleeping</li>
            <li>Consistent bedtime routine becomes increasingly important</li>
            <li>If sleep training, the AAP notes that graduated extinction and bedtime fading are safe approaches at this age</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Nap transition (3 to 2 naps)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Usually happens between 7-9 months</li>
            <li>Signs: fighting third nap, taking longer to fall asleep, naps getting shorter</li>
            <li>Move to 2 naps with longer wake windows (2.5-3.5 hours between naps)</li>
          </ul>
        </Section>

        <Section title="Safety at 6-9 months">
          <p>Mobility means new hazards. Baby-proofing is essential now:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Install baby gates at top and bottom of stairs</li>
            <li>Secure heavy furniture and TVs to walls (tip-over risk)</li>
            <li>Cover electrical outlets; hide or secure cords</li>
            <li>Lock cabinets with cleaning supplies, medications, and sharp objects</li>
            <li>Remove tablecloths (baby can pull items down on themselves)</li>
            <li>Check floor constantly for small objects (coins, buttons, batteries)</li>
            <li>Keep toilet lids closed and bathroom doors shut</li>
            <li>Pool and water safety: constant supervision near any water</li>
            <li>Ensure all plants are non-toxic and out of reach</li>
            <li>Button batteries are extremely dangerous if swallowed — keep all remotes secured</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Choking prevention with solid foods</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Cut round foods (grapes, cherry tomatoes) lengthwise into strips</li>
            <li>Cook vegetables until soft enough to mash with gentle pressure</li>
            <li>Avoid hard, round, or sticky foods</li>
            <li>Always supervise eating; baby should be seated upright</li>
            <li>Learn infant CPR and choking response (take a class)</li>
          </ul>
        </Section>

        <Section title="Common concerns at 6-9 months">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Not crawling yet:</strong> Normal range is 7-10 months. Some babies skip crawling. Ensure plenty of floor time for practice</li>
            <li><strong>Teething pain:</strong> Usually first teeth appear at 6-10 months. Cold teething rings, gentle gum massage. Avoid numbing gels (benzocaine), amber necklaces, and homeopathic teething tablets (FDA warnings)</li>
            <li><strong>Separation anxiety:</strong> Peaks 8-18 months. Normal. Practice brief separations, consistent goodbyes, and always return when you say you will</li>
            <li><strong>Food refusal:</strong> Normal. May need 10-15 exposures before accepting a new food. No pressure, no force-feeding</li>
            <li><strong>Constipation with solids:</strong> Common when starting solids. Offer water, high-fiber foods (prunes, pears, peas). Discuss with doctor if persistent</li>
            <li><strong>Night waking increase:</strong> Common with new motor skills and separation anxiety. Usually temporary</li>
          </ul>
        </Section>

        <Section title="Doctor visits at 6-9 months">
          <p>The AAP well-child visit schedule for this period:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>6 months:</strong> Growth check, physical exam, vaccines (DTaP #3, PCV13 #3, flu shot in season), hemoglobin/lead screening in some areas</li>
            <li><strong>9 months:</strong> Growth check, first formal developmental screening (using ASQ or similar tool), dental assessment, nutritional review</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">The 9-month developmental screening</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>The AAP mandates formal screening at 9, 18, and 30 months</li>
            <li>Your pediatrician will use a standardized questionnaire (ASQ-3 or PEDS)</li>
            <li>Assesses motor, language, social-emotional, and problem-solving skills</li>
            <li>If concerns arise, early intervention referral may be made (free, every state)</li>
          </ul>
        </Section>

        <Section title="When to call the doctor">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1 text-orange-700">
              <li>Does not sit with support by 6 months or independently by 9 months</li>
              <li>Does not bear weight on legs when held upright</li>
              <li>Does not babble (no consonant sounds)</li>
              <li>Does not respond to own name</li>
              <li>Does not recognize familiar people</li>
              <li>Does not look where you point</li>
              <li>Does not transfer objects between hands</li>
              <li>Seems unusually stiff or floppy</li>
              <li>Has lost skills they previously had</li>
            </ul>
          </div>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="The 6-9 month period is a time of extraordinary growth in mobility and communication. Your baby is becoming a little explorer. Keep them safe, offer diverse foods, respond to their babbling, and enjoy the incredible developmental leaps happening every week." />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <nav className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/ages/3-6mo" className="text-sm text-primary font-semibold hover:underline">&larr; 3-6 Months</Link>
        <Link href="/ages/9-12mo" className="text-sm text-primary font-semibold hover:underline">9-12 Months &rarr;</Link>
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
