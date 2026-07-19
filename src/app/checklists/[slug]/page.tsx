import { notFound } from "next/navigation";
import { allChecklists, getChecklist } from "@/data/checklists/checklists";
import { getBreadcrumbSchema, getWebPageSchema, getFAQPageSchema } from "@/lib/seo";
import CrisisChecklist from "@/components/checklists/CrisisChecklist";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import KeyTakeaways from "@/components/shared/KeyTakeaways";
import FAQSection from "@/components/shared/FAQSection";
import BottomLine from "@/components/shared/BottomLine";
import LastReviewed from "@/components/shared/LastReviewed";
import EditorialTrustBanner from "@/components/shared/EditorialTrustBanner";
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import Link from "next/link";

export function generateStaticParams() {
  return allChecklists.map((cl) => ({ slug: cl.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const checklist = getChecklist(slug);
  if (!checklist) return {};
  return {
    title: `${checklist.title} Checklist`,
    description: checklist.description,
    alternates: {
      canonical: `/checklists/${slug}`,
    },
    openGraph: {
      title: `${checklist.title} Checklist | Is My Baby Alright?`,
      description: checklist.description,
    },
  };
}

export default async function ChecklistSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const checklist = getChecklist(slug);
  if (!checklist) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Checklists", url: "/checklists" },
    { name: checklist.title },
  ]);

  const webPageSchema = getWebPageSchema({
    name: `${checklist.title} Checklist`,
    description: checklist.description,
    path: `/checklists/${slug}`,
  });

  // Auto-generate key takeaways from checklist items
  const takeaways = checklist.items.slice(0, 4).map((item) => item.text);
  if (checklist.tips && checklist.tips.length > 0) {
    takeaways.push(checklist.tips[0]);
  }

  // Auto-generate FAQ from checklist data
  const faqItems = [
    {
      question: `What should I do for ${checklist.title.toLowerCase()}?`,
      answer: checklist.items.slice(0, 4).map((item) => item.text).join('. ') + '.',
    },
    {
      question: `What is the ${checklist.title.toLowerCase()} checklist?`,
      answer: `${checklist.description} This checklist includes ${checklist.items.length} key steps to help you stay prepared and organized.`,
    },
  ];
  if (checklist.tips && checklist.tips.length > 0) {
    faqItems.push({
      question: `Any tips for ${checklist.title.toLowerCase()}?`,
      answer: checklist.tips.join('. ') + '.',
    });
  }

  const faqSchema = getFAQPageSchema(faqItems);

  const bottomLineSummary = `${checklist.description} Use this checklist to stay organized and reduce stress. You can check off items as you go — your progress is saved on your device.`;

  return (
    <article className="mx-auto max-w-lg px-4 py-6 sm:py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Checklists", href: "/checklists" },
          { label: checklist.title },
        ]}
      />

      <div className="mt-4 mb-5">
        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
          <span aria-hidden="true">{checklist.emoji}</span>
          {checklist.title}
        </h1>
        <p className="text-sm text-muted mt-1">{checklist.description}</p>
      </div>

      <div className="mb-2">
        <MedicalReviewAttribution
          sources={['AAP', 'CDC']}
        />
      </div>
      <div className="mb-5">
        <LastReviewed date="2026-07-01" />
      </div>

      <KeyTakeaways takeaways={takeaways} />

      <CrisisChecklist checklist={checklist} />

      <div className="mt-8">
        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary={bottomLineSummary} />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>
    </article>
  );
}
