import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-brachial-plexus-injury',
  title: 'Erb\'s Palsy (Brachial Plexus Birth Injury)',
  category: 'medical',
  searchTerms: [
    'Erb\'s palsy baby',
    'brachial plexus injury newborn',
    'baby arm not moving after birth',
    'newborn arm limp',
    'birth injury arm nerve damage',
    'baby arm weakness',
    'Erb\'s palsy treatment',
    'brachial plexus palsy newborn',
    'baby arm paralysis birth',
    'shoulder dystocia nerve injury',
  ],
  quickAnswer:
    'A brachial plexus injury (Erb\'s palsy) occurs when the nerves controlling the arm are stretched during delivery, most often during shoulder dystocia. The affected arm may appear limp or have limited movement. The good news is that 80-90% of cases resolve within the first 3-6 months with conservative management and physical therapy.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Brachial plexus injuries are typically noticed immediately after birth. The affected arm may hang limply at the baby\'s side, be rotated inward (waiter\'s tip position), or have limited movement. The baby may not have a Moro reflex on the affected side. Risk factors include large birth weight, shoulder dystocia, and difficult deliveries. Initial management includes gentle handling, avoiding pulling on the affected arm, and early physical therapy to maintain range of motion. Most mild to moderate injuries begin to show improvement within the first few weeks.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Physical therapy continues with gentle range-of-motion exercises to prevent joint stiffness. You will be watching for signs of recovery, including increasing movement of the arm, hand, and fingers. Most babies show significant improvement by 3 months. If there is no improvement in biceps function by 3 months, referral to a specialist (pediatric neurologist or orthopedist) may be recommended to discuss further evaluation and possible surgical options.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If recovery has begun, it typically continues progressively. Babies who show biceps recovery by 3 months have an excellent prognosis for full or near-full recovery. If there has been no improvement by 3-6 months, nerve surgery (such as nerve grafting or transfer) may be considered. This decision is made by a specialized team.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most babies with mild to moderate injuries have recovered significantly by this age. Those who required surgery typically begin recovering function in the months following the procedure. Ongoing physical and occupational therapy supports optimal function. Even babies with residual weakness often adapt remarkably well.',
    },
  ],
  whenNormal: [
    'Gradual improvement in arm movement over the first few weeks to months',
    'Increasing spontaneous movement of the affected arm',
    'Baby beginning to reach and grasp with the affected hand',
  ],
  whenToMention: [
    'You want to ensure your baby is receiving appropriate physical therapy',
    'You are not seeing improvement in arm movement after the first few weeks',
    'You have questions about the expected recovery timeline',
  ],
  whenToActNow: [
    'No improvement in arm movement by 3 months, as this is the typical time point for specialist referral and evaluation for potential surgical intervention',
    'The affected arm appears swollen, discolored, or your baby seems to be in significant pain',
  ],
  relatedMilestones: ['reaching', 'grasping'],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Brachial Plexus Birth Injuries. Pediatrics.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Brachial Plexus Birth Palsy. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532904/',
    },
  ],
  relatedConcernSlugs: ['newborn-birth-injury-clavicle', 'newborn-asymmetric-moro-reflex', 'newborn-hand-preference-early'],
};
