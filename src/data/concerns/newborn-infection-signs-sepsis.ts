import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-infection-signs-sepsis',
  title: 'Signs of Infection and Sepsis in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn sepsis signs',
    'neonatal infection symptoms',
    'baby blood infection',
    'newborn sepsis warning signs',
    'baby early onset sepsis',
    'newborn infection symptoms',
    'sepsis baby under 3 months',
    'neonatal sepsis treatment',
    'baby bacterial infection signs',
    'newborn bacteremia symptoms',
  ],
  quickAnswer:
    'Neonatal sepsis is a serious bacterial infection in the bloodstream that can develop in the first month of life. Signs are often subtle and can include temperature instability, poor feeding, lethargy, irritability, rapid breathing, and a "just not right" appearance. Neonatal sepsis is a medical emergency requiring immediate antibiotics. Trust your instincts if your newborn seems unwell.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Neonatal sepsis is classified as early-onset (within the first 72 hours, usually from bacteria acquired during delivery) or late-onset (after 72 hours, from environmental or hospital-acquired bacteria). Signs can be subtle and include: temperature instability (fever OR low temperature), poor feeding or refusal to eat, lethargy or excessive sleepiness, irritability, rapid breathing, grunting, apnea (breathing pauses), jaundice, vomiting, abdominal distension, and rash. A key warning sign is when parents say the baby "just doesn\'t seem right." Any suspicion of sepsis requires immediate emergency evaluation with blood cultures and empiric antibiotics while awaiting results.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Infection risk remains elevated in the first 3 months because the immune system is still immature. Late-onset sepsis can occur from urinary tract infections, meningitis, or other bacterial sources. Any fever (100.4F or higher) in a baby under 3 months requires emergency evaluation. Signs of infection at this age are similar to the newborn period.',
    },
    {
      ageRange: '3-6 months',
      context:
        'While the risk of life-threatening bacterial infection decreases somewhat after 3 months, serious infections can still occur. Fever is taken seriously and evaluated, though the approach may be less aggressive than in younger infants depending on how the baby appears.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older infants have a more mature immune system but can still develop serious infections. Signs of illness are usually more apparent at this age. Trust your instincts if your baby seems significantly unwell.',
    },
  ],
  whenNormal: [
    'There are no "normal" signs of sepsis. All concerns about potential infection in a newborn should be taken seriously.',
  ],
  whenToMention: [
    'Your newborn seems slightly off but you cannot pinpoint what is wrong',
    'Feeding seems less vigorous than usual',
    'Your baby is sleepier than normal or more fussy than typical',
  ],
  whenToActNow: [
    'Any fever (100.4F/38C or higher rectally) in a baby under 3 months old requires emergency evaluation immediately',
    'Baby is lethargic, has a weak cry, refuses to feed, has rapid or labored breathing, or you feel something is "just not right"',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Management of Neonates Born at 35 Weeks or Greater With Suspected or Proven Early-Onset Bacterial Sepsis. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/142/6/e20182894/37522/Management-of-Neonates-Born-at-35-0-7-Weeks',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Neonatal Sepsis. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK531478/',
    },
  ],
  relatedConcernSlugs: ['newborn-fever-under-3-months', 'newborn-group-b-strep-infection', 'when-to-call-pediatrician'],
};
