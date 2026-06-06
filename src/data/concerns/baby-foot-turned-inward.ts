import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-foot-turned-inward',
  title: 'My Baby\'s Foot Turns Inward',
  category: 'physical',
  searchTerms: ['baby foot turned inward', 'metatarsus adductus', 'baby curved foot', 'baby foot bends inward', 'baby c-shaped foot', 'baby foot intoeing', 'baby foot deformity inward', 'baby foot curving', 'baby bean-shaped foot', 'metatarsus adductus baby'],
  quickAnswer: 'Metatarsus adductus (foot that curves inward) is common, affecting about 1 in 1,000 babies. Most cases are positional from womb positioning and resolve on their own by age 1 without treatment. More rigid cases may benefit from stretching exercises or, rarely, casting. Your pediatrician can assess the flexibility of the foot.',
  byAge: [
    { ageRange: '0-3 months', context: 'Metatarsus adductus noted at birth is usually positional. If the foot can be gently straightened (flexible), it will likely resolve on its own. Your pediatrician may show you gentle stretching exercises to do during diaper changes.' },
    { ageRange: '3-6 months', context: 'The foot should be gradually straightening. If the curve is not improving or the foot is rigid (cannot be straightened with gentle pressure), your pediatrician may refer to a pediatric orthopedist.' },
    { ageRange: '6-12 months', context: 'Most flexible cases have resolved by now. If the foot is still curved, evaluation may include consideration of serial casting or special shoes. Rigid metatarsus adductus responds well to treatment when started early.' },
    { ageRange: '12-24 months', context: 'If the foot is still significantly curved, treatment is recommended before walking patterns become established. Your pediatric orthopedist can guide the best approach.' },
  ],
  whenNormal: ['The foot can be gently straightened (flexible type).', 'The curvature is improving over months.', 'Your baby moves both feet equally.', 'The foot was noted at birth and is gradually resolving.'],
  whenToMention: ['The foot cannot be gently straightened (rigid type).', 'The curvature is not improving by 3-4 months.', 'Both feet are affected.'],
  whenToActNow: ['The foot seems painful or swollen.', 'New foot deformity appearing after birth.'],
  relatedMilestones: ['gross-motor-standing', 'gross-motor-walking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['pigeon-toed', 'baby-foot-turned-outward', 'baby-flat-feet-normal'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Metatarsus Adductus', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx' },
    { org: 'NIH', citation: 'Bleck EE. Metatarsus Adductus: Classification and Relationship to Outcomes. J Pediatr Orthop. 1983;3(1)', url: 'https://pubmed.ncbi.nlm.nih.gov/6841016/' },
    { org: 'CDC', citation: 'CDC - Birth Defects', url: 'https://www.cdc.gov/ncbddd/birthdefects/index.html' },
  ],
};
