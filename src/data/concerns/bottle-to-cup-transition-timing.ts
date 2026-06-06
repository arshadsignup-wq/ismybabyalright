import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bottle-to-cup-transition-timing',
  title: 'When Should My Baby Switch from Bottle to Cup?',
  category: 'feeding',
  searchTerms: ['when to stop bottle', 'bottle to cup transition', 'when switch bottle to cup', 'weaning bottle age', 'stop bottle by when', 'bottle to cup timeline', 'when to take away bottle', 'bottle weaning age', 'introduce cup replace bottle', 'bottle too long'],
  quickAnswer: 'The AAP recommends beginning to introduce cups around 6 months and weaning from bottles by 12-15 months. Prolonged bottle use can lead to tooth decay, excess calorie intake, and delayed oral motor development. Start by replacing one bottle with a cup and gradually replace the rest. The bedtime bottle is typically the last to go.',
  byAge: [
    { ageRange: '0-3 months', context: 'Bottles are appropriate and necessary at this age. No need to think about cup transition yet.' },
    { ageRange: '4-6 months', context: 'Around 6 months, begin introducing a cup for small sips of water with meals. This is just practice and not meant to replace bottles yet.' },
    { ageRange: '6-9 months', context: 'Continue cup practice. Let baby explore open cups held by you, straw cups, and 360 cups to find which they prefer. Bottles still provide most liquid nutrition.' },
    { ageRange: '9-12 months', context: 'Start replacing one bottle per day with a cup, beginning with the one baby is least attached to. Offer milk or formula in a cup at mealtimes. Keep the bedtime bottle last.' },
    { ageRange: '12-24 months', context: 'Aim to have bottles fully discontinued by 15 months. Replace the final bottle (usually bedtime) with a cup of milk 30 minutes before bed as part of the bedtime routine. If transition is difficult, go cold turkey for 3-5 days or dilute bottle milk with water while offering full milk in a cup.' },
  ],
  whenNormal: ['Baby shows interest in cups around 6-9 months', 'Transition takes several weeks to complete', 'Baby is reluctant to give up the bedtime bottle but adjusts within a week'],
  whenToMention: ['Baby is over 18 months and completely refuses all cups', 'Baby has tooth decay from prolonged bottle use', 'You need strategies for a resistant toddler'],
  whenToActNow: ['Baby has significant tooth decay from bottle use', 'Baby is choking on bottle contents while lying down'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['weaning-from-bottle', 'toddler-still-using-bottle', 'sippy-cup-vs-straw-cup'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Discontinuing the Bottle. HealthyChildren.org, 2024.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Discontinuing-the-Bottle.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Cups and Drinks for Infants and Toddlers. 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/cups-and-drinks.html' },
  ],
};
