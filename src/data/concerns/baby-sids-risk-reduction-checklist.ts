import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sids-risk-reduction-checklist',
  title: 'SIDS Risk Reduction Checklist for Parents',
  category: 'sleep',
  searchTerms: [
    'SIDS prevention checklist',
    'reduce SIDS risk baby',
    'sudden infant death syndrome prevention',
    'safe sleep checklist baby',
    'SIDS risk factors',
    'how to prevent SIDS',
    'SIDS statistics baby',
    'crib safety checklist SIDS',
    'SIDS age range risk',
    'SIDS breastfeeding protection',
    'pacifier SIDS prevention',
  ],
  quickAnswer:
    'SIDS (Sudden Infant Death Syndrome) risk can be significantly reduced by following evidence-based safe sleep practices. The most important steps include placing your baby on their back for every sleep, using a firm flat sleep surface with no loose bedding, room-sharing without bed-sharing, breastfeeding, offering a pacifier at sleep time, and avoiding smoke exposure. SIDS risk peaks between 2-4 months and most cases occur before 6 months of age.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is the highest risk period for SIDS. Follow all safe sleep guidelines rigorously: place baby on their back on a firm, flat surface (crib, bassinet, or play yard) with nothing in the sleep space except a fitted sheet. Room-share but do not bed-share. Avoid overheating - dress baby in one layer more than you would wear. Do not use sleep positioners, wedges, or inclined sleepers. Offer a pacifier at sleep time (for breastfed babies, wait until breastfeeding is well established, usually around 3-4 weeks). Avoid all smoke exposure.',
    },
    {
      ageRange: '3-6 months',
      context:
        'SIDS risk begins to decrease after 4 months but remains significant. Continue all safe sleep practices. This is the age when many babies learn to roll; stop swaddling once your baby shows signs of rolling and transition to a sleep sack. If your baby rolls to their stomach independently (both directions), you do not need to reposition them, but always place them on their back to start. Breastfeeding continues to be protective - even partial breastfeeding reduces SIDS risk.',
    },
    {
      ageRange: '6-12 months',
      context:
        'SIDS risk decreases significantly after 6 months but does not disappear until after 12 months. Continue placing your baby on their back for sleep. The sleep space should remain free of blankets, pillows, bumpers, and stuffed animals until at least 12 months. Room-sharing is recommended for at least the first 6 months and ideally through 12 months. Continue to avoid secondhand smoke exposure and ensure all caregivers (grandparents, daycare) follow safe sleep guidelines consistently.',
    },
  ],
  whenNormal: [
    'You are following all safe sleep guidelines and your baby is sleeping well on their back.',
    'Your baby can roll both ways and sometimes ends up on their stomach - this is safe as long as they started on their back.',
    'You feel anxious about SIDS despite following all recommendations - this worry is very common among new parents.',
  ],
  whenToMention: [
    'You have specific risk factors (premature birth, low birth weight, family history) and want personalized guidance.',
    'You are struggling to follow safe sleep guidelines due to your baby\'s sleep difficulties.',
    'You are co-sleeping out of exhaustion and want to discuss safer alternatives.',
  ],
  whenToActNow: [
    'Your baby stops breathing, turns blue, or becomes limp and unresponsive - call 911 immediately.',
    'Your baby has an apparent life-threatening event (ALTE) or brief resolved unexplained event (BRUE) during sleep.',
    'You find your baby in an unsafe sleep situation (face-down in soft bedding, wedged between surfaces).',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-safe-sleep-position-back', 'baby-room-temperature-sleep', 'baby-sleeping-face-down', 'baby-sleep-positioner-danger'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Safe to Sleep Campaign. NICHD.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - About SIDS and SUID.',
      url: 'https://www.cdc.gov/sids/about/index.html',
    },
  ],
};
