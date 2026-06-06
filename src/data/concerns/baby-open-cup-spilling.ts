import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-open-cup-spilling',
  title: 'My Baby Spills Everything with an Open Cup',
  category: 'feeding',
  searchTerms: [
    'baby spilling open cup',
    'baby can\'t drink open cup',
    'baby open cup mess',
    'teaching baby open cup drinking',
    'baby dumps water from cup',
    'baby pours cup on self',
    'open cup practice baby',
    'when can baby use open cup',
    'baby open cup coordination',
    'baby tilting cup too far',
  ],
  quickAnswer:
    'Spilling is a completely normal and expected part of learning to drink from an open cup. This is an important developmental skill that takes months to master. Start with very small amounts of liquid and expect a lot of mess. Most babies become reasonably proficient with an open cup between 12 and 24 months.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Open cup practice is not appropriate for babies this young. Focus on breast or bottle feeding.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Around 6 months, you can begin offering tiny sips from a small open cup that you hold. Expect most of the liquid to dribble out. This early exposure helps baby learn the concept even though they will not be proficient for many months.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Continue offering sips from an open cup that you hold. Baby is learning jaw stability and lip closure on the cup rim. Use a very small cup with only a tablespoon or two of liquid to minimize mess. Spilling is a necessary part of the learning process.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Some babies start trying to hold the cup themselves, which means more spilling. This is great practice for coordination. Use a small cup that is easy for baby to grip. Continue offering only small amounts at a time. Some babies do better with a slightly weighted cup that tips more slowly.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are developing the coordination to drink from an open cup with less spilling, but expect messes to continue. By 24 months, most toddlers can drink from an open cup with reasonable success. If your toddler still cannot bring an open cup to their mouth by 18 months, mention it at your next well visit.',
    },
  ],
  whenNormal: [
    'Baby spills frequently while learning to use an open cup',
    'Baby tilts the cup too far and pours liquid on themselves',
    'Baby prefers to play with the water in the cup rather than drink it',
    'Baby can take a few sips but then dumps the rest',
  ],
  whenToMention: [
    'Baby is over 18 months and cannot bring a cup to their mouth',
    'Baby has difficulty with lip closure on the cup rim',
    'Baby consistently coughs or chokes when drinking from an open cup',
  ],
  whenToActNow: [
    'Baby appears unable to coordinate swallowing liquids from any vessel',
    'Baby aspirates or inhales liquid every time they try to drink',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-wont-drink-from-cup', 'straw-cup-training-difficulty', 'sippy-cup-vs-straw-cup'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Open Cup Drinking in Infants. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Developmental Milestones in Feeding. 2023.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
  ],
};
