import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hunter-syndrome-mps2-baby',
  title: 'Hunter Syndrome (MPS II) in Babies',
  category: 'medical',
  searchTerms: [
    'hunter syndrome baby',
    'MPS II baby',
    'mucopolysaccharidosis type 2 baby',
    'hunter syndrome symptoms infant',
    'hunter syndrome boys X-linked',
    'iduronate-2-sulfatase deficiency baby',
    'hunter syndrome treatment',
    'hunter syndrome newborn screening',
    'coarse features joint stiffness baby',
    'hunter syndrome enzyme replacement',
  ],
  quickAnswer:
    'Hunter syndrome (mucopolysaccharidosis type II, MPS II) is an X-linked lysosomal storage disorder that primarily affects boys. It is caused by a deficiency of the enzyme iduronate-2-sulfatase, leading to accumulation of glycosaminoglycans in cells throughout the body. The severe form involves progressive neurological decline along with coarse facial features, joint stiffness, enlarged liver and spleen, and hearing loss. The attenuated form preserves normal intelligence. Enzyme replacement therapy with idursulfase is available, and MPS II has recently been added to the RUSP newborn screening panel.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies with Hunter syndrome typically appear normal at birth and in the first months of life. Some may have inguinal or umbilical hernias, which are common in MPS II. Because Hunter syndrome is X-linked, it primarily affects boys — girls who carry the gene variant are usually unaffected or very mildly affected. Newborn screening can now detect MPS II through enzyme activity measurement. If your son\'s newborn screen is positive, confirmatory testing will include enzyme assay and genetic testing.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Subtle signs may begin to emerge during this period. Babies may have recurrent ear infections, persistent runny nose, and frequent respiratory infections due to glycosaminoglycan accumulation in tissues. Some parents notice that their baby\'s facial features seem different from their siblings — a broader nose, fuller lips, and a larger head circumference. Hepatosplenomegaly (enlarged liver and spleen) may be detected on exam. Joint stiffness, particularly in the fingers and hands, may begin to develop.',
    },
    {
      ageRange: '1-2 years',
      context:
        'The progressive nature of Hunter syndrome becomes more apparent. Coarsening of facial features continues. Joint stiffness progresses, making it difficult for the child to fully extend their arms. Behavioral changes may include hyperactivity and difficulty sleeping. The distinction between severe and attenuated forms begins to emerge — children with the severe form start showing signs of developmental plateau or cognitive decline, while those with the attenuated form continue to develop intellectually. Enzyme replacement therapy with idursulfase can be started and helps manage many non-neurological symptoms.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Children with severe Hunter syndrome often show clear developmental regression and behavioral difficulties, including severe hyperactivity, sleep disturbance, and challenging behavior that can be very difficult for families. Hearing loss is common and should be monitored with regular audiology assessments. Cardiac valve disease may develop, requiring echocardiographic monitoring. Airway involvement can lead to obstructive sleep apnea and may make anesthesia risky. Physical therapy helps maintain joint mobility.',
    },
    {
      ageRange: '5 years and beyond',
      context:
        'Children with the attenuated form of Hunter syndrome have normal intelligence but progressive physical symptoms including joint contractures, carpal tunnel syndrome, cardiac valve disease, and hearing loss. ERT helps manage visceral and some somatic symptoms. For the severe form, disease progression continues with worsening neurological function. Hematopoietic stem cell transplant is not as clearly beneficial for MPS II as it is for MPS I. Intrathecal ERT and gene therapy are being studied as potential treatments for the neurological aspects.',
    },
  ],
  whenNormal: [
    'Your son\'s newborn screening came back normal for MPS II',
    'An initial positive screen was followed by confirmatory testing showing normal enzyme levels',
    'Your son has common childhood hernias or ear infections without any other features of MPS II',
    'Your child with attenuated Hunter syndrome is on ERT and maintaining stable function with normal cognitive development',
  ],
  whenToMention: [
    'Your son received an abnormal MPS II result on newborn screening — follow up for confirmatory testing',
    'Your son has recurrent ear infections, persistent runny nose, joint stiffness, and you notice his facial features seem to be changing',
    'Your son has progressive joint stiffness, an enlarged abdomen, and a larger-than-expected head circumference',
    'There is a family history of Hunter syndrome on the maternal side (the condition is X-linked)',
  ],
  whenToActNow: [
    'Your newborn son has screened positive for MPS II — confirmatory testing should be completed promptly to determine the diagnosis and form of the disease',
    'Your son has coarse facial features, a large head, joint contractures, an enlarged liver and spleen, and appears to be losing developmental skills — seek evaluation by a geneticist',
    'Your child with known Hunter syndrome develops signs of airway compromise such as severe snoring, pauses in breathing during sleep, or difficulty breathing',
    'Your child with Hunter syndrome needs surgery or anesthesia — the metabolic team must be involved in planning due to airway risks',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'newborn-screening-abnormal-results',
    'baby-metabolic-disorder-signs',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Mucopolysaccharidosis Type II. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/mucopolysaccharidosis-type-ii/',
    },
    {
      org: 'HRSA',
      citation:
        'Health Resources and Services Administration. MPS II Fact Sheet. Baby\'s First Test, 2023.',
      url: 'https://www.babysfirsttest.org/newborn-screening/conditions/mucopolysaccharidosis-type-ii',
    },
    {
      org: 'ACMG',
      citation:
        'American College of Medical Genetics. MPS II: Recommended Guidelines for Diagnosis and Management. ACMG, 2022.',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/Practice-Guidelines.aspx',
    },
  ],
};
