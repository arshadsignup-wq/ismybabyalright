import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-european-formula-safety',
  title: 'Is European Baby Formula Safe to Use?',
  category: 'feeding',
  searchTerms: [
    'European formula baby safe',
    'HiPP formula safety',
    'Holle formula baby',
    'European formula vs American',
    'importing baby formula',
    'EU formula regulations baby',
    'European organic formula baby',
    'Kendamil formula safety',
    'is European formula better',
    'European formula FDA approved',
  ],
  quickAnswer:
    'European baby formulas (such as HiPP, Holle, and Kendamil) are manufactured under strict EU safety standards that are comparable to, and in some ways exceed, FDA requirements. However, formulas imported through unofficial channels may have storage, handling, or labeling issues. European formulas are not FDA-regulated, so in the US they are technically sold illegally. While the formulas themselves are safe and nutritionally complete, parents should be aware of the risks of unofficial supply chains.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'If choosing a European formula for your newborn, ensure it is a Stage 1 (or Pre) formula designed for birth to 6 months. European formulas often differ from American formulas in that they may use different carbohydrate sources (lactose only, with no corn syrup solids), different iron levels, and may include prebiotics and probiotics. The nutritional profiles are designed to meet European Commission standards for infant nutrition, which are scientifically rigorous. The biggest concern is the supply chain - purchase from reputable sellers and check expiration dates and packaging integrity.',
    },
    {
      ageRange: '6-12 months',
      context:
        'European formulas use a staged system (Stage 1, Stage 2, Stage 3) that corresponds roughly to age, with adjusted protein and nutrient levels. Stage 2 formulas (6+ months) may have slightly higher iron and protein content. If transitioning between formula brands or stages, do so gradually over several days to allow your baby\'s digestive system to adjust. One advantage of some European formulas is the restriction on certain additives and the requirement for organic ingredients, though FDA-approved formulas also meet strict nutritional standards.',
    },
    {
      ageRange: '12-36 months',
      context:
        'European Stage 3 formulas (toddler milks) are available for ages 12+ months. As with American toddler formulas, these are not medically necessary for most toddlers who eat a varied diet and drink whole milk. If your toddler has specific dietary needs, allergies, or is a very picky eater, discuss with your pediatrician whether a toddler formula is beneficial. The most important thing at this age is a diverse, balanced diet rather than the specific brand of supplemental milk or formula.',
    },
  ],
  whenNormal: [
    'Your baby is thriving on a European formula - gaining weight, developing normally, and having comfortable digestion.',
    'You have researched the formula thoroughly and are purchasing from a reputable source with proper storage.',
    'You have discussed your formula choice with your pediatrician.',
  ],
  whenToMention: [
    'You want your pediatrician\'s input on a specific European formula brand for your baby.',
    'Your baby is having digestive symptoms on any formula and you want to discuss alternatives.',
    'You are unsure about proper preparation - some European formulas have different scoop sizes and mixing instructions than US formulas.',
  ],
  whenToActNow: [
    'Your baby develops symptoms of an allergic reaction to any formula - hives, vomiting, bloody stool, or difficulty breathing.',
    'You received formula with damaged packaging, expired dates, or labels in a language you cannot read and have already fed it to your baby.',
    'Your baby is showing signs of failure to thrive on any formula - poor weight gain, lethargy, or excessive vomiting.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-amino-acid-formula-when',
    'baby-bottle-sterilization-methods',
    'baby-failure-to-thrive-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing an Infant Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Choosing-an-Infant-Formula.aspx',
    },
    {
      org: 'NIH',
      citation:
        'U.S. Food and Drug Administration. Infant Formula Requirements.',
      url: 'https://www.fda.gov/food/resources-you-food/infant-formula',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. International Code of Marketing of Breast-milk Substitutes.',
      url: 'https://www.who.int/publications/i/item/9241541601',
    },
  ],
};
