import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-malabsorption-signs',
  title: 'Nutrient Malabsorption Signs in Baby',
  category: 'digestive',
  searchTerms: [
    'baby malabsorption signs',
    'baby not absorbing nutrients',
    'baby malabsorption symptoms',
    'infant malabsorption',
    'baby fatty stool',
    'baby steatorrhea',
    'baby greasy stool',
    'baby failure to thrive malabsorption',
    'toddler malabsorption',
    'baby foul smelling oily stool',
  ],
  quickAnswer:
    'Malabsorption means the intestines are not properly absorbing nutrients from food. Signs include bulky, foul-smelling, greasy or oily stools that are difficult to flush, poor weight gain or weight loss despite adequate intake, a distended belly, and fatigue. Causes include celiac disease, cystic fibrosis, food allergies, and infections. Early diagnosis and treatment are important for normal growth.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Malabsorption in newborns can present as persistent diarrhea, poor weight gain, or failure to thrive despite adequate feeding. Cystic fibrosis and congenital malabsorption disorders should be considered. Newborn screening catches many cases of cystic fibrosis, but not all.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby is feeding well but not gaining weight as expected, or if stools are unusually greasy, foul-smelling, or frequent, malabsorption should be considered. Your pediatrician can order tests including stool studies, blood work for celiac markers, and a sweat test for cystic fibrosis.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Malabsorption may become apparent after gluten introduction (suggesting celiac disease) or may present as persistent diarrhea with poor growth. Signs of specific nutrient deficiencies, like iron deficiency anemia or vitamin D deficiency, may point to malabsorption.',
    },
    {
      ageRange: '12-24 months',
      context:
        'A toddler with persistent bulky, smelly stools, a distended belly, and poor growth should be evaluated for malabsorption. Celiac disease is a common cause in this age group. A thorough evaluation by your pediatrician or a pediatric gastroenterologist can identify the cause and guide treatment.',
    },
  ],
  whenNormal: [
    'Normal variation in stool consistency and smell, especially after dietary changes',
    'Brief periods of loose stools during illness that resolve quickly',
  ],
  whenToMention: [
    'Persistent foul-smelling, greasy, or oily stools',
    'Poor weight gain despite what seems like adequate food intake',
    'A protruding, distended belly that does not seem proportional',
  ],
  whenToActNow: [
    'Significant weight loss or failure to thrive',
    'Signs of severe nutrient deficiency like extreme pallor, weakness, or bone pain',
    'Persistent diarrhea with dehydration',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Celiac Disease.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Failure to Thrive. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Failure-to-Thrive.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Malabsorption Syndromes in Children. Pediatric Clinics of North America.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28779993/',
    },
  ],
  relatedConcernSlugs: ['baby-celiac-disease-signs', 'foul-smelling-poop', 'baby-gi-bleeding-causes'],
};
