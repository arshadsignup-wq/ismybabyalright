import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'new-sibling-adjustment-regression',
  title: 'New Sibling Adjustment and Regression',
  category: 'behavior',
  searchTerms: [
    'toddler regressing after new baby',
    'older child acting like baby after sibling born',
    'toddler wanting bottle again after new baby',
    'potty training regression new sibling',
    'toddler behavior changes new baby',
    'first child jealous of new baby regression',
    'toddler baby talk after sibling born',
    'how long does sibling regression last',
  ],
  quickAnswer:
    'Behavioral regression after the arrival of a new sibling is one of the most common and predictable responses in toddlers. Children may temporarily lose skills they had mastered — such as toilet training, sleeping independently, or self-feeding — as a way of coping with the enormous change in their family. With patience and reassurance, most regressions resolve within a few weeks to a couple of months.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable — this concern applies to the older sibling adjusting to a new baby. However, if your older child is under 18 months, they may not show obvious regression but could become more clingy, fussy, or have disrupted sleep patterns as they sense changes in routine and parental attention.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Not applicable for the newborn. For toddler siblings (18-24 months) adjusting at this stage, regression in sleep habits and increased clinginess are the most common signs. They may want to be held more, refuse to walk, or demand a bottle or pacifier they had given up.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Not applicable for the newborn. For older siblings aged 2-3, regression often peaks around the time the new baby becomes more interactive (smiling, grabbing toys). Toddlers may have potty accidents, revert to baby talk, or become more defiant as they process the permanent nature of sharing their parents.',
    },
    {
      ageRange: '12 months+',
      context:
        'For the older sibling, regression may ebb and flow over the first year. Major milestones in the younger child — crawling, walking, getting into the older child\'s toys — can trigger new waves of regression. Consistent routines, one-on-one time with each parent, and acknowledging the older child\'s feelings all help. Most children fully adjust within 3-6 months.',
    },
  ],
  whenNormal: [
    'Your toddler has potty accidents, wants a bottle or pacifier again, or uses baby talk after the new baby arrives',
    'Your child is more clingy, whiny, or has trouble sleeping for the first few weeks or months after the baby is born',
    'Your toddler alternates between loving the baby and expressing frustration or disinterest',
    'Regression comes and goes in waves, particularly during stressful moments or when the baby is getting more attention',
  ],
  whenToMention: [
    'Regression persists beyond 3-4 months without any improvement, or your child seems increasingly withdrawn or sad',
    'Your older child is consistently aggressive toward the baby despite redirection and supervision',
    'Your child shows signs of anxiety such as excessive worry, new fears, or significant changes in appetite or sleep that do not improve',
  ],
  whenToActNow: [
    'Your child is deliberately trying to harm the baby and shows no response to redirection or concern for the baby\'s safety',
    'Your child shows severe emotional disturbance such as prolonged inconsolable crying, self-harm, or complete refusal to eat or drink',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sibling-rivalry-toddler',
    'toddler-jealousy-new-baby',
    'toddler-hitting-baby-sibling',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Preparing Your Family for a New Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Preparing-Your-Family-for-a-New-Baby.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Sibling Relationships and Influences in Childhood and Adolescence. J Marriage Fam. 2012.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3956653/',
    },
  ],
};
