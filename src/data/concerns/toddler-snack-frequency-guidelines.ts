import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-snack-frequency-guidelines',
  title: 'How Often Should My Toddler Snack?',
  category: 'feeding',
  searchTerms: [
    'toddler snack frequency',
    'how often should toddler snack',
    'toddler snacking guidelines',
    'toddler snack schedule',
    'how many snacks for toddler',
    'toddler eating between meals',
    'toddler snack ideas healthy',
    'toddler constant snacking',
    'toddler snack portions',
    'when to give toddler snacks',
  ],
  quickAnswer:
    'Most toddlers do well with three meals and two to three planned snacks per day, spaced about 2-3 hours apart. Toddlers have small stomachs and high energy needs, so structured snacking is important for meeting nutritional requirements. However, constant grazing or unrestricted access to snacks throughout the day can interfere with appetite at meals. Think of snacks as mini-meals that contribute to overall nutrition rather than as treats or fillers.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'As your baby transitions to a toddler eating schedule, aim for three meals and two snacks per day. Snacks should be offered at roughly consistent times, ideally halfway between meals. Good snack options at this age include soft fruits, cheese cubes, whole grain crackers, yogurt, and steamed vegetables. Keep portions small — a toddler portion is about one-quarter of an adult portion. Offer water with snacks rather than milk or juice, which can fill your toddler up and reduce their appetite for the next meal.',
    },
    {
      ageRange: '18-24 months',
      context:
        'At this age, many toddlers start requesting snacks frequently, and it can be tempting to offer food whenever they ask. However, establishing a loose schedule helps regulate appetite and ensures your toddler comes to meals hungry enough to eat. A typical schedule might be: breakfast, morning snack, lunch, afternoon snack, dinner, and an optional small bedtime snack. If your toddler asks for food between planned times, offer water and let them know when the next snack or meal is coming.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Continue with three meals and two to three snacks. Make snacks count nutritionally — pair a protein or fat with a carbohydrate for sustained energy (apple with peanut butter, cheese with crackers, yogurt with berries). Avoid relying on packaged "toddler snacks" which are often high in sugar and low in nutrition. As your child gets older, they can begin to participate in snack preparation, which supports independence and can encourage trying new foods. If constant snacking is replacing meals, try stretching the gap between the last snack and dinner.',
    },
  ],
  whenNormal: [
    'Your toddler eats well at some meals and snacks but not others — appetite variability is normal',
    'Your toddler is hungrier on some days than others, influenced by activity level, growth spurts, and health',
    'Your toddler seems to eat mostly at snack time and less at meals — this is common and usually balances out',
    'Your toddler asks for snacks frequently — toddlers are often genuinely hungry between meals',
  ],
  whenToMention: [
    'Your toddler refuses all meals and only eats snack foods despite a structured schedule',
    'Your toddler\'s snacking consists almost entirely of processed or sugary foods',
    'Your toddler\'s weight is falling off their growth curve despite seeming to eat frequently',
  ],
  whenToActNow: [
    'Your toddler is losing weight or showing signs of nutritional deficiency',
    'Your toddler refuses all food and drink for more than 24 hours',
    'Your toddler chokes or has difficulty swallowing during snack time, which could indicate a swallowing problem',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'grazing-all-day-toddler',
    'toddler-picky-eater-strategies',
    'toddler-milk-consumption-how-much',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toddler Food and Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Feeding-and-Nutrition-Your-Two-Year-Old.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Snacks for Toddlers.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/snacks.html',
    },
    {
      org: 'Ellyn Satter Institute',
      citation:
        'Ellyn Satter Institute. Snacking and Meals for Toddlers.',
      url: 'https://www.ellynsatterinstitute.org/how-to-feed/the-division-of-responsibility-in-feeding/',
    },
  ],
};
