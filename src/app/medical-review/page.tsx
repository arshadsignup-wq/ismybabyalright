import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema } from '@/lib/seo';
import { reviewers } from '@/data/editorial';

export const metadata: Metadata = {
  title: 'Medical Review Process',
  description:
    'How content on ismybabyalright is reviewed for accuracy. Our review checklist, source verification process, and commitment to evidence-based information.',
  alternates: {
    canonical: '/medical-review',
  },
  openGraph: {
    title: 'Medical Review Process | Is My Baby Alright?',
    description:
      'How content is reviewed for accuracy. Our review checklist, source verification, and commitment to evidence-based information.',
  },
};

const medicalReviewSchema = getWebPageSchema({
  name: 'Medical Review Process',
  description:
    'How content on ismybabyalright is reviewed for accuracy. Our review checklist, source verification process, and commitment to evidence-based information.',
  path: '/medical-review',
  lastModified: '2026-07-01',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Medical Review' },
]);

export default function MedicalReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalReviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold text-foreground mb-2">
        Medical Review Process
      </h1>
      <p className="text-xs text-muted-light mb-8">Last updated: July 2026</p>

      <div className="space-y-6">
        <Section title="How content is reviewed">
          <p>
            Every page on ismybabyalright goes through a structured review
            process before publication. Our editorial team checks each claim
            against published clinical guidelines from the CDC, WHO, AAP, and
            other recognized medical organizations.
          </p>
          <p>
            This is not a cursory check — each page is reviewed for accuracy of
            medical claims, correctness of age ranges, appropriateness of
            urgency tiers, and validity of source links.
          </p>
        </Section>

        <Section title='What "medically reviewed" means'>
          <p>
            When you see &ldquo;Medically reviewed by&rdquo; on a page, it
            means a member of our {reviewers.length}-member Medical Advisory
            Board has verified the content against published guidelines from
            authoritative medical organizations.
          </p>
          <p>
            Each concern page is assigned to a reviewer whose specialty matches
            the topic category. For example, pediatric feeding concerns are
            reviewed by our nutrition specialist, while speech and communication
            concerns are reviewed by our pediatric speech-language pathologist.
          </p>
          <p>
            Our focus is on accurately representing what authoritative sources
            say — not on generating original medical opinions. For full
            reviewer profiles, see our{' '}
            <Link
              href="/about#medical-advisory-board"
              className="text-primary font-semibold hover:underline"
            >
              Medical Advisory Board
            </Link>
            .
          </p>
        </Section>

        <Section title="Review checklist">
          <p>
            Each page is checked against the following criteria before
            publication:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>All clinical claims are traceable to a published guideline</li>
            <li>
              Age ranges and developmental timelines match source material
            </li>
            <li>
              Urgency tiers (normal, mention, act now) are supported by the
              source
            </li>
            <li>No unsupported claims, diagnoses, or treatment plans</li>
            <li>All source links are active and point to correct documents</li>
            <li>
              Language is clear, accurate, and appropriate for a parent audience
            </li>
          </ul>
        </Section>

        <Section title="Source verification">
          <p>
            We select sources based on the following criteria:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Published by a recognized medical or public health organization</li>
            <li>Based on peer-reviewed research or clinical consensus</li>
            <li>Regularly updated by the publishing organization</li>
            <li>Freely accessible to the public</li>
          </ul>
          <p className="mt-2">
            For a complete list of organizations we cite, visit our{' '}
            <Link
              href="/sources"
              className="text-primary hover:underline font-semibold"
            >
              Sources &amp; References
            </Link>{' '}
            page.
          </p>
        </Section>

        <Section title="Continuous improvement">
          <p>
            We are continuously working to strengthen our review process:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              Expanding our Medical Advisory Board with additional specialists
            </li>
            <li>
              Implementing structured peer review for high-stakes content
              (triage tools, urgency guidance)
            </li>
            <li>
              Adding more granular specialty matching between reviewers and
              specific conditions
            </li>
          </ul>
          <p className="mt-2">
            If you are a qualified medical professional interested in
            contributing to evidence-based parent health information,{' '}
            <Link
              href="/contact"
              className="text-primary hover:underline font-semibold"
            >
              we would love to hear from you
            </Link>
            .
          </p>
        </Section>

        <Section title="Limitations">
          <p>
            ismybabyalright is not a healthcare provider. We do not diagnose
            conditions, prescribe treatments, or offer personalized medical
            advice.
          </p>
          <p>
            Our content is general guidance based on published guidelines. Every
            child is different, and the information on this site cannot account
            for individual circumstances. Always consult your pediatrician or
            healthcare provider for medical decisions about your child.
          </p>
        </Section>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link
          href="/editorial-policy"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Editorial Policy
        </Link>
        <Link
          href="/sources"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Sources &amp; References
        </Link>
      </div>
    </main>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-[#E8E2D9] bg-white p-5">
      <h2 className="text-base font-bold text-foreground mb-2">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-2">
        {children}
      </div>
    </section>
  );
}
