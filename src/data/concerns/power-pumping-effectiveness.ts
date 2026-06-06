import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'power-pumping-effectiveness',
  title: 'Does Power Pumping Work to Increase Supply?',
  category: 'feeding',
  searchTerms: ['power pumping', 'does power pumping work', 'power pumping schedule', 'increase milk supply pumping', 'power pumping how to', 'power pumping results', 'cluster pumping', 'pump to increase supply', 'power pumping how long', 'power pumping effectiveness'],
  quickAnswer: 'Power pumping mimics cluster feeding by pumping in cycles of 20 minutes on, 10 minutes off, for about an hour. It signals your body to produce more milk. Most mothers see results after 2-3 days of daily power pumping, with full effects by one week. It works best when combined with adequate hydration, nutrition, and rest.',
  byAge: [
    { ageRange: '0-3 months', context: 'Power pumping can be effective for establishing supply in the early weeks. One power pumping session per day, replacing one regular pump session, is typically recommended. The best time is usually morning when prolactin levels are highest.' },
    { ageRange: '4-6 months', context: 'If supply dips around the return to work, power pumping once daily for 3-7 days can help boost production. Continue regular pumping at work and add a power pump session in the evening.' },
    { ageRange: '6-9 months', context: 'Power pumping can help counteract supply dips during this period. Even one session every other day may help. Combine with nursing on demand when with baby.' },
    { ageRange: '9-12 months', context: 'Supply naturally adjusts as baby eats more solids. Power pumping can still boost supply but results may be less dramatic than in early months.' },
    { ageRange: '12-24 months', context: 'Power pumping can still work but is less commonly needed as baby relies less on breast milk for primary nutrition.' },
  ],
  whenNormal: ['You see a gradual increase in output over 3-7 days of power pumping', 'Output increases more at some times of day than others', 'Results vary and some mothers respond better than others'],
  whenToMention: ['Power pumping for more than a week has not improved output at all', 'You are exhausted from the additional pumping demands', 'You need guidance on whether your supply is truly low'],
  whenToActNow: ['You develop breast pain, fever, or signs of mastitis from increased pumping', 'Baby is not getting enough milk and is losing weight'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['pumping-not-enough-output', 'supply-dips-breastfeeding', 'low-milk-supply-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Increasing Breast Milk Supply. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Breast Milk Production and Pumping Frequency. Breastfeeding Medicine, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
