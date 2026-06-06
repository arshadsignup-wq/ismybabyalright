import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-absent-reflexes',
  title: 'Missing Primitive Reflexes in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn absent reflexes',
    'baby missing reflexes',
    'newborn no grasp reflex',
    'baby no rooting reflex',
    'absent primitive reflexes',
    'newborn weak reflexes',
    'baby diminished reflexes',
    'newborn reflex testing',
    'absent moro reflex baby',
    'newborn neurological exam reflexes',
  ],
  quickAnswer:
    'Primitive reflexes (Moro, rooting, sucking, grasp, stepping) are expected in all healthy newborns and are tested as part of the newborn neurological exam. Absent or significantly diminished reflexes may indicate a neurological concern, prematurity-related immaturity, or the effects of medication and should be evaluated by your pediatrician.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns are expected to have several primitive reflexes that demonstrate normal brain and nervous system function. These include the Moro reflex (startle), rooting (turning head toward touch on cheek), sucking, palmar grasp (gripping finger), and stepping reflex. Your pediatrician tests these at birth and at well-child visits. Absent or very weak reflexes can be caused by prematurity, birth injury, exposure to medications or substances, infection, or neurological conditions. Some variation in reflex strength is normal, but complete absence of reflexes warrants further evaluation.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Primitive reflexes should still be present during this period. As the brain matures, these reflexes begin to integrate (fade) gradually. The stepping reflex fades first, usually by 2 months. The others persist through this period. If reflexes that should be present are absent, your pediatrician may recommend neurological evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Primitive reflexes normally begin to fade during this period as voluntary movements replace them. The Moro reflex typically fades by 4-6 months, and the palmar grasp integrates as voluntary grasping develops. Reflexes that persist too long (beyond their expected time frame) can also be a concern.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most primitive reflexes should have integrated by this age. Persistent primitive reflexes beyond their normal time frame may indicate neurological issues and should be evaluated. Conversely, the protective reflexes (such as the parachute reflex) should be developing.',
    },
  ],
  whenNormal: [
    'All primitive reflexes present at birth and during the newborn period',
    'Gradual fading of reflexes at the expected developmental time points',
    'Slight variation in reflex strength that does not affect function',
  ],
  whenToMention: [
    'One or more reflexes seem weaker than expected',
    'Your baby does not root, suck, or grasp as strongly as expected',
    'Reflexes seem to persist longer than expected or are not fading on schedule',
  ],
  whenToActNow: [
    'Complete absence of primitive reflexes in a newborn, which may indicate significant neurological depression or injury',
    'A floppy, unresponsive baby with absent reflexes and poor feeding, which requires urgent medical evaluation',
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
        'National Library of Medicine. Primitive Reflexes. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK554606/',
    },
  ],
  relatedConcernSlugs: ['newborn-rooting-reflex-weak', 'floppy-baby-syndrome', 'newborn-startle-reflex-excessive'],
};
