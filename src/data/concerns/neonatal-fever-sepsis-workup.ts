import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'neonatal-fever-sepsis-workup',
  title: 'Neonatal Fever and Sepsis Workup - What Parents Need to Know',
  category: 'medical',
  searchTerms: [
    'newborn fever sepsis',
    'baby under 28 days fever',
    'neonatal sepsis workup',
    'newborn fever emergency',
    'baby fever 100.4 what to do',
    'neonatal fever lumbar puncture',
    'newborn sepsis signs',
    'baby fever 1 month old',
    'why is newborn fever emergency',
    'sepsis evaluation newborn',
    'neonatal fever blood culture',
  ],
  quickAnswer:
    'A fever of 100.4 degrees F (38 degrees C) or higher in a baby under 60 days old is a medical emergency that requires immediate evaluation, even if the baby appears well. This is because young infants\' immature immune systems cannot effectively localize infections, and serious bacterial infections (including meningitis and sepsis) can present with fever as the only symptom. A standard sepsis workup includes blood tests, urine culture, and often a lumbar puncture (spinal tap). While this is frightening for parents, it is a well-established, evidence-based protocol that saves lives.',
  byAge: [
    {
      ageRange: '0-28 days',
      context:
        'Neonates (babies under 28 days) with fever are at the highest risk for serious bacterial infection, with rates ranging from 7-13%. Current guidelines (AAP 2021) recommend that all febrile neonates undergo a complete sepsis evaluation including blood culture, urinalysis and urine culture, and lumbar puncture for cerebrospinal fluid analysis. Most will be admitted to the hospital and started on IV antibiotics until culture results return (typically 24-48 hours). This approach is necessary because bacterial meningitis can progress rapidly and is difficult to distinguish from a benign viral infection based on appearance alone.',
    },
    {
      ageRange: '29-60 days',
      context:
        'For babies 29-60 days old with fever, the evaluation is similar but some risk stratification is possible. Newer guidelines (AAP 2021) use inflammatory markers, urinalysis, and clinical appearance to determine whether a lumbar puncture is needed and whether the baby can be managed as an outpatient with close follow-up. However, most febrile infants in this age group will still require blood and urine cultures and at minimum an observation period. Parents should always bring their infant to the emergency room, not wait for a pediatrician appointment.',
    },
    {
      ageRange: '2-3 months',
      context:
        'After 60 days, the risk of serious bacterial infection with fever decreases but does not disappear. Your pediatrician will assess your baby based on appearance, temperature, urinalysis, and blood markers to determine the level of evaluation needed. Well-appearing babies over 60 days with low-grade fevers and clear viral symptoms may be managed with close outpatient follow-up. However, any baby under 3 months with a fever should still be evaluated promptly. Never give fever-reducing medication to mask a fever before a medical evaluation in this age group.',
    },
  ],
  whenNormal: [
    'Your baby is over 3 months old and has a mild fever with clear cold symptoms (runny nose, cough) and is feeding well.',
    'Your baby was evaluated for fever, cultures were negative, and they have recovered.',
    'Your baby feels warm but rectal temperature is below 100.4 degrees F (38 degrees C).',
  ],
  whenToMention: [
    'Your baby is over 3 months old and has a fever that lasts more than 3 days or is above 104 degrees F (40 degrees C).',
    'Your baby had a fever evaluation and you have questions about the results or follow-up plan.',
    'Your baby was recently hospitalized for a fever workup and you want to understand what was done and why.',
  ],
  whenToActNow: [
    'Your baby under 60 days old has a rectal temperature of 100.4 degrees F (38 degrees C) or higher - go to the emergency room immediately, regardless of how well the baby appears.',
    'Your baby of any age has a fever with lethargy, poor feeding, mottled or pale skin, irritability that cannot be soothed, or a bulging fontanelle.',
    'Your baby has a fever and a rash that does not blanch when pressed (petechiae or purpura), which can indicate meningococcemia.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'persistent-fever-baby',
    'neonatal-seizure-signs-parents',
    'newborn-jaundice-kernicterus-prevention',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline: Evaluation and Management of Well-Appearing Febrile Infants 8-60 Days Old. Pediatrics, 2021.',
      url: 'https://publications.aap.org/pediatrics/article/148/2/e2021052228/179783/Evaluation-and-Management-of-Well-Appearing-Febrile',
    },
    {
      org: 'CDC',
      citation:
        'CDC. Group B Strep and Pregnancy: Newborn Infection Prevention.',
      url: 'https://www.cdc.gov/groupbstrep/about/newborns-infants.html',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Neonatal Sepsis: Evaluation and Management. Clinics in Perinatology, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/34353580/',
    },
  ],
};
