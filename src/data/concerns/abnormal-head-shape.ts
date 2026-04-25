import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'abnormal-head-shape',
  title: 'My Baby\'s Head Shape Looks Abnormal',
  category: 'medical',
  searchTerms: [
    'baby head shape abnormal',
    'baby flat head',
    'baby cone head',
    'baby head lopsided',
    'baby head not round',
    'plagiocephaly baby',
    'baby misshapen head',
    'baby head bumpy',
    'baby head ridge',
    'baby asymmetric head shape',
  ],
  quickAnswer:
    'Many babies develop temporary head shape irregularities that are completely normal. A cone-shaped head from vaginal delivery reshapes within days. Mild positional flattening (plagiocephaly) from sleeping on the back is very common and usually improves with repositioning and tummy time. However, head shape changes involving ridges, a persistently bulging fontanelle, or rapid head growth changes should be evaluated to rule out craniosynostosis.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'After vaginal delivery, many babies have a temporarily elongated or cone-shaped head (molding) from passing through the birth canal. This is completely normal and typically resolves within a few days to 2 weeks. Babies may also have a caput succedaneum (soft scalp swelling) or cephalohematoma (firm bump from bleeding between the skull bone and its covering), both of which resolve on their own, though a cephalohematoma may take weeks to months. Babies born via cesarean section often have a rounder head shape.',
    },
    {
      ageRange: '2 weeks - 4 months',
      context:
        'This is when positional plagiocephaly (flat spot) most commonly develops, as babies spend a lot of time on their backs for safe sleep. It is the most common cause of abnormal head shape and affects up to 47% of infants. It can also be associated with torticollis (a tight neck muscle causing the head to tilt to one side). Prevention and treatment include alternating which end of the crib you place the baby\'s head, supervised tummy time when awake, and varying the direction you hold the baby during feeds.',
    },
    {
      ageRange: '4-8 months',
      context:
        'Mild positional flattening often improves significantly once babies spend more time upright, begin rolling, and have more tummy time. If the asymmetry is moderate to severe and not improving, your pediatrician may refer you to a specialist who may recommend a cranial molding helmet (orthotic). Helmets are most effective when started between 4-6 months, before the skull bones begin to harden. Your doctor will also want to confirm the flattening is positional and not caused by craniosynostosis.',
    },
    {
      ageRange: '8 months+',
      context:
        'By 8-12 months, skull growth slows and the bones become firmer. Mild residual asymmetry is common and is usually covered by hair. Most positional plagiocephaly has minimal long-term cosmetic impact. However, any new or worsening head shape abnormality at this age, or a raised ridge along a skull suture line, should be evaluated by your pediatrician to rule out late-presenting craniosynostosis.',
    },
  ],
  whenNormal: [
    'A cone-shaped head after vaginal delivery that rounds out within the first 1-2 weeks',
    'Mild flattening on one side or the back of the head in a baby who sleeps on their back, which improves with repositioning and tummy time',
    'The soft spots (fontanelles) are flat and the head is growing along its expected curve',
    'Your baby moves their head freely in both directions with no persistent head tilt',
  ],
  whenToMention: [
    'You notice a flat spot that seems to be getting worse despite repositioning and tummy time',
    'Your baby strongly prefers to turn their head to one side or has a persistent head tilt (possible torticollis)',
    'You feel a raised bony ridge along any part of the skull',
  ],
  whenToActNow: [
    'You notice a prominent ridge along a skull suture line, the soft spot is bulging or completely absent, or the head shape is changing rapidly, as these can be signs of craniosynostosis requiring surgical evaluation',
    'Your baby\'s head circumference is crossing percentile lines rapidly (too fast or too slow), or you notice forehead bulging, sunset eyes, or persistent vomiting along with head shape changes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Baby\'s Head Shape: Causes and Treatment.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Cleft-Craniofacial/Pages/Baby-Head-Shape.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Laughlin J, et al. Prevention and Management of Positional Skull Deformities in Infants. Pediatrics, 2011.',
      url: 'https://publications.aap.org/pediatrics/article/128/6/1236/30847/Prevention-and-Management-of-Positional-Skull',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Plagiocephaly: Flat Head Syndrome.',
      url: 'https://www.mayoclinic.org/diseases-conditions/plagiocephaly/symptoms-causes/syc-20378056',
    },
  ],
};
