import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-vestibular-seeking', title: 'Toddler Craves Spinning and Movement', category: 'behavior',
  searchTerms: ['toddler vestibular seeking', 'toddler craves spinning', 'toddler loves spinning around', 'toddler can\'t stop spinning', 'toddler constant movement seeking', 'vestibular input seeking child', 'toddler loves being swung', 'toddler never dizzy', 'toddler movement craving', 'toddler loves rocking swinging'],
  quickAnswer: 'The vestibular system processes movement and balance. A child who constantly craves spinning, swinging, rocking, and hanging upside down may be seeking vestibular input. Many active toddlers love movement, which is healthy. It becomes concerning when the craving is insatiable, the child never seems to get dizzy, or the seeking behavior interferes with other activities.',
  byAge: [
    { ageRange: '12-24 months', context: 'Toddlers naturally love movement including being swung, bounced, and spinning. Seeking vestibular input through active play is completely normal at this age.' },
    { ageRange: '24-36 months', context: 'Active play continues. If your toddler craves spinning intensely, never gets dizzy, or cannot sit still for even brief periods, they may be seeking more vestibular input than typical. Monitoring is appropriate.' },
    { ageRange: '3-4 years', context: 'If vestibular seeking is so intense that it disrupts daily activities, school participation, or safety, an OT can evaluate and recommend appropriate movement activities (a sensory diet).' },
    { ageRange: '4-5 years', context: 'An OT can design a sensory diet with specific movement breaks throughout the day to help your child get the vestibular input they need in safe, productive ways.' },
    { ageRange: '5-6 years', context: 'Ongoing vestibular needs can be met through structured physical activities, movement breaks in school, and OT strategies. Most children learn to manage their vestibular needs with appropriate support.' },
  ],
  whenNormal: ['Your toddler loves being swung, bounced, and spun during play', 'Your toddler is very active and physical but can calm down when needed', 'Your toddler enjoys movement but also engages in quieter activities', 'Your toddler gets dizzy after spinning which is a normal vestibular response'],
  whenToMention: ['Your toddler spins extensively and never seems to get dizzy', 'Your toddler\'s need for movement is insatiable and prevents calm activities', 'Vestibular seeking creates safety concerns because your child takes dangerous risks to get movement input'],
  whenToActNow: ['Your toddler\'s movement seeking is causing frequent injuries', 'Intense vestibular seeking is combined with other sensory and developmental differences'],
  relatedMilestones: ['sensory-processing', 'motor-development', 'self-regulation', 'balance'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-sensory-seeking-behavior', 'toddler-proprioceptive-seeking', 'toddler-sensory-processing-concerns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sensory Integration. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Integration-Therapy.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html' },
    { org: 'NIH', citation: 'National Institutes of Health. Sensory Processing.', url: 'https://www.nichd.nih.gov/health/topics/autism' },
  ],
};
