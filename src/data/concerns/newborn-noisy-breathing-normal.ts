import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-noisy-breathing-normal',
  title: 'Normal Noisy Breathing in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn noisy breathing',
    'baby loud breathing normal',
    'newborn breathing sounds',
    'baby rattling breathing',
    'newborn whistling breathing',
    'baby noisy breathing when sleeping',
    'infant breathing sounds normal',
    'newborn squeaky breathing',
    'baby snorting breathing',
    'newborn breathing noises alarm',
  ],
  quickAnswer:
    'Newborns are notoriously noisy breathers. Squeaking, whistling, snorting, rattling, and gurgling sounds are very common and usually normal because babies have small, flexible airways and narrow nasal passages. As long as your baby is breathing comfortably, feeding well, and has normal skin color, noisy breathing is rarely a cause for concern.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns make a wide variety of breathing sounds that can worry new parents. Snorting and snuffling occur because nasal passages are narrow. Squeaking may happen because the airway cartilage is still soft and flexible. Gurgling or rattling sounds can be caused by saliva or mucus in the back of the throat. Brief pauses in breathing (up to 10 seconds) are normal periodic breathing. These sounds are generally louder when baby is sleeping or lying on their back. As long as your baby\'s breathing rate is normal (30-60 breaths per minute), skin color is good, and feeding is going well, these sounds are typically benign.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Noisy breathing may continue or even seem louder as your baby grows and moves more air through their still-small airways. Some babies develop stridor (a high-pitched sound with breathing), which can be caused by laryngomalacia (floppy airway tissue), a common and usually self-resolving condition. If the noise is consistently present and gets worse during feeding or when your baby is on their back, mention it to your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Many breathing sounds improve as airways grow. Laryngomalacia, if present, often peaks around 4-8 months. Noisy breathing that improves with positioning (better on tummy) and does not affect feeding or growth is usually managed with observation. New or worsening respiratory noises should be evaluated.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Airways continue to grow and become firmer. Most normal noisy breathing has resolved or significantly improved by this age. Persistent stridor, wheezing, or noisy breathing should be evaluated by your pediatrician to rule out conditions that may need treatment.',
    },
  ],
  whenNormal: [
    'Snorting, squeaking, or gurgling sounds during sleep that do not affect breathing rate or comfort',
    'Noisy breathing that comes and goes and is related to position or activity',
    'Baby has normal skin color, feeds well, and grows normally',
    'Breathing rate stays between 30-60 breaths per minute in the newborn period',
  ],
  whenToMention: [
    'A consistent high-pitched sound (stridor) with every breath, especially during feeding',
    'Noisy breathing that seems to be getting louder or more persistent over time',
    'Baby seems to work harder to breathe during feeds or tires easily',
  ],
  whenToActNow: [
    'Any signs of breathing difficulty: nasal flaring, chest retractions (skin pulling in between ribs), belly breathing, or breathing faster than 60 breaths per minute',
    'Blue or gray color of the lips, tongue, or face, or episodes where breathing stops for more than 20 seconds',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Baby\'s Breathing. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Normal Newborn Breathing Patterns. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003322.htm',
    },
  ],
  relatedConcernSlugs: ['baby-breathing-patterns-normal', 'baby-stridor-noisy-breathing', 'laryngomalacia-floppy-airway', 'newborn-congestion-no-cold'],
};
