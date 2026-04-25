"use client";

import { useState } from "react";
import type { TrackerEvent } from "@/data/tracker/types";
import { generateId } from "@/lib/tracker";

interface MedicationLoggerProps {
  babyId: string;
  onLog: (event: TrackerEvent) => void;
  onClose: () => void;
}

export default function MedicationLogger({
  babyId,
  onLog,
  onClose,
}: MedicationLoggerProps) {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");

  function handleLog() {
    if (!name.trim()) return;

    const event: TrackerEvent = {
      id: generateId(),
      babyId,
      type: "medication",
      timestamp: new Date().toISOString(),
      medication: {
        name: name.trim(),
        dosage: dosage.trim() || undefined,
      },
    };
    onLog(event);
    onClose();
  }

  return (
    <div className="card p-5" role="dialog" aria-label="Log medication">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">Log Medication</h3>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-9 h-9 rounded-lg text-muted hover:bg-card-alt transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="med-name" className="block text-sm font-medium text-muted mb-1">
            Medication name
          </label>
          <input
            id="med-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Infant Tylenol"
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="med-dosage" className="block text-sm font-medium text-muted mb-1">
            Dosage <span className="text-muted-light">(optional)</span>
          </label>
          <input
            id="med-dosage"
            type="text"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            placeholder="e.g. 2.5 mL"
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          onClick={handleLog}
          disabled={!name.trim()}
          className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Log Medication
        </button>
      </div>
    </div>
  );
}
