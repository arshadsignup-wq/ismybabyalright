"use client";

import Link from "next/link";
import { useProfile, useEvents } from "@/lib/useStorage";
import ShareSetup from "@/components/sharing/ShareSetup";

export default function SharingPage() {
  const { profile } = useProfile();
  const { events } = useEvents();

  if (!profile) {
    return (
      <div className="mx-auto max-w-lg px-4 py-10 text-center">
        <h1 className="text-xl font-bold text-foreground mb-3">Caregiver Sharing</h1>
        <p className="text-muted mb-4">
          Set up your baby&apos;s profile first to start sharing.
        </p>
        <Link
          href="/tracker"
          className="inline-flex px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors"
        >
          Set Up Profile
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8">
      <div className="flex items-center gap-3 mb-5">
        <Link
          href="/tracker"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to tracker"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <h1 className="text-xl font-bold text-foreground">Share with Caregiver</h1>
      </div>

      <ShareSetup
        babyName={profile.name}
        birthDate={profile.birthDate}
        events={events}
      />
    </div>
  );
}
