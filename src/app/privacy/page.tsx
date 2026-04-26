import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - ismybabyalright",
  description:
    "Privacy policy for ismybabyalright. All data stays on your device. No cookies, no analytics, no tracking.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Is My Baby Alright?",
    description:
      "All data stays on your device. No cookies, no analytics, no tracking.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold text-foreground mb-2">
        Privacy Policy
      </h1>
      <p className="text-xs text-muted-light mb-8">
        Last updated: April 2026
      </p>

      <div className="space-y-6">
        <Section title="The short version">
          <p>
            Your data never leaves your device. We don't collect, store, or
            transmit any personal information. There are no accounts, no
            cookies, no analytics, and no tracking of any kind.
          </p>
        </Section>

        <Section title="What data is stored">
          <p>
            ismybabyalright uses your browser's localStorage to save the data
            you enter - things like tracker logs, vaccine records, growth
            measurements, meal plans, and quiz results. This data lives
            entirely on your device and is never sent to any server.
          </p>
          <p>
            You can view, export, or delete all stored data at any time from
            the{" "}
            <Link href="/settings" className="text-primary font-semibold hover:underline">
              Settings
            </Link>{" "}
            page.
          </p>
        </Section>

        <Section title="No accounts or sign-ups">
          <p>
            There are no user accounts, no email collection, and no sign-up
            forms. You can use every feature of this site without providing
            any personal information.
          </p>
        </Section>

        <Section title="No cookies">
          <p>
            This site does not use cookies of any kind - no session cookies,
            no tracking cookies, and no third-party cookies.
          </p>
        </Section>

        <Section title="No analytics or tracking">
          <p>
            We do not use Google Analytics, Facebook Pixel, or any other
            analytics or tracking service. We do not collect information about
            how you use the site, what pages you visit, or how long you stay.
          </p>
        </Section>

        <Section title="No third-party services">
          <p>
            This site does not load scripts, fonts, or resources from
            third-party services that could track you. All assets are served
            directly from our domain.
          </p>
        </Section>

        <Section title="Medical disclaimer">
          <p>
            The content on ismybabyalright is for informational purposes only
            and is based on guidelines from the CDC, WHO, AAP, and other
            trusted medical organizations. It is not medical advice and should
            not replace consultation with your pediatrician or healthcare
            provider.
          </p>
        </Section>

        <Section title="Data you share voluntarily">
          <p>
            Some features let you generate shareable summaries (like caregiver
            handoff cards or emergency info). When you share these, you are
            choosing to send that information outside of this site. We have no
            control over or access to any data you share manually.
          </p>
        </Section>

        <Section title="Clearing your data">
          <p>
            To remove all data stored by this site, you can either:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              Go to{" "}
              <Link href="/settings" className="text-primary font-semibold hover:underline">
                Settings
              </Link>{" "}
              and use the data management options
            </li>
            <li>Clear your browser's site data for this domain</li>
            <li>Use your browser's "Clear browsing data" feature</li>
          </ul>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If we ever change how data is handled, we will update this page.
            Since we don't collect any contact information, we encourage you
            to check back periodically.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have questions about this privacy policy, you can reach us
            through the site's GitHub repository.
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
