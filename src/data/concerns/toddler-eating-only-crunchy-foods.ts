import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-eating-only-crunchy-foods',
  title: 'My Toddler Only Eats Crunchy Foods',
  category: 'feeding',
  searchTerms: [
    'toddler only eats crunchy food',
    'toddler refuses soft food',
    'toddler texture preference crunchy',
    'toddler only wants crackers chips',
    'toddler won\'t eat anything soft',
    'toddler sensory crunchy food preference',
    'toddler crunchy food obsession',
    'toddler only dry crunchy foods',
    'toddler refuses wet foods',
    'toddler needs crunchy texture',
  ],
  quickAnswer:
    'A preference for crunchy textures is common and can be related to sensory preferences. Crunchy foods provide strong oral input that some children find satisfying. While this preference alone is not concerning, if your toddler refuses all non-crunchy foods, it may be worth exploring whether sensory processing plays a role.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Babies are just starting with smooth purees. Crunchy foods are not appropriate at this stage.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Around 8-9 months, babies may begin showing interest in dissolvable crunchy foods like puffs. This is normal and a good step in texture progression. Continue offering a variety of textures including soft and slightly lumpy foods.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Some babies develop a clear preference for crunchy foods at this age. This can be sensory-seeking behavior. Continue offering soft foods alongside crunchy options. Try cooking vegetables until they have a slight crunch but are still safe, or try roasting to add crispiness.',
    },
    {
      ageRange: '12-24 months',
      context:
        'A strong crunchy-only preference in toddlers may be a sensory preference. Try bridging by dipping soft foods in crunchy coatings like crushed cereal or breadcrumbs. Offer raw vegetables with dip for added crunch. If your toddler refuses all soft foods and diet is very limited, a feeding therapist can help assess whether sensory processing is a factor.',
    },
  ],
  whenNormal: [
    'Toddler prefers crunchy foods but will eat some soft foods too',
    'Toddler enjoys crunchy raw vegetables and fruits along with other textures',
    'Toddler is growing well and eating enough variety to meet nutritional needs',
  ],
  whenToMention: [
    'Toddler refuses all non-crunchy textures including soft fruits and cooked vegetables',
    'Toddler has strong negative reactions such as gagging or crying when soft food touches their lips',
    'Toddler\'s diet is nutritionally limited due to only eating crunchy processed foods',
  ],
  whenToActNow: [
    'Toddler is losing weight because their diet is so restricted',
    'Toddler shows extreme distress with any sensory input related to food texture',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['sensory-food-aversion', 'picky-eating', 'toddler-eating-only-soft-foods'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sensory Processing and Feeding in Children. Pediatrics, 2022.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Sensory Sensitivity and Food Selectivity in Children. Nutrients, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
