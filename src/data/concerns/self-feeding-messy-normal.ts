import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'self-feeding-messy-normal',
  title: 'Is It Normal for My Baby to Be This Messy While Eating?',
  category: 'feeding',
  searchTerms: ['baby messy eating', 'baby messy self feeding', 'baby food everywhere', 'baby smearing food', 'messy eating normal baby', 'baby food in hair', 'baby messy eater', 'how messy is too messy eating', 'baby plays with food mess', 'toddler messy eating normal'],
  quickAnswer: 'Yes, extremely messy eating is completely normal and developmentally important. Babies learn about food through all their senses including touch. Smearing, squishing, dropping, and wearing food are all part of healthy sensory exploration. Messy eating actually helps babies become more comfortable with different textures and can reduce picky eating later.',
  byAge: [
    { ageRange: '0-3 months', context: 'Not applicable as babies are not eating solids.' },
    { ageRange: '4-6 months', context: 'Early feeding is inherently messy. Purees end up on face, hands, hair, and highchair. This is normal. Use bibs and put a mat under the highchair for easier cleanup.' },
    { ageRange: '6-9 months', context: 'As baby starts self-feeding, the mess increases dramatically. Food exploration through touch, smell, and taste is a critical part of learning. Resist the urge to constantly wipe baby\'s hands and face during the meal.' },
    { ageRange: '9-12 months', context: 'Peak mess time. Babies are experimenting with textures, practicing their grasp, and learning about gravity by dropping food. Allow the mess during mealtimes and clean up after. A long-sleeved bib can help.' },
    { ageRange: '12-24 months', context: 'Mealtime mess gradually improves as toddlers gain better coordination and utensil skills. However, toddlers still make significant messes. This is normal and expected through the toddler years.' },
  ],
  whenNormal: ['Baby smears food on face, hair, tray, and body during meals', 'Baby drops food on the floor', 'Baby squishes food in hands before eating it', 'Baby feeds the dog from the highchair'],
  whenToMention: ['Baby will not touch food at all and shows distress when food is messy', 'Baby avoids all tactile food exploration, which may indicate sensory aversion', 'Baby is not eating enough because they spend the entire meal playing with food'],
  whenToActNow: ['Baby has such severe food aversion that they will not let food touch them at all', 'Baby is losing weight because sensory issues prevent eating'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-not-self-feeding', 'finger-food-readiness-signs', 'sensory-food-aversion'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Self-Feeding Development in Infants. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Sensory Exploration and Food Acceptance in Infancy. Appetite, 2021.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
