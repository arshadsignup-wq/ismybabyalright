import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { allCheckpoints } from "@/data/milestones";

export const metadata: Metadata = {
  title: "Milestones by Age",
  description:
    "Browse evidence-based developmental milestones by age, from 1 month to 36 months. Based on CDC, WHO, and AAP guidelines.",
};

export default function MilestonesPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Milestones" }]} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1>Milestones by Age</h1>
        <p className="text-muted text-lg mb-8 max-w-2xl">
          Select your child&apos;s age to see what to expect for gross motor,
          fine motor, language, social-emotional, and cognitive development.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {allCheckpoints.map((checkpoint) => (
            <Link
              key={checkpoint.id}
              href={`/milestones/${checkpoint.id}`}
              className="card flex flex-col items-center justify-center text-center p-6 min-h-[120px] hover:border-primary hover:shadow-md transition-all no-underline group"
            >
              <span className="text-2xl font-bold text-primary group-hover:text-primary-hover transition-colors">
                {checkpoint.ageInMonths}
              </span>
              <span className="text-sm text-muted mt-1">
                {checkpoint.ageInMonths === 1 ? "month" : "months"}
              </span>
              <span className="text-sm font-medium text-foreground mt-2">
                {checkpoint.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
