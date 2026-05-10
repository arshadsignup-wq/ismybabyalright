"use client";

import { useState } from "react";
import {
  PUMPING_SCHEDULES,
  PUMPING_MILESTONES,
  PUMPING_SUPPLY_TIPS,
  calculateDailyPumpingTime,
} from "@/data/pumping-schedule/data";

export default function PumpingScheduleCalculator() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selected = selectedIndex !== null ? PUMPING_SCHEDULES[selectedIndex] : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Pumping Schedule Calculator
        </h1>
        <p className="mt-2 text-muted">
          Get a recommended pumping schedule based on your situation — exclusively
          pumping, pumping at work, or combo feeding. Based on lactation consultant
          guidelines.
        </p>
      </div>

      {/* Situation selector */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <label className="mb-3 block text-sm font-semibold text-foreground">
          Select Your Situation
        </label>
        <div className="space-y-2">
          {PUMPING_SCHEDULES.map((s, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`w-full text-left p-3 rounded-xl transition-colors cursor-pointer ${
                selectedIndex === i
                  ? "bg-primary-light border-2 border-primary/30"
                  : "bg-background border border-card-border hover:bg-primary-light/50"
              }`}
            >
              <p className="text-sm font-semibold text-foreground">{s.situation}</p>
              <p className="text-xs text-muted mt-0.5">{s.description.slice(0, 80)}...</p>
            </button>
          ))}
        </div>
      </div>

      {/* Selected schedule details */}
      {selected && (
        <div className="space-y-4">
          <div className="rounded-2xl border-2 border-primary/30 bg-primary-light p-5">
            <h2 className="text-lg font-bold text-foreground mb-3">{selected.situation}</h2>
            <p className="text-sm text-muted mb-4">{selected.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="rounded-xl bg-card p-3">
                <p className="text-xs text-muted">Sessions/Day</p>
                <p className="text-xl font-bold text-primary">{selected.sessionsPerDay}</p>
              </div>
              <div className="rounded-xl bg-card p-3">
                <p className="text-xs text-muted">Min/Session</p>
                <p className="text-xl font-bold text-foreground">{selected.minutesPerSession}</p>
              </div>
              <div className="rounded-xl bg-card p-3">
                <p className="text-xs text-muted">Every</p>
                <p className="text-xl font-bold text-foreground">
                  {selected.intervalHours > 0 ? `${selected.intervalHours}h` : "As needed"}
                </p>
              </div>
              <div className="rounded-xl bg-card p-3">
                <p className="text-xs text-muted">Total/Day</p>
                <p className="text-xl font-bold text-foreground">
                  {calculateDailyPumpingTime(selected)} min
                </p>
              </div>
            </div>
          </div>

          {/* Schedule tips */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
            <h2 className="mb-3 text-lg font-bold text-foreground">Tips for This Schedule</h2>
            <ul className="space-y-2 text-sm text-muted">
              {selected.tips.map((tip, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Sample schedule */}
          {selected.intervalHours > 0 && (
            <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
              <h2 className="mb-3 text-lg font-bold text-foreground">Sample Daily Schedule</h2>
              <div className="space-y-2">
                {Array.from({ length: selected.sessionsPerDay }).map((_, i) => {
                  const startHour = 6 + i * selected.intervalHours;
                  const hour = Math.floor(startHour) % 24;
                  const min = Math.round((startHour % 1) * 60);
                  const ampm = hour >= 12 ? "PM" : "AM";
                  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
                  return (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-xl bg-background">
                      <span className="text-sm font-bold text-primary w-20">
                        {displayHour}:{min.toString().padStart(2, "0")} {ampm}
                      </span>
                      <span className="text-sm text-muted">
                        Pump for {selected.minutesPerSession} minutes
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-muted mt-2">
                * This is a sample starting at 6 AM. Adjust to fit your schedule.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Milestones */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Pumping Milestones</h2>
        <div className="space-y-3">
          {PUMPING_MILESTONES.map((m, i) => (
            <div key={i} className="p-3 rounded-xl bg-background">
              <div className="flex justify-between items-start">
                <p className="text-sm font-bold text-foreground">{m.week}</p>
              </div>
              <p className="text-sm text-muted mt-0.5">{m.milestone}</p>
              <p className="text-xs text-primary font-medium mt-1">{m.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Supply tips */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Milk Supply Tips</h2>
        <ul className="space-y-2 text-sm text-muted">
          {PUMPING_SUPPLY_TIPS.map((tip, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a href="https://kellymom.com/bf/pumpingmoms/pumping/pumping-schedule/" target="_blank" rel="noopener noreferrer" className="underline text-primary">KellyMom — Pumping Schedule</a>
          </li>
          <li>
            <a href="https://www.llli.org/breastfeeding-info/pumping-milk/" target="_blank" rel="noopener noreferrer" className="underline text-primary">La Leche League — Pumping Milk</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
