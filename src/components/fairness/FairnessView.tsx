"use client";

import type { TrackerEvent } from "@/data/tracker/types";
import { computeLaborSummary } from "@/lib/fairness";

interface FairnessViewProps {
  events: TrackerEvent[];
}

export default function FairnessView({ events }: FairnessViewProps) {
  const summary = computeLaborSummary(events, 7);

  if (summary.entries.length < 2) {
    return (
      <div className="card p-5 text-center">
        <h2 className="text-base font-bold text-foreground mb-2">
          Invisible Labor View
        </h2>
        <p className="text-sm text-muted leading-relaxed">
          This view shows who&apos;s handling what when multiple caregivers are
          logging events. To use it, have each caregiver set their name when
          logging events.
        </p>
        <p className="text-xs text-muted mt-3">
          Currently only one caregiver is logging, so there&apos;s nothing to compare.
        </p>
      </div>
    );
  }

  const totalEvents = summary.entries.reduce((s, e) => s + e.totalEvents, 0);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <h2 className="text-base font-bold text-foreground">
          Who&apos;s Handling What
        </h2>
        <p className="text-xs text-muted mt-1">{summary.period}</p>
      </div>

      {/* Bar chart */}
      <div className="card p-4">
        <div className="flex flex-col gap-3">
          {summary.entries.map((entry) => {
            const pct = totalEvents > 0
              ? Math.round((entry.totalEvents / totalEvents) * 100)
              : 0;
            return (
              <div key={entry.caregiver}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-foreground">
                    {entry.caregiver}
                  </span>
                  <span className="text-sm text-muted tabular-nums">
                    {pct}% ({entry.totalEvents} events)
                  </span>
                </div>
                <div className="w-full h-3 bg-card-alt rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="flex gap-3 mt-1 text-xs text-muted">
                  <span>{entry.feeds} feeds</span>
                  <span>{entry.diapers} diapers</span>
                  <span>{entry.sleepSessions} sleep</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gentle framing */}
      <div className="card-alt p-4 text-sm text-muted leading-relaxed">
        <p>
          This isn&apos;t about keeping score. It&apos;s about making invisible work
          visible so you can have honest conversations about workload.
          Both caregivers matter. Both caregivers are tired.
        </p>
      </div>
    </div>
  );
}
