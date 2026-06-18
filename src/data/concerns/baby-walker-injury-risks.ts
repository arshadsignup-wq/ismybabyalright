import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-walker-injury-risks',
  title: 'Are Baby Walkers Safe? Injury Risks',
  category: 'medical',
  searchTerms: [
    'baby walker dangerous',
    'baby walker safety',
    'baby walker stairs fall',
    'AAP baby walker recommendation',
    'baby walker injuries',
    'should I use a baby walker',
    'baby walker banned',
    'baby walker alternative',
    'baby walker stove burn risk',
    'stationary activity center vs walker',
  ],
  quickAnswer:
    'The American Academy of Pediatrics recommends against using baby walkers with wheels. They cause thousands of injuries each year, primarily from stair falls, and give babies access to dangers they could not otherwise reach — like hot stoves, pools, and sharp objects. Stationary activity centers (exersaucers) are a much safer alternative that still let your baby bounce, play, and develop leg strength.',
  byAge: [
    {
      ageRange: '4-8 months',
      context:
        'This is the age when parents commonly consider walkers. However, baby walkers do not help babies learn to walk faster — research shows they may actually delay walking by preventing babies from seeing their feet and developing proper balance. A baby in a walker can move up to 4 feet per second, faster than a parent can react. Stair falls in walkers can cause skull fractures and serious head injuries.',
    },
    {
      ageRange: '8-15 months',
      context:
        'Mobile babies in walkers are at the highest risk for injuries. They can reach counter-height items including hot pots, coffee mugs, sharp knives, and poisonous substances that would normally be out of reach. Walker-related injuries include burns, poisonings, drownings (reaching pools or bathtubs), and finger amputations from wheel mechanisms. Stationary activity centers, push toys, or supervised floor play are all safer alternatives.',
    },
  ],
  whenNormal: [
    'Your baby uses a stationary activity center (exersaucer) that does not move across the floor — these are considered safe',
    'Your baby uses a push toy or push walker that requires the baby to walk behind it — these help with walking skills and are safer than seated wheeled walkers',
    'Your baby plays on the floor with age-appropriate toys and has supervised tummy time',
  ],
  whenToMention: [
    'You received a baby walker as a gift and want guidance on whether to use it',
    'You are looking for safe alternatives to help your baby develop leg strength and coordination',
  ],
  whenToActNow: [
    'Your baby fell down stairs in a walker — seek emergency medical care, especially if there is any head injury, loss of consciousness, vomiting, or unusual behavior',
    'Your baby was burned, ingested a toxic substance, or was otherwise injured while in a walker — seek emergency care appropriate to the specific injury',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby Walkers: A Dangerous Choice. Pediatrics, 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/4/e20183110/37498',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby Walkers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Baby-Walkers-A-Dangerous-Choice.aspx',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Baby Walker Safety.',
      url: 'https://www.cpsc.gov/Safety-Education/Neighborhood-Safety-Network/Posters/Baby-Walker-Safety',
    },
  ],
};
