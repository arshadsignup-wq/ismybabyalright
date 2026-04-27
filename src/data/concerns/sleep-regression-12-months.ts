import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sleep-regression-12-months',
  title: '12-Month Sleep Regression',
  category: 'sleep',
  searchTerms: [
    '12 month sleep regression',
    'baby sleep regression 12 months',
    'one year old not sleeping',
    '12 month old waking up at night',
    '1 year old sleep regression',
    '12 month sleep problems',
    '12 month old fighting sleep',
    '12 month nap refusal',
    'baby sleep worse at 12 months',
    '12 month old won\'t sleep',
    'sleep regression walking',
    '12 month sleep regression how long',
  ],
  quickAnswer:
    'The 12-month sleep regression is driven by major developmental changes - many babies are learning to walk, experiencing separation anxiety, and developing a stronger will. Your baby may start fighting bedtime, waking more at night, refusing naps, or waking earlier than usual. This regression typically lasts 2-6 weeks. The most common mistake is dropping to one nap too early - most 12-month-olds still need two naps. Maintain consistent routines and this phase will pass.',
  byAge: [
    {
      ageRange: '11-12 months',
      context:
        'The regression often begins around 11-12 months as babies approach their first birthday. They may be pulling up to stand in the crib, cruising, or taking first steps. These exciting motor milestones make it hard to settle down. Your baby might stand in the crib and cry instead of lying down. Separation anxiety also peaks around this time, making it harder for baby to let you leave the room. Practice the new motor skills during the day so they are less compelling at night.',
    },
    {
      ageRange: '12-13 months',
      context:
        'This is the heart of the regression. Common symptoms include: refusing one or both naps, taking much longer to fall asleep at bedtime, waking 1-3 times at night when they previously slept through, and early morning waking. Many parents assume this means it is time to drop to one nap, but this usually makes things worse. Most babies are not ready for one nap until 14-18 months. Keep offering two naps and push through. The regression is temporary.',
    },
    {
      ageRange: '13-14 months',
      context:
        'Most babies come through the regression by 13-14 months and return to their previous sleep patterns if parents maintained consistent routines. If sleep has not improved after 6 weeks, reassess the schedule - ensure wake windows are appropriate (about 3-4 hours between sleeps) and bedtime is not too late. If your baby seems to genuinely not need two naps anymore (consistently taking 30+ minutes to fall asleep for the second nap), it may be time to cautiously trial one nap.',
    },
  ],
  whenNormal: [
    'Your 12-month-old was sleeping well and suddenly started waking at night or fighting sleep',
    'The sleep disruption coincides with learning to walk, talk, or other developmental milestones',
    'Your baby is otherwise healthy, eating well, and developing normally',
    'Sleep disruption lasts 2-6 weeks and then gradually improves',
  ],
  whenToMention: [
    'Sleep disruption has lasted more than 6 weeks without any improvement',
    'Your baby seems to be in pain when lying down (pulling at ears, arching back) suggesting possible illness',
    'Your baby is snoring, mouth breathing, or having pauses in breathing during sleep',
    'Chronic sleep deprivation is significantly affecting your or your baby\'s daily functioning',
  ],
  whenToActNow: [
    'Your baby has stopped breathing during sleep or has turned blue',
    'Your baby is extremely lethargic, unable to wake fully, or has a high fever alongside the sleep changes',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'social-emotional-separation-anxiety',
    'language-first-words',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['sleep-regression-8-months', 'sleep-regression-18-months', 'separation-anxiety', 'dropping-from-two-naps-to-one'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Sleep Consolidation in Infancy. Sleep Medicine Reviews.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25600473/',
    },
  ],
};
