import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'lennox-gastaut-syndrome-child',
  title: 'Lennox-Gastaut Syndrome (LGS) in Children',
  category: 'medical',
  searchTerms: [
    'Lennox-Gastaut syndrome child',
    'LGS seizures child',
    'multiple seizure types child',
    'tonic seizures child',
    'drop attacks child',
    'slow spike wave EEG child',
    'Lennox-Gastaut diagnosis',
    'severe epilepsy child intellectual disability',
    'atonic seizures child',
    'Lennox-Gastaut treatment',
  ],
  quickAnswer:
    'Lennox-Gastaut syndrome (LGS) is a severe form of epilepsy that typically begins between ages 1 and 8 years, with a peak onset between 3-5 years. It is characterized by multiple seizure types (especially tonic, atonic, and atypical absence seizures), a distinctive slow spike-and-wave pattern on EEG, and cognitive impairment or intellectual disability. LGS accounts for about 1-4% of childhood epilepsy cases. Seizures are often resistant to medication, making treatment challenging, but newer therapies including cannabidiol (Epidiolex), dietary therapy (ketogenic diet), and neuromodulation (VNS) offer additional management options. Many children with LGS have a history of infantile spasms (West syndrome) that evolved into LGS.',
  byAge: [
    {
      ageRange: '0-1 year',
      context:
        'LGS is not typically diagnosed in the first year of life, but the precursor condition — infantile spasms (West syndrome) — may be present. About 20-30% of children with infantile spasms later develop LGS. Signs to watch for include clusters of sudden jerking or body flexion movements, developmental regression, and an EEG pattern called hypsarrhythmia. If your baby has infantile spasms, close follow-up with pediatric neurology is essential to monitor for evolution into LGS as the child grows.',
    },
    {
      ageRange: '1-3 years',
      context:
        'LGS may begin during this period. Early signs include the appearance of multiple seizure types: tonic seizures (body stiffening, especially during sleep), atonic seizures ("drop attacks" — sudden loss of muscle tone causing falls), and atypical absence seizures (prolonged staring episodes with subtle motor features). Parents may notice their child falling frequently without explanation, having episodes of blank staring, or stiffening in sleep. The EEG shows a characteristic slow spike-and-wave pattern. Cognitive development begins to slow or plateau.',
    },
    {
      ageRange: '3-8 years',
      context:
        'This is the peak age of LGS onset and diagnosis. The triad of multiple seizure types, slow spike-and-wave on EEG, and cognitive impairment defines the syndrome. Drop attacks (tonic or atonic seizures) can cause serious injuries, and protective headgear may be recommended. First-line medications include valproate, lamotrigine, and rufinamide. Adjunctive treatments include clobazam, cannabidiol (Epidiolex — FDA-approved for LGS), the ketogenic diet, and vagus nerve stimulation (VNS). Complete seizure freedom is rarely achieved, and the goal is often seizure reduction and injury prevention.',
    },
    {
      ageRange: '8+ years',
      context:
        'LGS is a lifelong condition. While some seizure types (particularly drop attacks) may decrease with age, others persist or evolve. Cognitive and behavioral challenges continue and may include intellectual disability, behavioral problems, and slow processing speed. Tonic seizures during sleep remain characteristic. Ongoing medication management, educational support, behavioral intervention, and transition planning to adult neurology care are all important. Some individuals with LGS require lifelong supervision and care, while others achieve greater independence depending on the severity of their condition.',
    },
  ],
  whenNormal: [
    'Your child had a single seizure type that is well controlled with one medication — this does not suggest LGS',
    'Your child had typical febrile seizures that have resolved — febrile seizures do not cause or lead to LGS',
    'Your child has a staring spell that is brief, immediately responsive to touch, and has been evaluated as benign',
    'Your child had infantile spasms that resolved completely with treatment and has a normal EEG',
  ],
  whenToMention: [
    'Your child is having multiple different types of seizures (stiffening episodes, staring spells, and sudden falls)',
    'Your child with epilepsy is not responding to multiple anti-seizure medications and seizures are becoming more varied',
    'Your child had infantile spasms and is now developing new seizure types or cognitive regression',
    'Your child has frequent unexplained falls or "drop attacks" that may represent atonic seizures',
  ],
  whenToActNow: [
    'Your child has a seizure lasting more than 5 minutes or enters status epilepticus (continuous seizure) — administer rescue medication if prescribed and call 911',
    'Your child has a severe fall from a drop seizure resulting in head injury, loss of consciousness, or bleeding — seek emergency medical care',
    'Your child with LGS develops a sudden change in seizure pattern, increased seizure frequency, or prolonged unresponsiveness between seizures',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'infantile-spasms-west-syndrome',
    'baby-epilepsy-signs-early',
    'baby-seizure-types-infant',
    'dravet-syndrome-baby',
    'baby-developmental-regression-signs',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Lennox-Gastaut Syndrome. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/lennox-gastaut-syndrome',
    },
    {
      org: 'Epilepsy Foundation',
      citation:
        'Epilepsy Foundation. Lennox-Gastaut Syndrome (LGS). Epilepsy Foundation, 2024.',
      url: 'https://www.epilepsy.com/what-is-epilepsy/syndromes/lennox-gastaut-syndrome',
    },
    {
      org: 'AAP',
      citation:
        'Cross JH, Auvin S, Falip M, et al. Expert Opinion on the Management of Lennox-Gastaut Syndrome. Epilepsia Open. 2017;2(4):405-415.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29588973/',
    },
  ],
};
