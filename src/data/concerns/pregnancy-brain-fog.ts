import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-brain-fog',
  title: '"Pregnancy Brain" and Forgetfulness',
  category: 'maternal',
  searchTerms: [
    'pregnancy brain',
    'forgetfulness pregnancy',
    'brain fog pregnant',
    'can\'t concentrate pregnant',
    'memory problems pregnancy',
    'momnesia',
    'pregnancy brain fog',
    'scattered thinking pregnant',
    'losing things pregnant',
    'pregnancy cognitive changes',
  ],
  quickAnswer:
    'Pregnancy brain - the feeling of forgetfulness, difficulty concentrating, or mental fog during pregnancy - is a real phenomenon supported by research. Studies show minor declines in memory and executive function during pregnancy, likely due to hormonal changes, sleep deprivation, and the cognitive load of preparing for a baby. It is temporary and not a sign of any serious condition.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Brain fog may begin early as hormones surge and fatigue sets in. Rising progesterone levels can cause drowsiness and difficulty concentrating. Combined with nausea and emotional adjustments, cognitive function can feel affected. Using lists, phone reminders, and routines can help manage forgetfulness.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Some people find cognitive function improves in the second trimester as energy returns and nausea subsides. For others, brain fog continues. Research suggests that pregnancy-related cognitive changes are subtle and may be more related to attention shifting toward the baby than actual memory loss.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Brain fog is often most noticeable in the third trimester, when sleep disruption is worst and there is the most to prepare for. Be patient with yourself. Use tools like written lists, calendar apps, and asking for help with important tasks. These cognitive changes are temporary and typically resolve in the postpartum period.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Postpartum brain fog can continue due to sleep deprivation and the enormous demands of newborn care. Most people find their cognitive function returns to normal as sleep improves and routines are established, though this may take months.',
    },
  ],
  whenNormal: [
    'Occasionally forgetting appointments, losing track of thoughts, or misplacing items',
    'Difficulty multitasking or focusing that is mild and manageable',
    'Mental fog that worsens with poor sleep and improves with rest',
    'Feeling scattered but still able to function in daily life',
  ],
  whenToMention: [
    'Cognitive changes are severe enough to affect work performance or safety',
    'Memory problems are accompanied by persistent confusion or disorientation',
    'Brain fog is accompanied by other symptoms like severe headache or vision changes',
  ],
  whenToActNow: [
    'Sudden onset of confusion, difficulty speaking, or disorientation, which could indicate a serious medical condition',
    'Cognitive changes accompanied by severe headache, vision changes, or seizures, which could indicate preeclampsia or other emergencies',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Cognitive Changes in Pregnancy: Mild Decline or Positive Adaptation? Medical Journal of Australia, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29320670/',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Pregnancy FAQs. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-insomnia', 'pregnancy-fatigue-extreme'],
};
