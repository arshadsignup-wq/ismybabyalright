import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hurler-syndrome-mps1-baby',
  title: 'Hurler Syndrome (MPS I) in Babies',
  category: 'medical',
  searchTerms: [
    'hurler syndrome baby',
    'MPS I baby',
    'mucopolysaccharidosis type 1 baby',
    'hurler syndrome newborn screening',
    'coarse facial features baby',
    'corneal clouding baby',
    'hurler syndrome symptoms infant',
    'alpha-L-iduronidase deficiency baby',
    'hurler syndrome treatment',
    'MPS I enzyme replacement',
  ],
  quickAnswer:
    'Hurler syndrome is the most severe form of mucopolysaccharidosis type I (MPS I), a lysosomal storage disorder caused by deficiency of the enzyme alpha-L-iduronidase. Babies appear normal at birth, but symptoms progressively emerge during the first year of life, including coarse facial features, enlarged liver and spleen, skeletal abnormalities, corneal clouding, heart disease, and intellectual disability. MPS I is on the federal RUSP newborn screening panel. Hematopoietic stem cell transplant performed before age 2 offers the best outcomes, and enzyme replacement therapy with laronidase is also available.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies with Hurler syndrome typically appear normal at birth. Some may have umbilical or inguinal hernias, which are common in MPS I but also common in the general population, so they may not raise immediate concern. Newborn screening can detect MPS I through enzyme activity measurement. If your baby\'s newborn screen is positive for MPS I, confirmatory testing including enzyme assay and genetic testing will determine the specific form (Hurler, Hurler-Scheie, or Scheie). Early diagnosis is critical because stem cell transplant outcomes are best when performed before significant symptoms develop.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Early subtle signs may begin to emerge. Babies may have frequent upper respiratory infections, chronic runny nose, and recurrent ear infections due to glycosaminoglycan (GAG) storage in tissues. Some parents notice that their baby\'s facial features seem to be getting coarser over time — a broader nose, thickened lips, and a larger head. Hepatosplenomegaly (enlarged liver and spleen) may be detected on exam. If MPS I is suspected, urine GAG testing and enzyme assays can confirm the diagnosis.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The progressive nature of Hurler syndrome becomes more apparent. Facial features become noticeably coarse. Joint stiffness, particularly in the hands (claw-hand deformity), begins to develop. Corneal clouding may become visible, affecting vision. Developmental progress may slow. Skeletal changes visible on X-ray (dysostosis multiplex) are often present. This is a critical window for hematopoietic stem cell transplant (HSCT), which is most effective when performed before age 2 and ideally before significant cognitive decline.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Without treatment, children with Hurler syndrome show progressive intellectual disability, worsening joint stiffness, characteristic skeletal changes, cardiac valve disease, and increasing hepatosplenomegaly. Hearing loss is common. If HSCT has not yet been performed, this remains a viable window, though outcomes are best when transplant occurs earlier. Enzyme replacement therapy (laronidase) is often started before transplant and can help reduce GAG storage. After successful HSCT, many children show stabilization or improvement in cognitive function.',
    },
    {
      ageRange: '2 years and beyond',
      context:
        'Children who received early HSCT often maintain cognitive development and have slower progression of skeletal and cardiac disease, though they may still need orthopedic interventions, cardiac monitoring, and therapies. Without transplant, Hurler syndrome typically leads to severe disability, with most children not surviving past the first decade. The milder forms of MPS I (Hurler-Scheie and Scheie syndromes) have a slower course, with normal or near-normal intelligence, and are managed with enzyme replacement therapy and supportive care.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening came back normal for MPS I',
    'An initial positive screen was followed by confirmatory testing that showed normal enzyme levels',
    'Your baby has an umbilical hernia but no other signs of MPS I — hernias are very common in otherwise healthy babies',
    'Your child had successful HSCT for Hurler syndrome and is developing well with stable enzyme levels',
  ],
  whenToMention: [
    'Your baby received an abnormal MPS I result on newborn screening — follow up promptly as early intervention dramatically improves outcomes',
    'Your baby has recurrent ear infections, persistent runny nose, and you notice their facial features seem to be changing or becoming coarser',
    'Your baby has progressive joint stiffness, especially in the hands, along with an enlarged abdomen',
    'There is a family history of MPS I or another mucopolysaccharidosis',
  ],
  whenToActNow: [
    'Your newborn has screened positive for MPS I — confirmatory testing should happen urgently because transplant outcomes depend on early treatment, ideally before age 2',
    'Your baby has coarse facial features, an enlarged liver and spleen, corneal clouding, and appears to be falling behind developmentally — seek evaluation by a geneticist or metabolic specialist',
    'Your child with known Hurler syndrome develops signs of spinal cord compression (difficulty walking, loss of bladder control, weakness in arms or legs) — this requires emergency evaluation',
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
        'National Library of Medicine. Mucopolysaccharidosis Type I. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/mucopolysaccharidosis-type-i/',
    },
    {
      org: 'HRSA',
      citation:
        'Health Resources and Services Administration. MPS I Fact Sheet. Baby\'s First Test, 2023.',
      url: 'https://www.babysfirsttest.org/newborn-screening/conditions/mucopolysaccharidosis-type-i',
    },
    {
      org: 'ACMG',
      citation:
        'American College of Medical Genetics. MPS I Newborn Screening: Diagnosis and Management. ACMG, 2019.',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/Practice-Guidelines.aspx',
    },
  ],
};
