import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'epiglottitis-warning-signs',
  title: 'Epiglottitis Warning Signs in Babies and Toddlers',
  category: 'medical',
  searchTerms: [
    'epiglottitis baby',
    'epiglottitis toddler',
    'baby drooling can\'t swallow',
    'baby sitting forward to breathe',
    'baby muffled voice can\'t breathe',
    'swollen epiglottis baby',
    'epiglottitis vs croup',
    'baby stridor drooling fever',
    'epiglottitis signs child',
    'epiglottitis emergency baby',
  ],
  quickAnswer:
    'Epiglottitis is a rare but serious infection where the epiglottis (the flap of tissue at the base of the tongue) becomes swollen and can block the airway. Thanks to the Hib vaccine, epiglottitis has become very uncommon in vaccinated children, but it still occurs rarely and is a medical emergency. It comes on rapidly and requires immediate emergency care. Knowing the warning signs can be life-saving.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Epiglottitis is extremely rare in infants under 1 year. If breathing difficulty develops suddenly in a young baby, other causes like bronchiolitis, croup, or a foreign body are much more likely. However, if your baby develops sudden high fever with drooling and obvious difficulty breathing, seek emergency care immediately.',
    },
    {
      ageRange: '1-3 years',
      context:
        'While rare in vaccinated children, epiglottitis can still occur. It typically comes on very quickly over just a few hours. Unlike croup, which causes a barking cough and usually worsens gradually, epiglottitis produces a toxic-appearing child with high fever, drooling, difficulty swallowing, a muffled or hoarse voice, and a preference for sitting upright and leaning forward to breathe (called the "tripod" or "sniffing" position). There is usually no barking cough.',
    },
  ],
  whenNormal: [
    'Mild sore throat with a cold that does not affect breathing or swallowing',
    'Barking cough with mild stridor that improves with cool air or steam (more likely croup)',
    'A hoarse voice during a cold that does not worsen rapidly',
  ],
  whenToMention: [
    'Your child has a sore throat and is having mild difficulty swallowing but is breathing comfortably',
    'You are unsure whether your child\'s breathing sounds are concerning',
    'Your child has not received the Hib vaccine and develops a sore throat with fever',
  ],
  whenToActNow: [
    'Your child has sudden onset of high fever, drooling, and difficulty swallowing',
    'Your child is sitting upright, leaning forward, and appears to be straining to breathe',
    'Your child has a muffled or "hot potato" voice with drooling and fever',
    'Your child looks very ill, pale or bluish, and is struggling to breathe',
    'Breathing difficulty is worsening rapidly over hours rather than days',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['croup-baby', 'baby-breathing-fast', 'wheezing', 'hoarse-voice-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Epiglottitis. Red Book Online.',
      url: 'https://redbook.solutions.aap.org/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Haemophilus influenzae Disease (Including Hib).',
      url: 'https://www.cdc.gov/hi-disease/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Epiglottitis. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK430960/',
    },
  ],
};
