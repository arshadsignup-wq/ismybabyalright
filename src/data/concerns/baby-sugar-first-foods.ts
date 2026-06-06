import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sugar-first-foods',
  title: 'Should I Avoid Sweet Foods When Starting Solids?',
  category: 'feeding',
  searchTerms: [
    'baby sweet food first',
    'starting solids sweet before savory',
    'baby sugar first foods',
    'baby prefer sweet over vegetables',
    'fruit before vegetables baby',
    'baby sweet tooth concern',
    'should baby eat vegetables first',
    'baby sugar intake',
    'added sugar baby food',
    'baby developing sweet preference',
  ],
  quickAnswer:
    'While older advice suggested starting with vegetables before fruits to prevent a sweet preference, current evidence shows this is not necessary. Babies are born with an innate preference for sweet tastes from breast milk. The key is to avoid added sugars and offer a variety of flavors including bitter vegetables. Early exposure to diverse tastes helps build broader acceptance.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Breast milk is naturally sweet, and formula is also mildly sweet. This is normal and appropriate for babies this age. No solids should be offered.',
    },
    {
      ageRange: '4-6 months',
      context: 'When starting solids, offer a mix of vegetables, fruits, and iron-rich foods. There is no strong evidence that starting with vegetables first prevents sweet preference. Avoid foods with added sugar. Natural sweetness in fruits is perfectly fine.',
    },
    {
      ageRange: '6-9 months',
      context: 'Continue introducing a variety of flavors including naturally bitter vegetables. Repeated exposure (10-15 times) helps babies accept less sweet flavors. Avoid fruit juice and foods with added sugars like cookies and sweetened cereals.',
    },
    {
      ageRange: '9-12 months',
      context: 'As baby joins family meals, be aware of hidden sugars in packaged foods like yogurts, cereals, and sauces. Choose plain versions and add your own fruit for sweetness. Do not worry if baby prefers sweet foods; continue offering a variety.',
    },
    {
      ageRange: '12-24 months',
      context: 'The AAP and WHO recommend avoiding added sugars for children under 2 years. Natural sugars in fruits, vegetables, and dairy are fine. Read labels for hidden sugars in toddler snacks and drinks. Model enjoying a variety of flavors as a family.',
    },
  ],
  whenNormal: [
    'Baby prefers sweet fruits over bitter vegetables',
    'Baby needs many exposures before accepting less sweet foods',
    'Baby enjoys naturally sweet foods like banana, sweet potato, and applesauce',
  ],
  whenToMention: [
    'Baby absolutely refuses all vegetables despite months of repeated exposure',
    'Family diet is very high in added sugars and you need guidance on healthier alternatives',
    'Baby is consuming fruit juice or sugary drinks regularly',
  ],
  whenToActNow: [
    'Baby has tooth decay from sugary foods or drinks',
    'Baby is showing signs of excessive weight gain related to high sugar intake',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-first-foods-best-choices', 'toddler-eating-too-much-sugar', 'baby-starting-solids-when-ready'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Added Sugars and Cardiovascular Disease Risk in Children. Pediatrics, 2017.',
      url: 'https://publications.aap.org/pediatrics/article/140/3/e20171603/37838/',
    },
    {
      org: 'WHO',
      citation: 'World Health Organization. Guideline: Sugars Intake for Adults and Children. Geneva, 2015.',
      url: 'https://www.who.int/publications/i/item/9789241549028',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Tastes and Textures for Babies. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/tastes-and-textures.html',
    },
  ],
};
