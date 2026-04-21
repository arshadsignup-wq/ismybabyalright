"use client";

import { useState, useMemo, useCallback } from "react";
import {
  allCheckpoints,
  type AgeCheckpoint,
  type Milestone,
} from "@/data/milestones";
import { calculateAdjustedAge } from "@/lib/adjustedAge";
import ChecklistItem from "@/components/checklist/ChecklistItem";
import ChecklistSummary from "@/components/checklist/ChecklistSummary";
import PrintableSummary from "@/components/checklist/PrintableSummary";

type Step = "age" | "prematurity" | "milestones" | "summary";

/** Flatten all milestones from every category in a checkpoint. */
function getAllMilestones(checkpoint: AgeCheckpoint): Milestone[] {
  const cats = checkpoint.categories;
  return [
    ...cats.grossMotor,
    ...cats.fineMotor,
    ...cats.language,
    ...cats.socialEmotional,
    ...cats.cognitive,
  ];
}

/** Find the best checkpoint to show for a given age in months. */
function findClosestCheckpoint(ageMonths: number): AgeCheckpoint {
  // Find the checkpoint whose ageInMonths is closest without going above,
  // or the first checkpoint if the baby is younger than all of them.
  let best = allCheckpoints[0];
  for (const cp of allCheckpoints) {
    if (cp.ageInMonths <= ageMonths) {
      best = cp;
    }
  }
  return best;
}

