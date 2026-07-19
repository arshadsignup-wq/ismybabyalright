import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'food-allergy-vs-intolerance',
  title: 'Food Allergy vs Food Intolerance: Key Differences',
  description: 'Food allergies and food intolerances are often confused, but they involve completely different body systems. Food allergies involve the immune system and can be life-threatening, while food intolerances are digestive issues that are uncomfortable but not dangerous.',
  conditionA: { name: 'Food Allergy' },
  conditionB: { name: 'Food Intolerance' },
  comparisonPoints: [
    { category: 'Mechanism', conditionA: 'Immune system reaction (IgE-mediated)', conditionB: 'Digestive system issue (enzyme deficiency or sensitivity)' },
    { category: 'Onset', conditionA: 'Rapid: minutes to 2 hours after exposure', conditionB: 'Delayed: hours to days after eating' },
    { category: 'Amount needed', conditionA: 'Even trace amounts can trigger reaction', conditionB: 'Usually dose-dependent (small amounts may be tolerated)' },
    { category: 'Symptoms', conditionA: 'Hives, swelling, vomiting, difficulty breathing, anaphylaxis', conditionB: 'Bloating, gas, diarrhea, stomach cramps, fussiness' },
    { category: 'Severity', conditionA: 'Can be life-threatening (anaphylaxis)', conditionB: 'Uncomfortable but not life-threatening' },
    { category: 'Common triggers', conditionA: 'Milk, eggs, peanuts, tree nuts, fish, shellfish, wheat, soy', conditionB: 'Lactose, fructose, gluten (non-celiac), food additives' },
    { category: 'Skin involvement', conditionA: 'Hives, eczema flares, facial swelling common', conditionB: 'Skin rarely affected' },
    { category: 'Diagnosis', conditionA: 'Skin prick test, specific IgE blood test, oral food challenge', conditionB: 'Elimination diet, hydrogen breath test (lactose), clinical history' },
    { category: 'Treatment', conditionA: 'Strict avoidance; epinephrine for emergencies', conditionB: 'Reduce or avoid trigger food; enzyme supplements (e.g., lactase)' },
    { category: 'Outgrown', conditionA: 'Some outgrown (milk, egg, wheat, soy); peanut/tree nut often lifelong', conditionB: 'May improve with age; varies by type' },
  ],
  keyDifferences: [
    'Food allergies involve the immune system; food intolerances involve digestion only',
    'Food allergies can cause anaphylaxis (life-threatening); intolerances are never life-threatening',
    'Allergic reactions occur within minutes; intolerance symptoms may take hours to days',
    'Tiny traces can trigger allergies; intolerances are usually dose-dependent',
    'Allergies cause skin and breathing symptoms; intolerances mainly cause GI symptoms',
  ],
  whenToWorry: [
    'Hives, facial/lip swelling, or difficulty breathing after eating (anaphylaxis — use epinephrine and call 911)',
    'Vomiting within minutes of eating a new food in an infant',
    'Bloody stool in a breastfed baby (may indicate milk protein allergy — FPIES)',
    'Failure to gain weight or persistent vomiting with a specific food',
    'Repeated episodes of severe vomiting 2-4 hours after eating a specific food (possible FPIES)',
    'Any previous allergic reaction with a known food allergen requires an epinephrine auto-injector prescription',
  ],
  sources: [
    { org: 'ACAAI', citation: 'American College of Allergy, Asthma & Immunology. Food Allergy.', url: 'https://acaai.org/allergies/allergic-conditions/food/' },
    { org: 'AAP', citation: 'AAP. Food Allergies in Children.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Food-Allergies-in-Children.aspx' },
    { org: 'NIAID', citation: 'National Institute of Allergy and Infectious Diseases. Guidelines for the Diagnosis and Management of Food Allergy.', url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy' },
  ],
};
