import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'sleep-regression-18-months',
  title: '18-Month Sleep Regression',
  category: 'sleep',
  searchTerms: [
    '18 month sleep regression',
    'toddler sleep regression 18 months',
    '18 month old suddenly not sleeping',
    'why is my 18 month old waking at night',
    '18 month sleep regression how long',
    'toddler fighting bedtime 18 months',
    '18 month old won\'t nap anymore',
    'sleep regression at 1.5 years',
    'toddler nightmares 18 months',
    'how to survive 18 month sleep regression',
  ],
  quickAnswer:
    'The 18-month sleep regression is driven by explosive language development, increasing independence, separation anxiety resurgence, and possibly the transition from two naps to one. Your toddler\'s vivid imagination may also lead to new nighttime fears. This phase typically lasts 2-6 weeks with consistent routines.',
  byAge: [
    {
      ageRange: '17-18 months',
      context:
        'Around this age, your toddler is experiencing a massive language explosion, often adding several new words daily. This cognitive work continues during sleep, sometimes causing restlessness or night waking. They\'re also developing a strong sense of independence and may resist bedtime simply to assert autonomy. You might hear them babbling or "talking" in their sleep.',
    },
    {
      ageRange: '18-20 months',
      context:
        'Many toddlers transition from two naps to one during this window, which can temporarily disrupt nighttime sleep until the schedule stabilizes. Separation anxiety often resurges at 18 months as your toddler becomes more aware of being a separate person from you. They may also develop new fears, nightmares, or resistance to their crib. Teething molars are common and can cause pain that disrupts sleep.',
    },
    {
      ageRange: '20-24 months',
      context:
        'Most toddlers settle into a one-nap schedule and sleep consolidates again, though it may look different than before. Your toddler is now capable of more sophisticated bedtime resistance, including requesting multiple stories, drinks, potty trips, or "one more hug." Consistent, loving limits help your toddler feel secure. If sleep remains very disrupted, consider whether schedule, environment, or developmental factors need adjustment.',
    },
    {
      ageRange: '24-30 months',
      context:
        'If sleep difficulties persist well beyond the typical regression window, they may be behavioral rather than developmental. This is the age when some families choose to transition to a toddler bed, which can bring its own sleep challenges. Fear of the dark, monsters, or being alone may emerge. Validation of feelings combined with calm, consistent responses works better than punishment or rewards.',
    },
  ],
  whenNormal: [
    'Your toddler who previously slept well suddenly resists bedtime or starts waking at night',
    'Nap transitions are happening and nighttime sleep is temporarily disrupted',
    'Your toddler is experiencing a language explosion, new fears, or increased independence-seeking',
    'Sleep disturbances coincide with teething molars (usually at 13-19 months)',
    'Changes last 2-6 weeks and gradually improve with consistency',
  ],
  whenToMention: [
    'Sleep regression lasts longer than 8 weeks with no improvement despite consistent routines',
    'Your toddler seems excessively tired, cranky, or is regressing in other developmental areas',
    'You notice snoring, restless sleep, mouth breathing, or pauses in breathing',
    'Night wakings include inconsolable screaming, seeming awake but unaware, or physical aggression',
    'You\'re experiencing burnout or mental health concerns due to chronic sleep deprivation',
  ],
  whenToActNow: [
    'Your toddler has difficulty breathing, turns blue, or stops breathing during sleep',
    'Your toddler is unresponsive, extremely lethargic, or impossible to wake',
    'Sleep issues are accompanied by high fever, severe illness, or signs of injury',
  ],
  relatedMilestones: [
    'language-explosion',
    'independence-autonomy',
    'imagination-development',
    'social-separation-anxiety',
    'nap-transition',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toddler Sleep Problems. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Toddler-Sleep-Problems.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones: 18 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Developmental-Milestones-18-Months.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Toddler Sleep Regressions. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/children-and-sleep/toddler-sleep',
    },
  ],
};
