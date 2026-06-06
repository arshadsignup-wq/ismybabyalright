import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-impulse-control-development', title: 'Impulse Control Development in Toddlers', category: 'behavior',
  searchTerms: ['toddler impulse control','toddler no impulse control','when do toddlers develop impulse control','toddler acts before thinking','toddler impulsive behavior','toddler cant stop themselves','toddler poor impulse control','impulse control age appropriate','toddler does not think before acting','impulsive toddler behavior'],
  quickAnswer: 'Impulse control is managed by the prefrontal cortex, which is the last part of the brain to fully develop - not until the mid-20s. Toddlers have almost no impulse control because this brain region is barely functional in early childhood. When your child reaches for something forbidden while looking right at you, they are not defying you - their brain literally cannot override the impulse. This is one of the most important things to understand about toddler behavior.',
  byAge: [
    { ageRange: '12-18 months', context: 'Essentially zero impulse control. Your child acts on every impulse immediately. If they see something interesting, they grab it. If they feel an emotion, they express it physically. Environmental management (childproofing, removing temptations) is more effective than verbal instructions at this age.' },
    { ageRange: '18-30 months', context: 'The very earliest impulse control appears. Your child might hesitate briefly before doing something forbidden, which shows they remember the rule, even though they cannot consistently stop themselves. This hesitation is actually progress. Acknowledge it: "I saw you think about it! Good remembering."' },
    { ageRange: '2.5-4 years', context: 'Impulse control slowly improves. Your child can sometimes stop themselves, especially for well-practiced rules. Games like "Red Light, Green Light" and "Simon Says" build impulse control in fun ways. Remember that impulse control is always worst when children are tired, hungry, or emotional.' },
    { ageRange: '4-5 years', context: 'Noticeable improvement in impulse control, but still quite limited compared to adults. Your child can wait their turn most of the time and can stop themselves from taking things. If impulse control seems significantly worse than peers at this age, discuss with your pediatrician.' },
  ],
  whenNormal: ['Toddlers acting impulsively is completely normal brain development','Your child breaks rules even when they know them','Impulse control improves gradually from age 2-5+','Impulse control is worse when your child is tired, hungry, or stressed'],
  whenToMention: ['Impulse control has not improved at all by age 4','Your child is significantly more impulsive than same-age peers','Impulsivity is causing safety concerns or school problems','Your child cannot participate in age-appropriate activities due to impulsivity'],
  whenToActNow: ['Impulsivity is putting your child in immediate danger','Your child acts on dangerous impulses without any hesitation'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'Casey BJ et al. The Adolescent Brain. Dev Rev. 2008;28(1):62-77.', url: 'https://pubmed.ncbi.nlm.nih.gov/18688292/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Developing Self-Regulation in Young Children.', url: 'https://www.zerotothree.org/resource/developing-self-regulation/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Shape and Manage Your Child\'s Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx' },
  ],
  relatedConcernSlugs: ['toddler-delayed-gratification-developing','toddler-self-regulation-timeline','toddler-following-rules-age-appropriate','toddler-testing-limits-constantly'],
};
