import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-epilepsy-signs-early',
  title: 'Early Signs of Epilepsy in Babies',
  category: 'medical',
  searchTerms: [
    'baby epilepsy signs',
    'infant seizure symptoms',
    'early epilepsy baby',
    'infantile spasms signs',
    'baby seizure types',
    'baby epilepsy diagnosis',
    'newborn seizure signs',
    'baby jerking movements seizure',
    'baby eyes rolling back seizure',
    'epilepsy in infants symptoms',
    'subtle seizure signs baby',
  ],
  quickAnswer:
    'Seizures in babies can look very different from seizures in older children or adults. Subtle signs may include repeated eye blinking or deviation, lip smacking, cycling leg movements, brief stiffening episodes, or clusters of head drops (infantile spasms). Infantile spasms are a neurological emergency that requires urgent evaluation. Not all unusual movements are seizures - babies commonly have benign tremors and startle reflexes - but any movement pattern that seems involuntary, repetitive, and cannot be interrupted deserves medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Neonatal seizures can be very subtle and difficult to recognize. Signs may include rhythmic eye movements, lip smacking or chewing movements, cycling or pedaling leg movements, or brief episodes of stiffening or arching. These may be confused with normal newborn reflexes. The key difference is that seizures tend to be stereotyped (the same pattern each time), cannot be stopped by holding or repositioning the baby, and may be accompanied by changes in breathing or color. If you suspect seizure activity, video record an episode and seek medical evaluation promptly.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Infantile spasms typically begin between 3-8 months and are characterized by sudden, brief clusters of body flexion or extension - often described as a jackknife movement or a brief startle. They commonly occur in clusters upon waking and may initially be dismissed as colic or startles. Infantile spasms are a medical emergency requiring prompt evaluation with an EEG, as early treatment significantly improves outcomes. Other seizure types at this age may include focal seizures (stiffening or jerking of one side) or episodes of sudden behavioral arrest.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Seizures in toddlers may be more recognizable, presenting as staring episodes, rhythmic jerking of limbs, sudden falls (drop attacks), or classic tonic-clonic (generalized stiffening and shaking) episodes. Febrile seizures - triggered by fever - are the most common type in this age group and are usually benign. However, seizures without fever, seizures affecting only one side of the body, or seizures associated with developmental regression should be evaluated by a pediatric neurologist. An EEG and possibly brain MRI may be recommended.',
    },
  ],
  whenNormal: [
    'Your newborn has trembling or jittery movements that stop when you gently hold the limb - these are likely benign tremors, not seizures.',
    'Your baby startles easily (Moro reflex) - this is a normal newborn reflex that fades by 4-6 months.',
    'Your baby occasionally stares briefly but responds when you touch them or call their name.',
  ],
  whenToMention: [
    'Your baby has repetitive, stereotyped movements that you cannot interrupt by touch or repositioning.',
    'Your baby has brief episodes of staring with subtle eye movements, lip smacking, or unresponsiveness.',
    'Your baby had a single brief episode of stiffening or unusual movement that resolved but concerned you - try to capture a video for your doctor.',
  ],
  whenToActNow: [
    'Your baby has clusters of brief head drops, body flexion, or sudden stiffening episodes, especially upon waking (possible infantile spasms - seek urgent evaluation).',
    'Your baby has a seizure lasting more than 5 minutes or has difficulty breathing during or after a seizure.',
    'Your baby has seizures accompanied by developmental regression - losing previously acquired skills.',
    'Your baby is having multiple seizures in one day or seizures are becoming more frequent.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-absence-seizure-staring-spells',
    'baby-febrile-seizure-first-time',
    'febrile-seizure',
    'baby-developmental-regression-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Seizures and Epilepsy in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/seizures/Pages/Seizures-and-Epilepsy-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Infantile Spasms Information Page.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/infantile-spasms',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Epilepsy in Children.',
      url: 'https://www.cdc.gov/epilepsy/about/index.html',
    },
  ],
};
