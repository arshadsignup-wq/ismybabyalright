import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-egg-allergy-signs',
  title: 'Egg Allergy Signs in Baby or Toddler',
  category: 'feeding',
  searchTerms: ['baby egg allergy', 'baby allergic to eggs', 'baby egg reaction', 'toddler egg allergy', 'baby hives after eating egg', 'baby vomiting after egg', 'egg allergy symptoms baby', 'baby rash after eating eggs', 'when to introduce eggs baby', 'baby egg intolerance'],
  quickAnswer: 'Eggs are one of the most common food allergens in children, affecting about 2% of young children. An egg allergy reaction typically occurs within minutes to 2 hours after eating eggs and can include hives, facial swelling, vomiting, and in rare cases, difficulty breathing (anaphylaxis). Most children outgrow egg allergy by age 5. Current guidelines recommend introducing eggs early (around 6 months) as part of solids introduction, which may actually help prevent egg allergy. If your child has a reaction to eggs, consult your pediatrician or an allergist for testing and guidance.',
  byAge: [
    { ageRange: '0-12 months', context: 'Current AAP guidelines recommend introducing allergenic foods, including eggs, around 6 months of age when starting solids. Start with well-cooked egg (scrambled or hard-boiled) in small amounts. Watch for signs of an allergic reaction for 2 hours after the first introduction: hives, facial swelling, vomiting, or fussiness. Babies with severe eczema or an existing food allergy may be at higher risk for egg allergy and may benefit from allergist guidance before introduction. Early and regular introduction of eggs may actually help prevent egg allergy from developing.' },
    { ageRange: '1-3 years', context: 'If your toddler has a confirmed egg allergy, you will need to read food labels carefully, as egg is a common ingredient in baked goods, pasta, breaded foods, and many processed products. Many children with egg allergy can tolerate baked egg (in muffins, cakes) even if they react to scrambled or soft-cooked egg, because baking changes the egg proteins. This should be discussed with and tested under the guidance of your allergist. Most children outgrow egg allergy - about 70% by age 5 - so periodic re-evaluation with your allergist is recommended.' },
  ],
  whenNormal: ['Your baby ate egg for the first time and had no reaction within 2 hours', 'Mild redness around the mouth from contact with egg (contact irritation, not necessarily allergy)', 'A single episode of spitting up after trying egg (may not be allergic - try again another day)'],
  whenToMention: ['Your baby develops hives after eating egg', 'Vomiting within 2 hours of eating egg', 'Facial swelling after egg exposure', 'Worsening of eczema after introducing egg to the diet'],
  whenToActNow: ['Difficulty breathing, wheezing, or throat tightness after eating egg (anaphylaxis - call 911)', 'Widespread hives with swelling of the lips, tongue, or throat', 'Multiple symptoms occurring together after eating egg (hives + vomiting + difficulty breathing)', 'Your child becomes pale, limp, or unresponsive after eating egg'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-peanut-allergy-signs', 'food-allergy-baby', 'baby-starting-solids-when-ready', 'eczema'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Food Allergies in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Allergy-Reactions.aspx' },
    { org: 'NIH', citation: 'National Institute of Allergy and Infectious Diseases. Food Allergy Guidelines.', url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Early Introduction of Allergenic Foods. Pediatrics.', url: 'https://publications.aap.org/pediatrics/' },
  ],
};
