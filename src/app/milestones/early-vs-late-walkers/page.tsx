import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import BottomLine from '@/components/shared/BottomLine';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import ComparisonTable from '@/components/shared/ComparisonTable';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Early vs Late Walkers: What Matters',
  description:
    'Does it matter when your baby starts walking? Compare early walkers (before 12 months) and late walkers (after 15 months). Research on long-term outcomes. Based on pediatric research.',
  alternates: {
    canonical: '/milestones/early-vs-late-walkers',
  },
  openGraph: {
    title: 'Early vs Late Walkers: What Matters | Is My Baby Alright?',
    description:
      'Does it matter when your baby starts walking? Compare early and late walkers and what research shows about long-term outcomes.',
  },
};

const faqItems = [
  {
    question: 'Do early walkers become better athletes?',
    answer:
      'No. Research does not show any connection between the age of first walking and later athletic ability. Children who walk early and those who walk late show no differences in motor skills, coordination, or athletic performance by school age.',
  },
  {
    question: 'Do late walkers have lower intelligence?',
    answer:
      'No. Multiple large studies have found no relationship between the age of independent walking (within the normal range of 9-18 months) and later cognitive ability or academic performance. A child who walks at 16 months is not less intelligent than one who walks at 10 months.',
  },
  {
    question: 'Is walking at 9 months too early?',
    answer:
      'Walking at 9 months is at the early end of normal but is not a concern. Some babies are simply ready to walk early. Very early walking (before 9 months) is unusual and may occasionally be associated with neurological differences, but this is rare.',
  },
  {
    question: 'What is the normal range for walking?',
    answer:
      'The normal range for independent walking is 9-18 months. Most babies walk between 11-15 months, with the average being about 12 months. The CDC considers not walking by 18 months a concern requiring evaluation.',
  },
  {
    question: 'Should I use a baby walker to help my child walk sooner?',
    answer:
      'No. The AAP recommends against baby walkers (the type the child sits in). They do not help children walk sooner and are associated with significant injury risk. Push toys that the child walks behind while standing are a safe alternative.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones', url: '/milestones/missed' },
  { name: 'Early vs Late Walkers' },
];

export default function EarlyVsLateWalkersPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Early vs Late Walkers: What Research Shows',
              description:
                'Does it matter when your baby starts walking? Compare early walkers and late walkers and learn what research shows about long-term outcomes.',
              path: '/milestones/early-vs-late-walkers',
              lastModified: '2026-07-18',
              medicalGuidelines: [
                { name: 'CDC Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
                { name: 'AAP Bright Futures Guidelines', url: 'https://www.aap.org/en/practice-management/bright-futures/' },
                { name: 'WHO Motor Development Study', url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones' },
              ],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Milestones', href: '/milestones' },
          { label: 'Missed Milestones', href: '/milestones/missed' },
          { label: 'Early vs Late Walkers' },
        ]}
      />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Early vs Late Walkers: Does It Matter?
      </h1>
      <p className="text-sm text-muted mb-6">
        What research actually shows about early and late walking and long-term outcomes.
      </p>

      <KeyTakeaways
        takeaways={[
          'The normal range for first steps is 9-18 months — this is a huge range',
          'Research shows NO link between walking age and later intelligence or athletic ability',
          'Early walkers (before 12 months) are not smarter or more coordinated long-term',
          'Late walkers (13-18 months) who are otherwise developing normally rarely have problems',
          'What matters is progression (pulling up, cruising, stepping), not the exact age',
          'Not walking by 18 months is the only age that requires formal evaluation',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP', 'WHO']} reviewDate="July 2026" />
      </div>

      <LastReviewed date="2026-07-18" />

      <ComparisonTable
        caption="Early vs late walkers comparison"
        headers={['Factor', 'Early walkers (9-11 mo)', 'Late walkers (14-18 mo)']}
        rows={[
          ['Later motor skills', 'No advantage', 'No disadvantage'],
          ['Intelligence / IQ', 'No correlation', 'No correlation'],
          ['Athletic ability', 'No correlation', 'No correlation'],
          ['Confidence', 'No long-term difference', 'No long-term difference'],
          ['Injury risk (infant)', 'Higher (more mobile earlier)', 'Lower (less mobile)'],
          ['Typical cause', 'Temperament, opportunity', 'Temperament, caution, family pattern'],
          ['Need for evaluation', 'No (unless very early < 9 mo)', 'Only if not walking by 18 mo'],
        ]}
        sourceNote="Based on longitudinal pediatric development research"
      />

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-6 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">The normal range is wide</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            The WHO Multicentre Growth Reference Study — which tracked thousands of children across
            multiple countries — found that independent walking develops between 8-18 months, with
            significant variation across cultures, environments, and individual children.
          </p>
          <p>
            Key findings from large-scale research:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>The average age of first independent steps is approximately 12 months</li>
            <li>25% of babies walk before 11 months</li>
            <li>25% of babies walk after 13.5 months</li>
            <li>About 3-5% of typically developing babies walk after 15 months</li>
            <li>The range extends to 18 months for normal development</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What influences walking age?</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Many factors influence when a baby starts walking, most of which are unrelated to ability:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Temperament:</strong> Bold, adventurous babies often walk earlier; cautious babies later</li>
            <li><strong>Body proportions:</strong> Leaner babies with proportionally longer legs may walk earlier; heavier babies may walk slightly later</li>
            <li><strong>Crawling efficiency:</strong> Babies who are very fast crawlers may be less motivated to walk</li>
            <li><strong>Family pattern:</strong> Walking age often runs in families</li>
            <li><strong>Environment:</strong> More open space and opportunity to practice may support earlier walking</li>
            <li><strong>Culture:</strong> Different cultures have different practices around infant mobility that influence timing</li>
            <li><strong>Prematurity:</strong> Premature babies walk later by chronological age but typically on time by adjusted age</li>
            <li><strong>Muscle tone:</strong> Mild variations in tone can shift walking age in either direction</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What research shows about long-term outcomes</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Multiple longitudinal studies have examined whether the age of walking predicts later
            outcomes. The consistent finding is:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Motor skills:</strong> By age 3-4, there is no detectable difference in motor skills between early and late walkers</li>
            <li><strong>Cognitive ability:</strong> Studies following children to school age find no correlation between walking age and IQ or academic performance</li>
            <li><strong>Language:</strong> Walking age does not predict language development</li>
            <li><strong>Social skills:</strong> No connection between walking age and social development</li>
            <li><strong>Athletic ability:</strong> No relationship between age of first walking and later sports performance</li>
          </ul>
          <p>
            A 2013 Swiss study published in <em>Acta Paediatrica</em> followed over 200 children from
            infancy to age 18 and found no relationship between the age of walking and later
            intelligence or motor competence.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Early walkers: what to know</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            If your baby starts walking before 12 months:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>This is completely normal and not a sign of giftedness (or any concern)</li>
            <li>They may have a slightly higher injury risk because they are mobile before they have good judgment</li>
            <li>Baby-proofing becomes urgent earlier</li>
            <li>They may skip or abbreviate some pre-walking stages (like cruising)</li>
            <li>Their gait will be wide-based and unsteady at first — this is normal and improves over weeks</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Late walkers: what to know</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            If your baby starts walking after 13 months (but before 18 months):
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>This is within the normal range and usually not a concern</li>
            <li>Many late walkers are cautious by temperament — they wait until they are very stable</li>
            <li>Late walkers often have fewer falls when they do start because they waited until they were ready</li>
            <li>If progressing (pulling up, cruising, standing alone), they are on track</li>
            <li>Only concerning if accompanied by delays in other developmental areas</li>
          </ul>
          <p className="font-semibold text-foreground mt-2">
            When late walking IS a concern:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Not walking by 18 months — requires evaluation</li>
            <li>Not pulling up or cruising by 12-13 months</li>
            <li>Very stiff or very floppy muscle tone</li>
            <li>Significant asymmetry in movement</li>
            <li>Delays in other developmental areas (language, social, cognitive)</li>
            <li>Loss of previously acquired motor skills</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What actually matters more than age</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Instead of focusing on the exact age of first steps, focus on:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Progression:</strong> Is your baby moving through the stages (sitting, pulling up, cruising, standing, stepping)?</li>
            <li><strong>Symmetry:</strong> Are both sides of the body working equally?</li>
            <li><strong>Overall development:</strong> Is your child developing normally in other areas (language, social, cognitive)?</li>
            <li><strong>Quality of movement:</strong> Does movement look smooth and coordinated (for their age)?</li>
            <li><strong>Muscle tone:</strong> Does your baby feel neither too stiff nor too floppy?</li>
          </ul>
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="The age your baby starts walking (within the 9-18 month range) does not predict intelligence, athletic ability, or long-term motor skills. What matters is that your child is progressing through the pre-walking stages, shows symmetric movement, and is developing normally in other areas. Only not walking by 18 months requires formal evaluation."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4">
        <Link href="/milestones/missed" className="text-sm text-primary font-semibold hover:underline">
          Missed Milestones Hub
        </Link>
        <Link href="/milestones/not-walking-15mo" className="text-sm text-primary font-semibold hover:underline">
          Not Walking at 15 Months
        </Link>
        <Link href="/milestones/not-walking-18mo" className="text-sm text-primary font-semibold hover:underline">
          Not Walking at 18 Months
        </Link>
        <Link href="/milestones" className="text-sm text-primary font-semibold hover:underline">
          Milestones by Age
        </Link>
      </div>
    </article>
  );
}
