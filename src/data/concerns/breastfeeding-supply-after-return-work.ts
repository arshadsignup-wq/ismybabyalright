import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-supply-after-return-work',
  title: 'My Supply Dropped After Returning to Work',
  category: 'feeding',
  searchTerms: [
    'milk supply dropped work',
    'less milk pumping at work',
    'supply drop return to work',
    'breast milk supply decrease work',
    'pumping less at work',
    'milk supply low after going back to work',
    'maintaining supply at work',
    'supply drop pumping',
    'not pumping enough at work',
    'milk supply recover after work',
  ],
  quickAnswer:
    'A supply dip after returning to work is very common and does not mean breastfeeding is over. Stress, inconsistent pumping, poor pump fit, and dehydration can all contribute. Pumping more frequently, ensuring proper flange size, staying hydrated, power pumping on weekends, and nursing on demand when with baby can help rebuild supply.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'If returning to work this early, maintaining supply requires frequent pumping (every 2-3 hours). Your supply is still being established, so consistent emptying is crucial. Any missed sessions can impact supply more at this stage.',
    },
    {
      ageRange: '4-6 months',
      context: 'This is the most common time for supply dips related to work. Make sure you are pumping at least as often as baby would feed (every 3-4 hours). Check pump parts for wear, ensure flanges fit properly, and stay hydrated. Nurse frequently on days off to boost supply.',
    },
    {
      ageRange: '6-9 months',
      context: 'As baby starts solids, you may notice pumping output naturally decreases slightly. This can coincide with the transition to work. Focus on emptying breasts fully at each pump session. Breast compression during pumping can help. Some mothers add a power pumping session in the evening.',
    },
    {
      ageRange: '9-12 months',
      context: 'Supply may naturally decrease as baby eats more solids. If you are still pumping at work, even smaller amounts are valuable. You can supplement with frozen milk or formula if needed. Many mothers find they can maintain their nursing relationship even if pumping output decreases.',
    },
    {
      ageRange: '12-24 months',
      context: 'If you are still pumping at work past 12 months, any amount you provide is beneficial. Some mothers transition to nursing only when together and providing other drinks during the day. This is a personal choice.',
    },
  ],
  whenNormal: [
    'Output drops slightly in the first week back then improves',
    'You pump a little less than baby takes from bottles but can supplement with frozen milk',
    'Supply is lower on stressful days but recovers on weekends',
  ],
  whenToMention: [
    'Supply has dropped significantly and you cannot pump enough to keep up with baby\'s needs',
    'You have tried multiple strategies for a week with no improvement',
    'You are feeling overwhelmed or sad about supply changes',
  ],
  whenToActNow: [
    'You develop mastitis or a clogged duct from sudden changes in pumping frequency',
    'Baby is not getting enough milk and showing signs of dehydration',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['breastfeeding-working-mom-schedule', 'pumping-not-enough-output', 'supply-dips-breastfeeding'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Pumping and Storing Breast Milk. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Pumping-and-Storing-Breastmilk.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Impact of Work on Breastfeeding Duration. Journal of Human Lactation, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
