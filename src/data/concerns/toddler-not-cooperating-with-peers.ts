import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-not-cooperating-with-peers', title: 'Toddler Won\'t Cooperate in Play', category: 'behavior',
  searchTerms: ['toddler won\'t cooperate in play', 'toddler doesn\'t cooperate with other kids', 'toddler no cooperative play', 'toddler refuses to play together', 'toddler can\'t cooperate', 'toddler uncooperative with peers', 'cooperative play delayed', 'toddler won\'t play by rules', 'toddler doesn\'t collaborate', 'when do toddlers cooperate in play'],
  quickAnswer: 'Cooperative play, where children work together toward a shared goal, typically develops between ages 3 and 5. Toddlers under 3 are not expected to cooperate consistently in play. If your child is over 4 and cannot engage in any cooperative play despite adequate social opportunities, a developmental or behavioral evaluation may help identify underlying challenges.',
  byAge: [
    { ageRange: '18-24 months', context: 'Cooperative play is not expected. Toddlers play alongside each other (parallel play) and may have brief interactions but cannot sustain cooperative effort.' },
    { ageRange: '24-36 months', context: 'Brief periods of cooperative play emerge, such as building a tower together or chasing each other. These interactions are short-lived and often end in conflict. This is normal.' },
    { ageRange: '3-4 years', context: 'Cooperative play develops more consistently. Children play games with rules, build together, and share in pretend play scenarios. Some difficulty is still expected.' },
    { ageRange: '4-5 years', context: 'Most children engage in sustained cooperative play. They negotiate roles, follow rules, and work together. Persistent inability to cooperate may indicate social skill deficits or developmental differences.' },
    { ageRange: '5-6 years', context: 'Cooperative play is essential for school readiness. Children who cannot cooperate with peers may need social skills support before starting school.' },
  ],
  whenNormal: ['Your toddler is under 3 and plays alongside rather than with other children', 'Your toddler cooperates briefly but conflicts arise and play breaks down', 'Your toddler cooperates better with adults than with same-age peers', 'Your toddler is improving in cooperative play over time'],
  whenToMention: ['Your child is over 4 and cannot engage in any cooperative play despite opportunities', 'Your child always insists on controlling play and refuses all input from peers', 'Your child seems unable to understand the concept of playing together'],
  whenToActNow: ['Your child is extremely aggressive or withdrawn when cooperative play is expected', 'Your child had cooperative skills and has lost them'],
  relatedMilestones: ['cooperative-play', 'social-engagement', 'self-regulation', 'turn-taking'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-difficulty-with-turn-taking', 'toddler-dominating-play', 'toddler-not-engaging-peers'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development in Preschoolers.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development Milestones.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Social Development.', url: 'https://www.zerotothree.org/resource/play/' },
  ],
};
