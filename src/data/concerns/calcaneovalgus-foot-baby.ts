import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'calcaneovalgus-foot-baby',
  title: 'Calcaneovalgus Foot (Foot Bent Up at Birth)',
  category: 'medical',
  searchTerms: [
    'baby foot bent up toward shin',
    'calcaneovalgus foot newborn',
    'baby foot dorsiflexed at birth',
    'newborn foot touching shin',
    'positional foot deformity baby',
    'baby foot bent upward',
    'flexible foot deformity newborn',
    'baby foot bent backwards',
    'calcaneovalgus stretching exercises',
    'newborn foot turned up outward',
  ],
  quickAnswer:
    'Calcaneovalgus foot is a very common, benign positional foot deformity noticed at birth in which the baby\'s foot bends upward (dorsiflexed) toward the front of the shin. It is caused by the foot being compressed in this position during pregnancy. The key feature is that the foot is flexible and can be gently moved to a normal position. Almost all cases resolve completely on their own within weeks to months with simple stretching exercises. It is important to distinguish this from vertical talus, a rigid deformity that requires treatment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Calcaneovalgus foot is noticed immediately at birth. The foot appears bent upward so that the top of the foot touches or nearly touches the front of the shin. It may look alarming, but the critical distinction is flexibility: when you gently push the foot downward into a normal position, it moves easily without resistance. Your pediatrician may show you gentle stretching exercises, holding the foot in a corrected (plantarflexed) position for a few seconds, repeated several times during each diaper change. Most cases show significant improvement within the first few weeks of life.',
    },
    {
      ageRange: '3-12 months',
      context:
        'By this age, the vast majority of calcaneovalgus feet have resolved completely with normal foot position and full range of motion. If your baby\'s foot has not improved by 3-6 months, your pediatrician may want to take a closer look to ensure the condition is truly calcaneovalgus and not a more rigid deformity such as vertical talus or posteromedial bowing of the tibia. Rarely, a foot-ankle orthosis or referral to a pediatric orthopedist may be recommended for persistent cases.',
    },
    {
      ageRange: '1-3 years',
      context:
        'It would be unusual for a true calcaneovalgus foot to persist into toddlerhood. By the time your child is walking, the foot should have completely normalized. If a foot deformity persists, your pediatrician should evaluate whether a different diagnosis is present. Children who had calcaneovalgus at birth have no long-term foot or ankle problems and require no activity restrictions.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Children who had calcaneovalgus at birth have normal foot development, arch formation, and gait by this age. No ongoing treatment, monitoring, or restriction is needed. If your child has flat feet or foot pain at this age, it is unrelated to the newborn calcaneovalgus and should be evaluated on its own merits.',
    },
  ],
  whenNormal: [
    'Your newborn\'s foot bends upward toward the shin but can be gently and easily moved to a normal position (this flexibility confirms calcaneovalgus rather than a rigid deformity)',
    'Both feet have similar range of motion and your baby does not seem bothered when the foot is moved',
    'The upward bending of the foot is improving with gentle stretching exercises over the first few weeks',
    'Your baby\'s foot has returned to normal position by 2-3 months of age with or without stretching',
  ],
  whenToMention: [
    'Your baby\'s foot does not move easily to a normal position when you gently push it down, suggesting the deformity may be rigid rather than positional',
    'The foot has not improved by 3 months despite regular gentle stretching exercises',
    'You notice the sole of the foot has a convex or rounded "rocker bottom" appearance, which may indicate vertical talus rather than calcaneovalgus',
  ],
  whenToActNow: [
    'Your newborn has a rigid foot deformity that cannot be passively corrected, combined with other physical findings such as unusual body tone, multiple joint contractures, or signs of a genetic syndrome, requiring comprehensive evaluation',
    'Your baby\'s foot or ankle develops sudden swelling, redness, or warmth, which could indicate an infection or other acute condition unrelated to calcaneovalgus',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['flat-feet', 'clubfoot-baby'],
  sources: [
    {
      org: 'OrthoInfo',
      citation:
        'American Academy of Orthopaedic Surgeons. Common Foot Problems in Children. OrthoInfo, 2022.',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/common-toe-and-forefoot-problems/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feet and Foot Problems. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Common-Leg-and-Foot-Problems.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Calcaneovalgus. StatPearls, NCBI Bookshelf, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK560665/',
    },
  ],
};
