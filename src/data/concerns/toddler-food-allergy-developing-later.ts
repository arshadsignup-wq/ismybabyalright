import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-food-allergy-developing-later',
  title: 'Can My Child Develop a Food Allergy After Eating a Food Safely Before?',
  category: 'feeding',
  searchTerms: ['food allergy developing later', 'new food allergy toddler', 'sudden food allergy child', 'late onset food allergy', 'food allergy after eating safely', 'child allergic reaction new', 'toddler allergy developed', 'food allergy age onset', 'delayed food allergy child', 'allergic reaction food ate before'],
  quickAnswer: 'Yes, children can develop food allergies to foods they have previously eaten without problems. While most food allergies appear during the first 2 years of life, new allergies can develop at any age. The immune system may become sensitized after repeated exposure. Common late-developing allergies include tree nuts, shellfish, and fish. If your child has a reaction to a food they have eaten before, treat it as you would any allergic reaction and consult your pediatrician or allergist for testing.',
  byAge: [
    { ageRange: '0-3 months', context: 'True food allergies in exclusively breastfed or formula-fed babies typically present as cow milk protein allergy through breast milk or formula. Early introduction of allergenic foods (starting around 4-6 months per your pediatrician\'s guidance) can actually help prevent allergies.' },
    { ageRange: '4-6 months', context: 'Current guidelines recommend introducing common allergens (peanut, egg, milk, wheat, soy, tree nuts, fish, shellfish, sesame) early and often to reduce allergy risk. If baby tolerates these foods, continue offering them regularly.' },
    { ageRange: '6-9 months', context: 'Continue regular exposure to allergenic foods baby has tolerated. If baby develops new symptoms (hives, vomiting, swelling) after eating a previously tolerated food, stop offering it and contact your pediatrician.' },
    { ageRange: '9-12 months', context: 'New allergies can emerge even at this age. Watch for reactions that occur consistently with the same food. Isolated episodes may be coincidental, but a pattern of reactions should be evaluated by an allergist.' },
    { ageRange: '12-24 months', context: 'Tree nut and shellfish allergies often develop in toddlerhood or later. If your child has an existing food allergy (like egg or peanut), they are at higher risk for developing additional allergies. Regular exposure to tolerated foods helps maintain tolerance. An allergist can perform skin prick or blood tests to confirm suspected new allergies.' },
  ],
  whenNormal: ['Child occasionally has minor digestive upset with a food but no allergic symptoms', 'Child has a single isolated episode of mild hives that does not recur', 'Child dislikes a food but does not have physical symptoms when eating it'],
  whenToMention: ['Child develops hives, rash, or vomiting after a previously tolerated food', 'Child has recurring symptoms with the same food on multiple occasions', 'Child has an existing food allergy and you suspect a reaction to a new food', 'You notice lip or facial swelling after eating a specific food'],
  whenToActNow: ['Child has difficulty breathing, throat tightness, or wheezing after eating', 'Child has a severe reaction involving multiple body systems such as hives plus vomiting or swelling plus breathing changes', 'Child collapses or becomes unresponsive after eating, which may indicate anaphylaxis; use epinephrine auto-injector if prescribed and call 911'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['multiple-food-allergy-management', 'baby-first-foods-best-choices', 'cow-milk-alternative-comparison'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Food Allergies in Children. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Allergy-Reactions.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Late-Onset Food Allergies in Children. Journal of Allergy and Clinical Immunology, 2021.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
