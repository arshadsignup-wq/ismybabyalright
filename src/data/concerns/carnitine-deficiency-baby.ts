import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'carnitine-deficiency-baby',
  title: 'Carnitine Deficiency in Babies',
  category: 'medical',
  searchTerms: [
    'carnitine deficiency baby',
    'carnitine deficiency infant symptoms',
    'baby muscle weakness low carnitine',
    'baby hypoglycemia carnitine',
    'carnitine transporter deficiency newborn',
    'primary carnitine deficiency baby',
    'baby heart problems carnitine',
    'carnitine supplementation infant',
    'baby fatty acid oxidation disorder',
    'newborn screening carnitine low',
  ],
  quickAnswer:
    'Carnitine deficiency occurs when the body cannot properly transport long-chain fatty acids into mitochondria for energy production. Primary carnitine deficiency (carnitine transporter defect) affects about 1 in 40,000 to 120,000 newborns and is caused by mutations in the SLC22A5 gene. It can cause muscle weakness, heart problems (cardiomyopathy), and life-threatening hypoglycemia, especially during fasting or illness. With early detection through newborn screening and lifelong carnitine supplementation, most children develop normally.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Primary carnitine deficiency is often detected through newborn screening, which measures free carnitine levels in dried blood spots. Affected newborns may appear healthy at birth because they have been receiving carnitine from the mother during pregnancy. Some infants present with hypoglycemia, lethargy, or poor feeding in the newborn period, particularly during periods of fasting or illness. If newborn screening flags low carnitine, confirmatory testing with plasma carnitine levels and genetic testing is performed promptly. Carnitine supplementation is typically started immediately upon diagnosis.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Without treatment, carnitine levels gradually decrease as maternal carnitine stores are depleted. Symptoms can include poor feeding, failure to thrive, muscle weakness (hypotonia), and lethargy. Some infants develop cardiomyopathy (enlarged, weakened heart), which can progress rapidly. Liver dysfunction may also occur. With early carnitine supplementation (typically oral L-carnitine), these complications can be prevented or reversed. Echocardiography is used to monitor heart function.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies on carnitine supplementation typically develop normally. The primary risk during this period is metabolic decompensation during illness, when energy demands increase and the baby may not eat well. Parents should have a sick-day management plan from their metabolic specialist. Signs of metabolic crisis include excessive sleepiness, vomiting, rapid breathing, and refusal to feed. These require urgent medical attention. Regular monitoring of carnitine levels and heart function continues.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Children with well-managed primary carnitine deficiency on consistent L-carnitine supplementation generally achieve normal developmental milestones. The medication is lifelong but well tolerated. Sick-day protocols remain important, as toddlers are prone to viral illnesses with reduced oral intake. Fasting should be avoided. Some children may need dose adjustments as they grow. Cardiac function typically normalizes with treatment, and long-term prognosis is excellent with adherence to supplementation.',
    },
  ],
  whenNormal: [
    'Your baby was identified through newborn screening, is on carnitine supplementation, and is developing normally',
    'Your baby\'s carnitine levels are within the therapeutic range on regular follow-up blood work',
    'Your baby\'s echocardiogram shows normal heart function on treatment',
    'Your baby is feeding well, gaining weight appropriately, and meeting developmental milestones',
  ],
  whenToMention: [
    'Your baby\'s newborn screening showed low free carnitine and you are awaiting confirmatory testing',
    'Your baby on carnitine supplementation has persistent muscle weakness or poor weight gain',
    'Your baby with carnitine deficiency is having difficulty tolerating the oral supplement',
    'You are planning travel or changes in routine and need guidance on sick-day management',
  ],
  whenToActNow: [
    'Your baby is excessively sleepy, vomiting, refusing to feed, or having rapid breathing during an illness — this may indicate metabolic crisis requiring emergency treatment',
    'Your baby has signs of heart failure — rapid breathing, sweating with feeding, poor color, or swelling — seek emergency care immediately',
    'Your baby has had a seizure or episode of unresponsiveness, which may indicate severe hypoglycemia',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['newborn-screening-abnormal-results', 'cardiomyopathy-baby'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Systemic Primary Carnitine Deficiency. GeneReviews, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK84551/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Primary Carnitine Deficiency. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/primary-carnitine-deficiency/',
    },
    {
      org: 'ACMG',
      citation:
        'American College of Medical Genetics and Genomics. Newborn Screening ACT Sheet: Decreased Free Carnitine. ACMG, 2023.',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/ACT_Sheets_and_Algorithms.aspx',
    },
  ],
};
