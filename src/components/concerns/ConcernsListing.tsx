"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { ConcernCategory, ConcernPage } from "@/data/concerns/types";

const PAGE_SIZE = 24;

// Darker text colors for inactive pills to ensure contrast on cream background
const categories: { key: ConcernCategory | "all"; label: string; color: string; textColor: string }[] = [
  { key: "all", label: "All", color: "#6B7280", textColor: "#4B5563" },
  { key: "physical", label: "Physical", color: "#38BDF8", textColor: "#0369A1" },
  { key: "communication", label: "Speech", color: "#A78BFA", textColor: "#6D28D9" },
  { key: "feeding", label: "Feeding", color: "#F4A261", textColor: "#C2410C" },
  { key: "sleep", label: "Sleep", color: "#818CF8", textColor: "#4338CA" },
  { key: "skin", label: "Skin", color: "#F472B6", textColor: "#BE185D" },
  { key: "digestive", label: "Digestive", color: "#34D399", textColor: "#047857" },
  { key: "behavior", label: "Behavior", color: "#FBBF24", textColor: "#A16207" },
  { key: "medical", label: "Medical", color: "#F07167", textColor: "#B91C1C" },
];

const categoryColors: Record<ConcernCategory, string> = {
  physical: "#38BDF8",
  communication: "#A78BFA",
  feeding: "#F4A261",
  sleep: "#818CF8",
  skin: "#F472B6",
  digestive: "#34D399",
  behavior: "#FBBF24",
  medical: "#F07167",
};

const categoryLabels: Record<ConcernCategory, string> = {
  physical: "Physical",
  communication: "Speech",
  feeding: "Feeding",
  sleep: "Sleep",
  skin: "Skin",
  digestive: "Digestive",
  behavior: "Behavior",
  medical: "Medical",
};

export default function ConcernsListing({ concerns }: { concerns: ConcernPage[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ConcernCategory | "all">("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = concerns;

    if (activeCategory !== "all") {
      result = result.filter((c) => c.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.searchTerms.some((t) => t.toLowerCase().includes(q)) ||
          c.quickAnswer.toLowerCase().includes(q)
      );
    }

    return result;
  }, [concerns, search, activeCategory]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const safePageNum = Math.min(page, totalPages || 1);
  const startIdx = (safePageNum - 1) * PAGE_SIZE;
  const endIdx = Math.min(startIdx + PAGE_SIZE, filtered.length);
  const paged = filtered.slice(startIdx, endIdx);

  function handleCategoryChange(key: ConcernCategory | "all") {
    setActiveCategory(key);
    setPage(1);
  }

  function handleSearchChange(value: string) {
    setSearch(value);
    setPage(1);
  }

  return (
    <>
      {/* Search */}
      <div className="relative mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="search"
          placeholder="Search concerns... (e.g., walking, rash, poop)"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full rounded-xl border border-[#E8E2D9] bg-white py-3.5 pl-12 pr-4 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          const count =
            cat.key === "all"
              ? concerns.length
              : concerns.filter((c) => c.category === cat.key).length;

          return (
            <button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200"
              style={{
                backgroundColor: isActive ? cat.color : `${cat.color}15`,
                color: isActive ? "white" : cat.textColor,
                border: `1.5px solid ${isActive ? cat.color : `${cat.color}40`}`,
              }}
            >
              {cat.label}
              <span
                className="rounded-full px-1.5 py-0.5 text-[10px] font-bold"
                style={{
                  backgroundColor: isActive ? "rgba(255,255,255,0.25)" : `${cat.color}20`,
                  color: isActive ? "white" : cat.textColor,
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted text-sm">
            No concerns found{search ? ` for "${search}"` : ""}. Try a different search or category.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paged.map((concern) => (
              <Link
                key={concern.slug}
                href={`/concerns/${concern.slug}`}
                className="group flex flex-col rounded-xl border border-[#E8E2D9] bg-white overflow-hidden no-underline transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* Category accent bar */}
                <div
                  className="h-1"
                  style={{ backgroundColor: categoryColors[concern.category] }}
                />
                <div className="flex flex-col gap-2 p-5">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold"
                      style={{
                        backgroundColor: `${categoryColors[concern.category]}15`,
                        color: categoryColors[concern.category],
                      }}
                    >
                      {categoryLabels[concern.category]}
                    </span>
                  </div>
                  <h2 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors sm:text-base">
                    {concern.title}
                  </h2>
                  <p className="text-xs text-muted leading-relaxed line-clamp-2 sm:text-sm">
                    {concern.quickAnswer}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePageNum <= 1}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E2D9] bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary-light hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Previous
              </button>
              <span className="text-sm text-muted">
                Page {safePageNum} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePageNum >= totalPages}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E2D9] bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary-light hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </>
      )}

      <p className="mt-6 text-center text-xs text-muted">
        Showing {filtered.length > 0 ? startIdx + 1 : 0}-{endIdx} of {filtered.length} concerns
      </p>
    </>
  );
}
