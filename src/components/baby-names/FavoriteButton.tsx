"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "imba_name_favorites";

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

export default function FavoriteButton({ slug, name }: { slug: string; name: string }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const favs = loadFavorites();
    setIsFavorited(favs.has(slug));
    setMounted(true);
  }, [slug]);

  const toggle = () => {
    const favs = loadFavorites();
    if (favs.has(slug)) {
      favs.delete(slug);
      setIsFavorited(false);
    } else {
      favs.add(slug);
      setIsFavorited(true);
    }
    saveFavorites(favs);
  };

  if (!mounted) {
    return (
      <button
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-card-border bg-white text-foreground font-semibold min-h-[44px] transition-colors cursor-pointer"
        aria-label={`Add ${name} to favorites`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        Save to Favorites
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold min-h-[44px] transition-all cursor-pointer ${
        isFavorited
          ? "bg-coral text-white hover:bg-coral/90"
          : "border border-card-border bg-white text-foreground hover:bg-coral-light hover:text-coral hover:border-coral/30"
      }`}
      aria-label={isFavorited ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
      aria-pressed={isFavorited}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill={isFavorited ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      {isFavorited ? "Saved to Favorites" : "Save to Favorites"}
    </button>
  );
}
