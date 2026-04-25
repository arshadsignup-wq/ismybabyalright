import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'eye-rolling-baby',
  title: 'My Baby\'s Eyes Roll Back',
  category: 'medical',
  searchTerms: [
    'baby eyes rolling back',
    'baby eyes roll up',
    'newborn eyes rolling',
    'baby eye rolling normal',
    'baby eyes roll back when tired',
    'baby eye rolling seizure',
    'baby rolling eyes to look up',
    'infant eye rolling',
    'baby eyes go back in head',
    'baby eye rolling while sleeping',
  ],
  quickAnswer:
    'Brief eye rolling when your baby is falling asleep, just waking up, or learning to look around is usually completely normal. Newborns and young babies often have wandering or rolling eyes as their vision and eye muscle control develop. However, frequent eye rolling with other symptoms like stiffening, jerking, or loss of consciousness needs immediate medical attention as it may indicate a seizure.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns commonly have brief eye rolling when falling asleep, waking up, or when very tired. This is because eye muscle control and coordination are still developing. You may also see eyes that don\'t always move together, brief crossing, or wandering - all typically normal in the first few months. However, if eye rolling occurs with stiffening, jerking movements, or your baby becomes unresponsive, seek immediate medical care.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, your baby\'s eye control should be improving. Brief eye rolling when drowsy or practicing looking upward is still normal. Some babies roll their eyes up to see interesting things above them. However, if you notice frequent eye rolling, eyes that consistently don\'t move together, or eye rolling accompanied by other unusual movements, mention this to your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Occasional eye rolling when very tired or falling asleep can still be normal. However, if you notice new-onset frequent eye rolling, especially with staring spells, stiffening, or loss of awareness, contact your pediatrician immediately. These could be signs of seizure activity. Your doctor may refer you to a pediatric neurologist for evaluation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Most toddlers have good eye control by this age. Eye rolling when falling asleep or being silly may still occur. However, new or frequent eye rolling, especially if accompanied by staring, unresponsiveness, or unusual body movements, needs medical evaluation. Some toddlers develop absence seizures or other seizure types that can include eye rolling.',
    },
    {
      ageRange: '2 years+',
      context:
        'Older toddlers may deliberately roll their eyes when being silly or imitating others. This is different from involuntary eye rolling. If eye rolling is involuntary, frequent, or occurs with other symptoms like stiffening, falling, staring spells, or loss of awareness, see your pediatrician. They will evaluate for seizures or other neurological issues.',
    },
  ],
  whenNormal: [
    'Your baby\'s eyes roll back briefly when falling asleep or just waking up',
    'Your newborn has brief wandering or rolling eyes during the first few months',
    'Your baby rolls their eyes upward to look at toys, lights, or faces above them',
    'Your baby is otherwise alert, feeding well, and developing normally',
    'The eye movements are brief and your baby remains responsive',
  ],
  whenToMention: [
    'You\'re concerned about how often your baby\'s eyes roll or wander',
    'Your baby\'s eyes don\'t seem to move together or one eye drifts consistently',
    'Eye rolling seems to be increasing rather than decreasing as your baby grows',
    'You want your pediatrician to evaluate your baby\'s eye movements to give you reassurance',
  ],
  whenToActNow: [
    'Eye rolling occurs with stiffening, jerking movements, or rhythmic body movements',
    'Your baby becomes unresponsive, has a change in consciousness, or doesn\'t recognize you during or after eye rolling',
    'Eye rolling is accompanied by difficulty breathing, turning blue, or extreme limpness',
    'Your baby has repeated episodes of eye rolling with staring or blank look',
    'You witness what you believe is a seizure (eye rolling plus other involuntary movements)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vision Development: Newborn to 12 Months. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Vision-Development.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Seizures in Children. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/seizures/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eye Problems in Infants. Pediatrics in Review, 2019.',
      url: 'https://publications.aap.org/pediatricsinreview/article/40/7/329/34567/Eye-Problems-in-Infants-and-Children',
    },
  ],
};
