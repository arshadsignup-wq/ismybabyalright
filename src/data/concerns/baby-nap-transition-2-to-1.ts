import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-nap-transition-2-to-1',
  title: 'Dropping from 2 Naps to 1 Nap',
  category: 'sleep',
  searchTerms: [
    'dropping to one nap',
    'baby 2 to 1 nap transition',
    'when to drop morning nap',
    'toddler ready for one nap',
    'one nap schedule',
    'signs baby ready for one nap',
    'nap transition 2 to 1',
    'when do babies go to one nap',
    'dropping second nap',
    'toddler fighting morning nap',
  ],
  quickAnswer:
    'Most babies transition from two naps to one between 12 and 18 months, with the average being around 14-15 months. This is one of the trickiest nap transitions because it requires a significant increase in wake time. Be patient - this transition can take 2-4 weeks and often involves some rough days.',
  byAge: [
    {
      ageRange: '10-12 months',
      context:
        'Some babies begin showing signs of readiness around 10-12 months, but this is often a false alarm caused by the 12-month sleep regression or developmental leaps like walking. If your baby suddenly fights one nap but is under 12 months, try adjusting wake windows slightly before dropping a nap entirely. Most sleep experts recommend waiting until at least 12 months to make this transition.',
    },
    {
      ageRange: '12-14 months',
      context:
        'Around 12-14 months, some babies genuinely begin to outgrow the two-nap schedule. Signs include consistently taking 20+ minutes to fall asleep for one or both naps, napping well for one nap but refusing the other, or having bedtime pushed too late. If these signs persist for 2+ weeks, your baby may be ready. However, many babies this age do better staying on two naps a bit longer.',
    },
    {
      ageRange: '14-18 months',
      context:
        'This is the most common window for the 2-to-1 transition. The single nap usually settles around midday (11:30 AM-1:00 PM) and lasts 1.5-3 hours. During the transition, you may need to alternate between one-nap and two-nap days depending on how your toddler slept the night before. Move bedtime earlier on one-nap days to prevent overtiredness.',
    },
    {
      ageRange: '18-24 months',
      context:
        'By 18 months, most toddlers are fully established on one nap. If your child is still on two naps and sleeping well at night, there is no rush to change. However, if nighttime sleep is suffering (taking a long time to fall asleep at bedtime, or waking very early), it may be time. The one-nap schedule should feel settled by now, with a consistent midday nap.',
    },
  ],
  whenNormal: [
    'Your baby is between 12-18 months and consistently fights one of their two naps for 2+ weeks',
    'Your baby takes a long time to fall asleep for one or both naps, suggesting they can handle longer wake windows',
    'During the transition, some days your toddler needs two naps and other days manages on one - this back-and-forth is completely normal',
    'Your toddler is a bit crankier in the late afternoon during the transition - an earlier bedtime helps bridge this gap',
  ],
  whenToMention: [
    'Your toddler seems chronically overtired after dropping to one nap and cannot adjust after 3-4 weeks',
    'Nighttime sleep significantly worsens and does not improve within 2-3 weeks of the transition',
    'Your baby under 12 months is refusing all daytime sleep',
  ],
  whenToActNow: [
    'Your baby is excessively sleepy, seems lethargic, or is very difficult to wake from sleep',
    'Sleep changes are accompanied by other concerning symptoms like weight loss, fever, or behavioral regression',
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
      org: 'NSF',
      citation:
        'National Sleep Foundation. Napping Guidance for Infants and Toddlers. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-naps',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Sleep in Infants and Toddlers. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/002392.htm',
    },
  ],
  relatedConcernSlugs: ['dropping-from-two-naps-to-one', 'wake-windows-by-age', 'fighting-naps', 'sleep-regression-12-months'],
};
