"use client";

import { useState } from "react";
import {
  predictHeight,
  feetInchesToInches,
  inchesToFeetInches,
  inchesToCm,
  AVERAGE_HEIGHTS,
} from "@/data/height-predictor/data";

type HeightUnit = "imperial" | "metric";

export default function HeightPredictor() {
  const [unit, setUnit] = useState<HeightUnit>("imperial");
  const [childSex, setChildSex] = useState<"male" | "female">("male");

  // Imperial inputs
  const [momFeet, setMomFeet] = useState("");
  const [momInches, setMomInches] = useState("");
  const [dadFeet, setDadFeet] = useState("");
  const [dadInches, setDadInches] = useState("");

  // Metric inputs
  const [momCm, setMomCm] = useState("");
  const [dadCm, setDadCm] = useState("");

  function getMotherInches(): number | null {
    if (unit === "imperial") {
      const ft = parseInt(momFeet, 10);
      const inc = parseInt(momInches, 10);
      if (isNaN(ft) || ft < 0) return null;
      return feetInchesToInches(ft, isNaN(inc) ? 0 : inc);
    }
    const cm = parseFloat(momCm);
    if (isNaN(cm) || cm <= 0) return null;
    return cm / 2.54;
  }

  function getFatherInches(): number | null {
    if (unit === "imperial") {
      const ft = parseInt(dadFeet, 10);
      const inc = parseInt(dadInches, 10);
      if (isNaN(ft) || ft < 0) return null;
      return feetInchesToInches(ft, isNaN(inc) ? 0 : inc);
    }
    const cm = parseFloat(dadCm);
    if (isNaN(cm) || cm <= 0) return null;
    return cm / 2.54;
  }

  const motherIn = getMotherInches();
  const fatherIn = getFatherInches();
  const result =
    motherIn !== null && fatherIn !== null
      ? predictHeight(motherIn, fatherIn, childSex)
      : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Child Height Predictor
        </h1>
        <p className="mt-2 text-muted">
          Estimate your child&apos;s adult height based on parent heights using
          the mid-parental height formula used by pediatricians.
        </p>
      </div>

      {/* Inputs */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
        {/* Unit toggle */}
        <div>
          <p className="mb-1.5 text-sm font-semibold text-foreground">Units</p>
          <div className="flex rounded-xl border border-card-border overflow-hidden w-fit">
            <button
              onClick={() => setUnit("imperial")}
              className={`px-3 h-11 text-sm font-medium transition-colors cursor-pointer ${
                unit === "imperial"
                  ? "bg-primary text-white"
                  : "bg-card text-muted hover:bg-primary-light"
              }`}
            >
              ft / in
            </button>
            <button
              onClick={() => setUnit("metric")}
              className={`px-3 h-11 text-sm font-medium transition-colors cursor-pointer ${
                unit === "metric"
                  ? "bg-primary text-white"
                  : "bg-card text-muted hover:bg-primary-light"
              }`}
            >
              cm
            </button>
          </div>
        </div>

        {/* Child's sex */}
        <div>
          <p className="mb-1.5 text-sm font-semibold text-foreground">
            Child&apos;s sex
          </p>
          <div className="flex rounded-xl border border-card-border overflow-hidden w-fit">
            <button
              onClick={() => setChildSex("male")}
              className={`px-4 h-11 text-sm font-medium transition-colors cursor-pointer ${
                childSex === "male"
                  ? "bg-primary text-white"
                  : "bg-card text-muted hover:bg-primary-light"
              }`}
            >
              Boy
            </button>
            <button
              onClick={() => setChildSex("female")}
              className={`px-4 h-11 text-sm font-medium transition-colors cursor-pointer ${
                childSex === "female"
                  ? "bg-primary text-white"
                  : "bg-card text-muted hover:bg-primary-light"
              }`}
            >
              Girl
            </button>
          </div>
        </div>

        {/* Mother's height */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">
            Mother&apos;s height
          </label>
          {unit === "imperial" ? (
            <div className="flex gap-2 items-center">
              <input
                type="number"
                inputMode="numeric"
                min="3"
                max="7"
                placeholder="ft"
                value={momFeet}
                onChange={(e) => setMomFeet(e.target.value)}
                className="h-11 w-20 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <span className="text-sm text-muted">ft</span>
              <input
                type="number"
                inputMode="numeric"
                min="0"
                max="11"
                placeholder="in"
                value={momInches}
                onChange={(e) => setMomInches(e.target.value)}
                className="h-11 w-20 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <span className="text-sm text-muted">in</span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <input
                type="number"
                inputMode="decimal"
                min="100"
                max="220"
                placeholder="e.g. 163"
                value={momCm}
                onChange={(e) => setMomCm(e.target.value)}
                className="h-11 w-32 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <span className="text-sm text-muted">cm</span>
            </div>
          )}
        </div>

        {/* Father's height */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">
            Father&apos;s height
          </label>
          {unit === "imperial" ? (
            <div className="flex gap-2 items-center">
              <input
                type="number"
                inputMode="numeric"
                min="3"
                max="7"
                placeholder="ft"
                value={dadFeet}
                onChange={(e) => setDadFeet(e.target.value)}
                className="h-11 w-20 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <span className="text-sm text-muted">ft</span>
              <input
                type="number"
                inputMode="numeric"
                min="0"
                max="11"
                placeholder="in"
                value={dadInches}
                onChange={(e) => setDadInches(e.target.value)}
                className="h-11 w-20 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <span className="text-sm text-muted">in</span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <input
                type="number"
                inputMode="decimal"
                min="100"
                max="220"
                placeholder="e.g. 178"
                value={dadCm}
                onChange={(e) => setDadCm(e.target.value)}
                className="h-11 w-32 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <span className="text-sm text-muted">cm</span>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-4 sm:p-6 space-y-3">
          <h2 className="text-lg font-bold text-foreground">
            Predicted Adult Height
          </h2>
          <div className="text-center py-4">
            <p className="text-3xl font-extrabold text-primary">
              {inchesToFeetInches(result.predictedInches)}
            </p>
            <p className="text-sm text-muted mt-1">
              ({inchesToCm(result.predictedInches)} cm)
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted">
              Expected range:{" "}
              <span className="font-semibold text-foreground">
                {inchesToFeetInches(result.rangeMin)} &ndash;{" "}
                {inchesToFeetInches(result.rangeMax)}
              </span>
            </p>
            <p className="text-xs text-muted mt-1">
              ({inchesToCm(result.rangeMin)} &ndash; {inchesToCm(result.rangeMax)}{" "}
              cm)
            </p>
          </div>
          <div className="border-t border-card-border pt-3 mt-3">
            <p className="text-xs text-muted">
              For reference, average adult height: Men{" "}
              {AVERAGE_HEIGHTS.male.label} ({inchesToCm(AVERAGE_HEIGHTS.male.inches)} cm),
              Women {AVERAGE_HEIGHTS.female.label} ({inchesToCm(AVERAGE_HEIGHTS.female.inches)} cm).
            </p>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="rounded-xl border-2 border-amber-300 bg-amber-50 px-4 py-3 dark:border-amber-500/40 dark:bg-amber-950/30">
        <p className="text-sm text-amber-800 dark:text-amber-300">
          <span className="font-semibold">Note:</span> The mid-parental height
          formula is an estimate with a margin of error of about +/- 2 inches.
          Actual adult height is influenced by nutrition, health, genetics, and
          other factors. This is not a medical prediction.
        </p>
      </div>

      {/* Sources */}
      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a
              href="https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Predicting-a-Childs-Adult-Height.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              AAP — Predicting a Child&apos;s Adult Height
            </a>
          </li>
          <li>
            <a
              href="https://www.cdc.gov/growthcharts/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              CDC Growth Charts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
