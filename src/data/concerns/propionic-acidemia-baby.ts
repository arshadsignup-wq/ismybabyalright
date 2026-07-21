import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'propionic-acidemia-baby',
  title: 'Propionic Acidemia in Babies',
  category: 'medical',
  searchTerms: [
    'propionic acidemia baby',
    'propionic acidemia symptoms infant',
    'propionic acidemia newborn screening',
    'organic acid disorder baby',
    'propionyl-CoA carboxylase deficiency',
    'metabolic acidosis newborn',
    'baby poor feeding vomiting lethargy',
    'propionic acidemia treatment',
    'propionic acidemia diet baby',
    'propionic acidemia metabolic crisis',
  ],
  quickAnswer:
    'Propionic acidemia is a rare inherited organic acid disorder in which the body cannot properly break down certain amino acids (isoleucine, valine, methionine, threonine) and odd-chain fats. Without treatment, toxic byproducts accumulate and cause metabolic acidosis, which can be life-threatening. Symptoms typically appear in the first days of life with poor feeding, vomiting, and lethargy that can rapidly progress to coma. It is detected on newborn screening. Treatment includes lifelong dietary protein restriction, carnitine supplementation, and careful management during illness. Liver transplant may be considered for severe cases.',
  byAge: [
    {
      ageRange: '0-1 week',
      context:
        'Babies with severe propionic acidemia often become symptomatic within the first 24-72 hours of life, sometimes before newborn screening results are available. Signs include poor feeding, vomiting, increasing lethargy, and rapid breathing from metabolic acidosis. Without rapid treatment, this can progress to seizures, coma, and death. Lab findings include elevated blood ammonia, metabolic acidosis with a large anion gap, and elevated propionylcarnitine (C3) on acylcarnitine profile. Emergency treatment includes stopping protein intake, providing IV glucose and calories, and correcting the acidosis.',
    },
    {
      ageRange: '1-6 months',
      context:
        'After initial stabilization, babies are placed on a carefully calculated protein-restricted diet using special metabolic formulas that exclude or limit the amino acids the body cannot process. Carnitine supplementation is standard to help the body clear toxic metabolites. Growth and development are closely monitored — many babies with propionic acidemia grow normally on the restricted diet. Blood ammonia and amino acid levels are monitored frequently. Even minor illnesses can trigger a metabolic crisis during this vulnerable period, so parents must have a sick-day emergency plan.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Introduction of solid foods requires close coordination with the metabolic dietitian. Natural protein intake must be carefully measured and limited. Most calories come from the specialized metabolic formula. Developmental monitoring is important because some children with propionic acidemia may experience learning difficulties or developmental delays, even with good metabolic control. Regular blood work monitors metabolic markers and nutritional status. Cardiac monitoring (echocardiogram) is recommended because cardiomyopathy can be a complication.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Lifelong dietary management continues. Children eat a low-protein diet with medical formula providing the bulk of their calories and essential amino acids. Metabolic crises remain the greatest risk, and they can occur during any illness, surgery, or prolonged fasting. Some children develop movement disorders, feeding difficulties, or growth challenges. Pancreatitis is an uncommon but recognized complication. Liver transplant may be considered for children with frequent metabolic decompensations — transplant does not cure the disease but significantly reduces the frequency and severity of crises.',
    },
    {
      ageRange: 'Long-term considerations',
      context:
        'Long-term complications can include cardiomyopathy, optic nerve atrophy, hearing loss, renal dysfunction, and basal ganglia injury (which may cause movement problems). Regular monitoring by a multidisciplinary team including metabolic specialists, cardiologists, neurologists, dietitians, and developmental specialists is essential. Despite these challenges, many individuals with propionic acidemia who are diagnosed early and well-managed can participate in school, activities, and community life.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening came back normal for propionic acidemia',
    'An initial positive screen was followed by confirmatory testing that was normal — false positives occur',
    'Your baby with propionic acidemia is on dietary treatment and metabolic markers are in the target range',
    'Your child with propionic acidemia is growing well and meeting developmental milestones on the managed diet',
  ],
  whenToMention: [
    'Your baby received an abnormal result for propionic acidemia on newborn screening — follow up promptly for confirmatory testing',
    'Your baby with propionic acidemia has metabolic markers that are consistently outside the target range despite following the diet',
    'Your child with propionic acidemia is having difficulty gaining weight, has new feeding difficulties, or is struggling with the dietary restrictions',
  ],
  whenToActNow: [
    'Your newborn is lethargic, feeding poorly, vomiting, and breathing rapidly — this combination in the first days of life could indicate a metabolic crisis and needs immediate emergency evaluation',
    'Your baby with known propionic acidemia is ill and cannot keep food or formula down for more than a few hours — go to the emergency room with your metabolic emergency letter',
    'Your child with propionic acidemia becomes increasingly lethargic, confused, or develops unusual movements or seizures — call 911 and inform them your child has a metabolic disorder',
    'Your child with propionic acidemia develops severe abdominal pain (may indicate pancreatitis) or signs of heart failure (rapid breathing, swelling, poor feeding)',
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
        'National Library of Medicine. Propionic Acidemia. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/propionic-acidemia/',
    },
    {
      org: 'HRSA',
      citation:
        'Health Resources and Services Administration. Propionic Acidemia Fact Sheet. Baby\'s First Test, 2023.',
      url: 'https://www.babysfirsttest.org/newborn-screening/conditions/propionic-acidemia',
    },
    {
      org: 'ACMG',
      citation:
        'American College of Medical Genetics. ACT Sheet: Elevated C3 Acylcarnitine. ACMG, 2023.',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/ACT_Sheets_and_Algorithms.aspx',
    },
  ],
};
