import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-cyclic-vomiting-syndrome',
  title: 'Cyclic Vomiting Syndrome in Toddler',
  category: 'digestive',
  searchTerms: [
    'toddler cyclic vomiting',
    'cyclic vomiting syndrome child',
    'baby recurring vomiting episodes',
    'child vomiting pattern repeating',
    'toddler vomiting for no reason recurring',
    'cvs child',
    'cyclic vomiting baby',
    'toddler periodic vomiting episodes',
    'child severe vomiting episodes recurring',
    'cyclic vomiting syndrome diagnosis child',
  ],
  quickAnswer:
    'Cyclic vomiting syndrome (CVS) causes episodes of severe, repeated vomiting lasting hours to days, with completely normal periods in between. Episodes often follow a predictable pattern and may be triggered by stress, excitement, infections, or lack of sleep. CVS is related to migraines and can be very distressing. Diagnosis is clinical, and treatment focuses on preventing episodes and managing symptoms.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'CVS is not typically diagnosed in young infants. Recurrent vomiting at this age is more likely to be related to reflux, GERD, or other conditions. However, the seeds of CVS may be present, and a pattern may emerge later.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Periodic vomiting episodes at this age should be evaluated for anatomical causes, metabolic disorders, and other treatable conditions before considering CVS. Early presentation is possible but uncommon.',
    },
    {
      ageRange: '6-12 months',
      context:
        'CVS can begin to present with recurrent episodes of intense vomiting. A pattern of well periods between episodes, with each episode being similar in duration and symptoms, is characteristic. Your pediatrician should evaluate for other causes before making this diagnosis.',
    },
    {
      ageRange: '12-24 months',
      context:
        'The typical onset of CVS is between 3 and 7 years, but it can start in toddlerhood. Episodes may occur monthly or several times per year. The child appears completely well between episodes. A family history of migraines is common. Identifying and avoiding triggers (excitement, stress, lack of sleep, certain foods) can help reduce episodes.',
    },
  ],
  whenNormal: [
    'CVS episodes that are managed with an established treatment plan and resolve as expected',
  ],
  whenToMention: [
    'Your child has recurrent, predictable episodes of severe vomiting with normal periods in between',
    'You want to discuss prevention strategies or trigger identification',
    'Episodes are becoming more frequent or severe',
  ],
  whenToActNow: [
    'Severe vomiting with signs of dehydration that is not responding to home management',
    'A vomiting episode that is different from the usual pattern (bilious vomit, severe pain, blood)',
    'Your child becomes lethargic, confused, or has an altered level of consciousness during an episode',
    'Concurrent symptoms like headache, vision changes, or neck stiffness suggesting a neurological cause',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cyclic Vomiting Syndrome. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Cyclic-Vomiting-Syndrome.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Cyclic Vomiting Syndrome.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/cyclic-vomiting-syndrome',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Cyclic Vomiting Syndrome in Children. Journal of Pediatric Gastroenterology and Nutrition.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/18820514/',
    },
  ],
  relatedConcernSlugs: ['baby-vomiting-no-fever', 'baby-vomiting-repeatedly-dehydration', 'toddler-functional-abdominal-pain'],
};
