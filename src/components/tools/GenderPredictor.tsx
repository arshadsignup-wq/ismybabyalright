"use client";

import { useState } from "react";
import {
  predictGender,
  calculateLunarAge,
  DISCLAIMER,
  FUN_FACTS,
} from "@/data/gender-predictor/data";

export default function GenderPredictor() {
  const [birthDateInput, setBirthDateInput] = useState("");
  const [conceptionMonthInput, setConceptionMonthInput] = useState("");

  let prediction: "boy" | "girl" | null = null;
  let lunarAge: number | null = null;
  let conceptionMonth: number | null = null;

  if (birthDateInput && conceptionMonthInput) {
    const birthDate = new Date(birthDateInput + "T00:00:00");
    const conceptionDate = new Date(conceptionMonthInput + "-15T00:00:00");
    if (!isNaN(birthDate.getTime()) && !isNaN(conceptionDate.getTime())) {
      lunarAge = calculateLunarAge(birthDate, conceptionDate);
      conceptionMonth = conceptionDate.getMonth() + 1;
      if (lunarAge >= 18 && lunarAge <= 45) {
        prediction = predictGender(lunarAge, conceptionMonth);
      }
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Chinese Gender Predictor
        </h1>
        <p className="mt-2 text-muted">
          The traditional Chinese Gender Prediction Chart uses the mother&apos;s
          lunar age and month of conception to predict baby&apos;s sex. Just for fun!
        </p>
      </div>

      {/* Disclaimer */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-500/30 dark:bg-amber-950/20">
        <p className="text-xs text-amber-800 dark:text-amber-300">{DISCLAIMER}</p>
      </div>

      {/* Inputs */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
        <div>
          <label htmlFor="mom-bday" className="mb-1.5 block text-sm font-semibold text-foreground">
            Mother&apos;s Date of Birth
          </label>
          <input
            id="mom-bday"
            type="date"
            value={birthDateInput}
            onChange={(e) => setBirthDateInput(e.target.value)}
            className="h-11 w-full max-w-xs rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="conception-month" className="mb-1.5 block text-sm font-semibold text-foreground">
            Month of Conception
          </label>
          <input
            id="conception-month"
            type="month"
            value={conceptionMonthInput}
            onChange={(e) => setConceptionMonthInput(e.target.value)}
            className="h-11 w-full max-w-xs rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Result */}
      {prediction && lunarAge && conceptionMonth && (
        <div
          className={`rounded-2xl border-2 p-6 text-center ${
            prediction === "boy"
              ? "border-blue-300 bg-blue-50 dark:border-blue-500/30 dark:bg-blue-950/20"
              : "border-pink-300 bg-pink-50 dark:border-pink-500/30 dark:bg-pink-950/20"
          }`}
        >
          <p className="text-6xl mb-2">{prediction === "boy" ? "👦" : "👧"}</p>
          <p
            className={`text-2xl font-bold ${
              prediction === "boy"
                ? "text-blue-700 dark:text-blue-300"
                : "text-pink-700 dark:text-pink-300"
            }`}
          >
            It&apos;s a {prediction === "boy" ? "Boy" : "Girl"}!
          </p>
          <p className="text-sm text-muted mt-2">
            Based on lunar age {lunarAge} and conception month {conceptionMonth}
          </p>
          <p className="text-xs text-muted mt-1">(For entertainment only — 50/50 accuracy)</p>
        </div>
      )}

      {lunarAge !== null && (lunarAge < 18 || lunarAge > 45) && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-500/30 dark:bg-amber-950/20">
          <p className="text-sm text-amber-800 dark:text-amber-300">
            The Chinese Gender Chart covers lunar ages 18-45. Your calculated lunar age ({lunarAge}) is outside this range.
          </p>
        </div>
      )}

      {/* Fun facts */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Fun Facts</h2>
        <ul className="space-y-2 text-sm text-muted">
          {FUN_FACTS.map((fact, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
              {fact}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/10095436/" target="_blank" rel="noopener noreferrer" className="underline text-primary">PubMed — Are the Chinese Calendar Methods Accurate?</a>
          </li>
          <li>
            <a href="https://www.healthline.com/health/pregnancy/chinese-gender-predictor" target="_blank" rel="noopener noreferrer" className="underline text-primary">Healthline — Chinese Gender Predictor</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
