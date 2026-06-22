import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ConcernsListing from "@/components/concerns/ConcernsListing";
import { allConcerns } from "@/data/concerns";

const PAGE_SIZE = 24;
const concernCount = `${allConcerns.length}+`;

export const metadata: Metadata = {
  title: `${concernCount} Common Baby Concerns - Evidence-Based Answers`,
  description:
    `Evidence-based answers to over ${allConcerns.length} common baby concerns — from rashes and poop to sleep, feeding, and milestones. Know when it's normal and when to call the doctor.`,
  alternates: {
    canonical: "/concerns",
  },
  openGraph: {
    title: `${concernCount} Common Baby Concerns - Evidence-Based Answers | Is My Baby Alright?`,
    description:
      `Evidence-based answers to over ${allConcerns.length} common baby concerns — from rashes and poop to sleep, feeding, and milestones. Know when it's normal and when to call the doctor.`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.ismybabyalright.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Concerns",
      item: "https://www.ismybabyalright.com/concerns",
    },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${concernCount} Common Baby Concerns - Evidence-Based Answers`,
  description:
    `Evidence-based answers to over ${allConcerns.length} common baby concerns — from rashes and poop to sleep, feeding, and milestones.`,
  url: "https://www.ismybabyalright.com/concerns",
  isPartOf: {
    "@type": "WebSite",
    name: "Is My Baby Alright?",
    url: "https://www.ismybabyalright.com",
  },
};

interface ConcernsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function ConcernsPage({ searchParams }: ConcernsPageProps) {
  const params = await searchParams;
  const totalPages = Math.ceil(allConcerns.length / PAGE_SIZE);
  const currentPage = Math.max(1, Math.min(parseInt(params.page || "1", 10) || 1, totalPages));

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Concerns" }]} />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Hero */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Common Baby Concerns
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted text-base sm:text-lg">
            {allConcerns.length}+ evidence-based guides for the questions parents
            search at 2am. Each tells you what&apos;s normal, what to watch, and
            when to call your doctor.
          </p>
          <div className="mt-4 inline-flex items-center gap-2.5">
            <span className="source-badge source-badge-cdc">CDC</span>
            <span className="source-badge source-badge-who">WHO</span>
            <span className="source-badge source-badge-aap">AAP</span>
          </div>
        </div>

        <ConcernsListing concerns={allConcerns} initialPage={currentPage} />

        {/* Server-rendered pagination nav for search engine crawlers */}
        <nav aria-label="Browse all concern pages" className="mt-10 pt-6 border-t border-border">
          <h2 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3 text-center">
            Browse All Pages
          </h2>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {Array.from({ length: totalPages }, (_, i) => {
              const pageNum = i + 1;
              const isCurrent = pageNum === currentPage;
              return (
                <Link
                  key={pageNum}
                  href={pageNum === 1 ? "/concerns" : `/concerns?page=${pageNum}`}
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-md text-xs font-medium transition-colors no-underline ${
                    isCurrent
                      ? "bg-primary text-white"
                      : "bg-white border border-[#E8E2D9] text-muted hover:border-primary hover:text-primary"
                  }`}
                  aria-label={`Page ${pageNum}`}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {pageNum}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
