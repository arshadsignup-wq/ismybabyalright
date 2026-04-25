import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-startled-easily',
  title: 'My Baby Startles Easily',
  category: 'physical',
  searchTerms: [
    'baby startles easily',
    'baby jumpy all the time',
    'baby scared of everything',
    'moro reflex won\'t go away',
    'baby flinches at noise',
    'newborn startles constantly',
    'baby overly sensitive to sound',
    'baby jerks awake easily',
    'baby startles at own movements',
  ],
  quickAnswer:
    'Most newborns startle easily because of the Moro reflex, a normal survival instinct that makes them throw their arms out when they sense falling or loud noises. This reflex usually fades by 3-6 months. Some babies are naturally more sensitive to sounds and movement, and that\'s often just part of their temperament.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'All babies startle easily at this age  -  it\'s actually a sign that their nervous system is working properly. The Moro reflex (also called the startle reflex) causes your baby to throw their arms out, arch their back, and sometimes cry when they hear a sudden noise or feel like they\'re falling. This reflex is strongest in the first two months and can be triggered dozens of times a day. Swaddling helps dampen the reflex so your baby doesn\'t wake themselves up constantly.',
    },
    {
      ageRange: '3-5 months',
      context:
        'The Moro reflex should be starting to fade during this period. You might notice that your baby still startles at loud noises but doesn\'t have that dramatic full-body jerk as often. Some babies are simply more sensitive to sensory input than others  -  if your baby startles easily but can be soothed quickly and is developing normally otherwise, this is likely just their temperament.',
    },
    {
      ageRange: '6-9 months',
      context:
        'The Moro reflex should be completely gone by 6 months. If your baby still has a very strong startle response at this age  -  throwing their arms out and arching every time there\'s a sudden noise  -  mention it to your pediatrician. It could be a sign that the reflex hasn\'t integrated properly, which sometimes needs a little support. Some babies remain sensitive to loud noises as a personality trait, and that\'s different from the reflex.',
    },
    {
      ageRange: '10+ months',
      context:
        'At this age, it\'s normal for your baby to react to sudden loud noises or unexpected events by jumping or looking startled. But they shouldn\'t have the dramatic full-body startle reflex that newborns have. If they do, or if they seem excessively jumpy and have trouble calming down after being startled, talk to your doctor about whether sensory processing support might help.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and has a strong Moro reflex  -  this is expected and healthy.',
    'Your baby startles at loud or sudden noises but calms down quickly when you comfort them.',
    'Your baby seems a bit more sensitive than other babies but is meeting all other milestones and sleeps reasonably well.',
    'Startling happens mainly during light sleep or when your baby is drowsy, not constantly throughout the day.',
  ],
  whenToMention: [
    'Your baby is over 6 months and still has a very strong, persistent Moro reflex with full-body arching and arm flinging.',
    'Your baby startles so frequently that it interferes with sleep, feeding, or being able to calm down.',
    'Your baby seems extremely sensitive to normal household sounds and is always on edge or anxious.',
    'Startling is accompanied by stiffening, tremoring, or other unusual movements.',
  ],
  whenToActNow: [
    'Your baby had a normal startle reflex that suddenly became much more intense, or the reflex returned after disappearing  -  this could signal a neurological issue.',
    'Startling is accompanied by arching, stiffening, eye-rolling, or loss of consciousness  -  seek medical evaluation immediately.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'social-calming-when-held',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Newborn Reflexes: Moro Reflex',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  Infant and Toddler Health: Primitive Reflexes and Development',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three  -  Sensory Processing in Infants and Toddlers',
      url: 'https://www.zerotothree.org/resource/sensory-processing/',
    },
  ],
};
