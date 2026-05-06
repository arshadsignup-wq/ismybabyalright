import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ConcernsListing from "@/components/concerns/ConcernsListing";
import { allConcerns } from "@/data/concerns";

export const metadata: Metadata = {
  title: "680+ Common Baby Concerns - Evidence-Based Answers",
  description:
    "Evidence-based answers to over 680 common baby concerns — from rashes and poop to sleep, feeding, and milestones. Know when it's normal and when to call the doctor.",
  alternates: {
    canonical: "/concerns",
  },
  openGraph: {
    title: "680+ Common Baby Concerns - Evidence-Based Answers | Is My Baby Alright?",
    description:
      "Evidence-based answers to over 680 common baby concerns — from rashes and poop to sleep, feeding, and milestones. Know when it's normal and when to call the doctor.",
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
  name: "680+ Common Baby Concerns - Evidence-Based Answers",
  description:
    "Evidence-based answers to over 680 common baby concerns — from rashes and poop to sleep, feeding, and milestones.",
  url: "https://www.ismybabyalright.com/concerns",
  isPartOf: {
    "@type": "WebSite",
    name: "Is My Baby Alright?",
    url: "https://www.ismybabyalright.com",
  },
};

export default function ConcernsPage() {
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

        <ConcernsListing concerns={allConcerns} />
      </div>
    </div>
  );
}
