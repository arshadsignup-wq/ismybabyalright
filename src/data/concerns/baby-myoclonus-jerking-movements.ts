import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-myoclonus-jerking-movements',
  title: 'My Baby Has Jerking Movements (Myoclonus)',
  category: 'medical',
  searchTerms: [
    'baby jerking movements sleep',
    'baby myoclonus',
    'baby twitching in sleep',
    'baby jerking awake',
    'baby jolt movements',
    'newborn twitching normal',
    'baby body jerks',
    'baby startle in sleep vs seizure',
    'infant myoclonus benign',
    'baby shudder attacks',
    'baby jerks when falling asleep',
  ],
  quickAnswer:
    'Brief, sudden jerking movements (myoclonus) are very common in babies, especially during sleep. Benign sleep myoclonus causes repetitive jerks that only occur during sleep and stop when the baby wakes — this is completely normal and resolves by 6 months. However, jerking movements that occur while awake, do not stop when the baby is held, occur in clusters, or are accompanied by changes in consciousness, eye deviation, or developmental regression may indicate seizures and require urgent medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Benign neonatal sleep myoclonus is very common in this age group — repetitive jerking of the arms, legs, or whole body occurring during sleep. The key distinguishing feature from seizures is that it stops immediately when the baby is gently woken. Other normal movements include the Moro (startle) reflex (triggered by sudden noise or movement), jittery or tremoring movements (which stop when you gently hold the shaking limb), and sleep starts (hypnic jerks when falling asleep). If jerking movements are rhythmic, persistent, occur while awake, do not stop with gentle restraint, or are accompanied by eye deviation or color changes, they may be seizures.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Benign sleep myoclonus typically resolves by this age. Shudder attacks may appear — brief episodes of shivering or shuddering of the head, shoulders, and arms lasting a few seconds, often triggered by excitement or feeding. These are not seizures and are harmless. They can be distinguished from seizures because the baby remains alert and responsive during and after the episode. If you are concerned, recording a video of the movements is extremely helpful for your pediatrician. Any new-onset rhythmic jerking, especially in clusters upon waking, should be evaluated to rule out infantile spasms.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, benign myoclonus is less common. New-onset jerking movements should be taken more seriously. Causes to consider include infantile spasms (clusters of brief spasms upon waking), febrile seizures (seizures triggered by fever), benign myoclonus of infancy (rare, self-limited jerking during wakefulness with normal development), and head banging or body rocking (rhythmic behavior that is typically benign). If your baby has episodes of jerking with staring, unresponsiveness, eye rolling, or lip smacking, these could be seizure activity and warrant urgent evaluation with an EEG.',
    },
  ],
  whenNormal: [
    'Jerking movements occur only during sleep and stop completely when your baby wakes — this is benign sleep myoclonus.',
    'Your baby has brief, single startle reflexes triggered by noise or movement (Moro reflex).',
    'Your baby has occasional shuddering episodes while awake but remains alert and responsive throughout.',
    'Tremoring of a limb that stops when you gently hold it — this is jitteriness, not seizure activity.',
  ],
  whenToMention: [
    'You are unsure whether your baby\'s movements are normal or could be seizures — video record them for your pediatrician.',
    'Jerking movements are frequent and you want reassurance that they are benign.',
    'Your baby has shudder attacks and you want to confirm they are not a concern.',
  ],
  whenToActNow: [
    'Your baby has clusters of sudden body flexion movements (jackknife or head drops) occurring upon waking — this could be infantile spasms, which is a medical emergency requiring immediate evaluation.',
    'Jerking movements are accompanied by loss of consciousness, eye deviation, color changes (blue or pale), or your baby is unresponsive during or after the episodes — seek emergency evaluation for possible seizures.',
    'Your baby has sudden onset of continuous jerking that does not stop, or a seizure lasting more than 5 minutes — call 911.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-infantile-spasms-west-syndrome', 'febrile-seizure', 'leg-tremors-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Seizures and Epilepsy in Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/seizures/Pages/Seizures-and-Epilepsy-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke — Myoclonus Fact Sheet',
      url: 'https://www.ninds.nih.gov/health-information/disorders/myoclonus',
    },
    {
      org: 'Epilepsy Foundation',
      citation:
        'Epilepsy Foundation — Benign Neonatal Sleep Myoclonus',
      url: 'https://www.epilepsy.com/what-is-epilepsy/syndromes/benign-neonatal-sleep-myoclonus',
    },
  ],
};
