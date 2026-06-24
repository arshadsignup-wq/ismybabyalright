import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-sleep-walking-safety',
  title: 'Sleepwalking Safety for Toddlers',
  category: 'sleep',
  searchTerms: [
    'toddler sleepwalking',
    'toddler sleep walking safety',
    'toddler walks in sleep',
    'sleepwalking toddler what to do',
    'toddler gets out of bed while sleeping',
    'is sleepwalking normal for toddlers',
    'how to stop toddler sleepwalking',
    'sleepwalking causes toddler',
    'toddler somnambulism',
    'sleepwalking safety tips child',
  ],
  quickAnswer:
    'Sleepwalking affects about 15% of children, typically beginning between ages 2-6. It occurs during deep non-REM sleep and is not a sign of emotional problems, stress, or neurological issues. Your child will not remember the episode. Sleepwalking tends to run in families and most children outgrow it by adolescence. The primary concern is safety — ensuring your home is secure so your child cannot hurt themselves or leave the house during an episode.',
  byAge: [
    {
      ageRange: '12-24 months',
      context:
        'Sleepwalking is uncommon in this age group but can occur. At this age, the main concern is safety in the crib or sleep space. If your toddler climbs out of the crib while still asleep, it may be time to transition to a toddler bed with safety railings. If your child is truly sleepwalking (eyes open but glassy, unresponsive, moving purposelessly), gently guide them back to bed without waking them. Do not restrain or yell at a sleepwalking child, as this can cause confusion and distress.',
    },
    {
      ageRange: '2-4 years',
      context:
        'This is when sleepwalking most commonly begins. Episodes usually occur in the first 1-3 hours after falling asleep and last 5-15 minutes. Your child may walk around the room, go to different parts of the house, or even attempt to open doors. Safety measures are critical: install safety gates at stairs, lock windows and exterior doors (consider childproof locks that are difficult to operate while asleep), remove tripping hazards from floors, and consider a bell or alarm on your child\'s bedroom door to alert you.',
    },
    {
      ageRange: '4-8 years',
      context:
        'Sleepwalking may continue or even become more frequent in this age range before gradually decreasing. Being overtired, having an irregular sleep schedule, or being ill can trigger episodes. If episodes are very frequent (several times per week), your pediatrician may suggest a technique called "scheduled awakenings" where you gently rouse your child 15-30 minutes before the typical episode time to disrupt the sleep cycle. Most children outgrow sleepwalking by adolescence without treatment.',
    },
  ],
  whenNormal: [
    'Sleepwalking episodes occur in the first few hours of sleep and last less than 15 minutes',
    'Your child has their eyes open but seems dazed and does not respond normally to you',
    'Your child does not remember the episode in the morning',
    'Episodes happen occasionally and increase when your child is overtired or sick',
  ],
  whenToMention: [
    'Sleepwalking occurs multiple times per week and you are struggling to keep your child safe',
    'Your child is also having night terrors, bedwetting, or excessive daytime sleepiness',
    'Your child snores loudly or has pauses in breathing during sleep, which could indicate sleep apnea contributing to sleepwalking',
  ],
  whenToActNow: [
    'Your child has injured themselves during a sleepwalking episode or you have found them in a dangerous location (near stairs, outside the house)',
    'Your child has seizure-like activity during nighttime episodes — rhythmic jerking, stiffening, or unusual posturing',
    'Sleepwalking began suddenly after a head injury or new medication',
  ],
  relatedMilestones: [
    'sleep-consolidation',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-sleep-talking-normal',
    'night-terrors',
    'confusional-arousals',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleepwalking in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Sleepwalking.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Sleepwalking. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK526014/',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Sleepwalking in Children.',
      url: 'https://www.sleepfoundation.org/parasomnias/sleepwalking',
    },
  ],
};
