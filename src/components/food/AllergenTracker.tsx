"use client";

import { useState, useCallback } from "react";
import { allergenGroups } from "@/data/food/allergens";
import type { AllergenRecord } from "@/data/food/types";

const ALLERGEN_STORAGE_KEY = "imba_allergens";

function loadAllergenRecords(): AllergenRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ALLERGEN_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAllergenRecords(records: AllergenRecord[]) {
  localStorage.setItem(ALLERGEN_STORAGE_KEY, JSON.stringify(records));
}

const statusLabels = {
  "not-started": { label: "Not Started", color: "text-muted bg-card-alt border-card-border" },
  introducing: { label: "Introducing", color: "text-monitor-foreground bg-monitor-light border-monitor-border" },
  passed: { label: "Passed", color: "text-safe-foreground bg-safe-light border-safe-border" },
  reaction: { label: "Reaction", color: "text-concern-foreground bg-concern-light border-concern-border" },
};

export default function AllergenTracker() {
  const [records, setRecords] = useState<AllergenRecord[]>(loadAllergenRecords);

  const getRecord = useCallback(
    (allergenId: string) =>
      records.find((r) => r.allergenId === allergenId) ?? {
        allergenId,
        status: "not-started" as const,
      },
    [records]
  );

  function cycleStatus(allergenId: string) {
    const current = getRecord(allergenId);
    const order: AllergenRecord["status"][] = [
      "not-started",
      "introducing",
      "passed",
      "reaction",
    ];
    const nextIdx = (order.indexOf(current.status) + 1) % order.length;
    const nextStatus = order[nextIdx];

    setRecords((prev) => {
      const filtered = prev.filter((r) => r.allergenId !== allergenId);
      const updated = [
        ...filtered,
        {
          allergenId,
          status: nextStatus,
          dateStarted:
            nextStatus === "introducing"
              ? new Date().toISOString().split("T")[0]
              : current.dateStarted,
        },
      ];
      saveAllergenRecords(updated);
      return updated;
    });
  }

  const passedCount = records.filter((r) => r.status === "passed").length;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-foreground">
          Top 9 Allergens
        </h2>
        <span className="text-sm text-muted">
          {passedCount}/9 cleared
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {allergenGroups.map((group) => {
          const record = getRecord(group.id);
          const status = statusLabels[record.status];

          return (
            <details key={group.id} className="card p-0 overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer min-h-[44px]">
                <div className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden="true">{group.emoji}</span>
                  <span className="text-sm font-bold text-foreground">{group.name}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    cycleStatus(group.id);
                  }}
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border cursor-pointer ${status.color}`}
                  aria-label={`${group.name}: ${status.label}. Tap to change status.`}
                >
                  {status.label}
                </button>
              </summary>
              <div className="px-4 pb-4 border-t border-card-border pt-3">
                <p className="text-sm text-muted mb-3">{group.introGuidance}</p>

                <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
                  Introduction protocol
                </h4>
                <ul className="flex flex-col gap-1 mb-3">
                  {group.protocol.map((step, i) => (
                    <li key={i} className="text-sm text-foreground flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                      {step}
                    </li>
                  ))}
                </ul>

                <h4 className="text-xs font-semibold text-concern uppercase tracking-wide mb-1.5">
                  Watch for
                </h4>
                <ul className="flex flex-col gap-1">
                  {group.reactionSigns.map((sign, i) => (
                    <li key={i} className="text-sm text-foreground flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-concern" aria-hidden="true" />
                      {sign}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-muted mt-3">
                  Common foods: {group.foods.join(", ")}
                </p>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
