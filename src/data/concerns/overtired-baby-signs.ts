import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'overtired-baby-signs',
  title: 'My Baby Seems Overtired but Won\'t Sleep',
  category: 'sleep',
  searchTerms: [
    'overtired baby won\'t sleep',
    'signs of overtired baby',
    'baby too tired to sleep',
    'overtired newborn',
    'baby fighting sleep overtired',
    'how to get overtired baby to sleep',
    'overtired baby screaming',
    'baby yawning but won\'t sleep',
    'baby missed sleep window',
    'overtired baby hysterical',
  ],
  quickAnswer:
    'When a baby becomes overtired, their body produces cortisol and adrenaline as a stress response, which paradoxically makes it harder for them to fall asleep. This creates a frustrating cycle: the more tired your baby gets, the harder it is for them to settle. Recognizing your baby\'s early sleepy cues and catching the right sleep window is the most effective prevention strategy.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have very short awake windows  -  typically only 45-90 minutes before they need to sleep again. Because these windows are so short, it is easy to miss them. Early sleepy cues include staring off into space, becoming quiet, losing interest in toys or faces, and making jerky movements. By the time your newborn is yawning, rubbing eyes, or fussing, they may already be entering the overtired zone. If you miss the window, try reducing stimulation: dim lights, quiet room, gentle rhythmic motion, and swaddling.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Awake windows extend to about 1.5-2.5 hours. At this age, you can begin to anticipate your baby\'s sleep needs based on time since their last nap rather than relying solely on sleepy cues, since some babies stop showing obvious signs. If your baby becomes overtired, a calming pre-sleep routine (even a brief 5-minute version) can help signal that it is time to wind down. An earlier bedtime can help break the overtired cycle.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Awake windows are typically 2-3.5 hours. Overtiredness at this age often happens during nap transitions  -  for example, when your baby drops from 3 naps to 2 and the awake windows are suddenly too long. Signs of overtiredness include hyperactivity, clinginess, clumsiness, and a "wired" appearance. An earlier bedtime (even 30-60 minutes earlier than usual) is often the most effective reset.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers have awake windows of 3-5.5 hours. The transition from 2 naps to 1 (around 14-18 months) is a common trigger for overtiredness. Your toddler may seem energetic and resist sleep while actually running on stress hormones. Consistent nap times and an early-enough bedtime are the best defenses. If your toddler is overtired at bedtime, a calming routine with no screens for at least an hour before sleep can help their body shift gears.',
    },
  ],
  whenNormal: [
    'Your baby occasionally gets overtired after a disrupted day and has difficulty settling, but this is not a daily pattern',
    'An overtired episode resolves with extra soothing and your baby sleeps well once they finally fall asleep',
    'Your baby shows predictable sleepy cues that you can learn to read and respond to',
    'Overtiredness coincides with schedule disruptions like travel, visitors, or a nap transition',
  ],
  whenToMention: [
    'Your baby seems chronically overtired despite your best efforts to maintain an age-appropriate schedule, and is consistently irritable and difficult to console',
    'Overtiredness is causing significant feeding difficulties  -  your baby is too agitated or exhausted to feed effectively',
    'You are struggling with postpartum mood changes that are worsened by your baby\'s sleep difficulties and need support',
  ],
  whenToActNow: [
    'Your baby is inconsolable for extended periods, has a high-pitched or unusual cry, and appears to be in pain rather than simply overtired',
    'Extreme irritability and difficulty sleeping are accompanied by fever, vomiting, rash, or other signs of illness',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'self-soothing',
    'emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits: How Many Hours Does Your Child Need? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Overtired Baby: Signs and How to Help. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/baby-sleep',
    },
  ],
};
