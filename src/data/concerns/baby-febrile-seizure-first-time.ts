import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-febrile-seizure-first-time',
  title: 'What to Do During Your Baby\'s First Febrile Seizure',
  category: 'medical',
  searchTerms: [
    'first febrile seizure baby',
    'what to do during baby seizure',
    'baby fever seizure first time',
    'febrile seizure first aid',
    'baby shaking with fever what to do',
    'first seizure baby emergency',
    'baby convulsion fever first time',
    'febrile seizure at home steps',
    'child first seizure with fever',
    'should I call 911 febrile seizure',
  ],
  quickAnswer:
    'If your baby is having their first febrile seizure, stay calm. Place them on their side on a safe surface, do not put anything in their mouth, and time the seizure. Most febrile seizures last less than 5 minutes and stop on their own. Call 911 if the seizure lasts more than 5 minutes. After a first febrile seizure, your baby should always be evaluated by a doctor to confirm it was a febrile seizure and rule out other causes. Febrile seizures affect about 1 in 25 children and almost never cause lasting harm.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Febrile seizures are uncommon before 6 months. A seizure with fever in a baby this young is more concerning and requires immediate emergency evaluation, as it may indicate a serious infection such as meningitis rather than a simple febrile seizure. Call 911 or go to the emergency room immediately. Do not wait to see if the seizure stops on its own. Young babies with fever and seizures typically need blood tests, and possibly a lumbar puncture, to rule out serious bacterial infection.',
    },
    {
      ageRange: '6-18 months',
      context:
        'This is the most common age for a first febrile seizure. During the seizure: lay your baby on their side to prevent choking, move away dangerous objects, do not restrain them or put anything in their mouth, and time the seizure. After the seizure stops, your baby will likely be very sleepy - this is normal (called the postictal state). Bring your baby to the emergency room or call your pediatrician after a first seizure for evaluation. Febrile seizures often occur as a fever is rising rapidly, sometimes before you even realize your child is sick.',
    },
    {
      ageRange: '18 months - 5 years',
      context:
        'Febrile seizures can occur up to age 5. If this is your child\'s first seizure, follow the same steps: protect them from injury, place them on their side, time it, and do not put anything in their mouth. After it stops, seek medical evaluation. Your doctor will examine your child, determine the cause of the fever, and discuss what to expect going forward. About 30% of children who have one febrile seizure will have another with a future fever. Your doctor can discuss a seizure action plan with you.',
    },
  ],
  whenNormal: [
    'Your child had a brief (under 5 minutes) seizure involving their whole body during a fever, and has returned to normal within an hour.',
    'Your child is sleepy and groggy for up to an hour after the seizure - this postictal state is expected.',
    'Your child had a fever that rose quickly, triggering the seizure - this is the typical pattern.',
  ],
  whenToMention: [
    'Your child\'s first febrile seizure has occurred and they need evaluation (all first febrile seizures should be seen by a doctor).',
    'You want to discuss a seizure action plan for future febrile illnesses.',
    'You have questions about whether fever-reducing medication can prevent future febrile seizures.',
  ],
  whenToActNow: [
    'The seizure lasts longer than 5 minutes - call 911.',
    'Your baby is under 6 months old and has a seizure with fever.',
    'Your child has difficulty breathing, turns blue, or remains unresponsive after the seizure stops.',
    'The seizure only affects one side of the body.',
    'Your child has a stiff neck, bulging fontanelle, rash, or seems extremely ill beyond just the fever.',
    'Multiple seizures occur within 24 hours.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'febrile-seizure',
    'baby-febrile-seizure-recurrence-risk',
    'baby-fever-when-to-go-to-er',
    'baby-epilepsy-signs-early',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Febrile Seizures. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/seizures/Pages/Febrile-Seizures.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Febrile Seizures Fact Sheet.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/febrile-seizures',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Neurodiagnostic Evaluation of the Child with a Simple Febrile Seizure. Pediatrics, 2011.',
      url: 'https://publications.aap.org/pediatrics/article/127/2/389/65029',
    },
  ],
};
