import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-ataxia-signs',
  title: 'Signs of Ataxia in Babies and Toddlers',
  category: 'physical',
  searchTerms: ['baby ataxia signs', 'baby wobbly uncoordinated', 'ataxia infant symptoms', 'baby cerebellar signs', 'toddler ataxic movements', 'baby uncoordinated reaching', 'toddler staggering walk', 'baby tremor when reaching', 'toddler wide gait unsteady', 'ataxia in babies'],
  quickAnswer: 'Ataxia refers to wobbly, uncoordinated movements that result from problems with the cerebellum (the brain\'s coordination center). Signs include an unsteady, wide-based gait, difficulty with precise hand movements, and intention tremor (shaking that worsens when reaching for something). If you notice these signs, evaluation by a pediatric neurologist is important.',
  byAge: [
    { ageRange: '0-6 months', context: 'Ataxia is difficult to identify this early because babies normally have uncoordinated movements. However, if your baby seems unusually uncoordinated compared to peers, with very jerky or overshooting reaches, mention it to your pediatrician.' },
    { ageRange: '6-12 months', context: 'Signs may include a very wobbly sitting posture, difficulty with precise reaching (overshooting or undershooting targets), and tremor that increases when trying to grasp objects. These signs warrant neurological evaluation.' },
    { ageRange: '12-18 months', context: 'If your child walks, ataxia may present as a very wide-based, staggering gait that looks different from normal early walking unsteadiness. The movements look uncoordinated rather than just inexperienced.' },
    { ageRange: '18-36 months', context: 'Ataxia at this age may affect walking, running, hand activities, and speech. If your child seems increasingly uncoordinated rather than improving, prompt neurological evaluation is essential to identify the cause.' },
  ],
  whenNormal: ['Normal age-appropriate unsteadiness in new walkers.', 'Mild uncoordination that is improving over time.', 'Brief clumsiness when tired or ill.'],
  whenToMention: ['Your baby overshoots or undershoots when reaching for objects.', 'Your baby is significantly more unsteady than peers.', 'Your child has a tremor that worsens when reaching for things.', 'Your child\'s walking is very staggering and wide-based beyond what is normal.'],
  whenToActNow: ['Sudden onset of uncoordinated movements.', 'Your child has become dramatically more uncoordinated over days or weeks.', 'Ataxia is accompanied by headaches, vomiting, or vision changes.'],
  relatedMilestones: ['gross-motor-sitting', 'gross-motor-walking', 'fine-motor-coordination'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-clumsy-coordination', 'toddler-coordination-getting-worse', 'baby-tremors'],
  sources: [
    { org: 'NIH', citation: 'Manto M. Cerebellar Disorders: A Practical Approach to Diagnosis and Management. Cambridge University Press. 2010', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics - Ataxia in Children', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'CDC', citation: 'CDC - Developmental Monitoring', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
