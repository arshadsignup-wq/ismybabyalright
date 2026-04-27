import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-lactose-overload',
  title: 'Baby Lactose Overload - Foremilk Hindmilk Imbalance',
  category: 'digestive',
  searchTerms: ['baby lactose overload','foremilk hindmilk imbalance','baby green frothy poop breastfed','oversupply baby gassy','baby lactose overload symptoms','foremilk overload','baby explosive green poop','breastfed baby excessive gas','baby fussy gassy breastfed','too much foremilk baby','lactose overload vs intolerance baby','block feeding for oversupply'],
  quickAnswer: 'Lactose overload occurs when a breastfed baby gets a large volume of lower-fat foremilk that moves through the gut quickly, delivering more lactose than the baby can digest at once. This causes gas, fussiness, explosive green frothy stools, and discomfort. It is often associated with maternal oversupply. This is different from lactose intolerance, which is extremely rare in babies. Lactose overload typically responds to feeding management - finishing one breast before switching, block feeding, and laid-back nursing positions.',
  byAge: [
    { ageRange: '0-6 weeks', context: 'Milk supply is establishing and many mothers have temporary oversupply in the early weeks. Signs of lactose overload include: green, frothy, or explosive stools; excessive gas and bloating; fussiness during or after feeds; good weight gain (often very fast gain); and baby pulling off the breast during letdown. The green stool occurs because the milk moves through the gut too quickly. Try finishing one breast completely before offering the other, and nurse on the same breast for 2-3 hours before switching.' },
    { ageRange: '6 weeks - 3 months', context: 'If symptoms persist after 6 weeks, your oversupply may need more active management. Block feeding (nursing from only one breast for a set period of 3-4 hours before switching) can reduce supply and ensure your baby gets more of the higher-fat hindmilk from each breast. Do not pump the unused breast unless you are very uncomfortable - pumping stimulates more production. Feeding in a laid-back or side-lying position can slow flow and help your baby manage the letdown better.' },
    { ageRange: '3-6 months', context: 'Many cases of oversupply naturally regulate by 3-4 months. If lactose overload symptoms are continuing, work with a lactation consultant to evaluate latch, positioning, and feeding patterns. Sometimes what looks like lactose overload is actually related to a food sensitivity (cow\'s milk protein in mother\'s diet is the most common). If symptoms persist despite feeding management, your pediatrician may suggest a temporary maternal dairy elimination trial to rule out milk protein sensitivity.' },
    { ageRange: '6-12 months', context: 'As solids are introduced and breastfeeding frequency decreases, lactose overload typically resolves. If your baby continues to have green frothy stools and excessive gas, the cause may be something other than foremilk-hindmilk imbalance. True lactose intolerance (congenital) is extremely rare in babies - most babies produce abundant lactase. Secondary (temporary) lactose intolerance can occur after a stomach bug when the gut lining is damaged and needs time to heal.' },
  ],
  whenNormal: ['Occasional green stools in a breastfed baby who is otherwise happy and gaining weight well','Brief fussiness during fast letdown that resolves quickly','Gassy periods that improve with feeding management changes','Symptoms that resolve by 3-4 months as supply regulates'],
  whenToMention: ['Persistent green frothy stools despite feeding management for 2+ weeks','Your baby seems in pain (drawing up legs, screaming) after most feeds','Excessive weight gain alongside severe fussiness','You are struggling with oversupply and need lactation support'],
  whenToActNow: ['Blood in your baby\'s stool - this is more suggestive of cow\'s milk protein allergy than lactose overload','Your baby is not gaining weight or is losing weight','Your baby is refusing to feed or seems very distressed with every feed'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-lactose-intolerance-signs','baby-vomiting-no-fever','toddler-chronic-diarrhea'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics. 2022.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Policy-Statement-Breastfeeding-and-the-Use-of' },
    { org: 'NIH', citation: 'Woolridge M, Fisher C. Colic, Overfeeding, and Symptoms of Lactose Malabsorption in the Breast-Fed Baby. Lancet. 1988.', url: 'https://pubmed.ncbi.nlm.nih.gov/2900273/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Lactose Intolerance in Infants and Children. Pediatrics. 2006.', url: 'https://publications.aap.org/pediatrics/article/118/3/1279/69515/Lactose-Intolerance-in-Infants-Children-and' },
  ],
};
