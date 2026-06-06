import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-dyspraxia-signs',
  title: 'Signs of Dyspraxia in Toddlers',
  category: 'physical',
  searchTerms: ['toddler dyspraxia signs', 'toddler motor planning difficulty', 'toddler dyspraxia symptoms', 'toddler can\'t sequence movements', 'toddler clumsy dyspraxia', 'motor planning toddler', 'toddler body awareness poor', 'toddler new movement difficulty', 'toddler praxis problems', 'developmental dyspraxia toddler'],
  quickAnswer: 'Dyspraxia (developmental coordination disorder) involves difficulty with motor planning - the ability to think of, organize, and carry out movements. Toddlers with dyspraxia often appear clumsy, have difficulty with new motor tasks, and struggle with everyday activities like eating, dressing, and playing. It affects about 5-6% of children and responds well to therapy.',
  byAge: [
    { ageRange: '12-18 months', context: 'Early signs may include difficulty learning new movements, clumsiness beyond what is typical, and frustration with motor tasks. At this age, it can be hard to distinguish from normal developmental variation. If your child seems to struggle with motor tasks more than peers, mention it to your pediatrician.' },
    { ageRange: '18-24 months', context: 'Your toddler may have difficulty with tasks that require sequencing movements, like climbing into a high chair or going down a slide. They may seem to not know how to position their body for activities. If you notice your child consistently struggles with motor planning, discuss it with your doctor.' },
    { ageRange: '2-3 years', context: 'Dyspraxia becomes more apparent as motor demands increase. Your child may struggle with using utensils, getting dressed, pedaling, and playground activities that peers manage easily. They may avoid new physical activities. An occupational therapy evaluation can identify motor planning difficulties.' },
    { ageRange: '3-4 years', context: 'If motor planning difficulties persist, a formal evaluation for developmental coordination disorder is recommended. Occupational therapy can provide motor planning strategies and activities. Many children with dyspraxia make excellent progress with appropriate intervention.' },
  ],
  whenNormal: ['Your toddler is clumsy but learns new motor tasks with practice.', 'Clumsiness is improving over time.', 'Your toddler can imitate movements and sequences.', 'Your toddler is under 2 and motor skills are still developing rapidly.'],
  whenToMention: ['Your toddler consistently struggles to learn new motor tasks.', 'Your toddler seems unable to figure out how to position their body for activities.', 'Motor difficulties are significantly more than peers.', 'Your child avoids physical activities due to difficulty.'],
  whenToActNow: ['Your child has lost motor planning abilities.', 'Coordination is declining rather than improving.'],
  relatedMilestones: ['gross-motor-walking', 'fine-motor-manipulation', 'self-care-dressing'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-clumsy-coordination', 'toddler-developmental-coordination-disorder', 'toddler-tripping-falling-often'],
  sources: [
    { org: 'NIH', citation: 'Blank R, et al. International Clinical Practice Recommendations on DCD. Dev Med Child Neurol. 2019;61(3):242-285', url: 'https://pubmed.ncbi.nlm.nih.gov/30671947/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics - Developmental Coordination Disorder', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'CDC', citation: 'CDC - Developmental Monitoring and Screening', url: 'https://www.cdc.gov/ncbddd/actearly/screening.html' },
  ],
};
