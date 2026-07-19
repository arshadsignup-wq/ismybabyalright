import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'bowed-legs',
  title: 'Bowed Legs (Genu Varum) in Babies & Toddlers',
  bodySystem: 'limbs-joints',
  description: 'Bowed legs (genu varum) — where the knees curve outward when standing with feet together — are a normal part of development in babies and toddlers. Almost all babies are born with some degree of bowing due to their folded position in the womb. This typically straightens by age 18-24 months and may even transition to mild knock-knees by age 3-4. Persistent, worsening, or asymmetric bowing may need evaluation.',
  possibleCauses: [
    { cause: 'Physiologic bowing (normal developmental variant)', likelihood: 'common' },
    { cause: 'Normal intrauterine positioning effect', likelihood: 'common' },
    { cause: 'Blount disease (tibia vara — abnormal growth plate)', likelihood: 'uncommon' },
    { cause: 'Rickets (vitamin D deficiency)', likelihood: 'uncommon' },
    { cause: 'Skeletal dysplasia (achondroplasia and other conditions)', likelihood: 'rare' },
    { cause: 'Metabolic bone disease', likelihood: 'rare' },
    { cause: 'Previous fracture with growth disturbance', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'All newborns have bowed legs from intrauterine positioning. This is completely normal and expected. Legs may appear quite curved.', whenToWorry: 'Very severe bowing present at birth (skeletal dysplasia concern). Asymmetric bowing (one side much more than other). Short limbs disproportionate to body.' },
    { ageRange: '2-6 months', normalVariation: 'Bowing remains normal and expected. Legs may still appear significantly curved when baby is held upright.', whenToWorry: 'Progressive worsening of bowing. Asymmetric bowing. Signs of rickets (widened wrists, delayed fontanelle closure, poor growth).' },
    { ageRange: '6-12 months', normalVariation: 'Bowing should begin to gradually improve. Mild to moderate symmetrical bowing is still normal at this age. As baby begins to stand, bowing becomes more noticeable but is expected.', whenToWorry: 'Bowing that appears to be worsening rather than improving. Asymmetric bowing. Bowing with wrist widening or bony swelling (rickets). Bowing with poor growth or failure to thrive.' },
    { ageRange: '1-3 years', normalVariation: 'Physiologic bowing typically resolves by 18-24 months. Slight bowing at 12-18 months is still normal. By age 2-3, legs should be straight or beginning slight knock-knee pattern.', whenToWorry: 'Bowing worsening after 18 months (Blount disease concern). Severe bowing affecting walking. Asymmetric bowing. Bowing persisting beyond age 2-3 years. Pain with bowing. Short stature with bowing.' },
  ],
  urgencyLevels: {
    emergency: [
      'Sudden onset limb deformity after injury',
    ],
    urgent: [
      'Severe progressive bowing with pain or functional limitation',
      'Bowing with signs of rickets (swollen wrists, poor growth, seizures from low calcium)',
    ],
    sameDay: [
      'Bowing that is clearly worsening over time (take photos to document)',
      'Asymmetric bowing (one leg more curved than the other)',
      'Bowing persisting or worsening after age 2',
      'Bowing with lateral thrust of knee during walking',
    ],
    monitor: [
      'Symmetric mild-moderate bowing in a child under 2 (physiologic)',
      'Bowing that is gradually improving over time',
      'Known physiologic bowing with scheduled follow-up',
      'Mild bowing in new walker (under 18 months) that is stable',
    ],
  },
  homeRemedies: [
    'Reassurance: physiologic bowing is normal and resolves without treatment in most children',
    'Do NOT use braces, special shoes, or corrective devices for normal physiologic bowing — they do not help',
    'Take periodic photos (every 2-3 months) from the same angle to document improvement or changes',
    'Ensure adequate vitamin D intake (400 IU daily for all breastfed infants, as per AAP)',
    'Provide a diet with adequate calcium for bone health',
    'Allow normal activity — physiologic bowing does not limit play or development',
    'Ensure baby/toddler received vitamin D supplementation from birth if breastfed',
    'If concerned about progression: measure the gap between knees when ankles are touching (intercondylar distance) over time',
  ],
  relatedSymptomSlugs: ['in-toeing', 'toe-walking', 'limping'],
  relatedIllnessSlugs: ['rickets', 'blount-disease', 'skeletal-dysplasia'],
  relatedConcernSlugs: ['baby-bowed-legs', 'toddler-legs-curved', 'vitamin-d-deficiency-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bowed Legs (Genu Varum). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Bow-Legs.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Physiologic Genu Varum. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK562284/' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Bowed legs — When to see a doctor.', url: 'https://www.mayoclinic.org/symptoms/bowed-legs/basics/when-to-see-doctor/sym-20050765' },
  ],
};
