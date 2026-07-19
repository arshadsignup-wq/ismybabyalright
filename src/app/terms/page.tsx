import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of service for ismybabyalright. Understand the nature of our content, data handling, and your responsibilities when using this site.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | Is My Baby Alright?',
    description:
      'Understand the nature of our content, data handling, and your responsibilities when using this site.',
  },
};

const termsSchema = getWebPageSchema({
  name: 'Terms of Service',
  description:
    'Terms of service for ismybabyalright. Understand the nature of our content, data handling, and your responsibilities when using this site.',
  path: '/terms',
  lastModified: '2026-07-01',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Terms of Use' },
]);

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold text-foreground mb-2">
        Terms of Service
      </h1>
      <p className="text-xs text-muted-light mb-8">Last updated: July 2026</p>

      <div className="space-y-6">
        <Section title="Agreement">
          <p>
            By using ismybabyalright.com (&ldquo;the Site&rdquo;), you agree to
            these terms. If you do not agree, please do not use the Site.
          </p>
        </Section>

        <Section title="Nature of content">
          <p>
            The Site provides general health and developmental information for
            parents and caregivers. All content is based on published guidelines
            from recognized medical organizations including the CDC, WHO, and
            AAP.
          </p>
          <p>
            Content is provided for informational purposes only. It is not
            medical advice, diagnosis, or treatment. For our full medical
            disclaimer, see our{' '}
            <Link
              href="/disclaimer"
              className="text-primary hover:underline font-semibold"
            >
              Disclaimer
            </Link>{' '}
            page.
          </p>
        </Section>

        <Section title="No professional-patient relationship">
          <p>
            Use of the Site does not create a doctor-patient, therapist-patient,
            or any other professional-patient relationship. The Site and its
            operators are not healthcare providers.
          </p>
          <p>
            Always consult a qualified healthcare professional for medical
            decisions about your child. In an emergency, call 911 or go to your
            nearest emergency room.
          </p>
        </Section>

        <Section title="Accuracy and limitations">
          <p>
            We make every effort to ensure the accuracy of information on this
            Site by sourcing content from authoritative medical organizations and
            following a structured{' '}
            <Link
              href="/editorial-policy"
              className="text-primary hover:underline font-semibold"
            >
              editorial process
            </Link>
            . However, we cannot guarantee that all information is complete,
            current, or error-free.
          </p>
          <p>
            Medical guidelines change over time. While we update content when
            new guidelines are published, there may be a delay between
            publication of new guidelines and updates to the Site.
          </p>
        </Section>

        <Section title="Your data">
          <p>
            The Site uses your browser&apos;s localStorage to store data from
            trackers and tools (such as the baby tracker, growth charts, and
            vaccine log). This data is stored entirely on your device and is
            never transmitted to our servers.
          </p>
          <p>
            For complete details about data handling, see our{' '}
            <Link
              href="/privacy"
              className="text-primary hover:underline font-semibold"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </Section>

        <Section title="Intellectual property">
          <p>
            The original content, design, and organization of this Site are
            protected by copyright. You may share links to any page freely. You
            may not reproduce, distribute, or create derivative works from the
            Site&apos;s content without permission.
          </p>
          <p>
            Medical guidelines cited on this Site remain the property of their
            respective publishing organizations. We cite these guidelines under
            fair use for educational and informational purposes.
          </p>
        </Section>

        <Section title="Third-party links">
          <p>
            The Site contains links to external websites, primarily to source
            publications from medical organizations. These links are provided
            for reference. We do not control and are not responsible for the
            content or availability of external sites.
          </p>
        </Section>

        <Section title="Advertising">
          <p>
            The Site is supported by non-intrusive advertising to keep it free
            for all parents. Advertisements are served by third-party networks
            and are not endorsed by ismybabyalright. We do not accept sponsored
            health content.
          </p>
        </Section>

        <Section title="Changes to these terms">
          <p>
            We may update these terms periodically. Changes will be reflected
            in the &ldquo;Last updated&rdquo; date at the top of this page. Continued
            use of the Site after changes constitutes acceptance of the updated
            terms.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have questions about these terms, please{' '}
            <Link
              href="/contact"
              className="text-primary hover:underline font-semibold"
            >
              contact us
            </Link>
            .
          </p>
        </Section>
      </div>

      <div className="mt-10 pt-6 border-t border-border">
        <Link
          href="/"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Back to Home
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
