"use client";

import { useState } from "react";
import {
  calculateBMI,
  getBMICategory,
  approximatePercentile,
} from "@/data/bmi/data";

export default function BMICalculator() {
  const [weightInput, setWeightInput] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [sex, setSex] = useState<"male" | "female">("male");

  const weight = parseFloat(weightInput);
  const totalInches =
    (parseInt(heightFeet) || 0) * 12 + (parseFloat(heightInches) || 0);
  const age = parseFloat(ageInput);

  const hasResult =
    !isNaN(weight) &&
    weight > 0 &&
    totalInches > 0 &&
    !isNaN(age) &&
    age >= 2 &&
    age <= 18;

  let bmi = 0;
  let percentile = 0;
  let category = { category: "", categoryColor: "", description: "" };

  if (hasResult) {
    bmi = calculateBMI(weight, totalInches);
    percentile = approximatePercentile(bmi, age, sex);
    category = getBMICategory(percentile);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Pediatric BMI Calculator
        </h1>
        <p className="mt-2 text-muted">
          Calculate your child&apos;s BMI-for-age percentile based on CDC growth
          charts. For children ages 2-18.
        </p>
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-500/30 dark:bg-amber-950/20">
        <p className="text-xs text-amber-800 dark:text-amber-300">
          BMI is a screening tool, not a diagnostic tool. Percentile results here
          are approximate. Consult your pediatrician for clinical assessment.
        </p>
      </div>

      {/* Inputs */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="age" className="mb-1.5 block text-sm font-semibold text-foreground">
              Age (years)
            </label>
            <input
              id="age"
              type="number"
              min="2"
              max="18"
              step="0.5"
              placeholder="e.g. 5"
              value={ageInput}
              onChange={(e) => setAgeInput(e.target.value)}
              className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-foreground">Sex</label>
            <div className="flex gap-2">
              {(["male", "female"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSex(s)}
                  className={`flex-1 h-11 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    sex === s
                      ? "bg-primary text-white"
                      : "bg-background border border-card-border text-muted hover:bg-primary-light"
                  }`}
                >
                  {s === "male" ? "Male" : "Female"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="weight" className="mb-1.5 block text-sm font-semibold text-foreground">
            Weight (lbs)
          </label>
          <input
            id="weight"
            type="number"
            min="10"
            max="300"
            step="0.1"
            placeholder="e.g. 45"
            value={weightInput}
            onChange={(e) => setWeightInput(e.target.value)}
            className="h-11 w-full max-w-xs rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">Height</label>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              min="1"
              max="7"
              placeholder="ft"
              value={heightFeet}
              onChange={(e) => setHeightFeet(e.target.value)}
              className="h-11 w-20 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <span className="text-sm text-muted">ft</span>
            <input
              type="number"
              min="0"
              max="11"
              step="0.5"
              placeholder="in"
              value={heightInches}
              onChange={(e) => setHeightInches(e.target.value)}
              className="h-11 w-20 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <span className="text-sm text-muted">in</span>
          </div>
        </div>
      </div>

      {/* Results */}
      {hasResult && (
        <div className="rounded-2xl border-2 p-5" style={{ borderColor: category.categoryColor + "40" }}>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-muted">BMI</p>
              <p className="text-2xl font-bold text-foreground">{bmi.toFixed(1)}</p>
            </div>
            <div>
              <p className="text-xs text-muted">Percentile</p>
              <p className="text-2xl font-bold" style={{ color: category.categoryColor }}>
                {percentile.toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="text-xs text-muted">Category</p>
              <p className="text-lg font-bold" style={{ color: category.categoryColor }}>
                {category.category}
              </p>
            </div>
          </div>
          <p className="text-sm text-muted mt-3 text-center">{category.description}</p>
        </div>
      )}

      {/* BMI categories reference */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">BMI-for-Age Categories</h2>
        <div className="space-y-2">
          {[
            { label: "Underweight", range: "Below 5th percentile", color: "#3b82f6" },
            { label: "Healthy Weight", range: "5th to 84th percentile", color: "#22c55e" },
            { label: "Overweight", range: "85th to 94th percentile", color: "#f59e0b" },
            { label: "Obese", range: "95th percentile and above", color: "#ef4444" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: c.color }} />
              <span className="text-sm font-semibold text-foreground w-32">{c.label}</span>
              <span className="text-sm text-muted">{c.range}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a href="https://www.cdc.gov/bmi/child-teen-calculator/index.html" target="_blank" rel="noopener noreferrer" className="underline text-primary">CDC — BMI Calculator for Children</a>
          </li>
          <li>
            <a href="https://www.healthychildren.org/English/health-issues/conditions/obesity/Pages/Body-Mass-Index-Formula.aspx" target="_blank" rel="noopener noreferrer" className="underline text-primary">AAP — BMI for Children</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
