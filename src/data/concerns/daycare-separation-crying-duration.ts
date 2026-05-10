import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'daycare-separation-crying-duration',
  title: 'Daycare Separation Crying Duration',
  category: 'behavior',
  searchTerms: [
    'baby cries all day at daycare',
    'toddler won\'t stop crying at daycare',
    'how long does daycare crying last',
    'daycare drop off crying every day',
    'baby screams at daycare drop off',
    'will my baby ever stop crying at daycare',
    'daycare separation anxiety how long',
    'toddler hysterical at daycare',
  ],
  quickAnswer:
    'Crying at daycare drop-off is one of the most common experiences for both children and parents, and it is almost always temporary. Most children who cry at drop-off stop within 5-15 minutes after the parent leaves. The adjustment period for new daycare typically lasts 2-4 weeks, though some children take longer. Consistency is key — irregular attendance prolongs the adjustment. A confident, brief goodbye routine helps children learn that you always come back.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Very young babies may not show strong separation distress. They may fuss when their routine changes but are generally comforted by any responsive caregiver. If your young baby cries persistently at daycare, it may be related to hunger, sleep needs, or the caregiving environment rather than separation anxiety.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies are beginning to recognize their primary caregivers and may show mild distress when handed to someone unfamiliar. This is normal. A consistent caregiver at daycare helps build a secondary attachment that provides comfort.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Separation anxiety peaks around 8-10 months. Drop-off crying may be intense during this period but is a normal developmental sign. Keep goodbyes short and consistent — a kiss, a phrase like "I always come back," and a confident departure. Lingering or returning after saying goodbye makes it harder.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers may have dramatic drop-off meltdowns but typically recover quickly. Ask your daycare provider how long crying lasts after you leave — most toddlers are engaged in play within minutes. Drop-off crying often resurfaces after weekends, holidays, or illness. This is normal and does not mean the adjustment has been lost.',
    },
  ],
  whenNormal: [
    'Your child cries at drop-off but the daycare reports they settle within 5-15 minutes',
    'Crying is worse on Monday mornings or after breaks but improves as the week progresses',
    'Your child is happy at pickup and shows no signs of distress during the day',
    'The adjustment takes 2-4 weeks of consistent attendance before drop-offs become easier',
  ],
  whenToMention: [
    'Your child cries throughout most of the day at daycare and does not settle, even after 4+ weeks of consistent attendance',
    'Your child shows signs of stress beyond drop-off — sleep disruption, loss of appetite, regression in toileting, or increased aggression — that persist beyond the initial adjustment period',
    'Your child was previously well-adjusted at daycare and suddenly begins having intense drop-off distress, which could indicate something has changed in the environment',
  ],
  whenToActNow: [
    'Your child shows fear of a specific caregiver, has unexplained injuries, or displays sudden extreme behavioral changes that could indicate mistreatment',
    'Your child\'s distress is so severe and prolonged that they are not eating, sleeping, or functioning during the day at daycare',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'daycare-readiness-signs',
    'toddler-social-anxiety-playgroups',
    'baby-favoritism-one-parent',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Soothing Your Child\'s Separation Anxiety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Soothing-Your-Childs-Separation-Anxiety.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Ahnert, L. et al. Transition to Child Care: Associations with Infant-Mother Attachment. Child Development. 2004.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/15144483/',
    },
  ],
};
