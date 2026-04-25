"use client";

import { useState, useMemo } from "react";
import { foodGuides } from "@/data/food/foods";
import type { FoodGuide } from "@/data/food/types";
import FoodGuideCard from "./FoodGuideCard";

interface FoodSearchProps {
  ageMonths: number;
}

const categories = [
  { key: "all", label: "All" },
  { key: "fruit", label: "Fruit" },
  { key: "vegetable", label: "Veggie" },
  { key: "grain", label: "Grain" },
  { key: "protein", label: "Protein" },
  { key: "dairy", label: "Dairy" },
] as const;

export default function FoodSearch({ ageMonths }: FoodSearchProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    let results: FoodGuide[] = foodGuides;

    if (category !== "all") {
      results = results.filter((f) => f.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.category.toLowerCase().includes(q)
      );
    }

    // Sort: ready-to-introduce first
    return results.sort((a, b) => {
      const aReady = a.introMonths <= ageMonths ? 0 : 1;
      const bReady = b.introMonths <= ageMonths ? 0 : 1;
      return aReady - bReady || a.name.localeCompare(b.name);
    });
  }, [search, category, ageMonths]);

  return (
    <div className="flex flex-col gap-4">
      {/* Search */}
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search foods..."
        className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Search foods"
      />

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat.key)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer min-h-[36px] ${
              category === cat.key
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted border-card-border hover:border-primary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="flex flex-col gap-2">
        {filtered.map((food) => (
          <FoodGuideCard key={food.id} food={food} ageMonths={ageMonths} />
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-muted text-center py-6">
            No foods found. Try a different search.
          </p>
        )}
      </div>
    </div>
  );
}
