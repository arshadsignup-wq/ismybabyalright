import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ConcernsListing from "@/components/concerns/ConcernsListing";
import { allConcerns } from "@/data/concerns";

export const metadata: Metadata = {
  title: "325+ Common Baby Concerns | Evidence-Based Answers",
  description:
    "Evidence-based answers to over 325 common baby development concerns  -  from walking and talking to rashes, poop, sleep, and feeding. Know when it's normal, when to mention it, and when to act now.",
  alternates: {
    canonical: "/concerns",
  },
  openGraph: {
    title: "325+ Common Baby Concerns | Is My Baby Alright?",
    description:
      "Evidence-based answers to over 325 common baby concerns. Know when it's normal, when to mention it, and when to act now.",
  },
};

export default function ConcernsPage() {
  return (
    <div>
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
