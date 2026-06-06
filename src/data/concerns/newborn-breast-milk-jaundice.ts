import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-breast-milk-jaundice',
  title: 'Breast Milk Jaundice',
  category: 'medical',
  searchTerms: [
    'breast milk jaundice',
    'breastfed baby jaundice',
    'jaundice from breastfeeding',
    'late onset jaundice breastfed',
    'breast milk jaundice vs breastfeeding jaundice',
    'does breastfeeding cause jaundice',
    'should I stop breastfeeding jaundice',
    'breast milk jaundice how long',
    'breastfed baby still yellow',
    'breast milk jaundice treatment',
  ],
  quickAnswer:
    'Breast milk jaundice is a harmless condition where substances in breast milk slow the breakdown of bilirubin, keeping the baby mildly jaundiced for up to 2-3 months. It is different from breastfeeding jaundice (caused by insufficient milk intake in the early days). Breast milk jaundice requires no treatment, and you should continue breastfeeding.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'It is important to distinguish between two types of jaundice in breastfed babies. Breastfeeding jaundice occurs in the first week when a baby is not getting enough milk, leading to dehydration and increased bilirubin. This is addressed by improving feeding frequency and technique. Breast milk jaundice typically begins after the first week and peaks at 2-3 weeks. It is caused by substances in breast milk that inhibit bilirubin metabolism. Unlike breastfeeding jaundice, the baby is feeding well and gaining weight. Breast milk jaundice is harmless. You do not need to stop breastfeeding.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Breast milk jaundice gradually resolves, usually by 2-3 months. During this time, your baby may appear mildly yellow but should be feeding well, gaining weight, and developing normally. Your pediatrician may periodically check bilirubin levels to ensure they are not too high. Bilirubin levels in breast milk jaundice rarely reach dangerous levels. Continue breastfeeding; there is no benefit to temporarily stopping.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Breast milk jaundice should be fully resolved by this time. If jaundice persists beyond 3 months, further evaluation is needed to rule out other causes such as liver disease.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Breast milk jaundice does not persist to this age. There are no long-term effects from breast milk jaundice.',
    },
  ],
  whenNormal: [
    'Mild yellow tint in a breastfed baby who is feeding well and gaining weight',
    'Jaundice that began after the first week and gradually improves',
    'Normal stool color (yellow or green) and pale yellow urine',
    'Baby is alert, active, and meeting developmental milestones',
  ],
  whenToMention: [
    'You want to confirm the diagnosis of breast milk jaundice versus other causes',
    'The jaundice seems to be getting worse rather than improving',
    'You feel pressured to stop breastfeeding due to jaundice and want guidance',
  ],
  whenToActNow: [
    'Pale, white, or clay-colored stools, which could indicate a liver condition rather than breast milk jaundice',
    'Baby becomes increasingly lethargic, feeds poorly, or develops a high-pitched cry',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Jaundice in Breastfed Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Jaundice-and-Breastfeeding.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Breast Milk Jaundice. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532930/',
    },
  ],
  relatedConcernSlugs: ['newborn-prolonged-jaundice', 'newborn-phototherapy-concerns', 'newborn-weight-loss-first-week'],
};
