import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'sleepwalking-toddler',
  title: 'My Toddler Sleepwalks',
  category: 'sleep',
  searchTerms: [
    'toddler sleepwalking',
    'child sleepwalking at night',
    'toddler walking in sleep',
    'sleepwalking 2 year old',
    'is sleepwalking normal in toddlers',
    'why does my toddler sleepwalk',
    'child gets out of bed while asleep',
    'sleepwalking in children causes',
    'how to stop toddler sleepwalking',
    'toddler eyes open but asleep walking around',
  ],
  quickAnswer:
    'Sleepwalking is a common parasomnia in children that typically occurs during deep non-REM sleep in the first third of the night. Your child may walk around, open doors, or even talk, all while remaining asleep. It is not a sign of a psychological problem and most children outgrow it by adolescence. The main concern is safety during episodes.',
  byAge: [
    {
      ageRange: '12-24 months',
      context:
        'Sleepwalking can begin as soon as a child is mobile enough to climb out of a crib or walk independently. At this age, what looks like sleepwalking may sometimes be a partial arousal where the child sits up, crawls, or stands in the crib in a dazed state. True sleepwalking with purposeful movement around the house is less common before age 2 but does occur.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Sleepwalking becomes more recognizable in this age range. Your toddler may get out of bed, walk to another room, or try to open doors  -  all while appearing to be awake but actually being in a state of partial arousal from deep sleep. Their eyes may be open but glassy, and they will not respond normally to your voice. Episodes typically last 5-15 minutes. Gently guide them back to bed without forcefully waking them.',
    },
    {
      ageRange: '4-8 years',
      context:
        'This is the peak age for sleepwalking, with about 15-40% of children having at least one episode. It runs strongly in families  -  if one or both parents sleepwalked as children, your child is significantly more likely to as well. Overtiredness, irregular sleep schedules, fever, and stress are common triggers. Most children have infrequent episodes and outgrow them entirely.',
    },
    {
      ageRange: '8+ years',
      context:
        'Sleepwalking typically decreases through later childhood and adolescence as the brain matures. If sleepwalking is still frequent, is increasing in complexity (leaving the house, engaging in potentially dangerous behavior), or is accompanied by other symptoms like bedwetting or excessive daytime sleepiness, a sleep study may be recommended.',
    },
  ],
  whenNormal: [
    'Episodes occur in the first 1-3 hours after falling asleep',
    'Your child does not remember the episode in the morning',
    'Sleepwalking happens occasionally, especially when overtired or sleeping in a new environment',
    'Your child is otherwise healthy, well-rested during the day, and developing normally',
  ],
  whenToMention: [
    'Sleepwalking occurs multiple times per week or is becoming more frequent',
    'Your child also has loud snoring, mouth breathing, or pauses in breathing during sleep that could suggest obstructive sleep apnea',
    'Episodes involve complex or potentially dangerous behavior such as trying to leave the house or going near stairs',
  ],
  whenToActNow: [
    'Your child injures themselves during a sleepwalking episode or is in immediate physical danger',
    'Sleepwalking is accompanied by seizure-like movements, prolonged confusion lasting more than 30 minutes after the episode, or begins after a head injury',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'gross-motor-walking',
    'cognitive-imagination',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleepwalking in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Sleepwalking.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Sleepwalking. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/parasomnias/sleepwalking',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Sleepwalking (Somnambulism). ClevelandClinic.org.',
      url: 'https://my.clevelandclinic.org/health/diseases/14296-sleepwalking',
    },
  ],
};
