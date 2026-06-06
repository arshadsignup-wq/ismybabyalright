import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-developmental-coordination-disorder',
  title: 'Signs of Developmental Coordination Disorder (DCD)',
  category: 'physical',
  searchTerms: ['developmental coordination disorder toddler', 'DCD signs toddler', 'DCD diagnosis children', 'coordination disorder symptoms', 'toddler motor disorder', 'clumsy child disorder', 'DCD vs normal clumsiness', 'motor coordination disorder', 'developmental coordination disorder symptoms', 'DCD early signs'],
  quickAnswer: 'Developmental Coordination Disorder (DCD) affects about 5-6% of children. It involves motor coordination difficulties significantly below what is expected for age, affecting daily activities. DCD is typically diagnosed after age 5, but early signs can be apparent in toddlerhood. Early occupational and physical therapy significantly improves outcomes.',
  byAge: [
    { ageRange: '12-18 months', context: 'Very early signs may include delayed motor milestones and difficulty learning new motor skills. However, DCD cannot be formally diagnosed at this age. If your child is significantly behind in motor development, early intervention can help regardless of diagnosis.' },
    { ageRange: '18-24 months', context: 'Early indicators may include persistent clumsiness, difficulty with self-feeding, trouble navigating playground equipment, and frustration with motor tasks. These signs alone are not diagnostic but warrant monitoring and support.' },
    { ageRange: '2-3 years', context: 'Signs become more apparent: difficulty with dressing, utensils, riding toys, ball skills, and drawing. Your child may avoid physical activities or become frustrated easily with motor tasks. An occupational therapy evaluation can identify specific difficulties and provide targeted support.' },
    { ageRange: '3-5 years', context: 'DCD can be more reliably identified at this age. Signs include persistent, significant motor difficulties that affect academic, play, and self-care activities. A formal assessment by an occupational therapist or developmental pediatrician is recommended.' },
  ],
  whenNormal: ['Your child is clumsy but improving.', 'Motor difficulties are mild and do not significantly affect daily life.', 'Your child is under 3 and motor skills are still developing rapidly.', 'Your child is coordinated in some areas but not others.'],
  whenToMention: ['Motor difficulties significantly affect daily activities.', 'Your child is much clumsier than same-age peers.', 'Motor challenges cause frustration, avoidance, or low self-esteem.', 'Motor difficulties are not improving with age and practice.'],
  whenToActNow: ['Your child is losing motor skills they previously had.', 'Motor difficulties are worsening over time.'],
  relatedMilestones: ['gross-motor-walking', 'fine-motor-manipulation', 'gross-motor-balance'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-dyspraxia-signs', 'toddler-clumsy-coordination', 'fine-motor-delay-general'],
  sources: [
    { org: 'NIH', citation: 'Blank R, et al. International Clinical Practice Recommendations on DCD. Dev Med Child Neurol. 2019;61(3):242-285', url: 'https://pubmed.ncbi.nlm.nih.gov/30671947/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics - Developmental Coordination Disorder', url: 'https://publications.aap.org/pediatrics/article/143/4/e20190070/37241' },
    { org: 'CDC', citation: 'CDC - Developmental Monitoring', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
