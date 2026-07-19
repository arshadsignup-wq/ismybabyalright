import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'diaper-rash',
  title: 'Diaper Rash in Babies',
  bodySystem: 'skin',
  description: 'Diaper rash (diaper dermatitis) is one of the most common skin conditions in infants, affecting up to 50% of babies at some point. It appears as red, irritated skin in the diaper area. Most cases are caused by prolonged contact with wet or soiled diapers (irritant contact dermatitis). Yeast (Candida) superinfection is common when rash persists, appearing as bright red with satellite lesions.',
  possibleCauses: [
    { cause: 'Irritant contact dermatitis (wet/soiled diaper)', likelihood: 'common' },
    { cause: 'Candida (yeast) infection', likelihood: 'common' },
    { cause: 'Diarrhea (acidic stool irritation)', likelihood: 'common' },
    { cause: 'Allergic contact dermatitis (diaper brand, wipes, creams)', likelihood: 'uncommon' },
    { cause: 'Seborrheic dermatitis', likelihood: 'uncommon' },
    { cause: 'Bacterial infection (streptococcal or staphylococcal)', likelihood: 'uncommon' },
    { cause: 'Psoriasis', likelihood: 'rare' },
    { cause: 'Zinc deficiency (acrodermatitis enteropathica)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Mild redness in skin folds from moisture is common, especially as parents learn diapering routines. Brief redness that resolves with good hygiene and barrier cream is normal.', whenToWorry: 'Rash starting in first week of life and spreading rapidly. Blistering or peeling. Rash in unusual distribution (check for congenital condition). Rash not responding to basic care after 3-4 days.' },
    { ageRange: '3-12 months', normalVariation: 'Peak age for diaper rash. Common triggers: teething (looser/more acidic stools), starting solids, and diarrheal illnesses. Mild to moderate redness that responds to barrier cream and frequent changes.', whenToWorry: 'Bright red rash with sharp borders and satellite spots (yeast \u2014 needs antifungal). Open sores, blisters, or bleeding. Rash spreading outside diaper area. Fever with diaper rash (possible infection).' },
    { ageRange: '1-3 years', normalVariation: 'Diaper rash can flare during illnesses, antibiotic use, or dietary changes. Typically less frequent as toddlers transition to potty training.', whenToWorry: 'Persistent rash not responding to over-the-counter treatments, rash with fever or pus-filled bumps, or rash appearing in other areas of the body (may indicate systemic condition).' },
    { ageRange: 'Any age', normalVariation: 'Brief mild diaper rash that resolves within 2-3 days with diaper-free time and barrier cream.', whenToWorry: 'Rash lasting more than 7 days despite home treatment (likely yeast and needs antifungal), rash with fever, rash with blisters or bleeding skin, or rapidly worsening despite treatment.' },
  ],
  urgencyLevels: {
    emergency: [
      'Diaper rash with large blisters, skin peeling, or raw bleeding areas covering most of diaper region',
      'Diaper rash with high fever and baby appearing very ill (possible systemic infection)',
    ],
    urgent: [
      'Diaper rash with pus-filled bumps spreading beyond diaper area (bacterial superinfection)',
      'Severe diaper rash with open wounds that are clearly painful and baby refusing to sit',
      'Diaper rash with fever',
    ],
    sameDay: [
      'Bright red rash with satellite lesions not responding to regular diaper cream (likely yeast)',
      'Diaper rash persisting more than 7 days despite good home care',
      'Recurrent diaper rash requiring repeated antifungal treatment',
    ],
    monitor: [
      'Mild redness that improves with frequent diaper changes and barrier cream',
      'Diaper rash during diarrheal illness that improves as stools normalize',
      'Known yeast diaper rash responding to prescribed antifungal cream',
    ],
  },
  homeRemedies: [
    'Change diapers frequently \u2014 every 1-2 hours and immediately after bowel movements',
    'Allow diaper-free time: let baby lay on a waterproof pad with bare bottom for 10-15 minutes several times daily',
    'Apply thick layer of zinc oxide barrier cream (Desitin, Boudreaux\'s) with every diaper change',
    'Clean gently with water and soft cloth \u2014 avoid wipes with alcohol or fragrance during flare-ups',
    'Pat dry thoroughly (do not rub) before applying cream',
    'Consider switching diaper brands or trying fragrance-free wipes',
    'Do NOT use talcum powder or cornstarch (infection risk with cornstarch, aspiration risk with talc)',
    'For yeast rash: over-the-counter clotrimazole cream applied before barrier cream (confirm with doctor)',
    'Ensure diapers are not too tight \u2014 allow some air circulation',
    'If breastfeeding, note if certain maternal foods worsen baby\'s rash via stool changes',
  ],
  triageSlug: 'diaper-rash',
  relatedSymptomSlugs: ['red-rash', 'diarrhea'],
  relatedIllnessSlugs: ['candida-diaper-rash', 'eczema', 'contact-dermatitis'],
  relatedConcernSlugs: ['diaper-rash-wont-go-away', 'yeast-diaper-rash-baby', 'diaper-rash-bleeding'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Diaper Rash. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Diaper-Rash.aspx' },
    { org: 'AAP', citation: 'Blume-Peytavi U, Kanti V. Prevention and treatment of diaper dermatitis. Pediatric Dermatology. 2018.', url: 'https://onlinelibrary.wiley.com/doi/10.1111/pde.13495' },
    { org: 'AAD', citation: 'American Academy of Dermatology. How to treat diaper rash.', url: 'https://www.aad.org/public/everyday-care/skin-care-basics/care/diaper-rash' },
  ],
};
