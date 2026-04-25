"use client";

import Link from "next/link";
import AmIOkayCheckIn from "@/components/mental-health/AmIOkayCheckIn";

export default function CheckInPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Link
          href="/mental-health"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to mental health"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-foreground">Am I Okay?</h1>
          <p className="text-sm text-muted">A gentle check-in for any parent or caregiver</p>
        </div>
      </div>

      <AmIOkayCheckIn />
    </div>
  );
}
