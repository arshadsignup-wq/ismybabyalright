import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-holding-food-in-mouth',
  title: 'My Baby Holds Food in Their Mouth',
  category: 'feeding',
  searchTerms: [
    'baby holds food in mouth',
    'baby pocketing food',
    'baby chipmunk cheeks',
    'baby won\'t chew and swallow',
    'baby stores food in cheeks',
    'baby keeps food in mouth forever',
    'toddler hoards food in mouth',
    'baby chews but doesn\'t swallow',
    'food stuck in baby cheeks',
    'why does baby pocket food',
  ],
  quickAnswer:
    'Food pocketing - when a baby holds food in their cheeks or mouth without swallowing - is common and can happen for several reasons: still learning to chew and swallow, oral motor delays, sensory issues with certain textures, or simply not being hungry. Occasional pocketing is normal during the learning phase, but if it happens consistently or your baby seems unable to clear food from their mouth, it may indicate a feeding skill delay worth discussing with your pediatrician.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'When babies are first learning to eat solids, they are figuring out how to move food around with their tongue, chew with their gums, and coordinate swallowing. It is normal for babies to hold food in their mouths briefly as they process the texture. However, if your baby consistently pockets food in their cheeks for long periods or seems unable to move it to the back of their mouth to swallow, they may need more oral motor practice or different textures.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, most babies can manage soft table foods and are becoming more efficient eaters. If food pocketing continues, consider whether the texture is too challenging (meat and fibrous vegetables are common culprits), whether your baby is being given too much food at once, or whether they are full and holding food out of politeness. Some babies pocket food when distracted. Always supervise and check your baby\'s mouth after meals to ensure it is clear.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Toddlers may pocket food for behavioral reasons (not hungry, wanting to keep playing) or due to genuine oral motor challenges. If your toddler frequently stores food in their cheeks, has difficulty chewing tougher foods, or drools excessively, an evaluation by an occupational therapist or speech-language pathologist can assess tongue strength, jaw stability, and chewing skills. Sensory-based feeding therapy may also help if texture aversion is contributing.',
    },
    {
      ageRange: '18 months+',
      context:
        'Persistent food pocketing in older toddlers can be a red flag for oral motor delays, sensory processing issues, or anatomical concerns like enlarged tonsils or adenoids reducing oral space. If your toddler regularly walks around with chipmunk cheeks full of food, cannot clear their mouth even with prompting, or frequently chokes because of stored food, seek a feeding evaluation. Pocketing can increase choking risk, especially if your child falls or is startled while food is stored in their cheeks.',
    },
  ],
  whenNormal: [
    'Your baby occasionally holds a bite in their mouth briefly while figuring out how to chew it, then swallows',
    'Your baby pockets food at the end of a meal when they are full and losing interest',
    'Your baby holds food in their mouth while distracted, but swallows when reminded',
    'Pocketing happens only with challenging textures (like meat) and improves as your baby gets older',
  ],
  whenToMention: [
    'Your baby pockets food in their cheeks during every meal and cannot seem to clear their mouth',
    'Your baby has weak jaw strength, drools excessively, or has difficulty biting through soft foods',
    'You have to manually remove food from your baby\'s mouth at the end of meals because they cannot swallow it',
    'Your baby is losing weight or not gaining well because they are not actually consuming much of the food they pocket',
    'Food pocketing has led to choking episodes',
  ],
  whenToActNow: [
    'Your baby is choking on pocketed food and cannot breathe (call 911 and perform infant/child choking protocol)',
    'Your baby has inhaled pocketed food and is coughing, wheezing, or having difficulty breathing',
    'Your baby has signs of aspiration pneumonia: fever, persistent wet cough, rapid breathing, and decreased eating',
  ],
  relatedMilestones: [
    'feeding',
    'oral-motor',
    'chewing-skills',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Oral Motor Skills and Chewing Development.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/pediatric-feeding-and-swallowing/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding and Swallowing Disorders in Children. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Feeding-and-Swallowing-Disorders.aspx',
    },
    {
      org: 'Feeding Matters',
      citation:
        'Feeding Matters. Understanding Oral Motor Delays in Feeding.',
      url: 'https://www.feedingmatters.org/',
    },
  ],
};
