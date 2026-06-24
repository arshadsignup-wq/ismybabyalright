import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-feeling-inadequate-supply',
  title: 'Feeling Like You Don\'t Have Enough Breast Milk',
  category: 'feeding',
  searchTerms: [
    'not enough breast milk',
    'low milk supply',
    'baby not getting enough milk',
    'breast milk supply low',
    'how to increase milk supply',
    'baby still hungry after breastfeeding',
    'am I producing enough breast milk',
    'signs of low milk supply',
    'baby not satisfied after breastfeeding',
    'breast milk production not enough',
    'worried about milk supply',
    'inadequate breast milk',
  ],
  quickAnswer:
    'Perceived low milk supply is one of the most common reasons mothers stop breastfeeding, yet true insufficient supply is relatively uncommon. Many normal signs are misinterpreted as low supply: breasts feeling softer, baby feeding frequently, or being unable to pump much milk. The most reliable indicators of adequate supply are your baby\'s weight gain and wet diaper output. If your baby is gaining weight well and producing 6 or more wet diapers per day, your supply is likely sufficient.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'In the first days, your breasts produce colostrum in small volumes, which is normal and appropriate for your newborn\'s tiny stomach. By day 3-5, your milk "comes in" and volumes increase significantly. Frequent feeding (8-12 times daily) is essential to establish supply. Weight loss of up to 7-10% of birth weight is normal in the first few days, and most babies regain their birth weight by 10-14 days. Focus on feeding cues and proper latch rather than trying to measure output.',
    },
    {
      ageRange: '2 weeks - 3 months',
      context:
        'Around 3-6 weeks, your breasts may stop feeling full and engorged as your supply regulates to match your baby\'s needs. This is often mistakenly interpreted as a drop in supply. Cluster feeding, where your baby feeds very frequently for several hours, is also normal and does not indicate low supply -- it helps increase production for growth spurts. Reliable signs of adequate intake include steady weight gain (about 5-7 oz per week) and 6 or more wet diapers daily.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, your supply is well established and your breasts have become efficient at producing milk on demand. You may no longer feel let-down as strongly or notice leaking, which is normal. Pump output is not a reliable indicator of supply, as babies are much more efficient at extracting milk than pumps. If your baby is growing along their curve and having adequate wet diapers, trust that your supply is meeting their needs.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solid foods are introduced, your baby may nurse less frequently, and your milk supply will naturally adjust. This does not mean your supply is drying up. Many mothers worry when pumping output decreases after starting solids, but this is a normal physiological response. Your baby is still getting important nutrition and antibodies from breast milk even as their diet diversifies.',
    },
  ],
  whenNormal: [
    'Your baby is gaining weight steadily and following their growth curve.',
    'Your baby produces 6 or more wet diapers and 3 or more stools per day in the early weeks.',
    'Your breasts feel softer after the first few weeks as your supply regulates.',
  ],
  whenToMention: [
    'Your baby is not back to birth weight by 2 weeks of age.',
    'Your baby seems constantly unsatisfied after feedings and is not gaining weight as expected.',
    'You have risk factors for low supply such as breast surgery, PCOS, thyroid disorders, or insufficient glandular tissue.',
  ],
  whenToActNow: [
    'Your newborn is losing more than 10% of birth weight or is not producing wet diapers (fewer than 6 per day after day 4).',
    'Your baby is lethargic, has a dry mouth, or shows signs of dehydration.',
    'Your baby has not regained birth weight by 3 weeks of age despite frequent feeding.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['breastfeeding-latch-difficulty-ongoing', 'breastfeeding-pressure-online-guilt', 'breastfeeding-misinformation-social-media', 'bottle-preference'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Is Baby Getting Enough Milk? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Is-Baby-Getting-Enough-Milk.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding: Assessing Adequate Intake. WHO.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Perceived Insufficient Milk Supply: A Review of the Literature. Journal of Human Lactation.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31084539/',
    },
  ],
};
