import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-regression-skills-autism', title: 'Autistic Regression - Losing Skills', category: 'behavior',
  searchTerms: ['autistic regression', 'toddler losing skills autism', 'regression autism signs', 'toddler lost words autism', 'autism regression language', 'child losing skills autism', 'regression developmental autism', 'toddler skill loss autism', 'autism regression 18 months', 'regression in autism spectrum'],
  quickAnswer: 'Approximately 25 to 30% of children later diagnosed with autism experience a regression, losing previously acquired skills between 15 and 24 months. This most commonly affects language and social skills. Any loss of skills at any age requires prompt medical evaluation. While regression can occur in autism, it can also indicate other medical conditions that need to be ruled out.',
  byAge: [
    { ageRange: '12-15 months', context: 'Regression before 15 months is less common but can occur. Skills that may be lost include babbling, eye contact, social smiling, and gestures. Any skill loss at this age should be reported to your pediatrician immediately.' },
    { ageRange: '15-24 months', context: 'This is the most common window for autistic regression. A child who was saying words may stop talking. A child who was socially engaged may become withdrawn. These changes often happen gradually but can seem sudden.' },
    { ageRange: '24-36 months', context: 'Regression after 24 months is less typical for autism and other causes should be investigated thoroughly. Medical evaluation should include neurological assessment and EEG to rule out conditions like Landau-Kleffner syndrome.' },
    { ageRange: '3-4 years', context: 'Following evaluation and diagnosis, intensive early intervention should begin promptly. Research shows that children who regress can make significant gains with appropriate therapy, especially when started early.' },
    { ageRange: '4-5 years', context: 'With consistent therapy, many children who experienced regression regain skills and continue to develop. The trajectory varies widely, and some children make remarkable progress.' },
  ],
  whenNormal: ['Your child temporarily uses fewer words during illness or major life changes but bounces back', 'Your child seems to forget a word for a few days but then uses it again', 'Your child\'s skills fluctuate slightly but overall trajectory is upward'],
  whenToMention: ['Your child has lost multiple words they were using consistently', 'Your child has become less socially engaged or stopped responding to their name', 'Your child has lost motor skills, play skills, or self-help skills'],
  whenToActNow: ['Your child has lost words AND social engagement simultaneously', 'Any sudden or significant loss of previously acquired skills at any age requires immediate evaluation'],
  relatedMilestones: ['language-development', 'social-engagement', 'first-words', 'joint-attention'],
  showSelfReferral: true, relatedConcernSlugs: ['baby-losing-words', 'regression-in-speech', 'toddler-late-autism-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Autism Regression. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institute of Mental Health. Autism Spectrum Disorder.', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Signs and Symptoms of Autism.', url: 'https://www.cdc.gov/ncbddd/autism/signs.html' },
  ],
};
