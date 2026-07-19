import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'hives',
  title: 'Hives (Urticaria) in Babies & Toddlers',
  bodySystem: 'skin',
  description: 'Hives (urticaria) are raised, itchy welts that can appear anywhere on the body. Individual welts are typically red or pink with a pale center, vary in size from small dots to large patches, and characteristically move around \u2014 appearing in one area and disappearing within hours only to appear elsewhere. In babies and toddlers, hives are most often triggered by viral infections rather than allergies.',
  possibleCauses: [
    { cause: 'Viral infection (most common trigger in young children)', likelihood: 'common' },
    { cause: 'Food allergy (milk, egg, peanut, tree nuts)', likelihood: 'uncommon' },
    { cause: 'Medication reaction (antibiotics, NSAIDs)', likelihood: 'uncommon' },
    { cause: 'Insect bite or sting reaction', likelihood: 'uncommon' },
    { cause: 'Contact allergy (latex, plants)', likelihood: 'uncommon' },
    { cause: 'Cold-induced urticaria', likelihood: 'rare' },
    { cause: 'Idiopathic (no cause identified)', likelihood: 'common' },
    { cause: 'Serum sickness-like reaction (delayed medication reaction)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Hives are less common under 6 months. Erythema toxicum in newborns can look similar but is a benign newborn rash (not true hives).', whenToWorry: 'Hives with facial or lip swelling (angioedema), hives with difficulty breathing or wheezing, hives with vomiting shortly after feeding a new food (possible food allergy/anaphylaxis).' },
    { ageRange: '6-12 months', normalVariation: 'Hives may appear during or after viral illnesses and can last several days. This is common and usually benign. Food-related hives are possible as new foods are introduced.', whenToWorry: 'Hives within minutes of eating a new food (especially peanut, egg, milk, or tree nuts), hives with facial swelling or vomiting, or hives with any respiratory symptoms.' },
    { ageRange: '1-3 years', normalVariation: 'Viral-associated hives are very common in toddlers. They may appear during a cold and persist for days or even weeks. Individual welts move around and resolve within 24 hours even if new ones appear.', whenToWorry: 'Hives with throat tightness, drooling, difficulty swallowing, or breathing changes. Hives with swelling of tongue or lips. Hives lasting longer than 6 weeks (chronic urticaria \u2014 needs evaluation).' },
    { ageRange: 'Any age', normalVariation: 'Acute hives (lasting less than 6 weeks) are extremely common in childhood and are usually self-limiting.', whenToWorry: 'Signs of anaphylaxis: hives PLUS difficulty breathing, facial/throat swelling, vomiting, dizziness, or multiple body systems involved. This requires immediate epinephrine and 911.' },
  ],
  urgencyLevels: {
    emergency: [
      'Hives with difficulty breathing, wheezing, or throat tightness (anaphylaxis)',
      'Hives with swelling of tongue, lips, or throat',
      'Hives with vomiting, dizziness, and feeling faint (systemic reaction)',
      'Hives within minutes of known allergen exposure with any breathing difficulty',
      'Baby appears limp or loses consciousness with hives',
    ],
    urgent: [
      'Hives with facial swelling (angioedema) but no breathing difficulty yet',
      'Widespread hives immediately following a new food or medication',
      'Hives with abdominal pain and joint swelling (possible serum sickness)',
      'Hives not responding to antihistamine and spreading rapidly',
    ],
    sameDay: [
      'First episode of hives for evaluation and allergy action plan',
      'Hives following a new medication (may need to stop the medication)',
      'Recurrent hives without clear trigger needing investigation',
    ],
    monitor: [
      'Mild hives during a viral illness that respond to antihistamine',
      'Single episode of hives that resolves with antihistamine and no systemic symptoms',
      'Known trigger-associated hives managed with established action plan',
    ],
  },
  homeRemedies: [
    'Give age-appropriate oral antihistamine (cetirizine/Zyrtec for 6+ months, diphenhydramine/Benadryl for 2+ years per doctor dosing)',
    'Apply cool compress to itchy areas (not ice directly on skin)',
    'Dress baby in loose, soft cotton clothing',
    'Lukewarm oatmeal bath to soothe itching',
    'Avoid hot baths which can worsen hives',
    'If food allergy suspected, note everything eaten in the prior 2 hours and avoid that food until evaluation',
    'Take photos of the hives to show the doctor (they often disappear before the appointment)',
    'If child has a prescribed epinephrine auto-injector, keep it accessible',
    'Note timing: did hives appear within minutes of a food (IgE allergy) or hours later (less likely allergy)?',
  ],
  triageSlug: 'hives',
  relatedSymptomSlugs: ['red-rash', 'swollen-eyelid', 'wheezing'],
  relatedIllnessSlugs: ['food-allergy', 'allergic-reaction', 'anaphylaxis'],
  relatedConcernSlugs: ['baby-hives-all-over', 'baby-allergic-reaction', 'hives-after-eating'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hives (Urticaria) in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Hives.aspx' },
    { org: 'ACAAI', citation: 'American College of Allergy, Asthma & Immunology. Hives in Children.', url: 'https://acaai.org/allergies/allergic-conditions/hives/' },
    { org: 'AAP', citation: 'Pite H, et al. Management of childhood urticaria: current knowledge and practical recommendations. Acta Paediatrica. 2013.', url: 'https://onlinelibrary.wiley.com/doi/10.1111/apa.12226' },
  ],
};
