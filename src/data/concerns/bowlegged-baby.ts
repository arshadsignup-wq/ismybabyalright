import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'bowlegged-baby',
  title: 'My Baby Looks Bowlegged',
  category: 'physical',
  searchTerms: [
    'baby bowlegged',
    'newborn legs curved',
    'baby legs bowed outward',
    'bowlegged toddler',
    'will baby grow out of bowlegs',
    'when do babies legs straighten',
    'baby curved legs normal',
    'infant bowlegs',
  ],
  quickAnswer:
    'Almost all babies are born with bowlegs because of how they were curled up in the womb. This is completely normal and usually corrects itself by age 2-3 as your child grows and starts walking. True bowleggedness that needs treatment is rare and usually only a concern if it\'s severe, gets worse over time, or affects just one leg.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'All babies have bowlegs at this age  -  it\'s the natural result of being curled up in a tight space for nine months. Your baby\'s legs will look curved outward when you hold them upright or during diaper changes. This is expected and nothing to worry about. As your baby grows and their bones develop, the legs will gradually begin to straighten.',
    },
    {
      ageRange: '7-18 months',
      context:
        'Bowlegs are still very common and normal at this age, even after your baby starts standing and walking. The weight-bearing that comes with walking actually helps the legs straighten over time. You might notice the bowing more once your baby is upright, but as long as both legs are equally bowed and your baby walks without pain or limping, this is typical development.',
    },
    {
      ageRange: '19 months - 3 years',
      context:
        'Most children\'s legs straighten out by age 2-3. In fact, many kids go through a phase of being slightly knock-kneed (knees touch when standing) around age 3-4 before their legs finally align normally. If your toddler\'s bowlegs seem severe, are getting worse instead of better, or only affect one leg, mention it to your pediatrician.',
    },
    {
      ageRange: '3+ years',
      context:
        'If your child is over 3 and still has pronounced bowlegs, especially if they\'re asymmetric (one leg more bowed than the other) or seem to be worsening, it\'s worth having your pediatrician evaluate them. In rare cases, persistent bowlegs can be related to conditions like rickets or Blount\'s disease, both of which are treatable.',
    },
  ],
  whenNormal: [
    'Your baby is under 2 years old and both legs are equally bowed.',
    'The bowing is gradually improving as your child grows and becomes more active.',
    'Your child walks comfortably without limping, pain, or favoring one side.',
    'The bowlegs were present from birth and haven\'t gotten noticeably worse.',
  ],
  whenToMention: [
    'Your child is over 2½ years old and still has very pronounced bowlegs.',
    'One leg is significantly more bowed than the other.',
    'The bowing seems to be getting worse as your child grows, rather than improving.',
    'Your child limps, complains of leg pain, or seems reluctant to walk or run.',
  ],
  whenToActNow: [
    'Sudden onset of bowlegs in a child who previously had straight legs  -  this is unusual and needs evaluation.',
    'Bowlegs accompanied by bone pain, inability to bear weight, or signs of illness (fever, fatigue, poor growth).',
  ],
  relatedMilestones: [
    'gross-motor-standing',
    'gross-motor-walking',
    'gross-motor-running',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Common Leg and Foot Problems: Bowlegs and Knock-Knees',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Common-Leg-and-Foot-Problems.aspx',
    },
    {
      org: 'AAOS',
      citation:
        'American Academy of Orthopaedic Surgeons  -  Bowlegs (Genu Varum) in Children',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/bowlegs-genu-varum/',
    },
    {
      org: 'Boston Children\'s Hospital',
      citation:
        'Boston Children\'s Hospital  -  Bowlegs: When to Worry',
      url: 'https://www.childrenshospital.org/conditions/bowlegs',
    },
  ],
};
