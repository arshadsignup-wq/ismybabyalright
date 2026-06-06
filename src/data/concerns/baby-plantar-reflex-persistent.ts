import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-plantar-reflex-persistent',
  title: 'My Baby Still Has a Persistent Foot Grasp Reflex',
  category: 'physical',
  searchTerms: ['baby plantar reflex persistent', 'baby foot grasp reflex', 'baby toes curl grasp', 'plantar grasp not gone', 'baby toe curling reflex', 'when does plantar grasp disappear', 'baby foot reflex persistent', 'persistent toe curling reflex', 'plantar reflex integration', 'baby toes grip floor'],
  quickAnswer: 'The plantar grasp reflex (toes curling when the sole is touched) normally integrates between 9-12 months, around the time a baby begins standing. If this reflex persists, it may affect weight bearing and walking development because the toes curl under instead of spreading flat on the floor. Evaluation is recommended if the reflex persists past 12 months.',
  byAge: [
    { ageRange: '0-6 months', context: 'The plantar grasp reflex is normal at this age. When you stroke the sole of your baby\'s foot, their toes should curl. This does not affect development at this stage.' },
    { ageRange: '6-9 months', context: 'The reflex should begin to weaken as your baby starts weight bearing. If the reflex remains very strong, your baby may have difficulty placing their feet flat when standing. This is worth monitoring.' },
    { ageRange: '9-12 months', context: 'The plantar grasp should be integrating or integrated. If your baby\'s toes still curl strongly when feet touch the floor, it may affect standing and walking development. Mention this to your pediatrician.' },
    { ageRange: '12-18 months', context: 'Persistence of the plantar grasp reflex can interfere with walking by preventing flat foot contact. Physical therapy can help integrate this reflex and improve foot placement for walking.' },
  ],
  whenNormal: ['Your baby is under 9 months with normal plantar grasp.', 'The reflex is weakening as standing develops.', 'Your baby can bear weight with feet mostly flat despite some toe curling.'],
  whenToMention: ['Plantar grasp persists strongly beyond 12 months.', 'Your baby\'s toes curl under when they try to stand.', 'The reflex seems to interfere with weight bearing or walking.'],
  whenToActNow: ['Foot reflexes are getting stronger.', 'Your baby has other persistent reflexes alongside the plantar grasp.'],
  relatedMilestones: ['gross-motor-standing', 'gross-motor-walking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-primitive-reflex-not-integrating', 'baby-curling-toes', 'toe-walking'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Newborn Reflexes', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx' },
    { org: 'NIH', citation: 'Palano GM. Primitive Reflexes and the Neurodevelopmental Examination. Pediatr Neurol. 2004', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Baby at 12 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html' },
  ],
};
