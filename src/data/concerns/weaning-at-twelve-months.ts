import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'weaning-at-twelve-months',
  title: 'Weaning from Breastfeeding at 12 Months',
  category: 'feeding',
  searchTerms: [
    'weaning at 12 months',
    'stop breastfeeding at 1 year',
    'weaning baby twelve months',
    'how to wean at 12 months',
    'breastfeeding to cow milk transition',
    'ending breastfeeding at one year',
    'switching from breast milk to whole milk',
    'toddler weaning from breast',
  ],
  quickAnswer:
    'Weaning at 12 months is a natural transition point, as your baby can now drink whole cow\'s milk and is eating a variety of solid foods. The process works best when done gradually over several weeks, dropping one nursing session at a time. Your baby may find comfort in extra cuddles, a lovey, or other soothing routines as breastfeeding sessions are replaced.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'If you are planning to wean around 12 months, you can begin preparing in the months before by introducing a cup and making sure your baby is comfortable drinking from it. Start dropping the nursing sessions your baby is least attached to, usually the midday ones, and replace them with a snack and a cup of breast milk, formula, or water. Save the morning and bedtime feeds for last, as these tend to be the most emotionally important.',
    },
    {
      ageRange: '12-24 months',
      context:
        'At 12 months, your baby can transition to whole cow\'s milk, which should be offered in a cup rather than a bottle. The AAP recommends 16 to 24 ounces of whole milk per day for toddlers. Drop nursing sessions one at a time, waiting a few days between each change to allow your supply to adjust gradually. Offer your child plenty of physical affection during this transition, as breastfeeding may have been their primary comfort strategy.',
    },
  ],
  whenNormal: [
    'Your toddler asks to nurse at their usual times but can be redirected with a snack, cup, or cuddle',
    'You feel some breast fullness when dropping sessions, but it resolves within a few days',
    'Your toddler is slightly clingier than usual during the weaning process',
    'You experience a range of emotions from relief to sadness, which is completely normal',
  ],
  whenToMention: [
    'Your toddler is refusing cow\'s milk and other dairy and you are concerned about calcium intake',
    'You are experiencing persistent engorgement, plugged ducts, or mastitis symptoms during weaning',
    'Your toddler has become very distressed, is eating less overall, or is having sleep disruptions due to weaning',
    'You are feeling significant sadness or mood changes that may be related to hormonal shifts from weaning',
  ],
  whenToActNow: [
    'You develop signs of mastitis including fever, severe breast pain, and redness that are not improving',
    'Your toddler is refusing all food and fluids and showing signs of dehydration',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Wean Your Baby from Breastfeeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/How-to-Wean-Your-Baby.aspx',
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
