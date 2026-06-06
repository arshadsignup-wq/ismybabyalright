import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-swimming-readiness-skills',
  title: 'Is My Toddler Ready for Swim Lessons?',
  category: 'physical',
  searchTerms: ['toddler swimming readiness', 'toddler swim lessons age', 'when can toddler swim', 'baby swim lessons', 'toddler water safety', 'infant swimming', 'toddler afraid of water', 'toddler pool safety', 'when to start swim lessons', 'toddler water readiness'],
  quickAnswer: 'The AAP recommends swim lessons for most children starting at age 1, as evidence shows lessons can reduce drowning risk even for toddlers. However, swim lessons do not make a child "drown-proof," and constant adult supervision is always required around water. Parent-child water safety classes are available for babies as young as 6 months. Formal swim instruction is most effective starting around age 4, when children can learn stroke techniques.',
  byAge: [
    { ageRange: '6-12 months', context: 'Parent-child water exploration classes can help your baby become comfortable in water. These classes focus on water familiarization and parent water safety education, not swimming skills. Your baby should never be submerged against their will. Always maintain arm\'s reach contact in water.' },
    { ageRange: '1-2 years', context: 'The AAP supports swim lessons starting at age 1 to reduce drowning risk. Toddler swim programs teach water safety basics: entering and exiting the pool safely, floating on their back, and reaching for the wall. These are survival skills, not swimming proficiency. Constant supervision is still essential.' },
    { ageRange: '2-3 years', context: 'Many toddlers can learn to float, kick, and move short distances in the water with instruction. Programs at this age focus on water comfort, basic safety skills, and fun. Some children are fearful of water, and gentle, patient introduction is important. Never force a reluctant child into the water.' },
    { ageRange: '3-5 years', context: 'Children can begin learning basic swimming strokes and more advanced water safety skills. By age 4, most children have the coordination and cognitive ability to follow swim instruction effectively. Even children who can swim should never be unsupervised around water.' },
  ],
  whenNormal: ['Your toddler is cautious around water.', 'Your child clings to you in the pool.', 'Your 2-year-old cannot swim independently.', 'Your child needs time to warm up to water activities.'],
  whenToMention: ['Your child has extreme fear of water that does not improve with gentle exposure.', 'Your child has persistent ear infections that affect water activities.', 'Your child has balance or coordination concerns that affect water safety.'],
  whenToActNow: ['Your child has had a near-drowning incident.', 'Your child develops breathing difficulty during or after water exposure.', 'Your child has a seizure disorder that is not well controlled (affects water safety planning).'],
  relatedMilestones: ['gross-motor-walking', 'gross-motor-kicking'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-sports-readiness', 'toddler-playground-fear'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Swim Lessons Recommended for Most Children by Age 1. 2019', url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Swim-Lessons.aspx' },
    { org: 'NIH', citation: 'Brenner RA, et al. Association Between Swimming Lessons and Drowning in Childhood. Arch Pediatr Adolesc Med. 2009;163(3):203-210', url: 'https://pubmed.ncbi.nlm.nih.gov/19255386/' },
    { org: 'CDC', citation: 'CDC - Water Safety Tips', url: 'https://www.cdc.gov/drowning/prevention/index.html' },
  ],
};
