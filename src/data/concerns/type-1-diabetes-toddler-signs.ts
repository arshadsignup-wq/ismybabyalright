import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'type-1-diabetes-toddler-signs',
  title: 'Type 1 Diabetes Signs in My Toddler',
  category: 'medical',
  searchTerms: [
    'type 1 diabetes toddler signs',
    'toddler drinking too much water',
    'toddler peeing a lot',
    'toddler losing weight no reason',
    'toddler excessive thirst',
    'DKA toddler symptoms',
    'diabetes in babies signs',
    'toddler wet diapers constantly',
    'child fruity breath',
    'toddler always thirsty and tired',
  ],
  quickAnswer:
    'Type 1 diabetes in toddlers can present with excessive thirst (polydipsia), frequent urination (polyuria), unexplained weight loss, increased appetite, irritability, and fatigue. Because toddlers are still in diapers, the increased urination may be noticed as unusually heavy or more frequent wet diapers. Type 1 diabetes requires urgent medical attention because it can rapidly progress to diabetic ketoacidosis (DKA), a life-threatening emergency.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Type 1 diabetes is rare in infants under 12 months, but neonatal diabetes (a different condition) can occur in the first 6 months of life. Signs in infants include poor weight gain or weight loss, excessive wet diapers, persistent dehydration despite adequate feeding, and irritability. Neonatal diabetes may be transient or permanent and requires genetic testing. If your infant seems unusually thirsty, is losing weight, or has persistently heavy diapers, contact your pediatrician promptly.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is the age when type 1 diabetes is most commonly first noticed in very young children. Classic signs include dramatically increased thirst (the child may constantly ask for drinks or seem insatiable), significantly heavier or more frequent wet diapers, unexplained weight loss even with a normal or increased appetite, and new-onset lethargy or irritability. Because toddlers cannot always communicate their symptoms, parents may first notice the increase in wet diapers or a child who was previously potty-trained having accidents. Diagnosis is made with a simple blood glucose test.',
    },
    {
      ageRange: '3-5 years',
      context:
        'In preschool-age children, the classic triad of excessive thirst, frequent urination, and weight loss becomes more apparent. Children may wake at night to drink water or urinate, have frequent accidents after being potty-trained, or seem unusually tired. Bedwetting in a previously dry child is a common early sign. Some children develop blurred vision from high blood sugar. A concerning sign is fruity-smelling breath, which indicates ketone buildup and possible DKA, a medical emergency.',
    },
    {
      ageRange: 'At diagnosis / DKA risk',
      context:
        'Up to 30-40% of children are in diabetic ketoacidosis (DKA) at the time of type 1 diabetes diagnosis, with younger children at even higher risk because symptoms may be attributed to other causes. DKA symptoms include vomiting, abdominal pain, rapid or deep breathing (Kussmaul breathing), fruity-smelling breath, confusion, drowsiness, and eventually loss of consciousness. DKA is a medical emergency requiring immediate hospital treatment with IV fluids and insulin. If you suspect DKA, go to the emergency room immediately.',
    },
  ],
  whenNormal: [
    'Your toddler drinks more water during hot weather, after exercise, or during illness with fever',
    'Temporary increase in urination after drinking extra fluids that resolves when fluid intake normalizes',
    'Your child is gaining weight normally and has normal energy levels',
    'Occasional wet diapers are heavier than usual but your child is otherwise well',
  ],
  whenToMention: [
    'Your toddler seems significantly more thirsty than usual over several days and this is not explained by weather or activity',
    'You notice your toddler has consistently heavier or more frequent wet diapers than their baseline',
    'Your child seems to be losing weight or has stopped gaining weight despite eating well',
    'A previously potty-trained child begins having frequent daytime or nighttime accidents',
  ],
  whenToActNow: [
    'Your child has excessive thirst, frequent urination, and is losing weight or becoming lethargic, which requires same-day medical evaluation including a blood glucose test',
    'Your child has fruity-smelling breath, vomiting, rapid or deep breathing, abdominal pain, or is becoming confused or difficult to arouse, as these are signs of diabetic ketoacidosis (DKA) requiring emergency room care immediately',
    'Your child suddenly becomes limp, unresponsive, or has seizures along with signs of dehydration',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['diabetes-insipidus-baby', 'hyperinsulinism-baby', 'congenital-hypothyroidism'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Type 1 Diabetes: A Guide for Families. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chronic/Pages/Diabetes.aspx',
    },
    {
      org: 'ADA',
      citation:
        'American Diabetes Association. Standards of Care in Diabetes - Children and Adolescents. Diabetes Care. 2024;47(Supplement_1):S258-S281.',
      url: 'https://diabetesjournals.org/care/article/47/Supplement_1/S258/153955',
    },
    {
      org: 'ISPAD',
      citation:
        'Rewers MJ, Pillay K, de Beaufort C, et al. ISPAD Clinical Practice Consensus Guidelines 2022: Assessment and Management of Diabetic Ketoacidosis in Children and Adolescents. Pediatric Diabetes. 2022;23(7):707-723.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/36250644/',
    },
  ],
};
