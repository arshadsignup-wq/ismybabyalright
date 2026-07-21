import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'niemann-pick-disease-baby',
  title: 'Niemann-Pick Disease in Babies',
  category: 'medical',
  searchTerms: [
    'niemann pick disease baby',
    'niemann pick disease symptoms infant',
    'niemann pick type A baby',
    'niemann pick type C baby',
    'sphingomyelinase deficiency baby',
    'cherry red spot baby niemann pick',
    'hepatosplenomegaly baby lysosomal',
    'acid sphingomyelinase deficiency',
    'niemann pick disease treatment',
    'niemann pick disease diagnosis',
  ],
  quickAnswer:
    'Niemann-Pick disease is a group of inherited lysosomal storage disorders caused by the body\'s inability to properly metabolize lipids (fats). Type A (infantile neurovisceral) is a severe form with hepatosplenomegaly and rapid neurodegeneration, typically appearing in the first months of life. Type B (chronic visceral) primarily affects the liver, spleen, and lungs without significant brain involvement. Type C involves progressive neurological decline that can begin in infancy, childhood, or adulthood. Enzyme testing and genetic testing are used for diagnosis.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies with Niemann-Pick Type A may appear healthy at birth but often develop prolonged jaundice and an enlarged liver and spleen (hepatosplenomegaly) within the first few weeks to months of life. Feeding difficulties and poor weight gain may be noticed early. Type B and Type C typically do not cause symptoms this early, though some infants with Type C may present with cholestatic liver disease (prolonged jaundice with pale stools) in the newborn period.',
    },
    {
      ageRange: '3-6 months',
      context:
        'In Type A, the liver and spleen continue to enlarge, and neurological symptoms begin. Babies may show decreased muscle tone, poor head control, and reduced responsiveness. An eye exam may reveal the characteristic cherry-red spot on the retina, similar to Tay-Sachs disease. Feeding becomes increasingly difficult. Developmental progress slows and then stops. Growth faltering becomes evident despite feeding support.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies with Type A experience progressive neurological decline with loss of previously acquired skills. They develop increasing spasticity, lose the ability to sit or hold their head up, and have worsening feeding difficulties often requiring a feeding tube. Recurrent lung infections may occur due to lipid accumulation in the lungs. Most children with Type A do not survive beyond age 3. Supportive care focuses on comfort, nutrition, and quality of life.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Type B may be diagnosed in early childhood when an enlarged spleen is found during a routine exam, or when blood work reveals low platelet counts or abnormal liver function. Children with Type B usually have normal intelligence and neurological function. Olipudase alfa (Xenpozyme) is an enzyme replacement therapy approved for Type B that can reduce spleen and liver size and improve lung function. Type C may present in this age range with clumsiness, difficulty walking, or unexplained falls as early neurological symptoms.',
    },
    {
      ageRange: 'Older children',
      context:
        'Type C often presents in school-age children with vertical supranuclear gaze palsy (difficulty looking up and down), progressive ataxia (uncoordinated movement), difficulty swallowing, and cognitive decline. Miglustat is approved in some countries to slow neurological progression in Type C. Early diagnosis and treatment can help slow disease progression, so any child with unexplained neurological decline combined with liver or spleen enlargement should be evaluated.',
    },
  ],
  whenNormal: [
    'Your baby has been tested and does not have Niemann-Pick disease',
    'Your baby had neonatal jaundice that resolved normally and has no other symptoms',
    'Carrier screening confirmed only one parent carries a Niemann-Pick gene variant',
    'Your child has Type B Niemann-Pick disease and is stable on enzyme replacement therapy',
  ],
  whenToMention: [
    'Your baby has unexplained persistent jaundice beyond the typical newborn period',
    'Your baby\'s abdomen seems unusually large or their liver or spleen feels enlarged',
    'Both parents are known carriers of Niemann-Pick disease and you want diagnostic testing',
    'Your child has unexplained clumsiness or difficulty with eye movements along with an enlarged spleen',
  ],
  whenToActNow: [
    'Your young baby has a rapidly enlarging abdomen, poor feeding, failure to thrive, and decreasing responsiveness — seek urgent medical evaluation',
    'Your baby has hepatosplenomegaly combined with signs of neurological decline such as loss of motor skills or seizures',
    'Your child with known Niemann-Pick disease develops breathing difficulties, severe feeding problems, or a significant change in neurological function',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-metabolic-disorder-signs',
    'baby-developmental-regression-signs',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Niemann-Pick Disease. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/niemann-pick-disease/',
    },
    {
      org: 'ACMG',
      citation:
        'American College of Medical Genetics. Acid Sphingomyelinase Deficiency: Diagnosis and Management Guidelines. ACMG, 2022.',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/Practice-Guidelines.aspx',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Niemann-Pick Disease. NORD, 2023.',
      url: 'https://rarediseases.org/rare-diseases/niemann-pick-disease/',
    },
  ],
};
