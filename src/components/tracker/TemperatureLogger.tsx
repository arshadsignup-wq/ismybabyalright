"use client";

import { useState } from "react";
import type { TrackerEvent } from "@/data/tracker/types";
import { generateId } from "@/lib/tracker";

interface TemperatureLoggerProps {
  babyId: string;
  temperatureUnit: "F" | "C";
  onLog: (event: TrackerEvent) => void;
  onClose: () => void;
}

export default function TemperatureLogger({
  babyId,
  temperatureUnit,
  onLog,
  onClose,
}: TemperatureLoggerProps) {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState<"F" | "C">(temperatureUnit);

  function handleLog() {
    const temp = parseFloat(value);
    if (isNaN(temp)) return;

    const event: TrackerEvent = {
      id: generateId(),
      babyId,
      type: "temperature",
      timestamp: new Date().toISOString(),
      temperature: { value: temp, unit },
    };
    onLog(event);
    onClose();
  }

  const tempF = unit === "C" && value ? (parseFloat(value) * 9) / 5 + 32 : parseFloat(value);
  const isFever = !isNaN(tempF) && tempF >= 100.4;

  return (
    <div className="card p-5" role="dialog" aria-label="Log temperature">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">Log Temperature</h3>
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

      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <div className="flex-1">
            <label htmlFor="temp-value" className="block text-sm font-medium text-muted mb-1">
              Temperature
            </label>
            <input
              id="temp-value"
              type="number"
              inputMode="decimal"
              step="0.1"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={unit === "F" ? "98.6" : "37.0"}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="temp-unit-select" className="block text-sm font-medium text-muted mb-1">
              Unit
            </label>
            <select
              id="temp-unit-select"
              value={unit}
              onChange={(e) => setUnit(e.target.value as "F" | "C")}
              className="px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="F">°F</option>
              <option value="C">°C</option>
            </select>
          </div>
        </div>

        {isFever && (
          <div className="tier-concern p-3 text-sm">
            This is considered a fever (100.4°F / 38°C or above).
            Consider using the{" "}
            <a href="/triage/fever" className="font-semibold underline">
              fever triage tool
            </a>.
          </div>
        )}

        <button
          onClick={handleLog}
          disabled={!value || isNaN(parseFloat(value))}
          className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Log Temperature
        </button>
      </div>
    </div>
  );
}
