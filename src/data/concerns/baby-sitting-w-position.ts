import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sitting-w-position',
  title: 'My Baby Sits in the W Position',
  category: 'physical',
  searchTerms: [
    'baby w sitting',
    'baby sits in w position',
    'w sitting bad for babies',
    'baby w sit while playing',
    'is w sitting harmful',
    'baby knees out w sitting',
    'w sitting toddler',
    'w sitting hip problems',
    'should I correct w sitting',
    'baby w sitting normal',
  ],
  quickAnswer:
    'W-sitting (sitting with knees bent and feet out to the sides forming a W shape) is common in children and is not always a problem. Occasional W-sitting is normal. However, if your child W-sits exclusively and cannot sit in other positions comfortably, it may indicate core weakness or hip tightness that should be addressed.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Some babies naturally transition through a W-sit position as they learn to sit. If your baby can also sit in other positions (cross-legged, legs forward, side sitting), occasional W-sitting is not concerning. Babies with flexible joints may find this position comfortable.',
    },
    {
      ageRange: '12-18 months',
      context:
        'If your toddler W-sits sometimes but easily switches to other positions, this is generally fine. W-sitting provides a wide base of support that some children prefer. Gently encourage other sitting positions by offering activities that require reaching or turning.',
    },
    {
      ageRange: '18-24 months',
      context:
        'If W-sitting is your child\'s default position and they seem unable or unwilling to sit any other way, mention it to your pediatrician. Exclusive W-sitting can indicate low core strength (the wide base compensates for weak trunk muscles) or tight hip rotators.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Persistent exclusive W-sitting should be evaluated. While research shows it does not cause the orthopedic problems once feared in most children, it can be a sign that your child needs core strengthening. Occupational or physical therapy can help your child develop the trunk strength to sit in varied positions.',
    },
  ],
  whenNormal: [
    'Your child W-sits occasionally but easily moves into other positions.',
    'Your child can sit cross-legged, long-sit, and side-sit as well.',
    'Your child has no pain or difficulty with movement.',
    'W-sitting is one of several positions your child uses during play.',
  ],
  whenToMention: [
    'Your child exclusively W-sits and refuses or cannot sit in other positions.',
    'Your child seems to have weak core muscles or poor balance in other sitting positions.',
    'Your child has a family history of hip problems.',
    'Your child\'s legs seem to turn inward when walking.',
  ],
  whenToActNow: [
    'Your child has pain in their hips or legs.',
    'Your child has suddenly started W-sitting after not doing so before, along with other motor changes.',
  ],
  relatedMilestones: [
    'gross-motor-sitting',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['w-sitting', 'poor-trunk-control', 'low-muscle-tone'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - W-Sitting and Your Child',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'Goldstein M, et al. W-Sitting Position in Children: A Review. Pediatr Phys Ther. 2017',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
    {
      org: 'CDC',
      citation: 'CDC - Important Milestones: Your Child By 2 Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
