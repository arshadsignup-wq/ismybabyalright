import { notFound } from "next/navigation";
import { allChecklists, getChecklist } from "@/data/checklists/checklists";
import { getBreadcrumbSchema } from "@/lib/seo";
import CrisisChecklist from "@/components/checklists/CrisisChecklist";
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

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="flex items-center gap-3 mb-5">
        <Link
          href="/checklists"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to checklists"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span aria-hidden="true">{checklist.emoji}</span>
            {checklist.title}
          </h1>
          <p className="text-sm text-muted">{checklist.description}</p>
        </div>
      </div>

      <CrisisChecklist checklist={checklist} />
    </div>
  );
}
