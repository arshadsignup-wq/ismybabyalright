"use client";

import { useState } from "react";
import {
  acetaminophen,
  ibuprofen,
  type Medication,
  type DoseRange,
} from "@/data/medicine/dosage";

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const LBS_PER_KG = 2.20462;

function toDisplayWeight(value: number, unit: "lbs" | "kg"): number {
  return unit === "kg" ? value / LBS_PER_KG : value;
}

function toLbs(value: number, unit: "lbs" | "kg"): number {
  return unit === "kg" ? value * LBS_PER_KG : value;
}

function findDose(med: Medication, weightLbs: number): DoseRange | null {
  for (const d of med.doses) {
    if (
      weightLbs >= d.weightMinLbs &&
      (d.weightMaxLbs === null || weightLbs <= d.weightMaxLbs)
    ) {
      return d;
    }
  }
  return null;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function DosageCalculator() {
  const [weightInput, setWeightInput] = useState("");
  const [weightUnit, setWeightUnit] = useState<"lbs" | "kg">("lbs");
  const [ageInput, setAgeInput] = useState("");

  const weightNum = parseFloat(weightInput);
  const weightLbs = !isNaN(weightNum) && weightNum > 0 ? toLbs(weightNum, weightUnit) : null;
  const ageMonths = ageInput !== "" ? parseInt(ageInput, 10) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Baby Medicine Dosage Calculator
        </h1>
        <p className="mt-2 text-muted">
          Weight-based dosing for acetaminophen (Tylenol) and ibuprofen
          (Motrin/Advil). Based on AAP-published dosing tables.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="rounded-xl border-2 border-red-300 bg-red-50 px-4 py-3 dark:border-red-500/40 dark:bg-red-950/30">
        <p className="text-sm font-semibold text-red-800 dark:text-red-300">
          This is not medical advice. Always confirm dosing with your
          pediatrician before giving any medication.
        </p>
      </div>

      {/* Inputs */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
          {/* Weight */}
          <div className="flex-1">
            <label
              htmlFor="weight"
              className="mb-1.5 block text-sm font-semibold text-foreground"
            >
              Weight
            </label>
            <div className="flex gap-2">
              <input
                id="weight"
                type="number"
                inputMode="decimal"
                step="0.1"
                min="0"
                placeholder={weightUnit === "lbs" ? "e.g. 20" : "e.g. 9"}
                value={weightInput}
                onChange={(e) => setWeightInput(e.target.value)}
                className="h-11 flex-1 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <div className="flex rounded-xl border border-card-border overflow-hidden">
                <button
                  onClick={() => setWeightUnit("lbs")}
                  className={`px-3 h-11 text-sm font-medium transition-colors cursor-pointer ${
                    weightUnit === "lbs"
                      ? "bg-primary text-white"
                      : "bg-card text-muted hover:bg-primary-light"
                  }`}
                >
                  lbs
                </button>
                <button
                  onClick={() => setWeightUnit("kg")}
                  className={`px-3 h-11 text-sm font-medium transition-colors cursor-pointer ${
                    weightUnit === "kg"
                      ? "bg-primary text-white"
                      : "bg-card text-muted hover:bg-primary-light"
                  }`}
                >
                  kg
                </button>
              </div>
            </div>
          </div>

          {/* Age (optional) */}
          <div className="sm:w-40">
            <label
              htmlFor="age"
              className="mb-1.5 block text-sm font-semibold text-foreground"
            >
              Age in months{" "}
              <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="age"
              type="number"
              inputMode="numeric"
              min="0"
              max="216"
              placeholder="e.g. 12"
              value={ageInput}
              onChange={(e) => setAgeInput(e.target.value)}
              className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      {weightLbs !== null && (
        <div className="grid gap-4 sm:grid-cols-2">
          <MedicationCard
            med={acetaminophen}
            weightLbs={weightLbs}
            ageMonths={ageMonths}
            weightUnit={weightUnit}
            weightNum={weightNum}
          />
          <MedicationCard
            med={ibuprofen}
            weightLbs={weightLbs}
            ageMonths={ageMonths}
            weightUnit={weightUnit}
            weightNum={weightNum}
          />
        </div>
      )}

      {/* Safety Tips */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Safety Tips</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex gap-2">
            <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
            Always use the syringe or dosing cup that comes with the medicine &mdash; never a kitchen spoon.
          </li>
          <li className="flex gap-2">
            <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
            Check all medications (including cough/cold products) for acetaminophen to avoid double-dosing.
          </li>
          <li className="flex gap-2">
            <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
            Never give aspirin to children or teenagers.
          </li>
          <li className="flex gap-2">
            <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
            Store all medicine out of reach of children.
          </li>
          <li className="flex gap-2">
            <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
            If your child vomits immediately after a dose, contact your pediatrician before re-dosing.
          </li>
        </ul>
      </div>

      {/* Sources */}
      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            AAP dosing tables via{" "}
            <a
              href="https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Acetaminophen-for-Fever-and-Pain.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              HealthyChildren.org &mdash; Acetaminophen
            </a>
          </li>
          <li>
            AAP dosing tables via{" "}
            <a
              href="https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Ibuprofen-for-Fever-and-Pain.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              HealthyChildren.org &mdash; Ibuprofen
            </a>
          </li>
          <li>
            <a
              href="https://medlineplus.gov/druginfo/meds/a681004.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              MedlinePlus &mdash; Acetaminophen
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Medication result card                                                     */
/* -------------------------------------------------------------------------- */

function MedicationCard({
  med,
  weightLbs,
  ageMonths,
  weightUnit,
  weightNum,
}: {
  med: Medication;
  weightLbs: number;
  ageMonths: number | null;
  weightUnit: "lbs" | "kg";
  weightNum: number;
}) {
  const tooYoung =
    ageMonths !== null && ageMonths < med.minAgeMonths;
  const consultYoung =
    ageMonths !== null && ageMonths < 3;

  const dose = findDose(med, weightLbs);
  const outOfRange = dose === null;

  const isAcetaminophen = med.name === "Acetaminophen";
  const accentColor = isAcetaminophen ? "text-purple-700 dark:text-purple-300" : "text-blue-700 dark:text-blue-300";
  const borderColor = isAcetaminophen ? "border-purple-200 dark:border-purple-500/30" : "border-blue-200 dark:border-blue-500/30";
  const bgColor = isAcetaminophen ? "bg-purple-50 dark:bg-purple-950/20" : "bg-blue-50 dark:bg-blue-950/20";

  return (
    <div
      className={`rounded-2xl border-2 ${borderColor} ${bgColor} p-4 sm:p-5`}
    >
      <h3 className={`text-lg font-bold ${accentColor}`}>
        {med.name}
      </h3>
      <p className="text-xs text-muted mb-3">
        {med.brandNames.join(", ")} &middot; {med.concentration}
      </p>

      {consultYoung ? (
        <div className="rounded-xl bg-red-100 dark:bg-red-950/40 px-3 py-3 text-sm font-semibold text-red-800 dark:text-red-300">
          Under 3 months &mdash; consult your pediatrician before giving any
          medication.
        </div>
      ) : tooYoung ? (
        <div className="rounded-xl bg-amber-100 dark:bg-amber-950/40 px-3 py-3 text-sm font-semibold text-amber-800 dark:text-amber-300">
          {med.name} is not recommended for children under{" "}
          {med.minAgeMonths} months of age. Consult your pediatrician.
        </div>
      ) : outOfRange ? (
        <div className="rounded-xl bg-amber-100 dark:bg-amber-950/40 px-3 py-3 text-sm font-semibold text-amber-800 dark:text-amber-300">
          Weight {weightNum} {weightUnit} is outside the standard dosing range.
          Please consult your pediatrician.
        </div>
      ) : (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Dose" value={`${dose.doseMg} mg`} />
            <Stat label="Volume" value={`${dose.volumeMl} mL`} />
            <Stat label="Interval" value={med.interval} />
            <Stat label="Max / day" value={`${med.maxDosesPerDay} doses`} />
          </div>

          {/* Warnings */}
          <div className="border-t border-card-border pt-2">
            <p className="text-xs font-semibold text-muted mb-1">Reminders</p>
            <ul className="space-y-0.5">
              {med.warnings.map((w, i) => (
                <li key={i} className="flex gap-1.5 text-xs text-muted">
                  <span className="shrink-0" aria-hidden="true">&bull;</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Small stat display                                                         */
/* -------------------------------------------------------------------------- */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted">{label}</p>
      <p className="text-base font-bold text-foreground">{value}</p>
    </div>
  );
}
