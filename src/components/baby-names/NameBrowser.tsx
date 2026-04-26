"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import type { BabyName } from "@/data/baby-names/types";

const STORAGE_KEY = "imba_name_favorites";
const PER_PAGE = 24;

const ORIGINS = [
  "All",
  "African",
  "Arabic",
  "English",
  "French",
  "Greek",
  "Hebrew",
  "Hindi",
  "Irish",
  "Italian",
  "Japanese",
  "Korean",
  "Latin",
  "Native American",
  "Scandinavian",
  "Scottish",
  "Spanish",
  "Welsh",
];

const POPULARITY_OPTIONS = ["All", "Trending", "Classic", "Unique", "Rising"];
const GENDER_OPTIONS = ["All", "Boy", "Girl", "Unisex"];
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const genderColors: Record<string, { bg: string; text: string; border: string }> = {
  boy: { bg: "#EFF6FF", text: "#38BDF8", border: "#BFDBFE" },
  girl: { bg: "#FDF2F8", text: "#F472B6", border: "#FBCFE8" },
  unisex: { bg: "#F5F3FF", text: "#A78BFA", border: "#DDD6FE" },
};

const popularityColors: Record<string, { bg: string; text: string }> = {
  trending: { bg: "#FEF0EE", text: "#F07167" },
  classic: { bg: "#E0F5F2", text: "#0D9488" },
  unique: { bg: "#F5F3FF", text: "#7C3AED" },
  rising: { bg: "#FEF6EC", text: "#D97706" },
};

function loadFavorites(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return new Set(JSON.parse(stored) as string[]);
    }
  } catch {
    // ignore
  }
  return new Set();
}

function saveFavorites(favs: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favs]));
  } catch {
    // ignore
  }
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill={filled ? "#F07167" : "none"}
      stroke={filled ? "#F07167" : "currentColor"}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

interface NameBrowserProps {
  names: BabyName[];
}

