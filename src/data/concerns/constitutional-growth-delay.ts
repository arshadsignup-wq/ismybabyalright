import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'constitutional-growth-delay',
  title: 'Constitutional Growth Delay',
  category: 'physical',
  searchTerms: [
    'constitutional growth delay baby',
    'late bloomer growth',
    'baby growing slowly but healthy',
    'toddler small for age normal',
    'delayed growth pattern child',
    'constitutional delay of growth and puberty',
    'child short but parents normal height',
    'slow growth normal baby',
  ],
  quickAnswer:
    'Constitutional growth delay (CGD) is a pattern where a child grows at a slower rate during infancy and early childhood but eventually catches up, reaching a normal adult height. These children are often called "late bloomers." Their growth rate typically slows during the first 2-3 years, causing them to fall to a lower percentile, but then continues at a normal rate along that lower curve before experiencing a later-than-average growth spurt. It is a variation of normal growth, not a disease, and often runs in families where a parent was also a late bloomer.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the newborn period, constitutional growth delay is not yet apparent. Most babies with CGD are born at a normal size. The pattern typically begins to show after the first few months of life when growth velocity slows compared to peers. At this stage, if your baby is growing well, there is no concern. If growth is slow, other causes (such as feeding problems or medical conditions) need to be ruled out first.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some babies with constitutional growth delay begin to show a downward shift in their growth percentile during this period. While this pattern looks concerning on a growth chart, the key is that the baby remains proportional (weight and length both lower) and is otherwise healthy and meeting developmental milestones. Your pediatrician will want to ensure adequate nutrition and rule out other causes before attributing the pattern to CGD.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, babies with CGD may have settled into a lower growth percentile  -  for example, dropping from the 50th to the 15th percentile. The important distinction is that once they reach their new curve, they follow it consistently. Family history is helpful: if a parent was short as a child but reached normal adult height, this supports a CGD pattern. Your pediatrician will continue monitoring growth and may check basic labs to rule out thyroid problems, celiac disease, or other conditions.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with CGD are typically the smallest in their age group but are healthy, active, and developing normally. Their bone age (assessed by an X-ray of the wrist) is often delayed compared to chronological age, which actually predicts more remaining growth potential. No treatment is necessary for CGD  -  these children will eventually catch up, often during a later growth spurt around puberty. Ensuring adequate nutrition with a balanced diet supports their growth trajectory.',
    },
  ],
  whenNormal: [
    'Your baby dropped from a higher to a lower growth percentile during the first 1-2 years but is now following the new curve consistently and is otherwise healthy.',
    'A parent or close family member was a "late bloomer" who was small as a child but reached normal adult height  -  CGD often runs in families.',
    'Your toddler is small for age but is proportional, active, eating well, and meeting all developmental milestones.',
    'Your child\'s bone age is delayed relative to chronological age  -  this is consistent with CGD and actually indicates more growth potential.',
  ],
  whenToMention: [
    'Your baby\'s growth has been steadily declining across percentile lines and you want to confirm the pattern is consistent with CGD rather than another condition.',
    'Your toddler is significantly smaller than peers and there is no family history of late blooming.',
    'You notice your child is not just small but also seems fatigued, is not meeting milestones, or has other symptoms.',
  ],
  whenToActNow: [
    'Your baby or toddler\'s growth is decelerating rapidly (crossing multiple percentile lines in a short period) with no clear explanation  -  this needs medical evaluation to rule out underlying conditions.',
    'Your child has poor growth along with symptoms such as chronic diarrhea, vomiting, fatigue, or developmental concerns  -  these suggest a medical cause rather than CGD.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Slow Growth Patterns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Slow-Growth.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Constitutional Growth Delay. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK572067/',
    },
  ],
};
