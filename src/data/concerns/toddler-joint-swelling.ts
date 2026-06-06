import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-joint-swelling', title: 'My Toddler Has Swollen Joints', category: 'physical',
  searchTerms: ['toddler swollen joint', 'toddler joint swelling', 'toddler knee swollen', 'toddler ankle swollen', 'toddler joint inflammation', 'juvenile arthritis toddler', 'toddler hot joint', 'toddler puffy joint', 'toddler joint red swollen', 'toddler arthritis signs'],
  quickAnswer: 'Swollen joints in toddlers should always be evaluated by a pediatrician. While minor swelling after an injury can be normal, persistent or unexplained joint swelling may indicate juvenile idiopathic arthritis (JIA), infection, or other conditions that require prompt treatment. JIA affects about 1 in 1,000 children and is very treatable when caught early.',
  byAge: [
    { ageRange: '6-12 months', context: 'Joint swelling in a baby should be evaluated promptly. At this age, infection (septic arthritis) needs to be ruled out quickly, as it requires urgent treatment. Contact your pediatrician if you notice any joint swelling.' },
    { ageRange: '12-24 months', context: 'Swollen joints may be noticed as a limp or refusal to use a limb. Juvenile arthritis can begin at any age. If a joint is swollen for more than a few days without injury, your pediatrician should evaluate.' },
    { ageRange: '2-3 years', context: 'JIA is more commonly diagnosed at this age. If your child has persistent joint swelling lasting 6 weeks or more, morning stiffness, or limping, a pediatric rheumatology evaluation is recommended.' },
    { ageRange: '3-5 years', context: 'JIA can begin at any age in childhood. Early treatment with modern medications is very effective and can prevent long-term joint damage. Do not delay evaluation of persistent joint swelling.' },
  ],
  whenNormal: ['Brief swelling after a known injury that resolves in 1-2 days.', 'Swelling with no other symptoms that resolves completely.'],
  whenToMention: ['Joint swelling lasting more than 2-3 days.', 'Swelling without a known cause.', 'Morning stiffness or limping.', 'Multiple joints affected.'],
  whenToActNow: ['Joint swelling with fever (possible septic arthritis - urgent).', 'Joint that is hot, red, and extremely painful.', 'Your child refuses to move the affected limb.'],
  relatedMilestones: ['gross-motor-walking'], showSelfReferral: true,
  relatedConcernSlugs: ['toddler-limping-after-nap', 'toddler-refusing-to-walk-pain'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Juvenile Idiopathic Arthritis', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx' },
    { org: 'NIH', citation: 'Ravelli A, Martini A. Juvenile Idiopathic Arthritis. Lancet. 2007;369(9563)', url: 'https://pubmed.ncbi.nlm.nih.gov/17382826/' },
    { org: 'CDC', citation: 'CDC - Juvenile Arthritis', url: 'https://www.cdc.gov/arthritis/basics/childhood.htm' },
  ],
};
