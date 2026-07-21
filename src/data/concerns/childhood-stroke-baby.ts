import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'childhood-stroke-baby',
  title: 'Perinatal and Childhood Stroke',
  category: 'medical',
  searchTerms: [
    'baby stroke signs',
    'perinatal stroke baby',
    'neonatal stroke symptoms',
    'childhood stroke signs',
    'baby weakness one side',
    'infant stroke seizure',
    'pediatric stroke',
    'baby born with stroke',
    'arterial ischemic stroke baby',
    'hemiplegia infant',
  ],
  quickAnswer:
    'Stroke in babies and children is more common than many people realize, affecting approximately 1 in 2,500 to 4,000 births (perinatal stroke) and about 2-8 per 100,000 children per year (childhood stroke). Perinatal stroke occurs around the time of birth and may not be noticed until months later when the baby favors one side. Childhood stroke presents more suddenly, similar to adult stroke. Seizures are the most common presenting symptom of neonatal stroke. Rapid recognition and treatment can minimize brain damage and improve long-term outcomes.',
  byAge: [
    {
      ageRange: '0-1 month (neonatal)',
      context:
        'Neonatal stroke most commonly presents with seizures in an otherwise well-appearing newborn, typically within the first few days of life. The seizures often affect one side of the body. Other signs include poor feeding, lethargy, or apnea. Risk factors include difficult or prolonged delivery, maternal infection, blood clotting disorders, congenital heart disease, and dehydration. Some neonatal strokes are not recognized at birth and are discovered later when a baby develops handedness too early or motor asymmetry.',
    },
    {
      ageRange: '1-12 months',
      context:
        'Many perinatal strokes are diagnosed during this period when parents or pediatricians notice the baby strongly favoring one hand (hand preference before 12 months is abnormal and warrants evaluation), reaching with only one arm, or having tightness in one hand or foot. This pattern, called hemiplegia, is the most common long-term consequence of perinatal stroke. Brain MRI reveals the stroke, which may have occurred weeks or months earlier. Early referral to physical and occupational therapy is critical, as constraint-induced movement therapy (CIMT) can help the weaker side develop.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Childhood arterial ischemic stroke in this age range presents more acutely with sudden onset of weakness on one side, difficulty speaking, facial droop, severe headache, vision changes, or loss of balance. Seizures at onset occur in about 25% of cases. Risk factors include congenital heart disease, sickle cell disease, moyamoya disease, infections (such as varicella), and blood clotting disorders. This is a medical emergency — if you suspect stroke in a child, call 911 immediately. Time-sensitive treatments may be available.',
    },
    {
      ageRange: '5+ years',
      context:
        'Stroke in older children more closely resembles adult stroke. The BE-FAST mnemonic applies: Balance problems, Eyes (vision loss), Face drooping, Arm weakness, Speech difficulty, Time to call 911. Children tend to recover better than adults due to greater brain plasticity, but many have lasting effects including hemiplegia, epilepsy, cognitive difficulties, and behavioral changes. Long-term rehabilitation with physical therapy, occupational therapy, and speech therapy helps maximize recovery. A thorough workup for underlying causes is essential to prevent recurrence.',
    },
  ],
  whenNormal: [
    'Your baby occasionally seems to prefer one hand but uses both hands for reaching and grasping overall',
    'Your baby had a birth complication but neuroimaging was normal and they are developing typically',
    'Your child had a stroke, received appropriate treatment, and is progressing well in rehabilitation',
    'Your baby has mild asymmetry in movement that has been evaluated and attributed to positional preference rather than neurological cause',
  ],
  whenToMention: [
    'Your baby strongly favors one hand before 12 months of age, consistently reaching, grasping, and playing with only one hand',
    'Your baby holds one hand in a fist while the other hand is open, or one side of the body seems stiffer or less active than the other',
    'Your baby had neonatal seizures and you have not yet had neuroimaging performed',
    'Your child complains of sudden, severe headaches or has episodes of brief weakness',
  ],
  whenToActNow: [
    'Your child suddenly develops weakness on one side of the body, facial drooping, difficulty speaking or understanding speech, vision changes, or severe headache — call 911 immediately, as this may be an acute stroke',
    'Your newborn has seizures, especially affecting only one side — seek immediate emergency evaluation for possible neonatal stroke',
    'Your child with a history of stroke develops new seizures or new or worsening weakness — this requires urgent evaluation for recurrent stroke',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-epilepsy-signs-early',
    'cerebral-palsy-signs-baby',
    'asymmetric-movement',
    'moyamoya-disease-child',
    'baby-seizure-types-infant',
  ],
  sources: [
    {
      org: 'AHA',
      citation:
        'Ferriero DM, Fullerton HJ, Bernard TJ, et al. Management of Stroke in Neonates and Children: A Scientific Statement From the American Heart Association/American Stroke Association. Stroke. 2019;50(3):e51-e96.',
      url: 'https://www.ahajournals.org/doi/10.1161/STR.0000000000000183',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Pediatric Stroke. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/stroke-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Perinatal Stroke: A Review. NeoReviews. 2019;20(6):e298-e311.',
      url: 'https://publications.aap.org/neoreviews/article/20/6/e298/80662/Perinatal-Stroke-A-Review',
    },
  ],
};
