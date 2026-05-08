"use client";

import { useState } from "react";
import { getSleepSchedule } from "@/data/sleep-schedule/data";

export default function SleepScheduleCalculator() {
  const [ageInput, setAgeInput] = useState("");

  const ageMonths = ageInput !== "" ? parseInt(ageInput, 10) : null;
  const schedule =
    ageMonths !== null && ageMonths >= 0 ? getSleepSchedule(ageMonths) : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Baby Sleep Schedule Calculator
        </h1>
        <p className="mt-2 text-muted">
          Enter your baby&apos;s age to see recommended wake windows, nap
          schedules, total sleep needs, and suggested bedtimes.
        </p>
      </div>

      {/* Input */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <label
          htmlFor="age"
          className="mb-1.5 block text-sm font-semibold text-foreground"
        >
          Baby&apos;s age in months
        </label>
        <input
          id="age"
          type="number"
          inputMode="numeric"
          min="0"
          max="36"
          placeholder="e.g. 6"
          value={ageInput}
          onChange={(e) => setAgeInput(e.target.value)}
          className="h-11 w-full max-w-xs rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Results */}
      {schedule && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-foreground">
            Sleep Schedule for {schedule.label}
          </h2>

          {/* Overview grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard
              label="Total Sleep"
              value={`${schedule.totalSleepHoursMin}-${schedule.totalSleepHoursMax}h`}
            />
            <StatCard
              label="Night Sleep"
              value={`${schedule.nightSleepHoursMin}-${schedule.nightSleepHoursMax}h`}
            />
            <StatCard
              label="Day Sleep"
              value={`${schedule.daySleepHoursMin}-${schedule.daySleepHoursMax}h`}
            />
            <StatCard label="Naps" value={schedule.naps} />
          </div>

          {/* Details */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-muted uppercase tracking-wide">
                  Wake Window
                </p>
                <p className="text-base font-bold text-foreground mt-0.5">
                  {formatMinutes(schedule.wakeWindowMin)} &ndash;{" "}
                  {formatMinutes(schedule.wakeWindowMax)}
                </p>
                <p className="text-xs text-muted mt-1">
                  Max comfortable awake time between sleeps
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted uppercase tracking-wide">
                  Suggested Bedtime
                </p>
                <p className="text-base font-bold text-foreground mt-0.5">
                  {schedule.suggestedBedtimeStart} &ndash;{" "}
                  {schedule.suggestedBedtimeEnd}
                </p>
                <p className="text-xs text-muted mt-1">
                  Based on age-appropriate sleep needs
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted uppercase tracking-wide">
                  Avg Nap Duration
                </p>
                <p className="text-base font-bold text-foreground mt-0.5">
                  {schedule.avgNapDurationMin}-{schedule.avgNapDurationMax} min
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted uppercase tracking-wide">
                  Number of Naps
                </p>
                <p className="text-base font-bold text-foreground mt-0.5">
                  {schedule.naps}
                </p>
              </div>
            </div>
          </div>

          {/* Sample schedule */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
            <h3 className="mb-3 text-base font-bold text-foreground">
              Sleep Tips for {schedule.label}
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                Watch for sleepy cues (yawning, eye rubbing, fussiness) within the wake window of {formatMinutes(schedule.wakeWindowMin)}-{formatMinutes(schedule.wakeWindowMax)}.
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                Aim for a consistent bedtime between {schedule.suggestedBedtimeStart} and {schedule.suggestedBedtimeEnd}.
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                Create a calming pre-sleep routine: dim lights, white noise, and gentle rocking or feeding.
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                Place baby on their back for every sleep. Keep the crib free of blankets, pillows, and toys.
              </li>
              {ageMonths !== null && ageMonths < 6 && (
                <li className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                  Night wakings are normal at this age. Baby may still need nighttime feedings.
                </li>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Sources */}
      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a
              href="https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              AAP — Healthy Sleep Habits
            </a>
          </li>
          <li>
            <a
              href="https://www.sleepfoundation.org/children-and-sleep"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              National Sleep Foundation — Children and Sleep
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-card-border bg-card p-3 text-center">
      <p className="text-xs font-semibold text-muted uppercase tracking-wide">
        {label}
      </p>
      <p className="text-lg font-bold text-foreground mt-1">{value}</p>
    </div>
  );
}

function formatMinutes(min: number): string {
  if (min < 60) return `${min}min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h}h` : `${h}h ${m}min`;
}
