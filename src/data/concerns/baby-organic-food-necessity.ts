import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-organic-food-necessity',
  title: 'Does My Baby Need Organic Food?',
  category: 'feeding',
  searchTerms: [
    'baby organic food necessary',
    'organic vs conventional baby food',
    'organic baby food worth it',
    'pesticides in baby food',
    'should I buy organic for baby',
    'organic baby food benefits',
    'conventional food safe for baby',
    'organic food baby health',
    'dirty dozen baby food',
    'organic produce baby',
  ],
  quickAnswer:
    'While organic foods have lower pesticide residues, conventional fruits and vegetables are also safe for babies and are nutritionally comparable. The most important thing is that your baby eats a variety of fruits and vegetables, whether organic or conventional. If budget is a concern, prioritize organic for the "Dirty Dozen" produce items and buy conventional for others.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'No solid foods are needed. Breast milk or formula provides complete nutrition.',
    },
    {
      ageRange: '4-6 months',
      context: 'When starting solids, either organic or conventional baby food is nutritionally appropriate. What matters most is offering a variety of single-ingredient foods and watching for any allergic reactions.',
    },
    {
      ageRange: '6-9 months',
      context: 'Continue offering a diverse range of foods. Whether you choose organic or conventional, wash all produce thoroughly before preparing. Both options provide the nutrients your baby needs.',
    },
    {
      ageRange: '9-12 months',
      context: 'As baby eats more table foods, washing produce well is important regardless of whether it is organic. If choosing organic for some items, focus on produce with thin skins that are eaten whole like berries, apples, and leafy greens.',
    },
    {
      ageRange: '12-24 months',
      context: 'Variety and balance in the diet matter more than organic versus conventional. A diet rich in fruits, vegetables, whole grains, and proteins supports healthy growth regardless of how the food was grown. Do not feel guilty if you cannot afford all organic foods.',
    },
  ],
  whenNormal: [
    'You feed your baby a mix of organic and conventional foods',
    'You buy conventional produce and wash it thoroughly',
    'You prioritize organic for certain high-pesticide items and conventional for others',
    'Baby is growing well on either organic or conventional foods',
  ],
  whenToMention: [
    'You are worried that your baby\'s diet is nutritionally inadequate regardless of organic status',
    'Your baby has unusual reactions to certain foods that you suspect may be related to additives',
    'Financial stress about buying organic food is affecting your ability to provide variety',
  ],
  whenToActNow: [
    'Your baby has a severe allergic reaction to any food, organic or conventional',
    'You suspect your baby has ingested unwashed produce that was recently sprayed with pesticides',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-first-foods-best-choices', 'baby-food-heavy-metals-concern', 'homemade-vs-store-baby-food'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Organic Foods: Health and Environmental Advantages and Disadvantages. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/130/5/e1406/30225/',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Health Effects of Organic Versus Conventional Foods. Annals of Internal Medicine, 2012.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/22944875/',
    },
  ],
};
