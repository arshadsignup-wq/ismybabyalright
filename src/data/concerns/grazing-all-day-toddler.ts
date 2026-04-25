import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'grazing-all-day-toddler',
  title: 'My Toddler Grazes All Day Instead of Eating Meals',
  category: 'feeding',
  searchTerms: [
    'toddler grazing all day',
    'toddler won\'t sit for meals',
    'toddler snacking instead of eating',
    'toddler never hungry at mealtimes',
    'toddler eats small amounts all day',
    'toddler won\'t eat meals but wants snacks',
    'how to stop toddler grazing',
    'toddler eating habits',
    'toddler refuses to sit at table',
    'toddler only eats crackers and snacks',
  ],
  quickAnswer:
    'Toddlers who graze throughout the day rather than eating structured meals is a very common pattern. Their small stomachs and high energy levels mean they may genuinely prefer smaller, more frequent eating. However, establishing a loose schedule of meals and snacks can help ensure better nutrition and reduce battles at the table.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'As babies transition to toddlerhood, their growth rate naturally slows, and their appetite can decrease. This is a normal developmental change and can be alarming for parents who are used to their baby eating eagerly. Toddlers at this age also begin asserting independence, which includes deciding when and how much to eat. Offering three meals and two to three snacks at roughly the same times each day helps establish a routine while respecting their smaller appetites.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is a peak age for toddler food independence and grazing behavior. Try offering scheduled snacks rather than allowing open access to food throughout the day. Keep mealtimes short, around 15 to 20 minutes, and avoid pressuring your toddler to eat. When the meal is over, remove the food and wait for the next planned snack or meal. It can feel counterintuitive, but limiting food availability often increases appetite at mealtimes.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2, most toddlers can participate in family meals, though they may still eat small amounts. If your toddler continues to graze, evaluate whether the snacks being offered are filling them up. Crackers, pouches, and milk between meals can significantly reduce appetite. Offer water between meals instead of milk or juice, and choose snacks that complement rather than replace meals, such as fruit, vegetables, or cheese.',
    },
  ],
  whenNormal: [
    'Your toddler eats different amounts at each meal and sometimes skips meals entirely but makes up for it later',
    'Your toddler prefers small frequent portions over large plates of food',
    'Your toddler is growing along their growth curve and has good energy levels despite eating small meals',
    'Your toddler eats better at some meals than others, which is normal variability',
  ],
  whenToMention: [
    'Your toddler never sits for any meal and seems unable to focus on eating for even a few minutes',
    'Your toddler\'s diet consists almost entirely of snack foods with very little variety',
    'Your toddler\'s weight has dropped or is not following their growth curve',
  ],
  whenToActNow: [
    'Your toddler is losing weight or showing signs of nutritional deficiency such as extreme fatigue, brittle hair, or pallor',
    'Your toddler refuses all food and drink for more than 24 hours',
  ],
  relatedMilestones: [
    'feeding',
    'fine-motor',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toddler Food and Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding and Nutrition: Your One-Year-Old. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Feeding-and-Nutrition-Your-One-Year-Old.aspx',
    },
    {
      org: 'Ellyn Satter Institute',
      citation:
        'Ellyn Satter Institute. Division of Responsibility in Feeding.',
      url: 'https://www.ellynsatterinstitute.org/how-to-feed/the-division-of-responsibility-in-feeding/',
    },
  ],
};
