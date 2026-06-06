import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-occupational-therapy-signs',
  title: 'Does My Baby Need Occupational Therapy?',
  category: 'physical',
  searchTerms: ['baby occupational therapy', 'baby OT referral', 'infant occupational therapy needed', 'baby fine motor delay therapy', 'pediatric occupational therapy', 'baby sensory processing therapy', 'when does baby need OT', 'toddler occupational therapy signs', 'baby OT evaluation', 'infant fine motor therapy'],
  quickAnswer: 'Pediatric occupational therapy (OT) helps babies and toddlers develop fine motor skills (hand use, grasping, manipulation), sensory processing, feeding skills, and self-care abilities. OT may be recommended if your child has difficulty with hand coordination, avoids or seeks sensory input excessively, struggles with feeding textures, or has delays in self-care skills like using utensils. Like PT, early intervention OT is available at low or no cost for children under 3.',
  byAge: [
    { ageRange: '0-6 months', context: 'OT may be recommended if your baby has difficulty with grasping, keeping hands fisted constantly, shows feeding difficulties related to oral motor skills, or has sensory sensitivities that interfere with daily routines like bathing or dressing.' },
    { ageRange: '6-12 months', context: 'OT evaluation may be helpful if your baby is not reaching for or grasping toys, has difficulty transferring objects between hands, is not developing a pincer grasp, or shows extreme reactions to textures or sensory experiences.' },
    { ageRange: '12-18 months', context: 'If your toddler is not self-feeding with fingers, struggles to pick up small objects, cannot release objects voluntarily, or shows significant sensory aversions affecting daily life, OT can help develop these skills.' },
    { ageRange: '18-36 months', context: 'OT is commonly recommended for toddlers who cannot use utensils, have difficulty with simple puzzles or shape sorters, show poor hand-eye coordination, struggle with dressing tasks, or have sensory processing difficulties affecting behavior and participation in activities.' },
  ],
  whenNormal: ['Your baby grasps and explores toys appropriate for age.', 'Your toddler is learning self-feeding skills gradually.', 'Sensory exploration is curious but not distressed.', 'Fine motor skills are progressing, even if slowly.'],
  whenToMention: ['Your baby avoids using their hands or seems uninterested in toys.', 'Your toddler has extreme reactions to certain textures or sensations.', 'Self-feeding is significantly delayed compared to peers.', 'Your child seems to have much more difficulty with hand tasks than expected.'],
  whenToActNow: ['Your baby has lost fine motor skills they previously had.', 'Your child cannot grasp objects by 6 months.', 'Feeding difficulties are causing weight loss or nutritional concerns.', 'Sensory issues are severely affecting daily functioning.'],
  relatedMilestones: ['fine-motor-grasp', 'fine-motor-pincer'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-physical-therapy-when-needed', 'fine-motor-delay-general', 'baby-crossing-midline-difficulty'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Occupational Therapy', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Occupational-Therapy.aspx' },
    { org: 'NIH', citation: 'Case-Smith J, et al. Systematic Review of Interventions to Promote Social-Emotional Development in Young Children with or at Risk for Disability. Am J Occup Ther. 2015;69(2)', url: 'https://pubmed.ncbi.nlm.nih.gov/26122686/' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
