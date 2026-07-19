import type { Metadata } from 'next';
import Link from 'next/link';
import { getContactPageSchema, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the ismybabyalright team. Report content errors, ask questions, or inquire about joining our editorial board.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Is My Baby Alright?',
    description:
      'Report content errors, ask questions, or inquire about joining our editorial board.',
  },
};

const contactSchema = getContactPageSchema({
  name: 'Contact Us',
  description:
    'Get in touch with the ismybabyalright team. Report content errors, ask questions, or inquire about joining our editorial board.',
  path: '/contact',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Contact' },
]);

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold text-foreground mb-2">Contact Us</h1>
      <p className="text-xs text-muted-light mb-8">
        We welcome your feedback and corrections.
      </p>

      <div className="space-y-6">
        <Section title="Get in touch">
          <p>
            We built ismybabyalright to help parents access trusted health
            guidelines. Your feedback helps us improve — whether it is a
            factual correction, a feature suggestion, or a question about how
            the site works.
          </p>
          <p>
            Email us at{' '}
            <a
              href="mailto:hello@ismybabyalright.com"
              className="text-primary font-semibold hover:underline"
            >
              hello@ismybabyalright.com
            </a>
          </p>
        </Section>

        <Section title="Report a content error">
          <p>
            Accuracy is our top priority. If you find information that appears
            incorrect, outdated, or inconsistent with published guidelines from
            the CDC, WHO, AAP, or other authoritative sources, please let us
            know right away.
          </p>
          <p>When reporting an error, it helps to include:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>The page URL or concern title</li>
            <li>The specific claim that appears incorrect</li>
            <li>
              The source or guideline that contradicts it (if you have one)
            </li>
          </ul>
          <p className="mt-2">
            Email:{' '}
            <a
              href="mailto:corrections@ismybabyalright.com"
              className="text-primary font-semibold hover:underline"
            >
              corrections@ismybabyalright.com
            </a>
          </p>
        </Section>

        <Section title="General questions">
          <p>
            Have questions about how the site works, our editorial process, or
            how we select sources? We are happy to explain.
          </p>
          <p>
            You can also learn more on our{' '}
            <Link
              href="/editorial-policy"
              className="text-primary hover:underline font-semibold"
            >
              Editorial Policy
            </Link>{' '}
            and{' '}
            <Link
              href="/medical-review"
              className="text-primary hover:underline font-semibold"
            >
              Medical Review Process
            </Link>{' '}
            pages.
          </p>
        </Section>

        <Section title="Medical professionals">
          <p>
            We are building an editorial board of qualified medical
            professionals — pediatricians, neonatologists, developmental
            specialists, and other experts who share our commitment to
            evidence-based parent health information.
          </p>
          <p>
            If you are a qualified medical professional interested in reviewing
            content, joining our editorial board, or collaborating on
            evidence-based resources, please reach out.
          </p>
          <p className="mt-2">
            Email:{' '}
            <a
              href="mailto:editorial@ismybabyalright.com"
              className="text-primary font-semibold hover:underline"
            >
              editorial@ismybabyalright.com
            </a>
          </p>
        </Section>

        <Section title="Please note">
          <p>
            We cannot provide personal medical advice, diagnose conditions, or
            recommend treatments. If you have concerns about your child&apos;s
            health, please contact your pediatrician or healthcare provider
            directly.
          </p>
          <p>
            In an emergency, call 911 or go to your nearest emergency room.
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
