import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'methylmalonic-acidemia-baby',
  title: 'Methylmalonic Acidemia (MMA) in Babies',
  category: 'medical',
  searchTerms: [
    'methylmalonic acidemia baby',
    'MMA baby symptoms',
    'methylmalonic acidemia newborn screening',
    'methylmalonyl-CoA mutase deficiency',
    'organic acidemia baby',
    'vitamin B12 responsive MMA',
    'methylmalonic acidemia treatment',
    'metabolic acidosis newborn MMA',
    'methylmalonic acidemia diet',
    'methylmalonic acidemia kidney problems',
  ],
  quickAnswer:
    'Methylmalonic acidemia (MMA) is an inherited organic acid disorder in which the body cannot properly process certain amino acids and fats, leading to a buildup of methylmalonic acid. Like propionic acidemia, it typically presents in the first days of life with poor feeding, vomiting, lethargy, and metabolic acidosis. Some forms of MMA respond to vitamin B12 (cobalamin) supplementation, which can significantly improve outcomes. All forms require lifelong dietary management. Kidney disease is a common long-term complication. MMA is detected on newborn screening, and gene therapy research is actively underway.',
  byAge: [
    {
      ageRange: '0-1 week',
      context:
        'Babies with severe MMA often present in the first 24-72 hours of life with feeding difficulty, vomiting, lethargy, and dehydration. Metabolic acidosis develops rapidly, and without treatment, the baby can progress to coma. Lab findings include elevated methylmalonic acid in blood and urine, metabolic acidosis, and often elevated blood ammonia. Emergency treatment involves stopping protein intake, providing IV glucose and fluids, and correcting acidosis. A trial of intramuscular vitamin B12 (hydroxocobalamin) is given to determine if the baby has a B12-responsive form.',
    },
    {
      ageRange: '1-6 months',
      context:
        'After stabilization, the metabolic team determines the specific type of MMA through genetic testing and B12 responsiveness testing. B12-responsive forms generally have a milder course and are managed with regular B12 injections plus moderate protein restriction. Non-responsive forms (mut0 and mut-) require strict dietary protein restriction using specialized metabolic formulas. Carnitine supplementation is standard. Feeding and growth are closely monitored. Metabolic crises remain a risk during any illness.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As with propionic acidemia, introducing solid foods requires careful coordination with the metabolic dietitian. Protein intake must be measured precisely. Most nutrition comes from specialized metabolic formula. Developmental monitoring is important — some babies with MMA develop normally, while others may have developmental delays or learning difficulties, particularly those with the severe non-responsive forms. Renal function should be monitored regularly, as kidney complications can begin early.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Dietary management continues lifelong. Metabolic crises during illness remain the greatest acute risk. Kidney function must be monitored regularly because progressive renal insufficiency is common in mut0 MMA and can eventually require dialysis or kidney transplant. Some children undergo combined liver-kidney transplant to address both the metabolic defect and kidney disease. Movement disorders, particularly affecting gait and coordination, may develop due to basal ganglia injury. Pancreatitis is an uncommon but recognized complication.',
    },
    {
      ageRange: 'Long-term considerations',
      context:
        'Long-term outcomes for MMA have improved significantly with early detection through newborn screening and better metabolic management. Kidney disease remains the most significant long-term complication for severe forms. Liver transplant can reduce metabolic crises but does not fully correct the underlying defect, and kidney disease may still progress. Gene therapy and mRNA therapy approaches are in active clinical trials and represent promising future treatments. Regular monitoring by metabolic specialists, nephrologists, and neurologists is essential.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening came back normal for MMA',
    'An initial positive screen was followed by confirmatory testing that was normal — mildly elevated methylmalonic acid can sometimes be a false positive or a benign variant',
    'Your baby has a B12-responsive form of MMA and is stable on B12 supplementation with normal growth and development',
    'Your child with MMA is on dietary treatment and metabolic markers and kidney function are in the target range',
  ],
  whenToMention: [
    'Your baby received an abnormal MMA result on newborn screening — follow up promptly for confirmatory testing and specialist evaluation',
    'Your baby with MMA has metabolic markers consistently outside the target range or declining kidney function',
    'Your child with MMA has new difficulty with coordination, walking, or motor skills that may indicate basal ganglia involvement',
    'You have questions about liver or kidney transplant options for your child with severe MMA',
  ],
  whenToActNow: [
    'Your newborn is lethargic, feeding poorly, vomiting, and has rapid breathing — a metabolic crisis needs emergency evaluation immediately',
    'Your baby with known MMA is ill and unable to eat or keep food down for more than a few hours — go to the emergency room with your metabolic emergency letter for IV glucose',
    'Your child with MMA becomes increasingly lethargic, develops seizures, or shows a significant change in alertness or behavior — call 911 and inform them your child has a metabolic disorder',
    'Your child with MMA develops severe abdominal pain, persistent vomiting unrelated to illness, or signs of kidney failure (decreased urination, swelling, fatigue)',
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
        'National Library of Medicine. Methylmalonic Acidemia. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/methylmalonic-acidemia/',
    },
    {
      org: 'HRSA',
      citation:
        'Health Resources and Services Administration. Methylmalonic Acidemia Fact Sheet. Baby\'s First Test, 2023.',
      url: 'https://www.babysfirsttest.org/newborn-screening/conditions/methylmalonic-acidemia',
    },
    {
      org: 'ACMG',
      citation:
        'American College of Medical Genetics. ACT Sheet: Elevated C3 Acylcarnitine. ACMG, 2023.',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/ACT_Sheets_and_Algorithms.aspx',
    },
  ],
};
