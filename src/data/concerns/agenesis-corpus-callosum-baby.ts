import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'agenesis-corpus-callosum-baby',
  title: 'Agenesis of the Corpus Callosum (ACC)',
  category: 'medical',
  searchTerms: [
    'agenesis of corpus callosum baby',
    'ACC baby diagnosis',
    'missing corpus callosum baby',
    'corpus callosum not formed baby',
    'agenesis corpus callosum prognosis',
    'partial agenesis corpus callosum',
    'corpus callosum prenatal diagnosis',
    'ACC developmental outcomes',
    'corpus callosum brain MRI baby',
  ],
  quickAnswer:
    'Agenesis of the corpus callosum (ACC) is a condition in which the corpus callosum — the bundle of nerve fibers connecting the left and right hemispheres of the brain — fails to develop partially or completely. It occurs in approximately 1 in 4,000 births and is one of the most common brain malformations. ACC can be detected on prenatal ultrasound or postnatal MRI. Outcomes vary enormously: some individuals with isolated ACC have normal intelligence and minimal difficulties, while others (especially when ACC occurs alongside other brain abnormalities or genetic syndromes) may have significant developmental delays. The variability means that prenatal counseling and postnatal monitoring are both essential.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'ACC is often detected during routine prenatal ultrasound, typically in the second or third trimester, when the corpus callosum normally becomes visible. Signs include absence of the cavum septum pellucidum and widely spaced lateral ventricles (colpocephaly). Fetal MRI provides a more detailed view and helps identify whether the ACC is isolated or part of a broader brain malformation. Genetic testing (chromosomal microarray, exome sequencing) is often recommended to look for associated conditions such as Aicardi syndrome, Andermann syndrome, or other genetic syndromes.',
    },
    {
      ageRange: '0-6 months',
      context:
        'Many babies with isolated ACC appear completely normal at birth and in the early months. Some may have feeding difficulties or seizures, particularly if ACC is part of a larger syndrome. A postnatal brain MRI confirms the diagnosis and helps characterize the extent (complete vs. partial ACC) and any associated brain anomalies. An ophthalmologic exam screens for eye abnormalities, which can occur in syndromic forms. Developmental monitoring begins, though it may be too early to determine long-term outcomes.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Motor milestones may be delayed in some children with ACC, though many achieve sitting and walking on a typical timeline. Social development is an important area to monitor, as some children with ACC have difficulty with social cognition and understanding nonverbal cues later in life. If seizures are present, management with a pediatric neurologist is important. Early intervention services (physical therapy, occupational therapy, speech therapy) should be started if any developmental delays are identified.',
    },
    {
      ageRange: '18 months - 5 years',
      context:
        'Language development may be delayed, and some children with ACC have specific difficulty with complex language processing, abstract reasoning, and problem-solving. Social difficulties may become more apparent — children with ACC may struggle to read social cues, understand humor, or interpret figurative language. Many children with isolated ACC, however, perform within the normal range on developmental assessments. Neuropsychological testing around school age helps identify specific learning strengths and challenges to guide educational planning.',
    },
    {
      ageRange: '5+ years',
      context:
        'Long-term outcomes for isolated ACC are highly variable. Many individuals lead independent lives with normal or near-normal intelligence, though they may have subtle difficulties with complex reasoning, social cognition, or multitasking. Those with ACC as part of a syndrome may have more significant intellectual disability. Ongoing educational support, social skills training, and periodic neuropsychological assessments help individuals reach their potential. The National Organization for Disorders of the Corpus Callosum (NODCC) provides valuable support and resources for families.',
    },
  ],
  whenNormal: [
    'Your baby has isolated ACC (no other brain abnormalities) and is meeting developmental milestones on time',
    'Your baby with ACC has a normal genetic workup and no seizures',
    'Your child with ACC is learning and socializing appropriately for their age with supportive services',
    'Prenatal imaging showed partial ACC but postnatal MRI shows no other abnormalities',
  ],
  whenToMention: [
    'Your baby with ACC is not meeting motor or language milestones at expected ages',
    'You notice your child with ACC has difficulty with social interactions or understanding others\' emotions',
    'Your child with ACC is struggling in school despite appearing bright in other areas',
  ],
  whenToActNow: [
    'Your baby with ACC develops seizures — seek prompt neurological evaluation, as seizures can indicate a more complex underlying condition',
    'Your baby with ACC has sudden changes in feeding, alertness, or head size — possible hydrocephalus or increased intracranial pressure requiring urgent imaging',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-hydrocephalus-signs',
    'baby-developmental-regression-signs',
    'baby-epilepsy-signs-early',
    'lissencephaly-baby',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Agenesis of the Corpus Callosum. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/agenesis-corpus-callosum',
    },
    {
      org: 'NODCC',
      citation:
        'National Organization for Disorders of the Corpus Callosum. About ACC. NODCC, 2024.',
      url: 'https://www.nodcc.org/about-acc',
    },
    {
      org: 'AAP',
      citation:
        'Paul LK, Brown WS, Adolphs R, et al. Agenesis of the Corpus Callosum: Genetic, Developmental, and Functional Aspects of Connectivity. Nature Reviews Neuroscience. 2007;8:287-299.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/17375041/',
    },
  ],
};
