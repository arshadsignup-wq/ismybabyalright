import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-coughing-while-feeding',
  title: 'My Baby Coughs While Feeding',
  category: 'feeding',
  searchTerms: [
    'baby coughing while feeding',
    'baby coughs during bottle',
    'baby coughs while breastfeeding',
    'baby choking on milk',
    'baby sputtering while eating',
    'baby gasping during feeding',
    'newborn coughing while nursing',
    'baby coughs and pulls off breast',
    'milk coming out baby nose',
    'baby struggling to swallow milk',
  ],
  quickAnswer:
    'Occasional coughing during feeding is very common, especially in newborns who are still learning to coordinate sucking, swallowing, and breathing. It often happens with a fast milk flow or letdown. However, if your baby coughs with every feed or turns blue or has difficulty breathing, this needs medical evaluation to rule out swallowing difficulties.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are still developing the coordination needed to suck, swallow, and breathe simultaneously. Coughing during feeds is common, especially if the milk flow is fast, whether from a strong letdown at the breast or a nipple flow that is too fast for the baby. For breastfeeding, try a laid-back nursing position so gravity slows the flow. For bottle feeding, use a slow-flow nipple and pace the feeding by holding the bottle more horizontally.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, most babies have developed better suck-swallow-breathe coordination and coughing should decrease. If coughing continues to happen frequently, consider whether the bottle nipple flow rate needs to be adjusted or whether your baby may have reflux that is causing discomfort during feeds. Babies with nasal congestion may also cough more during feeds because they cannot breathe through their nose while swallowing.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Babies at this age are typically efficient feeders, so persistent coughing during bottle or breast feeds warrants attention. As babies start solids, some coughing or gagging with new textures is normal and different from coughing during liquid feeds. If your baby coughs consistently during liquid feeds at this age, your pediatrician may want to evaluate for swallowing dysfunction or aspiration.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Coughing while drinking from a bottle, breast, or cup at this age should be discussed with your pediatrician, especially if it has been a persistent pattern. Some babies develop a chronic cough related to silent aspiration, where small amounts of liquid enter the airway without obvious choking. A swallow study can determine whether this is happening.',
    },
  ],
  whenNormal: [
    'Your baby coughs once or twice at the start of a feed when the milk first lets down or flows quickly',
    'Your baby coughs occasionally during feeds but otherwise feeds well and gains weight normally',
    'Your baby has a cold or congestion and coughs more during feeds temporarily',
    'Coughing happens only with a fast-flow bottle nipple and stops when you switch to a slower flow',
  ],
  whenToMention: [
    'Your baby coughs during most feeds regardless of flow rate or feeding method',
    'Your baby frequently has milk come out of their nose during feeds',
    'Your baby seems to have a wet or gurgly voice after feeding',
  ],
  whenToActNow: [
    'Your baby turns blue, becomes limp, or stops breathing during a feed',
    'Your baby has recurrent pneumonia or unexplained respiratory infections, which may indicate chronic aspiration',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choking Prevention. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Pediatric Dysphagia.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/pediatric-dysphagia/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bottle Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Bottle-Feeding.aspx',
    },
  ],
};
