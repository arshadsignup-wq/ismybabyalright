import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'leg-tremors-baby',
  title: 'My Baby\'s Legs Tremble',
  category: 'medical',
  searchTerms: [
    'baby leg tremors',
    'baby legs shaking',
    'newborn trembling legs',
    'baby jittery legs',
    'baby leg shaking normal',
    'baby tremors in legs',
    'why do baby legs shake',
    'baby trembling when held',
    'newborn leg jitters',
    'baby shaky legs',
  ],
  quickAnswer:
    'Brief leg tremors or jitteriness in newborns are very common and usually normal, especially when your baby is crying, startled, or cold. These movements stop when you gently hold or straighten the leg, which helps distinguish them from seizures. If tremors are frequent, don\'t stop with touch, or occur with other symptoms, contact your pediatrician for evaluation.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Leg jitteriness is extremely common in newborns. Your baby\'s nervous system is still maturing, and trembling legs - especially when crying, during diaper changes, or when startled - are typically normal. These movements should stop when you gently hold or straighten your baby\'s leg. If tremors continue despite calming, happen very frequently, or your baby has other symptoms like poor feeding, contact your pediatrician.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Jittery leg movements should gradually decrease as your baby\'s nervous system develops. Occasional trembling when crying, excited, or cold is still within normal range. However, if leg tremors are increasing, happen frequently at rest, or are accompanied by stiffness, arching, or poor weight gain, mention this to your pediatrician. They may check for metabolic issues or neurological concerns.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, jitteriness should be rare. If your baby has new or persistent leg tremors, especially when calm or during sleep, this warrants medical evaluation. Your doctor will assess your baby\'s muscle tone, reflexes, and development. Brief trembling during moments of excitement or when learning to roll can still be normal, but ongoing tremors should be evaluated.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Leg tremors at this age are uncommon and should be assessed by your pediatrician. If you notice shaking legs during standing practice, crawling, or at rest, mention this. Your doctor may refer you to a pediatric neurologist if tremors are frequent or interfere with development. Brief shaking when very excited or learning new motor skills may be within normal range.',
    },
    {
      ageRange: '12 months+',
      context:
        'Persistent leg tremors in toddlers need evaluation. Tremors during standing, walking, or at rest may indicate a neurological condition that requires assessment. If your child\'s legs shake when trying to stand or walk, or if you notice tremors at other times, see your pediatrician for evaluation and possible referral to a specialist.',
    },
  ],
  whenNormal: [
    'Your newborn has brief trembling legs when crying, cold, or during diaper changes',
    'The shaking stops immediately when you gently hold or straighten your baby\'s leg',
    'Your baby is otherwise feeding well, alert, and meeting developmental milestones',
    'The jitteriness is gradually decreasing over the first few months',
    'Tremors only occur during crying, temperature changes, or moments of excitement',
  ],
  whenToMention: [
    'Your baby has frequent leg jitteriness that concerns you, even if it stops with touch',
    'You\'re unsure whether the movements are normal jitters or need evaluation',
    'The tremors seem to be increasing rather than decreasing as your baby grows',
    'Your baby has tremors along with other concerns like stiffness, arching, or feeding difficulty',
  ],
  whenToActNow: [
    'The tremors don\'t stop when you gently hold or straighten the leg (may indicate seizure)',
    'Your baby has rhythmic jerking movements, eye rolling, or loss of consciousness',
    'Your baby seems very unwell, extremely lethargic, or refuses to feed',
    'Your baby has tremors along with fever, vomiting, bulging soft spot, or other signs of serious illness',
    'The tremors are constant or happening very frequently throughout the day',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Reflexes and Behavior. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Newborn Exam Findings. Pediatrics in Review, 2018.',
      url: 'https://publications.aap.org/pediatricsinreview/article/39/5/261/34394/Common-Newborn-Exam-Findings',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Seizures. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/seizures/Pages/default.aspx',
    },
  ],
};
