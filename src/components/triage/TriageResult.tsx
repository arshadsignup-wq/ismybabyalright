"use client";

import type { TriageOutcome } from "@/data/triage/types";
import CallScript from "./CallScript";

interface TriageResultProps {
  outcome: TriageOutcome;
}

const levelConfig = {
  green: {
    containerClass: "tier-safe",
    badgeClass: "tier-safe-badge",
    icon: "✓",
  },
  yellow: {
    containerClass: "tier-monitor",
    badgeClass: "tier-monitor-badge",
    icon: "⚠",
  },
  red: {
    containerClass: "tier-concern",
    badgeClass: "tier-concern-badge",
    icon: "⚠",
  },
};

export default function TriageResult({ outcome }: TriageResultProps) {
  const config = levelConfig[outcome.level];

  return (
    <div className="flex flex-col gap-4">
      <div className={`${config.containerClass} p-5`} role="alert">
        <div className="flex items-center gap-2 mb-3">
          <span className={config.badgeClass}>
            <span aria-hidden="true">{config.icon}</span>
            {outcome.title}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-4">{outcome.description}</p>

        <h4 className="text-sm font-semibold mb-2">What to do:</h4>
        <ul className="flex flex-col gap-2" role="list">
          {outcome.actions.map((action, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
              <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-current opacity-50" aria-hidden="true" />
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </div>

      {outcome.callScript && <CallScript script={outcome.callScript} />}
    </div>
  );
}
