import type { Metadata } from "next";
import Link from "next/link";
import { allChecklists } from "@/data/checklists/checklists";

export const metadata: Metadata = {
  title: "Parenting Checklists",
  description: "Printable checklists for common parenting situations  -  first fever, leaving the house, blowouts, and more.",
  alternates: {
    canonical: "/checklists",
  },
  openGraph: {
    title: "Parenting Checklists | Is My Baby Alright?",
    description:
      "Printable checklists for common parenting situations - first fever, leaving the house, blowouts, and more.",
  },
};

export default function ChecklistsPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-8 sm:py-12">
      <div className="text-center mb-8">
        <h1 className="text-foreground">Parenting Checklists</h1>
        <p className="text-muted mt-2 leading-relaxed">
          Printable, one-tap checklists for the moments when you need a plan.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {allChecklists.map((cl) => (
          <Link
            key={cl.slug}
            href={`/checklists/${cl.slug}`}
            className="card p-5 flex items-center gap-4 hover:border-primary transition-colors no-underline"
          >
            <span className="text-3xl" aria-hidden="true">{cl.emoji}</span>
            <div>
              <span className="text-base font-bold text-foreground">{cl.title}</span>
              <p className="text-sm text-muted mt-0.5">{cl.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
