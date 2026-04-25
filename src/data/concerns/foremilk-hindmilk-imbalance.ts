import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'foremilk-hindmilk-imbalance',
  title: 'My Baby Has Foremilk-Hindmilk Imbalance',
  category: 'feeding',
  searchTerms: [
    'foremilk hindmilk imbalance',
    'baby green frothy poop breastfeeding',
    'baby gassy from breastmilk',
    'foremilk overload',
    'baby not getting enough hindmilk',
    'watery breast milk',
    'breastfed baby fussy gassy',
    'oversupply foremilk',
    'lactose overload breastfeeding',
    'baby fussy at breast pulling off',
  ],
  quickAnswer:
    'Foremilk-hindmilk imbalance is a frequently discussed concern, but true clinical imbalance is uncommon. Breast milk changes gradually during a feed from lower-fat to higher-fat, and most babies regulate this naturally. Green frothy stools and gassiness are often signs of oversupply rather than a problem with your milk composition.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'In the early weeks, your milk supply is still regulating, and oversupply is common. This can cause your baby to take in a large volume of lower-fat foremilk before the higher-fat hindmilk is available, leading to green frothy stools, excessive gas, and fussiness. This usually resolves as your supply regulates. Block feeding, where you nurse from one breast for a set period before switching, can help your body adjust.',
    },
    {
      ageRange: '6 weeks to 3 months',
      context:
        'By this age your supply should be regulating, but some mothers continue to have oversupply. If your baby is gaining weight rapidly, has frequent green stools, and seems uncomfortable with gas, oversupply may still be a factor. Continue block feeding if recommended by your lactation consultant, and avoid pumping unnecessarily as it can signal your body to produce even more milk.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If symptoms persist at this age, it is worth re-evaluating with a lactation consultant. Sometimes the issue is not foremilk-hindmilk imbalance at all but rather a food sensitivity, reflux, or normal developmental fussiness. Babies who are growing well and having adequate wet and dirty diapers are almost certainly getting enough fat in their diet regardless of stool color.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, foremilk-hindmilk imbalance is rarely a concern. Babies are typically nursing efficiently and may also be eating solid foods. If your baby continues to have persistent green stools or digestive discomfort, other causes such as food sensitivities or a gastrointestinal issue should be explored with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby has occasional green stools but is gaining weight well and seems content between feeds',
    'Your baby is gassy but passes gas easily and is not in prolonged distress',
    'You have a strong letdown and your baby sometimes coughs or pulls off the breast at the start of a feed',
    'Your baby is gaining weight at or above expected rates despite the green stools',
  ],
  whenToMention: [
    'Your baby has persistent green frothy stools at every diaper change for more than a week',
    'Your baby seems uncomfortable after most feeds with excessive gas, pulling up legs, and crying',
    'Your baby is not gaining weight as expected despite frequent nursing',
  ],
  whenToActNow: [
    'Your baby has blood in their stool, which may indicate a milk protein allergy rather than a foremilk issue',
    'Your baby is losing weight or showing signs of dehydration such as fewer than six wet diapers per day',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'La Leche League International',
      citation:
        'La Leche League International. Oversupply and Foremilk/Hindmilk Imbalance.',
      url: 'https://llli.org/breastfeeding-info/foremilk-and-hindmilk/',
    },
    {
      org: 'ABM',
      citation:
        'Academy of Breastfeeding Medicine. ABM Clinical Protocol #32: Management of Hyperlactation.',
      url: 'https://www.bfrjournal.com/article/S1551-7144(20)30297-3/fulltext',
    },
  ],
};
