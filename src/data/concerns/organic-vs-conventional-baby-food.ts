import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'organic-vs-conventional-baby-food',
  title: 'Organic vs Conventional Baby Food',
  category: 'feeding',
  searchTerms: [
    'organic baby food worth it',
    'organic vs regular baby food',
    'pesticides in baby food',
    'is organic food better for baby',
    'conventional baby food safe',
    'organic produce for baby',
    'dirty dozen baby food',
    'pesticide residue infant food',
  ],
  quickAnswer:
    'Both organic and conventional baby foods can be part of a healthy diet. Organic foods have lower pesticide residues, but conventional foods in the US are regulated and tested for safety. The AAP states that the most important thing is that children eat a diet rich in fruits, vegetables, whole grains, and lean protein, regardless of whether those foods are organic or conventional. If budget is a concern, prioritize organic for the "Dirty Dozen" produce items with the highest pesticide residues.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'At this age, babies should receive only breast milk or formula. If you are breastfeeding, your own diet may influence what your baby receives, but trace pesticide levels in breast milk from a normal diet are not considered harmful. Choosing organic formula is a personal choice; both organic and conventional formulas must meet the same FDA nutritional standards.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue exclusive breastfeeding or formula-feeding. If starting solids near 6 months, you can begin considering organic options. There is no strong evidence that organic baby food purees are nutritionally superior to conventional ones. Both must meet food safety standards. If you choose organic, verify the USDA Organic label on packaging.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby eats more solid foods, exposure to pesticide residues may increase. If choosing to prioritize organic, focus on the Environmental Working Group\'s "Dirty Dozen" list, which identifies produce with the highest pesticide residues: strawberries, spinach, kale, nectarines, apples, grapes, peaches, cherries, pears, tomatoes, celery, and hot peppers. The "Clean Fifteen" have the lowest residues and can be purchased conventionally to save money. Always wash all produce thoroughly.',
    },
    {
      ageRange: '12 months+',
      context:
        'As toddlers eat a wider variety of foods, the organic-vs-conventional question extends to dairy, meat, and packaged snacks. Organic dairy and meat come from animals raised without antibiotics or synthetic growth hormones. Whether these differences are clinically meaningful for toddler health is debated. The most impactful dietary choice is offering a varied diet rich in whole foods and limiting processed foods, whether organic or not. Do not let the cost of organic food prevent you from offering fruits and vegetables.',
    },
  ],
  whenNormal: [
    'You feed your baby a mix of organic and conventional foods and your baby is growing and developing well',
    'You choose conventional produce because of budget constraints and your baby is thriving on a varied diet',
    'You choose organic foods when possible and supplement with conventional options',
    'You wash all fruits and vegetables thoroughly before preparing them for your baby',
  ],
  whenToMention: [
    'Your baby has persistent unexplained symptoms such as rashes or digestive issues and you wonder if food quality is a factor',
    'You are overwhelmed by conflicting information about organic food and want evidence-based guidance from your pediatrician',
    'Your child has a known sensitivity to certain foods and you want to discuss whether organic options might reduce reactions',
  ],
  whenToActNow: [
    'Your baby has a severe allergic reaction to any food, organic or conventional, including hives, facial swelling, vomiting, or difficulty breathing',
    'You suspect your baby has ingested a food that has been recalled for contamination; contact Poison Control (1-800-222-1222) or seek emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Forman J, Silverstein J; Council on Environmental Health and Committee on Nutrition. Organic Foods: Health and Environmental Advantages and Disadvantages. Pediatrics. 2012;130(5):e1406-e1415.',
      url: 'https://publications.aap.org/pediatrics/article/130/5/e1406/30073/Organic-Foods-Health-and-Environmental-Advantages',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Organic Foods: Are They Safer? More Nutritious?',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/organic-food/art-20043880',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. National Library of Medicine. Organic Foods and Health. Annals of Internal Medicine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/22944875/',
    },
  ],
};
