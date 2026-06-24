import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nursing-pillow-sleep-environment-danger',
  title: 'Nursing Pillows and Sleep Environment Dangers',
  category: 'sleep',
  searchTerms: [
    'nursing pillow sleep danger',
    'baby sleeping on nursing pillow',
    'Boppy pillow sleep risk',
    'nursing pillow SIDS risk',
    'baby fell asleep on Boppy',
    'nursing pillow suffocation risk',
    'safe sleep baby pillow',
    'infant sleep positioner danger',
    'nursing pillow in crib danger',
    'baby sleeping propped on pillow',
  ],
  quickAnswer:
    'Nursing pillows are designed exclusively for feeding support and should never be used for sleep. The CPSC has documented at least 162 infant deaths associated with nursing pillows and similar lounging products between 2007 and 2022. When a baby falls asleep on a nursing pillow, the curved shape can cause the baby\'s chin to drop to their chest (positional asphyxia), or the baby can roll into the soft fabric and suffocate. Nursing pillows should be removed from the sleep area and never placed in a crib, bassinet, or any surface where a baby might sleep.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'This is the highest-risk period because young babies cannot reposition themselves if their airway becomes compromised. It is extremely common for babies to fall asleep while nursing on a feeding pillow, but they must be moved to a safe sleep surface (firm, flat mattress with nothing else in it) immediately. The ABCs of safe sleep apply: Alone, on their Back, in a Crib. No pillows, blankets, stuffed animals, bumpers, or loungers should be in the sleep space. If you are exhausted and worried about falling asleep while feeding, set an alarm, feed in a well-lit room, or have a partner check on you.',
    },
    {
      ageRange: '4-8 months',
      context:
        'As babies begin to roll and move more, the risk from nursing pillows shifts but does not disappear. A baby who rolls off a nursing pillow could fall from an elevated surface, and a baby placed in a pillow on a bed could become wedged between the pillow and a wall, headboard, or mattress edge. Continue to use nursing pillows only for feeding while you are awake and alert, and transfer your baby to a safe sleep surface immediately after feeding. Do not place nursing pillows on the floor and leave a baby unattended on one.',
    },
    {
      ageRange: '8-12 months',
      context:
        'Older babies who can roll, sit, and even pull up are still at risk from soft surfaces in the sleep environment. Some parents begin using nursing pillows as back support for sitting babies, which is fine when supervised but these should never be in the crib or sleep space. Continue to maintain a bare crib with only a firm, fitted sheet until at least 12 months. After 12 months, a small, thin blanket may be introduced, but pillows and soft bedding should be avoided until 18-24 months or later.',
    },
  ],
  whenNormal: [
    'You use a nursing pillow for feeding support while awake and alert, and move your baby to a safe sleep surface when they fall asleep.',
    'Your baby\'s crib or bassinet contains only a firm mattress and fitted sheet.',
    'You have removed the nursing pillow from the sleep environment.',
  ],
  whenToMention: [
    'You are struggling with safe sleep practices because your baby only seems to sleep when propped or on a soft surface.',
    'You want guidance on safe sleep surfaces and environments.',
    'You are having difficulty staying awake during nighttime feedings and need strategies to prevent falling asleep with baby on a nursing pillow.',
  ],
  whenToActNow: [
    'You find your baby sleeping face-down on a nursing pillow, lounger, or other soft surface - move them immediately to a firm, flat surface on their back.',
    'Your baby appears to have breathing difficulty, is unresponsive, or has a blue or pale color while on any soft surface.',
    'Your baby has fallen from a nursing pillow placed on an elevated surface and you are concerned about injury.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'nursing-pillow-suffocation-recall-risk',
    'baby-sleeping-face-down',
    'baby-only-sleeps-being-held',
  ],
  sources: [
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Nursing Pillows Safety.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/cribs',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Safe to Sleep Campaign: Ways to Reduce Baby\'s Risk.',
      url: 'https://safetosleep.nichd.nih.gov/reduce-risk',
    },
  ],
};
