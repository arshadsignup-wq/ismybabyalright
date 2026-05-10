import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'twin-development-differences',
  title: 'Twin Development Differences',
  category: 'behavior',
  searchTerms: [
    'one twin more advanced than the other',
    'twins developing at different rates',
    'twin hitting milestones at different times',
    'one twin walking other not',
    'twin development gap normal',
    'one twin talking more than the other',
    'should twins develop at the same rate',
    'fraternal twins different milestones',
    'identical twins developing differently',
  ],
  quickAnswer:
    'It is completely normal and expected for twins to develop at different rates, even identical twins. Each child is an individual with their own developmental timeline, temperament, and strengths. One twin may walk or talk earlier, be more socially outgoing, or reach milestones in a different order. These differences are rarely a cause for concern unless one twin is significantly behind established developmental milestones for their age.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Even in the first weeks, twins may differ in alertness, feeding patterns, and sleep schedules. Premature twins (common in multiple births) may have adjusted ages that differ from their actual birth date. Developmental comparisons should be based on adjusted age if born before 37 weeks.',
    },
    {
      ageRange: '3-6 months',
      context:
        'One twin may roll over, reach for toys, or babble before the other. These small differences are normal variation. If both twins are within the normal range for their adjusted age, different timing is not a concern.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Differences in motor development (sitting, crawling, pulling to stand) may become more noticeable. One twin may be more physically active while the other is more verbal. Each child should be evaluated against standard milestones, not against their sibling.',
    },
    {
      ageRange: '12 months+',
      context:
        'Walking and talking timelines can differ significantly between twins. One twin speaking in sentences while the other uses few words is not uncommon. "Twin language" (cryptophasia) may develop but usually resolves with increased exposure to adult speech. Monitor each child individually against age-appropriate milestones.',
    },
  ],
  whenNormal: [
    'Your twins reach the same milestones days, weeks, or even a couple of months apart',
    'One twin is more physically advanced while the other is more verbal or socially advanced',
    'Your twins have different temperaments — one is outgoing while the other is cautious',
    'Small differences in size, weight, or head circumference between twins at well-child visits',
  ],
  whenToMention: [
    'One twin is consistently missing milestones that the other has achieved and falls outside the normal range for their adjusted age',
    'The gap between your twins\' development seems to be widening over time rather than narrowing',
    'One twin shows signs of developmental delay — such as no babbling by 12 months, no words by 16 months, or no walking by 18 months — even if the other twin is on track',
  ],
  whenToActNow: [
    'One twin shows sudden loss of previously acquired skills such as language, social engagement, or motor abilities',
    'One twin has significant feeding difficulties, failure to gain weight, or signs of a neurological problem such as persistent asymmetric movement',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sibling-rivalry-toddler',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Caring for Multiples. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/the-Palms-of-His-Hands.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Lung, F. et al. Developmental Trajectories of Twins During Infancy. National Library of Medicine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/19492559/',
    },
  ],
};
