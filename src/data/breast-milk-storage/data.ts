/**
 * Breast milk storage guidelines.
 * Sources: CDC, AAP, ABM (Academy of Breastfeeding Medicine).
 */

export interface StorageGuideline {
  location: string;
  temperature: string;
  freshMilk: string;
  thawedMilk: string;
  icon: string;
  tips: string[];
}

export const STORAGE_GUIDELINES: StorageGuideline[] = [
  {
    location: "Countertop / Room Temperature",
    temperature: "Up to 77°F (25°C)",
    freshMilk: "Up to 4 hours",
    thawedMilk: "1-2 hours",
    icon: "countertop",
    tips: [
      "Cover the container and keep away from direct sunlight and heat",
      "If the room is very warm (above 77°F), use within 1 hour",
      "Discard any milk left out for more than 4 hours",
      "Milk left over from a feeding should be used within 2 hours",
    ],
  },
  {
    location: "Insulated Cooler with Ice Packs",
    temperature: "5-39°F (−15 to 4°C)",
    freshMilk: "Up to 24 hours",
    thawedMilk: "Do not re-store",
    icon: "cooler",
    tips: [
      "Keep ice packs in contact with milk containers at all times",
      "Limit how often you open the cooler",
      "Transfer to refrigerator or freezer as soon as possible",
      "Good option for commuting or traveling",
    ],
  },
  {
    location: "Refrigerator",
    temperature: "40°F (4°C) or below",
    freshMilk: "Up to 4 days (optimal: 3 days)",
    thawedMilk: "Up to 24 hours",
    icon: "fridge",
    tips: [
      "Store in the back of the refrigerator, not in the door",
      "Use within 3 days for best quality",
      "If you won't use it within 4 days, freeze it",
      "Previously frozen then thawed milk must be used within 24 hours",
    ],
  },
  {
    location: "Freezer (standard fridge-freezer)",
    temperature: "0°F (−18°C) or below",
    freshMilk: "Up to 6 months (optimal); up to 12 months (acceptable)",
    thawedMilk: "Never refreeze thawed milk",
    icon: "freezer",
    tips: [
      "Store in the back of the freezer, away from the door",
      "Use within 6 months for best quality",
      "Leave 1 inch of space at the top of containers — milk expands when frozen",
      "Label each container with the date it was pumped",
      "Use the oldest milk first (first in, first out)",
    ],
  },
  {
    location: "Deep Freezer",
    temperature: "−4°F (−20°C) or below",
    freshMilk: "Up to 12 months",
    thawedMilk: "Never refreeze",
    icon: "deep-freezer",
    tips: [
      "Best option for long-term storage",
      "Quality is best within 6 months even in deep freezer",
      "Consider using breast milk storage bags to save space",
    ],
  },
];

export const THAWING_GUIDELINES = [
  "Thaw in the refrigerator overnight (safest method)",
  "Place sealed container in warm (not hot) water to thaw more quickly",
  "Never microwave breast milk — it creates hot spots and destroys nutrients",
  "Gently swirl (don't shake vigorously) to mix the fat layer back in",
  "Thawed milk may look different in color or consistency — this is normal",
  "Use thawed milk within 24 hours and never refreeze",
  "Thawed milk may smell or taste soapy due to lipase — this is safe",
];

export const STORAGE_CONTAINER_TIPS = [
  "Use BPA-free plastic bottles or glass containers with tight lids",
  "Breast milk storage bags designed for freezing work well",
  "Store in small amounts (2-4 oz) to reduce waste",
  "Leave room at the top for expansion when freezing",
  "Label with date, time, and amount pumped",
  "Do not add warm milk to already frozen milk — cool it first",
];
