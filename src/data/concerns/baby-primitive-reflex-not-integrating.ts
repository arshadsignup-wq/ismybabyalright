import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-primitive-reflex-not-integrating',
  title: 'My Baby\'s Primitive Reflexes Are Not Integrating',
  category: 'physical',
  searchTerms: ['baby primitive reflex persistent', 'baby reflexes not going away', 'retained primitive reflexes baby', 'baby reflexes still present', 'infant reflexes not integrating', 'persistent newborn reflexes', 'baby reflex integration delay', 'when do baby reflexes disappear', 'retained reflexes development', 'primitive reflex retention baby'],
  quickAnswer: 'Primitive reflexes are automatic movements present at birth that should gradually integrate (disappear) during the first year as your baby develops voluntary movement control. If reflexes persist beyond their expected timeframe, it may indicate neurological immaturity or developmental concerns. Your pediatrician checks reflexes at well visits.',
  byAge: [
    { ageRange: '0-3 months', context: 'All primitive reflexes should be present and strong at this age. The Moro (startle), rooting, sucking, palmar grasp, and ATNR reflexes are normal and important. Their presence shows healthy neurological function.' },
    { ageRange: '3-6 months', context: 'Some reflexes begin to integrate. The Moro reflex should fade by 4-6 months, and the palmar grasp should weaken as voluntary grasping develops. If all reflexes remain very strong with no change, mention it to your pediatrician.' },
    { ageRange: '6-9 months', context: 'Most primitive reflexes should be integrating or integrated by now. The ATNR should be fading, the Moro should be gone, and voluntary movement should be replacing reflexive patterns. Persistent strong reflexes at this age warrant evaluation.' },
    { ageRange: '9-12 months', context: 'Primitive reflexes should be largely integrated. Persistence of reflexes like the ATNR or palmar grasp at this age can interfere with voluntary movement development and should be evaluated. Physical therapy can help with reflex integration.' },
  ],
  whenNormal: ['Your baby is under 4 months and reflexes are strong and present.', 'Reflexes are gradually weakening as voluntary movement develops.', 'Your baby shows good voluntary movement alongside fading reflexes.'],
  whenToMention: ['A specific reflex is still strong beyond its expected integration age.', 'Reflexes seem to be interfering with voluntary movement development.', 'Multiple reflexes persist beyond 6 months.'],
  whenToActNow: ['Your baby\'s reflexes are getting stronger rather than fading.', 'Your baby is losing voluntary movements while reflexes persist.'],
  relatedMilestones: ['gross-motor-head-control', 'gross-motor-reaching', 'fine-motor-grasp'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-palmar-grasp-reflex-persistent', 'baby-asymmetric-tonic-neck-persistent', 'baby-plantar-reflex-persistent'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Newborn Reflexes', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx' },
    { org: 'NIH', citation: 'Palano GM, Grillo C. Primitive Reflexes and Postural Reactions in the Neurodevelopmental Examination. Pediatr Neurol. 2004', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
