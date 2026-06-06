import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eating-plants-leaves',
  title: 'My Baby Ate a Houseplant or Leaves',
  category: 'feeding',
  searchTerms: ['baby ate houseplant', 'baby eating leaves', 'baby ate plant', 'toddler eating plants', 'toxic plants baby', 'baby chewing leaves', 'houseplant poisonous baby', 'baby ate flower', 'toddler ate leaf', 'poisonous plants children'],
  quickAnswer: 'Many common houseplants can be mildly to severely toxic to babies. If your baby eats a plant, try to identify it and call Poison Control at 1-800-222-1222 immediately. Remove any remaining plant material from baby\'s mouth. Even if a plant is considered non-toxic, it may cause mouth irritation or stomach upset. Keep all houseplants out of reach of babies and toddlers.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies are not mobile enough to access plants, but be aware of plants in their environment. Ensure no leaves or soil can fall into baby\'s sleeping or play areas.' },
    { ageRange: '4-6 months', context: 'As baby starts reaching, move all plants to high shelves or hanging planters. Many popular houseplants like pothos, dieffenbachia, and philodendron are toxic to babies.' },
    { ageRange: '6-9 months', context: 'Crawling babies can reach floor-level plants. Remove or elevate all plants. Even non-toxic plants may have soil treated with fertilizers or pesticides that are harmful.' },
    { ageRange: '9-12 months', context: 'Babies pulling to stand can reach tabletop plants. Audit every room for accessible plants. If you cannot move a plant, consider rehoming it temporarily until your child is old enough to understand not to touch.' },
    { ageRange: '12-24 months', context: 'Toddlers are curious and fast. They can pull down plants from tables. Keep toxic plants completely out of the home or in a room toddler cannot access. Teach not to eat plants, but supervision remains essential as toddlers cannot reliably follow this rule.' },
  ],
  whenNormal: ['Baby touched or briefly mouthed a non-toxic plant and you removed it quickly', 'No symptoms develop after a brief exposure to a non-toxic plant'],
  whenToMention: ['Baby ate a small amount of a plant and you are unsure of the species', 'Baby has mild mouth irritation or minor stomach upset after plant contact', 'You want guidance on which common houseplants are safe around babies'],
  whenToActNow: ['Baby ate any part of a known toxic plant such as oleander, foxglove, lily of the valley, or dieffenbachia', 'Baby has drooling, swelling of mouth or throat, vomiting, or difficulty breathing after eating a plant', 'Call Poison Control at 1-800-222-1222 immediately if you cannot identify the plant'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-eating-non-food-pica', 'baby-eating-dirt-sand', 'baby-eating-crayons'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Poison Prevention. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Poison-Prevention.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. National Capital Poison Center. Poisonous Plants. 2023.', url: 'https://www.poison.org/articles/plant' },
  ],
};
