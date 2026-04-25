import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-using-pincer-grasp',
  title: 'My Baby Isn\'t Using a Pincer Grasp',
  category: 'physical',
  searchTerms: [
    'baby not using pincer grasp',
    'baby can\'t pick up small things',
    'when do babies use thumb and finger',
    'baby not picking up cheerios',
    'baby still raking food',
    'pincer grasp milestone',
    'baby not using fingers to pick up',
    'baby can\'t pick up puffs',
    'when should baby use pincer grasp',
    'baby only uses whole hand to grab',
  ],
  quickAnswer:
    'The pincer grasp  -  using the thumb and index finger to pick up small objects  -  typically develops between 8 and 12 months. Before this, babies use a raking or whole-hand grasp, which is completely normal and age-appropriate. This is a fine motor skill that refines gradually, so you\'ll see a progression from scooping to a crude pinch to a neat thumb-and-fingertip grasp.',
  byAge: [
    {
      ageRange: '5-7 months',
      context:
        'Babies at this age use a palmar or raking grasp  -  they scoop things up with their whole hand. This is exactly what they should be doing. The pincer grasp requires brain maturation and hand coordination that simply isn\'t there yet. Let your baby practice by offering larger, easy-to-grasp objects.',
    },
    {
      ageRange: '8-9 months',
      context:
        'Many babies begin developing an "inferior" pincer grasp around this age  -  they might use the pads of their thumb and fingers rather than the fingertips. You\'ll see them start to isolate individual fingers and poke at small objects. This is an exciting precursor to the full pincer grasp and shows the skill is developing.',
    },
    {
      ageRange: '10-12 months',
      context:
        'Most babies develop a neat pincer grasp (using thumb and index fingertip) by 12 months. If your baby is picking up small items between thumb and any finger, they\'re doing well. Practice with soft, safe finger foods like small pieces of banana or baby puffs  -  mealtime is the best pincer grasp practice there is.',
    },
    {
      ageRange: '13-15 months',
      context:
        'If your toddler still isn\'t using any kind of pincer grasp and relies only on a whole-hand rake to pick things up, it\'s worth mentioning to your pediatrician. A fine motor delay at this age is often very responsive to occupational therapy, and a therapist can suggest fun activities to build the specific hand muscles and coordination involved.',
    },
  ],
  whenNormal: [
    'Your baby is under 9 months and uses a whole-hand or raking grasp  -  the pincer grasp hasn\'t developed yet and isn\'t expected.',
    'Your baby uses a "crude" pincer grasp (thumb and side of index finger) rather than a neat fingertip pinch  -  this is an earlier stage that refines with practice.',
    'Your baby uses a pincer grasp sometimes but not consistently  -  the skill is emerging and will become more reliable.',
    'Your baby can pick up larger items with precision but struggles with very small objects  -  they\'re still refining.',
    'Your baby was premature  -  use their adjusted age for fine motor milestone expectations.',
  ],
  whenToMention: [
    'Your baby is over 12 months and still only uses a raking or whole-hand grasp with no sign of finger isolation.',
    'Your baby doesn\'t seem to notice or try to pick up small objects like crumbs or puffs.',
    'Your baby has difficulty releasing objects once they\'ve grasped them.',
    'Your baby\'s hands seem fisted much of the time after 4 months of age.',
  ],
  whenToActNow: [
    'Your baby had a pincer grasp and has lost the ability to use it  -  loss of fine motor skills warrants prompt evaluation.',
    'Your baby consistently uses only one hand while the other stays fisted or seems weak, especially before 18 months.',
    'Your baby shows no interest in grasping or holding objects at all by 6 months.',
  ],
  relatedMilestones: [
    'fine-motor-raking-grasp',
    'fine-motor-pincer-grasp',
    'fine-motor-self-feeding',
    'fine-motor-object-manipulation',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones: Your Child By 9 Months and 12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Hand and Finger Skills: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-8-to-12-Months.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization  -  Child Growth Standards: Motor Development Milestones',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
  ],
};
