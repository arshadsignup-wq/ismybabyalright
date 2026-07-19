import type { Metadata } from 'next';
import Link from 'next/link';
import { editorialProcess } from '@/data/editorial';
import { getWebPageSchema, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description:
    'How we create, review, and update content on ismybabyalright. Our editorial standards, source hierarchy, and fact-checking process.',
  alternates: {
    canonical: '/editorial-policy',
  },
  openGraph: {
    title: 'Editorial Policy | Is My Baby Alright?',
    description:
      'How we create, review, and update content. Our editorial standards, source hierarchy, and fact-checking process.',
  },
};

const editorialPolicySchema = getWebPageSchema({
  name: 'Editorial Policy',
  description:
    'How we create, review, and update content on ismybabyalright. Our editorial standards, source hierarchy, and fact-checking process.',
  path: '/editorial-policy',
  lastModified: '2026-07-01',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Editorial Policy' },
]);

export default function EditorialPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(editorialPolicySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold text-foreground mb-2">
        Editorial Policy
      </h1>
      <p className="text-xs text-muted-light mb-8">Last updated: July 2026</p>

      <div className="space-y-6">
        <Section title="Our editorial standards">
          <p>
            Every page on ismybabyalright is built on published clinical
            guidelines from recognized medical organizations. We do not publish
            content based on anecdotal evidence, personal opinion, sponsored
            partnerships, or unverified sources.
          </p>
          <p>
            Our goal is to make trusted medical guidelines accessible to parents
            in clear, age-specific language — not to create original medical
            content or offer diagnoses.
          </p>
        </Section>

        <Section title="Source hierarchy">
          <p>
            We prioritize the following authoritative organizations when
            sourcing content, listed in order of precedence:
          </p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            {editorialProcess.sourceHierarchy.map((source) => (
              <li key={source.org}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {source.fullName} ({source.org})
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-2">
            When multiple sources address the same topic, we follow the most
            recently published or most specific guideline.
          </p>
        </Section>

        <Section title="Fact-checking process">
          <p>
            Every page goes through a structured review before publication:
          </p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            {editorialProcess.factCheckingSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </Section>

        <Section title="Content structure">
          <p>
            All concern pages follow a consistent three-tier action framework
            designed to help parents make informed decisions:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>When it is normal</strong> — common variations that are
              typically part of healthy development
            </li>
            <li>
              <strong>When to mention it</strong> — observations worth bringing
              up at your next pediatrician visit
            </li>
            <li>
              <strong>When to act now</strong> — signs that warrant prompt
              medical attention
            </li>
          </ul>
          <p className="mt-2">
            Each page also includes a quick answer for immediate reassurance,
            age-specific breakdowns, and links to source publications.
          </p>
        </Section>

        <Section title="How we update content">
          <p>
            Content updates are triggered by two mechanisms:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Guideline-based:</strong> When a source organization
              publishes new or revised guidelines, affected pages are reviewed
              and updated.
            </li>
            <li>
              <strong>Periodic review:</strong> All content undergoes periodic
              site-wide review to verify accuracy, link integrity, and
              consistency. Our last site-wide review was{' '}
              {editorialProcess.lastSiteWideReview}.
            </li>
          </ul>
        </Section>

        <Section title="Our team" id="our-team">
          <p>
            Our editorial team reviews every page against published clinical
            guidelines. We are parents and researchers who believe every family
            deserves free access to trusted health information.
          </p>
          <p>
            We are transparent about our current approach: our team reviews
            content for accuracy against authoritative sources, but we do not
            yet have named medical professionals on our editorial board. We are
            actively building our team and will add individual reviewer profiles
            as qualified professionals join.
          </p>
        </Section>

        <Section title="What we will never do">
          <ul className="list-disc list-inside space-y-1">
            <li>Diagnose medical conditions</li>
            <li>Recommend specific treatment plans</li>
            <li>Publish sponsored health content</li>
            <li>Make claims not supported by published guidelines</li>
            <li>Fabricate credentials or expertise we do not have</li>
          </ul>
        </Section>

        <Section title="Report an error">
          <p>
            Accuracy is our top priority. If you find information that appears
            incorrect, outdated, or inconsistent with published guidelines,
            please let us know.
          </p>
          <p className="mt-2">
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              Contact us to report a content error
            </Link>
          </p>
        </Section>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link
          href="/"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Back to Home
        </Link>
        <Link
          href="/medical-review"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Medical Review Process
        </Link>
      </div>
    </main>
    </>
  );
}

function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-xl border border-[#E8E2D9] bg-white p-5"
    >
      <h2 className="text-base font-bold text-foreground mb-2">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-2">
        {children}
      </div>
    </section>
  );
}
