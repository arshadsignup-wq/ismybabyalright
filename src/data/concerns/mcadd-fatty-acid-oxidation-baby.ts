import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'mcadd-fatty-acid-oxidation-baby',
  title: 'MCADD (Medium-Chain Acyl-CoA Dehydrogenase Deficiency) in Babies',
  category: 'medical',
  searchTerms: [
    'MCADD baby',
    'medium chain acyl-CoA dehydrogenase deficiency',
    'MCAD deficiency newborn screening',
    'fatty acid oxidation disorder baby',
    'baby hypoglycemia fasting',
    'MCADD symptoms infant',
    'MCADD treatment baby',
    'baby cannot fast safely',
    'MCADD metabolic crisis',
    'newborn screening fatty acid disorder',
  ],
  quickAnswer:
    'MCADD (medium-chain acyl-CoA dehydrogenase deficiency) is the most common fatty acid oxidation disorder, affecting approximately 1 in 15,000 to 20,000 births. Babies with MCADD cannot properly break down medium-chain fats for energy during periods of fasting or illness. This can lead to dangerously low blood sugar (hypoglycemia), lethargy, seizures, and liver failure. MCADD is detected through newborn screening, and with proper management — primarily avoiding prolonged fasting — children with MCADD can live completely healthy lives.',
  byAge: [
    {
      ageRange: '0-1 week',
      context:
        'Newborns with MCADD are at immediate risk because they have limited energy stores and must eat frequently. Before newborn screening results are available, undiagnosed babies can develop a metabolic crisis if they go too long without feeding. This is why it is important for all newborns to feed every 2-3 hours in the first days of life. If newborn screening detects MCADD, your baby\'s medical team will counsel you on safe fasting intervals and create an emergency plan.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Babies diagnosed with MCADD through newborn screening should not go more than 4 hours without feeding. Breastfeeding and formula feeding are both safe. No special formula or dietary changes are needed — the key is preventing prolonged fasting. During illness, even minor ones like colds with decreased appetite, extra vigilance is required to ensure adequate calorie intake. Your metabolic team will provide a sick-day emergency letter to carry at all times and may recommend a cornstarch-based supplement for emergency use.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby begins eating solid foods, the risk of metabolic crisis during normal daily life decreases because meals and snacks are more frequent and energy reserves improve. However, illness remains the most dangerous time — vomiting, diarrhea, or fever that reduces food intake can trigger a crisis within hours. Safe fasting intervals gradually increase as your baby grows (up to about 8 hours by age 1), but your metabolic team will provide specific guidance. Always have your emergency plan ready.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with MCADD can eat a normal diet with no protein or fat restriction. The main management principle continues to be avoiding prolonged fasting — safe intervals extend to about 10-12 hours by age 2-3, but during illness, fasting tolerance drops significantly. Many families find it helpful to give a bedtime snack with complex carbohydrates. If your toddler is vomiting and cannot keep food down for more than a few hours, go to the emergency room for IV glucose — do not wait to see if things improve.',
    },
    {
      ageRange: 'Older children and adults',
      context:
        'With ongoing awareness of fasting limits and proper sick-day management, children and adults with MCADD lead normal, healthy lives. Most learn to self-manage by recognizing early signs of low blood sugar (irritability, shakiness, pallor) and eating promptly. Exercise management may be discussed, as prolonged intense exercise can also deplete energy stores. MCADD is a lifelong condition but does not limit life expectancy when properly managed.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening came back normal for MCADD',
    'Your baby with MCADD is feeding well, growing normally, and has had no metabolic crises',
    'An initial positive screen was followed by confirmatory testing that showed the baby does not have MCADD — some variants detected on screening are benign',
    'Your child with MCADD is eating regularly, following the fasting guidelines, and has an emergency plan in place',
  ],
  whenToMention: [
    'Your baby received an abnormal MCADD result on newborn screening — follow up for confirmatory testing and metabolic specialist referral',
    'Your baby with MCADD is a picky eater or frequently refuses to eat, making it hard to meet fasting guidelines',
    'You are unsure about the safe fasting duration for your child\'s age or how to manage during illness',
  ],
  whenToActNow: [
    'Your baby with MCADD is ill and has not been able to eat for more than 4 hours (infants) or 6-8 hours (older babies) — go to the emergency room for IV glucose with your metabolic emergency letter',
    'Your baby with MCADD becomes lethargic, unusually sleepy, difficult to wake, or has seizures — call 911 and tell them your child has a metabolic disorder',
    'Your baby with MCADD is vomiting and cannot keep any food or fluids down — do not wait for the next scheduled feeding, seek emergency care immediately',
    'An undiagnosed newborn becomes extremely lethargic, is difficult to wake for feedings, or has seizures in the first days of life before newborn screening results return',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'newborn-screening-abnormal-results',
    'newborn-blood-sugar-low',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Medium-Chain Acyl-CoA Dehydrogenase Deficiency. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/medium-chain-acyl-coa-dehydrogenase-deficiency/',
    },
    {
      org: 'HRSA',
      citation:
        'Health Resources and Services Administration. MCADD Fact Sheet. Baby\'s First Test, 2023.',
      url: 'https://www.babysfirsttest.org/newborn-screening/conditions/medium-chain-acyl-coa-dehydrogenase-deficiency-mcadd',
    },
    {
      org: 'ACMG',
      citation:
        'American College of Medical Genetics. ACT Sheet: Elevated C8/C8:C10 Acylcarnitine. ACMG, 2023.',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/ACT_Sheets_and_Algorithms.aspx',
    },
  ],
};
