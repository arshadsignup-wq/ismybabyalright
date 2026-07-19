import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'mouth-sores',
  title: 'Mouth Sores in Babies & Toddlers',
  bodySystem: 'mouth-throat',
  description: 'Mouth sores in babies and toddlers can appear as ulcers, blisters, or red spots on the gums, tongue, inner cheeks, lips, or palate. The most common causes include hand-foot-and-mouth disease (Coxsackie virus), herpetic gingivostomatitis (HSV-1), canker sores (aphthous ulcers), and minor trauma from biting or teething. Most mouth sores resolve on their own within 7-14 days, but they can cause significant pain and feeding difficulty.',
  possibleCauses: [
    { cause: 'Hand-foot-and-mouth disease (Coxsackie virus)', likelihood: 'common' },
    { cause: 'Canker sores (aphthous ulcers)', likelihood: 'common' },
    { cause: 'Minor trauma from biting, falls, or sharp food', likelihood: 'common' },
    { cause: 'Herpetic gingivostomatitis (primary HSV-1 infection)', likelihood: 'uncommon' },
    { cause: 'Herpangina (Coxsackie virus — back of throat)', likelihood: 'uncommon' },
    { cause: 'Viral stomatitis from other viruses', likelihood: 'uncommon' },
    { cause: 'Stevens-Johnson syndrome (medication reaction)', likelihood: 'rare' },
    { cause: 'Behcet disease or other autoimmune conditions', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Epstein pearls (small white cysts on gums/palate) are normal in newborns and resolve without treatment. Bohn nodules on gums are also benign.', whenToWorry: 'Vesicles or ulcers in a baby under 6 weeks (possible neonatal herpes — medical emergency). Multiple sores with high fever and poor feeding.' },
    { ageRange: '6-12 months', normalVariation: 'Small sores from teething or biting are common. Mild viral ulcers from hand-foot-and-mouth disease are common in this age group.', whenToWorry: 'Extensive ulceration with high fever, drooling, and feeding refusal lasting more than 3 days. Sores with bleeding gums (primary herpes).' },
    { ageRange: '1-3 years', normalVariation: 'Hand-foot-and-mouth disease is very common in toddlers, especially in daycare. Canker sores may begin to appear. Traumatic ulcers from falls or biting are frequent.', whenToWorry: 'Sores lasting more than 2 weeks, recurrent severe episodes, sores with skin rash and joint swelling, or inability to maintain hydration.' },
  ],
  urgencyLevels: {
    emergency: [
      'Mouth sores in newborn under 6 weeks (possible neonatal herpes)',
      'Extensive blistering of lips and mouth with skin peeling (Stevens-Johnson syndrome)',
      'Mouth sores with difficulty breathing or swallowing saliva',
      'Signs of severe dehydration (lethargy, sunken fontanelle, no tears)',
    ],
    urgent: [
      'High fever (over 40°C/104°F) with extensive mouth ulcers',
      'Inability to swallow fluids for more than 8 hours',
      'Spreading facial sores with swelling around eyes',
      'Mouth sores with bleeding that will not stop',
    ],
    sameDay: [
      'Multiple mouth sores with moderate feeding difficulty but still taking some fluids',
      'First episode of suspected herpes gingivostomatitis (fever, swollen gums, multiple ulcers)',
      'Mouth sore lasting more than 2 weeks without healing',
    ],
    monitor: [
      'Single canker sore with mild discomfort but normal feeding',
      'Mild hand-foot-and-mouth disease with child drinking adequately',
      'Traumatic mouth ulcer from a known injury, healing normally',
    ],
  },
  homeRemedies: [
    'Offer cold fluids and soft, bland foods (yogurt, smoothies, mashed banana)',
    'Avoid acidic, salty, or spicy foods that irritate sores',
    'Use age-appropriate pain relief (acetaminophen or ibuprofen for babies over 6 months)',
    'Offer ice pops or cold teething rings to numb pain before feeding',
    'Keep baby hydrated with frequent small sips of water or oral rehydration solution',
    'For toddlers, a mix of equal parts liquid antacid and diphenhydramine (Benadryl) can be dabbed on sores (ask doctor first)',
    'Do NOT use numbing gels with benzocaine in babies under 2 years (risk of methemoglobinemia)',
    'Maintain gentle oral hygiene — soft damp cloth to wipe gums',
    'Wash hands frequently to prevent spread of viral causes',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['thrush', 'drooling', 'refusing-to-eat', 'sore-throat'],
  relatedIllnessSlugs: ['hand-foot-mouth', 'herpes-gingivostomatitis', 'herpangina'],
  relatedConcernSlugs: ['baby-mouth-ulcers', 'toddler-mouth-sores'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Mouth Sores. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/default.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hand, Foot, and Mouth Disease. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Hand-Foot-and-Mouth-Disease.aspx' },
    { org: 'NIH', citation: 'National Institute of Dental and Craniofacial Research. Fever Blisters & Canker Sores.', url: 'https://www.nidcr.nih.gov/health-info/fever-blisters-canker-sores' },
  ],
};
