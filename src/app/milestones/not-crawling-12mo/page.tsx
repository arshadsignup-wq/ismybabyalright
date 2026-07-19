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
  title: 'Baby Not Crawling at 12 Months',
  description:
    'Is it normal if your baby is not crawling at 12 months? Learn when to worry, whether crawling is required, and what to do. Based on CDC and AAP guidelines.',
  alternates: {
    canonical: '/milestones/not-crawling-12mo',
  },
  openGraph: {
    title: 'Baby Not Crawling at 12 Months | Is My Baby Alright?',
    description:
      'Is it normal if your baby is not crawling at 12 months? Learn whether crawling is required and when to worry.',
  },
};

const faqItems = [
  {
    question: 'Is crawling a required milestone?',
    answer:
      'No. The AAP and CDC do not consider crawling a required milestone. Some babies skip crawling entirely and go directly to pulling up and walking. What matters is that your baby has some form of independent mobility by 12 months.',
  },
  {
    question: 'When do most babies start crawling?',
    answer:
      'Most babies begin crawling between 7-10 months. However, the form varies — some army crawl, some scoot on their bottom, some bear walk, and some skip directly to cruising and walking.',
  },
  {
    question: 'Should I worry if my 12-month-old is not crawling but is pulling up?',
    answer:
      'If your baby has another form of mobility (scooting, cruising, pulling up), the absence of traditional crawling is not concerning. The CDC lists lack of any form of mobility by 12 months as a red flag, not specifically crawling.',
  },
  {
    question: 'Does not crawling affect brain development?',
    answer:
      'There is no scientific evidence that skipping crawling causes learning disabilities or affects brain development. This is a persistent myth. What matters is that your child is mobile and exploring their environment.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones', url: '/milestones/missed' },
  { name: 'Not Crawling at 12 Months' },
];

export default function NotCrawling12moPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Baby Not Crawling at 12 Months',
              description:
                'Is it normal if your baby is not crawling at 12 months? Learn when to worry, whether crawling is required, and what to do.',
              path: '/milestones/not-crawling-12mo',
              lastModified: '2026-07-18',
              medicalGuidelines: [
                { name: 'CDC Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
                { name: 'AAP Motor Development Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
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
          { label: 'Not Crawling at 12 Months' },
        ]}
      />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Baby Not Crawling at 12 Months
      </h1>
      <p className="text-sm text-muted mb-6">
        Is crawling required? When to worry, and what matters more than crawling itself.
      </p>

      <KeyTakeaways
        takeaways={[
          'Crawling is NOT a required milestone — some babies skip it entirely',
          'What matters is that your baby has some form of independent mobility by 12 months',
          'Alternative forms of movement (scooting, army crawling, bear walking) count as mobility',
          'A baby with NO form of mobility by 12 months should be evaluated',
          'The myth that skipping crawling causes learning problems is not supported by research',
          'If your baby is pulling up and cruising, absent traditional crawling is not a concern',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP']} reviewDate="July 2026" />
      </div>

      <LastReviewed date="2026-07-18" />

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-6 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What is normal?</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Crawling is one of the most variable milestones in child development. The AAP and
            CDC recognize that not all babies crawl in the traditional hands-and-knees pattern:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>7-10 months:</strong> Most babies begin some form of crawling</li>
            <li><strong>Army crawling:</strong> Dragging themselves on their belly</li>
            <li><strong>Bottom scooting:</strong> Moving forward while sitting</li>
            <li><strong>Bear walking:</strong> On hands and feet with straight legs</li>
            <li><strong>Rolling:</strong> Some babies roll to get where they want to go</li>
            <li><strong>Skipping crawling:</strong> Some go directly to pulling up and cruising</li>
          </ul>
          <p>
            The CDC&apos;s 2022 milestone revision removed traditional crawling as a required
            checkpoint. What matters is that your baby has some form of independent mobility.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to worry</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Talk to your pediatrician if your 12-month-old:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Has no form of independent mobility (not crawling, scooting, creeping, or pulling up)</li>
            <li>Cannot get into a sitting position on their own</li>
            <li>Does not bear weight on legs when held in a standing position</li>
            <li>Drags one side of the body while crawling (asymmetric movement)</li>
            <li>Seems unable to coordinate arms and legs for movement</li>
            <li>Has lost mobility skills they previously had</li>
          </ul>
          <p>
            The concern is not the absence of traditional crawling specifically — it is the absence
            of any independent mobility.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Possible causes of no mobility by 12 months</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Low muscle tone (hypotonia):</strong> Makes it harder to support body weight against gravity</li>
            <li><strong>Limited floor time:</strong> Babies need space and opportunity to practice movement</li>
            <li><strong>Excessive container use:</strong> Walkers, bouncers, and seats limit natural movement development</li>
            <li><strong>Prematurity:</strong> Use adjusted age for milestone assessment</li>
            <li><strong>Neurological conditions:</strong> Including cerebral palsy, typically with other accompanying signs</li>
            <li><strong>Joint laxity:</strong> Very flexible joints can make weight-bearing positions challenging</li>
            <li><strong>Weight:</strong> Very heavy babies may take longer to become mobile</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What you can do</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li>Maximize supervised floor time — at least 60 minutes total per day</li>
            <li>Place desirable toys just out of reach to motivate movement</li>
            <li>Eliminate or reduce time in walkers (AAP recommends against baby walkers entirely)</li>
            <li>Try placing your baby on hands and knees and gently rocking them to practice the position</li>
            <li>Create a safe space for your baby to explore and move freely</li>
            <li>Get down on the floor with your baby — your presence and encouragement matter</li>
            <li>Try different surfaces (some babies find hardwood floors easier than carpet for scooting)</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to get evaluated</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            If your baby has no form of independent mobility by 12 months (not crawling, scooting,
            pulling up, or cruising), schedule an evaluation with your pediatrician. They may:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Assess muscle tone, strength, and coordination</li>
            <li>Evaluate whether the child can weight-bear on arms and legs</li>
            <li>Check for asymmetry in movement</li>
            <li>Review overall developmental progress</li>
            <li>Refer to physical therapy or early intervention</li>
          </ul>
          <p>
            If your baby IS pulling up, cruising, or using another form of mobility, the absence
            of traditional hands-and-knees crawling alone is not a reason for concern.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-primary/30 bg-primary-light p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Reassurance</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Many parents worry unnecessarily about crawling because of the outdated belief that
            skipping crawling causes learning problems. This myth is not supported by research.
            Many typically developing children skip traditional crawling entirely.
          </p>
          <p>
            What truly matters is that your child is mobile, exploring their environment, and
            continuing to make progress in their motor development. If they are pulling up,
            cruising, or finding any way to get around, they are on track.
          </p>
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="Crawling is not a required milestone — many healthy babies skip it entirely. What matters is that your baby has some form of independent mobility by 12 months. If your baby cannot move independently in any way (no crawling, scooting, pulling up, or cruising) by 12 months, contact your pediatrician for an evaluation."
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
        <Link href="/milestones/early-vs-late-walkers" className="text-sm text-primary font-semibold hover:underline">
          Early vs Late Walkers
        </Link>
      </div>
    </article>
  );
}
