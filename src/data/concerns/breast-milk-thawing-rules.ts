import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breast-milk-thawing-rules',
  title: 'How to Safely Thaw Frozen Breast Milk',
  category: 'feeding',
  searchTerms: ['thawing breast milk', 'defrost breast milk', 'thaw frozen breast milk safely', 'breast milk thawing rules', 'thawed breast milk how long', 'warm frozen breast milk', 'never microwave breast milk', 'breast milk thaw time', 'defrosting pumped milk', 'thawed milk storage time'],
  quickAnswer: 'Frozen breast milk can be thawed in the refrigerator overnight (takes 12 hours), under warm running water, or in a bowl of warm water. Never microwave breast milk as it creates hot spots and destroys nutrients. Thawed milk should be used within 24 hours if refrigerated and should not be refrozen. Once warmed, use within 2 hours.',
  byAge: [
    { ageRange: '0-3 months', context: 'For young babies, safe thawing is especially important. Thaw in the refrigerator overnight for the gentlest method. Test temperature on your inner wrist before feeding. Many babies accept milk at room temperature or slightly warm.' },
    { ageRange: '4-6 months', context: 'As you use frozen milk more regularly, develop a routine. Move frozen bags to the refrigerator the night before you need them. Gently swirl thawed milk to remix the fat layer.' },
    { ageRange: '6-9 months', context: 'The same thawing rules apply. Thawed breast milk can be mixed into solid foods if baby prefers certain temperatures or flavors.' },
    { ageRange: '9-12 months', context: 'Some babies at this age prefer milk at different temperatures. It is fine to serve thawed milk cold from the refrigerator if baby accepts it.' },
    { ageRange: '12-24 months', context: 'Thawed breast milk can be served in a cup or used in cooking. The same safety guidelines apply regardless of baby\'s age.' },
  ],
  whenNormal: ['Thawed milk has a slightly different appearance than fresh milk', 'Thawed milk separates into layers and needs gentle swirling', 'Thawed milk has a slightly different smell than fresh milk'],
  whenToMention: ['You are unsure if thawed milk has been stored too long', 'Baby refuses thawed milk and you need alternative strategies', 'You want to know if partially thawed milk can be refrozen'],
  whenToActNow: ['Thawed milk smells rotten or looks curdled unlike normal fat separation', 'Baby becomes ill after drinking thawed milk'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['breast-milk-storage-rules', 'breast-milk-mixing-temperatures', 'breast-milk-high-lipase'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Proper Storage and Preparation of Breast Milk. 2023.', url: 'https://www.cdc.gov/breastfeeding/recommendations/handling_breastmilk.htm' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Storing and Preparing Expressed Breast Milk. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Storing-and-Preparing-Expressed-Breast-Milk.aspx' },
  ],
};
