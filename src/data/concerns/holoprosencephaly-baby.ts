import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'holoprosencephaly-baby',
  title: 'Holoprosencephaly in Babies',
  category: 'medical',
  searchTerms: [
    'holoprosencephaly baby',
    'brain not dividing baby',
    'holoprosencephaly diagnosis',
    'HPE baby signs',
    'holoprosencephaly spectrum',
    'lobar holoprosencephaly baby',
    'semilobar holoprosencephaly baby',
    'holoprosencephaly facial features',
    'holoprosencephaly prognosis',
  ],
  quickAnswer:
    'Holoprosencephaly (HPE) is a brain malformation that occurs when the developing forebrain (prosencephalon) fails to divide into two hemispheres during early pregnancy (weeks 3-6). It is the most common structural malformation of the human brain, occurring in about 1 in 250 pregnancies, though most end in miscarriage, with approximately 1 in 8,000 to 16,000 live births affected. HPE exists on a spectrum from severe (alobar, with no separation) to mild (lobar or middle interhemispheric variant). Facial features often correlate with brain severity, ranging from cyclopia in the most severe forms to closely spaced eyes or a single central incisor in milder forms. Outcomes depend heavily on the type and severity.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'HPE is often detected on prenatal ultrasound, particularly the more severe forms, by the presence of a single ventricle, fused brain structures, or facial abnormalities. Fetal MRI provides more detailed assessment of the brain. Genetic testing is recommended, as HPE can be caused by chromosomal abnormalities (such as trisomy 13 or trisomy 18), gene mutations (SHH, ZIC2, SIX3, TGIF1), or environmental factors (maternal diabetes). The diagnosis often leads to extensive prenatal counseling regarding prognosis, which varies based on the type and underlying cause.',
    },
    {
      ageRange: '0-3 months',
      context:
        'Severe forms (alobar and semilobar) present at birth with significant neurological impairment, including poor feeding requiring tube feeding, seizures, abnormal muscle tone, temperature instability, and endocrine problems (particularly diabetes insipidus and growth hormone deficiency due to hypothalamic involvement). Hydrocephalus may develop. Facial features vary: severe cases may have absent nasal structures, cleft lip/palate, or closely spaced eyes (hypotelorism). Milder forms (lobar HPE) may have subtler facial and neurological findings.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Babies with severe HPE have profound developmental delays and often require comprehensive medical support including gastrostomy feeding, seizure management, and hormone replacement therapy. Some develop hydrocephalus requiring shunting. Babies with lobar HPE may achieve some motor milestones and show social responsiveness. Endocrine evaluation is important, as pituitary dysfunction is common and can cause cortisol deficiency (which can be life-threatening if untreated), thyroid problems, and growth issues.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Children with milder forms of HPE may make slow but meaningful developmental progress with early intervention services. Communication development, even if nonverbal, is an important focus. Movement and positioning therapy helps prevent contractures. Some children with lobar HPE may walk, use gestures, and engage socially. Children with more severe forms require full supportive care. Palliative care consultation can be helpful for families navigating complex medical decisions. Despite challenges, children with HPE are often described by their families as socially engaged and responsive.',
    },
    {
      ageRange: '3+ years',
      context:
        'Long-term outcomes span a very wide spectrum. Some individuals with the mildest forms of HPE (microform, including single central maxillary incisor) may have near-normal intelligence. Those with lobar HPE may have moderate to severe disability but can have meaningful quality of life with appropriate support. Severe forms carry a more guarded prognosis. Ongoing care involves neurology, endocrinology, developmental medicine, and family support. The Carter Centers for Brain Research and genetic counseling provide specialized resources for families.',
    },
  ],
  whenNormal: [
    'Your baby has closely spaced eyes but brain imaging is completely normal — mild hypotelorism can be a normal variant',
    'Your baby has a single central incisor but no other features of HPE and normal brain MRI',
    'Your child has mild lobar HPE, is making developmental progress, and has stable medical status',
  ],
  whenToMention: [
    'Your baby was diagnosed with HPE prenatally and you need postnatal evaluation and care planning',
    'Your baby has closely spaced eyes, facial midline defects, or a single central incisor along with developmental concerns',
    'Your child with HPE is having increased seizures, changes in feeding tolerance, or new endocrine symptoms (excessive thirst/urination, poor growth)',
  ],
  whenToActNow: [
    'Your baby with HPE develops signs of cortisol deficiency during illness — lethargy, low blood sugar, poor feeding, or shock — this is life-threatening and requires emergency stress-dose steroids and immediate medical care',
    'Your baby with HPE develops signs of increased intracranial pressure: rapid head growth, bulging fontanelle, persistent vomiting, or decreasing alertness — possible hydrocephalus requiring urgent neurosurgical evaluation',
    'Your baby with HPE has a prolonged seizure lasting more than 5 minutes or has difficulty breathing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-hydrocephalus-signs',
    'baby-epilepsy-signs-early',
    'lissencephaly-baby',
    'agenesis-corpus-callosum-baby',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Holoprosencephaly Information Page. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/holoprosencephaly',
    },
    {
      org: 'AAP',
      citation:
        'Levey EB, Stashinko E, Clegg NJ, Delgado MR. Management of Children With Holoprosencephaly. American Journal of Medical Genetics Part C. 2010;154C(1):183-190.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/20104610/',
    },
    {
      org: 'Carter Centers',
      citation:
        'Carter Centers for Brain Research in Holoprosencephaly and Related Malformations. Texas Scottish Rite Hospital for Children, 2024.',
      url: 'https://www.tsrhc.org/holoprosencephaly',
    },
  ],
};
