import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import ComparisonTable from '@/components/shared/ComparisonTable';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema, getHowToSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Potty Training Guide',
  description:
    'Complete potty training guide: readiness signs, step-by-step methods, handling regression, nighttime training, and common challenges. Evidence-based from AAP.',
  alternates: { canonical: '/potty-training' },
  openGraph: {
    title: 'Potty Training Guide | Is My Baby Alright?',
    description: 'Readiness signs, step-by-step methods, handling regression, and nighttime training.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Potty Training Guide' },
];

const faqItems = [
  { question: 'What age should you start potty training?', answer: 'Most children are ready between 18-36 months. Boys may be slightly later than girls on average.' },
  { question: 'How long does potty training take?', answer: '3-6 months for daytime training. Nighttime dryness is a separate developmental milestone.' },
  { question: 'Is potty training regression normal?', answer: 'Yes. Common during life changes such as a new sibling, move, or starting daycare. Usually resolves within a few weeks.' },
  { question: 'Should I use rewards for potty training?', answer: 'The AAP suggests praise over material rewards. Enthusiastic verbal praise for successes works well without creating expectation of prizes.' },
  { question: 'When should I worry about late potty training?', answer: 'Talk to your pediatrician if your child shows no interest in potty training by age 3 or is still having frequent accidents after age 4.' },
];

const howToSteps = [
  { name: 'Let your child pick a potty', text: 'Let your child pick out a potty chair or toilet seat adapter so they feel ownership over the process.' },
  { name: 'Place the potty conveniently', text: 'Place the potty in a convenient location — bathroom or wherever your child spends the most time.' },
  { name: 'Establish regular sitting times', text: 'Have your child sit on the potty at regular intervals — after waking, after meals, before bath.' },
  { name: 'Praise successes', text: 'Praise any success enthusiastically but keep it low-pressure. Avoid shaming accidents.' },
  { name: 'Dress for easy access', text: 'Dress your child in easy-to-remove clothing to reduce frustration and accidents.' },
  { name: 'Read potty training books together', text: 'Read books about potty training together to normalize the process and build excitement.' },
  { name: 'Be patient and consistent', text: 'Be patient — most children need 3 to 6 months to be fully trained during the day. Consistency is key.' },
];

