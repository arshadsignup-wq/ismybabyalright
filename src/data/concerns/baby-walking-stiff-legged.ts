import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-walking-stiff-legged',
  title: 'My Baby Walks with Stiff Legs',
  category: 'physical',
  searchTerms: [
    'baby walking stiff legs',
    'toddler stiff leg walking',
    'baby doesn\'t bend knees walking',
    'baby walks like robot',
    'stiff legged gait baby',
    'baby rigid walking',
    'toddler straight leg walking',
    'baby won\'t bend knees when walking',
    'stiff gait toddler',
    'baby locks knees when walking',
  ],
  quickAnswer:
    'Some stiffness in early walking is normal as babies learn to coordinate their leg muscles. However, persistent stiff-legged walking that does not improve over weeks may indicate increased muscle tone (hypertonia) that should be evaluated. Most babies develop a more fluid walking pattern within a few months of starting to walk.',
  byAge: [
    {
      ageRange: '10-14 months',
      context:
        'New walkers often have a somewhat stiff gait as they learn to coordinate their movements. Bending the knees while walking requires balance and muscle control that develops with practice. If your baby\'s walking is stiff but improving week by week, this is part of normal learning. Watch for gradual improvement.',
    },
    {
      ageRange: '14-18 months',
      context:
        'Your toddler\'s walking should be becoming more fluid over time. Some stiffness when excited or on new surfaces is normal. If your child consistently walks with very stiff, straight legs and does not seem to be developing a more natural bend, discuss it with your pediatrician. They can check muscle tone and reflexes.',
    },
    {
      ageRange: '18-24 months',
      context:
        'By this age, walking should look fairly fluid with good knee flexion. If your child still walks with noticeably stiff legs, especially if combined with toe walking, scissoring (legs crossing), or difficulty squatting, your pediatrician should evaluate for hypertonia or other neuromuscular concerns.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Persistent stiff-legged walking at this age warrants a thorough evaluation. Your child should be walking, running, and squatting with relatively fluid movements. A pediatric neurologist can assess whether increased muscle tone or other factors are contributing to the pattern.',
    },
  ],
  whenNormal: [
    'Your baby just started walking and the stiffness is improving week by week.',
    'Your baby walks stiffly when excited but can walk more normally at other times.',
    'Your baby can bend their knees to squat, climb, or sit down from standing.',
    'The stiffness is equal on both sides.',
  ],
  whenToMention: [
    'Your child has been walking for more than 3 months with no improvement in leg stiffness.',
    'Your child has difficulty bending their knees to squat or climb stairs.',
    'The stiffness is worse on one side than the other.',
    'Your child also toe walks or their legs seem to cross when walking.',
  ],
  whenToActNow: [
    'Your child\'s walking has become stiffer over time rather than improving.',
    'Your child has developed leg stiffness along with other new symptoms like tremors or falls.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-climbing',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['stiff-baby-hypertonia', 'toe-walking', 'baby-spasticity-signs'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Hypertonia in Infants',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Sanger TD, et al. Classification and Definition of Disorders Causing Hypertonia in Childhood. Pediatrics. 2003;111(1):e89-e97',
      url: 'https://pubmed.ncbi.nlm.nih.gov/12509602/',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 18 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
  ],
};
