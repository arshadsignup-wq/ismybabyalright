import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hand-tremors-baby',
  title: 'My Baby\'s Hands Tremble',
  category: 'medical',
  searchTerms: [
    'baby hand tremors',
    'baby hands shaking',
    'newborn trembling hands',
    'baby jittery movements',
    'baby hand shaking normal',
    'baby tremors vs seizure',
    'why do baby hands shake',
    'baby trembling when crying',
    'newborn jitters',
    'baby shaky hands',
  ],
  quickAnswer:
    'Brief hand tremors or jitteriness in newborns are very common and usually completely normal, especially when crying, startled, or during diaper changes. These movements stop when you gently hold or flex the limb, which distinguishes them from seizures. However, if tremors are frequent, don\'t stop with touch, or occur with other concerning symptoms, contact your pediatrician.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborn jitteriness is extremely common. Your baby\'s immature nervous system is still developing, and trembling hands, chin, or legs - especially when crying, cold, or during diaper changes - are typically normal. These movements should stop when you gently hold your baby\'s hand or flex the arm. If tremors persist despite calming, occur frequently, or your baby seems unwell, mention this at your next visit or call your pediatrician.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Brief jittery movements should be decreasing by now as your baby\'s nervous system matures. Occasional hand trembling when excited, crying, or cold is still normal. However, if tremors are increasing, happen frequently at rest, or are accompanied by poor feeding or lethargy, contact your pediatrician. They may want to check blood sugar, calcium, or other metabolic factors.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, jitteriness should be rare. If your baby has new or persistent hand tremors, especially at rest or during sleep, this warrants medical evaluation. Your doctor will want to rule out neurological issues or metabolic causes. Brief trembling during excitement or when learning new motor skills can still be normal, but it\'s worth mentioning at your next well visit.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Hand tremors at this age are less common and should be evaluated. If you notice shaking, especially during purposeful movements like reaching for objects, or if tremors occur at rest, contact your pediatrician. They may refer you to a pediatric neurologist for further assessment. Occasional brief shaking when very excited or cold may still be within normal range.',
    },
    {
      ageRange: '12 months+',
      context:
        'Persistent hand tremors in toddlers warrant evaluation. Essential tremor (a benign tremor condition) can begin in childhood, or tremors may indicate a neurological condition that needs assessment. If your child\'s hands shake during activities like holding a cup or crayon, or if tremors are noticeable at rest, see your pediatrician for evaluation and possible referral.',
    },
  ],
  whenNormal: [
    'Your newborn has brief trembling hands or chin when crying, cold, or during diaper changes',
    'The shaking stops immediately when you gently hold or flex your baby\'s hand or arm',
    'Your baby is otherwise feeding well, alert, and developing normally',
    'The jitteriness is decreasing over the first few months of life',
    'Tremors only happen during moments of excitement, crying, or temperature change',
  ],
  whenToMention: [
    'Your baby has frequent jitteriness that concerns you, even if it stops with touch',
    'You\'re unsure whether the movements are normal jitters or something more serious',
    'The tremors seem to be increasing rather than decreasing as your baby grows',
    'Your baby has tremors along with other symptoms like poor feeding or excessive sleepiness',
  ],
  whenToActNow: [
    'The tremors don\'t stop when you gently hold or flex the limb (may indicate seizure rather than jitters)',
    'Your baby has rhythmic jerking movements, eye rolling, or loss of consciousness',
    'Your baby seems very unwell, lethargic, or has difficulty feeding',
    'Your baby has tremors along with fever, vomiting, or other signs of illness',
    'The tremors are constant or very frequent throughout the day',
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
        'American Academy of Pediatrics. Jitteriness in Newborns. Pediatrics in Review, 2018.',
      url: 'https://publications.aap.org/pediatricsinreview/article/39/5/261/34394/Common-Newborn-Exam-Findings',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Seizures in Children. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/seizures/Pages/default.aspx',
    },
  ],
};
