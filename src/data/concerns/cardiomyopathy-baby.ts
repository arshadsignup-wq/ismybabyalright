import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cardiomyopathy-baby',
  title: 'Cardiomyopathy in Babies',
  category: 'medical',
  searchTerms: [
    'cardiomyopathy baby',
    'cardiomyopathy infant',
    'dilated cardiomyopathy baby',
    'hypertrophic cardiomyopathy baby',
    'baby weak heart muscle',
    'baby enlarged heart',
    'heart failure infant',
    'cardiomyopathy toddler',
    'baby heart not pumping well',
    'inherited heart disease baby',
  ],
  quickAnswer:
    'Cardiomyopathy is a disease of the heart muscle that affects how well the heart can pump blood. In babies, the main types are dilated cardiomyopathy (the heart becomes enlarged and weakened), hypertrophic cardiomyopathy (the heart muscle becomes abnormally thick), and restrictive cardiomyopathy (the heart muscle becomes stiff). Signs in infants include rapid breathing, poor feeding, excessive sweating, poor weight gain, and a fast heartbeat. Cardiomyopathy in babies can be inherited, caused by infection, or have no identifiable cause. Early diagnosis and treatment by a pediatric cardiologist are essential.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Cardiomyopathy in newborns may be detected prenatally on ultrasound or shortly after birth. Hypertrophic cardiomyopathy is more common in infants of diabetic mothers. Dilated cardiomyopathy may present with signs of heart failure: rapid breathing, poor feeding, failure to gain weight, and excessive sweating. Some metabolic disorders can cause cardiomyopathy in the newborn period. Early diagnosis through echocardiography is critical, and genetic and metabolic testing may be recommended.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Infants with cardiomyopathy may show progressive signs of heart failure, including tiring quickly during feeds, sweating during feeding, rapid breathing, and poor weight gain. The liver may be enlarged. Some infants develop cardiomyopathy after a viral infection (post-myocarditis). Echocardiography is the primary diagnostic tool. Treatment may include medications to support heart function (diuretics, ACE inhibitors, beta-blockers) and close monitoring by a pediatric cardiologist.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with cardiomyopathy may show decreased activity, tiring easily, poor appetite, abdominal discomfort (from liver congestion), and breathing difficulty. They may want to be carried more and become short of breath with walking or playing. Hypertrophic cardiomyopathy may be first detected when a murmur is heard at a well-child visit. Some forms of cardiomyopathy are progressive, while others stabilize or improve with treatment.',
    },
    {
      ageRange: '3+ years',
      context:
        'Older children with cardiomyopathy may experience exercise intolerance, chest pain, dizziness, or fainting. Hypertrophic cardiomyopathy carries a risk of sudden cardiac arrest during vigorous exercise, and affected children typically need activity modifications. Dilated cardiomyopathy may require ongoing medication. In severe cases, children may be evaluated for heart transplant. Family screening with echocardiography and possibly genetic testing is recommended when a child is diagnosed.',
    },
    {
      ageRange: 'Family screening',
      context:
        'Because many forms of cardiomyopathy are inherited, first-degree relatives (parents, siblings) of a child diagnosed with cardiomyopathy should be screened with echocardiography and ECG. Genetic counseling may be offered. Screening allows early detection and treatment in other family members who may be affected.',
    },
  ],
  whenNormal: [
    'Your baby feeds well, gains weight appropriately, and breathes comfortably at rest',
    'Your child\'s echocardiogram shows normal heart size and function',
    'A pediatric cardiologist has evaluated your child and found no signs of cardiomyopathy',
    'Your child is active and keeps up with peers without unusual fatigue or breathing difficulty',
  ],
  whenToMention: [
    'Your baby seems to tire easily during feeds and takes longer than expected to finish a bottle or breastfeed',
    'There is a family history of cardiomyopathy, heart failure, or unexplained sudden death at a young age',
    'Your child seems to have less energy than peers or tires more easily during physical activity',
    'Your baby\'s weight gain has slowed significantly without an obvious cause',
  ],
  whenToActNow: [
    'Your baby has rapid or labored breathing, poor feeding, excessive sweating, and appears pale or gray -- these signs suggest heart failure and require emergency evaluation',
    'Your child faints during exercise or physical activity -- call 911 and have them evaluated for cardiomyopathy or other cardiac conditions',
    'Your baby or child has a sudden episode of unresponsiveness, chest pain with difficulty breathing, or an irregular rapid heartbeat',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'congenital-heart-defect-signs',
    'baby-failure-to-thrive-signs',
    'baby-heart-murmur',
  ],
  sources: [
    {
      org: 'AHA',
      citation:
        'American Heart Association. Cardiomyopathy in Children. AHA, 2024.',
      url: 'https://www.heart.org/en/health-topics/cardiomyopathy/about-cardiomyopathy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cardiomyopathy. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Cardiomyopathy.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Cardiomyopathy: Types, Symptoms, and Treatment.',
      url: 'https://www.nhlbi.nih.gov/health/cardiomyopathy',
    },
  ],
};
