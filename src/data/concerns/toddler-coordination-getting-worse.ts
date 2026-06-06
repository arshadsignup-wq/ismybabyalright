import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-coordination-getting-worse',
  title: 'My Toddler\'s Coordination Is Getting Worse',
  category: 'physical',
  searchTerms: ['toddler coordination declining', 'toddler getting clumsier', 'toddler losing coordination', 'toddler balance getting worse', 'toddler motor skills declining', 'toddler more clumsy than before', 'toddler unsteady getting worse', 'toddler coordination regression', 'toddler falling more than before', 'toddler movement deteriorating'],
  quickAnswer: 'While occasional clumsiness is normal in toddlers who are mastering new skills, coordination that is genuinely worsening over time is a red flag that needs medical evaluation. True deterioration in coordination can indicate neurological conditions, inner ear problems, or other treatable causes. If your child was previously coordinated and is becoming progressively less so, seek prompt medical evaluation.',
  byAge: [
    { ageRange: '12-18 months', context: 'New walkers are naturally unsteady and may seem to get worse before getting better as they attempt more challenging movements. However, if your child was walking well and is now falling frequently or losing the ability to walk, this is concerning and warrants same-day evaluation.' },
    { ageRange: '18-24 months', context: 'By this age, walking should be becoming more stable, not less. If your toddler is becoming clumsier, stumbling more, or having trouble with movements they previously mastered, bring this to your pediatrician\'s attention promptly.' },
    { ageRange: '2-3 years', context: 'Progressive loss of coordination at this age is always concerning. Conditions like ataxia, brain tumors, and metabolic disorders can present with worsening coordination. Early evaluation leads to better outcomes.' },
    { ageRange: '3-4 years', context: 'If your child is becoming less coordinated over time rather than more skilled, this warrants urgent evaluation. Note whether the changes are sudden or gradual, and whether they affect one side or both sides of the body.' },
  ],
  whenNormal: ['Brief clumsiness during illness or fatigue.', 'Temporary unsteadiness when learning a new skill.', 'Occasional tripping that does not worsen over time.', 'Mild clumsiness that runs in the family.'],
  whenToMention: ['Your child seems clumsier than they were a month ago.', 'Falls are increasing rather than decreasing.', 'Your child avoids physical activities they used to enjoy.'],
  whenToActNow: ['Progressive loss of motor abilities over days or weeks.', 'Sudden onset of poor coordination or unsteadiness.', 'Coordination changes accompanied by headaches, vomiting, or vision changes.', 'One-sided weakness or coordination loss.'],
  relatedMilestones: ['gross-motor-walking', 'gross-motor-running'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-regression-motor-skills', 'toddler-clumsy-coordination', 'baby-ataxia-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Developmental Regression', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'NIH', citation: 'Manto M, et al. Consensus Paper: Roles of the Cerebellum in Motor Control. Cerebellum. 2012;11(1):218-245', url: 'https://pubmed.ncbi.nlm.nih.gov/22187120/' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
