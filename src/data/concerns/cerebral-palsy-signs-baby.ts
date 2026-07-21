import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cerebral-palsy-signs-baby',
  title: 'Signs of Cerebral Palsy in Babies',
  category: 'medical',
  searchTerms: [
    'cerebral palsy signs baby',
    'baby stiff legs cerebral palsy',
    'CP signs infant',
    'cerebral palsy early signs',
    'baby not reaching milestones cerebral palsy',
    'baby favoring one side',
    'spastic baby movements',
    'cerebral palsy diagnosis baby',
    'delayed motor milestones cerebral palsy',
  ],
  quickAnswer:
    'Cerebral palsy (CP) is the most common motor disability in childhood, affecting about 1 in 345 children. It results from abnormal brain development or damage to the developing brain, most often before or during birth. Early signs include stiffness or floppiness, delayed motor milestones (not sitting by 9 months, not walking by 18 months), favoring one side of the body, and persistent primitive reflexes. Early diagnosis and intervention with physical therapy can significantly improve outcomes and function.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Very early signs of cerebral palsy can be subtle. Your baby may feel unusually stiff (hypertonic) or floppy (hypotonic) when you pick them up. You might notice that their legs scissor or cross when held upright, or that they arch their back excessively. Some babies with CP have difficulty feeding, with poor sucking or excessive tongue thrust. Persistent fisting of the hands beyond 2 months or a strong hand preference this early (babies should not show hand dominance until 12-18 months) can be early indicators. The General Movements Assessment, performed by a trained clinician, is one of the most reliable early detection tools.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, motor differences may become more apparent. A baby with CP may have difficulty bringing hands together at midline, may not reach for objects, or may have poor head control. You may notice asymmetry in movements — one arm or leg moving much more than the other. The baby may feel stiff when you try to move their limbs or may have a persistent startle reflex. If "fidgety movements" (the small, continuous movements healthy babies make between 3-5 months) are absent, this is a significant predictor of CP.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Delayed sitting (most babies sit by 9 months) and an inability to bear weight on legs when held standing are important signs. Your baby may roll using only one side, crawl asymmetrically (dragging one side), or not crawl at all. Increased muscle tone (spasticity) often becomes more noticeable during this period. Some babies show dystonic posturing — unusual, sustained postures of the hands or feet. Early referral for physical and occupational therapy is critical, as the brain is most plastic during this period.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Delayed walking is a common reason for CP diagnosis in this age range. Children with CP may walk on their toes, have a scissoring gait (legs crossing), or walk with one arm held in a flexed position. Some children with milder forms may walk on time but with abnormal patterns. By 18-24 months, most children with CP have been identified, though milder cases may not be diagnosed until later. Classification by type (spastic, dyskinetic, ataxic) and by Gross Motor Function Classification System (GMFCS) level helps guide treatment planning.',
    },
    {
      ageRange: '2+ years',
      context:
        'After age 2, the motor pattern of CP generally becomes well established. Treatment focuses on maximizing function through physical therapy, occupational therapy, orthotics, and in some cases medications for spasticity (such as baclofen or botulinum toxin injections). Many children with CP have normal intelligence, and cognitive abilities vary widely. Associated conditions such as epilepsy, vision impairment, speech difficulties, and learning differences should be screened for and managed. With appropriate support, many individuals with CP lead full, active lives.',
    },
  ],
  whenNormal: [
    'Your baby has slightly increased muscle tone but is meeting all motor milestones on time',
    'Your baby prefers one hand occasionally but uses both hands equally for reaching and grasping',
    'Your baby was premature and is slightly behind on motor milestones but steadily catching up when adjusted age is considered',
    'Your baby had a normal brain MRI and General Movements Assessment despite your concerns about stiffness or movement patterns',
  ],
  whenToMention: [
    'Your baby seems unusually stiff or floppy compared to other babies, or their muscle tone feels different when you pick them up',
    'Your baby is not meeting motor milestones — not sitting by 9 months, not standing by 12 months, or not walking by 18 months',
    'Your baby strongly favors one side of the body, using one hand or leg much more than the other before 12 months of age',
    'Your baby has persistent primitive reflexes (such as the Moro or ATNR reflex) beyond the expected age',
  ],
  whenToActNow: [
    'Your baby has progressive loss of motor skills they previously had — CP does not cause regression, so worsening suggests a different or additional condition requiring urgent evaluation',
    'Your baby has sudden onset of weakness, seizures, or loss of consciousness — these require emergency evaluation',
    'Your baby has severe feeding difficulties with choking, aspiration, or poor weight gain alongside motor concerns',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'stiff-baby-hypertonia',
    'floppy-baby-syndrome',
    'low-muscle-tone',
    'baby-developmental-regression-signs',
    'periventricular-leukomalacia-pvl',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. What is Cerebral Palsy? CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/cp/facts.html',
    },
    {
      org: 'AAP',
      citation:
        'Novak I, Morgan C, Adde L, et al. Early, Accurate Diagnosis and Early Intervention in Cerebral Palsy. JAMA Pediatrics. 2017;171(9):897-907.',
      url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2636588',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Cerebral Palsy. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/cerebral-palsy',
    },
  ],
};
