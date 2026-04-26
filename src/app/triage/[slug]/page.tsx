import { notFound } from "next/navigation";
import { allTriageTrees, getTriageTree } from "@/data/triage";
import { getBreadcrumbSchema } from "@/lib/seo";
import TriageWizard from "@/components/triage/TriageWizard";
import Link from "next/link";

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

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="flex items-center gap-3 mb-5">
        <Link
          href="/triage"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to symptom checker"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span aria-hidden="true">{tree.icon}</span>
            {tree.title}
          </h1>
        </div>
      </div>

      <TriageWizard tree={tree} />
    </div>
  );
}
