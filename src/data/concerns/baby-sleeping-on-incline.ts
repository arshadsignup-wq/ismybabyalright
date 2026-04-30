import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sleeping-on-incline',
  title: 'Baby Sleeping on an Incline or Wedge',
  category: 'sleep',
  searchTerms: ['baby sleeping on incline', 'inclined sleeper baby', 'baby sleep wedge', 'baby sleeping propped up', 'incline for reflux baby sleep', 'rock n play recall', 'baby inclined sleeper safe', 'baby sleeping elevated reflux', 'crib wedge baby', 'baby bouncer sleeping'],
  quickAnswer: 'The AAP strongly recommends that babies always sleep on a firm, flat surface. Inclined sleepers, wedges, and propped-up mattresses are not safe for infant sleep, even for babies with reflux. Multiple inclined sleeper products have been recalled after infant deaths. The risk is that babies can slump forward or roll into a position that restricts their airway. If your baby has reflux, holding them upright for 20-30 minutes after feeding and then placing them on their back on a flat surface is the safe approach.',
  byAge: [
    { ageRange: '0-6 months', context: 'This is the age when parents most commonly use inclined sleepers or wedges, often because of reflux or the belief that the incline helps with congestion. However, the AAP, CPSC, and FDA have all warned against inclined sleep surfaces for babies. Inclines greater than 10 degrees increase the risk of positional asphyxia. Place your baby on a firm, flat crib mattress for all sleep, including naps. Car seats, swings, bouncers, and rockers are not safe sleep surfaces.' },
    { ageRange: '6-12 months', context: 'As babies become more mobile, the risk from inclined surfaces increases because they can roll or shift into dangerous positions. If your baby falls asleep in a car seat, swing, or bouncer, move them to a flat sleep surface as soon as practical. Do not allow prolonged sleep in any inclined device, even if your baby seems comfortable.' },
  ],
  whenNormal: ['Your baby sleeping on their back on a firm, flat mattress', 'Briefly falling asleep in a car seat during travel (move to flat surface when possible)', 'Holding your baby upright after feeds before laying them flat to sleep'],
  whenToMention: ['Your baby has reflux and you are looking for safe sleep positioning alternatives', 'You have been using an inclined sleep product and want to transition to a flat surface', 'Your baby seems to struggle to sleep flat and you need strategies'],
  whenToActNow: ['You realize your baby has been sleeping in a recalled product (check cpsc.gov)', 'Your baby is found unresponsive or in an awkward position in an inclined device', 'Your baby has significant breathing difficulty that only improves when upright (needs medical evaluation for airway issues, not a sleep wedge)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['sids-risk-factors', 'bassinet-vs-crib-safety', 'reflux', 'baby-sleeping-in-car-seat-danger'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Safe Sleep Recommendations. Pediatrics.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022' },
    { org: 'CPSC', citation: 'U.S. Consumer Product Safety Commission. Infant Sleep Products Safety Standard.', url: 'https://www.cpsc.gov/SafeSleep' },
    { org: 'FDA', citation: 'U.S. Food and Drug Administration. Infant Sleep Products Warning.', url: 'https://www.fda.gov/consumers/consumer-updates/do-not-use-infant-sleep-positioners-due-risk-suffocation' },
  ],
};
