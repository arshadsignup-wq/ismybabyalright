import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - ismybabyalright",
  description:
    "About ismybabyalright. A free, evidence-based baby health resource built on CDC, WHO, and AAP guidelines. No ads, no tracking, no data collection.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold text-foreground mb-2">About Us</h1>
      <p className="text-xs text-muted-light mb-8">
        Last updated: April 2026
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

        <Section title="What we are not">
          <p>
            We are not doctors, nurses, or medical professionals. We are not a
            replacement for medical care or your pediatrician's advice. We are
            not collecting your data, and we are not selling anything.
          </p>
          <p>
            This site is a reference tool - think of it as a well-organized
            library of trusted guidelines, not a doctor's office.
          </p>
        </Section>

        <Section title="Our editorial process">
          <p>
            Every concern page on this site cites specific publications from the
            CDC, WHO, AAP, or other recognized medical organizations. We do not
            publish content based on anecdotal evidence, personal opinion, or
            unverified sources.
          </p>
          <p>
            All content follows a consistent structure: a quick answer for
            immediate reassurance, age-specific breakdowns for context, and
            three-tier action guidance (when it is normal, when to mention it,
            when to act now). Pages link to related concerns and resources so
            you can explore further.
          </p>
        </Section>

        <Section title="Transparency">
          <p>
            We believe in full transparency about how this site works:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>No ads or sponsored content</li>
            <li>No affiliate links</li>
            <li>No data collection or analytics</li>
            <li>No cookies or tracking</li>
            <li>No user accounts or email collection</li>
            <li>
              Everything runs on your device - your data never leaves your
              browser
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
