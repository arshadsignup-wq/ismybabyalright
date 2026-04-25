"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { useProfile } from "@/lib/useStorage";
import { getAgeInMonthsFromDate } from "@/lib/tracker";
import type { VaccineRecord } from "@/data/vaccines/types";
import VaccineSchedule from "@/components/vaccines/VaccineSchedule";

const VACCINE_STORAGE_KEY = "imba_vaccines";

function loadVaccineRecords(): VaccineRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(VACCINE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveVaccineRecords(records: VaccineRecord[]) {
  localStorage.setItem(VACCINE_STORAGE_KEY, JSON.stringify(records));
}

export default function VaccinesPage() {
  const { profile } = useProfile();
  const [records, setRecords] = useState<VaccineRecord[]>(loadVaccineRecords);

  const handleToggleDose = useCallback(
    (vaccineId: string, doseNumber: number) => {
      setRecords((prev) => {
        const existing = prev.find(
          (r) => r.vaccineId === vaccineId && r.doseNumber === doseNumber
        );
        let updated: VaccineRecord[];
        if (existing) {
          // Remove it (uncheck)
          updated = prev.filter(
            (r) => !(r.vaccineId === vaccineId && r.doseNumber === doseNumber)
          );
        } else {
          // Add it (check)
          updated = [
            ...prev,
            {
              vaccineId,
              doseNumber,
              dateGiven: new Date().toISOString().split("T")[0],
            },
          ];
        }
        saveVaccineRecords(updated);
        return updated;
      });
    },
    []
  );

  if (!profile) {
    return (
      <div className="mx-auto max-w-lg px-4 py-10 text-center">
        <h1 className="text-xl font-bold text-foreground mb-3">Vaccine Schedule</h1>
        <p className="text-muted mb-4">
          Set up your baby&apos;s profile first to see their personalized vaccine schedule.
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

  const ageMonths = getAgeInMonthsFromDate(profile.birthDate);

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
        <div>
          <h1 className="text-xl font-bold text-foreground">Vaccines</h1>
          <p className="text-sm text-muted">
            CDC schedule for {profile.name} ({ageMonths} months)
          </p>
        </div>
      </div>

      <VaccineSchedule
        ageMonths={ageMonths}
        records={records}
        onToggleDose={handleToggleDose}
      />

      <p className="text-xs text-muted text-center mt-6 leading-relaxed">
        Based on the CDC Recommended Immunization Schedule.
        Your pediatrician may adjust the timing for your baby.
        All data stays on your device.
      </p>
    </div>
  );
}
