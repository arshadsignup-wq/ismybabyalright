import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-napping-too-much',
  title: 'My Baby Naps Too Much',
  category: 'sleep',
  searchTerms: [
    'baby napping too much',
    'baby takes long naps',
    'baby sleeping too much during the day',
    'should I wake baby from long nap',
    'baby naps 3 hours is that too long',
    'baby oversleeping during the day',
    'toddler napping too long',
    'baby napping too much affecting night sleep',
    'baby sleeps all day',
    'how long should baby naps be',
  ],
  quickAnswer:
    'How much daytime sleep is "too much" depends heavily on your baby\'s age. Newborns naturally nap frequently and for long stretches, while older babies and toddlers gradually consolidate daytime sleep into fewer, shorter naps. Excessive daytime napping becomes a concern mainly if it consistently interferes with nighttime sleep or if it signals an underlying issue like illness.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns typically sleep 14-17 hours total in a 24-hour period, and most of that comes in short bursts throughout the day and night. There is generally no such thing as "napping too much" at this age, as long as your baby is waking to feed every 2-3 hours and gaining weight appropriately. If your newborn is sleeping through feeding times and you need to wake them, talk with your pediatrician about a feeding schedule.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age typically take 3-4 naps per day totaling about 3-5 hours of daytime sleep. If your baby is napping significantly more than this and is difficult to wake, it may be worth checking with your pediatrician. Long daytime naps can sometimes "steal" from nighttime sleep. A common guideline is to cap individual naps at 2 hours to protect nighttime sleep consolidation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most babies transition to 2 naps per day by 6-9 months, with total daytime sleep of about 2-3.5 hours. If your baby is still napping more than 4 hours during the day and struggling to fall asleep or stay asleep at night, adjusting nap lengths can help. However, during illness or growth spurts, temporarily increased napping is expected and appropriate.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers transition from 2 naps to 1 around 14-18 months, with the single nap typically lasting 1.5-3 hours. If your toddler is napping more than 3 hours and bedtime is becoming a battle or they are waking very early, gently shortening the nap may help. Some children are simply higher sleep-need children, though, and long naps are genuinely what their body requires.',
    },
  ],
  whenNormal: [
    'Your baby is under 3 months and naps frequently throughout the day while waking for regular feeds',
    'Longer naps coincide with a growth spurt, illness recovery, or vaccination',
    'Your baby naps well during the day and also sleeps well at night',
    'Your baby is alert, active, and developing normally during awake periods',
  ],
  whenToMention: [
    'Your baby is consistently sleeping significantly more than age-expected totals and seems lethargic rather than refreshed after sleeping',
    'Excessive daytime napping is making nighttime sleep very fragmented or short',
    'Your baby is difficult to rouse from naps and seems unusually drowsy or uninterested in feeding',
  ],
  whenToActNow: [
    'Your baby is suddenly much sleepier than normal and is difficult to wake, especially combined with fever, poor feeding, or a change in skin color',
    'Your newborn is sleeping through feeds and not waking on their own, and weight gain has stalled or declined',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'circadian-rhythm-development',
    'feeding-schedule-establishment',
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
      org: 'NSF',
      citation:
        'National Sleep Foundation. How Much Sleep Do Babies and Kids Need? SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/children-and-sleep/how-much-sleep-do-kids-need',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Infant Sleep. ClevelandClinic.org.',
      url: 'https://my.clevelandclinic.org/health/articles/14300-newborns-sleep-patterns',
    },
  ],
};
