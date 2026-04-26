"use client";

import { useState } from "react";
import { calculateWFLPercentile, type WFLTier } from "@/lib/wflPercentile";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

type Sex = "boy" | "girl";
type WeightUnit = "kg" | "lbs";
type LengthUnit = "cm" | "in";

interface WFLResultData {
  percentile: number;
  zScore: number;
  interpretation: string;
  tier: WFLTier;
  weightKg: number;
  lengthCm: number;
  sex: Sex;
}

/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

const LBS_PER_KG = 2.20462;
const CM_PER_IN = 2.54;

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function toKg(value: number, unit: WeightUnit): number {
  return unit === "lbs" ? value / LBS_PER_KG : value;
}

function toCm(value: number, unit: LengthUnit): number {
  return unit === "in" ? value * CM_PER_IN : value;
}

function ordinal(n: number): string {
  const rounded = Math.round(n * 10) / 10;
  const s = ["th", "st", "nd", "rd"];
  const whole = Math.floor(rounded);
  const v = whole % 100;
  const suffix = s[(v - 20) % 10] || s[v] || s[0];
  // If there is a decimal, show it
  if (rounded !== whole) {
    return `${rounded}${suffix}`;
  }
  return `${whole}${suffix}`;
}

/* -------------------------------------------------------------------------- */
/*  Tier styling maps                                                          */
/* -------------------------------------------------------------------------- */

