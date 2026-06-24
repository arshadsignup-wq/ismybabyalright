import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-bmi-healthy-range',
  title: 'Is My Toddler\'s BMI in a Healthy Range?',
  category: 'medical',
  searchTerms: [
    'toddler BMI healthy range',
    'toddler BMI chart',
    'is my toddler overweight',
    'is my toddler underweight',
    'toddler body mass index',
    'healthy weight for toddler',
    'toddler growth percentile BMI',
    'toddler weight concern',
    'BMI for 2 year old',
    'toddler BMI calculator',
  ],
  quickAnswer:
    'For children ages 2 and older, BMI is calculated using height and weight and then plotted on age- and sex-specific growth charts. A BMI between the 5th and 85th percentile is considered a healthy weight. Unlike adults, a single BMI number does not tell the full story for toddlers — trends over time and your child\'s individual growth curve matter far more than any single reading.',
  byAge: [
    {
      ageRange: '12-24 months',
      context:
        'BMI is not typically used for children under age 2. Instead, pediatricians track weight-for-length on WHO growth charts. During this period, babies naturally have higher body fat, and chubbiness is expected and healthy. Your pediatrician monitors whether your child is following a consistent growth curve rather than focusing on a single measurement. If your child is crossing percentile lines rapidly in either direction, your doctor may investigate further.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Starting at age 2, pediatricians begin using BMI-for-age percentile charts from the CDC. A BMI between the 5th and 85th percentile is considered healthy weight, between the 85th and 95th is overweight, and above the 95th is obese. It is normal for toddlers to appear stocky or lean at different stages. Growth patterns and trajectory over multiple visits matter more than any single data point. Many toddlers who appear chubby naturally lean out as they grow taller.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Preschool-age children typically undergo "adiposity rebound," where their BMI naturally dips before gradually increasing again. If this rebound happens very early (before age 4-5), it may be associated with a higher risk of obesity later in childhood. Your pediatrician will continue to track BMI at well-child visits and can help you understand whether your child\'s trajectory is healthy. Focus on offering nutritious foods and active play rather than restricting calories.',
    },
  ],
  whenNormal: [
    'Your toddler\'s BMI falls between the 5th and 85th percentile and they are following a consistent growth curve',
    'Your toddler looks chubby or lean compared to other children but is tracking along their own percentile line',
    'Your toddler\'s weight and height fluctuate slightly from visit to visit but remain within a normal range',
  ],
  whenToMention: [
    'Your toddler\'s BMI has crossed two or more percentile lines upward or downward over several months',
    'Your toddler\'s BMI is consistently above the 85th percentile or below the 5th percentile',
    'You are concerned about your toddler\'s eating habits or activity level in relation to their weight',
  ],
  whenToActNow: [
    'Your toddler is losing weight rapidly or failing to gain weight despite adequate food intake',
    'Your toddler shows signs of nutritional deficiency such as extreme fatigue, hair loss, or frequent illness alongside abnormal BMI readings',
    'Your toddler\'s BMI is above the 99th percentile, which may warrant further evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'grazing-all-day-toddler',
    'toddler-picky-eater-strategies',
    'toddler-milk-consumption-how-much',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. BMI for Children and Teens.',
      url: 'https://www.cdc.gov/bmi/child-teen-calculator/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. BMI and Your Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/obesity/Pages/Body-Mass-Index-Formula.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. WHO Child Growth Standards.',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
  ],
};
