import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-weight-loss-first-week',
  title: 'Normal Weight Loss After Birth',
  category: 'medical',
  searchTerms: ['newborn weight loss normal', 'baby losing weight first week', 'how much weight loss newborn normal', 'baby weight drop after birth', 'newborn weight loss percentage', 'baby lost weight hospital', 'normal weight loss after delivery', 'breastfed baby weight loss', 'newborn weight loss when to worry', 'baby birth weight loss'],
  quickAnswer:
    'It is completely normal for newborns to lose weight in the first few days of life. Breastfed babies typically lose 5-7% of their birth weight, and formula-fed babies typically lose 3-5%. Weight loss of more than 7-10% may need intervention. Most babies regain their birth weight by 10-14 days of age.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborns lose weight after birth because they are losing extra fluid they carried during pregnancy, and because feeding is just getting established, especially for breastfed babies who are waiting for mature milk to come in (colostrum comes first). Weight loss of up to 7% is considered normal for breastfed babies and up to 5% for formula-fed babies. Weight loss of 7-10% requires close monitoring and possible intervention to support feeding. Weight loss beyond 10% is concerning and may require supplementation. Babies typically reach their lowest weight by day 3-4 and then begin gaining. Most babies regain their birth weight by 10-14 days. After that, expect weight gain of about 5-7 ounces per week.' },
    { ageRange: '1-3 months', context: 'After regaining birth weight, babies should gain steadily. Breastfed babies typically gain about 5-7 ounces per week in the first 3 months. Formula-fed babies may gain slightly more. Your pediatrician tracks weight at well-child visits. If weight gain is slow, feeding evaluation and support may be needed.' },
    { ageRange: '3-6 months', context: 'Weight gain typically slows slightly to about 3-5 ounces per week. Your baby should be following their growth curve on the growth chart. A single weight measurement is less important than the overall trend.' },
    { ageRange: '6-12 months', context: 'Weight gain continues to slow as activity increases and solid foods are introduced. Babies typically double their birth weight by 4-5 months and triple it by 12 months.' },
  ],
  whenNormal: ['Weight loss of up to 7% in breastfed babies and 5% in formula-fed babies', 'Lowest weight reached by day 3-4 followed by gradual weight gain', 'Birth weight regained by 10-14 days', 'Baby is feeding 8-12 times per day and producing adequate wet and dirty diapers'],
  whenToMention: ['Weight loss approaching 7-10% of birth weight', 'Baby has not regained birth weight by 2 weeks', 'Feeding is difficult or infrequent'],
  whenToActNow: ['Weight loss exceeding 10% of birth weight, which may require supplementation and close medical follow-up', 'Baby is lethargic, feeding poorly, not producing wet diapers, or appears dehydrated (sunken fontanelle, dry mouth, no tears)'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding and Weight Loss. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Child Growth Standards.', url: 'https://www.who.int/tools/child-growth-standards' },
  ],
  relatedConcernSlugs: ['newborn-not-regaining-birth-weight', 'newborn-excessive-weight-loss', 'newborn-adequate-wet-diapers'],
};
