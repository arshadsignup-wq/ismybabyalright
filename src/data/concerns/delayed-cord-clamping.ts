import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'delayed-cord-clamping',
  title: 'Delayed Cord Clamping Benefits',
  category: 'maternal',
  searchTerms: ['delayed cord clamping', 'when to cut umbilical cord', 'cord clamping timing', 'delayed cord clamping benefits', 'umbilical cord clamping', 'cord blood transfer baby', 'optimal cord clamping', 'DCC birth', 'wait to cut cord', 'cord clamping iron baby'],
  quickAnswer: 'Delayed cord clamping (waiting at least 30-60 seconds after birth before clamping the umbilical cord) is now recommended by ACOG for most births. It allows additional blood to transfer from the placenta to the baby, increasing iron stores by 30-50%, improving hemoglobin levels, and reducing the risk of iron deficiency in the first year of life.',
  byAge: [
    { ageRange: 'Third trimester', context: 'Include your preference for delayed cord clamping in your birth plan. Discuss it with your provider, as it is now standard practice at most hospitals. Delayed cord clamping is compatible with immediate skin-to-skin contact and does not interfere with cord blood collection for public banking in most cases.' },
    { ageRange: 'Labor & delivery', context: 'After birth, the cord continues to pulse and transfer blood to the baby for 1-3 minutes. Waiting at least 30-60 seconds (and up to 1-5 minutes when possible) provides significant benefits. The baby can be placed on the birthing parent\'s chest during this time. In situations requiring immediate neonatal resuscitation, the medical team will prioritize baby\'s safety.' },
  ],
  whenNormal: ['Wanting delayed cord clamping as part of your birth plan', 'The cord continuing to pulse for a few minutes after birth', 'Baby receiving delayed cord clamping and appearing slightly more pink or ruddy than expected'],
  whenToMention: ['You want to ensure delayed cord clamping is included in your care', 'You also want to do cord blood banking and need to discuss compatibility', 'You have questions about whether delayed cord clamping is appropriate for your situation'],
  whenToActNow: ['If your baby needs immediate medical attention at birth, the medical team may need to clamp and cut the cord sooner - this is appropriate and prioritizes your baby\'s health'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Delayed Umbilical Cord Clamping After Birth. ACOG Committee Opinion No. 814, 2020.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/12/delayed-umbilical-cord-clamping-after-birth' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Delayed Cord Clamping. Pediatrics, 2017.', url: 'https://publications.aap.org/pediatrics/article/139/6/e20170957/53434' },
    { org: 'WHO', citation: 'World Health Organization. Optimal Timing of Cord Clamping. WHO, 2014.', url: 'https://www.who.int/publications/i/item/WHO-RHR-14.19' },
  ],
  relatedConcernSlugs: ['cord-blood-banking-decisions', 'skin-to-skin-after-birth-concerns'],
};
