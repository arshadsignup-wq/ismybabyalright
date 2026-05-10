"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { allNames } from "@/data/baby-names/names";
import {
  ORIGIN_OPTIONS,
  POPULARITY_OPTIONS,
  TAG_OPTIONS,
  NAME_INSPIRATION,
  estimateSyllables,
} from "@/data/name-generator/data";

export default function NameGenerator() {
  const [gender, setGender] = useState<"all" | "boy" | "girl" | "unisex">("all");
  const [origin, setOrigin] = useState("");
  const [startsWith, setStartsWith] = useState("");
  const [popularity, setPopularity] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [maxSyllables, setMaxSyllables] = useState("");
  const [showCount, setShowCount] = useState(20);

  const filtered = useMemo(() => {
    let results = [...allNames];

    if (gender !== "all") {
      results = results.filter((n) => n.gender === gender || n.gender === "unisex");
    }
    if (origin) {
      results = results.filter((n) =>
        n.origin.toLowerCase().includes(origin.toLowerCase())
      );
    }
    if (startsWith) {
      results = results.filter((n) =>
        n.name.toLowerCase().startsWith(startsWith.toLowerCase())
      );
    }
    if (popularity) {
      results = results.filter((n) => n.popularity === popularity);
    }
    if (selectedTags.length > 0) {
      results = results.filter((n) =>
        selectedTags.some((tag) => n.tags.includes(tag))
      );
    }
    if (maxSyllables) {
      const max = parseInt(maxSyllables);
      if (!isNaN(max)) {
        results = results.filter((n) => estimateSyllables(n.name) <= max);
      }
    }

    return results;
  }, [gender, origin, startsWith, popularity, selectedTags, maxSyllables]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const resetFilters = () => {
    setGender("all");
    setOrigin("");
    setStartsWith("");
    setPopularity("");
    setSelectedTags([]);
    setMaxSyllables("");
    setShowCount(20);
  };

  const randomName = () => {
    if (filtered.length === 0) return;
    const idx = Math.floor(Math.random() * filtered.length);
    const name = filtered[idx];
    // scroll to the name in results - just show it
    alert(`Random pick: ${name.name} — ${name.meaning}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Baby Name Generator
        </h1>
        <p className="mt-2 text-muted">
          Browse and filter {allNames.length.toLocaleString()} baby names by gender,
          origin, popularity, and more. Find the perfect name for your little one.
        </p>
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
        {/* Gender */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">Gender</label>
          <div className="flex gap-2 flex-wrap">
            {(["all", "boy", "girl", "unisex"] as const).map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  gender === g
                    ? "bg-primary text-white"
                    : "bg-background border border-card-border text-muted hover:bg-primary-light"
                }`}
              >
                {g === "all" ? "All" : g === "boy" ? "Boy" : g === "girl" ? "Girl" : "Unisex"}
              </button>
            ))}
          </div>
        </div>

        {/* Origin + Starts with + Syllables */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="origin" className="mb-1.5 block text-sm font-semibold text-foreground">
              Origin
            </label>
            <select
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
            >
              <option value="">All Origins</option>
              {ORIGIN_OPTIONS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="starts" className="mb-1.5 block text-sm font-semibold text-foreground">
              Starts With
            </label>
            <input
              id="starts"
              type="text"
              maxLength={3}
              placeholder="e.g. A, Ma"
              value={startsWith}
              onChange={(e) => setStartsWith(e.target.value)}
              className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label htmlFor="syllables" className="mb-1.5 block text-sm font-semibold text-foreground">
              Max Syllables
            </label>
            <select
              id="syllables"
              value={maxSyllables}
              onChange={(e) => setMaxSyllables(e.target.value)}
              className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
            >
              <option value="">Any</option>
              <option value="1">1 syllable</option>
              <option value="2">2 syllables</option>
              <option value="3">3 syllables</option>
              <option value="4">4 syllables</option>
            </select>
          </div>
        </div>

        {/* Popularity */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">Popularity</label>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setPopularity("")}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                !popularity
                  ? "bg-primary text-white"
                  : "bg-background border border-card-border text-muted hover:bg-primary-light"
              }`}
            >
              All
            </button>
            {POPULARITY_OPTIONS.map((p) => (
              <button
                key={p.value}
                onClick={() => setPopularity(p.value)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  popularity === p.value
                    ? "bg-primary text-white"
                    : "bg-background border border-card-border text-muted hover:bg-primary-light"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">Tags</label>
          <div className="flex gap-1.5 flex-wrap">
            {TAG_OPTIONS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedTags.includes(tag)
                    ? "bg-primary text-white"
                    : "bg-background border border-card-border text-muted hover:bg-primary-light"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={resetFilters}
            className="text-xs text-muted underline cursor-pointer hover:text-foreground"
          >
            Reset filters
          </button>
          <button
            onClick={randomName}
            className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium cursor-pointer hover:bg-primary/90 transition-colors"
          >
            Random Name
          </button>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted">
        Showing <span className="font-bold text-foreground">{Math.min(showCount, filtered.length)}</span> of{" "}
        <span className="font-bold text-foreground">{filtered.length}</span> names
      </p>

      {/* Name results */}
      {filtered.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.slice(0, showCount).map((name) => (
            <Link
              key={name.slug}
              href={`/baby-names/${name.slug}`}
              className="rounded-xl border border-card-border bg-card p-3 hover:border-primary transition-colors no-underline"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-base font-bold text-foreground">{name.name}</p>
                  <p className="text-xs text-muted">{name.origin} &middot; {name.meaning}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  name.gender === "boy"
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
                    : name.gender === "girl"
                      ? "bg-pink-100 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300"
                      : "bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300"
                }`}>
                  {name.gender}
                </span>
              </div>
              {name.tags.length > 0 && (
                <div className="flex gap-1 mt-1.5 flex-wrap">
                  {name.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-1.5 py-0.5 rounded bg-background text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-card-border bg-card p-6 text-center">
          <p className="text-muted">No names match your filters. Try adjusting your criteria.</p>
        </div>
      )}

      {showCount < filtered.length && (
        <div className="text-center">
          <button
            onClick={() => setShowCount((c) => c + 20)}
            className="px-6 py-2.5 rounded-xl bg-primary text-white font-medium text-sm cursor-pointer hover:bg-primary/90 transition-colors"
          >
            Load More Names
          </button>
        </div>
      )}

      {/* Inspiration */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Name Inspiration</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {NAME_INSPIRATION.map((theme) => (
            <div key={theme.theme} className="p-3 rounded-xl bg-background">
              <p className="text-sm font-bold text-foreground">{theme.theme}</p>
              <p className="text-xs text-muted mt-0.5">{theme.description}</p>
              <p className="text-xs text-primary font-medium mt-1">
                {theme.examples.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