export default function PottyTrainingPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Potty Training Guide',
          description: 'Complete potty training guide: readiness signs, step-by-step methods, handling regression, nighttime training.',
          path: '/potty-training',
          medicalGuidelines: [
            { name: 'AAP Toilet Training Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
          ],
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getHowToSchema(
              'How to Start Potty Training',
              'A step-by-step guide to starting potty training using an AAP-recommended child-led approach.',
              howToSteps
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />

      <Breadcrumbs items={[{ label: 'Potty Training Guide' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Potty Training Guide</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP']} />
      <p className="text-sm text-muted mb-6">
        Most children are ready for potty training between 18 and 36 months. There is no rush — starting before a child is ready often takes longer. This guide covers readiness signs, methods, and common challenges.
      </p>

      <KeyTakeaways
        takeaways={[
          'Most children are ready between 18-36 months \u2014 there is no rush',
          'Readiness signs include staying dry for 2+ hours and showing interest in the toilet',
          'The AAP recommends a child-led approach with low pressure',
          'Daytime training typically takes 3-6 months; nighttime dryness is a separate milestone',
          'Regression is common and temporary \u2014 respond with patience, not punishment',
        ]}
      />

      <div className="space-y-6">
        <Section title="How do I know if my child is ready for potty training?">
          <p>Your child may be ready for potty training when they:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Can walk to and sit on a toilet or potty chair</li>
            <li>Can pull pants up and down</li>
            <li>Stay dry for 2 or more hours at a time</li>
            <li>Show interest in the toilet or wearing underwear</li>
            <li>Tell you (verbally or with gestures) when they have a wet or dirty diaper</li>
            <li>Follow simple instructions</li>
            <li>Show discomfort with dirty diapers</li>
          </ul>
          <p className="mt-2">
            Most children show these signs between 18 and 30 months, but the range is wide. Boys may be ready slightly later than girls on average.
          </p>
        </Section>

        <Section title="How do I start potty training?">
          <ol className="list-decimal list-inside space-y-1">
            <li>Let your child pick out a potty chair or toilet seat adapter</li>
            <li>Place the potty in a convenient location — bathroom or wherever your child spends the most time</li>
            <li>Have your child sit on the potty at regular intervals — after waking, after meals, before bath</li>
            <li>Praise any success enthusiastically but keep it low-pressure</li>
            <li>Dress your child in easy-to-remove clothing</li>
            <li>Read books about potty training together</li>
            <li>Be patient — most children need 3 to 6 months to be fully trained during the day</li>
          </ol>
        </Section>

        <Section title="What are the best potty training methods?">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Child-led approach (AAP recommended):</strong> Follow the child&apos;s cues and readiness. Low pressure, may take longer but tends to have fewer setbacks.</li>
            <li><strong>3-day method:</strong> Intensive approach where the child goes diaper-free for 3 days with frequent potty trips. Works well for children who are clearly ready.</li>
            <li><strong>Scheduled sitting:</strong> Place child on the potty at regular intervals throughout the day. Builds habit gradually.</li>
          </ul>
          <p className="mt-2">No single method works for every child. Choose an approach that fits your child&apos;s temperament and your family&apos;s routine.</p>

          <ComparisonTable
            caption="Potty training methods compared"
            headers={['Method', 'Best for', 'Timeline', 'Pros', 'Cons']}
            rows={[
              ['Child-led (AAP)', 'Most families', '3-6 months', 'Fewer setbacks, low stress', 'Takes longer'],
              ['3-day intensive', 'Clearly ready children', '3 days + follow-up', 'Fast results', 'More accidents initially'],
              ['Scheduled sitting', 'Routine-oriented children', '2-4 months', 'Builds habit gradually', 'Requires consistency'],
            ]}
          />
        </Section>

        <Section title="Why is my potty-trained child having accidents again?">
          <p>Regression (going back to having accidents after being trained) is common and usually temporary. Common triggers:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>A new sibling, move, or other big life change</li>
            <li>Illness or stress</li>
            <li>Starting daycare or preschool</li>
            <li>Being too busy playing to stop for the bathroom</li>
          </ul>
          <p className="mt-2">
            Respond with patience, not punishment. Go back to basics — offer more frequent reminders and praise success. Regression typically resolves within a few weeks.
          </p>
        </Section>

        <Section title="When will my child be dry at night?">
          <ul className="list-disc list-inside space-y-1">
            <li>Nighttime dryness is a separate developmental milestone from daytime training</li>
            <li>Many children are not consistently dry at night until age 5 or later</li>
            <li>Nighttime wetting (enuresis) under age 6 is not considered a problem</li>
            <li>Use waterproof mattress covers and pull-ups at night without shame</li>
            <li>Limit fluids 1-2 hours before bedtime</li>
            <li>Have your child use the toilet right before bed</li>
            <li>Talk to your pediatrician if your child is still wetting the bed regularly after age 6</li>
          </ul>
        </Section>

        <Section title="What should I avoid during potty training?">
          <ul className="list-disc list-inside space-y-1">
            <li>Never punish accidents — they are a normal part of learning</li>
            <li>Avoid shaming language or comparing to other children</li>
            <li>Do not force a child to sit on the potty against their will</li>
            <li>Avoid starting during a stressful time (new sibling, move, illness)</li>
            <li>Do not go back and forth between diapers and underwear during the day (if using the 3-day method)</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <section className="mt-8">
        <h2 className="text-base font-bold text-foreground mb-3">Explore potty training topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/potty-training/readiness" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Signs of Readiness</p>
            <p className="text-xs text-muted mt-1">How to know when your child is truly ready</p>
          </Link>
          <Link href="/potty-training/methods" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Training Methods</p>
            <p className="text-xs text-muted mt-1">3-day, gradual, and child-led approaches compared</p>
          </Link>
          <Link href="/potty-training/regression" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Potty Training Regression</p>
            <p className="text-xs text-muted mt-1">Causes, solutions, and when to seek help</p>
          </Link>
          <Link href="/potty-training/nighttime" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Nighttime Training</p>
            <p className="text-xs text-muted mt-1">When to expect nighttime dryness and how to help</p>
          </Link>
          <Link href="/potty-training/poop-withholding" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Poop Withholding</p>
            <p className="text-xs text-muted mt-1">Why children withhold and how to address it</p>
          </Link>
          <Link href="/potty-training/boys-vs-girls" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Boys vs. Girls</p>
            <p className="text-xs text-muted mt-1">Differences and specific tips for each</p>
          </Link>
        </div>
      </section>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/quiz/potty-training" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Potty Training Readiness Quiz</Link>
        <Link href="/toddler" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Toddler Guide</Link>
      </div>

      <BottomLine summary="Most children are ready for potty training between 18 and 36 months. There is no single right approach — the best method is the one that works for your child and your family. Setbacks are normal and not a sign of failure." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border">
        <Link href="/toddler" className="text-sm text-primary font-semibold hover:underline">&larr; Toddler Guide</Link>
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
