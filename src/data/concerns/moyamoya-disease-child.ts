import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'moyamoya-disease-child',
  title: 'Moyamoya Disease in Children',
  category: 'medical',
  searchTerms: [
    'moyamoya disease child',
    'moyamoya syndrome child',
    'progressive narrowing brain arteries child',
    'child TIA transient ischemic attack',
    'child stroke risk moyamoya',
    'moyamoya headaches child',
    'moyamoya weakness child',
    'pediatric moyamoya diagnosis',
    'moyamoya Asian descent child',
    'moyamoya revascularization surgery child',
  ],
  quickAnswer:
    'Moyamoya disease is a rare, progressive condition in which the major arteries at the base of the brain gradually narrow, reducing blood flow. The body compensates by forming fragile collateral blood vessels (the "puff of smoke" appearance on angiography that gives the disease its Japanese name). It affects approximately 1 in 100,000 children and is more common in children of East Asian descent, though it occurs in all ethnic groups. Moyamoya puts children at risk for stroke and TIAs (transient ischemic attacks). Surgical revascularization is the mainstay of treatment and can significantly reduce stroke risk. Early recognition and treatment are key to preventing irreversible brain damage.',
  byAge: [
    {
      ageRange: '0-2 years',
      context:
        'Moyamoya disease is uncommon in infancy but can present in the first two years of life, particularly in children with associated conditions such as Down syndrome, sickle cell disease, neurofibromatosis type 1, or prior cranial radiation. In young children, the presentation may include seizures, developmental regression, or stroke-like episodes with sudden weakness. An infant or toddler presenting with a stroke should be evaluated for moyamoya as part of the stroke workup. Brain MRI with MR angiography (MRA) is the initial screening test.',
    },
    {
      ageRange: '2-5 years',
      context:
        'This is one of the peak onset periods for moyamoya in childhood. Children may present with transient ischemic attacks (TIAs) — brief episodes of weakness, numbness, speech difficulty, or vision changes that resolve within minutes to hours. A characteristic trigger is hyperventilation (such as during crying, blowing on hot food, or playing a wind instrument), which causes cerebral vasoconstriction and can precipitate TIA symptoms in the setting of already reduced blood flow. Recurrent morning headaches may also occur. These symptoms are often initially attributed to other causes, delaying diagnosis.',
    },
    {
      ageRange: '5-10 years',
      context:
        'School-age children may present with recurrent TIAs, completed strokes (causing lasting weakness on one side), seizures, or cognitive decline. Some children are diagnosed after being noted to have progressive difficulty in school. The gold standard diagnostic test is conventional cerebral angiography, which shows the characteristic narrowing of the internal carotid arteries and the network of small collateral vessels. Surgical treatment — either direct bypass (STA-MCA bypass) or indirect revascularization (EDAS, EMS, or multiple burr holes) — is recommended to improve blood flow and prevent future strokes.',
    },
    {
      ageRange: '10+ years',
      context:
        'Adolescents with moyamoya may present similarly to adults, with TIAs, stroke, or hemorrhage (though hemorrhagic presentation is more common in adults than children). Post-surgical outcomes in children are generally excellent, with new vessel growth into the brain typically more robust than in adults. Long-term follow-up with periodic imaging is essential, as the disease can progress. Aspirin therapy is often used to reduce clotting risk. Children who undergo successful revascularization can often return to normal activities, though contact sports may be restricted.',
    },
  ],
  whenNormal: [
    'Your child has occasional headaches that respond to hydration, rest, or appropriate pain medication and have no associated neurological symptoms',
    'Your child had a single episode of clumsiness or dizziness that resolved quickly and was attributable to dehydration or viral illness',
    'Your child has a condition associated with moyamoya (such as Down syndrome) but screening MRA is normal',
    'Your child was evaluated for moyamoya and brain imaging showed normal blood vessels',
  ],
  whenToMention: [
    'Your child has recurrent, unexplained headaches, especially if they occur in the morning or worsen with activity',
    'Your child has brief episodes of weakness, numbness, or speech difficulty that resolve completely, particularly triggered by crying, hyperventilation, or exertion',
    'Your child has a condition known to be associated with moyamoya (Down syndrome, sickle cell disease, NF1, prior head radiation) and has not been screened',
  ],
  whenToActNow: [
    'Your child develops sudden weakness on one side of the body, facial droop, speech difficulty, or vision loss — this may be a stroke and requires calling 911 immediately',
    'Your child with known moyamoya develops a severe sudden headache, vomiting, or loss of consciousness — possible hemorrhagic stroke requiring emergency care',
    'Your child has recurrent TIA-like episodes — even if they resolve, each episode indicates the brain is at risk for a completed stroke, and urgent neurosurgical evaluation is needed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'childhood-stroke-baby',
    'baby-brain-tumor-signs',
    'neurofibromatosis-cafe-au-lait-baby',
  ],
  sources: [
    {
      org: 'AHA',
      citation:
        'Scott RM, Smith ER. Moyamoya Disease and Moyamoya Syndrome. New England Journal of Medicine. 2009;360:1226-1237.',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMra0804622',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Moyamoya Disease. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/moyamoya-disease',
    },
    {
      org: 'AAP',
      citation:
        'Smith ER. Moyamoya Disease and Syndrome: Surgical Considerations. Seminars in Pediatric Neurology. 2023;45:101030.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/37003593/',
    },
  ],
};
