import type { Metadata } from "next";
import Link from "next/link";
import { allTriageTrees } from "@/data/triage";

export const metadata: Metadata = {
  title: "Symptom Checker",
  description: "Should I call the doctor? Free evidence-based triage tool for common baby symptoms.",
  alternates: {
    canonical: "/triage",
  },
  openGraph: {
    title: "Baby Symptom Checker | Is My Baby Alright?",
    description:
      "Should I call the doctor? Free evidence-based triage tool for common baby symptoms.",
  },
};

export default function TriagePage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-8 sm:py-12">
      <div className="text-center mb-8">
        <h1 className="text-foreground">Should I call the doctor?</h1>
        <p className="text-muted mt-2 leading-relaxed">
          Answer a few questions about your baby&apos;s symptoms and get clear
          guidance  -  including what to say when you call.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {allTriageTrees.map((tree) => (
          <Link
            key={tree.slug}
            href={`/triage/${tree.slug}`}
            className="card p-5 flex items-center gap-4 hover:border-primary transition-colors no-underline"
          >
            <span className="text-3xl" aria-hidden="true">{tree.icon}</span>
            <div>
              <span className="text-base font-bold text-foreground">{tree.title}</span>
              <p className="text-sm text-muted mt-0.5">{tree.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <p className="text-xs text-muted text-center mt-8 leading-relaxed">
        This tool is not a substitute for medical advice. When in doubt, always
        call your pediatrician or go to the emergency room.
      </p>
    </div>
  );
}
