"use client";

import { useState, useCallback } from "react";
import { growthData as boysData } from "@/data/growth/who-boys";
import { growthData as girlsData } from "@/data/growth/who-girls";
import type { GrowthData } from "@/data/growth/types";
import {
  calculatePercentile,
  getPercentileLabel,
  getPercentileContext,
} from "@/lib/growthPercentile";
import { getAgeInMonths } from "@/lib/formatAge";
import PrintButton from "@/components/shared/PrintButton";
import GrowthChart from "@/components/growth/GrowthChart";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

type Sex = "boy" | "girl";
type MeasurementType = "weight" | "length" | "headCircumference";
type WeightUnit = "kg" | "lbs";
type LengthUnit = "cm" | "in";

interface Measurement {
  id: string;
  ageMonths: number;
  value: number; // always stored in metric (kg or cm)
  rawValue: number; // as entered by the user
  type: MeasurementType;
  percentile: number;
  dateRecorded: string;
}

/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

const MEASUREMENT_TABS: { key: MeasurementType; label: string }[] = [
  { key: "weight", label: "Weight" },
  { key: "length", label: "Length" },
  { key: "headCircumference", label: "Head Circ." },
];

const LBS_PER_KG = 2.20462;
const CM_PER_IN = 2.54;

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function toMetricWeight(value: number, unit: WeightUnit): number {
  return unit === "lbs" ? value / LBS_PER_KG : value;
}

