import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'ear-pain',
  title: 'Ear Pain (Otalgia) in Babies',
  bodySystem: 'ears',
  description: 'Ear pain in babies and toddlers is one of the most common reasons for pediatric visits. Since babies cannot verbalize pain, signs include crying (especially when lying flat), pulling at ears, difficulty sleeping, refusing to feed, and irritability. Acute otitis media (middle ear infection) is the most common cause, often following an upper respiratory infection. Not all ear pain indicates infection—teething, referred pain from throat, and changes in pressure can also cause ear discomfort.',
  possibleCauses: [
    { cause: 'Acute otitis media (middle ear infection)', likelihood: 'common' },
    { cause: 'Teething (referred pain to ear area)', likelihood: 'common' },
    { cause: 'Upper respiratory infection with eustachian tube congestion', likelihood: 'common' },
    { cause: 'Otitis externa (outer ear infection/swimmer\'s ear)', likelihood: 'uncommon' },
    { cause: 'Referred pain from tonsillitis or pharyngitis', likelihood: 'uncommon' },
    { cause: 'Foreign body in ear canal', likelihood: 'rare' },
    { cause: 'Mastoiditis (infection of bone behind ear)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Babies cannot report ear pain directly. Fussiness has many causes at this age. Ear infections are less common before 6 months unless there are risk factors (daycare, secondhand smoke, bottle-propping).', whenToWorry: 'Fever with inconsolable crying, refusal to feed or pulling away from breast/bottle on one side, extreme fussiness when laid flat, or discharge from ear.' },
    { ageRange: '6-24 months', normalVariation: 'Peak age for ear infections due to eustachian tube anatomy. Teething pain may also radiate to ears. Some fussiness and ear touching is normal.', whenToWorry: 'Fever above 102.2F (39C) with significant irritability, waking at night screaming, not improved with acetaminophen, pulling at one ear with crying, or ear pain following a cold.' },
    { ageRange: '2-3 years', normalVariation: 'Children can begin to point to or report ear pain. Ear infections remain common through preschool years. Pain with swallowing may be throat-related.', whenToWorry: 'Severe pain not relieved by pain medication, swelling or redness behind the ear, high fever with ear pain, hearing changes, or ear pain with facial weakness.' },
  ],
  urgencyLevels: {
    emergency: [
      'Ear pain with high fever, stiff neck, and lethargy (possible meningitis)',
      'Swelling and redness behind the ear pushing ear forward (possible mastoiditis)',
      'Ear pain with facial droop or paralysis on the same side',
      'Severe ear pain after trauma with bleeding',
    ],
    urgent: [
      'Ear pain with fever above 102.2F (39C) in infant under 6 months',
      'Severe pain not relieved by acetaminophen/ibuprofen',
      'Ear pain with discharge and spreading redness',
      'Ear pain with significant swelling behind the ear',
    ],
    sameDay: [
      'Ear pain with moderate fever and cold symptoms (likely ear infection)',
      'Ear pain lasting more than 24 hours',
      'Recurrent episodes of ear pain',
      'Ear pain with decreased hearing',
    ],
    monitor: [
      'Mild fussiness and ear touching during teething',
      'Brief ear pain that resolves on its own within hours',
      'Mild ear discomfort during a cold without fever',
      'Ear pain during air travel that resolves after landing',
    ],
  },
  homeRemedies: [
    'Give age-appropriate pain relief: acetaminophen (any age) or ibuprofen (6 months+)',
    'Apply a warm compress or warm washcloth over the affected ear for comfort',
    'Hold baby upright or elevate the head slightly to reduce pressure',
    'Offer more frequent breastfeeding or bottle feeding; swallowing can help equalize pressure',
    'Use saline nose drops and gentle suction to clear nasal congestion',
    'Do not put anything in the ear canal (no oils, drops, or cotton swabs)',
    'Keep baby hydrated to help thin mucus',
    'Avoid exposing baby to secondhand smoke, which increases ear infection risk',
  ],
  triageSlug: 'ear-pain',
  relatedSymptomSlugs: ['ear-pulling', 'ear-discharge', 'fever'],
  relatedIllnessSlugs: ['ear-infection', 'mastoiditis'],
  relatedConcernSlugs: ['baby-ear-infection', 'baby-ear-pain', 'toddler-ear-hurts'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Lieberthal AS, et al. The Diagnosis and Management of Acute Otitis Media. Pediatrics. 2013;131(3):e964-e999.', url: 'https://publications.aap.org/pediatrics/article/131/3/e964/30912/The-Diagnosis-and-Management-of-Acute-Otitis-Media' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Ear Pain. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Earaches.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Ear infection (middle ear) - Diagnosis and treatment.', url: 'https://www.mayoclinic.org/diseases-conditions/ear-infections/diagnosis-treatment/drc-20351622' },
  ],
};
