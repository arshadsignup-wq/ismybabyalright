import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'mucus-in-stool',
  title: 'Mucus in Baby Stool',
  bodySystem: 'abdomen',
  description: 'Mucus in a baby\'s stool appears as a jelly-like, stringy, or slimy substance that may be clear, white, yellow, or green. A small amount of mucus in stool is normal — the intestinal lining produces mucus to help stool pass smoothly. However, large amounts of mucus, especially combined with blood, diarrhea, or other symptoms, can indicate food allergy (particularly cow\'s milk protein allergy), infection, or inflammation. Increased mucus during teething is also common due to excess saliva being swallowed.',
  possibleCauses: [
    { cause: 'Excess saliva swallowed during teething', likelihood: 'common' },
    { cause: 'Viral gastroenteritis (stomach bug)', likelihood: 'common' },
    { cause: 'Normal variation in breastfed baby stool', likelihood: 'common' },
    { cause: 'Cow\'s milk protein allergy (CMPA)', likelihood: 'uncommon' },
    { cause: 'Bacterial gastroenteritis', likelihood: 'uncommon' },
    { cause: 'Food intolerance during solid food introduction', likelihood: 'uncommon' },
    { cause: 'Intussusception (mucus with "currant jelly" bloody stool)', likelihood: 'rare' },
    { cause: 'Inflammatory bowel disease (extremely rare in infants)', likelihood: 'rare' },
    { cause: 'Cystic fibrosis', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Breastfed babies often have loose, seedy stools that may contain small amounts of mucus. This is normal. Transitional stools in the first week may be mucousy.', whenToWorry: 'Mucus with blood streaks (possible CMPA). Large amounts of mucus with every stool and poor weight gain. Mucus with foul-smelling watery diarrhea suggesting infection.' },
    { ageRange: '3-6 months', normalVariation: 'Increased mucus during teething phase (4-6 months) is very common from excess saliva. Occasional mucousy stool without other symptoms is usually not concerning.', whenToWorry: 'Persistent bloody mucus streaks in stool (CMPA or allergic proctocolitis). Mucus with diarrhea and fever. Sudden onset of mucus with jelly-like blood and severe crying (intussusception).' },
    { ageRange: '6-12 months', normalVariation: 'Introduction of new foods may change stool character including mucus content. Some mucus during teething or colds (swallowed mucus) is normal.', whenToWorry: 'Persistent mucus with blood after introduction of specific foods. Mucus with progressive diarrhea and weight loss. "Currant jelly" stool (mucus mixed with blood) with episodic pain.' },
    { ageRange: '1-3 years', normalVariation: 'Toddlers with viral gastroenteritis commonly have mucousy stools. Some mucus during and after a cold from swallowed nasal secretions is expected.', whenToWorry: 'Chronic mucousy diarrhea lasting more than 2-3 weeks. Mucus with blood in an otherwise healthy toddler. Mucus with foul-smelling greasy stools and poor growth (possible malabsorption).' },
  ],
  urgencyLevels: {
    emergency: [
      '"Currant jelly" stool (bloody mucus) with episodic severe crying/drawing up legs — possible intussusception',
      'Large amounts of bloody mucus with lethargy and dehydration',
      'Mucousy bloody stool with high fever and toxic-appearing child',
    ],
    urgent: [
      'Blood-streaked mucousy stool with poor feeding and weight loss in young infant',
      'Mucousy diarrhea with signs of dehydration (reduced wet diapers, dry mouth, no tears)',
      'Sudden onset of bloody mucus in a previously well infant 3-12 months old',
    ],
    sameDay: [
      'Persistent blood-streaked mucus in stool (possible CMPA — needs evaluation)',
      'Mucousy stool with vomiting lasting more than 24 hours',
      'Chronic mucus in stool with poor weight gain',
    ],
    monitor: [
      'Small amount of mucus in stool during teething with no blood and normal feeding',
      'Occasional mucousy stool in a breastfed baby who is growing well',
      'Brief mucousy stools during a viral illness that are resolving',
    ],
  },
  homeRemedies: [
    'Small amounts of mucus without blood in a thriving baby typically need no treatment',
    'During teething: offer teething toys to reduce amount of saliva swallowed',
    'Ensure adequate hydration if mucus accompanies diarrhea',
    'If CMPA is suspected in breastfed baby: mother may trial eliminating dairy (under medical guidance)',
    'Take a photo of the diaper to show the pediatrician',
    'Keep a food diary when introducing solids to identify potential triggers',
    'Continue breastfeeding — breast milk has anti-inflammatory properties',
    'Do NOT switch formulas without discussing with your pediatrician first',
    'If stool contains "currant jelly" blood and mucus with pain: go to emergency room immediately',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['green-poop', 'rectal-bleeding', 'diarrhea', 'gas-bloating'],
  relatedIllnessSlugs: ['milk-protein-allergy', 'intussusception', 'gastroenteritis', 'allergic-proctocolitis'],
  relatedConcernSlugs: ['mucus-in-baby-poop', 'slimy-baby-stool', 'jelly-in-diaper'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Baby Poop: What\'s Normal? HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Pooping-By-the-Numbers.aspx' },
    { org: 'AAP', citation: 'Koletzko S, et al. Diagnostic approach and management of cow\'s-milk protein allergy in infants and children. JPGN. 2012;55(2):221-229.', url: 'https://pubmed.ncbi.nlm.nih.gov/22569527/' },
    { org: 'NIH', citation: 'National Institute of Diabetes and Digestive and Kidney Diseases. Symptoms & Causes of GER & GERD in Infants.', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants' },
  ],
};
