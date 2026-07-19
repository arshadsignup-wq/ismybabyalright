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
  title: '3-6 Month Baby Guide',
  description:
    'Complete guide to your baby at 3-6 months. Rolling over, reaching, laughing, starting solids, sleep regression, and 4-month vaccines. Based on AAP and CDC guidelines.',
  alternates: { canonical: '/ages/3-6mo' },
};

const faqItems = [
  {
    question: 'When should I start solid foods?',
    answer: 'The AAP recommends introducing solid foods around 6 months, when baby shows readiness signs: good head control, sitting with support, showing interest in food, and loss of the tongue-thrust reflex. Some pediatricians may suggest starting between 4-6 months. Discuss timing with your doctor.',
  },
  {
    question: 'Is the 4-month sleep regression real?',
    answer: 'Yes. Around 3-4 months, babies transition from newborn sleep cycles to adult-like sleep architecture (lighter and deeper sleep stages). This causes more frequent waking. It is a permanent change in sleep maturation, not a temporary setback. It typically lasts 2-6 weeks.',
  },
  {
    question: 'When do babies roll over?',
    answer: 'Most babies roll from tummy to back first, around 4 months. Rolling from back to tummy typically follows at 5-6 months. Once rolling begins, stop swaddling and ensure a safe sleep space.',
  },
  {
    question: 'Is it normal for a 4-month-old to put everything in their mouth?',
    answer: 'Yes. Mouthing objects is how babies explore and learn at this age. It is normal and important for development. Ensure objects are safe (no small parts, non-toxic) and keep choking hazards out of reach.',
  },
  {
    question: 'Does my baby need water at this age?',
    answer: 'No. Babies under 6 months get all the hydration they need from breast milk or formula. Giving water can fill their stomach without providing nutrition and can dangerously dilute blood sodium levels.',
  },
];

