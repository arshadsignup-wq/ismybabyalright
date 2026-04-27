import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-non-febrile-seizure',
  title: 'Baby Seizure Without Fever',
  category: 'medical',
  searchTerms: [
    'baby seizure without fever',
    'infant seizure causes',
    'baby seizure signs',
    'baby shaking uncontrollably',
    'infantile spasms',
    'baby staring episodes',
    'what does a baby seizure look like',
    'newborn seizure symptoms',
    'non febrile seizure in baby',
    'baby eyes rolling back seizure',
    'epilepsy in babies signs',
    'baby convulsion without temperature',
  ],
  quickAnswer:
    'A seizure without fever in a baby is always a reason for medical evaluation. While febrile seizures (triggered by fever) are common and generally benign, seizures without fever can have various causes including low blood sugar, infections, brain injury, genetic conditions, or epilepsy syndromes like infantile spasms. Seizures in babies can look different from what you might expect - they may include staring spells, repetitive jerking of one limb, or brief full-body stiffening. Any suspected seizure should be evaluated by a pediatrician promptly.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Neonatal seizures are the most common neurological emergency in newborns and can be subtle. They may present as repetitive eye movements, lip smacking, cycling movements of the legs, or brief episodes of stiffening. Common causes include birth-related brain injury, low blood sugar, low calcium, infections, and genetic conditions. Any seizure-like activity in a newborn requires urgent evaluation, typically including bloodwork, brain imaging, and EEG monitoring. Early diagnosis and treatment are important for the best outcomes.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Seizures at this age may be caused by metabolic conditions, brain malformations, genetic epilepsy syndromes, or infections. Infantile spasms, a serious seizure type, typically begin between 3 and 8 months. They look like brief clusters of sudden jerking or stiffening - often the baby brings their arms forward and bends at the waist, similar to a startle reflex. These episodes tend to occur in clusters, often upon waking. If you notice this pattern, seek evaluation quickly, as early treatment of infantile spasms significantly improves outcomes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Seizures without fever at this age are less common than febrile seizures but do occur. Some babies develop epilepsy that first presents during this period. Seizures may look like staring episodes where the baby becomes unresponsive, rhythmic jerking of one side of the body, or sudden loss of muscle tone causing the baby to drop their head or fall. Video recording a suspected seizure episode (when safe to do so) is extremely valuable for your pediatrician in making a diagnosis.',
    },
    {
      ageRange: '12-36 months',
      context:
        'By this age, seizures are easier to recognize. Some children develop epilepsy syndromes during toddlerhood. Seizures may present as staring episodes, sudden falls, generalized shaking, or brief episodes of confusion. Some behaviors that parents worry about - like breath-holding spells, night terrors, or shuddering attacks - can look like seizures but are not. Your pediatrician can help distinguish between these. If your child has had one confirmed seizure without fever, an EEG and possibly brain imaging will typically be recommended.',
    },
  ],
  whenNormal: [
    'Your baby has brief jitteriness when startled or cold that stops when you gently hold the limb - this is a normal startle reflex, not a seizure',
    'Your baby has rhythmic movements during sleep that stop when woken - benign sleep myoclonus is not a seizure',
    'Your baby shivers or has a brief shuddering episode while awake and alert - shuddering attacks are benign',
  ],
  whenToMention: [
    'You have seen an episode that might have been a seizure - unusual staring, repetitive movements, or sudden stiffening - even if your baby seems fine now',
    'Your baby has episodes of sudden head dropping or brief body jerking that occur in clusters, especially upon waking',
    'Your baby has episodes of unresponsiveness or unusual eye movements that concern you',
  ],
  whenToActNow: [
    'Your baby is having a seizure right now - place them on a safe surface on their side, do not put anything in their mouth, time the seizure, and call 911 if it lasts longer than 5 minutes or if this is the first seizure',
    'Your baby has had a seizure and is not returning to their normal state afterward - prolonged confusion or sleepiness after a seizure (beyond 30 minutes) needs emergency evaluation',
    'Your baby has repetitive episodes of sudden body jerks or head drops occurring in clusters - this pattern suggests infantile spasms which need urgent evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: ['febrile-seizure', 'baby-jerky-movements', 'baby-tremors'],
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
        'National Institute of Neurological Disorders and Stroke. Infantile Spasms.',
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
