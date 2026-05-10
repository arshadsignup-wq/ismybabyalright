import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'marfan-syndrome-baby',
  title: 'Marfan Syndrome in Babies',
  category: 'medical',
  searchTerms: [
    'marfan syndrome baby',
    'baby long fingers and toes',
    'marfan syndrome infant signs',
    'neonatal marfan syndrome',
    'baby very flexible joints tall thin',
    'marfan syndrome heart baby',
    'baby long limbs loose joints',
    'connective tissue disorder baby',
  ],
  quickAnswer:
    'Marfan syndrome is an inherited connective tissue disorder caused by mutations in the FBN1 gene, affecting about 1 in 5,000 people. It affects the heart, blood vessels, bones, joints, and eyes. While the classic form may present subtly in infancy, neonatal Marfan syndrome is a severe form that manifests at birth. With regular cardiac monitoring and appropriate treatment, most individuals with Marfan syndrome live full lives.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Neonatal Marfan syndrome — the most severe form — presents at birth with long limbs and fingers (arachnodactyly), loose skin, joint hypermobility, and potentially serious heart valve problems (mitral and tricuspid valve regurgitation). This form is rare but can be life-threatening. More commonly, classic Marfan syndrome is inherited from a parent and may show minimal signs in infancy, such as a long, thin body habitus and flexible joints.',
    },
    {
      ageRange: '3-6 months',
      context:
        'In classic Marfan syndrome, babies may appear longer and thinner than average with proportionally long fingers and toes. Joint hypermobility (very flexible joints) may be noticeable. Echocardiograms are performed to evaluate the aortic root and heart valves. If a parent has Marfan syndrome, genetic testing and cardiac evaluation should be done early.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Developmental milestones are typically on track unless there is a severe cardiac issue. Growth may be above average in length. Eye examinations should be performed, as lens subluxation (dislocated lens) can occur in childhood and may be detectable early. Regular cardiac monitoring continues to track the aorta and valve function.',
    },
    {
      ageRange: '12 months+',
      context:
        'As children grow, Marfan features become more apparent: tall stature, long limbs, scoliosis, and chest wall deformities (pectus excavatum or carinatum). Cardiac monitoring remains the most critical aspect of care, as aortic root dilation and valve problems can progress. Medication (beta-blockers or ARBs) may be started to slow aortic dilation. With proper management, children with Marfan syndrome can participate in many activities, though high-intensity contact sports are typically avoided.',
    },
  ],
  whenNormal: [
    'Your baby has a family history of Marfan syndrome but cardiac and eye evaluations are normal so far',
    'Your baby is simply tall and thin with flexible joints and no other concerning features',
    'Your baby with Marfan syndrome has a stable aortic root measurement and well-controlled condition',
    'Your baby is meeting all developmental milestones on schedule',
  ],
  whenToMention: [
    'Your baby has unusually long fingers and limbs, very flexible joints, and a family history of Marfan syndrome or aortic problems',
    'Your baby was born with features suggestive of neonatal Marfan syndrome (very long fingers, loose skin, heart murmur)',
    'Your child with Marfan syndrome develops new symptoms like chest pain or vision changes',
  ],
  whenToActNow: [
    'Your baby with neonatal Marfan syndrome shows signs of heart failure — rapid breathing, poor feeding, blue color, or excessive sweating',
    'Your child with Marfan syndrome has sudden chest pain, back pain, or fainting — this could indicate an aortic emergency',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Marfan Syndrome. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/marfan-syndrome/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Marfan Syndrome — Symptoms and Causes. Mayo Foundation for Medical Education and Research, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/marfan-syndrome/symptoms-causes/syc-20350782',
    },
  ],
};
