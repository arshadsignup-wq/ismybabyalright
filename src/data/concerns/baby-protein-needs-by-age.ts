import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-protein-needs-by-age',
  title: 'How Much Protein Does My Baby Need?',
  category: 'feeding',
  searchTerms: [
    'baby protein needs',
    'how much protein baby',
    'protein requirements infant',
    'protein for baby by age',
    'baby protein intake guide',
    'too much protein baby',
    'not enough protein baby',
    'protein sources for baby',
    'toddler protein needs',
    'baby protein deficiency signs',
  ],
  quickAnswer:
    'Babies 0-6 months need about 9.1 grams of protein daily, which is provided entirely by breast milk or formula. From 7-12 months, they need about 11 grams, and toddlers 1-3 years need about 13 grams daily. Most babies and toddlers easily meet their protein needs through normal eating. Good protein sources include meat, eggs, dairy, beans, tofu, and nut butters.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Breast milk and formula provide complete protein for your baby. Breast milk contains about 1 gram of protein per 100ml, which is perfectly calibrated for infant needs. No additional protein is needed.',
    },
    {
      ageRange: '4-6 months',
      context: 'As solids are introduced, protein-rich foods like pureed meats, beans, and tofu can be among the first foods. However, breast milk or formula still provides the majority of protein at this stage.',
    },
    {
      ageRange: '6-9 months',
      context: 'Offer protein at each meal: pureed or mashed meats, well-cooked egg, mashed beans, yogurt, or soft tofu. These also provide important iron and zinc. About 11 grams of protein daily is the target, and much of this still comes from milk feeds.',
    },
    {
      ageRange: '9-12 months',
      context: 'Baby should be eating protein sources at most meals. Soft finger food proteins like shredded chicken, small meatballs, scrambled eggs, and beans are appropriate. Most babies meet their protein needs easily from a combination of solids and milk.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers need about 13 grams of protein daily, which is relatively easy to achieve. A serving of yogurt (4g), a scrambled egg (6g), and some cheese (3g) would exceed daily needs. Too much protein, particularly from milk, is actually more common than too little.',
    },
  ],
  whenNormal: [
    'Baby eats some protein sources and drinks breast milk or formula',
    'Baby prefers certain protein foods over others',
    'Baby gets protein from a variety of animal and plant sources',
  ],
  whenToMention: [
    'Baby refuses all protein-rich foods including meat, eggs, beans, and dairy',
    'Baby follows a strict vegan diet and you want to ensure adequate protein',
    'Baby has poor muscle tone or slow growth and you wonder about protein intake',
  ],
  whenToActNow: [
    'Baby shows signs of severe protein deficiency such as edema, poor wound healing, or severe muscle wasting',
    'Baby is not growing and has a very restricted diet',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-refusing-meat', 'iron-rich-foods-for-baby', 'baby-fat-intake-importance'],
  sources: [
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Dietary Reference Intakes for Protein. National Academies Press, 2005.',
      url: 'https://ods.od.nih.gov/',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Protein Needs of Infants and Children. Pediatric Nutrition, 8th Edition, 2019.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'WHO',
      citation: 'World Health Organization. Protein and Amino Acid Requirements in Human Nutrition. Geneva, 2007.',
      url: 'https://www.who.int/publications/i/item/9241209356',
    },
  ],
};
