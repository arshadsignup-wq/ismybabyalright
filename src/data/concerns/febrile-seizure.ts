import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'febrile-seizure',
  title: 'My Baby Had a Febrile Seizure',
  category: 'medical',
  searchTerms: [
    'baby febrile seizure',
    'fever seizure in baby',
    'baby convulsion with fever',
    'febrile seizure what to do',
    'my baby had a seizure',
    'fever seizure normal',
    'baby shaking with fever',
    'febrile seizure recovery',
    'will febrile seizures happen again',
    'baby seizure emergency',
  ],
  quickAnswer:
    'Febrile seizures are frightening to witness but are usually harmless. They affect about 1 in 25 children, typically between 6 months and 5 years, and almost never cause lasting harm. Most children who have one febrile seizure never have another, and they don\'t increase the risk of epilepsy significantly.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Febrile seizures are rare before 6 months. If your young baby has any seizure-like activity (stiffening, jerking, loss of consciousness), even with a fever, this needs immediate medical evaluation as it may indicate a more serious infection or neurological issue rather than a typical febrile seizure.',
    },
    {
      ageRange: '6-18 months',
      context:
        'This is the most common age for a first febrile seizure. They typically occur when a fever rises rapidly, often before you even realize your baby is sick. Most last less than 5 minutes and involve the whole body stiffening or jerking. Your baby may lose consciousness briefly and be sleepy afterward, which is normal.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Febrile seizures remain common in this age group. If your child had one before, there\'s about a 30% chance of having another with a future fever. This doesn\'t mean there\'s anything wrong with your child\'s brain - it\'s just how some children\'s developing nervous systems respond to fever.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Children tend to outgrow febrile seizures by age 5. If your older toddler has their first febrile seizure after age 3, your doctor may want to investigate more thoroughly, but most are still simple and benign. Keep track of the duration and description to share with your pediatrician.',
    },
    {
      ageRange: '5 years+',
      context:
        'Febrile seizures after age 5 are unusual. A seizure with fever in an older child warrants careful medical evaluation to rule out other causes such as meningitis or encephalitis, even if it seems similar to previous febrile seizures.',
    },
  ],
  whenNormal: [
    'Your child had a brief (under 5 minutes) seizure with a fever above 100.4°F (38°C)',
    'Your child became drowsy or sleepy for 30 minutes to an hour after the seizure',
    'Your child returned to their normal self within a few hours',
    'The seizure involved the whole body (both sides) rather than just one arm or leg',
    'Your child has had one or two febrile seizures in the past with different illnesses',
  ],
  whenToMention: [
    'This was your child\'s first febrile seizure (your pediatrician should evaluate to confirm it was febrile and not another cause)',
    'Your child has now had more than two febrile seizures',
    'You have a family history of epilepsy or febrile seizures',
    'Your child had a febrile seizure that lasted more than 3 minutes',
  ],
  whenToActNow: [
    'The seizure lasts longer than 5 minutes or happens multiple times in 24 hours',
    'Your child has difficulty breathing, turns blue, or remains unresponsive after the seizure',
    'Your child has a stiff neck, severe headache, rash with fever, persistent vomiting, or seems extremely ill beyond just the fever',
    'The seizure only affects one side of the body or one limb',
    'Your baby is under 6 months old',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Febrile Seizures. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/seizures/Pages/Febrile-Seizures.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Febrile Seizures Fact Sheet. National Institute of Neurological Disorders and Stroke.',
      url: 'https://www.cdc.gov/seizures/index.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Management of the child with a serious infection or severe malnutrition, 2013.',
      url: 'https://www.who.int/publications/i/item/9241546700',
    },
  ],
};
