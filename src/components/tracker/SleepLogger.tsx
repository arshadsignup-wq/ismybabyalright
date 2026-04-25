"use client";

import { useState, useEffect, useRef } from "react";
import type { TrackerEvent } from "@/data/tracker/types";
import { generateId, formatDuration, isCurrentlySleeping } from "@/lib/tracker";

interface SleepLoggerProps {
  babyId: string;
  events: TrackerEvent[];
  onLog: (event: TrackerEvent) => void;
  onUpdate: (id: string, updates: Partial<TrackerEvent>) => void;
  onClose: () => void;
}

export default function SleepLogger({
  babyId,
  events,
  onLog,
  onUpdate,
  onClose,
}: SleepLoggerProps) {
  const activeSleep = isCurrentlySleeping(events);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    if (activeSleep) {
      const start = new Date(activeSleep.timestamp).getTime();
      const update = () => setElapsed(Math.floor((Date.now() - start) / 60000));
      update();
      intervalRef.current = setInterval(update, 15000);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [activeSleep]);

  function handleStartSleep() {
    const event: TrackerEvent = {
      id: generateId(),
      babyId,
      type: "sleep",
      timestamp: new Date().toISOString(),
      sleep: {},
    };
    onLog(event);
  }

  function handleEndSleep() {
    if (!activeSleep) return;
    const endTime = new Date().toISOString();
    const startTime = new Date(activeSleep.timestamp).getTime();
    const durationMinutes = Math.round((Date.now() - startTime) / 60000);
    onUpdate(activeSleep.id, {
      sleep: { endTime, durationMinutes },
    });
    onClose();
  }

  return (
    <div className="card p-5" role="dialog" aria-label="Log sleep">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">
          {activeSleep ? "Sleep in Progress" : "Start Sleep"}
        </h3>
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

      {activeSleep ? (
        <div className="flex flex-col items-center gap-5">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary tabular-nums" aria-live="polite">
              {formatDuration(elapsed)}
            </p>
            <p className="text-sm text-muted mt-1">sleeping</p>
          </div>

          <button
            onClick={handleEndSleep}
            className="w-full px-4 py-3 rounded-lg bg-monitor text-white font-semibold hover:bg-monitor/90 transition-colors cursor-pointer"
          >
            Wake Up
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <p className="text-muted text-center">
            Tap to start tracking sleep. Tap again when your baby wakes up.
          </p>

          <button
            onClick={handleStartSleep}
            className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
          >
            Start Sleep
          </button>
        </div>
      )}
    </div>
  );
}
