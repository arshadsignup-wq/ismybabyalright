import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Disclaimer - ismybabyalright",
  description:
    "Medical disclaimer for ismybabyalright. This site is an informational resource based on CDC, WHO, and AAP guidelines - not a substitute for medical advice.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Medical Disclaimer | Is My Baby Alright?",
    description:
      "This site is an informational resource based on CDC, WHO, and AAP guidelines - not a substitute for medical advice.",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold text-foreground mb-2">
        Medical Disclaimer
      </h1>
      <p className="text-xs text-muted-light mb-8">
        Last updated: April 2026
      </p>

      <div className="space-y-6">
        <Section title="What this site is">
          <p>
            ismybabyalright is a free resource designed to help parents and
            caregivers understand what is normal in baby development and when
            something might need attention. All of our content is based on
            published guidelines from trusted medical organizations including the
            CDC, WHO, and AAP.
          </p>
          <p>
            We take complex clinical guidelines and break them down into
            parent-friendly language with age-specific context, so you can feel
            more informed and confident when caring for your little one.
          </p>
        </Section>

        <Section title="What this site is not">
          <p>
            This site is not a medical provider. We are not diagnosing
            conditions, prescribing treatments, or offering personalized medical
            advice. Nothing on ismybabyalright should be used as a substitute
            for the guidance of your pediatrician or healthcare provider.
          </p>
          <p>
            If your baby is showing symptoms that concern you, please contact
            your doctor directly. In an emergency, call 911 or go to your
            nearest emergency room.
          </p>
        </Section>

        <Section title="How we create our content">
          <p>
            Every concern page, milestone guide, and triage tool on this site is
            sourced from official guidelines published by recognized medical
            organizations - primarily the CDC, WHO, and AAP.
          </p>
          <p>
            Our content is structured consistently across the site: each concern
            includes a quick answer, age-specific breakdowns, and a three-tier
            action guide (when it is normal, when to mention it at your next
            visit, and when to act now). Every page cites its sources so you can
            verify the information yourself.
          </p>
        </Section>

        <Section title="When to call your doctor">
          <p>
            Always trust your instincts. You know your baby better than anyone.
            If something feels off, it is always okay to call your pediatrician
            - even if the information on this site suggests things are likely
            normal.
          </p>
          <p>
            Use ismybabyalright to prepare for conversations with your doctor,
            not to replace them. Our tracker tools can help you organize
            patterns and observations to share at your next appointment.
          </p>
        </Section>

        <Section title="About our tools and trackers">
          <p>
            The tracking tools on this site - including the baby tracker, growth
            charts, vaccine log, and sleep log - are designed for personal
            reference and organization. They store data locally on your device
            using your browser's localStorage and are not transmitted to any
            server.
          </p>
          <p>
            These tools are not clinical-grade medical devices. They are meant
            to help you stay organized and spot patterns, not to provide medical
            assessments or diagnoses.
          </p>
        </Section>

        <Section title="External links">
          <p>
            Throughout the site, we link to official sources such as the CDC,
            WHO, AAP, and other trusted organizations. These links are provided
            for your convenience and reference. We do not control the content on
            external websites and are not responsible for their accuracy or
            availability.
          </p>
        </Section>

        <Section title="Changes to this disclaimer">
          <p>
            We may update this disclaimer periodically as the site evolves. Since
            we do not collect any contact information, we encourage you to check
            back from time to time.
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
