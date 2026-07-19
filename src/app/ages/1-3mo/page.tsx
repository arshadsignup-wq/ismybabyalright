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
  title: '1-3 Month Baby Guide',
  description:
    'Complete guide to your baby at 1-3 months. Social smiling, head control, feeding schedules, sleep patterns, and 2-month vaccines. Based on AAP and CDC guidelines.',
  alternates: { canonical: '/ages/1-3mo' },
};

const faqItems = [
  {
    question: 'When do babies start smiling?',
    answer: 'Social smiling (smiling in response to your face or voice) typically begins around 6-8 weeks. By 2-3 months, most babies smile frequently at familiar faces. If your baby is not smiling by 3 months, mention it to your pediatrician.',
  },
  {
    question: 'How much should a 2-month-old eat?',
    answer: 'Breastfed babies typically feed 7-9 times per day. Formula-fed babies take 4-5 oz every 3-4 hours (about 24-32 oz per day). Feed on demand — your baby will let you know when they are hungry or full.',
  },
  {
    question: 'Can a 2-month-old sleep through the night?',
    answer: 'Most 2-month-olds still wake 1-3 times at night for feeds. Some babies begin sleeping one longer stretch of 4-6 hours. It is developmentally normal to need nighttime feeds at this age.',
  },
  {
    question: 'What vaccines does my baby get at 2 months?',
    answer: 'The AAP schedule includes DTaP, IPV (polio), Hib, PCV13 (pneumococcal), rotavirus (oral), and Hepatitis B (if not completed earlier). These protect against serious diseases and are safe to give together.',
  },
  {
    question: 'Is it normal for my baby to drool a lot at 2-3 months?',
    answer: 'Yes. Salivary glands become active around 2-3 months. This is developmental, not necessarily a sign of teething (which typically starts at 4-7 months). Drooling helps with future digestion.',
  },
];

