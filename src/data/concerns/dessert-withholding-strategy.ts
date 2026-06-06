import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dessert-withholding-strategy',
  title: 'Should I Withhold Dessert Until My Child Eats Dinner?',
  category: 'feeding',
  searchTerms: ['withholding dessert', 'dessert as reward', 'eat dinner before dessert', 'no dessert until you eat', 'dessert leverage child', 'using dessert as bribe', 'dessert rules children', 'dessert negotiation meal', 'treats after dinner rule', 'earn dessert eating'],
  quickAnswer: 'Using dessert as leverage ("eat your vegetables and you can have dessert") actually backfires. Research shows this approach elevates the status of dessert, makes vegetables seem like a chore, and teaches children that sweets are the most desirable food. A better approach is to serve a small dessert alongside the meal or on some nights without conditions, keeping all foods emotionally neutral.',
  byAge: [
    { ageRange: '0-3 months', context: 'Not applicable.' },
    { ageRange: '4-6 months', context: 'Not applicable.' },
    { ageRange: '6-9 months', context: 'As baby starts solids, treat all foods neutrally. Do not convey that sweet foods are special or more desirable.' },
    { ageRange: '9-12 months', context: 'Continue neutral attitudes toward all foods. All foods offered at meals are acceptable choices for baby.' },
    { ageRange: '12-24 months', context: 'When dessert becomes part of meals, try serving a small portion alongside dinner rather than after. This removes the "earn dessert" dynamic. If dessert is separate, do not require a clean plate first. When dessert is occasional rather than daily, toddlers learn it is just one of many food options.' },
  ],
  whenNormal: ['You serve dessert without conditions on some occasions', 'You keep dessert portions small and serve alongside or after dinner without requirements', 'Your child treats all foods similarly without obsessing over sweets'],
  whenToMention: ['Dessert negotiations have become a major source of mealtime conflict', 'Your child fixates on sweets and refuses all other food', 'You want guidance on healthy dessert and treat practices'],
  whenToActNow: ['Your child has developed disordered eating around food restriction and treats', 'Your child is experiencing significant anxiety about food rules'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['food-as-reward-problems', 'pressure-to-eat-effects', 'clean-plate-mentality-harmful'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Teaching Healthy Eating Habits. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Food Restriction and Children\'s Eating Behavior. Pediatrics, 2019.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
