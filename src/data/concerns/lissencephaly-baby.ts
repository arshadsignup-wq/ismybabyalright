import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'lissencephaly-baby',
  title: 'Lissencephaly (Smooth Brain) in Babies',
  category: 'medical',
  searchTerms: [
    'lissencephaly baby',
    'smooth brain baby',
    'lissencephaly diagnosis',
    'lissencephaly MRI baby',
    'agyria pachygyria baby',
    'lissencephaly seizures baby',
    'lissencephaly prognosis',
    'baby severe developmental delay brain',
    'Miller-Dieker syndrome baby',
  ],
  quickAnswer:
    'Lissencephaly (meaning "smooth brain") is a rare brain malformation in which the brain surface lacks the normal folds (gyri) and grooves (sulci). It occurs when neurons fail to migrate to their proper positions during brain development between weeks 12-24 of pregnancy. Lissencephaly is classified as complete (agyria) or partial (pachygyria, with simplified, broad folds). It affects approximately 1 in 100,000 births and is typically caused by genetic mutations (most commonly in the LIS1 or DCX genes). Children with lissencephaly usually have severe developmental delays, epilepsy, and feeding difficulties, though the severity depends on the extent of brain involvement.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies with lissencephaly may appear relatively normal at birth, or microcephaly (small head) may be present. Early signs include poor feeding, weak suck, difficulty swallowing, and hypotonia (low muscle tone). Seizures can begin in the neonatal period, including infantile spasms. The diagnosis is typically confirmed by brain MRI, which shows a smooth or nearly smooth brain surface. Genetic testing helps identify the specific mutation and associated syndrome (such as Miller-Dieker syndrome with LIS1 deletion, or X-linked lissencephaly with DCX mutations).',
    },
    {
      ageRange: '3-12 months',
      context:
        'Developmental delays become increasingly apparent during this period. Most babies with classical lissencephaly do not achieve independent head control or sitting. Seizures, including infantile spasms, occur in the majority of affected children and can be difficult to control. Spasticity (increased muscle tone) may develop, replacing the initial hypotonia. Feeding difficulties often worsen, and many children require specialized feeding support. A gastrostomy tube (G-tube) may be recommended to ensure adequate nutrition and reduce aspiration risk.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Children with severe (grade 1-2) lissencephaly have profound intellectual and motor disability. Epilepsy management is a primary focus of care, often requiring multiple anti-seizure medications. Some children with partial lissencephaly (pachygyria) may achieve more motor milestones, such as supported sitting or rolling. Respiratory infections are a common complication due to aspiration risk and weak cough. Supportive care, including chest physiotherapy and careful feeding management, improves quality of life.',
    },
    {
      ageRange: '3+ years',
      context:
        'Long-term prognosis depends on the severity and extent of the brain malformation. Children with milder forms (grade 3-4 with more preserved gyral pattern) may have better outcomes. Ongoing multidisciplinary care includes neurology, gastroenterology, pulmonology, orthopedics, and palliative care as appropriate. Despite severe limitations, children with lissencephaly are aware of and responsive to their environment, enjoy social interaction, and benefit from sensory stimulation and engagement. Family support and respite care are essential components of comprehensive management.',
    },
  ],
  whenNormal: [
    'Your baby has a brain MRI that shows normal gyral (folding) patterns, even if ordered for other concerns',
    'Your baby has mild developmental delays but brain imaging is normal — lissencephaly is ruled out',
    'Your child has partial lissencephaly with a milder pattern and is making steady, measurable progress with therapy',
  ],
  whenToMention: [
    'Your baby has severe developmental delays with poor head control, difficulty feeding, and early-onset seizures',
    'Your baby was diagnosed with lissencephaly prenatally and you need postnatal evaluation and care planning',
    'Your child with lissencephaly is having worsening seizures or new feeding difficulties',
    'You have a family history of lissencephaly and are seeking genetic counseling',
  ],
  whenToActNow: [
    'Your baby with lissencephaly develops prolonged seizures, difficulty breathing, or signs of aspiration (choking, color changes during feeding, recurrent pneumonia)',
    'Your baby with lissencephaly becomes unusually unresponsive, has a bulging fontanelle, or develops persistent vomiting — possible increased intracranial pressure or other acute complication',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'infantile-spasms-west-syndrome',
    'baby-epilepsy-signs-early',
    'microcephaly-signs',
    'floppy-baby-syndrome',
    'agenesis-corpus-callosum-baby',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Lissencephaly Information Page. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/lissencephaly',
    },
    {
      org: 'AAP',
      citation:
        'Di Donato N, Chiari S, Mirzaa GM, et al. Lissencephaly: Expanded Imaging and Clinical Classification. American Journal of Medical Genetics Part A. 2017;173(6):1473-1488.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28440899/',
    },
  ],
};
