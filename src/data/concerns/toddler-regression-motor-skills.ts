import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-regression-motor-skills', title: 'My Toddler Is Losing Motor Abilities', category: 'physical',
  searchTerms: ['toddler losing motor skills', 'toddler regression motor', 'toddler losing abilities', 'toddler can\'t do what they used to', 'toddler motor regression', 'toddler walking regression', 'toddler losing balance', 'developmental regression motor', 'toddler skill loss', 'toddler motor skills declining'],
  quickAnswer: 'Loss of motor skills (regression) is always a red flag that requires prompt medical evaluation. Unlike a temporary setback during illness, true regression means your child can no longer do things they previously did consistently. This can indicate neurological conditions, metabolic disorders, or other treatable conditions. Early evaluation is critical.',
  byAge: [
    { ageRange: '6-12 months', context: 'Loss of motor skills at this age, such as losing the ability to sit, reach, or roll, requires urgent evaluation. Conditions like infantile spasms or neurodegenerative disorders can present with regression at this age. Do not delay seeking evaluation.' },
    { ageRange: '12-18 months', context: 'If your child was walking and stops, or loses hand function they previously had, seek immediate evaluation. Rett syndrome, metabolic disorders, and other conditions can present with regression during this period.' },
    { ageRange: '18-24 months', context: 'True regression in motor skills is always concerning. Note: temporary setbacks during illness, teething, or emotional stress are different from true regression. True regression means the skill does not come back when the illness or stress resolves.' },
    { ageRange: '2-4 years', context: 'Motor regression at any age is a medical emergency that warrants same-day evaluation. The earlier the cause is identified, the better the potential outcomes for treatment.' },
  ],
  whenNormal: ['Temporary setback during illness that resolves.', 'Your child practices new skills and seems to forget old ones briefly.', 'Skill returns within a few days.'],
  whenToMention: ['Your child seems less capable than they were a few weeks ago.', 'Skills that were mastered have not returned.', 'Your child is becoming clumsier or less coordinated.'],
  whenToActNow: ['Clear loss of motor skills that does not recover.', 'Progressive weakness or loss of abilities.', 'Regression accompanied by seizures, altered consciousness, or other new symptoms.'],
  relatedMilestones: ['gross-motor-walking', 'gross-motor-sitting', 'fine-motor-grasp'], showSelfReferral: true,
  relatedConcernSlugs: ['toddler-coordination-getting-worse', 'baby-muscle-wasting-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Developmental Regression', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'NIH', citation: 'Palma P. Developmental Regression in Children. Dev Med Child Neurol. 2008', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
