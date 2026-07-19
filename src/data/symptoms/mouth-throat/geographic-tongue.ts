import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'geographic-tongue',
  title: 'Geographic Tongue in Babies & Toddlers',
  bodySystem: 'mouth-throat',
  description: 'Geographic tongue (benign migratory glossitis) is a common, harmless condition where smooth red patches with white or raised borders appear on the tongue surface, creating a map-like appearance. The patches change shape, size, and location over days to weeks as areas of papillae (tiny bumps) shed and regrow. Geographic tongue affects approximately 1-3% of the population, can appear in infancy, and is entirely benign. It is not infectious, not caused by poor hygiene, and does not lead to cancer or other serious conditions.',
  possibleCauses: [
    { cause: 'Idiopathic (unknown cause; likely genetic predisposition)', likelihood: 'common' },
    { cause: 'Family history of geographic tongue or fissured tongue', likelihood: 'common' },
    { cause: 'Possible association with environmental triggers (stress, certain foods)', likelihood: 'uncommon' },
    { cause: 'Association with atopy (eczema, asthma, allergies)', likelihood: 'uncommon' },
    { cause: 'Nutritional deficiency (zinc, B vitamins) — debated association', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Geographic tongue can appear as early as infancy. Smooth red patches that migrate are characteristic. Baby shows no signs of discomfort.', whenToWorry: 'White patches that do NOT move or change location may be thrush rather than geographic tongue. Patches that bleed or cause feeding refusal need evaluation.' },
    { ageRange: '6-12 months', normalVariation: 'Patches may come and go, sometimes disappearing for weeks before returning. The tongue otherwise functions normally.', whenToWorry: 'Painful patches causing feeding difficulty, ulceration within the patches, or spreading beyond the tongue to other oral surfaces.' },
    { ageRange: '1-3 years', normalVariation: 'Toddlers may have geographic tongue that waxes and wanes. Some sensitivity to spicy or acidic foods is normal. Condition can persist indefinitely or resolve spontaneously.', whenToWorry: 'Persistent tongue pain affecting eating, patches with thick white coating (possible secondary infection), or other oral lesions appearing simultaneously.' },
  ],
  urgencyLevels: {
    emergency: [
      'Geographic tongue itself is never an emergency — it is a benign condition',
    ],
    urgent: [],
    sameDay: [
      'Uncertain diagnosis — patches that could be geographic tongue or thrush and parent wants confirmation',
      'Geographic tongue with significant pain affecting eating or drinking',
    ],
    monitor: [
      'Typical geographic tongue with migrating red patches and no symptoms',
      'Mild sensitivity to certain foods without feeding refusal',
      'Parent anxiety about the appearance (reassurance is appropriate)',
    ],
  },
  homeRemedies: [
    'No treatment is required for asymptomatic geographic tongue',
    'Avoid spicy, acidic, or very salty foods if they cause sensitivity',
    'Maintain normal oral hygiene with gentle tongue brushing for toddlers',
    'If patches are mildly uncomfortable, offer cool water or milk after meals',
    'Reassurance is the primary intervention — the condition is completely benign',
    'Keep a photo diary if you want to show the doctor the pattern of changes',
    'Zinc-containing mouthwashes have limited evidence but may help if painful (consult doctor first)',
    'Do NOT scrape or try to remove the patches — this serves no purpose and may irritate',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['thrush', 'mouth-sores'],
  relatedIllnessSlugs: ['geographic-tongue', 'oral-thrush'],
  relatedConcernSlugs: ['baby-tongue-looks-weird', 'red-patches-baby-tongue'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Mouth and Teeth. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/default.aspx' },
    { org: 'NIH', citation: 'Assimakopoulos D, et al. Benign migratory glossitis or geographic tongue: an enigmatic oral lesion. American Journal of Medicine. 2002;113(9):751-755.', url: 'https://pubmed.ncbi.nlm.nih.gov/12517366/' },
    { org: 'AAPD', citation: 'American Academy of Pediatric Dentistry. Guideline on Oral Conditions in Pediatric Patients.', url: 'https://www.aapd.org/research/oral-health-policies--recommendations/' },
  ],
};
