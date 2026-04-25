"use client";

import { useState } from "react";
import type { Vaccine, VaccineRecord } from "@/data/vaccines/types";

interface VaccineCardProps {
  vaccine: Vaccine;
  records: VaccineRecord[];
  ageMonths: number;
  highlightDose?: number;
  onToggleDose: (vaccineId: string, doseNumber: number) => void;
}

export default function VaccineCard({
  vaccine,
  records,
  ageMonths,
  highlightDose,
  onToggleDose,
}: VaccineCardProps) {
  const [expanded, setExpanded] = useState(false);

  const allDone = vaccine.doses.every((d) =>
    records.some((r) => r.doseNumber === d.doseNumber)
  );

  return (
    <div
      className={`card p-4 ${allDone ? "opacity-70" : ""}`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between text-left cursor-pointer min-h-[44px]"
        aria-expanded={expanded}
      >
        <div>
          <span className="text-sm font-bold text-foreground">
            {vaccine.abbreviation}
          </span>
          <span className="text-sm text-muted ml-2">{vaccine.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted">
            {records.length}/{vaccine.doses.length}
          </span>
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-card-border">
          <p className="text-sm text-muted mb-3">{vaccine.description}</p>

          {/* Doses */}
          <div className="flex flex-col gap-2 mb-4">
            {vaccine.doses.map((dose) => {
              const isGiven = records.some(
                (r) => r.doseNumber === dose.doseNumber
              );
              const isDue =
                dose.ageMonths <= ageMonths && !isGiven;
              const isHighlighted = dose.doseNumber === highlightDose;

              return (
                <button
                  key={dose.doseNumber}
                  onClick={() => onToggleDose(vaccine.id, dose.doseNumber)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border-2 text-left cursor-pointer min-h-[44px] transition-all ${
                    isGiven
                      ? "border-safe-border bg-safe-light"
                      : isDue || isHighlighted
                        ? "border-monitor-border bg-monitor-light"
                        : "border-card-border bg-card"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
                      isGiven
                        ? "border-safe bg-safe text-white"
                        : "border-muted-light"
                    }`}
                  >
                    {isGiven && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-foreground">
                      Dose {dose.doseNumber}  -  {dose.ageLabel}
                    </span>
                    {dose.notes && (
                      <p className="text-xs text-muted">{dose.notes}</p>
                    )}
                  </div>
                  {isDue && !isGiven && (
                    <span className="text-xs font-semibold text-monitor px-2 py-0.5 rounded-full bg-monitor-light border border-monitor-border">
                      Due
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Side effects */}
          <details className="text-sm">
            <summary className="font-medium text-muted cursor-pointer min-h-[44px] flex items-center">
              Common side effects & when to worry
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
      )}
    </div>
  );
}
