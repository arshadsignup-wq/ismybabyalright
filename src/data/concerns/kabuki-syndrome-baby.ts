import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'kabuki-syndrome-baby',
  title: 'Kabuki Syndrome in Babies',
  category: 'medical',
  searchTerms: [
    'Kabuki syndrome baby',
    'Kabuki syndrome facial features',
    'arched eyebrows baby syndrome',
    'long eyelid fissures baby',
    'Kabuki syndrome diagnosis',
    'KMT2D gene baby',
    'Kabuki syndrome heart defect',
    'fetal fingertip pads baby',
    'Kabuki syndrome feeding difficulties',
    'Kabuki syndrome short stature',
  ],
  quickAnswer:
    'Kabuki syndrome is a rare genetic disorder characterized by distinctive facial features (arched eyebrows with lateral flaring, long eyelid fissures, a depressed nasal tip, and prominent ears), skeletal anomalies, persistent fetal fingertip pads, intellectual disability, and short stature. It is caused by mutations in the KMT2D gene (most common) or KDM6A gene. Feeding difficulties are common in infancy, and cardiac defects occur in 30-80% of affected children. Early intervention, growth monitoring, and management of associated medical issues can significantly improve quality of life.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Kabuki syndrome may be suspected at birth based on distinctive facial features, though diagnosis is often delayed because the features can be subtle in newborns. Feeding difficulties are very common and may include poor suck, gastroesophageal reflux, and failure to thrive. Hypotonia (low muscle tone) is present in most infants. A cardiac evaluation (echocardiogram) should be performed, as congenital heart defects including coarctation of the aorta, septal defects, and other anomalies occur in 30-80% of children. Genetic testing (KMT2D and KDM6A sequencing) confirms the diagnosis.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Motor milestones are typically delayed due to hypotonia. Feeding difficulties may continue and some infants need tube feeding temporarily. Recurrent infections, particularly ear infections and upper respiratory infections, are common because many children with Kabuki syndrome have immune deficiency (low immunoglobulin levels). Hearing should be assessed, as both conductive and sensorineural hearing loss can occur. Cleft palate or submucous cleft palate may be present and affect feeding and speech development.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Developmental delays become more apparent, particularly in speech and language. Most children with Kabuki syndrome have mild to moderate intellectual disability, though the range is wide. Short stature often becomes noticeable. Joint hypermobility (loose joints) is common and may contribute to delayed walking. Kidney abnormalities (present in about 25-50%) should be screened with renal ultrasound if not already done. Early intervention services including speech therapy, physical therapy, and occupational therapy are beneficial.',
    },
    {
      ageRange: '3 years+',
      context:
        'Children with Kabuki syndrome continue to make developmental progress with appropriate support. Many develop good social skills and have a friendly, sociable personality. Growth hormone deficiency should be evaluated if growth is significantly below expected. Dental abnormalities, including widely spaced teeth and missing teeth, are common. Scoliosis may develop and should be monitored. Seizures occur in about 10-25% of individuals. Many children attend school with varying levels of support and assistance.',
    },
  ],
  whenNormal: [
    'Your baby has some features that resemble Kabuki syndrome descriptions but genetic testing is negative and development is on track',
    'Your child with Kabuki syndrome is making steady developmental progress and feeding has improved',
    'Your child has arched eyebrows as an isolated familial feature without other signs of Kabuki syndrome',
    'Cardiac evaluation shows no heart defect or a minor defect that does not require intervention',
  ],
  whenToMention: [
    'Your baby has distinctive facial features combined with feeding difficulties, hypotonia, or slow growth that concern you',
    'Your child with Kabuki syndrome is having frequent infections and you want to discuss immune function testing',
    'Your child with Kabuki syndrome is falling significantly behind on growth curves and may benefit from endocrine evaluation',
    'You want to discuss genetic testing, the diagnosis, or implications for family planning',
  ],
  whenToActNow: [
    'Your baby with Kabuki syndrome has signs of a heart problem such as rapid breathing, poor feeding, sweating during feeds, or bluish color',
    'Your baby is unable to feed adequately, is becoming dehydrated, or is losing weight',
    'Your child has a seizure, high fever with signs of serious infection, or becomes unresponsive',
    'Your child with known immune deficiency has signs of a severe infection (high fever, lethargy, difficulty breathing)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['congenital-heart-defect-signs', 'baby-growing-too-slow'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Kabuki Syndrome. Genetic and Rare Diseases Information Center (GARD).',
      url: 'https://rarediseases.info.nih.gov/diseases/8246/kabuki-syndrome',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Kabuki Syndrome. NORD Rare Disease Database.',
      url: 'https://rarediseases.org/rare-diseases/kabuki-syndrome/',
    },
    {
      org: 'NIH',
      citation:
        'Adam MP, et al. Kabuki Syndrome. GeneReviews, National Library of Medicine, 2019.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK62111/',
    },
  ],
};
