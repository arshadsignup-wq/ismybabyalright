import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rubinstein-taybi-syndrome-baby',
  title: 'Rubinstein-Taybi Syndrome in Babies',
  category: 'medical',
  searchTerms: [
    'Rubinstein-Taybi syndrome baby',
    'broad thumbs baby syndrome',
    'broad big toes baby',
    'Rubinstein-Taybi facial features',
    'CREBBP gene baby',
    'EP300 gene baby',
    'Rubinstein-Taybi short stature',
    'baby wide thumbs diagnosis',
    'Rubinstein-Taybi intellectual disability',
    'Rubinstein-Taybi tumor risk',
  ],
  quickAnswer:
    'Rubinstein-Taybi syndrome (RTS) is a rare genetic condition characterized by broad thumbs and big toes, distinctive facial features, short stature, and intellectual disability. It is caused by mutations in the CREBBP gene (most common) or EP300 gene and occurs in about 1 in 100,000 to 125,000 births. Feeding difficulties are common in infancy. Children with RTS have a slightly increased risk of certain tumors, and there are important anesthesia considerations. With early intervention and supportive care, children with RTS can make meaningful developmental progress and lead fulfilling lives.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'RTS may be suspected at birth based on the characteristic broad, angulated thumbs and broad big toes, along with distinctive facial features including arched eyebrows, long eyelashes, downslanting palpebral fissures, a beaked nose, and a broad nasal bridge. Many newborns have significant feeding difficulties due to poor suck, high-arched or cleft palate, and gastroesophageal reflux. Constipation is very common from early infancy. Undescended testes occur in most males. Diagnosis is confirmed by genetic testing of CREBBP and EP300 genes.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Growth remains below typical curves, and RTS-specific growth charts are available. Motor milestones are delayed, with most children sitting independently around 12 months. Feeding difficulties may improve but constipation typically persists and requires ongoing management. Eye abnormalities including strabismus (crossed eyes), refractive errors, and blocked tear ducts should be evaluated by an ophthalmologist. Congenital heart defects are present in about one-third of cases and require cardiac evaluation.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Walking is typically achieved between 2-4 years. Speech is significantly delayed, and many children benefit from sign language or augmentative communication while verbal skills develop. Intellectual disability ranges from moderate to severe, though many children have a cheerful, social personality with a good sense of humor. Recurrent respiratory infections and ear infections are common. Dental abnormalities including crowded teeth and talon cusps may be noted as teeth emerge.',
    },
    {
      ageRange: '3 years+',
      context:
        'Children continue to develop at their own pace with appropriate support. The increased tumor risk (particularly pilomatrixomas, brain tumors such as meningiomas, and certain leukemias) requires awareness and monitoring, though the overall risk remains low. Anesthesia carries specific risks in RTS, including difficult intubation and cardiac arrhythmias, so any planned procedures should involve an anesthesiologist familiar with the condition. Obesity can become a concern as children age. Behavioral features may include mood lability and attention difficulties.',
    },
  ],
  whenNormal: [
    'Your baby has slightly wide thumbs as a familial trait with no other features of RTS and normal development',
    'Genetic testing for RTS was performed and came back negative',
    'Your child with RTS is making steady developmental progress and medical issues are well-managed',
    'Your child with RTS had a cardiac evaluation that showed no heart defect or a minor finding that is being monitored',
  ],
  whenToMention: [
    'Your baby has broad thumbs and big toes combined with feeding difficulties, distinctive facial features, or slow growth',
    'Your child with RTS has chronic constipation that is not responding to standard treatments',
    'Your child with RTS is developing new lumps or bumps (need to be evaluated for pilomatrixomas or other tumors)',
    'You need guidance on anesthesia precautions for an upcoming procedure or surgery',
  ],
  whenToActNow: [
    'Your baby with RTS has severe feeding difficulties, is losing weight, or shows signs of dehydration',
    'Your baby has signs of a heart problem such as rapid breathing, poor feeding, sweating during feeds, or bluish color',
    'Your child has signs of bowel obstruction such as bile-stained vomiting, severe abdominal distension, or absence of stool',
    'Your child has a new rapidly growing lump, unexplained bruising, prolonged fevers, or bone pain (possible tumor)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-growing-too-slow', 'baby-failure-to-thrive-signs'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Rubinstein-Taybi Syndrome. Genetic and Rare Diseases Information Center (GARD).',
      url: 'https://rarediseases.info.nih.gov/diseases/5738/rubinstein-taybi-syndrome',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Rubinstein-Taybi Syndrome. NORD Rare Disease Database.',
      url: 'https://rarediseases.org/rare-diseases/rubinstein-taybi-syndrome/',
    },
    {
      org: 'NIH',
      citation:
        'Stevens CA. Rubinstein-Taybi Syndrome. GeneReviews, National Library of Medicine, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1526/',
    },
  ],
};
