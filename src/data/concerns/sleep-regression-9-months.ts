import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sleep-regression-9-months',
  title: '9-Month Sleep Regression',
  category: 'sleep',
  searchTerms: [
    '9 month sleep regression',
    'baby sleep regression 9 months',
    'nine month old not sleeping',
    'baby waking at night 9 months',
    '9 month old fighting bedtime',
    'separation anxiety 9 months sleep',
    'baby crawling won\'t sleep',
    'sleep regression 8 9 10 months',
    '9 month old nap problems',
    'how long does 9 month sleep regression last',
  ],
  quickAnswer:
    'The 9-month sleep regression is primarily driven by separation anxiety, which peaks between 8 and 10 months, combined with major physical milestones like crawling, pulling to stand, and cruising. Your baby now understands object permanence (that you still exist when they cannot see you), which makes separation at bedtime much harder. This regression typically lasts 2-6 weeks and is best managed by maintaining consistent routines while offering additional reassurance.',
  byAge: [
    {
      ageRange: '8-9 months',
      context:
        'Separation anxiety is a healthy, normal developmental milestone that shows your baby has formed a strong attachment to you. However, it can wreak havoc on sleep when your baby cries intensely every time you leave the room. They may also be pulling to stand in their crib and unable to figure out how to get back down, leading to frustrated middle-of-the-night wake-ups. Practice sitting down from standing during the day so your baby can learn this skill. Brief, calm reassurance visits (without picking up) can help them learn you are nearby without creating dependency on your presence to fall asleep.',
    },
    {
      ageRange: '9-10 months',
      context:
        'The combination of crawling, pulling to stand, and brain development makes this a particularly active period for nighttime disruption. Your baby may fight naps because they would rather practice their new skills, leading to overtiredness that paradoxically makes night sleep worse. Maintain consistent nap and bedtime routines. Most babies this age need 2 naps totaling 2.5-3.5 hours, with wake windows of about 3-3.5 hours. The third nap, if your baby was still taking one, is typically dropped during this period.',
    },
    {
      ageRange: '10-12 months',
      context:
        'Sleep typically improves as your baby adjusts to their new abilities and separation anxiety begins to stabilize. If your baby has learned to stand in the crib, they will eventually learn to sit back down. If sleep remains significantly disrupted past 12 months, evaluate whether nap timing needs adjustment, consider whether teething is contributing, and ensure your baby is getting enough daytime calories. Persistent sleep problems may also indicate that a gentle sleep training approach could be helpful.',
    },
  ],
  whenNormal: [
    'Your baby suddenly clings to you and cries when you try to leave the room at bedtime',
    'Your baby stands in their crib and seems unable to lie back down',
    'Nap resistance increases as your baby wants to practice crawling and standing',
    'Night wakings increase for 2-6 weeks during this developmental period',
  ],
  whenToMention: [
    'Sleep disruption lasts more than 6-8 weeks with no improvement',
    'Your baby seems excessively anxious during the day, not just at sleep times',
    'You notice snoring, mouth breathing, or breathing pauses during sleep',
    'You are struggling with your own sleep deprivation and need support',
  ],
  whenToActNow: [
    'Your baby has difficulty breathing, stops breathing, or turns blue during sleep',
    'Your baby has a high fever with extreme lethargy or is impossible to wake',
    'Your baby has fallen or injured themselves trying to climb out of the crib',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sleep-regression-6-months',
    'sleep-regression-18-months',
    'overtired-baby-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Separation Anxiety. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Soothing-Your-Childs-Separation-Anxiety.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Sleep Regressions. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-sleep-regression',
    },
  ],
};
