import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-tripping-frequently',
  title: 'Toddler Tripping Frequently',
  category: 'physical',
  searchTerms: [
    'toddler tripping a lot',
    'toddler falls down constantly',
    'toddler trips over own feet',
    'toddler clumsy walking',
    'child falls frequently',
    'toddler stumbling all the time',
    'toddler keeps tripping',
    'is my toddler tripping too much',
    'toddler unsteady on feet',
    'toddler falling more than normal',
  ],
  quickAnswer:
    'Frequent tripping is very common in toddlers, especially in the first 6 to 12 months after learning to walk. Toddlers have a high center of gravity, still-developing balance, and limited experience navigating different surfaces and obstacles. Most toddlers trip and fall many times a day, and this gradually decreases as their coordination and balance improve. Frequent falling is usually nothing to worry about, but there are a few signs that warrant a conversation with your pediatrician.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'New walkers trip and fall frequently - this is one of the hallmarks of early walking. Their walking base is wide, their steps are short and irregular, and they have not yet developed the reflexes to catch themselves when they stumble. Some toddlers fall dozens of times a day when they first start walking, and this is perfectly normal. The best thing you can do is make sure their environment is safe for falling and let them practice.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Tripping decreases as walking becomes more practiced, but falls are still very common, especially on uneven surfaces, when carrying objects, or when moving quickly. Toddlers at this age are often in such a hurry to explore that they move faster than their coordination allows. You may notice your toddler trips more when tired, which is expected. Steady improvement over time is the key thing to look for.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2, most toddlers are walking with more confidence and falling less frequently, though occasional trips are still normal. Running introduces a new set of coordination challenges, so falls during running are expected. If your child is still tripping and falling as frequently as they did when they first started walking, and their peers seem much more stable, it may be worth discussing with your pediatrician.',
    },
    {
      ageRange: '3+ years',
      context:
        'Children over 3 should have fairly steady walking and running with occasional falls during active play. If your child trips and falls significantly more than their peers during routine walking, or if the frequency of falls is not improving over time, a gross motor evaluation can check for any underlying balance, vision, or coordination concerns that may benefit from intervention.',
    },
  ],
  whenNormal: [
    'Your toddler has been walking for less than 6 months and falls frequently, as this is a normal part of learning to walk.',
    'Your toddler trips more often on uneven surfaces, when carrying toys, or when moving quickly.',
    'Your toddler falls more when they are tired, which is common because coordination requires effort and energy.',
    'Your toddler trips occasionally but is generally improving over time and walking more steadily than they were a month ago.',
    'Your toddler trips while wearing new shoes or shoes that are too big, which affects their balance.',
  ],
  whenToMention: [
    'Your child has been walking for 6 or more months and is not showing any improvement in their stability.',
    'Your child trips and falls significantly more than same-age peers during routine walking on flat surfaces.',
    'Your child seems to trip or stumble more on one side, or their walking pattern looks asymmetric.',
  ],
  whenToActNow: [
    'Your child suddenly starts tripping and falling much more than usual after a period of walking well, as a sudden change can indicate a neurological or orthopedic issue.',
    'Your child\'s frequent falls are accompanied by other new symptoms like headaches, vision changes, or loss of other skills.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-balance',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Children 12 to 18 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-12-to-18-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Eighteen Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
  ],
};
