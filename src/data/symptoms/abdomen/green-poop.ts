import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'green-poop',
  title: 'Green Poop in Babies & Toddlers',
  bodySystem: 'abdomen',
  description: 'Green-colored stool in babies is very common and usually not a cause for concern. Breastfed newborns normally have dark green transitional stools in the first few days of life. In older babies, green stool can result from iron-fortified formula, green vegetables, foremilk/hindmilk imbalance, fast intestinal transit during illness, or simply normal variation. The color alone — without other symptoms like blood, severe diarrhea, or pain — rarely indicates a problem. However, dark green or bile-stained green vomiting (not stool) is always an emergency.',
  possibleCauses: [
    { cause: 'Normal transitional stools in newborns (meconium turning to milk stool)', likelihood: 'common' },
    { cause: 'Iron-fortified formula or iron supplements', likelihood: 'common' },
    { cause: 'Green foods (peas, spinach, kale, green purees)', likelihood: 'common' },
    { cause: 'Foremilk/hindmilk imbalance in breastfed babies', likelihood: 'common' },
    { cause: 'Viral gastroenteritis (fast transit = less bile reabsorption)', likelihood: 'common' },
    { cause: 'Food dyes or colored medications', likelihood: 'uncommon' },
    { cause: 'Food allergy or intolerance (often with mucus or blood)', likelihood: 'uncommon' },
    { cause: 'Bile metabolism issues (very rare)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-1 week', normalVariation: 'Meconium (first stools) is dark green-black and sticky. Transitional stools then turn dark green to greenish-brown before becoming yellow (breastfed) or tan (formula-fed). This is completely normal.', whenToWorry: 'Pale or white stool (possible biliary atresia — needs urgent evaluation). Meconium not passed within 48 hours of birth.' },
    { ageRange: '1 week - 3 months', normalVariation: 'Breastfed babies may have occasional green stools, especially if oversupply or fast feeds lead to more foremilk intake. Formula-fed babies on iron-fortified formula commonly have dark green stools.', whenToWorry: 'Green frothy stools with blood streaks and fussiness (possible milk protein allergy). Persistent watery green diarrhea with poor weight gain. Pale/clay-colored stool (not green — liver issue).' },
    { ageRange: '3-12 months', normalVariation: 'Green poop after eating green foods is completely normal. Some color variation between stools is expected.', whenToWorry: 'Green stool with significant blood or mucus. Green watery diarrhea with dehydration signs. Persistent green stool with fussiness and feeding refusal despite no obvious dietary cause.' },
    { ageRange: '1-3 years', normalVariation: 'Toddlers eating green vegetables, green popsicles, or green-colored foods/drinks will produce green stool. Faster transit during mild illness can produce green stool.', whenToWorry: 'Persistent green stool with chronic diarrhea and poor growth. Green stool with blood that is not explained by dietary causes. Green stool with abdominal pain and distension.' },
  ],
  urgencyLevels: {
    emergency: [
      'IMPORTANT: Green/bilious VOMITING (not stool) is always an emergency — possible bowel obstruction',
      'Pale/white/clay-colored stool with jaundice (possible biliary atresia — not green, but sometimes confused)',
      'Green bloody diarrhea with signs of severe dehydration and toxicity',
    ],
    urgent: [
      'Green stool with significant blood and signs of dehydration',
      'Persistent green watery diarrhea with poor feeding and weight loss in young infant',
    ],
    sameDay: [
      'Green stool with blood streaks persisting for more than a few days (CMPA evaluation)',
      'Persistent green frothy stool with fussiness and poor weight gain in breastfed infant',
    ],
    monitor: [
      'Green stool after eating green foods — completely normal',
      'Dark green stool in formula-fed baby on iron-fortified formula — normal',
      'Occasional green stool in a thriving, otherwise well baby',
      'Green transitional stools in the first week of life — normal',
    ],
  },
  homeRemedies: [
    'Green stool alone without other symptoms needs no treatment',
    'If breastfeeding and baby has frequent green frothy stools: try feeding from one breast per session to ensure adequate hindmilk intake',
    'Keep a food diary when introducing solids to track which foods produce green stool',
    'Iron supplements and iron-fortified formula commonly cause dark green/black stool — this is harmless',
    'If concerned, take a photo of the diaper to show the pediatrician',
    'Distinguish between green STOOL (usually not concerning) and green VOMIT (always concerning)',
    'Continue normal feeding pattern — do NOT restrict green foods as they are healthy',
    'If formula-fed with green stool and symptoms (blood, excessive fussiness): discuss with doctor before switching formula',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['mucus-in-stool', 'diarrhea', 'black-stool', 'rectal-bleeding'],
  relatedIllnessSlugs: ['milk-protein-allergy', 'gastroenteritis', 'biliary-atresia'],
  relatedConcernSlugs: ['green-baby-poop', 'dark-green-stool-baby', 'baby-poop-color'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. The Many Colors of Poop. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Pooping-By-the-Numbers.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Babys-First-Bowel-Movements.aspx' },
    { org: 'NIH', citation: 'National Institute of Diabetes and Digestive and Kidney Diseases. Your Digestive System and How It Works.', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works' },
  ],
};
