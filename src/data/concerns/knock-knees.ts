import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'knock-knees',
  title: 'My Toddler Has Knock Knees',
  category: 'physical',
  searchTerms: [
    'toddler knock knees',
    'child knees touch when standing',
    'knock kneed toddler',
    'will knock knees correct themselves',
    'genu valgum toddler',
    'toddler legs turn inward',
    'knees touching child',
    'knock knees normal',
  ],
  quickAnswer:
    'Knock knees (when the knees touch but the ankles don\'t when standing) are completely normal in toddlers and young children, especially between ages 2-5. This is actually a natural stage of leg development that most kids go through after their baby bowlegs straighten out. In the vast majority of cases, knock knees resolve on their own by age 6-7.',
  byAge: [
    {
      ageRange: '2-3 years',
      context:
        'This is the age when knock knees typically appear. Your toddler\'s legs have straightened out from the bowlegged newborn phase and may now be overcorrecting slightly. When your child stands with feet together, you might notice their knees touch but there\'s a gap between their ankles. This is a normal part of skeletal development and usually doesn\'t affect how your child walks or runs.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Knock knees are often most pronounced at this age. It might look dramatic, but as long as your child can walk, run, and play comfortably without pain or tripping, this is still typical. The angle between the legs should start to gradually improve as your child grows. Most pediatricians will simply monitor this at annual check-ups rather than intervene.',
    },
    {
      ageRange: '6-7 years',
      context:
        'By this age, most children\'s legs have straightened into a normal alignment. If your child still has very pronounced knock knees at age 7, especially if they\'re asymmetric (one side worse than the other), your pediatrician may refer you to a pediatric orthopedist to make sure everything is developing properly.',
    },
    {
      ageRange: '8+ years',
      context:
        'Persistent knock knees after age 8 are less common and worth evaluating. In some cases, children who are overweight or have certain growth conditions may have knock knees that don\'t self-correct. An orthopedist can assess whether observation, physical therapy, or rarely, bracing or surgery might be helpful.',
    },
  ],
  whenNormal: [
    'Your child is between 2 and 6 years old and has knock knees that look the same on both sides.',
    'Your child can walk, run, jump, and climb without pain, limping, or frequent falling.',
    'The knock knees appeared gradually as part of normal growth, not suddenly after an injury or illness.',
    'Your child\'s pediatrician has examined them and isn\'t concerned.',
  ],
  whenToMention: [
    'Your child is over 7 years old and still has very pronounced knock knees.',
    'One leg is significantly more knock-kneed than the other.',
    'Your child complains of knee, hip, or ankle pain, or seems to tire easily during physical activity.',
    'Knock knees appeared suddenly or have gotten dramatically worse in a short period of time.',
  ],
  whenToActNow: [
    'Your child has sudden knee pain, swelling, or can\'t bear weight on one or both legs.',
    'Knock knees are accompanied by signs of illness, unusual bruising, or bone pain.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-jumping',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Common Leg and Foot Problems in Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Common-Leg-and-Foot-Problems.aspx',
    },
    {
      org: 'AAOS',
      citation:
        'American Academy of Orthopaedic Surgeons  -  Knock Knees (Genu Valgum) in Children',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/knock-knees-genu-valgum/',
    },
    {
      org: 'Children\'s Hospital of Philadelphia',
      citation:
        'CHOP  -  Knock Knees: Diagnosis and Treatment',
      url: 'https://www.chop.edu/conditions-diseases/knock-knees',
    },
  ],
};
