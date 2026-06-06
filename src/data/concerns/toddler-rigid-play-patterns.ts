import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-rigid-play-patterns', title: 'Toddler Has Inflexible Play Patterns', category: 'behavior',
  searchTerms: ['toddler rigid play patterns', 'toddler inflexible play', 'toddler play always same way', 'toddler upset if play changes', 'toddler rigid toy use', 'toddler repetitive play', 'toddler play rituals', 'toddler fixed play routines', 'inflexible play toddler concerns', 'toddler can\'t change play'],
  quickAnswer: 'All toddlers enjoy some routine and repetition in play. Rigid play becomes a concern when a child must play with toys in exactly the same way every time, becomes extremely distressed with any change, and cannot incorporate new ideas or toys into their play. This inflexibility may be associated with anxiety, sensory differences, or autism spectrum features.',
  byAge: [
    { ageRange: '12-24 months', context: 'Repetitive play is normal as toddlers master skills through practice. They may build and knock down blocks repeatedly or push a car back and forth. This is healthy exploration.' },
    { ageRange: '24-36 months', context: 'Play should become more varied over time. While favorite activities may persist, new elements should be incorporated. Rigidity that does not allow any variation is worth monitoring.' },
    { ageRange: '3-4 years', context: 'Play should be increasingly flexible and creative. If your child can only play with toys one way and becomes distressed with any changes, a developmental evaluation may be helpful.' },
    { ageRange: '4-5 years', context: 'Flexible, creative, and cooperative play is expected. Persistent rigid play patterns at this age may indicate developmental differences that benefit from evaluation and support.' },
    { ageRange: '5-6 years', context: 'By school age, rigid play affects peer interaction and classroom participation. Professional support can help build flexibility.' },
  ],
  whenNormal: ['Your toddler has favorite toys and activities but can adapt when they are unavailable', 'Your toddler has routines in play but can accept changes without extreme distress', 'Your toddler is under 2 and repetitive play reflects skill mastery', 'Your toddler prefers certain play themes but incorporates new elements'],
  whenToMention: ['Your child over 3 must play with specific toys in an exact order every time', 'Your child becomes extremely distressed if play is interrupted or changed', 'Rigid play is combined with other inflexible behaviors like insistence on sameness in routines'],
  whenToActNow: ['Your child\'s play has become increasingly rigid and restricted', 'Rigid play is combined with social withdrawal, lost skills, and sensory sensitivities'],
  relatedMilestones: ['flexible-thinking', 'pretend-play', 'social-engagement', 'self-regulation'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-pretend-play-repetitive', 'toddler-routine-change-meltdown', 'toddler-lining-up-arranging-only'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Autism Spectrum Disorder.', url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Signs of Autism.', url: 'https://www.cdc.gov/ncbddd/autism/signs.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Understanding Your Child\'s Behavior.', url: 'https://www.zerotothree.org/resource/play/' },
  ],
};
