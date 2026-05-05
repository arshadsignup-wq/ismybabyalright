"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { useProfile } from "@/lib/useStorage";
import { getAgeInMonthsFromDate } from "@/lib/tracker";
import type { VaccineRecord } from "@/data/vaccines/types";
import VaccineSchedule from "@/components/vaccines/VaccineSchedule";
import { cdcVaccineSchedule } from "@/data/vaccines/cdc-schedule";

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
      <div className="mx-auto max-w-lg px-4 py-6 sm:py-8">
        <div className="mb-5">
          <h1 className="text-xl font-bold text-foreground">CDC Vaccine Schedule</h1>
          <p className="text-sm text-muted mt-1">
            Recommended immunization schedule for children ages 0-6 years.
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          {cdcVaccineSchedule.map((vaccine) => (
            <details key={vaccine.id} className="card p-4">
              <summary className="flex items-center justify-between cursor-pointer min-h-[44px] list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <span className="text-sm font-bold text-foreground">
                    {vaccine.abbreviation}
                  </span>
                  <span className="text-sm text-muted ml-2">{vaccine.name}</span>
                </div>
                <span className="text-xs text-muted">
                  {vaccine.doses.length} dose{vaccine.doses.length !== 1 ? "s" : ""}
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-card-border">
                <p className="text-sm text-muted mb-3">{vaccine.description}</p>
                <div className="flex flex-col gap-2 mb-4">
                  {vaccine.doses.map((dose) => (
                    <div
                      key={dose.doseNumber}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-card-border bg-card text-left"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                        {dose.doseNumber}
                      </span>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-foreground">
                          {dose.ageLabel}
                        </span>
                        {dose.notes && (
                          <p className="text-xs text-muted">{dose.notes}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <details className="text-sm">
                  <summary className="font-medium text-muted cursor-pointer min-h-[44px] flex items-center">
                    Common side effects &amp; when to worry
                  </summary>
                  <div className="mt-2 space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-muted uppercase mb-1">Common (normal):</p>
                      <ul className="text-sm text-foreground list-disc list-inside">
                        {vaccine.commonSideEffects.map((se, i) => (
                          <li key={i}>{se}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-concern uppercase mb-1">When to call:</p>
                      <ul className="text-sm text-foreground list-disc list-inside">
                        {vaccine.whenToWorry.map((w, i) => (
                          <li key={i}>{w}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </details>
          ))}
        </div>

        <div className="card p-4 text-center">
          <p className="text-sm text-foreground font-medium mb-2">
            Want to track your baby&apos;s vaccines?
          </p>
          <Link
            href="/tracker"
            className="inline-flex px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors"
          >
            Set Up Profile
          </Link>
        </div>

        <p className="text-xs text-muted text-center mt-6 leading-relaxed">
          Based on the CDC Recommended Immunization Schedule.
          Your pediatrician may adjust the timing for your baby.
        </p>
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
