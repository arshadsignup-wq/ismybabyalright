import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-walking-wide-gait',
  title: 'My Baby Walks with a Wide Stance',
  category: 'physical',
  searchTerms: [
    'baby walking wide gait',
    'baby walks with legs apart',
    'toddler wide stance walking',
    'baby wide legged walk',
    'baby waddling when walking',
    'toddler walks like a duck',
    'wide gait normal baby',
    'when does baby gait narrow',
    'baby walks bowlegged',
    'toddler walks with feet far apart',
  ],
  quickAnswer:
    'A wide-based gait (walking with feet wide apart) is completely normal for new walkers. Babies use a wide stance for balance, just as adults would on a rocking boat. Most toddlers naturally narrow their gait by age 2-3 as their balance and coordination improve.',
  byAge: [
    {
      ageRange: '10-14 months',
      context:
        'A wide-based gait is universal in new walkers. Your baby\'s legs spread wide to create a stable base of support, which helps prevent falls. This is a normal and expected part of early walking. Combined with the high guard arm position, it is how all babies start walking.',
    },
    {
      ageRange: '14-18 months',
      context:
        'Your toddler\'s gait should be gradually narrowing as their balance improves. However, many toddlers still walk with a noticeably wider stance than adults at this age. If your child is getting steadier on their feet and falling less, their gait is maturing normally, even if it still looks wide.',
    },
    {
      ageRange: '18-24 months',
      context:
        'By 18 months, most toddlers have a somewhat narrower gait, though it is still wider than an older child\'s. Your child should be walking with increasing confidence and may be starting to run. If the wide gait has not narrowed at all since they started walking, mention it at your next well visit.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, most children have developed a more mature walking pattern with a narrower base. If your child still walks with a very wide gait and seems unsteady, your pediatrician may want to evaluate their balance, hip alignment, and muscle tone. Some children with persistent wide gait benefit from a physical therapy assessment.',
    },
  ],
  whenNormal: [
    'Your baby is a new walker and uses a wide stance for balance.',
    'Your baby\'s gait is gradually narrowing over weeks and months.',
    'Your toddler walks well and falls infrequently despite the wide stance.',
    'Your baby was premature and is still catching up on motor milestones.',
  ],
  whenToMention: [
    'Your child has been walking for more than 6 months with no narrowing of their gait.',
    'Your child seems to have persistent balance difficulties alongside the wide gait.',
    'Your child walks with a waddling pattern that does not improve.',
  ],
  whenToActNow: [
    'Your child\'s gait has suddenly widened after previously walking with a narrower stance.',
    'Your child appears to have hip pain, limping, or difficulty with one leg alongside the wide gait.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-walking-with-arms-up', 'frequent-falling', 'bowlegged-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Baby\'s First Steps',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Steps.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Sutherland DH. The Development of Mature Gait. Gait & Posture. 1997;6(2):163-170',
      url: 'https://pubmed.ncbi.nlm.nih.gov/9243040/',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 2 Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
