import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-needs-rocking-to-sleep',
  title: 'Baby Needs Rocking to Sleep',
  category: 'sleep',
  searchTerms: [
    'baby needs rocking to sleep',
    'baby only falls asleep rocking',
    'baby won\'t sleep without being rocked',
    'how to stop rocking baby to sleep',
    'is rocking baby to sleep bad',
    'baby dependent on rocking',
    'rocking baby sleep habit',
    'baby wakes when put down',
    'when to stop rocking baby',
    'rocking to sleep newborn',
  ],
  quickAnswer:
    'Rocking your baby to sleep is a perfectly natural and loving way to help them drift off. It is not a bad habit - it is responsive parenting. If rocking is working for your family, there is no need to change anything. If you would like your baby to learn to fall asleep with less help, gentle, gradual approaches work best.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Rocking a newborn to sleep is completely normal and appropriate. Young babies have immature nervous systems and need help regulating. The rhythmic motion of rocking mimics what they felt in the womb and is deeply comforting. There is no such thing as spoiling a newborn, and you cannot create bad habits at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If rocking is working for everyone, continue as long as you like. If you want to gradually reduce rocking, try rocking until your baby is drowsy but not fully asleep, then placing them down. You can keep a hand on their chest for reassurance. This gentle approach helps babies begin to learn the last bit of falling asleep in their sleep space.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, some babies become heavier and rocking becomes physically demanding. If you want to transition away, try rocking for a shorter time and placing baby down progressively more awake over several nights. Patting, shushing, or gentle presence can be intermediate steps. There is no deadline - do what works for your family.',
    },
    {
      ageRange: '1-2 years',
      context:
        'If you are still rocking your toddler to sleep and it is not a problem for you, that is fine. If you would like to stop, toddlers can understand more than you might think. You can explain that you will sit next to their bed instead of rocking. A gradual chair method - sitting closer each night to the door - can work well at this age.',
    },
  ],
  whenNormal: [
    'Your baby or toddler falls asleep easily with rocking and stays asleep once transferred',
    'Rocking is a calming part of your bedtime routine that you both enjoy',
    'Baby wakes briefly when transferred but settles back to sleep within a few minutes',
    'Your baby gradually needs less rocking over time as they mature',
  ],
  whenToMention: [
    'Rocking is the only way your baby will sleep and you are physically exhausted or experiencing pain',
    'Your baby wakes fully every sleep cycle (every 45-90 minutes) requiring rocking back to sleep each time, and the sleep deprivation is affecting your health',
    'You are concerned about your own mental health due to the demands of sustained rocking',
  ],
  whenToActNow: [
    'You are so exhausted from rocking that you are falling asleep holding your baby in unsafe positions like on a couch or recliner',
    'You feel anger or frustration building to a level that scares you - put baby in a safe place and step away',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Responding to Your Baby\'s Cues. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Responding-to-Your-Babys-Cues.aspx',
    },
  ],
};
