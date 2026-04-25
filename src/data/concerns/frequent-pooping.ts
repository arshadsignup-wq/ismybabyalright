import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'frequent-pooping',
  title: 'Baby Pooping Too Frequently',
  category: 'digestive',
  searchTerms: [
    'baby pooping too much',
    'baby pooping after every feed',
    'how many times should baby poop',
    'baby pooping 10 times a day',
    'newborn pooping constantly',
    'baby poops a lot',
    'is it normal for baby to poop so much',
    'baby frequent bowel movements',
    'baby pooping every hour',
    'baby excessive pooping',
  ],
  quickAnswer:
    'In the first weeks of life, it is perfectly normal for babies to poop after every feeding, sometimes 8-12 times per day. This is especially common in breastfed babies and is actually a reassuring sign that they are getting enough milk. The frequency typically decreases naturally over the first few months.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'Newborns, especially breastfed ones, commonly poop after every feeding. This is driven by the gastrocolic reflex, where filling the stomach triggers the intestines to move. Having 6-12 stools per day is perfectly normal and is actually a positive indicator that your baby is feeding well and getting adequate nutrition.',
    },
    {
      ageRange: '6 weeks - 4 months',
      context:
        'Around 6 weeks, many breastfed babies naturally reduce their stooling frequency. Some go from pooping after every feed to once every few days. Formula-fed babies typically settle into a pattern of 1-4 stools per day. Both patterns are normal as long as your baby is comfortable and stools are soft.',
    },
    {
      ageRange: '4-12 months',
      context:
        'As babies start solids, stool frequency often changes. Some babies poop more frequently initially as their gut adjusts to new foods. A typical range is 1-4 stools per day. If your baby suddenly has many more loose stools than usual, it could indicate a mild stomach bug or food intolerance rather than just normal variation.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers typically have 1-3 bowel movements per day. Toddler diarrhea (functional diarrhea) is a common condition where otherwise healthy toddlers have 3-6 loose stools per day. It is often linked to excessive juice intake, a high-sugar diet, or too little fat and fiber. It usually resolves on its own by age 3-4.',
    },
  ],
  whenNormal: [
    'Your newborn poops after every feeding in the first few weeks of life',
    'Your breastfed baby has many small, soft, seedy stools throughout the day but is feeding well and gaining weight',
    'Pooping frequency changes after introducing a new food but stools are normal in color and consistency',
    'Your baby poops more during a growth spurt when they are also eating more',
    'Your toddler has 2-4 soft stools per day and is active, growing, and healthy',
  ],
  whenToMention: [
    'Your baby suddenly starts pooping much more frequently than their normal pattern with a change in consistency',
    'Frequent stools are loose, watery, and have been going on for more than a few days',
    'Your toddler has frequent loose stools and you want to discuss their diet and fluid intake',
  ],
  whenToActNow: [
    'Frequent watery stools are accompanied by signs of dehydration: fewer wet diapers, no tears, dry mouth, or lethargy',
    'Your baby has many stools that contain blood or large amounts of mucus',
    'Your baby is under 3 months with frequent watery stools and a fever',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Many Colors of Poop. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Many-Colors-of-Poop.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/index.html',
    },
  ],
};
