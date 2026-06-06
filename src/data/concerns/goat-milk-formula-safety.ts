import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'goat-milk-formula-safety',
  title: 'Is Goat Milk Formula Safe for My Baby?',
  category: 'feeding',
  searchTerms: ['goat milk formula baby', 'goat milk formula safe', 'goat milk for baby', 'goat milk vs cow milk formula', 'goat milk formula benefits', 'goat milk infant', 'Kabrita formula', 'Kendamil goat formula', 'goat milk formula allergy', 'goat milk formula digestibility'],
  quickAnswer: 'FDA-approved goat milk-based infant formulas are safe for babies. Some parents report that goat milk formula is easier to digest, though scientific evidence is limited. Goat milk formula has a different protein structure than cow milk formula, with more A2 casein and smaller fat globules. However, plain goat milk (not formula) is not appropriate for infants because it lacks adequate folate, vitamin B12, and iron. If your baby has a confirmed cow milk protein allergy, goat milk formula may not be safe due to high cross-reactivity.',
  byAge: [
    { ageRange: '0-3 months', context: 'If choosing goat milk formula, ensure it is an FDA-approved infant formula (not plain goat milk). Brands like Kabrita and Kendamil Goat are formulated to meet infant nutritional requirements. Discuss with your pediatrician before starting.' },
    { ageRange: '4-6 months', context: 'Continue goat milk formula if baby is tolerating it well and growing appropriately. Monitor for any signs of intolerance such as persistent fussiness, rash, or digestive issues.' },
    { ageRange: '6-9 months', context: 'Goat milk formula continues alongside the introduction of solid foods. The same complementary feeding guidelines apply regardless of whether baby drinks cow or goat milk-based formula.' },
    { ageRange: '9-12 months', context: 'As baby approaches 12 months, you may continue goat milk formula until ready to transition to whole milk. Some families switch to whole goat milk at 12 months, which is acceptable if the overall diet is balanced.' },
    { ageRange: '12-24 months', context: 'Whole goat milk can be offered as an alternative to cow milk after 12 months. It provides similar protein and fat content. Ensure your toddler also gets adequate folate and vitamin B12 from other dietary sources, as goat milk contains less of these nutrients than cow milk.' },
  ],
  whenNormal: ['Baby tolerates goat milk formula well and is growing on their curve', 'Baby has no signs of allergy or intolerance to goat milk formula', 'Family prefers goat milk formula for cultural or personal reasons'],
  whenToMention: ['Baby has persistent digestive issues on goat milk formula', 'You are considering goat milk formula because baby has reflux or colic', 'Baby has a cow milk protein allergy and you want to try goat milk formula', 'You are unsure whether to choose goat milk or cow milk formula'],
  whenToActNow: ['Baby has signs of an allergic reaction to goat milk formula such as hives, vomiting, or breathing difficulty', 'Baby is not gaining weight on goat milk formula', 'Baby has bloody stools after starting goat milk formula'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['cow-milk-alternative-comparison', 'formula-brand-differences', 'formula-changing-frequency'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Choosing an Infant Formula. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Goat Milk-Based Infant Formulas: Nutritional Composition and Safety. Nutrients, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
