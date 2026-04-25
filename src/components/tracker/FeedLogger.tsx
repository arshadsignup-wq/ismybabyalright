"use client";

import { useState } from "react";
import type { TrackerEvent, FeedType } from "@/data/tracker/types";
import { generateId } from "@/lib/tracker";

interface FeedLoggerProps {
  babyId: string;
  onLog: (event: TrackerEvent) => void;
  onClose: () => void;
  volumeUnit: "oz" | "ml";
}

const feedOptions: { type: FeedType; label: string; icon: string }[] = [
  { type: "breast-left", label: "Left", icon: "L" },
  { type: "breast-right", label: "Right", icon: "R" },
  { type: "bottle", label: "Bottle", icon: "🍼" },
  { type: "solids", label: "Solids", icon: "🥄" },
];

export default function FeedLogger({
  babyId,
  onLog,
  onClose,
  volumeUnit,
}: FeedLoggerProps) {
  const [feedType, setFeedType] = useState<FeedType | null>(null);
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");

  function handleLog() {
    if (!feedType) return;

    const event: TrackerEvent = {
      id: generateId(),
      babyId,
      type: "feed",
      timestamp: new Date().toISOString(),
      feed: {
        feedType,
        amountOz:
          feedType === "bottle" && amount ? parseFloat(amount) : undefined,
        durationMinutes:
          (feedType === "breast-left" || feedType === "breast-right") && duration
            ? parseInt(duration, 10)
            : undefined,
      },
    };
    onLog(event);
    onClose();
  }

  return (
    <div className="card p-5" role="dialog" aria-label="Log a feeding">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">Log Feed</h3>
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

      {/* Feed type selection */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {feedOptions.map((opt) => (
          <button
            key={opt.type}
            onClick={() => setFeedType(opt.type)}
            className={`
              flex flex-col items-center justify-center gap-1 p-3
              rounded-lg border-2 text-sm font-medium
              transition-all cursor-pointer min-h-[3.5rem]
              ${
                feedType === opt.type
                  ? "border-primary bg-primary-light text-primary"
                  : "border-card-border bg-card text-foreground hover:border-primary/40"
              }
            `}
          >
            <span className="text-lg" aria-hidden="true">{opt.icon}</span>
            <span>{opt.label}</span>
          </button>
        ))}
      </div>

      {/* Conditional fields */}
      {feedType === "bottle" && (
        <div className="mb-4">
          <label htmlFor="feed-amount" className="block text-sm font-medium text-muted mb-1">
            Amount ({volumeUnit})
          </label>
          <input
            id="feed-amount"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.5"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={`e.g. 4`}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      )}

      {(feedType === "breast-left" || feedType === "breast-right") && (
        <div className="mb-4">
          <label htmlFor="feed-duration" className="block text-sm font-medium text-muted mb-1">
            Duration (minutes)
          </label>
          <input
            id="feed-duration"
            type="number"
            inputMode="numeric"
            min="0"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="e.g. 15"
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      )}

      <button
        onClick={handleLog}
        disabled={!feedType}
        className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        Log Feed
      </button>
    </div>
  );
}
