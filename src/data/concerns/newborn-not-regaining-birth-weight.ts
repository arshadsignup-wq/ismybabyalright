import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-not-regaining-birth-weight',
  title: 'Slow Weight Regain in Newborns',
  category: 'medical',
  searchTerms: ['baby not gaining weight back', 'newborn slow weight gain', 'baby not back to birth weight', 'slow weight regain after birth', 'baby weight gain too slow', 'newborn failure to regain weight', 'breastfed baby slow weight gain', 'baby not gaining enough weight', 'newborn weight gain problems', 'when should baby regain birth weight'],
  quickAnswer:
    'Most babies regain their birth weight by 10-14 days of age. If your baby has not regained birth weight by 2 weeks, it may indicate feeding difficulties, insufficient milk supply, or other medical issues. Close follow-up with your pediatrician and a lactation consultant can help identify and address the problem.',
  byAge: [
    { ageRange: '0-1 month', context: 'If your baby has not regained birth weight by 2 weeks, your pediatrician will want to evaluate feeding. Common causes include poor latch, tongue tie, insufficient milk supply, sleepy feeding, or underlying medical conditions. Your pediatrician may recommend more frequent weight checks, feeding evaluation, and possibly supplementation with expressed breast milk or formula while the underlying cause is addressed. Working with a lactation consultant is highly recommended. Adequate wet diapers (at least 6 per day after day 4) and stool output are monitored alongside weight.' },
    { ageRange: '1-3 months', context: 'After regaining birth weight, babies should gain about 5-7 ounces per week. If weight gain is slower than expected, continued feeding support and monitoring are important. Some babies are naturally smaller or gain weight more slowly, but consistently poor weight gain needs evaluation for feeding issues, reflux, allergies, or other medical causes.' },
    { ageRange: '3-6 months', context: 'Weight gain of 3-5 ounces per week is expected. If your baby continues to gain slowly, your pediatrician may investigate further with blood tests or other evaluations. Growth chart trends are more important than individual measurements.' },
    { ageRange: '6-12 months', context: 'With solid foods and continued milk feeding, weight gain should be steady. Babies who were slow to gain weight early may catch up, or may follow a lower growth curve consistently, which can be their normal pattern.' },
  ],
  whenNormal: ['Gradual weight regain that reaches birth weight by 10-14 days', 'Some babies regain slightly slower but are feeding well and producing adequate diapers', 'Steady weight gain after birth weight is regained'],
  whenToMention: ['Baby has not regained birth weight by 2 weeks', 'Weight gain is slower than 4-5 ounces per week in the first 3 months', 'You are concerned about your milk supply or feeding effectiveness'],
  whenToActNow: ['Significant weight loss continuing after the first week, or baby not regaining any weight by 2 weeks', 'Baby shows signs of dehydration: fewer than 6 wet diapers per day, sunken fontanelle, dry mouth, excessive sleepiness, or lethargy'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Weight Gain and Nutrition. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Tracking-Your-Babys-Weight-and-Measurements.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Child Growth Standards.', url: 'https://www.who.int/tools/child-growth-standards' },
  ],
  relatedConcernSlugs: ['newborn-weight-loss-first-week', 'weight-faltering-baby', 'newborn-not-latching-at-all'],
};