function toMetricLength(value: number, unit: LengthUnit): number {
  return unit === "in" ? value * CM_PER_IN : value;
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function GrowthCalculator() {
  // --- Form state ---
  const [sex, setSex] = useState<Sex>("boy");
  const [dob, setDob] = useState("");
  const [activeTab, setActiveTab] = useState<MeasurementType>("weight");
  const [valueInput, setValueInput] = useState("");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [lengthUnit, setLengthUnit] = useState<LengthUnit>("cm");

  // --- Results state ---
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [lastResult, setLastResult] = useState<Measurement | null>(null);
  const [error, setError] = useState<string | null>(null);

  // --- Expandable sections ---
  const [showExplainer, setShowExplainer] = useState(false);

  const growthRef: GrowthData = sex === "boy" ? boysData : girlsData;

  const getDataForType = useCallback(
    (type: MeasurementType) => growthRef[type],
    [growthRef]
  );

  /* ---------------------------------------------------------------------- */
  /*  Calculate                                                              */
  /* ---------------------------------------------------------------------- */

  function handleCalculate() {
    setError(null);

    // Validate date of birth
    if (!dob) {
      setError("Please enter your baby's date of birth.");
      return;
    }

    const birthDate = new Date(dob + "T00:00:00");
    const now = new Date();
    if (birthDate > now) {
      setError("Date of birth cannot be in the future.");
      return;
    }

    const ageMonths = getAgeInMonths(birthDate);
    if (ageMonths > 36) {
      setError(
        "This calculator uses WHO growth data for ages 0 to 36 months. Your baby's age exceeds this range."
      );
      return;
    }

    // Validate measurement value
    const raw = parseFloat(valueInput);
    if (isNaN(raw) || raw <= 0) {
      setError("Please enter a valid measurement value greater than zero.");
      return;
    }

    // Convert to metric
    let metricValue: number;
    if (activeTab === "weight") {
      metricValue = toMetricWeight(raw, weightUnit);
    } else {
      metricValue = toMetricLength(raw, activeTab === "length" ? lengthUnit : lengthUnit);
    }

    // Calculate more precise age for better interpolation
    const msAge = now.getTime() - birthDate.getTime();
    const preciseMonths = msAge / (30.4375 * 24 * 60 * 60 * 1000);
    const clampedAge = Math.min(36, Math.max(0, preciseMonths));

    const dataPoints = getDataForType(activeTab);
    const percentile = calculatePercentile(metricValue, clampedAge, dataPoints);

    const measurement: Measurement = {
      id: generateId(),
      ageMonths: Math.round(clampedAge * 10) / 10, // one decimal
      value: Math.round(metricValue * 100) / 100,
      rawValue: raw,
      type: activeTab,
      percentile,
      dateRecorded: new Date().toISOString().split("T")[0],
    };

    setMeasurements((prev) => [...prev, measurement]);
    setLastResult(measurement);
    setValueInput("");
  }

  /* ---------------------------------------------------------------------- */
  /*  Remove a measurement                                                   */
  /* ---------------------------------------------------------------------- */

  function removeMeasurement(id: string) {
    setMeasurements((prev) => prev.filter((m) => m.id !== id));
    if (lastResult?.id === id) {
      setLastResult(null);
    }
  }

  /* ---------------------------------------------------------------------- */
  /*  Filtered measurements for current tab                                  */
  /* ---------------------------------------------------------------------- */

  const tabMeasurements = measurements
    .filter((m) => m.type === activeTab)
    .map((m) => ({ ageMonths: m.ageMonths, value: m.value }));

  /* ---------------------------------------------------------------------- */
  /*  Render                                                                 */
  /* ---------------------------------------------------------------------- */

  const unitLabel =
    activeTab === "weight"
      ? weightUnit
      : activeTab === "length"
        ? lengthUnit
        : lengthUnit;

  return (
    <section
      className="card p-5 sm:p-8"
      aria-label="Growth calculator"
    >
      <h2>Growth Percentile Calculator</h2>
      <p className="text-sm text-muted mb-6 leading-relaxed">
        Plot your baby&apos;s measurements against the WHO growth standards.
        Everything is calculated in your browser &mdash; no data is stored or
        sent anywhere.
      </p>

      {/* ---------------------------------------------------------------- */}
      {/*  Sex Toggle                                                       */}
      {/* ---------------------------------------------------------------- */}
      <fieldset className="mb-5">
        <legend className="text-sm font-semibold text-foreground mb-2">
          Sex
        </legend>
        <div
          className="inline-flex rounded-lg border border-border overflow-hidden"
          role="radiogroup"
          aria-label="Sex"
        >
          {(["boy", "girl"] as Sex[]).map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={sex === option}
              onClick={() => setSex(option)}
              className={`px-5 py-2.5 min-h-[44px] text-sm font-medium transition-colors cursor-pointer ${
                sex === option
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-card-alt"
              }`}
            >
              {option === "boy" ? "Boy" : "Girl"}
            </button>
          ))}
        </div>
      </fieldset>

      {/* ---------------------------------------------------------------- */}
      {/*  Date of Birth                                                    */}
      {/* ---------------------------------------------------------------- */}
      <div className="mb-5">
        <label
          htmlFor="growth-dob"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Date of Birth
        </label>
        <input
          id="growth-dob"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          max={new Date().toISOString().split("T")[0]}
          className="w-full max-w-xs px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          aria-required="true"
        />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  Measurement Type Tabs                                            */}
      {/* ---------------------------------------------------------------- */}
      <div className="mb-5">
        <p className="text-sm font-semibold text-foreground mb-2">
          Measurement Type
        </p>
        <div
          className="flex rounded-lg border border-border overflow-hidden"
          role="tablist"
          aria-label="Measurement type"
        >
          {MEASUREMENT_TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              id={`tab-${tab.key}`}
              aria-selected={activeTab === tab.key}
              aria-controls={`panel-${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 px-3 py-2.5 min-h-[44px] text-sm font-medium transition-colors cursor-pointer ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-card-alt"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  Measurement Input                                                */}
      {/* ---------------------------------------------------------------- */}
      <div
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="mb-5"
      >
        <label
          htmlFor="measurement-value"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          {MEASUREMENT_TABS.find((t) => t.key === activeTab)?.label} Value
        </label>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <input
              id="measurement-value"
              type="number"
              inputMode="decimal"
              step="0.01"
              min="0"
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
              placeholder={activeTab === "weight" ? "e.g. 7.5" : "e.g. 68"}
              className="w-32 px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary pr-12"
              aria-required="true"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted pointer-events-none">
              {unitLabel}
            </span>
          </div>

          {/* Unit toggle for weight */}
          {activeTab === "weight" && (
            <div
              className="inline-flex rounded-lg border border-border overflow-hidden"
              role="radiogroup"
              aria-label="Weight unit"
            >
              {(["kg", "lbs"] as WeightUnit[]).map((u) => (
                <button
                  key={u}
                  type="button"
                  role="radio"
                  aria-checked={weightUnit === u}
                  onClick={() => setWeightUnit(u)}
                  className={`px-3 py-2 min-h-[44px] text-xs font-medium transition-colors cursor-pointer ${
                    weightUnit === u
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-card-alt"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          )}

          {/* Unit toggle for length / head circumference */}
          {(activeTab === "length" || activeTab === "headCircumference") && (
            <div
              className="inline-flex rounded-lg border border-border overflow-hidden"
              role="radiogroup"
              aria-label="Length unit"
            >
              {(["cm", "in"] as LengthUnit[]).map((u) => (
                <button
                  key={u}
                  type="button"
                  role="radio"
                  aria-checked={lengthUnit === u}
                  onClick={() => setLengthUnit(u)}
                  className={`px-3 py-2 min-h-[44px] text-xs font-medium transition-colors cursor-pointer ${
                    lengthUnit === u
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-card-alt"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  Calculate Button                                                 */}
      {/* ---------------------------------------------------------------- */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button
          type="button"
          onClick={handleCalculate}
          className="px-6 py-2.5 min-h-[44px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
          aria-label="Calculate growth percentile"
        >
          Calculate
        </button>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  Error                                                            */}
      {/* ---------------------------------------------------------------- */}
      {error && (
        <div
          className="tier-concern p-4 mb-6 text-sm"
          role="alert"
        >
          {error}
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/*  Result                                                           */}
      {/* ---------------------------------------------------------------- */}
      {lastResult && (
        <div className="mb-6" aria-live="polite">
          <ResultCard measurement={lastResult} />
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/*  Measurement history for this tab                                 */}
      {/* ---------------------------------------------------------------- */}
      {measurements.filter((m) => m.type === activeTab).length > 0 && (
        <div className="mb-6">
          <h3 className="text-base font-semibold text-foreground mb-3">
            Recorded Measurements
          </h3>
          <ul className="flex flex-col gap-2" role="list">
            {measurements
              .filter((m) => m.type === activeTab)
              .map((m) => {
                const ctx = getPercentileContext(m.percentile);
                return (
                  <li
                    key={m.id}
                    className="card-alt flex items-center justify-between gap-3 p-3 text-sm"
                  >
                    <div>
                      <span className="font-medium text-foreground">
                        {m.value}
                        {activeTab === "weight" ? " kg" : " cm"}
                      </span>{" "}
                      <span className="text-muted">
                        at {Math.round(m.ageMonths * 10) / 10} months
                      </span>{" "}
                      <span
                        className={`font-semibold ${
                          ctx.tier === "green"
                            ? "text-safe"
                            : ctx.tier === "yellow"
                              ? "text-monitor"
                              : "text-concern"
                        }`}
                      >
                        ({getPercentileLabel(m.percentile)})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeMeasurement(m.id)}
                      className="flex-shrink-0 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-muted hover:text-concern transition-colors cursor-pointer rounded-lg"
                      aria-label={`Remove measurement at ${Math.round(m.ageMonths * 10) / 10} months`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/*  Growth Chart                                                     */}
      {/* ---------------------------------------------------------------- */}
      {tabMeasurements.length > 0 && (
        <div className="mb-6">
          <GrowthChart
            data={growthRef}
            measurements={tabMeasurements}
            measurementType={activeTab}
            sex={sex}
          />
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/*  Print Button                                                     */}
      {/* ---------------------------------------------------------------- */}
      {measurements.length > 0 && (
        <div className="mb-6">
          <PrintButton />
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/*  Expandable Percentile Explainer                                  */}
      {/* ---------------------------------------------------------------- */}
      <details
        className="card-alt p-4 rounded-lg"
        open={showExplainer}
        onToggle={(e) =>
          setShowExplainer((e.target as HTMLDetailsElement).open)
        }
      >
        <summary className="cursor-pointer text-sm font-semibold text-foreground min-h-[44px] flex items-center select-none">
          What do percentiles mean?
        </summary>
        <div className="mt-3 text-sm text-muted leading-relaxed space-y-3">
          <p>
            A percentile tells you how your baby&apos;s measurement compares to
            other babies of the same age and sex. For example, if your baby is
            at the 50th percentile for weight, it means about half of babies
            weigh more and half weigh less.
          </p>
          <p>
            <strong className="text-foreground">
              A high or low percentile does not mean something is wrong.
            </strong>{" "}
            Babies come in all sizes. What matters most is that your baby is
            growing consistently along their own curve over time. A baby at the
            15th percentile who stays near the 15th percentile is typically
            growing well.
          </p>
          <p>
            Talk to your pediatrician if your baby&apos;s percentile changes
            significantly between visits (for example, dropping from the 50th
            to the 10th percentile), or if measurements fall below the 3rd or
            above the 97th percentile.
          </p>
          <p className="font-medium text-foreground">
            This calculator uses WHO Child Growth Standards, the international
            reference recommended by the CDC for children under 2 years old.
          </p>
        </div>
      </details>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Result Card Sub-component                                                 */
/* -------------------------------------------------------------------------- */

function ResultCard({ measurement }: { measurement: Measurement }) {
  const ctx = getPercentileContext(measurement.percentile);
  const label = getPercentileLabel(measurement.percentile);

  const tierClass =
    ctx.tier === "green"
      ? "tier-safe"
      : ctx.tier === "yellow"
        ? "tier-monitor"
        : "tier-concern";

  const badgeClass =
    ctx.tier === "green"
      ? "tier-safe-badge"
      : ctx.tier === "yellow"
        ? "tier-monitor-badge"
        : "tier-concern-badge";

  const typeLabel =
    measurement.type === "weight"
      ? "Weight"
      : measurement.type === "length"
        ? "Length"
        : "Head Circumference";

  return (
    <div className={`${tierClass} p-5`} role="region" aria-label="Growth percentile result">
      <div className="flex items-center gap-2.5 mb-3">
        <span className={badgeClass}>{label}</span>
      </div>

      <p className="text-sm leading-relaxed mb-2">
        <strong>{typeLabel}:</strong> {measurement.value}
        {measurement.type === "weight" ? " kg" : " cm"} at{" "}
        {Math.round(measurement.ageMonths * 10) / 10} months old
      </p>

      <p className="text-sm leading-relaxed">{ctx.message}</p>

      {ctx.tier !== "green" && (
        <p className="text-sm leading-relaxed mt-3 font-medium">
          Remember: a single measurement is just a snapshot. Growth trends over
          time are much more meaningful than any single data point.
        </p>
      )}
    </div>
  );
}
