import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-tremors',
  title: 'My Baby Has Tremors',
  category: 'physical',
  searchTerms: [
    'baby tremors',
    'newborn shaking',
    'baby chin quivering',
    'baby hands shake',
    'infant trembling',
    'baby shivering not cold',
    'newborn trembling chin',
    'baby jittery movements',
    'baby shaky hands',
  ],
  quickAnswer:
    'Brief tremors or shaking (especially of the chin, hands, or legs) are very common in newborns and usually completely harmless. They happen because your baby\'s nervous system is still developing and can be a bit jittery, especially when your baby is crying, cold, or just waking up. Most babies outgrow these tremors by 2-3 months.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Trembling or shaking is extremely common at this age, especially in the chin, lower lip, hands, or legs. You might notice it most when your baby is crying, undressed (and a bit chilly), or transitioning between sleep and waking. This happens because your baby\'s nervous system is immature and gets easily overstimulated. As long as you can stop the tremor by gently holding the shaking body part still, and your baby is otherwise eating well and developing normally, this is benign and will fade.',
    },
    {
      ageRange: '3-5 months',
      context:
        'Tremors should be becoming less frequent by this age as your baby\'s nervous system matures. Occasional chin quivering or hand shaking when your baby is upset or very excited is still normal. If tremors are happening multiple times a day or seem to be getting worse instead of better, mention it to your pediatrician just to be safe.',
    },
    {
      ageRange: '6+ months',
      context:
        'Tremors are much less common at this age. If your baby is still having frequent shaking episodes, especially if they can\'t be stopped by holding the trembling limb still, or if they\'re rhythmic and repetitive, talk to your doctor. Persistent tremors beyond 6 months can sometimes signal an underlying issue that needs evaluation.',
    },
  ],
  whenNormal: [
    'Your baby is under 3 months old and has brief tremors when crying, cold, or just waking up.',
    'The tremor stops immediately when you gently hold the shaking body part still or when you calm your baby.',
    'Your baby is otherwise feeding well, gaining weight, and meeting developmental milestones.',
    'Tremors are getting less frequent as your baby gets older.',
  ],
  whenToMention: [
    'Your baby is over 6 months old and still has frequent tremors.',
    'Tremors are getting more frequent or more intense rather than fading.',
    'You can\'t stop the tremor by gently holding the body part still.',
    'Tremors happen even when your baby is calm, warm, and not upset.',
  ],
  whenToActNow: [
    'Tremors are rhythmic (same movement over and over), last more than 20-30 seconds, and your baby can\'t be calmed or interrupted during them  -  this could be a seizure.',
    'Tremors are accompanied by eye rolling, stiffening, loss of consciousness, or your baby turning blue.',
    'Tremors started suddenly and are accompanied by fever, vomiting, lethargy, or other signs of illness.',
    'Your baby seems to "tune out" or not respond to you during a shaking episode.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'fine-motor-reaching',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Newborn Jitteriness and Tremors',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'Stanford Children\'s Health',
      citation:
        'Stanford Children\'s Health  -  Jitteriness in Newborns',
      url: 'https://www.stanfordchildrens.org/en/topic/default?id=jitteriness-in-the-newborn-90-P02734',
    },
    {
      org: 'Boston Children\'s Hospital',
      citation:
        'Boston Children\'s Hospital  -  Distinguishing Tremors from Seizures in Infants',
      url: 'https://www.childrenshospital.org/conditions/seizures-and-epilepsy',
    },
  ],
};
