import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { allConcerns } from "@/data/concerns";

export const metadata: Metadata = {
  title: "Common Concerns",
  description:
    "Evidence-based answers to common baby development concerns. Learn when it's normal, when to mention it, and when to act now.",
};

export default function ConcernsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Concerns" }]} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1>Common Concerns</h1>
        <p className="text-muted text-lg mb-8 max-w-2xl">
          Quick, evidence-based answers to the questions parents search for at
          2am. Each page tells you what&apos;s normal, what to watch, and when to
          call your doctor.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allConcerns.map((concern) => (
            <Link
              key={concern.slug}
              href={`/concerns/${concern.slug}`}
              className="card flex flex-col p-5 hover:border-primary hover:shadow-md transition-all no-underline group"
            >
              <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {concern.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed line-clamp-3">
                {concern.quickAnswer}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
