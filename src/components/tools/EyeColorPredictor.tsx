"use client";

import { useState } from "react";
import {
  predictEyeColor,
  EYE_COLOR_HEX,
  EYE_COLOR_FACTS,
  type EyeColor,
} from "@/data/eye-color/data";

const EYE_OPTIONS: { value: EyeColor; label: string }[] = [
  { value: "brown", label: "Brown" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
];

export default function EyeColorPredictor() {
  const [parent1, setParent1] = useState<EyeColor | "">("");
  const [parent2, setParent2] = useState<EyeColor | "">("");

  const predictions =
    parent1 && parent2 ? predictEyeColor(parent1, parent2) : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Baby Eye Color Predictor
        </h1>
        <p className="mt-2 text-muted">
          Predict your baby&apos;s likely eye color based on both parents&apos; eye
          colors. Based on simplified genetics — for fun, not diagnosis.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-500/30 dark:bg-amber-950/20">
        <p className="text-xs text-amber-800 dark:text-amber-300">
          Eye color is influenced by multiple genes and is more complex than simple
          dominant/recessive inheritance. This predictor provides approximate
          probabilities for entertainment purposes.
        </p>
      </div>

      {/* Inputs */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Parent 1 Eye Color
            </label>
            <div className="grid grid-cols-2 gap-2">
              {EYE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setParent1(opt.value)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    parent1 === opt.value
                      ? "bg-primary text-white"
                      : "bg-background border border-card-border text-muted hover:bg-primary-light"
                  }`}
                >
                  <span
                    className="h-4 w-4 rounded-full border border-black/10 shrink-0"
                    style={{ backgroundColor: EYE_COLOR_HEX[opt.value] }}
                  />
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Parent 2 Eye Color
            </label>
            <div className="grid grid-cols-2 gap-2">
              {EYE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setParent2(opt.value)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    parent2 === opt.value
                      ? "bg-primary text-white"
                      : "bg-background border border-card-border text-muted hover:bg-primary-light"
                  }`}
                >
                  <span
                    className="h-4 w-4 rounded-full border border-black/10 shrink-0"
                    style={{ backgroundColor: EYE_COLOR_HEX[opt.value] }}
                  />
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {predictions && (
        <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
          <h2 className="mb-4 text-lg font-bold text-foreground">
            Predicted Baby Eye Color Probabilities
          </h2>
          <div className="space-y-3">
            {predictions
              .sort((a, b) => b.probability - a.probability)
              .map((p) => (
                <div key={p.color} className="flex items-center gap-3">
                  <span
                    className="h-8 w-8 rounded-full border border-black/10 shrink-0"
                    style={{ backgroundColor: EYE_COLOR_HEX[p.color] }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold text-foreground capitalize">
                        {p.color}
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {Math.round(p.probability)}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-background overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${p.probability}%`,
                          backgroundColor: EYE_COLOR_HEX[p.color],
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Fun facts */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Eye Color Facts</h2>
        <ul className="space-y-2 text-sm text-muted">
          {EYE_COLOR_FACTS.map((fact, i) => (
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
            <a href="https://medlineplus.gov/genetics/understanding/traits/eyecolor/" target="_blank" rel="noopener noreferrer" className="underline text-primary">MedlinePlus — Is Eye Color Determined by Genetics?</a>
          </li>
          <li>
            <a href="https://www.aao.org/eye-health/tips-prevention/your-babys-eyes" target="_blank" rel="noopener noreferrer" className="underline text-primary">AAO — Your Baby&apos;s Eyes</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
