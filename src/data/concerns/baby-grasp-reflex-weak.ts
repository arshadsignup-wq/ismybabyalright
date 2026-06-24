import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-grasp-reflex-weak',
  title: 'My Baby\'s Grasp Reflex Seems Weak',
  category: 'physical',
  searchTerms: [
    'baby weak grasp reflex',
    'baby not gripping finger',
    'newborn grasp reflex absent',
    'baby cant hold objects',
    'baby weak hand grip',
    'baby palmar grasp reflex weak',
    'baby not grabbing toys',
    'infant grip strength low',
    'baby wont hold rattle',
    'baby hand grasp development',
  ],
  quickAnswer:
    'The palmar grasp reflex is present at birth and is one of the primitive reflexes tested in newborn exams. Babies instinctively grip anything placed in their palm. This reflex typically fades by 3-6 months as voluntary grasping develops. A weak or absent grasp reflex at birth may indicate neurological concerns, while a weak voluntary grasp after 4-5 months may suggest a motor delay that warrants evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The palmar grasp reflex is a primitive reflex present from birth — when you place your finger in your newborn\'s palm, they should automatically close their fingers around it. This reflex is strong enough that some babies can briefly support part of their weight. A weak or absent grasp reflex at birth may be noted during the newborn exam and can be associated with prematurity, birth injuries (such as brachial plexus injury), neurological conditions, or low muscle tone. If only one hand has a weak grasp, this is more concerning and may indicate a nerve or brain injury.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The primitive grasp reflex normally fades between 3-6 months and is replaced by voluntary grasping. By 3-4 months, babies start batting at objects and bringing hands to midline. By 4-5 months, most babies can reach for and grasp a rattle or toy placed near them. By 6 months, babies should be able to grasp objects with both hands and transfer them from hand to hand. If your baby shows no interest in reaching for objects, cannot hold a toy placed in their hand by 5 months, or consistently uses only one hand, discuss this with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Voluntary grasp becomes increasingly refined during this period. By 7-8 months, babies develop a raking grasp and by 9-12 months, the pincer grasp (thumb and forefinger) emerges. If your baby has difficulty holding objects, drops things frequently, avoids using one or both hands, or has not developed any form of voluntary grasp by 7-8 months, this may indicate fine motor delays, neurological issues, or conditions like cerebral palsy. Early referral to a pediatric occupational therapist can be very helpful for improving hand skills.',
    },
  ],
  whenNormal: [
    'Your newborn\'s grasp reflex is present but varies in strength from moment to moment depending on alertness and state.',
    'Your 3-5 month old is transitioning from reflexive to voluntary grasping and sometimes drops objects — this is a normal developmental transition.',
    'Your baby grasps objects but seems to prefer one hand slightly — mild hand preference is normal, though strong preference before 18 months should be evaluated.',
  ],
  whenToMention: [
    'Your baby does not seem interested in reaching for or grasping toys by 5 months of age.',
    'Your baby consistently uses only one hand and ignores or avoids using the other hand.',
    'Your baby\'s grasp seems weaker than expected for their age and they frequently drop objects.',
  ],
  whenToActNow: [
    'Your newborn has a completely absent grasp reflex in one or both hands — this may indicate a brachial plexus injury or neurological issue and should be evaluated promptly.',
    'Your baby suddenly loses the ability to grasp objects they could previously hold — sudden loss of motor skills requires urgent medical evaluation.',
    'Your baby\'s weak grasp is accompanied by floppiness, poor feeding, lack of movement in the affected arm, or other developmental concerns — seek prompt evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['weak-grip-baby', 'not-transferring-objects', 'not-picking-up-small-objects'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Newborn Reflexes',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Important Milestones: Your Baby By Four Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Primitive Reflexes in Neonates',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK554606/',
    },
  ],
};
