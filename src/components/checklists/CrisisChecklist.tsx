"use client";

import { useState } from "react";
import type { CrisisChecklist as CrisisChecklistType } from "@/data/checklists/types";

interface CrisisChecklistProps {
  checklist: CrisisChecklistType;
}

export default function CrisisChecklist({ checklist }: CrisisChecklistProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  const progress = checklist.items.length > 0
    ? Math.round((checked.size / checklist.items.length) * 100)
    : 0;

  return (
    <div className="flex flex-col gap-4">
      {/* Progress bar */}
      <div>
        <div className="flex items-center justify-between text-sm mb-1">
          <span className="text-muted">{checked.size} of {checklist.items.length}</span>
          <span className="font-semibold text-foreground">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-card-alt rounded-full overflow-hidden">
          <div
            className="h-full bg-safe rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-1">
        {checklist.items.map((item) => {
          const isDone = checked.has(item.id);
          return (
            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`flex items-start gap-3 px-4 py-3 rounded-lg text-left transition-all cursor-pointer min-h-[44px] ${
                isDone
                  ? "bg-safe-light border border-safe-border"
                  : "bg-card border border-card-border hover:border-primary"
              }`}
            >
              <span
                className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  isDone
                    ? "border-safe bg-safe text-white"
                    : "border-muted-light"
                }`}
              >
                {isDone && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              <div className="flex-1">
                <span className={`text-sm font-medium ${isDone ? "line-through text-muted" : "text-foreground"}`}>
                  {item.text}
                </span>
                {item.detail && (
                  <p className="text-xs text-muted mt-0.5">{item.detail}</p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Tips */}
      {checklist.tips && checklist.tips.length > 0 && (
        <div className="card-alt p-4">
          <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">
            Tips
          </h4>
          <ul className="flex flex-col gap-1.5">
            {checklist.tips.map((tip, i) => (
              <li key={i} className="text-sm text-foreground flex items-start gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Print */}
      <button
        onClick={() => window.print()}
        className="w-full px-4 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-card-alt transition-colors cursor-pointer no-print"
      >
        Print This Checklist
      </button>
    </div>
  );
}
