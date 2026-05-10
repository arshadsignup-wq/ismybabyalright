import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'asthma-diagnosis-baby-toddler',
  title: 'Asthma Diagnosis in Babies/Toddlers',
  category: 'medical',
  searchTerms: [
    'asthma diagnosis baby',
    'asthma in toddlers',
    'can babies have asthma',
    'baby asthma symptoms',
    'toddler asthma signs',
    'baby diagnosed with asthma',
    'infant asthma treatment',
    'asthma test for toddler',
    'early signs of asthma baby',
  ],
  quickAnswer:
    'Asthma is difficult to formally diagnose in children under 5 because lung function tests (spirometry) require cooperation that young children cannot provide. Doctors rely on symptom patterns, family history, response to treatment, and the Asthma Predictive Index to assess likelihood. Key indicators include recurrent wheezing (3+ episodes), family history of asthma, personal history of eczema or allergies, and wheezing between colds. Treatment with inhaled medications is both diagnostic and therapeutic.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Asthma is not diagnosed in newborns. Wheezing at this age is most commonly caused by viral bronchiolitis, congenital airway abnormalities, or aspiration. If your young baby is wheezing, your pediatrician will evaluate for these more common causes first. A family history of asthma is an important risk factor to share with your doctor.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Recurrent wheezing in this age group is typically labeled as "reactive airway disease" rather than asthma. Your pediatrician may trial a bronchodilator (albuterol) to see if it improves symptoms. If your baby responds to asthma medications, this supports -- but does not confirm -- an eventual asthma diagnosis. Keeping a symptom diary can help your doctor see patterns over time.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies with frequent wheezing episodes, especially combined with eczema and a family history of asthma, are at higher risk for developing persistent asthma. Your pediatrician may start a daily controller medication (inhaled corticosteroid via spacer and mask) if symptoms are frequent or severe. Treatment response is an important clue: if symptoms improve significantly with asthma medications, asthma becomes more likely.',
    },
    {
      ageRange: '12 months+',
      context:
        'The Asthma Predictive Index becomes useful in this age group. Toddlers with frequent wheezing plus one major criterion (parent with asthma, personal eczema) or two minor criteria (allergic rhinitis, wheezing without colds, blood eosinophilia above 4%) have a high likelihood of persistent asthma. Formal pulmonary function testing may be possible around age 5-6. Until then, treatment is guided by symptom patterns and response to medications.',
    },
  ],
  whenNormal: [
    'Baby had a single wheezing episode during a viral illness that resolved completely',
    'Toddler has occasional mild cough with colds but breathes normally between illnesses',
    'Baby makes congested or rattly sounds from nasal mucus, not true chest wheezing',
    'Child has mild seasonal allergies with sneezing and runny nose but no wheezing or breathing difficulty',
  ],
  whenToMention: [
    'Your child has had three or more wheezing episodes even if each resolved on its own',
    'Your child coughs persistently at night or with exercise',
    'Your child has eczema, a parent with asthma, and recurrent wheezing',
  ],
  whenToActNow: [
    'Your child is working hard to breathe with visible rib retractions, nostril flaring, or belly breathing',
    'Your child is not responding to prescribed rescue inhaler after appropriate use -- seek emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NHLBI',
      citation:
        'National Heart, Lung, and Blood Institute. Guidelines for the Diagnosis and Management of Asthma (EPR-3). NIH.',
      url: 'https://www.nhlbi.nih.gov/health-topics/asthma-management-guidelines',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Asthma. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Asthma.aspx',
    },
  ],
};
