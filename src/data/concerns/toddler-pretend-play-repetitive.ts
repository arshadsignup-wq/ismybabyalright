import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-pretend-play-repetitive', title: 'Toddler Repeats Same Pretend Play Script', category: 'behavior',
  searchTerms: ['toddler repetitive pretend play', 'toddler same pretend script', 'toddler rigid play themes', 'toddler plays same scenario repeatedly', 'toddler inflexible pretend play', 'toddler won\'t change play script', 'repetitive play patterns toddler', 'toddler stuck on same game', 'toddler rigid imaginative play', 'toddler exact same play routine'],
  quickAnswer: 'Some repetition in pretend play is normal and comforting for toddlers. However, if your child plays out the exact same scenario every time with no variation and becomes very distressed when the script is changed, this rigidity may indicate inflexible thinking patterns. Flexible pretend play that evolves and incorporates new ideas is expected to develop by age 3 to 4.',
  byAge: [
    { ageRange: '18-24 months', context: 'Early pretend play is naturally repetitive as children practice new skills. Playing the same feeding or cooking scenario repeatedly is normal and expected at this age.' },
    { ageRange: '24-36 months', context: 'Some repetition continues but new elements should be added over time. Your child may play kitchen every day but vary what they cook or who joins. Rigid repetition without any variation is worth monitoring.' },
    { ageRange: '3-4 years', context: 'Pretend play should become more flexible and creative. Children incorporate new themes, respond to peer input, and improvise. Extremely rigid repetitive play at this age may indicate inflexible thinking patterns associated with autism or anxiety.' },
    { ageRange: '4-5 years', context: 'Cooperative pretend play requires flexibility and negotiation. A child who insists on the same script and becomes upset when others deviate may need support developing flexible thinking.' },
    { ageRange: '5-6 years', context: 'By school age, children should demonstrate flexible, creative play. Persistent rigid repetitive play should be evaluated for possible developmental differences.' },
  ],
  whenNormal: ['Your toddler has favorite play themes but varies the details', 'Your child enjoys repeating beloved scenarios but can adapt when you introduce changes', 'Your child goes through phases of loving one type of play before moving on', 'Your child repeats play during times of stress as a comfort strategy'],
  whenToMention: ['Your child plays the exact same scenario every day with no variation at age 3', 'Your child becomes very distressed if the play script is altered in any way', 'Rigid repetitive play is combined with other inflexible behaviors'],
  whenToActNow: ['Your child\'s play has become increasingly rigid and restricted over time', 'Rigid play is combined with other concerning signs like lost skills, social withdrawal, and sensory sensitivities'],
  relatedMilestones: ['pretend-play', 'flexible-thinking', 'social-engagement', 'creativity'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-rigid-play-patterns', 'toddler-routine-change-meltdown', 'toddler-not-pretend-playing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Autism Information. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Signs and Symptoms of Autism.', url: 'https://www.cdc.gov/ncbddd/autism/signs.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Play and Development.', url: 'https://www.zerotothree.org/resource/play/' },
  ],
};
