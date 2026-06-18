import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vacterl-association',
  title: 'My Baby Was Diagnosed with VACTERL Association',
  category: 'medical',
  searchTerms: [
    'VACTERL association baby',
    'VATER association baby',
    'VACTERL syndrome',
    'multiple birth defects baby',
    'tracheoesophageal fistula VACTERL',
    'imperforate anus VACTERL',
    'VACTERL vertebral anomaly',
    'VACTERL renal anomaly',
    'VACTERL limb defect',
    'VACTERL prognosis baby',
  ],
  quickAnswer:
    'VACTERL association is a condition where a baby is born with a combination of birth defects involving multiple organ systems. The name is an acronym: Vertebral defects, Anal atresia, Cardiac defects, Tracheoesophageal fistula, Renal anomalies, and Limb abnormalities. A diagnosis is typically made when a baby has at least 3 of these features. The cause is unknown in most cases and is usually not inherited. While the initial medical needs can be significant, many VACTERL-associated conditions are surgically correctable, and many children go on to lead healthy, active lives.',
  byAge: [
    {
      ageRange: '0-1 month (diagnosis and stabilization)',
      context:
        'VACTERL-associated conditions are often identified at birth or shortly after. Some defects (like tracheoesophageal fistula or imperforate anus) require surgical repair in the first days of life. Cardiac defects are evaluated by echocardiogram. Renal ultrasound checks for kidney anomalies. Spinal X-rays evaluate vertebral defects. The initial period often involves multiple medical teams and can be overwhelming. Take in as much information as you can, and know that it is okay to ask questions multiple times.',
    },
    {
      ageRange: '1-6 months',
      context:
        'After initial surgeries and stabilization, the focus shifts to growth, feeding, and recovery. Babies who had esophageal repair may have ongoing feeding challenges including strictures, reflux, and swallowing difficulties. Those with anorectal malformations may need additional procedures and a bowel management program. Cardiac defects are managed per their specific type. Physical and occupational therapy may begin for limb differences.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Developmental progress is monitored closely. Many babies with VACTERL association have normal cognitive development. Physical development may be affected by specific defects (such as limb or spinal differences). Nutritional support and monitoring are important, especially for babies who had GI surgeries. Additional planned surgeries may occur during this period.',
    },
    {
      ageRange: '1 year+',
      context:
        'Long-term outlook depends on the specific combination and severity of defects. Many children with VACTERL association attend mainstream school and participate in typical childhood activities. Bowel and bladder management may require ongoing attention for those with anorectal or renal anomalies. Spinal monitoring continues through growth. Coordinated care between multiple specialists is important but becomes less intensive over time.',
    },
  ],
  whenNormal: [
    'Your baby has VACTERL-associated conditions that have been surgically repaired and is recovering well',
    'Your baby is growing and developing on track despite having multiple conditions managed by specialists',
    'Your child has adapted well and is achieving milestones, even if some came later',
  ],
  whenToMention: [
    'Your baby is having difficulty feeding, choking, or has recurrent pneumonia after esophageal repair',
    'Bowel or bladder function seems abnormal or your child is having ongoing continence issues',
    'You notice changes in your child\'s posture, back shape, or limb use',
    'Your child seems to be falling behind in development',
  ],
  whenToActNow: [
    'Your baby suddenly cannot swallow, drools excessively, or chokes on feeds — this may indicate an esophageal stricture and needs urgent evaluation',
    'Your baby shows signs of bowel obstruction — bilious vomiting, abdominal distension, no stools — seek emergency care',
    'Your baby shows signs of cardiac distress — blue color, rapid breathing, excessive sweating — call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'tracheoesophageal-fistula',
    'atrial-septal-defect-baby',
    'charge-syndrome',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'MedlinePlus. VACTERL Association.',
      url: 'https://medlineplus.gov/genetics/condition/vacterl-association/',
    },
    {
      org: 'CHOP',
      citation:
        'Children\'s Hospital of Philadelphia. VACTERL Association.',
      url: 'https://www.chop.edu/conditions-diseases/vacterl-association',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. VACTERL Association.',
      url: 'https://rarediseases.org/rare-diseases/vacterl-association/',
    },
  ],
};
