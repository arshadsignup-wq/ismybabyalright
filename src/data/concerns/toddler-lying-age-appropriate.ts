import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-lying-age-appropriate', title: 'When Toddlers Start Lying: Is It Normal?', category: 'behavior',
  searchTerms: ['toddler lying','toddler tells lies','toddler lying normal','preschooler lying','child lying age appropriate','toddler fibs','toddler makes up stories','toddler denies things','toddler lying about behavior','when do kids start lying'],
  quickAnswer: 'Lying actually requires sophisticated cognitive abilities including understanding that other people have different knowledge than you do (theory of mind), imagining an alternative reality, and controlling your expression. When your toddler first lies (typically around age 2-3), it is actually a cognitive milestone, not a moral failing. Most early lies are wish fulfillment ("I did not eat the cookie" while covered in crumbs) or fantasy, not calculated deception.',
  byAge: [
    { ageRange: '12-24 months', context: 'True lying does not exist at this age. What may seem like lying is actually limited understanding of questions, confusion between reality and imagination, or agreeing with whatever you say. Your toddler is not capable of deliberate deception yet.' },
    { ageRange: '2-3 years', context: 'First lies emerge, usually simple denials ("I did not do it") or wish fulfillment ("I already brushed my teeth"). These lies are obvious and not sophisticated. Your child is testing out a new cognitive ability. Avoid trapping them with questions you already know the answer to. Instead of "Did you hit your sister?" try "I saw you hit your sister. Hitting hurts."' },
    { ageRange: '3-4 years', context: 'Lies become more elaborate. Your child may blame imaginary friends or siblings. This is still developmentally normal. Focus on making honesty easy: "If you tell me the truth, we can solve this together. I will not be angry." Praise honesty, even when it is about something they did wrong.' },
    { ageRange: '4-5 years', context: 'Children understand the concept of truth vs. lies and can be taught about honesty. They may still lie to avoid punishment. Create an environment where telling the truth is safe. "Thank you for telling me the truth. That was brave. Now let us figure this out together."' },
  ],
  whenNormal: ['First lies appear around age 2-3 and are a cognitive milestone','Lies are simple and obvious','Your child lies to avoid punishment or to wish something were true','Lying decreases with a supportive approach to honesty'],
  whenToMention: ['Your child lies constantly about everything, including things with no consequence','Lying is elaborate and manipulative beyond what is expected for age','Your child seems unable to distinguish fantasy from reality by age 5','Lying is accompanied by other concerning behaviors like stealing or cruelty'],
  whenToActNow: ['Your child creates elaborate false accusations against others','Lying involves safety issues and your child cannot be relied upon for important information'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Lying and Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Why-Children-Lie.aspx' },
    { org: 'NIH', citation: 'Talwar V, Lee K. Social and cognitive correlates of children\'s lying behavior. Child Dev. 2008;79(4):866-881.', url: 'https://pubmed.ncbi.nlm.nih.gov/18717894/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Honesty and Children.', url: 'https://www.zerotothree.org/resource/honesty/' },
  ],
  relatedConcernSlugs: ['toddler-empathy-development-timeline','toddler-imaginary-friend','toddler-testing-limits-constantly','toddler-emotional-intelligence-building'],
};
