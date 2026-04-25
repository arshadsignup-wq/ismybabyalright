import type { FoodGuide } from "./types";

export const foodGuides: FoodGuide[] = [
  // --- FRUITS ---
  {
    id: "banana",
    name: "Banana",
    emoji: "🍌",
    category: "fruit",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Mashed or as a long strip (with skin partially on for grip)", tips: ["Ripe bananas are easiest to mash", "Roll in infant cereal for easier grip"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Small pieces or thin slices", tips: ["Can offer as a whole peeled banana for self-feeding"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Sliced or whole", tips: ["Great for on-the-go snacking"] },
    ],
    nutrition: "Rich in potassium, vitamin B6, and fiber. Easy to digest.",
  },
  {
    id: "avocado",
    name: "Avocado",
    emoji: "🥑",
    category: "fruit",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Mashed or as long spears", tips: ["Very slippery  -  roll in infant cereal or hemp seeds for grip", "Choose ripe avocados that give when gently pressed"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Small cubes or thin slices", tips: ["Sprinkle with a tiny bit of lemon to prevent browning"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Sliced, cubed, or as guacamole", tips: ["Spread on toast for an easy meal"] },
    ],
    nutrition: "Excellent source of healthy fats, fiber, and potassium. One of the best first foods.",
  },
  {
    id: "sweet-potato",
    name: "Sweet Potato",
    emoji: "🍠",
    category: "vegetable",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Steamed and mashed, or as long soft strips", tips: ["Cook until very soft  -  should smush easily between fingers", "Can bake whole and scoop out flesh"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Soft cubes or fries (baked)", tips: ["Cut into finger-length strips for easy grabbing"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Cubed, mashed, or as fries", tips: ["Mix with cinnamon for extra flavor"] },
    ],
    nutrition: "Packed with vitamin A (beta-carotene), fiber, and vitamin C.",
  },
  {
    id: "apple",
    name: "Apple",
    emoji: "🍎",
    category: "fruit",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Steamed until very soft, then mashed or as strips", tips: ["RAW apple is a choking hazard  -  always cook for young babies", "Peel before cooking"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Soft-cooked thin slices or grated raw", tips: ["Can start offering very thin raw slices around 10-12 months"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Thin raw slices or cooked", tips: ["Cut into thin slices  -  not round coins (choking risk)"] },
    ],
    nutrition: "Good source of fiber, vitamin C, and antioxidants.",
  },
  {
    id: "peas",
    name: "Peas",
    emoji: "🟢",
    category: "vegetable",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Mashed or flattened", tips: ["Smash each pea or blend into puree  -  whole peas are a choking risk", "Frozen peas work great  -  cook until soft"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Slightly flattened or in mixed dishes", tips: ["Can start offering less-mashed as pincer grasp develops"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Whole cooked peas", tips: ["Great finger food once toddler can chew well"] },
    ],
    nutrition: "High in protein, fiber, iron, and vitamin K for a vegetable.",
  },
  {
    id: "oatmeal",
    name: "Oatmeal",
    emoji: "🥣",
    category: "grain",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Cooked soft, mixed with breast milk or formula", tips: ["Use infant oatmeal or blend regular oats finer", "Mix with fruit puree for flavor"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Thicker texture, with mix-ins", tips: ["Add mashed banana, nut butter, or berries"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Regular oatmeal", tips: ["Can add honey after 12 months"] },
    ],
    nutrition: "Good source of iron (especially iron-fortified), fiber, and B vitamins.",
  },
  {
    id: "chicken",
    name: "Chicken",
    emoji: "🍗",
    category: "protein",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Shredded into thin strips or pureed", tips: ["Dark meat (thigh) is juicier and easier to eat than breast", "Cook until very tender  -  slow cooker works well"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Shredded or small soft pieces", tips: ["Can offer drumstick for gnawing (with cartilage tip removed)"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Small pieces or strips", tips: ["Meatballs are a great way to serve"] },
    ],
    nutrition: "Excellent source of protein, iron, and zinc  -  important nutrients for babies.",
  },
  {
    id: "salmon",
    name: "Salmon",
    emoji: "🐟",
    category: "protein",
    introMonths: 6,
    allergen: "fish",
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Flaked and mashed, or as a large piece to gnaw", tips: ["Remove ALL bones carefully", "Wild-caught salmon has fewer contaminants", "Cook thoroughly"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Flaked into small pieces", tips: ["Mix into pasta, rice, or mashed potatoes"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Flaked or as salmon cakes", tips: ["Salmon patties/cakes are great finger food"] },
    ],
    nutrition: "Excellent source of omega-3 fatty acids (DHA), protein, and vitamin D.",
  },
  {
    id: "yogurt",
    name: "Yogurt",
    emoji: "🥛",
    category: "dairy",
    allergen: "milk",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Plain whole-milk yogurt, offered on a pre-loaded spoon", tips: ["Choose plain  -  no added sugar", "Full-fat (whole milk) is important for brain development", "Can mix in fruit puree"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Self-feeding with spoon or mixed into food", tips: ["Great base for mixing in nut butters and fruits"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Any preparation", tips: ["Still choose plain and add your own fruit  -  flavored yogurts have lots of sugar"] },
    ],
    nutrition: "High in calcium, protein, and probiotics. Excellent early food.",
  },
  {
    id: "egg",
    name: "Egg",
    emoji: "🥚",
    category: "protein",
    allergen: "egg",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Scrambled or as an omelet strip", tips: ["Cook well  -  no runny eggs for babies", "Scramble with a little butter or oil", "Cut omelet into finger-width strips"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Scrambled pieces or hard-boiled (quartered)", tips: ["Hard-boiled egg can be crumbly  -  quarter lengthwise"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Any well-cooked preparation", tips: ["Great in French toast, frittata, or fried rice"] },
    ],
    nutrition: "Complete protein with choline (crucial for brain development), iron, and vitamins A/D.",
  },
  {
    id: "broccoli",
    name: "Broccoli",
    emoji: "🥦",
    category: "vegetable",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Steamed florets (large, tree-shaped pieces)", tips: ["The stalk makes a natural handle", "Steam until very soft  -  should smush easily", "Offer as a large floret they can gnaw on"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Steamed and chopped into smaller pieces", tips: ["Can mix into pasta or rice dishes"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Steamed, roasted, or raw (if tender)", tips: ["Roasting brings out sweetness"] },
    ],
    nutrition: "High in vitamin C, vitamin K, fiber, and folate.",
  },
  {
    id: "rice",
    name: "Rice",
    emoji: "🍚",
    category: "grain",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Well-cooked and slightly sticky, or as rice balls", tips: ["Make sticky so baby can grab clumps", "Avoid rice cereal as sole grain  -  variety is key"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Soft rice in mixed dishes", tips: ["Rice with vegetables and protein makes a complete meal"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Any preparation", tips: ["Vary grains  -  don't rely solely on rice due to arsenic concerns"] },
    ],
    nutrition: "Easily digestible carbohydrate. Iron-fortified infant rice cereal is a common first food.",
    notes: "FDA recommends variety in grains for babies due to trace arsenic in rice.",
  },
  {
    id: "peanut-butter",
    name: "Peanut Butter",
    emoji: "🥜",
    category: "protein",
    allergen: "peanut",
    introMonths: 4,
    preps: [
      { ageRange: "4-8 months", minMonths: 4, maxMonths: 8, method: "Thinned smooth peanut butter (mixed with breast milk/formula/water)", tips: ["NEVER give chunky PB or whole peanuts", "Mix until very thin and smooth", "Can also mix into purees or oatmeal", "High-risk babies: discuss timing with pediatrician"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Thin layer on toast strips or mixed into food", tips: ["Continue offering 2-3 times per week to maintain tolerance"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Thin layer on bread or mixed into food", tips: ["Still avoid giving by the spoonful  -  sticky and can be a choking risk"] },
    ],
    nutrition: "High in protein, healthy fats, and vitamin E. Early introduction may prevent peanut allergy.",
  },
  {
    id: "tofu",
    name: "Tofu",
    emoji: "🫘",
    category: "protein",
    allergen: "soy",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Soft or silken tofu, mashed or as strips", tips: ["Extra firm tofu works well cut into finger-length strips", "Can pan-fry for a slightly crispy exterior (easier to grip)"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Small cubes or crumbled into dishes", tips: ["Season with a tiny bit of soy sauce or spices for flavor"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Any preparation", tips: ["Great in stir-fries, soups, or scrambled"] },
    ],
    nutrition: "Good plant-based protein source with calcium and iron.",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    emoji: "🍓",
    category: "fruit",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Mashed, or very large halves (too big to choke on)", tips: ["Cut very large or mash  -  small pieces can be a choking risk", "Ripe berries are softer and sweeter"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Quartered or thinly sliced", tips: ["Can start offering smaller pieces as chewing develops"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Halved or whole (for larger berries)", tips: ["Great frozen for teething relief"] },
    ],
    nutrition: "High in vitamin C, fiber, and antioxidants.",
    notes: "Strawberries can cause a harmless contact rash around the mouth. This is not an allergy.",
  },
  {
    id: "carrot",
    name: "Carrot",
    emoji: "🥕",
    category: "vegetable",
    introMonths: 6,
    preps: [
      { ageRange: "6-8 months", minMonths: 6, maxMonths: 8, method: "Steamed until very soft, as long strips", tips: ["RAW carrot is a serious choking hazard  -  always cook until very soft", "Should smush between your fingers easily"] },
      { ageRange: "8-12 months", minMonths: 8, maxMonths: 12, method: "Soft-cooked sticks or small diced pieces", tips: ["Roasting brings out natural sweetness"] },
      { ageRange: "12+ months", minMonths: 12, maxMonths: 36, method: "Cooked pieces, grated raw", tips: ["Raw carrot sticks not recommended until 4+ years (choking risk)"] },
    ],
    nutrition: "Excellent source of vitamin A (beta-carotene) and fiber.",
  },
];

export function getFoodById(id: string): FoodGuide | undefined {
  return foodGuides.find((f) => f.id === id);
}

export function getFoodsByCategory(category: FoodGuide["category"]): FoodGuide[] {
  return foodGuides.filter((f) => f.category === category);
}

export function getFoodsForAge(ageMonths: number): FoodGuide[] {
  return foodGuides.filter((f) => f.introMonths <= ageMonths);
}
