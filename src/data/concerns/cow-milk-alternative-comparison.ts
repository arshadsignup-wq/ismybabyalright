import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cow-milk-alternative-comparison',
  title: 'What Are the Best Cow\'s Milk Alternatives for My Child?',
  category: 'feeding',
  searchTerms: ['cow milk alternative baby', 'milk alternative toddler', 'oat milk vs cow milk toddler', 'almond milk for toddler', 'soy milk toddler', 'dairy free milk child', 'milk substitute baby', 'best milk alternative child', 'non dairy milk toddler nutrition', 'milk alternative comparison child'],
  quickAnswer: 'Cow\'s milk alternatives vary significantly in nutritional content. Whole cow\'s milk is recommended from age 12 months for its protein, fat, calcium, and vitamin D. If your child cannot have cow\'s milk, fortified soy milk is the closest nutritional match. Other alternatives like oat, almond, coconut, and rice milk are lower in protein and fat and may not meet a toddler\'s nutritional needs without careful dietary planning. Always choose unsweetened, fortified versions and discuss with your pediatrician.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies under 12 months should drink breast milk or infant formula only. Cow\'s milk and all plant-based milks are not appropriate as a primary drink at this age.' },
    { ageRange: '4-6 months', context: 'Continue breast milk or formula as the primary nutrition source. No milk alternatives should replace breast milk or formula before 12 months.' },
    { ageRange: '6-9 months', context: 'Breast milk or formula remains the primary beverage. Small amounts of dairy in foods (yogurt, cheese) can be introduced. If baby has a confirmed milk allergy, your pediatrician will guide dairy-free alternatives.' },
    { ageRange: '9-12 months', context: 'As the transition to whole milk approaches at 12 months, discuss alternatives with your pediatrician if your child has a milk allergy or intolerance. Planning ahead ensures a smooth transition.' },
    { ageRange: '12-24 months', context: 'If cow\'s milk is not an option, fortified unsweetened soy milk provides the closest nutritional profile (7g protein per cup vs. 8g in cow\'s milk). Oat milk has less protein (2-4g). Almond milk has very little protein (1g). Rice milk is low in protein and fat. Coconut milk is low in protein. Always check that alternatives are fortified with calcium and vitamin D.' },
  ],
  whenNormal: ['Child drinks whole cow\'s milk after age 1 and tolerates it well', 'Child is on a doctor-recommended alternative milk and growing well', 'Child gets adequate protein and fat from other dietary sources alongside a plant milk'],
  whenToMention: ['You are unsure which milk alternative best suits your child\'s needs', 'Child on a plant milk is not gaining weight or growing as expected', 'Child has a confirmed or suspected milk allergy and you need guidance on alternatives', 'You want to ensure your child is getting adequate calcium and vitamin D without dairy'],
  whenToActNow: ['Child is showing signs of malnutrition or nutritional deficiency', 'Child has an allergic reaction to any milk product', 'Child is losing weight or falling off their growth curve'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['plant-milk-nutrition-toddler', 'baby-calcium-intake-dairy-free', 'goat-milk-formula-safety'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Milk Alternatives: What Parents Should Know. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Nutritional Adequacy of Plant-Based Milks for Young Children. Nutrients, 2021.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
