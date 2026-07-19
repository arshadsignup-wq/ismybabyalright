import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'unequal-pupils',
  title: 'Unequal Pupils (Anisocoria) in Babies',
  bodySystem: 'eyes',
  description: 'Anisocoria (unequal pupil size) occurs when one pupil is larger or smaller than the other. In about 20% of the population, mild anisocoria (less than 1mm difference) is a normal variant called physiological anisocoria. However, new-onset or significant pupil asymmetry, especially after head injury or with other neurological symptoms, requires urgent medical evaluation.',
  possibleCauses: [
    { cause: 'Physiological anisocoria (normal variant, less than 1mm difference)', likelihood: 'common' },
    { cause: 'Viral illness causing temporary pupil asymmetry', likelihood: 'uncommon' },
    { cause: 'Eye inflammation (uveitis, iritis)', likelihood: 'uncommon' },
    { cause: 'Head injury with increased intracranial pressure', likelihood: 'rare' },
    { cause: 'Horner syndrome (damage to sympathetic nerves)', likelihood: 'rare' },
    { cause: 'Third nerve palsy', likelihood: 'rare' },
    { cause: 'Pharmacological dilation (accidental exposure to medication)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Pupils should be equal and reactive to light from birth. Mild difference (less than 1mm) that is consistent in all lighting may be physiological.', whenToWorry: 'Significant pupil asymmetry at birth (possible Horner syndrome from birth trauma), one pupil that does not react to light, drooping eyelid with small pupil (Horner triad), or large unreactive pupil.' },
    { ageRange: '3-12 months', normalVariation: 'Pupils should be round, equal, and reactive. A consistently small difference (less than 1mm) in both light and dark conditions is usually physiological.', whenToWorry: 'New onset unequal pupils, pupil asymmetry after head bump or fall, one pupil dilated and not reacting, associated eye movement problems, or drooping eyelid.' },
    { ageRange: '1-3 years', normalVariation: 'Same as older infants. A longstanding mild difference that has been noted before and does not change is usually benign.', whenToWorry: 'New asymmetry after head injury, asymmetry with headache/vomiting/lethargy, large dilated pupil after contact with plants or medications, or associated vision changes.' },
  ],
  urgencyLevels: {
    emergency: [
      'Unequal pupils after head injury with drowsiness or vomiting',
      'One large fixed (non-reactive) pupil with altered consciousness',
      'Unequal pupils with seizure or sudden neurological changes',
      'Rapidly progressive pupil dilation with headache signs (inconsolable crying)',
    ],
    urgent: [
      'New onset anisocoria not present before',
      'Unequal pupils with drooping eyelid (possible Horner syndrome)',
      'Unequal pupils with eye pain or light sensitivity',
      'Anisocoria noted after any head injury even without other symptoms',
    ],
    sameDay: [
      'Unequal pupils noticed by parent without other symptoms',
      'Mild anisocoria with a cold or viral illness',
      'Asymmetry noticed in photos but baby seems well',
    ],
    monitor: [
      'Known physiological anisocoria previously documented by doctor',
      'Very mild (less than 1mm) long-standing difference with normal exam',
      'Transient asymmetry that resolves within minutes',
    ],
  },
  homeRemedies: [
    'Check if the asymmetry is the same in bright light and dim light (use a flashlight)',
    'Look at old photos to see if the asymmetry has always been present',
    'Check if both pupils constrict when you shine a light in them',
    'Note if there is a drooping eyelid on the side of the smaller pupil',
    'Consider whether baby had contact with any eye drops, medication patches, or plants',
    'Do not delay seeking medical evaluation if asymmetry is new or concerning',
    'There are no home remedies for anisocoria—it requires professional evaluation to determine the cause',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['head-injury', 'eye-not-tracking', 'drooping-eyelid'],
  relatedIllnessSlugs: [],
  relatedConcernSlugs: ['baby-unequal-pupils', 'baby-eyes-different-sizes'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Palpalian CS. The Pediatric Eye Exam. Pediatrics in Review. 2019;40(6):286-298.', url: 'https://publications.aap.org/pediatricsinreview' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Anisocoria - Symptoms and causes.', url: 'https://www.mayoclinic.org/symptoms/anisocoria/basics/definition/sym-20050738' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Red Flags in the Eye Exam. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/default.aspx' },
  ],
};
