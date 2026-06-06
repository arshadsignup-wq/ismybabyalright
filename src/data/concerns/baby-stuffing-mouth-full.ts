import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-stuffing-mouth-full',
  title: 'My Baby Keeps Stuffing Their Mouth Too Full',
  category: 'feeding',
  searchTerms: [
    'baby stuffing mouth with food',
    'baby overfilling mouth',
    'baby shoving too much food in mouth',
    'baby puts too much food in mouth',
    'toddler chipmunking food',
    'baby packing food in mouth',
    'baby cramming food in mouth',
    'baby eating too fast stuffing',
    'baby choking from overfilling mouth',
    'how to stop baby from stuffing mouth',
  ],
  quickAnswer:
    'Stuffing the mouth is common as babies learn portion control and oral awareness. They are still developing the ability to gauge how much food fits safely in their mouth. Offering only a few pieces of food at a time and modeling small bites can help. Supervision during meals is essential since overfilling the mouth increases choking risk.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable as babies are not eating solid foods at this age.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Babies just starting solids are being spoon-fed and cannot stuff their own mouths yet. However, they may open wide for each bite before swallowing the previous one. Pace the feeding by waiting until baby swallows before offering the next bite.',
    },
    {
      ageRange: '6-9 months',
      context:
        'As babies begin self-feeding with finger foods, they may grab multiple pieces at once and shove them in. This is because they have not yet learned how much food their mouth can handle. Place only two or three pieces of food on the tray at a time. Use hand-over-hand guidance to show taking one piece at a time.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Mouth stuffing is very common at this age as babies become more enthusiastic about self-feeding. They may also stuff food when they are very hungry. Try giving a few bites of spoon-fed food first to take the edge off hunger, then offer finger foods in small amounts. Model taking small bites and chewing slowly.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Most toddlers gradually improve at managing bite sizes, but some continue to stuff food. If your toddler consistently overfills their mouth, try cutting food into very small pieces, offering only a few pieces at a time, and verbally reminding them to chew and swallow before taking more. If this persists along with other feeding difficulties, consider a feeding evaluation.',
    },
  ],
  whenNormal: [
    'Baby occasionally puts too much food in their mouth but manages to chew and swallow it',
    'Baby stuffs food mainly when very hungry or excited about a favorite food',
    'Behavior improves when you offer smaller portions on the tray',
    'Baby is learning self-feeding and has not fully developed portion awareness yet',
  ],
  whenToMention: [
    'Baby stuffs food to the point of gagging or vomiting at most meals',
    'Baby seems unable to gauge how much food is in their mouth despite repeated practice',
    'Baby also has difficulty with other oral motor skills like chewing or drinking',
  ],
  whenToActNow: [
    'Baby has a choking episode from overfilling their mouth that requires intervention',
    'Baby turns blue or cannot breathe because of food packed in their mouth',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-swallowing-food-whole', 'baby-choking-on-food', 'baby-feeding-too-fast'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Self-Feeding and Portion Sizes for Babies. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Choking Hazards. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/choking-hazards.html',
    },
  ],
};
