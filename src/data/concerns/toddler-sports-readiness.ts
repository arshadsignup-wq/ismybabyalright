import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-sports-readiness',
  title: 'Is My Toddler Ready for Organized Sports?',
  category: 'physical',
  searchTerms: ['toddler sports readiness', 'toddler ready for sports', 'when can toddler play sports', 'toddler organized sports age', 'toddler soccer age', 'toddler sports development', 'preschooler sports readiness', 'toddler team sports', 'when to start sports toddler', 'toddler athletic ability'],
  quickAnswer: 'Most children are not developmentally ready for organized team sports until age 4-5 at the earliest, and many experts recommend waiting until age 6. Before age 4, toddlers benefit most from unstructured active play, which builds the fundamental motor skills needed for sports later. Toddler sports programs should focus on fun and exploration, not competition or skill drilling.',
  byAge: [
    { ageRange: '18-24 months', context: 'At this age, organized sports are not appropriate. Your toddler benefits most from free play: running, climbing, jumping, throwing balls, and exploring movement. These activities naturally build the coordination, balance, and body awareness that form the foundation for sports later.' },
    { ageRange: '2-3 years', context: 'Toddlers can enjoy movement classes (tumbling, dance, swimming lessons) that are play-based. They are not developmentally ready to follow rules, take turns in a game, or understand team concepts. Look for programs that emphasize fun, not instruction or competition.' },
    { ageRange: '3-4 years', context: 'Some children may enjoy introductory programs for activities like swimming, gymnastics, or soccer that are designed for this age. Choose programs that keep activities short, emphasize play and exploration, and do not keep score. Attention spans are still short (15-20 minutes for structured activity).' },
    { ageRange: '4-6 years', context: 'Children are beginning to understand rules and can follow simple instructions in a group setting. This is the earliest age for introductory team sports. Programs should still prioritize participation and fun over competition. Not all children are ready at the same age, and that is completely normal.' },
  ],
  whenNormal: ['Your toddler prefers free play over structured activities.', 'Your 2-3 year old cannot follow game rules.', 'Your child is more interested in exploring than competing.', 'Your child enjoys physical activity on their own terms.'],
  whenToMention: ['Your toddler avoids all physical activity.', 'Your child seems significantly less coordinated than peers.', 'Your toddler cannot run, jump, or throw by age 3.'],
  whenToActNow: ['Your child has lost physical abilities they previously had.', 'Your child has persistent pain during or after physical activity.', 'Physical activity causes breathing difficulty or unusual fatigue.'],
  relatedMilestones: ['gross-motor-running', 'gross-motor-jumping', 'gross-motor-throwing'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-clumsy-coordination', 'toddler-cant-kick-ball', 'toddler-cant-throw-ball', 'toddler-bike-riding-readiness'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Organized Sports for Children, Preadolescents, and Adolescents. Pediatrics. 2019;143(6)', url: 'https://publications.aap.org/pediatrics/article/143/6/e20190997/37173/' },
    { org: 'NIH', citation: 'Myer GD, et al. Sports Specialization, Part I: Does Early Sports Specialization Increase Negative Outcomes? Sports Health. 2015;7(5)', url: 'https://pubmed.ncbi.nlm.nih.gov/26502420/' },
    { org: 'CDC', citation: 'CDC - Physical Activity for Children', url: 'https://www.cdc.gov/physicalactivity/basics/children/index.htm' },
  ],
};
