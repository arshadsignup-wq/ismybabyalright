import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'asymmetric-movement',
  title: 'My Baby Seems to Use One Side More Than the Other',
  category: 'physical',
  searchTerms: [
    'baby using one side more',
    'baby favors one side',
    'baby asymmetric movement',
    'baby one arm stronger',
    'baby one leg stronger',
    'baby lopsided crawling',
    'baby dragging one leg',
    'baby moves one arm less',
    'baby one sided movement',
    'asymmetry in baby movement',
    'baby hemiplegia signs',
  ],
  quickAnswer:
    'Babies should use both sides of their body fairly equally during the first 18 months of life. While slight preferences can be normal, a consistent pattern of favoring one side  -  using one arm much more than the other, crawling with one leg dragging, or turning the head predominantly one way  -  should always be discussed with your pediatrician. Early identification of asymmetry leads to the best outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns may briefly prefer turning their head to one side, but their arm and leg movements should be fairly symmetric. If your baby consistently keeps one hand fisted while the other is open, or if one arm moves much less than the other, bring this to your pediatrician\'s attention. Torticollis (tight neck muscles causing a head-turn preference) is common and very treatable at this age.',
    },
    {
      ageRange: '4-6 months',
      context:
        'By this age, babies should be using both hands to reach for and grasp toys and should kick both legs equally. If you notice your baby consistently reaching with only one hand, or if one leg seems stiffer or less active than the other, mention it to your doctor. These observations are valuable  -  parents are often the first to notice subtle asymmetries.',
    },
    {
      ageRange: '7-9 months',
      context:
        'When crawling develops, watch for symmetry. Some babies have an "imperfect" crawl that still uses both sides, which is fine. But if your baby consistently drags one leg, uses one arm differently, or leans heavily to one side, an evaluation is important. Asymmetric crawling can sometimes indicate a difference in tone or strength between the two sides.',
    },
    {
      ageRange: '10-18 months',
      context:
        'As your baby starts pulling up, cruising, and walking, symmetry becomes easier to observe. Both legs should bear weight equally, and your baby should use both hands during play. If one side is clearly weaker or less coordinated, a referral to a pediatric neurologist or physical therapist is recommended. Early intervention can make a significant difference.',
    },
  ],
  whenNormal: [
    'Your baby occasionally prefers one hand for a specific activity but uses both hands well overall.',
    'Your baby has a slight head-turn preference in the first few weeks that is resolving with repositioning.',
    'Your baby crawls with a slightly asymmetric pattern but uses both arms and legs actively.',
    'Your toddler over 18 months is developing a natural hand preference  -  this is appropriate at that age.',
  ],
  whenToMention: [
    'Your baby consistently uses one hand much more than the other before 18 months.',
    'Your baby turns their head strongly to one side and resists turning to the other.',
    'Your baby crawls with one leg dragging or tucked underneath while the other pushes.',
    'When your baby stands or walks, one leg seems stiffer, weaker, or positioned differently than the other.',
  ],
  whenToActNow: [
    'Your baby suddenly stops using one arm or leg after previously using both equally  -  acute onset of one-sided weakness is a medical emergency.',
    'One side of your baby\'s body seems consistently stiff or rigid while the other side moves normally.',
    'Your baby has asymmetric movement combined with seizure-like episodes, unusual eye movements, or changes in alertness.',
  ],
  relatedMilestones: [
    'gross-motor-rolling',
    'gross-motor-crawling',
    'fine-motor-grasping',
    'fine-motor-transferring',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Torticollis (Twisted Neck) in Infants',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/bones-joints-muscles/Pages/Torticollis.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  If You\'re Concerned About Your Child\'s Development: Act Early',
      url: 'https://www.cdc.gov/ncbddd/actearly/concerned.html',
    },
    {
      org: 'AAP',
      citation:
        'Novak I, Morgan C, et al. Early, Accurate Diagnosis and Early Intervention in Cerebral Palsy. JAMA Pediatrics. 2017.',
      url: 'https://publications.aap.org/pediatrics',
    },
  ],
};
