import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-eating-only-white-foods',
  title: 'My Toddler Only Eats White or Beige Foods',
  category: 'feeding',
  searchTerms: [
    'toddler only eats white foods',
    'toddler beige food diet',
    'toddler only wants bread pasta crackers',
    'toddler white food preference',
    'toddler refuses colorful foods',
    'toddler bland food only',
    'toddler carb only eating',
    'toddler won\'t eat anything but white food',
    'toddler eating only plain foods',
    'toddler monochrome diet',
  ],
  quickAnswer:
    'A preference for white and beige foods like bread, pasta, crackers, and rice is extremely common in toddlers. These foods tend to be mild in flavor, predictable in texture, and comforting. While frustrating, this is usually a phase. Continue offering colorful foods alongside accepted foods without pressure, and most toddlers gradually expand their diet.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Not applicable. This is the time to introduce a variety of flavors including vegetables before fruits to build early acceptance.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is an ideal window to expose babies to a wide variety of flavors and colors. Babies at this age are generally more accepting of new tastes than toddlers. Offer a rainbow of foods now to build a foundation for later.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Some babies begin showing preferences for milder, starchy foods at this age. Continue offering vegetables, fruits, and proteins alongside preferred foods. Pairing a new food with a liked food on the same plate can help.',
    },
    {
      ageRange: '12-24 months',
      context:
        'The white food preference peaks during toddlerhood. Keep serving colorful foods even if toddler ignores them. Let them see you eating and enjoying those foods. Avoid making separate meals. Over time and with zero pressure, most toddlers begin accepting more variety. If the diet is extremely restricted with fewer than 10 foods total, consider discussing with your pediatrician.',
    },
  ],
  whenNormal: [
    'Toddler prefers white foods but will occasionally eat something colorful',
    'Toddler is growing well despite a limited diet',
    'Toddler\'s diet includes some protein sources even if they are plain',
    'Toddler gradually tries new foods when given time without pressure',
  ],
  whenToMention: [
    'Toddler eats fewer than 10 foods total and the list is shrinking',
    'Toddler has signs of nutritional deficiency like extreme pallor or fatigue',
    'Toddler is not growing well on their current diet',
  ],
  whenToActNow: [
    'Toddler shows signs of serious nutritional deficiency',
    'Toddler\'s restrictive eating causes significant family distress or affects daily functioning',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['beige-food-diet-toddler', 'picky-eating', 'toddler-carb-only-diet'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Picky Eating in Toddlers. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Dietary Patterns and Food Preferences in Early Childhood. Journal of the Academy of Nutrition and Dietetics, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
