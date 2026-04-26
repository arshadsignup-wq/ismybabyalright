export interface MealSuggestion {
  id: string;
  name: string;
  ageRange: string;
  minMonths: number;
  maxMonths: number;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  ingredients: string[];
  allergens: string[]; // matches allergen group IDs: milk, egg, peanut, tree-nut, wheat, soy, fish, shellfish, sesame
  prepTip: string;
}

export interface MealPlan {
  ageRange: string;
  week: Record<string, { breakfast: string; lunch: string; dinner: string; snack: string }>;
  // days: monday through sunday, values are meal suggestion IDs
}
