import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cough-wet-productive',
  title: 'My Baby Has a Wet, Mucusy Cough',
  category: 'medical',
  searchTerms: [
    'baby wet cough',
    'baby productive cough',
    'baby cough with mucus',
    'baby rattly cough',
    'baby phlegmy cough',
    'baby chest congestion cough',
    'baby coughing up mucus',
    'wet cough baby meaning',
    'baby cough sounds gunky',
    'baby cough with chest congestion',
  ],
  quickAnswer:
    'A wet, productive cough means your baby\'s body is working to clear mucus from the airways. This is actually a healthy reflex. In most cases, a wet cough is caused by post-nasal drip from a cold, where mucus from the nose runs down the back of the throat. Cough suppressants should NOT be used because they prevent the body from clearing the mucus. Most wet coughs resolve within 2-3 weeks of the cold starting.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any wet, productive cough in a very young baby should be evaluated by your pediatrician. Young babies have difficulty clearing mucus because they cannot cough forcefully. A rattly or gurgly sound during breathing may indicate mucus in the lower airways, which could be from a cold or potentially from aspiration during feeds. Keep your baby\'s nose clear with saline and gentle suctioning.',
    },
    {
      ageRange: '3-6 months',
      context:
        'A wet cough during a cold is common and is the body\'s way of clearing mucus. The cough may worsen when your baby lies down as mucus pools in the throat. Elevating the head of the crib mattress slightly and running a humidifier can help. Feed smaller, more frequent amounts if the cough is interfering with feeding.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Wet coughs are very common during colds at this age. The cough usually starts a few days into the cold as mucus production increases. Keeping the nose clear helps reduce post-nasal drip and therefore the cough. A wet cough that persists more than 3-4 weeks, or occurs without a cold, may need further evaluation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with colds often have impressive wet coughs, especially in the morning after mucus has collected overnight. This is normal. For children over 12 months, a small amount of honey can help soothe the throat and may reduce cough frequency. Never give honey to babies under 1 year. Do not give cough suppressants.',
    },
    {
      ageRange: '2-3 years',
      context:
        'A persistent wet cough lasting more than 4 weeks in an otherwise well child is called a protracted bacterial bronchitis and may benefit from antibiotic treatment. This is different from a normal cold-related wet cough. If your child\'s wet cough lingers well beyond the cold, discuss this specific diagnosis with your pediatrician.',
    },
  ],
  whenNormal: [
    'A wet cough develops during a cold and gradually improves over 1-3 weeks',
    'The cough is worse in the morning and when lying down but improves when upright',
    'Your baby is feeding, sleeping, and playing reasonably well despite the cough',
    'The cough is loosening and becoming less frequent as the cold resolves',
  ],
  whenToMention: [
    'A wet cough persists for more than 3 weeks without improvement',
    'Your baby has recurrent episodes of wet cough between colds',
    'The wet cough is interfering significantly with sleep or feeding',
  ],
  whenToActNow: [
    'Your baby has a wet cough with labored breathing, fast breathing, rib retractions, or wheezing',
    'Your baby coughs up blood-tinged mucus, has a high fever with the cough, or appears blue around the lips during coughing episodes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-cough-types-meaning',
    'baby-cough-dry-persistent',
    'baby-coughing-a-lot',
    'baby-cough-medicine-not-recommended',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Coughs and Colds: Medicines or Home Remedies? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Protracted Bacterial Bronchitis in Children. Chest Journal.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28483610/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Cough: When to see a doctor.',
      url: 'https://www.mayoclinic.org/symptoms/cough/basics/when-to-see-doctor/sym-20050846',
    },
  ],
};
