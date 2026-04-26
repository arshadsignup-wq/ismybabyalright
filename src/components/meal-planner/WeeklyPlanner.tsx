"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import type { MealPlan, MealSuggestion } from "@/data/meal-planner/types";
import {
  mealSuggestions,
  getSuggestionById,
  getSuggestionsByMealType,
  AGE_RANGES,
} from "@/data/meal-planner/suggestions";

const STORAGE_KEY = "imba_meal_plans";
const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;
const DAY_LABELS: Record<string, string> = {
  monday: "Mon",
  tuesday: "Tue",
  wednesday: "Wed",
  thursday: "Thu",
  friday: "Fri",
  saturday: "Sat",
  sunday: "Sun",
};
const DAY_LABELS_FULL: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};
const MEAL_TYPES = ["breakfast", "lunch", "dinner", "snack"] as const;
const MEAL_ICONS: Record<string, string> = {
  breakfast: "sunrise",
  lunch: "sun",
  dinner: "moon",
  snack: "cookie",
};

const ALLERGEN_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  milk: { bg: "bg-blue-100", text: "text-blue-800", label: "Milk" },
  egg: { bg: "bg-yellow-100", text: "text-yellow-800", label: "Egg" },
  peanut: { bg: "bg-orange-100", text: "text-orange-800", label: "Peanut" },
  "tree-nut": { bg: "bg-amber-100", text: "text-amber-800", label: "Tree Nut" },
  wheat: { bg: "bg-stone-100", text: "text-stone-700", label: "Wheat" },
  soy: { bg: "bg-green-100", text: "text-green-800", label: "Soy" },
  fish: { bg: "bg-cyan-100", text: "text-cyan-800", label: "Fish" },
  shellfish: { bg: "bg-pink-100", text: "text-pink-800", label: "Shellfish" },
  sesame: { bg: "bg-purple-100", text: "text-purple-800", label: "Sesame" },
};

function createEmptyWeek(): MealPlan["week"] {
  const week: MealPlan["week"] = {};
  for (const day of DAYS) {
    week[day] = { breakfast: "", lunch: "", dinner: "", snack: "" };
  }
  return week;
}

function loadSavedPlan(): MealPlan | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as MealPlan;
  } catch {
    return null;
  }
}

function savePlan(plan: MealPlan): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function MealIcon({ type }: { type: string }) {
  const icon = MEAL_ICONS[type] || "circle";

  if (icon === "sunrise") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
        <path d="M12 2v4" />
        <path d="m4.93 10.93 2.83 2.83" />
        <path d="M2 18h2" />
        <path d="M20 18h2" />
        <path d="m16.24 13.76 2.83-2.83" />
        <path d="M18 22H6" />
        <path d="M16 18a4 4 0 0 0-8 0" />
      </svg>
    );
  }
  if (icon === "sun") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    );
  }
  if (icon === "moon") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    );
  }
  // cookie / snack
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
      <path d="M8.5 8.5v.01" />
      <path d="M16 15.5v.01" />
      <path d="M12 12v.01" />
      <path d="M11 17v.01" />
      <path d="M7 14v.01" />
    </svg>
  );
}

