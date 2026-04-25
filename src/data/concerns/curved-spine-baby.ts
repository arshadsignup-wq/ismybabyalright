import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'curved-spine-baby',
  title: 'My Baby\'s Spine Looks Curved',
  category: 'physical',
  searchTerms: [
    'baby spine looks curved',
    'baby curved back',
    'infant scoliosis',
    'baby spine not straight',
    'newborn spine bump',
    'baby has a curved spine',
    'baby back looks crooked',
    'infantile scoliosis signs',
    'baby kyphosis',
    'baby spine concerns',
  ],
  quickAnswer:
    'A gentle C-shaped curve when your baby is held in a seated position is completely normal, because babies\' spinal muscles are still developing. True spinal abnormalities in infants are rare. However, a visible curve when your baby is lying flat, a bony bump along the spine, or a curve that seems rigid should be evaluated by your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have a naturally rounded spine, often called a C-curve, because they spent months curled up in the womb. When you hold your baby upright or in a seated position, their back will round forward, and this is entirely normal. Their spinal muscles are not yet strong enough to hold their back straight. As long as the spine looks symmetrical (curving evenly, not bending to one side) and there are no visible lumps or dimples along the spine, there is usually nothing to worry about.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby develops head control and starts doing tummy time, the natural cervical (neck) curve begins to develop, and the spine starts to straighten when your baby is held upright. If you notice that your baby\'s spine consistently curves to one side, that one shoulder seems higher than the other, or that your baby always leans to one side, mention it to your pediatrician. These could be signs of torticollis (a neck muscle issue) rather than a spinal problem, and it is very treatable.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies learn to sit independently, their spinal curves continue to develop. The lumbar (lower back) curve forms as they start sitting and standing. Mild asymmetry in posture can be normal as babies figure out balance, but a consistent lean to one side, visible curvature when lying flat on their back, or uneven skin folds on the torso should be evaluated.',
    },
    {
      ageRange: '12+ months',
      context:
        'Once your child is walking, their spine should appear straight when viewed from behind. Infantile scoliosis (a sideways curve of the spine) is rare but can be detected at this age. Many mild cases resolve on their own with monitoring. If you notice a visible curve, uneven shoulders or hips, or your child consistently leans to one side while walking, your pediatrician can perform a simple screening exam and order imaging if needed.',
    },
  ],
  whenNormal: [
    'Your baby\'s back rounds into a C-shape when held in a seated position but looks symmetrical when lying flat on their back.',
    'Your newborn\'s spine appears curved because they naturally curl into a fetal position, which is expected in the first weeks.',
    'Your baby\'s posture is slightly asymmetric when first learning to sit but improves as their core strength develops.',
  ],
  whenToMention: [
    'You notice a visible sideways curve in your baby\'s spine when they are lying flat on their back or tummy.',
    'One shoulder or hip appears consistently higher than the other, or your baby always leans to one side.',
    'You see a dimple, tuft of hair, or skin discoloration over the lower spine that you have not had evaluated.',
  ],
  whenToActNow: [
    'You discover a bony lump or hard protrusion along your baby\'s spine, or your baby seems to be in pain when their back is touched.',
    'Your baby has a rigid spine that does not flex normally, combined with weakness in the legs or changes in bowel or bladder function.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'gross-motor-sitting',
    'gross-motor-standing',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Scoliosis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Scoliosis.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Scoliosis: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/scoliosis/symptoms-causes/syc-20350716',
    },
    {
      org: 'AAP',
      citation:
        'Scoliosis Research Society. Infantile Scoliosis.',
      url: 'https://www.srs.org/patients-and-families/conditions-and-treatments/parents/scoliosis/infantile-scoliosis',
    },
  ],
};
