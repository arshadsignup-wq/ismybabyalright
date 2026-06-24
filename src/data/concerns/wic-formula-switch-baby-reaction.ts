import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'wic-formula-switch-baby-reaction',
  title: 'My Baby Reacted After a WIC Formula Switch',
  category: 'feeding',
  searchTerms: [
    'WIC formula switch baby reaction',
    'baby reacting to new formula WIC',
    'WIC changed formula brand',
    'baby fussy after formula change',
    'WIC formula equivalent',
    'baby won\'t take new WIC formula',
    'formula switch constipation baby',
    'WIC formula change side effects',
    'generic formula vs brand name WIC',
    'baby diarrhea after formula switch',
  ],
  quickAnswer:
    'WIC periodically changes its contracted formula brands, which can lead to a sudden formula switch for families. While all standard infant formulas must meet the same FDA nutritional requirements and are essentially equivalent, babies can temporarily react to the taste difference or subtle variations in ingredients. Common adjustment symptoms include fussiness, mild spit-up, temporary changes in stool, and initial refusal. These usually resolve within 3-7 days. If your baby has a genuine allergic reaction or persistent symptoms, contact your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies may be more sensitive to formula changes because their digestive systems are still maturing. When WIC switches formula brands, your baby may notice the taste difference and initially refuse the new formula. Try offering the new formula when your baby is calm and somewhat hungry (but not starving). If possible, gradually transition by mixing the old and new formulas together, increasing the proportion of new formula over 3-5 days. Temporary changes in stool color, consistency, or frequency are common and usually harmless.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age may be more accepting of formula changes, though some still notice the difference. If your baby refuses the new formula entirely, check that the temperature and mixing ratio are correct (different brands may have different scooping instructions). All standard formulas — store brand, generic, or name brand — meet the same FDA nutritional standards and are safe for your baby. If your baby was on a specialty formula (hydrolyzed, soy, or amino acid-based) for a medical reason, talk to your pediatrician and WIC counselor to ensure the new formula is an appropriate equivalent.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies who are also eating solid foods may handle formula switches more easily since formula is a smaller proportion of their total intake. However, they may also have stronger taste preferences. If your baby continues to refuse the new formula after a week of trying, contact your WIC office — they may be able to authorize a different formula or provide guidance. Your pediatrician can also write a medical request for a specific formula if your baby has a documented medical need that the WIC-contracted brand does not meet.',
    },
  ],
  whenNormal: [
    'Your baby is fussy or spits up slightly more for the first few days on the new formula — this is a common adjustment reaction',
    'Your baby\'s stool changes color or consistency temporarily — different formulas can cause normal stool variations',
    'Your baby initially refuses the new formula but accepts it within a few days',
    'Your baby seems gassier than usual for the first week on the new formula',
  ],
  whenToMention: [
    'Your baby continues to refuse the new formula after 5-7 days of consistent offering',
    'Your baby has persistent vomiting, diarrhea, or constipation that does not improve after a week on the new formula',
    'Your baby was on a specialty formula and you are unsure if the new WIC formula is an appropriate replacement',
  ],
  whenToActNow: [
    'Your baby has signs of an allergic reaction to the new formula: hives, facial swelling, difficulty breathing, or blood in stool — stop the formula and seek medical care',
    'Your baby refuses all feeding (breast and bottle) and shows signs of dehydration',
    'Your baby is vomiting forcefully after every feed on the new formula',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-milk-allergy-alternatives',
    'toddler-soy-allergy-concerns',
    'bottle-preference',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing an Infant Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Choosing-an-Infant-Formula.aspx',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration. Infant Formula: Safety and Nutrition.',
      url: 'https://www.fda.gov/food/resources-you-food/infant-formula',
    },
    {
      org: 'USDA',
      citation:
        'U.S. Department of Agriculture. WIC Infant Formula.',
      url: 'https://www.fns.usda.gov/wic/infant-formula',
    },
  ],
};
