"use client";

import { useState, useMemo } from "react";
import {
  PREGNANCY_WEEKS,
  getTrimesterLabel,
  getTrimesterColor,
  getTrimesterTextColor,
  getCurrentWeekFromDueDate,
  getCurrentWeekFromLMP,
  getDueDateFromLMP,
  getDaysRemaining,
  formatWeight,
  formatSize,
} from "@/data/pregnancy-tracker/data";

type InputMode = "due-date" | "lmp";

const BABY_SIZE_EMOJI: Record<number, string> = {
  4: "\uD83C\uDF3C",  // poppy
  5: "\uD83C\uDF30",  // seed
  6: "\uD83E\uDED8",  // lentil
  7: "\uD83E\uDED0",  // blueberry
  8: "\uD83E\uDED0",  // raspberry
  9: "\uD83E\uDED2",  // olive
  10: "\uD83C\uDF51", // prune
  11: "\uD83C\uDF4B", // fig
  12: "\uD83C\uDF4B", // lime
  13: "\uD83C\uDF51", // peach
  14: "\uD83C\uDF4B", // lemon
  15: "\uD83C\uDF4E", // apple
  16: "\uD83E\uDD51", // avocado
  17: "\uD83C\uDF50", // pear
  18: "\uD83E\uDED1", // bell pepper
  19: "\uD83E\uDD6D", // mango
  20: "\uD83C\uDF4C", // banana
  21: "\uD83E\uDD55", // carrot
  22: "\uD83E\uDD6D", // papaya
  23: "\uD83C\uDF4A", // grapefruit
  24: "\uD83C\uDF3D", // corn
  25: "\uD83E\uDD66", // cauliflower
  26: "\uD83E\uDD52", // zucchini
  27: "\uD83E\uDD6C", // lettuce
  28: "\uD83C\uDF46", // eggplant
  29: "\uD83C\uDF42", // squash
  30: "\uD83E\uDD6C", // cabbage
  31: "\uD83E\uDD65", // coconut
  32: "\uD83E\uDED8", // jicama
  33: "\uD83C\uDF4D", // pineapple
  34: "\uD83C\uDF48", // cantaloupe
  35: "\uD83C\uDF48", // honeydew
  36: "\uD83E\uDD6C", // lettuce
  37: "\uD83E\uDD6C", // chard
  38: "\uD83C\uDF48", // melon
  39: "\uD83C\uDF49", // watermelon
  40: "\uD83C\uDF49", // jackfruit
};

