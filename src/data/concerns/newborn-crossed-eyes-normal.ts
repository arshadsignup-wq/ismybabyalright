import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-crossed-eyes-normal',
  title: 'Intermittent Crossed Eyes in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn crossed eyes',
    'baby eyes crossing',
    'newborn strabismus',
    'baby eyes not aligned',
    'newborn eyes wandering',
    'baby cross eyed normal',
    'infant eyes crossing intermittent',
    'newborn eye alignment',
    'baby esotropia',
    'when do baby eyes straighten',
  ],
  quickAnswer:
    'Intermittent crossing of the eyes in newborns is very common and usually normal in the first 3-4 months of life. Your baby\'s eye muscles are still developing coordination, and occasional misalignment is expected. Most babies develop consistent eye alignment by 4 months of age. If crossing persists beyond 4 months or is constant, an eye evaluation is recommended.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns have immature eye muscle coordination, and it is very common for their eyes to appear crossed or to wander in different directions, especially when tired or focusing on something close. This intermittent misalignment is a normal part of development. Babies at this age can see about 8-12 inches, roughly the distance to a parent\'s face during feeding.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Eye coordination continues to improve during this period. You should notice fewer episodes of crossing as the eye muscles strengthen. Babies begin to track moving objects and make more consistent eye contact. Some intermittent misalignment is still normal at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 4 months, most babies have developed consistent eye alignment. If you still notice frequent or constant eye crossing after 4 months of age, it is important to have your baby\'s eyes evaluated by a pediatric ophthalmologist. Early detection and treatment of true strabismus leads to better outcomes for vision development.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Eyes should be well-aligned at this age. Any persistent or new-onset eye crossing should prompt a referral to a pediatric ophthalmologist. Untreated strabismus can lead to amblyopia (lazy eye), where the brain favors one eye over the other, potentially affecting vision long-term.',
    },
  ],
  whenNormal: [
    'Intermittent eye crossing in the first 3-4 months of life that comes and goes',
    'Eyes that sometimes wander but can focus together, especially on faces',
    'The crossing happens more when baby is tired or overstimulated',
    'Both eyes appear to respond to light equally',
  ],
  whenToMention: [
    'Eye crossing continues beyond 4 months of age, even if intermittent',
    'One eye seems to consistently drift in one direction',
    'You notice your baby tilting their head to one side consistently when looking at things',
  ],
  whenToActNow: [
    'Constant, fixed eye crossing at any age, or a white reflection (white pupil) in photos instead of the normal red-eye, which could indicate a serious eye condition',
    'One eye appears significantly larger or smaller than the other, or you notice any cloudiness in the pupil',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eye Exams for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Warning-Signs-of-Visionproblems-in-Children.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vision Screening Recommendations. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/137/1/e20153596/52600/Visual-System-Assessment-in-Infants-Children-and',
    },
  ],
  relatedConcernSlugs: ['strabismus-intermittent', 'amblyopia-signs', 'newborn-watery-eyes'],
};
