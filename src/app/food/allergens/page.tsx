"use client";

import Link from "next/link";
import AllergenTracker from "@/components/food/AllergenTracker";

export default function AllergensPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Link
          href="/food"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to food"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-foreground">Allergen Tracker</h1>
          <p className="text-sm text-muted">Track your baby&apos;s progress through the top 9 allergens</p>
        </div>
      </div>

      <div className="tier-safe p-3 text-sm">
        Current guidelines recommend early introduction of allergens (from 4-6
        months) to reduce allergy risk. Tap a status badge to cycle through:
        Not Started → Introducing → Passed → Reaction.
      </div>

      <AllergenTracker />

      <p className="text-xs text-muted text-center leading-relaxed">
        Based on AAP and LEAP study guidelines. Discuss allergen introduction
        timing with your pediatrician, especially if your baby has severe eczema
        or a family history of food allergies. All data stays on your device.
      </p>
    </div>
  );
}
