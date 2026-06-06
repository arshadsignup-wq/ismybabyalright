import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-body-stiffening-episodes', title: 'My Baby Has Episodes of Body Stiffening', category: 'physical',
  searchTerms: ['baby body stiffening episodes', 'baby goes rigid', 'baby stiffens up', 'baby intermittent stiffening', 'baby tenses up whole body', 'baby goes stiff episodes', 'baby stiffening spells', 'infantile spasms vs stiffening', 'baby tonic episodes', 'baby freezes and stiffens'],
  quickAnswer: 'Brief stiffening in babies can be normal, especially during excitement, frustration, or bowel movements. However, repetitive episodes of stiffening, especially if accompanied by changes in eye position, color changes, or altered consciousness, need urgent evaluation. Infantile spasms are a type of seizure that can look like brief stiffening episodes and require immediate treatment.',
  byAge: [
    { ageRange: '0-3 months', context: 'Brief stiffening during the Moro reflex or while passing gas is normal. If stiffening is repetitive, occurs in clusters, or your baby seems altered during episodes, contact your pediatrician immediately. Video recording the episodes is very helpful.' },
    { ageRange: '3-6 months', context: 'This is the peak age for infantile spasms, which often look like brief flexion or extension stiffening, sometimes in clusters upon waking. These require urgent evaluation and treatment. If you see repetitive brief episodes, seek same-day medical evaluation.' },
    { ageRange: '6-12 months', context: 'Stiffening during excitement or frustration is common and normal. Pathological stiffening is repetitive, stereotyped, and may be accompanied by eye deviation or loss of awareness. When in doubt, record and show your doctor.' },
    { ageRange: '12-24 months', context: 'Brief stiffening during tantrums or excitement is normal toddler behavior. Episodes with loss of consciousness, eye rolling, or that occur in sleep need medical evaluation.' },
  ],
  whenNormal: ['Brief stiffening when excited, angry, or passing stool.', 'Your baby is fully aware during the episode.', 'Stiffening resolves immediately and is not repetitive.', 'Occurs in predictable situations like frustration.'],
  whenToMention: ['Stiffening happens repeatedly throughout the day.', 'Episodes seem involuntary and stereotyped.', 'Your baby seems altered or dazed during episodes.'],
  whenToActNow: ['Clusters of brief stiffening episodes, especially upon waking.', 'Stiffening with eye deviation or rolling.', 'Development seems to be slowing or regressing alongside stiffening episodes.'],
  relatedMilestones: ['gross-motor-sitting', 'gross-motor-reaching'], showSelfReferral: true,
  relatedConcernSlugs: ['baby-involuntary-movements', 'stiff-baby-hypertonia', 'baby-arching-back'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Infantile Spasms', url: 'https://www.healthychildren.org/English/health-issues/conditions/seizures/Pages/Infantile-Spasms.aspx' },
    { org: 'NIH', citation: 'Pellock JM, et al. Infantile Spasms: A U.S. Consensus Report. Epilepsia. 2010;51(10)', url: 'https://pubmed.ncbi.nlm.nih.gov/20887364/' },
    { org: 'CDC', citation: 'CDC - Epilepsy in Children', url: 'https://www.cdc.gov/epilepsy/index.html' },
  ],
};
