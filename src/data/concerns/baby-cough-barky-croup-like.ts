import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cough-barky-croup-like',
  title: 'My Baby Has a Barky Cough but Hasn\'t Been Diagnosed with Croup',
  category: 'medical',
  searchTerms: [
    'baby barky cough not croup',
    'barky cough baby',
    'seal-like cough baby',
    'baby cough sounds like bark',
    'baby cough like a seal',
    'croupy cough baby no fever',
    'barky cough without stridor',
    'baby hoarse cough',
    'baby cough deep barking',
    'barky cough causes baby',
  ],
  quickAnswer:
    'A barky, seal-like cough is most commonly caused by croup (viral laryngotracheitis), but it can also occur from other causes of upper airway swelling, including allergic reactions, inhaled irritants, or spasmodic croup (which occurs without viral illness). The barky quality comes from swelling around the voice box (larynx). Cool night air or steamy bathroom air can temporarily ease the cough.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A barky cough is unusual in very young babies. If your newborn or young infant develops a barky cough, seek medical evaluation promptly. Other conditions such as laryngomalacia or congenital airway issues can produce unusual cough sounds in this age group. True croup is rare before 6 months.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Croup is uncommon but possible at this age. A barky cough in this age range should be evaluated by your pediatrician, especially if accompanied by noisy breathing (stridor). The smaller airway size in younger babies means even mild swelling can cause more significant breathing difficulty.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the beginning of peak croup age. A barky cough often appears suddenly, usually at night, and can be alarming. Spasmodic croup (no fever, comes on suddenly at night) is also common and tends to recur. Try cool night air or sitting in a steamy bathroom for 15 minutes. If breathing is not labored, monitor closely.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Croup peaks between 6 months and 3 years. Typical croup starts with cold symptoms, then the barky cough develops, worst at night. Some children have recurrent spasmodic croup without viral illness. If your toddler has frequent episodes of barky cough, your pediatrician may prescribe a steroid to have on hand for future episodes.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Barky cough remains common in this age group but should be improving. Children who have frequent barky cough episodes beyond age 3 may benefit from further evaluation to rule out subglottic stenosis or other structural issues. A single episode of barky cough during a cold is typical and usually resolves in 3-5 days.',
    },
  ],
  whenNormal: [
    'The barky cough occurs at night during a cold and improves during the day',
    'Cool air or steam temporarily eases the barky cough',
    'Your baby can breathe comfortably between coughing fits',
    'The barky cough resolves within 3-5 days and your baby otherwise feels well',
  ],
  whenToMention: [
    'Your baby has recurrent episodes of barky cough without being sick',
    'The barky cough lasts more than 5 days',
    'Your baby has a hoarse voice or cry that persists after the cough resolves',
  ],
  whenToActNow: [
    'Your baby has a barky cough with stridor (high-pitched noisy breathing) at rest, not just during coughing',
    'Your baby is drooling excessively, cannot swallow, leans forward to breathe, has rib retractions, turns blue, or appears extremely anxious and distressed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'croup-baby',
    'baby-cough-types-meaning',
    'baby-stridor-noisy-breathing',
    'epiglottitis-warning-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Croup in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Croup-Treatment.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Croup - Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/croup/symptoms-causes/syc-20350348',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Croup: An Overview. American Family Physician.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29671521/',
    },
  ],
};
