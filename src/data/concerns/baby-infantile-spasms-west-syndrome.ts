import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-infantile-spasms-west-syndrome',
  title: 'Infantile Spasms (West Syndrome) in My Baby',
  category: 'medical',
  searchTerms: [
    'infantile spasms symptoms baby',
    'West syndrome baby',
    'baby jackknife movements',
    'baby sudden body jerk clusters',
    'baby spasms waking up',
    'baby head drop seizure',
    'infantile spasms vs startle reflex',
    'baby epileptic spasms',
    'baby hypsarrhythmia',
    'infantile spasms treatment urgent',
    'baby spasms clusters',
  ],
  quickAnswer:
    'Infantile spasms (also known as West syndrome) are a rare but serious type of epilepsy that typically begins between 3 and 12 months of age. They appear as brief, sudden clusters of movements — often a jackknife motion where the body bends forward, the arms fling out, and the knees pull up — usually occurring upon waking. Infantile spasms are a medical emergency that requires immediate evaluation, as early treatment (within days of onset) significantly improves developmental outcomes.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Infantile spasms are rare before 3 months but can occur. At this young age, the movements can be subtle and easily confused with normal startle reflexes (Moro reflex), colic, or reflux. Key differences: infantile spasms typically occur in clusters (a series of 5-20+ spasms over several minutes), often happen upon waking from sleep, and the baby may cry or seem distressed between spasms. The Moro reflex is a single event triggered by a sudden noise or movement. If you see repetitive, rhythmic body stiffening or jerking movements in clusters, video record them and contact your pediatrician immediately. Do not wait for the next appointment.',
    },
    {
      ageRange: '4-12 months',
      context:
        'This is the peak age range for infantile spasms onset, with most cases appearing between 4-8 months. The classic spasm involves a sudden flexion of the trunk, extension or flexion of the arms, and head nodding, lasting 1-2 seconds. These typically occur in clusters of 5-20 or more, often upon waking. Parents may notice their baby\'s development slowing, stopping, or even regressing around the time spasms begin. An EEG showing hypsarrhythmia (a chaotic brain wave pattern) confirms the diagnosis. Treatment with ACTH (adrenocorticotropic hormone) or vigabatrin should begin within days of diagnosis — every day of delay can worsen outcomes.',
    },
    {
      ageRange: '12-36 months',
      context:
        'While infantile spasms typically resolve by age 2-4, many children go on to develop other seizure types, and the developmental impact can be significant. Early treatment offers the best chance of preserving development. About 50-60% of children with infantile spasms have an identifiable underlying cause (such as tuberous sclerosis, brain malformations, or genetic conditions). Follow-up with a pediatric neurologist is essential. Some children show significant developmental improvement after successful treatment, while others may have lasting cognitive and motor challenges requiring early intervention services.',
    },
  ],
  whenNormal: [
    'Your baby has occasional single startle movements (Moro reflex) triggered by noise or sudden movement — these are normal reflexes, not spasms.',
    'Your baby has brief, single jerks during sleep (sleep myoclonus) that stop when the baby wakes — these are benign.',
    'Your baby stretches and stiffens briefly when excited or during a bowel movement — these are normal behaviors.',
  ],
  whenToMention: [
    'You notice your baby having repetitive jerking or stiffening movements that you are unsure about — video record them and show your pediatrician.',
    'Your baby seems to have clusters of subtle head nods or body stiffening, especially around waking times.',
    'Your baby\'s development seems to slow or stall without clear explanation.',
  ],
  whenToActNow: [
    'Your baby has clusters of sudden body movements (jackknife, head drops, arm extensions) occurring in series upon waking — this is a medical emergency. Record video and contact your pediatrician or go to the ER immediately.',
    'Your baby has been diagnosed with infantile spasms — treatment must begin within days. If your doctor is not acting urgently, seek a pediatric neurologist immediately.',
    'Your baby is having any type of seizure activity: rhythmic jerking, unresponsiveness, eye deviation, or stiffening lasting more than a few seconds — seek emergency medical evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-myoclonus-jerking-movements', 'febrile-seizure', 'leg-tremors-baby'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke — Infantile Spasms Information Page',
      url: 'https://www.ninds.nih.gov/health-information/disorders/infantile-spasms',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Infantile Spasms: A Need for Urgency',
      url: 'https://publications.aap.org/pediatrics/article/135/5/e1337/33533/Infantile-Spasms-A-Need-for-Urgency',
    },
    {
      org: 'Epilepsy Foundation',
      citation:
        'Epilepsy Foundation — Infantile Spasms (West Syndrome)',
      url: 'https://www.epilepsy.com/what-is-epilepsy/syndromes/infantile-spasms',
    },
  ],
};
