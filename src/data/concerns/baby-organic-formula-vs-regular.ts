import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-organic-formula-vs-regular',
  title: 'Organic Formula vs. Regular Formula for My Baby',
  category: 'feeding',
  searchTerms: [
    'organic formula vs regular baby',
    'is organic formula better for baby',
    'organic baby formula worth it',
    'European formula vs American',
    'organic formula benefits baby',
    'conventional formula safe baby',
    'organic infant formula differences',
    'HiPP Holle formula baby',
    'best formula for baby organic',
    'organic formula ingredients difference',
  ],
  quickAnswer:
    'Both organic and conventional infant formulas sold in the United States must meet the same strict FDA nutritional standards, meaning they provide equivalent nutrition for your baby. Organic formulas use ingredients from organic farming (without synthetic pesticides or growth hormones) but are not nutritionally superior to conventional formulas. The most important factor is choosing a formula that is FDA-registered, age-appropriate, and well-tolerated by your baby, whether organic or conventional.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'All infant formulas sold in the US (organic or conventional) must meet federal nutritional requirements for calories, protein, fat, vitamins, and minerals. Organic formulas differ in their sourcing: organic milk-based formulas use milk from cows raised without antibiotics or synthetic growth hormones, and organic ingredients are grown without synthetic pesticides. However, there is no scientific evidence that organic formula leads to better health outcomes in infants. Some parents choose organic for environmental or personal reasons, which is a valid choice. Regardless of type, follow the same preparation and storage guidelines for any formula.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby grows, continue with the formula type that works well for them. Switching between organic and conventional is generally safe as long as both are the same type (e.g., both cow\'s milk-based). Some popular European organic formulas (like HiPP, Holle, Kendamil) are not FDA-registered and may not be available through official US channels. While these formulas meet EU standards, importing them directly may involve storage and transportation concerns. If you want a European-style formula, look for brands now officially sold through FDA-approved channels in the US.',
    },
    {
      ageRange: '12-36 months',
      context:
        'After 12 months, most children transition from formula to whole cow\'s milk. Whether you choose organic or conventional milk is a personal decision. Organic milk comes from cows not treated with antibiotics or growth hormones. However, all milk sold in the US (organic or not) is tested for antibiotic residues and is free of them. Toddler formulas (marketed for ages 1-3) are generally unnecessary if your child eats a balanced diet and drinks whole milk. The AAP does not recommend toddler formulas for healthy children and notes they can be expensive and may contain added sugars.',
    },
  ],
  whenNormal: [
    'Your baby thrives on either organic or conventional formula with appropriate weight gain and development.',
    'You choose organic formula based on personal values or preferences — this is a perfectly reasonable choice.',
    'Your baby does equally well on both types and you switch between them without issue.',
  ],
  whenToMention: [
    'You are considering an imported formula that may not be FDA-registered and want guidance on its safety.',
    'Your baby seems to tolerate one type of formula better than another and you want to discuss the differences.',
    'You have concerns about specific ingredients in your baby\'s formula (palm oil, DHA sources, iron type).',
  ],
  whenToActNow: [
    'You have been using a formula that has been recalled — stop using it immediately and contact your pediatrician for alternatives.',
    'Your baby is showing signs of formula intolerance: blood in stool, severe vomiting, widespread rash, or failure to thrive — seek medical evaluation regardless of whether the formula is organic or conventional.',
    'You are using a homemade or DIY formula recipe — stop and switch to an FDA-registered formula immediately. Homemade formulas can be dangerously deficient in essential nutrients.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-goat-milk-formula-safety', 'baby-hypoallergenic-formula-when', 'baby-formula-preparation-safety'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Choosing an Infant Formula',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Choosing-an-Infant-Formula.aspx',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration — Infant Formula Requirements',
      url: 'https://www.fda.gov/food/resources-you-food/infant-formula',
    },
    {
      org: 'USDA',
      citation:
        'United States Department of Agriculture — Organic Labeling Standards',
      url: 'https://www.usda.gov/topics/organic',
    },
  ],
};
