import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-wants-bottle-at-night-still',
  title: 'My Toddler Still Wants a Bottle at Night',
  category: 'feeding',
  searchTerms: [
    'toddler night bottle',
    'toddler bottle at bedtime still',
    'toddler won\'t sleep without bottle',
    'night bottle weaning toddler',
    'toddler milk bottle at night',
    'bottle tooth decay night',
    'toddler still uses bottle sleep',
    'breaking night bottle habit toddler',
    'toddler bottle dependence night',
    'weaning toddler off night bottle',
  ],
  quickAnswer:
    'Night bottles after 12 months increase the risk of tooth decay and can contribute to excess calorie intake and overnight waking. The AAP recommends weaning from bottles by 12-15 months. Gradually reducing the amount in the bottle, switching to water, or replacing the bottle with a comfort object can help break this habit.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Night feeds are essential at this age. Babies need to eat frequently and should not have feeds restricted overnight.',
    },
    {
      ageRange: '4-6 months',
      context: 'Night feeds are still normal and expected for most babies at this age.',
    },
    {
      ageRange: '6-9 months',
      context: 'Many babies still need one or two overnight feeds. Talk to your pediatrician about when night weaning may be appropriate based on your baby\'s weight and growth.',
    },
    {
      ageRange: '9-12 months',
      context: 'Many babies can drop night feeds by this age if growing well. If baby takes a bottle at bedtime, try offering it 30 minutes before laying them down rather than in the crib to avoid a feed-to-sleep association.',
    },
    {
      ageRange: '12-24 months',
      context: 'Night bottles should ideally be discontinued by 12-15 months. Milk pooling around teeth overnight causes baby bottle tooth decay. To wean: gradually reduce the amount in the night bottle by half an ounce every few nights, switch to water in the bottle, or replace the bottle with a cup of water and a comfort object. Expect some pushback for 3-5 nights.',
    },
  ],
  whenNormal: [
    'Toddler asks for a bottle at bedtime during the transition period',
    'Toddler takes a few nights to adjust to no night bottle',
    'Toddler accepts water in a cup as a replacement',
  ],
  whenToMention: [
    'Toddler is over 18 months and you cannot get them to give up the night bottle',
    'Toddler has visible tooth decay or discoloration from night bottles',
    'Toddler drinks large amounts of milk overnight and is not hungry for meals during the day',
  ],
  whenToActNow: [
    'Toddler has significant tooth decay or dental pain',
    'Toddler is choking or gagging on the bottle while lying down at night',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-still-using-bottle', 'weaning-from-bottle', 'night-weaning-readiness'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Bottle Weaning and Tooth Decay. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Discontinuing-the-Bottle.aspx',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Cups and Bottles: When to Transition. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/cups-and-drinks.html',
    },
  ],
};
