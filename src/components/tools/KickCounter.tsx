"use client";

import { useState, useCallback } from "react";
import {
  KICK_COUNTING_GUIDELINES,
  WHEN_TO_COUNT,
  WHAT_COUNTS_AS_MOVEMENT,
  WHEN_TO_CALL_PROVIDER,
  KICK_COUNTING_TIPS,
  MOVEMENT_BY_TRIMESTER,
  formatDuration,
} from "@/data/kick-counter/data";

export default function KickCounter() {
  const [kicks, setKicks] = useState<number[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [sessionComplete, setSessionComplete] = useState(false);

  const kickCount = kicks.length;
  const target = KICK_COUNTING_GUIDELINES.targetKicks;
  const elapsed = startTime ? Date.now() - startTime : 0;

  const handleStart = () => {
    setKicks([]);
    setStartTime(Date.now());
    setSessionComplete(false);
  };

  const handleKick = useCallback(() => {
    if (!startTime || sessionComplete) return;
    const newKicks = [...kicks, Date.now()];
    setKicks(newKicks);
    if (newKicks.length >= target) {
      setSessionComplete(true);
    }
  }, [startTime, sessionComplete, kicks, target]);

  const handleReset = () => {
    setKicks([]);
    setStartTime(null);
    setSessionComplete(false);
  };

  const isActive = startTime !== null && !sessionComplete;
  const totalDuration = sessionComplete && kicks.length >= target
    ? kicks[kicks.length - 1] - startTime!
    : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Baby Kick Counter
        </h1>
        <p className="mt-2 text-muted">
          Count your baby&apos;s movements during pregnancy. Track how long it
          takes to feel {target} kicks — a key indicator of baby&apos;s wellbeing.
        </p>
      </div>

      {/* Counter */}
      <div className="rounded-2xl border border-card-border bg-card p-6 text-center">
        {!startTime ? (
          <>
            <p className="text-sm text-muted mb-4">
              Find a comfortable position and tap Start when you&apos;re ready to begin counting.
            </p>
            <button
              onClick={handleStart}
              className="h-28 w-28 rounded-full bg-primary text-white font-bold text-lg cursor-pointer shadow-lg hover:bg-primary/90 transition-all"
            >
              START
            </button>
          </>
        ) : sessionComplete ? (
          <>
            <p className="text-sm font-semibold text-primary mb-2">Session Complete!</p>
            <p className="text-4xl font-bold text-foreground mb-1">{kickCount} kicks</p>
            <p className="text-lg text-muted">
              in {formatDuration(totalDuration)}
            </p>
            {totalDuration <= 120 * 60 * 1000 ? (
              <div className="mt-3 rounded-xl bg-green-100 dark:bg-green-950/40 px-3 py-2">
                <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                  Great! {target} movements within 2 hours is reassuring.
                </p>
              </div>
            ) : (
              <div className="mt-3 rounded-xl bg-amber-100 dark:bg-amber-950/40 px-3 py-2">
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
                  It took longer than 2 hours. Contact your provider to discuss.
                </p>
              </div>
            )}
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl bg-primary text-white font-medium text-sm cursor-pointer hover:bg-primary/90 transition-colors"
            >
              Start New Session
            </button>
          </>
        ) : (
          <>
            <p className="text-sm text-muted mb-2">Tap the button each time you feel a movement</p>
            <p className="text-5xl font-bold text-foreground mb-1">{kickCount}</p>
            <p className="text-sm text-muted mb-4">
              of {target} kicks &middot; {formatDuration(elapsed)}
            </p>
            <button
              onClick={handleKick}
              className="h-32 w-32 rounded-full bg-primary text-white font-bold text-lg cursor-pointer shadow-lg hover:bg-primary/90 transition-all active:scale-95"
            >
              KICK!
            </button>
            <div className="mt-4 flex justify-center gap-1">
              {Array.from({ length: target }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i < kickCount ? "bg-primary" : "bg-card-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleReset}
              className="mt-3 text-xs text-muted underline cursor-pointer hover:text-foreground"
            >
              Reset
            </button>
          </>
        )}
      </div>

      {/* When to count */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">When & How to Count</h2>
        <ul className="space-y-2 text-sm text-muted">
          {WHEN_TO_COUNT.map((tip, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* What counts */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">What Counts as a Movement?</h2>
        <div className="space-y-2">
          {WHAT_COUNTS_AS_MOVEMENT.map((m, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-xl bg-background">
              <span className={`text-sm font-bold ${m.counts ? "text-primary" : "text-red-500"}`}>
                {m.counts ? "✓" : "✗"}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{m.type}</p>
                <p className="text-xs text-muted">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Movement by trimester */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Movement by Trimester</h2>
        <div className="space-y-3">
          {MOVEMENT_BY_TRIMESTER.map((t, i) => (
            <div key={i} className="p-3 rounded-xl bg-background">
              <p className="text-sm font-bold text-foreground">{t.trimester}</p>
              <p className="text-xs text-muted mt-0.5">{t.description}</p>
              <p className="text-xs text-primary font-medium mt-1">{t.whatToExpect}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to call */}
      <div className="rounded-2xl border-2 border-red-200 bg-red-50 dark:border-red-500/30 dark:bg-red-950/20 p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-red-800 dark:text-red-300">When to Call Your Provider</h2>
        <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
          {WHEN_TO_CALL_PROVIDER.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-0.5 shrink-0" aria-hidden="true">&#x2022;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tips */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Tips for Counting</h2>
        <ul className="space-y-2 text-sm text-muted">
          {KICK_COUNTING_TIPS.map((tip, i) => (
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
            <a href="https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins" target="_blank" rel="noopener noreferrer" className="underline text-primary">ACOG — Fetal Movement Counting</a>
          </li>
          <li>
            <a href="https://www.countthekicks.org/" target="_blank" rel="noopener noreferrer" className="underline text-primary">Count the Kicks</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
