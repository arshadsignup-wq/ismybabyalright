import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Age-Based Advice - What to Know at Every Age",
  description:
    "Select your baby's age to see personalized guidance on milestones, common concerns, food readiness, sleep needs, and upcoming vaccines. Evidence-based advice from 0 to 36 months.",
};

const ageGroupLabels: Record<string, number[]> = {
  "Newborn": [0],
  "1 - 3 Months": [1, 2, 3],
  "4 - 6 Months": [4, 5, 6],
  "7 - 9 Months": [7, 8, 9],
  "10 - 12 Months": [10, 11, 12],
  "13 - 18 Months": [13, 14, 15, 16, 17, 18],
  "19 - 24 Months": [19, 20, 21, 22, 23, 24],
  "25 - 36 Months": [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
};

export default function AgeAdvicePage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Age-Based Advice" }]} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h1>Age-Based Advice</h1>
        <p className="text-muted text-lg mb-8 max-w-2xl">
          Select your baby&apos;s age to see what&apos;s happening with
          milestones, common concerns, food readiness, sleep needs, and
          upcoming vaccines - all in one place.
        </p>

        <div className="space-y-8">
          {Object.entries(ageGroupLabels).map(([groupLabel, monthsInGroup]) => (
            <section key={groupLabel}>
              <h2 className="text-lg font-bold text-primary mb-3">
                {groupLabel}
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {monthsInGroup.map((month) => (
                  <Link
                    key={month}
                    href={`/age-advice/${month}`}
                    className="card flex flex-col items-center justify-center text-center p-4 min-h-[90px] hover:border-primary hover:shadow-md transition-all no-underline group"
                  >
                    <span className="text-xl font-bold text-primary group-hover:text-primary-hover transition-colors">
                      {month === 0 ? "0" : month}
                    </span>
                    <span className="text-xs text-muted mt-1">
                      {month === 0
                        ? "newborn"
                        : month === 1
                          ? "month"
                          : "months"}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 card-alt p-6 text-center">
          <p className="text-muted text-sm">
            Every baby develops at their own pace. The information here is based
            on typical ranges from the CDC, WHO, and AAP. If something feels
            off, trust your instincts and talk to your pediatrician.
          </p>
        </div>
      </div>
    </div>
  );
}
