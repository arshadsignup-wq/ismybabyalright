import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-loose-stools-chronic',
  title: 'Toddler Chronic Loose Stools - Toddler\'s Diarrhea',
  category: 'digestive',
  searchTerms: ['toddler chronic loose stools','toddler\'s diarrhea','toddler loose poop every day','toddler diarrhea for weeks','toddler soft stool always','chronic nonspecific diarrhea toddler','toddler runny poop normal','toddler mushy stool','toddler diarrhea with undigested food','toddler poop always soft','functional diarrhea toddler','toddler loose stool gaining weight'],
  quickAnswer: 'Chronic loose stools in a well-growing toddler is most commonly "toddler\'s diarrhea" (chronic nonspecific diarrhea of childhood). This condition typically affects children aged 1-4 years who have 3-10 loose stools per day, often containing undigested food particles, but are otherwise healthy, happy, and growing normally. It is the most common cause of chronic diarrhea in toddlers and resolves on its own, usually by age 4. The most common contributing factors are excessive juice intake, low dietary fat, and high sugar consumption.',
  byAge: [
    { ageRange: '6-12 months', context: 'Loose stools in babies this age are often normal, especially for breastfed babies. As solids are introduced, stool consistency changes frequently. Seeing undigested food in the diaper (especially high-fiber foods like corn, peas, and raisins) is normal because babies do not fully chew food and their digestive systems are still maturing. If your baby has loose stools but is gaining weight and developing normally, it is likely not a concern. Persistent watery diarrhea after a stomach bug (post-infectious diarrhea) can last 2-4 weeks.' },
    { ageRange: '12-24 months', context: 'This is the classic age for toddler\'s diarrhea to begin. The child has multiple loose stools per day, often worse in the morning, with visible undigested food. The child feels fine, eats normally, and grows normally - the "healthy child with diarrhea." Contributing factors: too much juice (limit to 4 oz/day), too much sugar, not enough fat in the diet, and excess fluid intake. Increasing dietary fat (avocado, nut butters, olive oil, cheese) and reducing juice often improves symptoms significantly.' },
    { ageRange: '2-3 years', context: 'Toddler\'s diarrhea may persist but should be improving. Dietary changes to try: limit juice to 4 oz/day, increase healthy fats, offer balanced meals with protein and fiber, and avoid excessive snacking on carb-heavy foods. If loose stools are accompanied by poor weight gain, blood or mucus in stool, abdominal pain, or fever, it is not simple toddler\'s diarrhea and needs medical evaluation. Celiac disease, food allergies, and parasites (especially giardia from contaminated water) should be considered.' },
    { ageRange: '3-4 years', context: 'Most children outgrow toddler\'s diarrhea by age 4. If chronic loose stools persist beyond age 4, or if your child develops new symptoms (weight loss, abdominal pain, fatigue, rash), your pediatrician should evaluate for other causes including celiac disease, inflammatory bowel disease, lactose intolerance, and parasitic infections. A simple stool test and blood work can screen for most of these conditions.' },
  ],
  whenNormal: ['Your toddler has loose stools with undigested food but is happy, active, and gaining weight normally','Stools are looser on days with more juice or fruit intake','The number of stools per day is high but not accompanied by pain, blood, or fever','Your child is otherwise thriving and meeting developmental milestones'],
  whenToMention: ['Loose stools have persisted for more than 2-3 weeks','Your child is not gaining weight or has lost weight','You see blood or mucus in the stool','Loose stools are accompanied by abdominal pain, bloating, or excessive gas'],
  whenToActNow: ['Bloody diarrhea with fever and your child looks very unwell','Severe dehydration signs: no wet diapers for 6+ hours, extreme lethargy, sunken eyes','Your child has significant weight loss alongside chronic diarrhea'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-chronic-diarrhea','toddler-stomach-bug-recovery','baby-lactose-intolerance-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Chronic Diarrhea in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Chronic-Diarrhea-in-Children.aspx' },
    { org: 'NIH', citation: 'National Institute of Diabetes and Digestive and Kidney Diseases. Chronic Diarrhea in Children.', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/chronic-diarrhea-children' },
    { org: 'AAP', citation: 'Vanderhoof JA. Chronic Diarrhea. Pediatrics in Review. 1998.', url: 'https://pubmed.ncbi.nlm.nih.gov/9584773/' },
  ],
};
