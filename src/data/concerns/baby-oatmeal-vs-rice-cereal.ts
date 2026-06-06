import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-oatmeal-vs-rice-cereal',
  title: 'Oatmeal vs Rice Cereal: Which Is Better for Baby?',
  category: 'feeding',
  searchTerms: [
    'oatmeal vs rice cereal baby',
    'which cereal better baby',
    'baby oatmeal cereal benefits',
    'oatmeal or rice first food',
    'baby cereal comparison',
    'infant oatmeal vs rice',
    'best cereal for baby starting solids',
    'baby cereal which grain',
    'oatmeal cereal baby nutrition',
    'rice cereal alternative baby',
  ],
  quickAnswer:
    'Oatmeal cereal is generally preferred over rice cereal for babies. Both provide iron fortification, but oatmeal has lower arsenic risk, more fiber, and a heartier nutritional profile. The AAP and FDA suggest oatmeal and multi-grain cereals as alternatives to reduce arsenic exposure from rice.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Neither cereal is appropriate at this age. Babies should only receive breast milk or formula.',
    },
    {
      ageRange: '4-6 months',
      context: 'If starting with cereal, iron-fortified oatmeal is a great choice. It is smooth, easy to mix with breast milk or formula, and provides important iron. Some babies may need a few tries to accept the taste. You can also skip cereal entirely and start with other iron-rich foods.',
    },
    {
      ageRange: '6-9 months',
      context: 'Offer oatmeal as a regular part of the diet. You can make it thicker as baby becomes more skilled. Mix with fruit purees for added flavor and nutrition. Try other grains like barley and quinoa too.',
    },
    {
      ageRange: '9-12 months',
      context: 'Baby can eat regular rolled oats cooked soft, not just infant oatmeal cereal. This provides more texture and whole grain nutrition. Rice can be included in moderation as part of a varied diet.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers can eat regular oatmeal and a variety of whole grains. There is no need to continue using infant cereal. Offer oatmeal with fruit, nut butter, and other toppings for a nutritious meal.',
    },
  ],
  whenNormal: [
    'You choose oatmeal cereal for your baby\'s first cereal',
    'You alternate between different grain cereals',
    'Baby prefers one cereal over another',
  ],
  whenToMention: [
    'Baby refuses all cereals and you are worried about iron intake',
    'Baby has a family history of celiac disease and you have concerns about oats',
    'You need guidance on which cereal is best for a baby with digestive issues',
  ],
  whenToActNow: [
    'Baby has an allergic reaction to cereal such as hives, vomiting, or breathing difficulty',
    'Baby develops significant digestive issues after starting any cereal',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-cereal-as-first-food', 'baby-rice-cereal-arsenic', 'baby-iron-fortified-cereal-need'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Infant Cereal Choices. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'FDA',
      citation: 'U.S. Food and Drug Administration. Arsenic in Rice and Rice Products: Infant Rice Cereal. 2020.',
      url: 'https://www.fda.gov/food/metals-and-your-food/arsenic-food-and-dietary-supplements',
    },
  ],
};