function AllergenBadge({ allergen }: { allergen: string }) {
  const config = ALLERGEN_COLORS[allergen];
  if (!config) return null;
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold ${config.bg} ${config.text}`}
    >
      {config.label}
    </span>
  );
}

interface MealSlotProps {
  mealType: (typeof MEAL_TYPES)[number];
  suggestionId: string;
  onSwap: () => void;
}

function MealSlot({ mealType, suggestionId, onSwap }: MealSlotProps) {
  const suggestion = suggestionId ? getSuggestionById(suggestionId) : null;

  return (
    <button
      type="button"
      onClick={onSwap}
      className="w-full text-left p-2 rounded-lg border border-card-border bg-card hover:border-primary/40 hover:bg-primary-light/30 transition-colors cursor-pointer group"
    >
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="text-muted group-hover:text-primary transition-colors">
          <MealIcon type={mealType} />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wide text-muted">
          {mealType}
        </span>
      </div>
      {suggestion ? (
        <div>
          <p className="text-xs font-semibold text-foreground leading-tight truncate">
            {suggestion.name}
          </p>
          {suggestion.allergens.length > 0 && (
            <div className="flex flex-wrap gap-0.5 mt-1">
              {suggestion.allergens.map((a) => (
                <AllergenBadge key={a} allergen={a} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <p className="text-xs text-muted italic">Tap to add</p>
      )}
    </button>
  );
}

interface MealDetailModalProps {
  suggestion: MealSuggestion;
  alternatives: MealSuggestion[];
  onClose: () => void;
  onSwap: (newId: string) => void;
}

function MealDetailModal({
  suggestion,
  alternatives,
  onClose,
  onSwap,
}: MealDetailModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Meal details for ${suggestion.name}`}
    >
      <div
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-md mx-4 mb-4 sm:mb-0 bg-card rounded-2xl border border-card-border shadow-xl max-h-[80vh] overflow-y-auto">
        <div className="p-5">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                {suggestion.name}
              </h3>
              <p className="text-xs text-muted mt-0.5">
                {suggestion.ageRange} - {suggestion.mealType}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-lg text-muted hover:bg-card-alt transition-colors"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
              Ingredients
            </h4>
            <ul className="flex flex-wrap gap-1.5">
              {suggestion.ingredients.map((ing) => (
                <li
                  key={ing}
                  className="text-xs px-2 py-1 rounded-full bg-background-alt text-foreground"
                >
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Allergens */}
          {suggestion.allergens.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                Allergens
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {suggestion.allergens.map((a) => (
                  <AllergenBadge key={a} allergen={a} />
                ))}
              </div>
            </div>
          )}

          {/* Prep Tip */}
          <div className="mb-4 p-3 rounded-xl bg-sunny-light border border-sunny/20">
            <h4 className="text-xs font-semibold text-sunny-foreground mb-1">
              Prep tip
            </h4>
            <p className="text-sm text-foreground leading-relaxed">
              {suggestion.prepTip}
            </p>
          </div>

          {/* Alternatives */}
          {alternatives.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                Swap for something else
              </h4>
              <div className="flex flex-col gap-2">
                {alternatives.map((alt) => (
                  <button
                    key={alt.id}
                    type="button"
                    onClick={() => onSwap(alt.id)}
                    className="w-full text-left p-3 rounded-lg border border-card-border hover:border-primary/40 hover:bg-primary-light/30 transition-colors cursor-pointer"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {alt.name}
                    </p>
                    {alt.allergens.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {alt.allergens.map((a) => (
                          <AllergenBadge key={a} allergen={a} />
                        ))}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface PickerModalProps {
  mealType: (typeof MEAL_TYPES)[number];
  ageMin: number;
  ageMax: number;
  onPick: (id: string) => void;
  onClose: () => void;
}

function PickerModal({
  mealType,
  ageMin,
  ageMax,
  onPick,
  onClose,
}: PickerModalProps) {
  const ageForFilter = Math.floor((ageMin + ageMax) / 2);
  const options = getSuggestionsByMealType(mealType, ageForFilter);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Pick a ${mealType}`}
    >
      <div
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-md mx-4 mb-4 sm:mb-0 bg-card rounded-2xl border border-card-border shadow-xl max-h-[70vh] overflow-y-auto">
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground capitalize">
              Pick a {mealType}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-lg text-muted hover:bg-card-alt transition-colors"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {options.length === 0 ? (
            <p className="text-sm text-muted text-center py-6">
              No {mealType} suggestions for this age range.
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {options.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => onPick(s.id)}
                  className="w-full text-left p-3 rounded-lg border border-card-border hover:border-primary/40 hover:bg-primary-light/30 transition-colors cursor-pointer"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {s.name}
                  </p>
                  <p className="text-xs text-muted mt-0.5 line-clamp-1">
                    {s.ingredients.join(", ")}
                  </p>
                  {s.allergens.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {s.allergens.map((a) => (
                        <AllergenBadge key={a} allergen={a} />
                      ))}
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WeeklyPlanner() {
  const [selectedAgeIdx, setSelectedAgeIdx] = useState(0);
  const [week, setWeek] = useState<MealPlan["week"]>(createEmptyWeek);
  const [loaded, setLoaded] = useState(false);

  // Modal state
  const [detailSlot, setDetailSlot] = useState<{
    day: string;
    mealType: (typeof MEAL_TYPES)[number];
  } | null>(null);
  const [pickerSlot, setPickerSlot] = useState<{
    day: string;
    mealType: (typeof MEAL_TYPES)[number];
  } | null>(null);

  const currentRange = AGE_RANGES[selectedAgeIdx];

  // Load from localStorage on mount
  useEffect(() => {
    const saved = loadSavedPlan();
    if (saved) {
      // Find matching age range
      const matchIdx = AGE_RANGES.findIndex(
        (r) => r.label === saved.ageRange
      );
      if (matchIdx !== -1) {
        setSelectedAgeIdx(matchIdx);
      }
      setWeek(saved.week);
    }
    setLoaded(true);
  }, []);

  // Persist whenever week or age changes (after initial load)
  useEffect(() => {
    if (!loaded) return;
    const plan: MealPlan = {
      ageRange: currentRange.label,
      week,
    };
    savePlan(plan);
  }, [week, currentRange.label, loaded]);

  const generateWeek = useCallback(() => {
    const ageForFilter = Math.floor(
      (currentRange.minMonths + currentRange.maxMonths) / 2
    );
    const newWeek = createEmptyWeek();

    for (const day of DAYS) {
      for (const mealType of MEAL_TYPES) {
        const options = getSuggestionsByMealType(mealType, ageForFilter);
        if (options.length > 0) {
          newWeek[day][mealType] = pickRandom(options).id;
        }
      }
    }
    setWeek(newWeek);
  }, [currentRange]);

  const clearWeek = useCallback(() => {
    setWeek(createEmptyWeek());
  }, []);

  const handleSlotClick = useCallback(
    (day: string, mealType: (typeof MEAL_TYPES)[number]) => {
      const currentId = week[day]?.[mealType] || "";
      if (currentId) {
        setDetailSlot({ day, mealType });
      } else {
        setPickerSlot({ day, mealType });
      }
    },
    [week]
  );

  const handleSwap = useCallback(
    (day: string, mealType: (typeof MEAL_TYPES)[number], newId: string) => {
      setWeek((prev) => ({
        ...prev,
        [day]: {
          ...prev[day],
          [mealType]: newId,
        },
      }));
      setDetailSlot(null);
      setPickerSlot(null);
    },
    []
  );

  const handlePick = useCallback(
    (id: string) => {
      if (pickerSlot) {
        handleSwap(pickerSlot.day, pickerSlot.mealType, id);
      }
    },
    [pickerSlot, handleSwap]
  );

  // Collect all allergens in the current week
  const weekAllergens = useMemo(() => {
    const allergenSet = new Set<string>();
    for (const day of DAYS) {
      for (const mealType of MEAL_TYPES) {
        const id = week[day]?.[mealType];
        if (id) {
          const s = getSuggestionById(id);
          if (s) {
            for (const a of s.allergens) {
              allergenSet.add(a);
            }
          }
        }
      }
    }
    return Array.from(allergenSet).sort();
  }, [week]);

  // Check if the week has any meals
  const hasAnyMeals = useMemo(() => {
    return DAYS.some((day) =>
      MEAL_TYPES.some((mt) => Boolean(week[day]?.[mt]))
    );
  }, [week]);

  // Get detail modal data
  const detailSuggestion = detailSlot
    ? getSuggestionById(week[detailSlot.day]?.[detailSlot.mealType] || "")
    : null;

  const detailAlternatives = detailSlot
    ? getSuggestionsByMealType(
        detailSlot.mealType,
        Math.floor((currentRange.minMonths + currentRange.maxMonths) / 2)
      ).filter(
        (s) => s.id !== (week[detailSlot.day]?.[detailSlot.mealType] || "")
      )
    : [];

  if (!loaded) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Age selector pills */}
      <div>
        <label className="text-xs font-semibold text-muted uppercase tracking-wide mb-2 block">
          Age range
        </label>
        <div className="flex flex-wrap gap-2">
          {AGE_RANGES.map((range, idx) => (
            <button
              key={range.label}
              type="button"
              onClick={() => setSelectedAgeIdx(idx)}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                idx === selectedAgeIdx
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-card-border text-foreground hover:border-primary/40"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={generateWeek}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-hover transition-colors cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
          Generate Week
        </button>
        {hasAnyMeals && (
          <button
            type="button"
            onClick={clearWeek}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-card-border text-foreground font-semibold text-sm hover:border-coral/40 hover:text-coral transition-colors cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
            Clear Week
          </button>
        )}
      </div>

      {/* Weekly allergen summary */}
      {weekAllergens.length > 0 && (
        <div className="p-3 rounded-xl bg-coral-light border border-coral/20">
          <p className="text-xs font-semibold text-coral-foreground mb-1.5">
            Allergens this week
          </p>
          <div className="flex flex-wrap gap-1.5">
            {weekAllergens.map((a) => (
              <AllergenBadge key={a} allergen={a} />
            ))}
          </div>
        </div>
      )}

      {/* Desktop: grid layout */}
      <div className="hidden md:block overflow-x-auto">
        <div className="grid grid-cols-7 gap-3 min-w-[700px]">
          {DAYS.map((day) => (
            <div key={day} className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-foreground text-center uppercase tracking-wide py-2 bg-card-alt rounded-lg border border-card-border">
                {DAY_LABELS[day]}
              </h3>
              {MEAL_TYPES.map((mt) => (
                <MealSlot
                  key={mt}
                  mealType={mt}
                  suggestionId={week[day]?.[mt] || ""}
                  onSwap={() => handleSlotClick(day, mt)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: daily card stack */}
      <div className="md:hidden flex flex-col gap-4">
        {DAYS.map((day) => (
          <div
            key={day}
            className="card p-4"
          >
            <h3 className="text-sm font-bold text-foreground mb-3">
              {DAY_LABELS_FULL[day]}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {MEAL_TYPES.map((mt) => (
                <MealSlot
                  key={mt}
                  mealType={mt}
                  suggestionId={week[day]?.[mt] || ""}
                  onSwap={() => handleSlotClick(day, mt)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {!hasAnyMeals && (
        <div className="text-center py-6">
          <p className="text-muted text-sm">
            Select an age range and tap <strong>Generate Week</strong> to fill
            in meal ideas, or tap any slot to pick a meal.
          </p>
        </div>
      )}

      {/* Detail modal */}
      {detailSlot && detailSuggestion && (
        <MealDetailModal
          suggestion={detailSuggestion}
          alternatives={detailAlternatives}
          onClose={() => setDetailSlot(null)}
          onSwap={(newId) =>
            handleSwap(detailSlot.day, detailSlot.mealType, newId)
          }
        />
      )}

      {/* Picker modal */}
      {pickerSlot && (
        <PickerModal
          mealType={pickerSlot.mealType}
          ageMin={currentRange.minMonths}
          ageMax={currentRange.maxMonths}
          onPick={handlePick}
          onClose={() => setPickerSlot(null)}
        />
      )}
    </div>
  );
}