export default function OneToThreeMonthsPage() {
  const schema = getContentPageSchema({
    name: '1-3 Month Baby Guide: Development, Feeding & Sleep',
    description: 'Complete guide to your baby at 1-3 months covering social smiling, head control, feeding schedules, sleep patterns, and 2-month vaccines.',
    path: '/ages/1-3mo',
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Age Guides', url: '/ages' },
    { name: '1-3 Months' },
  ]);
  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: 'Age Guides', href: '/ages' }, { label: '1-3 Months' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">1-3 Month Baby Guide</h1>
      <p className="text-sm text-muted mb-6">
        Between 1 and 3 months, your baby becomes more alert, social, and interactive. Expect the first real smile, better head control, and early cooing sounds. This guide covers what to expect based on AAP and CDC guidelines.
      </p>

      <KeyTakeaways
        takeaways={[
          'Social smiling begins around 6-8 weeks — one of the first major social milestones (CDC)',
          'Babies begin cooing and making vowel sounds ("ooh," "aah") by 2-3 months',
          'Head control improves significantly — can hold head at 45 degrees during tummy time',
          'The 2-month well-child visit includes the first major round of vaccines (AAP)',
          'Sleep consolidation begins — some babies sleep one longer stretch of 4-6 hours at night',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      </div>
      <LastReviewed date="2026-07-01" />

      <div className="space-y-6 mt-8">
        <Section title="Developmental milestones: 1-3 months">
          <p>According to the CDC, these milestones are typically reached by 2-3 months:</p>
          <h3 className="font-semibold mt-3 mb-1">Motor development</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Holds head up at 45-degree angle during tummy time</li>
            <li>Pushes up on forearms when on stomach</li>
            <li>Opens and closes hands; brings hands together</li>
            <li>Smoother, more purposeful arm and leg movements</li>
            <li>May bat at hanging toys (early reaching)</li>
            <li>Moro reflex begins to fade by 2-3 months</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Sensory and cognitive</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Tracks moving objects with eyes (follows past midline)</li>
            <li>Recognizes familiar faces from a distance</li>
            <li>Begins to show boredom if activity does not change (looks away, cries)</li>
            <li>Starts to coordinate hand and eye — watches own hands</li>
            <li>Turns head toward sounds</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Communication and social</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Social smile (6-8 weeks) — smiles at familiar faces</li>
            <li>Coos and makes vowel sounds ("ooh," "aah")</li>
            <li>Begins to self-soothe (may suck on hands)</li>
            <li>Different cries for different needs (hunger, tired, pain)</li>
            <li>Enjoys face-to-face interaction — may &quot;talk back&quot; when you speak</li>
          </ul>
        </Section>

        <Section title="Feeding at 1-3 months">
          <h3 className="font-semibold mb-1">Breastfeeding</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>7-9 feedings per day (some babies are efficient and finish in 10-15 minutes)</li>
            <li>Feedings become more predictable — roughly every 2.5-3.5 hours</li>
            <li>Growth spurts around 3 weeks, 6 weeks, and 3 months may increase feeding temporarily</li>
            <li>Continue feeding on demand — clock-watching is not recommended</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Formula feeding</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>4-5 oz per feeding, every 3-4 hours</li>
            <li>Total: approximately 24-32 oz per day</li>
            <li>Do not add cereal to bottles (choking risk, not recommended by AAP)</li>
            <li>Watch for fullness cues: turning away, closing mouth, falling asleep</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Weight gain</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Expected: 5-7 oz (150-200g) per week</li>
            <li>Birth weight typically doubles by 4-5 months</li>
            <li>Your pediatrician tracks growth curves at each visit</li>
          </ul>
        </Section>

        <Section title="Sleep at 1-3 months">
          <ul className="list-disc list-inside space-y-1">
            <li>Total sleep: 14-17 hours per day</li>
            <li>Daytime naps: 4-5 naps, gradually consolidating</li>
            <li>Nighttime: may begin sleeping one 4-6 hour stretch</li>
            <li>Still waking 1-3 times at night for feeds — this is normal and expected</li>
            <li>Day/night confusion typically resolves by 6-8 weeks</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Healthy sleep habits to start</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Expose to natural light during day; keep nights dark and quiet</li>
            <li>Begin a simple bedtime routine (feed, diaper, swaddle, song)</li>
            <li>Put baby down drowsy but awake when possible (building the skill)</li>
            <li>Continue following AAP safe sleep guidelines (back, firm surface, room-sharing)</li>
            <li>Swaddling with arms up or transitioning out by signs of rolling</li>
          </ul>
        </Section>

        <Section title="Safety at 1-3 months">
          <ul className="list-disc list-inside space-y-1">
            <li>Stop swaddling as soon as baby shows signs of rolling (can happen as early as 2 months)</li>
            <li>Never leave baby unattended on elevated surfaces — rolling can happen without warning</li>
            <li>Continue rear-facing car seat; check harness fit as baby grows</li>
            <li>Keep hot liquids away from baby; never hold hot drinks while holding baby</li>
            <li>Avoid propping bottles (choking risk)</li>
            <li>Ensure crib/bassinet meets current safety standards (no drop-side cribs)</li>
            <li>Begin baby-proofing planning — mobility comes quickly</li>
          </ul>
        </Section>

        <Section title="Common concerns at 1-3 months">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Colic:</strong> Crying peaks at 6-8 weeks. Rule of 3: 3+ hours/day, 3+ days/week, 3+ weeks. Usually resolves by 3-4 months</li>
            <li><strong>Reflux/spitting up:</strong> Peaks at 2-4 months. Normal if baby is gaining weight and not in pain. Keep upright 20-30 minutes after feeds</li>
            <li><strong>Flat head (positional plagiocephaly):</strong> Alternate head position during sleep; increase tummy time. Mention to doctor at 2-month visit</li>
            <li><strong>Cradle cap:</strong> May persist or worsen. Gently massage with oil and brush with soft brush</li>
            <li><strong>Baby acne:</strong> Peaks at 2-4 weeks, usually clears by 3 months. Do not use acne products</li>
            <li><strong>Stool changes:</strong> Breastfed babies may go several days without a stool after 6 weeks — this is normal if stools are soft when they come</li>
          </ul>
        </Section>

        <Section title="Doctor visits at 1-3 months">
          <p>The AAP well-child visit schedule for this period:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>1 month:</strong> Growth check, physical exam, Hepatitis B (2nd dose if needed)</li>
            <li><strong>2 months:</strong> Growth check, developmental screening, vaccines (DTaP, IPV, Hib, PCV13, rotavirus, Hep B)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Questions to ask at the 2-month visit</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Is my baby growing well? Where are they on the growth curve?</li>
            <li>Are there signs of reflux that need treatment?</li>
            <li>Is tummy time going well? Any concerns about head shape?</li>
            <li>What should I expect at the next developmental stage?</li>
          </ul>
        </Section>

        <Section title="When to call the doctor">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1 text-orange-700">
              <li>Fever of 100.4F (38C) or higher (still an emergency under 3 months)</li>
              <li>Not smiling at people by 3 months</li>
              <li>Does not follow moving objects with eyes</li>
              <li>Does not respond to loud sounds</li>
              <li>Cannot hold head up when pushing up on tummy</li>
              <li>Feeding significantly less than usual or refusing to eat</li>
              <li>Persistent vomiting (not just spitting up)</li>
              <li>Fewer than 4 wet diapers per day</li>
            </ul>
          </div>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="The 1-3 month period brings exciting social developments. Your baby's first real smile is a sign that their brain is developing beautifully. Focus on responsive caregiving — talking, singing, and making eye contact. Every baby develops at their own pace within a range of normal." />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <nav className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/ages/0-1mo" className="text-sm text-primary font-semibold hover:underline">&larr; 0-1 Month</Link>
        <Link href="/ages/3-6mo" className="text-sm text-primary font-semibold hover:underline">3-6 Months &rarr;</Link>
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
