import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-startle-reflex-excessive',
  title: 'Excessive Moro (Startle) Reflex in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn startle reflex excessive',
    'baby moro reflex too much',
    'newborn startles easily',
    'baby arms flailing',
    'newborn startle reflex waking up',
    'baby overactive startle',
    'excessive moro reflex',
    'newborn jumpy startling',
    'baby startles at every noise',
    'moro reflex and sleep',
  ],
  quickAnswer:
    'The Moro (startle) reflex is a normal primitive reflex present in all newborns. Some babies seem to have a more active or sensitive startle reflex, which can cause them to wake frequently during sleep. This is a normal variation and typically diminishes by 3-4 months of age. Swaddling can help reduce the impact of the Moro reflex on sleep.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'The Moro reflex is triggered by a sudden change in position, a loud noise, or a feeling of falling. Your baby will throw their arms wide, arch their back, then bring their arms back in and often cry. This is one of the most prominent newborn reflexes and is a sign of a healthy nervous system. Some babies are more sensitive and startle more easily or frequently than others, which is a normal variation. If the startle reflex is disrupting sleep, swaddling can help by keeping the arms snug.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The Moro reflex is still present and active. It typically begins to diminish around 2-3 months. If the reflex seems to be getting stronger rather than weaker, or if your baby seems to startle without any trigger, mention this to your pediatrician. Continued swaddling (with safe swaddling practices) can help with sleep until the reflex fades.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The Moro reflex should fade and disappear by 4-6 months. If it persists strongly beyond 6 months, your pediatrician may want to evaluate neurological development, as a retained Moro reflex beyond this age can sometimes indicate a neurological issue. As the reflex fades, you should transition from swaddling to a sleep sack for safe sleep.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The Moro reflex should not be present at this age. If your baby continues to show an exaggerated startle response, discuss with your pediatrician. However, a normal startle to unexpected loud sounds is expected at any age and is different from the Moro reflex.',
    },
  ],
  whenNormal: [
    'Arms fling out, back arches, then arms come back in when baby is startled by a noise or sudden movement',
    'The reflex is present in the first 3-4 months and gradually fades',
    'Both arms respond symmetrically',
    'Baby can be consoled after startle episodes',
  ],
  whenToMention: [
    'The Moro reflex seems to persist strongly beyond 4-6 months',
    'Baby startles continuously without apparent triggers',
    'The reflex is significantly disrupting sleep despite swaddling',
  ],
  whenToActNow: [
    'The startle response is asymmetric (one arm responds differently than the other), which could indicate a brachial plexus injury or clavicle fracture',
    'Startle episodes associated with rhythmic jerking movements, eye deviations, or unresponsiveness, which could indicate seizure activity',
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
        'National Library of Medicine. Moro Reflex. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK542173/',
    },
  ],
  relatedConcernSlugs: ['newborn-asymmetric-moro-reflex', 'baby-startled-easily', 'baby-jerky-movements', 'newborn-swaddling-safety'],
};
