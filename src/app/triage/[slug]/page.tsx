import { notFound } from "next/navigation";
import { allTriageTrees, getTriageTree } from "@/data/triage";
import { getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";
import TriageWizard from "@/components/triage/TriageWizard";
import StaticTriageSummary from "@/components/triage/StaticTriageSummary";
import TriageMatrix from "@/components/triage/TriageMatrix";
import FAQSection from "@/components/shared/FAQSection";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import BottomLine from "@/components/shared/BottomLine";
import LastReviewed from "@/components/shared/LastReviewed";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import type { TriageOutcome } from "@/data/triage/types";

export function generateStaticParams() {
  return allTriageTrees.map((tree) => ({ slug: tree.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tree = getTriageTree(slug);
  if (!tree) return {};
  return {
    title: `${tree.title}  -  Symptom Checker`,
    description: tree.description,
    alternates: {
      canonical: `/triage/${slug}`,
    },
    openGraph: {
      title: `${tree.title} - Symptom Checker | Is My Baby Alright?`,
      description: tree.description,
    },
  };
}

export default async function TriageSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tree = getTriageTree(slug);
  if (!tree) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Symptom Checker", url: "/triage" },
    { name: tree.title },
  ]);

  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `${tree.title} - Baby Symptom Checker`,
    description: tree.description,
    url: `https://www.ismybabyalright.com/triage/${slug}`,
    about: {
      "@type": "MedicalSignOrSymptom",
      name: tree.title,
    },
    audience: {
      "@type": "PeopleAudience",
      audienceType: "Parents",
    },
    lastReviewed: "2026-07-01",
    author: {
      "@type": "Organization",
      name: "Is My Baby Alright?",
      url: "https://www.ismybabyalright.com",
    },
    reviewedBy: {
      "@type": "Organization",
      name: "Is My Baby Alright? Editorial Team",
      url: "https://www.ismybabyalright.com",
      description:
        "Content reviewed against published guidelines from the CDC, WHO, AAP, and ACOG.",
    },
  };

  const outcomes = Object.values(tree.outcomes);
  const red = outcomes.filter((o: TriageOutcome) => o.level === 'red');
  const yellow = outcomes.filter((o: TriageOutcome) => o.level === 'yellow');
  const green = outcomes.filter((o: TriageOutcome) => o.level === 'green');

  // Auto-generate key takeaways from triage outcomes
  const takeaways: string[] = [];
  if (red.length > 0) {
    takeaways.push(`Go to the ER if: ${red[0].title.toLowerCase()}`);
  }
  if (yellow.length > 0) {
    takeaways.push(`Call your doctor if: ${yellow[0].title.toLowerCase()}`);
  }
  if (green.length > 0) {
    takeaways.push(`Usually safe to monitor at home: ${green[0].title.toLowerCase()}`);
  }
  takeaways.push('When in doubt, call your pediatrician — they would rather hear from you than have you worry alone');

  const triageFaqItems: { question: string; answer: string }[] = [];
  const titleLower = tree.title.toLowerCase();

  if (red.length > 0) {
    triageFaqItems.push({
      question: `When should I take my baby to the ER for ${titleLower}?`,
      answer: red.map((o) => `${o.title}: ${o.description}`).join('. ') + '.',
    });
  }
  if (yellow.length > 0) {
    triageFaqItems.push({
      question: `When should I call the doctor about baby ${titleLower}?`,
      answer: yellow.map((o) => `${o.title}: ${o.description}`).join('. ') + '.',
    });
  }
  if (green.length > 0) {
    triageFaqItems.push({
      question: `When can I monitor ${titleLower} at home?`,
      answer: green.map((o) => o.description).join('. ') + '.',
    });
  }

  const faqSchema = triageFaqItems.length > 0 ? getFAQPageSchema(triageFaqItems) : null;

  // Bottom line summary
  const bottomLineSummary = `Most cases of ${titleLower} in babies can be managed at home with monitoring.${red.length > 0 ? ` Seek emergency care if you notice ${red[0].title.toLowerCase()}.` : ''} When in doubt, call your pediatrician.`;

  return (
    <article className="mx-auto max-w-lg px-4 py-6 sm:py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Breadcrumbs
        items={[
          { label: "Symptom Checker", href: "/triage" },
          { label: tree.title },
        ]}
      />

      <h1 className="text-xl font-bold text-foreground flex items-center gap-2 mt-4">
        <span aria-hidden="true">{tree.icon}</span>
        {tree.title}
      </h1>

      <p className="text-sm text-muted leading-relaxed mt-2 mb-4">
        {tree.description}
      </p>

      <div className="mb-2">
        <MedicalReviewAttribution
          sources={['AAP', 'CDC']}
        />
      </div>
      <div className="mb-5">
        <LastReviewed date="2026-07-01" />
      </div>

      <KeyTakeaways takeaways={takeaways} />

      <TriageWizard tree={tree} />

      <StaticTriageSummary tree={tree} />

      <TriageMatrix tree={tree} />

      {triageFaqItems.length > 0 && (
        <div className="mt-8">
          <FAQSection items={triageFaqItems} />
        </div>
      )}

      <BottomLine summary={bottomLineSummary} />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>
    </article>
  );
}
