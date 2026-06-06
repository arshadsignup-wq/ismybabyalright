import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'pregnancy-weight-gain-concerns', title: 'Pregnancy Weight Gain: Too Much or Too Little', category: 'maternal',
  searchTerms: ['pregnancy weight gain', 'gaining too much weight pregnant', 'not gaining enough weight pregnant', 'pregnancy weight guidelines', 'healthy weight gain pregnancy', 'BMI pregnancy weight gain', 'worried about weight gain pregnant', 'weight gain by trimester'],
  quickAnswer: 'Weight gain during pregnancy varies, but general guidelines recommend 25-35 pounds for normal-weight individuals, 28-40 pounds for underweight, 15-25 pounds for overweight, and 11-20 pounds for obese individuals. These are just guidelines - your provider will help you determine what is healthy for your body. Focus on nutrition quality rather than the number on the scale.',
  byAge: [
    { ageRange: 'First trimester', context: 'Most people gain only 1-5 pounds in the first trimester, and some lose weight due to morning sickness. Both are normal. Slow or no weight gain early on does not harm the baby. Focus on eating what you can tolerate and taking your prenatal vitamin.' },
    { ageRange: 'Second trimester', context: 'Weight gain typically increases to about 1 pound per week in the second trimester. This includes baby growth, placenta, amniotic fluid, increased blood volume, and breast tissue. Sudden rapid weight gain (more than 2 pounds in a week) could be fluid retention and should be mentioned to your provider.' },
    { ageRange: 'Third trimester', context: 'Weight gain continues at about 1 pound per week. Weight gain may slow or pause near the end. Focus on nutrient-dense foods. Remember that weight gain recommendations are guidelines, not rigid rules. Every body is different, and healthy pregnancies occur across a range of weight gain patterns.' },
  ],
  whenNormal: ['Gaining within the recommended range for your pre-pregnancy BMI', 'Weight gain that is gradual and steady', 'Some fluctuation week to week'],
  whenToMention: ['Gaining significantly more or less than recommended and you have concerns', 'Sudden rapid weight gain in a short period (possible fluid retention)', 'Difficulty eating enough due to nausea, food aversions, or food insecurity'],
  whenToActNow: ['Sudden weight gain of 5+ pounds in a week with swelling - possible preeclampsia sign', 'Losing weight in the second or third trimester without trying'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Weight Gain During Pregnancy. ACOG Committee Opinion No. 548, 2013 (Reaffirmed 2022).', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/01/weight-gain-during-pregnancy' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Weight Gain During Pregnancy. CDC, 2023.', url: 'https://www.cdc.gov/reproductivehealth/maternalinfanthealth/pregnancy-weight-gain.htm' },
    { org: 'NIH', citation: 'National Library of Medicine. Gestational Weight Gain. IOM Guidelines. National Academies Press, 2009.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK32813/' },
  ],
  relatedConcernSlugs: ['pregnancy-exercise-safety', 'preeclampsia-warning-signs'],
};
