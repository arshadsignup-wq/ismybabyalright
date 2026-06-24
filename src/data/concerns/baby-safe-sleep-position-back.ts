import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-safe-sleep-position-back',
  title: 'Safe Sleep Position: Back Sleeping for Babies',
  category: 'sleep',
  searchTerms: [
    'baby safe sleep position',
    'baby sleep on back',
    'back to sleep campaign',
    'baby sleep position SIDS',
    'can baby sleep on side',
    'newborn sleep position',
    'baby choking sleeping on back',
    'baby won\'t sleep on back',
    'safe sleep guidelines baby',
    'ABC safe sleep baby',
    'baby sleep on stomach risk',
  ],
  quickAnswer:
    'Placing your baby on their back for every sleep, including naps, is the single most important action to reduce the risk of SIDS (Sudden Infant Death Syndrome). The "Back to Sleep" campaign has reduced SIDS deaths by over 50% since its introduction. Babies should sleep on their backs until they can roll both ways on their own, typically around 4-6 months. Healthy babies are not more likely to choke when sleeping on their backs.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Always place your baby on their back on a firm, flat surface for every sleep. Use a safety-approved crib, bassinet, or play yard with a tight-fitting sheet and nothing else in the sleep space - no pillows, blankets, bumpers, stuffed animals, or positioners. The ABCs of safe sleep are: Alone, on their Back, in a Crib. Many parents worry that back sleeping increases choking risk, but babies have a natural gag reflex and airway anatomy that protects them. Back sleeping is safer even for babies with reflux.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue placing your baby on their back at the start of every sleep. Around 4-6 months, many babies learn to roll over. Once your baby can roll both ways (back to tummy and tummy to back) independently, you do not need to reposition them if they roll to their stomach during sleep. However, always start them on their back. This is also a good time to stop swaddling, as a swaddled baby who rolls to their stomach is at increased risk. Transition to a sleep sack.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue starting your baby on their back for sleep even though they may roll to their preferred position. By this age, most babies have developed the strength and coordination to move their head and body if their airway becomes obstructed. The sleep space should still be free of loose bedding, pillows, and soft toys. The risk of SIDS decreases after 6 months but remains present until 12 months, so safe sleep practices should continue.',
    },
  ],
  whenNormal: [
    'Your baby sleeps peacefully on their back and you start them in this position for every sleep.',
    'Your baby has learned to roll both ways and sometimes ends up on their stomach during sleep.',
    'Your baby initially fusses when placed on their back but settles within a few minutes.',
  ],
  whenToMention: [
    'Your baby strongly resists back sleeping and you are struggling to follow safe sleep guidelines.',
    'A caregiver, family member, or cultural practice conflicts with back sleeping recommendations.',
    'Your baby has a medical condition and you are unsure if back sleeping is appropriate.',
  ],
  whenToActNow: [
    'You find your baby face-down in soft bedding, pillows, or a gap between surfaces and they are not moving.',
    'Your baby is sleeping in an unsafe location like a couch, recliner, or adult bed and cannot be moved without waking.',
    'Your baby stops breathing, turns blue, or becomes limp during sleep.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sids-risk-reduction-checklist', 'baby-sleeping-face-down', 'baby-room-temperature-sleep', 'baby-swaddle-transition-age'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Safe to Sleep Campaign.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Safe Sleep for Babies.',
      url: 'https://www.cdc.gov/reproductivehealth/features/baby-safe-sleep/index.html',
    },
  ],
};
