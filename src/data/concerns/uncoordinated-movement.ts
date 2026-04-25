import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'uncoordinated-movement',
  title: 'My Baby\'s Movements Seem Uncoordinated',
  category: 'physical',
  searchTerms: [
    'baby uncoordinated movements',
    'baby clumsy',
    'baby awkward movements',
    'infant poor coordination',
    'baby can\'t control movements',
    'baby movements not smooth',
    'uncoordinated baby',
    'baby motor skills delayed',
  ],
  quickAnswer:
    'All babies start out with uncoordinated movements  -  it takes time for the brain and muscles to learn to work together smoothly. What matters most is that your baby is making progress over time. If movements are becoming smoother and more purposeful as your baby grows, they\'re on the right track, even if they\'re a bit clumsier than other babies their age.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Uncoordinated, almost random-looking movements are completely normal at this age. Your baby is just learning that they have arms and legs, let alone how to control them. You might see lots of flailing, jerky motions, and accidental face-smacking. This is all expected. Over these three months, you should start to see more purposeful movements emerge  -  reaching toward faces, bringing hands together, smoother head turning.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Your baby should be gaining a lot more control now  -  reaching for objects with both hands, bringing toys to their mouth, rolling from tummy to back. Movements should look much more deliberate and less jerky than they did at birth. If your baby\'s movements still seem completely random and uncontrolled, or if one side of the body moves very differently from the other, mention it to your pediatrician.',
    },
    {
      ageRange: '7-12 months',
      context:
        'By this age, most movements should be fairly coordinated  -  your baby can sit without support, transfer toys from hand to hand, crawl or scoot, and maybe pull to stand. Some clumsiness is normal (babies bonk their heads a lot when learning to sit), but overall you should see smooth, controlled movement. If your baby still seems very uncoordinated compared to peers, struggles with basic skills like sitting or picking up objects, or uses one side of the body much more than the other, talk to your doctor.',
    },
    {
      ageRange: '12+ months',
      context:
        'Toddlers learning to walk are naturally clumsy and will fall often. But their arm movements should be fairly smooth, they should be able to pick up small objects with thumb and finger, and they should be making steady progress with walking and climbing. Persistent, significant clumsiness that interferes with play and exploration may benefit from evaluation by a pediatric physical or occupational therapist.',
    },
  ],
  whenNormal: [
    'Your baby is under 4 months and has jerky, uncontrolled movements  -  this is expected as their nervous system develops.',
    'Your baby\'s coordination is improving over time, even if they\'re not as smooth as other babies their age.',
    'Both sides of your baby\'s body move equally  -  even if movements are clumsy, they\'re symmetric.',
    'Your baby is meeting major milestones like rolling, sitting, and reaching, even if they look a bit awkward doing it.',
  ],
  whenToMention: [
    'Your baby is over 6 months and movements still seem completely random and uncontrolled, with no clear progress toward purposeful reaching or grasping.',
    'One side of your baby\'s body is much more coordinated than the other, or your baby always uses one hand and ignores the other.',
    'Your baby seems unable to do things that most peers can do, like bringing hands together, transferring toys, or sitting without support.',
    'Uncoordinated movements are accompanied by other concerns like poor muscle tone, delayed milestones, or lack of eye contact.',
  ],
  whenToActNow: [
    'Your baby was developing normally and suddenly became much more uncoordinated or lost skills they previously had  -  regression is always urgent.',
    'Uncoordinated movements are accompanied by weakness, difficulty breathing, or your baby seems ill.',
    'Your baby\'s movements seem chaotic or out of control, and they can\'t be calmed or comforted.',
  ],
  relatedMilestones: [
    'fine-motor-reaching',
    'gross-motor-rolling',
    'gross-motor-sitting',
    'fine-motor-grasping',
    'gross-motor-crawling',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC  -  Important Milestones: Motor Development',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Movement and Coordination in the First Year',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three  -  Physical Development: What to Expect',
      url: 'https://www.zerotothree.org/resource/your-babys-development-movement-and-physical-development/',
    },
  ],
};
