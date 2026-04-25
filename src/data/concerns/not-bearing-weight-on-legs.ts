import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-bearing-weight-on-legs',
  title: 'My Baby Isn\'t Bearing Weight on Their Legs',
  category: 'physical',
  searchTerms: [
    'baby not bearing weight on legs',
    'baby won\'t stand on legs',
    'baby legs collapse when standing',
    'baby won\'t put weight on feet',
    'baby doesn\'t push down with legs',
    'baby legs buckle when held standing',
    'when should baby bear weight on legs',
    'baby not standing when held up',
    'baby legs give out',
    'baby refuses to stand',
  ],
  quickAnswer:
    'Most babies begin to enjoy bearing weight on their legs when you hold them in a standing position by around 4 to 6 months. By 9 months, babies should be able to support their weight on their legs with you providing balance support. If your baby\'s legs consistently buckle or they show no interest in pushing down, it\'s worth discussing with your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have a stepping reflex where they\'ll make walking motions if held upright, but this disappears around 2 months. After that, it\'s completely normal for babies to not support their weight yet. Their leg muscles and the neural pathways controlling them are still maturing. Don\'t worry if your young baby\'s legs seem "floppy" at this stage.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Many babies start to enjoy "standing" on your lap around this time, pushing down with their legs and bouncing. If your baby isn\'t doing this yet, it doesn\'t necessarily indicate a problem  -  some babies simply aren\'t interested in this position yet and are focused on other skills like reaching and rolling. But if they seem unable to push down at all, mention it to your doctor.',
    },
    {
      ageRange: '7-9 months',
      context:
        'By this age, most babies enjoy bearing weight on their legs and may bounce enthusiastically when held standing. If your baby\'s legs still buckle every time or they pull their legs up and refuse to put them down, your pediatrician should take a look. They\'ll check muscle tone, hip joints, and reflexes to make sure everything is developing properly.',
    },
    {
      ageRange: '10-12 months',
      context:
        'Babies should be bearing weight well on their legs by now and many are pulling to stand. If your baby still can\'t support their weight on their legs, this warrants evaluation. A pediatric physical therapist can assess strength, tone, and coordination and create a plan to help your baby build the skills they need for standing and eventually walking.',
    },
  ],
  whenNormal: [
    'Your baby is under 5 months and doesn\'t push down when held standing  -  leg strength is still developing.',
    'Your baby bears weight briefly but then lifts their legs  -  they may just prefer other positions right now.',
    'Your baby bears weight when motivated (like bouncing to music) but not when you try to "make" them stand  -  they\'re choosy, not delayed.',
    'Your baby was premature  -  adjusted age matters significantly for weight-bearing milestones.',
  ],
  whenToMention: [
    'Your baby is over 6 months and consistently can\'t push down or bear any weight on their legs when held in a standing position.',
    'Your baby\'s legs seem unusually stiff OR unusually floppy when you hold them upright.',
    'Your baby bears weight but only on one leg, keeping the other lifted or turned in.',
    'Your baby is over 9 months and shows no interest in standing activities at all.',
  ],
  whenToActNow: [
    'Your baby was bearing weight on their legs and has stopped  -  loss of this ability needs immediate evaluation.',
    'Your baby\'s legs cross or scissor when held standing, which can indicate increased muscle tone requiring assessment.',
    'Your baby has no weight-bearing ability combined with generally low muscle tone, feeding difficulties, or other developmental concerns.',
  ],
  relatedMilestones: [
    'gross-motor-standing',
    'gross-motor-pulling-to-stand',
    'gross-motor-bouncing',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones: Your Child By 6 Months and 9 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Movement Milestones: Birth to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Hypotonia in Infants',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/bones-joints-muscles/Pages/Hypotonia.aspx',
    },
  ],
};
