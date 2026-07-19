import type { Metadata } from "next";
import Link from "next/link";
import { mentalHealthTopics } from "@/data/mental-health/topics";
import TopicCard from "@/components/mental-health/TopicCard";
import { getContentPageSchema, getBreadcrumbSchema } from "@/lib/seo";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import BottomLine from "@/components/shared/BottomLine";
import LastReviewed from "@/components/shared/LastReviewed";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";

const contentSchema = getContentPageSchema({
  name: "For Partners - Mental Health Resources",
  description:
    "Mental health resources for non-birthing parents and partners. Paternal depression, partner support, and relationship strain during the postpartum period.",
  path: "/mental-health/partner",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Mental Health", url: "/mental-health" },
  { name: "Partner Support" },
]);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
          <div className="mt-2">
            <LastReviewed date="2026-07-01" />
          </div>
        </div>
      </div>

      <MedicalReviewAttribution sources={['APA', 'PSI']} />

      <KeyTakeaways
        takeaways={[
          "Paternal postpartum depression affects up to 10 percent of new fathers and is even higher when the birthing parent is also depressed.",
          "Non-birthing parents can experience depression, anxiety, irritability, and withdrawal -- these are real conditions that deserve treatment.",
          "Supporting your partner's mental health while ignoring your own is not sustainable. Both parents need to be well to care for their baby.",
          "The PSI Warmline (1-800-944-4773) is for all parents, not just birthing parents.",
        ]}
      />

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

      <FAQSection
        items={[
          { question: "Can fathers and non-birthing partners get postpartum depression?", answer: "Yes. Research published by the American Psychological Association shows that up to 10 percent of new fathers experience paternal postpartum depression, and the rate is even higher when their partner is also affected. Symptoms may include irritability, anger, withdrawal, changes in sleep or appetite, and loss of interest in activities." },
          { question: "How can I support my partner who has postpartum depression?", answer: "Listen without judgment, validate their feelings, encourage them to seek professional help, and take on more household and baby care tasks when possible. Avoid saying things like 'just be happy' or 'other parents manage fine.' Accompany them to appointments if they want you there, and learn about postpartum depression so you can recognize warning signs." },
          { question: "What should I do if I think I am depressed as a new parent?", answer: "Talk to your primary care doctor or a mental health professional. You can also call the PSI Warmline at 1-800-944-4773 -- it is for all parents, not just birthing parents. Treatment options include therapy, medication, peer support groups, and lifestyle changes. Getting help is not a sign of weakness; it is an investment in your family." },
          { question: "How does one partner's depression affect the other?", answer: "Parental depression can be contagious within a relationship. When one partner is depressed, the other is at significantly higher risk. This makes it important for both parents to monitor their mental health and seek help early. A strong partnership where both parents are supported leads to better outcomes for the whole family." },
        ]}
      />

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

      <BottomLine
        summary="Your mental health matters just as much as your partner's. Paternal and partner postpartum depression is real, common, and treatable. You do not need to have given birth to struggle, and you do not need to struggle alone. Checking in on yourself is not selfish -- it is essential for your family."
        supportiveMessage="If you are here reading this, you already care deeply. That matters more than you know. Reach out for help when you need it -- for your sake and your family's."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>
    </div>
  );
}
