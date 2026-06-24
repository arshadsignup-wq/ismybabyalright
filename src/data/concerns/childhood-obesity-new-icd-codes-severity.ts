import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'childhood-obesity-new-icd-codes-severity',
  title: 'Childhood Obesity: Understanding Severity Classifications',
  category: 'medical',
  searchTerms: [
    'childhood obesity severity',
    'baby overweight BMI',
    'toddler obesity',
    'childhood obesity classification',
    'overweight baby concern',
    'childhood obesity ICD codes',
    'severe obesity children',
    'baby gaining too much weight',
    'childhood obesity treatment',
    'pediatric obesity guidelines',
    'overweight child new classifications',
  ],
  quickAnswer:
    'Childhood obesity is classified by severity using BMI percentile for age and sex. The AAP now recommends more proactive evaluation and treatment, with updated severity classifications helping guide intervention intensity. Overweight is defined as BMI at the 85th-94th percentile, obesity as 95th percentile or above, and severe obesity as 120% of the 95th percentile or above. Early intervention through healthy eating patterns and physical activity is more effective than waiting.',
  byAge: [
    {
      ageRange: '0-24 months',
      context:
        'BMI is not used for children under 2 years. Instead, weight-for-length percentile charts are used to assess growth. A rapid upward crossing of weight percentile lines may indicate excessive weight gain. During this period, breastfeeding is associated with a modest reduction in obesity risk. Introducing a variety of healthy complementary foods at around 6 months and avoiding added sugars and juice helps establish healthy eating patterns. Rapid infant weight gain is associated with later obesity risk.',
    },
    {
      ageRange: '2-5 years',
      context:
        'BMI percentile begins to be used at age 2 and is the standard tool for identifying overweight and obesity. The AAP recommends universal BMI screening starting at age 2. At this age, treatment focuses on healthy lifestyle changes: structured meals and snacks, limiting juice and sugary drinks, increasing physical activity, reducing screen time, and ensuring adequate sleep. Family-based behavioral interventions are the most effective approach. The updated severity codes help clinicians track and document the degree of concern more precisely.',
    },
    {
      ageRange: '5+ years',
      context:
        'For school-age children, more intensive interventions may be recommended based on obesity severity. The AAP\'s 2023 Clinical Practice Guideline recommends intensive health behavior and lifestyle treatment (26 or more hours of face-to-face treatment over 3-12 months) as the most effective behavioral intervention. For children with severe obesity, pharmacotherapy or metabolic and bariatric surgery evaluation may be appropriate in older adolescents. The new severity classifications help guide which level of intervention is recommended.',
    },
  ],
  whenNormal: [
    'Your child\'s BMI percentile is between the 5th and 84th percentile and is tracking consistently on their growth curve.',
    'Your baby is gaining weight appropriately for their age, even if they seem chubby -- healthy babies often have rolls and round cheeks.',
    'Your pediatrician has reviewed your child\'s growth chart and is not concerned about the growth pattern.',
  ],
  whenToMention: [
    'Your child\'s weight-for-length or BMI has been crossing upward across percentile lines.',
    'You are concerned about your child\'s eating habits, such as excessive snacking, juice consumption, or difficulty with portion control.',
    'Your child has risk factors for obesity such as family history, limited physical activity, or high screen time.',
  ],
  whenToActNow: [
    'Your child has been diagnosed with obesity and is developing related conditions such as elevated blood pressure, abnormal blood sugar, or joint pain.',
    'Your child has severe obesity (BMI at or above 120% of the 95th percentile) and has not been evaluated for comorbidities.',
    'Your child is experiencing psychological distress such as bullying, depression, or social isolation related to their weight.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['early-complementary-food-obesity-risk', 'throwing-food', 'grazing-all-day-toddler'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline for the Evaluation and Treatment of Children and Adolescents with Obesity. Pediatrics, 2023.',
      url: 'https://publications.aap.org/pediatrics/article/151/2/e2022060640/190443/Clinical-Practice-Guideline-for-the-Evaluation-and',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Childhood Overweight and Obesity. CDC.',
      url: 'https://www.cdc.gov/obesity/childhood/index.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Obesity and Overweight Fact Sheet. WHO.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight',
    },
  ],
};
