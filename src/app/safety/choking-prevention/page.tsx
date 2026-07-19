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
  title: 'Choking Prevention by Age',
  description:
    'Choking hazards for babies and toddlers by age. Food choking prevention, non-food hazards, how to cut foods safely, and when to call 911. AAP guidelines.',
  alternates: { canonical: '/safety/choking-prevention' },
  openGraph: {
    title: 'Choking Prevention by Age | Is My Baby Alright?',
    description:
      'Food and non-food choking hazards by age, how to cut foods safely, and emergency response based on AAP guidelines.',
  },
};

const faqItems = [
  { question: 'What is the difference between gagging and choking?', answer: 'Gagging is a normal protective reflex — the child coughs, sputters, or retches but can still breathe and make noise. Choking means the airway is blocked — the child cannot breathe, cry, or cough effectively and may turn blue. Gagging is normal during food introduction; choking is an emergency.' },
  { question: 'What foods are the biggest choking hazards?', answer: 'Round, firm, sticky, or hard foods: whole grapes, hot dogs (cut lengthwise), popcorn, whole nuts, hard candy, raw carrots, chunks of cheese, marshmallows, peanut butter by the spoonful, and cherry tomatoes. Always cut round foods lengthwise into quarters.' },
  { question: 'How small should I cut food for a baby starting solids?', answer: 'For baby-led weaning (6+ months): finger-sized strips they can palm. For spoon-fed babies transitioning to finger foods (8-10 months): pea-sized pieces. Cut all round foods lengthwise. Food should be soft enough to squish between your fingers.' },
  { question: 'Should I take an infant CPR class?', answer: 'Yes. The AAP strongly recommends that all parents and caregivers learn infant and child CPR and choking response. Many hospitals, fire departments, and the American Red Cross offer classes. Practice regularly so the skills stay fresh.' },
  { question: 'Are mesh feeders safe for babies?', answer: 'Mesh feeders (fresh food feeders) can be a safer way to introduce firm foods like frozen fruit to teething babies because they prevent large pieces from breaking off. However, always supervise their use and check for tears in the mesh.' },
  { question: 'What non-food items are common choking hazards?', answer: 'Coins, button batteries, small magnets, balloons (especially latex), small toy parts, pen caps, buttons, marbles, and beads. Any object that fits through a toilet paper tube is a choking hazard for children under 3.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Choking Prevention' },
];

