import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-and-alcohol',
  title: 'Breastfeeding and Alcohol: What\'s Safe?',
  category: 'feeding',
  searchTerms: [
    'breastfeeding and alcohol',
    'can I drink while breastfeeding',
    'alcohol and breast milk',
    'pump and dump alcohol',
    'how long after drinking can I breastfeed',
    'one glass of wine while breastfeeding',
    'alcohol breastfeeding safe',
    'beer and breast milk supply',
    'breastfeeding alcohol wait time',
    'drinking and nursing baby',
  ],
  quickAnswer:
    'Occasional moderate alcohol consumption (one standard drink) is generally considered compatible with breastfeeding. Alcohol peaks in breast milk about 30-60 minutes after drinking, and it takes approximately 2-3 hours per drink to clear from your milk. "Pumping and dumping" does not speed alcohol clearance from breast milk -- only time does. The safest option is to avoid alcohol entirely, but an occasional drink with proper timing is unlikely to harm your baby.',
  byAge: [
    {
      ageRange: 'Newborn (0-1 month)',
      context:
        'Newborns metabolize substances more slowly than older babies, making them more vulnerable to even small amounts of alcohol. During the first month, it is best to avoid alcohol entirely if possible. If you do have a drink, wait at least 2-3 hours before nursing. Newborns nurse very frequently, so planning around feeds can be challenging. Having expressed milk available as a backup is a prudent strategy.',
    },
    {
      ageRange: '1-6 months',
      context:
        'By this age, your baby has a more developed liver, though still immature compared to adults. An occasional single standard drink is generally considered acceptable if you wait at least 2-3 hours before the next feeding. A standard drink is defined as 12 oz of beer, 5 oz of wine, or 1.5 oz of spirits. Avoid heavy or binge drinking, as chronic exposure can affect your baby\'s development and your milk supply.',
    },
    {
      ageRange: '6+ months',
      context:
        'As your baby gets older and may be nursing less frequently due to solid food introduction, timing an occasional drink becomes easier. The same 2-3 hour guideline per standard drink still applies. If you are concerned, you can time your drink right after a feeding to maximize the time before the next session. Your baby\'s larger size and more mature metabolism provide an additional margin of safety.',
    },
  ],
  whenNormal: [
    'You have an occasional single drink and wait at least 2-3 hours before breastfeeding.',
    'You plan ahead and have expressed breast milk available for feedings during the wait period.',
    'You feel steady and sober before nursing your baby.',
  ],
  whenToMention: [
    'You are concerned about how your alcohol consumption may be affecting your breast milk supply.',
    'You find yourself relying on alcohol regularly to cope with parenting stress.',
    'You are unsure about interactions between alcohol and any medications you are taking while breastfeeding.',
  ],
  whenToActNow: [
    'You are intoxicated and your baby needs to feed -- use previously expressed breast milk or formula and do not breastfeed until sober.',
    'You are concerned about your alcohol consumption and feel unable to control it.',
    'Your baby seems unusually drowsy, has trouble feeding, or shows other unusual symptoms after being nursed following alcohol consumption.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['breastfeeding-fatigue-exhaustion', 'breastfeeding-misinformation-social-media', 'breastfeeding-feeling-inadequate-supply'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Alcohol and Breastfeeding. CDC, 2024.',
      url: 'https://www.cdc.gov/breastfeeding/breastfeeding-special-circumstances/vaccinations-medications-drugs/alcohol.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Alcohol and Breastmilk. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Alcohol-Breast-Milk.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Alcohol Abuse and Alcoholism. Alcohol and Lactation. LactMed Database.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK501469/',
    },
  ],
};
