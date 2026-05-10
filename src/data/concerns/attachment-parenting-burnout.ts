import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'attachment-parenting-burnout',
  title: 'Attachment Parenting Burnout',
  category: 'behavior',
  searchTerms: [
    'attachment parenting exhausted',
    'touched out from baby wearing',
    'breastfeeding on demand exhaustion',
    'co-sleeping not sleeping',
    'attachment parenting burnout',
    'can\'t keep up with attachment parenting',
    'is attachment parenting sustainable',
    'feeling trapped by attachment parenting',
    'attachment parenting and mental health',
  ],
  quickAnswer:
    'Attachment parenting principles (responsive feeding, babywearing, co-sleeping) can foster strong parent-child bonds, but the all-encompassing nature of the approach can lead to parental exhaustion and burnout, particularly for the primary caregiver. Research shows that secure attachment comes from being consistently responsive to your child — it does not require 24/7 physical proximity, exclusive breastfeeding, or co-sleeping. A burned-out, resentful parent is less able to provide the emotional responsiveness that is at the true heart of secure attachment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The early months are inherently intensive regardless of parenting philosophy. If you are practicing attachment parenting, ensure you are also receiving adequate support — from a partner, family, or community. Taking breaks, letting others hold and feed your baby, and prioritizing your own sleep does not harm attachment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If breastfeeding on demand, constant carrying, and co-sleeping are leaving you depleted, consider that a well-rested parent who bottle-feeds some meals and puts the baby down for supervised play is providing excellent care. Secure attachment depends on emotional availability, not specific practices.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Many parents hit a wall with attachment parenting as babies become heavier, nighttime feeding continues, and sleep deprivation accumulates. Introducing a crib, beginning solids alongside breastfeeding, and creating time for yourself are not betrayals of attachment — they are healthy adaptations.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers actually benefit from increasing independence — brief separations from parents, playing independently, and self-soothing. Continuing attachment parenting practices beyond the point where they serve the child\'s needs can delay development of these important skills. Evolve your approach as your child grows.',
    },
  ],
  whenNormal: [
    'You feel overwhelmed by the demands of attachment parenting but still enjoy moments of connection with your child',
    'You are adapting your approach — perhaps introducing a bottle or crib — and feeling guilt about it',
    'You feel "touched out" after a long day of physical closeness with your baby',
    'You are questioning whether attachment parenting is sustainable for your family long-term',
  ],
  whenToMention: [
    'Parental burnout is affecting your ability to be emotionally responsive to your child — you feel resentful, detached, or irritable most of the time',
    'Sleep deprivation from co-sleeping or nighttime parenting practices is severely affecting your physical or mental health',
    'You feel trapped by a parenting philosophy but are afraid that changing your approach will harm your child',
  ],
  whenToActNow: [
    'You are experiencing symptoms of postpartum depression or anxiety — persistent sadness, inability to enjoy your baby, intrusive thoughts, or panic attacks — that may be worsened by unsustainable parenting demands',
    'Sleep deprivation is so severe that you are falling asleep while holding or feeding your baby, creating a safety risk',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sleep-training-guilt-methods',
    'gentle-parenting-when-not-working',
    'co-parenting-different-styles',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Responding to Your Baby\'s Cues. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Responding-to-Your-Babys-Cues.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Roskam, I. et al. Exhausted Parents: Development and Preliminary Validation of the Parental Burnout Inventory. Frontiers in Psychology. 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28232811/',
    },
  ],
};
