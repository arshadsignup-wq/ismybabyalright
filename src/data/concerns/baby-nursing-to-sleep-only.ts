import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-nursing-to-sleep-only',
  title: 'My Baby Only Falls Asleep While Nursing',
  category: 'feeding',
  searchTerms: [
    'baby only sleeps nursing',
    'baby falls asleep at breast',
    'baby won\'t sleep without nursing',
    'nursing to sleep association',
    'baby needs breast to sleep',
    'breaking nurse to sleep habit',
    'baby can\'t fall asleep without nursing',
    'nursing to sleep problem',
    'baby sleep dependent on breastfeeding',
    'stop nursing to sleep',
  ],
  quickAnswer:
    'Nursing to sleep is one of the most natural and common ways babies fall asleep. It is biologically designed to work through hormones in breast milk and the sucking reflex. It is not a problem unless it is causing issues for your family. If you want to gently change this pattern, gradually separating feeding from the moment of falling asleep can help.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Nursing to sleep is completely normal and expected in the newborn period. Breast milk even contains sleep-promoting hormones. There is no need to try to break this association at this age. Feed your baby however works for your family.',
    },
    {
      ageRange: '4-6 months',
      context: 'Many babies continue to nurse to sleep at this age and it is still normal. If you would like to start gently encouraging independent sleep, try nursing until baby is drowsy but not fully asleep, then laying them down. This takes practice and patience.',
    },
    {
      ageRange: '6-9 months',
      context: 'If nursing to sleep is causing frequent night wakings because baby needs to nurse to fall back asleep, you may want to work on separating feeding from sleeping. Try moving the nursing session earlier in the bedtime routine, before books or a song, so baby does not fall asleep at the breast.',
    },
    {
      ageRange: '9-12 months',
      context: 'If you want to stop nursing to sleep, this is a common age to make the transition. The key is moving the feed earlier in the routine and having another parent or caregiver do bedtime occasionally. Be patient as it can take 1-2 weeks for new habits to form.',
    },
    {
      ageRange: '12-24 months',
      context: 'Some toddlers continue nursing to sleep and there is nothing wrong with this if it works for your family. If you want to stop, be consistent with a new bedtime routine. Offer extra cuddles and comfort to replace the nursing. Many families successfully make this transition around weaning.',
    },
  ],
  whenNormal: [
    'Baby is under 6 months and nurses to sleep for most naps and bedtime',
    'Baby can occasionally fall asleep without nursing even if it is not the preference',
    'Baby is growing well and nursing to sleep is working for the family',
  ],
  whenToMention: [
    'Baby is waking every hour through the night to nurse back to sleep',
    'Nursing to sleep is causing significant maternal exhaustion or mental health concerns',
    'Baby is over 12 months and absolutely cannot fall asleep without nursing despite wanting to change',
  ],
  whenToActNow: [
    'You are so exhausted from nighttime nursing that you are unsafe, such as falling asleep while holding baby in unsafe positions',
    'Your mental health is severely affected by the sleep deprivation',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-comfort-nursing-excessive', 'baby-falling-asleep-while-nursing', 'night-weaning-readiness'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Sleep and Feeding Associations. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Breastfeeding and Infant Sleep Patterns. Sleep Medicine Reviews, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
