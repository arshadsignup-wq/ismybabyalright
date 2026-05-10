"use client";

import { useState, useCallback } from "react";
import {
  type Contraction,
  calculateStats,
  formatSeconds,
  LABOR_PHASES,
  WHEN_TO_GO_TO_HOSPITAL,
} from "@/data/contraction-timer/data";

let idCounter = 0;

export default function ContractionTimer() {
  const [contractions, setContractions] = useState<Contraction[]>([]);
  const [activeStart, setActiveStart] = useState<number | null>(null);

  const handleStartStop = useCallback(() => {
    if (activeStart !== null) {
      // Stop current contraction
      const endTime = Date.now();
      const newContraction: Contraction = {
        id: `c-${++idCounter}`,
        startTime: activeStart,
        endTime,
      };
      setContractions((prev) => [newContraction, ...prev]);
      setActiveStart(null);
    } else {
      // Start new contraction
      setActiveStart(Date.now());
    }
  }, [activeStart]);

  const handleReset = () => {
    setContractions([]);
    setActiveStart(null);
  };

  const stats = contractions.length >= 2 ? calculateStats(contractions) : null;

  const isActive = activeStart !== null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Contraction Timer
        </h1>
        <p className="mt-2 text-muted">
          Time your contractions to know when it&apos;s time to head to the hospital.
          Track duration and frequency with the 5-1-1 rule.
        </p>
      </div>

      {/* Timer button */}
      <div className="rounded-2xl border border-card-border bg-card p-6 text-center">
        <button
          onClick={handleStartStop}
          className={`h-32 w-32 rounded-full text-white font-bold text-lg transition-all cursor-pointer shadow-lg ${
            isActive
              ? "bg-red-500 hover:bg-red-600 animate-pulse"
              : "bg-primary hover:bg-primary/90"
          }`}
        >
          {isActive ? "STOP" : "START"}
        </button>
        <p className="mt-3 text-sm text-muted">
          {isActive
            ? "Tap STOP when the contraction ends"
            : "Tap START when a contraction begins"}
        </p>
        {contractions.length > 0 && (
          <button
            onClick={handleReset}
            className="mt-2 text-xs text-muted underline cursor-pointer hover:text-foreground"
          >
            Reset all
          </button>
        )}
      </div>

      {/* Stats */}
      {stats && (
        <div className="rounded-2xl border-2 border-primary/30 bg-primary-light p-4 sm:p-5">
          <h2 className="text-lg font-bold text-foreground mb-3">Summary</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-muted">Avg Duration</p>
              <p className="text-lg font-bold text-foreground">
                {formatSeconds(stats.avgDurationSec)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted">Avg Interval</p>
              <p className="text-lg font-bold text-foreground">
                {formatSeconds(stats.avgIntervalSec)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted">Contractions</p>
              <p className="text-lg font-bold text-foreground">{stats.count}</p>
            </div>
          </div>
          {stats.avgDurationSec >= 60 && stats.avgIntervalSec > 0 && stats.avgIntervalSec <= 300 && (
            <div className="mt-3 rounded-xl bg-red-100 dark:bg-red-950/40 px-3 py-2 text-center">
              <p className="text-sm font-bold text-red-800 dark:text-red-300">
                5-1-1 pattern detected — consider heading to the hospital!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Contraction log */}
      {contractions.length > 0 && (
        <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
          <h2 className="mb-3 text-lg font-bold text-foreground">Contraction Log</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left py-2 text-xs font-semibold text-muted">#</th>
                  <th className="text-left py-2 text-xs font-semibold text-muted">Time</th>
                  <th className="text-left py-2 text-xs font-semibold text-muted">Duration</th>
                  <th className="text-left py-2 text-xs font-semibold text-muted">Interval</th>
                </tr>
              </thead>
              <tbody>
                {contractions.map((c, i) => {
                  const durationSec = c.endTime
                    ? Math.round((c.endTime - c.startTime) / 1000)
                    : 0;
                  const interval =
                    i < contractions.length - 1
                      ? Math.round(
                          (c.startTime - contractions[i + 1].startTime) / 1000
                        )
                      : null;
                  return (
                    <tr key={c.id} className="border-b border-card-border last:border-0">
                      <td className="py-2 text-muted">{contractions.length - i}</td>
                      <td className="py-2 text-foreground">
                        {new Date(c.startTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        })}
                      </td>
                      <td className="py-2 font-semibold text-foreground">
                        {formatSeconds(durationSec)}
                      </td>
                      <td className="py-2 text-muted">
                        {interval !== null ? formatSeconds(interval) : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Labor phases */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Stages of Labor</h2>
        <div className="space-y-3">
          {LABOR_PHASES.map((phase) => (
            <div key={phase.name} className="p-3 rounded-xl bg-background">
              <p className="text-sm font-bold text-foreground">{phase.name}</p>
              <p className="text-xs text-muted mt-0.5">
                Duration: {phase.contractionDuration} &middot; Every {phase.contractionInterval}
              </p>
              <p className="text-xs text-muted mt-1">{phase.description}</p>
              <p className="text-xs text-primary font-medium mt-1">{phase.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to go */}
      <div className="rounded-2xl border-2 border-red-200 bg-red-50 dark:border-red-500/30 dark:bg-red-950/20 p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-red-800 dark:text-red-300">When to Go to the Hospital</h2>
        <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
          {WHEN_TO_GO_TO_HOSPITAL.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-0.5 shrink-0" aria-hidden="true">&#x2022;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a href="https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins" target="_blank" rel="noopener noreferrer" className="underline text-primary">ACOG — How to Tell When Labor Begins</a>
          </li>
          <li>
            <a href="https://www.marchofdimes.org/find-support/topics/birth/contractions-and-signs-of-labor" target="_blank" rel="noopener noreferrer" className="underline text-primary">March of Dimes — Signs of Labor</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
