import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tuberous-sclerosis-baby',
  title: 'Tuberous Sclerosis Complex (TSC) in Babies',
  category: 'medical',
  searchTerms: [
    'tuberous sclerosis baby',
    'TSC baby signs',
    'white patches baby skin tuberous sclerosis',
    'ash leaf spots baby',
    'hypomelanotic macules baby',
    'tuberous sclerosis infantile spasms',
    'cardiac rhabdomyoma baby',
    'brain tubers baby',
    'tuberous sclerosis diagnosis',
    'TSC seizures baby',
  ],
  quickAnswer:
    'Tuberous sclerosis complex (TSC) is a genetic condition that causes noncancerous tumors to grow in the brain, kidneys, heart, lungs, eyes, and skin. It affects approximately 1 in 6,000 births. One of the earliest signs in babies is white skin patches (hypomelanotic macules or "ash-leaf spots"), which may be visible at birth. TSC is a leading cause of infantile spasms and epilepsy in infants. Early diagnosis allows for proactive seizure monitoring and treatment, significantly improving developmental outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'TSC may be suspected prenatally if cardiac rhabdomyomas (benign heart tumors) are detected on fetal ultrasound — these are found in about 60% of babies with TSC and often shrink on their own. After birth, the most visible early sign is hypomelanotic macules — pale or white patches on the skin that are best seen under a Wood\'s lamp (ultraviolet light). These "ash-leaf" shaped spots can be subtle in fair-skinned babies. Some babies are diagnosed after brain imaging shows cortical tubers or subependymal nodules. Genetic testing for TSC1 or TSC2 gene mutations can confirm the diagnosis.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Infantile spasms develop in about one-third of babies with TSC, typically between 4-8 months. In TSC, vigabatrin is the preferred first-line treatment for infantile spasms and is highly effective. Proactive EEG monitoring in infants with known TSC (before seizures appear) has been shown to improve outcomes by enabling treatment at the very first sign of seizure activity. Brain MRI during this period helps identify cortical tubers and monitor for subependymal giant cell astrocytomas (SEGAs), which are benign but can obstruct fluid flow in the brain.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Other seizure types (focal seizures, generalized seizures) may develop during this period. Developmental progress varies widely — some children with TSC develop normally, while others have intellectual disability or autism spectrum features. Skin findings may become more apparent, including additional hypomelanotic macules and facial angiofibromas (small reddish bumps on the cheeks and nose, typically appearing after age 2). Kidney monitoring with periodic ultrasounds begins in early childhood, as angiomyolipomas (benign kidney tumors) can develop.',
    },
    {
      ageRange: '3+ years',
      context:
        'Long-term management of TSC involves regular monitoring of the brain, kidneys, heart, lungs, skin, and eyes. mTOR inhibitors (everolimus/sirolimus) are FDA-approved for treating SEGAs, kidney angiomyolipomas, and as adjunctive treatment for seizures in TSC. Many children with TSC attend regular school with appropriate support. The TSC Alliance and TSC clinics at major children\'s hospitals provide comprehensive, coordinated care. Regular developmental and behavioral assessments help identify and address learning, behavioral, and psychiatric needs.',
    },
  ],
  whenNormal: [
    'Your baby has one or two small white or pale patches on the skin that have been evaluated and are not associated with other TSC findings',
    'Your baby had cardiac rhabdomyomas prenatally that are shrinking and genetic testing is negative for TSC mutations',
    'Your baby has been diagnosed with TSC, is seizure-free, and is meeting developmental milestones with appropriate monitoring',
    'Your baby has normal skin findings and a family history was evaluated with no TSC features found',
  ],
  whenToMention: [
    'You notice multiple white or pale patches on your baby\'s skin, especially if they are oval or leaf-shaped',
    'Your baby has cardiac rhabdomyomas found on prenatal or postnatal echocardiogram',
    'You have a family history of tuberous sclerosis and want your baby screened',
    'Your baby with known TSC is showing new skin changes or behavioral differences',
  ],
  whenToActNow: [
    'Your baby develops clusters of sudden jerking or stiffening movements (possible infantile spasms) — record a video and seek same-day evaluation, as early treatment with vigabatrin is critical in TSC',
    'Your baby with known TSC develops signs of increased intracranial pressure: vomiting, bulging fontanelle, excessive sleepiness, or sudden vision changes — this may indicate a growing SEGA obstructing brain fluid flow',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'infantile-spasms-west-syndrome',
    'baby-epilepsy-signs-early',
    'baby-seizure-types-infant',
    'cafe-au-lait-spots',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Tuberous Sclerosis Fact Sheet. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/tuberous-sclerosis',
    },
    {
      org: 'AAP',
      citation:
        'Northrup H, Krueger DA; International Tuberous Sclerosis Complex Consensus Group. Tuberous Sclerosis Complex Diagnostic Criteria Update. Pediatric Neurology. 2013;49(4):243-254.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24053982/',
    },
    {
      org: 'TSC Alliance',
      citation:
        'TSC Alliance. What is Tuberous Sclerosis Complex? TSC Alliance, 2024.',
      url: 'https://www.tscalliance.org/about-tsc/what-is-tsc/',
    },
  ],
};
