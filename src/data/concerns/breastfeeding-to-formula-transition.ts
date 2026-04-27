import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-to-formula-transition',
  title: 'Transitioning from Breastfeeding to Formula',
  category: 'feeding',
  searchTerms: [
    'switching from breastfeeding to formula',
    'transitioning breast to formula',
    'how to wean from breast to bottle',
    'breastfeeding to formula guilt',
    'baby refusing formula after breastfeeding',
    'when to switch to formula',
    'mixing breast milk and formula',
    'how to introduce formula to breastfed baby',
    'stopping breastfeeding tips',
    'formula feeding after breastfeeding',
    'weaning to formula',
    'supplementing with formula',
  ],
  quickAnswer:
    'Transitioning from breastfeeding to formula is a common decision that many families make for a variety of valid reasons. A gradual transition over 1-2 weeks is best for both your body (to prevent engorgement and mastitis) and your baby (to adjust to a new taste and feeding method). Replace one breastfeeding session with a formula bottle every 2-3 days. Your baby is well nourished whether they receive breast milk, formula, or a combination - the best feeding choice is the one that works for your family.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Transitioning at this age is common, often due to return to work, supply issues, or physical or mental health needs. Introduce a bottle with formula gradually. If your baby resists the bottle, try different nipple shapes and have someone other than the breastfeeding parent offer it. Some babies accept formula more readily at room temperature rather than warmed. Pump to relieve engorgement as you drop feeding sessions, gradually decreasing the amount you pump over several days to signal your body to reduce supply.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, many babies are more settled into a routine, which can make the transition smoother. Continue replacing one feeding at a time. Start with the feeding your baby seems least interested in (often a mid-day feed). Keep the first and last feeds of the day as breastfeeds if you want to maintain a partial breastfeeding relationship. Some parents mix breast milk with formula initially to help the baby adjust to the taste, gradually increasing the ratio of formula.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby is over 6 months and eating some solid foods, the transition may be easier because they are not relying exclusively on milk. You can introduce formula in a sippy cup or open cup as well as a bottle. Continue with standard infant formula until 12 months - do not switch to cow\'s milk before then. This is also a natural time for many parents to transition as solids become a larger part of the diet.',
    },
    {
      ageRange: '12+ months',
      context:
        'After 12 months, you can transition directly to whole cow\'s milk rather than formula, unless your pediatrician recommends otherwise. Serve cow\'s milk in a cup rather than a bottle. The goal is about 16-24 oz of whole milk per day. If your toddler was still breastfeeding, you can wean gradually by dropping one feeding at a time, starting with the one they are least attached to. Many toddlers hold onto the bedtime or morning feeding longest - this is fine to keep as long as it works for you.',
    },
  ],
  whenNormal: [
    'Your baby initially refuses formula but accepts it after several attempts over a few days',
    'Your baby has slightly different bowel movements (firmer, darker, different smell) after switching to formula - this is expected',
    'You feel emotional about stopping breastfeeding - grief, guilt, and relief can all coexist and are all valid',
    'Your breasts feel full and uncomfortable during the transition, which improves as your supply adjusts',
  ],
  whenToMention: [
    'Your baby consistently refuses all formula after more than a week of trying',
    'Your baby develops digestive symptoms (excessive gas, bloody stools, persistent vomiting) with formula, suggesting possible intolerance',
    'You are experiencing breast engorgement, hard lumps, fever, or flu-like symptoms that could indicate mastitis during weaning',
  ],
  whenToActNow: [
    'You have signs of mastitis - fever, red streaks on breast, hot hard lump, flu-like symptoms - this needs treatment',
    'Your baby is refusing all food and fluids (both breast and formula) and showing signs of dehydration',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['weaning-off-breastfeeding', 'formula-intolerance-signs', 'baby-supplementing-with-formula'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Switching to Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Switching-To-Solid-Foods.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Amount and Schedule of Baby Feedings. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Amount-and-Schedule-of-Formula-Feedings.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/index.html',
    },
  ],
};
