import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'bleeding-gums',
  title: 'Bleeding Gums in Babies & Toddlers',
  bodySystem: 'mouth-throat',
  description: 'Bleeding gums in babies and toddlers can occur from teething (as teeth break through the gum tissue), minor trauma from falls or biting, or early gingivitis from plaque buildup. Occasional mild bleeding from the gums during teething or after bumping the mouth is common and usually not a concern. However, spontaneous or persistent gum bleeding without clear cause should be evaluated, as it can rarely indicate bleeding disorders, vitamin deficiencies, or systemic conditions.',
  possibleCauses: [
    { cause: 'Teething (eruption of teeth through gums)', likelihood: 'common' },
    { cause: 'Trauma (falls, biting hard objects, toothbrush injury)', likelihood: 'common' },
    { cause: 'Gingivitis from plaque buildup (toddlers with poor oral hygiene)', likelihood: 'common' },
    { cause: 'Eruption cyst/hematoma (bluish swelling over erupting tooth)', likelihood: 'uncommon' },
    { cause: 'Viral gingivostomatitis (herpes or Coxsackie)', likelihood: 'uncommon' },
    { cause: 'Vitamin C deficiency (scurvy) — very rare in developed countries', likelihood: 'rare' },
    { cause: 'Bleeding disorders (hemophilia, ITP, leukemia)', likelihood: 'rare' },
    { cause: 'Medications (rarely relevant in pediatrics)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Gums may appear swollen or slightly reddened before first teeth erupt (around 4-7 months). A small amount of blood-tinged drool during early teething can be normal.', whenToWorry: 'Spontaneous gum bleeding in a pre-teething infant with no trauma history. Bleeding from gums with bruising elsewhere on body.' },
    { ageRange: '6-12 months', normalVariation: 'Mild bleeding as teeth erupt is normal. Gums may bleed slightly when wiped with a cloth during cleaning. Eruption cysts (dark blue bumps) occasionally appear and resolve.', whenToWorry: 'Heavy or persistent bleeding from an eruption site. Bleeding that does not stop within 10 minutes of gentle pressure. Bleeding accompanied by unexplained bruising or petechiae.' },
    { ageRange: '1-3 years', normalVariation: 'Minor gum bleeding from falls or enthusiastic toothbrushing is common in active toddlers. Slight bleeding when flossing is started between tight teeth.', whenToWorry: 'Spontaneous gum bleeding without trauma, swollen/red gums with pus (periodontal abscess), gum bleeding with easy bruising or nosebleeds that are hard to stop, or gum overgrowth.' },
  ],
  urgencyLevels: {
    emergency: [
      'Heavy gum bleeding that cannot be stopped with 15 minutes of direct pressure',
      'Gum bleeding with widespread petechiae, bruising, or signs of bleeding elsewhere (possible leukemia or clotting disorder)',
      'Gum bleeding after major facial trauma with possible jaw fracture',
    ],
    urgent: [
      'Spontaneous gum bleeding with pallor, fatigue, and/or unexplained bruises',
      'Gum bleeding with high fever and severely swollen, painful gums',
      'Tooth avulsion (knocked out) with bleeding socket in child with permanent teeth',
    ],
    sameDay: [
      'Gum bleeding after trauma that stopped but parent is concerned about tooth damage',
      'Persistently swollen, red, bleeding gums suggesting gingivitis needing dental evaluation',
      'Recurrent gum bleeding episodes without clear cause',
    ],
    monitor: [
      'Mild gum bleeding during teething that resolves quickly',
      'Slight bleeding from toothbrushing that improves with gentler technique',
      'Eruption cyst (bluish gum swelling) that is not painful or bleeding significantly',
    ],
  },
  homeRemedies: [
    'Apply gentle pressure with a clean, damp gauze for 10 minutes to stop active bleeding',
    'Offer cold teething rings or a cold wet washcloth to soothe swollen gums',
    'Use a soft-bristled age-appropriate toothbrush and brush gently along the gum line',
    'Begin dental hygiene early — wipe gums with damp cloth from birth, brush with first tooth',
    'Avoid giving hard objects that could damage gums (rigid plastic, hard crackers)',
    'For toddlers, brush twice daily with a rice-grain amount of fluoride toothpaste',
    'If gums bleed during brushing, do NOT stop brushing — continue gently and gums will toughen',
    'Schedule first dental visit by age 1 or within 6 months of first tooth',
    'Do NOT apply aspirin or numbing gel directly to bleeding gums',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['mouth-sores', 'drooling', 'bad-breath'],
  relatedIllnessSlugs: ['gingivitis', 'herpes-gingivostomatitis', 'teething'],
  relatedConcernSlugs: ['baby-bleeding-gums-teething', 'toddler-gum-bleeding'],
  sources: [
    { org: 'AAPD', citation: 'American Academy of Pediatric Dentistry. Guideline on Periodicity of Examination, Preventive Dental Services, and Oral Treatment for Infants, Children, and Adolescents.', url: 'https://www.aapd.org/research/oral-health-policies--recommendations/periodicity-of-examination-preventive-dental-services-anticipatory-guidance-counseling-and-oral-treatment-for-infants-children-and-adolescents/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Brushing Up on Oral Health. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/oral-health/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institute of Dental and Craniofacial Research. Periodontal (Gum) Disease.', url: 'https://www.nidcr.nih.gov/health-info/gum-disease' },
  ],
};
