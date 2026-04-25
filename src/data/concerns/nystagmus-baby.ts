import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nystagmus-baby',
  title: 'My Baby\'s Eyes Shake or Wobble',
  category: 'medical',
  searchTerms: [
    'baby nystagmus',
    'baby eyes shaking',
    'baby eyes wobbling',
    'baby eyes vibrating',
    'baby eye tremor',
    'baby eyes moving side to side',
    'nystagmus in babies',
    'baby eyes dancing',
    'involuntary eye movement baby',
    'baby eye twitching',
  ],
  quickAnswer:
    'Nystagmus is a condition where the eyes make rapid, involuntary movements - often side to side, up and down, or in a circular pattern. While it can be normal briefly when your baby is looking to the far side, persistent or constant nystagmus needs evaluation by a pediatric ophthalmologist. It can indicate vision problems, neurological issues, or be a benign inherited condition.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Some newborns have brief nystagmus when their eyes are turned far to one side (end-gaze nystagmus), which is normal. However, constant shaking, wobbling, or dancing eye movements need evaluation. Your pediatrician will check for this during well visits. If noticed, you\'ll likely be referred to a pediatric ophthalmologist to determine the cause and whether treatment is needed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, your baby\'s eye movements should be smooth and coordinated. If you notice persistent shaking or wobbling of the eyes, especially when looking straight ahead, this should be evaluated. Nystagmus can be associated with vision problems, so early assessment is important. Some babies with nystagmus develop compensatory head positions to improve their vision.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If nystagmus hasn\'t been noticed before and appears now, it should be evaluated promptly. New-onset nystagmus can occasionally indicate a neurological issue that needs investigation. Your baby may also tilt their head to a preferred position if nystagmus is affecting their vision. Early intervention with vision specialists can help maximize your baby\'s visual development.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with nystagmus may have been diagnosed earlier or it may become more apparent as you notice they\'re not tracking objects smoothly. Some children with nystagmus have associated vision problems and benefit from glasses or other interventions. If you notice eye shaking or wobbling, have your child evaluated by a pediatric eye specialist.',
    },
    {
      ageRange: '2 years+',
      context:
        'If nystagmus is diagnosed, your child will need ongoing monitoring by a pediatric ophthalmologist. Some children\'s nystagmus improves with age, while others have persistent symptoms. Vision therapy, glasses, or in some cases surgery may help. If nystagmus is new at this age, neurological evaluation is important to rule out underlying causes.',
    },
  ],
  whenNormal: [
    'Your baby has very brief nystagmus only when eyes are turned far to the side (end-gaze nystagmus)',
    'The eye movements stop when your baby looks straight ahead or in other directions',
    'Your baby has been evaluated and diagnosed with benign congenital nystagmus',
    'Your baby is being monitored by a pediatric ophthalmologist and is receiving appropriate care',
  ],
  whenToMention: [
    'You\'ve noticed occasional eye shaking and want your pediatrician to check',
    'Your baby tilts their head consistently to one side',
    'Your baby doesn\'t seem to track objects smoothly or make good eye contact',
    'You have a family history of nystagmus or vision problems',
  ],
  whenToActNow: [
    'Your baby has new-onset rapid eye movements along with other symptoms like vomiting, lethargy, or loss of balance',
    'Your baby has sudden nystagmus after a head injury',
    'Eye shaking is accompanied by seizure-like activity, stiffening, or loss of consciousness',
    'Your baby seems unable to see or track objects and has constant eye movements',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eye Problems in Children. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Nystagmus. Pediatrics in Review, 2020.',
      url: 'https://publications.aap.org/pediatricsinreview/article/41/11/e21/34710/Nystagmus',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vision Development and Eye Health. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Vision-Development.aspx',
    },
  ],
};
