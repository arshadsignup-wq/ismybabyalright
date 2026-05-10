/**
 * Baby name generator filters and categories.
 * Works with the existing baby-names data in src/data/baby-names/.
 */

export interface NameFilter {
  gender: "boy" | "girl" | "unisex" | "all";
  origin: string; // "" = all origins
  startsWith: string; // "" = any
  popularity: string; // "" = all
  maxSyllables: number | null;
  tags: string[];
}

export const DEFAULT_FILTER: NameFilter = {
  gender: "all",
  origin: "",
  startsWith: "",
  popularity: "",
  maxSyllables: null,
  tags: [],
};

export const ORIGIN_OPTIONS = [
  "English",
  "Hebrew",
  "Greek",
  "Latin",
  "Arabic",
  "Irish",
  "Scottish",
  "French",
  "Spanish",
  "Italian",
  "German",
  "Scandinavian",
  "Japanese",
  "Chinese",
  "Korean",
  "Hindi",
  "Sanskrit",
  "Persian",
  "African",
  "Welsh",
  "Slavic",
  "Native American",
  "Hawaiian",
  "Turkish",
];

export const POPULARITY_OPTIONS = [
  { value: "trending", label: "Trending" },
  { value: "classic", label: "Classic" },
  { value: "unique", label: "Unique" },
  { value: "rising", label: "Rising" },
];

export const TAG_OPTIONS = [
  "nature",
  "royal",
  "biblical",
  "literary",
  "mythological",
  "modern",
  "vintage",
  "short",
  "strong",
  "gentle",
  "celestial",
  "musical",
  "botanical",
  "water",
  "warrior",
  "love",
];

/** Estimate syllable count for a name */
export function estimateSyllables(name: string): number {
  const lower = name.toLowerCase();
  // Simple heuristic: count vowel groups
  const matches = lower.match(/[aeiouy]+/g);
  let count = matches ? matches.length : 1;
  // Silent e at end
  if (lower.endsWith("e") && count > 1) count--;
  // Minimum 1
  return Math.max(1, count);
}

export const NAME_INSPIRATION = [
  { theme: "Nature Names", examples: ["Willow", "River", "Sage", "Ivy", "Jasper", "Hazel"], description: "Inspired by the natural world — plants, elements, and landscapes" },
  { theme: "Vintage Revival", examples: ["Eleanor", "Theodore", "Clara", "Arthur", "Josephine", "Walter"], description: "Old-fashioned names making a stylish comeback" },
  { theme: "Short & Sweet", examples: ["Kai", "Mia", "Leo", "Ava", "Max", "Zoe"], description: "One or two syllables, easy to say and spell" },
  { theme: "Celestial", examples: ["Luna", "Stella", "Orion", "Aurora", "Atlas", "Celeste"], description: "Inspired by the sky, stars, and cosmos" },
  { theme: "Strong & Bold", examples: ["Alexander", "Valentina", "Griffin", "Serena", "Magnus", "Athena"], description: "Names with powerful meanings and presence" },
  { theme: "Literary", examples: ["Atticus", "Jane", "Darcy", "Scout", "Holden", "Ophelia"], description: "Borrowed from beloved books and characters" },
];
