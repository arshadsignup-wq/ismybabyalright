import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-fencing-reflex-persistent',
  title: 'Persistent Fencing Reflex (ATNR) in Infants',
  category: 'medical',
  searchTerms: [
    'fencing reflex baby',
    'ATNR persistent baby',
    'asymmetric tonic neck reflex',
    'baby fencing position',
    'baby always turning head one way',
    'tonic neck reflex not going away',
    'persistent ATNR concerns',
    'baby fencer pose',
    'retained tonic neck reflex',
    'fencing reflex when does it go away',
  ],
  quickAnswer:
    'The asymmetric tonic neck reflex (ATNR), or fencing reflex, is a normal primitive reflex where turning the head causes the arm and leg on that side to extend while the opposite limbs flex. It is present from birth and should fade by 4-6 months. A persistent ATNR beyond 6 months may indicate a neurological concern and should be evaluated.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'The ATNR is a normal reflex present from birth. When your baby\'s head is turned to one side, the arm and leg on the face side extend while the opposite arm and leg flex, creating a "fencing" position. This reflex is thought to prepare for hand-eye coordination. It should not be obligatory, meaning your baby should still be able to move their limbs freely even when the head is turned. An obligatory ATNR (where the baby is stuck in the fencing position) at any age is a concern.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The ATNR may be quite prominent during this period and is still considered normal. You may notice it when your baby turns their head during sleep or while lying on their back. As voluntary movement develops, the reflex becomes less dominant. Your baby should be able to bring their hands to midline (together in front of them) even with the reflex present.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The ATNR should begin to fade significantly by 4-6 months. As your baby gains voluntary motor control, the reflex becomes less noticeable. By 6 months, your baby should be able to bring hands to midline, reach with both hands, and not be dominated by the fencing posture when the head is turned.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The ATNR should not be present beyond 6 months. A persistent ATNR can interfere with rolling, reaching across midline, and hand-eye coordination development. If you notice that your baby still assumes the fencing position frequently when the head turns, discuss this with your pediatrician for neurological evaluation.',
    },
  ],
  whenNormal: [
    'Fencing posture visible in the first 4-6 months when head is turned',
    'Baby can still move limbs freely despite the reflex',
    'The reflex is not obligatory (baby is not stuck in the position)',
    'The reflex gradually fades by 4-6 months',
  ],
  whenToMention: [
    'The ATNR seems very strong or obligatory (baby gets stuck in the position)',
    'The reflex is still prominent at 5-6 months',
    'Your baby has difficulty bringing hands to midline or reaching across the body',
  ],
  whenToActNow: [
    'An obligatory ATNR at any age where the baby cannot break free from the fencing position',
    'Persistent ATNR beyond 6 months combined with other developmental delays or abnormal muscle tone',
  ],
  relatedMilestones: ['reaching', 'rolling'],
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
        'National Library of Medicine. Primitive Reflexes. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK554606/',
    },
  ],
  relatedConcernSlugs: ['newborn-absent-reflexes', 'newborn-startle-reflex-excessive', 'newborn-hand-preference-early'],
};
