import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-growth-chart-interpretation',
  title: 'Understanding My Baby\'s Growth Chart',
  category: 'medical',
  searchTerms: [
    'baby growth chart percentile meaning',
    'baby growth chart interpretation',
    'baby dropped percentile',
    'baby weight percentile low',
    'what do baby growth charts mean',
    'baby growth percentile change',
    'baby below 5th percentile',
    'baby above 95th percentile',
    'baby growth curve crossing percentiles',
    'WHO growth chart vs CDC chart baby',
  ],
  quickAnswer:
    'Growth charts show how your baby\'s weight, length, and head circumference compare to other children of the same age and sex. A percentile number means your baby is larger than that percentage of children — for example, the 50th percentile means average. What matters most is not the specific percentile but that your baby follows a consistent growth curve over time. Crossing two or more major percentile lines (up or down) may warrant investigation.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The WHO growth charts are recommended for all children under 2 years regardless of feeding method. Newborns typically lose 5-7% of birth weight in the first few days (up to 10% in breastfed babies) and should regain it by 10-14 days. After that, expect about 1 ounce per day of weight gain for the first 3-4 months. Breastfed babies may grow faster initially and then slow down compared to formula-fed babies — this is normal on the WHO charts. It is common for babies to shift percentiles in the first 6 months as they find their own growth trajectory, which is influenced by genetics.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Growth rate naturally slows during this period. Babies typically gain about 1 pound per month from 6-12 months. Some shifting of percentiles is normal as genetic growth potential becomes more influential than prenatal nutrition. However, a baby who drops across two or more major percentile lines (for example, from the 75th to the 25th) should be evaluated for failure to thrive or underlying medical conditions. Similarly, rapid upward percentile crossing for weight without proportional length increase may indicate overfeeding. Your pediatrician tracks all three measurements (weight, length, head circumference) together for the most complete picture.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Growth continues to slow in toddlerhood. The CDC growth charts are typically used for children over 2 years. Toddlers often become pickier eaters, and temporary plateaus in weight gain are common. BMI-for-age begins to be tracked starting at age 2. Key concerns at this age include: persistent tracking below the 3rd percentile, crossing downward across two or more percentile lines, and disproportionate head growth (head circumference percentile much higher or lower than weight and length). Your pediatrician considers your family\'s body size, your child\'s overall health, and developmental progress alongside growth charts.',
    },
  ],
  whenNormal: [
    'Your baby is consistently following their own percentile curve, even if it is at the 10th or 90th percentile — consistency matters more than the number.',
    'Your baby shifted percentiles slightly in the first 6 months and then settled into a consistent curve.',
    'Your baby is small or large for age but both parents are similarly small or large — genetics play a significant role.',
  ],
  whenToMention: [
    'Your baby has crossed downward across one major percentile line (for example, from 50th to 25th) and you want to monitor the trend.',
    'Your baby\'s weight, length, and head circumference are in very different percentile ranges (for example, weight at 10th but length at 75th).',
    'You are confused about your baby\'s growth chart and want your pediatrician to explain the trends.',
  ],
  whenToActNow: [
    'Your baby has dropped across two or more major percentile lines for weight in a short period, is feeding poorly, or shows signs of dehydration — seek prompt medical evaluation for failure to thrive.',
    'Your baby\'s head circumference is increasing much faster than expected (crossing upward rapidly), which could indicate hydrocephalus — this requires urgent evaluation.',
    'Your baby has stopped gaining weight entirely, is losing weight, or appears increasingly lethargic and unwell — seek same-day medical evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-growth-spurt-signs', 'enlarged-head', 'baby-irritable-during-feeding-fussy'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — WHO Growth Standards for Children 0-2 Years',
      url: 'https://www.cdc.gov/growthcharts/who_charts.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Tracking Your Child\'s Growth',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Growth-Charts.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization — Child Growth Standards',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
  ],
};
