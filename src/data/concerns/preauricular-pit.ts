import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'preauricular-pit',
  title: 'My Baby Has a Small Hole Near Their Ear',
  category: 'medical',
  searchTerms: [
    'baby hole near ear',
    'preauricular pit',
    'preauricular sinus',
    'ear pit baby',
    'tiny hole in front of ear',
    'baby ear hole',
    'preauricular pit infection',
    'ear pit drainage',
    'preauricular cyst',
    'hole by ear baby',
  ],
  quickAnswer:
    'A preauricular pit (also called preauricular sinus) is a small hole or dimple in front of the ear, present from birth. It\'s a common, usually harmless birth variation affecting about 1 in 100 babies. Most never cause problems, but occasionally they can become infected, requiring antibiotics or rarely surgery. No treatment is needed unless infection occurs.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Preauricular pits are noticed at birth or shortly after. They appear as a tiny opening in the skin just in front of the ear, usually near where the ear meets the face. Most are small and barely noticeable. Your pediatrician will document it during well visits. Keep the area clean during baths, but no special care is needed unless it becomes red, swollen, or drains fluid.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Most preauricular pits remain asymptomatic throughout infancy. Occasionally, you might notice a tiny bit of white or yellowish discharge, which can be normal. However, if the area becomes red, swollen, warm, or painful, or if there\'s increasing drainage, this may indicate infection. Contact your pediatrician if you notice these signs - infection requires antibiotic treatment.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Preauricular pits that have never been problematic are unlikely to cause issues. Continue with normal hygiene. If your child develops their first infection (redness, swelling, pain, discharge), your pediatrician will prescribe antibiotics. Recurrent infections may require referral to an ENT specialist to discuss possible surgical removal of the pit and underlying tract.',
    },
    {
      ageRange: '3 years+',
      context:
        'Most children with preauricular pits never have problems. If infections have occurred more than once, your doctor may recommend seeing an ENT specialist to consider surgical removal. The procedure is typically elective and done to prevent future infections. If the pit has never been infected, no treatment is needed - it\'s simply a harmless variation.',
    },
  ],
  whenNormal: [
    'Your baby has a small hole or dimple in front of the ear that has been present since birth',
    'The area looks normal - same color as surrounding skin, not red or swollen',
    'Your baby has no pain, drainage, or signs of infection',
    'The pit was noted by your pediatrician and documented as a benign finding',
    'Your baby is otherwise healthy and developing normally',
  ],
  whenToMention: [
    'You\'ve noticed the preauricular pit for the first time and want confirmation of what it is',
    'The pit occasionally has a tiny bit of discharge but no other symptoms',
    'You have a family history of preauricular pits or other ear abnormalities',
    'Your baby has other ear or facial variations and you want them evaluated together',
  ],
  whenToActNow: [
    'The area around the pit becomes red, swollen, warm, or painful',
    'There is increasing drainage or pus coming from the pit',
    'Your baby has a fever along with redness or swelling near the ear',
    'A lump or cyst appears near the preauricular pit',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ear Anomalies. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Preauricular Pits and Sinuses. Pediatrics in Review, 2019.',
      url: 'https://publications.aap.org/pediatricsinreview/article/40/8/427/34578/Preauricular-Lesions',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Otolaryngology. Preauricular Pits. ENT Health, 2023.',
      url: 'https://www.enthealth.org/conditions/preauricular-pits/',
    },
  ],
};
