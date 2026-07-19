import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'thrush',
  title: 'Oral Thrush in Babies',
  bodySystem: 'mouth-throat',
  description: 'Oral thrush is a common fungal infection caused by Candida albicans that appears as white patches on the tongue, inner cheeks, gums, and palate of babies. Unlike milk residue, thrush patches do not wipe off easily and may bleed if scraped. Thrush is most common in babies under 6 months due to their immature immune systems and is generally not serious, though it can cause discomfort during feeding.',
  possibleCauses: [
    { cause: 'Normal Candida overgrowth in newborns with immature immune systems', likelihood: 'common' },
    { cause: 'Transmission during vaginal delivery from maternal yeast', likelihood: 'common' },
    { cause: 'Antibiotic use (baby or breastfeeding mother)', likelihood: 'common' },
    { cause: 'Pacifier or bottle nipple contamination', likelihood: 'uncommon' },
    { cause: 'Inhaled corticosteroid use without mouth rinsing', likelihood: 'uncommon' },
    { cause: 'Immunodeficiency (persistent or severe thrush)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Very common in newborns. White coating on tongue alone is often just milk residue. True thrush appears on inner cheeks and gums and does not wipe off.', whenToWorry: 'Baby refusing to feed due to pain, extensive patches covering most of the mouth, or thrush not responding to treatment after 2 weeks.' },
    { ageRange: '2-6 months', normalVariation: 'Peak age for thrush. Mild patches that respond to antifungal treatment within 1-2 weeks are typical.', whenToWorry: 'Recurrent thrush (more than 3 episodes), spreading to throat causing swallowing difficulty, or associated diaper rash not responding to treatment.' },
    { ageRange: '6-12 months', normalVariation: 'Thrush becomes less common as immune system matures. May occasionally appear after antibiotic courses.', whenToWorry: 'New-onset thrush in older infant without clear trigger (antibiotics), persistent thrush despite treatment, or poor weight gain.' },
    { ageRange: '1-3 years', normalVariation: 'Uncommon in healthy toddlers. May appear after prolonged antibiotic use or inhaled steroid use for asthma.', whenToWorry: 'Recurrent or persistent thrush in a toddler without clear cause warrants immune evaluation.' },
  ],
  urgencyLevels: {
    emergency: [
      'Thrush spreading to throat causing breathing difficulty or drooling',
      'Baby completely refusing all feeds with signs of dehydration',
    ],
    urgent: [
      'Extensive thrush causing significant feeding refusal for more than 24 hours',
      'Thrush with high fever in young infant under 3 months',
      'Thrush spreading to esophagus (gagging, refusing solids, arching)',
    ],
    sameDay: [
      'Moderate thrush causing discomfort during feeding',
      'Thrush not improving after 7 days of antifungal treatment',
      'Recurrent thrush episodes (third or more occurrence)',
    ],
    monitor: [
      'Mild white patches on tongue or cheeks with normal feeding',
      'Thrush responding well to prescribed antifungal treatment',
      'White tongue coating that wipes off easily (likely milk residue, not thrush)',
    ],
  },
  homeRemedies: [
    'Sterilize pacifiers, bottle nipples, and teething toys daily by boiling for 5 minutes',
    'Wash hands thoroughly before and after feeding',
    'If breastfeeding, keep nipples clean and dry; treat nipple thrush simultaneously if present',
    'Allow breast to air-dry after nursing',
    'Replace toothbrushes after thrush treatment is complete',
    'Offer water after milk feeds (in babies over 6 months) to rinse mouth',
    'Use prescribed nystatin or miconazole as directed — apply after feeds, not before',
    'Wash all toys that go in baby\'s mouth in hot soapy water daily',
    'Do NOT use gentian violet without medical supervision due to risk of mouth ulcers',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['mouth-sores', 'refusing-to-eat', 'drooling'],
  relatedIllnessSlugs: ['oral-thrush', 'candidal-diaper-rash'],
  relatedConcernSlugs: ['white-tongue-baby', 'baby-tongue-white'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Thrush and Other Candida Infections. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Thrush-and-Other-Candida-Infections.aspx' },
    { org: 'NHS', citation: 'NHS. Oral thrush in babies. NHS.uk.', url: 'https://www.nhs.uk/conditions/oral-thrush-mouth-thrush/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Candida infections of the mouth, throat, and esophagus.', url: 'https://www.cdc.gov/candidiasis/about/oropharyngeal-esophageal.html' },
  ],
};
