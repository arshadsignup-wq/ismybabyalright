import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-toddler-diarrhea-chronic',
  title: 'Chronic Nonspecific Diarrhea in Toddler',
  category: 'digestive',
  searchTerms: [
    'toddler chronic diarrhea',
    'toddler diarrhea won\'t stop',
    'toddler loose stools months',
    'chronic nonspecific diarrhea toddler',
    'toddler diarrhea functional',
    'toddler poop always loose',
    'toddler sloppy poop normal',
    'functional diarrhea toddler',
    'toddler diarrhea growing well',
    'toddler soft stool always',
  ],
  quickAnswer:
    'Chronic nonspecific diarrhea of toddlerhood (also called functional diarrhea or toddler\'s diarrhea) is a common, harmless condition where toddlers have multiple loose, mushy stools daily but are otherwise healthy, growing well, and thriving. It typically resolves by age 4. Increasing fat in the diet, reducing juice, and increasing fiber can help.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Chronic diarrhea in this age group is not toddler\'s diarrhea and needs evaluation. Possible causes include cow\'s milk protein allergy, infectious diarrhea, or rarely malabsorption conditions.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Chronic diarrhea at this age also warrants medical evaluation rather than being attributed to toddler\'s diarrhea, which is a condition of the 1 to 4 year age group.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids increase, stool patterns change. Frequent soft stools in a thriving baby may be an early version of toddler\'s diarrhea. If your baby is gaining weight well, eating normally, and has no blood in stool, it is likely benign. Reducing fruit juice intake often helps significantly.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is the classic age for toddler\'s diarrhea. Your child may have 3 to 6 loose stools daily, often with undigested food particles, but is otherwise happy, active, and growing well. The "4 F\'s" approach helps: increase Fat, increase Fiber, decrease Fluid (especially juice), and decrease Fructose. Most children outgrow it by age 3 to 4.',
    },
  ],
  whenNormal: [
    'Multiple loose stools daily in a toddler who is growing well on their growth curve, eating well, and has no pain',
    'Undigested food visible in loose stools (especially corn, raisins, peas)',
    'Diarrhea that improves with dietary changes like reducing juice and increasing fat',
  ],
  whenToMention: [
    'You want to confirm that your toddler\'s chronic loose stools are benign',
    'Dietary changes have not improved the diarrhea',
    'You want to rule out other causes like food intolerance or celiac disease',
  ],
  whenToActNow: [
    'Chronic diarrhea with poor weight gain or weight loss',
    'Blood or mucus in chronic loose stools',
    'Chronic diarrhea with significant abdominal pain, bloating, or vomiting',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Chronic Diarrhea in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Chronic-Diarrhea-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Chronic Diarrhea in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/chronic-diarrhea-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toddler Diarrhea. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/pir.33-5-207/32297/',
    },
  ],
  relatedConcernSlugs: ['toddler-chronic-diarrhea', 'toddler-loose-stools-chronic', 'diarrhea', 'baby-celiac-disease-signs'],
};