const tierColors: Record<WFLTier, { bg: string; border: string; text: string; badge: string; badgeBg: string }> = {
  normal: {
    bg: "bg-[var(--color-safe-light)]",
    border: "border-[var(--color-safe-border)]",
    text: "text-[var(--color-safe-foreground)]",
    badge: "text-white",
    badgeBg: "bg-[var(--color-safe)]",
  },
  monitor: {
    bg: "bg-[var(--color-monitor-light)]",
    border: "border-[var(--color-monitor-border)]",
    text: "text-[var(--color-monitor-foreground)]",
    badge: "text-white",
    badgeBg: "bg-[var(--color-monitor)]",
  },
  concern: {
    bg: "bg-[var(--color-concern-light)]",
    border: "border-[var(--color-concern-border)]",
    text: "text-[var(--color-concern-foreground)]",
    badge: "text-white",
    badgeBg: "bg-[var(--color-concern)]",
  },
  urgent: {
    bg: "bg-red-50",
    border: "border-red-300",
    text: "text-red-900",
    badge: "text-white",
    badgeBg: "bg-red-600",
  },
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function WFLCalculator() {
  const [sex, setSex] = useState<Sex>("boy");
  const [weightInput, setWeightInput] = useState("");
  const [lengthInput, setLengthInput] = useState("");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [lengthUnit, setLengthUnit] = useState<LengthUnit>("cm");
  const [result, setResult] = useState<WFLResultData | null>(null);
  const [error, setError] = useState<string | null>(null);

  /* ---------------------------------------------------------------------- */
  /*  Calculate                                                              */
  /* ---------------------------------------------------------------------- */

  function handleCalculate() {
    setError(null);
    setResult(null);

    const rawWeight = parseFloat(weightInput);
    const rawLength = parseFloat(lengthInput);

    if (isNaN(rawWeight) || rawWeight <= 0) {
      setError("Please enter a valid weight greater than zero.");
      return;
    }

    if (isNaN(rawLength) || rawLength <= 0) {
      setError("Please enter a valid length greater than zero.");
      return;
    }

    const weightKg = toKg(rawWeight, weightUnit);
    const lengthCm = toCm(rawLength, lengthUnit);

    // Validate ranges
    if (weightKg < 0.5 || weightKg > 30) {
      setError(
        "Weight seems outside the expected range. Please check your entry and unit selection."
      );
      return;
    }

    if (lengthCm < 44.75 || lengthCm > 110.25) {
      setError(
        "Length must be between 45 cm and 110 cm (approximately 17.7 to 43.3 inches). This calculator covers birth to about 2 years."
      );
      return;
    }

    const calcResult = calculateWFLPercentile(weightKg, lengthCm, sex);

    if (calcResult.percentile < 0) {
      setError(calcResult.interpretation);
      return;
    }

    setResult({
      ...calcResult,
      weightKg: Math.round(weightKg * 100) / 100,
      lengthCm: Math.round(lengthCm * 10) / 10,
      sex,
    });
  }

  /* ---------------------------------------------------------------------- */
  /*  Render                                                                 */
  /* ---------------------------------------------------------------------- */

  return (
    <section className="card p-5 sm:p-8" aria-label="Weight-for-length calculator">
      <h2>Weight-for-Length Calculator</h2>
      <p className="text-sm text-muted mb-6 leading-relaxed">
        Check how your baby&apos;s weight compares to other children of the same
        length and sex, using WHO growth standards. This is especially useful for
        children under 2 years who are measured lying down.
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
      {/*  Weight Input                                                     */}
      {/* ---------------------------------------------------------------- */}
      <div className="mb-5">
        <label
          htmlFor="wfl-weight"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Weight
        </label>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <input
              id="wfl-weight"
              type="number"
              inputMode="decimal"
              step="0.01"
              min="0"
              value={weightInput}
              onChange={(e) => setWeightInput(e.target.value)}
              placeholder={weightUnit === "kg" ? "e.g. 7.5" : "e.g. 16.5"}
              className="w-36 px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary pr-12"
              aria-required="true"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted pointer-events-none">
              {weightUnit}
            </span>
          </div>
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
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  Length Input                                                      */}
      {/* ---------------------------------------------------------------- */}
      <div className="mb-5">
        <label
          htmlFor="wfl-length"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Length (measured lying down)
        </label>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <input
              id="wfl-length"
              type="number"
              inputMode="decimal"
              step="0.1"
              min="0"
              value={lengthInput}
              onChange={(e) => setLengthInput(e.target.value)}
              placeholder={lengthUnit === "cm" ? "e.g. 68" : "e.g. 26.8"}
              className="w-36 px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary pr-12"
              aria-required="true"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted pointer-events-none">
              {lengthUnit}
            </span>
          </div>
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
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  Calculate Button                                                 */}
      {/* ---------------------------------------------------------------- */}
      <div className="mb-6">
        <button
          type="button"
          onClick={handleCalculate}
          className="px-6 py-2.5 min-h-[44px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
          aria-label="Calculate weight-for-length percentile"
        >
          Calculate
        </button>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  Error                                                            */}
      {/* ---------------------------------------------------------------- */}
      {error && (
        <div className="tier-concern p-4 mb-6 text-sm" role="alert">
          {error}
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/*  Result                                                           */}
      {/* ---------------------------------------------------------------- */}
      {result && (
        <div className="mb-6" aria-live="polite">
          <WFLResult data={result} />
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/*  What is weight-for-length?                                       */}
      {/* ---------------------------------------------------------------- */}
      <details className="card-alt p-4 rounded-lg mb-4">
        <summary className="cursor-pointer text-sm font-semibold text-foreground min-h-[44px] flex items-center select-none">
          What is weight-for-length?
        </summary>
        <div className="mt-3 text-sm text-muted leading-relaxed space-y-3">
          <p>
            Weight-for-length looks at how your baby&apos;s weight relates to
            their length, rather than their age. This gives a clearer picture
            of body proportionality - whether your baby is lean, average,
            or heavy for their size.
          </p>
          <p>
            <strong className="text-foreground">
              Why it matters:
            </strong>{" "}
            Two babies can be the same age but very different lengths. A baby
            at the 25th percentile for weight-for-age might actually be perfectly
            proportional for their length. Weight-for-length helps tell the
            difference between a baby who is simply petite overall and one who
            may need nutritional support.
          </p>
          <p>
            <strong className="text-foreground">
              How it is measured:
            </strong>{" "}
            For children under 2 years, length is measured lying down (recumbent
            length). This is different from standing height, which is used for
            older children. The WHO provides separate reference charts for each.
          </p>
          <p className="font-medium text-foreground">
            This calculator uses WHO Child Growth Standards, the international
            reference recommended by the CDC for children under 2 years old.
          </p>
        </div>
      </details>

      {/* ---------------------------------------------------------------- */}
      {/*  Disclaimer                                                       */}
      {/* ---------------------------------------------------------------- */}
      <div className="card-alt p-4 rounded-lg text-xs text-muted leading-relaxed space-y-2">
        <p>
          <strong className="text-foreground">Note:</strong> Based on WHO
          weight-for-length standards for children under 2 years. Data is for
          recumbent length (measured lying down), which is standard for this
          age group.
        </p>
        <p>
          <strong className="text-foreground">Disclaimer:</strong> This tool is
          for informational purposes only and does not replace professional
          medical advice. Growth percentiles are one piece of the puzzle -
          your pediatrician considers many factors when evaluating your
          baby&apos;s health. Always discuss any concerns with your
          child&apos;s healthcare provider.
        </p>
        <p>
          All calculations happen in your browser. No data is stored or sent
          anywhere.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Result Sub-component                                                       */
/* -------------------------------------------------------------------------- */

function WFLResult({ data }: { data: WFLResultData }) {
  const colors = tierColors[data.tier];

  // Position on the percentile bar (0-100%)
  const barPosition = Math.max(1, Math.min(99, data.percentile));

  return (
    <div
      className={`${colors.bg} border-[1.5px] ${colors.border} ${colors.text} rounded-xl p-5`}
      role="region"
      aria-label="Weight-for-length result"
    >
      {/* Percentile headline */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {ordinal(data.percentile)}
          </span>
          <span className="text-base font-semibold opacity-80">percentile</span>
        </div>
        <span
          className={`${colors.badgeBg} ${colors.badge} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide inline-flex items-center gap-1.5 w-fit`}
        >
          {data.tier === "normal" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
          )}
          {data.tier === "monitor" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
          )}
          {data.tier === "concern" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
          )}
          {data.tier === "urgent" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
          )}
          {data.tier === "normal"
            ? "Healthy range"
            : data.tier === "monitor"
              ? "Monitor"
              : data.tier === "concern"
                ? "Worth discussing"
                : "Talk to your doctor"}
        </span>
      </div>

      {/* Visual percentile bar */}
      <div className="mb-4" aria-hidden="true">
        <div className="relative h-3 rounded-full bg-white/50 overflow-hidden">
          {/* Colored zones */}
          <div className="absolute inset-0 flex">
            <div className="h-full bg-red-300/60" style={{ width: "3%" }} />
            <div className="h-full bg-amber-200/60" style={{ width: "12%" }} />
            <div className="h-full bg-emerald-200/60" style={{ width: "70%" }} />
            <div className="h-full bg-amber-200/60" style={{ width: "12%" }} />
            <div className="h-full bg-red-300/60" style={{ width: "3%" }} />
          </div>
          {/* Marker */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-foreground border-2 border-white shadow-md transition-all duration-500"
            style={{ left: `calc(${barPosition}% - 8px)` }}
          />
        </div>
        {/* Labels */}
        <div className="flex justify-between mt-1.5 text-[10px] font-medium opacity-60">
          <span>3rd</span>
          <span>15th</span>
          <span>50th</span>
          <span>85th</span>
          <span>97th</span>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm leading-relaxed">
        <p>
          <strong>
            {data.weightKg} kg at {data.lengthCm} cm
          </strong>{" "}
          ({data.sex === "boy" ? "boy" : "girl"})
        </p>
        <p>
          <strong>Z-score:</strong> {data.zScore > 0 ? "+" : ""}
          {data.zScore}
        </p>
        <p>{data.interpretation}</p>
      </div>

      {/* Reassuring note for non-normal tiers */}
      {data.tier !== "normal" && (
        <p className="text-sm leading-relaxed mt-3 font-medium">
          Remember: a single measurement is just a snapshot. Growth trends over
          time are much more meaningful than any single data point.
        </p>
      )}
    </div>
  );
}
