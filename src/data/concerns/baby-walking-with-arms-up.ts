import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-walking-with-arms-up',
  title: 'My Baby Walks with Arms Up in the Air',
  category: 'physical',
  searchTerms: [
    'baby walking arms up',
    'baby high guard walking',
    'toddler walks with hands up',
    'baby arms raised walking',
    'baby walking like frankenstein',
    'baby keeps arms up when walking',
    'high guard position walking baby',
    'when do babies lower arms walking',
    'baby zombie walking',
    'baby arms up balance walking',
  ],
  quickAnswer:
    'Walking with arms held up high (called the "high guard" position) is completely normal for new walkers. Babies use their raised arms for balance, much like a tightrope walker. As your baby\'s balance and walking skill improve over the coming weeks, their arms will gradually lower to their sides.',
  byAge: [
    {
      ageRange: '10-13 months',
      context:
        'When babies first start walking, they almost always hold their arms up high in the "high guard" position. This is a natural balance strategy. Your baby\'s arms are acting as counterweights to help maintain balance. This is a completely normal part of learning to walk and is actually a sign your baby is developing appropriate balance reactions.',
    },
    {
      ageRange: '13-15 months',
      context:
        'As your baby gets more comfortable walking, you will notice their arms gradually lowering. They may go from a high guard position to a medium guard position, with arms held at about chest height. Some babies transition faster than others, and this depends on how much walking practice they get and their individual development.',
    },
    {
      ageRange: '15-18 months',
      context:
        'Most toddlers have lowered their arms significantly by now and may be starting to swing them while walking. If your child is still walking with arms very high, watch to see if their balance seems otherwise good. Some children simply maintain this position longer. If they can stop, change direction, and squat without falling, their balance is developing well.',
    },
    {
      ageRange: '18-24 months',
      context:
        'By this age, most children walk with their arms at their sides and are developing a more mature walking pattern. If your child still consistently walks with arms raised high, mention it to your pediatrician, as it may indicate ongoing balance challenges that could benefit from physical therapy support.',
    },
  ],
  whenNormal: [
    'Your baby just started walking within the last few months and uses high guard for balance.',
    'Your baby\'s arms are gradually lowering as they gain walking experience.',
    'Your baby can lower their arms when carrying a toy and still walk successfully.',
    'Your baby\'s overall balance is improving even though they still hold their arms up sometimes.',
  ],
  whenToMention: [
    'Your child has been walking for more than 6 months and still consistently walks with arms raised.',
    'Your child seems to have ongoing balance difficulties alongside the arm position.',
    'Your child falls very frequently compared to other children the same age.',
  ],
  whenToActNow: [
    'Your child\'s walking pattern has changed suddenly, including raising arms higher than before.',
    'Your child seems to have weakness or coordination changes along with the arm position.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-walking-wide-gait', 'frequent-falling', 'poor-balance-toddler'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Baby\'s First Steps',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Steps.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 18 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
    {
      org: 'NIH',
      citation:
        'Kubo M, Ulrich B. Early Stage of Walking: Development of Control in Mediolateral and Anteroposterior Directions. J Mot Behav. 2006;38(3):229-237',
      url: 'https://pubmed.ncbi.nlm.nih.gov/16709562/',
    },
  ],
};
