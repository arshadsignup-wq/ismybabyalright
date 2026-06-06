import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sleep-environment-optimal',
  title: 'Setting Up the Best Sleep Environment for Baby',
  category: 'sleep',
  searchTerms: ['baby sleep environment','optimal room baby sleep','baby room temperature sleep','baby sleep room setup','dark room baby sleep','baby sleep conditions','best room for baby sleep','baby nursery sleep tips','baby room too hot cold sleep','ideal nursery setup sleep'],
  quickAnswer: 'The ideal sleep environment includes a firm flat mattress with only a fitted sheet, room temperature between 68-72°F (20-22°C), darkness, and optionally white noise at moderate volume. A boring, consistent environment helps your baby associate the space with sleep.',
  byAge: [
    { ageRange: '0-6 months', context: 'Follow safe sleep guidelines: firm flat mattress, no bumpers, blankets, pillows, or stuffed animals. Room temp 68-72°F. Dress baby in a sleep sack. Room-sharing is recommended for at least the first 6 months. A dark room and white noise at moderate volume can help.' },
    { ageRange: '6-12 months', context: 'Darkness helps melatonin production - invest in blackout curtains. White noise at 50-65 dB masks household sounds. Continue with a bare crib until 12 months. Keep the room cool and dress appropriately for temperature.' },
    { ageRange: '12-24 months', context: 'After 12 months you can introduce a small breathable lovey, though a sleep sack remains safest. Keep the crib mostly bare. Maintain dark, cool environment. A dim amber nightlight is less disruptive than blue or white light if needed.' },
    { ageRange: '2-3 years', context: 'When transitioning to a toddler bed, childproof the room thoroughly. Anchor furniture, cover outlets, secure blind cords. The sleep space should remain boring - no screens, minimal visible toys. Continue with consistent temperature, darkness, and white noise if used.' },
  ],
  whenNormal: ['You optimize the room and your baby sleeps better','Room temperature varies slightly and you adjust clothing layers','Your baby sleeps well even if the environment is not textbook perfect','You make adjustments as seasons change'],
  whenToMention: ['Your baby consistently sweats or seems too hot despite appropriate temperature','Your baby cannot sleep unless conditions are exactly perfect making travel impossible','You are unsure about safe sleep setup for your specific situation'],
  whenToActNow: ['Your baby shows signs of overheating: flushed skin, sweating, rapid breathing','Your baby has breathing difficulties related to the sleep environment'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'Moon RY et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics. 2022;150(1):e2022057990.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/' },
    { org: 'NSF', citation: 'National Sleep Foundation. Baby Sleep Environment. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/baby-sleep/baby-sleep-environment' },
    { org: 'NIH', citation: 'National Institutes of Health. Safe to Sleep Campaign.', url: 'https://safetosleep.nichd.nih.gov/' },
  ],
  relatedConcernSlugs: ['sleep-safe-environment-checklist','baby-white-noise-dependency','baby-dark-room-necessary','baby-sweating-during-sleep'],
};
