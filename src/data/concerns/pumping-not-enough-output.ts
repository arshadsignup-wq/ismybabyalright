import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pumping-not-enough-output',
  title: 'I Am Not Pumping Enough Milk',
  category: 'feeding',
  searchTerms: [
    'not pumping enough milk',
    'low pumping output',
    'pump not getting enough',
    'pumping less milk than expected',
    'breast pump low output',
    'how to pump more milk',
    'pump output dropping',
    'not enough milk from pump',
    'increasing pump output',
    'pump yield low',
  ],
  quickAnswer:
    'Many mothers worry about pump output, but pumping less than expected does not always mean low supply. Pumps are less efficient than babies, and output varies by time of day, stress level, pump quality, and flange fit. A typical pump session yields 1-4 ounces total from both breasts. Ensuring proper flange size, relaxing during sessions, and pumping consistently can help.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Early pumping output varies widely. If pumping in addition to nursing, 1-2 ounces combined is normal for an extra session. If exclusively pumping, aim for 25-30 ounces per day by week 4-6. Do not compare to other mothers as output varies significantly.',
    },
    {
      ageRange: '4-6 months',
      context: 'Pumping output typically stabilizes. If replacing a nursing session, 3-4 ounces per session is average. Make sure pump parts are not worn out and flanges fit correctly. Replacement of membranes and valves every 2-3 months is important for pump function.',
    },
    {
      ageRange: '6-9 months',
      context: 'Output may naturally decrease as baby starts solids. This is expected. Focus on breast compression during pumping, hands-on pumping technique, and ensure you are pumping long enough to empty the breast. Looking at baby photos or videos during pumping can help with letdown.',
    },
    {
      ageRange: '9-12 months',
      context: 'As baby eats more solids, total milk needs decrease slightly. You may not need to pump as much as before. If you are supplementing with formula alongside pumped milk, that is completely fine.',
    },
    {
      ageRange: '12-24 months',
      context: 'Any amount of pumped breast milk is valuable. If supply has decreased, focus on quality nursing sessions when with baby and provide other drinks and foods during the day.',
    },
  ],
  whenNormal: [
    'You pump 1-4 ounces total per session when replacing a feeding',
    'Output is highest in the morning and lower in the evening',
    'Output fluctuates with stress, hydration, and menstrual cycle',
  ],
  whenToMention: [
    'Total pumping output has decreased significantly without explanation',
    'Baby is not getting enough milk and is showing signs of inadequate intake',
    'You have tried troubleshooting strategies without improvement',
  ],
  whenToActNow: [
    'Baby is showing signs of dehydration or failure to thrive',
    'You are experiencing significant breast pain or signs of infection alongside low output',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['pumping-output-concerns', 'breast-pump-flange-size-wrong', 'power-pumping-effectiveness'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Pumping Breast Milk. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Pumping-and-Storing-Breastmilk.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Factors Affecting Breast Milk Expression. Breastfeeding Medicine, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
