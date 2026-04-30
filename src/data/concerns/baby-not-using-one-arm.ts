import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-using-one-arm',
  title: 'Baby Not Using One Arm or Hand',
  category: 'physical',
  searchTerms: [
    'baby not using one arm',
    'baby favoring one hand',
    'baby one arm weaker',
    'baby not moving one arm',
    'baby not reaching with one hand',
    'erb\'s palsy baby',
    'brachial plexus injury baby',
    'baby arm limp',
    'baby fisting one hand',
    'baby not opening one hand',
  ],
  quickAnswer:
    'If your baby consistently avoids using one arm or hand, it deserves evaluation. Before 18 months, babies should use both hands roughly equally - strong hand preference before this age can indicate a concern with the less-used side. Possible causes include brachial plexus injury (Erb\'s palsy) from birth, nursemaid\'s elbow, fracture, or neurological differences. Early identification leads to better outcomes with therapy.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A baby who does not move one arm from birth may have a brachial plexus injury (damage to the nerves that control the arm), which can happen during a difficult delivery. The affected arm may be limp, held in an unusual position, or have a weaker grip. Most brachial plexus injuries improve significantly with physical therapy within the first 3-6 months. Early evaluation and intervention are important.',
    },
    {
      ageRange: '3-12 months',
      context:
        'At this age, babies should be reaching for toys and bringing hands to midline using both arms. If one arm is consistently less active, it could indicate a milder brachial plexus injury, muscle tone difference, or early signs of cerebral palsy (hemiplegia). Your pediatrician will check arm strength, range of motion, reflexes, and whether both hands open and grasp equally. Early physical and occupational therapy can be very beneficial.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Hand preference normally develops between 18 months and 3 years. A strong preference for one hand before 12-18 months, or a complete avoidance of using the other hand, is not typical and should be evaluated. A sudden change where a toddler stops using an arm they previously used normally could indicate nursemaid\'s elbow, a fracture, or a neurological event.',
    },
  ],
  whenNormal: [
    'A slight preference for one hand after 18 months of age',
    'Temporarily not using an arm that was recently vaccinated (injection site soreness)',
    'Using both arms but one slightly less skillfully in the early stages of a new motor task',
  ],
  whenToMention: [
    'Your baby consistently reaches with only one hand and ignores the other',
    'One hand stays fisted while the other opens and grasps normally',
    'You notice a difference in arm strength or movement between sides',
    'Your baby was noted to have a difficult delivery and one arm seems weaker',
  ],
  whenToActNow: [
    'Your baby has not moved one arm since birth',
    'Your toddler suddenly stops using an arm they previously used normally',
    'There is visible swelling, deformity, or severe pain in the arm',
    'Loss of arm use is accompanied by other new neurological symptoms like facial drooping or difficulty walking',
  ],
  relatedMilestones: ['3-months', '6-months', '9-months'],
  showSelfReferral: true,
  relatedConcernSlugs: ['asymmetric-movement', 'early-hand-preference', 'baby-dislocated-elbow-nursemaids', 'baby-not-grasping-objects'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Brachial Plexus Injuries. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institute of Neurological Disorders and Stroke. Brachial Plexus Injuries.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/brachial-plexus-injuries',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Developmental Milestones.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
  ],
};
