import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-conjunctivitis-sticky-eye',
  title: 'Eye Infection and Discharge in Newborns (Conjunctivitis)',
  category: 'medical',
  searchTerms: ['newborn sticky eye', 'baby eye discharge', 'newborn conjunctivitis', 'baby yellow eye discharge', 'newborn pink eye', 'baby eye infection', 'ophthalmia neonatorum', 'newborn eye pus', 'baby crusty eyes', 'newborn red eye discharge'],
  quickAnswer:
    'Eye discharge in newborns is common and can be caused by a blocked tear duct (most frequent), chemical irritation from eye prophylaxis, or infection. While most sticky eyes are harmless, any significant redness, swelling, or pus-like discharge in the first month should be evaluated promptly, as certain infections can damage the eye.',
  byAge: [
    { ageRange: '0-1 month', context: 'Eye discharge in the first few days can be from the erythromycin eye ointment given at birth (chemical conjunctivitis), which is mild and self-resolving. More concerning causes include bacterial infections (such as gonorrhea or chlamydia, transmitted during delivery), which can cause serious eye damage if untreated. Gonococcal conjunctivitis typically presents within 2-5 days with severe swelling and thick pus. Chlamydial conjunctivitis usually appears at 5-14 days. A blocked tear duct causes watery, sometimes slightly yellowish discharge without significant redness or swelling. Any newborn with significant eye discharge, redness, or swelling in the first month should be seen promptly.' },
    { ageRange: '1-3 months', context: 'A blocked tear duct remains the most common cause of persistent eye discharge. The discharge is typically clear or slightly yellow, accumulates during sleep, and the eye itself is not significantly red. Gentle nasolacrimal massage and warm compresses can help. If the eye becomes red, swollen, or the discharge becomes thick and green, infection may have developed and needs evaluation.' },
    { ageRange: '3-6 months', context: 'Blocked tear duct discharge may continue. Continue conservative management with massage. If symptoms worsen or the area near the inner corner of the eye becomes red and swollen (dacryocystitis), see your pediatrician promptly.' },
    { ageRange: '6-12 months', context: 'Most blocked tear ducts resolve by 12 months. If persistent, a simple probing procedure by a pediatric ophthalmologist can open the duct. Acute eye infections at any age should be evaluated.' },
  ],
  whenNormal: ['Mild, watery or slightly yellowish discharge from one or both eyes with clear whites', 'Crusting on eyelashes after sleep that is easily cleaned', 'Mild discharge following erythromycin eye ointment at birth that resolves in 1-2 days', 'Blocked tear duct symptoms that improve with gentle massage'],
  whenToMention: ['Persistent eye discharge that does not improve with massage and cleaning', 'Eye discharge that becomes thicker, more yellow, or green', 'One eye seems consistently more affected than the other'],
  whenToActNow: ['Significant eye swelling, redness, and thick pus-like discharge in the first month of life, which could indicate a serious bacterial infection requiring urgent antibiotic treatment', 'Swollen, red area near the inner corner of the eye (possible dacryocystitis) with fever'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Eye Infections in Newborns. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Ophthalmia Neonatorum Prevention.', url: 'https://www.cdc.gov/std/treatment-guidelines/ophthalmia-neonatorum.htm' },
  ],
  relatedConcernSlugs: ['newborn-watery-eyes', 'newborn-eye-discharge-blocked-duct', 'newborn-eye-prophylaxis-concerns'],
};
