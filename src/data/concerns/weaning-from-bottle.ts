import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'weaning-from-bottle',
  title: 'Weaning Off the Bottle',
  category: 'feeding',
  searchTerms: [
    'weaning off bottle',
    'when to stop bottle feeding',
    'transitioning from bottle to cup',
    'toddler won\'t give up bottle',
    'how to wean from bottle',
    'bottle weaning tips',
    'stopping bottle at 12 months',
    'baby too attached to bottle',
  ],
  quickAnswer:
    'The AAP recommends beginning the transition from bottles to cups around 12 months and completing it by 18 months. Prolonged bottle use is associated with tooth decay, excess calorie intake, and iron deficiency anemia from drinking too much milk. A gradual approach that replaces one bottle at a time with a cup usually works best and causes less distress for everyone.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'This is the ideal window to introduce cups so that your baby starts becoming comfortable with them before the actual bottle weaning process begins. Offer small amounts of water or breast milk in an open cup or straw cup at mealtimes. There is no need to eliminate bottles yet, but early exposure to cups makes the transition much easier later.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Begin eliminating bottles one at a time, starting with the one your child is least attached to, usually a daytime bottle. Offer milk in a cup at meals and snacks instead. The bedtime bottle is typically the hardest to drop. Try moving it earlier in the bedtime routine so your child does not fall asleep with it, and offer comfort through a book or song instead.',
    },
    {
      ageRange: '24-36 months',
      context:
        'If your child is still using a bottle at this age, it is important to work on transitioning. Some parents find that going cold turkey works well for toddlers who can understand a simple explanation. Others prefer a gradual approach, diluting milk in the bottle with water while offering full-strength milk in a cup. Talk to your pediatrician if you are struggling with the transition.',
    },
  ],
  whenNormal: [
    'Your child protests for a few days when a bottle is dropped but adjusts within a week',
    'Your child drinks less milk from a cup initially compared to what they drank from a bottle',
    'Your child asks for the bottle at bedtime but accepts an alternative comfort after a brief adjustment period',
    'Your child prefers a straw cup or open cup over a sippy cup or vice versa',
  ],
  whenToMention: [
    'Your child is over 18 months and completely refuses to drink from any type of cup',
    'Your child is drinking excessive amounts of milk from a bottle, more than 24 ounces per day, and eating very little solid food',
    'You are concerned about your child\'s dental health due to prolonged bottle use, especially with milk at bedtime',
    'Your child has become significantly distressed and is eating or drinking very little since you started the transition',
  ],
  whenToActNow: [
    'Your child is showing signs of dehydration because they refuse both bottle and cup',
    'Your child has visible tooth decay that you believe is related to bottle use and has not been seen by a dentist',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Discontinuing the Bottle. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Discontinuing-the-Bottle.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 and Younger. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Foods and Drinks for 12 to 23 Months.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/12-23-months.html',
    },
  ],
};
