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
  title: 'Managing Toddler Transitions',
  description:
    'Guide to major toddler transitions: crib to bed, bottle to cup, pacifier weaning, starting daycare, and welcoming a new sibling. Evidence-based strategies.',
  alternates: { canonical: '/toddler/transitions' },
  openGraph: {
    title: 'Managing Toddler Transitions | Is My Baby Alright?',
    description: 'Crib to bed, bottle to cup, pacifier weaning, and other major toddler transitions.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Toddler Guide', url: '/toddler' },
  { name: 'Transitions' },
];

const faqItems = [
  { question: 'When should I move my toddler from crib to bed?', answer: 'The AAP recommends keeping children in a crib until they are climbing out or reach 35 inches tall. Most children transition between 18-36 months, but there is no rush if the crib is still working safely. Later transitions (closer to age 3) tend to go more smoothly.' },
  { question: 'How do I wean my toddler from the bottle?', answer: 'The AAP recommends weaning from bottles by 12-15 months to prevent dental problems and excess calorie intake. Introduce cups at 6-9 months, gradually replace bottles with cups starting with the easiest meal, and eliminate the bedtime bottle last.' },
  { question: 'When should a toddler stop using a pacifier?', answer: 'The AAP recommends weaning from the pacifier by age 2 to prevent dental issues. Gradual reduction (limiting to naps/bedtime first) tends to be less traumatic than cold turkey for most children.' },
  { question: 'Should I make multiple transitions at once or one at a time?', answer: 'One at a time whenever possible. Each transition requires cognitive and emotional energy. Space major changes by at least 2-4 weeks. Never start a new transition during illness, travel, or another stressor.' },
  { question: 'My toddler is starting daycare. How can I help?', answer: 'Visit the daycare together before starting, do short practice separations, create a goodbye ritual, bring a comfort item from home, and keep pickups predictable. Most toddlers adjust within 2-4 weeks.' },
];

