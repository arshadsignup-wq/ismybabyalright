import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'multiple-food-allergy-management',
  title: 'How Do I Manage My Child\'s Multiple Food Allergies?',
  category: 'feeding',
  searchTerms: ['multiple food allergies child', 'managing food allergies baby', 'several food allergies toddler', 'food allergy meal planning', 'restricted diet food allergies', 'food allergy nutrition child', 'allergen free diet child', 'multiple food allergies nutrition', 'food allergy safe eating', 'food allergy dietitian child'],
  quickAnswer: 'Managing multiple food allergies requires careful meal planning to ensure your child gets adequate nutrition while avoiding allergens. Work with a pediatric allergist for accurate diagnosis and a pediatric dietitian for nutritional guidance. Key strategies include reading all food labels carefully, preparing safe meals at home, having an emergency action plan, educating caregivers and family members, and finding allergen-free substitutes that provide equivalent nutrition. Most children outgrow some food allergies, particularly milk, egg, wheat, and soy.',
  byAge: [
    { ageRange: '0-3 months', context: 'If multiple food allergies are suspected (through reactions in breast milk or formula intolerance), your pediatrician may recommend a hypoallergenic formula (extensively hydrolyzed or amino acid-based). Breastfeeding mothers may need to eliminate multiple foods from their own diet under medical guidance.' },
    { ageRange: '4-6 months', context: 'Introduce non-allergenic foods first, then work with your allergist on a plan for introducing potentially allergenic foods one at a time. Keep a food diary to track reactions. Some allergists recommend supervised in-office food challenges.' },
    { ageRange: '6-9 months', context: 'Expand the diet with safe foods while maintaining strict avoidance of confirmed allergens. Read labels on all baby foods, as many contain common allergens like milk or soy. A pediatric dietitian can help plan nutritionally complete meals.' },
    { ageRange: '9-12 months', context: 'As the diet expands, ensure baby is getting adequate protein, calcium, iron, and other nutrients that may be limited by allergy restrictions. Regular monitoring with your allergist helps track whether baby is outgrowing any allergies.' },
    { ageRange: '12-24 months', context: 'Managing multiple food allergies becomes more complex as toddlers eat more varied diets and begin attending childcare or social events. Create an allergy action plan for all caregivers, carry prescribed medications (antihistamines, epinephrine auto-injector), and work with a dietitian to ensure nutritional adequacy despite restrictions. Periodic allergy testing can determine if any allergies have been outgrown.' },
  ],
  whenNormal: ['Child avoids allergens and is growing well with a nutritionally balanced restricted diet', 'Child has a clear allergy action plan and carries prescribed medications', 'Family has adapted meals and child eats a wide variety of safe foods'],
  whenToMention: ['You are struggling to provide a nutritionally complete diet with multiple restrictions', 'Child has new symptoms that may indicate an additional food allergy', 'You want to discuss whether child may have outgrown any of their allergies', 'Child is starting daycare or school and you need help with an allergy management plan'],
  whenToActNow: ['Child has an anaphylactic reaction; use epinephrine auto-injector and call 911', 'Child accidentally ingests an allergen and has symptoms involving breathing or multiple body systems', 'Child is showing signs of malnutrition or failure to thrive due to dietary restrictions'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-food-allergy-developing-later', 'baby-calcium-intake-dairy-free', 'toddler-meal-planning-balanced'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Managing Your Child\'s Food Allergies. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Allergy-Reactions.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Guidelines for the Diagnosis and Management of Food Allergy. NIAID, 2022.', url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy' },
    { org: 'WHO', citation: 'World Health Organization. Nutrition and Food Allergies in Children. WHO, 2021.', url: 'https://www.who.int/health-topics/nutrition' },
  ],
};
