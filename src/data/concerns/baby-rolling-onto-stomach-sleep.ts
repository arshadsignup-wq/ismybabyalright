import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rolling-onto-stomach-sleep',
  title: 'Baby Rolling Onto Stomach While Sleeping',
  category: 'sleep',
  searchTerms: [
    'baby rolling onto stomach sleep',
    'baby rolls to tummy in sleep',
    'is it safe for baby to sleep on stomach',
    'baby rolls over in crib',
    'baby sleeping on tummy after rolling',
    'when is it safe for baby to sleep on stomach',
    'baby flips to stomach at night',
    'should I flip baby back over',
    'baby rolls to tummy and cries',
    'baby prefers stomach sleeping',
    'back sleeping when baby rolls',
    'stomach sleeping SIDS risk',
  ],
  quickAnswer:
    'Once your baby can roll independently in both directions (back to tummy and tummy to back), you do not need to flip them back over if they roll onto their stomach during sleep. Always place your baby on their back to start sleep, but if they roll on their own, they have the neck and upper body strength to protect their airway. The key is to stop swaddling as soon as rolling begins and ensure nothing else is in the crib. Most babies begin rolling between 4-6 months.',
  byAge: [
    {
      ageRange: '3-4 months',
      context:
        'Some babies begin rolling as early as 3-4 months. If your baby has rolled over even once, it is time to stop swaddling (a swaddled baby who rolls cannot use their arms to reposition). Transition to a sleep sack with arms free. Continue placing your baby on their back for every sleep. If they roll to their stomach and get stuck (can roll one way but not back), you may need to gently flip them back. Practice tummy time during the day to help build the strength for both directions of rolling.',
    },
    {
      ageRange: '4-6 months',
      context:
        'This is the most common age for rolling to develop. Once your baby can roll confidently in both directions, the AAP says you do not need to reposition them. Make sure the crib is completely bare - no blankets, bumpers, pillows, or stuffed animals. A wearable blanket (sleep sack) is the only thing your baby needs. If your baby rolls to their tummy and cries, give them a moment to see if they settle on their own before intervening. Many babies learn to love stomach sleeping once they discover it.',
    },
    {
      ageRange: '6-9 months',
      context:
        'By 6-9 months, most babies are rolling freely and may prefer sleeping on their tummy or side. This is fine as long as you always place them on their back initially. Some parents are alarmed to find their baby face-down in the crib, but a baby with good head control can turn their face to the side to breathe. The mattress should be firm and the fitted sheet should be tight. Continue to keep the crib free of all loose items.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, your baby likely has a preferred sleep position and will move freely around the crib during sleep. They may end up in all sorts of positions - sideways, face-down, upside-down. As long as the sleep environment is safe (firm mattress, no loose items), there is no need to intervene. Continue the back-to-start practice until 12 months, even though your baby will probably roll immediately.',
    },
  ],
  whenNormal: [
    'Your baby rolls to their stomach during sleep and sleeps comfortably in that position',
    'Your baby can roll both ways and has good head and neck control',
    'You always start baby on their back and they choose to roll over',
    'The crib is bare with only a fitted sheet and your baby is in a sleep sack',
  ],
  whenToMention: [
    'Your baby rolls to their stomach but then gets stuck and cannot roll back, causing frequent wake-ups',
    'Your baby seems to struggle with breathing position when on their stomach',
    'You are unsure about when to transition out of swaddle as your baby starts showing signs of rolling',
  ],
  whenToActNow: [
    'Your swaddled baby has rolled to their stomach - stop swaddling immediately as this is a suffocation risk',
    'Your baby is on their stomach with their face pressed into a soft mattress, bumper, or blanket and is not responding',
    'Your baby seems to have difficulty breathing in any position during sleep',
  ],
  relatedMilestones: [
    'gross-motor-rolling',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['sids-risk-factors', 'rolling-in-sleep', 'transitioning-from-swaddle'],
  sources: [
    {
      org: 'AAP',
      citation:
        'Moon RY, et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics. 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Back to Sleep, Tummy to Play. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Eunice Kennedy Shriver NICHD. Safe to Sleep.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
};
