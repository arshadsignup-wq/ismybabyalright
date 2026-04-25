"use client";

import { useState } from "react";
import type { TrackerEvent } from "@/data/tracker/types";
import { isCurrentlySleeping } from "@/lib/tracker";
import QuickTapButton from "./QuickTapButton";
import FeedLogger from "./FeedLogger";
import SleepLogger from "./SleepLogger";
import DiaperLogger from "./DiaperLogger";

interface QuickTapGridProps {
  babyId: string;
  events: TrackerEvent[];
  volumeUnit: "oz" | "ml";
  onLog: (event: TrackerEvent) => void;
  onUpdate: (id: string, updates: Partial<TrackerEvent>) => void;
}

type OpenPanel = "feed" | "sleep" | "diaper" | null;

// SVG icons for the quick-tap buttons
const FeedIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

const SleepIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const DiaperIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

export default function QuickTapGrid({
  babyId,
  events,
  volumeUnit,
  onLog,
  onUpdate,
}: QuickTapGridProps) {
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null);
  const isSleeping = isCurrentlySleeping(events);

  return (
    <div>
      {/* Quick-tap buttons */}
      <div className="grid grid-cols-3 gap-3">
        <QuickTapButton
          label="Feed"
          icon={FeedIcon}
          onClick={() => setOpenPanel(openPanel === "feed" ? null : "feed")}
          active={openPanel === "feed"}
        />
        <QuickTapButton
          label={isSleeping ? "Sleeping" : "Sleep"}
          icon={SleepIcon}
          onClick={() => setOpenPanel(openPanel === "sleep" ? null : "sleep")}
          color={isSleeping ? "monitor" : "primary"}
          active={openPanel === "sleep"}
        />
        <QuickTapButton
          label="Diaper"
          icon={DiaperIcon}
          onClick={() => setOpenPanel(openPanel === "diaper" ? null : "diaper")}
          active={openPanel === "diaper"}
        />
      </div>

      {/* Expanded panel */}
      {openPanel && (
        <div className="mt-4">
          {openPanel === "feed" && (
            <FeedLogger
              babyId={babyId}
              onLog={onLog}
              onClose={() => setOpenPanel(null)}
              volumeUnit={volumeUnit}
            />
          )}
          {openPanel === "sleep" && (
            <SleepLogger
              babyId={babyId}
              events={events}
              onLog={onLog}
              onUpdate={onUpdate}
              onClose={() => setOpenPanel(null)}
            />
          )}
          {openPanel === "diaper" && (
            <DiaperLogger
              babyId={babyId}
              onLog={onLog}
              onClose={() => setOpenPanel(null)}
            />
          )}
        </div>
      )}
    </div>
  );
}
