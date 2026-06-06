import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-reflux-sleep-position',
  title: 'Reflux and Sleep Positioning',
  category: 'digestive',
  searchTerms: [
    'baby reflux sleep position',
    'reflux baby sleeping position',
    'baby reflux how to sleep',
    'baby reflux crib elevation',
    'reflux baby flat on back safe',
    'should reflux baby sleep elevated',
    'baby reflux choking sleep',
    'infant reflux sleep wedge',
    'baby reflux safe sleep',
    'reflux baby spit up sleeping',
  ],
  quickAnswer:
    'Despite what seems intuitive, the AAP recommends that all babies, including those with reflux, sleep flat on their backs on a firm surface. Elevating the head of the crib and sleep positioners are NOT recommended as they have not been shown to reduce reflux and may increase the risk of SIDS or suffocation. Babies have protective reflexes that prevent aspiration during sleep.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Always place your baby on their back to sleep on a firm, flat surface, even with reflux. Do not use crib wedges, pillows, or sleep positioners. These products are not safe and the FDA has warned against them. If you are worried about spit-up during sleep, know that healthy babies have reflexes to turn their head and clear their airway.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue safe sleep practices. Keeping baby upright for 20 to 30 minutes after feeds before laying down can help reduce reflux episodes during sleep. Avoid feeding right before bedtime if reflux is problematic at night. A consistent bedtime routine with a feed earlier in the sequence may help.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As reflux improves and babies begin to roll, sleep becomes less of a concern. Once a baby can roll both ways independently, they can be left in whatever position they roll to. Continue starting them on their back. Nighttime reflux typically improves as solids are introduced.',
    },
    {
      ageRange: '12-24 months',
      context:
        'By this age, sleep positioning for reflux is rarely a concern. If your toddler continues to have nighttime reflux symptoms, avoid large meals and acidic foods close to bedtime. Raising the head of the bed slightly (by putting books under the crib legs, not using a pillow) may be discussed with your pediatrician.',
    },
  ],
  whenNormal: [
    'A baby with reflux who sleeps safely on their back and has occasional spit-up that does not cause distress',
    'Brief gagging or coughing that the baby clears on their own during sleep',
  ],
  whenToMention: [
    'Reflux is significantly disrupting your baby\'s sleep and you need strategies',
    'You are worried about your baby choking on spit-up during sleep',
    'You want guidance on the safest sleep setup for a baby with reflux',
  ],
  whenToActNow: [
    'Your baby has had an apparent life-threatening event with apnea, color change, or limpness during or after sleep',
    'Your baby is regularly choking or gagging severely during sleep, not just minor spit-up',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep Recommendations. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2022-057990/190489/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep Position and GERD. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Safe Sleep for Your Baby.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
  relatedConcernSlugs: ['reflux', 'spitting-up', 'baby-acid-reflux-silent'],
};
