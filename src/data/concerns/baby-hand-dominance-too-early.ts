import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-hand-dominance-too-early',
  title: 'My Baby Shows Hand Preference Before 12 Months',
  category: 'physical',
  searchTerms: ['baby hand preference early', 'baby hand dominance too early', 'baby only uses one hand', 'baby favoring right hand', 'baby favoring left hand', 'early handedness baby', 'baby one hand dominant before 1', 'when should baby show hand preference', 'baby preferring one hand', 'hand preference before 12 months'],
  quickAnswer: 'Hand dominance should not be established before 18-24 months, and a strong preference before 12 months is a red flag that should be evaluated. Early hand preference may indicate weakness or neurological differences affecting the non-preferred hand. True handedness normally develops between 2-4 years of age.',
  byAge: [
    { ageRange: '0-6 months', context: 'Babies at this age should use both hands fairly equally. Some preference for one hand during certain activities is normal, but if your baby consistently ignores one hand or only reaches with one hand, this warrants prompt evaluation.' },
    { ageRange: '6-12 months', context: 'Babies should continue to use both hands actively, though some preference may emerge during certain tasks. If your baby strongly prefers one hand and rarely uses the other, mention it to your pediatrician. Early hand dominance can be a sign of hemiplegia or upper limb weakness.' },
    { ageRange: '12-18 months', context: 'A mild preference is beginning to be normal, but your child should still use both hands. If one hand is clearly dominant and the other seems weak or clumsy, evaluation is recommended.' },
    { ageRange: '18-36 months', context: 'Hand preference gradually establishes during this period, with true dominance typically clear by age 3-4. Using both hands for different parts of tasks is completely normal.' },
  ],
  whenNormal: ['Your baby uses both hands but slightly prefers one during some tasks.', 'Your baby is over 18 months and showing emerging hand preference.', 'Both hands function well even if one is preferred.', 'Your baby uses the non-preferred hand when the preferred hand is occupied.'],
  whenToMention: ['Your baby is under 12 months with a strong hand preference.', 'Your baby rarely or never uses one hand.', 'One hand seems weaker or clumsier than the other.', 'The non-preferred hand is often fisted or held in an unusual position.'],
  whenToActNow: ['Your baby suddenly stops using one hand.', 'One hand becomes weak or limp.'],
  relatedMilestones: ['fine-motor-grasp', 'fine-motor-bilateral'],
  showSelfReferral: true,
  relatedConcernSlugs: ['early-hand-preference', 'baby-not-using-one-arm', 'asymmetric-movement'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Cerebral Palsy: Early Signs', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Cerebral-Palsy.aspx' },
    { org: 'NIH', citation: 'Scharoun SM, Bryden PJ. Hand Preference, Performance Abilities, and Hand Selection in Children. Front Psychol. 2014;5:82', url: 'https://pubmed.ncbi.nlm.nih.gov/24578696/' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
