import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-getting-out-of-bed-repeatedly',
  title: 'Toddler Keeps Getting Out of Bed',
  category: 'sleep',
  searchTerms: [
    'toddler getting out of bed',
    'toddler won\'t stay in bed',
    'child gets up after bedtime',
    'toddler keeps coming out of room',
    'how to keep toddler in bed',
    'toddler out of bed repeatedly',
    'toddler leaving bedroom at night',
    'toddler bedtime escape',
    'toddler jack in the box bed',
    'toddler bedtime boundary setting',
  ],
  quickAnswer:
    'Getting out of bed repeatedly is one of the most common challenges after transitioning to a toddler bed. Your child is testing their exciting new freedom. The most effective approach is calm, consistent, and boring: walk your child back to bed with minimal interaction, tuck them in briefly, and leave. It may take many repetitions, but consistency works.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Very young toddlers in beds often get up because they lack the impulse control to stay. Keep the routine predictable. Walk your child back each time with minimal engagement - no conversation, no extra hugs, no drinks. This is exhausting but effective. Some families use a baby gate at the bedroom door to keep their toddler safely in the room even if they leave the bed.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is the peak age for bed-escaping. Your toddler understands enough to test limits but lacks strong impulse control. Strategies include a clear bedtime routine chart, an ok-to-wake clock, sticker rewards for staying in bed, and the silent return method. Address stalling preemptively by offering one last drink and one last bathroom trip during the routine.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most children can understand and follow bedtime rules by this age with clear, consistent expectations. If getting out of bed is still nightly, consider whether your child genuinely is not tired (adjust bedtime), is anxious (needs comfort), or is simply in a habit. An ok-to-wake clock works well because your child can understand "stay in bed until the light turns green."',
    },
    {
      ageRange: '4-5 years',
      context:
        'Persistent bed-escaping at this age is usually habitual or anxiety-related. Talk with your child during the day about expectations. Simple reward charts can help. If bedtime anxiety seems to drive the behavior, address the underlying fear with comfort rather than just insisting they stay in bed.',
    },
  ],
  whenNormal: [
    'Your toddler gets out of bed in the first few weeks after transitioning from a crib',
    'Getting out happens primarily at bedtime rather than the middle of the night',
    'Your child has specific reasons for getting up like water or bathroom - classic stalling tactics',
    'The behavior improves with consistent responses over 2-4 weeks',
  ],
  whenToMention: [
    'Your child gets out of bed every night for more than 4-6 weeks despite consistent responses',
    'The behavior seems driven by genuine anxiety or fear rather than limit-testing',
    'Your child is so distressed about being alone that you are concerned about their emotional wellbeing',
  ],
  whenToActNow: [
    'Your child gets out of bed and engages in dangerous activities unsupervised',
    'Your child has extreme anxiety that includes physical symptoms like vomiting or shaking',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep Tips for Your Family. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/default.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Toddler Sleep Problems. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/children-and-sleep',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers.',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html',
    },
  ],
  relatedConcernSlugs: ['crib-to-toddler-bed-transition', 'toddler-bedtime-stalling', 'toddler-bedtime-battles'],
};
