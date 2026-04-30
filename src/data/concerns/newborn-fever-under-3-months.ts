import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-fever-under-3-months',
  title: 'Fever in a Baby Under 3 Months Old',
  category: 'medical',
  searchTerms: ['newborn fever', 'baby under 3 months fever', 'newborn temperature high', 'baby 2 month fever', 'infant fever emergency', 'newborn 100.4 fever', 'baby fever under 3 months', 'newborn fever when to go to ER', 'baby 1 month fever', 'infant fever serious'],
  quickAnswer: 'A fever in a baby under 3 months old (temperature of 100.4 degrees F / 38 degrees C or higher taken rectally) is always a medical emergency. Go to the emergency room immediately, regardless of how well your baby appears. Young babies\' immune systems cannot fight infections as effectively as older children, and a fever could indicate a serious bacterial infection (urinary tract infection, bacteremia, or meningitis) that needs urgent treatment. Do NOT wait to see if the fever goes down. Do NOT give fever medication and stay home - go to the ER first.',
  byAge: [
    { ageRange: '0-12 months', context: 'For babies under 28 days old, a fever is treated as a potential medical emergency requiring hospitalization for blood tests, urine tests, and often a lumbar puncture (spinal tap) to rule out meningitis. Antibiotics are typically started immediately while awaiting test results. For babies 29 days to 3 months, fever evaluation typically includes blood tests and urine tests, with the decision about hospitalization and lumbar puncture based on the results and how the baby looks. After 3 months, fever is still taken seriously but is less likely to indicate a severe bacterial infection. Always take a rectal temperature for the most accurate reading in young babies - ear, forehead, and axillary (armpit) temperatures are less reliable.' },
  ],
  whenNormal: ['There is no "normal" fever in a baby under 3 months - all fevers in this age group require immediate medical evaluation'],
  whenToMention: ['A fever in a baby under 3 months always requires emergency evaluation, not a routine office call'],
  whenToActNow: ['ANY temperature of 100.4 degrees F (38 degrees C) or higher (taken rectally) in a baby under 3 months - go to the ER immediately', 'A temperature below 97 degrees F (36.1 degrees C) in a newborn can also be concerning and should be evaluated', 'Your newborn is feeding poorly, unusually sleepy, irritable, or "just not right" even without a confirmed fever', 'Your baby under 3 months has been exposed to someone with a known infection and develops any symptoms'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-high-fever-over-104', 'baby-ibuprofen-dosing-safety', 'febrile-seizures', 'baby-cold-vs-flu-difference'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fever in Newborns. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-and-Your-Baby.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Evaluation of Febrile Infants. Pediatrics.', url: 'https://publications.aap.org/pediatrics/article/148/2/e2021052228/179783/Evaluation-and-Management-of-Well-Appearing-Febrile' },
    { org: 'NIH', citation: 'National Library of Medicine. Fever in Neonates. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK534793/' },
  ],
};