export default function ToddlerTransitionsPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Managing Toddler Transitions',
          description: 'Guide to major toddler transitions: crib to bed, bottle to cup, pacifier weaning, and more.',
          path: '/toddler/transitions',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Safe Sleep Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'AAP Oral Health Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
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

      <Breadcrumbs items={[{ label: 'Toddler Guide', href: '/toddler' }, { label: 'Transitions' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Managing Toddler Transitions</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP']} />
      <p className="text-sm text-muted mb-6">
        Toddlerhood is full of big transitions — from cribs to beds, bottles to cups, diapers to potty, and home to daycare. Each change can feel monumental to a child who thrives on predictability. With preparation and patience, you can help your toddler navigate these milestones smoothly.
      </p>

      <KeyTakeaways
        takeaways={[
          'Tackle one major transition at a time \u2014 space changes by at least 2-4 weeks',
          'Preparation and gradual introduction reduce resistance',
          'Some regression during transitions is normal and temporary',
          'Let your child participate in the transition when possible (choosing new cup, picking bedding)',
          'There is no universal right age for most transitions \u2014 readiness matters more',
        ]}
      />

      <div className="space-y-6">
        <Section title="Crib to toddler bed">
          <h3 className="font-semibold mb-1">When to transition:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Child is climbing out of the crib (safety concern)</li>
            <li>Child is at or near 35 inches tall</li>
            <li>Child is 2.5-3 years old (later transitions typically go smoother)</li>
            <li>You need the crib for a new baby (transition well before the baby arrives)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">How to make it go smoothly:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Let your child help pick new bedding or a special pillow</li>
            <li>Use a toddler bed or place mattress on the floor initially (reduces fall risk)</li>
            <li>Use a bed rail for safety</li>
            <li>Keep the bedtime routine identical — only the bed changes</li>
            <li>Childproof the entire bedroom (they can now get up freely)</li>
            <li>Use a toddler clock (&ldquo;okay-to-wake&rdquo; clock) to set boundaries about getting up</li>
            <li>Expect some testing of the new freedom — calmly return them to bed without engagement</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Common challenges:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Getting out of bed repeatedly (respond with boring, brief returns)</li>
            <li>Difficulty falling asleep (the novelty wears off within 1-2 weeks)</li>
            <li>Early morning waking (okay-to-wake clock helps)</li>
          </ul>
        </Section>

        <Section title="Bottle to cup">
          <h3 className="font-semibold mb-1">When to transition:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>AAP recommends weaning from bottles by 12-15 months</li>
            <li>Prolonged bottle use increases risk of dental caries and iron deficiency</li>
            <li>Start introducing cups at 6-9 months alongside bottles</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Step-by-step approach:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Introduce an open cup or straw cup with water during meals (6-9 months)</li>
            <li>Replace the easiest bottle first (typically mid-day meal)</li>
            <li>Replace one bottle per week</li>
            <li>Eliminate the morning bottle next</li>
            <li>Save the bedtime bottle for last (highest emotional attachment)</li>
            <li>Replace bedtime bottle with a cup of milk during the bedtime routine, then brush teeth</li>
          </ol>
          <h3 className="font-semibold mt-3 mb-1">Tips:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Let your child pick a special &ldquo;big kid&rdquo; cup</li>
            <li>Offer milk in cups and only water in bottles (makes cups more appealing)</li>
            <li>Never put bottles in the crib or bed (dental risk)</li>
            <li>Do not dilute bottle milk — this can lead to inadequate nutrition</li>
            <li>Accept some temporary decrease in milk intake during the transition</li>
          </ul>
        </Section>

        <Section title="Pacifier weaning">
          <h3 className="font-semibold mb-1">When to wean:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>AAP recommends weaning by age 2 to prevent dental malocclusion</li>
            <li>The American Academy of Pediatric Dentistry recommends stopping by age 3 at the latest</li>
            <li>Earlier weaning (12-18 months) is often easier due to less emotional attachment</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Gradual approach (recommended for most):</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Restrict to nap and bedtime only (no daytime use)</li>
            <li>After 1-2 weeks, eliminate nap use</li>
            <li>Finally, eliminate at bedtime</li>
            <li>Offer a replacement comfort object (stuffed animal, blanket)</li>
          </ol>
          <h3 className="font-semibold mt-3 mb-1">Cold turkey approach (works for some):</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Choose a day and remove all pacifiers</li>
            <li>Some families use a narrative (&ldquo;pacifier fairy&rdquo; or giving to a new baby)</li>
            <li>Expect 2-3 difficult nights then rapid adjustment</li>
            <li>Do not go back and forth — once gone, stay gone</li>
          </ul>
        </Section>

        <Section title="Starting daycare or preschool">
          <h3 className="font-semibold mb-1">Before starting:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Visit the new space together — let your child explore while you are present</li>
            <li>Read books about going to school/daycare</li>
            <li>Practice short separations with other trusted caregivers</li>
            <li>Talk positively but honestly about what will happen</li>
            <li>Establish the new wake-up routine 1-2 weeks before start date</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">During the transition:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Create a brief, predictable goodbye ritual (kiss, hug, wave at window)</li>
            <li>Never sneak away — this erodes trust and increases anxiety</li>
            <li>Keep goodbyes short and confident (your anxiety is contagious)</li>
            <li>Bring a comfort item from home (family photo, lovey, parent&apos;s scarf)</li>
            <li>Pick up at the same time daily when possible</li>
            <li>Expect some regression (sleep, clinginess, tantrums) for 2-4 weeks</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">How long adjustment takes:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Most toddlers adjust within 2-4 weeks</li>
            <li>Crying at drop-off may continue even after adjustment (but usually stops within minutes)</li>
            <li>Ask caregivers how quickly your child calms after you leave</li>
            <li>Consult your pediatrician if distress is severe and unrelenting after 4-6 weeks</li>
          </ul>
        </Section>

        <Section title="Welcoming a new sibling">
          <ul className="list-disc list-inside space-y-1">
            <li>Tell your toddler about the baby in simple terms during the third trimester</li>
            <li>Read books about being a big sibling</li>
            <li>Do not make other major transitions (crib, potty) right before or after the baby arrives</li>
            <li>Give your toddler a &ldquo;job&rdquo; with the new baby (bringing diapers, singing to baby)</li>
            <li>Maintain one-on-one time with your toddler daily, even just 15 minutes</li>
            <li>Expect regression (baby talk, clinginess, potty accidents) — respond with empathy</li>
            <li>Avoid saying &ldquo;you are a big kid now&rdquo; as a reason to stop comforting behaviors</li>
            <li>Let your toddler have mixed feelings — it is okay to love the baby AND be angry about changes</li>
          </ul>
        </Section>

        <Section title="General principles for all transitions">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>One at a time:</strong> Never start two major transitions simultaneously</li>
            <li><strong>Prepare in advance:</strong> Talk about what is coming in simple, positive language</li>
            <li><strong>Involve your child:</strong> Let them participate in decisions (choosing new cup, new bedding)</li>
            <li><strong>Maintain other routines:</strong> Keep everything else as consistent as possible</li>
            <li><strong>Expect regression:</strong> Temporary backsliding is normal and not a failure</li>
            <li><strong>Do not go back and forth:</strong> Once you commit to a transition, follow through</li>
            <li><strong>Avoid bad timing:</strong> Do not start during illness, travel, or another stressful event</li>
            <li><strong>Celebrate progress:</strong> Acknowledge your child&apos;s effort and growth</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="Major transitions are a normal part of toddlerhood. The keys to success are tackling one change at a time, preparing your child in advance, following through once you start, and accepting temporary regression as part of the process. There is no universal right age for most transitions — your child's readiness matters more than the calendar." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/toddler/routine" className="text-sm text-primary font-semibold hover:underline">&larr; Daily Routines</Link>
        <Link href="/toddler" className="text-sm text-primary font-semibold hover:underline">Toddler Guide &rarr;</Link>
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
