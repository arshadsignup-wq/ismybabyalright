import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cough-dry-persistent',
  title: 'My Baby Has a Persistent Dry Cough',
  category: 'medical',
  searchTerms: [
    'baby dry cough persistent',
    'baby dry cough won\'t go away',
    'baby dry hacking cough',
    'baby cough no mucus',
    'baby dry cough at night',
    'persistent cough baby no cold',
    'baby cough lasting weeks',
    'baby irritating dry cough',
    'chronic dry cough baby',
    'baby dry tickly cough',
  ],
  quickAnswer:
    'A dry cough that persists for more than 2-3 weeks after a cold or occurs without any cold symptoms deserves medical evaluation. Common causes include post-viral cough (the most common cause, lasting up to 3 weeks after a cold), reactive airway disease or asthma, environmental irritants, allergies, and rarely, gastroesophageal reflux. A cough lasting more than 4 weeks is considered chronic and should be evaluated.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A persistent dry cough is unusual in very young babies and should be evaluated by your pediatrician. Possible causes include environmental irritants (smoke, strong fragrances, dry air), tracheomalacia, or less commonly, pertussis. Newborns do not typically cough from colds as frequently as older babies, so any persistent cough in this age group warrants attention.',
    },
    {
      ageRange: '3-6 months',
      context:
        'A dry cough following a cold that lingers for 2-3 weeks is common and usually represents post-viral airway irritation. However, if the dry cough occurs without any prior cold, or is triggered by feeding, consider reflux or aspiration. A humidifier and avoiding irritants (smoke, perfume, strong cleaning products) can help.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Post-viral dry cough is the most common cause of persistent coughing at this age. If the cough is triggered by cold air, activity, or seems to recur with each cold, your pediatrician may consider reactive airway disease. Keep a log of when the cough occurs and what seems to trigger it to share with your doctor.',
    },
    {
      ageRange: '12-24 months',
      context:
        'A persistent dry cough in toddlers may be related to allergies, asthma, or environmental irritants. If the cough is mainly at night, post-nasal drip or early asthma are common causes. If it is triggered by exercise or cold air, reactive airway disease is likely. Your pediatrician may try a trial of albuterol to see if it helps.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By this age, a pattern of chronic dry cough, especially with exercise or at night, often points toward asthma. Your pediatrician can evaluate with a trial of asthma medications. A habit cough (psychogenic cough) can also develop in older toddlers, characterized by a dry, honking cough that disappears during sleep.',
    },
  ],
  whenNormal: [
    'A dry cough lingers for 2-3 weeks after a cold and is gradually improving',
    'The cough is mild and does not interfere with sleep, feeding, or activity',
    'A brief dry cough occurs after exposure to cold air, dust, or other irritants',
  ],
  whenToMention: [
    'A dry cough persists for more than 3 weeks without improvement',
    'The cough seems to be triggered by specific activities like exercise, laughing, or cold air',
    'Your baby has a persistent dry cough without any cold symptoms',
  ],
  whenToActNow: [
    'The dry cough is accompanied by difficulty breathing, wheezing, chest tightness, or fast breathing',
    'Your baby turns blue during coughing fits, coughs up blood, or the cough suddenly worsens (possible foreign body aspiration)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-cough-types-meaning',
    'baby-cough-wet-productive',
    'chronic-cough-toddler',
    'baby-asthma-action-plan',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Chronic Cough. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Chronic cough in children.',
      url: 'https://www.mayoclinic.org/symptoms/cough/basics/causes/sym-20050846',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Management of chronic cough in childhood. Chest Journal.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28483610/',
    },
  ],
};
