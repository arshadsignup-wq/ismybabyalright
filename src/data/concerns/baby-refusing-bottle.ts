import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-refusing-bottle',
  title: 'Baby Refusing the Bottle',
  category: 'feeding',
  searchTerms: [
    'baby refusing bottle',
    'baby won\'t take bottle',
    'breastfed baby refuses bottle',
    'baby bottle strike',
    'baby screams at bottle',
    'baby pushing away bottle',
    'baby suddenly won\'t take bottle',
    'transitioning breast to bottle',
    'baby rejecting bottle nipple',
    'how to get baby to take bottle',
  ],
  quickAnswer:
    'Bottle refusal is a common challenge, especially for breastfed babies being introduced to a bottle for the first time or transitioning between breast and bottle. Most cases are related to preference for the breast, nipple confusion, or the baby not being hungry enough. Patience and consistent, gentle strategies usually resolve bottle refusal. If your baby is not taking any feeds at all and showing signs of dehydration, contact your pediatrician promptly.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Many breastfed babies resist bottles in the early weeks. Introducing a bottle around 3-4 weeks (after breastfeeding is well established) can help prevent refusal. Try having someone other than the nursing parent offer the bottle, as babies can smell breast milk on their mother. Experiment with different nipple shapes and flow rates. Paced bottle feeding, where the baby is held more upright and controls the flow, can make the transition easier. Warming the milk to body temperature may also help.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age are more aware and opinionated about feeding preferences. A baby who previously accepted bottles may suddenly refuse, often around 3-4 months when awareness increases. Try offering the bottle when the baby is calm but not starving, in a different position or location than usual breastfeeding. Some babies do better with a slow-flow nipple that more closely mimics the breast. Avoid forcing the bottle, as this can create a negative association.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If bottle refusal occurs at this age, consider whether your baby is ready for a sippy cup or straw cup, which some babies accept more readily than bottles. Babies starting solids may also be less interested in bottles if they are filling up on food. Ensure a balance between solid foods and milk feeds. If your baby is weaning from the breast to bottle around this age, go slowly and be patient. Some babies skip bottles entirely and go straight to cups.',
    },
  ],
  whenNormal: [
    'Your breastfed baby initially resists the bottle but gradually accepts it with patient, consistent introduction.',
    'Your baby takes smaller amounts from the bottle than the breast but is still having adequate wet diapers.',
    'Your baby prefers a particular bottle or nipple type and accepts that one well.',
  ],
  whenToMention: [
    'Your baby has been refusing the bottle for more than a week despite trying multiple strategies.',
    'You need to return to work and your baby will not take a bottle from any caregiver.',
    'Your baby seems to be in pain when attempting to bottle feed (possible oral issue or reflux).',
  ],
  whenToActNow: [
    'Your baby is refusing all feeds (breast and bottle) and is producing fewer than 4-6 wet diapers in 24 hours.',
    'Your baby is showing signs of dehydration: dry mouth, sunken fontanelle, no tears, or lethargy.',
    'Your baby is losing weight or failing to gain weight because of feeding refusal.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['refusing-breast', 'bottle-preference', 'baby-weak-suck-reflex-feeding', 'baby-refusing-solids'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Bottle Feeding Basics. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Bottle-Feeding-How-Its-Done.aspx',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International - Introducing a Bottle to a Breastfed Baby.',
      url: 'https://www.llli.org/breastfeeding-info/bottles/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Amount and Schedule of Formula Feedings. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Amount-and-Schedule-of-Formula-Feedings.aspx',
    },
  ],
};
