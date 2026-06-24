import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-catnapping-only-20-minutes',
  title: 'My Baby Only Naps for 20 Minutes',
  category: 'sleep',
  searchTerms: [
    'baby short naps 20 minutes',
    'baby catnapping',
    'baby wont nap longer than 30 minutes',
    'short nap baby normal',
    'why does baby only nap 20 minutes',
    'baby nap too short',
    'extending baby naps',
    'baby 45 minute intruder nap',
    'baby one sleep cycle nap',
    'how to get baby to nap longer',
  ],
  quickAnswer:
    'Short naps (20-45 minutes) are extremely common in babies under 5-6 months and are usually a normal part of sleep maturation. A single sleep cycle for a baby is about 20-45 minutes, and younger babies have not yet learned to link sleep cycles together. Most babies naturally consolidate naps and begin sleeping longer stretches by 5-6 months of age. Short naps do not necessarily mean your baby is not getting enough sleep overall.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Catnapping is very common and developmentally normal at this age. Your baby\'s sleep cycles are short (about 20-45 minutes), and they have not yet developed the ability to transition between cycles without waking. This is a neurological maturation process, not a problem to solve. Many newborns take 4-6 short naps per day. Focus on following your baby\'s sleepy cues and offering frequent nap opportunities rather than trying to extend individual naps.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Around 4-5 months, many babies begin to consolidate their naps, though this is highly individual. The morning nap often lengthens first. If your baby is still catnapping at 5-6 months, you can try strategies like ensuring the room is dark and quiet, offering a consistent pre-nap routine, and experimenting with wake windows (the time between naps). Some babies benefit from being given a few minutes to resettle before being picked up when they wake from a short nap.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 6-8 months, most babies begin taking longer naps, though some healthy babies continue to catnap. If your baby is catnapping but happy, developing normally, and sleeping well at night, they may simply be a naturally short napper. If short naps are accompanied by overtired behavior (fussiness, frequent night waking, difficulty falling asleep), adjusting wake windows or nap timing may help. Most babies transition to two longer naps per day by 8-9 months.',
    },
  ],
  whenNormal: [
    'Your baby is under 5 months and takes multiple short naps throughout the day.',
    'Your baby wakes from short naps happy and alert rather than cranky and overtired.',
    'Your baby is sleeping well at night despite short daytime naps.',
    'Your baby is meeting developmental milestones and growing well.',
  ],
  whenToMention: [
    'Your baby over 6 months is still exclusively catnapping and seems chronically overtired - fussy, irritable, and struggling with night sleep.',
    'Short naps are paired with very frequent night waking and you are concerned about total sleep.',
    'Your baby seems unable to fall asleep at all without extensive intervention and then only sleeps briefly.',
  ],
  whenToActNow: [
    'Your baby seems excessively sleepy but cannot stay asleep for any period - this could indicate an underlying medical issue.',
    'Your baby is showing signs of breathing difficulties during sleep such as snoring, gasping, or pauses in breathing.',
    'Your baby is extremely irritable, not feeding well, and not sleeping despite appearing exhausted.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'overtired-baby-signs',
    'sleep-regression-4-months',
    'baby-fighting-bedtime-every-night',
    'baby-crying-in-sleep-not-waking',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits: How Many Hours Does Your Child Need? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Development of Infant Sleep Patterns. Sleep Medicine Reviews, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28986148/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Naps for Babies and Toddlers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Naps.aspx',
    },
  ],
};
