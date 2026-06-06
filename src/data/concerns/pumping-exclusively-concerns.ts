import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pumping-exclusively-concerns',
  title: 'Challenges with Exclusive Pumping',
  category: 'feeding',
  searchTerms: [
    'exclusively pumping',
    'exclusive pumping challenges',
    'only pumping no nursing',
    'EP mom tips',
    'exclusive pumping schedule',
    'exclusive pumping supply',
    'pumping instead of breastfeeding',
    'exclusive pumping burnout',
    'exclusive pumping enough milk',
    'how to exclusively pump',
  ],
  quickAnswer:
    'Exclusive pumping (EP) is a valid and demanding way to provide breast milk. It requires dedication to a pumping schedule, typically 8-12 times per day initially, gradually reducing to 5-7 times as supply stabilizes. Many mothers exclusively pump due to latch issues, NICU stays, or personal preference. Your baby still gets all the benefits of breast milk through exclusive pumping.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'In the early weeks, pump 8-12 times per day including overnight to establish supply. This mimics a newborn\'s nursing frequency. As supply establishes (usually by 6-12 weeks), you can gradually drop sessions while maintaining total output.',
    },
    {
      ageRange: '4-6 months',
      context: 'Many exclusively pumping mothers have dropped to 5-7 pump sessions by this point. Focus on total daily output rather than per-session amounts. Having a consistent schedule helps maintain supply. A middle-of-the-night pump protects supply due to higher prolactin levels.',
    },
    {
      ageRange: '6-9 months',
      context: 'As baby starts solids, total milk needs begin to level off or slightly decrease. Some EP mothers begin dropping additional pump sessions. Listen to your body and watch your output. Some mothers can maintain supply with as few as 4 sessions per day.',
    },
    {
      ageRange: '9-12 months',
      context: 'Many EP mothers set a goal of reaching 12 months. As solids increase, you may be able to pump less frequently. Even 3-4 sessions may maintain adequate supply for baby\'s reduced milk needs. Celebrate however long you make it.',
    },
    {
      ageRange: '12-24 months',
      context: 'If you wish to continue pumping past 12 months, you can. Many EP mothers transition to formula or cow\'s milk at this point. There is no wrong choice. Weaning from the pump should be done gradually to avoid engorgement and mastitis.',
    },
  ],
  whenNormal: [
    'You have a consistent pumping schedule that maintains adequate output',
    'Output varies slightly from session to session and day to day',
    'You feel exhausted sometimes from the pumping schedule and that is understandable',
  ],
  whenToMention: [
    'Your supply is decreasing despite maintaining your pumping schedule',
    'You are feeling overwhelmed, anxious, or depressed from the demands of exclusive pumping',
    'You want guidance on safely dropping pump sessions',
  ],
  whenToActNow: [
    'You develop mastitis symptoms from missed or skipped pumping sessions',
    'Your mental health is severely impacted by exclusive pumping and you need support',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['pumping-not-enough-output', 'power-pumping-effectiveness', 'breast-pump-flange-size-wrong'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Exclusive Breast Milk Pumping. Breastfeeding Medicine, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
