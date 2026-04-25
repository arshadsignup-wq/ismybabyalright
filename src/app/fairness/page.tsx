"use client";

import Link from "next/link";
import { useEvents } from "@/lib/useStorage";
import FairnessView from "@/components/fairness/FairnessView";

export default function FairnessPage() {
  const { events } = useEvents();

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
        <h1 className="text-xl font-bold text-foreground">Fairness View</h1>
      </div>

      <FairnessView events={events} />

      <p className="text-xs text-muted text-center leading-relaxed">
        All data stays on your device. This tool works best when multiple
        caregivers each set their name when logging events.
      </p>
    </div>
  );
}
