import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vitamin-d-supplementation',
  title: 'Vitamin D Supplementation for Babies',
  category: 'feeding',
  searchTerms: [
    'vitamin D for babies',
    'vitamin D drops baby',
    'do breastfed babies need vitamin D',
    'baby vitamin D supplement',
    'how much vitamin D for baby',
    'vitamin D deficiency baby',
    'rickets baby vitamin D',
    'when to start vitamin D drops',
    'formula fed baby vitamin D',
    'vitamin D breastfeeding',
    'best vitamin D drops for infants',
  ],
  quickAnswer:
    'The AAP recommends that all breastfed and partially breastfed babies receive 400 IU of vitamin D per day starting within the first few days of life. Breast milk, while perfect in almost every way, does not contain enough vitamin D to prevent deficiency. Formula-fed babies who drink less than 32 ounces of formula per day also need supplementation. This is a simple daily drop that protects your baby\'s bone health and supports their immune system.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Start vitamin D supplementation within the first few days of life. You can place the drop directly into your baby\'s mouth or put it on your nipple right before nursing. Many vitamin D drops come in single-drop formulations (400 IU per drop), making it easy to give. If your baby is exclusively formula-fed and consistently drinking 32 ounces or more of vitamin D-fortified formula per day, they are getting enough from formula alone. However, most young babies do not drink this much, so supplementation is recommended.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue the daily 400 IU vitamin D supplement. Make it part of your daily routine so you do not forget - many parents give it at the same time each day, such as after the morning feed. If you are combination feeding with breast milk and formula, continue supplementing unless your baby consistently gets 32 ounces of formula per day, which is unlikely when breast milk is also part of the diet.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue supplementation even after your baby starts solid foods, as most complementary foods do not contain significant amounts of vitamin D. Some fortified baby cereals and fatty fish provide small amounts, but not enough to meet the daily requirement. The supplement should continue throughout the first year and beyond for breastfed babies.',
    },
    {
      ageRange: '1-3 years',
      context:
        'After 12 months, the recommended intake increases to 600 IU of vitamin D per day. If your toddler drinks at least 16 ounces of vitamin D-fortified whole milk daily, they may get enough from diet alone. However, many pediatricians recommend continuing a vitamin D supplement, especially during winter months, for children with limited sun exposure, or for children with darker skin who produce less vitamin D from sunlight.',
    },
  ],
  whenNormal: [
    'Your baby needs a vitamin D supplement even though they are healthy and breastfeeding is going well',
    'You occasionally forget a day of vitamin D drops - missing one day is not harmful',
    'Your baby makes a face when given the drops but swallows them without difficulty',
    'Your formula-fed baby does not need extra vitamin D if they are drinking 32 ounces or more of fortified formula daily',
  ],
  whenToMention: [
    'You are unsure whether your baby needs vitamin D based on their feeding situation',
    'Your baby was born premature, which may mean they need higher doses of vitamin D or additional supplements',
    'You are concerned about vitamin D deficiency due to limited sun exposure or a family history of deficiency',
  ],
  whenToActNow: [
    'Your baby has bone deformities such as bowed legs or a widened forehead, delayed growth, or muscle weakness, which could indicate severe vitamin D deficiency (rickets)',
    'Your baby has had seizures, which in rare cases can be related to severe vitamin D and calcium deficiency',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vitamin D: On the Double. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Vitamin-D-On-the-Double.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Prevention of Rickets and Vitamin D Deficiency in Infants, Children, and Adolescents. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/122/5/1142/72897/Prevention-of-Rickets-and-Vitamin-D-Deficiency-in',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Vitamin D.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/vitamins-minerals/vitamin-d.html',
    },
  ],
};
