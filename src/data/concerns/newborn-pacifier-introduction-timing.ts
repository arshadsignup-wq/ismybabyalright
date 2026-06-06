import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-pacifier-introduction-timing',
  title: 'When to Introduce a Pacifier',
  category: 'medical',
  searchTerms: ['when to give pacifier newborn', 'pacifier breastfeeding interference', 'pacifier for baby sleep', 'nipple confusion pacifier', 'pacifier SIDS reduction', 'introducing pacifier timing', 'best time to start pacifier', 'pacifier pros cons baby', 'should I give baby pacifier', 'pacifier and breastfeeding'],
  quickAnswer: 'Pacifiers can be introduced once breastfeeding is well established, typically around 3-4 weeks. For formula-fed babies, a pacifier can be offered from birth. Pacifier use during sleep has been shown to reduce the risk of SIDS. Never force a pacifier on a baby who does not want it.',
  byAge: [
    { ageRange: '0-1 month', context: 'If breastfeeding, the AAP suggests waiting until breastfeeding is well established (usually 3-4 weeks) before introducing a pacifier, to avoid interfering with latch and milk supply. However, recent research suggests that pacifier use may not significantly affect breastfeeding in motivated mothers. For formula-fed babies, a pacifier can be offered at any time. The AAP recommends offering a pacifier at nap time and bedtime because it has been associated with a reduced risk of SIDS. If the pacifier falls out during sleep, you do not need to replace it. Never attach a pacifier to a string or clip during sleep. Never coat it in sugar or honey.' },
    { ageRange: '1-3 months', context: 'This is often the sweet spot for introducing a pacifier if you have not already. If baby is breastfeeding well, offering a pacifier for sleep and soothing is reasonable. Some babies take to pacifiers immediately; others never accept one. Do not force it. Try different shapes (orthodontic, round) to find one your baby prefers. Sucking is a natural soothing behavior for babies.' },
    { ageRange: '3-6 months', context: 'Pacifier use is well established if baby has accepted one. Continue offering at sleep times. If baby has never taken a pacifier, it may be harder to introduce at this age. Begin thinking about not introducing a pacifier if baby has not used one, as breaking the habit later can be challenging.' },
    { ageRange: '6-12 months', context: 'Pacifier use can continue for sleep and comfort. The AAP recommends beginning to wean off the pacifier after 6 months to reduce the risk of ear infections and dental issues. Most experts recommend stopping pacifier use by age 2 to avoid dental alignment problems.' },
  ],
  whenNormal: ['Baby uses the pacifier to self-soothe and falls asleep with it', 'Pacifier falls out during sleep and baby continues sleeping', 'Baby rejects the pacifier: not all babies want one and that is completely fine', 'Baby seems to prefer sucking on fingers instead'],
  whenToMention: ['You are concerned about pacifier use affecting breastfeeding', 'Baby seems overly dependent on the pacifier and cannot settle without it', 'You notice recurring ear infections and want to discuss pacifier use'],
  whenToActNow: ['Baby has a pacifier with a cracked, torn, or damaged nipple that could pose a choking hazard', 'Baby has swallowed part of a pacifier'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pacifiers: Satisfying Your Baby\'s Needs. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Pacifiers-Satisfying-Your-Babys-Needs.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. SIDS and Other Sleep-Related Infant Deaths. Pediatrics. 2022.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022' },
  ],
  relatedConcernSlugs: ['newborn-safe-sleep-positioning', 'breastfeeding-latch-pain', 'newborn-sucking-reflex-weak'],
};
