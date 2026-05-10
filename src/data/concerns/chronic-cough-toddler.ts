import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'chronic-cough-toddler',
  title: 'Chronic Cough in Toddlers',
  category: 'medical',
  searchTerms: [
    'chronic cough toddler',
    'toddler cough won\'t go away',
    'toddler coughing for weeks',
    'persistent cough baby',
    'toddler cough at night',
    'toddler cough no fever',
    'when to worry about toddler cough',
    'toddler dry cough lasting weeks',
  ],
  quickAnswer:
    'A cough lasting more than 4 weeks is considered chronic in children. Common causes in toddlers include post-nasal drip from allergies or sinus infections, asthma (especially cough-variant asthma), residual cough after viral infections, and habit cough. While most chronic coughs in toddlers are not serious, a persistent cough that disrupts sleep, causes vomiting, or is accompanied by wheezing or weight loss should be evaluated by your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Chronic cough is unusual in very young infants. Any persistent cough in a baby under 3 months should be evaluated by your pediatrician. Possible causes include pertussis (whooping cough), tracheomalacia, aspiration from swallowing problems, or congenital conditions. Pertussis is particularly dangerous in young infants and may present as coughing spells with a characteristic "whoop" or episodes of apnea.',
    },
    {
      ageRange: '3-6 months',
      context:
        'A cough that persists beyond a typical cold (10-14 days) warrants medical attention. Common causes include prolonged post-viral cough, which can last 3-4 weeks after a cold, or repeated viral infections (babies can get 8-12 colds per year in the first years of daycare). Less common causes include silent aspiration during feeds, reactive airways, or pertussis. Your doctor may order a chest X-ray or other tests if the cough persists.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At this age, babies are exposed to many new viruses, and a cough that seems continuous may actually be from back-to-back viral infections rather than a single prolonged illness. If your baby\'s cough truly never resolves between colds, has a wet quality suggesting mucus production, or is accompanied by wheezing, further evaluation is needed. Cough-variant asthma, in which cough is the primary symptom without typical wheezing, can occur.',
    },
    {
      ageRange: '12 months+',
      context:
        'Chronic cough in toddlers is most commonly caused by upper airway cough syndrome (post-nasal drip from allergies or enlarged adenoids), asthma, or protracted bacterial bronchitis. Protracted bacterial bronchitis causes a persistent wet cough that improves with a 2-4 week course of antibiotics. If your toddler has a chronic wet cough, this is worth discussing with your pediatrician. Rarely, chronic cough may indicate an inhaled foreign body.',
    },
  ],
  whenNormal: [
    'Toddler has a cough during a cold that gradually improves over 2-3 weeks',
    'Toddler seems to always have a cough but it coincides with attending daycare and frequent viral illnesses',
    'Mild occasional cough in a toddler who is otherwise well, eating, and gaining weight',
    'Brief cough after running or playing that resolves quickly',
  ],
  whenToMention: [
    'Cough has persisted for more than 4 weeks without improvement',
    'Cough disrupts sleep, triggers vomiting, or affects daily activities',
    'Cough is persistently wet or productive-sounding',
  ],
  whenToActNow: [
    'Toddler suddenly develops a severe cough without preceding illness (possible foreign body aspiration)',
    'Child has a coughing spell that causes color changes (blue or pale), stops breathing, or cannot catch their breath',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Coughs and Colds: Medicines or Home Remedies? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Chronic Cough: Causes, Diagnosis, and Treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/chronic-cough/symptoms-causes/syc-20351575',
    },
  ],
};
