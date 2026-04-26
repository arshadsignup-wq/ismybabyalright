import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-holding-head-steady',
  title: 'Baby Not Holding Head Steady',
  category: 'physical',
  searchTerms: [
    'baby not holding head steady',
    'baby head control delayed',
    'baby head wobbles',
    'baby can\'t hold head up',
    'baby head flops back',
    'when do babies hold their head up',
    'baby poor head control',
    'baby head lag',
    'infant can\'t support head',
    'baby neck weak',
    'newborn not lifting head',
  ],
  quickAnswer:
    'Head control is one of the first major motor milestones, developing gradually over the first 4 months. Most babies can hold their head steady when held upright by 3 to 4 months. Before this, some head wobbling is completely normal. Regular tummy time is the most important activity for building the neck strength needed for steady head control.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns have very limited head control and need their head supported at all times when being held. During tummy time, they may briefly lift their head and turn it to one side. Some head lag when being pulled gently from lying to sitting is completely expected. Always support your newborn\'s head and neck when picking them up and holding them.',
    },
    {
      ageRange: '1-2 months',
      context:
        'Head control begins to improve. During tummy time, your baby can lift their head briefly at about a 45-degree angle. When held upright against your shoulder, they may hold their head up for short periods before it flops to the side. Head control is still inconsistent and your baby still needs support, but you should see gradual improvement week to week.',
    },
    {
      ageRange: '2-4 months',
      context:
        'This is the period when most babies achieve steady head control. By 3 months, many babies can hold their head steady when held in an upright position, and by 4 months, this should be well established. During tummy time, they hold their head up at 90 degrees and look around. If your baby has significant head lag (head falls back when pulled to sitting) at 4 months, discuss this with your pediatrician.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Head control should be well established by now. Your baby should hold their head steady in all positions, including when being held upright, during tummy time, and when being pulled to a sitting position. If your baby still has poor head control at this age, your pediatrician will likely want to evaluate for low muscle tone, neurological concerns, or other factors. Physical therapy can be very helpful in strengthening neck muscles.',
    },
  ],
  whenNormal: [
    'Your baby is under 3 months and their head wobbles when held upright, as steady head control is still developing.',
    'Your baby holds their head steady most of the time but occasionally loses control when startled or tired.',
    'Your premature baby has head control consistent with their adjusted age rather than their birth age.',
    'Your baby lifts their head well during tummy time but still has some wobble when held in an upright sitting position.',
    'Your baby\'s head control improves week to week, even if they are not yet fully steady.',
  ],
  whenToMention: [
    'Your baby is 4 months old and cannot hold their head steady when held upright, or has significant head lag when pulled to sitting.',
    'Your baby does not lift their head at all during tummy time by 3 months.',
    'Your baby\'s head control seems to be getting worse rather than improving over time.',
  ],
  whenToActNow: [
    'Your baby had good head control and has suddenly lost it, as this could indicate a serious neurological concern.',
    'Your baby has no head control at all by 4 months combined with overall floppiness, difficulty feeding, or a weak cry.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'gross-motor-tummy-time',
    'gross-motor-sitting',
  ],
  showSelfReferral: true,
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
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Four Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. WHO Motor Development Study: Windows of Achievement for Six Gross Motor Development Milestones. Acta Paediatrica, 2006.',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
