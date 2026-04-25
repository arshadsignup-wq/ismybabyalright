import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'early-morning-waking',
  title: 'Baby Waking Too Early in the Morning',
  category: 'sleep',
  searchTerms: [
    'baby waking up too early',
    'baby wakes at 5am every morning',
    'how to get baby to sleep later',
    'toddler waking too early',
    'baby early morning waking',
    'baby wakes up at 4am',
    'why does my baby wake up so early',
    'baby waking before 6am',
    'how to fix early morning wake ups baby',
    'baby waking at dawn',
  ],
  quickAnswer:
    'Early morning waking (before 6 AM) is one of the trickiest sleep issues because it is driven by biology  -  the drive to sleep is at its lowest in the early morning hours, and light exposure can easily trigger a full wake-up. The most effective solutions are darkening the room, ensuring the last nap is not too late or too early, and adjusting bedtime.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Very early waking in newborns is completely normal. Their circadian rhythms are still developing and they do not yet distinguish day from night reliably. Exposing your baby to natural daylight during wake periods and keeping night feeds dim and quiet helps establish the day-night cycle over the first 3-4 months.',
    },
    {
      ageRange: '4-8 months',
      context:
        'As circadian rhythms mature, most babies begin to settle into a more predictable wake time. If your baby is consistently waking before 6 AM, check that the room is genuinely dark  -  even small amounts of light from windows or devices can signal "morning" to a baby\'s sensitive internal clock. A too-late or too-early bedtime can both contribute.',
    },
    {
      ageRange: '8-12 months',
      context:
        'Early waking at this age is often connected to nap timing. If the afternoon nap ends too early, your baby may need a slightly earlier bedtime, which paradoxically can help them sleep later in the morning. If the last nap goes too late, it can push bedtime late and fragment the early morning sleep.',
    },
    {
      ageRange: '12-24 months',
      context:
        'The transition from two naps to one (usually around 14-18 months) commonly triggers temporary early waking. During this transition, some days your toddler may need two naps and some days one. An "OK-to-wake" clock can be introduced around 18-24 months to help toddlers learn to wait for an appropriate wake time.',
    },
  ],
  whenNormal: [
    'Your baby wakes between 6:00 and 7:00 AM  -  this is a biologically normal wake time for young children',
    'Early waking started during a seasonal time change or travel across time zones',
    'Your baby wakes early but is happy and well-rested, chatting or playing in the crib',
    'Early waking coincides with a nap transition and improves as the new schedule settles',
  ],
  whenToMention: [
    'Your baby consistently wakes before 5:30 AM despite a dark room and age-appropriate bedtime, and seems tired and cranky all morning',
    'Early waking is accompanied by loud snoring or noisy breathing during the night',
    'Your baby wakes early and seems to be in pain or discomfort, possibly from ear infections, teething, or reflux',
  ],
  whenToActNow: [
    'Your baby wakes gasping, choking, or with blue-tinged lips',
    'Early waking is accompanied by a seizure, high fever, or signs of acute illness',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'circadian-rhythm-development',
    'cognitive-object-permanence',
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
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Sleep Hygiene Tips.',
      url: 'https://www.cdc.gov/sleep/about/tips-for-better-sleep.html',
    },
  ],
};
