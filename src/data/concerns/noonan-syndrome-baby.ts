import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'noonan-syndrome-baby',
  title: 'My Baby Was Diagnosed with Noonan Syndrome',
  category: 'medical',
  searchTerms: [
    'Noonan syndrome baby',
    'Noonan syndrome signs infant',
    'Noonan syndrome diagnosis',
    'Noonan syndrome heart defect',
    'Noonan syndrome prognosis',
    'Noonan syndrome development',
    'Noonan syndrome features newborn',
    'Noonan syndrome feeding problems',
    'Noonan syndrome growth',
    'RASopathy baby',
  ],
  quickAnswer:
    'Noonan syndrome is a genetic condition occurring in about 1 in 1,000-2,500 births, caused by mutations in genes of the RAS-MAPK pathway. It affects multiple body systems and is characterized by distinctive facial features, short stature, heart defects (most commonly pulmonary valve stenosis), and varying degrees of developmental delay. While Noonan syndrome is a lifelong condition, the wide range of severity means that many people with Noonan syndrome lead independent, fulfilling lives. Early intervention and comprehensive medical care significantly improve outcomes.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'In infancy, common features include distinctive facial appearance (widely-spaced eyes, low-set ears, deep philtrum), excess nuchal skin or cystic hygroma history, feeding difficulties (poor suck, reflux), and heart defects. A cardiac evaluation (echocardiogram) is one of the first priorities. Feeding challenges are common and may require occupational therapy or specialized nipples. Genetic testing confirms the diagnosis. About 50-80% of cases involve the PTPN11 gene.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Motor development may be delayed — sitting and crawling often come later than expected. Early intervention services (physical therapy, occupational therapy, feeding therapy) should begin as soon as developmental concerns are identified. Growth is typically below average, and your pediatrician will use Noonan syndrome-specific growth charts. Hearing and vision should be checked, as both can be affected.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Language development may be delayed, and speech therapy is often beneficial. Cognitive ability varies widely — some children are in the normal range, while others have mild to moderate intellectual disability. Behavioral concerns like attention difficulties and social challenges may emerge. Your child\'s developmental pediatrician can help coordinate therapies. Bleeding tendencies (due to clotting factor deficiencies) should be evaluated before any surgical procedures.',
    },
    {
      ageRange: '3 years+',
      context:
        'With appropriate support, many children with Noonan syndrome thrive in school. Short stature may be addressed with growth hormone therapy, which is FDA-approved for Noonan syndrome. Puberty may be delayed. Ongoing cardiac monitoring is important, as some heart issues can progress or new ones can develop. A multidisciplinary approach — cardiology, endocrinology, genetics, developmental pediatrics — provides the best outcomes.',
    },
  ],
  whenNormal: [
    'Your baby with Noonan syndrome is receiving appropriate cardiac monitoring and developmental support',
    'Your baby is making progress with feeding and developmental milestones, even if at a slower pace',
    'Genetic testing has confirmed the diagnosis and you have a care team in place',
  ],
  whenToMention: [
    'Your baby with Noonan syndrome is having significant feeding difficulties or poor weight gain',
    'You notice your baby bruises very easily or bleeds for a long time from minor injuries',
    'Developmental milestones are significantly delayed beyond what your care team expected',
    'You have concerns about your baby\'s heart or breathing',
  ],
  whenToActNow: [
    'Your baby has difficulty breathing, turns blue, or seems to tire excessively during feeds — this may indicate a cardiac issue requiring urgent evaluation',
    'Your baby has unusual or excessive bleeding that does not stop — seek emergency care',
    'Your baby has a seizure or sudden change in alertness — call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'digeorge-syndrome-22q11',
    'beckwith-wiedemann-syndrome',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Noonan Syndrome.',
      url: 'https://medlineplus.gov/genetics/condition/noonan-syndrome/',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Noonan Syndrome.',
      url: 'https://rarediseases.org/rare-diseases/noonan-syndrome/',
    },
    {
      org: 'Boston Children\'s',
      citation:
        'Boston Children\'s Hospital. Noonan Syndrome.',
      url: 'https://www.childrenshospital.org/conditions/noonan-syndrome',
    },
  ],
};
