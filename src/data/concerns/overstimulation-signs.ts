import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'overstimulation-signs',
  title: 'Signs of Overstimulation in Babies',
  category: 'behavior',
  searchTerms: [
    'baby overstimulated',
    'signs of overstimulation',
    'overstimulated baby symptoms',
    'baby fussy too much stimulation',
    'how to tell if baby is overstimulated',
    'overstimulation in infants',
    'baby sensory overload',
    'calming overstimulated baby',
    'baby crying from overstimulation',
    'newborn overstimulation',
  ],
  quickAnswer:
    'Overstimulation happens when a baby receives more sensory input  -  sights, sounds, touch, movement  -  than they can process. Common signs include fussiness, crying, turning away, arching back, or difficulty settling. Newborns are especially prone to overstimulation because their nervous systems are still developing. Creating a calm, quiet environment helps them reset.',
  byAge: [
    {
      ageRange: 'Newborn - 3 months',
      context:
        'Newborns have very limited ability to filter sensory input and can become overstimulated quickly. Signs include crying, arching back, turning their head away, clenching fists, or spreading fingers and toes. Even normal household activity can be too much. Watch for your baby\'s cues and provide a quiet, dim space when they seem overwhelmed. Skin-to-skin contact, gentle rocking, or swaddling often helps them calm.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age are becoming more alert and engaged but still have limited tolerance for stimulation. Overstimulated babies may pull away from eye contact, become fussy during play, refuse to feed, or have difficulty falling asleep. Bright lights, loud sounds, or being passed between many people can trigger overstimulation. Following wake windows (60-90 minutes at this age) helps prevent overwhelm.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies can handle more stimulation but can still become overwhelmed, especially in new or busy environments (parties, stores, family gatherings). Signs include clinginess, whining, rubbing eyes, or sudden crankiness. Some babies also show hyperactivity or difficulty settling when overstimulated. Providing a quiet space or a familiar routine helps them decompress.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers can become overstimulated in busy, unpredictable environments. Overstimulation may look like tantrums, meltdowns, hyperactivity, or shutting down (going quiet and withdrawn). Transitions, skipped naps, or too much screen time can contribute. Building in quiet time, limiting stimulation before bed, and watching for early cues (rubbing eyes, becoming clingy) helps prevent meltdowns.',
    },
  ],
  whenNormal: [
    'Your baby shows clear cues when overstimulated and calms down when you reduce stimulation',
    'Overstimulation happens in predictable situations (busy places, skipped naps, end of the day)',
    'Your baby can recover from overstimulation within 10-20 minutes in a calm environment',
    'You are learning your baby\'s unique cues and can intervene before they become too overwhelmed',
    'Overstimulation does not happen constantly or interfere with feeding and sleep',
  ],
  whenToMention: [
    'Your baby seems constantly overstimulated even in calm, quiet environments',
    'Your baby has extreme reactions to normal sensory input (cannot tolerate normal light or sound levels)',
    'Overstimulation is interfering with feeding, sleep, or bonding',
    'You have tried reducing stimulation but your baby remains inconsolable or extremely fussy',
  ],
  whenToActNow: [
    'Your baby is so overstimulated that they cannot be calmed for extended periods (more than an hour) even with all soothing strategies',
    'Your baby seems to be in pain or distress rather than just overstimulated',
    'Overstimulation is accompanied by fever, stiff neck, or other signs of illness',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Responding to Your Baby\'s Cues. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Responding-to-Your-Babys-Cues.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Understanding Your Baby\'s Temperament.',
      url: 'https://www.zerotothree.org/resource/understanding-your-babys-temperament/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Calming a Fussy Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Calming-A-Fussy-Baby.aspx',
    },
  ],
};
