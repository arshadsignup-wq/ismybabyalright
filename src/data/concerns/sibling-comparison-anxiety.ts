import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sibling-comparison-anxiety',
  title: 'Comparing Your Child to Their Sibling',
  category: 'behavior',
  searchTerms: [
    'comparing siblings development',
    'sibling milestone comparison',
    'second child slower development',
    'sibling comparison anxiety',
    'first child vs second child milestones',
    'child behind older sibling',
    'brothers sisters different development',
    'why is my second baby different',
  ],
  quickAnswer:
    'Comparing your children to each other is one of the most natural things a parent can do, but it is also one of the most misleading. Every child follows their own developmental timeline, and siblings can differ dramatically in when they walk, talk, or reach other milestones, even when raised in the same household. These differences reflect normal biological variation, not a problem that needs fixing.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the earliest months, parents often compare how their newborn feeds, sleeps, and fusses compared to an older sibling at the same age. It is important to remember that your memory of your first child\'s infancy is likely imprecise and filtered through the fog of sleep deprivation. Each baby has a unique temperament from birth, and differences in alertness, fussiness, or feeding patterns are expected.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is when motor milestone comparisons tend to peak. If your first child sat at five months and your second has not at seven, it is easy to worry. Normal sitting ranges from four to nine months, and normal crawling has an even wider window. Birth order, temperament, body type, and opportunities for practice all influence when milestones appear. Focus on whether your child is progressing, not on the exact timeline.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Language and social comparisons often dominate at this age. Second-born children sometimes talk later because older siblings anticipate their needs, or they may talk earlier because they have a constant language model. Walking timelines can vary by months between siblings. What matters is whether your child is within the broad range of normal, not whether they match their brother or sister.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By toddlerhood, personality and interest differences become more apparent. One sibling might be a voracious eater while the other is picky. One might be physically adventurous while the other prefers books. These are expressions of individuality, not developmental red flags. If you have specific concerns about delays, discuss them with your pediatrician based on standardized developmental benchmarks rather than sibling comparison.',
    },
  ],
  whenNormal: [
    'Your children reached the same milestones at different ages but both within the accepted normal range',
    'Your second child has a different temperament or personality than your first',
    'One sibling excels in physical milestones while the other is stronger in language, or vice versa',
    'You occasionally feel worried but can remind yourself that variation between siblings is expected',
  ],
  whenToMention: [
    'Your child is significantly outside the expected developmental range for their age, regardless of sibling comparison',
    'Your anxiety about the comparison is affecting your ability to enjoy your child or parent confidently',
    'You notice your child is losing skills they previously had, which is different from being slower than a sibling',
    'Family members are frequently making comparisons that are causing you stress or concern',
  ],
  whenToActNow: [
    'Your child has lost previously acquired skills such as words, social engagement, or motor abilities',
    'You notice developmental warning signs that are concerning independent of any sibling comparison, such as no babbling by 12 months or no words by 16 months',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Developmental Milestones.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Child Development. Eunice Kennedy Shriver National Institute of Child Health and Human Development.',
      url: 'https://www.nichd.nih.gov/health/topics/child-development',
    },
  ],
};
