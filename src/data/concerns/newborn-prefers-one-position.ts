import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-prefers-one-position',
  title: 'Baby Prefers One Position (Positional Preference)',
  category: 'physical',
  searchTerms: ['baby always turns head one side', 'newborn head preference', 'baby positional preference', 'torticollis baby', 'baby favors one side', 'newborn head always turned', 'baby tilts head one side', 'positional preference infant', 'baby neck stiff one side', 'congenital torticollis'],
  quickAnswer: 'Many newborns develop a preference for turning their head to one side, which is common and often resolves with simple repositioning strategies. However, a persistent preference may indicate torticollis (tightness in neck muscles), which responds well to stretching exercises and physical therapy when addressed early.',
  byAge: [
    { ageRange: '0-1 month', context: 'A mild positional preference is very common in newborns and can be related to position in the womb. You may notice baby always turns their head to the same side during sleep, always looks one direction, or seems to have a slightly tilted head. If baby can turn their head both ways when encouraged but prefers one side, this is often a positional preference that can improve with repositioning: alternate the direction baby faces in the crib, alternate which arm you hold baby in during feeding, and provide supervised tummy time to strengthen neck muscles. If baby cannot turn their head to one side, or has a noticeable head tilt, this may be torticollis (tightening of the sternocleidomastoid muscle), which benefits from early evaluation and physical therapy.' },
    { ageRange: '1-3 months', context: 'Positional preference should be actively addressed to prevent flat spots (positional plagiocephaly). Continue repositioning strategies and increase supervised tummy time. Your pediatrician should assess neck range of motion at well-visits. If torticollis is suspected, early referral to physical therapy leads to the best outcomes. Most cases resolve fully with stretching exercises.' },
    { ageRange: '3-6 months', context: 'With tummy time, repositioning, and therapy if needed, positional preference typically improves significantly. Baby should have good head control and equal range of motion by 4-6 months. A flat spot from positional preference may still be present but often improves as baby spends more time upright and off the back of the head. Helmet therapy may be discussed for significant cases.' },
    { ageRange: '6-12 months', context: 'Most positional preferences and torticollis are resolved by this age with appropriate intervention. The head shape continues to improve throughout the first year as baby spends more time upright. Persistent head tilting at this age warrants further evaluation.' },
  ],
  whenNormal: ['Mild preference for looking one direction that is easily redirected', 'Baby can turn head both ways when motivated (following a voice or toy)', 'Preference improves with repositioning and tummy time'],
  whenToMention: ['Baby consistently turns head to one side and resists turning the other way', 'You notice a head tilt or that baby holds their head at an angle', 'Baby is developing a flat spot on one side of the head'],
  whenToActNow: ['Baby cannot turn head to one side at all', 'There is a firm lump in the neck muscle', 'Head tilt with facial asymmetry or eye alignment concerns'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Torticollis (Wryneck). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/bones-muscles/Pages/Torticollis.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Congenital Muscular Torticollis. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK549778/' },
  ],
  relatedConcernSlugs: ['newborn-flat-spot-prevention', 'newborn-tummy-time-too-early', 'newborn-neck-support-importance'],
};
