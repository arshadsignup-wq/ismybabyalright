import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'daytime-sleepiness-normal',
  title: 'Daytime Sleepiness in Babies and Toddlers',
  category: 'sleep',
  searchTerms: [
    'baby sleepy during the day',
    'toddler excessively sleepy',
    'baby napping too much',
    'baby always tired',
    'toddler sleepy all day',
    'baby drowsy all the time',
    'when is daytime sleepiness normal baby',
    'baby too sleepy to eat',
    'excessive sleepiness baby',
  ],
  quickAnswer:
    'Some daytime sleepiness in babies and toddlers is completely normal  -  young children need significantly more sleep than adults, and napping is an essential part of their day. However, excessive sleepiness that goes beyond normal nap needs, particularly sleepiness that interferes with feeding or that represents a change from your child\'s baseline, deserves attention.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns sleep 14-17 hours per day and may only be awake for 45-90 minutes at a time, so frequent daytime sleepiness is expected. In the first 2 weeks, extra sleepiness is common, but babies should still wake to feed at least every 2-3 hours. A newborn who is excessively difficult to wake, does not rouse for feeds, or is not having adequate wet diapers needs medical evaluation  -  these can be signs of jaundice, infection, or dehydration.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age need about 14-15 hours of total sleep, including 3-4 daytime naps. Sleepiness is expected within age-appropriate wake windows. If your baby is sleeping significantly more than typical and seems harder to engage during awake periods, or if daytime sleepiness is new and accompanied by poor feeding, it is worth mentioning to your doctor. Growth spurts can temporarily increase sleepiness for 2-3 days.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Total sleep needs are about 12-15 hours, with 2-3 daytime naps. A baby who is drowsy outside of nap times may be getting poor-quality nighttime sleep  -  consider whether snoring, mouth breathing, or restless sleep are present. If daytime sleepiness comes on suddenly or your baby falls asleep in situations where they are usually alert (during play, in the high chair), this warrants evaluation.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers need 11-14 hours of total sleep. A well-rested toddler on an appropriate schedule should be alert and energetic during awake times. If your toddler is falling asleep at unusual times  -  during meals, while playing, or while watching a show  -  this may indicate poor nighttime sleep quality, sleep-disordered breathing, or a medical issue such as anemia. Excessive sleepiness that persists beyond a brief illness should be evaluated.',
    },
  ],
  whenNormal: [
    'Your baby is sleepy within age-appropriate wake windows and naps the expected number of times per day',
    'Brief periods of extra sleepiness during a growth spurt, after vaccinations, or while fighting a mild illness',
    'Your baby is alert, engaged, and feeding well during awake periods between naps',
    'Increased sleepiness for 1-2 days during a sleep regression or developmental leap that then resolves',
  ],
  whenToMention: [
    'Your baby or toddler seems sleepier than usual for more than a few days without an obvious explanation like illness or schedule changes',
    'Daytime sleepiness is accompanied by snoring, mouth breathing, or restless sleep at night  -  this may indicate obstructive sleep apnea',
    'Your toddler is falling asleep at inappropriate times like during meals or active play',
    'You notice excessive sleepiness along with pallor, reduced activity, or decreased appetite',
  ],
  whenToActNow: [
    'A newborn who is very difficult to wake, will not feed, or is having fewer than the expected number of wet diapers needs urgent evaluation for jaundice, infection, or dehydration',
    'Sudden onset of extreme sleepiness or lethargy in any child, especially after a head injury, with fever, or with a stiff neck  -  seek emergency care immediately',
  ],
  relatedMilestones: [],
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
        'American Academy of Pediatrics. Sleep Apnea Detection. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Sleep-Apnea-Detection.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. How Much Sleep Is Enough?',
      url: 'https://www.nhlbi.nih.gov/health/sleep/how-much-sleep',
    },
  ],
};
