"use client";

import Link from "next/link";
import { useProfile } from "@/lib/useStorage";
import { getAgeInMonthsFromDate } from "@/lib/tracker";
import FoodSearch from "@/components/food/FoodSearch";
import ChokingEducation from "@/components/food/ChokingEducation";

export default function FoodPage() {
  const { profile } = useProfile();
  const ageMonths = profile ? getAgeInMonthsFromDate(profile.birthDate) : 6;

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold text-foreground">Food Introduction</h1>
        <p className="text-sm text-muted mt-1">
          Age-appropriate prep guides for first foods
          {profile ? ` (${profile.name}, ${ageMonths}mo)` : ""}.
          {" "}Free  -  no paywall.
        </p>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          href="/food/allergens"
          className="card p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors no-underline min-h-[5rem]"
        >
          <span className="text-2xl" aria-hidden="true">⚠️</span>
          <span className="text-sm font-semibold text-primary">Allergen Tracker</span>
        </Link>
        <button
          onClick={() => {
            document.getElementById("choking-section")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="card p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors cursor-pointer min-h-[5rem]"
        >
          <span className="text-2xl" aria-hidden="true">🚨</span>
          <span className="text-sm font-semibold text-primary">Choking Safety</span>
        </button>
      </div>

      {/* Food search/browse */}
      <section>
        <h2 className="text-base font-bold text-foreground mb-3">
          Food Guides
        </h2>
        <FoodSearch ageMonths={ageMonths} />
      </section>

      {/* Choking education */}
      <section id="choking-section">
        <h2 className="text-base font-bold text-foreground mb-3">
          Gagging vs. Choking
        </h2>
        <ChokingEducation />
      </section>

      <p className="text-xs text-muted text-center leading-relaxed pb-4">
        Based on AAP and WHO feeding guidelines. This is educational content,
        not medical advice. Discuss your baby&apos;s readiness with your pediatrician.
        All data stays on your device.
      </p>
    </div>
  );
}
