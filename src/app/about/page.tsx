import type { Metadata } from "next";
import Link from "next/link";
import { getAboutPageSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About ismybabyalright. A free, evidence-based baby health resource built on CDC, WHO, and AAP guidelines. Learn about our editorial process and sources.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Is My Baby Alright?",
    description:
      "A free, evidence-based baby health resource built on CDC, WHO, and AAP guidelines. Learn about our editorial process and sources.",
  },
};

const aboutSchema = getAboutPageSchema({
  name: 'About Us',
  description:
    'About ismybabyalright. A free, evidence-based baby health resource built on CDC, WHO, and AAP guidelines. Learn about our editorial process and sources.',
  path: '/about',
  lastModified: '2026-07-01',
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About' },
]);

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold text-foreground mb-2">About Us</h1>
      <p className="text-xs text-muted-light mb-8">
        Last updated: July 2026
      </p>

      <div className="space-y-6">
        <Section title="Why we built this">
          <p>
            Every parent knows the feeling. It is 2 AM, your baby is doing
            something you have never seen before, and you are frantically
            searching the internet for answers. What you find is a mix of
            outdated forum posts, SEO clickbait, and vague advice that leaves
            you more anxious than when you started.
          </p>
          <p>
            Parents deserve better. So we built a free tool that puts trusted
            medical guidelines at your fingertips - organized by concern, broken
            down by age, and written in language that actually makes sense at
            2 AM.
          </p>
        </Section>

        <Section title="What we are">
          <p>
            ismybabyalright is a free, evidence-based resource that aggregates
            guidelines from the CDC, WHO, AAP, and other trusted medical
            organizations into parent-friendly language. Every concern page
            includes age-specific context and clear action tiers so you know
            what is normal, what to mention at your next visit, and what needs
            attention right away.
          </p>
          <p>
            Beyond concern pages, we offer developmental milestone guides,
            triage decision trees, a baby tracker, growth charts, a vaccine log,
            sleep and feeding guides, and mental health resources for
            caregivers - all in one place.
          </p>
        </Section>

        <Section title="Who we are">
          <p>
            We are parents who believe every family deserves free access to
            trusted guidelines. We are not doctors — and we never pretend to be.
          </p>
          <p>
            What we do well is take complex clinical guidelines and organize
            them into clear, age-specific, actionable information. We cite
            every source, follow a structured editorial process, and update
            content when new guidelines are published.
          </p>
          <p>
            This site is a reference tool — think of it as a well-organized
            library of trusted guidelines, not a doctor&apos;s office.
          </p>
        </Section>

        <Section title="Editorial standards">
          <p>
            We hold ourselves to a high standard of accuracy and transparency.
            Every page is reviewed against published clinical guidelines, and
            we never publish content based on anecdotal evidence or unverified
            sources.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <Link href="/editorial-policy" className="text-primary hover:underline font-semibold">
                Editorial Policy
              </Link>{" "}
              — our standards, source hierarchy, and fact-checking process
            </li>
            <li>
              <Link href="/medical-review" className="text-primary hover:underline font-semibold">
                Medical Review Process
              </Link>{" "}
              — how we review content for accuracy
            </li>
            <li>
              <Link href="/sources" className="text-primary hover:underline font-semibold">
                Sources &amp; References
              </Link>{" "}
              — the organizations we cite
            </li>
            <li>
              <Link href="/disclaimer" className="text-primary hover:underline font-semibold">
                Disclaimer
              </Link>{" "}
              — the nature and limitations of our content
            </li>
          </ul>
        </Section>

        <Section title="Transparency">
          <p>
            We believe in full transparency about how this site works:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>No sponsored content or affiliate links</li>
            <li>No user accounts or email collection</li>
            <li>
              Everything runs on your device - your baby data never leaves your
              browser
            </li>
            <li>
              This site is supported by non-intrusive ads to keep it free for
              all parents
            </li>
          </ul>
        </Section>

        <Section title="Our commitment">
          <p>
            We are continuously adding new concern pages, tools, and resources
            to make this site more helpful for parents. We keep our content
            current with the latest published guidelines and review existing
            pages for accuracy.
          </p>
          <p>
            This site will always be free. Our goal is simple - help parents
            feel more informed, more confident, and less alone in those
            uncertain moments.
          </p>
        </Section>

        <Section title="Join our team">
          <p>
            We are building an editorial board of qualified medical
            professionals. If you are a pediatrician, neonatologist,
            developmental specialist, or other qualified professional interested
            in contributing to evidence-based parent health information,{" "}
            <Link href="/contact" className="text-primary hover:underline font-semibold">
              we would love to hear from you
            </Link>
            .
          </p>
        </Section>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-4">
        <Link
          href="/"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Back to Home
        </Link>
        <Link
          href="/editorial-policy"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Editorial Policy
        </Link>
        <Link
          href="/medical-review"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Medical Review
        </Link>
        <Link
          href="/contact"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Contact
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
