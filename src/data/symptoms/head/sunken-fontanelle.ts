import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'sunken-fontanelle',
  title: 'Sunken Fontanelle (Soft Spot) in Babies',
  bodySystem: 'head',
  description: 'A sunken fontanelle is when the soft spot on the top of a baby\'s head appears noticeably depressed or concave. While a very slight dip is normal, a markedly sunken fontanelle is one of the most reliable early signs of dehydration in infants and requires prompt attention.',
  possibleCauses: [
    { cause: 'Dehydration (from vomiting, diarrhea, or poor feeding)', likelihood: 'common' },
    { cause: 'Insufficient fluid intake', likelihood: 'common' },
    { cause: 'Normal variation when baby is upright', likelihood: 'common' },
    { cause: 'Malnutrition or failure to thrive', likelihood: 'uncommon' },
    { cause: 'Diabetes insipidus', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'A slight dip or concavity in the fontanelle is normal, especially when baby is upright. The fontanelle may appear slightly sunken between feedings.', whenToWorry: 'Markedly sunken fontanelle combined with fewer than 3-4 wet diapers in 24 hours, dry mouth, no tears when crying, or lethargy. This suggests dehydration.' },
    { ageRange: '3-6 months', normalVariation: 'Fontanelle still easily visible and may have slight concavity at rest. Normal to appear more sunken when baby is in upright position.', whenToWorry: 'Noticeably sunken fontanelle with vomiting, diarrhea, refusal to feed, dry lips, dark urine, or baby seems unusually sleepy or fussy.' },
    { ageRange: '6-12 months', normalVariation: 'Fontanelle gradually decreases in size. Slight depression remains normal, especially during active illness if maintaining hydration.', whenToWorry: 'Deeply sunken fontanelle with signs of illness, weight loss, reduced urine output, or prolonged feeding difficulties.' },
    { ageRange: '1-2 years', normalVariation: 'Fontanelle is closing or may already be closed. If still open, mild concavity continues to be normal.', whenToWorry: 'Visibly sunken fontanelle at this age with any signs of illness or dehydration warrants medical attention.' },
  ],
  urgencyLevels: {
    emergency: [
      'Deeply sunken fontanelle with no wet diapers for 8+ hours',
      'Sunken fontanelle with baby being unresponsive or extremely lethargic',
      'Sunken fontanelle with rapid breathing and dry mucous membranes',
      'Sunken fontanelle in a newborn (under 1 month) who is refusing all feeds',
      'Sunken fontanelle with bloody diarrhea or persistent vomiting',
    ],
    urgent: [
      'Noticeably sunken fontanelle with fewer than 4 wet diapers in 24 hours',
      'Sunken fontanelle with vomiting or diarrhea lasting more than 12 hours',
      'Sunken fontanelle with no tears when crying and dry mouth',
      'Baby refusing to drink with visibly sunken fontanelle',
    ],
    sameDay: [
      'Mildly sunken fontanelle with slight decrease in wet diapers but baby still feeding',
      'Sunken fontanelle during a mild illness but baby taking some fluids',
      'Fontanelle appears more sunken than usual but baby has no other symptoms',
    ],
    monitor: [
      'Slight concavity when baby is upright that resolves when lying down (normal)',
      'Fontanelle appears mildly sunken between feedings but baby has normal wet diapers',
    ],
  },
  homeRemedies: [
    'Increase frequency of breast or bottle feedings',
    'Offer small, frequent feeds rather than large volumes at once',
    'For babies 6+ months, offer oral rehydration solution (Pedialyte) in addition to milk',
    'Track wet diapers carefully \u2014 aim for at least 4-6 per day for infants',
    'If breastfeeding and baby is dehydrated, nurse more often and consider supplementation per doctor advice',
    'Keep baby cool to reduce fluid losses from sweating',
    'Weigh baby if possible to track hydration status',
  ],
  triageSlug: 'dehydration',
  relatedSymptomSlugs: ['bulging-fontanelle', 'dehydration', 'poor-feeding', 'diarrhea', 'vomiting'],
  relatedIllnessSlugs: ['gastroenteritis', 'rotavirus'],
  relatedConcernSlugs: ['baby-not-drinking-enough', 'baby-soft-spot-sunken'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Signs of Dehydration in Infants & Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/dehydration.aspx' },
    { org: 'MedlinePlus', citation: 'U.S. National Library of Medicine. Fontanelles - sunken.', url: 'https://medlineplus.gov/ency/article/003309.htm' },
    { org: 'WHO', citation: 'World Health Organization. Clinical Management of Acute Diarrhoea. WHO/UNICEF Joint Statement.', url: 'https://www.who.int/publications/i/item/WHO-FCH-CAH-04.7' },
  ],
};
