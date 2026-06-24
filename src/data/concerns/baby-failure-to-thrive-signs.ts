import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-failure-to-thrive-signs',
  title: 'Signs of Failure to Thrive in Babies',
  category: 'feeding',
  searchTerms: [
    'failure to thrive baby',
    'baby not gaining weight',
    'baby falling off growth curve',
    'underweight baby signs',
    'baby weight gain too slow',
    'failure to thrive causes',
    'baby growth faltering',
    'poor weight gain infant',
    'baby not growing enough',
    'insufficient weight gain baby',
    'faltering growth baby',
  ],
  quickAnswer:
    'Failure to thrive (now often called growth faltering) refers to a baby or child who is not gaining weight as expected. It is typically defined as weight falling below the 2nd percentile, or crossing down two or more major percentile lines on the growth chart. While it sounds alarming, most cases are related to feeding difficulties, inadequate calorie intake, or transient illness, and can be successfully treated. Early identification and intervention are important for optimal outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the first weeks, some weight loss after birth is normal (up to 7-10% of birth weight), with most babies regaining birth weight by 10-14 days. After that, babies typically gain about 5-7 ounces per week. Common causes of poor weight gain at this age include breastfeeding difficulties (latch issues, low milk supply), inadequate feed volumes, tongue tie, or medical conditions affecting absorption. Your pediatrician monitors weight closely at well-child visits. If your baby is not back to birth weight by 2 weeks, additional feeding support is usually recommended.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Weight gain naturally slows after the first 3-4 months, from about 5-7 ounces per week to about 3-5 ounces per week. A baby who was gaining well and then plateaus may be experiencing a change in milk supply, difficulty transitioning to solids, a food allergy, chronic reflux, or recurrent illness. Growth chart trends matter more than any single measurement. If your baby crosses down two percentile lines, your doctor will want to investigate. Increasing calorie density of feeds and ensuring adequate feeding frequency are common first interventions.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Weight gain slows further in the toddler years, and normal toddlers may appear leaner as they become more active. However, a toddler who continues to fall on the growth chart, is significantly underweight, or has decreased energy warrants evaluation. Picky eating, excessive juice or milk intake (displacing solid food), undiagnosed food allergies or celiac disease, and chronic infections can contribute. Your pediatrician may order blood tests and possibly refer to a pediatric gastroenterologist or feeding specialist.',
    },
  ],
  whenNormal: [
    'Your baby lost some weight in the first few days after birth but regained it by 2 weeks.',
    'Your baby is on a lower percentile on the growth chart but is following their own consistent curve.',
    'Weight gain slows somewhat between 4-6 months as your baby becomes more active.',
  ],
  whenToMention: [
    'Your baby seems to be eating well but is not gaining weight as expected.',
    'Your baby has crossed down one major percentile line on the growth chart.',
    'Your baby is feeding frequently but still seems hungry, unsatisfied, or excessively fussy.',
    'You are concerned about your breast milk supply or your baby\'s formula intake.',
  ],
  whenToActNow: [
    'Your newborn has not regained birth weight by 2-3 weeks of age.',
    'Your baby has fewer than 4 wet diapers in 24 hours, appears dehydrated, or is lethargic.',
    'Your baby has crossed down two or more major percentile lines on the growth chart.',
    'Your baby is losing weight, has visible wasting (loss of fat and muscle), or seems increasingly weak or unresponsive.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-chronic-diarrhea-no-infection',
    'baby-amino-acid-formula-when',
    'baby-dehydration-hot-weather',
    'refusing-breast',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Failure to Thrive. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Failure-to-Thrive.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Failure to Thrive in Infants and Toddlers. American Family Physician, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/33587568/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. WHO Child Growth Standards.',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
  ],
};
