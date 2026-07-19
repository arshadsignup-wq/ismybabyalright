import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'drooling',
  title: 'Excessive Drooling in Babies & Toddlers',
  bodySystem: 'mouth-throat',
  description: 'Drooling (sialorrhea) is extremely common in babies starting around 2-3 months as salivary glands become active. Babies produce saliva faster than they can swallow it, especially before they develop the motor skills to keep their mouths closed. Drooling peaks around 3-6 months and often increases significantly during teething. It is almost always a normal developmental phase that resolves by age 2-3 as swallowing coordination matures.',
  possibleCauses: [
    { cause: 'Normal developmental drooling (immature swallowing)', likelihood: 'common' },
    { cause: 'Teething', likelihood: 'common' },
    { cause: 'Oral exploration (mouthing objects)', likelihood: 'common' },
    { cause: 'Upper respiratory infection or nasal congestion', likelihood: 'uncommon' },
    { cause: 'Mouth sores or throat infection causing painful swallowing', likelihood: 'uncommon' },
    { cause: 'Tongue-tie or low oral muscle tone', likelihood: 'uncommon' },
    { cause: 'Neurological condition affecting swallowing (cerebral palsy)', likelihood: 'rare' },
    { cause: 'Epiglottitis or retropharyngeal abscess', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Drooling typically begins around 2-3 months when salivary glands mature. Some drool is normal as babies learn to manage saliva.', whenToWorry: 'Sudden excessive drooling with difficulty breathing (possible airway obstruction). Drooling with inability to swallow or choking on saliva.' },
    { ageRange: '3-6 months', normalVariation: 'Peak drooling period. Babies drool heavily as they mouth objects and prepare for teething. Soaking through bibs is normal. Does NOT necessarily mean teeth are imminent.', whenToWorry: 'Drooling with high fever, refusal to eat, and visible mouth sores. Drooling with neck swelling or difficulty breathing.' },
    { ageRange: '6-12 months', normalVariation: 'Active teething increases drooling. Drooling while concentrating on new motor skills (crawling, standing) is normal.', whenToWorry: 'New-onset drooling with stridor or breathing changes. Drooling with sudden inability to swallow after previously managing well.' },
    { ageRange: '1-3 years', normalVariation: 'Drooling gradually decreases as oral motor control improves. Some drooling during concentration or sleep is still normal up to age 2-3.', whenToWorry: 'Persistent significant drooling beyond age 2-3 years with speech delays or feeding difficulties may indicate oral motor weakness. Sudden drooling in a well toddler could suggest foreign body or throat infection.' },
  ],
  urgencyLevels: {
    emergency: [
      'Sudden drooling with difficulty breathing, stridor, or neck extension (possible epiglottitis or airway obstruction)',
      'Drooling with inability to swallow and high fever (possible retropharyngeal abscess)',
      'Drooling after possible ingestion of caustic substance or foreign body',
    ],
    urgent: [
      'New sudden drooling with high fever and toxic appearance',
      'Drooling with neck swelling or stiffness',
      'Complete inability to swallow fluids',
    ],
    sameDay: [
      'Drooling with mouth sores causing feeding difficulty',
      'Persistent drooling beyond age 3 with speech or developmental concerns',
      'Drooling with foul odor suggesting possible foreign body in nose or mouth',
    ],
    monitor: [
      'Normal developmental drooling in baby under 2 years',
      'Increased drooling during teething with no other concerning symptoms',
      'Mild increase in drooling during a cold or congestion',
    ],
  },
  homeRemedies: [
    'Use absorbent drool bibs and change frequently to keep chin dry',
    'Apply barrier cream (petroleum jelly or lanolin) to chin and neck to prevent drool rash',
    'Offer clean teething toys or cold washcloths to chew on',
    'Gently wipe face with soft cloth regularly throughout the day',
    'Keep the area around mouth and chin dry to prevent irritation',
    'Dress baby in layers that can be easily changed when soaked',
    'For older babies, encourage drinking from a straw cup to strengthen oral muscles',
    'If drool rash develops, keep area clean and apply a gentle moisture barrier at night',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['mouth-sores', 'sore-throat', 'tongue-tie'],
  relatedIllnessSlugs: ['teething', 'epiglottitis', 'hand-foot-mouth'],
  relatedConcernSlugs: ['baby-drooling-a-lot', 'drool-rash-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Drooling. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Drooling.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Teething: 4 to 7 Months. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-4-to-7-Months.aspx' },
    { org: 'NIH', citation: 'Meningaud JP, et al. Drooling of saliva: A review of the etiology and management options. Oral Surgery. 2006.', url: 'https://pubmed.ncbi.nlm.nih.gov/16360305/' },
  ],
};