export default function ChokingPreventionPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Choking Prevention by Age',
          description: 'Complete choking prevention guide covering food and non-food hazards by age, safe food preparation, and emergency response.',
          path: '/safety/choking-prevention',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Choking Prevention Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'CPSC Small Parts Standards', url: 'https://www.cpsc.gov/' },
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

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Choking Prevention' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Choking Prevention: Hazards by Age
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CPSC', 'Safe Kids Worldwide']} />
      <p className="text-sm text-muted mb-6">
        Choking is the leading cause of injury and death in children under 4.
        One child dies from choking every 5 days in the United States, and thousands
        visit the emergency room each year. Most incidents are preventable.
      </p>

      <KeyTakeaways
        takeaways={[
          'Choking is the #1 cause of injury death in children under 4',
          'Cut all round foods (grapes, hot dogs, cherry tomatoes) lengthwise into quarters',
          'Any object that fits through a toilet paper tube is a choking hazard for children under 3',
          'Always supervise meals — children should sit upright and never eat while walking or playing',
          'Learn infant CPR and choking response — take a class before baby starts solids',
        ]}
      />

      <div className="space-y-6">
        <Section title="Food choking hazards by age">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-foreground">6-12 months (starting solids)</p>
              <p className="mb-1">At this age, the gag reflex is far forward and babies are learning to manage food in their mouths.</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Avoid:</strong> whole grapes, raw apple chunks, hard vegetables, whole nuts, popcorn, hot dog rounds, chunks of meat, sticky foods (marshmallows, gummy candy)</li>
                <li><strong>Safe preparation:</strong> soft finger-sized strips, steamed until smushable, thin nut butter spread (not spoonfuls), well-cooked pasta</li>
                <li><strong>Rule:</strong> food should squish easily between your thumb and forefinger</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">12-24 months</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Cut grapes and cherry tomatoes into quarters lengthwise</li>
                <li>Cut hot dogs lengthwise into thin strips (never round slices)</li>
                <li>Spread nut butters thinly on toast (never give by the spoonful)</li>
                <li>Avoid popcorn, whole nuts, hard candy, and chewing gum</li>
                <li>Cook carrots until soft; shred raw carrots finely</li>
                <li>Remove seeds and pits from fruits</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">2-4 years</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Continue cutting grapes and similar round foods in quarters</li>
                <li>No popcorn until age 4</li>
                <li>No whole nuts until age 4 (use nut butters or finely chopped)</li>
                <li>No hard candy or lollipops</li>
                <li>Teach children to sit down and chew thoroughly</li>
                <li>No eating while running, laughing hard, or lying down</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Non-food choking hazards">
          <p>More than half of choking incidents involve non-food objects:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Coins</strong> — the #1 non-food choking hazard</li>
            <li><strong>Button batteries</strong> — choking hazard AND can cause fatal internal burns if swallowed</li>
            <li><strong>Small magnets</strong> — if multiple are swallowed, they attract through intestinal walls causing life-threatening injury</li>
            <li><strong>Balloons</strong> — especially latex balloons (the #1 cause of choking death from toys)</li>
            <li><strong>Small toy parts</strong> — check age ratings and use the toilet paper tube test</li>
            <li><strong>Pen caps and marker caps</strong></li>
            <li><strong>Buttons, beads, marbles</strong></li>
            <li><strong>Refrigerator magnets</strong></li>
            <li><strong>Older siblings&apos; toys</strong> — a leading source of small parts around babies</li>
          </ul>
          <p className="mt-2"><strong>The toilet paper tube test:</strong> If an object fits inside a standard toilet paper tube, it is a choking hazard for children under 3.</p>
        </Section>

        <Section title="Safe eating rules">
          <ul className="list-disc list-inside space-y-1">
            <li>Always sit upright in a highchair or at the table</li>
            <li>Never eat while walking, running, or playing</li>
            <li>Never eat in the car (harder to respond if choking occurs)</li>
            <li>Never force a child to eat — forcing can cause panic and aspiration</li>
            <li>Supervise all meals and snacks until at least age 4</li>
            <li>Encourage small bites and thorough chewing</li>
            <li>Keep mealtimes calm — laughing with a full mouth increases choking risk</li>
          </ul>
        </Section>

        <Section title="How to respond to choking">
          <p className="font-semibold text-foreground">Signs of choking (airway blocked):</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Cannot cry, cough, or make noise</li>
            <li>High-pitched or no sound when trying to breathe</li>
            <li>Turning blue (lips, face)</li>
            <li>Loss of consciousness</li>
          </ul>
          <p className="font-semibold text-foreground mt-3">What to do:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><strong>For infants under 1:</strong> 5 back blows (between shoulder blades) alternating with 5 chest thrusts</li>
            <li><strong>For children over 1:</strong> Abdominal thrusts (Heimlich maneuver)</li>
            <li>Call 911 if the child loses consciousness or you cannot clear the object</li>
            <li><strong>Never do a blind finger sweep</strong> — you may push the object deeper</li>
          </ul>
          <p className="mt-2">
            <Link href="/first-aid" className="text-primary hover:underline font-semibold">Complete infant CPR and choking response guide &rarr;</Link>
          </p>
        </Section>

        <Section title="Choking prevention checklist">
          <ul className="list-disc list-inside space-y-1">
            <li>Cut all round foods lengthwise (grapes, hot dogs, cherry tomatoes)</li>
            <li>No popcorn, whole nuts, or hard candy until age 4</li>
            <li>Supervise all meals; child sits upright in a chair</li>
            <li>Perform the toilet paper tube test on small objects</li>
            <li>Keep coins, batteries, magnets, and small objects out of reach</li>
            <li>Check age ratings on all toys</li>
            <li>Keep older siblings&apos; small toys away from baby</li>
            <li>No latex balloons around young children</li>
            <li>Infant CPR class completed by all caregivers</li>
            <li>Emergency numbers posted in kitchen</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Choking is preventable. Cut all round foods lengthwise, keep small objects out of reach, always supervise meals, and learn infant CPR. These simple steps prevent the vast majority of choking emergencies."
        supportiveMessage="Starting solids can feel scary because of choking fears. Remember that gagging is normal and actually protective — it means the body is working correctly. Take an infant CPR class for confidence, and you will feel much more prepared."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/safety" className="text-sm text-primary font-semibold hover:underline">&larr; Back to Safety</Link>
        <Link href="/safety/poison-prevention" className="text-sm text-primary font-semibold hover:underline">Poison Prevention &rarr;</Link>
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
