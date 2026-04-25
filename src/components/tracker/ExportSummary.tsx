"use client";

import { useMemo, useState } from "react";
import type { TrackerEvent } from "@/data/tracker/types";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

interface DaySummary {
  date: string;
  feeds: number;
  breastMinutes: number;
  bottleOz: number;
  solidsMeals: number;
  sleepSessions: number;
  totalSleepMin: number;
  wetDiapers: number;
  dirtyDiapers: number;
  temps: { value: number; unit: string; time: string }[];
  meds: { name: string; dosage?: string; time: string }[];
  notes: string[];
}

function getDaySummaries(events: TrackerEvent[], days: number): DaySummary[] {
  const now = new Date();
  const summaries: DaySummary[] = [];

  for (let i = 0; i < days; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dayStr = date.toISOString().split("T")[0];
    const dateLabel = formatDate(date.toISOString());

    const dayEvents = events.filter(
      (e) => e.timestamp.split("T")[0] === dayStr
    );

    const summary: DaySummary = {
      date: dateLabel,
      feeds: 0,
      breastMinutes: 0,
      bottleOz: 0,
      solidsMeals: 0,
      sleepSessions: 0,
      totalSleepMin: 0,
      wetDiapers: 0,
      dirtyDiapers: 0,
      temps: [],
      meds: [],
      notes: [],
    };

    for (const e of dayEvents) {
      switch (e.type) {
        case "feed":
          summary.feeds++;
          if (e.feed) {
            if (e.feed.feedType === "bottle" && e.feed.amountOz)
              summary.bottleOz += e.feed.amountOz;
            if (
              (e.feed.feedType === "breast-left" ||
                e.feed.feedType === "breast-right") &&
              e.feed.durationMinutes
            )
              summary.breastMinutes += e.feed.durationMinutes;
            if (e.feed.feedType === "solids") summary.solidsMeals++;
          }
          break;
        case "sleep":
          summary.sleepSessions++;
          if (e.sleep?.durationMinutes)
            summary.totalSleepMin += e.sleep.durationMinutes;
          break;
        case "diaper":
          if (e.diaper) {
            if (e.diaper.diaperType === "wet" || e.diaper.diaperType === "both")
              summary.wetDiapers++;
            if (
              e.diaper.diaperType === "dirty" ||
              e.diaper.diaperType === "both"
            )
              summary.dirtyDiapers++;
          }
          break;
        case "temperature":
          if (e.temperature)
            summary.temps.push({
              value: e.temperature.value,
              unit: e.temperature.unit,
              time: formatTime(e.timestamp),
            });
          break;
        case "medication":
          if (e.medication)
            summary.meds.push({
              name: e.medication.name,
              dosage: e.medication.dosage,
              time: formatTime(e.timestamp),
            });
          break;
        case "note":
          if (e.note) summary.notes.push(e.note);
          break;
      }
    }

    summaries.push(summary);
  }

  return summaries;
}

function formatMinutes(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h === 0) return `${m}m`;
  return m === 0 ? `${h}h` : `${h}h ${m}m`;
}

export default function ExportSummary({
  events,
  babyName,
}: {
  events: TrackerEvent[];
  babyName: string;
}) {
  const [open, setOpen] = useState(false);
  const summaries = useMemo(() => getDaySummaries(events, 7), [events]);

  const handlePrint = () => {
    window.print();
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-center gap-2 rounded-xl border border-[#E8E2D9] bg-white px-4 py-3 text-sm font-bold text-primary hover:bg-primary-light transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
        Print Summary for Doctor
      </button>
    );
  }

  return (
    <div className="rounded-xl border border-[#E8E2D9] bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E8E2D9] px-5 py-3">
        <h3 className="text-sm font-bold text-foreground">
          7-Day Summary for {babyName}
        </h3>
        <div className="flex gap-2 print:hidden">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white hover:bg-primary-hover transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Print
          </button>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-muted hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      {/* Summary table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-[#E8E2D9] bg-[#FAF8F5]">
              <th className="px-3 py-2 text-left font-bold text-muted">Day</th>
              <th className="px-3 py-2 text-center font-bold text-muted">
                Feeds
              </th>
              <th className="px-3 py-2 text-center font-bold text-muted">
                Breast
              </th>
              <th className="px-3 py-2 text-center font-bold text-muted">
                Bottle
              </th>
              <th className="px-3 py-2 text-center font-bold text-muted">
                Sleep
              </th>
              <th className="px-3 py-2 text-center font-bold text-muted">
                Wet
              </th>
              <th className="px-3 py-2 text-center font-bold text-muted">
                Dirty
              </th>
              <th className="px-3 py-2 text-left font-bold text-muted">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {summaries.map((s, i) => (
              <tr
                key={i}
                className="border-b border-[#E8E2D9] last:border-b-0"
              >
                <td className="px-3 py-2 font-medium text-foreground whitespace-nowrap">
                  {s.date}
                </td>
                <td className="px-3 py-2 text-center text-foreground">
                  {s.feeds || " - "}
                </td>
                <td className="px-3 py-2 text-center text-foreground">
                  {s.breastMinutes ? formatMinutes(s.breastMinutes) : " - "}
                </td>
                <td className="px-3 py-2 text-center text-foreground">
                  {s.bottleOz ? `${s.bottleOz} oz` : " - "}
                </td>
                <td className="px-3 py-2 text-center text-foreground">
                  {s.totalSleepMin ? formatMinutes(s.totalSleepMin) : " - "}
                </td>
                <td className="px-3 py-2 text-center text-foreground">
                  {s.wetDiapers || " - "}
                </td>
                <td className="px-3 py-2 text-center text-foreground">
                  {s.dirtyDiapers || " - "}
                </td>
                <td className="px-3 py-2 text-foreground">
                  {s.temps.length > 0 && (
                    <span className="block">
                      Temp:{" "}
                      {s.temps
                        .map((t) => `${t.value}°${t.unit} @ ${t.time}`)
                        .join(", ")}
                    </span>
                  )}
                  {s.meds.length > 0 && (
                    <span className="block">
                      Meds:{" "}
                      {s.meds
                        .map(
                          (m) =>
                            `${m.name}${m.dosage ? ` ${m.dosage}` : ""} @ ${m.time}`
                        )
                        .join(", ")}
                    </span>
                  )}
                  {s.notes.length > 0 && (
                    <span className="block">{s.notes.join("; ")}</span>
                  )}
                  {s.temps.length === 0 &&
                    s.meds.length === 0 &&
                    s.notes.length === 0 &&
                    " - "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-3 text-[10px] text-muted border-t border-[#E8E2D9] print:block">
        Generated from ismybabyalright.com &middot;{" "}
        {new Date().toLocaleDateString()}
      </div>
    </div>
  );
}
