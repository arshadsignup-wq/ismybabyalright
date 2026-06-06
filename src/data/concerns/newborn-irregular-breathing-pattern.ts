import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-irregular-breathing-pattern',
  title: 'Periodic Breathing in Newborns (Irregular Breathing Pattern)',
  category: 'medical',
  searchTerms: [
    'newborn irregular breathing',
    'baby breathing pattern changes',
    'newborn periodic breathing',
    'baby stops breathing then starts again',
    'newborn breathing pauses normal',
    'baby breathing fast then slow',
    'infant irregular breathing sleep',
    'newborn breathing rhythm changes',
    'baby breath holding',
    'periodic breathing vs apnea',
  ],
  quickAnswer:
    'Periodic breathing in newborns is a normal pattern where breathing alternates between rapid breaths and brief pauses of up to 10 seconds. This is caused by the immaturity of the breathing control center in the brain and is very common in the first few months of life. It is different from apnea, where breathing stops for 20 seconds or more.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Periodic breathing is very common in newborns, especially during sleep. You may notice your baby breathing quickly for a few seconds, then pausing for 5-10 seconds, and then resuming normal breathing. This cycle can repeat multiple times. It is caused by the immature brainstem respiratory center that is still learning to regulate breathing. Periodic breathing is normal as long as pauses last less than 20 seconds, your baby does not turn blue or pale, and there is no change in muscle tone. This pattern is more common in premature babies but also occurs in full-term newborns.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Periodic breathing continues to be common during this period and gradually decreases as the respiratory control center matures. You may notice it less frequently as weeks pass. Continue to observe your baby\'s breathing, keeping in mind the distinction between normal periodic breathing (pauses under 10-15 seconds) and concerning apnea (pauses over 20 seconds with color change).',
    },
    {
      ageRange: '3-6 months',
      context:
        'Periodic breathing becomes much less common by 3-6 months as the brainstem matures. Most babies have more regular breathing patterns by this age. If periodic breathing persists or new breathing irregularities develop, discuss with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Periodic breathing should be rare or absent by this age. Any significant breathing pauses, irregular breathing, or episodes of color change at this age should be promptly evaluated by your doctor.',
    },
  ],
  whenNormal: [
    'Brief breathing pauses (up to 10 seconds) during sleep followed by normal breathing',
    'Alternating fast and slow breathing patterns during sleep',
    'Baby maintains normal skin color during breathing pauses',
    'Baby resumes breathing on their own without any intervention',
  ],
  whenToMention: [
    'Breathing pauses seem to be lasting longer than 10-15 seconds',
    'You notice periodic breathing occurring more frequently or during wakefulness',
    'You are anxious about your baby\'s breathing pattern and want reassurance',
  ],
  whenToActNow: [
    'Breathing pauses lasting 20 seconds or more (apnea), or any pause accompanied by blue or pale skin color, limpness, or change in muscle tone',
    'Baby requires stimulation to resume breathing or does not restart breathing on their own after a pause',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breathing Patterns in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Periodic Breathing in Infants. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537354/',
    },
  ],
  relatedConcernSlugs: ['baby-breathing-patterns-normal', 'apnea-spells-baby', 'newborn-noisy-breathing-normal'],
};
