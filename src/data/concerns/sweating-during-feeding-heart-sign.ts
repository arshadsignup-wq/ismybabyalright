import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sweating-during-feeding-heart-sign',
  title: 'Sweating During Feeding as a Heart Sign in Babies',
  category: 'medical',
  searchTerms: [
    'baby sweating during feeding',
    'baby sweats while breastfeeding',
    'baby sweats while drinking bottle',
    'diaphoresis infant feeding',
    'baby poor feeding heart problem',
    'baby tires during feeding',
    'baby sweaty head during feeding',
    'heart failure signs baby feeding',
    'baby takes long to feed heart',
    'baby breathless during feeding',
  ],
  quickAnswer:
    'Sweating during feeding (diaphoresis) in a baby can be a sign of an underlying heart condition. For a baby with a heart problem, feeding is like exercise -- it requires significant effort, causing the baby to sweat, breathe rapidly, and tire easily. While some sweating during feeds can be normal (especially in a warm room or when bundled), persistent sweating along with rapid breathing, taking longer than 30-40 minutes to feed, poor weight gain, or frequent pausing during feeds can indicate that the heart is working too hard. If your baby consistently sweats during feeds and has any other concerning signs, discuss this with your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Sweating during feeding in the newborn period is an important warning sign for congenital heart defects. Babies with conditions like large ventricular septal defects, patent ductus arteriosus, or other significant heart defects may sweat from the forehead and scalp during feeds because the heart is working very hard. Other signs to watch for include rapid breathing (more than 60 breaths per minute), taking longer than 30 minutes to finish a feed, falling asleep exhausted partway through feeds, and poor weight gain. If your newborn consistently sweats during feeds, especially with any of these other signs, prompt medical evaluation is important.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, feeding patterns are more established, making abnormal feeding behaviors more noticeable. A baby with an undiagnosed heart problem may sweat during every feed, take small volumes, need frequent breaks, and fail to gain weight appropriately. The combination of sweating, rapid breathing during feeds, and poor weight gain is sometimes called the "heart failure feeding triad" and should prompt cardiac evaluation. Some heart defects become more symptomatic in this age range as pulmonary blood flow increases.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies begin solid foods, those with cardiac issues may also show difficulty with the increased effort of eating purees or soft foods. They may tire quickly with any oral feeding and may need calorie-dense formulas or supplemental tube feeding to maintain growth. If your baby continues to sweat heavily during feeds, takes very long to eat, or has plateauing growth curves, discuss cardiac evaluation with your pediatrician even if earlier screenings were normal.',
    },
    {
      ageRange: '1-3 years',
      context:
        'In toddlers, sweating during eating is less commonly related to cardiac issues if the child has not been previously identified with a heart problem, but it can occur with conditions like cardiomyopathy or myocarditis that develop later. A toddler who tires easily, has difficulty keeping up with peers, sweats with minimal exertion (including eating), and has poor appetite should be evaluated. These can also be signs of other medical conditions, so a thorough evaluation is warranted.',
    },
  ],
  whenNormal: [
    'Your baby sweats slightly during feeds in a warm room or when overdressed, and the sweating stops when the environment cools',
    'Your baby occasionally pauses during feeds but finishes within a normal timeframe (under 30 minutes) and gains weight well',
    'Your baby is sweaty after vigorous crying before a feed but feeds normally once settled',
    'Your breastfed baby sweats from skin-to-skin contact warmth but feeds efficiently and grows well',
    'Your pediatrician has examined your baby and heart and lungs are normal',
  ],
  whenToMention: [
    'Your baby sweats from the forehead or scalp during most or all feeds, regardless of room temperature',
    'Your baby takes longer than 30-40 minutes to complete feeds and seems to tire before finishing',
    'Your baby is not gaining weight as expected despite adequate feeding opportunities',
    'Your baby breathes faster than normal during feeds or seems to need frequent breaks to catch their breath',
  ],
  whenToActNow: [
    'Your baby has excessive sweating during feeds combined with rapid or labored breathing, poor weight gain, and bluish or grayish skin color -- these may be signs of heart failure and require urgent evaluation',
    'Your baby refuses to eat, is lethargic, and has rapid breathing or grunting -- seek emergency care immediately',
    'Your baby has suddenly stopped feeding well, is sweating, pale, and breathing rapidly -- call 911 or go to the emergency room',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'congenital-heart-defect-signs',
    'baby-heart-murmur',
    'baby-failure-to-thrive-signs',
    'baby-feeding-too-fast',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Signs of Heart Problems in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Signs-of-Heart-Problems-in-Children.aspx',
    },
    {
      org: 'AHA',
      citation:
        'American Heart Association. Warning Signs of Heart Failure. AHA, 2024.',
      url: 'https://www.heart.org/en/health-topics/heart-failure/warning-signs-of-heart-failure',
    },
    {
      org: 'AAP',
      citation:
        'Palpallatoc EM, et al. Feeding Difficulties in Infants with Congenital Heart Disease. Pediatrics in Review, 2022;43(1):39-48.',
      url: 'https://publications.aap.org/pediatricsinreview/article/43/1/39/184085/Feeding-Difficulties-in-Infants-With-Unrepaired',
    },
  ],
};
