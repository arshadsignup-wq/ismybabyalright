import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-rooting-reflex-weak',
  title: 'Weak Rooting Reflex in Newborns',
  category: 'medical',
  searchTerms: [
    'weak rooting reflex baby',
    'newborn not rooting',
    'baby won\'t turn to breast',
    'newborn poor rooting',
    'baby not searching for nipple',
    'diminished rooting reflex',
    'newborn rooting reflex absent',
    'baby not responding to cheek touch',
    'weak feeding reflexes newborn',
    'rooting reflex and feeding',
  ],
  quickAnswer:
    'A weak rooting reflex (where baby turns toward a touch on the cheek to find the breast or bottle) can sometimes contribute to feeding difficulties in newborns. It may be caused by prematurity, sleepiness, recent feeding, illness, or neurological factors. Most babies develop a stronger rooting reflex with time and feeding practice, but persistent weakness should be evaluated.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'The rooting reflex helps newborns find the breast or bottle by turning their head toward a touch on the cheek, lip, or mouth. A weak rooting reflex can occur in premature babies, very sleepy newborns, or babies affected by maternal medications used during labor. A full or satisfied baby may also not root strongly. If your newborn has a consistently weak rooting reflex and is having difficulty latching or feeding, your pediatrician should evaluate for underlying causes. Skin-to-skin contact and gentle stimulation can help encourage the reflex.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The rooting reflex should be well-established and strong during this period. As feeding becomes more practiced, the rooting reflex becomes less critical as your baby learns to latch voluntarily. A persistently weak rooting reflex with ongoing feeding difficulties may indicate low muscle tone or other neurological concerns.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The rooting reflex naturally begins to fade around 3-4 months as your baby develops voluntary feeding behaviors. By this age, feeding should be well-established, and your baby should actively turn toward the breast or bottle without needing the reflex.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The rooting reflex should have integrated by this age. Your baby now feeds voluntarily and purposefully. Any significant feeding difficulties at this age are related to other factors and should be evaluated by your pediatrician.',
    },
  ],
  whenNormal: [
    'A sleepy or recently fed baby not rooting strongly',
    'Rooting reflex that improves with skin-to-skin contact and gentle stimulation',
    'Gradual strengthening of the reflex over the first few weeks',
    'Successful feeding despite a somewhat variable rooting response',
  ],
  whenToMention: [
    'Consistently weak rooting reflex that is affecting your baby\'s ability to latch and feed',
    'Baby does not seem to search for the breast or bottle when hungry',
    'Weak rooting combined with other weak reflexes or low muscle tone',
  ],
  whenToActNow: [
    'Absent rooting reflex combined with poor feeding, weight loss, and lethargy',
    'A suddenly unresponsive baby who is not feeding and has lost previously present reflexes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Reflexes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Rooting Reflex. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003293.htm',
    },
  ],
  relatedConcernSlugs: ['newborn-absent-reflexes', 'newborn-not-latching-at-all', 'newborn-sleepy-feeder'],
};
