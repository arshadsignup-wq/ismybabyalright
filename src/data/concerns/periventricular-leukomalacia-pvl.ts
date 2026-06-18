import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'periventricular-leukomalacia-pvl',
  title: 'My Baby Was Diagnosed with PVL (Periventricular Leukomalacia)',
  category: 'medical',
  searchTerms: [
    'periventricular leukomalacia PVL',
    'PVL diagnosis baby',
    'white matter brain damage preemie',
    'PVL prognosis baby',
    'periventricular leukomalacia outcome',
    'PVL cerebral palsy risk',
    'brain damage premature baby',
    'PVL on head ultrasound',
    'white matter injury NICU',
    'PVL grade severity',
  ],
  quickAnswer:
    'Periventricular leukomalacia (PVL) is a type of white matter brain injury that occurs most commonly in premature babies. It involves damage to the tissue around the brain\'s ventricles, which carries nerve fibers controlling motor movements. PVL is one of the most common brain injuries in preterm infants and can range from mild (small focal areas) to more extensive involvement. While PVL is associated with an increased risk of cerebral palsy and developmental delays, outcomes vary widely depending on severity, and early intervention can make a significant difference.',
  byAge: [
    {
      ageRange: 'Diagnosis in NICU',
      context:
        'PVL is typically identified on head ultrasound or MRI performed in the NICU. Hearing this diagnosis while your baby is already critically ill is devastating. It is important to know that the findings on imaging do not perfectly predict outcomes — some babies with PVL on imaging develop normally, while others face motor or cognitive challenges. Your neonatologist should explain the specific location and extent of the findings.',
    },
    {
      ageRange: '0-6 months corrected age',
      context:
        'In the first months after discharge, your baby will be monitored closely for signs of motor development issues, particularly muscle tone changes (stiffness or floppiness). Early intervention services should begin as soon as possible — physical therapy, occupational therapy, and developmental monitoring are critical. Many babies with mild PVL reach motor milestones within normal or near-normal timeframes with support.',
    },
    {
      ageRange: '6-12 months corrected age',
      context:
        'By this age, the impact of PVL on motor development becomes clearer. Some babies show signs of spastic diplegia (stiffness primarily in the legs), which is the most common motor outcome of PVL. Others may show minimal effects. Continued therapy and developmental assessments are essential. If cerebral palsy is diagnosed, early and consistent therapy leads to the best outcomes.',
    },
    {
      ageRange: '12 months+ corrected age',
      context:
        'As your child grows, a clearer picture of long-term outcomes emerges. Many children with mild PVL attend mainstream school and live independently. Those with more significant involvement benefit from ongoing therapy, adaptive equipment if needed, and educational support. Cognitive outcomes vary and are not always correlated with motor outcomes — some children with significant motor challenges have strong cognitive abilities.',
    },
  ],
  whenNormal: [
    'Your baby has mild PVL on imaging but is meeting developmental milestones with or without therapy',
    'Your baby shows subtle differences in muscle tone that are being addressed with physical therapy',
    'Your child has PVL and is making steady progress with early intervention services',
  ],
  whenToMention: [
    'Your baby seems unusually stiff or floppy and is not meeting motor milestones',
    'You notice your baby strongly prefers one side of the body over the other',
    'Your baby has difficulty with feeding, visual tracking, or seems excessively irritable',
    'You have questions about whether your child needs additional therapies or evaluations',
  ],
  whenToActNow: [
    'Your baby has seizures — call your doctor immediately or go to the emergency room',
    'Your baby has a sudden change in alertness, feeding, or behavior — seek urgent medical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'intraventricular-hemorrhage-ivh',
    'adjusted-age-milestones-preemie',
    'nicu-parent-trauma',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Periventricular Leukomalacia. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK538347/',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Periventricular Leukomalacia (PVL).',
      url: 'https://my.clevelandclinic.org/health/diseases/22381-periventricular-leukomalacia',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Brain Bleeds and Brain Damage in Premature Babies.',
      url: 'https://www.marchofdimes.org/find-support/topics/birth/brain-bleeds-premature-babies',
    },
  ],
};
