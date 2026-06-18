import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rett-syndrome-signs',
  title: 'My Baby Is Losing Skills — Could It Be Rett Syndrome?',
  category: 'medical',
  searchTerms: [
    'Rett syndrome signs baby',
    'Rett syndrome early symptoms',
    'baby losing hand skills',
    'baby hand wringing repetitive',
    'developmental regression toddler',
    'Rett syndrome diagnosis',
    'MECP2 gene mutation baby',
    'Rett syndrome girl',
    'baby stopped using hands purposefully',
    'Rett syndrome prognosis',
  ],
  quickAnswer:
    'Rett syndrome is a rare genetic neurological disorder that primarily affects girls (about 1 in 10,000 female births). It is caused by mutations in the MECP2 gene. Babies with Rett syndrome typically develop normally for the first 6-18 months before a period of regression occurs — they lose purposeful hand use and speech skills, develop repetitive hand movements (wringing, squeezing, clapping), and may develop breathing irregularities, seizures, and motor problems. While there is no cure, early therapy and a new FDA-approved treatment (trofinetide) can improve quality of life significantly.',
  byAge: [
    {
      ageRange: '0-6 months (pre-regression)',
      context:
        'In the first months of life, most babies who will later be diagnosed with Rett syndrome appear to develop normally or nearly normally. Some subtle signs may be present in retrospect — slightly reduced muscle tone (hypotonia), decreased eye contact, or reduced hand use — but these are often not recognized until after regression occurs.',
    },
    {
      ageRange: '6-18 months (early stagnation and regression)',
      context:
        'Development may slow or stagnate. The child may not acquire new skills at the expected rate. Then, often between 12-18 months, regression begins. Parents notice their child stops using their hands purposefully, loses words they had, becomes less engaged, and develops unusual repetitive hand movements. This period is devastating for parents. If your child is losing skills, seek evaluation from a pediatric neurologist.',
    },
    {
      ageRange: '18 months - 3 years (rapid regression phase)',
      context:
        'This is typically the most difficult phase. Hand skills deteriorate further, speech may be lost entirely, and repetitive hand stereotypies become prominent. Breathing irregularities (hyperventilation, breath-holding), sleep disturbances, and irritability may develop. Gait may become unsteady, and some children stop walking. Seizures may begin. Your neurology and genetics team will confirm the diagnosis through MECP2 genetic testing and develop a comprehensive treatment plan.',
    },
    {
      ageRange: '3 years+',
      context:
        'After the regression phase, many children enter a plateau where skills stabilize. Some children regain eye contact and communication ability, particularly through eye-gaze technology. Physical therapy, occupational therapy, and speech therapy (including augmentative communication) are critical. The FDA-approved medication trofinetide (Daybue) may help with some symptoms. People with Rett syndrome can live into middle age and beyond with appropriate care, and many maintain the ability to communicate and engage meaningfully with their families.',
    },
  ],
  whenNormal: [
    'Typical development has natural variation — some babies are slower to reach milestones but continue to progress',
    'Your baby occasionally does repetitive movements but continues to use hands purposefully and is gaining new skills',
    'Your baby had a brief period of stalled development during illness but then resumed progress',
  ],
  whenToMention: [
    'Your baby seems to be losing skills they previously had — particularly hand use and speech',
    'Your baby has developed repetitive hand movements and stopped using their hands to grasp and manipulate toys',
    'Your baby\'s head growth has slowed significantly (deceleration of head circumference)',
    'Your baby has become less socially engaged and makes less eye contact than before',
  ],
  whenToActNow: [
    'Your child is having seizures or episodes of breath-holding followed by cyanosis (turning blue) — seek urgent neurologic evaluation',
    'Your child has lost multiple developmental skills and the regression is progressing — request urgent referral to pediatric neurology',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'noonan-syndrome-baby',
    'digeorge-syndrome-22q11',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Rett Syndrome.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/rett-syndrome',
    },
    {
      org: 'IRSF',
      citation:
        'International Rett Syndrome Foundation. About Rett Syndrome.',
      url: 'https://www.rettsyndrome.org/about-rett-syndrome/',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Rett Syndrome.',
      url: 'https://medlineplus.gov/genetics/condition/rett-syndrome/',
    },
  ],
};