export default function ChecklistTool() {
  // ---- State ----
  const [step, setStep] = useState<Step>("age");
  const [selectedCheckpoint, setSelectedCheckpoint] =
    useState<AgeCheckpoint | null>(null);
  const [wasPremature, setWasPremature] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [responses, setResponses] = useState<Record<string, string>>({});

  // ---- Derived ----
  const adjustedResult = useMemo(() => {
    if (!wasPremature || !birthDate || !dueDate) return null;
    const bd = new Date(birthDate);
    const dd = new Date(dueDate);
    if (isNaN(bd.getTime()) || isNaN(dd.getTime())) return null;
    return calculateAdjustedAge(bd, dd);
  }, [wasPremature, birthDate, dueDate]);

  const effectiveCheckpoint = useMemo(() => {
    if (!selectedCheckpoint) return null;
    if (adjustedResult && !adjustedResult.adjustedAgeExpired) {
      return findClosestCheckpoint(adjustedResult.adjustedMonths);
    }
    return selectedCheckpoint;
  }, [selectedCheckpoint, adjustedResult]);

  const milestones = useMemo(() => {
    if (!effectiveCheckpoint) return [];
    return getAllMilestones(effectiveCheckpoint);
  }, [effectiveCheckpoint]);

  const allAnswered = useMemo(() => {
    return milestones.length > 0 && milestones.every((m) => responses[m.id]);
  }, [milestones, responses]);

  // ---- Handlers ----
  const handleSelectAge = useCallback((checkpoint: AgeCheckpoint) => {
    setSelectedCheckpoint(checkpoint);
    setResponses({});
    setStep("prematurity");
  }, []);

  const handlePrematurityNext = useCallback(() => {
    // If user toggled premature and the adjusted age changes the checkpoint,
    // clear responses since milestones may differ.
    setResponses({});
    setStep("milestones");
  }, []);

  const handleResponseChange = useCallback(
    (milestoneId: string, value: string) => {
      setResponses((prev) => ({ ...prev, [milestoneId]: value }));
    },
    [],
  );

  const handleViewSummary = useCallback(() => {
    setStep("summary");
  }, []);

  const handleStartOver = useCallback(() => {
    setStep("age");
    setSelectedCheckpoint(null);
    setWasPremature(false);
    setBirthDate("");
    setDueDate("");
    setResponses({});
  }, []);

  const handleBack = useCallback(() => {
    if (step === "summary") setStep("milestones");
    else if (step === "milestones") setStep("prematurity");
    else if (step === "prematurity") setStep("age");
  }, [step]);

  // ---- Steps ----
  const stepNumber =
    step === "age" ? 1 : step === "prematurity" ? 2 : step === "milestones" ? 3 : 4;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress indicator */}
      {step !== "summary" && (
        <div className="mb-6" aria-label={`Step ${stepNumber} of 4`}>
          <div className="flex items-center gap-2 mb-2">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={`
                  h-1.5 flex-1 rounded-full transition-colors
                  ${n <= stepNumber ? "bg-primary" : "bg-border"}
                `}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="text-xs text-muted">
            Step {stepNumber} of 4
          </p>
        </div>
      )}

      {/* ======== STEP 1: Age Selection ======== */}
      {step === "age" && (
        <section aria-label="Select your baby's age">
          <h2 className="text-xl font-bold text-foreground mb-2 sm:text-2xl">
            How old is your baby?
          </h2>
          <p className="text-sm text-muted mb-6 leading-relaxed">
            Select the age that is closest to your baby&apos;s current age. We
            will show the milestones that are typical for this stage.
          </p>

          <div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
            role="listbox"
            aria-label="Age options"
          >
            {allCheckpoints.map((checkpoint) => (
              <button
                key={checkpoint.id}
                onClick={() => handleSelectAge(checkpoint)}
                className={`
                  card flex flex-col items-center justify-center
                  min-h-[72px] px-4 py-4
                  text-center cursor-pointer
                  hover:border-primary hover:bg-primary-light
                  transition-colors
                  focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                `}
                role="option"
                aria-selected={selectedCheckpoint?.id === checkpoint.id}
              >
                <span className="text-lg font-bold text-foreground">
                  {checkpoint.ageInMonths}
                </span>
                <span className="text-xs text-muted mt-0.5">
                  {checkpoint.ageInMonths === 1 ? "month" : "months"}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ======== STEP 2: Prematurity Check ======== */}
      {step === "prematurity" && (
        <section aria-label="Prematurity adjustment">
          <h2 className="text-xl font-bold text-foreground mb-2 sm:text-2xl">
            Was your baby born early?
          </h2>
          <p className="text-sm text-muted mb-6 leading-relaxed">
            If your baby was born before 37 weeks, their developmental
            milestones may be assessed using their adjusted (corrected) age.
            This is completely optional.
          </p>

          {/* Toggle */}
          <div className="card p-5 mb-4">
            <label className="flex items-center gap-3 cursor-pointer min-h-[44px]">
              <span className="relative inline-flex items-center">
                <input
                  type="checkbox"
                  checked={wasPremature}
                  onChange={(e) => setWasPremature(e.target.checked)}
                  className="sr-only peer"
                  aria-label="My baby was born early"
                />
                <span
                  className={`
                    block w-12 h-7 rounded-full transition-colors
                    ${wasPremature ? "bg-primary" : "bg-border"}
                  `}
                  aria-hidden="true"
                />
                <span
                  className={`
                    absolute left-0.5 top-0.5 block w-6 h-6 rounded-full bg-white
                    shadow transition-transform
                    ${wasPremature ? "translate-x-5" : "translate-x-0"}
                  `}
                  aria-hidden="true"
                />
              </span>
              <span className="text-sm font-medium text-foreground">
                My baby was born early (premature)
              </span>
            </label>
          </div>

          {/* Date inputs */}
          {wasPremature && (
            <div className="card p-5 space-y-4 mb-4">
              <div>
                <label
                  htmlFor="birth-date"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Baby&apos;s birth date
                </label>
                <input
                  id="birth-date"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full min-h-[44px] px-3 py-2 rounded-lg border border-border bg-card text-foreground text-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-describedby="birth-date-help"
                />
                <p id="birth-date-help" className="text-xs text-muted mt-1">
                  The actual date your baby was born.
                </p>
              </div>

              <div>
                <label
                  htmlFor="due-date"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Original due date
                </label>
                <input
                  id="due-date"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full min-h-[44px] px-3 py-2 rounded-lg border border-border bg-card text-foreground text-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-describedby="due-date-help"
                />
                <p id="due-date-help" className="text-xs text-muted mt-1">
                  The due date you were originally given (40 weeks gestation).
                </p>
              </div>

              {/* Adjusted age result */}
              {adjustedResult && (
                <div
                  className="rounded-lg bg-primary-light border border-primary/20 p-4"
                  role="status"
                  aria-live="polite"
                >
                  <p className="text-sm font-medium text-foreground mb-1">
                    Adjusted age: {adjustedResult.displayAdjusted}
                  </p>
                  <p className="text-xs text-muted">
                    Chronological age: {adjustedResult.displayChronological}
                    {" "}&middot;{" "}
                    Born {adjustedResult.correctionWeeks} weeks early
                  </p>
                  {adjustedResult.adjustedAgeExpired && (
                    <p className="text-xs text-muted mt-1 italic">
                      Adjusted age correction is typically no longer applied
                      after 24 months of chronological age.
                    </p>
                  )}
                  {effectiveCheckpoint && selectedCheckpoint && effectiveCheckpoint.id !== selectedCheckpoint.id && (
                    <p className="text-xs text-primary font-medium mt-2">
                      Milestones will be shown for the{" "}
                      {effectiveCheckpoint.label} checkpoint based on adjusted
                      age.
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="min-h-[44px] px-5 py-2.5 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:bg-card-alt transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={handlePrematurityNext}
              className="min-h-[44px] flex-1 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
            >
              Continue
            </button>
          </div>
        </section>
      )}

      {/* ======== STEP 3: Milestones ======== */}
      {step === "milestones" && effectiveCheckpoint && (
        <section aria-label="Milestone checklist">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              {effectiveCheckpoint.label} Milestones
            </h2>
            <p className="text-sm text-muted mt-1 leading-relaxed">
              For each milestone, select the response that best describes your
              baby right now. There are no wrong answers.
            </p>
            {adjustedResult && !adjustedResult.adjustedAgeExpired && (
              <p className="text-xs text-primary mt-1">
                Showing milestones for adjusted age:{" "}
                {adjustedResult.displayAdjusted}
              </p>
            )}
          </div>

          <div className="space-y-4">
            {milestones.map((milestone) => (
              <ChecklistItem
                key={milestone.id}
                milestone={milestone}
                value={responses[milestone.id] ?? null}
                onChange={(value) => handleResponseChange(milestone.id, value)}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={handleBack}
              className="min-h-[44px] px-5 py-2.5 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:bg-card-alt transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={handleViewSummary}
              disabled={!allAnswered}
              className={`
                min-h-[44px] flex-1 px-5 py-2.5 rounded-lg text-sm font-semibold
                transition-colors cursor-pointer
                ${
                  allAnswered
                    ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                    : "bg-border text-muted cursor-not-allowed"
                }
              `}
              aria-disabled={!allAnswered}
            >
              {allAnswered
                ? "View Summary"
                : `Answer all milestones (${
                    milestones.filter((m) => responses[m.id]).length
                  }/${milestones.length})`}
            </button>
          </div>
        </section>
      )}

      {/* ======== STEP 4: Summary ======== */}
      {step === "summary" && effectiveCheckpoint && (
        <>
          <ChecklistSummary
            milestones={milestones}
            responses={responses}
            ageLabel={effectiveCheckpoint.label}
            adjustedAge={
              adjustedResult && !adjustedResult.adjustedAgeExpired
                ? adjustedResult.displayAdjusted
                : undefined
            }
          />

          <PrintableSummary
            milestones={milestones}
            responses={responses}
            ageLabel={effectiveCheckpoint.label}
            adjustedAge={
              adjustedResult && !adjustedResult.adjustedAgeExpired
                ? adjustedResult.displayAdjusted
                : undefined
            }
          />

          {/* Navigation */}
          <div className="flex gap-3 mt-8 no-print">
            <button
              onClick={handleBack}
              className="min-h-[44px] px-5 py-2.5 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:bg-card-alt transition-colors cursor-pointer"
            >
              Back to Checklist
            </button>
            <button
              onClick={handleStartOver}
              className="min-h-[44px] flex-1 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
            >
              Start Over
            </button>
          </div>
        </>
      )}

      {/* Privacy note */}
      <p className="text-xs text-muted-light text-center mt-8 px-4 no-print">
        Your responses stay on your device. Nothing is stored, saved, or sent
        anywhere.
      </p>
    </div>
  );
}
