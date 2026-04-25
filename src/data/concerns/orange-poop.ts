import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'orange-poop',
  title: 'Baby Orange Poop',
  category: 'digestive',
  searchTerms: [
    'baby orange poop',
    'baby poop is orange',
    'orange stool baby',
    'baby bright orange poop',
    'orange diaper baby',
    'baby poop orange color',
    'infant orange stool',
    'baby orange poop normal',
    'baby poop turned orange',
    'orange poop after carrots',
  ],
  quickAnswer:
    'Orange poop in babies is almost always completely normal and harmless. It is most commonly caused by the natural pigments in foods like carrots, sweet potatoes, squash, and other orange or yellow fruits and vegetables. In younger babies, orange stools can simply be a normal variation related to bile and how quickly food moves through the digestive tract.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Before starting solids, orange stools are a normal variation of the yellow-to-brown spectrum. Breast milk and formula are both processed by bile, which can produce various shades of yellow, orange, and brown. Both breastfed and formula-fed babies can have orange stools occasionally, and this is not a cause for concern.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is the most common age for orange poop because babies are often being introduced to carrots, sweet potatoes, squash, and other beta-carotene-rich foods. These foods contain orange pigments that pass through the digestive system largely unchanged, coloring the stool. This is completely harmless and simply shows that your baby is eating their vegetables.',
    },
    {
      ageRange: '9-18 months',
      context:
        'As your baby\'s diet expands, orange stool continues to be most commonly food-related. Any meal heavy in orange or yellow vegetables will likely produce an orange stool within 12-24 hours. Some medications and supplements can also produce orange-tinted stools. This remains a normal and expected variation.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddlers who enjoy carrots, sweet potatoes, mangoes, apricots, and other orange foods may have frequent orange stools. Some artificial food colorings in snacks and drinks can also contribute. Orange poop in toddlers is essentially always dietary in origin and nothing to worry about.',
    },
  ],
  whenNormal: [
    'Your baby recently ate carrots, sweet potatoes, squash, mangoes, or other orange foods',
    'Your baby has an occasional orange stool but is otherwise happy, feeding well, and growing normally',
    'Orange stools alternate with normal-colored stools depending on diet',
    'Your baby\'s stool is orange-yellow, which is a normal shade for breastfed or formula-fed babies',
    'Your baby ate a food with orange or yellow food coloring',
  ],
  whenToMention: [
    'Your baby has persistently orange stools that are not explained by diet',
    'Orange stools are accompanied by other changes like increased oiliness, foul smell, or unusual consistency',
    'You are concerned about the color and want reassurance from your pediatrician',
  ],
  whenToActNow: [
    'You see bright red or dark blood mixed with the orange stool',
    'The stool is actually closer to white, pale, or clay-colored rather than orange, which could indicate a liver or bile duct issue and requires immediate medical attention',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Many Colors of Poop. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Many-Colors-of-Poop.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Foods and Drinks.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/index.html',
    },
  ],
};
