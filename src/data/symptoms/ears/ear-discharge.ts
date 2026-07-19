import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'ear-discharge',
  title: 'Ear Discharge (Otorrhea) in Babies',
  bodySystem: 'ears',
  description: 'Ear discharge (otorrhea) in babies can range from thin clear fluid to thick pus-like material. The most common cause is a ruptured ear infection (acute otitis media with perforation), where pressure from infected fluid behind the eardrum causes it to burst, releasing discharge. While the rupture often brings pain relief, ear discharge always warrants medical evaluation to determine the cause and guide treatment.',
  possibleCauses: [
    { cause: 'Ruptured acute otitis media (ear infection with perforated eardrum)', likelihood: 'common' },
    { cause: 'Otitis externa (swimmer\'s ear / outer ear infection)', likelihood: 'uncommon' },
    { cause: 'Ear tube (tympanostomy tube) drainage', likelihood: 'uncommon' },
    { cause: 'Chronic suppurative otitis media', likelihood: 'uncommon' },
    { cause: 'Cholesteatoma (abnormal skin growth in middle ear)', likelihood: 'rare' },
    { cause: 'Cerebrospinal fluid leak (clear watery, after head trauma)', likelihood: 'rare' },
    { cause: 'Foreign body in ear canal causing infection', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Very small amounts of dried wax near the ear opening are normal. No true discharge should be coming from a healthy infant ear.', whenToWorry: 'Any discharge from the ear at this age should be evaluated. Pus-like discharge with fever suggests ruptured ear infection. Clear or blood-tinged fluid after birth can occur but needs assessment.' },
    { ageRange: '6-24 months', normalVariation: 'Peak age for ear infections. If baby has ear tubes, small amounts of clear or slightly cloudy drainage from the tubes can be normal temporarily.', whenToWorry: 'Thick yellow or green discharge with fever or fussiness, foul-smelling discharge, bloody discharge, discharge lasting more than 3 days from ear tubes, or recurrent episodes of drainage.' },
    { ageRange: '2-3 years', normalVariation: 'Ear infections remain common. Children with ear tubes may have occasional tube drainage that is typically brief and painless.', whenToWorry: 'Persistent foul-smelling discharge (possible cholesteatoma or chronic infection), discharge with hearing loss, bloody discharge without trauma, or clear watery discharge after head injury.' },
  ],
  urgencyLevels: {
    emergency: [
      'Clear watery ear discharge after a head injury (possible CSF leak)',
      'Ear discharge with high fever, stiff neck, or extreme lethargy',
      'Bloody discharge from ear after significant head trauma',
      'Ear discharge with facial droop on same side',
    ],
    urgent: [
      'Profuse purulent (pus) discharge with high fever in infant under 6 months',
      'Redness and swelling behind the ear with discharge (possible mastoiditis)',
      'Ear discharge with severe pain and hearing loss',
      'Foul-smelling discharge persisting more than 2 weeks',
    ],
    sameDay: [
      'New onset purulent ear discharge with moderate fever in older infant/toddler',
      'Ear tube drainage with fever or significant increase in volume',
      'Discharge with ear pain after swimming',
    ],
    monitor: [
      'Brief minimal drainage from ear tubes without fever or pain',
      'Small amount of dried wax at ear opening',
      'Discharge that occurred once and has stopped with baby acting well',
    ],
  },
  homeRemedies: [
    'Gently clean only the outer ear with a soft cloth—never insert anything into the ear canal',
    'Keep the ear dry; place a cotton ball loosely at ear opening during baths',
    'Hold baby upright or with affected ear down to allow drainage',
    'Do not plug the ear tightly or try to stop drainage from coming out',
    'Use acetaminophen or ibuprofen (if age-appropriate) for pain relief',
    'Apply a warm compress to the outside of the ear for comfort',
    'Keep the ear clean and dry between follow-up visits',
    'Do NOT put any drops in the ear unless prescribed by a doctor',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['ear-pain', 'ear-pulling', 'ear-smell'],
  relatedIllnessSlugs: ['ear-infection', 'swimmers-ear'],
  relatedConcernSlugs: ['baby-ear-draining', 'baby-ear-infection', 'baby-ear-pus'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Lieberthal AS, et al. The Diagnosis and Management of Acute Otitis Media. Pediatrics. 2013;131(3):e964-e999.', url: 'https://publications.aap.org/pediatrics/article/131/3/e964/30912/The-Diagnosis-and-Management-of-Acute-Otitis-Media' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Middle Ear Infections and Ear Tube Surgery. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Tube-Surgery.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Ruptured eardrum (perforated eardrum) - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/ruptured-eardrum/symptoms-causes/syc-20351879' },
  ],
};
