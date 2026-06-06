import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-food-color-refusal',
  title: 'My Toddler Refuses Certain Colored Foods',
  category: 'feeding',
  searchTerms: [
    'toddler refuses green food',
    'toddler food color refusal',
    'toddler won\'t eat colored food',
    'toddler scared of green food',
    'toddler only eats certain colors',
    'toddler visual food refusal',
    'toddler rejects food by appearance',
    'toddler won\'t try food looks different',
    'toddler food appearance rejection',
    'toddler judges food by color',
  ],
  quickAnswer:
    'Refusing foods based on color is a common toddler behavior related to food neophobia, the natural fear of new foods. Toddlers are very visual and may reject foods that look unfamiliar, especially green vegetables. This is an evolutionary protective mechanism. Continue offering foods of all colors without pressure, and most toddlers gradually expand their acceptance.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context: 'Babies at this age rarely refuse food based on color. This is a great time to introduce a variety of colorful foods.',
    },
    {
      ageRange: '6-9 months',
      context: 'Most babies are still accepting of various colored foods. Take advantage of this window to introduce many different colored fruits and vegetables.',
    },
    {
      ageRange: '9-12 months',
      context: 'Some babies begin to show visual preferences around this age. Continue offering colorful foods and let baby explore without pressure.',
    },
    {
      ageRange: '12-24 months',
      context: 'Color-based food refusal peaks in toddlerhood. Green foods are the most commonly rejected color. Try involving your toddler in food preparation, growing vegetables together, or reading books about different colored foods. Avoid hiding vegetables in other foods as the sole strategy, as learning to accept them visually is also important.',
    },
  ],
  whenNormal: [
    'Toddler refuses some green vegetables but eats green fruits like grapes',
    'Toddler eventually tries foods they initially rejected by color after many exposures',
    'Toddler eats enough variety to support growth despite color preferences',
  ],
  whenToMention: [
    'Toddler has extreme reactions of fear or anxiety to certain colored foods',
    'Color refusal is expanding and the accepted food list is shrinking dramatically',
    'Toddler is not getting adequate nutrition due to extremely limited color acceptance',
  ],
  whenToActNow: [
    'Toddler has extreme food-related anxiety that prevents eating most foods',
    'Toddler is losing weight or showing nutritional deficiency signs',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['food-neophobia-toddler', 'picky-eating', 'toddler-wont-eat-vegetables'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. How Children Develop Eating Habits. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Food Neophobia in Toddlers: Causes and Strategies. Appetite, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
