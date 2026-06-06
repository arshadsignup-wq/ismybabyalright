import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'plant-milk-nutrition-toddler',
  title: 'Is Plant Milk Nutritious Enough for My Toddler?',
  category: 'feeding',
  searchTerms: ['plant milk toddler', 'oat milk toddler nutrition', 'almond milk toddler', 'soy milk toddler safe', 'plant based milk child', 'vegan milk toddler', 'rice milk toddler', 'coconut milk toddler', 'hemp milk toddler', 'pea milk toddler nutrition'],
  quickAnswer: 'Most plant milks are not nutritionally equivalent to cow\'s milk for toddlers. Fortified soy milk is the only plant-based alternative that the AAP considers comparable in protein and fat content. Other options like oat, almond, rice, and coconut milk are significantly lower in protein and may lack adequate fat for brain development. If you choose plant milk for your toddler, ensure it is unsweetened, fortified with calcium and vitamin D, and supplement the diet with other protein and fat sources.',
  byAge: [
    { ageRange: '0-3 months', context: 'Plant milks are never appropriate for infants. Babies need breast milk or infant formula exclusively for the first 6 months and as the primary beverage through 12 months.' },
    { ageRange: '4-6 months', context: 'Continue breast milk or formula. Plant milks should not be introduced as a beverage at this age, though small amounts of soy-based infant formula (if recommended by your doctor) are safe.' },
    { ageRange: '6-9 months', context: 'Breast milk or formula remains the primary drink. You may use small amounts of plant milk in cooking or cereal preparation, but it should not replace breast milk or formula as a beverage.' },
    { ageRange: '9-12 months', context: 'As you approach the transition from formula at 12 months, plan ahead with your pediatrician if you intend to use plant milk. Ensure the overall diet provides enough protein, fat, calcium, vitamin D, and vitamin B12.' },
    { ageRange: '12-24 months', context: 'Fortified unsweetened soy milk is recommended as the primary plant-based alternative. If using other plant milks, compensate for lower protein with foods like tofu, beans, eggs, and nut butters. Toddlers need about 16-24 oz of milk per day, along with adequate dietary fat for brain development. Consult a pediatric dietitian if needed.' },
  ],
  whenNormal: ['Toddler drinks fortified soy milk and has a varied diet with adequate protein', 'Toddler is growing well on a plant-based diet with appropriate supplementation', 'Family uses plant milk alongside other protein-rich foods'],
  whenToMention: ['Toddler is drinking mainly low-protein plant milks like almond or rice milk', 'You are concerned your toddler is not getting enough protein or fat', 'Toddler is on a fully vegan diet and you want nutritional guidance', 'Toddler\'s growth has slowed since switching to plant milk'],
  whenToActNow: ['Toddler is losing weight or showing signs of nutritional deficiency', 'Toddler has very low energy or developmental concerns that may be nutrition-related', 'Toddler has an allergic reaction to a plant milk'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['cow-milk-alternative-comparison', 'baby-calcium-intake-dairy-free', 'baby-protein-needs-by-age'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Choosing a Milk Alternative for Your Child. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Nutritional Quality of Plant-Based Milk Alternatives for Children. Current Nutrition Reports, 2022.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
