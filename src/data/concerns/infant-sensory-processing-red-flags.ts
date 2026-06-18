import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'infant-sensory-processing-red-flags',
  title: 'My Baby Seems Extremely Sensitive to Touch, Sound, or Textures',
  category: 'behavior',
  searchTerms: [
    'baby sensory processing issues',
    'baby hates being touched',
    'baby screams at loud noises',
    'baby sensitive to textures',
    'sensory processing disorder baby',
    'baby won\'t touch food textures',
    'baby overstimulated easily',
    'infant sensory sensitivity',
    'baby cries at tags clothes',
    'sensory seeking baby',
  ],
  quickAnswer:
    'Some babies are naturally more sensitive to sensory input — touch, sound, light, textures, and movement. This sensory sensitivity exists on a spectrum, and having a sensitive baby does not automatically mean there is a disorder. However, when sensory responses are extreme enough to interfere with feeding, sleeping, developmental progress, or daily life, an evaluation by a pediatric occupational therapist can help. Sensory processing challenges are common, responsive to early intervention, and do not define your child\'s potential.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the first months, all babies have developing sensory systems, and some are naturally more sensitive than others. Signs of heightened sensitivity include: startling very easily, becoming distressed with clothing changes, becoming overwhelmed in busy environments, having difficulty calming down after stimulation, and arching away from touch. Some of this is within the range of normal newborn behavior. If your baby is extremely difficult to soothe and seems to find most sensory input distressing, mention this to your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, most babies are becoming more regulated and less reactive to everyday sensory input. If your baby continues to be extremely sensitive — unable to tolerate tummy time, screaming during baths, resisting being held, or becoming distressed in typical environments — it may be worth discussing with your pediatrician. An occupational therapy evaluation can assess whether your baby\'s sensory responses are within typical range.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies begin exploring food textures and different environments, sensory sensitivities may become more apparent. A baby who gags or refuses all textured foods, who will not touch grass or sand, who becomes distressed with normal ambient noise, or who avoids weight-bearing on their hands during crawling may be showing signs of sensory processing differences. Early occupational therapy can help with gradual, playful exposure to challenging textures and inputs.',
    },
    {
      ageRange: '12 months+',
      context:
        'Sensory processing challenges become clearer in toddlerhood as the child is expected to engage with a wider range of environments and activities. Some children are sensory-avoiding (pulling away from input) while others are sensory-seeking (craving intense input like crashing, spinning, or mouthing everything). Occupational therapy using a sensory integration approach is the gold-standard treatment. Many children make significant progress with consistent therapy.',
    },
  ],
  whenNormal: [
    'Your baby is somewhat more sensitive than other babies but can be soothed and is generally developing well',
    'Your baby dislikes certain textures but is willing to explore others and is progressing with feeding',
    'Your baby gets overstimulated in very busy environments but recovers with a calm break',
  ],
  whenToMention: [
    'Your baby\'s sensory responses are significantly impacting feeding — refusing all textures, gagging on anything not perfectly smooth',
    'Your baby becomes so distressed in normal environments that outings are nearly impossible',
    'Sensory sensitivity seems to be interfering with developmental progress — avoiding tummy time, not wanting to touch objects, not bearing weight on hands',
    'Your baby is extremely difficult to soothe and nothing seems to help regulate them',
  ],
  whenToActNow: [
    'Your baby has sudden new sensory changes — becoming unresponsive to sound or not reacting to pain — this warrants immediate medical evaluation as it may indicate a neurological issue',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sensory-seeking-vs-avoiding-baby',
    'auditory-neuropathy-spectrum-disorder',
  ],
  sources: [
    {
      org: 'AOTA',
      citation:
        'American Occupational Therapy Association. Sensory Integration and Processing.',
      url: 'https://www.aota.org/advocacy/issues/sensory-integration',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Sensory Processing in Infants and Toddlers. Infant Behavior and Development, 2022.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/35489189/',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Making Sense of Your Child\'s Sensory Needs.',
      url: 'https://www.zerotothree.org/resource/making-sense-of-sensory-needs/',
    },
  ],
};
