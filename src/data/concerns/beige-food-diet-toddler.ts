import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'beige-food-diet-toddler',
  title: 'Toddler Only Eating Beige Foods',
  category: 'feeding',
  searchTerms: [
    'toddler only eats beige food',
    'toddler only eats crackers bread pasta',
    'toddler won\'t eat colorful food',
    'toddler carb only diet',
    'toddler only eats white food',
    'beige diet toddler',
    'toddler won\'t eat vegetables or fruit',
    'picky toddler only wants bread',
  ],
  quickAnswer:
    'A preference for "beige" foods like crackers, bread, pasta, and chicken nuggets is one of the most common feeding patterns in toddlers. These foods tend to be mild in flavor, consistent in texture, and predictable, which appeals to toddlers who are naturally cautious about food. While it can be nutritionally concerning if it persists, most toddlers do eventually expand their diet with patient, low-pressure exposure to other foods.',
  byAge: [
    {
      ageRange: '12-24 months',
      context:
        'This is when many toddlers begin showing strong preferences for bland, starchy foods. The shift often catches parents off guard, especially if their baby was adventurous with food earlier. Continue offering fruits, vegetables, and proteins at every meal alongside the preferred beige foods, without pressuring your child to eat them. Repeated visual exposure to a food is valuable even if your child does not taste it.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Beige food preference often peaks during this period. Toddlers may refuse to have colorful foods touch their plate or react strongly to unfamiliar items. Try serving tiny portions of new foods on the side, involving your toddler in food preparation, and eating together as a family. Pairing unfamiliar foods with familiar favorites can sometimes help. Avoid bribing, rewarding, or punishing around food, as these strategies tend to backfire.',
    },
  ],
  whenNormal: [
    'Your toddler prefers crackers, bread, and pasta but will occasionally try other foods in small amounts',
    'Your toddler is growing normally and has good energy levels despite a limited diet',
    'Your toddler shows phases of accepting and then rejecting different foods',
    'Your toddler is more adventurous with food on some days than others',
  ],
  whenToMention: [
    'Your toddler eats fewer than 10 to 15 different foods total and the list is shrinking',
    'Your toddler refuses all fruits, vegetables, and protein sources for more than a month',
    'Your toddler has stopped growing along their growth curve or appears fatigued and pale',
    'Your toddler becomes extremely distressed when new foods are placed on their plate, suggesting possible sensory issues',
  ],
  whenToActNow: [
    'Your child shows signs of nutritional deficiency such as extreme tiredness, easy bruising, hair loss, or frequent illness',
    'Your child refuses all food and drink for more than 24 hours',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Picky Eating and What You Can Do About It. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Tips for Picky Eaters. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Taylor CM, et al. Picky Eating in Preschool Children: Associations with Dietary Fibre Intakes and Stool Hardness. Appetite, 2016.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27474204/',
    },
  ],
};