export default function NameBrowser({ names }: NameBrowserProps) {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("All");
  const [origin, setOrigin] = useState("All");
  const [popularity, setPopularity] = useState("All");
  const [startLetter, setStartLetter] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setFavorites(loadFavorites());
    setMounted(true);
  }, []);

  const toggleFavorite = useCallback(
    (slug: string, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setFavorites((prev) => {
        const next = new Set(prev);
        if (next.has(slug)) {
          next.delete(slug);
        } else {
          next.add(slug);
        }
        saveFavorites(next);
        return next;
      });
    },
    []
  );

  const filtered = useMemo(() => {
    let results = names;

    if (showFavorites) {
      results = results.filter((n) => favorites.has(n.slug));
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      results = results.filter(
        (n) =>
          n.name.toLowerCase().includes(q) ||
          n.meaning.toLowerCase().includes(q) ||
          n.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (gender !== "All") {
      results = results.filter(
        (n) => n.gender === gender.toLowerCase()
      );
    }

    if (origin !== "All") {
      results = results.filter((n) => n.origin === origin);
    }

    if (popularity !== "All") {
      results = results.filter(
        (n) => n.popularity === popularity.toLowerCase()
      );
    }

    if (startLetter) {
      results = results.filter((n) =>
        n.name.toUpperCase().startsWith(startLetter)
      );
    }

    return results;
  }, [names, search, gender, origin, popularity, startLetter, showFavorites, favorites]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safeCurrentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (safeCurrentPage - 1) * PER_PAGE,
    safeCurrentPage * PER_PAGE
  );

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [search, gender, origin, popularity, startLetter, showFavorites]);

  const clearFilters = () => {
    setSearch("");
    setGender("All");
    setOrigin("All");
    setPopularity("All");
    setStartLetter("");
    setShowFavorites(false);
    setPage(1);
  };

  const hasActiveFilters =
    search.trim() !== "" ||
    gender !== "All" ||
    origin !== "All" ||
    popularity !== "All" ||
    startLetter !== "" ||
    showFavorites;

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, meaning, or tag..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-card-border bg-white text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            aria-label="Search baby names"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 flex flex-wrap gap-3">
        {/* Gender filter */}
        <div className="flex flex-wrap gap-1.5">
          {GENDER_OPTIONS.map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer min-h-[36px] ${
                gender === g
                  ? "bg-primary text-white"
                  : "bg-white border border-card-border text-foreground hover:bg-primary-light hover:text-primary"
              }`}
            >
              {g === "All" ? "All Genders" : g}
            </button>
          ))}
        </div>

        {/* Origin dropdown */}
        <select
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="px-3 py-1.5 rounded-xl border border-card-border bg-white text-sm font-semibold text-foreground cursor-pointer min-h-[36px] focus:outline-none focus:ring-2 focus:ring-primary/30"
          aria-label="Filter by origin"
        >
          {ORIGINS.map((o) => (
            <option key={o} value={o}>
              {o === "All" ? "All Origins" : o}
            </option>
          ))}
        </select>

        {/* Popularity dropdown */}
        <select
          value={popularity}
          onChange={(e) => setPopularity(e.target.value)}
          className="px-3 py-1.5 rounded-xl border border-card-border bg-white text-sm font-semibold text-foreground cursor-pointer min-h-[36px] focus:outline-none focus:ring-2 focus:ring-primary/30"
          aria-label="Filter by popularity"
        >
          {POPULARITY_OPTIONS.map((p) => (
            <option key={p} value={p}>
              {p === "All" ? "All Popularity" : p}
            </option>
          ))}
        </select>

        {/* Favorites toggle */}
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer min-h-[36px] flex items-center gap-1.5 ${
            showFavorites
              ? "bg-coral text-white"
              : "bg-white border border-card-border text-foreground hover:bg-coral-light hover:text-coral"
          }`}
          aria-pressed={showFavorites}
        >
          <HeartIcon filled={showFavorites} />
          Favorites{mounted && favorites.size > 0 ? ` (${favorites.size})` : ""}
        </button>

        {/* Clear filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="px-3 py-1.5 rounded-full text-sm font-semibold text-muted hover:text-foreground transition-colors cursor-pointer min-h-[36px]"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Alphabet filter */}
      <div className="mb-6 flex flex-wrap gap-1">
        <button
          onClick={() => setStartLetter("")}
          className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
            startLetter === ""
              ? "bg-primary text-white"
              : "bg-white border border-card-border text-foreground hover:bg-primary-light hover:text-primary"
          }`}
          aria-label="Show all letters"
        >
          All
        </button>
        {ALPHABET.map((letter) => (
          <button
            key={letter}
            onClick={() =>
              setStartLetter(startLetter === letter ? "" : letter)
            }
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              startLetter === letter
                ? "bg-primary text-white"
                : "bg-white border border-card-border text-foreground hover:bg-primary-light hover:text-primary"
            }`}
            aria-label={`Filter names starting with ${letter}`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-sm text-muted mb-4 font-semibold">
        Showing {pageItems.length} of {filtered.length} name{filtered.length !== 1 ? "s" : ""}
        {filtered.length !== names.length && (
          <span className="text-muted-light"> (filtered from {names.length} total)</span>
        )}
      </p>

      {/* Results grid */}
      {pageItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {pageItems.map((name) => (
            <NameCard
              key={name.slug}
              name={name}
              isFavorited={favorites.has(name.slug)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl font-bold text-foreground mb-2">
            No names found
          </p>
          <p className="text-muted mb-4">
            Try adjusting your filters or search term.
          </p>
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setPage(Math.max(1, safeCurrentPage - 1))}
            disabled={safeCurrentPage <= 1}
            className="px-3 py-2 rounded-lg border border-card-border bg-white text-sm font-semibold text-foreground hover:bg-primary-light hover:text-primary transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed min-h-[44px]"
            aria-label="Previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {generatePageNumbers(safeCurrentPage, totalPages).map((p, i) =>
            p === "..." ? (
              <span key={`dots-${i}`} className="px-1 text-muted">
                ...
              </span>
            ) : (
              <button
                key={p}
                onClick={() => setPage(p as number)}
                className={`w-10 h-10 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                  safeCurrentPage === p
                    ? "bg-primary text-white"
                    : "border border-card-border bg-white text-foreground hover:bg-primary-light hover:text-primary"
                }`}
                aria-label={`Page ${p}`}
                aria-current={safeCurrentPage === p ? "page" : undefined}
              >
                {p}
              </button>
            )
          )}

          <button
            onClick={() => setPage(Math.min(totalPages, safeCurrentPage + 1))}
            disabled={safeCurrentPage >= totalPages}
            className="px-3 py-2 rounded-lg border border-card-border bg-white text-sm font-semibold text-foreground hover:bg-primary-light hover:text-primary transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed min-h-[44px]"
            aria-label="Next page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

function NameCard({
  name,
  isFavorited,
  onToggleFavorite,
}: {
  name: BabyName;
  isFavorited: boolean;
  onToggleFavorite: (slug: string, e: React.MouseEvent) => void;
}) {
  const gc = genderColors[name.gender];
  const pc = popularityColors[name.popularity];

  return (
    <Link
      href={`/baby-names/${name.slug}`}
      className="group block bg-white rounded-xl border border-[#E8E2D9] p-5 hover-lift no-underline relative"
    >
      {/* Favorite button */}
      <button
        onClick={(e) => onToggleFavorite(name.slug, e)}
        className="absolute top-4 right-4 p-1 rounded-full hover:bg-coral-light transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
        aria-label={isFavorited ? `Remove ${name.name} from favorites` : `Add ${name.name} to favorites`}
      >
        <HeartIcon filled={isFavorited} />
      </button>

      {/* Name */}
      <h3 className="text-xl font-extrabold text-foreground mb-1 pr-8 group-hover:text-primary transition-colors">
        {name.name}
      </h3>

      {/* Meaning preview */}
      <p className="text-sm text-muted mb-3 line-clamp-2 leading-relaxed">
        {name.meaning}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-1.5">
        {/* Gender badge */}
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold"
          style={{
            backgroundColor: gc.bg,
            color: gc.text,
            border: `1px solid ${gc.border}`,
          }}
        >
          {name.gender === "boy" ? "Boy" : name.gender === "girl" ? "Girl" : "Unisex"}
        </span>

        {/* Origin badge */}
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-background-alt text-foreground border border-card-border">
          {name.origin}
        </span>

        {/* Popularity badge */}
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold"
          style={{
            backgroundColor: pc.bg,
            color: pc.text,
          }}
        >
          {name.popularity.charAt(0).toUpperCase() + name.popularity.slice(1)}
        </span>
      </div>
    </Link>
  );
}

function generatePageNumbers(
  current: number,
  total: number
): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [1];

  if (current > 3) {
    pages.push("...");
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push("...");
  }

  pages.push(total);

  return pages;
}
