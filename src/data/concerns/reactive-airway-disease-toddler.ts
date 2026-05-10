import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'reactive-airway-disease-toddler',
  title: 'Reactive Airway Disease in Toddlers',
  category: 'medical',
  searchTerms: [
    'reactive airway disease toddler',
    'toddler wheezing recurrent',
    'reactive airways baby',
    'toddler wheezing with every cold',
    'reactive airway disease vs asthma',
    'toddler bronchospasm',
    'wheezing toddler treatment',
    'recurrent wheezing baby',
  ],
  quickAnswer:
    'Reactive airway disease (RAD) is a term used when young children have recurrent wheezing episodes, often triggered by viral infections, but are too young for a formal asthma diagnosis. The airways of these children are overly sensitive and narrow in response to triggers, causing wheezing, coughing, and difficulty breathing. Not all children with RAD will develop asthma, but the conditions share similar treatments including bronchodilators and inhaled corticosteroids.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Wheezing in very young infants is usually caused by viral infections like RSV bronchiolitis rather than reactive airway disease. The small airways of newborns are easily narrowed by mucus and inflammation. A single wheezing episode in a young infant does not indicate RAD. However, if your baby was premature or has a family history of asthma, mention this to your pediatrician as these are risk factors.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Recurrent wheezing episodes in babies this age may begin to raise concern for reactive airways, especially if they occur with multiple viral infections. Your pediatrician may prescribe a bronchodilator (like albuterol via nebulizer) to see if it helps. Improvement with bronchodilator treatment supports the possibility of reactive airways. Keep track of wheezing episodes and what seems to trigger them.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby has had three or more wheezing episodes, your pediatrician may use the term "reactive airway disease." Risk factors for this progressing to asthma include family history of asthma, personal history of eczema, allergic sensitization, and wheezing without colds. Treatment may include a daily inhaled corticosteroid during cold season or as-needed bronchodilator therapy.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with RAD who continue to have frequent wheezing episodes may be transitioned to an asthma management plan. The Asthma Predictive Index helps estimate whether a wheezing toddler will develop persistent asthma: major criteria include a parent with asthma or personal eczema, while minor criteria include allergic rhinitis, wheezing apart from colds, and blood eosinophilia. Discuss a long-term management plan with your pediatrician.',
    },
  ],
  whenNormal: [
    'Baby wheezes briefly during a single viral cold and then breathes normally after recovery',
    'Toddler has occasional mild wheezing with upper respiratory infections that responds to treatment',
    'Baby makes noisy breathing sounds from nasal congestion (not true wheezing from the chest)',
    'Toddler has mild exercise-related cough that resolves quickly with rest',
  ],
  whenToMention: [
    'Your child wheezes with every cold or respiratory infection',
    'Your child has had three or more wheezing episodes in the past year',
    'Wheezing is triggered by exercise, cold air, or laughing in addition to viral infections',
  ],
  whenToActNow: [
    'Your child is wheezing and having significant difficulty breathing with chest retractions or belly breathing',
    'Your child\'s lips or fingernails turn blue or gray during a wheezing episode -- call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Wheezing in Infants and Young Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Wheezing.aspx',
    },
    {
      org: 'NHLBI',
      citation:
        'National Heart, Lung, and Blood Institute. Expert Panel Report 3: Guidelines for the Diagnosis and Management of Asthma. NIH.',
      url: 'https://www.nhlbi.nih.gov/health-topics/asthma',
    },
  ],
};
