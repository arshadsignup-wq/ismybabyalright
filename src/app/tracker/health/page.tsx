"use client";

import { useState } from "react";
import Link from "next/link";
import { useProfile, useEvents, useSettings } from "@/lib/useStorage";
import { getEventsToday } from "@/lib/tracker";
import MedicationLogger from "@/components/tracker/MedicationLogger";
import TemperatureLogger from "@/components/tracker/TemperatureLogger";
import TimelineEvent from "@/components/tracker/TimelineEvent";

export default function HealthPage() {
  const { profile } = useProfile();
  const { events, addEvent } = useEvents();
  const { settings } = useSettings();
  const [openLogger, setOpenLogger] = useState<"medication" | "temperature" | null>(null);

  if (!profile) {
    return (
      <div className="mx-auto max-w-lg px-4 py-10 text-center">
        <p className="text-muted mb-4">Set up your baby&apos;s profile first.</p>
        <Link href="/tracker" className="text-primary font-semibold hover:underline">
          Go to Tracker
        </Link>
      </div>
    );
  }

  const healthEvents = getEventsToday(events).filter(
    (e) => e.type === "medication" || e.type === "temperature"
  );

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Link
          href="/tracker"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to tracker"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <h1 className="text-xl font-bold text-foreground">Health</h1>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setOpenLogger(openLogger === "medication" ? null : "medication")}
          className={`card p-4 flex flex-col items-center gap-2 cursor-pointer hover:border-primary transition-colors min-h-[5rem] ${openLogger === "medication" ? "border-primary bg-primary-light" : ""}`}
        >
          <span className="text-2xl" aria-hidden="true">💊</span>
          <span className="text-sm font-semibold text-foreground">Log Medication</span>
        </button>
        <button
          onClick={() => setOpenLogger(openLogger === "temperature" ? null : "temperature")}
          className={`card p-4 flex flex-col items-center gap-2 cursor-pointer hover:border-primary transition-colors min-h-[5rem] ${openLogger === "temperature" ? "border-primary bg-primary-light" : ""}`}
        >
          <span className="text-2xl" aria-hidden="true">🌡️</span>
          <span className="text-sm font-semibold text-foreground">Log Temperature</span>
        </button>
      </div>

      {/* Logger panels */}
      {openLogger === "medication" && (
        <MedicationLogger
          babyId={profile.id}
          onLog={addEvent}
          onClose={() => setOpenLogger(null)}
        />
      )}
      {openLogger === "temperature" && (
        <TemperatureLogger
          babyId={profile.id}
          temperatureUnit={settings.temperatureUnit}
          onLog={addEvent}
          onClose={() => setOpenLogger(null)}
        />
      )}

      {/* Links to triage & vaccines */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          href="/triage"
          className="card p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors no-underline min-h-[5rem]"
        >
          <span className="text-2xl" aria-hidden="true">🩺</span>
          <span className="text-sm font-semibold text-primary">Symptom Checker</span>
        </Link>
        <Link
          href="/vaccines"
          className="card p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors no-underline min-h-[5rem]"
        >
          <span className="text-2xl" aria-hidden="true">💉</span>
          <span className="text-sm font-semibold text-primary">Vaccines</span>
        </Link>
      </div>

      {/* Today's health events */}
      {healthEvents.length > 0 && (
        <div className="card p-4">
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-2">
            Today&apos;s Health Log
          </h3>
          {healthEvents.map((event) => (
            <TimelineEvent
              key={event.id}
              event={event}
              timeFormat={settings.timeFormat}
            />
          ))}
        </div>
      )}
    </div>
  );
}
