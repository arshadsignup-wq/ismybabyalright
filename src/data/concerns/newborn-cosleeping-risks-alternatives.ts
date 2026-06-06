import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-cosleeping-risks-alternatives',
  title: 'Co-sleeping Risks and Safer Alternatives',
  category: 'medical',
  searchTerms: ['cosleeping with baby', 'bed sharing newborn', 'baby sleeping in parents bed', 'safe cosleeping', 'alternatives to bed sharing', 'baby in bed with parents', 'room sharing vs bed sharing', 'cosleeping SIDS risk', 'bedside bassinet', 'baby wont sleep in crib'],
  quickAnswer: 'The AAP recommends room-sharing without bed-sharing for at least the first 6 months. Bed-sharing increases the risk of SIDS and sleep-related deaths. Safer alternatives include a bedside bassinet or crib in the parents\' room, which keeps baby close for feeding and comfort while maintaining a separate safe sleep surface.',
  byAge: [
    { ageRange: '0-1 month', context: 'The AAP strongly recommends that babies sleep on a separate firm, flat surface in the parents\' room for at least the first 6 months. Room-sharing (baby in their own crib or bassinet in your room) reduces SIDS risk by up to 50% compared to separate rooms, while bed-sharing increases risks. Bed-sharing risks include suffocation from soft bedding, entrapment between the mattress and headboard, and overlay. Risk is especially high with premature or low-birth-weight babies, if either parent smokes, has consumed alcohol, or is extremely fatigued. A bedside bassinet that attaches to your bed allows closeness for nighttime feeding while maintaining a safe sleep surface.' },
    { ageRange: '1-3 months', context: 'Continue room-sharing with baby in their own sleep space. If you are falling asleep during nighttime feeds, it is safer to feed in your bed (removing pillows and blankets) than on a sofa or armchair, where suffocation risk is extremely high. If you fall asleep with baby in your bed, move them back to their own sleep space as soon as you wake.' },
    { ageRange: '3-6 months', context: 'Room-sharing continues to be recommended. If baby is waking frequently and you are exhausted, discuss safe sleep strategies with your pediatrician rather than bringing baby into your bed. Some families find a bedside crib or sidecar arrangement helpful.' },
    { ageRange: '6-12 months', context: 'The AAP recommends room-sharing for ideally the first year, but at minimum the first 6 months. If you transition baby to their own room, ensure the sleep environment remains safe: firm mattress, no loose bedding, no soft objects.' },
  ],
  whenNormal: ['Baby sleeps better with the sounds and proximity of parents in the same room', 'Baby wakes frequently for feeds during the night in the early weeks', 'Feeling tired and tempted to bring baby into your bed is a very common experience'],
  whenToMention: ['You are struggling with exhaustion and safe sleep feels difficult to maintain', 'You would like to discuss safer sleep arrangements that work for your family', 'You have questions about making your sleep environment as safe as possible'],
  whenToActNow: ['Baby has been in an unsafe sleep situation (couch, recliner, or adult bed with soft bedding) and appears unresponsive', 'You are so exhausted that you feel you may fall asleep while holding baby: put baby in their safe sleep space and get help', 'Baby has stopped breathing or turned blue'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Safe Sleep Recommendations. Updated 2022.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022' },
    { org: 'NIH', citation: 'National Institutes of Health. Safe to Sleep Campaign.', url: 'https://safetosleep.nichd.nih.gov/' },
  ],
  relatedConcernSlugs: ['newborn-safe-sleep-positioning', 'newborn-room-temperature-ideal', 'newborn-swaddling-safety'],
};
