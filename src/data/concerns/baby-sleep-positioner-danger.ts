import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sleep-positioner-danger',
  title: 'Dangers of Baby Sleep Positioners',
  category: 'sleep',
  searchTerms: [
    'baby sleep positioner danger',
    'sleep positioner SIDS risk',
    'baby wedge pillow safe',
    'anti-roll pillow baby',
    'baby sleep nest danger',
    'baby lounger sleeping danger',
    'FDA warning sleep positioner',
    'infant sleep positioner death',
    'baby sleep wedge recalled',
    'are baby positioners safe',
    'dock a tot sleep safety',
  ],
  quickAnswer:
    'The FDA and AAP strongly warn against using sleep positioners, wedges, nests, and loungers for infant sleep. These products have been linked to infant suffocation deaths. Babies can roll into the padding or soft sides and suffocate, or become trapped in dangerous positions. The safest sleep surface for a baby is a firm, flat mattress in an approved crib, bassinet, or play yard with nothing else in the sleep space.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is the period when parents most commonly use sleep positioners, often to prevent rolling, reduce reflux, or keep baby in a certain position. However, these products are dangerous. Young babies may not have the strength to move away from soft surfaces that block their airway. The FDA has received reports of infant deaths associated with sleep positioners. Your baby should sleep on their back on a firm, flat surface with only a fitted sheet. No wedges, bolsters, pillows, or padded nests should be in the sleep space.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies become more mobile, sleep positioners become even more dangerous. A baby attempting to roll while confined in a positioner can become trapped in a face-down position against soft padding. Products like baby loungers (Boppy Newborn Lounger, DockATot, etc.) are marketed for supervised lounging but should never be used for sleep. Several of these products have been recalled after infant deaths. If your baby is rolling, they need a completely clear sleep surface.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, babies are active sleepers who roll, scoot, and move during sleep. Any product that restricts movement or has soft sides poses a suffocation risk. Continue using a firm, flat crib mattress with a fitted sheet only. Wearable blankets (sleep sacks) are a safe alternative for warmth. Inclined sleepers, which were recalled by the CPSC in 2019 after multiple deaths, should not be used at any age.',
    },
  ],
  whenNormal: [
    'Your baby sleeps on their back on a firm, flat surface in an approved crib or bassinet with no extra items.',
    'You use a sleep sack instead of loose blankets for warmth.',
    'Your baby moves around during sleep on a safe sleep surface - this normal activity shows they can reposition themselves.',
  ],
  whenToMention: [
    'You are tempted to use a positioner because your baby will not sleep on a flat surface, and you need sleep strategies.',
    'You received a sleep positioner or lounger as a gift and want to know if it is safe.',
    'Your baby has reflux and you are considering propping them up to sleep.',
  ],
  whenToActNow: [
    'You find your baby face-down or wedged against a positioner, nest, or lounger.',
    'Your baby is sleeping in a recalled product and needs to be moved to a safe sleep surface immediately.',
    'Your baby stops breathing, becomes limp, or turns blue in any sleep environment.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sids-risk-reduction-checklist', 'baby-safe-sleep-position-back', 'baby-swing-sleep-danger', 'baby-stroller-nap-safety'],
  sources: [
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration - Do Not Use Infant Sleep Positioners Due to the Risk of Suffocation.',
      url: 'https://www.fda.gov/consumers/consumer-updates/do-not-use-infant-sleep-positioners-due-risk-suffocation',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission - Infant Sleep Products Safety Standard.',
      url: 'https://www.cpsc.gov/SafeSleep',
    },
  ],
};
