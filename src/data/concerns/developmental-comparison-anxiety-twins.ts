import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'developmental-comparison-anxiety-twins',
  title: 'Developmental Comparison Anxiety in Twins',
  category: 'behavior',
  searchTerms: [
    'one twin developing faster than the other',
    'twins different milestones',
    'comparing twin development',
    'one twin walking other not',
    'one twin talking other not',
    'twin developmental differences',
    'worried one twin is behind',
    'twin milestones different ages',
    'fraternal twins different development',
  ],
  quickAnswer:
    'It is completely normal for twins to develop at different rates, even identical twins. Having a built-in comparison can intensify parental worry, but each child has their own developmental timeline. Differences in when twins reach milestones like crawling, walking, or talking are expected and usually do not indicate a problem with either child.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the earliest months, developmental differences between twins are often related to birth weight, gestational age, and any NICU time. A twin who was smaller at birth or spent time in the NICU may take a bit longer to reach early milestones like head control or social smiling. These early differences often even out over the first year, especially when adjusted age is taken into account for premature babies.',
    },
    {
      ageRange: '3-6 months',
      context:
        'You may notice one twin reaching for toys, rolling, or babbling before the other. This is a normal variation  -  even singleton siblings born years apart often hit milestones at different ages. Avoid using one twin as the benchmark for the other. Instead, track each child\'s progress individually against standard developmental ranges.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Differences in motor milestones like sitting, crawling, and pulling to stand can become more noticeable and may feel more anxiety-provoking. Remember that the range of normal for most milestones is wide  -  crawling, for example, can begin anywhere from 6 to 10 months. Some babies skip crawling entirely. If one twin is consistently lagging across multiple domains, not just one skill, discuss this with your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Language differences often become the most noticeable concern in this period. It is common for one twin to talk earlier or more than the other. Twins as a group tend to start talking slightly later than singletons, partly because they split parental attention and sometimes develop their own communication shortcuts. If one twin has no words by 15-16 months or is not understanding simple instructions, an individual evaluation is appropriate  -  not because of the comparison to their twin, but based on standard developmental expectations.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By this age, personality and temperament differences are increasingly clear. One twin may be more verbal and social while the other is more physical and independent. These are not deficits  -  they are individual strengths. However, if one twin is significantly behind in a specific area  -  for example, using far fewer words, not combining words by age two, or not engaging in pretend play  -  an individual evaluation is warranted regardless of what the other twin is doing.',
    },
  ],
  whenNormal: [
    'Your twins reach the same milestone a few weeks or even a couple of months apart  -  this is within the normal range of variation',
    'One twin is more physically adventurous while the other is more verbal or social  -  different strengths are common',
    'Your twins were premature and the smaller or sicker twin is reaching milestones a bit later when using actual age rather than adjusted age',
    'You feel anxious about the differences even when your pediatrician says both children are developing normally  -  comparison anxiety is very common in parents of multiples',
  ],
  whenToMention: [
    'One twin is consistently behind in multiple developmental areas  -  not just one skill  -  compared to standard age expectations (not compared to the other twin)',
    'One twin has stopped progressing or has lost previously acquired skills such as words or motor abilities',
    'The gap between your twins\' abilities seems to be widening over time rather than narrowing',
    'Your anxiety about developmental differences is affecting your ability to enjoy parenting or your bond with one of your children',
  ],
  whenToActNow: [
    'Either twin loses previously acquired skills  -  such as words, walking, or social engagement  -  at any age',
    'Either twin shows signs that would be concerning in any child: no babbling by 12 months, no words by 16 months, no two-word phrases by 24 months, or any loss of skills at any age',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Age. Learn the Signs. Act Early.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Language Development in Twins: A Review. Journal of Child Language, 2014.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24229813/',
    },
  ],
};
