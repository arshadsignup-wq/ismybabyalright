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
  title: '0-1 Month Baby Guide',
  description:
    'Complete guide to your baby at 0-1 month. Newborn reflexes, feeding every 2-3 hours, sleep patterns, umbilical cord care, and when to call the doctor. Based on AAP guidelines.',
  alternates: { canonical: '/ages/0-1mo' },
};

const faqItems = [
  {
    question: 'How much should a 0-1 month old eat?',
    answer: 'Breastfed newborns feed 8-12 times per day (every 2-3 hours). Formula-fed babies take 2-3 oz every 3-4 hours. By 1 month, formula-fed babies may take 3-4 oz per feeding. Watch for hunger cues rather than watching the clock.',
  },
  {
    question: 'How much does a newborn sleep?',
    answer: 'Newborns sleep 14-17 hours per day in short stretches of 2-4 hours. They do not distinguish day from night yet. Always place baby on their back on a firm, flat surface for sleep (AAP safe sleep guidelines).',
  },
  {
    question: 'When will my newborn smile?',
    answer: 'Reflexive smiles can happen from birth, often during sleep. Social smiling (in response to your face or voice) typically begins around 6-8 weeks. This is one of the first social milestones.',
  },
  {
    question: 'Is it normal for a newborn to hiccup a lot?',
    answer: 'Yes. Frequent hiccups are very common in newborns due to an immature diaphragm. They do not bother your baby and typically decrease after the first few months.',
  },
  {
    question: 'When is my newborn\'s first doctor visit?',
    answer: 'The AAP recommends the first well-child visit within 3-5 days after hospital discharge (or within 48 hours if discharged before 48 hours of age). The next visit is at 1 month.',
  },
];

