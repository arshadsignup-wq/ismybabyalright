import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-high-pitched-scream',
  title: 'Baby High-Pitched Screaming',
  category: 'medical',
  searchTerms: [
    'baby high pitched scream',
    'baby screaming high pitch',
    'baby shrill cry',
    'baby screeching loudly',
    'baby high pitched cry concerning',
    'newborn high pitched cry',
    'baby screams for no reason',
    'baby high pitched cry meningitis',
    'baby inconsolable high pitched screaming',
    'baby piercing scream',
    'what does high pitched cry mean baby',
    'baby scream won\'t stop',
  ],
  quickAnswer:
    'A high-pitched scream can have many causes, ranging from completely normal (excitement, frustration, experimentation with voice) to potentially concerning (pain, illness, or neurological issues). Many babies go through a "screaming phase" around 4-8 months when they discover they can make loud, high-pitched sounds - this is a normal vocal development milestone. However, a sudden, persistent, inconsolable high-pitched cry that is different from your baby\'s usual cry, especially when accompanied by other symptoms, should be evaluated by a doctor.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In newborns, a persistent high-pitched or shrill cry that sounds different from their usual cry can sometimes be a sign of pain or illness. Causes can include colic, reflux, hair tourniquet (a strand of hair wrapped around a finger or toe cutting off circulation), or less commonly, serious conditions like meningitis or increased intracranial pressure. If your newborn has a new high-pitched cry along with fever, lethargy, a bulging fontanelle, or refusal to feed, seek immediate medical attention.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies in this age range begin experimenting with their voice, and high-pitched squeals of delight or excitement are normal and common. These joyful screams are different from a cry of distress - your baby will typically be smiling, making eye contact, and seem pleased with the noise. Distressed high-pitched screaming, especially when combined with arching the back, pulling up the legs, or refusing to be comforted, may indicate pain from reflux, ear infection, or other discomfort.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The "screaming phase" peaks around 6-8 months when babies love making loud, high-pitched sounds purely for the fun of it. They are testing their vocal cords and enjoying the reaction they get. This is normal and temporary. Teething pain, ear infections, and illness can also cause high-pitched distressed crying at this age. The key distinction is context: a happy baby experimenting with volume is different from a distressed baby screaming in pain.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers scream for many reasons: frustration, excitement, anger, seeking attention, or because they find it fun. High-pitched screaming as part of a tantrum, while ear-splitting, is behaviorally normal. If your toddler has sudden onset of a high-pitched, inconsolable scream that is clearly different from their behavioral screaming, evaluate for pain, injury, or illness. Ear infections, urinary tract infections, and hair tourniquets on toes are common hidden pain sources.',
    },
  ],
  whenNormal: [
    'Your baby is experimenting with voice and making high-pitched squeals while smiling and happy',
    'The screaming is part of a tantrum or expression of frustration in a toddler',
    'Your baby is in a vocal discovery phase (typically 4-8 months) and screams for attention or reaction',
    'The screaming stops when your baby is distracted, fed, or comforted',
  ],
  whenToMention: [
    'High-pitched crying is new, persistent, and sounds different from your baby\'s usual cry',
    'Your baby screams during or after feeds, which could suggest reflux or ear infection',
    'The screaming phase is so persistent or intense that it is affecting your family\'s daily functioning',
  ],
  whenToActNow: [
    'Your baby has a sudden high-pitched, inconsolable cry with fever, lethargy, a bulging fontanelle, stiff neck, or rash - these could indicate meningitis',
    'Your baby is screaming and you notice a swollen, discolored finger or toe (hair tourniquet) or signs of injury',
    'Your baby\'s cry has permanently changed to a higher pitch and seems weaker or more strained than before',
  ],
  relatedMilestones: [
    'language-cooing',
    'language-babbling',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['colic', 'meningitis-signs-baby', 'baby-arching-back'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Crying and Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Responding-to-Your-Babys-Cries.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Meningitis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/head-neck-nervous-system/Pages/Meningitis.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infant Crying Characteristics. Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/22614775/',
    },
  ],
};
