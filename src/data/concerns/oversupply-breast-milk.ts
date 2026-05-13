import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'oversupply-breast-milk',
  title: 'Breast Milk Oversupply',
  category: 'feeding',
  searchTerms: [
    'breast milk oversupply',
    'too much breast milk',
    'overproduction of milk',
    'engorged breasts too much milk',
    'hyperlactation',
    'baby choking too much milk',
    'forceful letdown oversupply',
    'foremilk hindmilk imbalance',
  ],
  quickAnswer:
    'Breast milk oversupply means your body produces more milk than your baby needs, which can cause engorgement, plugged ducts, and a forceful letdown that makes feeding difficult for your baby. While it may sound like a good problem to have, oversupply can be genuinely uncomfortable and frustrating. With the right strategies such as block feeding and avoiding unnecessary pumping, most cases can be managed effectively.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Oversupply is extremely common in the early weeks as your body is still calibrating how much milk to produce. Many mothers experience engorgement, leaking, and a forceful letdown during this time. It is important not to pump excessively to relieve discomfort, as this signals your body to make even more milk. Hand expressing just enough to soften the breast before latching is a better approach.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, milk supply typically begins to regulate for most mothers. If you are still experiencing significant oversupply, block feeding (nursing from only one breast per feeding session) can help signal your body to produce less. Your baby may also be better able to handle the flow at this stage as their swallowing coordination has matured.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Persistent oversupply at this stage is less common. As your baby starts solids and nursing sessions may naturally space out, supply often decreases on its own. If oversupply continues to cause problems, consult a lactation consultant to rule out hormonal factors and develop a personalized reduction plan.',
    },
  ],
  whenNormal: [
    'You experience engorgement and leaking in the first few weeks postpartum as your supply is establishing',
    'Your baby occasionally coughs or sputters at the beginning of a feeding when the letdown is strongest',
    'You can pump a large volume of milk but your baby is gaining weight well and seems satisfied after feeds',
    'One breast produces noticeably more milk than the other',
  ],
  whenToMention: [
    'Your baby is consistently choking, gagging, or pulling off the breast due to forceful letdown',
    'Your baby has frequent green, frothy stools that may indicate a foremilk-hindmilk imbalance',
    'You are getting recurrent plugged ducts or mastitis from the engorgement',
    'Oversupply is causing significant discomfort or emotional distress despite home management strategies',
  ],
  whenToActNow: [
    'You develop symptoms of mastitis including fever, chills, and a red, hot, painful area on your breast',
    'Your baby is not gaining weight appropriately despite the high volume of milk available',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Oversupply: Too Much Milk.',
      url: 'https://llli.org/breastfeeding-info/oversupply/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding recommendations.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};
