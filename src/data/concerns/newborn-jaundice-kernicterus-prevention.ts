import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-jaundice-kernicterus-prevention',
  title: 'Newborn Jaundice and Kernicterus Prevention',
  category: 'medical',
  searchTerms: [
    'newborn jaundice',
    'baby turning yellow',
    'jaundice treatment baby',
    'bilirubin level baby',
    'phototherapy baby jaundice',
    'kernicterus prevention',
    'jaundice breastfeeding baby',
    'baby yellow skin and eyes',
    'jaundice dangerous level baby',
    'jaundice when to worry newborn',
    'newborn jaundice how long',
    'bili lights baby',
  ],
  quickAnswer:
    'Newborn jaundice, a yellowing of the skin and eyes caused by elevated bilirubin levels, affects approximately 60% of full-term and 80% of preterm newborns. Most cases are physiologic (normal) and resolve on their own within 1-2 weeks with adequate feeding. However, severely elevated bilirubin that is not treated can cause kernicterus, a form of permanent brain damage. Kernicterus is preventable with proper monitoring and timely phototherapy or, rarely, exchange transfusion. All newborns should be screened for jaundice before hospital discharge, and parents should watch for warning signs in the first 2 weeks of life.',
  byAge: [
    {
      ageRange: '0-3 days',
      context:
        'Jaundice appearing within the first 24 hours of life is considered pathologic and requires immediate investigation, as it may indicate blood type incompatibility (ABO or Rh), red blood cell disorders, or infection. All newborns should have a bilirubin level checked (via blood test or transcutaneous meter) before hospital discharge, and the result should be plotted on a nomogram to assess risk. Risk factors for severe jaundice include prematurity, blood type mismatch with mother, bruising from delivery, Asian or Mediterranean heritage, exclusive breastfeeding with poor intake, and a sibling who had severe jaundice.',
    },
    {
      ageRange: '3-7 days',
      context:
        'Physiologic jaundice typically peaks between days 3-5 in term infants. This is the most critical window for monitoring, especially if the baby was discharged from the hospital before 48 hours. Signs to watch for include yellowing spreading from the face down to the chest, abdomen, and legs (advancing jaundice), sleepiness and difficulty waking to feed, poor feeding, dark urine, and pale stools. Phototherapy (light treatment) is the standard treatment when bilirubin levels rise above thresholds based on the baby\'s age in hours and risk factors. Frequent feeding (8-12 times per day) helps lower bilirubin by promoting stooling.',
    },
    {
      ageRange: '1-3 weeks',
      context:
        'Most physiologic jaundice resolves by 2 weeks in term infants. Breast milk jaundice, a benign condition in well-appearing breastfed babies, can cause mildly elevated bilirubin lasting up to 12 weeks. If jaundice persists beyond 2 weeks, your pediatrician should check bilirubin levels and may evaluate for liver conditions such as biliary atresia, which requires early surgical intervention. Signs of biliary atresia include persistent jaundice with pale or clay-colored stools and dark urine. Early detection and treatment of biliary atresia (before 60 days of life) dramatically improves outcomes.',
    },
  ],
  whenNormal: [
    'Your baby has mild yellowing of the face and upper chest that is improving, is feeding well, and has regular wet and dirty diapers.',
    'Your baby\'s bilirubin level was checked and is within normal range for their age in hours.',
    'Jaundice is resolving by 2 weeks of age in a well-appearing baby who is gaining weight.',
  ],
  whenToMention: [
    'Your baby appears more yellow than at the last check, especially if the yellowing extends to the abdomen or legs.',
    'Your baby is sleepier than usual, feeding less than 8 times in 24 hours, or has fewer wet diapers.',
    'Jaundice persists beyond 2 weeks of age and your pediatrician has not yet checked a bilirubin level.',
    'Your baby has risk factors for severe jaundice (prematurity, blood type incompatibility, sibling with jaundice).',
  ],
  whenToActNow: [
    'Your baby is extremely yellow, lethargic, difficult to wake, or refusing to feed - this could indicate dangerously high bilirubin requiring emergency treatment.',
    'Your baby has a high-pitched cry, arching of the back, or abnormal eye movements, which are signs of acute bilirubin encephalopathy requiring immediate intervention.',
    'Your baby has pale or white stools with persistent jaundice, which may indicate biliary atresia requiring urgent surgical evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'neonatal-fever-sepsis-workup',
    'neonatal-seizure-signs-parents',
    'blood-in-diaper-newborn',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline: Management of Hyperbilirubinemia in the Newborn Infant. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/3/e2022058859/188443/Clinical-Practice-Guideline-Revision-Management-of',
    },
    {
      org: 'CDC',
      citation:
        'CDC. Jaundice and Kernicterus: What Parents Need to Know.',
      url: 'https://www.cdc.gov/ncbddd/jaundice/index.html',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Neonatal Hyperbilirubinemia. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532930/',
    },
  ],
};
