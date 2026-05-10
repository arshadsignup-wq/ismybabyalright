import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'screen-time-addiction-toddler',
  title: 'Screen Time Addiction in Toddlers',
  category: 'behavior',
  searchTerms: [
    'toddler addicted to TV',
    'toddler screams when screen is turned off',
    'too much screen time toddler effects',
    'toddler won\'t stop watching tablet',
    'screen time tantrum toddler',
    'how much screen time is too much for toddler',
    'toddler obsessed with phone',
    'screen time behavior problems toddler',
    'toddler only calm with screen',
  ],
  quickAnswer:
    'While toddlers cannot be clinically "addicted" to screens in the way adults can, they can develop a strong dependence on screen-based stimulation that makes it hard to transition away. The AAP recommends avoiding screen time for children under 18 months (except video calls) and limiting screen time to 1 hour per day of high-quality programming for ages 2-5. If your toddler has meltdowns when screens are turned off or seems disinterested in other activities, it may be time to gradually reduce screen use.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The AAP recommends no screen time for babies under 18 months except for video calls with family. Babies this young cannot learn from screens and are better served by face-to-face interaction. Background TV can be overstimulating and may interfere with language development.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Screens remain inappropriate for this age group. Babies may be drawn to bright colors and movement on screens, but this is a reflexive response, not engagement. Continue to prioritize interactive play, tummy time, and talking to your baby.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The no-screen recommendation continues through 18 months. If screens have been introduced, babies may fuss when they are turned off simply because the stimulation stops. This is not addiction but a preference for high-stimulation input. Offer engaging alternatives like music, sensory play, or outdoor time.',
    },
    {
      ageRange: '12 months+',
      context:
        'After 18-24 months, limited high-quality programming (like Sesame Street) can be appropriate, ideally co-viewed with a parent. If your toddler has intense meltdowns when screens are turned off, has lost interest in toys and play, or uses screens for several hours daily, a gradual reduction plan is recommended. Replace screen time with specific activities rather than simply removing the screen.',
    },
  ],
  whenNormal: [
    'Your toddler protests briefly when the screen is turned off but transitions to another activity within a few minutes',
    'Your child enjoys screen time but is also engaged in play, books, and interactive activities throughout the day',
    'Your toddler watches 1 hour or less per day of age-appropriate content',
    'Screen time does not interfere with sleep, meals, or physical activity',
  ],
  whenToMention: [
    'Your toddler has extreme, prolonged meltdowns (30+ minutes) whenever screens are removed and cannot be redirected to any other activity',
    'Screen time has replaced most other forms of play, and your child shows little interest in toys, books, outdoor play, or social interaction',
    'You notice your child\'s language development, sleep, or behavior has worsened since screen time increased',
  ],
  whenToActNow: [
    'Your child is showing signs of developmental delay — limited language, poor social engagement, lack of imaginative play — and is spending several hours per day on screens',
    'Screen use is affecting your child\'s basic functioning — refusing meals, severely disrupted sleep, or complete disengagement from family interactions',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'tablet-dependency-toddler',
    'video-call-screen-time-rules',
    'educational-apps-effectiveness-toddler',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Media and Young Minds. Pediatrics. 2016.',
      url: 'https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Guidelines on Physical Activity, Sedentary Behaviour and Sleep for Children Under 5 Years of Age. 2019.',
      url: 'https://www.who.int/publications/i/item/9789241550536',
    },
  ],
};