export default function ZeroToOneMonthPage() {
  const schema = getContentPageSchema({
    name: '0-1 Month Baby Guide: Newborn Development, Feeding & Sleep',
    description: 'Complete guide to your baby at 0-1 month covering reflexes, feeding, sleep patterns, umbilical cord care, and when to call the doctor.',
    path: '/ages/0-1mo',
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Age Guides', url: '/ages' },
    { name: '0-1 Month' },
  ]);
  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: 'Age Guides', href: '/ages' }, { label: '0-1 Month' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">0-1 Month Baby Guide</h1>
      <p className="text-sm text-muted mb-6">
        Your newborn is adjusting to life outside the womb. This first month brings rapid change for both baby and parents. Here is what to expect based on AAP and CDC guidelines.
      </p>

      <KeyTakeaways
        takeaways={[
          'Newborns sleep 14-17 hours per day and eat 8-12 times per day (AAP)',
          'Birth weight should be regained by 10-14 days of age',
          'Always place baby on their back to sleep on a firm, flat surface',
          'Call your doctor immediately for fever of 100.4F (38C) or higher in babies under 3 months',
          'Tummy time should begin in the first week — start with 1-2 minutes several times per day',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['AAP', 'CDC', 'WHO']} />
      </div>
      <LastReviewed date="2026-07-01" />

      <div className="space-y-6 mt-8">
        <Section title="Developmental milestones: 0-1 month">
          <p>According to the CDC, these are typical milestones for the first month:</p>
          <h3 className="font-semibold mt-3 mb-1">Motor development</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Moves arms and legs in jerky, erratic motions</li>
            <li>Brings hands to face</li>
            <li>Head falls back if unsupported — always support the head and neck</li>
            <li>Strong reflexes: rooting, sucking, Moro (startle), palmar grasp</li>
            <li>Can briefly lift head during tummy time by end of month</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Sensory and cognitive</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Focuses on faces 8-12 inches away (distance from breast to face)</li>
            <li>Prefers black-and-white or high-contrast patterns</li>
            <li>Recognizes caregiver&apos;s voice and smell</li>
            <li>Startles to loud sounds</li>
            <li>Cries to communicate needs (hunger, discomfort, fatigue)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Social and emotional</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Calms when picked up or hears caregiver&apos;s voice</li>
            <li>Prefers looking at faces over other shapes</li>
            <li>May have brief quiet alert periods</li>
          </ul>
        </Section>

        <Section title="Feeding at 0-1 month">
          <h3 className="font-semibold mb-1">Breastfeeding</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>8-12 feedings per day (every 2-3 hours, including at night)</li>
            <li>Colostrum transitions to mature milk by days 3-5</li>
            <li>Feed on demand — watch for hunger cues (rooting, hand-to-mouth, fussiness)</li>
            <li>Each feeding typically lasts 10-20 minutes per side</li>
            <li>Expect 6+ wet diapers and 3-4 stools per day by end of first week</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Formula feeding</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Newborns: 1-2 oz per feeding, every 3-4 hours</li>
            <li>By 1 month: 3-4 oz per feeding, 6-8 times per day</li>
            <li>Do not prop bottles or force baby to finish</li>
            <li>Follow formula preparation instructions exactly</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Signs feeding is going well</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Steady weight gain after initial loss (regain birth weight by 10-14 days)</li>
            <li>6+ wet diapers per day by day 5</li>
            <li>Baby seems satisfied after feeds</li>
            <li>You can hear swallowing during breastfeeding</li>
          </ul>
        </Section>

        <Section title="Sleep at 0-1 month">
          <ul className="list-disc list-inside space-y-1">
            <li>Total sleep: 14-17 hours per day (no day/night distinction yet)</li>
            <li>Sleep stretches: typically 2-4 hours at a time</li>
            <li>Longest sleep stretch: often 3-4 hours</li>
            <li>Expect frequent nighttime waking for feeds — this is biologically normal</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Safe sleep (AAP guidelines)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Always place on back to sleep (reduces SIDS risk by 50%)</li>
            <li>Use a firm, flat surface with a fitted sheet — no soft bedding</li>
            <li>Room-share (not bed-share) for at least the first 6 months</li>
            <li>No blankets, pillows, bumpers, or stuffed animals in the sleep space</li>
            <li>Keep room temperature comfortable (68-72F / 20-22C)</li>
            <li>Offer a pacifier at sleep time (after breastfeeding is established)</li>
          </ul>
        </Section>

        <Section title="Safety at 0-1 month">
          <ul className="list-disc list-inside space-y-1">
            <li>Always support the head and neck when holding baby</li>
            <li>Never leave baby unattended on elevated surfaces</li>
            <li>Use a rear-facing car seat from the first ride home — harness snug, chest clip at armpit level</li>
            <li>Keep small objects, plastic bags, and cords away from baby</li>
            <li>No honey until age 1 (botulism risk)</li>
            <li>Wash hands before handling baby; limit visitors if baby is premature or immunocompromised</li>
            <li>Avoid direct sun exposure — newborn skin burns easily</li>
            <li>Never shake a baby — if frustrated, place baby safely in crib and take a break</li>
          </ul>
        </Section>

        <Section title="Common concerns at 0-1 month">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Jaundice:</strong> Yellow skin/eyes from bilirubin buildup. Mild jaundice is common. Call doctor if spreading to arms/legs or baby is hard to wake</li>
            <li><strong>Spitting up:</strong> Normal in small amounts after feeds. Concerning if forceful, green, or baby is not gaining weight</li>
            <li><strong>Crying:</strong> Peaks at 6-8 weeks. Colic (3+ hours of crying, 3+ days per week) affects ~20% of babies</li>
            <li><strong>Diaper rash:</strong> Keep area clean and dry, use barrier cream. Call doctor if it blisters or does not improve in 3 days</li>
            <li><strong>Cradle cap:</strong> Scaly, yellowish patches on scalp. Harmless and clears on its own</li>
            <li><strong>Sneezing and hiccups:</strong> Very common and rarely indicate illness in newborns</li>
          </ul>
        </Section>

        <Section title="Doctor visits at 0-1 month">
          <p>The AAP well-child visit schedule for this period:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>3-5 days after birth:</strong> Weight check, feeding assessment, jaundice screening, umbilical cord check</li>
            <li><strong>1 month:</strong> Growth measurements, physical exam, developmental screening, feeding discussion, Hepatitis B vaccine (2nd dose if not given earlier)</li>
          </ul>
          <p className="mt-2">Bring questions written down — it is easy to forget in the moment.</p>
        </Section>

        <Section title="When to call the doctor immediately">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1 text-orange-700">
              <li>Rectal temperature of 100.4F (38C) or higher</li>
              <li>Refuses to eat or has not had a wet diaper in 6+ hours</li>
              <li>Difficulty breathing, grunting, or flaring nostrils</li>
              <li>Skin looks yellow or increasingly jaundiced</li>
              <li>Unusually sleepy or difficult to wake</li>
              <li>Vomiting (not just spitting up) — especially if green or bloody</li>
              <li>Umbilical cord area is red, swollen, or foul-smelling</li>
              <li>Inconsolable crying that feels different from normal</li>
            </ul>
          </div>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="The first month is about survival and bonding — not perfection. Your baby needs warmth, food, and your presence. If something feels wrong, trust your instincts and call your pediatrician. There is no such thing as calling too often with a newborn." />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <nav className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/newborn" className="text-sm text-primary font-semibold hover:underline">&larr; Newborn Hub</Link>
        <Link href="/ages/1-3mo" className="text-sm text-primary font-semibold hover:underline">1-3 Months &rarr;</Link>
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
