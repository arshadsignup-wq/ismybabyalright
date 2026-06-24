import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-wont-stop-crying-at-night',
  title: 'Baby Won\'t Stop Crying at Night',
  category: 'behavior',
  searchTerms: [
    'baby crying all night',
    'baby won\'t stop crying at night',
    'newborn crying inconsolably at night',
    'baby screaming at night won\'t sleep',
    'why does my baby cry so much at night',
    'baby colic at night',
    'how to soothe baby crying at night',
    'baby fussy every evening',
    'witching hour baby',
    'baby up all night crying',
    'newborn screaming at bedtime',
    'baby inconsolable at night',
  ],
  quickAnswer:
    'Nighttime crying is extremely common in young babies and is usually not a sign of anything wrong. Many newborns have a fussy period in the evening (often called the "witching hour"), and colic-like crying peaks around 6 weeks of age and typically improves by 3-4 months. However, sudden changes in crying patterns or inconsolable crying with other symptoms should be evaluated by a doctor.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Nighttime crying is most intense during this period. Many babies have a predictable fussy period in the late afternoon or evening, sometimes lasting several hours. This is often attributed to colic, which affects up to 25% of infants. The "period of PURPLE crying" framework describes this normal developmental phase that peaks around 6 weeks and typically resolves by 3-4 months. Soothing strategies include swaddling, shushing, swinging, sucking, and side/stomach positioning while held. Always place your baby on their back to sleep.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, colic-type crying usually has resolved significantly. If your baby is still crying extensively at night, consider hunger, overtiredness, sleep environment issues, or developmental leaps. Babies this age are developing more predictable sleep patterns, and establishing a calming bedtime routine can help. Some babies cry due to undertiredness if naps were too long or too close to bedtime.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Nighttime crying at this age is often related to separation anxiety, teething, sleep regressions, or hunger from growth spurts. Babies around 8-10 months commonly experience separation anxiety that makes them cry when put down at night. Teething pain can also disrupt sleep and cause nighttime waking with crying. Consistent, reassuring bedtime routines help your baby feel secure.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers may cry at night due to nightmares, night terrors, fears, or changes in routine such as a new sibling or a move. Separation anxiety can resurge around 18 months. If your toddler suddenly starts waking and crying at night after sleeping well, consider environmental factors, illness, or emotional stressors. Consistent reassurance and a predictable bedtime routine remain the most effective strategies.',
    },
  ],
  whenNormal: [
    'Your baby has a predictable fussy period in the evening but is otherwise feeding well and gaining weight.',
    'Your baby is under 3 months and cries for stretches at night but can eventually be soothed.',
    'The crying follows a pattern and is not accompanied by fever, vomiting, or unusual lethargy.',
  ],
  whenToMention: [
    'Your baby is crying more than 3 hours a day, more than 3 days a week, and this pattern has continued for more than 3 weeks.',
    'You notice the crying is getting worse instead of better after 3-4 months of age.',
    'The crying seems to be associated with feeding (arching back, pulling off the breast or bottle).',
  ],
  whenToActNow: [
    'Your baby has a sudden change in cry (high-pitched, weak, or unusual-sounding) combined with fever, vomiting, or lethargy.',
    'Your baby is inconsolable and has a swollen or tense abdomen, bloody stool, or is drawing legs up as if in severe pain.',
    'You feel you are at risk of losing your temper or harming your baby -- put the baby in a safe place and call for help immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['high-needs-baby', 'overtired-baby-signs', 'baby-screaming-in-sleep', 'excessive-gas-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Coping with Colic. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Coping-with-Colic.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Responding to Your Baby\'s Cries. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Responding-to-Your-Babys-Cries.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Safe to Sleep Campaign: Crying and Your Baby.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
};
