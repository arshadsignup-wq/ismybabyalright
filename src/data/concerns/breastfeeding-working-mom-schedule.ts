import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-working-mom-schedule',
  title: 'How to Manage Pumping at Work',
  category: 'feeding',
  searchTerms: [
    'pumping at work schedule',
    'breastfeeding working mom',
    'pump schedule work',
    'pumping breaks at work',
    'return to work breastfeeding',
    'working and breastfeeding tips',
    'pumping at work rights',
    'workplace pumping law',
    'pumping at work milk storage',
    'maintaining supply at work',
  ],
  quickAnswer:
    'Federal law (the PUMP Act) requires most employers to provide reasonable break time and a private space (not a bathroom) for nursing mothers to pump. Most mothers need to pump every 3-4 hours during the workday to maintain supply. Planning your schedule, building a freezer stash before returning, and communicating with your employer early can help make the transition smoother.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'If returning to work during this period, plan to pump every 2-3 hours to match baby\'s feeding frequency. Start building a small freezer stash 2-3 weeks before returning. Practice with the pump and get a proper flange fit. Introduce a bottle to baby 2-3 weeks before your start date.',
    },
    {
      ageRange: '4-6 months',
      context: 'This is the most common time mothers return to work. Plan to pump 2-3 times during an 8-hour workday. Nurse baby before leaving and immediately when you get home. Store pumped milk in a cooler bag with ice packs at work. Many mothers find a routine within the first 1-2 weeks.',
    },
    {
      ageRange: '6-9 months',
      context: 'As baby starts solids, you may be able to reduce pumping sessions slightly. However, breast milk should still be the primary nutrition. Continue pumping at least twice during the workday. Some mothers pump during commute time using a wearable pump.',
    },
    {
      ageRange: '9-12 months',
      context: 'With increased solid food intake, some mothers reduce to 1-2 pumping sessions at work. Continue nursing on demand when together. If supply decreases, power pumping on weekends can help. You are close to the 12-month milestone.',
    },
    {
      ageRange: '12-24 months',
      context: 'Many mothers choose to stop pumping at work after 12 months and only nurse when together. Others continue. There is no right or wrong choice. If you want to continue, even one pump session at work can help maintain your supply.',
    },
  ],
  whenNormal: [
    'Supply dips slightly in the first week back at work then stabilizes',
    'You pump slightly less per session than baby takes from a bottle',
    'You need to adjust your schedule a few times to find what works',
  ],
  whenToMention: [
    'Your supply drops significantly after returning to work despite pumping regularly',
    'You are experiencing pain while pumping that was not present before',
    'You feel emotionally overwhelmed by the demands of pumping at work',
  ],
  whenToActNow: [
    'You develop mastitis symptoms such as fever, red streaks on breast, or flu-like symptoms from missed pumping sessions',
    'Your employer is refusing to provide pumping breaks or space as required by law',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['breastfeeding-supply-after-return-work', 'pumping-not-enough-output', 'pumping-exclusively-concerns'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Breastfeeding and Returning to Work. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Going-Back-to-Work.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Workplace Support for Breastfeeding. Maternal and Child Health Journal, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
