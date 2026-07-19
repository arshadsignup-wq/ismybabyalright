import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import BottomLine from '@/components/shared/BottomLine';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'What if My Baby Missed a Milestone?',
  description:
    'Learn what it means if your baby missed a developmental milestone, when to worry, and what to do next. Evidence-based guidance from CDC and AAP guidelines.',
  alternates: {
    canonical: '/milestones/missed',
  },
  openGraph: {
    title: 'What if My Baby Missed a Milestone? | Is My Baby Alright?',
    description:
      'Learn what it means if your baby missed a developmental milestone, when to worry, and what to do next.',
  },
};

const faqItems = [
  {
    question: 'Is it normal for babies to miss milestones?',
    answer:
      'Yes. Milestone ranges are averages, and healthy children develop at different rates. Missing one milestone does not mean there is a problem. However, missing multiple milestones or showing no progress over several months warrants a conversation with your pediatrician.',
  },
  {
    question: 'What should I do if my baby missed a milestone?',
    answer:
      'First, note the specific milestone and how far behind your child is. Many children catch up on their own. If the delay is more than 2-3 months or involves multiple areas, contact your pediatrician or your state\'s early intervention program for a free evaluation.',
  },
  {
    question: 'Does missing a milestone mean my child has autism?',
    answer:
      'No. Missing a milestone alone does not indicate autism. Autism involves a pattern of differences across social communication and behavior. Many typically developing children are late in reaching one or more milestones.',
  },
  {
    question: 'Can early intervention help if my child is behind?',
    answer:
      'Yes. Research consistently shows that early intervention (before age 3) produces the best outcomes for children with developmental delays. Services are free in every US state through the IDEA Part C program.',
  },
  {
    question: 'Do premature babies reach milestones later?',
    answer:
      'Yes. Premature babies should be evaluated using their adjusted age (chronological age minus weeks of prematurity) until age 2. A baby born 2 months early is expected to reach milestones about 2 months later than full-term peers.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones' },
];

const missedMilestonePages = [
  { href: '/milestones/not-rolling-6mo', label: 'Not Rolling at 6 Months', age: '6 mo' },
  { href: '/milestones/not-babbling-9mo', label: 'Not Babbling at 9 Months', age: '9 mo' },
  { href: '/milestones/not-sitting-9mo', label: 'Not Sitting at 9 Months', age: '9 mo' },
  { href: '/milestones/not-crawling-12mo', label: 'Not Crawling at 12 Months', age: '12 mo' },
  { href: '/milestones/no-words-12mo', label: 'No Words at 12 Months', age: '12 mo' },
  { href: '/milestones/not-pointing-12mo', label: 'Not Pointing at 12 Months', age: '12 mo' },
  { href: '/milestones/not-walking-15mo', label: 'Not Walking at 15 Months', age: '15 mo' },
  { href: '/milestones/not-walking-18mo', label: 'Not Walking at 18 Months', age: '18 mo' },
  { href: '/milestones/no-words-18mo', label: 'No Words at 18 Months', age: '18 mo' },
  { href: '/milestones/not-responding-to-name', label: 'Not Responding to Name', age: '9-12 mo' },
  { href: '/milestones/no-two-word-phrases-2yr', label: 'No Two-Word Phrases at 2 Years', age: '24 mo' },
  { href: '/milestones/early-vs-late-walkers', label: 'Early vs Late Walkers', age: 'Comparison' },
];

