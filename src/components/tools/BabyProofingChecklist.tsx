"use client";

import { useState, useEffect } from "react";
import { BABY_PROOFING_PHASES } from "@/data/baby-proofing/data";

const STORAGE_KEY = "baby-proofing-checked";

export default function BabyProofingChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setChecked(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  const toggleItem = (id: string) => {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const totalItems = BABY_PROOFING_PHASES.reduce(
    (sum, p) => sum + p.rooms.reduce((s, r) => s + r.items.length, 0),
    0
  );
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Baby-Proofing Checklist
        </h1>
        <p className="mt-2 text-muted">
          Room-by-room, age-by-age checklist to keep your home safe. Based on AAP,
          CPSC, and Safe Kids Worldwide guidelines.
        </p>
      </div>

      {/* Progress */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-semibold text-foreground">Your Progress</p>
          <p className="text-sm font-bold text-primary">
            {checkedCount} / {totalItems} completed
          </p>
        </div>
        <div className="h-3 rounded-full bg-background overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        {checkedCount > 0 && (
          <button
            onClick={() => {
              setChecked({});
              localStorage.removeItem(STORAGE_KEY);
            }}
            className="mt-2 text-xs text-muted underline cursor-pointer hover:text-foreground"
          >
            Reset all
          </button>
        )}
      </div>

      {/* Phases */}
      <div className="space-y-4">
        {BABY_PROOFING_PHASES.map((phase, pi) => {
          const phaseItems = phase.rooms.flatMap((r) => r.items);
          const phaseChecked = phaseItems.filter((item) => checked[item.id]).length;
          const isExpanded = expandedPhase === pi;

          return (
            <div key={pi} className="rounded-2xl border border-card-border bg-card overflow-hidden">
              <button
                onClick={() => setExpandedPhase(isExpanded ? null : pi)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer hover:bg-primary-light/50 transition-colors"
              >
                <div>
                  <p className="text-base font-bold text-foreground">{phase.phase}</p>
                  <p className="text-xs text-muted">{phase.ageRange}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-muted">
                    {phaseChecked}/{phaseItems.length}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-muted transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 space-y-4">
                  <p className="text-sm text-muted">{phase.description}</p>
                  {phase.rooms.map((room, ri) => (
                    <div key={ri}>
                      <h3 className="text-sm font-bold text-foreground mb-2">{room.room}</h3>
                      <div className="space-y-2">
                        {room.items.map((item) => {
                          const isChecked = checked[item.id] || false;
                          return (
                            <label
                              key={item.id}
                              className={`flex gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                                isChecked
                                  ? "bg-primary-light/50"
                                  : "bg-background hover:bg-primary-light/30"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleItem(item.id)}
                                className="mt-0.5 h-4 w-4 rounded accent-primary shrink-0"
                              />
                              <div className="flex-1">
                                <p className={`text-sm font-medium ${isChecked ? "text-muted line-through" : "text-foreground"}`}>
                                  {item.task}
                                  {item.priority === "essential" && (
                                    <span className="ml-1.5 text-xs font-semibold text-red-600 dark:text-red-400">Essential</span>
                                  )}
                                </p>
                                <p className="text-xs text-muted mt-0.5">{item.why}</p>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a href="https://www.healthychildren.org/English/safety-prevention/at-home/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="underline text-primary">AAP — Home Safety</a>
          </li>
          <li>
            <a href="https://www.safekids.org/safetytips/field_risks/home-safety" target="_blank" rel="noopener noreferrer" className="underline text-primary">Safe Kids Worldwide — Home Safety</a>
          </li>
          <li>
            <a href="https://www.cpsc.gov/Safety-Education/Safety-Guides/Kids-and-Babies" target="_blank" rel="noopener noreferrer" className="underline text-primary">CPSC — Kids and Babies Safety</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
