import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-constipation-after-starting-solids',
  title: 'Constipation After Starting Solid Foods',
  category: 'digestive',
  searchTerms: [
    'baby constipation starting solids',
    'baby constipated after solids',
    'baby hard poop starting foods',
    'solids causing constipation baby',
    'baby first foods constipation',
    'baby constipated rice cereal',
    'infant constipation with solids',
    'baby poop hard after food',
    'baby constipation complementary foods',
    'when baby starts solids constipation',
  ],
  quickAnswer:
    'Constipation when starting solids is very common because your baby\'s digestive system is adjusting to processing new types of food. Low-fiber first foods like rice cereal, bananas, and applesauce are common culprits. Balancing with high-fiber foods like prunes, pears, peas, and oatmeal, and offering water between meals, usually resolves it.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Solids should not be introduced before about 4 to 6 months. Constipation in this age group is unrelated to solid food introduction.',
    },
    {
      ageRange: '3-6 months',
      context:
        'When solids are first introduced around 4 to 6 months, constipation is one of the most common digestive changes. Start with single-ingredient foods and watch for constipation. If rice cereal causes hard stools, try oatmeal cereal instead. Introduce "P fruits" (prunes, pears, peaches, plums) early to help keep stools soft.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As the variety of foods increases, balance constipating foods (rice, banana, dairy, white bread) with high-fiber options (prunes, pears, peas, beans, whole grains). Offer sips of water between meals. If constipation persists despite dietary changes, discuss with your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers eating a full diet may become constipated if they favor low-fiber foods. Ensure a balanced diet with fruits, vegetables, and whole grains at every meal. Adequate fluid intake is equally important. If your toddler is a picky eater, sneak fiber into foods like smoothies, muffins, and pasta sauces.',
    },
  ],
  whenNormal: [
    'Stools becoming firmer and less frequent when transitioning from all-liquid to solid foods',
    'Temporary constipation when introducing a new food that resolves with dietary adjustments',
  ],
  whenToMention: [
    'Constipation persists despite including high-fiber foods and adequate water',
    'Your baby cries or strains with every bowel movement after starting solids',
    'You need guidance on which foods to offer for a constipation-prone baby',
  ],
  whenToActNow: [
    'Constipation with blood in the stool, severe abdominal distension, or vomiting',
    'Your baby refuses to eat due to constipation discomfort',
    'Constipation in a baby who was previously stooling normally and has other new symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Constipation. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
  ],
  relatedConcernSlugs: ['constipation', 'baby-constipation-prune-juice', 'baby-constipation-remedies-safe', 'baby-stool-texture-changes-solids'],
};
