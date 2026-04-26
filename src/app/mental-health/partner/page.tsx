import type { Metadata } from "next";
import Link from "next/link";
import { mentalHealthTopics } from "@/data/mental-health/topics";
import TopicCard from "@/components/mental-health/TopicCard";

export const metadata: Metadata = {
  title: "For Partners - Mental Health Resources",
  description:
    "Mental health resources for non-birthing parents and partners. Paternal depression, partner support, and relationship strain during the postpartum period.",
  alternates: {
    canonical: "/mental-health/partner",
  },
  openGraph: {
    title: "For Partners | Is My Baby Alright?",
    description:
      "Mental health resources for non-birthing parents. Paternal depression, partner support, and relationship guidance.",
  },
};

const partnerTopics = mentalHealthTopics.filter((t) =>
  ["paternal-depression", "partner-support", "relationship-strain"].includes(t.slug)
);

export default function PartnerPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Link
          href="/mental-health"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to mental health"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-foreground">For Partners</h1>
          <p className="text-sm text-muted">Resources for non-birthing parents and partners</p>
        </div>
      </div>

      <div className="card p-5">
        <p className="text-sm text-foreground leading-relaxed">
          If you&apos;re here, you care  -  and that already matters. Whether you&apos;re a
          dad, a non-birthing parent, a partner, or any caregiver in the picture,
          your mental health matters too.
        </p>
        <p className="text-sm text-foreground leading-relaxed mt-3">
          You don&apos;t need to have given birth to experience depression, anxiety,
          or the overwhelming weight of new parenthood. And if your partner is
          struggling, you may feel helpless. You&apos;re not.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {partnerTopics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>

      <div className="card-alt p-4">
        <h3 className="text-sm font-bold text-foreground mb-2">
          What you can do right now
        </h3>
        <ul className="flex flex-col gap-2 text-sm text-foreground">
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            Take one task off your partner&apos;s plate without being asked
          </li>
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            Say: &ldquo;You&apos;re doing an incredible job&rdquo;  -  and mean it
          </li>
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            Protect one 4-hour block of uninterrupted sleep for your partner tonight
          </li>
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            Check in with yourself too  -  you matter in this equation
          </li>
        </ul>
      </div>

      <div className="card-alt p-4 text-sm">
        <p className="font-bold text-foreground mb-1">PSI Warmline</p>
        <p className="text-muted">
          For ALL parents  -  not just birthing parents.{" "}
          <a href="tel:1-800-944-4773" className="text-primary font-semibold">
            1-800-944-4773
          </a>{" "}
          (call or text)
        </p>
      </div>
    </div>
  );
}
