export interface FoodPrep {
  ageRange: string;
  minMonths: number;
  maxMonths: number;
  method: string;
  tips: string[];
}

export interface FoodGuide {
  id: string;
  name: string;
  emoji: string;
  category: "fruit" | "vegetable" | "grain" | "protein" | "dairy";
  allergen?: string; // allergen group ID if this food is an allergen
  introMonths: number; // earliest introduction age
  preps: FoodPrep[];
  nutrition: string;
  notes?: string;
}

export interface AllergenGroup {
  id: string;
  name: string;
  emoji: string;
  foods: string[];
  introGuidance: string;
  protocol: string[];
  reactionSigns: string[];
}

export interface FoodIntroduction {
  foodId: string;
  dateIntroduced: string;
  reaction?: string;
}

export interface FoodReaction {
  id: string;
  foodId: string;
  date: string;
  symptoms: string[];
  severity: "mild" | "moderate" | "severe";
  notes?: string;
}

export interface AllergenRecord {
  allergenId: string;
  status: "not-started" | "introducing" | "passed" | "reaction";
  dateStarted?: string;
  notes?: string;
}
