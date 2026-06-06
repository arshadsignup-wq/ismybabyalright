import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-brand-specific-food-demand',
  title: 'My Toddler Only Eats Specific Brands of Food',
  category: 'feeding',
  searchTerms: [
    'toddler only eats specific brand',
    'toddler brand preference food',
    'toddler won\'t eat different brand',
    'toddler food brand obsession',
    'toddler only wants one brand crackers',
    'toddler specific packaging food',
    'toddler refuses generic food',
    'toddler recognizes food brands',
    'toddler brand loyal food',
    'toddler tantrum wrong food brand',
  ],
  quickAnswer:
    'Brand-specific food demands are a common part of toddler development. Toddlers crave predictability and sameness, and recognizing a specific package gives them comfort that the food will taste exactly as expected. This is related to their developmental need for control and predictability rather than a true feeding problem.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context: 'Not applicable. Babies at this age do not have brand awareness.',
    },
    {
      ageRange: '6-9 months',
      context: 'Not applicable for this age group.',
    },
    {
      ageRange: '9-12 months',
      context: 'Some babies begin to recognize familiar packaging around this age. This early brand recognition is a cognitive development milestone and is not a concern.',
    },
    {
      ageRange: '12-24 months',
      context: 'Brand-specific demands are very common at this age. Toddlers feel safe with what is familiar and predictable. You can try gradually transitioning by putting generic foods in familiar packaging, mixing brands, or presenting foods without packaging. Avoid making it a power struggle. If brand rigidity is part of a broader pattern of extreme rigidity in many areas of life, mention it at your next well visit.',
    },
  ],
  whenNormal: [
    'Toddler prefers specific brands but will eat similar alternatives when preferred brand is unavailable',
    'Toddler notices the packaging change but eventually eats the food',
    'Brand preference is limited to a few specific foods',
    'Toddler is flexible in other areas of eating and daily routine',
  ],
  whenToMention: [
    'Toddler has extreme meltdowns over brand changes that are disproportionate in duration and intensity',
    'Brand rigidity is part of a broader pattern of inflexibility affecting many aspects of daily life',
    'Toddler will not eat any food that is not in its original specific packaging',
  ],
  whenToActNow: [
    'Toddler is not eating because the specific brand is unavailable and shows signs of dehydration',
    'Extreme rigidity is accompanied by loss of previously acquired skills or social regression',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['picky-eating', 'toddler-food-jag', 'toddler-eating-same-food-daily'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Understanding Picky Eating. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Food Neophobia and Selective Eating in Young Children. Appetite, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
