import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sturge-weber-syndrome-baby',
  title: 'Sturge-Weber Syndrome in Babies',
  category: 'medical',
  searchTerms: [
    'Sturge-Weber syndrome baby',
    'port wine stain seizures',
    'facial port wine stain brain',
    'Sturge-Weber glaucoma baby',
    'leptomeningeal angiomatosis',
    'port wine birthmark complications',
    'Sturge-Weber diagnosis baby',
    'facial birthmark neurological',
    'port wine stain forehead seizures',
    'Sturge-Weber treatment baby',
  ],
  quickAnswer:
    'Sturge-Weber syndrome (SWS) is a rare neurocutaneous disorder involving a port-wine stain (capillary malformation) on the face, a vascular malformation on the brain surface (leptomeningeal angioma), and/or glaucoma. It is caused by a somatic GNAQ gene mutation and affects approximately 1 in 20,000 to 50,000 births. Not every child with a facial port-wine stain has SWS — the risk is highest when the birthmark involves the forehead and upper eyelid. Early diagnosis with brain MRI and eye examination allows for proactive seizure management and glaucoma screening, which can significantly improve outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A port-wine stain involving the forehead (V1 distribution of the trigeminal nerve) is the key finding that raises suspicion for SWS. The birthmark is present at birth as a flat, pink-to-red patch. Not all facial port-wine stains indicate SWS — bilateral or extensive upper face involvement carries the highest risk. A contrast-enhanced brain MRI is typically performed to look for a leptomeningeal angioma. An eye examination screens for glaucoma, which is present in about 30-70% of children with SWS affecting the upper face. Early ophthalmology referral is important.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Seizures are the most common neurological manifestation of SWS and typically begin in the first year of life, often before 12 months. Seizures usually start on the side of the body opposite to the brain angioma (since the brain malformation is on the same side as the port-wine stain). Seizures may be focal (affecting one side) or generalized. Prophylactic anticonvulsant therapy may be considered in some cases. Aspirin therapy (low-dose) is used in some centers to improve blood flow in the affected brain area and may reduce stroke-like episodes.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Seizure control is a primary focus of management during this period. Poorly controlled seizures are associated with greater developmental impairment. Some children develop hemiparesis (weakness on one side of the body) that may be gradual or follow stroke-like episodes. Developmental monitoring is important, as cognitive and motor delays can occur, particularly if seizures are frequent or difficult to control. Laser treatment (pulsed dye laser) for the port-wine stain can begin in infancy or toddlerhood and is most effective when started early.',
    },
    {
      ageRange: '3+ years',
      context:
        'Long-term outcomes in SWS vary widely. Some children have well-controlled seizures and normal development, while others have refractory epilepsy and intellectual disability. Headaches and stroke-like episodes may occur. Glaucoma requires lifelong monitoring and treatment to preserve vision. In severe, medically refractory cases, surgical options including hemispherectomy may be considered. Multidisciplinary care involving neurology, ophthalmology, dermatology, and developmental pediatrics provides the best outcomes.',
    },
  ],
  whenNormal: [
    'Your baby has a small port-wine stain that does not involve the forehead or upper eyelid',
    'Your baby has a facial port-wine stain with a normal brain MRI and normal eye examination',
    'Your baby has a salmon patch (stork bite or angel kiss) — these common birthmarks fade and are not related to SWS',
    'Your child with SWS has well-controlled seizures, normal eye pressures, and is meeting developmental milestones',
  ],
  whenToMention: [
    'Your baby has a port-wine stain involving the forehead and/or upper eyelid and has not yet been evaluated for SWS',
    'Your child with SWS is having breakthrough seizures despite medication',
    'You notice your child squinting, tearing excessively, or one eye appears larger than the other — possible glaucoma signs',
  ],
  whenToActNow: [
    'Your baby with a facial port-wine stain has a seizure — seek emergency evaluation and discuss urgent brain MRI and neurology referral',
    'Your child with SWS develops sudden weakness on one side of the body, speech difficulty, or severe headache — possible stroke-like episode requiring emergency care',
    'Your baby with SWS develops a cloudy, enlarged, or bulging eye — possible acute glaucoma requiring urgent ophthalmologic treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'port-wine-stain',
    'baby-epilepsy-signs-early',
    'febrile-seizure',
    'baby-seizure-types-infant',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Sturge-Weber Syndrome. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/sturge-weber-syndrome',
    },
    {
      org: 'AAP',
      citation:
        'Comi AM. Sturge-Weber Syndrome. Handbook of Clinical Neurology. 2015;132:157-168.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26564078/',
    },
    {
      org: 'Sturge-Weber Foundation',
      citation:
        'The Sturge-Weber Foundation. About SWS. SWF, 2024.',
      url: 'https://www.sturge-weber.org/about-sws',
    },
  ],
};
