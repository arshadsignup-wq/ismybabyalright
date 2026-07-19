import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'strong-smelling-urine',
  title: 'Strong-Smelling Urine in Babies & Toddlers',
  bodySystem: 'genitourinary',
  description: 'Baby urine is usually nearly odorless or mildly sweet-smelling. Strong-smelling urine is most commonly caused by concentrated urine (dehydration) or dietary changes, but can also indicate a urinary tract infection (UTI). UTIs in babies can be difficult to detect as the only sign may be fever, irritability, or foul-smelling urine. Certain rare metabolic conditions also produce distinctive urine odors.',
  possibleCauses: [
    { cause: 'Concentrated urine from dehydration or reduced fluid intake', likelihood: 'common' },
    { cause: 'Dietary factors (asparagus, certain vitamins, garlic through breast milk)', likelihood: 'common' },
    { cause: 'Urinary tract infection (UTI)', likelihood: 'uncommon' },
    { cause: 'Stale diaper left too long (ammonia from bacterial breakdown)', likelihood: 'common' },
    { cause: 'Medications or supplements (vitamins, antibiotics)', likelihood: 'uncommon' },
    { cause: 'Maple syrup urine disease (MSUD — sweet/burnt sugar smell)', likelihood: 'rare' },
    { cause: 'Phenylketonuria (PKU — musty smell)', likelihood: 'rare' },
    { cause: 'Trimethylaminuria (fish odor syndrome)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Breastfed baby urine is typically nearly odorless. Formula-fed baby urine may have slightly stronger smell. Mild odor in concentrated first morning diapers is common.', whenToWorry: 'Persistently foul or unusually strong-smelling urine. Strong smell with fever (UTI concern — high priority in young infants). Unusual sweet or burnt sugar smell (metabolic disorder). Strong urine smell with poor feeding, vomiting, or lethargy.' },
    { ageRange: '2-6 months', normalVariation: 'Mild variations in urine odor are normal. Teething may change saliva and indirectly affect urine. Vitamin supplements may change smell.', whenToWorry: 'Foul-smelling urine with unexplained fever (UTI — needs investigation). Ammonia-like smell with fewer wet diapers (dehydration). Persistent strong odor not explained by diet or hydration. Strong smell with irritability during urination.' },
    { ageRange: '6-12 months', normalVariation: 'Introduction of solid foods commonly changes urine odor. Asparagus, onions, and certain vegetables can affect urine smell. Stronger morning urine after sleeping through the night.', whenToWorry: 'Foul-smelling urine with fever, irritability, or poor feeding (UTI). Very strong ammonia smell with dark urine (dehydration). Persistent unusual odor not related to diet changes. Strong smell with discomfort during urination.' },
    { ageRange: '1-3 years', normalVariation: 'Urine odor varies with diet, hydration, and time in diaper. Toddler diet changes frequently affect urine smell. First morning urine may smell stronger.', whenToWorry: 'Persistently foul-smelling urine (recurrent UTIs). Strong smell with urinary frequency or crying during urination. Very strong smell with dark urine and reduced wet diapers. Unusual sweetness to urine (diabetes concern if with increased thirst/urination).' },
  ],
  urgencyLevels: {
    emergency: [
      'Strong-smelling urine with high fever and baby under 3 months appearing unwell',
      'Unusual sweet/burnt smell in newborn with vomiting, poor feeding, and lethargy (metabolic crisis)',
      'Strong urine with severe dehydration signs (sunken fontanelle, no tears, unresponsive)',
    ],
    urgent: [
      'Foul-smelling urine with unexplained fever in infant under 12 months',
      'Strong smell with fewer than 4 wet diapers in 24 hours',
      'Foul urine with visible blood or cloudy appearance',
      'Strong sweet smell with excessive thirst and urination (diabetes)',
    ],
    sameDay: [
      'Persistently foul-smelling urine (more than 2-3 days) without clear dietary cause',
      'Strong urine smell with signs of discomfort during urination',
      'Recurrent episodes of strong-smelling urine',
      'Strong smell with mild fever in older infant/toddler',
    ],
    monitor: [
      'Stronger morning urine that normalizes with daytime hydration',
      'Urine smell change clearly related to new food introduction',
      'Mild odor from concentrated urine during mild illness (improving with fluids)',
      'Ammonia smell from diaper left on too long (normal bacterial breakdown)',
    ],
  },
  homeRemedies: [
    'Increase fluid intake: more frequent feeds for babies, water between meals for toddlers',
    'Change diapers more frequently — stale urine develops ammonia smell from bacterial breakdown',
    'Note any new foods that could be causing the smell (asparagus, garlic, onions, fish)',
    'Check if vitamins or supplements coincide with the smell change',
    'Monitor for other UTI signs: fever, crying during urination, cloudy urine, irritability, off feeds',
    'If UTI suspected with fever: do not delay medical evaluation — young infants need urine testing',
    'Keep genital area clean — wipe front-to-back for girls at diaper changes',
    'Ensure adequate hydration: at least 6 wet diapers per day in infants',
    'Save a diaper with concerning urine to show the doctor or bring a urine sample',
  ],
  relatedSymptomSlugs: ['dark-urine', 'blood-in-urine', 'diaper-crystals', 'irritability'],
  relatedIllnessSlugs: ['urinary-tract-infection', 'dehydration'],
  relatedConcernSlugs: ['baby-urine-smells', 'baby-uti-signs', 'baby-dehydrated'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Urinary Tract Infections in Young Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Urinary-Tract-Infections-in-Young-Children.aspx' },
    { org: 'NICE', citation: 'National Institute for Health and Care Excellence. Urinary tract infection in under 16s (NG224).', url: 'https://www.nice.org.uk/guidance/ng224' },
    { org: 'NHS', citation: 'NHS. Urinary tract infections in children.', url: 'https://www.nhs.uk/conditions/urinary-tract-infections-utis/symptoms/' },
  ],
};
