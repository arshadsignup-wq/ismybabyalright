"use client";

import type { TrackerEvent, DiaperType } from "@/data/tracker/types";
import { generateId } from "@/lib/tracker";

interface DiaperLoggerProps {
  babyId: string;
  onLog: (event: TrackerEvent) => void;
  onClose: () => void;
}

const diaperOptions: { type: DiaperType; label: string; emoji: string }[] = [
  { type: "wet", label: "Wet", emoji: "💧" },
  { type: "dirty", label: "Dirty", emoji: "💩" },
  { type: "both", label: "Both", emoji: "💧💩" },
];

export default function DiaperLogger({
  babyId,
  onLog,
  onClose,
}: DiaperLoggerProps) {
  function handleLog(diaperType: DiaperType) {
    const event: TrackerEvent = {
      id: generateId(),
      babyId,
      type: "diaper",
      timestamp: new Date().toISOString(),
      diaper: { diaperType },
    };
    onLog(event);
    onClose();
  }

  return (
    <div className="card p-5" role="dialog" aria-label="Log a diaper">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">Log Diaper</h3>
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

      <p className="text-sm text-muted mb-4">Tap to log instantly.</p>

      <div className="grid grid-cols-3 gap-3">
        {diaperOptions.map((opt) => (
          <button
            key={opt.type}
            onClick={() => handleLog(opt.type)}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 border-card-border bg-card text-foreground hover:border-primary hover:bg-primary-light transition-all cursor-pointer min-h-[5rem] active:scale-95"
          >
            <span className="text-2xl" aria-hidden="true">{opt.emoji}</span>
            <span className="text-sm font-semibold">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
