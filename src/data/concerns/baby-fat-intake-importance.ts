import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-fat-intake-importance',
  title: 'Why Is Fat Important in My Baby\'s Diet?',
  category: 'feeding',
  searchTerms: [
    'baby fat intake importance',
    'healthy fats for baby',
    'fat baby brain development',
    'baby needs fat in diet',
    'low fat diet bad for baby',
    'avocado for baby brain',
    'how much fat baby needs',
    'good fats for baby',
    'baby fat restriction',
    'fats for infant development',
  ],
  quickAnswer:
    'Fat is crucial for your baby\'s brain development, nervous system growth, hormone production, and absorption of vitamins A, D, E, and K. About 40-50% of calories in breast milk and formula come from fat, and children under 2 should not have fat-restricted diets. Healthy fat sources include avocado, nut butters, olive oil, fatty fish, egg yolks, and full-fat dairy.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Breast milk and formula provide ideal amounts of fat for brain development. About half the calories in breast milk come from fat, and this is by design. Do not switch to low-fat formula.',
    },
    {
      ageRange: '4-6 months',
      context: 'When introducing solids, include healthy fats. Avocado is an excellent first food due to its healthy fat content and smooth texture. You can add a small amount of olive oil to purees.',
    },
    {
      ageRange: '6-9 months',
      context: 'Continue including fats at each meal. Egg yolks, nut butters (thinned for safety), olive oil, and avocado are great additions. Fatty fish like salmon provides both healthy fats and DHA for brain development.',
    },
    {
      ageRange: '9-12 months',
      context: 'Fat should remain a significant part of baby\'s diet. Use full-fat versions of dairy products like yogurt and cheese. Cook with olive oil or butter. Do not restrict fat in a baby\'s diet as their rapidly developing brain needs it.',
    },
    {
      ageRange: '12-24 months',
      context: 'Children under 2 should drink whole milk, not reduced-fat milk. Continue using full-fat dairy products. The brain undergoes enormous growth in the first 2 years and requires dietary fat. Fat restriction before age 2 is not recommended by the AAP.',
    },
  ],
  whenNormal: [
    'Baby eats a diet that includes healthy fats from multiple sources',
    'Baby drinks whole milk after 12 months',
    'Baby\'s diet includes avocado, eggs, nut butters, and olive oil',
  ],
  whenToMention: [
    'You have been limiting fat in your baby\'s diet and want guidance',
    'Baby has very limited food acceptance and you are concerned about fat intake',
    'You have questions about which fats are healthiest for your baby',
  ],
  whenToActNow: [
    'Baby shows signs of essential fatty acid deficiency such as dry scaly skin, poor growth, and frequent infections',
    'Baby is on an extremely restricted diet with very low fat intake',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-omega-3-dha-importance', 'baby-protein-needs-by-age', 'baby-first-foods-best-choices'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Fat in Your Child\'s Diet. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Fat-in-Your-Childs-Diet.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Dietary Fats and Brain Development in Infancy. Progress in Lipid Research, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
    {
      org: 'WHO',
      citation: 'World Health Organization. Fats and Fatty Acids in Human Nutrition. Geneva, 2010.',
      url: 'https://www.who.int/publications/i/item/9789241599672',
    },
  ],
};
