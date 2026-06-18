import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sensory-seeking-vs-avoiding-baby',
  title: 'Is My Baby Sensory Seeking or Sensory Avoiding?',
  category: 'behavior',
  searchTerms: [
    'sensory seeking baby',
    'sensory avoiding baby',
    'baby needs constant movement',
    'baby craves spinning rocking',
    'baby mouths everything excessively',
    'baby bangs head on purpose',
    'baby hates swings',
    'baby avoids messy play',
    'under responsive baby',
    'sensory craver baby',
  ],
  quickAnswer:
    'Babies and toddlers process sensory information differently. Sensory seekers crave intense input — they love movement, touch objects constantly, mouth everything beyond typical age, and seem to need more stimulation to feel regulated. Sensory avoiders are overwhelmed by input — they pull away from touch, cover their ears, dislike messy play, and become distressed in stimulating environments. Many children are a mix of both. These are not diagnoses but patterns that, when extreme, may benefit from occupational therapy to help the child engage comfortably with their world.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'In infancy, sensory patterns are just emerging. A baby who constantly needs to be bounced or rocked to stay calm may be showing early sensory-seeking behavior. A baby who stiffens and cries during handling, hates diaper changes, or is very difficult to soothe may be sensory-avoiding. At this age, it is often too early to label these patterns definitively, but noting them for your pediatrician is helpful.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Sensory patterns become more apparent as babies explore their environment. Sensory seekers may: mouth objects excessively beyond the typical exploratory phase, bang toys loudly and repeatedly, seek out spinning or rocking, crash into things on purpose, or enjoy being thrown in the air. Sensory avoiders may: refuse to touch food or messy textures, become distressed when placed on grass or sand, startle at normal sounds, or resist new positions.',
    },
    {
      ageRange: '12-24 months',
      context:
        'In toddlerhood, sensory patterns are most clearly observable. A sensory-seeking toddler may run constantly, climb everything, spin without getting dizzy, chew on non-food items, or crave bear hugs and deep pressure. A sensory-avoiding toddler may refuse to get messy, have extreme reactions to clothing tags or seams, cover their ears in normal environments, or resist playground equipment. An occupational therapy evaluation can help if these patterns interfere with daily life.',
    },
    {
      ageRange: '2 years+',
      context:
        'By this age, occupational therapy using sensory integration techniques can be very effective. For seekers, a "sensory diet" (planned activities providing the input they need) helps them regulate. For avoiders, gradual, playful exposure to challenging inputs builds tolerance. Many children with sensory processing differences are neurotypical — sensory patterns exist independently of autism, though they often co-occur. Focus on function: can your child participate in age-appropriate activities?',
    },
  ],
  whenNormal: [
    'Your baby has some sensory preferences but can adapt and is developing normally overall',
    'Your toddler is a bit more active or a bit more cautious than peers but can participate in daily routines',
    'Your baby mouths objects, which is typical exploration in the first year',
  ],
  whenToMention: [
    'Your baby\'s sensory patterns are interfering with feeding, sleeping, or daily care routines',
    'Your baby seems unable to regulate after sensory input — meltdowns are frequent and intense',
    'Your toddler\'s sensory seeking is dangerous — constantly climbing to dangerous heights, crashing head-first into things',
    'Your child avoids so many textures and experiences that it limits their development or social participation',
  ],
  whenToActNow: [
    'Your child repeatedly bangs their head hard enough to cause injury and cannot be redirected — seek urgent developmental evaluation',
    'Your child has a sudden change in sensory responsiveness (stops responding to sound, pain, or visual input) — this needs immediate medical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'infant-sensory-processing-red-flags',
    'auditory-neuropathy-spectrum-disorder',
  ],
  sources: [
    {
      org: 'AOTA',
      citation:
        'American Occupational Therapy Association. Understanding Sensory Processing.',
      url: 'https://www.aota.org/advocacy/issues/sensory-integration',
    },
    {
      org: 'STAR Institute',
      citation:
        'STAR Institute for Sensory Processing. About SPD.',
      url: 'https://sensoryhealth.org/basic/about-spd',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Sensory Over-Responsivity in Toddlers. Journal of Abnormal Child Psychology, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28534111/',
    },
  ],
};
