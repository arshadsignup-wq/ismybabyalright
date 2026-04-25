"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { allConcerns } from "@/data/concerns";

export default function ConcernSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = query.trim().length >= 2
    ? allConcerns
        .filter((c) => {
          const q = query.toLowerCase();
          return (
            c.title.toLowerCase().includes(q) ||
            c.searchTerms.some((t) => t.toLowerCase().includes(q))
          );
        })
        .slice(0, 5)
    : [];

  // Close dropdown on outside click
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (results.length > 0) {
      router.push(`/concerns/${results[0].slug}`);
    } else if (query.trim()) {
      router.push("/concerns");
    }
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} role="search" aria-label="Search concerns">
        <div className="relative">
          {/* Search icon */}
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
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => query.trim().length >= 2 && setOpen(true)}
            placeholder='Try "not walking" or "green poop"'
            className="w-full rounded-full bg-white/90 py-4 pl-12 pr-4 text-base font-medium text-[#1B2838] placeholder:text-[#94A3B8] shadow-lg shadow-black/5 backdrop-blur-sm outline-none transition-all duration-300 focus:shadow-xl focus:ring-2 focus:ring-[#0D9488]/30 concern-search-glow"
            aria-expanded={open && results.length > 0}
            aria-controls="concern-results"
            aria-autocomplete="list"
            autoComplete="off"
          />
        </div>
      </form>

      {/* Dropdown results */}
      {open && results.length > 0 && (
        <ul
          id="concern-results"
          role="listbox"
          className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl bg-white shadow-xl border border-[#E8E2D9]"
        >
          {results.map((c) => (
            <li key={c.slug} role="option" aria-selected={false}>
              <button
                type="button"
                onClick={() => {
                  router.push(`/concerns/${c.slug}`);
                  setOpen(false);
                }}
                className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-[#F5F0E8] cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-[#F07167]"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#1B2838]">{c.title}</p>
                  <p className="text-xs text-[#64748B] line-clamp-1">
                    {c.quickAnswer}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
