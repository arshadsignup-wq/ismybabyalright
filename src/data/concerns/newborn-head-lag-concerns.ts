import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-head-lag-concerns',
  title: 'Head Lag (Head Flopping Backward) in Newborns',
  category: 'physical',
  searchTerms: [
    'newborn head lag',
    'baby head flopping back',
    'baby can\'t hold head up',
    'newborn head control',
    'baby head drops backward',
    'infant head lag normal',
    'newborn poor head control',
    'baby head support needed',
    'when should baby hold head up',
    'baby head wobbly',
  ],
  quickAnswer:
    'Head lag (the head flopping backward when baby is pulled to sitting) is completely normal in newborns and young infants because the neck muscles are still developing. Most babies begin to show some head control by 1-2 months and can hold their head steady by 4 months. Supporting your baby\'s head and neck during the first few months is essential.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Complete head lag is expected in newborns. When you gently pull your baby from lying to sitting, the head will fall backward because the neck muscles are not yet strong enough to support it. This is completely normal. Always support your baby\'s head and neck when picking them up, holding them, and during feeding. Tummy time, even brief sessions of 1-3 minutes several times a day, helps strengthen the neck muscles from the very beginning.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Your baby should begin to show some improvement in head control during this period. By 1-2 months, most babies can briefly lift their head during tummy time. By 2-3 months, they can hold their head up at a 45-degree angle and may show less head lag when pulled to sitting. Continue to support the head during handling, but you should see gradual improvement.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 4 months, most babies can hold their head steady when upright and show minimal to no head lag when pulled to sitting. If your baby still has significant head lag at 4 months, this should be discussed with your pediatrician, as it could indicate low muscle tone (hypotonia) or a developmental delay that may benefit from early intervention.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Head control should be fully developed. Your baby should hold their head steady in all positions. Persistent head lag beyond 6 months requires evaluation for neuromuscular or developmental conditions.',
    },
  ],
  whenNormal: [
    'Complete head lag in the first 1-2 months of life',
    'Gradual improvement in head control with regular tummy time',
    'Ability to briefly lift head during tummy time by 1-2 months',
    'Head steady when held upright by 4 months',
  ],
  whenToMention: [
    'No improvement in head control by 2-3 months despite regular tummy time',
    'Significant head lag persisting at 4 months',
    'Baby seems excessively floppy overall or has poor muscle tone',
  ],
  whenToActNow: [
    'Complete absence of any head control at 4 months or older, especially combined with other developmental delays',
    'Loss of previously achieved head control, which could indicate a progressive neurological condition',
  ],
  relatedMilestones: ['head control', 'tummy time'],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Birth to 3 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones During the First Year.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
  ],
  relatedConcernSlugs: ['head-lag', 'floppy-baby-syndrome', 'newborn-tummy-time-too-early', 'newborn-neck-support-importance'],
};
