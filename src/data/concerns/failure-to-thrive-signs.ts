import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'failure-to-thrive-signs',
  title: 'I\'m Worried My Baby Isn\'t Growing (Failure to Thrive)',
  category: 'feeding',
  searchTerms: [
    'failure to thrive baby',
    'baby not gaining weight',
    'baby falling off growth chart',
    'baby too small',
    'baby not growing enough',
    'underweight baby',
    'poor weight gain infant',
    'baby growth faltering',
    'baby dropped percentiles',
    'baby not thriving',
    'why is my baby not gaining weight',
    'baby not gaining weight after 6 months',
    'baby not growing after starting solids',
    'baby weight gain chart by month',
    'how much weight should baby gain per week',
    'baby dropping percentiles on growth chart',
  ],
  quickAnswer:
    'Failure to thrive, now often called growth faltering, means a baby is not gaining weight or growing as expected. It is important to know that babies naturally shift percentiles in their first two years, and being on a lower percentile is not the same as failure to thrive. True growth faltering involves crossing two or more major percentile lines downward and usually requires medical evaluation to determine the cause.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Weight gain in the first three months is typically rapid, averaging about 5 to 7 ounces per week. After an initial weight loss of up to 7 to 10 percent of birth weight in the first few days, babies should regain their birth weight by 10 to 14 days. If your baby has not regained birth weight by two weeks or is gaining less than 4 ounces per week, your pediatrician will want to evaluate feeding. Common causes at this age include difficulty latching, low milk supply, tongue tie, or formula preparation errors.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Growth velocity naturally slows slightly at this age but should remain steady. Babies typically gain about 3 to 5 ounces per week. If your baby\'s weight has crossed two or more major percentile lines on the growth chart, your pediatrician may want to investigate. It is worth noting that breastfed and formula-fed babies have different growth patterns, and the WHO growth charts, which are based primarily on breastfed babies, are recommended for all infants under 2 years.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active with crawling and exploring, weight gain naturally slows to about 2 to 3 ounces per week. The introduction of solids sometimes leads to a temporary plateau as babies adjust. If your baby is losing weight or consistently dropping percentiles despite adequate feeding opportunities, your pediatrician may check for underlying causes such as food allergies, celiac disease, or metabolic conditions. Most cases of growth faltering at this age are related to caloric intake rather than a medical condition.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers grow more slowly than infants, and their weight gain may only be 3 to 5 pounds over the entire second year of life. Picky eating is very common at this age and can make parents anxious about growth, but most picky toddlers grow fine. If your toddler has dropped significantly on their growth curve, your pediatrician will likely evaluate their diet, look for underlying conditions, and may refer you to a pediatric nutritionist. The goal is to identify whether the issue is insufficient intake, increased caloric needs, or poor absorption.',
    },
  ],
  whenNormal: [
    'Your baby is on a lower percentile but has been growing steadily along their own curve since birth',
    'Your baby dropped from a higher percentile to a lower one in the first 6 months and then stabilized, which often reflects finding their genetic growth pattern',
    'Your baby\'s weight dipped slightly during an illness but bounced back within a week or two',
    'Both parents are small in stature, and your baby is tracking along a lower percentile consistently',
  ],
  whenToMention: [
    'Your baby has crossed two or more major percentile lines downward on the growth chart',
    'Your baby seems hungry all the time but is not gaining weight despite frequent feeds',
    'Your baby is significantly lighter or shorter than expected for their age and you are concerned',
  ],
  whenToActNow: [
    'Your baby is losing weight, appears listless or excessively sleepy, and is difficult to wake for feeds',
    'Your baby has signs of dehydration such as no tears when crying, sunken fontanelle, very few wet diapers, or dry cracked lips',
  ],
  relatedConcernSlugs: [
    'slow-weight-gain-breastfed-baby',
    'baby-not-drinking-enough-milk',
    'baby-not-interested-in-food',
    'low-milk-supply-signs',
    'picky-eating',
    'reflux',
    'milk-protein-allergy',
    'formula-intolerance-signs',
    'iron-deficiency-from-milk',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
    'gross-motor',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Failure to Thrive. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview/article/41/11/585/460/Failure-to-Thrive-in-Children',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. WHO Child Growth Standards.',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Growth Chart Training: Using the WHO Growth Charts.',
      url: 'https://www.cdc.gov/growthcharts/who_charts.htm',
    },
  ],
};
