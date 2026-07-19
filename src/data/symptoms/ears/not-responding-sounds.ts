import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'not-responding-sounds',
  title: 'Not Responding to Sounds (Hearing Concerns) in Babies',
  bodySystem: 'ears',
  description: 'Hearing is critical for language development, and early detection of hearing loss leads to significantly better outcomes. All newborns should be screened before hospital discharge. Babies should startle to loud sounds from birth and progressively respond to softer sounds and voices. Not responding to sounds may indicate temporary hearing loss (from ear infections or fluid), permanent hearing loss, or sometimes developmental differences unrelated to hearing.',
  possibleCauses: [
    { cause: 'Middle ear fluid (otitis media with effusion) causing temporary conductive loss', likelihood: 'common' },
    { cause: 'Deep sleep or being focused on another activity', likelihood: 'common' },
    { cause: 'Chronic ear infections with persistent fluid', likelihood: 'uncommon' },
    { cause: 'Congenital sensorineural hearing loss', likelihood: 'uncommon' },
    { cause: 'Auditory neuropathy spectrum disorder', likelihood: 'rare' },
    { cause: 'Syndromic hearing loss (part of a genetic syndrome)', likelihood: 'rare' },
    { cause: 'Ototoxic medication exposure', likelihood: 'rare' },
    { cause: 'Autism spectrum disorder (may not respond socially but hearing is intact)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Newborns startle to loud sounds (Moro reflex), quiet to familiar voices, and may turn toward sounds. They may habituate (stop responding) to repeated sounds—this is normal.', whenToWorry: 'No startle to loud sounds, does not quiet or respond to parent voice, failed newborn hearing screen, or no response to any sounds by 1 month.' },
    { ageRange: '3-6 months', normalVariation: 'Baby should turn toward sounds, respond to voice by cooing or smiling, and startle at unexpected loud noises. May look for sound source.', whenToWorry: 'Does not turn toward sounds, no response to name by 6 months, no babbling beginning by 6 months, or stops responding to sounds after previously responding.' },
    { ageRange: '6-12 months', normalVariation: 'Baby should respond to name, turn to locate sounds from different directions, babble with varied consonant sounds, and respond to simple words like "no" or "bye-bye."', whenToWorry: 'Does not respond to name consistently, no consonant babbling (ba, da, ga) by 9 months, does not turn to locate sounds, only responds when seeing your face (lip-reading), or speech/babbling not progressing.' },
    { ageRange: '1-3 years', normalVariation: 'Should follow simple commands, point to body parts on request, have increasing vocabulary, and respond to being called from another room.', whenToWorry: 'Significant speech delay, needs TV volume very loud, does not follow simple directions, only responds when facing you, or regression in language skills.' },
  ],
  urgencyLevels: {
    emergency: [
      'Sudden complete hearing loss after head trauma',
      'Not responding to sounds with altered consciousness or neurological symptoms',
    ],
    urgent: [
      'Failed newborn hearing screen (follow-up needed within 1 month)',
      'Sudden loss of previously normal hearing responses',
      'Hearing loss with high fever, severe ear pain, or meningitis symptoms',
    ],
    sameDay: [
      'Concern about hearing after recurrent ear infections',
      'Not responding to name by 9-12 months',
      'No babbling by 9 months or speech significantly delayed',
    ],
    monitor: [
      'Selective hearing (responds to interesting sounds but not commands)—common in toddlers',
      'Mild decreased responsiveness during a cold or ear infection',
      'Baby who passed hearing screen but parent has intermittent concerns',
    ],
  },
  homeRemedies: [
    'Test hearing informally: make sounds out of baby\'s line of sight and observe for turning',
    'Clap, ring a bell, or crinkle paper behind baby to check for response',
    'Talk to your baby frequently—narrate activities, sing songs, read aloud',
    'Reduce background noise when speaking to baby so they can focus on your voice',
    'If baby had ear infections, recheck hearing 4-6 weeks after infection clears',
    'Keep all audiology follow-up appointments if hearing screen was abnormal',
    'Do not assume baby is "just being stubborn"—always have hearing professionally tested if concerned',
    'Contact Early Intervention services if hearing loss is confirmed (the sooner the better)',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['ear-pain', 'ear-discharge', 'speech-delay'],
  relatedIllnessSlugs: ['ear-infection', 'otitis-media-with-effusion'],
  relatedConcernSlugs: ['baby-not-hearing', 'baby-not-responding-name', 'baby-hearing-test-failed'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Joint Committee on Infant Hearing. Year 2019 Position Statement: Principles and Guidelines for Early Hearing Detection and Intervention Programs. Pediatrics. 2019;144(4):e20192115.', url: 'https://publications.aap.org/pediatrics/article/144/4/e20192115/38050' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Hearing Loss in Children: Screening and Diagnosis.', url: 'https://www.cdc.gov/hearing-loss-children/screening/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hearing Assessment in Infants and Children: Recommendations Beyond Neonatal Screening. Pediatrics. 2003;111(2):436-440.', url: 'https://publications.aap.org/pediatrics/article/111/2/436/28587' },
  ],
};
