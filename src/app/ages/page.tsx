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
  title: 'Baby Age Guides',
  description:
    'Complete age-by-age baby development guides from newborn to 3 years. Milestones, feeding, sleep schedules, and safety tips based on AAP and CDC guidelines.',
  alternates: { canonical: '/ages' },
  openGraph: {
    title: 'Baby Age Guides | Is My Baby Alright?',
    description: 'Evidence-based developmental guides for every age from birth to 3 years.',
  },
};

const ageGroups = [
  {
    slug: '0-1mo',
    title: '0-1 Month',
    subtitle: 'Newborn Period',
    description: 'Reflexes, feeding patterns, sleep cycles, and adjusting to life outside the womb.',
  },
  {
    slug: '1-3mo',
    title: '1-3 Months',
    subtitle: 'Early Infancy',
    description: 'Social smiling, head control, cooing, and establishing feeding and sleep routines.',
  },
  {
    slug: '3-6mo',
    title: '3-6 Months',
    subtitle: 'Active Discovery',
    description: 'Rolling over, reaching for objects, laughing, and introduction to solid foods.',
  },
  {
    slug: '6-9mo',
    title: '6-9 Months',
    subtitle: 'Getting Mobile',
    description: 'Sitting independently, crawling, babbling, and solid food exploration.',
  },
  {
    slug: '9-12mo',
    title: '9-12 Months',
    subtitle: 'Approaching Toddlerhood',
    description: 'Pulling to stand, first words, pincer grasp, and growing independence.',
  },
  {
    slug: '12-18mo',
    title: '12-18 Months',
    subtitle: 'Early Toddler',
    description: 'Walking, vocabulary growth, self-feeding, and exploring boundaries.',
  },
  {
    slug: '18-24mo',
    title: '18-24 Months',
    subtitle: 'Active Toddler',
    description: 'Running, two-word phrases, imaginative play, and asserting independence.',
  },
  {
    slug: '2-3yr',
    title: '2-3 Years',
    subtitle: 'Preschool Readiness',
    description: 'Sentences, potty training, social play, and preparing for preschool.',
  },
];

const faqItems = [
  {
    question: 'How do I know if my baby is meeting milestones on time?',
    answer: 'The CDC publishes milestone checklists for each age. Most milestones have a range of normal. If your baby has not reached a milestone by the upper end of the expected range, talk to your pediatrician. Early intervention services are free and available in every state.',
  },
  {
    question: 'Should I worry if my baby skips a milestone like crawling?',
    answer: 'Some babies skip crawling and go straight to walking. This is generally considered a normal variation. The AAP recommends focusing on whether your baby is progressing overall rather than checking off every single milestone in order.',
  },
  {
    question: 'When should I bring up developmental concerns with my pediatrician?',
    answer: 'Bring up concerns at any well-child visit. Do not wait for the "right" age. The AAP recommends formal developmental screening at 9, 18, and 30 months, but you can request screening at any time.',
  },
  {
    question: 'Do premature babies hit milestones later?',
    answer: 'Yes. Pediatricians use "adjusted age" (age from due date, not birth date) to assess milestones for the first 2-3 years. A baby born 2 months early would be expected to reach 4-month milestones at 6 months chronological age.',
  },
];

export default function AgesHubPage() {
  const schema = getContentPageSchema({
    name: 'Baby Age Guides: Birth to 3 Years',
    description: 'Complete age-by-age baby development guides covering milestones, feeding, sleep, and safety from newborn through toddlerhood.',
    path: '/ages',
    lastModified: '2026-07-01',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Age Guides' },
  ]);
  const faqSchema = getFAQPageSchema(faqItems);

  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: 'Age Guides' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Baby Age Guides: Birth to 3 Years</h1>
      <p className="text-sm text-muted mb-6">
        Evidence-based guides for every stage of your baby&apos;s development. Each guide covers milestones, feeding, sleep, safety, and when to talk to your pediatrician.
      </p>

      <KeyTakeaways
        takeaways={[
          'Every baby develops at their own pace — milestones have a range of normal',
          'The AAP recommends formal developmental screening at 9, 18, and 30 months',
          'Early intervention is free, available in every state, and most effective when started early',
          'Adjusted age should be used for premature babies when assessing milestones',
          'Talk to your pediatrician if you have any concerns — do not wait',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['AAP', 'CDC', 'WHO']} />
      </div>

      <LastReviewed date="2026-07-01" />

      <section className="mt-8">
        <h2 className="text-lg font-bold text-foreground mb-4">Choose your baby&apos;s age group</h2>
        <div className="grid gap-3">
          {ageGroups.map((group) => (
            <Link
              key={group.slug}
              href={`/ages/${group.slug}`}
              className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-sm font-bold text-foreground">{group.title}</h3>
                <span className="text-xs text-muted">{group.subtitle}</span>
              </div>
              <p className="text-sm text-muted">{group.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-[#E8E2D9] bg-white p-5">
        <h2 className="text-base font-bold text-foreground mb-3">Related resources</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/newborn" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Newborn Guide</Link>
          <Link href="/milestones" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Milestones Tracker</Link>
          <Link href="/feeding" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Feeding Guide</Link>
          <Link href="/sleep" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Sleep Guide</Link>
          <Link href="/vaccines" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Vaccine Schedule</Link>
          <Link href="/tools/growth" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Growth Calculator</Link>
        </div>
      </section>

      <div className="mt-8">
        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="Development is not a race. These age guides provide general timelines based on CDC and AAP data, but every baby is unique. If you have concerns about your child's development, talk to your pediatrician — early support makes a real difference." />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>
    </article>
  );
}
