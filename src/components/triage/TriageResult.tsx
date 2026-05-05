"use client";

import Link from "next/link";
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

      {/* Next steps */}
      <div className="card p-4">
        <p className="text-sm font-semibold text-foreground mb-3">What to do next:</p>
        <div className="flex flex-col gap-2">
          {(outcome.level === "red" || outcome.level === "yellow") && (
            <Link
              href="/doctor-visits"
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-card-border text-sm font-medium text-primary hover:bg-primary-light transition-colors no-underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
              Prepare for your doctor call
            </Link>
          )}
          <Link
            href="/concerns"
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-card-border text-sm font-medium text-primary hover:bg-primary-light transition-colors no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Search related concerns
          </Link>
          <Link
            href="/tracker"
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-card-border text-sm font-medium text-primary hover:bg-primary-light transition-colors no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
            Log symptoms in tracker
          </Link>
        </div>
      </div>
    </div>
  );
}
