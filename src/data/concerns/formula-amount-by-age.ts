import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-amount-by-age',
  title: 'How Much Formula Should My Baby Drink by Age?',
  category: 'feeding',
  searchTerms: ['formula amount by age', 'how much formula baby needs', 'formula feeding schedule', 'formula ounces per day', 'formula amount newborn', 'how many ounces formula', 'formula feeding guide', 'formula intake chart', 'too much formula baby', 'not enough formula baby'],
  quickAnswer: 'Newborns start with 1-2 ounces per feed, increasing to about 24-32 ounces per day by 1-2 months. Most babies need 24-32 ounces per day from 2-6 months. After 6 months with solids, formula needs may decrease slightly. These are general guidelines and your baby\'s individual needs may vary. Feed responsively by watching for hunger and fullness cues.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns: 1-2 ounces every 2-3 hours (first week), increasing to 3-4 ounces every 3-4 hours by one month. By 2-3 months, most babies take 4-5 ounces every 3-4 hours. Total daily intake is typically 24-32 ounces. Feed on demand rather than on a strict schedule.' },
    { ageRange: '4-6 months', context: 'Most babies take 4-6 ounces per feed, 4-6 times per day, totaling 24-32 ounces. As solids are introduced around 6 months, formula remains the primary nutrition source. Do not reduce formula to make room for solids initially.' },
    { ageRange: '6-9 months', context: 'Formula intake stays around 24-32 ounces while solids gradually increase. Offer formula before solids so baby does not fill up on food and miss important formula nutrition. By 9 months, some babies naturally decrease formula slightly.' },
    { ageRange: '9-12 months', context: 'As solids become a larger part of the diet, formula intake may decrease to 16-24 ounces per day. Baby should still be getting at least 16 ounces of formula daily until 12 months.' },
    { ageRange: '12-24 months', context: 'Most babies transition from formula to whole milk at 12 months. Milk intake should be about 16-20 ounces per day. Do not exceed 24 ounces as excess milk can displace food and reduce iron intake.' },
  ],
  whenNormal: ['Baby\'s intake varies slightly from day to day', 'Baby naturally increases intake as they grow', 'Baby takes different amounts at different feeds throughout the day'],
  whenToMention: ['Baby consistently drinks much more or less than guidelines for their age', 'Baby still seems hungry after finishing recommended amounts', 'You are unsure how to balance formula and solids'],
  whenToActNow: ['Baby is refusing formula and showing signs of dehydration', 'Baby is vomiting up most formula and not keeping enough down'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['formula-overfeeding-signs', 'formula-underfeeding-signs', 'baby-not-drinking-enough-milk'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Amount and Schedule of Formula Feedings. HealthyChildren.org, 2024.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Amount-and-Schedule-of-Formula-Feedings.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. How Much and How Often to Feed Infant Formula. 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/how-much-how-often.html' },
  ],
};
