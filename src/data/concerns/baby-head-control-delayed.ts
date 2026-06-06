import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-head-control-delayed',
  title: 'My Baby Has Delayed Head Control',
  category: 'physical',
  searchTerms: [
    'baby head control delayed',
    'baby can\'t hold head up',
    'baby floppy head',
    'late head control baby',
    'baby head flops back',
    'baby wobbly head',
    'when should baby hold head steady',
    'baby poor head control',
    'baby neck strength weak',
    'delayed head holding baby',
  ],
  quickAnswer:
    'Head control develops gradually over the first 4 months. Most babies can hold their head steady when held upright by 4 months. If your baby has significant head lag or cannot hold their head steady by 4 months, mention it to your pediatrician. It may indicate low muscle tone that can be addressed with exercises or therapy.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'Newborns have very limited head control and need their heads supported at all times. Your baby may briefly lift their head during tummy time. This is completely normal. Head control develops gradually over the coming weeks.',
    },
    {
      ageRange: '6 weeks-3 months',
      context:
        'Your baby should be gaining head control, lifting their head 45 degrees or more during tummy time and holding it more steadily when held upright. Some wobbliness is still normal. If your baby shows no improvement in head control from the newborn period, mention it to your pediatrician.',
    },
    {
      ageRange: '3-4 months',
      context:
        'Most babies have good head control by 3-4 months, holding their head steady when sitting supported and lifting it well during tummy time. If your baby still has significant head lag when pulled to sitting or cannot hold their head steady when held upright, discuss this with your doctor.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Head control should be well established by this age. If your baby still has poor head control, evaluation is important. Conditions like hypotonia (low muscle tone) are common and treatable. Physical therapy can make a significant difference in building neck and core strength.',
    },
  ],
  whenNormal: [
    'Your baby is under 3 months and head control is gradually improving.',
    'Your baby has some wobbliness but can hold their head for short periods.',
    'Your baby was premature and is on track for their adjusted age.',
    'Your baby lifts head well during tummy time but is wobbly when held upright.',
  ],
  whenToMention: [
    'Your baby is over 3 months and cannot hold their head steady when held upright.',
    'Your baby has significant head lag when pulled gently from lying to sitting.',
    'Your baby\'s head control is not improving week to week.',
  ],
  whenToActNow: [
    'Your baby had head control and has lost it.',
    'Your baby seems increasingly floppy or weak throughout their body.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'gross-motor-tummy-time',
    'gross-motor-sitting',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['head-lag', 'low-muscle-tone', 'floppy-baby-syndrome'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Movement: Birth to 3 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-3-Months.aspx',
    },
    {
      org: 'CDC',
      citation: 'CDC - Important Milestones: Your Baby at 4 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html',
    },
    {
      org: 'WHO',
      citation: 'WHO Motor Development Study: Head control milestones',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
