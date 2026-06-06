import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-late-autism-signs', title: 'Autism Signs Appearing After 18 Months', category: 'behavior',
  searchTerms: ['late autism signs toddler', 'autism appearing after 18 months', 'late onset autism', 'autism signs later development', 'autism not obvious early', 'autism emerging later', 'autism signs appearing 2 years', 'late recognition autism', 'toddler autism developing later', 'autism not present at birth appearing later'],
  quickAnswer: 'While some children show signs of autism from early infancy, others develop typically until 12 to 24 months before differences emerge. This can involve regression (losing skills) or plateau (skills stop progressing while peers advance). Late-appearing signs are valid and important to recognize. If you notice changes in your child\'s development after 18 months, request evaluation.',
  byAge: [
    { ageRange: '0-12 months', context: 'Development may appear completely typical. The child makes eye contact, babbles, and engages socially. Some subtle differences may only be recognized in retrospect after a later diagnosis.' },
    { ageRange: '12-18 months', context: 'Some children begin to show differences in this period. Language development may slow, social engagement may decrease, or the child may not add expected milestones like pointing and showing.' },
    { ageRange: '18-24 months', context: 'This is the most common window for autism signs to become apparent to parents. Changes may include fewer words or lost words, decreased eye contact, less interest in others, new repetitive behaviors, or failure to develop pretend play.' },
    { ageRange: '24-36 months', context: 'Differences become more obvious as social demands increase. The gap between the child and typically developing peers widens. Evaluation is recommended even if the child had a period of typical development.' },
    { ageRange: '3-5 years', context: 'Some higher-functioning children are not identified until school demands increase. Late identification does not mean milder autism; it may mean the signs were more subtle or were attributed to other factors.' },
  ],
  whenNormal: ['Your child is developing new skills steadily even if at a slightly slower pace', 'Your child temporarily regresses during illness or stress but bounces back', 'Your child has a brief plateau in one area but is progressing in others'],
  whenToMention: ['Your child has stopped adding new words or skills for several months', 'Your child seems less socially engaged than they were a few months ago', 'You notice new repetitive behaviors appearing alongside slowed development'],
  whenToActNow: ['Your child has clearly lost previously acquired skills like words, social smiling, or gestures', 'Your child\'s development has regressed significantly in multiple areas'],
  relatedMilestones: ['social-engagement', 'language-development', 'pretend-play', 'joint-attention'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-regression-skills-autism', 'baby-autism-screening-concerns', 'baby-losing-words'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. When Autism Signs Appear Later.', url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Signs and Symptoms of Autism.', url: 'https://www.cdc.gov/ncbddd/autism/signs.html' },
    { org: 'NIH', citation: 'National Institute of Mental Health. Autism Spectrum Disorder.', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd' },
  ],
};
