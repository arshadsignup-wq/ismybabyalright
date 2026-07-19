import type { Metadata } from 'next';
import Link from 'next/link';
import { monthlyDevelopment } from '@/data/development-months';
import { getCollectionPageSchema, getBreadcrumbSchema } from '@/lib/seo';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import LastReviewed from '@/components/shared/LastReviewed';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import BottomLine from '@/components/shared/BottomLine';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

const collectionSchema = getCollectionPageSchema({
  name: 'Baby Development Month by Month',
  description:
    'Track your baby\'s development from month 1 to month 12. Physical, cognitive, and social milestones, feeding and sleep expectations, common concerns, and activities for each month.',
  path: '/development',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Development' },
]);

export const metadata: Metadata = {
  title: 'Baby Development Month by Month',
  description:
    'Track your baby\'s development from month 1 to month 12. Physical, cognitive, and social milestones, feeding and sleep expectations, common concerns, and activities for each month.',
  alternates: {
    canonical: '/development',
  },
  openGraph: {
    title: 'Baby Development Month by Month | Is My Baby Alright?',
    description:
      'Track your baby\'s development month by month. Milestones, feeding, sleep, common concerns, and activities.',
  },
};

export default function DevelopmentPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs items={[{ label: 'Development' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2 mt-4">
        Baby Development Month by Month
      </h1>
      <p className="text-sm text-muted mb-4">
        Every baby develops at their own pace. These month-by-month guides show
        what to expect in physical, cognitive, and social development — along
        with feeding, sleep, common concerns, and activities for each age. All
        information is based on CDC, WHO, and AAP guidelines.
      </p>

      <div className="mb-2">
        <MedicalReviewAttribution sources={['CDC', 'WHO', 'AAP']} />
      </div>
      <div className="mb-8">
        <LastReviewed date="2026-07-01" />
      </div>

      {/* Quick navigation */}
      <nav
        aria-label="Month navigation"
        className="flex flex-wrap gap-2 mb-8"
      >
        {monthlyDevelopment.map((m) => (
          <Link
            key={m.slug}
            href={`/development/${m.slug}`}
            className="w-16 h-10 flex items-center justify-center rounded-lg border border-[#E8E2D9] bg-white text-sm font-bold text-primary hover:bg-card-alt transition-colors"
          >
            {m.month}mo
          </Link>
        ))}
      </nav>

      {/* Month cards */}
      <div className="space-y-4">
        {monthlyDevelopment.map((m) => (
          <Link
            key={m.slug}
            href={`/development/${m.slug}`}
            className="block rounded-xl border border-[#E8E2D9] bg-white p-5 hover:border-primary transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {m.label}
                </h2>
                <p className="text-sm text-muted leading-relaxed mt-1">
                  {m.summary}
                </p>
              </div>
              <span className="flex-shrink-0 mt-1 text-muted group-hover:text-primary transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <BottomLine summary="Every baby develops at their own pace. The month-by-month guides above show typical ranges based on CDC, WHO, and AAP guidelines. Missing a milestone doesn't necessarily mean something is wrong — but if you have concerns, your pediatrician can help." />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      {/* Developmental Domains */}
      <div className="mt-10 pt-6 border-t border-border">
        <h2 className="text-base font-bold text-foreground mb-3">
          Developmental Domains
        </h2>
        <p className="text-sm text-muted mb-4">
          Deep-dive into each area of development with age-by-age milestones, activities, and when to seek evaluation.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          <Link href="/development/gross-motor" className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold text-foreground">Gross Motor</span>
            <p className="text-xs text-muted mt-1">Rolling, crawling, walking, running</p>
          </Link>
          <Link href="/development/fine-motor" className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold text-foreground">Fine Motor</span>
            <p className="text-xs text-muted mt-1">Grasping, pinching, drawing, stacking</p>
          </Link>
          <Link href="/development/speech-language" className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold text-foreground">Speech &amp; Language</span>
            <p className="text-xs text-muted mt-1">Babbling, first words, sentences</p>
          </Link>
          <Link href="/development/cognitive" className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold text-foreground">Cognitive</span>
            <p className="text-xs text-muted mt-1">Problem-solving, memory, reasoning</p>
          </Link>
          <Link href="/development/social-emotional" className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold text-foreground">Social-Emotional</span>
            <p className="text-xs text-muted mt-1">Attachment, empathy, cooperation</p>
          </Link>
          <Link href="/development/sensory" className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold text-foreground">Sensory</span>
            <p className="text-xs text-muted mt-1">Vision, hearing, touch, proprioception</p>
          </Link>
        </div>
      </div>

      {/* Delays & Support */}
      <div className="mt-8">
        <h2 className="text-base font-bold text-foreground mb-3">
          Delays, Screening &amp; Support
        </h2>
        <div className="grid gap-2 sm:grid-cols-2">
          <Link href="/development/delays" className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold text-foreground">Understanding Delays</span>
            <p className="text-xs text-muted mt-1">Causes, identification, evaluation</p>
          </Link>
          <Link href="/development/screening" className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold text-foreground">Developmental Screening</span>
            <p className="text-xs text-muted mt-1">ASQ-3, M-CHAT, and other tools</p>
          </Link>
          <Link href="/development/early-intervention" className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold text-foreground">Early Intervention</span>
            <p className="text-xs text-muted mt-1">Free services for children under 3</p>
          </Link>
          <Link href="/development/therapy-types" className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold text-foreground">Therapy Types</span>
            <p className="text-xs text-muted mt-1">OT, PT, speech therapy, ABA</p>
          </Link>
          <Link href="/development/autism-signs" className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold text-foreground">Early Signs of Autism</span>
            <p className="text-xs text-muted mt-1">Age-by-age signs and screening</p>
          </Link>
          <Link href="/development/speech-delay" className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold text-foreground">Speech Delay vs Disorder</span>
            <p className="text-xs text-muted mt-1">Differences, evaluation, treatment</p>
          </Link>
        </div>
      </div>

      {/* Cross-links */}
      <div className="mt-10 pt-6 border-t border-border">
        <h2 className="text-base font-bold text-foreground mb-3">
          Related resources
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/milestones"
            className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors"
          >
            Developmental Milestones
          </Link>
          <Link
            href="/developmental-activities"
            className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors"
          >
            Play Activities by Age
          </Link>
          <Link
            href="/development/red-flags"
            className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors"
          >
            Developmental Red Flags
          </Link>
          <Link
            href="/doctor-visits"
            className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors"
          >
            Well-Child Visit Schedule
          </Link>
        </div>
      </div>
    </article>
  );
}