export default function ThreeToSixMonthsPage() {
  const schema = getContentPageSchema({
    name: '3-6 Month Baby Guide: Development, Feeding & Sleep',
    description: 'Complete guide to your baby at 3-6 months covering rolling, reaching, laughing, sleep regression, starting solids, and 4-month vaccines.',
    path: '/ages/3-6mo',
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Age Guides', url: '/ages' },
    { name: '3-6 Months' },
  ]);
  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: 'Age Guides', href: '/ages' }, { label: '3-6 Months' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">3-6 Month Baby Guide</h1>
      <p className="text-sm text-muted mb-6">
        Between 3 and 6 months, your baby becomes increasingly active and engaged. Expect rolling, reaching, belly laughs, and growing curiosity about the world. This is also when sleep patterns mature and solid foods may be introduced.
      </p>

      <KeyTakeaways
        takeaways={[
          'Rolling typically begins around 4 months — stop swaddling at first signs of rolling',
          'The 4-month sleep regression is a normal maturation of sleep cycles (AAP)',
          'The AAP recommends introducing solids around 6 months when baby shows readiness signs',
          'Babies laugh, squeal, and begin babbling with consonant sounds ("ba," "da")',
          'The 4-month and 6-month well-child visits include important vaccines and screening',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      </div>
      <LastReviewed date="2026-07-01" />

      <div className="space-y-6 mt-8">
        <Section title="Developmental milestones: 3-6 months">
          <p>According to the CDC, these milestones are typically reached between 4-6 months:</p>
          <h3 className="font-semibold mt-3 mb-1">Motor development</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Rolls from tummy to back (around 4 months) and back to tummy (5-6 months)</li>
            <li>Pushes up to elbows and eventually to hands during tummy time</li>
            <li>Reaches for and grasps objects with both hands</li>
            <li>Brings objects to mouth for exploration</li>
            <li>Sits with support; begins sitting briefly without support by 6 months</li>
            <li>Bears weight on legs when held upright</li>
            <li>Transfers objects from one hand to the other (by 6 months)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Sensory and cognitive</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Improved color vision — sees full color spectrum</li>
            <li>Tracks objects smoothly in all directions</li>
            <li>Explores objects by mouthing, shaking, and banging</li>
            <li>Shows interest in mirror reflections</li>
            <li>Responds to own name by 5-6 months</li>
            <li>Recognizes familiar objects and people from a distance</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Communication and social</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Laughs out loud and squeals with delight</li>
            <li>Babbles with consonant-vowel combinations ("ba-ba," "da-da")</li>
            <li>Uses voice to express pleasure and displeasure</li>
            <li>Responds to emotions in others&apos; voices</li>
            <li>Enjoys social play — may cry when play stops</li>
            <li>Beginning of stranger awareness (not full stranger anxiety yet)</li>
          </ul>
        </Section>

        <Section title="Feeding at 3-6 months">
          <h3 className="font-semibold mb-1">Breast milk or formula (still primary nutrition)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Breastfed: 6-8 feedings per day; more efficient feeding sessions</li>
            <li>Formula: 5-6 oz per feeding, 5-6 times per day (28-32 oz total)</li>
            <li>Growth spurts around 4 months may temporarily increase feeding</li>
            <li>No water, juice, or solids needed before 6 months (AAP recommendation)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Starting solids (around 6 months)</h3>
          <p>Signs of readiness (all should be present):</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Good head and neck control</li>
            <li>Sits with minimal support</li>
            <li>Shows interest in food (reaches for it, opens mouth)</li>
            <li>Loss of tongue-thrust reflex (does not push food out)</li>
          </ul>
          <p className="mt-2">First foods can include iron-fortified single-grain cereal, pureed vegetables, fruits, or soft finger foods (baby-led weaning). Introduce one new food every 2-3 days to watch for allergies.</p>
          <h3 className="font-semibold mt-3 mb-1">Allergen introduction</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>AAP now recommends early introduction of common allergens (peanut, egg, dairy) around 6 months</li>
            <li>Early introduction may reduce allergy risk, especially for high-risk babies</li>
            <li>Discuss with your pediatrician, especially if family history of allergies or eczema</li>
          </ul>
        </Section>

        <Section title="Sleep at 3-6 months">
          <ul className="list-disc list-inside space-y-1">
            <li>Total sleep: 12-16 hours per day</li>
            <li>Daytime naps: 3-4 naps, typically 30 minutes to 2 hours each</li>
            <li>Nighttime: may sleep 6-8 hours in one stretch by 4-6 months</li>
            <li>Still may need 1-2 nighttime feeds — this is normal</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">The 4-month sleep regression</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Sleep cycles permanently mature around 3-4 months</li>
            <li>Baby transitions between light and deep sleep more like an adult</li>
            <li>More frequent waking between cycles is normal during this transition</li>
            <li>Typically lasts 2-6 weeks</li>
            <li>Maintain consistent bedtime routine; avoid introducing new sleep associations you do not want long-term</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Sleep safety updates</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Stop swaddling once baby can roll (typically 3-4 months)</li>
            <li>Transition to a sleep sack or wearable blanket</li>
            <li>If baby rolls to stomach during sleep, it is safe to leave them (if they rolled independently)</li>
            <li>Continue room-sharing for at least 6 months (AAP recommendation)</li>
          </ul>
        </Section>

        <Section title="Safety at 3-6 months">
          <ul className="list-disc list-inside space-y-1">
            <li>Baby-proof your home — rolling and reaching make new hazards accessible</li>
            <li>Lower the crib mattress before baby can pull up</li>
            <li>Keep small objects out of reach (anything smaller than a toilet paper tube is a choking hazard)</li>
            <li>Never leave baby unattended near water, even an inch of water in a bathtub</li>
            <li>Ensure all medications, cleaning products, and batteries are locked away</li>
            <li>Check toy recalls regularly; remove any toys with small parts</li>
            <li>Begin using outlet covers and securing furniture to walls</li>
            <li>Sun protection: shade, hats, and small amounts of sunscreen on exposed areas (AAP allows sunscreen at 6 months)</li>
          </ul>
        </Section>

        <Section title="Common concerns at 3-6 months">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Teething:</strong> May begin between 4-7 months. Symptoms: drooling, chewing, fussiness. Use teething rings (not frozen solid), gentle gum massage. Avoid numbing gels and amber necklaces (AAP)</li>
            <li><strong>Sleep regression:</strong> Around 4 months. Normal brain maturation. Maintain consistent routines and it will pass</li>
            <li><strong>Increased drooling:</strong> Salivary glands are active. Does not always mean teething</li>
            <li><strong>Rolling in sleep:</strong> Once baby can roll both ways independently, they can sleep in their preferred position</li>
            <li><strong>Distracted feeding:</strong> Baby becomes more interested in surroundings. Feed in a quiet, dimly lit space if needed</li>
            <li><strong>Not rolling yet at 5 months:</strong> More tummy time can help. Mention to pediatrician if no rolling by 6 months</li>
          </ul>
        </Section>

        <Section title="Doctor visits at 3-6 months">
          <p>The AAP well-child visit schedule for this period:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>4 months:</strong> Growth check, developmental screening, vaccines (DTaP #2, IPV #2, Hib #2, PCV13 #2, rotavirus #2)</li>
            <li><strong>6 months:</strong> Growth check, developmental screening, vaccines (DTaP #3, Hep B #3, flu shot if in season), blood test for lead and anemia in some areas</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Topics to discuss</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Readiness for solid foods and how to start</li>
            <li>Sleep patterns and any regression concerns</li>
            <li>Motor development (rolling, sitting progress)</li>
            <li>Teething and pain management</li>
          </ul>
        </Section>

        <Section title="When to call the doctor">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1 text-orange-700">
              <li>Not rolling in either direction by 6 months</li>
              <li>Does not reach for or grasp objects</li>
              <li>Does not respond to sounds or turn toward voices</li>
              <li>Does not laugh or squeal</li>
              <li>Seems very stiff or very floppy</li>
              <li>Does not bear weight on legs when held upright</li>
              <li>One eye turns in or out consistently</li>
              <li>Fever over 101F (38.3C) in a baby 3-6 months old</li>
            </ul>
          </div>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="The 3-6 month period is full of exciting firsts: first laugh, first roll, and maybe first tastes of food. Sleep changes can be challenging, but they represent healthy brain development. Keep up tummy time, talk and read to your baby, and enjoy this increasingly interactive stage." />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <nav className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/ages/1-3mo" className="text-sm text-primary font-semibold hover:underline">&larr; 1-3 Months</Link>
        <Link href="/ages/6-9mo" className="text-sm text-primary font-semibold hover:underline">6-9 Months &rarr;</Link>
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
