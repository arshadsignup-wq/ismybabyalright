import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'excessive-weight-gain-baby',
  title: 'Excessive Weight Gain in Babies',
  category: 'feeding',
  searchTerms: [
    'baby gaining too much weight',
    'overweight baby',
    'baby weight gain too fast',
    'fat baby concerns',
    'baby above 95th percentile weight',
    'overfeeding baby',
    'obese baby',
    'baby too heavy for age',
    'rapid weight gain infant',
  ],
  quickAnswer:
    'Rapid or excessive weight gain in babies is usually not a cause for concern  -  most chubby babies slim down as they become mobile. Breastfed babies cannot be overfed. However, if your baby\'s weight is crossing upward through multiple percentile lines while length remains lower, or if weight is well above the 97th percentile with other concerns, your pediatrician may want to investigate. True overweight in infancy is rare and is usually related to specific medical conditions or significant overfeeding with formula or early solids rather than to breastfeeding.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Rapid weight gain in the first 3 months is very common, especially in breastfed babies who may gain 8-12 ounces per week early on. This is not overfeeding  -  babies regulate their own intake at the breast. Formula-fed babies can sometimes be encouraged to finish bottles when they are already full. Pace feeding (holding the bottle more horizontally and taking breaks) helps formula-fed babies self-regulate. A chubby newborn is generally a well-fed newborn.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Weight gain normally slows somewhat after the first 3 months. If your baby continues to gain at the same rapid rate, they may move to higher percentiles. This is usually fine if the baby is being fed responsively (on demand, not on a strict schedule). Avoid starting solids before 4-6 months, as early introduction of calorie-dense foods can contribute to excessive weight gain. Your pediatrician will look at the overall growth picture, not just one measurement.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solids and become more mobile, many begin to slim down naturally. If your baby\'s weight remains very high while length is much lower on the growth chart, your pediatrician may review the diet to ensure appropriate portions and food types. Avoid restricting a baby\'s diet without medical guidance  -  babies need adequate fat and calories for brain development. Focus on offering a variety of nutritious foods rather than limiting intake.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers who were very chubby as babies often slim down significantly as they become more active. If your toddler remains well above the 97th percentile for weight relative to height, your pediatrician may screen for rare endocrine conditions or genetic syndromes that cause excessive weight gain. For most toddlers, the focus should be on establishing healthy eating habits  -  offering balanced meals, avoiding excessive juice or sweetened beverages, and encouraging active play rather than restricting calories.',
    },
  ],
  whenNormal: [
    'Your exclusively breastfed baby is above the 95th percentile for weight  -  breastfed babies self-regulate and high weight in breastfed infants typically normalizes by toddlerhood.',
    'Your baby is proportionally large (weight and length both at high percentiles)  -  big babies with big parents are following their genetic potential.',
    'Your baby gained weight rapidly in the first few months and then growth velocity slowed  -  this is the normal pattern.',
    'Your chubby baby started slimming down after learning to crawl and walk  -  increased activity naturally shifts body composition.',
  ],
  whenToMention: [
    'Your formula-fed baby is consistently taking much more formula than recommended for their age and weight, and you are unsure if they are being overfed.',
    'Your baby\'s weight is crossing upward through percentile lines while length remains at a lower percentile (becoming increasingly disproportionate).',
    'You are concerned about family history of obesity and want guidance on appropriate feeding practices.',
  ],
  whenToActNow: [
    'Your baby has very rapid weight gain along with other unusual features such as excessive body hair, skin changes, or developmental concerns  -  rare endocrine conditions should be evaluated.',
    'Your baby has sudden dramatic weight gain along with increased head circumference, vomiting, or irritability  -  these could indicate a medical condition requiring urgent evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Is Your Baby Too Fat? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Is-Your-Baby-Too-Fat.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Child Growth Standards: Weight-for-Length.',
      url: 'https://www.who.int/tools/child-growth-standards/standards/weight-for-length-height',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Growth Charts: WHO Standards.',
      url: 'https://www.cdc.gov/growthcharts/who_charts.htm',
    },
  ],
};
