import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'tablet-dependency-toddler',
  title: 'Tablet Dependency in Toddlers',
  category: 'behavior',
  searchTerms: [
    'toddler addicted to iPad',
    'toddler won\'t put tablet down',
    'toddler tantrums without tablet',
    'toddler needs iPad to eat',
    'toddler can\'t go anywhere without tablet',
    'should I let my toddler use a tablet',
    'toddler iPad every meal',
    'breaking toddler tablet habit',
  ],
  quickAnswer:
    'Tablets are particularly compelling for toddlers because of their interactive, touch-responsive nature. When a toddler relies on a tablet to eat, sit still, or cope with any frustration, it can prevent them from developing important self-regulation skills. The AAP recommends limiting all digital media to 1 hour per day for children ages 2-5. If your toddler seems unable to function without a tablet, gradual reduction paired with engaging alternative activities is the recommended approach.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Tablets and all screens are not recommended for babies under 18 months. Babies benefit from face-to-face interaction, physical touch, and verbal communication rather than digital stimulation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Tablet use remains inappropriate for this age. If tablets are used to soothe or entertain your baby, try substituting with music, sensory toys, or a change of scenery.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies may be drawn to the bright, responsive nature of tablets, but screen-based interaction does not support learning at this age. If you have started using a tablet for meals or car rides, begin transitioning to non-screen alternatives like finger foods, board books, or travel toys.',
    },
    {
      ageRange: '12 months+',
      context:
        'Tablet dependency often develops when the device is routinely used as a pacifier during meals, waiting rooms, car rides, or transitions. To reduce dependency: set clear limits on when and how long the tablet is used, create tablet-free meals and routines, offer specific alternative activities (not just "go play"), and expect some protest during the transition. Most toddlers adjust within 1-2 weeks.',
    },
  ],
  whenNormal: [
    'Your toddler enjoys using a tablet for short periods but can engage with other activities when it is put away',
    'There is a brief protest when the tablet is taken away but your child moves on to other things',
    'Tablet use is limited and does not replace meals, sleep, or active play time',
    'Your child shows interest in a variety of activities beyond the tablet',
  ],
  whenToMention: [
    'Your toddler cannot eat a meal, ride in the car, or sit in any waiting situation without the tablet and has severe meltdowns if it is unavailable',
    'Tablet use has replaced most play, social interaction, and physical activity',
    'Your child shows reduced interest in interacting with people and prefers the tablet over all human interaction',
  ],
  whenToActNow: [
    'Your child\'s dependence on the tablet is accompanied by developmental delays in language, social skills, or motor development',
    'Your child becomes aggressive or self-harming when the tablet is removed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'screen-time-addiction-toddler',
    'educational-apps-effectiveness-toddler',
    'video-call-screen-time-rules',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Media and Young Minds. Pediatrics. 2016.',
      url: 'https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds',
    },
    {
      org: 'NIH',
      citation:
        'Radesky, J. et al. Mobile and Interactive Media Use by Young Children. Pediatrics. 2015.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25452066/',
    },
  ],
};
