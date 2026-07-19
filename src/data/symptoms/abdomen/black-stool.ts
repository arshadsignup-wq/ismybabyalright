import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'black-stool',
  title: 'Black Stool in Babies & Toddlers',
  bodySystem: 'abdomen',
  description: 'Black stool in babies can be completely normal or can indicate a potentially serious issue depending on the baby\'s age and context. In newborns, black tarry meconium is the normal first stool passed in the first 2-3 days of life. In older babies and toddlers, black stool is most commonly caused by iron supplements or iron-fortified foods. However, true tarry black stool (melena) with a characteristic foul odor can indicate bleeding in the upper gastrointestinal tract (stomach or upper intestines) and requires urgent medical evaluation.',
  possibleCauses: [
    { cause: 'Meconium in newborns (first 2-3 days of life — normal)', likelihood: 'common' },
    { cause: 'Iron supplements or iron-fortified formula/cereal', likelihood: 'common' },
    { cause: 'Dark-colored foods (blueberries, blackberries, licorice, Oreos)', likelihood: 'common' },
    { cause: 'Bismuth subsalicylate (Pepto-Bismol) — should not be given to children', likelihood: 'uncommon' },
    { cause: 'Swallowed blood from cracked nipple during breastfeeding', likelihood: 'uncommon' },
    { cause: 'Swallowed blood from nosebleed', likelihood: 'uncommon' },
    { cause: 'Upper gastrointestinal bleeding (peptic ulcer, esophagitis)', likelihood: 'rare' },
    { cause: 'Meckel diverticulum bleeding', likelihood: 'rare' },
    { cause: 'Coagulation disorder', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 days', normalVariation: 'Meconium — thick, sticky, dark green-black stool — is the normal first stool. It transitions to dark green then yellow/tan as baby begins digesting milk. Meconium should be passed within 24-48 hours of birth.', whenToWorry: 'Failure to pass meconium within 48 hours (possible Hirschsprung disease or intestinal obstruction). Return to black tarry stool after transitional period has completed.' },
    { ageRange: '1 week - 6 months', normalVariation: 'Black stool from iron in formula is common and harmless. Some breast-fed babies whose mothers take iron have dark stool.', whenToWorry: 'True melena (tarry, sticky black stool with foul odor) not explained by iron supplements. Black stool with pallor, lethargy, or rapid heart rate (suggesting blood loss). Black stool appearing suddenly without dietary explanation.' },
    { ageRange: '6-12 months', normalVariation: 'Iron-fortified cereals, dark berries (blueberries, blackberries), and dark vegetables can produce very dark or black stool.', whenToWorry: 'Tarry foul-smelling black stool without dietary explanation. Black stool with vomiting (especially "coffee ground" vomit). Black stool with abdominal pain and pallor.' },
    { ageRange: '1-3 years', normalVariation: 'Dark foods (blueberries, blackberries, chocolate, dark beans, licorice) are the most common cause of dark/black stool in toddlers.', whenToWorry: 'Tarry black stool with abdominal pain. Black stool with pallor, fatigue, or fast heartbeat. Black stool following ingestion of corrosive substance or medication overdose.' },
  ],
  urgencyLevels: {
    emergency: [
      'True melena (tarry, foul-smelling black stool) not explained by iron or food — suggests upper GI bleeding',
      'Black stool with vomiting blood or "coffee ground" material',
      'Black stool with signs of significant blood loss (pallor, rapid heart rate, lethargy)',
      'Black stool after ingestion of caustic substance',
    ],
    urgent: [
      'Unexplained black stool in infant not on iron supplements',
      'Black stool with abdominal pain and distension',
      'Recurrent episodes of unexplained black stool',
    ],
    sameDay: [
      'Uncertain whether black stool is from iron/diet or from bleeding — needs evaluation',
      'Black stool in newborn persisting beyond day 3-4 of life',
    ],
    monitor: [
      'Black stool clearly from iron supplements (changes color when iron stopped)',
      'Dark/black stool after eating blueberries, blackberries, or dark foods',
      'Normal meconium in first 2-3 days of life',
    ],
  },
  homeRemedies: [
    'If baby is on iron supplements, dark/black-green stool is an expected harmless side effect',
    'Keep a food diary — dark berries, grape juice, and dark chocolate commonly darken stool',
    'To test if black stool is from iron: ask doctor if you can pause iron for 2-3 days and observe stool color change (do NOT stop iron without guidance)',
    'True melena has a distinctive tarry consistency and very foul odor — different from just dark-colored stool',
    'Take a photo of the diaper and note the smell/consistency to show the pediatrician',
    'If you suspect upper GI bleeding, do NOT give food or fluids until evaluated',
    'Do NOT give bismuth subsalicylate (Pepto-Bismol) to children — it causes black stool and contains salicylate',
    'If uncertain whether stool is black from diet or bleeding, always seek medical evaluation rather than guessing',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['rectal-bleeding', 'vomiting', 'abdominal-pain', 'green-poop'],
  relatedIllnessSlugs: ['upper-gi-bleed', 'peptic-ulcer', 'meckels-diverticulum'],
  relatedConcernSlugs: ['black-baby-poop', 'dark-stool-baby', 'tar-like-stool-infant'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. The Many Colors of Poop. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Pooping-By-the-Numbers.aspx' },
    { org: 'NIH', citation: 'National Institute of Diabetes and Digestive and Kidney Diseases. Bleeding in the Digestive Tract.', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/gastrointestinal-bleeding' },
    { org: 'AAP', citation: 'Fox VL. Gastrointestinal bleeding in infancy and childhood. Gastroenterology Clinics of North America. 2000;29(1):37-66.', url: 'https://pubmed.ncbi.nlm.nih.gov/10752017/' },
  ],
};