export default function MissedMilestonesPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'What if My Baby Missed a Milestone?',
              description:
                'Learn what it means if your baby missed a developmental milestone, when to worry, and what to do next.',
              path: '/milestones/missed',
              lastModified: '2026-07-18',
              medicalGuidelines: [
                { name: 'CDC Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
                { name: 'AAP Developmental Surveillance', url: 'https://publications.aap.org/pediatrics/article/145/1/e20193449/36971' },
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

      <Breadcrumbs items={[{ label: 'Milestones', href: '/milestones' }, { label: 'Missed Milestones' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        What if My Baby Missed a Milestone?
      </h1>
      <p className="text-sm text-muted mb-6">
        Evidence-based guidance on what it means, when to worry, and what to do next.
      </p>

      <KeyTakeaways
        takeaways={[
          'Milestone ranges are averages — healthy children develop at different rates',
          'Missing one milestone is usually not a concern; missing multiple may warrant evaluation',
          'Premature babies should be assessed using adjusted age until age 2',
          'Early intervention (before age 3) produces the best outcomes for developmental delays',
          'You can contact your state\'s early intervention program directly — no referral needed',
          'Loss of previously acquired skills at any age requires immediate evaluation',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP']} reviewDate="July 2026" />
      </div>

      <LastReviewed date="2026-07-18" />

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-6 mb-8">
        <h2 className="text-base font-bold text-foreground mb-2">
          Understanding milestone ranges
        </h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Developmental milestones represent skills that most children achieve by a certain age.
            The CDC updated its milestone checklist in 2022 to reflect skills that 75% of children
            reach by each age — meaning 25% of typically developing children have not yet reached
            that milestone at the listed age.
          </p>
          <p>
            A &ldquo;missed&rdquo; milestone does not automatically mean something is wrong. However,
            it is a signal to pay attention and, in some cases, seek evaluation. The key factors are:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>How far behind the expected range the child is</li>
            <li>Whether delays exist in multiple developmental areas</li>
            <li>Whether the child is making progress (even if slowly)</li>
            <li>Whether the child has lost skills they previously had</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-8">
        <h2 className="text-base font-bold text-foreground mb-2">
          When to talk to your pediatrician
        </h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Contact your pediatrician if your child:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Is more than 2-3 months behind on a motor milestone</li>
            <li>Shows delays in two or more developmental areas (motor, language, social, cognitive)</li>
            <li>Has lost skills they previously had (regression)</li>
            <li>Shows no progress over a 2-3 month period</li>
            <li>Has risk factors such as prematurity, low birth weight, or family history of developmental conditions</li>
          </ul>
          <p className="mt-2">
            You do not need to wait for the next well-child visit. Call your pediatrician to discuss
            your observations, or contact your state&apos;s early intervention program directly.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-8">
        <h2 className="text-base font-bold text-foreground mb-2">
          Factors that affect milestone timing
        </h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Several factors can influence when a child reaches milestones:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Prematurity:</strong> Use adjusted age until age 2</li>
            <li><strong>Temperament:</strong> Some children are cautious and take longer to attempt new skills</li>
            <li><strong>Opportunity:</strong> Children need practice time (e.g., tummy time for rolling)</li>
            <li><strong>Birth order:</strong> Later-born children sometimes reach milestones at slightly different rates</li>
            <li><strong>Individual variation:</strong> Some children focus on one area (e.g., language) before another (e.g., motor)</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-8">
        <h2 className="text-base font-bold text-foreground mb-2">
          Early intervention: what it is and how to access it
        </h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Early intervention is a system of services for infants and toddlers (birth to 3) with
            developmental delays or disabilities. Under the Individuals with Disabilities Education
            Act (IDEA) Part C, every US state provides these services free of charge.
          </p>
          <p>Services may include:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Physical therapy (for motor delays)</li>
            <li>Speech-language therapy (for communication delays)</li>
            <li>Occupational therapy (for feeding or fine motor difficulties)</li>
            <li>Developmental therapy (for cognitive or play skills)</li>
            <li>Family training and counseling</li>
          </ul>
          <p>
            You can self-refer — no doctor&apos;s referral is required. Contact your state&apos;s
            early intervention program or ask your pediatrician for a referral.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-base font-bold text-foreground mb-4">
          Guides by specific milestone concern
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {missedMilestonePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary hover:shadow-md transition-all no-underline group"
            >
              <span className="text-xs text-muted">{page.age}</span>
              <span className="block text-sm font-semibold text-foreground group-hover:text-primary mt-1">
                {page.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="Missing a milestone does not mean something is wrong — but it does mean you should pay attention. If your child is more than 2-3 months behind, shows delays in multiple areas, or has lost previously acquired skills, contact your pediatrician or your state's early intervention program for a free evaluation. Early intervention produces the best outcomes when started before age 3."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4">
        <Link href="/milestones" className="text-sm text-primary font-semibold hover:underline">
          Milestones by Age
        </Link>
        <Link href="/development/red-flags" className="text-sm text-primary font-semibold hover:underline">
          Developmental Red Flags
        </Link>
        <Link href="/resources/early-intervention" className="text-sm text-primary font-semibold hover:underline">
          Early Intervention Guide
        </Link>
      </div>
    </article>
  );
}
