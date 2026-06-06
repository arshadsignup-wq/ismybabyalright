import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-safe-sleep-positioning',
  title: 'Safe Sleep Position for Newborns',
  category: 'medical',
  searchTerms: ['safe sleep position baby', 'baby back sleeping', 'newborn sleep on back', 'SIDS prevention sleep', 'baby sleeping position', 'newborn sleep safety', 'back to sleep', 'side sleeping newborn', 'baby sleep on stomach dangerous', 'safe infant sleep guidelines'],
  quickAnswer: 'The safest sleep position for babies is on their back, on a firm flat surface, for every sleep. This recommendation from the AAP significantly reduces the risk of SIDS and sleep-related deaths. Always place your baby on their back until they can roll both ways independently.',
  byAge: [
    { ageRange: '0-1 month', context: 'Always place your newborn on their back for every sleep, including naps. Use a firm, flat mattress in a safety-approved crib, bassinet, or play yard with a fitted sheet and nothing else in the sleep space: no blankets, pillows, bumpers, stuffed animals, or positioners. The back sleep position is the single most effective way to reduce SIDS risk. Some parents worry about choking, but healthy babies have reflexes that prevent choking while on their back. Room-sharing (not bed-sharing) is recommended for at least the first 6 months.' },
    { ageRange: '1-3 months', context: 'Continue placing baby on their back for every sleep. If baby turns their head to one side consistently, gently alternate which direction they face to prevent flat spots. Do not use sleep positioners, wedges, or rolled towels to keep baby in position, as these pose suffocation risks. Supervised tummy time while awake helps strengthen neck muscles.' },
    { ageRange: '3-6 months', context: 'Some babies begin rolling during this period. Once a baby can roll from back to tummy AND tummy to back independently, you do not need to reposition them if they roll during sleep. However, always place them on their back initially. Stop swaddling once baby shows signs of rolling.' },
    { ageRange: '6-12 months', context: 'Most babies can roll freely by this age. Continue placing them on their back at the start of sleep, but allow them to find their own comfortable position once they roll independently. The sleep environment should remain bare: no loose blankets or soft objects.' },
  ],
  whenNormal: ['Baby prefers to turn their head to one side while sleeping on their back', 'Baby makes grunting or squirming sounds while sleeping on their back', 'Baby occasionally spits up while on their back and clears it naturally', 'Baby seems to startle more on their back (normal Moro reflex)'],
  whenToMention: ['Baby seems very uncomfortable sleeping on their back despite safe sleep setup', 'You are struggling to follow safe sleep guidelines and need support', 'Baby has a medical condition and you are unsure about positioning'],
  whenToActNow: ['Baby was found face-down and unresponsive', 'Baby has stopped breathing or turned blue', 'Baby has a medical condition that requires alternative positioning (discuss with your pediatrician before changing sleep position)'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Safe Sleep Recommendations. Updated 2022.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022' },
    { org: 'NIH', citation: 'National Institutes of Health. Safe to Sleep Campaign.', url: 'https://safetosleep.nichd.nih.gov/' },
  ],
  relatedConcernSlugs: ['newborn-swaddling-safety', 'newborn-cosleeping-risks-alternatives', 'newborn-flat-spot-prevention'],
};
