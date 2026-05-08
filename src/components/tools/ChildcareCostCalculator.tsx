"use client";

import { useState } from "react";
import {
  CHILDCARE_TYPES,
  REGION_MULTIPLIERS,
  TAX_BENEFITS,
  calculateMonthlyCost,
  type ChildcareType,
} from "@/data/childcare-cost/data";

export default function ChildcareCostCalculator() {
  const [selectedType, setSelectedType] = useState(CHILDCARE_TYPES[0].id);
  const [ageGroup, setAgeGroup] = useState<"infant" | "toddler" | "preschool">(
    "infant"
  );
  const [region, setRegion] = useState(0); // index into REGION_MULTIPLIERS
  const [hoursPerWeek, setHoursPerWeek] = useState("40");

  const careType = CHILDCARE_TYPES.find((t) => t.id === selectedType)!;
  const hours = parseInt(hoursPerWeek, 10) || 40;
  const multiplier = REGION_MULTIPLIERS[region].multiplier;
  const monthlyCost = calculateMonthlyCost(careType, ageGroup, multiplier, hours);
  const annualCost = monthlyCost * 12;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Childcare Cost Calculator
        </h1>
        <p className="mt-2 text-muted">
          Estimate monthly and annual childcare costs by care type, child age,
          region, and hours per week. Compare options side by side.
        </p>
      </div>

      {/* Inputs */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
        {/* Care type */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">
            Type of care
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {CHILDCARE_TYPES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Age group */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-foreground">
              Child&apos;s age
            </label>
            <select
              value={ageGroup}
              onChange={(e) =>
                setAgeGroup(
                  e.target.value as "infant" | "toddler" | "preschool"
                )
              }
              className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              <option value="infant">Infant (0-12 mo)</option>
              <option value="toddler">Toddler (1-3 yr)</option>
              <option value="preschool">Preschool (3-5 yr)</option>
            </select>
          </div>

          {/* Region */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-foreground">
              Region
            </label>
            <select
              value={region}
              onChange={(e) => setRegion(parseInt(e.target.value, 10))}
              className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              {REGION_MULTIPLIERS.map((r, i) => (
                <option key={i} value={i}>
                  {r.region}
                </option>
              ))}
            </select>
          </div>

          {/* Hours/week */}
          <div>
            <label
              htmlFor="hours"
              className="mb-1.5 block text-sm font-semibold text-foreground"
            >
              Hours/week
            </label>
            <input
              id="hours"
              type="number"
              inputMode="numeric"
              min="5"
              max="60"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(e.target.value)}
              className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>

      {/* Cost result */}
      <div className="rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-4 sm:p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">
          Estimated Cost — {careType.name}
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <p className="text-xs font-semibold text-muted uppercase">Monthly</p>
            <p className="text-2xl font-extrabold text-primary">
              ${monthlyCost.toLocaleString()}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-muted uppercase">Annual</p>
            <p className="text-2xl font-extrabold text-primary">
              ${annualCost.toLocaleString()}
            </p>
          </div>
        </div>
        <p className="text-xs text-muted">
          Based on {hours} hours/week in {REGION_MULTIPLIERS[region].region} for{" "}
          {ageGroup === "infant"
            ? "an infant"
            : ageGroup === "toddler"
              ? "a toddler"
              : "a preschooler"}
          .
        </p>
      </div>

      {/* Comparison table */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">
          Compare All Options
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-card-border">
                <th className="py-2 pr-3 font-semibold text-muted">Type</th>
                <th className="py-2 pr-3 font-semibold text-muted">Monthly</th>
                <th className="py-2 font-semibold text-muted">Annual</th>
              </tr>
            </thead>
            <tbody>
              {CHILDCARE_TYPES.map((t) => {
                const cost = calculateMonthlyCost(t, ageGroup, multiplier, hours);
                return (
                  <tr
                    key={t.id}
                    className={`border-b border-card-border/50 ${
                      t.id === selectedType ? "bg-primary-light/40" : ""
                    }`}
                  >
                    <td className="py-2.5 pr-3 font-medium text-foreground">
                      {t.name}
                    </td>
                    <td className="py-2.5 pr-3 tabular-nums text-foreground">
                      ${cost.toLocaleString()}
                    </td>
                    <td className="py-2.5 tabular-nums text-foreground">
                      ${(cost * 12).toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pros and cons */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="text-lg font-bold text-foreground mb-1">
          {careType.name}
        </h2>
        <p className="text-sm text-muted mb-4">{careType.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-bold text-green-700 dark:text-green-400 mb-2">
              Pros
            </p>
            <ul className="space-y-1.5">
              {careType.prosAndCons.pros.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted">
                  <span className="mt-0.5 shrink-0 text-green-600" aria-hidden="true">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-red-700 dark:text-red-400 mb-2">
              Cons
            </p>
            <ul className="space-y-1.5">
              {careType.prosAndCons.cons.map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted">
                  <span className="mt-0.5 shrink-0 text-red-600" aria-hidden="true">&ndash;</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tax benefits */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">
          Tax Benefits &amp; Savings
        </h2>
        <div className="space-y-3">
          {TAX_BENEFITS.map((tb, i) => (
            <div key={i} className="border-b border-card-border/50 pb-3 last:border-0 last:pb-0">
              <p className="text-sm font-bold text-foreground">{tb.name}</p>
              <p className="text-xs font-semibold text-primary mt-0.5">
                {tb.maxBenefit}
              </p>
              <p className="text-sm text-muted mt-1">{tb.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="rounded-xl border-2 border-amber-300 bg-amber-50 px-4 py-3 dark:border-amber-500/40 dark:bg-amber-950/30">
        <p className="text-sm text-amber-800 dark:text-amber-300">
          Costs are estimates based on national averages and may vary
          significantly by specific city, provider, and care arrangement. Tax
          information is for general reference — consult a tax professional for
          your specific situation.
        </p>
      </div>

      {/* Sources */}
      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a
              href="https://www.care.com/care-index"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              Care.com — Cost of Care Survey
            </a>
          </li>
          <li>
            <a
              href="https://www.irs.gov/taxtopics/tc602"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              IRS — Child and Dependent Care Credit
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
