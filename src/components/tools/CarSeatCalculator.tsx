"use client";

import { useState } from "react";
import {
  CAR_SEAT_STAGES,
  getCarSeatRecommendation,
} from "@/data/car-seat/data";

export default function CarSeatCalculator() {
  const [ageInput, setAgeInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");

  const ageMonths = ageInput !== "" ? parseInt(ageInput, 10) : null;
  const weightLbs = weightInput !== "" ? parseFloat(weightInput) : null;
  const heightIn =
    heightFeet !== ""
      ? parseInt(heightFeet, 10) * 12 +
        (heightInches !== "" ? parseInt(heightInches, 10) : 0)
      : null;

  const recommendation =
    ageMonths !== null &&
    ageMonths >= 0 &&
    weightLbs !== null &&
    weightLbs > 0 &&
    heightIn !== null &&
    heightIn > 0
      ? getCarSeatRecommendation(ageMonths, weightLbs, heightIn)
      : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Car Seat Safety Guide
        </h1>
        <p className="mt-2 text-muted">
          Find the right car seat type for your child based on their age,
          weight, and height. Based on AAP and NHTSA guidelines.
        </p>
      </div>

      {/* Inputs */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="age"
              className="mb-1.5 block text-sm font-semibold text-foreground"
            >
              Age (months)
            </label>
            <input
              id="age"
              type="number"
              inputMode="numeric"
              min="0"
              max="192"
              placeholder="e.g. 18"
              value={ageInput}
              onChange={(e) => setAgeInput(e.target.value)}
              className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label
              htmlFor="weight"
              className="mb-1.5 block text-sm font-semibold text-foreground"
            >
              Weight (lbs)
            </label>
            <input
              id="weight"
              type="number"
              inputMode="decimal"
              min="0"
              placeholder="e.g. 25"
              value={weightInput}
              onChange={(e) => setWeightInput(e.target.value)}
              className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-foreground">
              Height
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                inputMode="numeric"
                min="1"
                max="6"
                placeholder="ft"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                className="h-11 w-16 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <span className="text-sm text-muted">ft</span>
              <input
                type="number"
                inputMode="numeric"
                min="0"
                max="11"
                placeholder="in"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                className="h-11 w-16 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <span className="text-sm text-muted">in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      {recommendation && (
        <div
          className={`rounded-2xl border-2 p-4 sm:p-6 space-y-3 ${
            recommendation.isTransitioning
              ? "border-amber-300 bg-amber-50 dark:border-amber-500/40 dark:bg-amber-950/30"
              : "border-primary/30 bg-primary-light/30"
          }`}
        >
          <h2 className="text-lg font-bold text-foreground">
            {recommendation.stage.name}
          </h2>
          <p className="text-sm text-foreground">{recommendation.message}</p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <p className="text-xs font-semibold text-muted uppercase">Direction</p>
              <p className="text-sm font-bold text-foreground">
                {recommendation.stage.direction}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted uppercase">Weight Range</p>
              <p className="text-sm font-bold text-foreground">
                {recommendation.stage.weightRange}
              </p>
            </div>
          </div>

          {/* Safety tips */}
          <div className="border-t border-card-border pt-3">
            <p className="text-sm font-bold text-foreground mb-2">
              Safety Tips
            </p>
            <ul className="space-y-1.5">
              {recommendation.stage.safetyTips.map((tip, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted">
                  <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-muted italic">
            When to transition: {recommendation.stage.whenToTransition}
          </p>
        </div>
      )}

      {/* All stages */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">
          Car Seat Stages Overview
        </h2>
        <div className="space-y-4">
          {CAR_SEAT_STAGES.map((stage, index) => (
            <div
              key={stage.id}
              className={`rounded-xl border border-card-border p-4 ${
                recommendation?.stage.id === stage.id
                  ? "ring-2 ring-primary/30 bg-primary-light/20"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-light text-primary text-xs font-bold">
                  {index + 1}
                </span>
                <h3 className="text-sm font-bold text-foreground">
                  {stage.name}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted mb-2">
                <div>
                  <span className="font-semibold">Age:</span> {stage.ageRange}
                </div>
                <div>
                  <span className="font-semibold">Weight:</span>{" "}
                  {stage.weightRange}
                </div>
              </div>
              <p className="text-xs text-muted">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Important reminder */}
      <div className="rounded-xl border-2 border-red-300 bg-red-50 px-4 py-3 dark:border-red-500/40 dark:bg-red-950/30">
        <p className="text-sm font-semibold text-red-800 dark:text-red-300">
          Always check your specific car seat&apos;s manual for exact weight and
          height limits. Car seat laws vary by state. When in doubt, visit a free
          car seat inspection station — find one at{" "}
          <a
            href="https://www.nhtsa.gov/equipment/car-seats-and-booster-seats#inspection-station"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            NHTSA.gov
          </a>
          .
        </p>
      </div>

      {/* Sources */}
      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a
              href="https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              AAP — Car Safety Seats
            </a>
          </li>
          <li>
            <a
              href="https://www.nhtsa.gov/equipment/car-seats-and-booster-seats"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              NHTSA — Car Seats and Booster Seats
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
