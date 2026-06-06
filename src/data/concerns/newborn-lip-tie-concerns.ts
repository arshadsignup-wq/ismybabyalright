import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-lip-tie-concerns',
  title: 'Upper Lip Tie in Newborns',
  category: 'medical',
  searchTerms: [
    'baby lip tie',
    'upper lip tie newborn',
    'lip tie breastfeeding',
    'baby lip tie symptoms',
    'newborn lip frenulum',
    'lip tie release baby',
    'upper lip restricted baby',
    'lip tie causing latch problems',
    'baby lip tie diagnosis',
    'labial frenulum baby',
  ],
  quickAnswer:
    'An upper lip tie occurs when the tissue connecting the upper lip to the upper gum (labial frenulum) is thick, tight, or extends close to the gum line. While all babies have a labial frenulum, a restrictive one may sometimes contribute to breastfeeding difficulties. The significance and treatment of lip ties is more debated among medical professionals than tongue tie.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'An upper lip tie may be noticed in the first days of life, often during breastfeeding assessment. Signs that may suggest a significant lip tie include difficulty flanging the upper lip outward during latch, a shallow latch, and air swallowing. However, the diagnosis and treatment of lip ties is more controversial than tongue ties. Many lactation consultants and pediatricians take a conservative approach, focusing on optimizing latch technique before recommending release. If release is considered, it is usually done alongside a tongue tie release if both are present.',
    },
    {
      ageRange: '1-3 months',
      context:
        'If a lip tie is present but feeding is going well and baby is gaining weight, treatment is generally not recommended. Many babies with a noticeable lip tie feed successfully with proper positioning and latch support from a lactation consultant. If feeding difficulties persist despite optimal technique, a lip tie release may be discussed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, most feeding has been well-established. A lip tie that did not cause feeding problems is unlikely to need intervention. The labial frenulum naturally thins and recedes as the child grows. Some dental professionals believe a thick frenulum may contribute to a gap between the upper front teeth later, but this is typically addressed in older children if needed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solid foods are introduced, a lip tie rarely causes significant issues. The frenulum continues to change as the mouth grows. Lip tie is generally not a concern for speech development.',
    },
  ],
  whenNormal: [
    'All babies have an upper labial frenulum, and having a visible one is normal',
    'A lip tie that does not interfere with feeding or latch',
    'Baby is gaining weight well and feeding comfortably',
    'The upper lip can flange out during breastfeeding, even if a frenulum is visible',
  ],
  whenToMention: [
    'Difficulty achieving a deep latch despite proper positioning',
    'Persistent painful breastfeeding that is not improving with lactation support',
    'Baby is not gaining weight well and a lip tie has been identified as a possible contributing factor',
  ],
  whenToActNow: [
    'Significant weight loss or failure to thrive potentially related to feeding difficulties',
    'Mother has severe nipple damage that is not improving despite lactation support and technique adjustment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and Oral Anatomy. Pediatrics.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Labial Frenulum and Breastfeeding. Journal of Human Lactation.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
  relatedConcernSlugs: ['newborn-tongue-tie-feeding-issues', 'newborn-not-latching-at-all', 'newborn-high-palate'],
};