export default function PregnancyTracker() {
  const [inputMode, setInputMode] = useState<InputMode>("due-date");
  const [dateInput, setDateInput] = useState("");
  const [viewingWeek, setViewingWeek] = useState<number | null>(null);

  const computed = useMemo(() => {
    if (!dateInput) return null;
    const date = new Date(dateInput + "T00:00:00");
    if (isNaN(date.getTime())) return null;

    let currentWeek: number;
    let dueDate: Date;

    if (inputMode === "due-date") {
      dueDate = date;
      currentWeek = getCurrentWeekFromDueDate(date);
    } else {
      dueDate = getDueDateFromLMP(date);
      currentWeek = getCurrentWeekFromLMP(date);
    }

    const daysLeft = getDaysRemaining(dueDate);
    const weeksLeft = Math.floor(daysLeft / 7);
    const progressPercent = Math.min(100, Math.max(0, ((currentWeek - 4) / 36) * 100));

    return { currentWeek, dueDate, daysLeft, weeksLeft, progressPercent };
  }, [dateInput, inputMode]);

  const activeWeekNum = viewingWeek ?? computed?.currentWeek ?? null;
  const weekData = activeWeekNum
    ? PREGNANCY_WEEKS.find((w) => w.week === activeWeekNum) ?? null
    : null;

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Pregnancy Tracker
        </h1>
        <p className="mt-2 text-muted">
          Track your pregnancy week by week. See your baby&apos;s size, development
          milestones, body changes, and helpful tips for every stage.
        </p>
      </div>

      {/* Input Card */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
        {/* Mode toggle */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">
            I know my...
          </label>
          <div className="flex gap-2">
            {([
              { value: "due-date" as const, label: "Due Date" },
              { value: "lmp" as const, label: "Last Menstrual Period (LMP)" },
            ]).map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setInputMode(option.value);
                  setDateInput("");
                  setViewingWeek(null);
                }}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  inputMode === option.value
                    ? "bg-primary text-white"
                    : "bg-background border border-card-border text-muted hover:bg-primary-light"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Date input */}
        <div>
          <label htmlFor="pregnancy-date" className="mb-1.5 block text-sm font-semibold text-foreground">
            {inputMode === "due-date"
              ? "Your Estimated Due Date"
              : "First Day of Your Last Menstrual Period"}
          </label>
          <input
            id="pregnancy-date"
            type="date"
            value={dateInput}
            onChange={(e) => {
              setDateInput(e.target.value);
              setViewingWeek(null);
            }}
            className="h-11 w-full max-w-xs rounded-xl border border-card-border bg-white px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <p className="mt-1 text-xs text-muted">
            {inputMode === "due-date"
              ? "Enter the due date given by your doctor or midwife."
              : "Enter the first day of your last period. We'll calculate your due date (40 weeks from LMP)."}
          </p>
        </div>
      </div>

      {/* Results */}
      {computed && weekData && (
        <>
          {/* Summary Card */}
          <div className="rounded-2xl border-2 border-primary/30 bg-primary-light p-5 text-center">
            <p className="text-sm font-semibold text-muted mb-1">
              You are currently
            </p>
            <p className="text-3xl font-bold text-primary">
              Week {computed.currentWeek}
            </p>
            <p className={`mt-1 text-sm font-semibold ${getTrimesterTextColor(weekData.trimester)}`}>
              {getTrimesterLabel(weekData.trimester)}
            </p>
            <div className="mt-3 flex items-center justify-center gap-4 text-sm text-muted">
              <span>Due: <span className="font-semibold text-foreground">{formatDate(computed.dueDate)}</span></span>
            </div>
            <p className="mt-1 text-sm text-muted">
              {computed.daysLeft > 0
                ? `${computed.weeksLeft} weeks and ${computed.daysLeft % 7} days remaining`
                : "Your due date has passed — baby will arrive soon!"}
            </p>
          </div>

          {/* Trimester Progress Bar */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
            <h2 className="mb-3 text-sm font-bold text-foreground">Pregnancy Progress</h2>
            <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              {/* Trimester segments */}
              <div className="absolute inset-0 flex">
                <div className="h-full w-[33.3%] bg-green-200 dark:bg-green-900/40" />
                <div className="h-full w-[33.3%] bg-blue-200 dark:bg-blue-900/40" />
                <div className="h-full w-[33.4%] bg-purple-200 dark:bg-purple-900/40" />
              </div>
              {/* Active progress */}
              <div
                className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${getTrimesterColor(weekData.trimester)}`}
                style={{ width: `${computed.progressPercent}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted">
              <span className="text-green-600 dark:text-green-400 font-medium">T1 (4-12)</span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">T2 (13-27)</span>
              <span className="text-purple-600 dark:text-purple-400 font-medium">T3 (28-40)</span>
            </div>
          </div>

          {/* Week Navigator */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                const prev = (viewingWeek ?? computed.currentWeek) - 1;
                if (prev >= 4) setViewingWeek(prev);
              }}
              disabled={(viewingWeek ?? computed.currentWeek) <= 4}
              className="rounded-full bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-hover transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              &larr; Week {Math.max(4, (viewingWeek ?? computed.currentWeek) - 1)}
            </button>

            <div className="text-center">
              <p className="text-lg font-bold text-foreground">
                Week {activeWeekNum}
              </p>
              {viewingWeek !== null && viewingWeek !== computed.currentWeek && (
                <button
                  onClick={() => setViewingWeek(null)}
                  className="text-xs text-primary underline cursor-pointer mt-0.5"
                >
                  Back to current week
                </button>
              )}
            </div>

            <button
              onClick={() => {
                const next = (viewingWeek ?? computed.currentWeek) + 1;
                if (next <= 40) setViewingWeek(next);
              }}
              disabled={(viewingWeek ?? computed.currentWeek) >= 40}
              className="rounded-full bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-hover transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Week {Math.min(40, (viewingWeek ?? computed.currentWeek) + 1)} &rarr;
            </button>
          </div>

          {/* Baby Size Card */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
            <div className="flex flex-col items-center text-center">
              <span className="text-6xl" role="img" aria-label={weekData.babySize}>
                {BABY_SIZE_EMOJI[weekData.week] ?? "\uD83D\uDC76"}
              </span>
              <p className="mt-3 text-lg font-bold text-foreground">
                Baby is the size of a {weekData.babySize.toLowerCase()}
              </p>
              <div className="mt-2 flex gap-4 text-sm text-muted">
                <span>Length: <span className="font-semibold text-foreground">{formatSize(weekData.babySizeCm)}</span></span>
                <span>Weight: <span className="font-semibold text-foreground">{formatWeight(weekData.babyWeightG)}</span></span>
              </div>
            </div>
          </div>

          {/* Warning Sign */}
          {weekData.warningSign && (
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 dark:border-red-500/30 dark:bg-red-950/20 p-4 sm:p-6">
              <h2 className="mb-2 text-sm font-bold text-red-800 dark:text-red-300 flex items-center gap-2">
                <span aria-hidden="true">&#x26A0;&#xFE0F;</span> Important Warning
              </h2>
              <p className="text-sm text-red-800 dark:text-red-300">
                {weekData.warningSign}
              </p>
            </div>
          )}

          {/* Baby Development */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Baby&apos;s Development — Week {weekData.week}
            </h2>
            <ul className="space-y-2 text-sm text-muted">
              {weekData.babyDevelopment.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mother Changes */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Your Body This Week
            </h2>
            <ul className="space-y-2 text-sm text-muted">
              {weekData.motherChanges.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tips */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Tips for Week {weekData.week}
            </h2>
            <ul className="space-y-2 text-sm text-muted">
              {weekData.tips.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Week Selector */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
            <h2 className="mb-3 text-sm font-bold text-foreground">Jump to a Week</h2>
            <div className="flex flex-wrap gap-1.5">
              {PREGNANCY_WEEKS.map((w) => (
                <button
                  key={w.week}
                  onClick={() => setViewingWeek(w.week === computed.currentWeek ? null : w.week)}
                  className={`h-8 w-8 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    w.week === activeWeekNum
                      ? "bg-primary text-white"
                      : w.week === computed.currentWeek
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : `${
                            w.trimester === 1
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : w.trimester === 2
                                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                          } hover:opacity-80`
                  }`}
                >
                  {w.week}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Disclaimer */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-500/30 dark:bg-amber-950/20">
        <p className="text-xs text-amber-800 dark:text-amber-300">
          This tool is for informational purposes only and is not a substitute for
          professional medical care. Every pregnancy is unique. Always consult your
          healthcare provider for personalized advice and if you have any concerns.
        </p>
      </div>

      {/* Sources */}
      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a href="https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy" target="_blank" rel="noopener noreferrer" className="underline text-primary">
              ACOG — How Your Fetus Grows During Pregnancy
            </a>
          </li>
          <li>
            <a href="https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/in-depth/prenatal-care/art-20045302" target="_blank" rel="noopener noreferrer" className="underline text-primary">
              Mayo Clinic — Pregnancy Week by Week
            </a>
          </li>
          <li>
            <a href="https://my.clevelandclinic.org/health/articles/7247-fetal-development-stages-of-growth" target="_blank" rel="noopener noreferrer" className="underline text-primary">
              Cleveland Clinic — Fetal Development
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
